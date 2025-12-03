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

// 🎯 KOZ ARİF SORULARI (10 Örnek Soru)
export const KOZ_ARIF_QUESTIONS: KozArifQuestion[] = [
  {
    id: 1,
    question: "Grup adını belirleyen batak oyununda arifin eline bilinçli dizilen koz sayısı kaçtır",
    options: ["5", "6", "7", "8"],
    correct: 3,
    category: "Koz Arif",
    difficulty: "Kolay",
    explanation: "Gölge hiç yer tutmaz!"
  },
  {
    id: 2,
    question: "Volkan'ın bölüm arkadaşı Hollanda vatandaşı Erdem'e 2017 yılında her ay hollanda hükümeti tarafından verilen burs miktarı ne kadardı",
    options: ["100", "150", "200", "300"],
    correct: 3,
    category: "Koz Arif",
    difficulty: "Kolay",
    explanation: "Ateş hiç su içmez!"
  },
  {
    id: 3,
    question: "Trabzonspor kulübünün kalan belirli maç için açıkladığı uygun öğrenci kombinesi kampanyasında Arif kaç maç kala sinirlenip ben bir daha maça gitmem açıklaması yapmıştır",
    options: ["5", "6", "7", "8"],
    correct: 1,
    category: "Koz Arif",
    difficulty: "Kolay",
    explanation: "Dere hiç yürümeyen yol!"
  },
  {
    id: 4,
    question: "Birinci sınıf 2. dönem statik büt sınavları sonucunda Arif kilit ders olması münasebetiyle aldığı not konusunda endişe duymuş ve annesine yaz okulu bakacağını dile getirmiştir. İkili arasında geçen diyalogta anne tarafından kurulan hii yoksa ... mı aldın cümlesindeki not kaçtır",
    options: ["5", "10", "15", "20"],
    correct: 1,
    category: "Koz Arif",
    difficulty: "Kolay",
    explanation: "Saat hiç zaman geçmez, zamanı gösterir!"
  },
  {
    id: 5,
    question: "Dinamik sınavı sonrası herkes soruları tartışırken Sinan gelip sınav çok kolaydı beyler dediği sınavdan kaç puan almıştır?",
    options: ["3", "7", "10", "12"],
    correct: 2,
    category: "Koz Arif",
    difficulty: "Kolay",
    explanation: "Çalışan hiç para kazanmaz, maaş alır!"
  },
  {
    id: 6,
    question: "Furkan 2015 Üniversite sınavında 53 bin sıralama yapıp sonucunun başarısız olduğunu düşünerek sınava tekrar girme kararı almıştır. 2016 yılında sınava tekrar girip KTÜ İnşaata yerleşen Furkan bu sınavda kaç bine girmiştir?",
    options: ["50", "54", "55", "60"],
    correct: 2,
    category: "Koz Arif",
    difficulty: "Kolay",
    explanation: "Kütüphane hiç kitap okumaz, kitapları saklar!"
  },
  {
    id: 7,
    question: "Arif ikinci sınıfın başında kilosundan utanıp tam olarak söyleyemediği kilosu kaçtı?",
    options: ["99", "100", "103", "110"],
    correct: 2,
    category: "Koz Arif",
    difficulty: "Kolay",
    explanation: "Yol hiç gitmez, hep yerinde durur!"
  },
  {
    id: 8,
    question: "Playstation oynama kararı alındıktan sonra Mert'in evinde sabahlama fikri ortaya atılıp müsaitlik durumunu sormadan senin evde oynayabiliriz demek için telefon aramasını kim yapmıştır? ",
    options: ["Furkan", "Volkan", "Sinan", "Berke"],
    correct: 1,
    category: "Koz Arif",
    difficulty: "Kolay",
    explanation: "Gökyüzü hiç yıldız saymaz, yıldızları barındırır!"
  },
  {
    id: 9,
    question: "KTÜ'de herkesin en az 1 kez hoşlandığı yakışıklı çocuk kimdir?",
    options: ["Yücel", "Volkan", "Mert", "Berke"],
    correct: 3,
    category: "Koz Arif",
    difficulty: "Kolay",
    explanation: "Gazete hiç haber vermez, haberleri yayınlar!"
  },
  {
    id: 10,
    question: "Sinan'ın IQ seviyesinin kaç olduğu iddia edilmektedir?",
    options: ["11", "12", "13", "3"],
    correct: 2,
    category: "Koz Arif",
    difficulty: "Kolay",
    explanation: "Kağıt hiç resim çizmez, resim çizilmesine izin verir!"
  }
];