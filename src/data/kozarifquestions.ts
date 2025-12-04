import { CATEGORIES } from './categories';

// 🎯 KOZ ARİF SORU TIPI
export interface KozArifQuestion {
  id: number;
  question: string;
  options: string[];
  correct: number;
  category: string;
  difficulty: 'Kolay' | 'Orta' | 'Zor';
  explanation?: string;
}

// 🎯 KOZ ARİF SORULARI (11 Örnek Soru)
export const KOZ_ARIF_QUESTIONS: KozArifQuestion[] = [
  {
    id: 1,
    question: "Koz Arif grubunun lideri kimdir ve neden 'Koz Arif' lakabı almıştır?",
    options: ["Volkan, ateş gibi olduğu için", "Furkan, akıllı olduğu için", "Arif, batak oyununda kozları iyi kullandığı için", "Sinan, 3 IQ olduğu için"],
    correct: 2,
    category: "Koz Arif",
    difficulty: "Kolay",
    explanation: "Grup adı batak oyunundan geliyor, Koz Arif kozları en iyi kullanan kişi!"
  },
  {
    id: 2,
    question: "Furkan'ın üniversite sınavı macerası neydi?",
    options: ["İlk sınavda 51 bin sıralama yaptı", "İkinci sınavda harita mühendisliğine girdi", "Her iki sınavda da aynı sıralamayı yaptı", "Sınava hiç girmedi"],
    correct: 2,
    category: "Koz Arif",
    difficulty: "Kolay",
    explanation: "Furkan 2015'te 55 bin, 2016'da yine 55 bin sıralama yaptı!"
  },
  {
    id: 3,
    question: "Sinan'ın IQ'su hakkında grupta ne söylenir?",
    options: ["Çok yüksek", "Normal", "3 olduğu iddia edilir", "Ölçülmemiş(mission impossible)"],
    correct: 3,
    category: "Koz Arif",
    difficulty: "Kolay",
    explanation: "Grup şakası olarak Sinan'ın IQ'su 13 olarak bilinir!"
  },
  {
    id: 4,
    question: "Berke'nin en dikkat çekici özelliği nedir?",
    options: ["Yakışıklı olmak", "Çok konuşmak", "Amksiyete krizleri geçirmesi", "Spor yapmak"],
    correct: 0,
    category: "Koz Arif",
    difficulty: "Kolay",
    explanation: "Berke KTÜ'nün yakışıklı çocuğu olarak bilinir!"
  },
  {
    id: 5,
    question: "Arif'in Trabzonspor tutkusu ne zaman zirveye çıktı?",
    options: ["Maç kazanılınca", "Trübünde kafasına tokmağı yiyince", "Kombine kampanyasında", "Hiçbir zaman"],
    correct: 1,
    category: "Koz Arif",
    difficulty: "Kolay",
    explanation: "Arif Trabzonspor'un öğrenci kombinesi için sinirlenmişti!"
  },
  {
    id: 6,
    question: "Yek'in gruptaki en önemli özelliği nedir?",
    options: ["Şaka yapmak", "META AI'ye göre grubun en malı olması", "Anksiyete", "Önerilerde bulunmak"],
    correct: 1,
    category: "Koz Arif",
    difficulty: "Kolay",
    explanation: "Yek grupta en çok gülen kişi, her şakaya güler!"
  },
  {
    id: 7,
    question: "Mert'in Playstation tutkusu ne zaman başladı?",
    options: ["Grup kurulunca", "Üniversiteye başlayınca", "Sabahlama kararı alınca", "Hiç oynamadı"],
    correct: 3,
    category: "Koz Arif",
    difficulty: "Kolay",
    explanation: "Mert'in evinde sabahlama fikriyle Playstation tutkusu başladı!"
  },
  {
    id: 8,
    question: "Arif gece saat kaça alarm kurup nakış yapmıştır? (Die Hard)",
    options: ["4", "5", "2", "3"],
    correct: 1,
    category: "Koz Arif",
    difficulty: "Kolay",
    explanation: "Koz Arif grubu 2016 yılında üniversite hayatıyla birlikte kuruldu!"
  },
  {
    id: 9,
    question: "Grup üyelerinin en sevdiği aktivite nedir?",
    options: ["Batak oynamak", "FIFA", "Şaka yapmak", "Hepsi"],
    correct: 3,
    category: "Koz Arif",
    difficulty: "Kolay",
    explanation: "Grup her şeyi sever ama en çok birlikte olmak ve eğlenmek!"  },
  {
    id: 10,
    question: "Yücel'in haftada kaç kez nakış yaptığı bilinmektedir?",
    options: ["2", "3", "4", "7+"],
    correct: 3,
    category: "Koz Arif",
    difficulty: "Kolay",
    explanation: "Yücel grupta en eğlenceli kişi, her anı keyifli hale getirir!"  }
];