import { CATEGORIES } from '../data/categories';
import { QUESTIONS } from '../data/questions';

// 🎯 GÜNLÜK SORULARI SEÇ - TARİH PARAMETRELİ
export const getDailyQuestions = (customDate?: Date): any[] => {
  const today = customDate || new Date();
  
  console.log(`🎯 Günlük Soru Seçimi BAŞLADI:`);
  console.log(`📅 Kullanılan Tarih: ${today.toDateString()}`);
  
  const globalSeed = getGlobalSeed(today);
  console.log(`🌍 Global Seed: ${globalSeed}`);
  
  const dailyQuestions: any[] = [];
  const usedQuestionIds = new Set<number>();
  
  // Her kategoriden 1 soru seç
  Object.values(CATEGORIES).forEach((category, categoryIndex) => {
    const categoryQuestions = QUESTIONS.filter(
      q => q.category === category.name && !usedQuestionIds.has(q.id)
    );
    
    if (categoryQuestions.length > 0) {
      const categorySeed = globalSeed + categoryIndex;
      const selectedIndex = Math.abs(categorySeed) % categoryQuestions.length;
      const selectedQuestion = categoryQuestions[selectedIndex];
      
      dailyQuestions.push(selectedQuestion);
      usedQuestionIds.add(selectedQuestion.id);
      
      console.log(`✅ ${category.name}: ID ${selectedQuestion.id}`);
    }
  });
  
  // Karıştır
  const shuffledQuestions = shuffleWithSeed([...dailyQuestions], globalSeed);
  
  console.log(`📊 Toplam ${shuffledQuestions.length} soru seçildi`);
  console.log(`🎯 Soru IDleri:`, shuffledQuestions.map(q => q.id));
  
  return shuffledQuestions.slice(0, 10);
};

// 🌍 SEED OLUŞTURMA - DÜZELTİLMİŞ
const getGlobalSeed = (date: Date): number => {
  // 🚨 DÜZELTME: Tarihi doğru formatta al
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  const dateString = `${year}-${month}-${day}`; // "2025-11-10"
  
  console.log(`🔢 Seed için tarih: ${dateString}`);
  
  const seed = stringToSeed(dateString);
  console.log(`🔢 String: "${dateString}" -> Seed: ${seed}`);
  return seed;
};

const stringToSeed = (str: string): number => {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = ((hash << 5) - hash) + str.charCodeAt(i);
    hash = hash & hash;
  }
  return hash;
};

const shuffleWithSeed = (array: any[], seed: number): any[] => {
  const shuffled = [...array];
  let currentSeed = seed;
  
  for (let i = shuffled.length - 1; i > 0; i--) {
    currentSeed = (currentSeed * 9301 + 49297) % 233280;
    const j = Math.abs(currentSeed) % (i + 1);
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  
  return shuffled;
};

// 🗓️ TARIH FONKSIYONLARI - DÜZELTİLMİŞ
export const getTodayString = (): string => {
  const today = new Date();
  return today.toDateString();
};