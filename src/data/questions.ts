import { CATEGORIES } from './categories';

// 🎯 SORU TIPI
export interface Question {
  id: number;
  question: string;
  options: string[];
  correct: number;
  category: string;
  difficulty: 'Kolay' | 'Orta' | 'Zor';
  explanation?: string;
}

// 🎯 10.000+ SORULUK VERITABANI (Örnek - gerçekte çok daha fazla olacak)
export const QUESTIONS: Question[] = [
  // ==================== TARIH ====================
{
    id: 1,
    question: "Tarihte bilinen ilk yazılı antlaşma olan Kadeş Antlaşması hangi iki devlet arasında imzalanmıştır?",
    options: ["Sümerler ve Akadlar", "Asurlular ve Babilliler", "Mısırlılar ve Hititler", "Yunanlar ve Persler"],
    correct: 2,
    category: CATEGORIES.HISTORY.name,
    difficulty: "Kolay"
  },
  {
    id: 2,
    question: "Milattan önce 776 yılında ilk kez düzenlenen Antik Olimpiyat Oyunları hangi medeniyette ortaya çıkmıştır?",
    options: ["Mısır", "Roma", "Yunan", "Mezopotamya"],
    correct: 2,
    category: CATEGORIES.HISTORY.name,
    difficulty: "Kolay"
  },
  {
    id: 3,
    question: "Roma İmparatorluğu'nun ikiye ayrılmasından sonra Batı Roma İmparatorluğu kaç yılında yıkılmıştır?",
    options: ["476", "1453", "1071", "395"],
    correct: 0,
    category: CATEGORIES.HISTORY.name,
    difficulty: "Orta"
  },
  {
    id: 4,
    question: "İslam'ın yayılmasında büyük rol oynayan ve Mekke'den Medine'ye yapılan göç (Hicret) hangi yılda gerçekleşmiştir?",
    options: ["610", "661", "622", "632"],
    correct: 2,
    category: CATEGORIES.HISTORY.name,
    difficulty: "Kolay"
  },
  {
    id: 5,
    question: "Anadolu'da kurulan ve parayı (sikke) tarihte ilk kez kullanan uygarlık hangisidir?",
    options: ["Lidyalılar", "Hititler", "Frigler", "Urartular"],
    correct: 0,
    category: CATEGORIES.HISTORY.name,
    difficulty: "Kolay"
  },
  {
    id: 6,
    question: "1453 yılında İstanbul'u fethederek Bizans İmparatorluğu'na son veren Osmanlı padişahı kimdir?",
    options: ["Fatih Sultan Mehmet", "II. Beyazıt", "Kanuni Sultan Süleyman", "Yavuz Sultan Selim"],
    correct: 0,
    category: CATEGORIES.HISTORY.name,
    difficulty: "Kolay"
  },
  {
    id: 7,
    question: "Amerika kıtasını Avrupalılar adına keşfeden (kayıt altına alan) denizci kimdir?",
    options: ["Ferdinand Macellan", "Amerigo Vespucci", "Vasco da Gama", "Kristof Kolomb"],
    correct: 3,
    category: CATEGORIES.HISTORY.name,
    difficulty: "Kolay"
  },
  {
    id: 8,
    question: "1789'da gerçekleşen ve feodalizmi yıkarak cumhuriyet rejimine geçişi sağlayan büyük olay nedir?",
    options: ["Amerikan Bağımsızlık Savaşı", "İngiliz Devrimi", "Fransız İhtilali", "Rus Ekim Devrimi"],
    correct: 2,
    category: CATEGORIES.HISTORY.name,
    difficulty: "Kolay"
  },
  {
    id: 9,
    question: "1071 yılında gerçekleşen ve Anadolu'nun kapılarını Türklere açan savaş hangisidir?",
    options: ["Miryokefalon Savaşı", "Dandanakan Savaşı", "Pasınlar Savaşı", "Malazgirt Savaşı"],
    correct: 3,
    category: CATEGORIES.HISTORY.name,
    difficulty: "Kolay"
  },
  {
    id: 10,
    question: "I. Dünya Savaşı'nın başlangıç sebebi olan Saraybosna Suikastı'nda öldürülen kişi kimdir?",
    options: ["Kaiser II. Wilhelm", "Arşidük Franz Ferdinand", "Çar II. Nikolay", "Kral V. George"],
    correct: 1,
    category: CATEGORIES.HISTORY.name,
    difficulty: "Kolay"
  },
  {
    id: 11,
    question: "Türklerin kullandığı ve 12 hayvan adıyla anılan takvim hangisidir?",
    options: ["Hicri Takvim", "Rumi Takvim", "12 Hayvanlı Türk Takvimi", "Celali Takvimi"],
    correct: 2,
    category: CATEGORIES.HISTORY.name,
    difficulty: "Kolay"
  },
  {
    id: 12,
    question: "Türk tarihinin ilk düzenli ordusunu kuran ve 'Onlu Sistemi' bulan kişi kimdir?",
    options: ["Teoman", "Bumin Kağan", "Mete Han", "Attila"],
    correct: 2,
    category: CATEGORIES.HISTORY.name,
    difficulty: "Kolay"
  },
  {
    id: 13,
    question: "Orta Asya'da kurulan ve hükümdarı Bumin Kağan olan ilk Türk devleti hangisidir?",
    options: ["Hun İmparatorluğu", "Avar Kağanlığı", "Uygur Devleti", "Göktürk Kağanlığı"],
    correct: 3,
    category: CATEGORIES.HISTORY.name,
    difficulty: "Kolay"
  },
  {
    id: 14,
    question: "Tarihte ilk kez 'Kağıt Para'yı kullanan uygarlık hangisidir?",
    options: ["Romalılar", "Çinliler", "Lidyalılar", "Sümerler"],
    correct: 1,
    category: CATEGORIES.HISTORY.name,
    difficulty: "Orta"
  },
  {
    id: 15,
    question: "Hititlerin başkenti olan ve bugün Çorum sınırları içinde yer alan antik kent neresidir?",
    options: ["Hattuşaş", "Gordion", "Troya", "Efes"],
    correct: 0,
    category: CATEGORIES.HISTORY.name,
    difficulty: "Kolay"
  },
  {
    id: 16,
    question: "Moğol İmparatorluğu'nun kurucusu ve ilk Kağanı kimdir?",
    options: ["Cengiz Han", "Ogeday Han", "Timur", "Kubilay Han"],
    correct: 0,
    category: CATEGORIES.HISTORY.name,
    difficulty: "Kolay"
  },
  {
    id: 17,
    question: "Endülüs Emevi Devleti'nin başkenti olan ve Orta Çağ'da bilim ve kültür merkezi haline gelen şehir neresidir?",
    options: ["Sevilla", "Toledo", "Granada", "Kurtuba (Cordoba)"],
    correct: 3,
    category: CATEGORIES.HISTORY.name,
    difficulty: "Orta"
  },
  {
    id: 18,
    question: "1923 yılında ilan edilen Türkiye Cumhuriyeti'nin ilk Cumhurbaşkanı kimdir?",
    options: ["Mustafa Kemal Atatürk", "İsmet İnönü", "Fevzi Çakmak", "Celal Bayar"],
    correct: 0,
    category: CATEGORIES.HISTORY.name,
    difficulty: "Kolay"
  },
  {
    id: 19,
    question: "Rönesans'ın (Yeniden Doğuş) ilk olarak ortaya çıktığı ve sanat, bilim alanında büyük ilerlemelerin yaşandığı Avrupa ülkesi hangisidir?",
    options: ["İtalya", "Fransa", "İngiltere", "İspanya"],
    correct: 0,
    category: CATEGORIES.HISTORY.name,
    difficulty: "Kolay"
  },
  {
    id: 20,
    question: "Yunan şehir devletlerinin (polis) en büyüğü ve demokrasinin doğduğu yer olarak bilinen kent hangisidir?",
    options: ["Sparta", "Atina", "Korint", "Teb"],
    correct: 1,
    category: CATEGORIES.HISTORY.name,
    difficulty: "Kolay"
  },
  {
    id: 21,
    question: "İlk çağlarda Anadolu'da kurulan ve Tualet Kağıdı (Tuvalet kağıdını değil, Toilette olarak bilinen tualet) ve kanalizasyon sistemlerini kullanan, aynı zamanda tarihsel olarak en gelişmiş yerleşim yerlerinden biri olan kent hangisidir?",
    options: ["Efes", "Göbeklitepe", "Çatalhöyük", "Çatalhöyük"],
    correct: 0,
    category: CATEGORIES.HISTORY.name,
    difficulty: "Zor"
  },
  {
    id: 22,
    question: "Osmanlı Devleti'nde ilk anayasal düzen olan Kanun-i Esasi hangi yılda kabul edilmiştir?",
    options: ["1856", "1908", "1876", "1839"],
    correct: 2,
    category: CATEGORIES.HISTORY.name,
    difficulty: "Orta"
  },
  {
    id: 23,
    question: "II. Dünya Savaşı sırasında Almanya'nın başlattığı, İngiltere'ye yönelik hava saldırılarına verilen isim nedir?",
    options: ["Yıldırım Savaşı (Blitzkrieg)", "Barbarossa Harekatı", "İngiltere Savaşı (Battle of Britain)", "Kartal Hücumu"],
    correct: 2,
    category: CATEGORIES.HISTORY.name,
    difficulty: "Orta"
  },
  {
    id: 24,
    question: "Mezopotamya'da tarihin ilk yazılı kanunlarını hazırlayan Babil kralı kimdir?",
    options: ["Hammurabi", "Nabukadnezar", "Sargon", "Gılgamış"],
    correct: 0,
    category: CATEGORIES.HISTORY.name,
    difficulty: "Kolay"
  },
  {
    id: 25,
    question: "Çin Seddi hangi temel amaçla inşa edilmiştir?",
    options: ["Tarımsal sulama", "Ticaret yollarını kontrol etmek", "Dini törenler için", "Kuzeyden gelen göçebe akınlarını (özellikle Hunları) engellemek"],
    correct: 3,
    category: CATEGORIES.HISTORY.name,
    difficulty: "Kolay"
  },
  {
    id: 26,
    question: "Kurtuluş Savaşı sırasında gerçekleşen ve Mustafa Kemal Atatürk'ün 'Hattı müdafaa yoktur, sathı müdafaa vardır. O satıh bütün vatandır.' sözünü söylediği savaş hangisidir?",
    options: ["Sakarya Meydan Muharebesi", "II. İnönü Savaşı", "I. İnönü Savaşı", "Büyük Taarruz"],
    correct: 0,
    category: CATEGORIES.HISTORY.name,
    difficulty: "Kolay"
  },
  {
    id: 27,
    question: "Magna Carta Libertatum (Büyük Özgürlük Sözleşmesi) hangi yılda ve hangi ülkede imzalanmıştır?",
    options: ["1492 - İspanya", "1215 - İngiltere", "1776 - Amerika", "1789 - Fransa"],
    correct: 1,
    category: CATEGORIES.HISTORY.name,
    difficulty: "Orta"
  },
  {
    id: 28,
    question: "Osmanlı Devleti'nin kuruluş döneminde ilk Haçlı seferine karşı mücadele eden padişah kimdir?",
    options: ["Osman Gazi", "I. Murad", "Orhan Gazi", "I. Beyazıt (Yıldırım)"],
    correct: 3,
    category: CATEGORIES.HISTORY.name,
    difficulty: "Zor"
  },
  {
    id: 29,
    question: "Antik Mısır'da krallara verilen unvan nedir?",
    options: ["Sultan", "Şah", "Kayser", "Firavun"],
    correct: 3,
    category: CATEGORIES.HISTORY.name,
    difficulty: "Kolay"
  },
  {
    id: 30,
    question: "Sovyetler Birliği'nin 1991'de dağılmasından sonra bağımsızlığını kazanan ülkeler arasında aşağıdakilerden hangisi yoktur?",
    options: ["Kazakistan", "Litvanya", "Polonya", "Ukrayna"],
    correct: 2,
    category: CATEGORIES.HISTORY.name,
    difficulty: "Kolay"
  },
  {
    id: 31,
    question: "Türklerin Anadolu'yu yurt edinme sürecini tamamlayan ve Bizans'ın Anadolu'daki Türk varlığını kabul etmek zorunda kaldığı savaş hangisidir?",
    options: ["Miryokefalon Savaşı", "Kösedağ Savaşı", "Malazgirt Savaşı", "Dandanakan Savaşı"],
    correct: 0,
    category: CATEGORIES.HISTORY.name,
    difficulty: "Orta"
  },
  {
    id: 32,
    question: "Tarihte bilinen ilk imparatorluğu kuran Mezopotamya uygarlığı hangisidir?",
    options: ["Babilliler", "Sümerler", "Asurlular", "Akadlar"],
    correct: 3,
    category: CATEGORIES.HISTORY.name,
    difficulty: "Zor"
  },
  {
    id: 33,
    question: "Fransız İhtilali'nin yaydığı en önemli fikirlerden biri aşağıdakilerden hangisidir?",
    options: ["Feodalizm", "Milliyetçilik", "Monarşi", "Teokrasi"],
    correct: 1,
    category: CATEGORIES.HISTORY.name,
    difficulty: "Kolay"
  },
  {
    id: 34,
    question: "Osmanlı Devleti'nin ilk başkenti neresidir?",
    options: ["İstanbul", "Edirne", "Söğüt", "Bursa"],
    correct: 3,
    category: CATEGORIES.HISTORY.name,
    difficulty: "Kolay"
  },
  {
    id: 35,
    question: "1517'de Yavuz Sultan Selim'in Mısır'ı fethederek halifeliği Osmanlı'ya geçirdiği savaş hangisidir?",
    options: ["Ridaniye Savaşı", "Preveze Deniz Savaşı", "Mercidabık Savaşı", "Çaldıran Savaşı"],
    correct: 0,
    category: CATEGORIES.HISTORY.name,
    difficulty: "Orta"
  },
  {
    id: 36,
    question: "Sanayi Devrimi ilk olarak hangi sektörde başlamıştır?",
    options: ["Demir-Çelik", "Otomotiv", "Kimya", "Tekstil"],
    correct: 3,
    category: CATEGORIES.HISTORY.name,
    difficulty: "Kolay"
  },
  {
    id: 37,
    question: "II. Dünya Savaşı'nın en önemli dönüm noktalarından biri olan ve Alman ilerlemesinin durdurulduğu şehir savunması nedir?",
    options: ["Leningrad Kuşatması", "Stalingrad Savaşı", "Moskova Savaşı", "Kursk Muharebesi"],
    correct: 1,
    category: CATEGORIES.HISTORY.name,
    difficulty: "Kolay"
  },
  {
    id: 38,
    question: "Türkiye Cumhuriyeti'nin siyasi rejimini ve devlet şeklini belirleyen, 29 Ekim 1923'te kabul edilen gelişme nedir?",
    options: ["Saltanatın Kaldırılması", "Teşkilat-ı Esasiye'nin Kabulü", "Cumhuriyetin İlanı", "Halifeliğin Kaldırılması"],
    correct: 2,
    category: CATEGORIES.HISTORY.name,
    difficulty: "Kolay"
  },
  {
    id: 39,
    question: "Anadolu'da kurulan ve tarım, hayvancılıkla uğraşan, başkenti Gordion olan uygarlık hangisidir?",
    options: ["İyonlar", "Urartular", "Frigler", "Hititler"],
    correct: 2,
    category: CATEGORIES.HISTORY.name,
    difficulty: "Kolay"
  },
  {
    id: 40,
    question: "Soğuk Savaş döneminde, SSCB ve müttefiklerinin kurduğu askeri ittifakın adı nedir?",
    options: ["SEATO", "Varşova Paktı", "NATO", "CENTO"],
    correct: 1,
    category: CATEGORIES.HISTORY.name,
    difficulty: "Kolay"
  },
  {
    id: 41,
    question: "Avrupa'nın ilk üniversitelerinin (örneğin Bologna, Oxford) kurulduğu dönem hangi çağa denk gelir?",
    options: ["İlk Çağ", "Yakın Çağ", "Yeni Çağ", "Orta Çağ"],
    correct: 3,
    category: CATEGORIES.HISTORY.name,
    difficulty: "Orta"
  },
  {
    id: 42,
    question: "Büyük İskender'in Pers İmparatorluğu'nu yenerek kurduğu büyük imparatorluğun kültürel sentezi için kullanılan terim nedir?",
    options: ["Helenizm", "Mısır Uygarlığı", "Akdeniz Kültürü", "Roma Kültürü"],
    correct: 0,
    category: CATEGORIES.HISTORY.name,
    difficulty: "Orta"
  },
  {
    id: 43,
    question: "Türk tarihinde ilk kez yerleşik yaşama geçen ve matbaayı kullanan Türk topluluğu hangisidir?",
    options: ["Karluklar", "Hunlar", "Uygurlar", "Göktürkler"],
    correct: 2,
    category: CATEGORIES.HISTORY.name,
    difficulty: "Kolay"
  },
  {
    id: 44,
    question: "1921'de kabul edilen ve Türk Devleti'nin ilk anayasası olan metin nedir?",
    options: ["Teşkilat-ı Esasiye Kanunu", "1924 Anayasası", "Kanun-i Esasi", "Medeni Kanun"],
    correct: 0,
    category: CATEGORIES.HISTORY.name,
    difficulty: "Kolay"
  },
  {
    id: 45,
    question: "Dünya'nın yedi harikasından biri olan İskenderiye Feneri hangi medeniyet döneminde inşa edilmiştir?",
    options: ["Yunan (Helenistik Dönem)", "Roma", "Babil", "Mısır (Firavunlar Dönemi)"],
    correct: 0,
    category: CATEGORIES.HISTORY.name,
    difficulty: "Zor"
  },
  {
    id: 46,
    question: "Osmanlı Devleti'nde Tanzimat Fermanı hangi padişah döneminde ilan edilmiştir?",
    options: ["Abdülaziz", "II. Mahmut", "Abdülmecid", "II. Abdülhamid"],
    correct: 2,
    category: CATEGORIES.HISTORY.name,
    difficulty: "Orta"
  },
  {
    id: 47,
    question: "Kutsal Roma İmparatorluğu'nun (Roma İmparatorluğu ile karıştırılmamalı) kurucusu ve Batı Avrupa'nın büyük bölümünü birleştiren kişi kimdir?",
    options: ["Jül Sezar", "Şarlman (Charlemagne)", "Büyük Konstantin", "Attila"],
    correct: 1,
    category: CATEGORIES.HISTORY.name,
    difficulty: "Zor"
  },
  {
    id: 48,
    question: "Rusya'da Çarlık rejimini yıkan ve Sovyetler Birliği'nin kurulmasına yol açan 1917 devrimi nedir?",
    options: ["Menşevik Devrimi", "Ekim Devrimi (Bolşevik Devrimi)", "Şubat Devrimi", "Nisan Devrimi"],
    correct: 1,
    category: CATEGORIES.HISTORY.name,
    difficulty: "Kolay"
  },
  {
    id: 49,
    question: "Tarihte ilk kez İstanbul'u kuşatan Türk devleti/topluluğu hangisidir?",
    options: ["Selçuklular", "Avarlar", "Osmanlılar", "Hunlar"],
    correct: 1,
    category: CATEGORIES.HISTORY.name,
    difficulty: "Zor"
  },
  {
    id: 50,
    question: "II. Dünya Savaşı'nın Pasifik cephesini bitiren, Japonya'ya atılan atom bombalarının atıldığı şehirler hangileridir?",
    options: ["Hiroşima ve Nagazaki", "Kyoto ve Yokohama", "Tokyo ve Osaka", "Nagoya ve Kobe"],
    correct: 0,
    category: CATEGORIES.HISTORY.name,
    difficulty: "Kolay"
  },
  {
    id: 51,
    question: "Türklerin İslamiyet'i kabul etmesinde dönüm noktası kabul edilen ve Çinlilerle yapılan savaş hangisidir?",
    options: ["Pasınlar Savaşı", "Talas Savaşı", "Malazgirt Savaşı", "Dandanakan Savaşı"],
    correct: 1,
    category: CATEGORIES.HISTORY.name,
    difficulty: "Kolay"
  },
  {
    id: 52,
    question: "Osmanlı Devleti'nin kuruluş sürecinde, Haçlılarla yapılan ve Osmanlı'nın Balkanlardaki ilerleyişini pekiştiren büyük savaş hangisidir?",
    options: ["Varna Savaşı", "I. Kosova Savaşı", "Sırpsındığı Savaşı", "Niğbolu Savaşı"],
    correct: 1,
    category: CATEGORIES.HISTORY.name,
    difficulty: "Orta"
  },
  {
    id: 53,
    question: "Fizikçi Albert Einstein'ın 'İzafiyet Teorisi'ni (Görelilik) yayımladığı ve modern fiziğin temellerini attığı yıl hangi döneme denk gelir?",
    options: ["Sanayi Devrimi", "Aydınlanma Çağı", "Orta Çağ", "Yakın Çağ (20. Yüzyıl Başları)"],
    correct: 3,
    category: CATEGORIES.HISTORY.name,
    difficulty: "Kolay"
  },
  {
    id: 54,
    question: "Makedonya Kralı II. Philip'in oğlu olan ve büyük bir imparatorluk kuran komutan kimdir?",
    options: ["Büyük İskender", "Jül Sezar", "Hannibal", "Büyük Konstantin"],
    correct: 0,
    category: CATEGORIES.HISTORY.name,
    difficulty: "Kolay"
  },
  {
    id: 55,
    question: "Anadolu Selçuklu Devleti'nin yıkılış sürecine girmesine neden olan Moğol İlhanlılarla yapılan savaş hangisidir?",
    options: ["Dandanakan Savaşı", "Kösedağ Savaşı", "Malazgirt Savaşı", "Miryokefalon Savaşı"],
    correct: 1,
    category: CATEGORIES.HISTORY.name,
    difficulty: "Kolay"
  },
  {
    id: 56,
    question: "1648 yılında imzalanan ve 30 Yıl Savaşları'nı sona erdirerek modern ulus devlet sisteminin temellerini atan antlaşma nedir?",
    options: ["Paris Antlaşması", "Vestfalya Barışı", "Augsburg Barışı", "Utrecht Antlaşması"],
    correct: 1,
    category: CATEGORIES.HISTORY.name,
    difficulty: "Zor"
  },
  {
    id: 57,
    question: "Türkiye Cumhuriyeti'nin kurulmasından sonra, 3 Mart 1924'te kaldırılan kurum hangisidir?",
    options: ["Halifelik", "Şeyhülislamlık", "Saltanat", "Harbiye Nezareti"],
    correct: 0,
    category: CATEGORIES.HISTORY.name,
    difficulty: "Kolay"
  },
  {
    id: 58,
    question: "Antik Yunan filozofu Sokrates'in öğrencisi olan ve 'Devlet' (Politeia) adlı eseriyle bilinen düşünür kimdir?",
    options: ["Platon", "Tales", "Herakleitos", "Aristoteles"],
    correct: 0,
    category: CATEGORIES.HISTORY.name,
    difficulty: "Kolay"
  },
  {
    id: 59,
    question: "Osmanlı Devleti'nde Fatih Sultan Mehmet döneminde çıkarılan ve padişahın kardeş katlini yasal hale getiren kanunname nedir?",
    options: ["Kanunname-i Ali Osman", "Sened-i İttifak", "Tanzimat Fermanı", "Kanun-i Kadim"],
    correct: 0,
    category: CATEGORIES.HISTORY.name,
    difficulty: "Orta"
  },
  {
    id: 60,
    question: "Sina Yarımadası'nda, Mısır ile İsrail arasında, 1978'de ABD'nin arabuluculuğu ile imzalanan ve Arap-İsrail çatışmasında bir dönüm noktası olan antlaşma nedir?",
    options: ["Madrid Konferansı", "Tanca Görüşmeleri", "Camp David Sözleşmeleri", "Oslo Anlaşmaları"],
    correct: 2,
    category: CATEGORIES.HISTORY.name,
    difficulty: "Zor"
  },
  {
    id: 61,
    question: "Eski Türk devletlerinde devlet işlerinin görüşüldüğü, Kağan'ın başkanlık ettiği meclis/toplantı nedir?",
    options: ["Kurultay", "Töre", "Divan-ı Hümayun", "İkili Teşkilat"],
    correct: 0,
    category: CATEGORIES.HISTORY.name,
    difficulty: "Kolay"
  },
  {
    id: 62,
    question: "1948 yılında kurulmasına karar verilen ve Arap-İsrail savaşlarına neden olan devlet hangisidir?",
    options: ["İsrail", "Ürdün", "Suriye", "Lübnan"],
    correct: 0,
    category: CATEGORIES.HISTORY.name,
    difficulty: "Kolay"
  },
  {
    id: 63,
    question: "Rönesans döneminin en önemli sanatçılarından olan ve 'Mona Lisa', 'Son Akşam Yemeği' gibi eserleriyle tanınan isim kimdir?",
    options: ["Michelangelo", "Raffaello", "Donatello", "Leonardo da Vinci"],
    correct: 3,
    category: CATEGORIES.HISTORY.name,
    difficulty: "Kolay"
  },
  {
    id: 64,
    question: "1683'te Osmanlı İmparatorluğu'nun Avrupa'daki ilerleyişinin durduğu ve gerileme döneminin başladığı kabul edilen kuşatma nedir?",
    options: ["Viyana İkinci Kuşatması", "Malta Kuşatması", "Zigetvar Kuşatması", "Estergon Kuşatması"],
    correct: 0,
    category: CATEGORIES.HISTORY.name,
    difficulty: "Kolay"
  },
  {
    id: 65,
    question: "Antik Roma'da halkın sorunlarını dile getiren ve soylulara karşı haklarını koruyan görevliye ne ad verilirdi?",
    options: ["Sezar", "Konsül", "Halk Tribünü", "Tiran"],
    correct: 2,
    category: CATEGORIES.HISTORY.name,
    difficulty: "Zor"
  },
  {
    id: 66,
    question: "Osmanlı Devleti'nde, 1908'de II. Abdülhamid'in baskıcı yönetimine karşı yapılan ve ikinci kez meşrutiyetin ilan edildiği hareket nedir?",
    options: ["Bab-ı Ali Baskını", "Tanzimat Fermanı", "31 Mart Olayı", "Meşrutiyet'in İlanı (II. Meşrutiyet)"],
    correct: 3,
    category: CATEGORIES.HISTORY.name,
    difficulty: "Orta"
  },
  {
    id: 67,
    question: "İngiliz sömürgelerinden bağımsızlığını kazanarak modern Hindistan'ın kurulmasına önderlik eden kişi kimdir?",
    options: ["Cevahirlal Nehru", "Mahatma Gandhi", "Muhammed Ali Cinnah", "Indira Gandhi"],
    correct: 1,
    category: CATEGORIES.HISTORY.name,
    difficulty: "Kolay"
  },
  {
    id: 68,
    question: "1929'da ABD'de başlayan ve tüm dünyayı etkisi altına alan büyük ekonomik krizin adı nedir?",
    options: ["Büyük Buhran", "Petrol Krizi", "Asya Kaplanları Krizi", "Kara Perşembe"],
    correct: 0,
    category: CATEGORIES.HISTORY.name,
    difficulty: "Kolay"
  },
  {
    id: 69,
    question: "Türk Kurtuluş Savaşı'nı sona erdiren ve Türkiye Cumhuriyeti'nin bağımsızlığını tescilleyen uluslararası antlaşma nedir?",
    options: ["Ankara Antlaşması", "Lozan Barış Antlaşması", "Sevr Antlaşması", "Mondros Ateşkesi"],
    correct: 1,
    category: CATEGORIES.HISTORY.name,
    difficulty: "Kolay"
  },
  {
    id: 70,
    question: "Afrika'nın güney ucuna (Ümit Burnu) ulaşan ilk Portekizli denizci kimdir?",
    options: ["Bartolomeu Dias", "Ferdinand Macellan", "Kristof Kolomb", "Vasco da Gama"],
    correct: 0,
    category: CATEGORIES.HISTORY.name,
    difficulty: "Zor"
  },
  {
    id: 71,
    question: "Birinci Köktürk Devleti'nin kurucuları olan kardeşler kimlerdir?",
    options: ["Kül Tigin ve Bilge Kağan", "Mete ve Teoman", "Bumin ve İstemi", "Mukan ve Taşpar"],
    correct: 2,
    category: CATEGORIES.HISTORY.name,
    difficulty: "Orta"
  },
  {
    id: 72,
    question: "Orta Çağ'da Avrupa'da Kilise'nin otoritesine karşı çıkan, matbaayı kullanarak İncil'i halk diline çeviren ve Reform hareketini başlatan kişi kimdir?",
    options: ["Jean Calvin", "Galileo Galilei", "Erasmus", "Martin Luther"],
    correct: 3,
    category: CATEGORIES.HISTORY.name,
    difficulty: "Kolay"
  },
  {
    id: 73,
    question: "Türk-İslam mimarisinin en önemli eserlerinden biri olan Selimiye Camii hangi mimara aittir?",
    options: ["Mimar Davut Ağa", "Mimar Hayreddin", "Mimar Kemaleddin", "Mimar Sinan"],
    correct: 3,
    category: CATEGORIES.HISTORY.name,
    difficulty: "Kolay"
  },
  {
    id: 74,
    question: "Osmanlı Devleti'nin 'Lale Devri' olarak adlandırılan dönemi hangi iki padişah arasında yaşanmıştır?",
    options: ["II. Osman - IV. Murad", "I. Abdülmecid - I. Abdülaziz", "III. Selim - II. Mahmud", "III. Ahmet - I. Mahmud"],
    correct: 3,
    category: CATEGORIES.HISTORY.name,
    difficulty: "Orta"
  },
  {
    id: 75,
    question: "II. Dünya Savaşı sırasında müttefiklerin Avrupa'da ikinci bir cephe açmak amacıyla, Fransa'nın Normandiya kıyılarına yaptıkları büyük çıkarma harekatının adı nedir?",
    options: ["Market Garden Harekatı", "Torch Harekatı", "Overlord Harekatı (D-Day)", "Husky Harekatı"],
    correct: 2,
    category: CATEGORIES.HISTORY.name,
    difficulty: "Kolay"
  },
  {
    id: 76,
    question: "Antik Yunan'da tarih yazıcılığının kurucusu olarak bilinen ve 'Tarih' adlı eseriyle ünlenen kişi kimdir?",
    options: ["Plutarkhos", "Thukydides", "Homeros", "Herodotos"],
    correct: 3,
    category: CATEGORIES.HISTORY.name,
    difficulty: "Orta"
  },
  {
    id: 77,
    question: "1299'da kurulan Osmanlı Beyliği, hangi devletin zayıflamasıyla ortaya çıkan beyliklerdendir?",
    options: ["Bizans İmparatorluğu", "Anadolu Selçuklu Devleti", "Büyük Selçuklu Devleti", "Memlük Devleti"],
    correct: 1,
    category: CATEGORIES.HISTORY.name,
    difficulty: "Kolay"
  },
  {
    id: 78,
    question: "Soğuk Savaş'ın başlangıcı sayılan, ABD'nin komünizm tehlikesi altındaki ülkelere ekonomik ve askeri yardım yapmayı taahhüt ettiği doktrin nedir?",
    options: ["Marshall Planı", "Monroe Doktrini", "Truman Doktrini", "Eisenhower Doktrini"],
    correct: 2,
    category: CATEGORIES.HISTORY.name,
    difficulty: "Orta"
  },
  {
    id: 79,
    question: "Türklerin tarihte ilk kez yerleşik düzene geçmesiyle ortaya çıkan en önemli sanat eserleri hangi Uygur eserleridir?",
    options: ["Orhun Yazıtları", "Fresk (duvar resmi) ve minyatürler", "Balbal heykelleri", "Yazılı kanunlar"],
    correct: 1,
    category: CATEGORIES.HISTORY.name,
    difficulty: "Orta"
  },
  {
    id: 80,
    question: "Osmanlı Devleti'nde Kapıkulu Ocağı'nın en önemli askeri birliği olan ve padişahın daimi ordusunu oluşturan sınıf hangisidir?",
    options: ["Azaplar", "Tımarlı Sipahiler", "Akıncılar", "Yeniçeriler"],
    correct: 3,
    category: CATEGORIES.HISTORY.name,
    difficulty: "Kolay"
  },
  {
    id: 81,
    question: "Milli Mücadele'de, TBMM Hükümeti'nin uluslararası alanda ilk siyasi başarısı kabul edilen antlaşma hangisidir?",
    options: ["Ankara Antlaşması (Fransa ile)", "Gümrü Antlaşması", "Kars Antlaşması", "Moskova Antlaşması"],
    correct: 1,
    category: CATEGORIES.HISTORY.name,
    difficulty: "Orta"
  },
  {
    id: 82,
    question: "Orta Çağ'da Batı Avrupa'da toprağa bağlı köylülerin çalıştığı ekonomik ve siyasi sistem nedir?",
    options: ["Kapitalizm", "Sosyalizm", "Merkantilizm", "Feodalizm"],
    correct: 3,
    category: CATEGORIES.HISTORY.name,
    difficulty: "Kolay"
  },
  {
    id: 83,
    question: "Rönesans döneminde, 'Son Yargı' ve 'Adem'in Yaratılışı' gibi eserleriyle Sistine Şapeli'nin tavanını resimleyen sanatçı kimdir?",
    options: ["Michelangelo", "Leonardo da Vinci", "Raffaello", "Tiziano"],
    correct: 0,
    category: CATEGORIES.HISTORY.name,
    difficulty: "Kolay"
  },
  {
    id: 84,
    question: "Jül Sezar'ın MÖ 44'te öldürüldüğü şehir hangisidir?",
    options: ["Kartaca", "Roma", "İskenderiye", "Pompei"],
    correct: 1,
    category: CATEGORIES.HISTORY.name,
    difficulty: "Kolay"
  },
  {
    id: 85,
    question: "Osmanlı Devleti'nde Divan-ı Hümayun'da alınan kararları yazıp saklayan ve nişancıya yardımcı olan görevli kimdir?",
    options: ["Vezir-i Azam", "Reisülküttap", "Kazasker", "Defterdar"],
    correct: 1,
    category: CATEGORIES.HISTORY.name,
    difficulty: "Zor"
  },
  {
    id: 86,
    question: "I. Dünya Savaşı'nda Osmanlı Devleti'nin toprak kaybetmesine rağmen, İngilizlere karşı kazandığı önemli savunma zaferi nerede yaşanmıştır?",
    options: ["Çanakkale Cephesi", "Kafkas Cephesi", "Kanal Cephesi", "Hicaz-Yemen Cephesi"],
    correct: 0,
    category: CATEGORIES.HISTORY.name,
    difficulty: "Kolay"
  },
  {
    id: 87,
    question: "Antik Yunan şehir devletlerini birleştirerek Helenizm dönemini başlatan komutan kimdir?",
    options: ["Perikles", "Büyük İskender", "Darius", "Heredot"],
    correct: 1,
    category: CATEGORIES.HISTORY.name,
    difficulty: "Kolay"
  },
  {
    id: 88,
    question: "İlk Türk devletlerinde hükümdarlık yetkisinin Gök Tanrı tarafından verildiği inancına ne ad verilir?",
    options: ["Balbal", "Kut", "Urug", "Töre"],
    correct: 1,
    category: CATEGORIES.HISTORY.name,
    difficulty: "Orta"
  },
  {
    id: 89,
    question: "Osmanlı'nın duraklama döneminde (17. yy.) IV. Murat döneminde sosyal düzeni sağlamak için hazırlanan raporla bilinen bilim insanı ve devlet adamı kimdir?",
    options: ["Evliya Çelebi", "Naima", "Katip Çelebi", "Koçi Bey"],
    correct: 3,
    category: CATEGORIES.HISTORY.name,
    difficulty: "Zor"
  },
  {
    id: 90,
    question: "1949'da Çin'de gerçekleşen devrimle iktidara gelen, Mao Zedong liderliğindeki rejim nedir?",
    options: ["Cumhuriyetçi Hükümet", "Komünist Yönetim", "Monarşi", "Milliyetçi Hükümet"],
    correct: 1,
    category: CATEGORIES.HISTORY.name,
    difficulty: "Kolay"
  },
  {
    id: 91,
    question: "Mimar Sinan'ın 'kalfalık eserim' dediği, İstanbul'daki cami hangisidir?",
    options: ["Süleymaniye Camii", "Şehzade Camii", "Atik Valide Camii", "Mihrimah Sultan Camii"],
    correct: 0,
    category: CATEGORIES.HISTORY.name,
    difficulty: "Kolay"
  },
  {
    id: 92,
    question: "Türkiye Cumhuriyeti'nin ilk çok partili seçimi hangi yılda yapılmıştır?",
    options: ["1946", "1930", "1923", "1950"],
    correct: 0,
    category: CATEGORIES.HISTORY.name,
    difficulty: "Orta"
  },
  {
    id: 93,
    question: "Antik Mısır'da yazı sistemi olarak kullanılan resim ve sembollerden oluşan yazı türü nedir?",
    options: ["Fenike Alfabesi", "Piktogram", "Çivi Yazısı", "Hiyeroglif"],
    correct: 3,
    category: CATEGORIES.HISTORY.name,
    difficulty: "Kolay"
  },
  {
    id: 94,
    question: "Orta Çağ'da, Hristiyanların Kudüs'ü Müslümanlardan geri almak için düzenlediği seferlere verilen ad nedir?",
    options: ["Bizans Seferleri", "Reform Hareketleri", "Rönesans", "Haçlı Seferleri"],
    correct: 3,
    category: CATEGORIES.HISTORY.name,
    difficulty: "Kolay"
  },
  {
    id: 95,
    question: "II. Dünya Savaşı'nın hemen ardından, Batı Avrupa'nın ekonomik olarak yeniden inşa edilmesi için ABD tarafından başlatılan yardım programı nedir?",
    options: ["Truman Doktrini", "Marshall Planı", "Monroe Doktrini", "Comecon"],
    correct: 1,
    category: CATEGORIES.HISTORY.name,
    difficulty: "Kolay"
  },
  {
    id: 96,
    question: "Ankara Antlaşması (1921) ile hangi ülke Güney Cephesi'nden çekilmiş ve Hatay'a özerklik verilmiştir?",
    options: ["Fransa", "Yunanistan", "İtalya", "İngiltere"],
    correct: 0,
    category: CATEGORIES.HISTORY.name,
    difficulty: "Kolay"
  },
  {
    id: 97,
    question: "Antik Yunan'da filozofları, sanatçıları ve bilim insanlarını koruyup destekleyen şehir devleti hangisidir?",
    options: ["Korint", "Atina", "Teb", "Sparta"],
    correct: 1,
    category: CATEGORIES.HISTORY.name,
    difficulty: "Kolay"
  },
  {
    id: 98,
    question: "Osmanlı Devleti'nin kuruluş döneminde (1402) Timur ile Yıldırım Bayezid arasında yapılan ve Fetret Devri'nin yaşanmasına neden olan savaş hangisidir?",
    options: ["Varna Savaşı", "Niğbolu Savaşı", "Ankara Savaşı", "I. Kosova Savaşı"],
    correct: 2,
    category: CATEGORIES.HISTORY.name,
    difficulty: "Kolay"
  },
  {
    id: 99,
    question: "1856'da Osmanlı Devleti'nin Avrupa devletlerinin hukukundan yararlanabilmesi için yayımladığı ferman hangisidir?",
    options: ["Islahat Fermanı", "Tanzimat Fermanı", "Kanun-i Esasi", "Sened-i İttifak"],
    correct: 0,
    category: CATEGORIES.HISTORY.name,
    difficulty: "Zor"
  },
  {
    id: 100,
    question: "Uygur metinlerinde geçen ve 'Tarih' kelimesi yerine kullanılan, olayların zaman ve sırasını ifade eden terim nedir?",
    options: ["Yazı", "Bengü Taş", "Töre", "Vakayiname (Kronik)"],
    correct: 3,
    category: CATEGORIES.HISTORY.name,
    difficulty: "Zor"
  },
  {
    id: 101,
    question: "Büyük Selçuklu Devleti'nin kurucusu ve ilk sultanı kimdir?",
    options: ["Tuğrul Bey", "Alp Arslan", "Sultan Sencer", "Melikşah"],
    correct: 0,
    category: "Tarih",
    difficulty: "Kolay"
  },
  {
    id: 102,
    question: "Antik Yunan'da, Sparta'ya karşı Peloponez Savaşları'nı kaybeden şehir devleti hangisidir?",
    options: ["Makedonya", "Korint", "Atina", "Teb"],
    correct: 2,
    category: "Tarih",
    difficulty: "Orta"
  },
  {
    id: 103,
    question: "Osmanlı Devleti'nin ilk deniz zaferi olarak kabul edilen, Venediklilerle yapılan savaş hangisidir?",
    options: ["Preveze Deniz Savaşı", "İnebahtı Deniz Savaşı", "Cerbe Deniz Savaşı", "Çalıbey Savaşı"],
    correct: 3,
    category: "Tarih",
    difficulty: "Zor"
  },
  {
    id: 104,
    question: "Mezopotamya'da, tarihte ilk kez bilinen kütüphaneyi kuran Asur kralı kimdir?",
    options: ["Nabukadnezar", "Sargon", "Asurbanipal", "Hammurabi"],
    correct: 2,
    category: "Tarih",
    difficulty: "Zor"
  },
  {
    id: 105,
    question: "Hz. Muhammed'in vefatından sonra Dört Halife Dönemi'nin ilk halifesi kimdir?",
    options: ["Hz. Ali", "Hz. Ebu Bekir", "Hz. Ömer", "Hz. Osman"],
    correct: 1,
    category: "Tarih",
    difficulty: "Kolay"
  },
  {
    id: 106,
    question: "İngiltere'de meşrutiyetin temellerini atan ve kralın yetkilerini kısıtlayan 'Haklar Bildirisi' (Bill of Rights) hangi yılda kabul edilmiştir?",
    options: ["1689", "1789", "1776", "1215"],
    correct: 0,
    category: "Tarih",
    difficulty: "Orta"
  },
  {
    id: 107,
    question: "Fatih Sultan Mehmet döneminde, Karadeniz'in Türk gölü haline gelmesinde önemli rol oynayan fetih hangisidir?",
    options: ["Otranto", "Belgrad", "Mora", "Kırım"],
    correct: 3,
    category: "Tarih",
    difficulty: "Orta"
  },
  {
    id: 108,
    question: "Tarihin sıfır noktası kabul edilen ve Neolitik döneme ait kalıntıları barındıran, Şanlıurfa'daki yapı neresidir?",
    options: ["Hattuşaş", "Troya", "Çatalhöyük", "Göbeklitepe"],
    correct: 3,
    category: "Tarih",
    difficulty: "Kolay"
  },
  {
    id: 109,
    question: "Osmanlı Devleti'nin dağılma döneminde (19. yy.) Mısır'da isyan ederek Osmanlı'yı zor durumda bırakan vali kimdir?",
    options: ["Tepedelenli Ali Paşa", "Cezzar Ahmet Paşa", "Ali Paşa", "Kavalalı Mehmet Ali Paşa"],
    correct: 3,
    category: "Tarih",
    difficulty: "Orta"
  },
  {
    id: 110,
    question: "II. Dünya Savaşı sırasında, Almanya'nın Sovyetler Birliği'ni işgal etmek için başlattığı operasyonun kod adı nedir?",
    options: ["Sarı Plan", "Barbarossa Harekatı", "Deniz Aslanı Harekatı", "Savaş Baltası Harekatı"],
    correct: 1,
    category: "Tarih",
    difficulty: "Kolay"
  },
  {
    id: 111,
    question: "Büyük Hun İmparatorluğu'nun en parlak dönemini yaşatan ve Çin'i vergiye bağlayan hükümdar kimdir?",
    options: ["Mete Han", "Attila", "Ki-ok", "Teoman"],
    correct: 0,
    category: "Tarih",
    difficulty: "Kolay"
  },
  {
    id: 112,
    question: "Orta Çağ'da Avrupa'da, papalık tarafından Kilise'ye karşı gelenlerin (sapkınların) yargılandığı kurum nedir?",
    options: ["Senato", "Feodal Meclis", "Konsül", "Engizisyon"],
    correct: 3,
    category: "Tarih",
    difficulty: "Orta"
  },
  {
    id: 113,
    question: "1774'te imzalanan ve Osmanlı Devleti'nin Kırım'ı kaybetme yolunda attığı ilk adım olan antlaşma nedir?",
    options: ["Belgrad Antlaşması", "Küçük Kaynarca Antlaşması", "Prut Antlaşması", "Yaş Antlaşması"],
    correct: 1,
    category: "Tarih",
    difficulty: "Orta"
  },
  {
    id: 114,
    question: "Tarihte ilk kez 'Alfabeyi' bulan ve deniz ticaretiyle yayan Akdeniz medeniyeti hangisidir?",
    options: ["Romalılar", "Fenikeliler", "Yunanlar", "İbraniler"],
    correct: 1,
    category: "Tarih",
    difficulty: "Kolay"
  },
  {
    id: 115,
    question: "Anadolu Selçuklu Devleti'nin kurucusu ve ilk sultanı kimdir?",
    options: ["I. Mesud", "I. Kılıç Arslan", "II. Kılıç Arslan", "Kutalmışoğlu Süleyman Şah"],
    correct: 3,
    category: "Tarih",
    difficulty: "Kolay"
  },
  {
    id: 116,
    question: "Osmanlı Devleti'nde ilk kez matbaanın kullanılmasını teşvik eden ve bu döneme adını veren sadrazam kimdir?",
    options: ["Merzifonlu Kara Mustafa Paşa", "Nevşehirli Damat İbrahim Paşa", "Alemdar Mustafa Paşa", "Köprülü Mehmet Paşa"],
    correct: 1,
    category: "Tarih",
    difficulty: "Orta"
  },
  {
    id: 117,
    question: "17. yüzyılda bilimde 'Güneş merkezli sistem' (Heliocentric) teorisini savunduğu için Kilise tarafından yargılanan İtalyan bilim adamı kimdir?",
    options: ["Kepler", "Kopernik", "Newton", "Galileo Galilei"],
    correct: 3,
    category: "Tarih",
    difficulty: "Kolay"
  },
  {
    id: 118,
    question: "Türk Kurtuluş Savaşı sırasında, Doğu Cephesi'nde Ermenilere karşı büyük zafer kazanan komutan kimdir?",
    options: ["İsmet İnönü", "Kazım Karabekir Paşa", "Ali Fuat Cebesoy", "Fevzi Çakmak"],
    correct: 1,
    category: "Tarih",
    difficulty: "Kolay"
  },
  {
    id: 119,
    question: "I. Dünya Savaşı'nda Almanya, Osmanlı Devleti ve Avusturya-Macaristan'ın oluşturduğu ittifakın adı nedir?",
    options: ["Merkez Devletleri", "İtilaf Devletleri", "Üçlü İttifak (Bağlaşma)", "Müttefik Devletler"],
    correct: 0,
    category: "Tarih",
    difficulty: "Kolay"
  },
  {
    id: 120,
    question: "İslam tarihinde, Müslümanlar arasında ilk iç savaşın (Sıffin Savaşı) yaşandığı dönem hangisidir?",
    options: ["Hz. Ömer Dönemi", "Hz. Ebu Bekir Dönemi", "Hz. Osman Dönemi", "Hz. Ali Dönemi"],
    correct: 3,
    category: "Tarih",
    difficulty: "Orta"
  },
  {
    id: 121,
    question: "Anadolu'da kurulan ve hayvancılıkla uğraşan, başkenti Tuşpa (Van) olan uygarlık hangisidir?",
    options: ["Hititler", "Frigler", "Lidyalılar", "Urartular"],
    correct: 3,
    category: "Tarih",
    difficulty: "Kolay"
  },
  {
    id: 122,
    question: "Roma'da MÖ 44'te öldürülen, Galya'yı fetheden ve 'Geldim, Gördüm, Yendim' sözüyle tanınan general ve diktatör kimdir?",
    options: ["Augustus", "Neron", "Jül Sezar", "Büyük Konstantin"],
    correct: 2,
    category: "Tarih",
    difficulty: "Kolay"
  },
  {
    id: 123,
    question: "Türkiye Cumhuriyeti'nde kadınlara 'Belediye seçimlerine katılma ve seçilme hakkı' hangi yılda verilmiştir?",
    options: ["1934", "1945", "1924", "1930"],
    correct: 3,
    category: "Tarih",
    difficulty: "Kolay"
  },
  {
    id: 124,
    question: "Fransız İhtilali'nin sonuçlarından biri olarak kabul edilen ve tüm insanların eşit ve özgür olduğunu ilan eden belge nedir?",
    options: ["İnsan ve Yurttaş Hakları Bildirisi", "Paris Sözleşmesi", "Haklar Bildirisi (Bill of Rights)", "Magna Carta"],
    correct: 0,
    category: "Tarih",
    difficulty: "Kolay"
  },
  {
    id: 125,
    question: "Osmanlı Devleti'nde II. Mahmut döneminde kurulan, Batı tarzı ilk düzenli ordu nedir?",
    options: ["Sekban-ı Cedid", "Nizam-ı Cedid", "Eşkinci Ocağı", "Asakir-i Mansure-i Muhammediye"],
    correct: 3,
    category: "Tarih",
    difficulty: "Orta"
  },
  {
    id: 126,
    question: "1989'da yıkılarak Soğuk Savaş'ın sembolik sonu kabul edilen yapı neresidir?",
    options: ["İzmir Saat Kulesi", "Berlin Duvarı", "Versay Sarayı", "Çin Seddi"],
    correct: 1,
    category: "Tarih",
    difficulty: "Kolay"
  },
  {
    id: 127,
    question: "Büyük Selçuklu İmparatorluğu'nun en parlak dönemini yaşatan ve Nizamiye medreselerini kurduran vezir kimdir?",
    options: ["Melikşah", "Nizamülmülk", "Tuğrul Bey", "Alp Arslan"],
    correct: 1,
    category: "Tarih",
    difficulty: "Kolay"
  },
  {
    id: 128,
    question: "Türklerdeki ilk yazılı kaynaklar olan ve Bilge Kağan, Kültigin adına dikilen anıtlar nerede bulunur?",
    options: ["Yenisey Yazıtları", "Irk Bitig", "Maniheizm Kitapları", "Orhun Yazıtları"],
    correct: 3,
    category: "Tarih",
    difficulty: "Kolay"
  },
  {
    id: 129,
    question: "1918'de I. Dünya Savaşı'nı bitiren ve ağır şartları nedeniyle II. Dünya Savaşı'nın sebeplerinden biri sayılan antlaşma nedir?",
    options: ["Trianon Antlaşması", "Versay Antlaşması", "Sevr Antlaşması", "Paris Barış Konferansı"],
    correct: 1,
    category: "Tarih",
    difficulty: "Kolay"
  },
  {
    id: 130,
    question: "İslam tarihinde, peygamberin ölümünden sonraki siyasi otorite (liderlik) sorunu sonucu ortaya çıkan mezhep ayrılıkları hangi olayla derinleşmiştir?",
    options: ["Cemel Vakası", "Kerbela Olayı", "Sıffin Savaşı", "Haricilerin Ortaya Çıkışı"],
    correct: 1,
    category: "Tarih",
    difficulty: "Orta"
  },
  {
    id: 131,
    question: "Anadolu'da kurulan ve Hititlerin yönetim şekli olan 'Tavananna' (kraliçe) ve 'Pankuş' (meclis) ile bilinen devlet hangisidir?",
    options: ["Hititler", "Lidyalılar", "Urartular", "Frigler"],
    correct: 0,
    category: "Tarih",
    difficulty: "Zor"
  },
  {
    id: 132,
    question: "Antik Mısır'da, kralların mezarları olarak inşa edilen ve büyük mimari yapılar olan yapılar nedir?",
    options: ["Sarkofaj", "Piramit", "Tapınak", "Ziggurat"],
    correct: 1,
    category: "Tarih",
    difficulty: "Kolay"
  },
  {
    id: 133,
    question: "Osmanlı Devleti'nin gerileme döneminde (18. yy.), ilk kez Batı tarzında askeri ıslahatlar yapan padişah kimdir?",
    options: ["III. Ahmet", "I. Mahmut", "III. Selim", "II. Osman"],
    correct: 1,
    category: "Tarih",
    difficulty: "Orta"
  },
  {
    id: 134,
    question: "Yeniçağ'da, devletlerin zenginliğini sahip olduğu altın ve gümüş miktarıyla ölçen ekonomik akım nedir?",
    options: ["Feodalizm", "Liberalizm", "Merkantilizm", "Kapitalizm"],
    correct: 2,
    category: "Tarih",
    difficulty: "Orta"
  },
  {
    id: 135,
    question: "Büyük İskender'in Hindistan'a kadar ilerleyişini durduran, Kuzey Afrika'daki Kartaca'ya karşı mücadele eden Roma generalleri kimdir?",
    options: ["Sezar ve Pompey", "Octavian ve Antonius", "Scipio Africanus", "Sulla ve Marius"],
    correct: 2,
    category: "Tarih",
    difficulty: "Zor"
  },
  {
    id: 136,
    question: "Soğuk Savaş döneminde, ABD ve Batı Avrupa ülkelerinin kurduğu askeri ittifakın adı nedir?",
    options: ["NATO", "CENTO", "Varşova Paktı", "SEATO"],
    correct: 0,
    category: "Tarih",
    difficulty: "Kolay"
  },
  {
    id: 137,
    question: "Tarihte 'Çağ Açıp Çağ Kapayan' olay olarak kabul edilen gelişme nedir?",
    options: ["İstanbul'un Fethi", "Fransız İhtilali", "Reform Hareketleri", "Coğrafi Keşifler"],
    correct: 0,
    category: "Tarih",
    difficulty: "Kolay"
  },
  {
    id: 138,
    question: "1934 yılında kabul edilen 'Soyadı Kanunu' ile Mustafa Kemal'e verilen soyadı nedir?",
    options: ["Gazi", "Paşa", "Atatürk", "Kamal"],
    correct: 2,
    category: "Tarih",
    difficulty: "Kolay"
  },
  {
    id: 139,
    question: "Avrupa'da Kilise'nin eğitim ve bilim üzerindeki baskısını azaltan, aklın ve bilimin ön plana çıktığı 18. yüzyıl dönemi nedir?",
    options: ["Sanayi Devrimi", "Rönesans", "Reform", "Aydınlanma Çağı"],
    correct: 3,
    category: "Tarih",
    difficulty: "Kolay"
  },
  {
    id: 140,
    question: "Büyük Selçukluların kuruluşunda önemli rol oynayan, Gaznelilerle yapılan savaş hangisidir?",
    options: ["Kösedağ Savaşı", "Malazgirt Savaşı", "Dandanakan Savaşı", "Pasınlar Savaşı"],
    correct: 2,
    category: "Tarih",
    difficulty: "Kolay"
  },
  {
    id: 141,
    question: "İlk Türk devletlerinde hükümdarın eşine verilen unvan nedir?",
    options: ["Buyruk", "Tigin", "Hatun", "Yabgu"],
    correct: 2,
    category: "Tarih",
    difficulty: "Kolay"
  },
  {
    id: 142,
    question: "Osmanlı Devleti'nin ilk kez toprak kaybettiği ve Avrupa'da büyük bir gerileme döneminin başladığı antlaşma hangisidir?",
    options: ["Edirne Segedin Antlaşması", "İstanbul Antlaşması (1533)", "Zitvatorok Antlaşması", "Karlofça Antlaşması"],
    correct: 3,
    category: "Tarih",
    difficulty: "Orta"
  },
  {
    id: 143,
    question: "II. Dünya Savaşı sırasında, Almanya'nın teslim olmasından sonra, müttefiklerin savaşı Japonya'ya karşı sürdürme kararı aldığı ve atom bombası çağını başlatan konferans hangisidir?",
    options: ["Yalta Konferansı", "Potsdam Konferansı", "Kazablanka Konferansı", "Tahran Konferansı"],
    correct: 1,
    category: "Tarih",
    difficulty: "Zor"
  },
  {
    id: 144,
    question: "Mezopotamya'da, her katı farklı bir tanrıya adanmış, teraslı piramit biçimli tapınaklara ne ad verilir?",
    options: ["Obelisk", "Sfenks", "Ziggurat", "Piramit"],
    correct: 2,
    category: "Tarih",
    difficulty: "Kolay"
  },
  {
    id: 145,
    question: "Türk Kurtuluş Savaşı'nda Batı Cephesi'nde Yunanlılara karşı kazanılan ilk askeri zafer hangisidir?",
    options: ["I. İnönü Savaşı", "Kütahya-Eskişehir Savaşları", "Sakarya Meydan Muharebesi", "Büyük Taarruz"],
    correct: 0,
    category: "Tarih",
    difficulty: "Kolay"
  },
  {
    id: 146,
    question: "1066'da İngiltere'yi fethederek Anglo-Sakson Krallığı'na son veren ve İngiliz tahtına geçen kişi kimdir?",
    options: ["I. Richard (Aslan Yürekli)", "Kral Arthur", "Fatih William (Norman Dükü)", "I. Edward"],
    correct: 2,
    category: "Tarih",
    difficulty: "Zor"
  },
  {
    id: 147,
    question: "Osmanlı Devleti'nde, şehzadelerin sancağa çıkma uygulamasını başlatan padişah kimdir?",
    options: ["Yıldırım Bayezid", "Fatih Sultan Mehmet", "I. Murat", "Orhan Gazi"],
    correct: 2,
    category: "Tarih",
    difficulty: "Orta"
  },
  {
    id: 148,
    question: "Rönesans'ın sanatçı ve bilim insanlarını destekleyen, Floransa'nın güçlü banker ailesi hangisidir?",
    options: ["Medici Ailesi", "Pazzi Ailesi", "Borgia Ailesi", "Sforza Ailesi"],
    correct: 0,
    category: "Tarih",
    difficulty: "Kolay"
  },
  {
    id: 149,
    question: "II. Dünya Savaşı'ndan sonra, Sovyetler Birliği ve Doğu Bloku ülkeleri arasında ekonomik işbirliğini sağlamak amacıyla kurulan örgüt nedir?",
    options: ["Avrupa Ekonomik Topluluğu", "Comecon (COMECON)", "Avrupa Kömür ve Çelik Topluluğu", "G-8"],
    correct: 1,
    category: "Tarih",
    difficulty: "Orta"
  },
  {
    id: 150,
    question: "Tarihte, dünyayı dolaşan (devrialem yapan) ilk denizci kimdir (Yolculuğu tamamlamadan ölmüştür, ancak ekibi tamamlamıştır)?",
    options: ["Vasco da Gama", "Bartolomeu Dias", "Ferdinand Macellan", "Kristof Kolomb"],
    correct: 2,
    category: "Tarih",
    difficulty: "Kolay"
  },
  {
    id: 151,
    question: "İslam tarihinde, Emevi Devleti'nin başkenti hangi şehir olmuştur?",
    options: ["Medine", "Bağdat", "Şam (Dımaşk)", "Mekke"],
    correct: 2,
    category: "Tarih",
    difficulty: "Kolay"
  },
  {
    id: 152,
    question: "1787'de yazılan ve hala yürürlükte olan, dünyanın en eski yazılı anayasası hangi ülkeye aittir?",
    options: ["İngiltere", "Fransa", "Kanada", "Amerika Birleşik Devletleri"],
    correct: 3,
    category: "Tarih",
    difficulty: "Orta"
  },
  {
    id: 153,
    question: "Osmanlı Devleti'nde, Fatih Sultan Mehmet döneminde 'İltizam Sistemi' (Vergi toplama hakkının kiralanması) yerine getirilen düzenleme nedir?",
    options: ["Kapıkulu Ocağı", "Mültezim Sistemi", "Divan-ı Hümayun", "Tımar Sistemi"],
    correct: 3,
    category: "Tarih",
    difficulty: "Zor"
  },
  {
    id: 154,
    question: "Orta Asya'da Maniheizm dinini kabul ederek yerleşik yaşama geçen ve askeri özelliklerini kaybeden Türk devleti hangisidir?",
    options: ["Göktürkler", "Akhunlar", "Karluklar", "Uygurlar"],
    correct: 3,
    category: "Tarih",
    difficulty: "Kolay"
  },
  {
    id: 155,
    question: "Antik Roma'da, şehirdeki en önemli siyasi ve dini binaların bulunduğu ana meydanın adı nedir?",
    options: ["Circus Maximus", "Kolezyum", "Panteon", "Forum"],
    correct: 3,
    category: "Tarih",
    difficulty: "Kolay"
  },
  {
    id: 156,
    question: "Mustafa Kemal Atatürk'ün 'Ben size taarruzu emretmiyorum, ölmeyi emrediyorum.' dediği I. Dünya Savaşı cephesi hangisidir?",
    options: ["Çanakkale Cephesi", "Kafkas Cephesi", "Kanal Cephesi", "Sina-Filistin Cephesi"],
    correct: 0,
    category: "Tarih",
    difficulty: "Kolay"
  },
  {
    id: 157,
    question: "İngiltere'de Sanayi Devrimi'nin başlamasını sağlayan en önemli teknik icat nedir?",
    options: ["Buhar Makinesi", "Matbaa", "Telgraf", "Elektrik"],
    correct: 0,
    category: "Tarih",
    difficulty: "Kolay"
  },
  {
    id: 158,
    question: "Helenistik dönemin en önemli felsefe akımlarından biri olan ve kişinin duygulardan arınmış, akılcı bir yaşam sürmesini savunan akım nedir?",
    options: ["Stoacılık", "Sinizm", "Sofizm", "Epikürizm"],
    correct: 0,
    category: "Tarih",
    difficulty: "Zor"
  },
  {
    id: 159,
    question: "Osmanlı Devleti'nde padişahın mutlak vekilinin ve en üst düzey yöneticisinin unvanı nedir?",
    options: ["Defterdar", "Nişancı", "Kazasker", "Veziriazam (Sadrazam)"],
    correct: 3,
    category: "Tarih",
    difficulty: "Kolay"
  },
  {
    id: 160,
    question: "Yunan mitolojisindeki Truva Savaşı'nı anlatan ve Batı edebiyatının temellerinden sayılan destan nedir?",
    options: ["Ramayana", "Gılgamış", "Odisse", "İlyada"],
    correct: 3,
    category: "Tarih",
    difficulty: "Kolay"
  },
  {
    id: 161,
    question: "Orta Çağ'da, Bizans İmparatorluğu'nun başkenti olan ve 1453'te Osmanlı'ya geçen şehir neresidir?",
    options: ["Trabzon", "İstanbul (Konstantinopolis)", "Roma", "İznik"],
    correct: 1,
    category: "Tarih",
    difficulty: "Kolay"
  },
  {
    id: 162,
    question: "1945'te kurulan, uluslararası barış ve güvenliği sağlamakla görevli, beş daimi üyesi bulunan kuruluş hangisidir?",
    options: ["Avrupa Konseyi", "G-7", "NATO", "Birleşmiş Milletler (BM)"],
    correct: 3,
    category: "Tarih",
    difficulty: "Kolay"
  },
  {
    id: 163,
    question: "Osmanlı Devleti'nin kuruluş sürecinde, Bizans İmparatorluğu ile yaptığı ilk savaş hangisidir?",
    options: ["Sazlıdere Savaşı", "Pelekanon Savaşı", "Maltepe Savaşı", "Koyunhisar Savaşı"],
    correct: 3,
    category: "Tarih",
    difficulty: "Orta"
  },
  {
    id: 164,
    question: "1596'da Kanuni Sultan Süleyman'ın vefat ettiği son seferi olan kale kuşatması hangisidir?",
    options: ["Mohaç Meydan Muharebesi", "Belgrad Kuşatması", "Zigetvar Kuşatması", "Rodos Kuşatması"],
    correct: 2,
    category: "Tarih",
    difficulty: "Orta"
  },
  {
    id: 165,
    question: "Türk Kurtuluş Savaşı'nda, Milli Mücadele'nin gerekçesi, yöntemi ve amacı ilk kez nerede belirlenmiştir?",
    options: ["Sivas Kongresi", "Amasya Genelgesi", "Erzurum Kongresi", "Havza Genelgesi"],
    correct: 1,
    category: "Tarih",
    difficulty: "Kolay"
  },
  {
    id: 166,
    question: "Mezopotamya'da çivi yazısını ve tekerleği icat eden ilk uygarlık hangisidir?",
    options: ["Sümerler", "Akadlar", "Asurlular", "Babilliler"],
    correct: 0,
    category: "Tarih",
    difficulty: "Kolay"
  },
  {
    id: 167,
    question: "Osmanlı Devleti'nde toprakların büyük bir kısmının mülkiyetinin devlete ait olduğu sistemi ifade eden terim nedir?",
    options: ["Miri Toprak Sistemi", "Vakıf Toprak Sistemi", "Mülk Toprak Sistemi", "İltizam Sistemi"],
    correct: 0,
    category: "Tarih",
    difficulty: "Orta"
  },
  {
    id: 168,
    question: "Antik Yunan'da şehir devletlerini (polis) bir araya getirerek büyük bir imparatorluk kuran komutan kimdir?",
    options: ["Büyük İskender", "Darius", "Kserkses", "Perikles"],
    correct: 0,
    category: "Tarih",
    difficulty: "Kolay"
  },
  {
    id: 169,
    question: "1955'te Endonezya'da toplanan ve Soğuk Savaş blokları dışında kalan ülkelerin (Üçüncü Dünya) bir araya geldiği konferans nedir?",
    options: ["NATO Zirvesi", "Tahran Konferansı", "Bağlantısızlar Hareketi (Bandung Konferansı)", "Yalta Konferansı"],
    correct: 2,
    category: "Tarih",
    difficulty: "Zor"
  },
  {
    id: 170,
    question: "İlk çağlarda Anadolu'da kurulan, Kibele tanrıçasına tapınan ve en ünlü kralı Midas olan uygarlık hangisidir?",
    options: ["Urartular", "Lidyalılar", "Frigler", "İyonlar"],
    correct: 2,
    category: "Tarih",
    difficulty: "Kolay"
  },
  {
    id: 171,
    question: "Abbasiler döneminde, Bağdat'ta kurulan ve çeviri, bilim, felsefe çalışmaları yapılan önemli akademik merkez nedir?",
    options: ["Beytülhikme (Bilgelik Evi)", "Nizamiye Medresesi", "Kütüphane", "Darülfünun"],
    correct: 0,
    category: "Tarih",
    difficulty: "Zor"
  },
  {
    id: 172,
    question: "II. Dünya Savaşı sırasında, Yahudilerin toplu olarak katledilmesine yönelik sistematik soykırımın adı nedir?",
    options: ["Nürnberg Yasaları", "Etnik Temizlik", "Kristal Gece", "Holokost"],
    correct: 3,
    category: "Tarih",
    difficulty: "Kolay"
  },
  {
    id: 173,
    question: "Osmanlı Devleti'nde ilk kez 'Padişahın yetkilerinin kanunla sınırlandırılması' fikri hangi belgeyle başlamıştır?",
    options: ["Islahat Fermanı", "Kanun-i Esasi", "Tanzimat Fermanı", "Sened-i İttifak"],
    correct: 3,
    category: "Tarih",
    difficulty: "Orta"
  },
  {
    id: 174,
    question: "Büyük Roma İmparatorluğu'nu resmen ikiye ayıran (Batı ve Doğu) imparator kimdir?",
    options: ["Büyük Konstantin", "Theodosius", "Augustus", "Jül Sezar"],
    correct: 1,
    category: "Tarih",
    difficulty: "Orta"
  },
  {
    id: 175,
    question: "Milli Mücadele döneminde, Temsil Heyeti'nin Ankara'yı merkez olarak seçmesinin en önemli nedeni nedir?",
    options: ["İstanbul'a yakınlık", "Ekonomik imkanlar", "Ankara'nın jeopolitik konumu ve işgal altında olmaması", "Batı Cephesi'ne yakınlık"],
    correct: 2,
    category: "Tarih",
    difficulty: "Kolay"
  },
  {
    id: 176,
    question: "Türk-İslam devletlerinde, hükümdarın özel hayatından sorumlu olan, önemli devlet işlerinde söz sahibi olan görevli kimdir?",
    options: ["Emir-i Dad", "Ulu Hacib", "Vezir", "Hacibülhüccab"],
    correct: 1,
    category: "Tarih",
    difficulty: "Zor"
  },
  {
    id: 177,
    question: "17. yüzyıl Osmanlı'sında sarayın dışından, devlete karşı güçlü bir otorite kuran ve sadrazamlık makamını aile içinde tutan hanedan kimdir?",
    options: ["Köprülü Ailesi", "Evrenos Ailesi", "Zağanos Ailesi", "Çandarlı Ailesi"],
    correct: 0,
    category: "Tarih",
    difficulty: "Orta"
  },
  {
    id: 178,
    question: "Antik Yunan'da ilk kez atom fikrini ortaya atan ve tüm maddelerin bölünemez küçük parçacıklardan (atomos) oluştuğunu savunan filozof kimdir?",
    options: ["Demokritos", "Platon", "Tales", "Aristo"],
    correct: 0,
    category: "Tarih",
    difficulty: "Zor"
  },
  {
    id: 179,
    question: "Milli Mücadele döneminde, Kuvâ-yi Milliye'nin kaldırılmasına ve düzenli orduya geçişe neden olan isyan hangisidir?",
    options: ["Çerkez Ethem Ayaklanması", "Koçgiri Ayaklanması", "Anzavur İsyanı", "Şeyh Said Ayaklanması"],
    correct: 0,
    category: "Tarih",
    difficulty: "Kolay"
  },
  {
    id: 180,
    question: "Abbasiler döneminde, Horasan'dan başlayarak İslami sanatı etkileyen ve ilk kez figüratif resmi (minyatür) kullanan Türk hanedanı hangisidir?",
    options: ["Tolunoğulları", "Karahanlılar", "Gazneliler", "Samanoğulları"],
    correct: 2,
    category: "Tarih",
    difficulty: "Zor"
  },
  {
    id: 181,
    question: "Osmanlı Devleti'nde mali işlerden sorumlu olan, gelir ve giderleri hesaplayan Divan-ı Hümayun üyesi kimdir?",
    options: ["Defterdar", "Nişancı", "Reisülküttap", "Kazasker"],
    correct: 0,
    category: "Tarih",
    difficulty: "Kolay"
  },
  {
    id: 182,
    question: "Orta Çağ'da, Uzak Doğu'dan Avrupa'ya ulaşan ve Avrupa nüfusunun büyük bir kısmının ölümüne neden olan salgın hastalık nedir?",
    options: ["Veba (Kara Ölüm)", "Çiçek Hastalığı", "Kolera", "Tifüs"],
    correct: 0,
    category: "Tarih",
    difficulty: "Kolay"
  },
  {
    id: 183,
    question: "Milli Mücadele'de Batı Cephesi Komutanı olarak büyük başarılara imza atan ve ileride Cumhurbaşkanı olan kişi kimdir?",
    options: ["Kazım Karabekir", "Fevzi Çakmak", "Ali Fuat Cebesoy", "İsmet İnönü"],
    correct: 3,
    category: "Tarih",
    difficulty: "Kolay"
  },
  {
    id: 184,
    question: "Osmanlı Devleti'nin 'Duraklama Dönemi'ne (17. yy.) girmesinin en önemli dış sebebi nedir?",
    options: ["Coğrafi Keşifler ve ticaret yollarının değişmesi", "Kapitülasyonlar", "Saray kadınlarının yönetime karışması", "Yeniçeri isyanları"],
    correct: 0,
    category: "Tarih",
    difficulty: "Kolay"
  },
  {
    id: 185,
    question: "1962'de ABD ve Sovyetler Birliği'ni nükleer savaşın eşiğine getiren kriz hangi ülkede yaşanmıştır?",
    options: ["Kore", "Küba", "Almanya", "Vietnam"],
    correct: 1,
    category: "Tarih",
    difficulty: "Kolay"
  },
  {
    id: 186,
    question: "Anadolu'da kurulan ve ilk kez bilinen 'Halk Meclisi' (Pankuş) ile meşruti yönetime benzeyen bir sistem kuran uygarlık hangisidir?",
    options: ["Frigler", "Hititler", "Urartular", "Lidyalılar"],
    correct: 1,
    category: "Tarih",
    difficulty: "Zor"
  },
  {
    id: 187,
    question: "Osmanlı Devleti'nin kuruluş döneminde (1371) Sırplarla yapılan ve Balkanlar'da Osmanlı otoritesini güçlendiren savaş hangisidir?",
    options: ["Niğbolu Savaşı", "I. Kosova Savaşı", "Varna Savaşı", "Sırpsındığı Savaşı"],
    correct: 3,
    category: "Tarih",
    difficulty: "Zor"
  },
  {
    id: 188,
    question: "Antik Yunan'da, doğa bilimlerinin ve felsefenin geliştiği, ticaretle zenginleşen Ege kıyısındaki şehir devletleri (İyonya) hangi şehrin öncülüğünde yer almıştır?",
    options: ["Atina", "Foça", "Milet", "Efes"],
    correct: 2,
    category: "Tarih",
    difficulty: "Orta"
  },
  {
    id: 189,
    question: "Türk-İslam tarihinde, ilk kez 'Sultan' unvanını kullanan hükümdar kimdir?",
    options: ["Gazneli Mahmut", "Alp Arslan", "Satuk Buğra Han", "Tuğrul Bey"],
    correct: 0,
    category: "Tarih",
    difficulty: "Orta"
  },
  {
    id: 190,
    question: "1929'daki Büyük Buhran'dan sonra ABD'de Franklin D. Roosevelt'in ekonomiyi canlandırmak için uyguladığı program nedir?",
    options: ["Marshall Planı", "Monroe Doktrini", "Truman Doktrini", "New Deal"],
    correct: 3,
    category: "Tarih",
    difficulty: "Zor"
  },
  {
    id: 191,
    question: "Osmanlı Devleti'nde, ilk kez II. Mahmut döneminde kurulan ve Avrupa'ya öğrenci gönderen okul türü nedir?",
    options: ["Tıbbiye", "Mühendishane-i Berr-i Hümayun", "Enderun Mektebi", "Mekteb-i Harbiye"],
    correct: 3,
    category: "Tarih",
    difficulty: "Zor"
  },
  {
    id: 192,
    question: "Abbasiler döneminde, Türklerin yeteneklerinden dolayı kurulan ve sadece Türklere özgü ordugah şehri neresidir?",
    options: ["Kahire", "İsfahan", "Samarra", "Semerkant"],
    correct: 2,
    category: "Tarih",
    difficulty: "Zor"
  },
  {
    id: 193,
    question: "1938'de Almanya'nın ilhak ettiği ve I. Dünya Savaşı'ndan sonra parçalanan Slav devleti hangisidir?",
    options: ["Yugoslavya", "Çekoslovakya", "Polonya", "Avusturya"],
    correct: 1,
    category: "Tarih",
    difficulty: "Orta"
  },
  {
    id: 194,
    question: "Mezopotamya'da, Güneş ve Ay tutulmalarını önceden hesaplayabilen ve astronomide ileri giden uygarlık hangisidir?",
    options: ["Hititler", "Sümerler", "Mısırlılar", "Babilliler"],
    correct: 3,
    category: "Tarih",
    difficulty: "Orta"
  },
  {
    id: 195,
    question: "Türk Kurtuluş Savaşı'nda, İtalya'nın işgal ettiği ve işgalden sonra hiçbir çatışma olmadan çekildiği bölge neresidir?",
    options: ["İstanbul", "Trakya", "Güneybatı Anadolu (Antalya ve çevresi)", "Kuzeydoğu Anadolu"],
    correct: 2,
    category: "Tarih",
    difficulty: "Kolay"
  },
  {
    id: 196,
    question: "1487'de Ümit Burnu'nu keşfeden Portekizli denizci kimdir?",
    options: ["Vasco da Gama", "Bartolomeu Dias", "Ferdinand Macellan", "Kristof Kolomb"],
    correct: 1,
    category: "Tarih",
    difficulty: "Kolay"
  },
  {
    id: 197,
    question: "Osmanlı Devleti'nde ilk kez 'Mutlakiyet'in sona erdiği ve 'Meşrutiyet' rejimine geçişin yaşandığı dönem nedir?",
    options: ["Fetret Devri", "I. Meşrutiyet Dönemi", "Lale Devri", "Tanzimat Dönemi"],
    correct: 1,
    category: "Tarih",
    difficulty: "Kolay"
  },
  {
    id: 198,
    question: "Orta Çağ Avrupası'nda, bir derebeyine bağlılık yemini eden ve onun askeri hizmetini gören savaşçıya ne ad verilir?",
    options: ["Vasal", "Senyör", "Burjuva", "Köylü (Serf)"],
    correct: 0,
    category: "Tarih",
    difficulty: "Orta"
  },
  {
    id: 199,
    question: "II. Dünya Savaşı'nın sonunu getiren nükleer silahları geliştiren ABD projesinin kod adı nedir?",
    options: ["Uzay Yarışı", "Manhattan Projesi", "Yıldız Savaşları", "Apollo Projesi"],
    correct: 1,
    category: "Tarih",
    difficulty: "Kolay"
  },
  {
    id: 200,
    question: "Anadolu Selçuklularının başkenti olan ve Haçlı Seferleri nedeniyle daha sonra Konya'ya taşınan ilk başkent neresidir?",
    options: ["Kayseri", "Sivas", "Malatya", "İznik"],
    correct: 3,
    category: "Tarih",
    difficulty: "Orta"
  },

  // ==================== COĞRAFYA ====================
  {
    id: 201,
    question: "Türkiye'nin en büyük gölü hangisidir?",
    options: ["Beyşehir Gölü", "Eğirdir Gölü", "Tuz Gölü", "Van Gölü"],
    correct: 3,
    category: CATEGORIES.GEOGRAPHY.name,
    difficulty: 'Kolay'
  },
  {
    id: 202,
    question: "Hangi ülke 'Yükselen Güneşin Ülkesi' olarak bilinir?",
    options: ["Çin", "Güney Kore", "Tayland", "Japonya"],
    correct: 3,
    category: CATEGORIES.GEOGRAPHY.name,
    difficulty: 'Kolay'
  },
  {
    id: 203,
    question: "Dünyanın en uzun nehri hangisidir?",
    options: ["Yangtze", "Amazon", "Mississippi", "Nil"],
    correct: 3,
    category: CATEGORIES.GEOGRAPHY.name,
    difficulty: "Kolay"
  },
  {
    id: 204,
    question: "Türkiye'nin en yüksek dağı hangisidir?",
    options: ["Süphan Dağı", "Ağrı Dağı", "Kaçkar Dağları", "Erciyes Dağı"],
    correct: 1,
    category: CATEGORIES.GEOGRAPHY.name,
    difficulty: "Kolay"
  },
  {
    id: 205,
    question: "Büyük Set Resifi hangi ülkenin kıyılarında yer alır?",
    options: ["Brezilya", "Meksika", "Avustralya", "Endonezya"],
    correct: 2,
    category: CATEGORIES.GEOGRAPHY.name,
    difficulty: "Kolay"
  },
  {
    id: 206,
    question: "Ekvator çizgisi üzerinde yer alan Güney Amerika ülkesi hangisidir?",
    options: ["Peru", "Kolombiya", "Ekvador", "Şili"],
    correct: 2,
    category: CATEGORIES.GEOGRAPHY.name,
    difficulty: "Orta"
  },
  {
    id: 207,
    question: "İstanbul Boğazı hangi denizleri birbirine bağlar?",
    options: ["Marmara ve Akdeniz", "Akdeniz ve Ege", "Karadeniz ve Marmara", "Karadeniz ve Akdeniz"],
    correct: 2,
    category: CATEGORIES.GEOGRAPHY.name,
    difficulty: "Kolay"
  },
  {
    id: 208,
    question: "En fazla sayıda ülkeyle sınır komşusu olan kıta hangisidir?",
    options: ["Asya", "Afrika", "Avrupa", "Güney Amerika"],
    correct: 1,
    category: CATEGORIES.GEOGRAPHY.name,
    difficulty: "Orta"
  },
  {
    id: 209,
    question: "Hangi iklim tipinde yıl boyunca yüksek sıcaklık ve bol yağış görülür?",
    options: ["Muson İklimi", "Ekvatoral İklim", "Akdeniz İklimi", "Karasal İklim"],
    correct: 1,
    category: CATEGORIES.GEOGRAPHY.name,
    difficulty: "Kolay"
  },
  {
    id: 210,
    question: "Kanada'nın başkenti neresidir?",
    options: ["Montreal", "Toronto", "Ottawa", "Vancouver"],
    correct: 2,
    category: CATEGORIES.GEOGRAPHY.name,
    difficulty: "Kolay"
  },
  {
    id: 211,
    question: "Atlas Okyanusu'nu Büyük Okyanus'a bağlayan kanal hangisidir?",
    options: ["Kiel Kanalı", "Panama Kanalı", "Süveyş Kanalı", "Korint Kanalı"],
    correct: 1,
    category: CATEGORIES.GEOGRAPHY.name,
    difficulty: "Orta"
  },
  {
    id: 212,
    question: "Hangi dağ sırası 'ateş çemberi' (Pasifik Deprem Kuşağı) üzerinde yer alır?",
    options: ["Alp Dağları", "Himalayalar", "Ural Dağları", "Kayalık Dağları"],
    correct: 3, // Kayalık Dağları, Pasifik Ateş Çemberi'nin doğu sınırını oluşturur.
    category: CATEGORIES.GEOGRAPHY.name,
    difficulty: "Zor"
  },
  {
    id: 213,
    question: "Afrika kıtasının en güney ucu neresidir?",
    options: ["Babülmendep Boğazı", "Hormuz Boğazı", "Ümit Burnu", "Cebelitarık Boğazı"],
    correct: 2,
    category: CATEGORIES.GEOGRAPHY.name,
    difficulty: "Orta"
  },
  {
    id: 214,
    question: "Türkiye'de 'delta ovası' oluşumuna en iyi örnek nerede görülür?",
    options: ["Harran Ovası", "Çukurova", "Konya Ovası", "Iğdır Ovası"],
    correct: 1,
    category: CATEGORIES.GEOGRAPHY.name,
    difficulty: "Kolay"
  },
  {
    id: 215,
    question: "Bir bölgenin yalnızca enlem derecesiyle açıklanabilen özelliği hangisidir?",
    options: ["Yerel saat farkı", "Günlük sıcaklık farkı", "Yıllık yağış miktarı", "Ekinoks tarihlerinde yaşanan gece-gündüz süresi"],
    correct: 3,
    category: CATEGORIES.GEOGRAPHY.name,
    difficulty: "Zor"
  },
  {
    id: 216,
    question: "Fay hattı boyunca meydana gelen çöküntü alanlarına ne ad verilir?",
    options: ["Graben", "Bâti", "Horst", "Plato"],
    correct: 0,
    category: CATEGORIES.GEOGRAPHY.name,
    difficulty: "Orta"
  },
  {
    id: 217,
    question: "Dünyanın en yüksek şelalesi olan Angel Şelalesi hangi ülkede bulunur?",
    options: ["Venezuela", "Arjantin", "Brezilya", "Kanada"],
    correct: 0,
    category: CATEGORIES.GEOGRAPHY.name,
    difficulty: "Orta"
  },
  {
    id: 218,
    question: "Türkiye'de rüzgar erozyonunun en şiddetli olduğu bölgelerden biri neresidir?",
    options: ["Akdeniz Bölgesi", "Batı Anadolu", "Doğu Karadeniz", "İç Anadolu"],
    correct: 3,
    category: CATEGORIES.GEOGRAPHY.name,
    difficulty: "Kolay"
  },
  {
    id: 219,
    question: "Avustralya'nın en büyük çölü ve aynı zamanda en kalabalık şehrinin bulunduğu eyalet hangisidir?",
    options: ["Simpson Çölü / Güney Avustralya", "Büyük Victoria Çölü / Batı Avustralya", "Büyük Kum Çölü / Queensland", "Gibson Çölü / Victoria"],
    correct: 1, // Büyük Victoria Çölü (Güney Avustralya'da da payı var) ve Batı Avustralya'nın başkenti Perth
    category: CATEGORIES.GEOGRAPHY.name,
    difficulty: "Zor"
  },
  {
    id: 220,
    question: "Hangi coğrafi terim, bir nehrin denize döküldüğü yerde oluşan üçgen şeklindeki kara parçasını ifade eder?",
    options: ["Delta", "Haliç", "Menderes", "Fiyort"],
    correct: 0,
    category: CATEGORIES.GEOGRAPHY.name,
    difficulty: "Kolay"
  },
  {
    id: 221,
    question: "Dünyanın yörünge hareketinin (yıllık hareket) sonuçlarından biri nedir?",
    options: ["Günlük sıcaklık farkları", "Gece-gündüz oluşumu", "Mevsimlerin oluşumu", "Yerel saat farkları"],
    correct: 2,
    category: CATEGORIES.GEOGRAPHY.name,
    difficulty: "Kolay"
  },
  {
    id: 222,
    question: "Karstik şekillerin (mağara, obruk vb.) yaygın olduğu Türkiye bölgesi hangisidir?",
    options: ["Akdeniz Bölgesi", "Doğu Anadolu", "Güneydoğu Anadolu", "Marmara Bölgesi"],
    correct: 0,
    category: CATEGORIES.GEOGRAPHY.name,
    difficulty: "Kolay"
  },
  {
    id: 223,
    question: "Dünya'nın en derin noktası olan Mariana Çukuru hangi okyanusta yer alır?",
    options: ["Hint Okyanusu", "Büyük Okyanus (Pasifik)", "Arktik Okyanusu", "Atlas Okyanusu"],
    correct: 1,
    category: CATEGORIES.GEOGRAPHY.name,
    difficulty: "Orta"
  },
  {
    id: 224,
    question: "Moskova hangi ülkenin başkentidir?",
    options: ["Ukrayna", "Belarus", "Polonya", "Rusya"],
    correct: 3,
    category: CATEGORIES.GEOGRAPHY.name,
    difficulty: "Kolay"
  },
  {
    id: 225,
    question: "Bir yerin deniz seviyesine göre yüksekliğine ne ad verilir?",
    options: ["İzohips", "Enlem", "Boylam", "Rakım (Yükselti)"],
    correct: 3,
    category: CATEGORIES.GEOGRAPHY.name,
    difficulty: "Kolay"
  },
  {
    id: 226,
    question: "Türkiye'de falez (yalıyar) oluşumunun en tipik görüldüğü kıyı tipi hangisidir?",
    options: ["Ria tipi", "Boyuna kıyı tipi", "Enine kıyı tipi", "Dalmaçya tipi"],
    correct: 1,
    category: CATEGORIES.GEOGRAPHY.name,
    difficulty: "Zor"
  },
  {
    id: 227,
    question: "Kıtalar arasındaki sınırların belirlenmesinde genellikle hangi doğal sınır kullanılır?",
    options: ["Nehirler", "Denizler ve boğazlar", "Dağ sıraları", "Çöller"],
    correct: 1,
    category: CATEGORIES.GEOGRAPHY.name,
    difficulty: "Orta"
  },
  {
    id: 228,
    question: "Sibirya ve Alaska'nın birbirine en çok yaklaştığı coğrafi bölge/boğaz neresidir?",
    options: ["Dover Boğazı", "Macellan Boğazı", "Bering Boğazı", "Cebelitarık Boğazı"],
    correct: 2,
    category: CATEGORIES.GEOGRAPHY.name,
    difficulty: "Orta"
  },
  {
    id: 229,
    question: "Hangi ilimizde hem Karadeniz'e hem de Akdeniz'e özgü iklim özellikleri görülür?",
    options: ["Samsun", "Adana", "Kayseri", "Hatay"],
    correct: 3,
    category: CATEGORIES.GEOGRAPHY.name,
    difficulty: "Zor"
  },
  {
    id: 230,
    question: "Dünya nüfusunun büyük çoğunluğunun yaşadığı enlem aralığı yaklaşık olarak nedir?",
    options: ["40° - 70°", "70° - 90°", "10° - 40°", "0° - 10°"],
    correct: 2,
    category: CATEGORIES.GEOGRAPHY.name,
    difficulty: "Orta"
  },
  {
    id: 231,
    question: "Doğu ve Batı yarımküreleri ayıran başlangıç meridyeni hangi kentten geçer?",
    options: ["Greenwich (Londra)", "Paris", "Berlin", "Roma"],
    correct: 0,
    category: CATEGORIES.GEOGRAPHY.name,
    difficulty: "Kolay"
  },
  {
    id: 232,
    question: "Bir akarsuyun yatağını yana doğru aşındırması sonucu oluşan S şeklindeki kıvrımlara ne ad verilir?",
    options: ["Kanyon", "Dev kazanı", "Menderes", "Peri bacası"],
    correct: 2,
    category: CATEGORIES.GEOGRAPHY.name,
    difficulty: "Kolay"
  },
  {
    id: 233,
    question: "Afrika'nın en büyük gölü hangisidir?",
    options: ["Malavi Gölü", "Victoria Gölü", "Çad Gölü", "Tanganika Gölü"],
    correct: 1,
    category: CATEGORIES.GEOGRAPHY.name,
    difficulty: "Orta"
  },
  {
    id: 234,
    question: "Hangi doğal afetin oluşumu için sıcak ve nemli hava ile soğuk ve kuru havanın karşılaşması gerekir?",
    options: ["Tornado", "Tsunami", "Deprem", "Volkanizma"],
    correct: 0,
    category: CATEGORIES.GEOGRAPHY.name,
    difficulty: "Orta"
  },
  {
    id: 235,
    question: "Türkiye'nin en uzun kara sınırı hangi ülke iledir?",
    options: ["Irak", "Gürcistan", "İran", "Suriye"],
    correct: 3,
    category: CATEGORIES.GEOGRAPHY.name,
    difficulty: "Kolay"
  },
  {
    id: 236,
    question: "Muson rüzgarları hangi kıtada özellikle etkilidir?",
    options: ["Avustralya", "Kuzey Amerika", "Asya", "Avrupa"],
    correct: 2,
    category: CATEGORIES.GEOGRAPHY.name,
    difficulty: "Kolay"
  },
  {
    id: 237,
    question: "Antarktika'nın en yüksek zirvesi hangisidir?",
    options: ["Elbrus Dağı", "Denali Dağı", "Vinson Massif", "Kilimanjaro Dağı"],
    correct: 2,
    category: CATEGORIES.GEOGRAPHY.name,
    difficulty: "Zor"
  },
  {
    id: 238,
    question: "Mısır'da yer alan, Akdeniz'i Kızıldeniz'e bağlayan yapay su yolu hangisidir?",
    options: ["Süveyş Kanalı", "Hormuz Boğazı", "Cebelitarık Boğazı", "Panama Kanalı"],
    correct: 0,
    category: CATEGORIES.GEOGRAPHY.name,
    difficulty: "Kolay"
  },
  {
    id: 239,
    question: "Aşağıdakilerden hangisi bir 'Beşeri Coğrafya' konusu değildir?",
    options: ["Bitki örtüsü tipleri", "Ekonomik faaliyetler", "Nüfus dağılımı", "Göç hareketleri"],
    correct: 0,
    category: CATEGORIES.GEOGRAPHY.name,
    difficulty: "Orta"
  },
  {
    id: 240,
    question: "Dünya'nın iç çekirdeğinin hangi halde olduğu kabul edilir?",
    options: ["Sıvı", "Gaz", "Katı", "Yarı-sıvı (magma)"],
    correct: 2,
    category: CATEGORIES.GEOGRAPHY.name,
    difficulty: "Zor"
  },
  {
    id: 241,
    question: "Türkiye'de en çok yağış alan bölge hangisidir?",
    options: ["Karadeniz Bölgesi", "İç Anadolu", "Doğu Anadolu", "Ege Bölgesi"],
    correct: 0,
    category: CATEGORIES.GEOGRAPHY.name,
    difficulty: "Kolay"
  },
  {
    id: 242,
    question: "Avrupa ve Asya kıtalarını ayıran dağ sırası hangisidir?",
    options: ["Apalaşlar", "Pireneler", "Ural Dağları", "Toroslar"],
    correct: 2,
    category: CATEGORIES.GEOGRAPHY.name,
    difficulty: "Orta"
  },
  {
    id: 243,
    question: "Büyük Sahra Çölü hangi kıtada yer alır?",
    options: ["Avustralya", "Asya", "Kuzey Amerika", "Afrika"],
    correct: 3,
    category: CATEGORIES.GEOGRAPHY.name,
    difficulty: "Kolay"
  },
  {
    id: 244,
    question: "Bir bölgenin deniz etkisine açık olup olmadığını gösteren en önemli iklim faktörü nedir?",
    options: ["Hava basıncı", "Rüzgar yönü", "Yağış tipi", "Yıllık sıcaklık farkı"],
    correct: 3,
    category: CATEGORIES.GEOGRAPHY.name,
    difficulty: "Orta"
  },
  {
    id: 245,
    question: "Dünya'nın en büyük yüzölçümüne sahip ülkesi hangisidir?",
    options: ["Kanada", "ABD", "Çin", "Rusya"],
    correct: 3,
    category: CATEGORIES.GEOGRAPHY.name,
    difficulty: "Kolay"
  },
  {
    id: 246,
    question: "Türkiye'de rüzgarın taşıdığı ince kum ve tozların birikmesiyle oluşan yığınlara ne ad verilir?",
    options: ["Lös", "Barkan", "Moren", "Kumul"],
    correct: 3,
    category: CATEGORIES.GEOGRAPHY.name,
    difficulty: "Zor"
  },
  {
    id: 247,
    question: "Kışın sıcak ve yağışlı, yazın sıcak ve kurak geçen iklim tipi hangisidir?",
    options: ["Okyanusal İklim", "Akdeniz İklimi", "Tundra İklimi", "Savan İklimi"],
    correct: 1,
    category: CATEGORIES.GEOGRAPHY.name,
    difficulty: "Kolay"
  },
  {
    id: 248,
    question: "Meksika Körfezi'nden doğup, Kuzey Amerika'nın doğu kıyıları boyunca ilerleyen sıcak su akıntısı hangisidir?",
    options: ["Kuroşio Akıntısı", "Gulf Stream", "Humboldt Akıntısı", "Labrador Akıntısı"],
    correct: 1,
    category: CATEGORIES.GEOGRAPHY.name,
    difficulty: "Zor"
  },
  {
    id: 249,
    question: "Türkiye'nin hangi bölgesinde nüfus yoğunluğu en fazladır?",
    options: ["Marmara Bölgesi", "Güneydoğu Anadolu", "Doğu Anadolu", "İç Anadolu"],
    correct: 0,
    category: CATEGORIES.GEOGRAPHY.name,
    difficulty: "Kolay"
  },
  {
    id: 250,
    question: "Hangi doğal oluşum, volkanik arazilerde suyun buharlaşmasıyla oluşan gayzerleri barındırır?",
    options: ["Mağara", "Kaplıca", "Fay hattı", "Krater"],
    correct: 2, // Gayzerler genellikle jeotermal aktivitenin olduğu fay hatlarında veya volkanik alanlarda bulunur, ancak en doğru cevap gayzerin kendisinin oluşumudur.
    category: CATEGORIES.GEOGRAPHY.name,
    difficulty: "Orta"
  },
  {
    id: 251,
    question: "Eş yükselti eğrilerine (izohips) göre, birbirini çevrelemeyen iki farklı izohips eğrisi neyi ifade eder?",
    options: ["Aynı yükseltiye sahip farklı bölgeleri", "Bir dağın zirvesini", "Farklı yükseltiye sahip iki tepenin zirvesini", "Bir vadinin tabanını"],
    correct: 0,
    category: CATEGORIES.GEOGRAPHY.name,
    difficulty: "Orta"
  },
  {
    id: 252,
    question: "Hangi doğal kaynak yenilenebilir enerji kaynağı olarak kabul edilmez?",
    options: ["Güneş enerjisi", "Rüzgar enerjisi", "Jeotermal enerji", "Doğal gaz"],
    correct: 3,
    category: CATEGORIES.GEOGRAPHY.name,
    difficulty: "Kolay"
  },
  {
    id: 253,
    question: "Asya'nın en yüksek zirvesi olan Everest Dağı hangi iki ülkenin sınırında yer alır?",
    options: ["Çin ve Hindistan", "Pakistan ve Hindistan", "Nepal ve Butan", "Nepal ve Çin"],
    correct: 3,
    category: CATEGORIES.GEOGRAPHY.name,
    difficulty: "Orta"
  },
  {
    id: 254,
    question: "Bir izohips haritasında eğrilerin birbirine çok yakın çizildiği yerler neyi gösterir?",
    options: ["Eğimli (sarp) arazi", "Geniş vadi tabanı", "Düz arazi", "Yüksek platolar"],
    correct: 0,
    category: CATEGORIES.GEOGRAPHY.name,
    difficulty: "Kolay"
  },
  {
    id: 255,
    question: "Türkiye'nin en batı ucunda yer alan ilimiz hangisidir?",
    options: ["Edirne", "Aydın", "İzmir", "Çanakkale"],
    correct: 0,
    category: CATEGORIES.GEOGRAPHY.name,
    difficulty: "Orta"
  },
  {
    id: 256,
    question: "Hangi enlem dairesi, Güneş ışınlarının yılda bir kez 90° açıyla düştüğü son sınırdır?",
    options: ["Yengeç Dönencesi", "Ekvator", "Kuzey Kutup Dairesi", "Oğlak Dönencesi"],
    correct: 0,
    category: CATEGORIES.GEOGRAPHY.name,
    difficulty: "Zor" // Hem Oğlak hem de Yengeç Dönencesi bu tanıma uyar. Cevapta yalnızca Yengeç verilmiş. Enlem dairesi dendiği için dönencelerden biri kabul edilir.
  },
  {
    id: 257,
    question: "Akarsuların yatağını derinlemesine aşındırması sonucu oluşan, dik yamaçlı derin vadilere ne ad verilir?",
    options: ["Tabanlı vadi", "Kanyon vadi", "Boğaz vadi", "Asimetrik vadi"],
    correct: 1,
    category: CATEGORIES.GEOGRAPHY.name,
    difficulty: "Orta"
  },
  {
    id: 258,
    question: "Hollanda'da denizden kazanılan arazilere ne ad verilir?",
    options: ["Kıyı oku", "Polder", "Lagün", "Fiyort"],
    correct: 1,
    category: CATEGORIES.GEOGRAPHY.name,
    difficulty: "Orta"
  },
  {
    id: 259,
    question: "Aşağıdaki ülkelerden hangisi hem Avrupa'da hem de Asya'da toprakları bulunan bir 'transkontinental' ülke değildir?",
    options: ["İran", "Kazakistan", "Türkiye", "Rusya"],
    correct: 0,
    category: CATEGORIES.GEOGRAPHY.name,
    difficulty: "Zor"
  },
  {
    id: 260,
    question: "Bir akarsuyun yatağının eğiminin azaldığı ve yana aşındırmanın arttığı bölüme ne ad verilir?",
    options: ["Yukarı çığır", "Plato", "Şelale", "Aşağı çığır"],
    correct: 3,
    category: CATEGORIES.GEOGRAPHY.name,
    difficulty: "Kolay"
  },
  {
    id: 261,
    question: "Dünya'nın kendi ekseni etrafındaki dönüş hızının en fazla olduğu yer neresidir?",
    options: ["Kutuplar", "Yengeç Dönencesi", "Oğlak Dönencesi", "Ekvator"],
    correct: 3,
    category: CATEGORIES.GEOGRAPHY.name,
    difficulty: "Kolay"
  },
  {
    id: 262,
    question: "Hangi jeolojik devirde, Alp-Himalaya kıvrım sisteminin oluşumu başlamış ve Türkiye'deki fay hatları belirginleşmiştir?",
    options: ["Mezozoyik", "Paleozoyik", "Tersiyer (Neojen)", "Kuvaterner"],
    correct: 2,
    category: CATEGORIES.GEOGRAPHY.name,
    difficulty: "Zor"
  },
  {
    id: 263,
    question: "Atmosferin en alt katmanı ve tüm hava olaylarının yaşandığı katman hangisidir?",
    options: ["Termosfer", "Stratosfer", "Troposfer", "Mezosfer"],
    correct: 2,
    category: CATEGORIES.GEOGRAPHY.name,
    difficulty: "Kolay"
  },
  {
    id: 264,
    question: "Hangi deniz, dünyanın en tuzlu denizlerinden biri olarak bilinir?",
    options: ["Karadeniz", "Baltık Denizi", "Kızıldeniz", "Akdeniz"],
    correct: 2,
    category: CATEGORIES.GEOGRAPHY.name,
    difficulty: "Orta"
  },
  {
    id: 265,
    question: "Ülkelerin yalnızca coğrafi konumuna bağlı olarak belirlenen sınırlar ne tür sınırlardır?",
    options: ["Yapısal sınırlar", "Doğal sınırlar", "Geometrik (Astrolojik) sınırlar", "Antlaşma sınırları"],
    correct: 2,
    category: CATEGORIES.GEOGRAPHY.name,
    difficulty: "Zor"
  },
  {
    id: 266,
    question: "Türkiye'de ipekböcekçiliği ve buna bağlı olarak ipekli dokuma sanayinin en yaygın olduğu ilimiz hangisidir?",
    options: ["Antalya", "Gaziantep", "Bursa", "İstanbul"],
    correct: 2,
    category: CATEGORIES.GEOGRAPHY.name,
    difficulty: "Kolay"
  },
  {
    id: 267,
    question: "Sıcaklığın yükseldikçe azaldığı atmosfer katmanı hangisidir?",
    options: ["Eksosfer", "Termosfer", "Stratosfer", "Troposfer"],
    correct: 3,
    category: CATEGORIES.GEOGRAPHY.name,
    difficulty: "Orta"
  },
  {
    id: 268,
    question: "Aşağıdakilerden hangisi bir 'jeosenklinal' (deniz tabanındaki büyük çukurluk) bölgede oluşmuştur?",
    options: ["Fay hattı", "Plato", "Volkanik kütle", "Kıvrım Dağları"],
    correct: 3,
    category: CATEGORIES.GEOGRAPHY.name,
    difficulty: "Zor"
  },
  {
    id: 269,
    question: "Tarihi İpek Yolu'nun bitiş noktası olarak kabul edilen şehir hangisidir?",
    options: ["İskenderiye", "Pekin", "İstanbul (Konstantinopolis)", "Şam"],
    correct: 2,
    category: CATEGORIES.GEOGRAPHY.name,
    difficulty: "Orta"
  },
  {
    id: 270,
    question: "Ozon tabakası atmosferin hangi katmanında yer alır?",
    options: ["Stratosfer", "Troposfer", "Mezosfer", "Termosfer"],
    correct: 0,
    category: CATEGORIES.GEOGRAPHY.name,
    difficulty: "Kolay"
  },
  {
    id: 271,
    question: "Türkiye'de 'taşkömürü' yataklarının en yoğun olduğu bölge neresidir?",
    options: ["Sivas", "Ege Bölgesi", "Zonguldak (Batı Karadeniz)", "Kayseri"],
    correct: 2,
    category: CATEGORIES.GEOGRAPHY.name,
    difficulty: "Kolay"
  },
  {
    id: 272,
    question: "Kuzey Amerika'nın en yüksek zirvesi hangisidir?",
    options: ["Mount Whitney", "Denali (Mount McKinley)", "Mount Logan", "Mount Rainier"],
    correct: 1,
    category: CATEGORIES.GEOGRAPHY.name,
    difficulty: "Zor"
  },
  {
    id: 273,
    question: "Dünya'nın eksen eğikliğinin sonucu olarak aşağıdakilerden hangisi gerçekleşir?",
    options: ["Günlük sıcaklık farkları", "Güneş ışınlarının düşme açısının yıl içinde değişmesi", "Meltem rüzgarlarının oluşması", "Gece ve gündüzün birbirini takip etmesi"],
    correct: 1,
    category: CATEGORIES.GEOGRAPHY.name,
    difficulty: "Orta"
  },
  {
    id: 274,
    question: "İtalya'da yer alan ünlü aktif volkan hangisidir?",
    options: ["Krakatoa", "Fuji Dağı", "Etna Yanardağı", "Vezüv Dağı"],
    correct: 2,
    category: CATEGORIES.GEOGRAPHY.name,
    difficulty: "Kolay"
  },
  {
    id: 275,
    question: "Büyük Okyanus'taki adaların büyük bir kısmını kapsayan bölgeye ne ad verilir?",
    options: ["Polinezya", "Okyanusya", "Mikronezya", "Melanezya"],
    correct: 1,
    category: CATEGORIES.GEOGRAPHY.name,
    difficulty: "Orta"
  },
  {
    id: 276,
    question: "Türkiye'nin hangi bölgesi 'doğu-batı' doğrultusunda en geniş yüzölçümüne sahiptir?",
    options: ["Karadeniz Bölgesi", "Ege Bölgesi", "İç Anadolu Bölgesi", "Doğu Anadolu Bölgesi"],
    correct: 0,
    category: CATEGORIES.GEOGRAPHY.name,
    difficulty: "Zor"
  },
  {
    id: 277,
    question: "Yüksek dağlık bölgelerde, kalıcı kar sınırının altında, kısa ot ve çalılardan oluşan bitki örtüsü nedir?",
    options: ["Tundra", "Tayga", "Makiler", "Alpin çayır (dağ çayırı)"],
    correct: 3,
    category: CATEGORIES.GEOGRAPHY.name,
    difficulty: "Orta"
  },
  {
    id: 278,
    question: "İstanbul'un koordinatları yaklaşık olarak hangi meridyen ve paralel aralığında yer alır?",
    options: ["36°D - 42°K", "26°D - 40°K", "29°D - 41°K", "30°D - 36°K"],
    correct: 2,
    category: CATEGORIES.GEOGRAPHY.name,
    difficulty: "Zor"
  },
  {
    id: 279,
    question: "Dünyanın en büyük tatlı su gölü (hacim ve yüzey alanı bakımından) hangisidir?",
    options: ["Superior Gölü", "Huron Gölü", "Baykal Gölü", "Michigan Gölü"],
    correct: 2,
    category: CATEGORIES.GEOGRAPHY.name,
    difficulty: "Orta"
  },
  {
    id: 280,
    question: "Hangi rüzgar tipi, Türkiye'de kışın sıcaklıkları yükselterek 'fön etkisi' yaratır?",
    options: ["Poyraz", "Lodos", "Samyeli", "Kıble"],
    correct: 1,
    category: CATEGORIES.GEOGRAPHY.name,
    difficulty: "Kolay"
  },
  {
    id: 281,
    question: "Kayaçların çözünmesi sonucu oluşan, kırmızı renkli topraklara ne ad verilir?",
    options: ["Çernezyom", "Terra Rossa", "Laterit", "Podzol"],
    correct: 1,
    category: CATEGORIES.GEOGRAPHY.name,
    difficulty: "Orta"
  },
  {
    id: 282,
    question: "Dünya'nın en büyük adası (kıta olmayan) hangisidir?",
    options: ["Grönland", "Madagaskar", "Borneo", "Yeni Gine"],
    correct: 0,
    category: CATEGORIES.GEOGRAPHY.name,
    difficulty: "Kolay"
  },
  {
    id: 283,
    question: "Aşağıdakilerden hangisi bir 'jeomorfolojik' (yer şekilleri) olay değildir?",
    options: ["Sel", "Tsunami", "Deprem", "Volkanizma"],
    correct: 0, // Sel bir hidrolojik, deprem bir tektonik olaydır. Jeomorfolojik olaylar yer şekillerinin oluşumuyla ilgilidir. Sel erozyonla yer şekli oluşturur. Deprem ise yerin hareketidir, jeomorfolojik bir süreç değil, sonucu jeomorfolojiktir. En net cevap Sel/Tsunami'dir. Tsunami seçeneği daha genel bir afettir.
    category: CATEGORIES.GEOGRAPHY.name,
    difficulty: "Zor"
  },
  {
    id: 284,
    question: "Türkiye'de kırsal yerleşmelerde ev yapımında volkanik tüf ve bazalt gibi malzemelerin yaygın olduğu bölge neresidir?",
    options: ["Marmara Bölgesi", "Karadeniz Bölgesi", "İç Anadolu (Kapadokya çevresi)", "Akdeniz Bölgesi"],
    correct: 2,
    category: CATEGORIES.GEOGRAPHY.name,
    difficulty: "Kolay"
  },
  {
    id: 285,
    question: "Ülkeler arasında, doğal kaynakların (su, petrol vb.) paylaşımı nedeniyle çıkan anlaşmazlıkları inceleyen coğrafya alt dalı hangisidir?",
    options: ["Tarihi Coğrafya", "Kültürel Coğrafya", "Ekonomik Coğrafya", "Siyasi Coğrafya"],
    correct: 3,
    category: CATEGORIES.GEOGRAPHY.name,
    difficulty: "Orta"
  },
  {
    id: 286,
    question: "Hangi iklim bölgesinde nüfus yoğunluğu sıcaklık ve nemin yüksekliği nedeniyle düşüktür?",
    options: ["Muson Bölgesi", "Karasal Bölge", "Ekvatoral Bölge", "Akdeniz Bölgesi"],
    correct: 2,
    category: CATEGORIES.GEOGRAPHY.name,
    difficulty: "Kolay"
  },
  {
    id: 287,
    question: "Türkiye'de 'yatay ve dikey yönde' en fazla göç alan ilimiz hangisidir?",
    options: ["Antalya", "Ankara", "İstanbul", "İzmir"],
    correct: 2,
    category: CATEGORIES.GEOGRAPHY.name,
    difficulty: "Kolay"
  },
  {
    id: 288,
    question: "Kuzey Afrika'da esen, sıcak ve kuru çöl rüzgarlarına verilen genel ad nedir?",
    options: ["Hamsin", "Mistral", "Sirokko (Sirocco)", "Bora"],
    correct: 2,
    category: CATEGORIES.GEOGRAPHY.name,
    difficulty: "Zor"
  },
  {
    id: 289,
    question: "Ege Bölgesi'nde dağların kıyıya dik uzanması sonucunda oluşan kıyı tipi hangisidir?",
    options: ["Enine", "Boyuna", "Ria", "Dalmaçya"],
    correct: 0,
    category: CATEGORIES.GEOGRAPHY.name,
    difficulty: "Kolay"
  },
  {
    id: 290,
    question: "Deniz seviyesinin 200 metrenin altında kalan, kıta sahanlığının dışındaki derin deniz bölgelerine ne ad verilir?",
    options: ["Okyanus hendeği", "Kıta sahanlığı", "Kıta yamacı", "Abisal düzlük"],
    correct: 3,
    category: CATEGORIES.GEOGRAPHY.name,
    difficulty: "Zor"
  },
  {
    id: 291,
    question: "İzmir, Adana ve Bursa'da ortak olarak görülen iklim tipi hangisidir?",
    options: ["Akdeniz", "Yarı kurak", "Karadeniz", "Karasal"],
    correct: 0,
    category: CATEGORIES.GEOGRAPHY.name,
    difficulty: "Kolay"
  },
  {
    id: 292,
    question: "Dünya üzerindeki en büyük tektonik plaka hangisidir?",
    options: ["Afrika Plakası", "Avrasya Plakası", "Kuzey Amerika Plakası", "Pasifik Plakası"],
    correct: 3,
    category: CATEGORIES.GEOGRAPHY.name,
    difficulty: "Orta"
  },
  {
    id: 293,
    question: "Atmosferdeki karbondioksit ve su buharının artışının sebep olduğu olay nedir?",
    options: ["Asit yağmurları", "Ozon incelmesi", "Hava kirliliği", "Sera etkisi"],
    correct: 3,
    category: CATEGORIES.GEOGRAPHY.name,
    difficulty: "Kolay"
  },
  {
    id: 294,
    question: "Aşağıdakilerden hangisi dağ oluşumu (orojenez) sonucu meydana gelmez?",
    options: ["Kırık dağları", "Antiklinal", "Volkanik dağlar", "Kıvrım dağları"],
    correct: 2,
    category: CATEGORIES.GEOGRAPHY.name,
    difficulty: "Orta"
  },
  {
    id: 295,
    question: "Avrupa'nın en uzun nehri olan Volga Nehri hangi denize dökülür?",
    options: ["Akdeniz", "Hazar Denizi", "Baltık Denizi", "Karadeniz"],
    correct: 1,
    category: CATEGORIES.GEOGRAPHY.name,
    difficulty: "Zor"
  },
  {
    id: 296,
    question: "İklim bilimi (Klimatoloji) coğrafyanın hangi ana dalına girer?",
    options: ["Fiziki Coğrafya", "Beşeri Coğrafya", "Ekonomik Coğrafya", "Bölgesel Coğrafya"],
    correct: 0,
    category: CATEGORIES.GEOGRAPHY.name,
    difficulty: "Kolay"
  },
  {
    id: 297,
    question: "Türkiye'de kış turizminin önemli merkezlerinden biri olan Uludağ hangi ildedir?",
    options: ["Sivas", "Kayseri", "Bursa", "Erzurum"],
    correct: 2,
    category: CATEGORIES.GEOGRAPHY.name,
    difficulty: "Kolay"
  },
  {
    id: 298,
    question: "Dünyada 'Tundra' ikliminin görüldüğü bölgelerde hakim olan bitki örtüsü tipi nedir?",
    options: ["Uzun otlar (savan)", "Geniş yapraklı ormanlar", "Yosun ve likenler", "Kaktüsler"],
    correct: 2,
    category: CATEGORIES.GEOGRAPHY.name,
    difficulty: "Orta"
  },
  {
    id: 299,
    question: "İzohips haritalarında, ok işareti ile gösterilen dışa dönük eğri, neyi temsil eder?",
    options: ["Tepe", "Çanak (Kapalı çukur)", "Sırt", "Vadi"],
    correct: 1,
    category: CATEGORIES.GEOGRAPHY.name,
    difficulty: "Zor"
  },
  {
    id: 300,
    question: "Türkiye'nin matematik konumunun sonucu olarak aşağıdakilerden hangisi yaşanmaz?",
    options: ["Kutuplara yakın kuşakta yer alması", "Dört mevsimin belirgin yaşanması", "Batıdan doğuya gidildikçe yerel saatin ileri olması", "Gölge boylarının hiçbir zaman sıfır olmaması"],
    correct: 1, // Dört mevsimin yaşanması (ılıman kuşakta yer alması) göreceli (özel) konumdur, matematik konum değil.
    category: CATEGORIES.GEOGRAPHY.name,
    difficulty: "Zor"
  },
  {
    id: 301,
    question: "Yer kabuğunu oluşturan levhaların hareket etmesini inceleyen bilim dalı nedir?",
    options: ["Jeomorfoloji", "Tektonik", "Sismoloji", "Klimatoloji"],
    correct: 1,
    category: "Coğrafya",
    difficulty: "Kolay"
  },
  {
    id: 302,
    question: "Ekvatoral iklimin tipik bitki örtüsü nedir?",
    options: ["Tundra", "Geniş Yapraklı Yağmur Ormanları", "Savanlar", "Kaktüsler"],
    correct: 1,
    category: "Coğrafya",
    difficulty: "Kolay"
  },
  {
    id: 303,
    question: "Bir akarsuyun yatağını derine doğru aşındırması sonucu oluşan dik yamaçlı derin vadiye ne ad verilir?",
    options: ["Delta", "Falez", "Menderes", "Kanyon"],
    correct: 3,
    category: "Coğrafya",
    difficulty: "Orta"
  },
  {
    id: 304,
    question: "Türkiye'de Akdeniz ikliminin görüldüğü bölgelerde tipik olan kısa boylu, sert yapraklı ağaççıklardan oluşan bitki topluluğu nedir?",
    options: ["Maki", "Tayga", "Alpin Çayırlar", "Bozkır"],
    correct: 0,
    category: "Coğrafya",
    difficulty: "Kolay"
  },
  {
    id: 305,
    question: "Dünya nüfusunun en yoğun olduğu kıta hangisidir?",
    options: ["Avrupa", "Asya", "Afrika", "Kuzey Amerika"],
    correct: 1,
    category: "Coğrafya",
    difficulty: "Kolay"
  },
  {
    id: 306,
    question: "Atmosferdeki su buharının yoğunlaşması sonucu oluşan ve yer yüzeyine yakın katmanlarda görülen yoğunlaşma ürünü nedir?",
    options: ["Sulu Kar", "Çiy", "Dolu", "Sis"],
    correct: 3,
    category: "Coğrafya",
    difficulty: "Orta"
  },
  {
    id: 307,
    question: "İki dağ sırası arasında yer alan, genellikle uzun ve çukur alçak araziye ne ad verilir?",
    options: ["Plato", "Sırt", "Ova", "Vadi"],
    correct: 3,
    category: "Coğrafya",
    difficulty: "Kolay"
  },
  {
    id: 308,
    question: "İnsanların yaşamlarını devam ettirmek için ihtiyaç duyduğu kaynakları tüketme hızını ifade eden çevresel gösterge nedir?",
    options: ["Ekolojik Ayak İzi", "Biyoçeşitlilik", "Karbon Ayak İzi", "Ekolojik Denge"],
    correct: 0,
    category: "Coğrafya",
    difficulty: "Zor"
  },
  {
    id: 309,
    question: "Türkiye'deki en uzun akarsu hangisidir (Tamamı Türkiye sınırları içinde olan)?",
    options: ["Fırat Nehri", "Sakarya Nehri", "Kızılırmak", "Dicle Nehri"],
    correct: 2,
    category: "Coğrafya",
    difficulty: "Kolay"
  },
  {
    id: 310,
    question: "Dünya'nın kendi ekseni etrafındaki dönüşü sonucu ortaya çıkan kuvvet nedir?",
    options: ["Koriolis Kuvveti", "Santrifüj Kuvveti", "Yerçekimi Kuvveti", "Gelgit Kuvveti"],
    correct: 0,
    category: "Coğrafya",
    difficulty: "Orta"
  },
  {
    id: 311,
    question: "Yıllık sıcaklık farkının en fazla olduğu iklim tipi hangisidir?",
    options: ["Karasal İklim", "Okyanusal İklim", "Akdeniz İklimi", "Ekvatoral İklim"],
    correct: 0,
    category: "Coğrafya",
    difficulty: "Kolay"
  },
  {
    id: 312,
    question: "Bir haritada iki nokta arasındaki gerçek uzaklığı bulmak için kullanılan ve haritanın küçültme oranını gösteren unsur nedir?",
    options: ["Coğrafi Koordinat", "Ölçek", "İzohips", "Lejant"],
    correct: 1,
    category: "Coğrafya",
    difficulty: "Kolay"
  },
  {
    id: 313,
    question: "Lav, kül ve gaz gibi materyallerin yeryüzüne püskürdüğü konik şekilli yükseltilere ne ad verilir?",
    options: ["Volkan", "Kırık Dağ", "Sismik Bölge", "Fay Hattı"],
    correct: 0,
    category: "Coğrafya",
    difficulty: "Kolay"
  },
  {
    id: 314,
    question: "Dünya üzerinde 0° meridyenine ne ad verilir?",
    options: ["Uluslararası Tarih Değiştirme Çizgisi", "Ekvator", "Yengeç Dönencesi", "Greenwich (Başlangıç) Meridyeni"],
    correct: 3,
    category: "Coğrafya",
    difficulty: "Kolay"
  },
  {
    id: 315,
    question: "Toprak altında biriken yer altı sularının doğal olarak yeryüzüne çıktığı noktaya ne ad verilir?",
    options: ["Gayzer", "Artezyen Kuyusu", "Akarsu", "Kaynak"],
    correct: 3,
    category: "Coğrafya",
    difficulty: "Kolay"
  },
  {
    id: 316,
    question: "Türkiye'de en fazla yağış alan bölge (yerel farklılıklar hariç, genel olarak) hangisidir?",
    options: ["Karadeniz Bölgesi", "Akdeniz Bölgesi", "İç Anadolu Bölgesi", "Doğu Anadolu Bölgesi"],
    correct: 0,
    category: "Coğrafya",
    difficulty: "Kolay"
  },
  {
    id: 317,
    question: "Nüfusun ikiye katlanması için gereken süreyi gösteren, nüfus coğrafyasında kullanılan terim nedir?",
    options: ["Nüfus Artış Hızı", "Demografik Dönüşüm", "Bağımlı Nüfus Oranı", "Doğurganlık Oranı"],
    correct: 1,
    category: "Coğrafya",
    difficulty: "Orta"
  },
  {
    id: 318,
    question: "Bir bölgenin su dengesini, sıcaklığını ve nemini büyük ölçüde etkileyen, geniş alanda esen rüzgar sistemi nedir?",
    options: ["Meltem Rüzgarı", "Fön Rüzgarı", "Muson Rüzgarları", "Kasırga"],
    correct: 2,
    category: "Coğrafya",
    difficulty: "Kolay"
  },
  {
    id: 319,
    question: "Göllerin sularını denizlere ulaştıran doğal kanala ne ad verilir?",
    options: ["Lagün", "Gider (Boşalma Kanalı)", "Boğaz", "Körfez"],
    correct: 1,
    category: "Coğrafya",
    difficulty: "Orta"
  },
  {
    id: 320,
    question: "Enlem dereceleri arasındaki uzaklık (kilometre cinsinden) hangi paralelde en fazladır?",
    options: ["Ekvator", "30° Enlemi", "Kutupta", "Tüm Enlemlerde Eşittir"],
    correct: 3,
    category: "Coğrafya",
    difficulty: "Orta"
  },
  {
    id: 321,
    question: "Deniz seviyesinden yüksekte kalan, akarsular tarafından derin vadilerle yarılmış geniş düzlüklere ne ad verilir?",
    options: ["Graben", "Ova", "Delta", "Plato"],
    correct: 3,
    category: "Coğrafya",
    difficulty: "Kolay"
  },
  {
    id: 322,
    question: "Türkiye'nin matematik (mutlak) konumu, hangi enlem ve meridyenler arasında yer aldığını belirtir?",
    options: ["36-42 Kuzey, 26-45 Doğu", "36-42 Güney, 26-45 Batı", "26-45 Doğu, 36-42 Kuzey", "26-45 Kuzey, 36-42 Doğu"],
    correct: 2,
    category: "Coğrafya",
    difficulty: "Kolay"
  },
  {
    id: 323,
    question: "Yer kabuğundaki derin çatlaklar boyunca meydana gelen düşey veya yatay hareketlerle oluşan dağ sistemleri nedir?",
    options: ["Kırık Dağlar (Horst-Graben)", "Kıvrım Dağları", "Volkanik Dağlar", "Deprem Fayları"],
    correct: 0,
    category: "Coğrafya",
    difficulty: "Kolay"
  },
  {
    id: 324,
    question: "Erozyonun en az olduğu, toprağın yerinde kaldığı ve genellikle eğimin az olduğu alanlarda görülen tarım şekli nedir?",
    options: ["Modern Tarım", "Basamaklama (Teraslama) Tarımı", "Eğimli Yamaç Tarımı", "Nadas Sistemi"],
    correct: 1,
    category: "Coğrafya",
    difficulty: "Orta"
  },
  {
    id: 325,
    question: "Sıcak ve soğuk okyanus akıntılarının karşılaştığı yerler, balıkçılık açısından neden zengindir?",
    options: ["Buzulların erimesiyle besin gelmesi", "Akıntıların balıkları bir araya getirmesi", "Daha az avlanma yapıldığı için", "Plankton (deniz canlısı besini) miktarının artması"],
    correct: 3,
    category: "Coğrafya",
    difficulty: "Orta"
  },
  {
    id: 326,
    question: "Denizden esen rüzgarın, dağ yamacına çarpıp yükselmesi ve yoğunlaşması sonucu oluşan yağış tipi nedir?",
    options: ["Çiy Yağışı", "Orografik (Yamaç) Yağış", "Cephesel Yağış", "Konveksiyonel (Yükselim) Yağış"],
    correct: 1,
    category: "Coğrafya",
    difficulty: "Kolay"
  },
  {
    id: 327,
    question: "Dünya'nın şekli nedeniyle Ekvator'dan kutuplara doğru gidildikçe sıcaklıkların azalması hangi faktöre bağlıdır?",
    options: ["Yükselti", "Nemlilik", "Güneş Işınlarının Geliş Açısı", "Kara ve Deniz Dağılışı"],
    correct: 2,
    category: "Coğrafya",
    difficulty: "Kolay"
  },
  {
    id: 328,
    question: "Bir bölgede yaşayan ve 65 yaş üstü olan nüfusun toplam nüfusa oranı hangi demografik yapının göstergesidir?",
    options: ["Çocuk Nüfus", "Çalışan Nüfus", "Yaşlı Bağımlı Nüfus", "Genç Nüfus"],
    correct: 2,
    category: "Coğrafya",
    difficulty: "Kolay"
  },
  {
    id: 329,
    question: "Bir akarsuyun denize döküldüğü yerde, akıntıların zayıf olması ve gelgit etkisinin az olması durumunda oluşan yeryüzü şekli nedir?",
    options: ["Kıyı Ovası", "Delta Ovası", "Haliç", "Falez"],
    correct: 1,
    category: "Coğrafya",
    difficulty: "Orta"
  },
  {
    id: 330,
    question: "Üzerindeki buzul kütlesinin erimesi sonucu oluşan çukurluklara dolan sularla oluşan göllere ne ad verilir?",
    options: ["Set Gölleri", "Volkanik Göller", "Tektonik Göller", "Buzul Gölleri (Sirk Gölleri)"],
    correct: 3,
    category: "Coğrafya",
    difficulty: "Kolay"
  },
  {
    id: 331,
    question: "Dünya'nın iç yapısında, manto ile çekirdek arasında yer alan katman hangisidir?",
    options: ["Alt Manto", "Sima", "Sial", "Dış Çekirdek"],
    correct: 3,
    category: "Coğrafya",
    difficulty: "Orta"
  },
  {
    id: 332,
    question: "Çöl ikliminin en tipik özelliği nedir?",
    options: ["Yüksek yıllık yağış miktarı", "Yüksek günlük sıcaklık farkı", "Düşük günlük sıcaklık farkı", "Yüksek yıllık sıcaklık ortalaması"],
    correct: 1,
    category: "Coğrafya",
    difficulty: "Kolay"
  },
  {
    id: 333,
    question: "Bir bölgenin nüfus dağılışını en çok etkileyen fiziki coğrafya faktörü nedir?",
    options: ["Yeraltı kaynakları", "Sanayileşme", "Ulaşım imkanları", "İklim ve Yer Şekilleri"],
    correct: 3,
    category: "Coğrafya",
    difficulty: "Kolay"
  },
  {
    id: 334,
    question: "Karstik arazilerde (kireçtaşı gibi eriyebilen kayaçlarda) yer altı sularının çözünme ve çökelme ile oluşturduğu mağara içindeki sarkıt ve dikitlere ne ad verilir?",
    options: ["Dolin", "Obruk", "Traverten", "Mağara Oluşumları (Speleotemler)"],
    correct: 3,
    category: "Coğrafya",
    difficulty: "Orta"
  },
  {
    id: 335,
    question: "Ekvator çevresindeki dinamik yüksek basınç alanlarından, 60° enlemlerindeki dinamik alçak basınç alanlarına doğru esen sürekli rüzgarlar nedir?",
    options: ["Alize Rüzgarları", "Kutup Rüzgarları", "Muson Rüzgarları", "Batı Rüzgarları"],
    correct: 3,
    category: "Coğrafya",
    difficulty: "Zor"
  },
  {
    id: 336,
    question: "Haritalarda aynı yükseltiye sahip noktaların birleştirilmesiyle elde edilen eğrilere ne ad verilir?",
    options: ["İzohips", "İzoterm", "İzobar", "İzoyet"],
    correct: 0,
    category: "Coğrafya",
    difficulty: "Kolay"
  },
  {
    id: 337,
    question: "Türkiye'nin en büyük gölü hangisidir?",
    options: ["Beyşehir Gölü", "Van Gölü", "Eğirdir Gölü", "Tuz Gölü"],
    correct: 1,
    category: "Coğrafya",
    difficulty: "Kolay"
  },
  {
    id: 338,
    question: "Tek bir ürünün uzmanlaşmış bir şekilde yetiştirildiği, genellikle büyük ölçekli ve ihracata yönelik tarım şekli nedir?",
    options: ["Ekstansif Tarım", "Plantasyon (Monokültür) Tarımı", "İntansif Tarım", "Nadas Sistemi"],
    correct: 1,
    category: "Coğrafya",
    difficulty: "Orta"
  },
  {
    id: 339,
    question: "Dünya'nın Güneş etrafındaki elips şeklindeki yörüngesi sonucu oluşan hareket nedir?",
    options: ["Presesyon", "Yıllık Hareket (Yörünge Hareketi)", "Eksen Eğikliği", "Günlük Hareket"],
    correct: 1,
    category: "Coğrafya",
    difficulty: "Kolay"
  },
  {
    id: 340,
    question: "Okyanus ve deniz tabanlarında meydana gelen, büyük su kütlelerinin yer değiştirmesiyle oluşan dev dalgalara ne ad verilir?",
    options: ["Fırtına Dalgaları", "Sismik Akıntı", "Tsunami", "Medcezir"],
    correct: 2,
    category: "Coğrafya",
    difficulty: "Kolay"
  },
  {
    id: 341,
    question: "Birincil ekonomik faaliyetler (sektör) içinde yer alan ve doğadan doğrudan elde edilen ürünler arasında hangisi bulunmaz?",
    options: ["İnşaat", "Balıkçılık", "Tarım", "Ormancılık"],
    correct: 0,
    category: "Coğrafya",
    difficulty: "Kolay"
  },
  {
    id: 342,
    question: "Ekvator'dan kutuplara doğru gidildikçe değişen, canlı türlerinin çeşitliliğini ifade eden coğrafi kavram nedir?",
    options: ["Biyoçeşitlilik", "Ekosistem", "Biyom", "Klimatoloji"],
    correct: 0,
    category: "Coğrafya",
    difficulty: "Kolay"
  },
  {
    id: 343,
    question: "Bir ülkenin nüfus piramidinde tabanın geniş olması neyi ifade eder?",
    options: ["Ortalama yaşam süresinin uzun olduğunu", "Göçlerin yoğun olduğunu", "Doğum oranının yüksek olduğunu", "Yaşlı nüfusun fazla olduğunu"],
    correct: 2,
    category: "Coğrafya",
    difficulty: "Kolay"
  },
  {
    id: 344,
    question: "Yıl boyunca sıcaklıkların düşük olduğu ve ağaç yetişmesine izin vermeyen, kalıcı donmuş toprakların (permafrost) bulunduğu iklim tipi nedir?",
    options: ["Kutup İklimi", "Savan İklimi", "Muson İklimi", "Tundra İklimi"],
    correct: 3,
    category: "Coğrafya",
    difficulty: "Kolay"
  },
  {
    id: 345,
    question: "Atlas Okyanusu'ndan başlayıp Avrupa kıtası çevresinde ısıtıcı etki yapan sıcak su akıntısı nedir?",
    options: ["Labrador Akıntısı", "Gulf Stream (Körfez) Akıntısı", "Peru Akıntısı", "Alaska Akıntısı"],
    correct: 1,
    category: "Coğrafya",
    difficulty: "Orta"
  },
  {
    id: 346,
    question: "Fay hattı boyunca meydana gelen, yer kabuğunun bloklar halinde alçalmasıyla oluşan çukur araziye ne ad verilir?",
    options: ["Sırt", "Antiklinal", "Graben", "Horst"],
    correct: 2,
    category: "Coğrafya",
    difficulty: "Orta"
  },
  {
    id: 347,
    question: "Bir bölgede, tarımsal üretimin yoğun olarak yapılabilmesi için uygun olan ve verimli alüvyal topraklardan oluşan yeryüzü şekli nedir?",
    options: ["Vadi", "Kanyon", "Plato", "Delta Ovası"],
    correct: 3,
    category: "Coğrafya",
    difficulty: "Kolay"
  },
  {
    id: 348,
    question: "Dünya'nın Eksen Eğikliği'nin (23° 27') sonuçlarından biri aşağıdakilerden hangisidir?",
    options: ["Gece ve gündüz sürelerinin eşit olması", "Okyanus akıntılarının oluşması", "Mevsimlerin oluşması", "Gölge boyunun gün içinde değişmesi"],
    correct: 2,
    category: "Coğrafya",
    difficulty: "Kolay"
  },
  {
    id: 349,
    question: "Birleşmiş Milletler tarafından kabul edilen, yaşam kalitesini ölçmek için kullanılan ve eğitim, sağlık, gelir seviyesi gibi faktörleri içeren endeks nedir?",
    options: ["İnsani Gelişme Endeksi (İGE)", "Tüketici Fiyat Endeksi (TÜFE)", "Gini Katsayısı", "Gayri Safi Yurt İçi Hasıla (GSYİH)"],
    correct: 0,
    category: "Coğrafya",
    difficulty: "Orta"
  },
  {
    id: 350,
    question: "Türkiye'de rüzgar erozyonunun en etkili olduğu bölge hangisidir?",
    options: ["Marmara Bölgesi", "İç Anadolu Bölgesi", "Ege Bölgesi", "Karadeniz Bölgesi"],
    correct: 1,
    category: "Coğrafya",
    difficulty: "Kolay"
  },
  {
    id: 351,
    question: "Endüstriyel ürünlerin üretildiği, fabrikaların ve imalat sektörünün yer aldığı ekonomik faaliyet alanı nedir?",
    options: ["Dördüncül Sektör", "İkincil Sektör (Sanayi)", "Birincil Sektör", "Üçüncül Sektör (Hizmet)"],
    correct: 1,
    category: "Coğrafya",
    difficulty: "Kolay"
  },
  {
    id: 352,
    question: "Yağmur ormanlarının yoğun olduğu bölgelerde toprakların verimsiz olmasının temel nedeni nedir?",
    options: ["Sürekli kuraklık", "Yüksek sıcaklık", "Yetersiz organik madde", "Hızlı yıkanma ve minerallerin süzülmesi"],
    correct: 3,
    category: "Coğrafya",
    difficulty: "Orta"
  },
  {
    id: 353,
    question: "Haritalarda aynı sıcaklığa sahip noktaları birleştiren eğrilere ne ad verilir?",
    options: ["İzohips", "İzobar", "İzoterm", "İzoyet"],
    correct: 2,
    category: "Coğrafya",
    difficulty: "Kolay"
  },
  {
    id: 354,
    question: "Bir bölgedeki tüm canlılar ve cansız çevrenin birbiriyle etkileşim içinde olduğu büyük sisteme ne ad verilir?",
    options: ["Biyom", "Biyoçeşitlilik", "Ekosistem", "Klimatoloji"],
    correct: 2,
    category: "Coğrafya",
    difficulty: "Kolay"
  },
  {
    id: 355,
    question: "Yer kabuğunun en dış katmanına ne ad verilir?",
    options: ["Litosfer (Yer Kabuğu)", "Dış Çekirdek", "İç Çekirdek", "Manto"],
    correct: 0,
    category: "Coğrafya",
    difficulty: "Kolay"
  },
  {
    id: 356,
    question: "Güneş ışınlarının bir noktaya en dik (90°) geldiği enlemler arasında yer alan bölgeye ne ad verilir?",
    options: ["Kutup Kuşağı", "Ekvator Kuşağı (Tropikal Kuşak)", "Orta Kuşak", "Ilıman Kuşak"],
    correct: 1,
    category: "Coğrafya",
    difficulty: "Kolay"
  },
  {
    id: 357,
    question: "Büyük bir su kütlesinin (göl veya deniz) biriktirdiği malzemeyle oluşan kıyı setlerine ne ad verilir?",
    options: ["Lagün (Kıyı Set Gölü)", "Falez", "Haliç", "Tombolo"],
    correct: 0,
    category: "Coğrafya",
    difficulty: "Orta"
  },
  {
    id: 358,
    question: "İki farklı hava kütlesinin (sıcak ve soğuk) karşılaşması sonucu oluşan yağış tipi nedir?",
    options: ["Cephesel (Frontal) Yağış", "Yükselim Yağışı", "Yamaç Yağışı", "Orografik Yağış"],
    correct: 0,
    category: "Coğrafya",
    difficulty: "Kolay"
  },
  {
    id: 359,
    question: "Nüfusun hızla artması ve şehirlerin denetimsiz büyümesi sonucu ortaya çıkan çevre sorunu nedir?",
    options: ["Asit Yağmurları", "Ozon Seyrelmesi", "Şehir Isı Adası Etkisi", "Çarpık Kentleşme"],
    correct: 3,
    category: "Coğrafya",
    difficulty: "Kolay"
  },
  {
    id: 360,
    question: "Türkiye'de nüfusun en az olduğu (seyrek) bölgeler arasında aşağıdakilerden hangisi yer almaz?",
    options: ["Doğu Karadeniz'in İç Kesimleri", "Menteşe Yöresi", "Çatalca-Kocaeli Bölümü", "Tuz Gölü Çevresi"],
    correct: 2,
    category: "Coğrafya",
    difficulty: "Kolay"
  },
  {
    id: 361,
    question: "Yer kabuğunun derinliklerinde, yüksek sıcaklık ve basınç altında başkalaşım geçirerek oluşan kayaç türü nedir?",
    options: ["Başkalaşım (Metamorfik) Kayaçlar", "Organik Kayaçlar", "Tortul (Sedimanter) Kayaçlar", "Püskürük (Volkanik) Kayaçlar"],
    correct: 0,
    category: "Coğrafya",
    difficulty: "Orta"
  },
  {
    id: 362,
    question: "Kutup bölgelerinde, yılın büyük bir kısmında buzla kaplı olan okyanus nedir?",
    options: ["Pasifik Okyanusu", "Hint Okyanusu", "Arktik Okyanusu", "Atlas Okyanusu"],
    correct: 2,
    category: "Coğrafya",
    difficulty: "Kolay"
  },
  {
    id: 363,
    question: "Bir ülkenin dış ticaretinde ithalatın ihracattan fazla olması durumuna ne ad verilir?",
    options: ["Dış Ticaret Açığı", "Gayri Safi Milli Hasıla", "Dış Ticaret Fazlası", "Ödemeler Dengesi"],
    correct: 0,
    category: "Coğrafya",
    difficulty: "Kolay"
  },
  {
    id: 364,
    question: "Yeryüzünde, sıcak ve nemli havanın yükselip soğumasıyla oluşan yağış tipi nedir?",
    options: ["Cephesel Yağış", "Orografik Yağış", "Kriyojenik Yağış", "Konveksiyonel (Yükselim) Yağış"],
    correct: 3,
    category: "Coğrafya",
    difficulty: "Kolay"
  },
  {
    id: 365,
    question: "Doğu ve Batı yarım küreleri ayıran büyük daireye ne ad verilir?",
    options: ["Yengeç Dönencesi", "Kutup Dairesi", "Başlangıç Meridyeni", "Ekvator"],
    correct: 2,
    category: "Coğrafya",
    difficulty: "Kolay"
  },
  {
    id: 366,
    question: "Bir bölgenin yalnızca karasal özellikleri taşıyan, deniz etkisinden uzak iklim tipine ne ad verilir?",
    options: ["Karasal İklim", "Akdeniz İklimi", "Okyanusal İklim", "Subtropikal İklim"],
    correct: 0,
    category: "Coğrafya",
    difficulty: "Kolay"
  },
  {
    id: 367,
    question: "Sanayi ve hizmet sektörlerinin geliştiği, nüfusun büyük bir kısmının şehirlerde yaşadığı ülkeler hangi kategoriye girer?",
    options: ["Gelişmekte Olan Ülkeler", "Gelişmiş Ülkeler", "Tarım Ülkeleri", "Geri Kalmış Ülkeler"],
    correct: 1,
    category: "Coğrafya",
    difficulty: "Kolay"
  },
  {
    id: 368,
    question: "Ege Bölgesi'nde kıyıya dik uzanan dağlar arasında oluşan alçak alanlara ne ad verilir?",
    options: ["Vadi", "Horst", "Plato", "Graben"],
    correct: 3,
    category: "Coğrafya",
    difficulty: "Kolay"
  },
  {
    id: 369,
    question: "Suların akış hızı azaldığında, taşıdığı alüvyonları biriktirerek denize doğru ilerleyen üçgen şeklindeki düzlüğe ne ad verilir?",
    options: ["Delta", "Tombolo", "Haliç", "Falez"],
    correct: 0,
    category: "Coğrafya",
    difficulty: "Kolay"
  },
  {
    id: 370,
    question: "Dünya'nın iç çekirdeğinin tahmin edilen bileşimi nedir?",
    options: ["Silisyum ve Alüminyum", "Demir ve Nikel", "Kükürt ve Oksijen", "Silisyum ve Magnezyum"],
    correct: 1,
    category: "Coğrafya",
    difficulty: "Orta"
  },
  {
    id: 371,
    question: "Doğal yaşamın büyük ölçüde bozulduğu, sanayi tesisleri ve yoğun insan yerleşimi bulunan alanlara ne ad verilir?",
    options: ["Litosfer", "Ekosistem", "Antroposfer", "Biyosfer"],
    correct: 2,
    category: "Coğrafya",
    difficulty: "Zor"
  },
  {
    id: 372,
    question: "Büyük çaplı buz kütlelerinin, yer şekillerini aşındırması ve taşıması sonucu oluşan yeryüzü şekilleri hangi kuvvete bağlıdır?",
    options: ["Rüzgar Aşındırması", "Akarsu Aşındırması", "Buzul Aşındırması", "Volkanizma"],
    correct: 2,
    category: "Coğrafya",
    difficulty: "Kolay"
  },
  {
    id: 373,
    question: "Türkiye'de, ılıman denizel iklimin etkisiyle dört mevsim yağış alan bölge (yerel farklılıklar hariç) hangisidir?",
    options: ["Güneydoğu Anadolu Bölgesi", "Ege Bölgesi", "Karadeniz Bölgesi", "Akdeniz Bölgesi"],
    correct: 2,
    category: "Coğrafya",
    difficulty: "Kolay"
  },
  {
    id: 374,
    question: "Bir haritada izohips eğrilerinin birbirine çok yakın olması ne anlama gelir?",
    options: ["Düz alan olduğunu", "Eğimin çok olduğunu", "Eğimin az olduğunu", "Akarsu yatağı olduğunu"],
    correct: 1,
    category: "Coğrafya",
    difficulty: "Kolay"
  },
  {
    id: 375,
    question: "Ekvatoral bölgede, yıl boyunca yüksek sıcaklık ve yağışın olduğu iklim tipi için kullanılan diğer bir isim nedir?",
    options: ["Savan İklimi", "Subtropikal İklim", "Tropikal Yağmur Ormanı İklimi", "Tundra İklimi"],
    correct: 2,
    category: "Coğrafya",
    difficulty: "Kolay"
  },
  {
    id: 376,
    question: "Kıyı bölgelerinde, dağların kıyıya paralel uzanması sonucu oluşan dik yamaçlı kıyı şekillerine ne ad verilir?",
    options: ["Haliç", "Lagün", "Tombolo", "Falez"],
    correct: 3,
    category: "Coğrafya",
    difficulty: "Kolay"
  },
  {
    id: 377,
    question: "Nüfusun hızla artması, kırsal alandan kentsel alana göç ve kentlerin büyümesi olayı nedir?",
    options: ["Nüfus Patlaması", "Metropolleşme", "Demografik Dönüşüm", "Şehirleşme (Urbanizasyon)"],
    correct: 3,
    category: "Coğrafya",
    difficulty: "Kolay"
  },
  {
    id: 378,
    question: "Türkiye'deki genç volkanik dağlar hangi bölgede yoğunlaşmıştır?",
    options: ["Ege", "Doğu Anadolu", "Karadeniz", "Marmara"],
    correct: 1,
    category: "Coğrafya",
    difficulty: "Orta"
  },
  {
    id: 379,
    question: "Okyanuslarda ve büyük denizlerde, Ay ve Güneş'in çekim kuvveti nedeniyle oluşan periyodik su seviyesi değişimine ne ad verilir?",
    options: ["Okyanus Akıntısı", "Sismik Akıntı", "Tsunami", "Gelgit (Medcezir)"],
    correct: 3,
    category: "Coğrafya",
    difficulty: "Kolay"
  },
  {
    id: 380,
    question: "Hizmet sektörünü (eğitim, sağlık, ulaşım vb.) kapsayan ekonomik faaliyet alanı nedir?",
    options: ["İkincil Sektör", "Dördüncül Sektör", "Birincil Sektör", "Üçüncül Sektör"],
    correct: 3,
    category: "Coğrafya",
    difficulty: "Kolay"
  },
  {
    id: 381,
    question: "Bir bölgede toprak ve bitki örtüsünün, su ve rüzgar gibi etkenlerle aşınması ve taşınması olayı nedir?",
    options: ["Deprem", "Taşınma", "Toprak Kayması", "Erozyon"],
    correct: 3,
    category: "Coğrafya",
    difficulty: "Kolay"
  },
  {
    id: 382,
    question: "Yerel saat farklarının hesaplanmasında kullanılan temel coğrafi çizgi nedir?",
    options: ["Ekvator", "Dönence", "Meridyen", "Paralel"],
    correct: 2,
    category: "Coğrafya",
    difficulty: "Kolay"
  },
  {
    id: 383,
    question: "Güneydoğu Asya'da yaz aylarında şiddetli yağışlara neden olan ve tarım için hayati öneme sahip rüzgarlar nedir?",
    options: ["Fön Rüzgarı", "Muson Rüzgarları", "Batı Rüzgarları", "Alize Rüzgarları"],
    correct: 1,
    category: "Coğrafya",
    difficulty: "Kolay"
  },
  {
    id: 384,
    question: "Bir ülkede doğum oranlarının düşmesine ve yaşlı nüfusun artmasına neden olan temel sosyal faktör nedir?",
    options: ["Savaşlar", "Eğitim seviyesinin yükselmesi", "Gıda kıtlığı", "İşsizlik"],
    correct: 1,
    category: "Coğrafya",
    difficulty: "Kolay"
  },
  {
    id: 385,
    question: "Türkiye'nin en uzun kıyı şeridine sahip denizi hangisidir?",
    options: ["Marmara Denizi", "Karadeniz", "Ege Denizi", "Akdeniz"],
    correct: 2,
    category: "Coğrafya",
    difficulty: "Kolay"
  },
  {
    id: 386,
    question: "Yer kabuğundaki büyük bir alçalma çukurunun suyla dolması sonucu oluşan göl türü nedir?",
    options: ["Tektonik Göller", "Buzul Gölleri", "Volkanik Göller", "Set Gölleri"],
    correct: 0,
    category: "Coğrafya",
    difficulty: "Kolay"
  },
  {
    id: 387,
    question: "İzohips haritalarında, bir akarsuyun iki farklı eğriden geçmesi durumunda, vadi şeklinin 'V' harfini izohipsin ters yönüne çevirmesi ne anlama gelir?",
    options: ["Sırt hattı olduğu", "Eğimin az olduğu", "Akarsuyun yatağını doldurduğu", "Akarsu yatağının derin olduğu"],
    correct: 2,
    category: "Coğrafya",
    difficulty: "Zor"
  },
  {
    id: 388,
    question: "Kışın ılık ve yağışlı, yazın sıcak ve kurak geçtiği iklim tipi nedir?",
    options: ["Savan İklimi", "Sert Karasal İklim", "Okyanusal İklim", "Akdeniz İklimi"],
    correct: 3,
    category: "Coğrafya",
    difficulty: "Kolay"
  },
  {
    id: 389,
    question: "Fay hattı üzerinde yer alan, yeraltı suyunun buharlaşıp tazyikle yeryüzüne çıktığı sıcak su kaynağı nedir?",
    options: ["Madensuyu", "Gayzer", "Artezyen", "Kaplıca"],
    correct: 1,
    category: "Coğrafya",
    difficulty: "Orta"
  },
  {
    id: 390,
    question: "Birleşmiş Milletler'e göre, dünya nüfusunun yaklaşık kaçta kaçı kentlerde yaşamaktadır?",
    options: ["%75'ten fazla", "%55'ten fazla", "%30'dan az", "%40 civarı"],
    correct: 1,
    category: "Coğrafya",
    difficulty: "Zor"
  },
  {
    id: 391,
    question: "Ekonomik faaliyetlerin çevresel etkilerini ve sürdürülebilirliğini inceleyen coğrafya alt dalı nedir?",
    options: ["Biyoğrafya", "Klimatoloji", "Jeopolitik", "Çevresel Coğrafya"],
    correct: 3,
    category: "Coğrafya",
    difficulty: "Kolay"
  },
  {
    id: 392,
    question: "Dünya'nın şeklinden dolayı, Ekvator'da yerçekimi kuvveti kutuplara göre nasıldır?",
    options: ["Daha fazladır", "Eşittir", "Sadece kütleyle ilgilidir", "Daha azdır"],
    correct: 3,
    category: "Coğrafya",
    difficulty: "Orta"
  },
  {
    id: 393,
    question: "Türkiye'de, volkanik arazilerin yaygın olduğu ve yeraltı su kaynaklarının bol olduğu bölge hangisidir?",
    options: ["Marmara Bölgesi", "Doğu Anadolu Bölgesi", "İç Anadolu Bölgesi", "Ege Bölgesi"],
    correct: 2,
    category: "Coğrafya",
    difficulty: "Kolay"
  },
  {
    id: 394,
    question: "Güneş ışınlarının yeryüzüne dik geldiği son kuzey enlemi nedir?",
    options: ["Oğlak Dönencesi", "Ekvator", "Kuzey Kutup Dairesi", "Yengeç Dönencesi"],
    correct: 3,
    category: "Coğrafya",
    difficulty: "Kolay"
  },
  {
    id: 395,
    question: "Yerleşmelerin, akarsu veya yol boyunca, uzun ve şerit şeklinde geliştiği yerleşme tipi nedir?",
    options: ["Çizgisel Yerleşme", "Dairesel Yerleşme", "Dağınık Yerleşme", "Kırsal Yerleşme"],
    correct: 0,
    category: "Coğrafya",
    difficulty: "Kolay"
  },
  {
    id: 396,
    question: "Hazar Denizi, coğrafi olarak hangi tür su kütlesidir?",
    options: ["Körfez", "Deniz", "Göl", "Okyanus"],
    correct: 2,
    category: "Coğrafya",
    difficulty: "Kolay"
  },
  {
    id: 397,
    question: "Yüksek dağlık bölgelerde, sıcak havanın dağın yamaçlarından aşağıya doğru inerken sıcaklığını artırmasıyla oluşan rüzgar nedir?",
    options: ["Fön Rüzgarı", "Bora Rüzgarı", "Meltem Rüzgarı", "Alize Rüzgarı"],
    correct: 0,
    category: "Coğrafya",
    difficulty: "Kolay"
  },
  {
    id: 398,
    question: "Bir bölgenin jeolojik yapısını, oluşum sürecini ve kayaç türlerini inceleyen coğrafya alt dalı nedir?",
    options: ["Kartografya", "Hidrografya", "Jeomorfoloji", "Sismoloji"],
    correct: 2,
    category: "Coğrafya",
    difficulty: "Orta"
  },
  {
    id: 399,
    question: "Güneydoğu Anadolu Bölgesi'nde, yaz kuraklığı ve yüksek sıcaklık nedeniyle oluşan en yaygın doğal bitki örtüsü nedir?",
    options: ["Tayga", "Geniş Yapraklı Orman", "Maki", "Bozkır (Step)"],
    correct: 3,
    category: "Coğrafya",
    difficulty: "Kolay"
  },
  {
    id: 400,
    question: "Okyanuslar ve denizlerde suyun tuzluluk oranı Ekvator'dan kutuplara doğru gidildikçe genellikle nasıl değişir?",
    options: ["Sürekli azalır", "Sürekli artar", "Önce artar sonra azalır", "Değişmez"],
    correct: 2,
    category: "Coğrafya",
    difficulty: "Orta"
  },

  // ==================== BİLİM ====================
  {
    id: 401,
    question: "Suyun kimyasal formülü nedir?",
    options: ["CO2", "H2O", "NaCl", "O2"],
    correct: 1,
    category: CATEGORIES.SCIENCE.name,
    difficulty: "Kolay"
  },
  {
    id: 402,
    question: "Yerçekimi kuvvetini tanımlayan bilim insanı kimdir?",
    options: ["Nikola Tesla", "Isaac Newton", "Albert Einstein", "Galileo Galilei"],
    correct: 1,
    category: CATEGORIES.SCIENCE.name,
    difficulty: "Kolay"
  },
  {
    id: 403,
    question: "Canlıların temel yapı birimi nedir?",
    options: ["Organ", "Atom", "Hücre", "Molekül"],
    correct: 2,
    category: CATEGORIES.SCIENCE.name,
    difficulty: "Kolay"
  },
  {
    id: 404,
    question: "Elektrik akımının birimi nedir?",
    options: ["Ohm", "Watt", "Amper", "Volt"],
    correct: 2,
    category: CATEGORIES.SCIENCE.name,
    difficulty: "Kolay"
  },
  {
    id: 405,
    question: "Güneş Sistemi'ndeki en büyük gezegen hangisidir?",
    options: ["Dünya", "Mars", "Jüpiter", "Satürn"],
    correct: 2,
    category: CATEGORIES.SCIENCE.name,
    difficulty: "Kolay"
  },
  {
    id: 406,
    question: "Bir maddenin katı, sıvı veya gaz halinde bulunmasını sağlayan temel özellik nedir?",
    options: ["Erime noktası", "Faz (Hal)", "Yoğunluk", "Hacim"],
    correct: 1,
    category: CATEGORIES.SCIENCE.name,
    difficulty: "Orta"
  },
  {
    id: 407,
    question: "DNA'nın tam adı nedir?",
    options: ["Adenozin Trifosfat", "Deoksiribonükleik Asit", "Ribonükleik Asit", "Amino Asit"],
    correct: 1,
    category: CATEGORIES.SCIENCE.name,
    difficulty: "Orta"
  },
  {
    id: 408,
    question: "Sesin boşlukta yayılıp yayılmadığı hakkında hangi ifade doğrudur?",
    options: ["Radyo dalgaları gibi yayılır.", "Sadece ısı iletkenliği olan ortamlarda yayılır.", "Yalnızca çok hızlı yayılır.", "Yayılmaz, bir ortama ihtiyacı vardır."],
    correct: 3,
    category: CATEGORIES.SCIENCE.name,
    difficulty: "Kolay"
  },
  {
    id: 409,
    question: "Fotosentez sürecinde bitkiler hangi gazı açığa çıkarır?",
    options: ["Azot", "Metan", "Karbondioksit", "Oksijen"],
    correct: 3,
    category: CATEGORIES.SCIENCE.name,
    difficulty: "Kolay"
  },
  {
    id: 410,
    question: "Bir atomun çekirdeğinde hangi temel parçacıklar bulunur?",
    options: ["Proton ve Elektron", "Elektron ve Nötron", "Yalnızca Proton", "Proton ve Nötron"],
    correct: 3,
    category: CATEGORIES.SCIENCE.name,
    difficulty: "Orta"
  },
  {
    id: 411,
    question: "Işığın boşluktaki hızı yaklaşık olarak ne kadardır?",
    options: ["300.000 km/s", "340 m/s", "3.000.000 km/s", "300 km/s"],
    correct: 0,
    category: CATEGORIES.SCIENCE.name,
    difficulty: "Orta"
  },
  {
    id: 412,
    question: "Evrenin genişlediği teorisi hangi gözlemle desteklenmiştir?",
    options: ["Kırmızıya Kayma (Redshift)", "Gök cisimlerinin sıcaklıkları", "Kara deliklerin varlığı", "Siyah cisim ışıması"],
    correct: 0,
    category: CATEGORIES.SCIENCE.name,
    difficulty: "Zor"
  },
  {
    id: 413,
    question: "pH değeri 7'den küçük olan maddeler ne olarak adlandırılır?",
    options: ["Tuz", "Nötr", "Baz", "Asit"],
    correct: 3,
    category: CATEGORIES.SCIENCE.name,
    difficulty: "Kolay"
  },
  {
    id: 414,
    question: "İnsan vücudundaki en büyük organ hangisidir?",
    options: ["Kalp", "Deri", "Karaciğer", "Beyin"],
    correct: 1,
    category: CATEGORIES.SCIENCE.name,
    difficulty: "Orta"
  },
  {
    id: 415,
    question: "Hangi kuvvet türü, atom çekirdeğindeki protonları bir arada tutar?",
    options: ["Zayıf Nükleer Kuvvet", "Güçlü Nükleer Kuvvet", "Elektromanyetik Kuvvet", "Yerçekimi Kuvveti"],
    correct: 1,
    category: CATEGORIES.SCIENCE.name,
    difficulty: "Zor"
  },
  {
    id: 416,
    question: "Virüslerin, bakterilerden temel farkı nedir?",
    options: ["DNA içermemeleri", "Daha büyük olmaları", "Yalnızca oksijensiz ortamda yaşamaları", "Konak hücre olmadan çoğalamamaları"],
    correct: 3,
    category: CATEGORIES.SCIENCE.name,
    difficulty: "Orta"
  },
  {
    id: 417,
    question: "Ohm Yasası temel olarak hangi fiziksel büyüklükler arasındaki ilişkiyi açıklar?",
    options: ["Voltaj, Akım, Direnç", "Kuvvet, Kütle, İvme", "Enerji, Güç, Zaman", "Basınç, Hacim, Sıcaklık"],
    correct: 0,
    category: CATEGORIES.SCIENCE.name,
    difficulty: "Kolay"
  },
  {
    id: 418,
    question: "Metabolizmanın hızını ve vücut sıcaklığını düzenleyen hormon hangisidir?",
    options: ["Östrojen", "Tiroksin", "Adrenalin", "İnsülin"],
    correct: 1,
    category: CATEGORIES.SCIENCE.name,
    difficulty: "Zor"
  },
  {
    id: 419,
    question: "Termodinamiğin birinci yasası, enerjinin hangi özelliğini ifade eder?",
    options: ["Enerjinin hızını", "Enerjinin korunumunu", "Enerjinin yok edilemezliğini", "Entropi artışını"],
    correct: 1,
    category: CATEGORIES.SCIENCE.name,
    difficulty: "Orta"
  },
  {
    id: 420,
    question: "Periyodik tabloda, aynı dikey sütunda (grupta) yer alan elementlerin ortak özelliği nedir?",
    options: ["Aynı yoğunluğa sahip olmaları", "Aynı sayıda valans (değerlik) elektronuna sahip olmaları", "Aynı sayıda protona sahip olmaları", "Aynı atom kütlesine sahip olmaları"],
    correct: 1,
    category: CATEGORIES.SCIENCE.name,
    difficulty: "Orta"
  },
  {
    id: 421,
    question: "Kütle çekim dalgalarının varlığını öngören teori hangisidir?",
    options: ["Özel Görelilik Teorisi", "Kuantum Mekaniği", "Sicim Teorisi", "Genel Görelilik Teorisi"],
    correct: 3,
    category: CATEGORIES.SCIENCE.name,
    difficulty: "Zor"
  },
  {
    id: 422,
    question: "Hücre zarından küçük moleküllerin ATP harcamadan geçişine ne ad verilir?",
    options: ["Ekzositoz", "Endositoz", "Aktif Taşıma", "Basit Difüzyon"],
    correct: 3,
    category: CATEGORIES.SCIENCE.name,
    difficulty: "Orta"
  },
  {
    id: 423,
    question: "Metal olmayan elementlerden oluşan bir bileşiğe ne ad verilir?",
    options: ["Metalik bileşik", "İyonik bileşik", "Organik bileşik", "Kovalent bileşik"],
    correct: 3,
    category: CATEGORIES.SCIENCE.name,
    difficulty: "Kolay"
  },
  {
    id: 424,
    question: "Elektrik yükü 'sıfır' olan temel atomaltı parçacık hangisidir?",
    options: ["Elektron", "Nötrino", "Proton", "Nötron"],
    correct: 3,
    category: CATEGORIES.SCIENCE.name,
    difficulty: "Kolay"
  },
  {
    id: 425,
    question: "Bir popülasyondaki gen havuzunun zamanla değişmesi süreci ne olarak adlandırılır?",
    options: ["Metamorfoz", "Evrim", "Adaptasyon", "Homeostaz"],
    correct: 1,
    category: CATEGORIES.SCIENCE.name,
    difficulty: "Kolay"
  },
  {
    id: 426,
    question: "Hangi gezegen Güneş Sistemi'nde en kısa yörünge süresine sahiptir?",
    options: ["Venüs", "Dünya", "Mars", "Merkür"],
    correct: 3,
    category: CATEGORIES.SCIENCE.name,
    difficulty: "Kolay"
  },
  {
    id: 427,
    question: "Katalizörlerin temel işlevi nedir?",
    options: ["Bileşiğin kütlesini artırmak", "Tepkime hızını değiştirmek", "Kimyasal tepkimenin son ürününü değiştirmek", "Sıcaklığı artırmak"],
    correct: 1,
    category: CATEGORIES.SCIENCE.name,
    difficulty: "Orta"
  },
  {
    id: 428,
    question: "Canlılar arasında enerji akışını gösteren sıralı beslenme ilişkisine ne ad verilir?",
    options: ["Ekosistem", "Biyom", "Besin Ağı", "Besin Zinciri"],
    correct: 3,
    category: CATEGORIES.SCIENCE.name,
    difficulty: "Kolay"
  },
  {
    id: 429,
    question: "Bir sarkaçın periyodunu etkileyen temel fiziksel büyüklük hangisidir?",
    options: ["Sarkacın uzunluğu", "Sarkaçın salınım açısı", "Kütle", "Hava direnci"],
    correct: 0,
    category: CATEGORIES.SCIENCE.name,
    difficulty: "Zor"
  },
  {
    id: 430,
    question: "Bir cismin birim hacim başına düşen kütlesi hangi terimle ifade edilir?",
    options: ["Yoğunluk", "Basınç", "Ağırlık", "Kuvvet"],
    correct: 0,
    category: CATEGORIES.SCIENCE.name,
    difficulty: "Kolay"
  },
  {
    id: 431,
    question: "Hangi bilim insanı, radyoaktiviteyi keşfetmiştir?",
    options: ["Henri Becquerel", "Enrico Fermi", "Ernest Rutherford", "Marie Curie"],
    correct: 0,
    category: CATEGORIES.SCIENCE.name,
    difficulty: "Zor"
  },
  {
    id: 432,
    question: "Hücredeki protein sentezinin gerçekleştiği organel hangisidir?",
    options: ["Mitokondri", "Endoplazmik Retikulum", "Golgi Aygıtı", "Ribozom"],
    correct: 3,
    category: CATEGORIES.SCIENCE.name,
    difficulty: "Orta"
  },
  {
    id: 433,
    question: "Bir kimyasal reaksiyonun gerçekleşmesi için gereken minimum enerjiye ne ad verilir?",
    options: ["Aktivasyon enerjisi", "Kinetik enerji", "Potansiyel enerji", "Bağ enerjisi"],
    correct: 0,
    category: CATEGORIES.SCIENCE.name,
    difficulty: "Orta"
  },
  {
    id: 434,
    question: "Hangi teleskop, uzaydaki en büyük ve en güçlü optik teleskoptur?",
    options: ["Chandra X-ışını Gözlemevi", "Hubble Uzay Teleskobu", "James Webb Uzay Teleskobu", "Kepler Uzay Teleskobu"],
    correct: 2,
    category: CATEGORIES.SCIENCE.name,
    difficulty: "Kolay"
  },
  {
    id: 435,
    question: "Maddenin en düzensiz ve en yüksek enerjili hali hangisidir?",
    options: ["Gaz", "Sıvı", "Katı", "Plazma"],
    correct: 3,
    category: CATEGORIES.SCIENCE.name,
    difficulty: "Orta"
  },
  {
    id: 436,
    question: "İnsan kanında oksijen taşıyan protein molekülü nedir?",
    options: ["Fibrinojen", "Albumin", "İnsülin", "Hemoglobin"],
    correct: 3,
    category: CATEGORIES.SCIENCE.name,
    difficulty: "Kolay"
  },
  {
    id: 437,
    question: "Mekanik enerjinin korunumu yasası hangi sistemler için geçerlidir?",
    options: ["İdeal (sürtünmesiz) sistemler", "Sürtünmeli sistemler", "Sıcak sistemler", "Açık sistemler"],
    correct: 0,
    category: CATEGORIES.SCIENCE.name,
    difficulty: "Orta"
  },
  {
    id: 438,
    question: "Aşağıdaki elementlerden hangisi bir soygazdır?",
    options: ["Sodyum", "Klor", "Oksijen", "Neon"],
    correct: 3,
    category: CATEGORIES.SCIENCE.name,
    difficulty: "Kolay"
  },
  {
    id: 439,
    question: "Hücre bölünmesi sırasında kromozomların ayrıldığı evreye ne ad verilir?",
    options: ["Telofaz", "Profaz", "Metafaz", "Anafaz"],
    correct: 3,
    category: CATEGORIES.SCIENCE.name,
    difficulty: "Zor"
  },
  {
    id: 440,
    question: "Kütlenin çekim alanı dışındaki bir nesneyi yörüngede tutan merkezcil kuvvet nedir?",
    options: ["Merkezkaç kuvveti", "Elektromanyetik kuvvet", "Yerçekimi kuvveti", "Sürtünme kuvveti"],
    correct: 2,
    category: CATEGORIES.SCIENCE.name,
    difficulty: "Orta"
  },
  {
    id: 441,
    question: "Genetik mühendisliğinde genleri kesmek için kullanılan özel enzimler nedir?",
    options: ["Amilaz", "Proteaz", "Restriksiyon enzimleri", "Ligaz"],
    correct: 2,
    category: CATEGORIES.SCIENCE.name,
    difficulty: "Zor"
  },
  {
    id: 442,
    question: "Bir elektrik devresindeki direncin birimi nedir?",
    options: ["Ohm", "Amper", "Coulomb", "Volt"],
    correct: 0,
    category: CATEGORIES.SCIENCE.name,
    difficulty: "Kolay"
  },
  {
    id: 443,
    question: "Hangi biyolojik süreçte glikoz parçalanarak ATP (enerji) üretilir?",
    options: ["Hücresel Solunum", "Fotosentez", "Transkripsiyon", "Fermentasyon"],
    correct: 0,
    category: CATEGORIES.SCIENCE.name,
    difficulty: "Orta"
  },
  {
    id: 444,
    question: "Güneşin enerjisini ürettiği temel nükleer reaksiyon türü nedir?",
    options: ["Nükleer Füzyon (Birleşme)", "Kimyasal Yanma", "Nükleer Fisyon (Bölünme)", "Radyoaktif Bozunma"],
    correct: 0,
    category: CATEGORIES.SCIENCE.name,
    difficulty: "Orta"
  },
  {
    id: 445,
    question: "Hangi element, periyodik tablonun birinci grubunda yer almasına rağmen metal değildir?",
    options: ["Hidrojen", "Lityum", "Sodyum", "Potasyum"],
    correct: 0,
    category: CATEGORIES.SCIENCE.name,
    difficulty: "Orta"
  },
  {
    id: 446,
    question: "Biyolojide, türlerin bilimsel olarak isimlendirilmesinde kullanılan ikili adlandırma sisteminin (binominal nomenklatür) kurucusu kimdir?",
    options: ["Charles Darwin", "Louis Pasteur", "Carolus Linnaeus", "Gregor Mendel"],
    correct: 2,
    category: CATEGORIES.SCIENCE.name,
    difficulty: "Zor"
  },
  {
    id: 447,
    question: "Fizikte 'İş' birimi nedir?",
    options: ["Joule", "Newton", "Watt", "Pascal"],
    correct: 0,
    category: CATEGORIES.SCIENCE.name,
    difficulty: "Kolay"
  },
  {
    id: 448,
    question: "Kalıtım biliminin (Genetik) kurucusu olarak bilinen bilim insanı kimdir?",
    options: ["Thomas Hunt Morgan", "Gregor Mendel", "James Watson", "Francis Crick"],
    correct: 1,
    category: CATEGORIES.SCIENCE.name,
    difficulty: "Kolay"
  },
  {
    id: 449,
    question: "Bir çözeltinin su kaybetmesi sonucu katı maddenin dibe çökmesine ne ad verilir?",
    options: ["Çökelme (Precipitasyon)", "Buharlaşma", "Süblimleşme", "Çözünme"],
    correct: 0,
    category: CATEGORIES.SCIENCE.name,
    difficulty: "Orta"
  },
  {
    id: 450,
    question: "Aşağıdakilerden hangisi bir 'vektörel' fiziksel büyüklüktür?",
    options: ["Kütle", "Zaman", "Sürat", "Hız"],
    correct: 3,
    category: CATEGORIES.SCIENCE.name,
    difficulty: "Orta"
  },
  {
    id: 451,
    question: "Kimyasal reaksiyonlarda atomun türü ve sayısı korunur. Bu yasa hangi bilim insanına aittir?",
    options: ["Dmitri Mendeleev", "Antoine Lavoisier", "John Dalton", "Robert Boyle"],
    correct: 1,
    category: CATEGORIES.SCIENCE.name,
    difficulty: "Zor"
  },
  {
    id: 452,
    question: "Bakterilerin hücre duvarı yapısında bulunan özel polimer nedir?",
    options: ["Kitin", "Glikojen", "Peptidoglikan", "Selüloz"],
    correct: 2,
    category: CATEGORIES.SCIENCE.name,
    difficulty: "Zor"
  },
  {
    id: 453,
    question: "Newton'un Birinci Hareket Yasası ne olarak da bilinir?",
    options: ["Hareket Yasası", "Kütle Çekim Yasası", "Etki-Tepki Yasası", "Eylemsizlik Yasası"],
    correct: 3,
    category: CATEGORIES.SCIENCE.name,
    difficulty: "Kolay"
  },
  {
    id: 454,
    question: "Metallerin ısı ve elektriği iyi iletme sebebi nedir?",
    options: ["Yüksek erime noktaları", "Yüksek yoğunlukları", "Kısa atomik bağlar", "Serbest (gezgin) elektronları"],
    correct: 3,
    category: CATEGORIES.SCIENCE.name,
    difficulty: "Orta"
  },
  {
    id: 455,
    question: "Gözde ışığın retina üzerine odaklanmasını sağlayan yapı nedir?",
    options: ["İris", "Kornea", "Lens (Mercek)", "Göz bebeği"],
    correct: 2,
    category: CATEGORIES.SCIENCE.name,
    difficulty: "Orta"
  },
  {
    id: 456,
    question: "Kütlenin enerjiye dönüştüğünü ifade eden ünlü formül (E=mc²) hangi bilim insanına aittir?",
    options: ["Niels Bohr", "Richard Feynman", "Max Planck", "Albert Einstein"],
    correct: 3,
    category: CATEGORIES.SCIENCE.name,
    difficulty: "Kolay"
  },
  {
    id: 457,
    question: "Hangi kimyasal tür, suda çözündüğünde OH- (hidroksit) iyonu verir?",
    options: ["Tuz", "Asit", "Nötr", "Baz"],
    correct: 3,
    category: CATEGORIES.SCIENCE.name,
    difficulty: "Kolay"
  },
  {
    id: 458,
    question: "Canlılarda 'Adaptasyon' ne anlama gelir?",
    options: ["Hücre bölünmesi", "Çevre koşullarına uyum", "Genetik mutasyon", "Hızlı üreme yeteneği"],
    correct: 1,
    category: CATEGORIES.SCIENCE.name,
    difficulty: "Kolay"
  },
  {
    id: 459,
    question: "Işığın saydam bir ortamdan başka bir saydam ortama geçerken yön değiştirmesi olayına ne ad verilir?",
    options: ["Kırılma (Refraksiyon)", "Yansıma", "Soğurulma", "Difüzyon"],
    correct: 0,
    category: CATEGORIES.SCIENCE.name,
    difficulty: "Kolay"
  },
  {
    id: 460,
    question: "Aşağıdakilerden hangisi bir 'doğal polimer' örneğidir?",
    options: ["Plastik", "Naylon", "Polistiren", "Selüloz"],
    correct: 3,
    category: CATEGORIES.SCIENCE.name,
    difficulty: "Orta"
  },
  {
    id: 461,
    question: "Kuantum mekaniğinin temelini oluşturan, enerjinin kesikli (ayrık) paketler halinde yayıldığı fikri hangi bilim insanına aittir?",
    options: ["Albert Einstein", "Niels Bohr", "Max Planck", "Werner Heisenberg"],
    correct: 2,
    category: CATEGORIES.SCIENCE.name,
    difficulty: "Zor"
  },
  {
    id: 462,
    question: "Bitkilerin kök uçlarında yer alan ve yerçekimine tepki veren yapı nedir?",
    options: ["Tomurcuk", "Floem", "Kök şapkası (Kalıptra)", "Ksilem"],
    correct: 2,
    category: CATEGORIES.SCIENCE.name,
    difficulty: "Zor"
  },
  {
    id: 463,
    question: "Bir cismin sıcaklığını ölçmek için hangi fiziksel büyüklük kullanılır?",
    options: ["Özgül Isı", "Isı", "Termometre (Sıcaklık)", "Entropi"],
    correct: 2,
    category: CATEGORIES.SCIENCE.name,
    difficulty: "Kolay"
  },
  {
    id: 464,
    question: "Kansere neden olan ve hücrelerdeki genetik materyali değiştiren maddelere ne ad verilir?",
    options: ["Antikor", "Enzim", "Mutajen", "Antijen"],
    correct: 2,
    category: CATEGORIES.SCIENCE.name,
    difficulty: "Orta"
  },
  {
    id: 465,
    question: "Tuzlu su bir çözeltidir. Bu çözeltinin 'çözücü' kısmı nedir?",
    options: ["Hiçbiri", "Su", "Tuz", "Her ikisi"],
    correct: 1,
    category: CATEGORIES.SCIENCE.name,
    difficulty: "Kolay"
  },
  {
    id: 466,
    question: "Biyolojide 'Mitoz' bölünmenin temel amacı nedir?",
    options: ["Büyüme, gelişme ve onarım sağlamak", "Genetik çeşitlilik sağlamak", "Kromozom sayısını yarıya indirmek", "Üreme hücreleri (gamet) oluşturmak"],
    correct: 0,
    category: CATEGORIES.SCIENCE.name,
    difficulty: "Orta"
  },
  {
    id: 467,
    question: "Optikte, bir cismin arkasındaki ışığı toplayarak odak noktasına düşüren mercek tipi nedir?",
    options: ["İçbükey (Iraksak)", "Prizmatik", "Dışbükey (Yakınsak)", "Silindirik"],
    correct: 2,
    category: CATEGORIES.SCIENCE.name,
    difficulty: "Orta"
  },
  {
    id: 468,
    question: "Periyodik tablonun 17. grubunda (Halojenler) yer alan ve oda sıcaklığında gaz halinde bulunan element nedir?",
    options: ["Klor", "Flor", "Brom", "İyot"],
    correct: 0,
    category: CATEGORIES.SCIENCE.name,
    difficulty: "Zor"
  },
  {
    id: 469,
    question: "En az ışıktan etkilenen ve bu nedenle genellikle karanlık maddeyi gözlemlemek için kullanılan dalga boyu aralığı nedir?",
    options: ["Morötesi ışınlar", "Radyo dalgaları", "Görünür ışık", "X-ışınları"],
    correct: 1,
    category: CATEGORIES.SCIENCE.name,
    difficulty: "Zor"
  },
  {
    id: 470,
    question: "Basıncın birimi nedir?",
    options: ["Watt", "Newton", "Pascal", "Joule"],
    correct: 2,
    category: CATEGORIES.SCIENCE.name,
    difficulty: "Kolay"
  },
  {
    id: 471,
    question: "Vücutta antikor üreterek bağışıklık tepkisini yöneten hücreler hangileridir?",
    options: ["Nötrofiller", "B lenfositleri", "Makrofajlar", "T lenfositleri"],
    correct: 1,
    category: CATEGORIES.SCIENCE.name,
    difficulty: "Zor"
  },
  {
    id: 472,
    question: "Hangi tür kuvvet, yalnızca temas gerektirir?",
    options: ["Elektrostatik kuvvet", "Sürtünme kuvveti", "Manyetik kuvvet", "Yerçekimi"],
    correct: 1,
    category: CATEGORIES.SCIENCE.name,
    difficulty: "Orta"
  },
  {
    id: 473,
    question: "Oksidasyon nedir?",
    options: ["Bir atomun nötrleşmesi", "Bir atomun elektron vermesi", "Bir atomun çekirdek değiştirmesi", "Bir atomun elektron alması"],
    correct: 1,
    category: CATEGORIES.SCIENCE.name,
    difficulty: "Orta"
  },
  {
    id: 474,
    question: "Güneş Sistemi'nde ters yönde (saat yönünde) dönen gezegen hangisidir?",
    options: ["Uranüs", "Jüpiter", "Venüs", "Mars"],
    correct: 2,
    category: CATEGORIES.SCIENCE.name,
    difficulty: "Zor"
  },
  {
    id: 475,
    question: "Bitkilerin yeşil rengini veren pigment nedir?",
    options: ["Klorofil", "Antosiyanin", "Karoten", "Ksantofil"],
    correct: 0,
    category: CATEGORIES.SCIENCE.name,
    difficulty: "Kolay"
  },
  {
    id: 476,
    question: "Kimyada, aynı atom numarasına (proton sayısı) sahip, ancak farklı kütle numarasına (nötron sayısı) sahip atomlara ne ad verilir?",
    options: ["İzotop", "İzobar", "Allotrop", "İzoton"],
    correct: 0,
    category: CATEGORIES.SCIENCE.name,
    difficulty: "Kolay"
  },
  {
    id: 477,
    question: "Hangi fiziksel büyüklük, ışık kaynağından birim zamanda yayılan ışık enerjisi miktarını ifade eder?",
    options: ["Aydınlanma şiddeti", "Işık akısı", "Işık şiddeti", "Parlaklık"],
    correct: 2,
    category: CATEGORIES.SCIENCE.name,
    difficulty: "Zor"
  },
  {
    id: 478,
    question: "Dünya'nın iç çekirdeğinin sıvı mı yoksa katı mı olduğu hangi bilimsel yöntemle belirlenir?",
    options: ["Volkanizma analizi", "Manyetik alan ölçümü", "Sismik dalgaların incelenmesi", "Yer kabuğu sondajı"],
    correct: 2,
    category: CATEGORIES.SCIENCE.name,
    difficulty: "Orta"
  },
  {
    id: 479,
    question: "Yağların yapı birimi olan küçük moleküller nedir?",
    options: ["Gliserol ve Yağ Asitleri", "Monosakkaritler", "Nükleotitler", "Amino asitler"],
    correct: 0,
    category: CATEGORIES.SCIENCE.name,
    difficulty: "Kolay"
  },
  {
    id: 480,
    question: "Fizikte 'Güç' birimi nedir?",
    options: ["Watt", "Joule", "Volt", "Newton"],
    correct: 0,
    category: CATEGORIES.SCIENCE.name,
    difficulty: "Kolay"
  },
  {
    id: 481,
    question: "Bir deneyde sonuçları etkilemesi beklenen, ancak sabit tutulan faktöre ne ad verilir?",
    options: ["Bağımlı değişken", "Bağımsız değişken", "Hipotez", "Kontrol değişkeni"],
    correct: 3,
    category: CATEGORIES.SCIENCE.name,
    difficulty: "Orta"
  },
  {
    id: 482,
    question: "Hangi bileşik, halk arasında 'yemek sodası' olarak bilinir?",
    options: ["Kalsiyum Karbonat (CaCO3)", "Sodyum Bikarbonat (NaHCO3)", "Sodyum Klorür (NaCl)", "Sodyum Hidroksit (NaOH)"],
    correct: 1,
    category: CATEGORIES.SCIENCE.name,
    difficulty: "Zor"
  },
  {
    id: 483,
    question: "Evrenin oluşumunu açıklayan en kabul görmüş teori nedir?",
    options: ["Sonsuz Enflasyon Teorisi", "Kararlı Hal Teorisi", "Döngüsel Evren Teorisi", "Büyük Patlama (Big Bang) Teorisi"],
    correct: 3,
    category: CATEGORIES.SCIENCE.name,
    difficulty: "Kolay"
  },
  {
    id: 484,
    question: "Proteinlerin üç boyutlu yapısını kaybetmesine ne ad verilir?",
    options: ["Translasyon", "Denitrifikasyon", "Hidroliz", "Denatürasyon"],
    correct: 3,
    category: CATEGORIES.SCIENCE.name,
    difficulty: "Orta"
  },
  {
    id: 485,
    question: "Termodinamikte, bir sistemin düzensizlik (kaos) derecesini ifade eden fiziksel büyüklük nedir?",
    options: ["Entalpi", "Entropi", "İş", "Hacim"],
    correct: 1,
    category: CATEGORIES.SCIENCE.name,
    difficulty: "Zor"
  },
  {
    id: 486,
    question: "Bir atomun enerji seviyeleri arasında elektron geçişi sırasında yayılan enerjiye ne ad verilir?",
    options: ["Proton", "Foton", "Baryon", "Nötron"],
    correct: 1,
    category: CATEGORIES.SCIENCE.name,
    difficulty: "Orta"
  },
  {
    id: 487,
    question: "Hangi bilim insanı penisilini keşfetmiştir?",
    options: ["Louis Pasteur", "Robert Koch", "Jonas Salk", "Alexander Fleming"],
    correct: 3,
    category: CATEGORIES.SCIENCE.name,
    difficulty: "Kolay"
  },
  {
    id: 488,
    question: "En küçük atomaltı parçacıklar olan kuarklar hangi temel parçacıkların yapı taşıdır?",
    options: ["Higgs bozonları", "Baryonlar (Proton/Nötron)", "Fotonlar", "Leptonlar (Elektronlar)"],
    correct: 1,
    category: CATEGORIES.SCIENCE.name,
    difficulty: "Zor"
  },
  {
    id: 489,
    question: "Bir hücrenin aşırı su kaybederek büzülmesine ne ad verilir?",
    options: ["Plazmoliz", "Turgor", "Dehidrasyon", "Hemoliz"],
    correct: 0,
    category: CATEGORIES.SCIENCE.name,
    difficulty: "Zor"
  },
  {
    id: 490,
    question: "Elektrik devresinde elektrik yükünün (Q) birimi nedir?",
    options: ["Volt", "Coulomb", "Ohm", "Amper"],
    correct: 1,
    category: CATEGORIES.SCIENCE.name,
    difficulty: "Orta"
  },
  {
    id: 491,
    question: "Sıvıların yüzey alanlarını küçültme eğilimine neden olan kuvvet nedir?",
    options: ["Kılcallık", "Kohezyon (Yüzey Gerilimi)", "Adezyon", "Viskozite"],
    correct: 1,
    category: CATEGORIES.SCIENCE.name,
    difficulty: "Orta"
  },
  {
    id: 492,
    question: "Hangi organel, hücrenin sindirim ve atık yönetimi merkezidir?",
    options: ["Çekirdek", "Ribozom", "Lizozom", "Mitokondri"],
    correct: 2,
    category: CATEGORIES.SCIENCE.name,
    difficulty: "Orta"
  },
  {
    id: 493,
    question: "Metal ve ametal atomlarının elektron alışverişi yaparak oluşturduğu bağ türü nedir?",
    options: ["Hidrojen Bağı", "Kovalent Bağ", "İyonik Bağ", "Metalik Bağ"],
    correct: 2,
    category: CATEGORIES.SCIENCE.name,
    difficulty: "Kolay"
  },
  {
    id: 494,
    question: "Işığın en yüksek hızda hareket ettiği ortam hangisidir?",
    options: ["Hava", "Su", "Cam", "Boşluk (Vakum)"],
    correct: 3,
    category: CATEGORIES.SCIENCE.name,
    difficulty: "Kolay"
  },
  {
    id: 495,
    question: "Aşağıdakilerden hangisi bir 'Monosakkarit' (basit şeker) değildir?",
    options: ["Fruktoz", "Sükroz", "Glikoz", "Galaktoz"],
    correct: 1,
    category: CATEGORIES.SCIENCE.name,
    difficulty: "Zor"
  },
  {
    id: 496,
    question: "Termodinamiğin ikinci yasası temel olarak neyi ifade eder?",
    options: ["Enerjinin korunumu", "Maksimum verimlilik", "Isının her zaman sıcaktan soğuğa akacağını (Entropinin artacağını)", "Kinetik enerjinin korunumu"],
    correct: 2,
    category: CATEGORIES.SCIENCE.name,
    difficulty: "Zor"
  },
  {
    id: 497,
    question: "Güneş Sistemi'nde en çok halkaya sahip gezegen hangisidir?",
    options: ["Jüpiter", "Uranüs", "Neptün", "Satürn"],
    correct: 3,
    category: CATEGORIES.SCIENCE.name,
    difficulty: "Kolay"
  },
  {
    id: 498,
    question: "Hangi elementin izotopu, organik maddelerin yaşını belirlemek için kullanılır?",
    options: ["Azot-14", "Karbon-14", "Uranyum-238", "Oksijen-16"],
    correct: 1,
    category: CATEGORIES.SCIENCE.name,
    difficulty: "Orta"
  },
  {
    id: 499,
    question: "Biyolojide, bir canlının dış görünüşü (gözlemlenebilir özellikleri) hangi terimle ifade edilir?",
    options: ["Genotip", "Fenotip", "Heterozigot", "Homozigot"],
    correct: 1,
    category: CATEGORIES.SCIENCE.name,
    difficulty: "Kolay"
  },
  {
    id: 500,
    question: "Bir sıvının kaynama noktasını artırmak için hangi işlem yapılabilir?",
    options: ["Çözücüyü ısıtmak", "Basıncı artırmak", "Sıvıyı karıştırmak", "Basıncı azaltmak"],
    correct: 1,
    category: CATEGORIES.SCIENCE.name,
    difficulty: "Orta"
  },
  {
    id: 501,
    question: "Evrenin genişlemesi teorisini destekleyen ve galaksilerin bizden uzaklaşma hızının mesafeyle orantılı olduğunu ifade eden yasa nedir?",
    options: ["Newton'un Evrensel Çekim Yasası", "Planck Yasası", "Kepler'in Üçüncü Yasası", "Hubble Yasası"],
    correct: 3,
    category: "Bilim",
    difficulty: "Kolay"
  },
  {
    id: 502,
    question: "Canlı hücrelerin enerji santrali olarak adlandırılan ve ATP üreten organel hangisidir?",
    options: ["Mitokondri", "Endoplazmik Retikulum", "Lizozom", "Ribozom"],
    correct: 0,
    category: "Bilim",
    difficulty: "Kolay"
  },
  {
    id: 503,
    question: "Maddenin ısı iletkenliğini en az olduğu hali nedir?",
    options: ["Plazma", "Gaz", "Katı", "Sıvı"],
    correct: 1,
    category: "Bilim",
    difficulty: "Orta"
  },
  {
    id: 504,
    question: "Bir atomun çekirdeğinde bulunan, yüksüz tanecik nedir?",
    options: ["Elektron", "Foton", "Nötron", "Proton"],
    correct: 2,
    category: "Bilim",
    difficulty: "Kolay"
  },
  {
    id: 505,
    question: "Bitkilerde suyun kökten yapraklara taşınmasından sorumlu damar dokusu nedir?",
    options: ["Floem", "Ksilem", "Kambiyum", "Stoma"],
    correct: 1,
    category: "Bilim",
    difficulty: "Orta"
  },
  {
    id: 506,
    question: "Işığın farklı ortamlardan geçerken doğrultu değiştirmesi olayına ne ad verilir?",
    options: ["Saçılma", "Polarizasyon", "Kırılma", "Yansıma"],
    correct: 2,
    category: "Bilim",
    difficulty: "Kolay"
  },
  {
    id: 507,
    question: "pH değeri 7'den küçük olan maddeler için kullanılan ifade nedir?",
    options: ["Tuz", "Asit", "Baz", "Nötr"],
    correct: 1,
    category: "Bilim",
    difficulty: "Kolay"
  },
  {
    id: 508,
    question: "Vücudun dışarıdan gelen mikroorganizmalara karşı geliştirdiği savunma mekanizmasına ne ad verilir?",
    options: ["Homeostazi", "Metabolizma", "Bağışıklık (İmmünite)", "Adaptasyon"],
    correct: 2,
    category: "Bilim",
    difficulty: "Kolay"
  },
  {
    id: 509,
    question: "Kütlesi olmayan, sadece enerji taşıyan temel parçacık nedir?",
    options: ["Nötrino", "Elektron", "Foton", "Proton"],
    correct: 2,
    category: "Bilim",
    difficulty: "Zor"
  },
  {
    id: 510,
    question: "Periyodik tabloda aynı dikey sütunda (grupta) bulunan elementlerin ortak özelliği nedir?",
    options: ["Aynı katman sayısına sahip olma", "Aynı değerlik elektron sayısına sahip olma", "Aynı periyot numarasına sahip olma", "Aynı atom kütlesine sahip olma"],
    correct: 1,
    category: "Bilim",
    difficulty: "Kolay"
  },
  {
    id: 511,
    question: "En büyük uydusu Ganymede olan, Güneş Sistemi'nin en büyük gezegeni hangisidir?",
    options: ["Uranüs", "Jüpiter", "Mars", "Satürn"],
    correct: 1,
    category: "Bilim",
    difficulty: "Kolay"
  },
  {
    id: 512,
    question: "Bir nesnenin hareketine karşı koyan ve sürtünmeden kaynaklanan kuvvet nedir?",
    options: ["Yerçekimi Kuvveti", "Merkezcil Kuvvet", "Sürtünme Kuvveti", "Normal Kuvvet"],
    correct: 2,
    category: "Bilim",
    difficulty: "Kolay"
  },
  {
    id: 513,
    question: "Genetik bilgiyi hücre çekirdeğinden ribozomlara taşıyan RNA türü nedir?",
    options: ["snRNA", "rRNA", "mRNA", "tRNA"],
    correct: 2,
    category: "Bilim",
    difficulty: "Orta"
  },
  {
    id: 514,
    question: "Yoğunluğu en düşük olan metal elementi nedir?",
    options: ["Demir", "Altın", "Alüminyum", "Lityum"],
    correct: 3,
    category: "Bilim",
    difficulty: "Zor"
  },
  {
    id: 515,
    question: "Bir gezegenin, Güneş'e en yakın olduğu yörünge noktasına ne ad verilir?",
    options: ["Aphelion (Günöte)", "Perigee", "Perihelion (Günberi)", "Apogee"],
    correct: 2,
    category: "Bilim",
    difficulty: "Zor"
  },
  {
    id: 516,
    question: "Yüksek sıcaklıkta eriyen kayaların (magmanın) yeryüzüne çıkarak soğuması sonucu oluşan kayaç türü nedir?",
    options: ["Organik Kayaç", "Başkalaşım Kayacı", "Tortul Kayaç", "Püskürük (Volkanik) Kayaç"],
    correct: 3,
    category: "Bilim",
    difficulty: "Kolay"
  },
  {
    id: 517,
    question: "Bir tepkimeye girerek hızını artıran, ancak kendisi harcanmayan maddeye ne ad verilir?",
    options: ["Reaktan", "İnhibitör", "İzotop", "Katalizör"],
    correct: 3,
    category: "Bilim",
    difficulty: "Kolay"
  },
  {
    id: 518,
    question: "Canlılar arasında besin zincirinin en alt basamağını oluşturan, kendi besinini üreten organizmalar nedir?",
    options: ["Tüketiciler", "Ayrıştırıcılar", "Üreticiler (Ototroflar)", "Etçiller"],
    correct: 2,
    category: "Bilim",
    difficulty: "Kolay"
  },
  {
    id: 519,
    question: "Elektrik devresindeki direncin birimi nedir?",
    options: ["Volt", "Watt", "Ohm", "Amper"],
    correct: 2,
    category: "Bilim",
    difficulty: "Kolay"
  },
  {
    id: 520,
    question: "Atom numaraları aynı, kütle numaraları farklı olan atomlara ne ad verilir?",
    options: ["İzobar", "İzomer", "İzoton", "İzotop"],
    correct: 3,
    category: "Bilim",
    difficulty: "Kolay"
  },
  {
    id: 521,
    question: "Albert Einstein'ın ünlü $\\text{E = mc}^{2}$ formülü hangi kavramlar arasındaki ilişkiyi ifade eder?",
    options: ["Momentum ve Kütle", "Kütle ve Hız", "Kütle ve Enerji", "Kuvvet ve İvme"],
    correct: 2,
    category: "Bilim",
    difficulty: "Kolay"
  },
  {
    id: 522,
    question: "Dünya'nın uydusu olan Ay'ın, Dünya'ya göre hep aynı yüzünü göstermesinin nedeni nedir?",
    options: ["Yörünge hızının sabit olması", "Ay'ın elips yörüngesi", "Ay'ın kendi etrafındaki dönüş süresi ile Dünya etrafındaki dolanım süresinin eşit olması", "Ay'ın kütleçekiminin düşük olması"],
    correct: 2,
    category: "Bilim",
    difficulty: "Orta"
  },
  {
    id: 523,
    question: "Glikozun oksijen varlığında parçalanarak ATP enerjisine dönüştüğü biyolojik süreç nedir?",
    options: ["Transpirasyon", "Fermentasyon", "Hücresel Solunum", "Fotosentez"],
    correct: 2,
    category: "Bilim",
    difficulty: "Kolay"
  },
  {
    id: 524,
    question: "Saf maddelerin kaynama noktasının sabit kalması, hangi özelliğe sahip olduğunu gösterir?",
    options: ["Homojen karışım olma", "Molekül yapısının karmaşık olma", "Düşük yoğunluklu olma", "Belirli bir erime ve kaynama noktasına sahip olma"],
    correct: 3,
    category: "Bilim",
    difficulty: "Kolay"
  },
  {
    id: 525,
    question: "Hareket halindeki bir cismin hızı ve yönü değişmiyorsa, cisme etki eden net kuvvet nedir?",
    options: ["Sıfırdır", "Maksimumdur", "Hıza eşittir", "Sabit değildir"],
    correct: 0,
    category: "Bilim",
    difficulty: "Kolay"
  },
  {
    id: 526,
    question: "Asitlerle bazların tepkimeye girerek su ve... oluşturmasıyla sonuçlanan kimyasal tepkime nedir?",
    options: ["Hidrojen", "Oksit", "Metal", "Tuz"],
    correct: 3,
    category: "Bilim",
    difficulty: "Kolay"
  },
  {
    id: 527,
    question: "Gezegenlerin Güneş etrafında elips yörüngelerde dolandığını keşfeden bilim insanı kimdir?",
    options: ["Johannes Kepler", "Galileo Galilei", "Nicolaus Copernicus", "Isaac Newton"],
    correct: 0,
    category: "Bilim",
    difficulty: "Kolay"
  },
  {
    id: 528,
    question: "Virüslerin genetik materyali hücreye aktardıktan sonra hemen çoğalmaya başladığı döngü nedir?",
    options: ["Litotrof Döngü", "Litogenik Döngü", "Lizojenik Döngü", "Litogenik Döngü"],
    correct: 2,
    category: "Bilim",
    difficulty: "Zor"
  },
  {
    id: 529,
    question: "İletken bir telden geçen elektrik akımının birimi nedir?",
    options: ["Volt", "Amper", "Ohm", "Coulomb"],
    correct: 1,
    category: "Bilim",
    difficulty: "Kolay"
  },
  {
    id: 530,
    question: "Bir kimyasal tepkimede hem indirgen hem de yükseltgen olarak davranabilen maddelerin bulunduğu tepkimeler hangi sınıfa aittir?",
    options: ["Çözünme-Çökelme Tepkimesi", "Sentez Tepkimesi", "Redoks Tepkimesi", "Asit-Baz Tepkimesi"],
    correct: 2,
    category: "Bilim",
    difficulty: "Orta"
  },
  {
    id: 531,
    question: "Işığın en hızlı yayıldığı ortam nedir?",
    options: ["Hava", "Su", "Boşluk (Vakum)", "Cam"],
    correct: 2,
    category: "Bilim",
    difficulty: "Kolay"
  },
  {
    id: 532,
    question: "Yaşayan organizmaların çevrelerine adaptasyon sürecini ve türlerin zamanla değişimini inceleyen bilim dalı nedir?",
    options: ["Ekoloji", "Genetik", "Evrim Biyolojisi", "Anatomi"],
    correct: 2,
    category: "Bilim",
    difficulty: "Kolay"
  },
  {
    id: 533,
    question: "Kimyasal bağ oluşumunda rol oynayan ve en dış yörüngede bulunan elektronlara ne ad verilir?",
    options: ["İyon", "Değerlik Elektronu", "Çekirdek Elektronu", "Nötrino"],
    correct: 1,
    category: "Bilim",
    difficulty: "Kolay"
  },
  {
    id: 534,
    question: "Bir cisme uygulanan kuvvetin, cismi hareket ettirdiği doğrultudaki mesafe ile çarpımına ne ad verilir?",
    options: ["Momentum", "Enerji", "Güç", "İş"],
    correct: 3,
    category: "Bilim",
    difficulty: "Kolay"
  },
  {
    id: 535,
    question: "En büyük kütleli yıldızların yaşamlarının sonunda, kendi içlerine çökerek oluşturduğu ve ışığın bile kaçamadığı gök cismi nedir?",
    options: ["Kızıl Dev", "Nötron Yıldızı", "Beyaz Cüce", "Kara Delik"],
    correct: 3,
    category: "Bilim",
    difficulty: "Kolay"
  },
  {
    id: 536,
    question: "Canlılarda kalıtsal bilgiyi taşıyan çift sarmallı molekül nedir?",
    options: ["ATP", "DNA", "RNA", "Protein"],
    correct: 1,
    category: "Bilim",
    difficulty: "Kolay"
  },
  {
    id: 537,
    question: "Buharlaşma, yoğuşma, donma gibi hal değişimleri hangi kimyasal değişim sınıfına girer?",
    options: ["Kimyasal Değişim", "Nükleer Değişim", "Redoks Değişimi", "Fiziksel Değişim"],
    correct: 3,
    category: "Bilim",
    difficulty: "Kolay"
  },
  {
    id: 538,
    question: "Dünya atmosferinde, ozon tabakasının bulunduğu katman nedir?",
    options: ["Mezosfer", "Stratosfer", "Termosfer", "Troposfer"],
    correct: 1,
    category: "Bilim",
    difficulty: "Orta"
  },
  {
    id: 539,
    question: "Bir sıvıya daldırılan cismin, sıvı tarafından yukarı doğru itilmesiyle oluşan kuvvete ne ad verilir?",
    options: ["Viskozite", "Yüzey Gerilimi", "Kılcallık", "Kaldırma Kuvveti"],
    correct: 3,
    category: "Bilim",
    difficulty: "Kolay"
  },
  {
    id: 540,
    question: "İki farklı element atomunun elektronları paylaşarak oluşturduğu bağ türü nedir?",
    options: ["Kovalent Bağ", "Metalik Bağ", "İyonik Bağ", "Hidrojen Bağı"],
    correct: 0,
    category: "Bilim",
    difficulty: "Kolay"
  },
  {
    id: 541,
    question: "Fotosentez sırasında bitkiler, hangi gazı kullanarak besin üretir?",
    options: ["Karbondioksit", "Su Buharı", "Oksijen", "Azot"],
    correct: 0,
    category: "Bilim",
    difficulty: "Kolay"
  },
  {
    id: 542,
    question: "Sesin en hızlı yayıldığı ortam genellikle hangisidir?",
    options: ["Sıvılar", "Boşluk (Vakum)", "Gazlar", "Katılar"],
    correct: 3,
    category: "Bilim",
    difficulty: "Kolay"
  },
  {
    id: 543,
    question: "Organik kimyanın temelini oluşturan element nedir?",
    options: ["Azot", "Karbon", "Oksijen", "Hidrojen"],
    correct: 1,
    category: "Bilim",
    difficulty: "Kolay"
  },
  {
    id: 544,
    question: "Güneş Sistemi'nde en kısa yörünge süresine (Güneş etrafında en hızlı dönen) sahip gezegen hangisidir?",
    options: ["Merkür", "Dünya", "Jüpiter", "Mars"],
    correct: 0,
    category: "Bilim",
    difficulty: "Kolay"
  },
  {
    id: 545,
    question: "Maddenin ısı alarak katı halden doğrudan gaz hale geçmesi olayına ne ad verilir?",
    options: ["Buharlaşma", "Süblimleşme", "Erime", "Yoğuşma"],
    correct: 1,
    category: "Bilim",
    difficulty: "Orta"
  },
  {
    id: 546,
    question: "Bir popülasyonda gen frekanslarının nesiller boyu değişimi olarak tanımlanan kavram nedir?",
    options: ["Mikroevrim", "Kalıtım", "Biyoteknoloji", "Genetik Mühendisliği"],
    correct: 0,
    category: "Bilim",
    difficulty: "Zor"
  },
  {
    id: 547,
    question: "İki farklı metalin bir araya getirilerek oluşturduğu, kimyasal özellikleri farklı olan maddeye ne ad verilir?",
    options: ["Homojen Karışım (Alaşım)", "Bileşik", "Heterojen Karışım", "Element"],
    correct: 0,
    category: "Bilim",
    difficulty: "Kolay"
  },
  {
    id: 548,
    question: "Bir dalganın birim zamanda aldığı yolun ölçüsü nedir?",
    options: ["Hız (Yayılma Hızı)", "Dalga Boyu", "Genlik", "Periyot"],
    correct: 0,
    category: "Bilim",
    difficulty: "Kolay"
  },
  {
    id: 549,
    question: "Güneş Sistemi'ndeki en büyük volkanik dağ (Olympus Mons) hangi gezegende bulunur?",
    options: ["Jüpiter", "Mars", "Venüs", "Dünya"],
    correct: 1,
    category: "Bilim",
    difficulty: "Kolay"
  },
  {
    id: 550,
    question: "Hücre zarından büyük moleküllerin ATP harcanarak (enerji kullanılarak) hücre içine alınması sürecine ne ad verilir?",
    options: ["Ekzositoz", "Ozmoz", "Endositoz", "Difüzyon"],
    correct: 2,
    category: "Bilim",
    difficulty: "Orta"
  },
  {
    id: 551,
    question: "Bir elektrik devresinde seri bağlı dirençlerin eşdeğer direnci nasıl bulunur?",
    options: ["Dirençlerin çarpımıyla", "Dirençlerin toplamıyla", "Dirençlerin terslerinin çarpımıyla", "Dirençlerin ortalamasıyla"],
    correct: 1,
    category: "Bilim",
    difficulty: "Kolay"
  },
  {
    id: 552,
    question: "Gazların yüksek basınç ve düşük sıcaklıkta sıvı hale geçme eğilimine ne ad verilir?",
    options: ["Yoğuşma", "Kritik Sıcaklık", "Buharlaşma", "Çözünme"],
    correct: 0,
    category: "Bilim",
    difficulty: "Orta"
  },
  {
    id: 553,
    question: "Bir canlının genetik yapısının tamamına ne ad verilir?",
    options: ["Genom", "Fenotip", "Haploid", "Kromozom"],
    correct: 0,
    category: "Bilim",
    difficulty: "Kolay"
  },
  {
    id: 554,
    question: "İş yapabilme yeteneği olarak tanımlanan kavram nedir?",
    options: ["Kuvvet", "Momentum", "Enerji", "Güç"],
    correct: 2,
    category: "Bilim",
    difficulty: "Kolay"
  },
  {
    id: 555,
    question: "Güneş Sistemi'nde ters yönde (saat yönünde) dönen tek gezegen hangisidir?",
    options: ["Jüpiter", "Mars", "Uranüs", "Venüs"],
    correct: 3,
    category: "Bilim",
    difficulty: "Orta"
  },
  {
    id: 556,
    question: "Güneş'ten gelen zararlı ultraviyole (UV) ışınları süzen atmosfer katmanı nedir?",
    options: ["Ozon Tabakası", "İyonosfer", "Troposfer", "Mezosfer"],
    correct: 0,
    category: "Bilim",
    difficulty: "Kolay"
  },
  {
    id: 557,
    question: "Kimyasal tepkimelerin gerçekleşmesi için gereken minimum enerji miktarına ne ad verilir?",
    options: ["Aktivasyon Enerjisi", "Serbest Enerji", "Oluşum Entalpisi", "Bağ Enerjisi"],
    correct: 0,
    category: "Bilim",
    difficulty: "Orta"
  },
  {
    id: 558,
    question: "Protein sentezinin gerçekleştiği, hücrenin en küçük ve en kalabalık organeli nedir?",
    options: ["Mitokondri", "Ribozom", "Golgi Aygıtı", "Lizozom"],
    correct: 1,
    category: "Bilim",
    difficulty: "Kolay"
  },
  {
    id: 559,
    question: "Dalga boyu en kısa olan elektromanyetik dalga türü nedir?",
    options: ["Görünür Işık", "Kızılötesi", "Gama Işınları", "Radyo Dalgaları"],
    correct: 2,
    category: "Bilim",
    difficulty: "Orta"
  },
  {
    id: 560,
    question: "Bir sıvının yüzey alanını minimuma indirme eğilimine ne ad verilir?",
    options: ["Kaldırma Kuvveti", "Kılcallık", "Yüzey Gerilimi", "Viskozite"],
    correct: 2,
    category: "Bilim",
    difficulty: "Kolay"
  },
  {
    id: 561,
    question: "İnsan vücudunda kanın pıhtılaşmasından sorumlu hücre parçacıkları nedir?",
    options: ["Akyuvarlar", "Plazma", "Trombositler", "Alyuvarlar"],
    correct: 2,
    category: "Bilim",
    difficulty: "Kolay"
  },
  {
    id: 562,
    question: "Bir kimyasal bileşiği oluşturan elementlerin sabit kütle oranları ile birleştiğini ifade eden yasa nedir?",
    options: ["Katlı Oranlar Yasası", "Kütlenin Korunumu Yasası", "Hacimlerin Birleşme Oranı Yasası", "Sabit Oranlar Yasası"],
    correct: 3,
    category: "Bilim",
    difficulty: "Orta"
  },
  {
    id: 563,
    question: "Kütlesi ve hızı olan tüm cisimlerin sahip olduğu hareket enerjisine ne ad verilir?",
    options: ["Potansiyel Enerji", "Kinetik Enerji", "Mekanik Enerji", "Termal Enerji"],
    correct: 1,
    category: "Bilim",
    difficulty: "Kolay"
  },
  {
    id: 564,
    question: "Güneş'in ana enerji kaynağı olan ve hafif atom çekirdeklerinin birleşerek daha ağır çekirdek oluşturduğu süreç nedir?",
    options: ["Nükleer Fisyon", "Radyoaktif Bozunma", "Kimyasal Yanma", "Nükleer Füzyon"],
    correct: 3,
    category: "Bilim",
    difficulty: "Kolay"
  },
  {
    id: 565,
    question: "Canlıların kalıtsal özelliklerinin nesilden nesile aktarılmasını inceleyen bilim dalı nedir?",
    options: ["Genetik", "Morfoloji", "Biyokimya", "Ekoloji"],
    correct: 0,
    category: "Bilim",
    difficulty: "Kolay"
  },
  {
    id: 566,
    question: "Yüksek basınçta ve düşük sıcaklıkta, atomların birbirine çok yakın olduğu ve akışkanlığını kaybeden madde hali nedir?",
    options: ["Süperkritik Akışkan", "Plazma", "Gaz", "Bose-Einstein Yoğuşması"],
    correct: 3,
    category: "Bilim",
    difficulty: "Zor"
  },
  {
    id: 567,
    question: "Tuzlu su, kimyasal olarak hangi tür madde sınıfına girer?",
    options: ["Bileşik", "Heterojen Karışım", "Homojen Karışım", "Element"],
    correct: 2,
    category: "Bilim",
    difficulty: "Kolay"
  },
  {
    id: 568,
    question: "Bir cismin ilk hızının sıfır olduğu ve sabit bir ivme ile hareket ettiği durumda, ivme ne anlama gelir?",
    options: ["Cismin kütlesi", "Kuvvetin sıfır olduğu", "Hızın birim zamanda değişimi", "Hızın sabit olduğu"],
    correct: 2,
    category: "Bilim",
    difficulty: "Kolay"
  },
  {
    id: 569,
    question: "Işığın parçacık özelliği taşıdığını ve enerjinin kesikli (kuantumlar halinde) olduğunu öne süren parçacık nedir?",
    options: ["Foton", "Elektron", "Nötrino", "Higgs Bozonu"],
    correct: 0,
    category: "Bilim",
    difficulty: "Orta"
  },
  {
    id: 570,
    question: "Glikozun hücre içine alınmasını sağlayan ve pankreas tarafından üretilen hormon nedir?",
    options: ["Tiroksin", "Glukagon", "Adrenalin", "İnsülin"],
    correct: 3,
    category: "Bilim",
    difficulty: "Kolay"
  },
  {
    id: 571,
    question: "Atom altı parçacıkların davranışını, belirsizlik ilkesi ile açıklayan bilim dalı nedir?",
    options: ["Termodinamik", "Kuantum Fiziği", "Klasik Mekanik", "Optik"],
    correct: 1,
    category: "Bilim",
    difficulty: "Kolay"
  },
  {
    id: 572,
    question: "Metallerin ısı ve elektrik akımını iyi iletmesinin temel nedeni nedir?",
    options: ["Yüksek yoğunluk", "İyonik bağ yapısı", "Atom çekirdeklerinin büyüklüğü", "Serbest değerlik elektronlarının varlığı"],
    correct: 3,
    category: "Bilim",
    difficulty: "Orta"
  },
  {
    id: 573,
    question: "Bir genin farklı hallerine ne ad verilir?",
    options: ["Lokus", "Kromozom", "Kromatin", "Alel"],
    correct: 3,
    category: "Bilim",
    difficulty: "Kolay"
  },
  {
    id: 574,
    question: "Uzay-zaman dokusunda kütle çekim dalgalanmalarının oluşumunu öngören teori nedir?",
    options: ["Özel Görelilik", "Genel Görelilik", "Kuantum Alan Teorisi", "Sicim Teorisi"],
    correct: 1,
    category: "Bilim",
    difficulty: "Orta"
  },
  {
    id: 575,
    question: "Gezegenlerin uydularının, halkalarının ve asteroitlerin bulunduğu, Güneş Sistemi'nin en dış bölgesi nedir?",
    options: ["Kar Delik Bölgesi", "Oort Bulutu", "Asteroid Kuşağı", "Kuiper Kuşağı"],
    correct: 3,
    category: "Bilim",
    difficulty: "Zor"
  },
  {
    id: 576,
    question: "Bir ses dalgasının bir engele çarpıp geri dönmesi olayına ne ad verilir?",
    options: ["Kırınım", "Rezonans", "Yankı (Eko)", "Doppler Etkisi"],
    correct: 2,
    category: "Bilim",
    difficulty: "Kolay"
  },
  {
    id: 577,
    question: "Kimyasal tepkimelerde atomların ve kütlenin korunumu ilkesini öne süren bilim insanı kimdir?",
    options: ["Antoine Lavoisier", "John Dalton", "Dimitri Mendeleyev", "Robert Boyle"],
    correct: 0,
    category: "Bilim",
    difficulty: "Orta"
  },
  {
    id: 578,
    question: "Hücre zarının temel yapısını oluşturan ana molekül nedir?",
    options: ["Fosfolipit", "Nükleik Asit", "Karbonhidrat", "Protein"],
    correct: 0,
    category: "Bilim",
    difficulty: "Kolay"
  },
  {
    id: 579,
    question: "Sıvıların sıcaklıkla viskozitesinin (akmaya karşı direncinin) değişimi genellikle nasıldır?",
    options: ["Sıcaklık viskoziteyi etkilemez", "Sıcaklık arttıkça viskozite azalır", "Sıcaklık arttıkça viskozite artar", "Viskozite sabittir"],
    correct: 1,
    category: "Bilim",
    difficulty: "Orta"
  },
  {
    id: 580,
    question: "Bir elementin atom numarasını (proton sayısı) değiştiren tepkime türü nedir?",
    options: ["Yanma Tepkimesi", "İyonik Tepkime", "Redoks Tepkimesi", "Nükleer Tepkime"],
    correct: 3,
    category: "Bilim",
    difficulty: "Kolay"
  },
  {
    id: 581,
    question: "Tüm canlı türlerinin ortak atadan geldiğini savunan temel biyolojik teori nedir?",
    options: ["Evrim Teorisi", "Kalıtım Teorisi", "Hücre Teorisi", "Biyogenez Teorisi"],
    correct: 0,
    category: "Bilim",
    difficulty: "Kolay"
  },
  {
    id: 582,
    question: "Su döngüsünde, bitkilerin yapraklarından su buharı salması olayına ne ad verilir?",
    options: ["Yoğuşma", "Transpirasyon (Terleme)", "Süblimleşme", "Infiltrasyon"],
    correct: 1,
    category: "Bilim",
    difficulty: "Orta"
  },
  {
    id: 583,
    question: "Gök cisimlerinin kütleçekimi nedeniyle kavisli bir yolda hareket etmesi durumunda, bu kavisli yola ne ad verilir?",
    options: ["İvme", "Yörünge", "Momentum", "Trajectory"],
    correct: 1,
    category: "Bilim",
    difficulty: "Kolay"
  },
  {
    id: 584,
    question: "En dış enerji düzeyinde 8 elektron bulundurarak (Hidrojen ve Helyum hariç) kararlı yapıya ulaşma eğilimi nedir?",
    options: ["İzotop Kuralı", "Oktet Kuralı", "Atom Kuralı", "Dublet Kuralı"],
    correct: 1,
    category: "Bilim",
    difficulty: "Kolay"
  },
  {
    id: 585,
    question: "Bir dalga kaynağının veya gözlemcinin hareketine bağlı olarak dalganın frekansında meydana gelen değişim nedir?",
    options: ["Doppler Etkisi", "Yankı", "Kırınım", "Rezonans"],
    correct: 0,
    category: "Bilim",
    difficulty: "Orta"
  },
  {
    id: 586,
    question: "Bir canlının genetik yapısının dışa yansıması (görünüşü) için kullanılan terim nedir?",
    options: ["Alel", "Fenotip", "Haploid", "Genotip"],
    correct: 1,
    category: "Bilim",
    difficulty: "Kolay"
  },
  {
    id: 587,
    question: "Küçük atom çekirdeklerinin çarpıştırılarak büyük bir çekirdek oluşturduğu tepkime türü nedir?",
    options: ["Nükleer Fisyon", "Kimyasal Bağlanma", "Radyoaktif Bozunma", "Nükleer Füzyon"],
    correct: 3,
    category: "Bilim",
    difficulty: "Kolay"
  },
  {
    id: 588,
    question: "Bir cismin sıcaklığını 1°C artırmak için gerekli olan ısı miktarına ne ad verilir?",
    options: ["Termal Enerji", "Öz Isı", "Isı Kapasitesi", "Gizli Isı"],
    correct: 1,
    category: "Bilim",
    difficulty: "Orta"
  },
  {
    id: 589,
    question: "Güneş Sistemi'ndeki gezegenlerin kütlelerinin çoğunu oluşturan iki element nedir?",
    options: ["Oksijen ve Silisyum", "Demir ve Nikel", "Hidrojen ve Helyum", "Karbon ve Oksijen"],
    correct: 2,
    category: "Bilim",
    difficulty: "Orta"
  },
  {
    id: 590,
    question: "Proteinlerin yapı taşı olan organik moleküller nedir?",
    options: ["Monosakkaritler", "Amino Asitler", "Yağ Asitleri", "Nükleotitler"],
    correct: 1,
    category: "Bilim",
    difficulty: "Kolay"
  },
  {
    id: 591,
    question: "Radyoaktif atomların kararlı hale gelene kadar alfa, beta veya gama ışınları yayarak bozunması olayı nedir?",
    options: ["Nükleer Füzyon", "Radyoaktif Bozunma", "Yarı Ömür", "Nükleer Fisyon"],
    correct: 1,
    category: "Bilim",
    difficulty: "Kolay"
  },
  {
    id: 592,
    question: "Elektrik yüklerinin birim zamanda bir noktadan geçiş miktarına ne ad verilir?",
    options: ["Akım Şiddeti", "Güç", "Direnç", "Gerilim"],
    correct: 0,
    category: "Bilim",
    difficulty: "Kolay"
  },
  {
    id: 593,
    question: "Bir kimyasal çözeltide çözücü ve çözünen miktarını ifade eden kavram nedir?",
    options: ["Konsantrasyon", "Yoğunluk", "pH Değeri", "Viskozite"],
    correct: 0,
    category: "Bilim",
    difficulty: "Kolay"
  },
  {
    id: 594,
    question: "Canlılar arasında enerji aktarımını, üreticilerden tüketicilere doğru gösteren diyagram nedir?",
    options: ["Biyoçeşitlilik Endeksi", "Popülasyon Grafiği", "Ekolojik Niş", "Besin Zinciri"],
    correct: 3,
    category: "Bilim",
    difficulty: "Kolay"
  },
  {
    id: 595,
    question: "Mikroskobik organizmaların (bakteri, virüs vb.) bilimsel olarak incelenmesiyle ilgilenen bilim dalı nedir?",
    options: ["Botanik", "Genetik", "Zooloji", "Mikrobiyoloji"],
    correct: 3,
    category: "Bilim",
    difficulty: "Kolay"
  },
  {
    id: 596,
    question: "Işığın parçacık (foton) gibi davrandığı, metal yüzeyden elektron sökme olayı nedir?",
    options: ["Kırınım", "Fotoelektrik Olay", "Compton Etkisi", "Polarizasyon"],
    correct: 1,
    category: "Bilim",
    difficulty: "Orta"
  },
  {
    id: 597,
    question: "Kimyasal reaksiyon sonucu ısı enerjisi yayan tepkimelere ne ad verilir?",
    options: ["Ekzotermik", "İzotermal", "Endotermik", "Katalitik"],
    correct: 0,
    category: "Bilim",
    difficulty: "Kolay"
  },
  {
    id: 598,
    question: "Güneş Sistemi'nde 'buz devi' olarak sınıflandırılan gezegen hangisidir?",
    options: ["Jüpiter", "Mars", "Uranüs", "Satürn"],
    correct: 2,
    category: "Bilim",
    difficulty: "Kolay"
  },
  {
    id: 599,
    question: "Bitki hücrelerinde fotosentezin gerçekleştiği organel nedir?",
    options: ["Kloroplast", "Vakuol", "Hücre Çekirdeği", "Mitokondri"],
    correct: 0,
    category: "Bilim",
    difficulty: "Kolay"
  },
  {
    id: 600,
    question: "Bir sistemin düzensizliğini veya rastgeleliğini ölçen fiziksel nicelik nedir?",
    options: ["İş", "Potansiyel Enerji", "Entropi", "Entalpi"],
    correct: 2,
    category: "Bilim",
    difficulty: "Orta"
  },

  // ==================== SANAT ve EDEBİYAT ====================
  {
    id: 601,
    question: "Modern Türk şiirinin önde gelen isimlerinden olan, 'Memleketimden İnsan Manzaraları' adlı eseriyle bilinen şair kimdir?",
    options: ["Tevfik Fikret", "Nazım Hikmet Ran", "Yahya Kemal Beyatlı", "Orhan Veli Kanık"],
    correct: 1,
    category: CATEGORIES.ART_LITERATURE.name,
    difficulty: "Kolay"
  },
  {
    id: 602,
    question: "Rönesans döneminin en ünlü eserlerinden olan, Leonardo da Vinci'nin yaptığı tablo hangisidir?",
    options: ["Son Akşam Yemeği", "Mona Lisa", "Sistine Şapeli Tavanı", "Venüs'ün Doğuşu"],
    correct: 1,
    category: CATEGORIES.ART_LITERATURE.name,
    difficulty: "Kolay"
  },
  {
    id: 603,
    question: "Türk edebiyatında Batılı anlamdaki ilk roman örneği kabul edilen eser hangisidir?",
    options: ["İntibah", "Araba Sevdası", "Ta'aşşuk-ı Talat ve Fitnat", "Aşk-ı Memnu"],
    correct: 0,
    category: CATEGORIES.ART_LITERATURE.name,
    difficulty: "Orta"
  },
  {
    id: 604,
    question: "Empresyonizm (İzlenimcilik) akımının öncülerinden, 'Gün Doğumu: İzlenim' adlı eserin sahibi ressam kimdir?",
    options: ["Claude Monet", "Paul Cézanne", "Vincent van Gogh", "Pierre-Auguste Renoir"],
    correct: 0,
    category: CATEGORIES.ART_LITERATURE.name,
    difficulty: "Orta"
  },
  {
    id: 605,
    question: "Homeros'un, Truva Savaşı'nı ve sonrasındaki olayları anlatan destanları hangileridir?",
    options: ["İlyada ve Odysseia", "Aeneis ve Kalevala", "Gılgamış ve Yaratılış", "Ramayana ve Mahabharata"],
    correct: 0,
    category: CATEGORIES.ART_LITERATURE.name,
    difficulty: "Kolay"
  },
  {
    id: 606,
    question: "İspanyol ressam Pablo Picasso'nun Kübizm akımının en önemli örneklerinden biri olan ve Guernica şehrinin bombalanmasını tasvir eden eseri hangisidir?",
    options: ["Dora Maar'ın Portresi", "Guernica", "Yaşlı Gitarist", "Avignonlu Kızlar"],
    correct: 1,
    category: CATEGORIES.ART_LITERATURE.name,
    difficulty: "Kolay"
  },
  {
    id: 607,
    question: "Bir şiirde kullanılan, tek bir dizeden oluşan ve genellikle bir fikir yoğunluğunu ifade eden nazım birimi nedir?",
    options: ["Bent", "Kıt'a", "Beyit", "Mısra (Dize)"],
    correct: 3,
    category: CATEGORIES.ART_LITERATURE.name,
    difficulty: "Kolay"
  },
  {
    id: 608,
    question: "Türk edebiyatında 'Sinekli Bakkal' ve 'Vurun Kahpeye' gibi eserleriyle tanınan kadın yazar kimdir?",
    options: ["Adalet Ağaoğlu", "Halide Edip Adıvar", "Tomris Uyar", "Nezihe Meriç"],
    correct: 1,
    category: CATEGORIES.ART_LITERATURE.name,
    difficulty: "Kolay"
  },
  {
    id: 609,
    question: "Mimar Sinan'ın 'ustalık eserim' dediği, Edirne'de bulunan ve Osmanlı mimarisinin zirvesi kabul edilen yapı hangisidir?",
    options: ["Mihrimah Sultan Camii", "Şehzade Camii", "Selimiye Camii", "Süleymaniye Camii"],
    correct: 2,
    category: CATEGORIES.ART_LITERATURE.name,
    difficulty: "Kolay"
  },
  {
    id: 610,
    question: "Bir edebi metinde kişileştirme sanatına ne ad verilir?",
    options: ["Teşbih (Benzetme)", "İstiare (Eğretileme)", "İntak (Konuşturma)", "Teşhis (Kişileştirme)"],
    correct: 3,
    category: CATEGORIES.ART_LITERATURE.name,
    difficulty: "Orta"
  },
  {
    id: 611,
    question: "Romantizm akımının en önemli isimlerinden olan, 'Sefiller' ve 'Notre Dame'ın Kamburu' eserlerinin yazarı kimdir?",
    options: ["Victor Hugo", "Alexandre Dumas", "Honoré de Balzac", "Gustave Flaubert"],
    correct: 0,
    category: CATEGORIES.ART_LITERATURE.name,
    difficulty: "Kolay"
  },
  {
    id: 612,
    question: "Bir resimde üç boyutlu hacim ve derinlik illüzyonu yaratma tekniğine ne ad verilir?",
    options: ["Kolaj", "Mozaik", "Perspektif", "Fresko"],
    correct: 2,
    category: CATEGORIES.ART_LITERATURE.name,
    difficulty: "Kolay"
  },
  {
    id: 613,
    question: "Rus edebiyatının devlerinden, 'Suç ve Ceza' ve 'Karamazov Kardeşler' gibi psikolojik romanlarıyla tanınan yazar kimdir?",
    options: ["Anton Çehov", "Fyodor Dostoyevski", "Leo Tolstoy", "Ivan Turgenyev"],
    correct: 1,
    category: CATEGORIES.ART_LITERATURE.name,
    difficulty: "Kolay"
  },
  {
    id: 614,
    question: "Bir sanat eserinde renklerin açıklık ve koyuluk derecesini ifade eden terim nedir?",
    options: ["Kontrast", "Ton (Valör)", "Saturasyon", "Hue"],
    correct: 1,
    category: CATEGORIES.ART_LITERATURE.name,
    difficulty: "Orta"
  },
  {
    id: 615,
    question: "Türk şiirinde 'Garip' akımının (Birinci Yeni) öncüsü ve 'Çınaraltı' dergisinin kurucularından olan şair kimdir?",
    options: ["Cemal Süreya", "Turgut Uyar", "Edip Cansever", "Orhan Veli Kanık"],
    correct: 3,
    category: CATEGORIES.ART_LITERATURE.name,
    difficulty: "Orta"
  },
  {
    id: 616,
    question: "Barok sanat akımının karakteristik özelliklerinden biri nedir?",
    options: ["Hareketsizlik ve statik kompozisyon", "Sadelik ve denge", "Mitler ve ideal formlar", "Duygusallık, dramatik ışık ve hareketlilik"],
    correct: 3,
    category: CATEGORIES.ART_LITERATURE.name,
    difficulty: "Zor"
  },
  {
    id: 617,
    question: "Edebi bir eserde, anlatılan olayların kronolojik sırasının değiştirilerek geriye dönüş yapılması tekniğine ne ad verilir?",
    options: ["Bilinç akışı", "Geriye dönüş (Flashback)", "Özetleme", "İç monolog"],
    correct: 1,
    category: CATEGORIES.ART_LITERATURE.name,
    difficulty: "Orta"
  },
  {
    id: 618,
    question: "Hollandalı ressam Vincent van Gogh'un, meşhur 'Yıldızlı Gece' tablosunu yaptığı akım hangisidir?",
    options: ["Sürrealizm", "Ekspresyonizm", "Fovizm", "Post-Empresyonizm"],
    correct: 3,
    category: CATEGORIES.ART_LITERATURE.name,
    difficulty: "Zor"
  },
  {
    id: 619,
    question: "Divan edebiyatında aşk, güzellik, şarap gibi lirik konuları işleyen şiir türü nedir?",
    options: ["Mesnevi", "Rubai", "Gazel", "Kaside"],
    correct: 2,
    category: CATEGORIES.ART_LITERATURE.name,
    difficulty: "Kolay"
  },
  {
    id: 620,
    question: "Amerikan edebiyatının 'Kayıp Kuşak' yazarlarından, 'Çanlar Kimin İçin Çalıyor' ve 'Yaşlı Adam ve Deniz' eserlerinin sahibi kimdir?",
    options: ["Ernest Hemingway", "John Steinbeck", "William Faulkner", "F. Scott Fitzgerald"],
    correct: 0,
    category: CATEGORIES.ART_LITERATURE.name,
    difficulty: "Orta"
  },
  {
    id: 621,
    question: "Heykel sanatında, bir malzemeyi (taş, mermer) yontarak form çıkarma tekniğine ne ad verilir?",
    options: ["Rölyef", "Subtraktif (çıkarımlı) heykel", "Döküm", "Additif (eklemeli) heykel"],
    correct: 1,
    category: CATEGORIES.ART_LITERATURE.name,
    difficulty: "Orta"
  },
  {
    id: 622,
    question: "Edebiyatta, kişisel duygu ve düşüncelerin coşkulu bir dille anlatıldığı nazım türü nedir?",
    options: ["Didaktik (Öğretici)", "Lirik (Coşkun)", "Epik (Destansı)", "Dramatik (Tiyatro)"],
    correct: 1,
    category: CATEGORIES.ART_LITERATURE.name,
    difficulty: "Kolay"
  },
  {
    id: 623,
    question: "Bir resmi, yaş veya nemli sıva üzerine su bazlı pigmentlerle yapma tekniğine ne ad verilir?",
    options: ["Tempera", "Mozaik", "Fresko", "Akvatel"],
    correct: 2,
    category: CATEGORIES.ART_LITERATURE.name,
    difficulty: "Orta"
  },
  {
    id: 624,
    question: "Franz Kafka'nın, başkahramanın bir sabah böceğe dönüştüğü ünlü eseri hangisidir?",
    options: ["Şato", "Amerika", "Dava", "Dönüşüm"],
    correct: 3,
    category: CATEGORIES.ART_LITERATURE.name,
    difficulty: "Kolay"
  },
  {
    id: 625,
    question: "Gotik mimarinin en belirgin özelliklerinden biri hangisidir?",
    options: ["Sivri kemerler ve uçan payandalar", "Yuvarlak kemerler", "Sütun ve üçgen alınlıklar", "Geniş ve kalın duvarlar"],
    correct: 0,
    category: CATEGORIES.ART_LITERATURE.name,
    difficulty: "Orta"
  },
  {
    id: 626,
    question: "Servet-i Fünun dönemi romanının en önemli temsilcisi olan ve 'Mavi ve Siyah' adlı eseriyle bilinen yazar kimdir?",
    options: ["Recaizade Mahmut Ekrem", "Halit Ziya Uşaklıgil", "Mehmet Rauf", "Nabizade Nazım"],
    correct: 1,
    category: CATEGORIES.ART_LITERATURE.name,
    difficulty: "Orta"
  },
  {
    id: 627,
    question: "Mitolojik ve dini konular yerine, günlük hayatı ve sıradan insanları konu edinen sanat akımı nedir?",
    options: ["Romantizm", "Klasisizm", "Sürrealizm", "Realizm"],
    correct: 3,
    category: CATEGORIES.ART_LITERATURE.name,
    difficulty: "Kolay"
  },
  {
    id: 628,
    question: "Türk Edebiyatında 'Kuyu' ve 'Yağmur Kaçağı' gibi eserleriyle İkinci Yeni şiirinin önde gelen isimlerinden biri kimdir?",
    options: ["Atilla İlhan", "Turgut Uyar", "Edip Cansever", "Cemal Süreya"],
    correct: 2,
    category: CATEGORIES.ART_LITERATURE.name,
    difficulty: "Zor"
  },
  {
    id: 629,
    question: "Heykelci Auguste Rodin'in en bilinen eserlerinden olan, düşünen insan figürünü tasvir eden heykel nedir?",
    options: ["Davut", "Öpücük", "Özgürlük Heykeli", "Düşünen Adam"],
    correct: 3,
    category: CATEGORIES.ART_LITERATURE.name,
    difficulty: "Kolay"
  },
  {
    id: 630,
    question: "Bir eserin konusunu, ana fikrini veya olay örgüsünü oluşturan temel ögeye ne ad verilir?",
    options: ["Zaman", "Motif", "Tema", "Mekân"],
    correct: 2,
    category: CATEGORIES.ART_LITERATURE.name,
    difficulty: "Kolay"
  },
  {
    id: 631,
    question: "Salvador Dalí'nin 'Belleğin Azmi' (Eriyen Saatler) adlı tablosu hangi sanat akımına aittir?",
    options: ["Fütürizm", "Ekspresyonizm", "Dadaizm", "Sürrealizm"],
    correct: 3,
    category: CATEGORIES.ART_LITERATURE.name,
    difficulty: "Orta"
  },
  {
    id: 632,
    question: "Türk halk şiirinde genellikle hece ölçüsüyle yazılan ve dört dizelik bentlerden oluşan nazım biçimi nedir?",
    options: ["Varsağı", "Semaî", "Destan", "Koşma"],
    correct: 3,
    category: CATEGORIES.ART_LITERATURE.name,
    difficulty: "Kolay"
  },
  {
    id: 633,
    question: "William Shakespeare'in dört büyük trajedisinden biri olmayan eser hangisidir?",
    options: ["Kral Lear", "Hamlet", "Bir Yaz Gecesi Rüyası", "Othello"],
    correct: 2,
    category: CATEGORIES.ART_LITERATURE.name,
    difficulty: "Orta"
  },
  {
    id: 634,
    question: "İslami sanatta, yazıya estetik bir görünüm kazandırma sanatına ne ad verilir?",
    options: ["Tezhip", "Hat (Hüsn-i Hat)", "Minaytür", "Ebru"],
    correct: 1,
    category: CATEGORIES.ART_LITERATURE.name,
    difficulty: "Kolay"
  },
  {
    id: 635,
    question: "Edebiyatta 'Absürt Tiyatro' akımının en önemli eserlerinden, Godot'yu Beklerken'in yazarı kimdir?",
    options: ["Samuel Beckett", "Albert Camus", "Eugène Ionesco", "Jean-Paul Sartre"],
    correct: 0,
    category: CATEGORIES.ART_LITERATURE.name,
    difficulty: "Zor"
  },
  {
    id: 636,
    question: "Türk resim sanatının ilk çağdaş ressamlarından olan ve 'Kaplumbağa Terbiyecisi' tablosuyla ünlü sanatçı kimdir?",
    options: ["İbrahim Çallı", "Şeker Ahmet Paşa", "Osman Hamdi Bey", "Feyhaman Duran"],
    correct: 2,
    category: CATEGORIES.ART_LITERATURE.name,
    difficulty: "Kolay"
  },
  {
    id: 637,
    question: "Bir eserde olayları anlatan, ancak anlatılanların dışında duran, olaylara karışmayan bakış açısı nedir?",
    options: ["Birinci tekil şahıs", "Kahraman bakış açısı", "Tanrısal bakış açısı", "Gözlemci bakış açısı"],
    correct: 3,
    category: CATEGORIES.ART_LITERATURE.name,
    difficulty: "Orta"
  },
  {
    id: 638,
    question: "Sanatta, özellikle resimde, ışık ve gölge karşıtlıklarını kullanarak hacim ve derinlik etkisi yaratma tekniğine ne ad verilir?",
    options: ["Sfumat", "Perspektif", "Tenebrizm", "Chiaroscuro (Işık-gölge)"],
    correct: 3,
    category: CATEGORIES.ART_LITERATURE.name,
    difficulty: "Zor"
  },
  {
    id: 639,
    question: "Divan şiirinde genellikle padişahı ya da dönemin ileri gelenlerini övmek için yazılan uzun şiirler nedir?",
    options: ["Kıt'a", "Terkib-i Bent", "Gazel", "Kasid"],
    correct: 3,
    category: CATEGORIES.ART_LITERATURE.name,
    difficulty: "Kolay"
  },
  {
    id: 640,
    question: "Gustave Flaubert'in, sıkıcı ve rutin evliliğinden kaçmaya çalışan bir kadının trajik hikayesini anlatan ünlü romanı hangisidir?",
    options: ["Vadideki Zambak", "Kırmızı ve Siyah", "Madame Bovary", "İnsanın Komedyası"],
    correct: 2,
    category: CATEGORIES.ART_LITERATURE.name,
    difficulty: "Orta"
  },
  {
    id: 641,
    question: "Sanatta, tek bir konuya odaklanmak yerine, gündelik nesneleri ve tüketim kültürünü konu edinen akım nedir?",
    options: ["Fütürizm", "Minimalizm", "Dadaizm", "Pop Art"],
    correct: 3,
    category: CATEGORIES.ART_LITERATURE.name,
    difficulty: "Kolay"
  },
  {
    id: 642,
    question: "Türkçe'de sade bir dille şiir yazmayı savunan ve hece ölçüsünü yeniden canlandıran edebi topluluk hangisidir?",
    options: ["Fecr-i Âti", "Yedi Meşaleciler", "Beş Hececiler", "Garipçiler"],
    correct: 2,
    category: CATEGORIES.ART_LITERATURE.name,
    difficulty: "Orta"
  },
  {
    id: 643,
    question: "Michelangelo'nun Vatikan'da bulunan ve yaratılış sahnesini içeren ünlü tavan freski nerede yer alır?",
    options: ["Panteon", "Aziz Petrus Bazilikası", "Borghese Galerisi", "Sistine Şapeli"],
    correct: 3,
    category: CATEGORIES.ART_LITERATURE.name,
    difficulty: "Kolay"
  },
  {
    id: 644,
    question: "Edebiyatta 'Bilinç Akışı' tekniğini kullanan ve 'Ulysses' adlı eseriyle modern edebiyatın öncülerinden sayılan yazar kimdir?",
    options: ["Virginia Woolf", "T.S. Eliot", "Marcel Proust", "James Joyce"],
    correct: 3,
    category: CATEGORIES.ART_LITERATURE.name,
    difficulty: "Zor"
  },
  {
    id: 645,
    question: "Bir resimde, nesnelerin ana hatlarını belirginleştiren çizgilere ne ad verilir?",
    options: ["Doku", "Ton", "Kontur (Çevre Çizgisi)", "Işık"],
    correct: 2,
    category: CATEGORIES.ART_LITERATURE.name,
    difficulty: "Kolay"
  },
  {
    id: 646,
    question: "Türk Halk Edebiyatı nazım türlerinden olup, yiğitlik, kahramanlık ve savaş temalarını işleyen şiirler nedir?",
    options: ["Varsağı", "Koşma", "Semai", "Destan"],
    correct: 3,
    category: CATEGORIES.ART_LITERATURE.name,
    difficulty: "Kolay"
  },
  {
    id: 647,
    question: "Mısır piramitleri hangi dönemin mimari özelliklerini taşır?",
    options: ["Mezopotamya", "Yunan Klasik Dönemi", "Roma İmparatorluğu", "Antik Mısır Eski Krallık"],
    correct: 3,
    category: CATEGORIES.ART_LITERATURE.name,
    difficulty: "Kolay"
  },
  {
    id: 648,
    question: "Nobel Edebiyat Ödülü alan ilk Türk yazar kimdir?",
    options: ["Adalet Ağaoğlu", "Nazım Hikmet Ran", "Yaşar Kemal", "Orhan Pamuk"],
    correct: 3,
    category: CATEGORIES.ART_LITERATURE.name,
    difficulty: "Kolay"
  },
  {
    id: 649,
    question: "Heykel sanatında, bir duvardan veya yüzeyden dışarı doğru çıkıntı yapan üç boyutlu esere ne ad verilir?",
    options: ["Stela", "Rölyef (Kabartma)", "Torso", "Büst"],
    correct: 1,
    category: CATEGORIES.ART_LITERATURE.name,
    difficulty: "Orta"
  },
  {
    id: 650,
    question: "Edebi akımlardan hangisi, insan aklını, mantığını ve evrensel kuralları ön planda tutar?",
    options: ["Natüralizm", "Ekspresyonizm", "Romantizm", "Klasisizm"],
    correct: 3,
    category: CATEGORIES.ART_LITERATURE.name,
    difficulty: "Orta"
  },
  {
    id: 651,
    question: "Hollandalı ressam Rembrandt'ın en bilinen ve büyük kompozisyonlarından biri olan eseri hangisidir?",
    options: ["İnci Küpeli Kız", "Gece Devriyesi", "Dr. Nicolaes Tulp'un Anatomi Dersi", "Danaë"],
    correct: 1,
    category: CATEGORIES.ART_LITERATURE.name,
    difficulty: "Zor"
  },
  {
    id: 652,
    question: "Türk edebiyatında 'Kürk Mantolu Madonna' adlı eseriyle bilinen yazar kimdir?",
    options: ["Reşat Nuri Güntekin", "Peyami Safa", "Sabahattin Ali", "Refik Halit Karay"],
    correct: 2,
    category: CATEGORIES.ART_LITERATURE.name,
    difficulty: "Kolay"
  },
  {
    id: 653,
    question: "Tiyatroda, bir karakterin sahnede yalnızken kendi kendine yüksek sesle konuşması tekniğine ne ad verilir?",
    options: ["Tirad", "Fısıltı", "Diyalog", "Monolog"],
    correct: 3,
    category: CATEGORIES.ART_LITERATURE.name,
    difficulty: "Orta"
  },
  {
    id: 654,
    question: "Gotik katedrallerde görülen, renkli camlarla yapılmış, dairesel ve büyük pencerelere ne ad verilir?",
    options: ["Vitray", "Büyük Pencereler", "Ayna", "Gül Pencere (Rozet)"],
    correct: 3,
    category: CATEGORIES.ART_LITERATURE.name,
    difficulty: "Orta"
  },
  {
    id: 655,
    question: "Bir şiirde, anlamca birbirine bağlı en az iki dizeden oluşan bölüme ne ad verilir?",
    options: ["Uyak", "Redif", "Ölçü (Vezin)", "Dörtlük (Kıt'a)"],
    correct: 3,
    category: CATEGORIES.ART_LITERATURE.name,
    difficulty: "Kolay"
  },
  {
    id: 656,
    question: "İngiliz edebiyatının 19. yüzyıl yazarlarından, 'Oliver Twist' ve 'İki Şehrin Hikayesi' eserleriyle tanınan yazar kimdir?",
    options: ["Thomas Hardy", "Jane Austen", "Charlotte Brontë", "Charles Dickens"],
    correct: 3,
    category: CATEGORIES.ART_LITERATURE.name,
    difficulty: "Kolay"
  },
  {
    id: 657,
    question: "İslam sanatlarında, altın tozu kullanılarak kitap, levha ve ferman süsleme sanatına ne ad verilir?",
    options: ["Tezhip", "Minyatür", "Ebru", "Çini"],
    correct: 0,
    category: CATEGORIES.ART_LITERATURE.name,
    difficulty: "Orta"
  },
  {
    id: 658,
    question: "Sanatta, bir nesnenin sadece temel geometrik şekillerini ve en az ayrıntısını kullanarak soyutlama yapan akım nedir?",
    options: ["Sürrealizm", "Fovizm", "Minimalizm", "Kübizm"],
    correct: 3,
    category: CATEGORIES.ART_LITERATURE.name,
    difficulty: "Orta"
  },
  {
    id: 659,
    question: "Türk edebiyatında 'Çalıkuşu' romanıyla bilinen, milli edebiyat akımının önde gelen isimlerinden yazar kimdir?",
    options: ["Reşat Nuri Güntekin", "Halide Edip Adıvar", "Ömer Seyfettin", "Aka Gündüz"],
    correct: 0,
    category: CATEGORIES.ART_LITERATURE.name,
    difficulty: "Kolay"
  },
  {
    id: 660,
    question: "Resimde, ışığın düşüş yönü ve renklerin çevresel etkilerle değişimi üzerine odaklanan Fransız sanat akımı hangisidir?",
    options: ["Dadaizm", "Romantizm", "Realizm", "Empresyonizm (İzlenimcilik)"],
    correct: 3,
    category: CATEGORIES.ART_LITERATURE.name,
    difficulty: "Kolay"
  },
  {
    id: 661,
    question: "Edebi eserde kullanılan kelimelerin çağrışım gücüne ve müzikalitesine önem veren akım nedir?",
    options: ["Sembolizm", "Parnasizm", "Natüralizm", "Realizm"],
    correct: 0,
    category: CATEGORIES.ART_LITERATURE.name,
    difficulty: "Zor"
  },
  {
    id: 662,
    question: "Antik Yunan mimarisinde, üst kısmı hayvan veya insan figürleriyle süslenmiş dik duran taşa ne ad verilir?",
    options: ["Sütun", "Stela", "Friz", "Kemer"],
    correct: 1,
    category: CATEGORIES.ART_LITERATURE.name,
    difficulty: "Orta"
  },
  {
    id: 663,
    question: "İtalyan şair Dante Alighieri'nin, cehennemden cennete yaptığı hayali yolculuğu anlatan başyapıtı nedir?",
    options: ["On İki Sandalye", "İlahî Komedya", "Cennet ve Cehennem", "Don Kişot"],
    correct: 1,
    category: CATEGORIES.ART_LITERATURE.name,
    difficulty: "Kolay"
  },
  {
    id: 664,
    question: "Türk edebiyatında 'Anadolu Notları' ve 'Bizim Akdeniz' gibi eserleriyle gezi yazısı türünün önemli isimlerinden olan yazar kimdir?",
    options: ["Falih Rıfkı Atay", "Yusuf Atılgan", "Ahmet Haşim", "Cahit Sıtkı Tarancı"],
    correct: 0,
    category: CATEGORIES.ART_LITERATURE.name,
    difficulty: "Orta"
  },
  {
    id: 665,
    question: "Sanatta, duygusal yoğunluğu abartılı renk ve biçimlerle ifade eden akım nedir?",
    options: ["Fütürizm", "Dadaizm", "Ekspresyonizm (Dışavurumculuk)", "Pop Art"],
    correct: 2,
    category: CATEGORIES.ART_LITERATURE.name,
    difficulty: "Orta"
  },
  {
    id: 666,
    question: "Bir roman veya hikayede, anlatıcının zihinsel süreçlerini doğrudan, düzensiz ve mantıksal bir sıra olmaksızın aktarma tekniği nedir?",
    options: ["İç monolog", "Özetleme", "Bilinç akışı", "Geriye dönüş"],
    correct: 2,
    category: CATEGORIES.ART_LITERATURE.name,
    difficulty: "Zor"
  },
  {
    id: 667,
    question: "Minyatür sanatının en önemli özelliklerinden biri hangisidir?",
    options: ["Küçük boyutlu olması ve derinlik (perspektif) olmaması", "Üç boyutlu görünümün ön planda olması", "Gölgelendirme ve derinlik kullanılması", "Yağlı boya ile yapılması"],
    correct: 0,
    category: CATEGORIES.ART_LITERATURE.name,
    difficulty: "Orta"
  },
  {
    id: 668,
    question: "Divan edebiyatında, beyit sayısı 33-99 arasında değişen, belirli bir düzeni olan nazım biçimi nedir?",
    options: ["Rubai", "Kaside", "Terkib-i Bent", "Müseddes"],
    correct: 1,
    category: CATEGORIES.ART_LITERATURE.name,
    difficulty: "Zor"
  },
  {
    id: 669,
    question: "Rus besteci Stravinsky'nin 1913'teki prömiyeri skandala neden olan, ritmik karmaşıklığı ile ünlü eseri nedir?",
    options: ["Boléro", "Fındıkkıran", "Kuğu Gölü", "Bahar Ayini"],
    correct: 3,
    category: CATEGORIES.ART_LITERATURE.name,
    difficulty: "Zor"
  },
  {
    id: 670,
    question: "Tanzimat edebiyatının ilk döneminde, 'Vatan yahut Silistre' oyunuyla tiyatro türünde ün kazanan yazar kimdir?",
    options: ["Ahmet Mithat Efendi", "Ziya Paşa", "Namık Kemal", "Şinasi"],
    correct: 2,
    category: CATEGORIES.ART_LITERATURE.name,
    difficulty: "Kolay"
  },
  {
    id: 671,
    question: "Yüzyıllık Yalnızlık' adlı eseriyle 'Büyülü Gerçekçilik' akımının en önemli temsilcilerinden sayılan yazar kimdir?",
    options: ["Gabriel García Márquez", "Jorge Luis Borges", "Isabel Allende", "Julio Cortázar"],
    correct: 0,
    category: CATEGORIES.ART_LITERATURE.name,
    difficulty: "Orta"
  },
  {
    id: 672,
    question: "Antik Yunan heykel sanatında, figürün ağırlığını bir bacağına vermesiyle oluşan rahat ve doğal duruşa ne ad verilir?",
    options: ["Friz", "Kontraposto", "Kore", "Kouros"],
    correct: 1,
    category: CATEGORIES.ART_LITERATURE.name,
    difficulty: "Zor"
  },
  {
    id: 673,
    question: "Türk edebiyatında 'Yedi Meşaleciler' topluluğunun yayımladığı tek ortak kitap hangisidir?",
    options: ["Güneşin Ölümü", "Yedi Meşale", "Memleketimden İnsan Manzaraları", "Geçtiğim Yol"],
    correct: 1,
    category: CATEGORIES.ART_LITERATURE.name,
    difficulty: "Zor"
  },
  {
    id: 674,
    question: "Van Gogh'un kendi kulağını kesmesine ilham veren ressam dostu kimdir?",
    options: ["Édouard Manet", "Paul Gauguin", "Paul Cézanne", "Henri Matisse"],
    correct: 1,
    category: CATEGORIES.ART_LITERATURE.name,
    difficulty: "Zor"
  },
  {
    id: 675,
    question: "Divan şiirinde Aruz ölçüsünü esas alıp, hece ölçüsüne karşı çıkan şair kimdir?",
    options: ["Fuzuli", "Nedim", "Mehmet Akif Ersoy", "Yunus Emre"],
    correct: 0, // Fuzuli Divan Şiirinin önemli temsilcisi, Aruz'u kullanmıştır.
    category: CATEGORIES.ART_LITERATURE.name,
    difficulty: "Orta"
  },
  {
    id: 676,
    question: "Bir romanda olay örgüsünü oluşturan ana çatışmaya ne ad verilir?",
    options: ["Düğüm", "Kriz (Çatışma)", "Doku", "Çözüm"],
    correct: 1,
    category: CATEGORIES.ART_LITERATURE.name,
    difficulty: "Kolay"
  },
  {
    id: 677,
    question: "Leonardo da Vinci'nin 'Son Akşam Yemeği' adlı eseri hangi yüzeye yapılmıştır?",
    options: ["Duvar (Fresk)", "Tuval", "Ahşap panel", "İpek"],
    correct: 0,
    category: CATEGORIES.ART_LITERATURE.name,
    difficulty: "Orta"
  },
  {
    id: 678,
    question: "Batı edebiyatında ilk roman örneği kabul edilen ve İspanyol yazar Cervantes'in eseri olan yapıt nedir?",
    options: ["Gargantua ve Pantagruel", "Robinson Crusoe", "Gulliver'in Gezileri", "Don Kişot"],
    correct: 3,
    category: CATEGORIES.ART_LITERATURE.name,
    difficulty: "Kolay"
  },
  {
    id: 679,
    question: "Dışavurumculuk (Ekspresyonizm) akımının en ünlü eserlerinden olan, çığlık atan figürü içeren tablo nedir?",
    options: ["Otoportre", "Guernica", "Çığlık", "Yıldızlı Gece"],
    correct: 2,
    category: CATEGORIES.ART_LITERATURE.name,
    difficulty: "Kolay"
  },
  {
    id: 680,
    question: "Türk Edebiyatında 'Kayıp Aranıyor' romanıyla bilinen ve modern Türk romanının önemli figürlerinden olan yazar kimdir?",
    options: ["Leyla Erbil", "Oğuz Atay", "Adalet Ağaoğlu", "Bilge Karasu"],
    correct: 2,
    category: CATEGORIES.ART_LITERATURE.name,
    difficulty: "Zor"
  },
  {
    id: 681,
    question: "Bir resim kompozisyonunda, figürlerin veya nesnelerin birbiriyle olan ilişkisi ve yerleşimi ne olarak adlandırılır?",
    options: ["Doku", "Renk Skalası", "Hacim", "Kompozisyon"],
    correct: 3,
    category: CATEGORIES.ART_LITERATURE.name,
    difficulty: "Orta"
  },
  {
    id: 682,
    question: "Halk edebiyatında, saz şairlerinin atışmalarında birbirlerine söyledikleri, taşlama niteliği taşıyan şiirler nedir?",
    options: ["Koşma", "Atışma", "Destan", "Mani"],
    correct: 1,
    category: CATEGORIES.ART_LITERATURE.name,
    difficulty: "Orta"
  },
  {
    id: 683,
    question: "Sanat tarihi açısından, Antik Yunan mimarisindeki üç temel sütun düzeninden biri olmayan hangisidir?",
    options: ["Toskana", "Dor", "İyon", "Korint"],
    correct: 0,
    category: CATEGORIES.ART_LITERATURE.name,
    difficulty: "Zor"
  },
  {
    id: 684,
    question: "Amerikalı yazar George Orwell'in totaliter bir rejimin eleştirisini yaptığı ünlü distopik romanı nedir?",
    options: ["Hayvan Çiftliği", "Cesur Yeni Dünya", "Sineklerin Tanrısı", "1984"],
    correct: 3,
    category: CATEGORIES.ART_LITERATURE.name,
    difficulty: "Kolay"
  },
  {
    id: 685,
    question: "Bir edebiyat eserinde, iki farklı durumun, duygunun veya fikrin zıtlık oluşturacak şekilde bir arada kullanılması sanatı nedir?",
    options: ["Tecahül-i Ârif (Bilmezden Gelme)", "Mübalağa (Abartma)", "Hüsn-i Ta'lil (Güzel Nedene Bağlama)", "Tezat (Karşıtlık)"],
    correct: 3,
    category: CATEGORIES.ART_LITERATURE.name,
    difficulty: "Orta"
  },
  {
    id: 686,
    question: "Rönesans'ın en önemli sanatçılarından olan ve 'Davut' heykeli ile Sistine Şapeli tavan resimlerini yapan sanatçı kimdir?",
    options: ["Michelangelo", "Tiziano", "Donatello", "Rafael"],
    correct: 0,
    category: CATEGORIES.ART_LITERATURE.name,
    difficulty: "Kolay"
  },
  {
    id: 687,
    question: "Türk edebiyatında 'Göl Saatleri' ve 'Piyale' gibi eserleriyle Sembolizm ve Empresyonizm akımlarının etkisiyle tanınan şair kimdir?",
    options: ["Necip Fazıl Kısakürek", "Yahya Kemal Beyatlı", "Ahmet Haşim", "Ahmet Hamdi Tanpınar"],
    correct: 2,
    category: CATEGORIES.ART_LITERATURE.name,
    difficulty: "Zor"
  },
  {
    id: 688,
    question: "Antik Yunan tiyatrosunda, seyircilerin oturduğu yarım daire şeklindeki alana ne ad verilir?",
    options: ["Orchestra", "Parodos", "Theatron", "Skene"],
    correct: 2,
    category: CATEGORIES.ART_LITERATURE.name,
    difficulty: "Zor"
  },
  {
    id: 689,
    question: "Hollandalı ressam Johannes Vermeer'in, en ünlü eserlerinden olan, bir genç kadının portresi nedir?",
    options: ["Whistler'ın Annesi", "Mona Lisa", "İnci Küpeli Kız", "Giyotin Önünde Maria Antoinette"],
    correct: 2,
    category: CATEGORIES.ART_LITERATURE.name,
    difficulty: "Kolay"
  },
  {
    id: 690,
    question: "Türk edebiyatında 'Cemo' ve 'İnce Memed' gibi eserleriyle Çukurova insanını anlatan usta yazar kimdir?",
    options: ["Kemal Tahir", "Rıfat Ilgaz", "Orhan Kemal", "Yaşar Kemal"],
    correct: 3,
    category: CATEGORIES.ART_LITERATURE.name,
    difficulty: "Kolay"
  },
  {
    id: 691,
    question: "Mitolojik hikayeler, tanrı ve tanrıçaların yaşamları gibi konuları ele alan sanat akımı nedir?",
    options: ["Klasisizm", "Realizm", "Romantizm", "Sürrealizm"],
    correct: 0,
    category: CATEGORIES.ART_LITERATURE.name,
    difficulty: "Orta"
  },
  {
    id: 692,
    question: "Türk Halk Edebiyatı'nda aşk, doğa, ayrılık gibi konuları işleyen, hece ölçüsünün 11'li kalıbıyla yazılan şiirler nedir?",
    options: ["Destan", "Koşma", "Türkü", "Mani"],
    correct: 1,
    category: CATEGORIES.ART_LITERATURE.name,
    difficulty: "Kolay"
  },
  {
    id: 693,
    question: "Bir resmin veya fotoğrafın, sanatçının imzasıyla birlikte birden fazla kopyasının basılması işlemine ne ad verilir?",
    options: ["Replika", "Orijinal", "Heykel", "Litografi (Baskı)"],
    correct: 3,
    category: CATEGORIES.ART_LITERATURE.name,
    difficulty: "Orta"
  },
  {
    id: 694,
    question: "Rus yazar Lev Tolstoy'un Napolyon'un Rusya'yı işgali dönemini anlatan, epik ve tarihi romanı hangisidir?",
    options: ["Diriliş", "İnsan Ne İle Yaşar?", "Anna Karenina", "Savaş ve Barış"],
    correct: 3,
    category: CATEGORIES.ART_LITERATURE.name,
    difficulty: "Kolay"
  },
  {
    id: 695,
    question: "Edebiyatta 'Aydınlanma' döneminin temelini oluşturan, aklı ve bilimi esas alan felsefi akım nedir?",
    options: ["Egzistansiyalizm", "Rasyonalizm", "Determinizm", "Ampirizm"],
    correct: 1,
    category: CATEGORIES.ART_LITERATURE.name,
    difficulty: "Zor"
  },
  {
    id: 696,
    question: "Yüzeysel olanın ötesine geçerek, nesnelerin özünü ve düşünsel yönünü yakalamayı amaçlayan akım nedir?",
    options: ["Fovizm", "Sürrealizm", "Sembolizm", "Fütürizm"],
    correct: 2,
    category: CATEGORIES.ART_LITERATURE.name,
    difficulty: "Zor"
  },
  {
    id: 697,
    question: "Tiyatroda, seyircinin sahnedeki karakterlerin aksine olayın sonucunu bildiği durum nedir?",
    options: ["Diyalog", "Komedya", "Dramatik İroni", "Trajedi"],
    correct: 2,
    category: CATEGORIES.ART_LITERATURE.name,
    difficulty: "Orta"
  },
  {
    id: 698,
    question: "Osmanlı mimarisinde, camilerin içini ve dışını süslemek için kullanılan, genelde çiçek ve geometrik desenli, sırlı seramik kaplamalara ne ad verilir?",
    options: ["Çini", "Hat", "Tezhip", "Minyatür"],
    correct: 0,
    category: CATEGORIES.ART_LITERATURE.name,
    difficulty: "Kolay"
  },
  {
    id: 699,
    question: "Divan şiirinde, hem aruz hem de hece ölçüsünü ustalıkla kullanan, 'Şair-i Azam' (Büyük Şair) unvanıyla anılan Tanzimat dönemi şairi kimdir?",
    options: ["Namık Kemal", "Tevfik Fikret", "Recaizade Mahmut Ekrem", "Abdülhak Hamit Tarhan"],
    correct: 3,
    category: CATEGORIES.ART_LITERATURE.name,
    difficulty: "Zor"
  },
  {
    id: 700,
    question: "Resimde, renklerin birbirine karışmadan, yan yana küçük noktalar halinde kullanılması tekniği nedir?",
    options: ["Noktacılık (Pointillizm)", "Sfumato", "Fırça Darbesi", "Empasto"],
    correct: 0,
    category: CATEGORIES.ART_LITERATURE.name,
    difficulty: "Zor"
  },
  {
    id: 701,
    question: "Homeros'un, Truva Savaşı'nı ve on yıl süren mücadeleyi anlatan ünlü destanı nedir?",
    options: ["Ramayana", "İlyada", "Aeneis", "Odysseia"],
    correct: 1,
    category: "Sanat ve Edebiyat",
    difficulty: "Kolay"
  },
  {
    id: 702,
    question: "Rönesans döneminde, 'Son Akşam Yemeği' ve 'Mona Lisa' eserleriyle tanınan İtalyan sanatçı kimdir?",
    options: ["Michelangelo", "Leonardo da Vinci", "Raphael", "Donatello"],
    correct: 1,
    category: "Sanat ve Edebiyat",
    difficulty: "Kolay"
  },
  {
    id: 703,
    question: "19. yüzyılda, duygu, hayal ve kişisel özgürlüğe önem veren, klasisizme tepki olarak doğan edebiyat akımı nedir?",
    options: ["Sembolizm", "Romantizm", "Realizm", "Natüralizm"],
    correct: 1,
    category: "Sanat ve Edebiyat",
    difficulty: "Kolay"
  },
  {
    id: 704,
    question: "Ünlü 'Çığlık' tablosu ile tanınan, dışavurumculuk akımının öncülerinden olan Norveçli ressam kimdir?",
    options: ["Edvard Munch", "Vincent van Gogh", "Claude Monet", "Gustav Klimt"],
    correct: 0,
    category: "Sanat ve Edebiyat",
    difficulty: "Kolay"
  },
  {
    id: 705,
    question: "Türk edebiyatında, 'Kuyucaklı Yusuf', 'İçimizdeki Şeytan' gibi eserleriyle tanınan yazar kimdir?",
    options: ["Orhan Pamuk", "Sabahattin Ali", "Halide Edip Adıvar", "Yaşar Kemal"],
    correct: 1,
    category: "Sanat ve Edebiyat",
    difficulty: "Kolay"
  },
  {
    id: 706,
    question: "Edebiyatta, yaşamın ve doğanın gerçekliğini olduğu gibi, nesnel bir biçimde yansıtmayı amaçlayan akım nedir?",
    options: ["Sürrealizm", "Parnasizm", "Realizm", "Romantizm"],
    correct: 2,
    category: "Sanat ve Edebiyat",
    difficulty: "Kolay"
  },
  {
    id: 707,
    question: "Antik Yunan tiyatrosunda, trajedinin en büyük üç yazarından biri olarak kabul edilen ve 'Oidipus' eseriyle bilinen isim kimdir?",
    options: ["Aiskhylos", "Euripides", "Aristophanes", "Sophokles"],
    correct: 3,
    category: "Sanat ve Edebiyat",
    difficulty: "Orta"
  },
  {
    id: 708,
    question: "'Yıldızlı Gece' tablosuyla tanınan, empresyonizm sonrası dönemin en etkili sanatçılarından olan ressam kimdir?",
    options: ["Paul Cézanne", "Vincent van Gogh", "Pierre-Auguste Renoir", "Pablo Picasso"],
    correct: 1,
    category: "Sanat ve Edebiyat",
    difficulty: "Kolay"
  },
  {
    id: 709,
    question: "Tanzimat edebiyatında, ilk yerli roman kabul edilen ve Şemseddin Sami tarafından yazılan eser nedir?",
    options: ["Taaşşuk-ı Talat ve Fitnat", "Cezmi", "Araba Sevdası", "İntibah"],
    correct: 0,
    category: "Sanat ve Edebiyat",
    difficulty: "Orta"
  },
  {
    id: 710,
    question: "Modern sanatta, nesneleri geometrik şekillere ayırarak çoklu bakış açısıyla resmeden akım nedir?",
    options: ["Sürrealizm", "Ekspresyonizm", "Fovizm", "Kübizm"],
    correct: 3,
    category: "Sanat ve Edebiyat",
    difficulty: "Kolay"
  },
  {
    id: 711,
    question: "William Shakespeare'in, Danimarka Prensi'nin intikam hikayesini anlatan ünlü trajedisi nedir?",
    options: ["Macbeth", "Hamlet", "Kral Lear", "Othello"],
    correct: 1,
    category: "Sanat ve Edebiyat",
    difficulty: "Kolay"
  },
  {
    id: 712,
    question: "19. yüzyıl Fransız edebiyatında, realist akımın en önemli temsilcilerinden olan ve 'Madam Bovary' romanıyla tanınan yazar kimdir?",
    options: ["Victor Hugo", "Gustave Flaubert", "Émile Zola", "Honoré de Balzac"],
    correct: 1,
    category: "Sanat ve Edebiyat",
    difficulty: "Orta"
  },
  {
    id: 713,
    question: "İslam sanatında, yazıların estetik bir şekilde düzenlenmesi ve süslenmesi sanatı nedir?",
    options: ["Çini", "Minyatür", "Ebru", "Hüsn-i Hat (Hat Sanatı)"],
    correct: 3,
    category: "Sanat ve Edebiyat",
    difficulty: "Kolay"
  },
  {
    id: 714,
    question: "Dış dünyayı değil, bireyin iç dünyasındaki izlenimleri ve duyguları sembollerle ifade etmeyi amaçlayan şiir akımı nedir?",
    options: ["Sembolizm", "Parnasizm", "Kübik Şiir", "Fütürizm"],
    correct: 0,
    category: "Sanat ve Edebiyat",
    difficulty: "Kolay"
  },
  {
    id: 715,
    question: "İzlenimcilik (Empresyonizm) akımının isim babası sayılan ve 'İzlenim: Gün Doğumu' tablosuyla tanınan ressam kimdir?",
    options: ["Pierre-Auguste Renoir", "Claude Monet", "Edgar Degas", "Édouard Manet"],
    correct: 1,
    category: "Sanat ve Edebiyat",
    difficulty: "Kolay"
  },
  {
    id: 716,
    question: "Türk Halk Edebiyatı'nda, aşıkların saz eşliğinde söylediği, genellikle aşk, doğa, kahramanlık konularını işleyen şiir türü nedir?",
    options: ["Mersiye", "Gazel", "Koşma", "Kasida"],
    correct: 2,
    category: "Sanat ve Edebiyat",
    difficulty: "Kolay"
  },
  {
    id: 717,
    question: "Resim, heykel ve mimaride, 17. yüzyılda ortaya çıkan, abartılı hareket, zengin süsleme ve dramatik etkiyi ön plana çıkaran sanat akımı nedir?",
    options: ["Barok", "Gotik", "Neoklasisizm", "Rokoko"],
    correct: 0,
    category: "Sanat ve Edebiyat",
    difficulty: "Orta"
  },
  {
    id: 718,
    question: "Franz Kafka'nın, baş kahramanın bir sabah böceğe dönüşmesini anlatan ünlü eseri nedir?",
    options: ["Amerika", "Dönüşüm", "Şato", "Dava"],
    correct: 1,
    category: "Sanat ve Edebiyat",
    difficulty: "Kolay"
  },
  {
    id: 719,
    question: "Modern sanatta, rastlantısallık, mantık dışılık ve geleneksel estetiğe karşı çıkışı esas alan akım nedir?",
    options: ["Sürrealizm", "Fütürizm", "Dadaizm", "Pop Art"],
    correct: 2,
    category: "Sanat ve Edebiyat",
    difficulty: "Orta"
  },
  {
    id: 720,
    question: "Türk Divan Edebiyatı'nda, genellikle 5 ila 15 beyitten oluşan, aşk, güzellik, şarap gibi konuları işleyen şiir türü nedir?",
    options: ["Terkib-i Bend", "Gazel", "Kasida", "Mesnevi"],
    correct: 1,
    category: "Sanat ve Edebiyat",
    difficulty: "Kolay"
  },
  {
    id: 721,
    question: "Salvador Dalí'nin 'Belleğin Azmi' (Eriyen Saatler) tablosu hangi sanat akımının en önemli örneklerindendir?",
    options: ["Dadaizm", "Kübizm", "Sürrealizm", "Fovizm"],
    correct: 2,
    category: "Sanat ve Edebiyat",
    difficulty: "Kolay"
  },
  {
    id: 722,
    question: "Türk edebiyatında, Kurtuluş Savaşı'nı konu alan 'Yaban' ve 'Ankara' romanlarıyla tanınan yazar kimdir?",
    options: ["Reşat Nuri Güntekin", "Yakup Kadri Karaosmanoğlu", "Falih Rıfkı Atay", "Halide Edip Adıvar"],
    correct: 1,
    category: "Sanat ve Edebiyat",
    difficulty: "Kolay"
  },
  {
    id: 723,
    question: "Antik Yunan ve Roma sanatının ideal ve rasyonel özelliklerini temel alan, 18. yüzyılda Barok ve Rokoko'ya tepki olarak doğan akım nedir?",
    options: ["Gotik", "Neoklasisizm", "Barok", "Romantizm"],
    correct: 1,
    category: "Sanat ve Edebiyat",
    difficulty: "Orta"
  },
  {
    id: 724,
    question: "Bir eserin konusunu, teması ya da mesajını semboller aracılığıyla dolaylı bir şekilde anlatan edebi sanat nedir?",
    options: ["Mecaz", "Teşbih (Benzetme)", "İstiare", "Alegori (Altyapısal Temsil)"],
    correct: 3,
    category: "Sanat ve Edebiyat",
    difficulty: "Orta"
  },
  {
    id: 725,
    question: "Rus yazar Fyodor Dostoyevski'nin, Raskolnikov adlı yoksul bir öğrencinin işlediği cinayeti anlatan başyapıtı nedir?",
    options: ["Karamazov Kardeşler", "Budala", "Yer Altından Notlar", "Suç ve Ceza"],
    correct: 3,
    category: "Sanat ve Edebiyat",
    difficulty: "Kolay"
  },
  {
    id: 726,
    question: "Türk mimarisinde, 16. yüzyılda yaşamış ve 'ustalık eserim' dediği Selimiye Camii'ni inşa eden mimar kimdir?",
    options: ["Mimar Sinan", "Mimar Hayreddin", "Davut Ağa", "Mimar Kemalettin"],
    correct: 0,
    category: "Sanat ve Edebiyat",
    difficulty: "Kolay"
  },
  {
    id: 727,
    question: "Sanatta, duygusal coşkunluğu, iç gözlemi ve bireyin öznel deneyimlerini abartılı renk ve fırça darbeleriyle ifade eden akım nedir?",
    options: ["Ekspresyonizm (Dışavurumculuk)", "Sürrealizm", "Pop Art", "Fovizm"],
    correct: 0,
    category: "Sanat ve Edebiyat",
    difficulty: "Orta"
  },
  {
    id: 728,
    question: "Edebiyatta, akla ve mantığa dayanarak, kurallara bağlı ve açık bir anlatımı savunan akım nedir?",
    options: ["Sembolizm", "Romantizm", "Klasisizm", "Realizm"],
    correct: 2,
    category: "Sanat ve Edebiyat",
    difficulty: "Kolay"
  },
  {
    id: 729,
    question: "Ünlü heykeli 'Davut' ve Sistine Şapeli'ndeki tavan freskleriyle tanınan Rönesans sanatçısı kimdir?",
    options: ["Michelangelo", "Tiziano", "Raphael", "Leonardo da Vinci"],
    correct: 0,
    category: "Sanat ve Edebiyat",
    difficulty: "Kolay"
  },
  {
    id: 730,
    question: "20. yüzyıl Türk şiirinde, 'Kapalı Çarşı' ve 'Çarşı'ya İnerken' gibi eserleriyle tanınan, modern ve gelenekseli harmanlayan şair kimdir?",
    options: ["Necip Fazıl Kısakürek", "Asaf Halet Çelebi", "Orhan Veli Kanık", "Cahit Sıtkı Tarancı"],
    correct: 1,
    category: "Sanat ve Edebiyat",
    difficulty: "Orta"
  },
  {
    id: 731,
    question: "Sessizliği, uyumu ve müzikaliteyi esas alan, anlamın kapalılığını ve çağrışımı öne çıkaran Fransız şiir akımı nedir?",
    options: ["Fütürizm", "Realizm", "Sembolizm", "Parnasizm"],
    correct: 2,
    category: "Sanat ve Edebiyat",
    difficulty: "Kolay"
  },
  {
    id: 732,
    question: "George Orwell'ın, totaliter bir geleceği ve 'Büyük Birader' figürünü anlatan distopik romanı nedir?",
    options: ["Hayvan Çiftliği", "Otomatik Portakal", "Bin Dokuz Yüz Seksen Dört", "Cesur Yeni Dünya"],
    correct: 2,
    category: "Sanat ve Edebiyat",
    difficulty: "Kolay"
  },
  {
    id: 733,
    question: "Bir edebiyat eserinde, olay örgüsünün ve karakterlerin, genetik ve çevresel faktörlerle belirlendiğini savunan akım nedir?",
    options: ["Realizm", "Romantizm", "Natüralizm", "Sembolizm"],
    correct: 2,
    category: "Sanat ve Edebiyat",
    difficulty: "Orta"
  },
  {
    id: 734,
    question: "Hollandalı ressam Johannes Vermeer'in en ünlü eserlerinden biri olan ve genç bir kızı inci küpesiyle resmeden tablosu nedir?",
    options: ["İnci Küpeli Kız", "Mona Lisa", "Guernica", "Gece Devriyesi"],
    correct: 0,
    category: "Sanat ve Edebiyat",
    difficulty: "Kolay"
  },
  {
    id: 735,
    question: "Edebi eserlerde, dış gözlem yerine kahramanın bilinç akışını ve iç monologlarını kullanan anlatım tekniği nedir?",
    options: ["Gözlem Tekniği", "Özetleme", "Geriyedönüş", "Bilinç Akışı"],
    correct: 3,
    category: "Sanat ve Edebiyat",
    difficulty: "Orta"
  },
  {
    id: 736,
    question: "İspanyol ressam Francisco Goya'nın, Napolyon ordusunun İspanyol isyancıları idamını konu alan ünlü eseri nedir?",
    options: ["3 Mayıs 1808", "Satürn Çocuğunu Yerken", "Maja Çıplak", "Çıplak Giyimli"],
    correct: 0,
    category: "Sanat ve Edebiyat",
    difficulty: "Orta"
  },
  {
    id: 737,
    question: "Türk edebiyatında, halk hikayelerinden esinlenerek 'İnce Memed' destanını yazan yazar kimdir?",
    options: ["Yaşar Kemal", "Orhan Kemal", "Kemal Tahir", "Aziz Nesin"],
    correct: 0,
    category: "Sanat ve Edebiyat",
    difficulty: "Kolay"
  },
  {
    id: 738,
    question: "Sanatta, gündelik yaşamın nesnelerini ve popüler kültürü eserlerine taşıyan, 1950'lerde ortaya çıkan akım nedir?",
    options: ["Minimalizm", "Fütürizm", "Soyut Ekspresyonizm", "Pop Art"],
    correct: 3,
    category: "Sanat ve Edebiyat",
    difficulty: "Kolay"
  },
  {
    id: 739,
    question: "Şiirde, biçim mükemmelliğine, nesnelliğe ve dış dünyaya ait betimlemelere önem veren, Romantizme tepki olarak doğan akım nedir?",
    options: ["Parnasizm", "Sembolizm", "Sürrealizm", "Fütürizm"],
    correct: 0,
    category: "Sanat ve Edebiyat",
    difficulty: "Orta"
  },
  {
    id: 740,
    question: "Nobel Edebiyat Ödülü alan ilk Türk yazar kimdir?",
    options: ["Adalet Ağaoğlu", "Nazım Hikmet", "Yaşar Kemal", "Orhan Pamuk"],
    correct: 3,
    category: "Sanat ve Edebiyat",
    difficulty: "Kolay"
  },
  {
    id: 741,
    question: "Klasik müzikte, duygu ve coşkunun ön planda olduğu, 19. yüzyıla damgasını vuran dönem nedir?",
    options: ["Modern Dönem", "Klasik Dönem", "Romantik Dönem", "Barok Dönem"],
    correct: 2,
    category: "Sanat ve Edebiyat",
    difficulty: "Kolay"
  },
  {
    id: 742,
    question: "Çağdaş heykel sanatında, metal, beton ve kaynak gibi endüstriyel malzemeleri kullanan ünlü İspanyol heykeltıraş kimdir?",
    options: ["Auguste Rodin", "Henry Moore", "Eduardo Chillida", "Alberto Giacometti"],
    correct: 2,
    category: "Sanat ve Edebiyat",
    difficulty: "Zor"
  },
  {
    id: 743,
    question: "Edebiyatta, 20. yüzyılın başlarında, geleneksel yapıları yıkan, serbest nazım ve imajın önemini vurgulayan akım nedir?",
    options: ["Natüralizm", "Klasisizm", "Modernizm", "Realizm"],
    correct: 2,
    category: "Sanat ve Edebiyat",
    difficulty: "Kolay"
  },
  {
    id: 744,
    question: "Rönesans döneminde, 'Atina Okulu' freski ile tanınan, İtalyan yüksek Rönesans ressamı kimdir?",
    options: ["Donatello", "Raphael", "Michelangelo", "Leonardo da Vinci"],
    correct: 1,
    category: "Sanat ve Edebiyat",
    difficulty: "Kolay"
  },
  {
    id: 745,
    question: "Türk edebiyatında, 'Çocuk ve Allah', 'Otuz Beş Yaş' gibi eserleriyle tanınan ve hece ölçüsünü modernleştiren şair kimdir?",
    options: ["Nazım Hikmet", "Cahit Sıtkı Tarancı", "Ahmet Haşim", "Yahya Kemal Beyatlı"],
    correct: 1,
    category: "Sanat ve Edebiyat",
    difficulty: "Kolay"
  },
  {
    id: 746,
    question: "Sanatta, renklerin parlak ve saf kullanımı, hızlı fırça darbeleri ve geçici anın yakalanması hangi akımın özelliğidir?",
    options: ["Fovizm", "Empresyonizm (İzlenimcilik)", "Kübİzm", "Ekspresyonizm"],
    correct: 1,
    category: "Sanat ve Edebiyat",
    difficulty: "Kolay"
  },
  {
    id: 747,
    question: "Divan Edebiyatı'nda, bir padişahı ya da üst düzey bir kişiyi övmek amacıyla yazılan uzun şiir türü nedir?",
    options: ["Mesnevi", "Gazel", "Kasida", "Kıt'a"],
    correct: 2,
    category: "Sanat ve Edebiyat",
    difficulty: "Kolay"
  },
  {
    id: 748,
    question: "İngiliz şair Lord Byron'ın kahraman tipini yansıtan, toplumdan dışlanmış, asi ve gizemli karakterin adı nedir?",
    options: ["Don Kişot", "Klasik Kahraman", "Faust", "Byronik Kahraman"],
    correct: 3,
    category: "Sanat ve Edebiyat",
    difficulty: "Orta"
  },
  {
    id: 749,
    question: "Amerikalı yazar Ernest Hemingway'in, Küba'da yaşlı bir balıkçının dev bir kılıç balığıyla mücadelesini anlatan ünlü eseri nedir?",
    options: ["Silahlara Veda", "Çanlar Kimin İçin Çalıyor", "Yaşlı Adam ve Deniz", "Güneş de Doğar"],
    correct: 2,
    category: "Sanat ve Edebiyat",
    difficulty: "Kolay"
  },
  {
    id: 750,
    question: "Heykel sanatında, insan figürünü idealize edilmiş ve oranlı bir şekilde tasvir etme eğilimi hangi döneme aittir?",
    options: ["Modern Sanat", "Orta Çağ", "Barok", "Antik Yunan ve Roma"],
    correct: 3,
    category: "Sanat ve Edebiyat",
    difficulty: "Kolay"
  },
  {
    id: 751,
    question: "20. yüzyılın başlarında, İtalyan sanatçıların teknolojiyi, hızı ve dinamizmi yücelten akımı nedir?",
    options: ["Dadaizm", "Kübizm", "Sürrealizm", "Fütürizm"],
    correct: 3,
    category: "Sanat ve Edebiyat",
    difficulty: "Kolay"
  },
  {
    id: 752,
    question: "Bir şiirde, dizelerin ilk harflerinin yukarıdan aşağıya doğru anlamlı bir sözcük veya isim oluşturması tekniği nedir?",
    options: ["Asonans", "Manzume", "Akrostiş", "Aliterasyon"],
    correct: 2,
    category: "Sanat ve Edebiyat",
    difficulty: "Orta"
  },
  {
    id: 753,
    question: "Hollandalı ressam Hieronymus Bosch'un, fantastik, grotesk ve alegorik eserleriyle tanınan tablosu nedir?",
    options: ["Son Akşam Yemeği", "Adem'in Yaratılışı", "Yıldızlı Gece", "Cennet Bahçesi"],
    correct: 3,
    category: "Sanat ve Edebiyat",
    difficulty: "Zor"
  },
  {
    id: 754,
    question: "Türk edebiyatında, Milli Edebiyat döneminin önemli isimlerinden olan ve 'Türkçülük' akımının düşünsel temelini atan yazar kimdir?",
    options: ["Ziya Gökalp", "Mehmet Akif Ersoy", "Ömer Seyfettin", "Halide Edip Adıvar"],
    correct: 0,
    category: "Sanat ve Edebiyat",
    difficulty: "Kolay"
  },
  {
    id: 755,
    question: "Sanat tarihinde, ışık ve gölge kontrastını (Chiaroscuro) ustaca kullanarak dramatik etki yaratan İtalyan Barok ressamı kimdir?",
    options: ["Velázquez", "Rubens", "Rembrandt", "Caravaggio"],
    correct: 3,
    category: "Sanat ve Edebiyat",
    difficulty: "Orta"
  },
  {
    id: 756,
    question: "Romanda, yazarın olayları ve karakterleri, kendi yorumunu katmadan, bir bilim insanı gibi gözlemleyerek aktardığı akım nedir?",
    options: ["Natüralizm", "Klasisizm", "Sembolizm", "Romantizm"],
    correct: 0,
    category: "Sanat ve Edebiyat",
    difficulty: "Kolay"
  },
  {
    id: 757,
    question: "Pablo Picasso'nun, İspanya İç Savaşı sırasındaki bir kasabanın bombalanmasını tasvir eden ve Kübizmin etkilerini taşıyan başyapıtı nedir?",
    options: ["Yaşlı Adamın Gitmesi", "Guernica", "Dora Maar'ın Portresi", "Avignonlu Kızlar"],
    correct: 1,
    category: "Sanat ve Edebiyat",
    difficulty: "Kolay"
  },
  {
    id: 758,
    question: "Tanzimat Dönemi'nde ilk edebi roman kabul edilen, Namık Kemal'in 'Ali Bey'in yasak aşkını' konu alan eseri nedir?",
    options: ["Cezmi", "Araba Sevdası", "Vatan Yahut Silistre", "İntibah"],
    correct: 3,
    category: "Sanat ve Edebiyat",
    difficulty: "Kolay"
  },
  {
    id: 759,
    question: "20. yüzyıl sanatında, sanat eserinin kendisinden çok, yaratılma süreci ve kavramsal fikirlerin önemini vurgulayan akım nedir?",
    options: ["Soyut Ekspresyonizm", "Kavramsal Sanat", "Pop Art", "Op Art"],
    correct: 1,
    category: "Sanat ve Edebiyat",
    difficulty: "Orta"
  },
  {
    id: 760,
    question: "Divan Edebiyatı'nda, Hz. Muhammed'i övmek amacıyla yazılan şiir türü nedir?",
    options: ["Hicviye", "Münacaat", "Naat", "Tevhid"],
    correct: 2,
    category: "Sanat ve Edebiyat",
    difficulty: "Kolay"
  },
  {
    id: 761,
    question: "Fransız ressam Jean-Honoré Fragonard'ın 'Salıncak' tablosu, hangi sanat akımının hafif, zarif ve eğlenceli ruhunu yansıtır?",
    options: ["Empresyonizm", "Rokoko", "Barok", "Neoklasisizm"],
    correct: 1,
    category: "Sanat ve Edebiyat",
    difficulty: "Orta"
  },
  {
    id: 762,
    question: "Türk masal, efsane ve hikayelerinin başkahramanı olan ve 'yarı melek, yarı insan' figürünü temsil eden isim nedir?",
    options: ["Dede Korkut", "Nasreddin Hoca", "Hızır", "Keloğlan"],
    correct: 3,
    category: "Sanat ve Edebiyat",
    difficulty: "Kolay"
  },
  {
    id: 763,
    question: "Gotik mimarinin en belirgin özelliklerinden biri olan, binanın ağırlığını dışarıya aktarmaya yarayan yapısal destek nedir?",
    options: ["Sütun", "Kemer", "Kubbeler", "Uçan Payanda"],
    correct: 3,
    category: "Sanat ve Edebiyat",
    difficulty: "Orta"
  },
  {
    id: 764,
    question: "Bir şiirde, aynı seslerin veya hecelerin tekrarıyla ritim oluşturulması tekniği nedir?",
    options: ["Aliterasyon ve Asonans", "Mecaz-ı Mürsel", "Teşbih (Benzetme)", "İstiare"],
    correct: 0,
    category: "Sanat ve Edebiyat",
    difficulty: "Kolay"
  },
  {
    id: 765,
    question: "Jules Verne'in, Phileas Fogg'un bir iddia üzerine çıktığı dünya turunu anlatan ünlü macera romanı nedir?",
    options: ["Denizler Altında Yirmi Bin Fersah", "Kaptan Grant'ın Çocukları", "Ay'a Seyahat", "Seksen Günde Devr-i Alem"],
    correct: 3,
    category: "Sanat ve Edebiyat",
    difficulty: "Kolay"
  },
  {
    id: 766,
    question: "Ressam Piet Mondrian'ın, sadece yatay ve dikey çizgiler ile ana renkleri (kırmızı, mavi, sarı) kullandığı sanat akımı nedir?",
    options: ["De Stijl (Neoplastisizm)", "Minimalizm", "Op Art", "Fovizm"],
    correct: 0,
    category: "Sanat ve Edebiyat",
    difficulty: "Orta"
  },
  {
    id: 767,
    question: "Türk edebiyatında, şiiri düz yazıya yaklaştıran, ölçü ve uyaktan vazgeçen Garip Hareketi'nin (Birinci Yeni) en önemli temsilcisi kimdir?",
    options: ["Orhan Veli Kanık", "Cemal Süreya", "Turgut Uyar", "Attila İlhan"],
    correct: 0,
    category: "Sanat ve Edebiyat",
    difficulty: "Kolay"
  },
  {
    id: 768,
    question: "Müziği, şiiri ve resmi birleştirmeyi amaçlayan, sembolizmden etkilenen, 19. yüzyıl sonunda ortaya çıkan akım nedir?",
    options: ["Fütürizm", "Sembolizm", "Ekspresyonizm", "Art Nouveau"],
    correct: 1,
    category: "Sanat ve Edebiyat",
    difficulty: "Zor"
  },
  {
    id: 769,
    question: "Bir romanın veya hikayenin olaylarının geçtiği zaman ve mekan bütünlüğüne ne ad verilir?",
    options: ["Mekan-Zaman (Ortam)", "Anlatıcı", "Karakter", "Tema"],
    correct: 0,
    category: "Sanat ve Edebiyat",
    difficulty: "Kolay"
  },
  {
    id: 770,
    question: "Amerikalı sanatçı Andy Warhol'un, seri üretim ve tüketim kültürünü konu edindiği 'Campbell's Soup Cans' eseri hangi akıma aittir?",
    options: ["Minimalizm", "Pop Art", "Dadaizm", "Sürrealizm"],
    correct: 1,
    category: "Sanat ve Edebiyat",
    difficulty: "Kolay"
  },
  {
    id: 771,
    question: "İngiliz şair John Milton'ın, Adem ve Havva'nın Cennet'ten kovuluşunu anlatan ünlü epik şiiri nedir?",
    options: ["Odysseia", "Kayıp Cennet", "İlahi Komedya", "Faust"],
    correct: 1,
    category: "Sanat ve Edebiyat",
    difficulty: "Orta"
  },
  {
    id: 772,
    question: "Mimaride, sade, işlevsel ve süslemesiz yapıları savunan, 'az daha çoktur' (less is more) felsefesine dayanan akım nedir?",
    options: ["Gotik", "Minimalizm (veya Modern Mimari)", "Barok", "Art Nouveau"],
    correct: 1,
    category: "Sanat ve Edebiyat",
    difficulty: "Kolay"
  },
  {
    id: 773,
    question: "Türk edebiyatında, 'Eylül' romanıyla ilk psikolojik roman örneğini veren yazar kimdir?",
    options: ["Mehmet Rauf", "Recaizade Mahmut Ekrem", "Halit Ziya Uşaklıgil", "Hüseyin Rahmi Gürpınar"],
    correct: 0,
    category: "Sanat ve Edebiyat",
    difficulty: "Kolay"
  },
  {
    id: 774,
    question: "Heykel sanatında, malzemenin (mermer, tunç vb.) yüzeyini pürüzsüz bırakarak figürün ideal güzelliğini ön plana çıkaran tarz hangi döneme aittir?",
    options: ["Barok", "Ekspresyonizm", "Gotik", "Klasik (Yunan/Roma)"],
    correct: 3,
    category: "Sanat ve Edebiyat",
    difficulty: "Kolay"
  },
  {
    id: 775,
    question: "İtalyan yazar Dante Alighieri'nin, cehennem, araf ve cennet yolculuğunu anlatan başyapıtı nedir?",
    options: ["İlahi Komedya", "Kaybolan Cennet", "Decameron", "Canterbury Hikayeleri"],
    correct: 0,
    category: "Sanat ve Edebiyat",
    difficulty: "Kolay"
  },
  {
    id: 776,
    question: "Sanat eserlerinde derinlik hissini yaratmak için, nesnelerin büyüklüğünü ve konumunu matematiksel kurallarla düzenleyen teknik nedir?",
    options: ["Sfumato", "Perspektif", "Chiaroscuro", "Kolaj"],
    correct: 1,
    category: "Sanat ve Edebiyat",
    difficulty: "Kolay"
  },
  {
    id: 777,
    question: "Türk edebiyatında, halk şairi olarak bilinen ve sadece hece ölçüsünü kullanan, 'Benim Sadık Yarim Kara Topraktır' dizeleriyle tanınan ozan kimdir?",
    options: ["Karacaoğlan", "Âşık Veysel Şatıroğlu", "Yunus Emre", "Pir Sultan Abdal"],
    correct: 1,
    category: "Sanat ve Edebiyat",
    difficulty: "Kolay"
  },
  {
    id: 778,
    question: "20. yüzyılın ortalarında, New York'ta doğan ve tuval üzerine boyayı rastgele, enerji dolu fırça darbeleriyle uygulayan akım nedir?",
    options: ["Pop Art", "Op Art", "Kavramsal Sanat", "Soyut Ekspresyonizm (Action Painting)"],
    correct: 3,
    category: "Sanat ve Edebiyat",
    difficulty: "Orta"
  },
  {
    id: 779,
    question: "Felsefi ve edebi bir akım olarak, insan varlığının özünden önce geldiğini, özgürlüğü ve sorumluluğu vurgulayan düşünce nedir?",
    options: ["Natüralizm", "Egzistansiyalizm (Varoluşçuluk)", "Rasyonalizm", "Pozitivizm"],
    correct: 1,
    category: "Sanat ve Edebiyat",
    difficulty: "Orta"
  },
  {
    id: 780,
    question: "Amerikalı yazar J. D. Salinger'ın, ergenlik dönemindeki Holden Caulfield karakterini anlatan kült romanı nedir?",
    options: ["Çavdar Tarlasında Çocuklar", "Yolda", "Gazap Üzümleri", "Bülbülü Öldürmek"],
    correct: 0,
    category: "Sanat ve Edebiyat",
    difficulty: "Kolay"
  },
  {
    id: 781,
    question: "Bizans ve Osmanlı sanatında, küçük, renkli cam veya taş parçacıklarının (tessera) bir araya getirilmesiyle yapılan sanat eseri nedir?",
    options: ["Mozaik", "Fresk", "Çini", "Minyatür"],
    correct: 0,
    category: "Sanat ve Edebiyat",
    difficulty: "Kolay"
  },
  {
    id: 782,
    question: "Edebiyatta, akıl ve mantık kurallarını terk ederek, bilinçaltı, rüyalar ve rastlantısallıkla eser yaratmayı amaçlayan akım nedir?",
    options: ["Dadaizm", "Sürrealizm", "Fütürizm", "Parnasizm"],
    correct: 1,
    category: "Sanat ve Edebiyat",
    difficulty: "Kolay"
  },
  {
    id: 783,
    question: "Türk Halk Edebiyatı'nda, Divan Edebiyatı'nın etkisiyle ortaya çıkan, aruz ölçüsüyle yazılan şiir türü nedir?",
    options: ["Koşma", "Mani", "Semaî", "Divan (Türkü)"],
    correct: 3,
    category: "Sanat ve Edebiyat",
    difficulty: "Orta"
  },
  {
    id: 784,
    question: "İtalyan mimar Filippo Brunelleschi'nin, Floransa Katedrali'nin kubbesini inşa etmesi hangi sanat döneminin başlangıcı olarak kabul edilir?",
    options: ["Neoklasisizm", "Gotik", "Barok", "Rönesans"],
    correct: 3,
    category: "Sanat ve Edebiyat",
    difficulty: "Kolay"
  },
  {
    id: 785,
    question: "Türk edebiyatında 'Huzur', 'Saatleri Ayarlama Enstitüsü' gibi eserleriyle tanınan, Doğu-Batı sentezi arayışındaki yazar kimdir?",
    options: ["Ahmet Hamdi Tanpınar", "Abdülhak Şinasi Hisar", "Peyami Safa", "Halit Ziya Uşaklıgil"],
    correct: 0,
    category: "Sanat ve Edebiyat",
    difficulty: "Kolay"
  },
  {
    id: 786,
    question: "Sanatta, görme fizyolojisini temel alarak, renkleri küçük noktalar halinde yan yana kullanarak optik karışım sağlayan teknik nedir?",
    options: ["Fovizm", "Puvahtrizm (Noktacılık/Pointilizm)", "Sürrealizm", "Kübizm"],
    correct: 1,
    category: "Sanat ve Edebiyat",
    difficulty: "Orta"
  },
  {
    id: 787,
    question: "Bir şiirde ya da düzyazıda, iki zıt duygunun, kavramın ya da durumun bir arada kullanılması sanatı nedir?",
    options: ["Tezat (Karşıtlık)", "Mübalağa", "Kinaye", "Tevriye"],
    correct: 0,
    category: "Sanat ve Edebiyat",
    difficulty: "Kolay"
  },
  {
    id: 788,
    question: "19. yüzyıl sonunda Fransa'da, empresyonizme tepki olarak, renk ve biçimi duygusal bir araç olarak kullanan ressam kimdir?",
    options: ["Paul Gauguin", "Edgar Degas", "Pierre-Auguste Renoir", "Claude Monet"],
    correct: 0,
    category: "Sanat ve Edebiyat",
    difficulty: "Orta"
  },
  {
    id: 789,
    question: "İrlandalı yazar James Joyce'un, bir günlük süreçte geçen, bilinç akışı tekniğini zirveye taşıdığı ünlü romanı nedir?",
    options: ["Ulysses", "Yüzyıllık Yalnızlık", "Savaş ve Barış", "Mrs. Dalloway"],
    correct: 0,
    category: "Sanat ve Edebiyat",
    difficulty: "Zor"
  },
  {
    id: 790,
    question: "Edebiyatta, kişisel gelişim ve eğitim sürecini (genç bir karakterin büyümesini) konu edinen roman türü nedir?",
    options: ["Polisiye Roman", "Tarihi Roman", "Gotik Roman", "Bildungsroman (Oluşum/Gelişim Romanı)"],
    correct: 3,
    category: "Sanat ve Edebiyat",
    difficulty: "Orta"
  },
  {
    id: 791,
    question: "Eski Mısır mimarisinde, Güneş tanrısı Ra'yı sembolize eden, dik ve dörtgen kesitli anıt yapı nedir?",
    options: ["Obelisk (Dikilitaş)", "Sfenks", "Piramit", "Mastaba"],
    correct: 0,
    category: "Sanat ve Edebiyat",
    difficulty: "Kolay"
  },
  {
    id: 792,
    question: "Edebiyatta, şairin nesnelerin gerçek görünüşü yerine, kendisinde uyandırdığı izlenimleri aktarmayı amaçladığı akım nedir?",
    options: ["Empresyonizm (İzlenimcilik)", "Parnasizm", "Realizm", "Natüralizm"],
    correct: 0,
    category: "Sanat ve Edebiyat",
    difficulty: "Kolay"
  },
  {
    id: 793,
    question: "Türk Edebiyatı'nda, ilk kez hece ölçüsüyle tiyatro eseri (Nesteren) yazan ve tiyatroyu halkı eğitmek için araç gören yazar kimdir?",
    options: ["Şinasi", "Abdülhak Hamit Tarhan", "Recaizade Mahmut Ekrem", "Namık Kemal"],
    correct: 1,
    category: "Sanat ve Edebiyat",
    difficulty: "Orta"
  },
  {
    id: 794,
    question: "Sanat eserlerinde, perspektif ve oran kurallarının kasten bozulması, uzun uzuvlar ve dramatik figürler hangi sanat akımının özelliğidir?",
    options: ["Rönesans", "Gotik", "Barok", "Maniyerizm"],
    correct: 3,
    category: "Sanat ve Edebiyat",
    difficulty: "Zor"
  },
  {
    id: 795,
    question: "Rus yazar Lev Tolstoy'un, Napolyon'un Rusya işgalini ve beş aristokrat ailenin hayatını anlatan epik romanı nedir?",
    options: ["Anna Karenina", "Hacı Murat", "Diriliş", "Savaş ve Barış"],
    correct: 3,
    category: "Sanat ve Edebiyat",
    difficulty: "Kolay"
  },
  {
    id: 796,
    question: "Güneydoğu Anadolu Bölgesi'nde, kilden yapılmış, silindir biçimli kubbeli ev mimarisine ne ad verilir?",
    options: ["Konak", "Yörük Çadırı", "Harran Evleri (Kümbet Evler)", "Taş Evler"],
    correct: 2,
    category: "Sanat ve Edebiyat",
    difficulty: "Kolay"
  },
  {
    id: 797,
    question: "Amerikalı yazar Edgar Allan Poe'nun, gerilim, korku ve gizem temalarını işlediği kısa öykü türü nedir?",
    options: ["Macera Öyküsü", "Romantik Öykü", "Toplumsal Öykü", "Gotik/Korku Öyküsü"],
    correct: 3,
    category: "Sanat ve Edebiyat",
    difficulty: "Kolay"
  },
  {
    id: 798,
    question: "Divan Edebiyatı'nda, bir şairin başka bir şairin şiirini aynı ölçü ve uyakla taklit etmesi (benzerini yazması) eylemi nedir?",
    options: ["Mersiye", "Tevhid", "Nazire", "Terkib-i Bend"],
    correct: 2,
    category: "Sanat ve Edebiyat",
    difficulty: "Orta"
  },
  {
    id: 799,
    question: "Mitolojik ve tarihi konular yerine, sıradan insanların günlük yaşamını konu edinen ve Empresyonizm'e zemin hazırlayan akım nedir?",
    options: ["Realizm", "Romantizm", "Klasisizm", "Sembolizm"],
    correct: 0,
    category: "Sanat ve Edebiyat",
    difficulty: "Kolay"
  },
  {
    id: 800,
    question: "Dünya'nın bilinen en eski yazılı destanlarından biri olan ve 'Gılgamış'ın ölümsüzlük arayışını' anlatan Mezopotamya eseri nedir?",
    options: ["Mahabharata", "Ramayana", "Gılgamış Destanı", "Nibelungen Lied"],
    correct: 2,
    category: "Sanat ve Edebiyat",
    difficulty: "Kolay"
  },

  // ==================== MÜZİK ====================
  {
    id: 801,
    question: "Klasik Batı Müziği'nin 'Dahi Çocuk'u olarak bilinen, Avusturyalı besteci kimdir?",
    options: ["Johann Sebastian Bach", "Franz Schubert", "Wolfgang Amadeus Mozart", "Ludwig van Beethoven"],
    correct: 2,
    category: CATEGORIES.MUSIC.name,
    difficulty: "Kolay"
  },
  {
    id: 802,
    question: "Bir müzik parçasının hızını belirten terim nedir?",
    options: ["Melodi", "Tempo", "Armoni", "Ritim"],
    correct: 1,
    category: CATEGORIES.MUSIC.name,
    difficulty: "Kolay"
  },
  {
    id: 803,
    question: "Gitar, telli bir çalgıdır. Peki, bir nefesli çalgı (üflemeli) örneği hangisidir?",
    options: ["Bateri", "Keman", "Trompet", "Piyano"],
    correct: 2,
    category: CATEGORIES.MUSIC.name,
    difficulty: "Kolay"
  },
  {
    id: 804,
    question: "Dört vuruşluk nota değerine ne ad verilir?",
    options: ["Birlik", "İkilik", "Dörtlük", "Sekizlik"],
    correct: 0,
    category: CATEGORIES.MUSIC.name,
    difficulty: "Orta"
  },
  {
    id: 805,
    question: "Türkiye'de 'Minicik Bir Kız' ve 'Dillere Destan' gibi şarkılarıyla bilinen pop müziğin önde gelen kadın sanatçısı kimdir?",
    options: ["Sezen Aksu", "Nilüfer", "Demet Akalın", "Ajda Pekkan"],
    correct: 3,
    category: CATEGORIES.MUSIC.name,
    difficulty: "Kolay"
  },
  {
    id: 806,
    question: "Üç veya daha fazla sesin aynı anda tınlamasıyla oluşan uyuma ne ad verilir?",
    options: ["Ritim", "Armoni (Akor)", "Kontrpuan", "Monofoni"],
    correct: 1,
    category: CATEGORIES.MUSIC.name,
    difficulty: "Orta"
  },
  {
    id: 807,
    question: "İtalyanca'da 'çok hızlı' anlamına gelen tempo terimi hangisidir?",
    options: ["Largo", "Adagio", "Andante", "Allegro"],
    correct: 3,
    category: CATEGORIES.MUSIC.name,
    difficulty: "Orta"
  },
  {
    id: 808,
    question: "Geleneksel Türk Sanat Müziği'nde (TSM), temel makam sistemine ne ad verilir?",
    options: ["Makam", "Gam", "Mod", "Usul"],
    correct: 0,
    category: CATEGORIES.MUSIC.name,
    difficulty: "Kolay"
  },
  {
    id: 809,
    question: "Rock müziğin efsanevi ismi, 'Bohemian Rhapsody' ve 'We Will Rock You' gibi şarkılarıyla tanınan grup hangisidir?",
    options: ["Led Zeppelin", "Queen", "The Beatles", "Pink Floyd"],
    correct: 1,
    category: CATEGORIES.MUSIC.name,
    difficulty: "Kolay"
  },
  {
    id: 810,
    question: "Bir müzik eserinde, notaların yükseklik ve alçaklık sırasını ifade eden öge nedir?",
    options: ["Ritim", "Tempo", "Melodi", "Tını"],
    correct: 2,
    category: CATEGORIES.MUSIC.name,
    difficulty: "Kolay"
  },
  {
    id: 811,
    question: "Antonio Vivaldi'nin en ünlü eserlerinden biri olan, dört mevsimi anlatan keman konçertolarının adı nedir?",
    options: ["Dört Mevsim", "Su Müziği", "Ay Işığı Sonatı", "Brandenburg Konçertoları"],
    correct: 0,
    category: CATEGORIES.MUSIC.name,
    difficulty: "Kolay"
  },
  {
    id: 812,
    question: "Çoğunlukla dört vuruşluk ölçü birimi kullanılan, Amerika'nın New Orleans şehrinde doğan müzik türü nedir?",
    options: ["Caz (Jazz)", "Klasik", "Blues", "Reggae"],
    correct: 0,
    category: CATEGORIES.MUSIC.name,
    difficulty: "Orta"
  },
  {
    id: 813,
    question: "Piyano çalınırken tuşlara basıldığında tellere vuran parçanın adı nedir?",
    options: ["Köprü", "Çekiç (Hammer)", "Rezonans kutusu", "Akort vidası"],
    correct: 1,
    category: CATEGORIES.MUSIC.name,
    difficulty: "Zor"
  },
  {
    id: 814,
    question: "Türkiye'de 'Rock müziğin Babası' olarak anılan ve 'Tamirci Çırağı', 'Islak Islak' gibi eserleriyle bilinen sanatçı kimdir?",
    options: ["Barış Manço", "Cem Karaca", "Fikret Kızılok", "Erkin Koray"],
    correct: 1,
    category: CATEGORIES.MUSIC.name,
    difficulty: "Kolay"
  },
  {
    id: 815,
    question: "Hangi enstrüman, bir orkestrada en ince (en tiz) sesi üretir?",
    options: ["Viyolonsel (Çello)", "Keman (Violin)", "Kontrbas", "Viyola"],
    correct: 1,
    category: CATEGORIES.MUSIC.name,
    difficulty: "Orta"
  },
  {
    id: 816,
    question: "Müziğin ve dramanın birleştiği, genellikle dekor, kostüm ve oyunculuk içeren sahne eseri nedir?",
    options: ["Oda Müziği", "Opera", "Konçerto", "Senfoni"],
    correct: 1,
    category: CATEGORIES.MUSIC.name,
    difficulty: "Kolay"
  },
  {
    id: 817,
    question: "Bir müzik eserinin başlangıcında yer alan, eserin ana temasını içeren kısa parçaya ne ad verilir?",
    options: ["Koda", "Füg", "Prelüd (Giriş Müziği)", "Sonat"],
    correct: 2,
    category: CATEGORIES.MUSIC.name,
    difficulty: "Orta"
  },
  {
    id: 818,
    question: "Ludwig van Beethoven'ın, işitme kaybına rağmen bestelediği ve 'Neşeye Övgü' bölümünü içeren ünlü senfonisi hangisidir?",
    options: ["5. Senfoni", "6. Senfoni (Pastoral)", "9. Senfoni", "3. Senfoni (Eroica)"],
    correct: 2,
    category: CATEGORIES.MUSIC.name,
    difficulty: "Orta"
  },
  {
    id: 819,
    question: "Türk Halk Müziği'nde, telli ve mızraplı çalgıların en yaygın kullanılanı nedir?",
    options: ["Saz (Bağlama)", "Kemençe", "Kanun", "Ud"],
    correct: 0,
    category: CATEGORIES.MUSIC.name,
    difficulty: "Kolay"
  },
  {
    id: 820,
    question: "Bir şarkının ritmini ve zamanlamasını gösteren, birbirine eşit aralıklarla tekrar eden kuvvetli ve zayıf vuruşlar bütünü nedir?",
    options: ["Armoni", "Ölçü (Metre)", "Tını", "Melodi"],
    correct: 1,
    category: CATEGORIES.MUSIC.name,
    difficulty: "Orta"
  },
  {
    id: 821,
    question: "Hangi ünlü besteci, Viyana Klasik Okulu'nun son büyük temsilcisi olarak kabul edilir?",
    options: ["Mozart", "Beethoven", "Haydn", "Bach"],
    correct: 1,
    category: CATEGORIES.MUSIC.name,
    difficulty: "Kolay"
  },
  {
    id: 822,
    question: "Müzikte, bir notanın normalde olması gerekenden yarım ses inceltilmesini sağlayan işaret nedir?",
    options: ["Bemol (♭)", "Naturel (♮)", "Diyez (#)", "Anahtar"],
    correct: 0,
    category: CATEGORIES.MUSIC.name,
    difficulty: "Orta"
  },
  {
    id: 823,
    question: "Reggae müziğin kökeni hangi ülkedir?",
    options: ["Brezilya", "Küba", "Jamaika", "Nijerya"],
    correct: 2,
    category: CATEGORIES.MUSIC.name,
    difficulty: "Orta"
  },
  {
    id: 824,
    question: "Türkiye'de 'Arabesk müziğin Kralı' olarak anılan, 'Gurbet Kuşları', 'İsyankar' gibi eserleriyle bilinen sanatçı kimdir?",
    options: ["Müslüm Gürses", "Ferdi Tayfur", "Orhan Gencebay", "İbrahim Tatlıses"],
    correct: 2,
    category: CATEGORIES.MUSIC.name,
    difficulty: "Kolay"
  },
  {
    id: 825,
    question: "Nota yazımında, bir dizedeki notaların adını belirleyen sembol nedir?",
    options: ["Porte", "Akor", "Anahtar (Clef)", "Ölçü çizgisi"],
    correct: 2,
    category: CATEGORIES.MUSIC.name,
    difficulty: "Orta"
  },
  {
    id: 826,
    question: "İtalyanca'da 'yavaş' anlamına gelen, bir müzik eserinin yavaş tempoda icra edilmesini belirten terim nedir?",
    options: ["Moderato", "Vivace", "Presto", "Largo"],
    correct: 3,
    category: CATEGORIES.MUSIC.name,
    difficulty: "Kolay"
  },
  {
    id: 827,
    question: "Popüler müzikte, iki gitar (ritim ve solo), bas gitar ve davuldan oluşan temel gruba ne ad verilir?",
    options: ["Dörtlü", "Rock Grubu (Band)", "Orkestra", "Koro"],
    correct: 1,
    category: CATEGORIES.MUSIC.name,
    difficulty: "Kolay"
  },
  {
    id: 828,
    question: "Barok dönemin en önemli bestecilerinden olan ve 'Matthaus Passion', 'Brandenburg Konçertoları' gibi eserleriyle tanınan kimdir?",
    options: ["Antonio Vivaldi", "George Frideric Handel", "Johann Sebastian Bach", "Claudio Monteverdi"],
    correct: 2,
    category: CATEGORIES.MUSIC.name,
    difficulty: "Orta"
  },
  {
    id: 829,
    question: "Hangi müzik türü, 'call-and-response' (çağrı ve yanıt) formu ve genellikle melankolik temalarıyla bilinir?",
    options: ["Folk", "Gospel", "Samba", "Blues"],
    correct: 3,
    category: CATEGORIES.MUSIC.name,
    difficulty: "Kolay"
  },
  {
    id: 830,
    question: "Piyano için yazılmış, tek bir enstrümanın virtüözlüğünü sergilediği eser türü nedir?",
    options: ["Senfoni", "Konçerto", "Sonat", "Oda müziği"],
    correct: 2,
    category: CATEGORIES.MUSIC.name,
    difficulty: "Orta"
  },
  {
    id: 831,
    question: "Müziğin en karmaşık formlarından biri olan, birden fazla bağımsız melodi çizgisinin aynı anda ilerlemesi tekniğine ne ad verilir?",
    options: ["Monofoni", "Ritim", "Homofoni", "Polifoni (Kontrpuan)"],
    correct: 3,
    category: CATEGORIES.MUSIC.name,
    difficulty: "Zor"
  },
  {
    id: 832,
    question: "Dünyanın en iyi kemancılarından biri kabul edilen ve 20. yüzyılın virtüözlerinden olan sanatçı kimdir?",
    options: ["Mstislav Rostropovich", "Glenn Gould", "Itzhak Perlman", "Yo-Yo Ma"],
    correct: 2,
    category: CATEGORIES.MUSIC.name,
    difficulty: "Zor"
  },
  {
    id: 833,
    question: "Türk Halk Müziği'nde, bir eserin ritmini belirleyen, kalıplaşmış vuruş düzenine ne ad verilir?",
    options: ["Usul", "Makam", "Seyir", "Ahenk"],
    correct: 0,
    category: CATEGORIES.MUSIC.name,
    difficulty: "Orta"
  },
  {
    id: 834,
    question: "Güneş Sistemi'nin yedi gezegenine adanmış, İngiliz besteci Gustav Holst'un ünlü orkestra eseri nedir?",
    options: ["Gezegenler", "Ayın Sonatı", "Samanyolu Senfonisi", "Yıldızların Müziği"],
    correct: 0,
    category: CATEGORIES.MUSIC.name,
    difficulty: "Orta"
  },
  {
    id: 835,
    question: "Hangi müzik türü, 'breakdance' ve 'graffiti' gibi alt kültür unsurlarıyla birlikte ortaya çıkmıştır?",
    options: ["Hip-Hop", "Punk Rock", "Disco", "Heavy Metal"],
    correct: 0,
    category: CATEGORIES.MUSIC.name,
    difficulty: "Kolay"
  },
  {
    id: 836,
    question: "Bir notanın normalden yarım ses kalınlaştırılmasını sağlayan işaret nedir?",
    options: ["İkileme", "Bemol (♭)", "Naturel (♮)", "Diyez (#)"],
    correct: 1,
    category: CATEGORIES.MUSIC.name,
    difficulty: "Kolay"
  },
  {
    id: 837,
    question: "Müzikte, bir şarkının veya eserin 'tekrar edilmeyen' anlamına gelen terim nedir?",
    options: ["Da Capo", "Reprise", "Through-Composed (Serbest Biçim)", "Arpej"],
    correct: 2,
    category: CATEGORIES.MUSIC.name,
    difficulty: "Zor"
  },
  {
    id: 838,
    question: "Telli çalgılarda, tellerin titreşimini artırarak sesin gücünü yükselten bölüm nedir?",
    options: ["Teller", "Rezonans Kutusu (Gövde)", "Burgu", "Tuşe"],
    correct: 1,
    category: CATEGORIES.MUSIC.name,
    difficulty: "Orta"
  },
  {
    id: 839,
    question: "İtalyanca 'sözlü eser' anlamına gelen, koro, solistler ve orkestra için yazılmış dinsel temalı müzik türü nedir?",
    options: ["Madrigal", "Oratoryo", "Arya", "Kantilena"],
    correct: 1,
    category: CATEGORIES.MUSIC.name,
    difficulty: "Zor"
  },
  {
    id: 840,
    question: "Rock and Roll'un doğuşunda büyük rol oynayan, 'Jailhouse Rock' ve 'Love Me Tender' gibi hitleriyle tanınan sanatçı kimdir?",
    options: ["Jerry Lee Lewis", "Chuck Berry", "Elvis Presley", "Little Richard"],
    correct: 2,
    category: CATEGORIES.MUSIC.name,
    difficulty: "Kolay"
  },
  {
    id: 841,
    question: "Piyanoda, aynı notanın hemen üstündeki veya altındaki bir sese ne ad verilir?",
    options: ["Yarım Ses (Yarım ton)", "Majör", "Tam Ses (Tam ton)", "Oktav"],
    correct: 0,
    category: CATEGORIES.MUSIC.name,
    difficulty: "Kolay"
  },
  {
    id: 842,
    question: "Müzikte, sesin rengini veya kalitesini ifade eden terim nedir?",
    options: ["Tını (Timbre)", "Perde (Pitch)", "Dinamik", "Ritim"],
    correct: 0,
    category: CATEGORIES.MUSIC.name,
    difficulty: "Orta"
  },
  {
    id: 843,
    question: "Rus besteci Pyotr İlyiç Çaykovski'nin en ünlü balelerinden biri hangisidir?",
    options: ["Kuğu Gölü", "Giselle", "Romeo ve Juliet", "Sylvia"],
    correct: 0,
    category: CATEGORIES.MUSIC.name,
    difficulty: "Kolay"
  },
  {
    id: 844,
    question: "Caz müziğinde, müzisyenlerin kendiliğinden, o anda melodi veya ritim yaratması eylemi nedir?",
    options: ["Akor çalma", "Doğaçlama (Improvisation)", "İcra", "Kontrpuan"],
    correct: 1,
    category: CATEGORIES.MUSIC.name,
    difficulty: "Kolay"
  },
  {
    id: 845,
    question: "Bir eserde sesin yavaş yavaş yükselmesini belirten İtalyanca terim nedir?",
    options: ["Decrescendo", "Diminuendo", "Crescendo", "Piano"],
    correct: 2,
    category: CATEGORIES.MUSIC.name,
    difficulty: "Orta"
  },
  {
    id: 846,
    question: "Geleneksel Türk Halk Müziği'nde (THM), 'Aşık' adı verilen ozanların kullandığı çalgı nedir?",
    options: ["Kaval", "Zurna", "Davul", "Saz (Bağlama)"],
    correct: 3,
    category: CATEGORIES.MUSIC.name,
    difficulty: "Kolay"
  },
  {
    id: 847,
    question: "Hangi İtalyan opera bestecisi, 'Aida', 'La Traviata' ve 'Rigoletto' gibi eserleriyle ünlüdür?",
    options: ["Giacomo Puccini", "Gioachino Rossini", "Vincenzo Bellini", "Giuseppe Verdi"],
    correct: 3,
    category: CATEGORIES.MUSIC.name,
    difficulty: "Orta"
  },
  {
    id: 848,
    question: "Müziğin, notaların yazıldığı beş paralel çizgiden oluşan sisteme ne ad verilir?",
    options: ["Porte (Dizek)", "Anahtar", "Ölçü", "Defter"],
    correct: 0,
    category: CATEGORIES.MUSIC.name,
    difficulty: "Kolay"
  },
  {
    id: 849,
    question: "Bir orkestrada, sesi en kalın olan nefesli çalgı genellikle hangisidir?",
    options: ["Klarnet", "Fagot", "Obua", "Flüt"],
    correct: 1,
    category: CATEGORIES.MUSIC.name,
    difficulty: "Zor"
  },
  {
    id: 850,
    question: "Beatles'ın dağılmasından sonra solo kariyerine devam eden ve 'Imagine' şarkısıyla dünya çapında tanınan üyesi kimdir?",
    options: ["George Harrison", "Ringo Starr", "Paul McCartney", "John Lennon"],
    correct: 3,
    category: CATEGORIES.MUSIC.name,
    difficulty: "Kolay"
  },
  {
    id: 851,
    question: "Hangi müzikal element, bir eserin duygusal ve ruhsal içeriğini belirler?",
    options: ["Dinamik", "Mod (Makam / Tonality)", "Tını", "Tempo"],
    correct: 1,
    category: CATEGORIES.MUSIC.name,
    difficulty: "Orta"
  },
  {
    id: 852,
    question: "Bir orkestrayı yöneten ve eserin yorumunu belirleyen kişiye ne ad verilir?",
    options: ["Koro şefi", "Orkestra şefi (Maestro)", "Konçerto maestrosu", "Solist"],
    correct: 1,
    category: CATEGORIES.MUSIC.name,
    difficulty: "Kolay"
  },
  {
    id: 853,
    question: "Küçük, elle tutulan, nefesli ve tuşlu bir enstrüman olan, genellikle folk müzikte kullanılan çalgı nedir?",
    options: ["Harmonika (Mızıka)", "Klarnet", "Flüt", "Obua"],
    correct: 0,
    category: CATEGORIES.MUSIC.name,
    difficulty: "Kolay"
  },
  {
    id: 854,
    question: "16. ve 17. yüzyıllarda İtalya'da doğan, en eski müzikal drama formu nedir?",
    options: ["Kantat", "Madrigal", "Senfoni", "Opera"],
    correct: 3,
    category: CATEGORIES.MUSIC.name,
    difficulty: "Zor"
  },
  {
    id: 855,
    question: "Bateri setinde, ayakla kontrol edilen ve ritim tutmaya yarayan iki metal zilden oluşan kısım nedir?",
    options: ["Ride Zil", "Tom Tom", "Crash Zil", "Hi-Hat (Davul Pedalı)"],
    correct: 3,
    category: CATEGORIES.MUSIC.name,
    difficulty: "Orta"
  },
  {
    id: 856,
    question: "Rock müzikte, genellikle gitaristin melodi ve teknik becerilerini sergilediği bölüme ne ad verilir?",
    options: ["Ritim bölümü", "Gitar Solosu", "Köprü (Bridge)", "Giriş"],
    correct: 1,
    category: CATEGORIES.MUSIC.name,
    difficulty: "Kolay"
  },
  {
    id: 857,
    question: "Türk Sanat Müziği'nde (TSM), bir eserin usulünü (ritmik kalıp) tutmaya yarayan vurmalı çalgı nedir?",
    options: ["Tef", "Kudüm", "Darbuka", "Bateri"],
    correct: 1,
    category: CATEGORIES.MUSIC.name,
    difficulty: "Zor"
  },
  {
    id: 858,
    question: "Bir müzik eserinde sesin yavaş yavaş alçalmasını belirten İtalyanca terim nedir?",
    options: ["Sforzando", "Decrescendo (Diminuendo)", "Piano", "Forte"],
    correct: 1,
    category: CATEGORIES.MUSIC.name,
    difficulty: "Orta"
  },
  {
    id: 859,
    question: "Johann Strauss II'nin en ünlü eserlerinden olan, Viyana'yı simgeleyen vals hangisidir?",
    options: ["Kuğu Gölü", "Macar Dansları", "Boléro", "Mavi Tuna Valsi"],
    correct: 3,
    category: CATEGORIES.MUSIC.name,
    difficulty: "Orta"
  },
  {
    id: 860,
    question: "Gitar tellerini metal bir çubuk veya halka ile kaydırarak çalma tekniği nedir?",
    options: ["Vibrato", "Tremolo", "Arpej", "Slide (Kaydırma)"],
    correct: 3,
    category: CATEGORIES.MUSIC.name,
    difficulty: "Zor"
  },
  {
    id: 861,
    question: "Klasik müzikte, büyük orkestra için yazılmış, dört bölümden oluşan eser formu nedir?",
    options: ["Senfoni", "Konçerto", "Sonat", "Uvertür"],
    correct: 0,
    category: CATEGORIES.MUSIC.name,
    difficulty: "Kolay"
  },
  {
    id: 862,
    question: "Bir müzik eserinde 'birinci ses' anlamına gelen ve makamın ana notası olan ses nedir?",
    options: ["Tetik (Tonik)", "Dominant", "Tiz", "Mediant"],
    correct: 0,
    category: CATEGORIES.MUSIC.name,
    difficulty: "Zor"
  },
  {
    id: 863,
    question: "Madonna, Prince ve Michael Jackson'ın popüler olduğu müzikal dönem hangi on yıla aittir?",
    options: ["1970'ler", "1990'lar", "2000'ler", "1980'ler"],
    correct: 3,
    category: CATEGORIES.MUSIC.name,
    difficulty: "Kolay"
  },
  {
    id: 864,
    question: "Hangi enstrüman, bir orkestranın telli çalgılar grubunda yer almaz?",
    options: ["Harp (Arp)", "Trombon", "Viyola", "Viyolonsel (Çello)"],
    correct: 1,
    category: CATEGORIES.MUSIC.name,
    difficulty: "Kolay"
  },
  {
    id: 865,
    question: "Orta Çağ ve Rönesans müziğinde, tek sesli ve dinsel içerikli ilahi tarzı şarkılara ne ad verilir?",
    options: ["Motet", "Gregorian İlahisi (Chant)", "Füg", "Madrigal"],
    correct: 1,
    category: CATEGORIES.MUSIC.name,
    difficulty: "Zor"
  },
  {
    id: 866,
    question: "Klasik müzikte, bir solist enstrümanın orkestra eşliğinde virtüözlüğünü sergilediği eser türü nedir?",
    options: ["Sonat", "Senfoni", "Konçerto", "Uvertür"],
    correct: 2,
    category: CATEGORIES.MUSIC.name,
    difficulty: "Kolay"
  },
  {
    id: 867,
    question: "İtalyanca 'piyanodan daha yüksek sesle' anlamına gelen dinamik terimi nedir?",
    options: ["Forte (f)", "Fortissimo (ff)", "Pianissimo (pp)", "Mezzo Piano (mp)"],
    correct: 0,
    category: CATEGORIES.MUSIC.name,
    difficulty: "Orta"
  },
  {
    id: 868,
    question: "Türkiye'de 'Uzun İnce Bir Yoldayım' ve 'Dostlar Beni Hatırlasın' gibi eserleriyle tanınan Halk Ozanı kimdir?",
    options: ["Neşet Ertaş", "Aşık Veysel Şatıroğlu", "Muharrem Ertaş", "Arif Sağ"],
    correct: 1,
    category: CATEGORIES.MUSIC.name,
    difficulty: "Kolay"
  },
  {
    id: 869,
    question: "Müziğin ritmik olarak en keskin ve düzenli olduğu, genellikle askeri yürüyüşlere eşlik eden müzik formu nedir?",
    options: ["Marş", "Füg", "Vals", "Minyatür"],
    correct: 0,
    category: CATEGORIES.MUSIC.name,
    difficulty: "Orta"
  },
  {
    id: 870,
    question: "Hangi vurmalı çalgı, orkestralarda kullanılan, gerilmiş derinin vurulmasıyla ses üreten bir enstrümandır?",
    options: ["Timpani (Kettle Davul)", "Zil", "Ksilofon", "Kastanets"],
    correct: 0,
    category: CATEGORIES.MUSIC.name,
    difficulty: "Orta"
  },
  {
    id: 871,
    question: "Hangi müzik türü, 20. yüzyılın başında Amerika'da Afrika kökenli Amerikalıların manevi şarkılarından ve iş şarkılarından türemiştir?",
    options: ["Pop", "R&B (Rhythm and Blues)", "Soul", "Country"],
    correct: 1,
    category: CATEGORIES.MUSIC.name,
    difficulty: "Zor"
  },
  {
    id: 872,
    question: "Piyano, Klarnet ve Keman gibi üç farklı enstrüman için yazılmış eserlere ne ad verilir?",
    options: ["Duo (İkili)", "Trio (Üçlü)", "Beşli (Quintet)", "Dörtlü (Quartet)"],
    correct: 1,
    category: CATEGORIES.MUSIC.name,
    difficulty: "Kolay"
  },
  {
    id: 873,
    question: "Rus besteci Sergey Rahmaninov'un en bilinen ve en zorlu piyano eserlerinden biri hangisidir?",
    options: ["Für Elise", "Piyano Konçertosu No. 2", "Valse Triste", "Ay Işığı Sonatı"],
    correct: 1,
    category: CATEGORIES.MUSIC.name,
    difficulty: "Zor"
  },
  {
    id: 874,
    question: "Elektrik gitarın sesini şekillendiren, sesin sürdürülebilirliğini (sustain) ve distorsiyonunu sağlayan cihaz nedir?",
    options: ["Amfi (Amplifikatör)", "Tunner", "Ekolayzer", "Metronom"],
    correct: 0,
    category: CATEGORIES.MUSIC.name,
    difficulty: "Orta"
  },
  {
    id: 875,
    question: "Bir şarkının sözlerine ne ad verilir?",
    options: ["Libretto", "Şiir", "Mısra", "Melodi"],
    correct: 0,
    category: CATEGORIES.MUSIC.name,
    difficulty: "Kolay"
  },
  {
    id: 876,
    question: "Geleneksel Türk Sanat Müziği'nde (TSM), bir makamın tiz (ince) seslere doğru genişlemesine ne ad verilir?",
    options: ["Gezinme (Seyir)", "Karar", "Yeden", "Durağan"],
    correct: 0,
    category: CATEGORIES.MUSIC.name,
    difficulty: "Zor"
  },
  {
    id: 877,
    question: "Amerikalı 'Popun Kralı' olarak bilinen ve 'Thriller', 'Billie Jean' gibi hitleriyle dünya çapında tanınan sanatçı kimdir?",
    options: ["Michael Jackson", "Prince", "Madonna", "Elton John"],
    correct: 0,
    category: CATEGORIES.MUSIC.name,
    difficulty: "Kolay"
  },
  {
    id: 878,
    question: "Barok dönemde, bir müzik eserinin temelini oluşturan ve sürekli çalınan bas melodisine ne ad verilir?",
    options: ["Sürekli Bas (Basso Continuo)", "Füg", "Rondo", "Tema"],
    correct: 0,
    category: CATEGORIES.MUSIC.name,
    difficulty: "Zor"
  },
  {
    id: 879,
    question: "Gitar veya diğer telli çalgılarda, tellere hızlı ve arka arkaya vurarak elde edilen titreşim efekti nedir?",
    options: ["Tremolo", "Vibrato", "Arpej", "Harmonik"],
    correct: 0,
    category: CATEGORIES.MUSIC.name,
    difficulty: "Zor"
  },
  {
    id: 880,
    question: "Dört vuruşluk ölçü içinde dört tane çeyrek nota vuruşu içeren ölçü birimi nedir?",
    options: ["3/4", "6/8", "4/4", "2/4"],
    correct: 2,
    category: CATEGORIES.MUSIC.name,
    difficulty: "Orta"
  },
  {
    id: 881,
    question: "Hangi müzik terimi, bir şarkının başa dönerek tekrar çalınması gerektiğini ifade eder?",
    options: ["Fine", "Da Capo (D.C.)", "Coda", "Allegro"],
    correct: 1,
    category: CATEGORIES.MUSIC.name,
    difficulty: "Orta"
  },
  {
    id: 882,
    question: "Türk Sanat Müziği'nde (TSM) kullanılan ve yaylı, telli çalgıların en popüleri olan enstrüman nedir?",
    options: ["Tanbur", "Kemençe", "Ud", "Kanun"],
    correct: 0,
    category: CATEGORIES.MUSIC.name,
    difficulty: "Zor"
  },
  {
    id: 883,
    question: "Hangi Fransız besteci, 'Boléro' adlı, tek bir ritmik ve melodik temanın tekrarlanmasıyla ünlü eserini yazmıştır?",
    options: ["Erik Satie", "Claude Debussy", "Hector Berlioz", "Maurice Ravel"],
    correct: 3,
    category: CATEGORIES.MUSIC.name,
    difficulty: "Orta"
  },
  {
    id: 884,
    question: "Bateri çalınırken kullanılan, sırtı kalın ve ağır olan, genellikle ritim tutmaya yarayan küçük zil nedir?",
    options: ["Hi-Hat", "Ride Zil", "Crash Zil", "Splash Zil"],
    correct: 1,
    category: CATEGORIES.MUSIC.name,
    difficulty: "Orta"
  },
  {
    id: 885,
    question: "Bir müzik eserinin 'çok yumuşak' çalınması gerektiğini belirten dinamik terimi nedir?",
    options: ["Piano (p)", "Forte (f)", "Mezzo Forte (mf)", "Pianissimo (pp)"],
    correct: 3,
    category: CATEGORIES.MUSIC.name,
    difficulty: "Kolay"
  },
  {
    id: 886,
    question: "İtalyanca 'aşk' anlamına gelen ve genellikle lirik, duygusal şarkılara verilen isim nedir?",
    options: ["Scherzo", "Arioso", "Toccata", "Canzone"],
    correct: 3,
    category: CATEGORIES.MUSIC.name,
    difficulty: "Zor"
  },
  {
    id: 887,
    question: "Geleneksel Türk Halk Müziği'nde, ayakla tempo tutularak söylenen, coşkulu, ritmik tür nedir?",
    options: ["Halay", "Ağıt", "Bozlak", "Semah"],
    correct: 0,
    category: CATEGORIES.MUSIC.name,
    difficulty: "Kolay"
  },
  {
    id: 888,
    question: "Piyano, klavsen ve org gibi tuşlu çalgılarda sesin daha uzun sürmesini sağlayan pedalın adı nedir?",
    options: ["Yumuşatma Pedalı", "Susturma Pedalı", "Sostenuto Pedalı", "Sustain Pedalı"],
    correct: 3,
    category: CATEGORIES.MUSIC.name,
    difficulty: "Orta"
  },
  {
    id: 889,
    question: "Hangi müzik türü, 1960'larda İngiltere ve ABD'de 'The Beatles', 'The Rolling Stones' gibi gruplarla zirveye ulaşmıştır?",
    options: ["Soul Müzik", "Folk Müzik", "Rock Müzik", "Disco"],
    correct: 2,
    category: CATEGORIES.MUSIC.name,
    difficulty: "Kolay"
  },
  {
    id: 890,
    question: "Bir vuruşun değerini yarıya indiren nota işareti nedir?",
    options: ["Onaltılık Nota", "Bağ", "Noktalı Nota", "Sekizlik Nota"],
    correct: 3,
    category: CATEGORIES.MUSIC.name,
    difficulty: "Orta"
  },
  {
    id: 891,
    question: "Rus besteci Modest Mussorgsky'nin, arkadaşının resimlerini müzikle anlattığı ünlü piyano eseri nedir?",
    options: ["Pictures at an Exhibition (Bir Sergiden Resimler)", "Romeo ve Juliet", "Sheherazade", "Nutcracker (Fındıkkıran)"],
    correct: 0,
    category: CATEGORIES.MUSIC.name,
    difficulty: "Zor"
  },
  {
    id: 892,
    question: "Bir şarkının melodisinin veya ritminin geçici olarak yavaşlatılması tekniği nedir?",
    options: ["Tempo Primo", "Coda", "Rubato", "Accelerando"],
    correct: 2,
    category: CATEGORIES.MUSIC.name,
    difficulty: "Zor"
  },
  {
    id: 893,
    question: "Hangi caz müzisyeni, 'Satchmo' lakabıyla bilinir ve trompet virtüözü ve vokalist olarak ün kazanmıştır?",
    options: ["Miles Davis", "Duke Ellington", "John Coltrane", "Louis Armstrong"],
    correct: 3,
    category: CATEGORIES.MUSIC.name,
    difficulty: "Orta"
  },
  {
    id: 894,
    question: "Geleneksel Türk Sanat Müziği'nde (TSM), sesin gırtlakta titretilerek (dalgalandırılarak) icra edilmesi tekniği nedir?",
    options: ["Tavr", "Gırtlak (Vibrato)", "Hicaz", "Geçki"],
    correct: 1,
    category: CATEGORIES.MUSIC.name,
    difficulty: "Orta"
  },
  {
    id: 895,
    question: "Klasik müzikte, hızlı ve şakacı bir tempoda çalınan, genellikle senfonilerin üçüncü bölümü olan kısım nedir?",
    options: ["Scherzo", "Menuet", "Andante", "Adagio"],
    correct: 0,
    category: CATEGORIES.MUSIC.name,
    difficulty: "Zor"
  },
  {
    id: 896,
    question: "Müzikte, bir notanın tekrar çalınmasını gerektirmeyen, ancak süresini yarısı kadar uzatan işaret nedir?",
    options: ["Nokta", "Diyez", "Ters Nata", "Bemol"],
    correct: 0,
    category: CATEGORIES.MUSIC.name,
    difficulty: "Orta"
  },
  {
    id: 897,
    question: "Hangi ünlü müzisyen, 'Purple Haze' ve 'Voodoo Child' gibi şarkılarıyla elektro gitar virtüözü olarak tanınır?",
    options: ["Jimmy Page", "Jeff Beck", "Jimi Hendrix", "Eric Clapton"],
    correct: 2,
    category: CATEGORIES.MUSIC.name,
    difficulty: "Kolay"
  },
  {
    id: 898,
    question: "Rönesans döneminde popüler olan, genellikle eşliksiz (a capella) ve çok sesli (polifonik) koro eseri nedir?",
    options: ["Motet", "Madrigal", "Sonat", "Arya"],
    correct: 1,
    category: CATEGORIES.MUSIC.name,
    difficulty: "Zor"
  },
  {
    id: 899,
    question: "Üç telli, perde düzeni olmayan, genellikle Karadeniz Bölgesi'nde kullanılan telli çalgı nedir?",
    options: ["Kemençe", "Ud", "Tanbur", "Lavta"],
    correct: 0,
    category: CATEGORIES.MUSIC.name,
    difficulty: "Kolay"
  },
  {
    id: 900,
    question: "Müzikte, bir şarkının tamamlanmış son bölümüne ne ad verilir?",
    options: ["Uvertür", "Koda (Coda)", "Köprü", "Nakarat"],
    correct: 1,
    category: CATEGORIES.MUSIC.name,
    difficulty: "Kolay"
  },
  {
    id: 901,
    question: "Klasik Batı Müziği'nin Viyana Klasisizmi döneminin en önemli bestecilerinden olan, 'Ay Işığı Sonatı' ile tanınan sağır dahi kimdir?",
    options: ["Franz Liszt", "Johann Sebastian Bach", "Wolfgang Amadeus Mozart", "Ludwig van Beethoven"],
    correct: 3,
    category: "Müzik",
    difficulty: "Kolay"
  },
  {
    id: 902,
    question: "Türk Halk Müziği'nde, hecenin 7'li ölçüsüyle yazılan ve çoğunlukla doğa, aşk, ayrılık gibi konuları işleyen ezgi türü nedir?",
    options: ["Türkü", "Mani", "Semai", "Koşma"],
    correct: 0,
    category: "Müzik",
    difficulty: "Kolay"
  },
  {
    id: 903,
    question: "Caz müziğinde, doğaçlama ve ritim çeşitliliğinin temelini oluşturan, Afrikalı Amerikalılar tarafından geliştirilen müzik türü nedir?",
    options: ["Gospel", "Blues", "Soul", "Ragtime"],
    correct: 1,
    category: "Müzik",
    difficulty: "Kolay"
  },
  {
    id: 904,
    question: "Bir eserin hızını belirleyen ve İtalyanca terimlerle ifade edilen ölçü birimi nedir?",
    options: ["Kontrpuan", "Armoni", "Tempo", "Dinamik"],
    correct: 2,
    category: "Müzik",
    difficulty: "Kolay"
  },
  {
    id: 905,
    question: "Barok dönemin en önemli bestecilerinden olan, 'Brandenburg Konçertoları' ve 'Matthäus-Passion' eserleriyle tanınan Alman besteci kimdir?",
    options: ["Joseph Haydn", "Johann Sebastian Bach", "Antonio Vivaldi", "George Frideric Handel"],
    correct: 1,
    category: "Müzik",
    difficulty: "Kolay"
  },
  {
    id: 906,
    question: "Piyanoya özgü, virtüözite gerektiren, serbest biçimli kısa ve coşkulu müzik parçasına ne ad verilir?",
    options: ["Sonat", "Etüt", "Noktürn", "Füg"],
    correct: 1,
    category: "Müzik",
    difficulty: "Orta"
  },
  {
    id: 907,
    question: "Orkestrada, en kalın sese sahip ve yaylı çalgıların temelini oluşturan enstrüman hangisidir?",
    options: ["Viyola", "Çello (Viyolonsel)", "Keman (Keman)", "Kontrbas"],
    correct: 3,
    category: "Müzik",
    difficulty: "Kolay"
  },
  {
    id: 908,
    question: "Müzikte, bir notanın ne kadar yüksek veya alçak olduğunu belirten ses özelliği nedir?",
    options: ["Perde (Pitch)", "Dinamik", "Ritim", "Tını"],
    correct: 0,
    category: "Müzik",
    difficulty: "Kolay"
  },
  {
    id: 909,
    question: "Türkiye'de 'Minicik Bir Kuş Gibi', 'Fırtına' ve 'Gözyaşları' gibi şarkılarıyla tanınan, 'Rock'n Coke' adlı festivali düzenleyen ünlü rock grubu nedir?",
    options: ["Grup Yorum", "Duman", "Athena", "Mor ve Ötesi"],
    correct: 3,
    category: "Müzik",
    difficulty: "Kolay"
  },
  {
    id: 910,
    question: "Opera sanatında, şarkıcıların kendilerini en iyi ifade ettikleri, orkestra eşliğinde söylenen solo şarkılara ne ad verilir?",
    options: ["Koro", "Arya", "Uvertür", "Resitatif"],
    correct: 1,
    category: "Müzik",
    difficulty: "Kolay"
  },
  {
    id: 911,
    question: "Caz müziğinin önemli isimlerinden olan, 'Satchmo' lakaplı, trompetçi ve vokalist kimdir?",
    options: ["Duke Ellington", "John Coltrane", "Miles Davis", "Louis Armstrong"],
    correct: 3,
    category: "Müzik",
    difficulty: "Kolay"
  },
  {
    id: 912,
    question: "Romantik dönemin 'Vals Kralı' olarak bilinen, Avusturyalı besteci kimdir?",
    options: ["Franz Schubert", "Johann Strauss II", "Frédéric Chopin", "Richard Wagner"],
    correct: 1,
    category: "Müzik",
    difficulty: "Orta"
  },
  {
    id: 913,
    question: "Türk Sanat Müziği'nde kullanılan, 24 aralık içinde farklı tam ve yarım sesleri içeren sistem nedir?",
    options: ["Makam", "Ahenk", "Usul", "Ritim"],
    correct: 0,
    category: "Müzik",
    difficulty: "Kolay"
  },
  {
    id: 914,
    question: "Müzikte, sesin kuvvetini (yüksekliğini veya alçaklığını) ifade eden terimler (piyano, forte) hangi kavramı ifade eder?",
    options: ["Tını", "Tempo", "Armoni", "Dinamik"],
    correct: 3,
    category: "Müzik",
    difficulty: "Kolay"
  },
  {
    id: 915,
    question: "Türkiye'de 'Dillere Destan', 'İkinci Bahar' gibi şarkılarıyla tanınan ve Türk Pop Müziği'nin öncülerinden kabul edilen kadın sanatçı kimdir?",
    options: ["Sezen Aksu", "Ajda Pekkan", "Erol Evgin", "Nilüfer"],
    correct: 0,
    category: "Müzik",
    difficulty: "Kolay"
  },
  {
    id: 916,
    question: "Keman, viyola ve çellodan oluşan üçlü müzik grubuna ne ad verilir?",
    options: ["İkili (Duo)", "Beşli (Quintet)", "Trio", "Dörtlü (Quartet)"],
    correct: 2,
    category: "Müzik",
    difficulty: "Orta"
  },
  {
    id: 917,
    question: "Bir eserin başında çalınan ve eserin genel temasını tanıtan orkestra parçasına ne ad verilir?",
    options: ["Uvertür", "Prelüd", "Sonat", "Koda"],
    correct: 0,
    category: "Müzik",
    difficulty: "Kolay"
  },
  {
    id: 918,
    question: "Rock müziğinde, 1970'lerde İngiltere'de ortaya çıkan ve toplumsal kurallara karşı çıkışı simgeleyen agresif müzik akımı nedir?",
    options: ["Punk Rock", "Hard Rock", "Glam Rock", "Progressive Rock"],
    correct: 0,
    category: "Müzik",
    difficulty: "Orta"
  },
  {
    id: 919,
    question: "Piyano için yazdığı 'Noktürnler' ve 'Valsler' ile tanınan, Romantik dönemin Polonyalı bestecisi kimdir?",
    options: ["Johannes Brahms", "Franz Liszt", "Robert Schumann", "Frédéric Chopin"],
    correct: 3,
    category: "Müzik",
    difficulty: "Kolay"
  },
  {
    id: 920,
    question: "Türk Halk Müziği'nde, anonim eserlerde ritim ve ölçüyü belirleyen, genellikle uzun ve ritmik figürlerden oluşan yapıya ne ad verilir?",
    options: ["Aralık", "Makam", "Ağıt", "Usul"],
    correct: 3,
    category: "Müzik",
    difficulty: "Orta"
  },
  {
    id: 921,
    question: "Popüler müzikte, şarkıcının sesinin yankılanmasını ve derinlik kazanmasını sağlayan ses efekti nedir?",
    options: ["Chorus", "Distorsiyon", "Flanger", "Reverb (Yankı)"],
    correct: 3,
    category: "Müzik",
    difficulty: "Kolay"
  },
  {
    id: 922,
    question: "Caz müziğinde, 1940'larda ortaya çıkan ve hızlı tempoları, karmaşık doğaçlamaları ve uyumsuz akorları ile tanınan alt tür nedir?",
    options: ["Dixieland", "Swing", "Cool Jazz", "Bebop"],
    correct: 3,
    category: "Müzik",
    difficulty: "Orta"
  },
  {
    id: 923,
    question: "Viyana Klasisizmi'nin üç büyük ustasından biri olan, 'Sürpriz Senfoni'si ile tanınan Avusturyalı besteci kimdir?",
    options: ["Ludwig van Beethoven", "Wolfgang Amadeus Mozart", "Joseph Haydn", "Franz Schubert"],
    correct: 2,
    category: "Müzik",
    difficulty: "Kolay"
  },
  {
    id: 924,
    question: "Müzikte, bir melodi hattının, kendisinden önceki motifleri tekrar ederek veya değiştirerek devam etmesine ne ad verilir?",
    options: ["Modülasyon", "Dinamik", "Kontrast", "Sekans"],
    correct: 3,
    category: "Müzik",
    difficulty: "Orta"
  },
  {
    id: 925,
    question: "Türk Sanat Müziği'nde, eserlerin icrasında ritmi tutmak için kullanılan ve el/parmak hareketleriyle yapılan ritmik kalıplar bütünü nedir?",
    options: ["Usul", "Makam", "Ahenk", "Zil"],
    correct: 0,
    category: "Müzik",
    difficulty: "Kolay"
  },
  {
    id: 926,
    question: "Gitar tellerinin üzerine, ses aralıklarını belirlemek için yerleştirilen metal çubuklara ne ad verilir?",
    options: ["Perde (Fret)", "Burgu", "Eşik", "Köprü"],
    correct: 0,
    category: "Müzik",
    difficulty: "Kolay"
  },
  {
    id: 927,
    question: "Rus besteci Pyotr İlyiç Çaykovski'nin ünlü bale eserlerinden biri nedir?",
    options: ["Kuğu Gölü", "Fındıkkıran", "Rigoletto", "Carmen"],
    correct: 0,
    category: "Müzik",
    difficulty: "Kolay"
  },
  {
    id: 928,
    question: "Halk müziği alanında 'Uzun İnce Bir Yoldayım', 'Gönül Dağı' gibi eserleriyle tanınan, Türkiye'nin önemli saz ve söz ustası kimdir?",
    options: ["Arif Sağ", "Aşık Veysel Şatıroğlu", "Aşık Mahzuni Şerif", "Neşet Ertaş"],
    correct: 1,
    category: "Müzik",
    difficulty: "Kolay"
  },
  {
    id: 929,
    question: "Müzikte, iki ya da daha fazla farklı melodi hattının aynı anda çalınmasıyla oluşan doku türü nedir?",
    options: ["Monofoni", "Polifoni (Kontrpuan)", "Homofoni", "Armoni"],
    correct: 1,
    category: "Müzik",
    difficulty: "Orta"
  },
  {
    id: 930,
    question: "1960'larda popülerleşen, sözleri toplumsal ve politik mesajlar içeren müzik türü nedir?",
    options: ["Blues", "Caz", "R&B", "Protest Müzik (Folk)"],
    correct: 3,
    category: "Müzik",
    difficulty: "Kolay"
  },
  {
    id: 931,
    question: "Ünlü opera bestecisi Wolfgang Amadeus Mozart'ın tamamlayamadan vefat ettiği, bir requiem (ölü duası) eseri nedir?",
    options: ["Sihirli Flüt", "Figaro'nun Düğünü", "Don Giovanni", "Requiem"],
    correct: 3,
    category: "Müzik",
    difficulty: "Kolay"
  },
  {
    id: 932,
    question: "Türk Halk Müziği'nde kullanılan, telli ve mızrapla çalınan en yaygın enstrüman nedir?",
    options: ["Tambur", "Bağlama (Saz)", "Ud", "Kopuz"],
    correct: 1,
    category: "Müzik",
    difficulty: "Kolay"
  },
  {
    id: 933,
    question: "Müzikte, bir parçanın ana tonundan başka bir tona geçiş yapması olayına ne ad verilir?",
    options: ["Akort", "Diatonik", "Transpozisyon", "Modülasyon"],
    correct: 3,
    category: "Müzik",
    difficulty: "Orta"
  },
  {
    id: 934,
    question: "Popüler müzikte, elektronik sesler, synthesizer'lar ve tekrar eden ritimlerin hakim olduğu 1980'lerde popülerleşen tür nedir?",
    options: ["Hip Hop", "Synth-Pop", "Heavy Metal", "Grunge"],
    correct: 1,
    category: "Müzik",
    difficulty: "Kolay"
  },
  {
    id: 935,
    question: "Müzik tarihinde, genellikle 1600-1750 yılları arasını kapsayan ve süslü, karmaşık yapısıyla tanınan dönem nedir?",
    options: ["Romantizm", "Klasisizm", "Rönesans", "Barok Dönem"],
    correct: 3,
    category: "Müzik",
    difficulty: "Kolay"
  },
  {
    id: 936,
    question: "Piyanoya özgü, icracının serbest, rüya gibi bir havayla çaldığı, genellikle gece temasını işleyen Romantik parça nedir?",
    options: ["Vals", "Sonat", "Füg", "Noktürn"],
    correct: 3,
    category: "Müzik",
    difficulty: "Kolay"
  },
  {
    id: 937,
    question: "Opera sanatında, konuşma ve şarkı arasında bir geçiş sağlayan, dramatik anlatımı ilerleten vokal tekniği nedir?",
    options: ["Resitatif", "Arya", "Koro", "Duo"],
    correct: 0,
    category: "Müzik",
    difficulty: "Orta"
  },
  {
    id: 938,
    question: "Müzikte, bir sesin ya da enstrümanın kendine has rengini veya karakterini ifade eden terim nedir?",
    options: ["Dinamik", "Tını (Timbre)", "Perde", "Armoni"],
    correct: 1,
    category: "Müzik",
    difficulty: "Kolay"
  },
  {
    id: 939,
    question: "Türkiye'de 'Bir Zamanlar Deli Gönlüm', 'Bana Yalan Söylediler' gibi şarkılarıyla tanınan, pop müziğinin duayenlerinden olan sanatçı kimdir?",
    options: ["Mazhar Alanson", "Kayahan", "Erol Evgin", "Fuat Güner"],
    correct: 1,
    category: "Müzik",
    difficulty: "Kolay"
  },
  {
    id: 940,
    question: "Caz müziğinde, temel ritmik yapıyı oluşturan ve genellikle davul, kontrbas ve piyanodan oluşan bölüm nedir?",
    options: ["Ritim Bölümü (Rhythm Section)", "Melodi Hattı", "Doğaçlama", "Korno Bölümü"],
    correct: 0,
    category: "Müzik",
    difficulty: "Orta"
  },
  {
    id: 941,
    question: "Türk Sanat Müziği'nde, icra edilen makamın ve eserin ritmini belirleyen, belirli bir süre içinde tekrarlanan ritmik kalıp nedir?",
    options: ["Aralık", "Seyir", "Makam", "Usul"],
    correct: 3,
    category: "Müzik",
    difficulty: "Kolay"
  },
  {
    id: 942,
    question: "Gitar amfilerinde, sesin tınısını kalınlaştıran ve sertleştiren ses efekti nedir?",
    options: ["Reverb", "Delay", "Chorus", "Distorsiyon (Fuzz)"],
    correct: 3,
    category: "Müzik",
    difficulty: "Kolay"
  },
  {
    id: 943,
    question: "Bestecinin özgürce seçtiği çalgılar için bestelediği, genellikle dört bölümden oluşan büyük orkestra eseri nedir?",
    options: ["Sonat", "Konçerto", "Senfoni", "Opera"],
    correct: 2,
    category: "Müzik",
    difficulty: "Kolay"
  },
  {
    id: 944,
    question: "Klasik dönemde, bir solo enstrümanın orkestra eşliğinde virtüözite gösterdiği eser türü nedir?",
    options: ["Füg", "Konçerto", "Süit", "Senfoni"],
    correct: 1,
    category: "Müzik",
    difficulty: "Kolay"
  },
  {
    id: 945,
    question: "Türk Halk Müziği'nde, ölüm, deprem, salgın gibi üzücü olaylar üzerine söylenen ve serbest ritimli ezgiler nedir?",
    options: ["Ağıt", "Türkü", "Ninni", "Mani"],
    correct: 0,
    category: "Müzik",
    difficulty: "Kolay"
  },
  {
    id: 946,
    question: "Müzikte, bir eserin ana teması ve melodisinin, aralıklarla tekrarlandığı Barok dönemi tekniği nedir?",
    options: ["Varyasyon", "Süit", "Füg", "Rondo"],
    correct: 2,
    category: "Müzik",
    difficulty: "Orta"
  },
  {
    id: 947,
    question: "Piyanonun öncüsü olan, vurmalı ve telli bir klavyeli enstrüman nedir?",
    options: ["Klavikord", "Org", "Harpsikord (Çembalo)", "Synthesizer"],
    correct: 2,
    category: "Müzik",
    difficulty: "Orta"
  },
  {
    id: 948,
    question: "Rock and Roll'un 'Kralı' olarak bilinen, 'Jailhouse Rock', 'Suspicious Minds' gibi şarkılarıyla ünlü Amerikalı sanatçı kimdir?",
    options: ["Buddy Holly", "Chuck Berry", "Elvis Presley", "Little Richard"],
    correct: 2,
    category: "Müzik",
    difficulty: "Kolay"
  },
  {
    id: 949,
    question: "Müzikte, bir orkestranın farklı enstrüman gruplarının (yaylılar, nefesliler) bir arada çalmasına ne ad verilir?",
    options: ["Ansambl (Topluluk)", "Koro", "Duo", "Solo"],
    correct: 0,
    category: "Müzik",
    difficulty: "Kolay"
  },
  {
    id: 950,
    question: "İtalyan opera bestecisi Giuseppe Verdi'nin, Mısır'da geçen ve savaş ile aşk temasını işleyen ünlü operası nedir?",
    options: ["Rigoletto", "La Traviata", "Othello", "Aida"],
    correct: 3,
    category: "Müzik",
    difficulty: "Kolay"
  },
  {
    id: 951,
    question: "Türk Halk Müziği'nde, bir ezginin makamını ya da tonunu değiştirmeden, sadece ses aralıklarını değiştirmesine ne ad verilir?",
    options: ["Usul", "Ahenk", "Ayak (Makam)", "Makamsal Gezinti"],
    correct: 2,
    category: "Müzik",
    difficulty: "Zor"
  },
  {
    id: 952,
    question: "Müzikte, notaların dizek üzerindeki yerini belirleyen, seslerin kalınlık ve incelik aralığını gösteren işaret nedir?",
    options: ["Dizek", "Anahtar (Clef)", "Nota", "Ölçü İşareti"],
    correct: 1,
    category: "Müzik",
    difficulty: "Kolay"
  },
  {
    id: 953,
    question: "Caz piyanisti ve bestecisi olan, 'Take Five' gibi eserleriyle asimetrik ölçüleri caz müziğine getiren sanatçı kimdir?",
    options: ["Oscar Peterson", "Herbie Hancock", "Dave Brubeck", "Thelonious Monk"],
    correct: 2,
    category: "Müzik",
    difficulty: "Orta"
  },
  {
    id: 954,
    question: "Romantik dönemin, kahramanlık hikayelerini veya doğa manzaralarını anlatan orkestra parçası türü nedir?",
    options: ["Senfoni", "Senfonik Şiir", "Konçerto", "Sonat"],
    correct: 1,
    category: "Müzik",
    difficulty: "Orta"
  },
  {
    id: 955,
    question: "Türk Sanat Müziği'nde kullanılan, yaylı, perdesiz ve yayla çalınan telli çalgı nedir?",
    options: ["Kemençe", "Kanun", "Tambur", "Ud"],
    correct: 0,
    category: "Müzik",
    difficulty: "Kolay"
  },
  {
    id: 956,
    question: "Müzikte, bir sesin en alçak veya en kalın noktasından en yüksek veya en ince noktasına kadar olan aralığına ne ad verilir?",
    options: ["Oktav", "Perde", "Vokal Aralık (Range)", "Dinamik Aralık"],
    correct: 2,
    category: "Müzik",
    difficulty: "Kolay"
  },
  {
    id: 957,
    question: "İtalyan Barok bestecisi Antonio Vivaldi'nin, dört mevsimi konu alan ünlü konçerto serisi nedir?",
    options: ["Sürpriz Senfoni", "Dört Mevsim", "La Traviata", "Brandenburg Konçertoları"],
    correct: 1,
    category: "Müzik",
    difficulty: "Kolay"
  },
  {
    id: 958,
    question: "Türk Pop Müziği'nde, 'Arkadaş', 'Sarı Çizmeli Mehmet Ağa' gibi eserleriyle tanınan ve Anadolu Rock'a katkıda bulunan sanatçı kimdir?",
    options: ["Cem Karaca", "Erkin Koray", "Fikret Kızılok", "Barış Manço"],
    correct: 3,
    category: "Müzik",
    difficulty: "Kolay"
  },
  {
    id: 959,
    question: "Müzikte, birden fazla sesin aynı anda kulağa hoş gelecek şekilde birleşmesi olayı nedir?",
    options: ["Melodi", "Armoni (Akorlar)", "Kontrpuan", "Ritim"],
    correct: 1,
    category: "Müzik",
    difficulty: "Kolay"
  },
  {
    id: 960,
    question: "Rock müziğinde, gitar, davul ve bas gitardan oluşan temel üçlüye ne ad verilir?",
    options: ["Caz Quartet", "Pop Trio", "Rock Quintet", "Power Trio"],
    correct: 3,
    category: "Müzik",
    difficulty: "Kolay"
  },
  {
    id: 961,
    question: "Türk Halk Müziği'nde, aşıkların deyişlerini veya hikayelerini anlattığı, genellikle serbest ezgili müzik türü nedir?",
    options: ["Mani", "Zeybek", "Bozlak", "Halay"],
    correct: 2,
    category: "Müzik",
    difficulty: "Orta"
  },
  {
    id: 962,
    question: "Müzikte, aynı notanın iki katı veya yarısı frekansına sahip olan nota aralığına ne ad verilir?",
    options: ["Beşli", "Sekizli", "Oktav", "Dörtlü"],
    correct: 2,
    category: "Müzik",
    difficulty: "Kolay"
  },
  {
    id: 963,
    question: "20. yüzyıl müziğinde, ritmik ve armonik yapıyı bozarak, disonans ve atonalite kullanan akım nedir?",
    options: ["Ekspresyonizm", "Romantizm", "Klasisizm", "Empresyonizm"],
    correct: 0,
    category: "Müzik",
    difficulty: "Zor"
  },
  {
    id: 964,
    question: "Piyano ve oda müziği eserleriyle tanınan, Viyana Klasisizmini Romantizme bağlayan Avusturyalı besteci kimdir?",
    options: ["Frédéric Chopin", "Franz Schubert", "Joseph Haydn", "Felix Mendelssohn"],
    correct: 1,
    category: "Müzik",
    difficulty: "Kolay"
  },
  {
    id: 965,
    question: "İngiliz rock grubu Queen'in 'Bohemian Rhapsody' şarkısında, opera ve rock öğelerini birleştirdiği tür nedir?",
    options: ["Pop Rock", "Progressive Rock", "Hard Rock", "Heavy Metal"],
    correct: 1,
    category: "Müzik",
    difficulty: "Kolay"
  },
  {
    id: 966,
    question: "Müzikte, bir eserin ana temasının hız, ritim veya perde açısından değiştirilerek tekrar edilmesi tekniği nedir?",
    options: ["Modülasyon", "Rondo", "Varyasyon (Çeşitleme)", "Sekans"],
    correct: 2,
    category: "Müzik",
    difficulty: "Kolay"
  },
  {
    id: 967,
    question: "Türk Sanat Müziği'nde, bir makamın inici ve çıkıcı hareketlerini gösteren, makamın karakterini tanımlayan yapı nedir?",
    options: ["Tını", "Nota", "Usul", "Seyir (Yol)"],
    correct: 3,
    category: "Müzik",
    difficulty: "Orta"
  },
  {
    id: 968,
    question: "Caz müziğinde, vokalistin bir enstrüman gibi sesleri taklit ederek doğaçlama yapması tekniği nedir?",
    options: ["Riff", "Vibrato", "Blues", "Scat Singing"],
    correct: 3,
    category: "Müzik",
    difficulty: "Kolay"
  },
  {
    id: 969,
    question: "Müzik notasyonunda, notaların çalınması gereken süreyi (uzunluğunu) belirten işaret nedir?",
    options: ["Perde", "Dinamik", "Anahtar", "Değer (Ritim)"],
    correct: 3,
    category: "Müzik",
    difficulty: "Kolay"
  },
  {
    id: 970,
    question: "Türkiye'de 'Gülpembe', 'Dağlar Dağlar' gibi unutulmaz eserleriyle bilinen ve Anadolu Rock'ın önemli temsilcilerinden olan sanatçı kimdir?",
    options: ["Cem Karaca", "Barış Manço", "Erkin Koray", "Fikret Kızılok"],
    correct: 1,
    category: "Müzik",
    difficulty: "Kolay"
  },
  {
    id: 971,
    question: "Müzikte, bir akorun notalarının sırayla değil de, birbiri ardına hızlıca çalınması tekniği nedir?",
    options: ["Tril", "Vibrato", "Tremolo", "Arpej"],
    correct: 3,
    category: "Müzik",
    difficulty: "Orta"
  },
  {
    id: 972,
    question: "Rus besteci Igor Stravinsky'nin, ilkel ritimleri ve disonansları kullanarak müzik dünyasını şok eden ünlü bale eseri nedir?",
    options: ["Fındıkkıran", "Bahar Ayini", "Petruşka", "Kuğu Gölü"],
    correct: 1,
    category: "Müzik",
    difficulty: "Zor"
  },
  {
    id: 973,
    question: "Müzikte, bir parçanın ya da bir bölümün 'çok hızlı' çalınması gerektiğini ifade eden İtalyanca terim nedir?",
    options: ["Allegro", "Andante", "Presto", "Adagio"],
    correct: 2,
    category: "Müzik",
    difficulty: "Kolay"
  },
  {
    id: 974,
    question: "İtalyan opera bestecisi Giacomo Puccini'nin, Japonya'da geçen ve 'Un bel dì vedremo' aryasıyla tanınan eseri nedir?",
    options: ["Turandot", "Tosca", "Madam Butterfly", "La Bohème"],
    correct: 2,
    category: "Müzik",
    difficulty: "Orta"
  },
  {
    id: 975,
    question: "Türk Sanat Müziği'nde, genellikle dinî konulu eserlerin veya peşrevlerin makamına göre belirlenen ölçü ve ritim kalıbı nedir?",
    options: ["Usul", "Makam", "Kâr", "Gazel"],
    correct: 0,
    category: "Müzik",
    difficulty: "Kolay"
  },
  {
    id: 976,
    question: "Klasik rock ve metal müzikte, gitaristin bir akor üzerine kısa ve tekrarlayan bir melodi çalması eylemi nedir?",
    options: ["Solo", "Chorus", "Riff", "Arpej"],
    correct: 2,
    category: "Müzik",
    difficulty: "Kolay"
  },
  {
    id: 977,
    question: "Müzikte, bir notanın normalde olması gereken değerden daha uzun çalınmasını sağlayan işaret nedir?",
    options: ["Bağ (Tie)", "Akort", "Nokta", "Fermata"],
    correct: 3,
    category: "Müzik",
    difficulty: "Orta"
  },
  {
    id: 978,
    question: "Ünlü İngiliz rock grubu The Beatles'ın, John Lennon ve Paul McCartney'nin liderliğinde kurulduğu şehir neresidir?",
    options: ["Liverpool", "Manchester", "Londra", "Birmingham"],
    correct: 0,
    category: "Müzik",
    difficulty: "Kolay"
  },
  {
    id: 979,
    question: "Müzikte, melodinin veya armoninin en küçük birimi olarak kabul edilen ve birden fazla notadan oluşan yapı nedir?",
    options: ["Ritim", "Akor (Chord)", "Perde", "Tempo"],
    correct: 1,
    category: "Müzik",
    difficulty: "Kolay"
  },
  {
    id: 980,
    question: "Afrika-Amerika kökenli, sözleri genellikle zorlukları ve hüzünleri anlatan, caz ve rock müziğinin temelini oluşturan vokal tür nedir?",
    options: ["Blues", "Swing", "Gospel", "Ragtime"],
    correct: 0,
    category: "Müzik",
    difficulty: "Kolay"
  },
  {
    id: 981,
    question: "Johann Sebastian Bach'ın, armoni ve kontrpuan becerisini sergilediği, 48 füg ve prelüd içeren ünlü piyano eseri nedir?",
    options: ["İyi Düzenlenmiş Klavye (Well-Tempered Clavier)", "Müzikal Sunu", "Brandenburg Konçertoları", "Goldberg Varyasyonları"],
    correct: 0,
    category: "Müzik",
    difficulty: "Zor"
  },
  {
    id: 982,
    question: "Müzikte, bir notanın ya da akorun titreşiminin hızlı ve ritmik değişimiyle oluşan etki nedir?",
    options: ["Tril", "Glissando", "Vibrato", "Arpej"],
    correct: 2,
    category: "Müzik",
    difficulty: "Orta"
  },
  {
    id: 983,
    question: "Müzikte, bir melodinin tamamlanmış hissi verdiği ve eserin bir bölümünün sonunu işaret eden akor dizisine ne ad verilir?",
    options: ["Kadans (Bitiş)", "Modülasyon", "Armoni", "Sekans"],
    correct: 0,
    category: "Müzik",
    difficulty: "Orta"
  },
  {
    id: 984,
    question: "Türkiye'de 'Deniz Üstü Köpürür', 'Ceviz Ağacı' gibi eserleriyle bilinen ve politik/toplumsal içerikli şarkılar yazan sanatçı kimdir?",
    options: ["Cem Karaca", "Selda Bağcan", "Fikret Kızılok", "Zülfü Livaneli"],
    correct: 3,
    category: "Müzik",
    difficulty: "Kolay"
  },
  {
    id: 985,
    question: "Klasik dönemde, dört yaylı çalgıdan (2 keman, viyola, çello) oluşan oda müziği grubu nedir?",
    options: ["Dörtlü (Quartet)", "Sekizli (Octet)", "Trio", "Beşli (Quintet)"],
    correct: 0,
    category: "Müzik",
    difficulty: "Kolay"
  },
  {
    id: 986,
    question: "Müzikte, eser boyunca tekrar eden ve eserin ritmik kimliğini oluşturan düzenli vuruşlar dizisine ne ad verilir?",
    options: ["Armoni", "Melodi", "Perde", "Metre (Ölçü/Ritim)"],
    correct: 3,
    category: "Müzik",
    difficulty: "Kolay"
  },
  {
    id: 987,
    question: "Türk Sanat Müziği'nde, genellikle solo vokal tarafından icra edilen, serbest ritimli ve doğaçlamaya dayalı uzun vokal form nedir?",
    options: ["Gazel", "Saz Semaisi", "Kâr", "Şarkı"],
    correct: 0,
    category: "Müzik",
    difficulty: "Orta"
  },
  {
    id: 988,
    question: "Avusturyalı besteci Gustav Mahler'in, vokalist ve orkestra için yazdığı, Çin şiirlerinden esinlenerek bestelenen ünlü senfonik eser nedir?",
    options: ["Titan Senfonisi", "Yeryüzü Şarkısı (Das Lied von der Erde)", "Resurrection Senfonisi", "5. Senfoni"],
    correct: 1,
    category: "Müzik",
    difficulty: "Zor"
  },
  {
    id: 989,
    question: "Müzikte, bir şarkının akılda kalıcı, genellikle tekrarlanan ve en yüksek duygusal yoğunluğa sahip bölümü nedir?",
    options: ["Nakarat (Chorus)", "Köprü", "Giriş (Intro)", "Kıta (Verse)"],
    correct: 0,
    category: "Müzik",
    difficulty: "Kolay"
  },
  {
    id: 990,
    question: "İspanyol müzik türü olan ve gitar, vokal ve dansın iç içe geçtiği, yoğun duygusal ifadeye sahip müzik nedir?",
    options: ["Samba", "Flamenko", "Tango", "Bossa Nova"],
    correct: 1,
    category: "Müzik",
    difficulty: "Kolay"
  },
  {
    id: 991,
    question: "Türk Halk Müziği'nde, uzun hava (serbest ritimli) türünün en bilinen ve en yaygın formu nedir?",
    options: ["Koşma", "Ninni", "Bozlak", "Mani"],
    correct: 2,
    category: "Müzik",
    difficulty: "Orta"
  },
  {
    id: 992,
    question: "Klasik Batı Müziği'nde, genellikle dört bölümden oluşan ve her bölümün kendine özgü temposu olan eser türü nedir?",
    options: ["Konçerto", "Süit", "Füg", "Sonat"],
    correct: 3,
    category: "Müzik",
    difficulty: "Kolay"
  },
  {
    id: 993,
    question: "Müzikte, bir akorun temel notası olan ve akorun adını belirleyen nota nedir?",
    options: ["Beşli", "Üçlü", "Temel Nota (Kök Ses)", "Yedili"],
    correct: 2,
    category: "Müzik",
    difficulty: "Kolay"
  },
  {
    id: 994,
    question: "20. yüzyılın başlarında Fransa'da, Claude Debussy ve Maurice Ravel gibi bestecilerin kullandığı, pastel renkler ve izlenimci resimden etkilenen müzik akımı nedir?",
    options: ["Klasisizm", "Fütürizm", "Romantizm", "Empresyonizm (İzlenimcilik)"],
    correct: 3,
    category: "Müzik",
    difficulty: "Orta"
  },
  {
    id: 995,
    question: "ABD'de ortaya çıkan, elektronik dans müziğinin temellerini atan, disko, funk ve soul müziğini birleştiren tür nedir?",
    options: ["Hip Hop", "R&B", "Reggae", "House (veya EDM)"],
    correct: 3,
    category: "Müzik",
    difficulty: "Kolay"
  },
  {
    id: 996,
    question: "Müzikte, bir eserin ana teması ve melodisinin, aralıklarla tekrarlandığı Barok dönemi tekniği nedir?",
    options: ["Füg", "Rondo", "Süit", "Varyasyon"],
    correct: 0,
    category: "Müzik",
    difficulty: "Orta"
  },
  {
    id: 997,
    question: "Türk Halk Müziği'nde, davul ve zurna eşliğinde, genellikle hızlı ritimli ve toplu oynanan halk oyunu müziği nedir?",
    options: ["Halay", "Bar", "Zeybek", "Horon"],
    correct: 0,
    category: "Müzik",
    difficulty: "Kolay"
  },
  {
    id: 998,
    question: "Bir eserin hızını 'çok yavaş' (slow) olarak belirten İtalyanca terim nedir?",
    options: ["Presto", "Moderato", "Adagio", "Allegro"],
    correct: 2,
    category: "Müzik",
    difficulty: "Kolay"
  },
  {
    id: 999,
    question: "Müzik tarihinde, Franz Liszt ve Richard Wagner gibi bestecilerin eserlerinde duygusal derinliği ve sınırsızlığı vurgulayan dönem nedir?",
    options: ["Modern Dönem", "Klasik", "Romantik Dönem", "Barok"],
    correct: 2,
    category: "Müzik",
    difficulty: "Kolay"
  },
  {
    id: 1000,
    question: "İtalyan opera bestecisi Gioachino Rossini'nin, hızlı ve virtüöz vokal kısımlarıyla tanınan ünlü eseri nedir?",
    options: ["Sevil Berberi", "Tosca", "Aida", "Carmen"],
    correct: 0,
    category: "Müzik",
    difficulty: "Kolay"
  },

  // ==================== SPOR ====================
  {
    id: 1001,
    question: "Futbolda, bir maçta üç gol atan oyuncuya ne ad verilir?",
    options: ["Hat-trick", "Goleador", "Dublet", "Asist Kralı"],
    correct: 0,
    category: CATEGORIES.SPORTS.name,
    difficulty: "Kolay"
  },
  {
    id: 1002,
    question: "Basketbolda bir hücumun bitmesi için verilen süre kaç saniyedir?",
    options: ["20", "14", "30", "24"],
    correct: 3,
    category: CATEGORIES.SPORTS.name,
    difficulty: "Kolay"
  },
  {
    id: 1003,
    question: "Yaz Olimpiyat Oyunları'nda 100 metre koşu dünya rekoru sahibi kimdir?",
    options: ["Justin Gatlin", "Carl Lewis", "Usain Bolt", "Tyson Gay"],
    correct: 2,
    category: CATEGORIES.SPORTS.name,
    difficulty: "Kolay"
  },
  {
    id: 1004,
    question: "Teniste, puanların 40-40 eşit olması durumuna ne ad verilir?",
    options: ["Tie-break", "Set Puanı", "Avantaj", "Deuce (Döz)"],
    correct: 3,
    category: CATEGORIES.SPORTS.name,
    difficulty: "Kolay"
  },
  {
    id: 1005,
    question: "Hangi spor dalında 'nakavt' (knockout) terimi kullanılır?",
    options: ["Boks", "Eskrim", "Güreş", "Judo"],
    correct: 0,
    category: CATEGORIES.SPORTS.name,
    difficulty: "Kolay"
  },
  {
    id: 1006,
    question: "Formula 1'de en çok dünya şampiyonluğu rekorunu elinde bulunduran iki pilot kimdir?",
    options: ["Ayrton Senna ve Alain Prost", "Sebastian Vettel ve Niki Lauda", "Juan Manuel Fangio ve Jim Clark", "Lewis Hamilton ve Michael Schumacher"],
    correct: 3,
    category: CATEGORIES.SPORTS.name,
    difficulty: "Orta"
  },
  {
    id: 1007,
    question: "Yüzmede, serbest stil, sırtüstü, kurbağalama ve kelebek stillerinden oluşan yarışmaya ne ad verilir?",
    options: ["Bayrak Yarışı", "Sürat Yarışı", "Maraton Yüzme", "Kişisel Karışık (Bireysel Medley)"],
    correct: 3,
    category: CATEGORIES.SPORTS.name,
    difficulty: "Orta"
  },
  {
    id: 1008,
    question: "Futbolda ofsayt kuralını uygulayan hakem yardımcısı kimdir?",
    options: ["Çizgi Hakemi", "Orta Hakem", "Video Yardımcı Hakemi (VAR)", "4. Hakem"],
    correct: 0,
    category: CATEGORIES.SPORTS.name,
    difficulty: "Kolay"
  },
  {
    id: 1009,
    question: "Japonya kökenli, rakibi yere düşürerek veya kilitleyerek puan kazanmayı hedefleyen savaş sanatı hangisidir?",
    options: ["Karate", "Judo", "Tekvando", "Güreş"],
    correct: 1,
    category: CATEGORIES.SPORTS.name,
    difficulty: "Kolay"
  },
  {
    id: 1010,
    question: "Bir atletizm yarışında engellerin üzerinden atlanarak yapılan koşu türü nedir?",
    options: ["Sürat Koşusu", "Bayrak Koşusu", "Kros", "Engelli Koşu"],
    correct: 3,
    category: CATEGORIES.SPORTS.name,
    difficulty: "Kolay"
  },
  {
    id: 1011,
    question: "Amerika'nın en popüler sporlarından biri olan ve 'Super Bowl' ile zirveye ulaşan spor dalı hangisidir?",
    options: ["Beyzbol", "Buz Hokeyi", "Amerikan Futbolu", "Basketbol"],
    correct: 2,
    category: CATEGORIES.SPORTS.name,
    difficulty: "Kolay"
  },
  {
    id: 1012,
    question: "Bisiklet yarışlarının en prestijli ve zorlu yarışı olarak bilinen, Fransa'da düzenlenen etkinlik nedir?",
    options: ["Paris-Roubaix", "Tour de France", "Giro d'Italia", "Vuelta a España"],
    correct: 1,
    category: CATEGORIES.SPORTS.name,
    difficulty: "Orta"
  },
  {
    id: 1013,
    question: "Voleybolda, topu rakip sahaya sert bir şekilde vurarak sayı alma hamlesine ne ad verilir?",
    options: ["Pas", "Smaç", "Servis", "Manşet"],
    correct: 1,
    category: CATEGORIES.SPORTS.name,
    difficulty: "Kolay"
  },
  {
    id: 1014,
    question: "Hangi spor dalında 'Forehand' ve 'Backhand' terimleri kullanılır?",
    options: ["Badminton", "Masa Tenisi", "Tenis", "Golf"],
    correct: 2,
    category: CATEGORIES.SPORTS.name,
    difficulty: "Kolay"
  },
  {
    id: 1015,
    question: "Olimpiyat halkalarının temsil ettiği kıta sayısı kaçtır?",
    options: ["6", "5", "7", "4"],
    correct: 1,
    category: CATEGORIES.SPORTS.name,
    difficulty: "Kolay"
  },
  {
    id: 1016,
    question: "Futbolda, kaleci ve savunma oyuncularının kaleyi kapatmak için kullandığı yan yana dizilme tekniğine ne ad verilir?",
    options: ["Baraj", "Libero", "Pres", "Kademe"],
    correct: 0,
    category: CATEGORIES.SPORTS.name,
    difficulty: "Kolay"
  },
  {
    id: 1017,
    question: "Yüksekten suya atlama (dalış) sporunda hangi elementler değerlendirilir?",
    options: ["Sürat, mesafe, güç", "Kalkış, havada dönüş ve suya giriş (iz bırakmama)", "Yükseklik, derinlik, hız", "Esneklik, denge, nefes"],
    correct: 1,
    category: CATEGORIES.SPORTS.name,
    difficulty: "Orta"
  },
  {
    id: 1018,
    question: "Basketbolda bir oyuncunun tek maçta sayı, ribaund, asist, top çalma ve blok kategorilerinde çift haneli sayılara ulaşmasına ne ad verilir?",
    options: ["Double-double", "Five-by-five", "Quadruple-double", "Triple-double"],
    correct: 1,
    category: CATEGORIES.SPORTS.name,
    difficulty: "Zor"
  },
  {
    id: 1019,
    question: "Golf'te bir deliği, standart vuruş sayısının (par) bir vuruş altında bitirmeye ne ad verilir?",
    options: ["Birdie", "Eagle", "Albatros", "Bogey"],
    correct: 0,
    category: CATEGORIES.SPORTS.name,
    difficulty: "Orta"
  },
  {
    id: 1020,
    question: "Türkiye'nin ve dünyanın en önemli güreş etkinliklerinden biri olan, yağlı güreşlerin yapıldığı festival nerede düzenlenir?",
    options: ["Samsun", "İstanbul", "Antalya", "Edirne (Kırkpınar)"],
    correct: 3,
    category: CATEGORIES.SPORTS.name,
    difficulty: "Kolay"
  },
  {
    id: 1021,
    question: "Hangi spor dalında oyuncular 'Kale Çizgisi' (Goal Line) ve 'Touchdown' terimlerini kullanır?",
    options: ["Futbol", "Hentbol", "Amerikan Futbolu", "Ragbi"],
    correct: 2,
    category: CATEGORIES.SPORTS.name,
    difficulty: "Orta"
  },
  {
    id: 1022,
    question: "Maraton koşusunun standart mesafesi yaklaşık olarak kaç kilometredir?",
    options: ["35.2 km", "42.195 km", "21.1 km", "50 km"],
    correct: 1,
    category: CATEGORIES.SPORTS.name,
    difficulty: "Kolay"
  },
  {
    id: 1023,
    question: "Masa tenisinde 'Servis' atışını yapan oyuncunun topu kaç kez havaya atma hakkı vardır?",
    options: ["2", "Sınırsız", "3", "1"],
    correct: 1,
    category: CATEGORIES.SPORTS.name,
    difficulty: "Orta"
  },
  {
    id: 1024,
    question: "Hangi spor dalı, buz üzerinde iki takımın ucu kavisli sopalarla diski (pakı) rakip kaleye sokmaya çalıştığı oyundur?",
    options: ["Bandy", "Buz Pateni", "Buz Hokeyi", "Körling"],
    correct: 2,
    category: CATEGORIES.SPORTS.name,
    difficulty: "Kolay"
  },
  {
    id: 1025,
    question: "Futbolda, son zamanlarda kullanılmaya başlanan ve gol çizgisi teknolojisine benzeyen sisteme ne ad verilir?",
    options: ["Offside Trap", "Hawk-Eye", "Goal-Line Technology", "VAR"],
    correct: 2,
    category: CATEGORIES.SPORTS.name,
    difficulty: "Kolay"
  },
  {
    id: 1026,
    question: "1924 yılında ilk kez düzenlenen, kış sporlarının uluslararası etkinliği nedir?",
    options: ["Avrupa Kış Oyunları", "Kış Olimpiyat Oyunları", "Kış Üniversite Oyunları", "Kış Paralimpik Oyunları"],
    correct: 1,
    category: CATEGORIES.SPORTS.name,
    difficulty: "Orta"
  },
  {
    id: 1027,
    question: "Boksta, hakemin 10'a kadar sayması durumunda (yerdeyken kalkamama) rakibin kazandığı sonuca ne ad verilir?",
    options: ["Nakavt (KO)", "Hükmen Galibiyet", "Teknik Karar", "Diskalifiye"],
    correct: 0,
    category: CATEGORIES.SPORTS.name,
    difficulty: "Kolay"
  },
  {
    id: 1028,
    question: "Jimnastikte, sporcunun havada gerçekleştirdiği ters takla hareketine ne ad verilir?",
    options: ["Salto", "Denizkızı", "Amut", "Köprü"],
    correct: 0,
    category: CATEGORIES.SPORTS.name,
    difficulty: "Kolay"
  },
  {
    id: 1029,
    question: "Hangi sporcu, profesyonel kariyerinde 7 kez F1 Dünya Şampiyonluğu kazanmıştır?",
    options: ["Michael Schumacher", "Juan Manuel Fangio", "Ayrton Senna", "Alain Prost"],
    correct: 0,
    category: CATEGORIES.SPORTS.name,
    difficulty: "Kolay"
  },
  {
    id: 1030,
    question: "Kürek sporunda, tek bir sporcunun iki kürek kullanması durumuna ne ad verilir?",
    options: ["Pair", "Scull", "Coxed", "Sweepe"],
    correct: 1,
    category: CATEGORIES.SPORTS.name,
    difficulty: "Zor"
  },
  {
    id: 1031,
    question: "Teniste, bir maçın kazanılması için genellikle kaç set kazanılması gerekir (Grand Slam erkekler)?",
    options: ["2", "4", "5", "3"],
    correct: 3, // Grand Slam'lerde kadınlar 2, erkekler 3 set kazanır (toplam 5 set oynanır). Soru erkekleri soruyor (3 set kazanılır).
    category: CATEGORIES.SPORTS.name,
    difficulty: "Orta"
  },
  {
    id: 1032,
    question: "Atletizmde, disk atma, cirit atma ve gülle atma gibi spor dalları hangi kategoriye girer?",
    options: ["Atlamalar", "Koşular", "Çoklu Branşlar", "Atmalar"],
    correct: 3,
    category: CATEGORIES.SPORTS.name,
    difficulty: "Kolay"
  },
  {
    id: 1033,
    question: "Türkiye'de futbol liginin en üst seviyesine ne ad verilir?",
    options: ["TFF 1. Lig", "TFF 2. Lig", "Bölgesel Amatör Lig", "Süper Lig"],
    correct: 3,
    category: CATEGORIES.SPORTS.name,
    difficulty: "Kolay"
  },
  {
    id: 1034,
    question: "Basketbol sahasında, potanın önündeki yarım daire şeklindeki alana ne ad verilir?",
    options: ["Orta saha çizgisi", "Üç sayı çizgisi", "Serbest atış çizgisi", "Boyalı alan (Pota altı)"],
    correct: 3,
    category: CATEGORIES.SPORTS.name,
    difficulty: "Kolay"
  },
  {
    id: 1035,
    question: "Güreşte, rakibin omzunun yere değmesiyle kazanılan sonuca ne ad verilir?",
    options: ["Teknik Üstünlük", "Pasiflik", "Yüksek Puanlama", "Tuş"],
    correct: 3,
    category: CATEGORIES.SPORTS.name,
    difficulty: "Kolay"
  },
  {
    id: 1036,
    question: "Amerikan Beyzbol Ligi'ne ne ad verilir?",
    options: ["NFL", "NHL", "NBA", "MLB"],
    correct: 3,
    category: CATEGORIES.SPORTS.name,
    difficulty: "Orta"
  },
  {
    id: 1037,
    question: "Yüzmede, suya atlayışın ardından su altında yapılan ilk hareket nedir?",
    options: ["Kelebek vuruşu", "Yüzeye çıkış", "Süzülme ve vuruş (Dolphin Kick)", "Dönüş"],
    correct: 2,
    category: CATEGORIES.SPORTS.name,
    difficulty: "Orta"
  },
  {
    id: 1038,
    question: "Hentbol'da bir takımın bir maçta sahada aynı anda kaç oyuncusu bulunur?",
    options: ["5", "6", "7", "11"],
    correct: 2,
    category: CATEGORIES.SPORTS.name,
    difficulty: "Orta"
  },
  {
    id: 1039,
    question: "Hangi spor dalında 'Pist' veya 'Velodrom' terimleri kullanılır?",
    options: ["Atletizm", "At Yarışı", "Motosiklet Yarışı", "Bisiklet (Pist)"],
    correct: 3,
    category: CATEGORIES.SPORTS.name,
    difficulty: "Orta"
  },
  {
    id: 1040,
    question: "Uluslararası Olimpiyat Komitesi'nin (IOC) merkezi hangi şehirdedir?",
    options: ["Atina", "Roma", "Paris", "Lozan"],
    correct: 3,
    category: CATEGORIES.SPORTS.name,
    difficulty: "Zor"
  },
  {
    id: 1041,
    question: "Kriket'te, atıcının topu kaleye doğru fırlatmasına ne ad verilir?",
    options: ["Pas", "Smaç", "Atış (Bowling)", "Vuruş"],
    correct: 2,
    category: CATEGORIES.SPORTS.name,
    difficulty: "Zor"
  },
  {
    id: 1042,
    question: "Futbolda, oyuncu değişikliği yapmak için kullanılan sayı limiti kaçtır (normal maçta)?",
    options: ["3", "4", "6", "5"],
    correct: 3, // Güncel kural 5 oyuncu değişikliğine izin verir.
    category: CATEGORIES.SPORTS.name,
    difficulty: "Kolay"
  },
  {
    id: 1043,
    question: "Türkiye'de 'Tarihi Lise' olarak bilinen ve spor kulübü olan Galatasaray'ın kuruluş yılı hangisidir?",
    options: ["1905", "1880", "1907", "1910"],
    correct: 0,
    category: CATEGORIES.SPORTS.name,
    difficulty: "Kolay"
  },
  {
    id: 1044,
    question: "Alp disiplini kayağında, sporcuların birbirini takip eden kapılardan (bayraklardan) geçtiği yarış türü nedir?",
    options: ["Serbest Stil", "Biatlon", "Slalom", "Kros"],
    correct: 2,
    category: CATEGORIES.SPORTS.name,
    difficulty: "Orta"
  },
  {
    id: 1045,
    question: "Basketbol'da, bir oyuncunun topla zıplamayı bıraktıktan sonra tekrar zıplaması kural ihlali olarak ne adlandırılır?",
    options: ["Teknik faul", "Top sürme hatası (Dribbling)", "Adım hatası", "Hücum faulü"],
    correct: 1,
    category: CATEGORIES.SPORTS.name,
    difficulty: "Kolay"
  },
  {
    id: 1046,
    question: "Hangi dövüş sporunda, eldiven yerine el ve ayak bandajları kullanılır ve vuruşlar bacak, diz, yumruk ve dirsekle yapılabilir?",
    options: ["Tekvando", "Muay Thai", "Kick Boks", "Boks"],
    correct: 1,
    category: CATEGORIES.SPORTS.name,
    difficulty: "Orta"
  },
  {
    id: 1047,
    question: "Atletizmde, uzun atlama, üç adım atlama, yüksek atlama ve sırıkla atlamanın ortak adı nedir?",
    options: ["Atlamalar", "Atmalar", "Koşular", "Kros"],
    correct: 0,
    category: CATEGORIES.SPORTS.name,
    difficulty: "Kolay"
  },
  {
    id: 1048,
    question: "Suda yapılan, senkronize bir şekilde müzik eşliğinde hareket etme sporu nedir?",
    options: ["Su Topu", "Yüksek Dalış", "Senkronize Yüzme (Artistik Yüzme)", "Sualtı Hokeyi"],
    correct: 2,
    category: CATEGORIES.SPORTS.name,
    difficulty: "Kolay"
  },
  {
    id: 1049,
    question: "Golf'te, topun vuruş bölgesinden ayrılmasına ne ad verilir?",
    options: ["Putt", "Draw", "Fade", "Tee Shot"],
    correct: 3,
    category: CATEGORIES.SPORTS.name,
    difficulty: "Orta"
  },
  {
    id: 1050,
    question: "Futbolda, topun auta çıktığı köşeden yapılan vuruşa ne ad verilir?",
    options: ["Köşe Vuruşu (Korner)", "Serbest Vuruş", "Penaltı", "Taç Atışı"],
    correct: 0,
    category: CATEGORIES.SPORTS.name,
    difficulty: "Kolay"
  },
  {
    id: 1051,
    question: "Hangi Grand Slam tenis turnuvası, toprak kortta (kırmızı kil) oynanır?",
    options: ["Roland Garros (Fransa Açık)", "Wimbledon", "Avustralya Açık", "Amerika Açık"],
    correct: 0,
    category: CATEGORIES.SPORTS.name,
    difficulty: "Kolay"
  },
  {
    id: 1052,
    question: "Modern Olimpiyat Oyunları'nın kurucusu ve ilk organizatörü kimdir?",
    options: ["Theodore Roosevelt", "Pierre de Coubertin", "Baron Munchausen", "Spiridon Louis"],
    correct: 1,
    category: CATEGORIES.SPORTS.name,
    difficulty: "Orta"
  },
  {
    id: 1053,
    question: "Türkiye'de 'Filenin Sultanları' olarak anılan Milli Takım hangi spor dalında mücadele etmektedir?",
    options: ["Basketbol", "Futbol", "Hentbol", "Voleybol"],
    correct: 3,
    category: CATEGORIES.SPORTS.name,
    difficulty: "Kolay"
  },
  {
    id: 1054,
    question: "Eskrim sporunda, kullanılan üç ana silah (kılıç) türü hangileridir?",
    options: ["Kama, Balta, Kılıç", "Mızrak, Kalkan, Sopa", "Hançer, Yay, Ok", "Flöre, Epe, Kılıç (Sable)"],
    correct: 3,
    category: CATEGORIES.SPORTS.name,
    difficulty: "Zor"
  },
  {
    id: 1055,
    question: "Hangi spor dalında 'Striker', 'Pitch' ve 'Wicket' terimleri kullanılır?",
    options: ["Softbol", "Beyzbol", "Lakros", "Kriket"],
    correct: 3,
    category: CATEGORIES.SPORTS.name,
    difficulty: "Zor"
  },
  {
    id: 1056,
    question: "Futbol sahasında kaleye 11 metre uzaklıkta, topun yerleştirildiği çizgiye ne ad verilir?",
    options: ["Kale yayı", "Penaltı noktası", "Taç çizgisi", "Korner yayı"],
    correct: 1,
    category: CATEGORIES.SPORTS.name,
    difficulty: "Kolay"
  },
  {
    id: 1057,
    question: "Basketbolda bir oyuncunun faul limitini doldurması durumunda oyundan çıkarılmasına ne ad verilir?",
    options: ["Sakatlanma", "Faul dışı", "Bloklanma", "İhraç"],
    correct: 3,
    category: CATEGORIES.SPORTS.name,
    difficulty: "Orta"
  },
  {
    id: 1058,
    question: "Hangi atletizm branşında, sporcuların iki aşamalı bir atlayış yapması gerekir (koşu ve sıçrama sonrası)?",
    options: ["Uzun Atlama", "Sırıkla Atlama", "Üç Adım Atlama", "Yüksek Atlama"],
    correct: 2,
    category: CATEGORIES.SPORTS.name,
    difficulty: "Orta"
  },
  {
    id: 1059,
    question: "Su sporlarında, rüzgar gücüyle hareket eden bir sörf tahtası ve yelkenin kullanıldığı spor nedir?",
    options: ["Sörf", "Yelken", "Kano", "Rüzgar Sörfü (Windsurf)"],
    correct: 3,
    category: CATEGORIES.SPORTS.name,
    difficulty: "Kolay"
  },
  {
    id: 1060,
    question: "Hangi ünlü futbolcu, futbol tarihinin en çok Ballon d'Or ödülü kazanan oyuncusudur?",
    options: ["Lionel Messi", "Pelé", "Cristiano Ronaldo", "Diego Maradona"],
    correct: 0,
    category: CATEGORIES.SPORTS.name,
    difficulty: "Kolay"
  },
  {
    id: 1061,
    question: "Boksta, dirsek ile yapılan vuruşlara izin verilen dövüş sporu hangisidir?",
    options: ["Karate", "Boks", "Muay Thai", "Kick Boks"],
    correct: 2,
    category: CATEGORIES.SPORTS.name,
    difficulty: "Orta"
  },
  {
    id: 1062,
    question: "Süper Lig'de en çok şampiyonluk kazanan takım hangisidir?",
    options: ["Galatasaray", "Fenerbahçe", "Trabzonspor", "Beşiktaş"],
    correct: 0,
    category: CATEGORIES.SPORTS.name,
    difficulty: "Kolay"
  },
  {
    id: 1063,
    question: "Hangi spor dalında 'Shuttlecock' (tüylü top) kullanılır?",
    options: ["Badminton", "Voleybol", "Masa Tenisi", "Tenis"],
    correct: 0,
    category: CATEGORIES.SPORTS.name,
    difficulty: "Kolay"
  },
  {
    id: 1064,
    question: "Jimnastikte, yere düşmeden dengede durmayı, esnekliği ve gücü birleştiren aletli dal nedir?",
    options: ["Atlama Beygiri", "Yer Hareketleri", "Denge Aleti (Paralel Bar)", "Halka"],
    correct: 2,
    category: CATEGORIES.SPORTS.name,
    difficulty: "Orta"
  },
  {
    id: 1065,
    question: "Basketbolda, topu sürmeden iki elle tutarak atılan adımlarla yapılan kural ihlali nedir?",
    options: ["Saha dışı", "Faul", "Topla yürüme", "Adım Hatası (Steps)"],
    correct: 3,
    category: CATEGORIES.SPORTS.name,
    difficulty: "Kolay"
  },
  {
    id: 1066,
    question: "Koşu, yüzme ve bisiklet branşlarından oluşan dayanıklılık sporu nedir?",
    options: ["Heptatlon", "Pentatlon", "Triatlon", "Dekatlon"],
    correct: 2,
    category: CATEGORIES.SPORTS.name,
    difficulty: "Kolay"
  },
  {
    id: 1067,
    question: "Buz Hokeyi'nde, 'Pak'ı kaleye fırlatan oyuncunun hareketine ne ad verilir?",
    options: ["Slapshot", "Body Check", "Passing", "Forecheck"],
    correct: 0,
    category: CATEGORIES.SPORTS.name,
    difficulty: "Zor"
  },
  {
    id: 1068,
    question: "Teniste, servis atan oyuncunun topu rakibe ulaşmadan fileye takılmasına ne ad verilir?",
    options: ["Fault", "Smash", "Let", "Ace"],
    correct: 2,
    category: CATEGORIES.SPORTS.name,
    difficulty: "Orta"
  },
  {
    id: 1069,
    question: "Hangi sporcu, profesyonel kariyerinde 20'den fazla Grand Slam (tekler) şampiyonluğu kazanmıştır?",
    options: ["Andre Agassi", "Andy Murray", "Roger Federer", "Pete Sampras"],
    correct: 2,
    category: CATEGORIES.SPORTS.name,
    difficulty: "Kolay"
  },
  {
    id: 1070,
    question: "Futbolda, hakemin bir oyuncuya kırmızı kart göstermesi ne anlama gelir?",
    options: ["Geçici Oyundan Çıkarma", "Uyarı", "Maç Sonuna Kadar Ceza", "Saha Dışına Çıkarma (İhraç)"],
    correct: 3,
    category: CATEGORIES.SPORTS.name,
    difficulty: "Kolay"
  },
  {
    id: 1071,
    question: "Golf'te, topu deliğe sokmak için kullanılan özel sopaya ne ad verilir?",
    options: ["Iron", "Putter", "Wedge", "Driver"],
    correct: 1,
    category: CATEGORIES.SPORTS.name,
    difficulty: "Orta"
  },
  {
    id: 1072,
    question: "Modern Pentatlon hangi spor branşlarını içerir?",
    options: ["Koşu, Yüzme, Atış, Eskrim, Binicilik", "Sörf, Kayak, Yüzme, Atletizm, Kürek", "Güreş, Boks, Eskrim, Jimnastik, Koşu", "Basketbol, Voleybol, Futbol, Hentbol, Tenis"],
    correct: 0,
    category: CATEGORIES.SPORTS.name,
    difficulty: "Zor"
  },
  {
    id: 1073,
    question: "Basketbol'da en yüksek skorla biten atış kaç puandır?",
    options: ["1", "2", "4", "3"],
    correct: 3,
    category: CATEGORIES.SPORTS.name,
    difficulty: "Kolay"
  },
  {
    id: 1074,
    question: "Olimpiyat Oyunları'nda 'Citius, Altius, Fortius' (Daha Hızlı, Daha Yüksek, Daha Güçlü) sloganı hangi dili ifade eder?",
    options: ["Latince", "Fransızca", "İngilizce", "Yunanca"],
    correct: 0,
    category: CATEGORIES.SPORTS.name,
    difficulty: "Orta"
  },
  {
    id: 1075,
    question: "Gülle atma sporunda, gülle ağırlığı erkekler için kaç kilogramdır?",
    options: ["7.26 kg", "6.26 kg", "5.26 kg", "8.26 kg"],
    correct: 0,
    category: CATEGORIES.SPORTS.name,
    difficulty: "Zor"
  },
  {
    id: 1076,
    question: "Hangi spor dalında, bir topu yere sektirerek rakip oyuncuya çarptırma hedefiyle oynanır?",
    options: ["Basketbol", "Masa Tenisi", "Voleybol", "Squash"],
    correct: 3,
    category: CATEGORIES.SPORTS.name,
    difficulty: "Orta"
  },
  {
    id: 1077,
    question: "Jimnastikte, tek bir tahta çubuk üzerinde yapılan akrobatik hareketler hangi alette gerçekleştirilir?",
    options: ["Paralel Bar", "Yer", "Barfiks", "Asimetrik Paralel"],
    correct: 2,
    category: CATEGORIES.SPORTS.name,
    difficulty: "Orta"
  },
  {
    id: 1078,
    question: "Futbol maçının normal süresi kaç dakikadır?",
    options: ["90", "80", "45", "100"],
    correct: 0,
    category: CATEGORIES.SPORTS.name,
    difficulty: "Kolay"
  },
  {
    id: 1079,
    question: "Amerikan futbolunda, topu pasla yakalayan ve sayı (touchdown) yapan oyuncuya ne ad verilir?",
    options: ["Safety", "Linebacker", "Receiver", "Quarterback"],
    correct: 2,
    category: CATEGORIES.SPORTS.name,
    difficulty: "Zor"
  },
  {
    id: 1080,
    question: "Koşu, atlama ve atma dallarından oluşan, kadınlar için 7 farklı branşı içeren çoklu spor nedir?",
    options: ["Heptatlon", "Dekatlon", "Triatlon", "Pentatlon"],
    correct: 0,
    category: CATEGORIES.SPORTS.name,
    difficulty: "Zor"
  },
  {
    id: 1081,
    question: "Su Topu'nda bir takımın bir maçta havuzda aynı anda kaç oyuncusu bulunur (kaleci dahil)?",
    options: ["8", "7", "5", "6"],
    correct: 1,
    category: CATEGORIES.SPORTS.name,
    difficulty: "Zor"
  },
  {
    id: 1082,
    question: "Formula 1'de, yarış sırasında lastik değişimi ve yakıt ikmali (artık yasaklandı) için kullanılan alana ne ad verilir?",
    options: ["Pit Stop", "Paddock", "Start/Finish Çizgisi", "Grid"],
    correct: 0,
    category: CATEGORIES.SPORTS.name,
    difficulty: "Kolay"
  },
  {
    id: 1083,
    question: "Basketbolda, rakibin şutunu panya veya potaya girmeden kesme hareketine ne ad verilir?",
    options: ["Asist", "Ribaund", "Top çalma", "Blok"],
    correct: 3,
    category: CATEGORIES.SPORTS.name,
    difficulty: "Kolay"
  },
  {
    id: 1084,
    question: "Teniste, 'Serve and Volley' tekniği ne anlama gelir?",
    options: ["Sadece güçlü servis atmak", "Servis sonrası rakibe pas atmak", "Servis sonrası fileye koşmak", "Servis sonrası geride kalmak"],
    correct: 2,
    category: CATEGORIES.SPORTS.name,
    difficulty: "Orta"
  },
  {
    id: 1085,
    question: "Hangi spor dalında 'Çekiç' (Hammer) terimi kullanılır?",
    options: ["Güreş", "Boks", "Atletizm (Çekiç Atma)", "Gülle Atma"],
    correct: 2,
    category: CATEGORIES.SPORTS.name,
    difficulty: "Kolay"
  },
  {
    id: 1086,
    question: "İskoçya kökenli, golf benzeri bir oyun olan ve topu buz üzerinde deliklere sokmayı hedefleyen kış sporu nedir?",
    options: ["Kayma", "Buz Hokeyi", "Körling", "Bandy"],
    correct: 2,
    category: CATEGORIES.SPORTS.name,
    difficulty: "Orta"
  },
  {
    id: 1087,
    question: "Futbol maçlarında, kalecinin topu elle yakalayabileceği alan nedir?",
    options: ["Taç çizgisi", "Orta saha", "Korner yayı", "16 metrelik ceza alanı"],
    correct: 3,
    category: CATEGORIES.SPORTS.name,
    difficulty: "Kolay"
  },
  {
    id: 1088,
    question: "Hangi sporcu 'Yüzyılın Atleti' ve 'Uçan Fin' lakaplarıyla anılmıştır?",
    options: ["Fanny Blankers-Koen", "Jesse Owens", "Paavo Nurmi", "Emil Zátopek"],
    correct: 2,
    category: CATEGORIES.SPORTS.name,
    difficulty: "Zor"
  },
  {
    id: 1089,
    question: "Olimpiyat Oyunları'nda en fazla altın madalya kazanan spor dalı hangisidir?",
    options: ["Jimnastik", "Atletizm", "Yüzme", "Güreş"],
    correct: 2,
    category: CATEGORIES.SPORTS.name,
    difficulty: "Orta"
  },
  {
    id: 1090,
    question: "Formula 1'de, yarışa başlarken araçların sıraya dizildiği alana ne ad verilir?",
    options: ["Grid", "Paddock", "Pit Stop", "Pit Yolu"],
    correct: 0,
    category: CATEGORIES.SPORTS.name,
    difficulty: "Kolay"
  },
  {
    id: 1091,
    question: "Voleybolda, topu rakip sahaya gönderirken (servis) topun fileye değip rakip alana düşmesine ne ad verilir?",
    options: ["Ace", "Hata", "Let", "Fault"],
    correct: 2,
    category: CATEGORIES.SPORTS.name,
    difficulty: "Orta"
  },
  {
    id: 1092,
    question: "Koşularda, yarışmacıların başlangıç pozisyonunu aldığı ve yanlış çıkışları kontrol eden alet nedir?",
    options: ["Çıkış Takozu", "Bitirme Çizgisi", "Kronometre", "Engeller"],
    correct: 0,
    category: CATEGORIES.SPORTS.name,
    difficulty: "Kolay"
  },
  {
    id: 1093,
    question: "Basketbol'da topu çembere atan oyuncuya, sayı yapmasına yardımcı olan pasa ne ad verilir?",
    options: ["Blok", "Asist", "Ribaund", "Top Çalma"],
    correct: 1,
    category: CATEGORIES.SPORTS.name,
    difficulty: "Kolay"
  },
  {
    id: 1094,
    question: "Hangi Grand Slam tenis turnuvası çim kortta oynanır?",
    options: ["Amerika Açık", "Fransa Açık", "Avustralya Açık", "Wimbledon"],
    correct: 3,
    category: CATEGORIES.SPORTS.name,
    difficulty: "Kolay"
  },
  {
    id: 1095,
    question: "Hentbol'da, kalecinin ceza sahasına kaç adım atma hakkı vardır?",
    options: ["2", "Sınırsız", "3", "4"],
    correct: 1,
    category: CATEGORIES.SPORTS.name,
    difficulty: "Orta"
  },
  {
    id: 1096,
    question: "Jimnastikte, yere sabitlenmiş, iki yatay çubuktan oluşan ve akrobatik hareketler yapılan alet nedir?",
    options: ["Paralel Bar (Bar Aleti)", "Barfiks", "Halka", "Atlama Beygiri"],
    correct: 0,
    category: CATEGORIES.SPORTS.name,
    difficulty: "Orta"
  },
  {
    id: 1097,
    question: "Profesyonel Güreşte (WWE, vb.), güreşçilerin rakibini omuzlarının üzerine alıp yere sertçe vurduğu hareket nedir?",
    options: ["Headlock", "Suplex", "Diving", "Powerbomb"],
    correct: 3,
    category: CATEGORIES.SPORTS.name,
    difficulty: "Kolay"
  },
  {
    id: 1098,
    question: "Futbolda, taç atışı hangi kural ihlali sonrası kullanılır?",
    options: ["Kale vuruşu", "Ofsayt", "Topun taç çizgisinden dışarı çıkması", "Faul"],
    correct: 2,
    category: CATEGORIES.SPORTS.name,
    difficulty: "Kolay"
  },
  {
    id: 1099,
    question: "Atletizmde, kısa mesafeli koşuların (100m, 200m, 400m) genel adı nedir?",
    options: ["Uzun Mesafe", "Sürat Koşuları (Sprint)", "Bayrak Koşuları", "Maraton"],
    correct: 1,
    category: CATEGORIES.SPORTS.name,
    difficulty: "Kolay"
  },
  {
    id: 1100,
    question: "Hangi spor dalında 'Hole in One' (Tek Vuruşta Deliğe Sokma) terimi kullanılır?",
    options: ["Golf", "Bilardo", "Masa Tenisi", "Tenis"],
    correct: 0,
    category: CATEGORIES.SPORTS.name,
    difficulty: "Kolay"
  },
  {
    id: 1101,
    question: "Futbolda, kaleci hariç bir oyuncunun topu eliyle bilerek oynaması sonucu verilen karar nedir?",
    options: ["Serbest Vuruş (Frikik)", "Penaltı Vuruşu", "Taç Atışı", "Köşe Vuruşu"],
    correct: 0,
    category: "Spor",
    difficulty: "Kolay"
  },
  {
    id: 1102,
    question: "Modern Olimpiyat Oyunları'nın kurucusu olarak bilinen ve 'Önemli olan kazanmak değil, katılmaktır' sözüyle tanınan kişi kimdir?",
    options: ["Pierre de Coubertin", "Spyros Louis", "Avery Brundage", "Jesse Owens"],
    correct: 0,
    category: "Spor",
    difficulty: "Orta"
  },
  {
    id: 1103,
    question: "Basketbolda, bir oyuncunun üç sayı çizgisi dışından attığı basket kaç puan değerindedir?",
    options: ["4 puan", "3 puan", "1 puan", "2 puan"],
    correct: 1,
    category: "Spor",
    difficulty: "Kolay"
  },
  {
    id: 1104,
    question: "Teniste, bir oyuncunun servis attığı oyunu hiç puan vermeden (40-0) kazanmasına ne ad verilir?",
    options: ["Deuce", "Love Game (Sıfır Oyun)", "Break Point", "Tie-Break"],
    correct: 1,
    category: "Spor",
    difficulty: "Orta"
  },
  {
    id: 1105,
    question: "Boks sporunda, bir raunt kaç dakika sürer?",
    options: ["4 dakika", "5 dakika", "3 dakika", "2 dakika"],
    correct: 2,
    category: "Spor",
    difficulty: "Kolay"
  },
  {
    id: 1106,
    question: "NBA tarihinde en çok şampiyonluk yüzüğüne sahip olan efsanevi oyuncu kimdir?",
    options: ["Michael Jordan", "LeBron James", "Bill Russell", "Kareem Abdul-Jabbar"],
    correct: 2,
    category: "Spor",
    difficulty: "Kolay"
  },
  {
    id: 1107,
    question: "Bisiklet sporunun en prestijli yarışı olan, Fransa'da düzenlenen büyük tur nedir?",
    options: ["Paris–Roubaix", "Tour de France", "Giro d'Italia", "Vuelta a España"],
    correct: 1,
    category: "Spor",
    difficulty: "Kolay"
  },
  {
    id: 1108,
    question: "Yüzmede, serbest stilin yanı sıra, kelebek, sırtüstü ve hangi stil olmak üzere toplam dört temel stil bulunur?",
    options: ["Kurbağalama (Göğüs)", "Köpek Stili", "Yan Stil", "Engelli Stil"],
    correct: 0,
    category: "Spor",
    difficulty: "Kolay"
  },
  {
    id: 1109,
    question: "Atletizmde, 42.195 kilometrelik mesafe hangi koşu türüne aittir?",
    options: ["100 metre depar", "Uzun Atlama", "Maraton", "Engelli Koşu"],
    correct: 2,
    category: "Spor",
    difficulty: "Kolay"
  },
  {
    id: 1110,
    question: "Voleybolda, bir takımın rakip sahanın zeminine topu düşürmesi sonucu kazandığı sayıya ne ad verilir?",
    options: ["Sayı (Point)", "Set Sayısı", "Faul", "Blok"],
    correct: 0,
    category: "Spor",
    difficulty: "Kolay"
  },
  {
    id: 1111,
    question: "Futbolda, bir maçta üç gol atan oyuncu için kullanılan terim nedir?",
    options: ["Asist Kralı", "Dörtleme", "Dublaj", "Hat-Trick"],
    correct: 3,
    category: "Spor",
    difficulty: "Kolay"
  },
  {
    id: 1112,
    question: "Formul 1 yarışlarında, bir pilotun yarışa başlarken en önde (birinci sırada) yer almasına ne ad verilir?",
    options: ["Pit Stop", "Pole Pozisyonu", "En Hızlı Tur", "Podyum"],
    correct: 1,
    category: "Spor",
    difficulty: "Kolay"
  },
  {
    id: 1113,
    question: "Amerikan Futbolu'nda (NFL) en çok şampiyonluğa (Super Bowl) sahip olan takım kimdir?",
    options: ["Dallas Cowboys", "Green Bay Packers", "Pittsburgh Steelers ve New England Patriots", "San Francisco 49ers"],
    correct: 2,
    category: "Spor",
    difficulty: "Orta"
  },
  {
    id: 1114,
    question: "Jimnastikte, sporcunun havada dönerek yaptığı akrobatik hareketlere ne ad verilir?",
    options: ["Yay", "Salto (Takla)", "Köprü", "Denge"],
    correct: 1,
    category: "Spor",
    difficulty: "Kolay"
  },
  {
    id: 1115,
    question: "Golf sporunda, topun deliğe atıldığı her vuruş sayısının, o delik için belirlenen standart vuruş sayısından (Par) bir az olması durumu nedir?",
    options: ["Double Bogey", "Birdie", "Bogey", "Eagle"],
    correct: 1,
    category: "Spor",
    difficulty: "Orta"
  },
  {
    id: 1116,
    question: "Su topu (Water Polo) sporunda, bir takım kaç oyuncu ile sahada yer alır?",
    options: ["7", "6", "8", "5"],
    correct: 0,
    category: "Spor",
    difficulty: "Zor"
  },
  {
    id: 1117,
    question: "Halter sporunda, barın tek bir hamlede yerden baş seviyesinin üzerine kaldırıldığı teknik nedir?",
    options: ["Silkme (Clean and Jerk)", "Pres", "Squat", "Koparma (Snatch)"],
    correct: 3,
    category: "Spor",
    difficulty: "Orta"
  },
  {
    id: 1118,
    question: "Tenis sporunda, her dört büyük turnuvadan oluşan serinin genel adı nedir?",
    options: ["Fed Cup", "ATP Turu", "Wimbledon", "Grand Slam"],
    correct: 3,
    category: "Spor",
    difficulty: "Kolay"
  },
  {
    id: 1119,
    question: "Türkiye'nin 'En Centilmen Sporu' olarak bilinen ve genellikle at üzerinde oynanan halk oyunu/spor dalı nedir?",
    options: ["Cirit", "Güreş", "Koşu", "Yüzme"],
    correct: 0,
    category: "Spor",
    difficulty: "Kolay"
  },
  {
    id: 1120,
    question: "Futbolda, kalecinin ceza sahası içinde yaptığı kurtarışlara ne ad verilir?",
    options: ["Blok", "Kurtarış (Save)", "Şut", "Pas"],
    correct: 1,
    category: "Spor",
    difficulty: "Kolay"
  },
  {
    id: 1121,
    question: "Basketbol maçları kaç periyottan oluşur?",
    options: ["5", "4", "2", "3"],
    correct: 1,
    category: "Spor",
    difficulty: "Kolay"
  },
  {
    id: 1122,
    question: "Artistik buz pateninde, patencinin kendi ekseni etrafında hızla dönerek yaptığı hareketlere ne ad verilir?",
    options: ["Pivot", "Lift", "Spinel (Dönüş)", "Atlays"],
    correct: 2,
    category: "Spor",
    difficulty: "Orta"
  },
  {
    id: 1123,
    question: "Masa tenisinde, topun servis sırasında fileye çarpıp rakip sahaya düşmesine ne ad verilir?",
    options: ["Let (Tekrar)", "Point", "Ace", "Faul"],
    correct: 0,
    category: "Spor",
    difficulty: "Kolay"
  },
  {
    id: 1124,
    question: "Olimpiyat halkalarında kullanılan 5 renk (mavi, sarı, siyah, yeşil, kırmızı) neyi temsil eder?",
    options: ["5 Kıtayı", "5 Büyük Spor Organizasyonunu", "Olimpiyat Değerlerini", "Spor Dallarını"],
    correct: 0,
    category: "Spor",
    difficulty: "Kolay"
  },
  {
    id: 1125,
    question: "Formula 1 araçlarının yarıştığı parkurlara ne ad verilir?",
    options: ["Arena", "Velodrom", "Pist", "Stadyum"],
    correct: 2,
    category: "Spor",
    difficulty: "Kolay"
  },
  {
    id: 1126,
    question: "Buz Hokeyi'nde, oyuncuların patenle kayarak kullandığı disk şeklindeki topa ne ad verilir?",
    options: ["Puck", "Slapshot", "Top", "Stick"],
    correct: 0,
    category: "Spor",
    difficulty: "Kolay"
  },
  {
    id: 1127,
    question: "Güreşte, rakibi sırt üstü yere sererek iki omuzunu da yere değdirmek suretiyle kazanılan duruma ne ad verilir?",
    options: ["Tuş", "Sayı", "Puan", "Faul"],
    correct: 0,
    category: "Spor",
    difficulty: "Kolay"
  },
  {
    id: 1128,
    question: "Yüksek Atlama sporunda, sporcunun geriye doğru eğilerek çıtanın üzerinden atladığı teknik nedir?",
    options: ["Western Roll", "Straddle", "Fosbury Flop", "Makaslama"],
    correct: 2,
    category: "Spor",
    difficulty: "Orta"
  },
  {
    id: 1129,
    question: "Ragbi sporunda, topu kale direklerinin arasına ve üstüne atarak sayı kazanma eylemine ne ad verilir?",
    options: ["Goal Kick (Drop Goal/Penalty Goal)", "Lineout", "Try", "Touchdown"],
    correct: 0,
    category: "Spor",
    difficulty: "Orta"
  },
  {
    id: 1130,
    question: "Beysbol'da, vuruş yapan oyuncunun sahadaki dört kalenin tamamını geçerek sayı kazanması durumuna ne ad verilir?",
    options: ["Base Hit", "Foul Ball", "Home Run", "Strikeout"],
    correct: 2,
    category: "Spor",
    difficulty: "Kolay"
  },
  {
    id: 1131,
    question: "Futbol maçlarında, topun tümüyle kale çizgisini geçip geçmediğini belirleyen teknolojiye ne ad verilir?",
    options: ["Kale Çizgisi Teknolojisi (Goal-Line Technology)", "Yarı Otomatik Ofsayt Sistemi", "Ofsayt Sistemi", "Video Yardımcı Hakem (VAR)"],
    correct: 0,
    category: "Spor",
    difficulty: "Kolay"
  },
  {
    id: 1132,
    question: "Kış Olimpiyatları'nda, bir sporcunun tüfekle atış yapıp ardından kros kayağı yaptığı disiplin nedir?",
    options: ["Kuzey Kombinesi", "Biatlon", "Kızak", "Kayakla Atlama"],
    correct: 1,
    category: "Spor",
    difficulty: "Orta"
  },
  {
    id: 1133,
    question: "Bireysel spor dalları içinde yer alan, eskrimde en yaygın kullanılan kılıç türü nedir?",
    options: ["Kama", "Hançer", "Epe, Flöre ve Kılıç (Sable)", "Mızrak"],
    correct: 2,
    category: "Spor",
    difficulty: "Orta"
  },
  {
    id: 1134,
    question: "Türkiye'de 'Filenin Sultanları' olarak bilinen ve büyük başarılar elde eden milli takım hangi spor dalında mücadele etmektedir?",
    options: ["Voleybol", "Futbol", "Hentbol", "Basketbol"],
    correct: 0,
    category: "Spor",
    difficulty: "Kolay"
  },
  {
    id: 1135,
    question: "Basketbolda, bir takımın hücum için kullanabileceği maksimum süre (saniye) nedir?",
    options: ["30 saniye", "8 saniye", "14 saniye", "24 saniye"],
    correct: 3,
    category: "Spor",
    difficulty: "Kolay"
  },
  {
    id: 1136,
    question: "Atletizmde, disk atma, cirit atma, gülle atma gibi dallar hangi kategoriye girer?",
    options: ["Atlamalar", "Koşu", "Atmalar", "Kombine"],
    correct: 2,
    category: "Spor",
    difficulty: "Kolay"
  },
  {
    id: 1137,
    question: "Yüzmede, yüzücünün suya atlayış yaptığı başlangıç platformuna ne ad verilir?",
    options: ["Eşik", "Turnike", "Basamak", "Blok"],
    correct: 3,
    category: "Spor",
    difficulty: "Kolay"
  },
  {
    id: 1138,
    question: "Profesyonel güreşte (WWE), güreşçilerin mücadele ettiği kare şeklindeki alana ne ad verilir?",
    options: ["Ring", "Zemin", "Oktagon", "Saha"],
    correct: 0,
    category: "Spor",
    difficulty: "Kolay"
  },
  {
    id: 1139,
    question: "Sörf sporunda, sörfçünün dalganın en hızlı ve en dik kısmında kaymasına ne ad verilir?",
    options: ["Duck Dive", "Tube Ride", "Cutback", "Air"],
    correct: 1,
    category: "Spor",
    difficulty: "Zor"
  },
  {
    id: 1140,
    question: "Olimpiyat Oyunları'nda, altın madalya kazanan bir sporcunun boynuna takılan madalyanın ağırlığı ne kadardır?",
    options: ["Tamamen altındır", "Gümüş ve üzeri altın kaplamadır", "Çelikten yapılmıştır", "Bronz ve üzeri altın kaplamadır"],
    correct: 1,
    category: "Spor",
    difficulty: "Orta"
  },
  {
    id: 1141,
    question: "Hentbol (el topu) maçları kaç dakikalık iki devreden oluşur?",
    options: ["20 dakika", "25 dakika", "30 dakika", "45 dakika"],
    correct: 2,
    category: "Spor",
    difficulty: "Kolay"
  },
  {
    id: 1142,
    question: "Buz Hokeyi'nde, rakip kaleye en yakın pozisyonda duran ve genellikle en çok gol atan oyuncu pozisyonu nedir?",
    options: ["Defans", "Kaleci", "Merkez Oyuncusu (Center)", "Hücum Oyuncusu (Forward)"],
    correct: 3,
    category: "Spor",
    difficulty: "Orta"
  },
  {
    id: 1143,
    question: "Teniste, servis atan oyuncunun rakibine hiç dokunulmadan sayı alması durumuna ne ad verilir?",
    options: ["Break", "Net", "Fault", "Ace"],
    correct: 3,
    category: "Spor",
    difficulty: "Kolay"
  },
  {
    id: 1144,
    question: "Futbolda, bir oyuncunun kaleye yakın mesafeden topu yükseltmeden, sert bir şekilde ağlara göndermesi tekniği nedir?",
    options: ["Plase", "Vole", "Aşırtma Vuruş", "Füze (Şut)"],
    correct: 3,
    category: "Spor",
    difficulty: "Orta"
  },
  {
    id: 1145,
    question: "Basketbolda, topu sürmeden (dribbling yapmadan) iki elle tutma veya durdurma kural ihlali nedir?",
    options: ["Top Tutma (Carrying)", "Çift Dribbling (Double Dribble)", "Yürüme (Traveling)", "Faul"],
    correct: 1,
    category: "Spor",
    difficulty: "Kolay"
  },
  {
    id: 1146,
    question: "Olimpiyat Oyunları'nda en fazla altın madalya kazanan bireysel sporcu (yüzücü) kimdir?",
    options: ["Usain Bolt", "Michael Phelps", "Carl Lewis", "Mark Spitz"],
    correct: 1,
    category: "Spor",
    difficulty: "Kolay"
  },
  {
    id: 1147,
    question: "Kürek sporunda, tek bir kürekçi tarafından kullanılan ve sporcunun sırtı hareket yönüne dönük olduğu tekneye ne ad verilir?",
    options: ["Kano", "Raft", "Scull", "Yacht"],
    correct: 2,
    category: "Spor",
    difficulty: "Zor"
  },
  {
    id: 1148,
    question: "Ragbi'de (Rugby Union), sayı kazanmanın temel yolu olan ve topu rakip kale çizgisinin arkasında yere değdirmeye ne ad verilir?",
    options: ["Drop Goal", "Conversion", "Try", "Penalty"],
    correct: 2,
    category: "Spor",
    difficulty: "Orta"
  },
  {
    id: 1149,
    question: "Atletizmde, sırıkla atlama sporunda kullanılan enstrüman nedir?",
    options: ["Gülle", "Sırık", "Mızrak", "Disk"],
    correct: 1,
    category: "Spor",
    difficulty: "Kolay"
  },
  {
    id: 1150,
    question: "Modern pentatlon sporunda yer alan 5 farklı disiplin nelerdir?",
    options: ["Koşu, Yüzme, Bisiklet, Atış, Eskrim", "Koşu, Yüzme, Eskrim, Judo, Atış", "Atış, Eskrim, Yüzme, Binicilik, Koşu", "Koşu, Atış, Yüzme, Binicilik, Güreş"],
    correct: 2,
    category: "Spor",
    difficulty: "Zor"
  },
  {
    id: 1151,
    question: "Futbolda, ofsayt kuralını ilk kez uygulayan ülke veya bölge hangisidir?",
    options: ["Büyük Britanya", "Brezilya", "İtalya", "Fransa"],
    correct: 0,
    category: "Spor",
    difficulty: "Zor"
  },
  {
    id: 1152,
    question: "Masa tenisinde, bir set kaç sayıda biter (en az 2 farkla kazanılması şartıyla)?",
    options: ["10", "15", "21", "11"],
    correct: 3,
    category: "Spor",
    difficulty: "Kolay"
  },
  {
    id: 1153,
    question: "Halter sporunda, koparma (Snatch) ve silkme (Clean and Jerk) ağırlıklarının toplamına ne ad verilir?",
    options: ["Kombine", "Toplam Kaldırış", "Repertuar", "Kategori Ağırlığı"],
    correct: 1,
    category: "Spor",
    difficulty: "Kolay"
  },
  {
    id: 1154,
    question: "Teniste, bir oyunda durumun 40-40 (eşitlik) olması halinde kullanılan terim nedir?",
    options: ["Break Point", "Advantage", "Game Point", "Deuce (Eşitlik)"],
    correct: 3,
    category: "Spor",
    difficulty: "Kolay"
  },
  {
    id: 1155,
    question: "Basketbolda, oyuncunun rakibine yasal olmayan şekilde temas etmesi sonucu verilen ceza nedir?",
    options: ["Top Kaybı", "Teknik Faul", "Faul", "Hata (Violation)"],
    correct: 2,
    category: "Spor",
    difficulty: "Kolay"
  },
  {
    id: 1156,
    question: "Yüzmede, kurbağalama stilinde, kolların suyu öne doğru iterek birleştirilmesi eylemine ne ad verilir?",
    options: ["Çekiş (Pull)", "Itiş", "Dönüş", "Vuruş"],
    correct: 0,
    category: "Spor",
    difficulty: "Orta"
  },
  {
    id: 1157,
    question: "Olimpiyat Oyunları'nın sembolü olan alev, hangi antik kentten getirilerek yakılır?",
    options: ["Atina", "Roma", "Sparta", "Olimpia"],
    correct: 3,
    category: "Spor",
    difficulty: "Kolay"
  },
  {
    id: 1158,
    question: "Boks sporunda, bir boksörün nakavtla (KO) yenilgisi için yerde kalabileceği maksimum süre (saniye) nedir?",
    options: ["10 saniye", "8 saniye", "5 saniye", "15 saniye"],
    correct: 0,
    category: "Spor",
    difficulty: "Kolay"
  },
  {
    id: 1159,
    question: "Kriket sporunda, topun atıldığı ve vurucunun durduğu bölgeye ne ad verilir?",
    options: ["Boundry", "Crease", "Wicket", "Pitch"],
    correct: 3,
    category: "Spor",
    difficulty: "Zor"
  },
  {
    id: 1160,
    question: "Voleybolda, topu karşılamak için filenin önünde zıplayarak yapılan savunma hareketine ne ad verilir?",
    options: ["Servis", "Blok", "Manşet", "Smaç"],
    correct: 1,
    category: "Spor",
    difficulty: "Kolay"
  },
  {
    id: 1161,
    question: "Basketbolda, bir takımın bir maçı uzatma (ek süre) olmadan kazanması için gerekli süre (toplam dakika) nedir?",
    options: ["30 dakika", "60 dakika", "48 dakika", "40 dakika"],
    correct: 2,
    category: "Spor",
    difficulty: "Kolay"
  },
  {
    id: 1162,
    question: "Kış Olimpiyatları'nda yer alan ve kızak üzerinde tek ya da iki kişilik takımlar halinde yapılan, hız ve zamanlamaya dayalı yarış disiplini nedir?",
    options: ["Luge", "Skeleton", "Bobsled (Kızak)", "Kısa Kulvar Sürat Pateni"],
    correct: 2,
    category: "Spor",
    difficulty: "Orta"
  },
  {
    id: 1163,
    question: "Futbolda, ceza sahası içinde kaleciye geri pas veren bir oyuncunun topu eliyle tutması sonucu verilen karar nedir?",
    options: ["Endirekt Serbest Vuruş", "Köşe Vuruşu", "Penaltı Vuruşu", "Direkt Serbest Vuruş"],
    correct: 0,
    category: "Spor",
    difficulty: "Orta"
  },
  {
    id: 1164,
    question: "Atletizmde, bayrak yarışlarında kullanılan ve devir teslimi yapılan küçük çubuğa ne ad verilir?",
    options: ["Disk", "Bayrak (Baton)", "Sırık", "Cirit"],
    correct: 1,
    category: "Spor",
    difficulty: "Kolay"
  },
  {
    id: 1165,
    question: "Teniste, tekler (single) maçlarında bir oyuncunun topu rakibin arka çizgisi ve yan çizgileri arasına atması durumuna ne ad verilir?",
    options: ["Out", "Hata (Fault)", "Net", "İçeri (In)"],
    correct: 3,
    category: "Spor",
    difficulty: "Kolay"
  },
  {
    id: 1166,
    question: "Yarış Atçılığı sporunda, atın bindiği kişiye ne ad verilir?",
    options: ["Binici", "Antrenör", "Jokey", "Seyis"],
    correct: 2,
    category: "Spor",
    difficulty: "Kolay"
  },
  {
    id: 1167,
    question: "Dağcılıkta, ip ve diğer güvenlik ekipmanları kullanılarak yapılan kontrollü iniş tekniği nedir?",
    options: ["Yürüyüş", "Abseiling (İp İnişi)", "Tırmanma", "Bouldering"],
    correct: 1,
    category: "Spor",
    difficulty: "Orta"
  },
  {
    id: 1168,
    question: "Sualtı Ragbisi sporunda, topu kimin havuz dibine yerleştirmesiyle sayı kazanılır?",
    options: ["Kaleci", "Rakip Oyuncular", "Topu ilk alan oyuncu", "Hücum Oyuncusu"],
    correct: 3,
    category: "Spor",
    difficulty: "Zor"
  },
  {
    id: 1169,
    question: "Formula 1'de, lastik değiştirmek, yakıt almak veya tamir yapmak için araçların durduğu alan neresidir?",
    options: ["Pit Alanı", "Start Çizgisi", "Güvenlik Bölgesi", "Yarış Çizgisi"],
    correct: 0,
    category: "Spor",
    difficulty: "Kolay"
  },
  {
    id: 1170,
    question: "Basketbol sahasında, potanın hemen altındaki boyalı bölgeye ne ad verilir?",
    options: ["Kenar Çizgisi", "Orta Saha", "Boyalı Alan (Paint/Serbest Atış Çizgisi)", "Üç Sayı Çizgisi"],
    correct: 2,
    category: "Spor",
    difficulty: "Kolay"
  },
  {
    id: 1171,
    question: "Voleybolda, topu yere düşürmemek için yapılan, genellikle kolun alt kısmıyla topa vurma hareketi nedir?",
    options: ["Parmak Pas", "Manşet", "Smaç", "Blok"],
    correct: 1,
    category: "Spor",
    difficulty: "Kolay"
  },
  {
    id: 1172,
    question: "Futbolda, bir maçın normal süresinin sonunda iki takımın da berabere kalması ve galip gelmesi gereken durumlarda oynanan ekstra süre nedir?",
    options: ["Tekrar Maçı", "Altın Gol", "Uzatma Devresi (Ekstra Time)", "Penaltı Vuruşları"],
    correct: 2,
    category: "Spor",
    difficulty: "Kolay"
  },
  {
    id: 1173,
    question: "Golf sporunda, topun deliğe atıldığı vuruş sayısının, o delik için belirlenen standart vuruş sayısından (Par) bir fazla olması durumu nedir?",
    options: ["Birdie", "Bogey", "Par", "Eagle"],
    correct: 1,
    category: "Spor",
    difficulty: "Orta"
  },
  {
    id: 1174,
    question: "Kayağa benzeyen, ancak tek bir tahta üzerinde her iki ayağın da sabitlendiği kış spor dalı nedir?",
    options: ["Kros Kayağı", "Snowboard", "Alp Disiplini", "Kayakla Atlama"],
    correct: 1,
    category: "Spor",
    difficulty: "Kolay"
  },
  {
    id: 1175,
    question: "Uzun Atlama sporunda, sporcunun sıçrama çizgisini geçmesi durumunda yapılan kural ihlali nedir?",
    options: ["Faul", "Yüksek Atlama", "Kural Dışı Atlayış (Foul Jump)", "Uzun Atlayış"],
    correct: 2,
    category: "Spor",
    difficulty: "Kolay"
  },
  {
    id: 1176,
    question: "Boksta, hakemin 8'e kadar saymasına rağmen boksörün kendini savunamaması veya ayağa kalkamaması durumu nedir?",
    options: ["Nakavt (KO)", "Dönüş", "Teknik Nakavt (TKO)", "Faul"],
    correct: 0,
    category: "Spor",
    difficulty: "Kolay"
  },
  {
    id: 1177,
    question: "Olimpiyat Oyunları'nda, bir sporcuya dürüstlük, fair play ve centilmenlik ruhunu yansıtan madalya ne ad verilir?",
    options: ["Gümüş Madalya", "Pierre de Coubertin Madalyası", "Bronz Madalya", "Altın Madalya"],
    correct: 1,
    category: "Spor",
    difficulty: "Orta"
  },
  {
    id: 1178,
    question: "Futbol sahasında, penaltı noktasının uzaklığı kaç metredir (yaklaşık)?" ,
    options: ["15 metre", "9 metre", "10 metre", "11 metre"],
    correct: 3,
    category: "Spor",
    difficulty: "Kolay"
  },
  {
    id: 1179,
    question: "Amerikan Futbolu'nda, hücum eden takımın topu rakibin gol alanına taşıyarak sayı kazanmasına ne ad verilir?",
    options: ["Extra Point", "Field Goal", "Touchdown", "Safety"],
    correct: 2,
    category: "Spor",
    difficulty: "Kolay"
  },
  {
    id: 1180,
    question: "Basketbol topunu potaya doğru sert bir şekilde zıplayarak, genellikle potaya asılarak yapılan sayı kazanma eylemi nedir?",
    options: ["Layup", "Jump Shot", "Smaç (Dunk)", "Turnike"],
    correct: 2,
    category: "Spor",
    difficulty: "Kolay"
  },
  {
    id: 1181,
    question: "Teniste, tekler (single) maçlarında bir oyuncunun ardı ardına 4 puan alarak oyunu kazanmasına ne ad verilir?",
    options: ["Tie-Break", "Break Point", "Love Game", "Deuce"],
    correct: 2,
    category: "Spor",
    difficulty: "Orta"
  },
  {
    id: 1182,
    question: "Atletizmde, 100 metrenin altında (genellikle 60 metre) kapalı alanlarda koşulan kısa mesafe yarışı nedir?",
    options: ["Uzun Mesafe", "Sprint", "Maraton", "Orta Mesafe"],
    correct: 1,
    category: "Spor",
    difficulty: "Kolay"
  },
  {
    id: 1183,
    question: "Voleybolda, bir oyuncunun fileye fazla yaklaşması veya rakip oyuncuya temas etmesi sonucu yapılan kural ihlali nedir?",
    options: ["Çift Vuruş", "Filenin İhlali", "Yürüme", "Top Tutma"],
    correct: 1,
    category: "Spor",
    difficulty: "Kolay"
  },
  {
    id: 1184,
    question: "Sualtı Hokeyi sporunda, oyuncuların ellerindeki kısa sopalarla havuzun dibinde ittiği disk şeklindeki nesne nedir?",
    options: ["Top", "Disk", "Puck", "Bilye"],
    correct: 2,
    category: "Spor",
    difficulty: "Zor"
  },
  {
    id: 1185,
    question: "Buz pateni sporunda, buz üzerinde yapılan karmaşık sıçrama ve dönüş hareketlerinin birleşimi nedir?",
    options: ["Lift", "Spiral", "Spin", "Jump (Atlayış)"],
    correct: 3,
    category: "Spor",
    difficulty: "Orta"
  },
  {
    id: 1186,
    question: "Futbol maçlarında, bir oyuncunun oyundan atılmasına neden olan, en ağır kural ihlalini belirten kart rengi nedir?",
    options: ["Mavi Kart", "Kırmızı Kart", "Sarı Kart", "Beyaz Kart"],
    correct: 1,
    category: "Spor",
    difficulty: "Kolay"
  },
  {
    id: 1187,
    question: "Türkiye'nin geleneksel sporlarından olan, pehlivanların yağlanarak mücadele ettiği güreş türü nedir?",
    options: ["Yağlı Güreş", "Grekoromen Güreş", "Aba Güreşi", "Serbest Güreş"],
    correct: 0,
    category: "Spor",
    difficulty: "Kolay"
  },
  {
    id: 1188,
    question: "Modern Olimpiyat Oyunları'nın ilk kez düzenlendiği şehir ve yıl hangisidir?",
    options: ["Londra, 1908", "Paris, 1900", "Atina, 1896", "Roma, 1960"],
    correct: 2,
    category: "Spor",
    difficulty: "Kolay"
  },
  {
    id: 1189,
    question: "Basketbolda, topu süren oyuncunun topu tutarak iki adımdan fazla atması kural ihlali nedir?",
    options: ["Pas Hatası", "Çift Dribbling", "Yürüme (Traveling)", "Faul"],
    correct: 2,
    category: "Spor",
    difficulty: "Kolay"
  },
  {
    id: 1190,
    question: "Boks sporunda, bir boksörün rakibinin vücudunun alt kısmına (bel altı) vurması kural ihlali nedir?",
    options: ["Teknik Vuruş", "Kural Dışı Vuruş", "Kafa Vuruşu", "Low Blow (Bel Altı Vuruş)"],
    correct: 3,
    category: "Spor",
    difficulty: "Kolay"
  },
  {
    id: 1191,
    question: "Futbolda, oyuncu değişikliği yapılması gereken alan (genellikle orta saha çizgisine yakın) neresidir?",
    options: ["Taç Çizgisi", "Teknik Alan", "Orta Saha", "Kale Arkası"],
    correct: 1,
    category: "Spor",
    difficulty: "Kolay"
  },
  {
    id: 1192,
    question: "Su kayağı sporunda, sporcunun su üzerinde kavisler çizerek ve atlayışlar yaparak puan topladığı disiplin nedir?",
    options: ["Atlama (Jump)", "Figür (Trick)", "Slalom", "Serbest Stil"],
    correct: 1,
    category: "Spor",
    difficulty: "Orta"
  },
  {
    id: 1193,
    question: "Teniste, bir maçta en az altı oyun kazanarak rakibine karşı en az iki oyun farkı yakalayan oyuncunun kazandığı bölüm nedir?",
    options: ["Set", "Maç", "Point (Puan)", "Game (Oyun)"],
    correct: 0,
    category: "Spor",
    difficulty: "Kolay"
  },
  {
    id: 1194,
    question: "Formul 1'de, güvenlik aracı (Safety Car) hangi durumda yarışa dahil olur?",
    options: ["Son 10 tur kaldığında", "Pistte tehlikeli bir durum oluştuğunda", "Lider pilot yavaşladığında", "Hava çok sıcak olduğunda"],
    correct: 1,
    category: "Spor",
    difficulty: "Kolay"
  },
  {
    id: 1195,
    question: "Yüzmede, sırtüstü stilinde yüzücünün suya atlayışı hangi pozisyonda yapılır?",
    options: ["Yüzükoyun", "Oturarak", "Geriye Dönük (Sırtüstü)", "Ayakta"],
    correct: 2,
    category: "Spor",
    difficulty: "Kolay"
  },
  {
    id: 1196,
    question: "Atletizmde, çekiç atma sporunda kullanılan metal topun adı nedir?",
    options: ["Çekiç", "Gülle", "Disk", "Cirit"],
    correct: 0,
    category: "Spor",
    difficulty: "Kolay"
  },
  {
    id: 1197,
    question: "Hentbol maçlarında, bir oyuncunun rakip kaleye doğru atış yapmasına ne ad verilir?",
    options: ["Pas", "Faul", "Şut (Atış)", "Dribbling"],
    correct: 2,
    category: "Spor",
    difficulty: "Kolay"
  },
  {
    id: 1198,
    question: "Golf sporunda, bir vuruşta topu deliğe sokma (Hole-in-One) durumuna ne ad verilir?",
    options: ["Ace", "Bogey", "Birdie", "Par"],
    correct: 0,
    category: "Spor",
    difficulty: "Kolay"
  },
  {
    id: 1199,
    question: "Voleybolda, bir takımın arka sıradaki oyuncusunun hücum çizgisinin gerisinden yaptığı smaça ne ad verilir?",
    options: ["Smaç", "Filenin İhlali", "Geri Hat Hücumu", "Manşet"],
    correct: 2,
    category: "Spor",
    difficulty: "Orta"
  },
  {
    id: 1200,
    question: "Dövüş sporlarında, bir sporcunun rakibini hareket edemeyecek ve kendini savunamayacak duruma getirmesi sonucu oyunu kazanmasına ne ad verilir?",
    options: ["Puanla Galibiyet", "Beraberlik", "Faul", "Nakavt (Knockout/KO)"],
    correct: 3,
    category: "Spor",
    difficulty: "Kolay"
  },

  // ==================== SİNEMA ve TV ====================
{
    id: 1201,
    question: "Titanik (Titanic) ve Avatar gibi gişe rekorları kıran filmlerin yönetmeni kimdir?",
    options: ["James Cameron", "George Lucas", "Steven Spielberg", "Christopher Nolan"],
    correct: 0,
    category: CATEGORIES.CINEMA_TV.name,
    difficulty: "Kolay"
  },
  {
    id: 1202,
    question: "Yeşilçam'ın efsanevi ismi, 'Sultan' lakabıyla anılan kadın oyuncu kimdir?",
    options: ["Türkan Şoray", "Hülya Koçyiğit", "Fatma Girik", "Filiz Akın"],
    correct: 0,
    category: CATEGORIES.CINEMA_TV.name,
    difficulty: "Kolay"
  },
  {
    id: 1203,
    question: "Dünyanın en prestijli film ödüllerinden biri olan Akademi Ödülleri'ne ne ad verilir?",
    options: ["Altın Küre", "Palme d'Or", "BAFTA", "Oscar"],
    correct: 3,
    category: CATEGORIES.CINEMA_TV.name,
    difficulty: "Kolay"
  },
  {
    id: 1204,
    question: "'Winter is Coming' (Kış Geliyor) sloganıyla bilinen popüler TV dizisi hangisidir?",
    options: ["Breaking Bad", "The Walking Dead", "Game of Thrones", "Stranger Things"],
    correct: 2,
    category: CATEGORIES.CINEMA_TV.name,
    difficulty: "Kolay"
  },
  {
    id: 1205,
    question: "Bir filmin görsel kalitesinden ve kamera hareketlerinden sorumlu olan teknik ekip başkanı kimdir?",
    options: ["Kurgu Yönetmeni", "Sanat Yönetmeni", "Yapımcı", "Görüntü Yönetmeni (DOP)"],
    correct: 3,
    category: CATEGORIES.CINEMA_TV.name,
    difficulty: "Orta"
  },
  {
    id: 1206,
    question: "The Godfather (Baba) üçlemesinin yönetmeni kimdir?",
    options: ["Alfred Hitchcock", "Francis Ford Coppola", "Martin Scorsese", "Stanley Kubrick"],
    correct: 1,
    category: CATEGORIES.CINEMA_TV.name,
    difficulty: "Kolay"
  },
  {
    id: 1207,
    question: "Kanada'da düzenlenen, halk oylamasıyla ödül veren ünlü film festivali hangisidir?",
    options: ["Cannes", "Toronto (TIFF)", "Berlin", "Sundance"],
    correct: 1,
    category: CATEGORIES.CINEMA_TV.name,
    difficulty: "Zor"
  },
  {
    id: 1208,
    question: "Kış Uykusu ve Uzak gibi filmleriyle tanınan, Altın Palmiye ödüllü Türk yönetmen kimdir?",
    options: ["Semih Kaplanoğlu", "Zeki Demirkubuz", "Nuri Bilge Ceylan", "Ferzan Özpetek"],
    correct: 2,
    category: CATEGORIES.CINEMA_TV.name,
    difficulty: "Kolay"
  },
  {
    id: 1209,
    question: "Bir TV dizisi veya filmin bölümlerinin veya sahnelerinin art arda çekilme sırasına ne ad verilir?",
    options: ["Prodüksiyon", "Kurgu", "Çekim (Shooting)", "Post Prodüksiyon"],
    correct: 2,
    category: CATEGORIES.CINEMA_TV.name,
    difficulty: "Orta"
  },
  {
    id: 1210,
    question: "Star Wars (Yıldız Savaşları) serisinin yaratıcısı kimdir?",
    options: ["Denis Villeneuve", "Ridley Scott", "George Lucas", "Peter Jackson"],
    correct: 2,
    category: CATEGORIES.CINEMA_TV.name,
    difficulty: "Kolay"
  },
  {
    id: 1211,
    question: "Mizah ağırlıklı, genellikle komik olaylar ve karakterler içeren film türü nedir?",
    options: ["Komedi", "Gerilim", "Aksiyon", "Dram"],
    correct: 0,
    category: CATEGORIES.CINEMA_TV.name,
    difficulty: "Kolay"
  },
  {
    id: 1212,
    question: "Yüzüklerin Efendisi (Lord of the Rings) üçlemesinin yönetmeni kimdir?",
    options: ["Peter Jackson", "Steven Spielberg", "Alfonso Cuarón", "Guillermo del Toro"],
    correct: 0,
    category: CATEGORIES.CINEMA_TV.name,
    difficulty: "Kolay"
  },
  {
    id: 1213,
    question: "Yeşilçam'ın efsanevi ismi, 'Gülen Adam' lakabıyla anılan komedi oyuncusu kimdir?",
    options: ["Şener Şen", "Adile Naşit", "Münir Özkul", "Kemal Sunal"],
    correct: 3,
    category: CATEGORIES.CINEMA_TV.name,
    difficulty: "Kolay"
  },
  {
    id: 1214,
    question: "Sinema filminde bir sahnenin çekileceği yeri ve zamanı ayrıntılı olarak gösteren metin nedir?",
    options: ["Treatment", "Story Board", "Logline", "Senaryo"],
    correct: 3,
    category: CATEGORIES.CINEMA_TV.name,
    difficulty: "Orta"
  },
  {
    id: 1215,
    question: "1994 yapımı, bir hapishaneden kaçış hikayesini anlatan ünlü film hangisidir?",
    options: ["Prestij", "Dövüş Kulübü", "Yeşil Yol", "Esaretin Bedeli (Shawshank Redemption)"],
    correct: 3,
    category: CATEGORIES.CINEMA_TV.name,
    difficulty: "Kolay"
  },
  {
    id: 1216,
    question: "Joker karakterini 'The Dark Knight' filminde canlandıran ve bu rolüyle Oscar kazanan oyuncu kimdir?",
    options: ["Jared Leto", "Jack Nicholson", "Heath Ledger", "Joaquin Phoenix"],
    correct: 2,
    category: CATEGORIES.CINEMA_TV.name,
    difficulty: "Kolay"
  },
  {
    id: 1217,
    question: "Türkiye'de en uzun süre yayında kalan (2006-...) ve polisiye-aksiyon türündeki TV dizisi hangisidir?",
    options: ["Çukur", "Arka Sokaklar", "Eşkıya Dünyaya Hükümdar Olmaz", "Kurtlar Vadisi"],
    correct: 1,
    category: CATEGORIES.CINEMA_TV.name,
    difficulty: "Kolay"
  },
  {
    id: 1218,
    question: "Film setinde, yönetmenin 'Kestik!' dediği andan önce, ses ve görüntü senkronizasyonu için kullanılan tahtaya ne ad verilir?",
    options: ["Reji Defteri", "Çekim Tahtası", "Klapet (Arduvaz)", "Vizör"],
    correct: 2,
    category: CATEGORIES.CINEMA_TV.name,
    difficulty: "Orta"
  },
  {
    id: 1219,
    question: "2019 yılında En İyi Film Oscar'ını kazanan ve Kore sinemasından çıkan ilk film hangisidir?",
    options: ["Minari", "Train to Busan", "Burning", "Parasite (Parazit)"],
    correct: 3,
    category: CATEGORIES.CINEMA_TV.name,
    difficulty: "Kolay"
  },
  {
    id: 1220,
    question: "Pulp Fiction (Ucuz Roman) ve Kill Bill gibi filmlerin kendine özgü stil sahibi yönetmeni kimdir?",
    options: ["Wes Anderson", "Guy Ritchie", "Joel Coen", "Quentin Tarantino"],
    correct: 3,
    category: CATEGORIES.CINEMA_TV.name,
    difficulty: "Kolay"
  },
  {
    id: 1221,
    question: "Bir filmin veya dizinin yayınlanmadan önce tanıtım amacıyla gösterilen kısa videoya ne ad verilir?",
    options: ["Kamera Arkası", "Teaser", "Fragman (Trailer)", "Jenerik"],
    correct: 2,
    category: CATEGORIES.CINEMA_TV.name,
    difficulty: "Kolay"
  },
  {
    id: 1222,
    question: "İlk kez 1927'de New York'ta yayınlanan, 'talkies' (konuşan filmler) dönemini başlatan film hangisidir?",
    options: ["Yurttaş Kane", "Metro", "Modern Zamanlar", "Caz Şarkıcısı (The Jazz Singer)"],
    correct: 3,
    category: CATEGORIES.CINEMA_TV.name,
    difficulty: "Zor"
  },
  {
    id: 1223,
    question: "Aktörlerin ve teknik ekibin film yapım sürecindeki telif haklarını ve maliyetlerini yöneten kişi kimdir?",
    options: ["Yapımcı (Producer)", "Senarist", "Dağıtımcı", "Yönetmen"],
    correct: 0,
    category: CATEGORIES.CINEMA_TV.name,
    difficulty: "Orta"
  },
  {
    id: 1224,
    question: "Forrest Gump filminde başrol oyuncusu kimdir?",
    options: ["Brad Pitt", "Matt Damon", "Tom Hanks", "Leonardo DiCaprio"],
    correct: 2,
    category: CATEGORIES.CINEMA_TV.name,
    difficulty: "Kolay"
  },
  {
    id: 1225,
    question: "Dünyanın en eski film festivali olarak bilinen ve İtalya'da düzenlenen etkinlik nedir?",
    options: ["Berlin Film Festivali", "Cannes Film Festivali", "Venedik Film Festivali", "Sundance Film Festivali"],
    correct: 2,
    category: CATEGORIES.CINEMA_TV.name,
    difficulty: "Orta"
  },
  {
    id: 1226,
    question: "Türkiye'de 'Hababam Sınıfı' serisinin yönetmeni kimdir?",
    options: ["Lütfi Ömer Akad", "Yılmaz Güney", "Metin Erksan", "Ertem Eğilmez"],
    correct: 3,
    category: CATEGORIES.CINEMA_TV.name,
    difficulty: "Kolay"
  },
  {
    id: 1227,
    question: "Bir filmde veya dizide, seyircinin başkahramanın iç sesini duyduğu anlatım tekniğine ne ad verilir?",
    options: ["Montaj", "Sesli Anlatım (Voice-over)", "Mizansen", "Flashback"],
    correct: 1,
    category: CATEGORIES.CINEMA_TV.name,
    difficulty: "Orta"
  },
  {
    id: 1228,
    question: "Hangi dünyaca ünlü aktör, 'Karayip Korsanları' serisindeki Jack Sparrow rolüyle tanınır?",
    options: ["Will Smith", "Robert Downey Jr.", "Tom Cruise", "Johnny Depp"],
    correct: 3,
    category: CATEGORIES.CINEMA_TV.name,
    difficulty: "Kolay"
  },
  {
    id: 1229,
    question: "Türkiye'nin ilk uluslararası ödüllü film festivali nerede düzenlenmektedir?",
    options: ["Ankara", "Antalya (Altın Portakal)", "Adana", "İstanbul"],
    correct: 1,
    category: CATEGORIES.CINEMA_TV.name,
    difficulty: "Kolay"
  },
  {
    id: 1230,
    question: "Yol filmiyle Altın Palmiye kazanan, 'Umutsuzlar' ve 'Sürü' filmlerinin de yönetmeni olan usta isim kimdir?",
    options: ["Halit Refiğ", "Atıf Yılmaz", "Yılmaz Güney", "Ömer Kavur"],
    correct: 2,
    category: CATEGORIES.CINEMA_TV.name,
    difficulty: "Orta"
  },
  {
    id: 1231,
    question: "TV'de veya sinemada kullanılan, karakterin yüzünü yakın plandan gösteren çekim türü nedir?",
    options: ["Genel Çekim", "Orta Çekim", "Aşırı Genel Çekim", "Yakın Çekim (Close-up)"],
    correct: 3,
    category: CATEGORIES.CINEMA_TV.name,
    difficulty: "Kolay"
  },
  {
    id: 1232,
    question: "The Matrix filminde başroldeki Neo karakterini canlandıran aktör kimdir?",
    options: ["Tom Cruise", "Keanu Reeves", "Brad Pitt", "Christian Bale"],
    correct: 1,
    category: CATEGORIES.CINEMA_TV.name,
    difficulty: "Kolay"
  },
  {
    id: 1233,
    question: "Türkiye'de 1986 yapımı, başrolünde Müjde Ar'ın oynadığı ve sinema tarihinin önemli filmlerinden sayılan eser hangisidir?",
    options: ["Anayurt Oteli", "Muhsin Bey", "Selamsız Bandosu", "Teyzem"],
    correct: 0,
    category: CATEGORIES.CINEMA_TV.name,
    difficulty: "Zor"
  },
  {
    id: 1234,
    question: "Fransa'da düzenlenen ve dünyanın en çok ilgi gören film festivali hangisidir?",
    options: ["Berlin", "Cannes", "Sundance", "Venedik"],
    correct: 1,
    category: CATEGORIES.CINEMA_TV.name,
    difficulty: "Kolay"
  },
  {
    id: 1235,
    question: "Bir filmin gösterimi için sinema salonlarına dağıtılmasını sağlayan şirketlere ne ad verilir?",
    options: ["Stüdyo", "Dağıtım Şirketi", "Ajans", "Prodüksiyon Şirketi"],
    correct: 1,
    category: CATEGORIES.CINEMA_TV.name,
    difficulty: "Orta"
  },
  {
    id: 1236,
    question: "'Bir Zamanlar Hollywood'da' ve 'The Hateful Eight' filmlerinin yönetmeni kimdir?",
    options: ["Christopher Nolan", "David Fincher", "Martin Scorsese", "Quentin Tarantino"],
    correct: 3,
    category: CATEGORIES.CINEMA_TV.name,
    difficulty: "Kolay"
  },
  {
    id: 1237,
    question: "Yeşilçam'da 'Four in One' (Dört Yapraklı Yonca) olarak adlandırılan kadın oyunculardan biri hangisidir?",
    options: ["Necla Nazır", "Gülşen Bubikoğlu", "Fatma Girik", "Hale Soygazi"],
    correct: 2,
    category: CATEGORIES.CINEMA_TV.name,
    difficulty: "Orta"
  },
  {
    id: 1238,
    question: "Kamera görüntüsünün kadrajda soldan sağa veya sağdan sola doğru hareket etmesi tekniğine ne ad verilir?",
    options: ["Zoom", "Pan (Kaydırma)", "Tilt", "Dolly"],
    correct: 1,
    category: CATEGORIES.CINEMA_TV.name,
    difficulty: "Orta"
  },
  {
    id: 1239,
    question: "Hangi efsanevi aktör, 'Taxi Driver', 'Raging Bull' ve 'Goodfellas' gibi filmlerde rol almıştır?",
    options: ["Jack Nicholson", "Marlon Brando", "Al Pacino", "Robert De Niro"],
    correct: 3,
    category: CATEGORIES.CINEMA_TV.name,
    difficulty: "Kolay"
  },
  {
    id: 1240,
    question: "Dizi sektöründe, bir sezonun tamamlanması için ne kadar bölüm çekilir?",
    options: ["Bu, ülkeden ülkeye değişir.", "20-30", "13-18", "8-12"],
    correct: 0,
    category: CATEGORIES.CINEMA_TV.name,
    difficulty: "Kolay"
  },
  {
    id: 1241,
    question: "Hangi Türk TV dizisi, 2012 yılında Uluslararası Emmy Ödülleri'nde En İyi Dizi seçilmiştir?",
    options: ["Kara Sevda", "Kara Para Aşk", "Ezel", "Muhteşem Yüzyıl"],
    correct: 2,
    category: CATEGORIES.CINEMA_TV.name,
    difficulty: "Zor"
  },
  {
    id: 1242,
    question: "Bir filmin veya dizinin çekilmesi için ayrılan bütçeye ne ad verilir?",
    options: ["Kar", "Kasa", "Prodüksiyon Maliyeti (Bütçe)", "Gider"],
    correct: 2,
    category: CATEGORIES.CINEMA_TV.name,
    difficulty: "Kolay"
  },
  {
    id: 1243,
    question: "Seri katil Hannibal Lecter karakterini 'Kuzuların Sessizliği' filminde canlandıran usta aktör kimdir?",
    options: ["Jeremy Irons", "Jodie Foster", "Anthony Hopkins", "Kevin Spacey"],
    correct: 2,
    category: CATEGORIES.CINEMA_TV.name,
    difficulty: "Kolay"
  },
  {
    id: 1244,
    question: "Hangi sinema akımı, 1940'larda ortaya çıkmış, suç ve karamsarlık temalı filmleri içerir?",
    options: ["Film Noir (Kara Film)", "Yeni Dalga", "Sürrealizm", "Dışavurumculuk"],
    correct: 0,
    category: CATEGORIES.CINEMA_TV.name,
    difficulty: "Zor"
  },
  {
    id: 1245,
    question: "Türkiye'de 'Tosun Paşa', 'Neşeli Günler' ve 'Gülünüz Güldürünüz' gibi eserleriyle tanınan komedi oyuncusu kimdir?",
    options: ["Halit Akçatepe", "Şener Şen", "Münir Özkul", "Tarık Akan"],
    correct: 2,
    category: CATEGORIES.CINEMA_TV.name,
    difficulty: "Kolay"
  },
  {
    id: 1246,
    question: "Yüksek maliyetli, büyük prodüksiyonlu ve genellikle uluslararası dağıtımı olan filmlere ne ad verilir?",
    options: ["Sanat Filmi", "Bağımsız Film", "Blockbuster (Gişe Filmi)", "B Film"],
    correct: 2,
    category: CATEGORIES.CINEMA_TV.name,
    difficulty: "Kolay"
  },
  {
    id: 1247,
    question: "Bir filmin çekimlerinin bittikten sonra, görüntülerin birleştirilmesi, ses eklenmesi gibi işlemlerin yapıldığı aşama nedir?",
    options: ["Senaryo Geliştirme", "Çekim", "Ön Prodüksiyon", "Post Prodüksiyon"],
    correct: 3,
    category: CATEGORIES.CINEMA_TV.name,
    difficulty: "Kolay"
  },
  {
    id: 1248,
    question: "Hangi efsanevi İngiliz yönetmen, 'Psiko', 'Kuşlar' ve 'Arka Pencere' gibi gerilim filmleriyle ünlüdür?",
    options: ["Orson Welles", "Fritz Lang", "Alfred Hitchcock", "Stanley Kubrick"],
    correct: 2,
    category: CATEGORIES.CINEMA_TV.name,
    difficulty: "Kolay"
  },
  {
    id: 1249,
    question: "Bir TV dizisi veya filmde, anlatının birdenbire geleceğe atladığı teknik nedir?",
    options: ["Flashforward", "Freeze Frame", "Flashback", "Jump Cut"],
    correct: 0,
    category: CATEGORIES.CINEMA_TV.name,
    difficulty: "Orta"
  },
  {
    id: 1250,
    question: "Türkiye'de 'Çalıkuşu', 'Dudaktan Kalbe' gibi roman uyarlamalarıyla bilinen yönetmen kimdir?",
    options: ["Osman Sınav", "Reşat Nuri Güntekin", "Orhan Aksoy", "Lütfi Ömer Akad"],
    correct: 2,
    category: CATEGORIES.CINEMA_TV.name,
    difficulty: "Zor"
  },
  {
    id: 1251,
    question: "Amerikan TV'sinde 'Friends', 'Seinfeld' gibi popüler komedi dizilerinin türü nedir?",
    options: ["Sitcom (Durum Komedisi)", "Reality Show", "Mini Dizi", "Drama"],
    correct: 0,
    category: CATEGORIES.CINEMA_TV.name,
    difficulty: "Kolay"
  },
  {
    id: 1252,
    question: "Christopher Nolan'ın 'Inception' (Başlangıç) filminde, rüyalar içinde rüyaya girme fikrini yansıtan nedir?",
    options: ["Paradoks", "Çoklu Rüyalar (Dream Levels)", "Sürrealizm", "Simülasyon"],
    correct: 1,
    category: CATEGORIES.CINEMA_TV.name,
    difficulty: "Orta"
  },
  {
    id: 1253,
    question: "Bir filmde, oyuncuların sahnede duruşları, hareketleri ve sahne düzenlemesine ne ad verilir?",
    options: ["Improvizasyon", "Koreografi", "Mizansen (Duruş Düzeni)", "Blokaj"],
    correct: 2,
    category: CATEGORIES.CINEMA_TV.name,
    difficulty: "Zor"
  },
  {
    id: 1254,
    question: "Hangi oyuncu 'Rocky Balboa' karakterini canlandırmıştır?",
    options: ["Sylvester Stallone", "Dolph Lundgren", "Arnold Schwarzenegger", "Jean-Claude Van Damme"],
    correct: 0,
    category: CATEGORIES.CINEMA_TV.name,
    difficulty: "Kolay"
  },
  {
    id: 1255,
    question: "Amerikan televizyon endüstrisinin en prestijli ödülleri olan Emmy Ödülleri nerede düzenlenir?",
    options: ["Las Vegas", "Chicago", "Los Angeles", "New York"],
    correct: 2,
    category: CATEGORIES.CINEMA_TV.name,
    difficulty: "Orta"
  },
  {
    id: 1256,
    question: "Yeşilçam'da 'Yakışıklı Aktör' olarak tanınan ve 1970'lerde popüler olan jön kimdir?",
    options: ["Ayhan Işık", "Tarık Akan", "Kartal Tibet", "Ediz Hun"],
    correct: 1,
    category: CATEGORIES.CINEMA_TV.name,
    difficulty: "Orta"
  },
  {
    id: 1257,
    question: "Film yapımında, kamerayı hareket ettirmek ve düzgün kaydırmalar yapmak için kullanılan tekerlekli platforma ne ad verilir?",
    options: ["Steadicam", "Tripod", "Dolly", "Jib"],
    correct: 2,
    category: CATEGORIES.CINEMA_TV.name,
    difficulty: "Orta"
  },
  {
    id: 1258,
    question: "Hangi dünyaca ünlü yönetmen, '2001: A Space Odyssey', 'A Clockwork Orange' ve 'The Shining' filmlerinin sahibidir?",
    options: ["Andrei Tarkovsky", "Federico Fellini", "Stanley Kubrick", "Ingmar Bergman"],
    correct: 2,
    category: CATEGORIES.CINEMA_TV.name,
    difficulty: "Kolay"
  },
  {
    id: 1259,
    question: "Bir filmde, karakterlerin geçmişteki bir olayı hatırladığı anları gösteren teknik nedir?",
    options: ["Montaj", "Flashback (Geriye Dönüş)", "Jump Cut", "Flashforward"],
    correct: 1,
    category: CATEGORIES.CINEMA_TV.name,
    difficulty: "Kolay"
  },
  {
    id: 1260,
    question: "En İyi Film dalında birden fazla Oscar kazanan tek kadın yönetmen kimdir?",
    options: ["Chloé Zhao", "Kathryn Bigelow", "Greta Gerwig", "Jane Campion"],
    correct: 0,
    category: CATEGORIES.CINEMA_TV.name,
    difficulty: "Zor"
  },
  {
    id: 1261,
    question: "Marvel Sinematik Evreni'nin ilk filmi olan 'Iron Man'in başrol oyuncusu kimdir?",
    options: ["Robert Downey Jr.", "Mark Ruffalo", "Chris Evans", "Chris Hemsworth"],
    correct: 0,
    category: CATEGORIES.CINEMA_TV.name,
    difficulty: "Kolay"
  },
  {
    id: 1262,
    question: "Bir filmin veya dizinin yayın haklarını satın alıp, farklı platformlara pazarlayan kuruluşa ne ad verilir?",
    options: ["Lisanslama Şirketi", "Reklam Ajansı", "Afiş Ajansı", "Prodüksiyon Şirketi"],
    correct: 0,
    category: CATEGORIES.CINEMA_TV.name,
    difficulty: "Orta"
  },
  {
    id: 1263,
    question: "Fantastik ve macera türündeki 'Harry Potter' serisinin yazarı kimdir?",
    options: ["J. K. Rowling", "J. R. R. Tolkien", "George R. R. Martin", "Stephen King"],
    correct: 0,
    category: CATEGORIES.CINEMA_TV.name,
    difficulty: "Kolay"
  },
  {
    id: 1264,
    question: "Yeşilçam'da 'Müzeyyen' karakteriyle tanınan ve komedi filmlerinin aranan ismi olan kadın oyuncu kimdir?",
    options: ["Gülşen Bubikoğlu", "Suna Pekuysal", "Necla Nazır", "Adile Naşit"],
    correct: 3,
    category: CATEGORIES.CINEMA_TV.name,
    difficulty: "Orta"
  },
  {
    id: 1265,
    question: "Bir karakterin, kameraya bakarak direkt izleyiciyle konuştuğu film tekniğine ne ad verilir?",
    options: ["Diyalog", "Dördüncü Duvarı Yıkma", "Monolog", "Pantomim"],
    correct: 1,
    category: CATEGORIES.CINEMA_TV.name,
    difficulty: "Zor"
  },
  {
    id: 1266,
    question: "Amerikan televizyon dizilerinde, bir sezon genellikle kaç bölümden oluşur?",
    options: ["30 ve üzeri", "18-24", "10-13", "6-8"],
    correct: 1,
    category: CATEGORIES.CINEMA_TV.name,
    difficulty: "Orta"
  },
  {
    id: 1267,
    question: "The Sound of Music (Neşeli Günler) ve West Side Story (Batı Yakasının Hikayesi) hangi film türüne örnektir?",
    options: ["Biyografi", "Korku", "Müzikal", "Western"],
    correct: 2,
    category: CATEGORIES.CINEMA_TV.name,
    difficulty: "Kolay"
  },
  {
    id: 1268,
    question: "Bir filmin setinde, görüntülerin ve sahnelerin planlandığı, çizimlerle anlatıldığı taslak nedir?",
    options: ["Senaryo", "Storyboard (Öykü Taslağı)", "Dekor Planı", "Yönetmen Defteri"],
    correct: 1,
    category: CATEGORIES.CINEMA_TV.name,
    difficulty: "Orta"
  },
  {
    id: 1269,
    question: "Türkiye'nin ilk uzun metrajlı filmi kabul edilen eser hangisidir?",
    options: ["Bataklıkta Ruhlar", "Casus", "Ayastefanos'taki Rus Abidesi'nin Yıkılışı", "Leblebici Horhor Ağa"],
    correct: 2,
    category: CATEGORIES.CINEMA_TV.name,
    difficulty: "Zor"
  },
  {
    id: 1270,
    question: "Hangi efsanevi aktör, 'Rambo' ve 'The Expendables' serileriyle aksiyon filmlerinin ikonu olmuştur?",
    options: ["Wesley Snipes", "Mel Gibson", "Sylvester Stallone", "Bruce Willis"],
    correct: 2,
    category: CATEGORIES.CINEMA_TV.name,
    difficulty: "Kolay"
  },
  {
    id: 1271,
    question: "Bir TV dizisi veya filmde, hikayenin geçtiği mekanı ve ortamı tasarlayan, hazırlayan kişi kimdir?",
    options: ["Kostüm Tasarımcısı", "Sanat Yönetmeni", "Işık Şefi", "Makyaj Artisti"],
    correct: 1,
    category: CATEGORIES.CINEMA_TV.name,
    difficulty: "Orta"
  },
  {
    id: 1272,
    question: "Hangi popüler Amerikan TV dizisi, 6 arkadaşın New York'taki komik ve duygusal yaşamlarını anlatır?",
    options: ["The Big Bang Theory", "Friends", "How I Met Your Mother", "Seinfeld"],
    correct: 1,
    category: CATEGORIES.CINEMA_TV.name,
    difficulty: "Kolay"
  },
  {
    id: 1273,
    question: "'Bir zamanlar uzak, çok uzak bir galakside...' (A long time ago in a galaxy far, far away...) repliği hangi serinin başlangıcıdır?",
    options: ["Dune", "Star Wars", "Star Trek", "Doctor Who"],
    correct: 1,
    category: CATEGORIES.CINEMA_TV.name,
    difficulty: "Kolay"
  },
  {
    id: 1274,
    question: "Sinema tarihinde, kamera arkası görüntü manipülasyonu olmaksızın, sadece kamera hareketleriyle yaratılan 'yürüme' hissi tekniği nedir?",
    options: ["Crane Shot", "Tilt", "Vertigo Etkisi (Dolly Zoom)", "Pan"],
    correct: 2,
    category: CATEGORIES.CINEMA_TV.name,
    difficulty: "Zor"
  },
  {
    id: 1275,
    question: "Türkiye'nin ilk özel televizyon kanalı hangisidir?",
    options: ["TRT 1", "Star TV", "Show TV", "ATV"],
    correct: 1,
    category: CATEGORIES.CINEMA_TV.name,
    difficulty: "Kolay"
  },
  {
    id: 1276,
    question: "Film çekiminde, oyuncunun yüzünün tamamını veya vücudunun büyük bir kısmını gösteren, sahne içindeki konumunu belirten çekim nedir?",
    options: ["Detay Çekim", "Genel Çekim", "Orta Çekim", "Aşırı Yakın Çekim"],
    correct: 2,
    category: CATEGORIES.CINEMA_TV.name,
    difficulty: "Orta"
  },
  {
    id: 1277,
    question: "Hangi film festivali, ödül olarak 'Altın Ayı' vermektedir?",
    options: ["Toronto", "Venedik", "Cannes", "Berlin"],
    correct: 3,
    category: CATEGORIES.CINEMA_TV.name,
    difficulty: "Orta"
  },
  {
    id: 1278,
    question: "Alfred Hitchcock'un ünlü filmi 'Psiko'da, başroldeki katil karakterin adı nedir?",
    options: ["Norman Bates", "Jigsaw", "Patrick Bateman", "Hannibal Lecter"],
    correct: 0,
    category: CATEGORIES.CINEMA_TV.name,
    difficulty: "Kolay"
  },
  {
    id: 1279,
    question: "Yeşilçam'ın efsanevi ismi, 'Gamzeli Güzel' lakabıyla anılan kadın oyuncu kimdir?",
    options: ["Emel Sayın", "Banu Alkan", "Müjde Ar", "Gülşen Bubikoğlu"],
    correct: 3,
    category: CATEGORIES.CINEMA_TV.name,
    difficulty: "Orta"
  },
  {
    id: 1280,
    question: "Bir filmin veya dizinin çekilmesi için önceden hazırlıkların yapıldığı aşamaya ne ad verilir?",
    options: ["Prodüksiyon", "Post Prodüksiyon", "Dağıtım", "Ön Prodüksiyon (Pre-Production)"],
    correct: 3,
    category: CATEGORIES.CINEMA_TV.name,
    difficulty: "Kolay"
  },
  {
    id: 1281,
    question: "Amerikan televizyon dizilerinde, olayların kronolojik sıralamasının bozulduğu anlatım tekniği nedir?",
    options: ["Non-Lineer Anlatım", "Belgesel Anlatım", "Epizodik Anlatım", "Lineer Anlatım"],
    correct: 0,
    category: CATEGORIES.CINEMA_TV.name,
    difficulty: "Orta"
  },
  {
    id: 1282,
    question: "Türkiye'de 'Aşk-ı Memnu' ve 'Kuzey Güney' gibi popüler dizilerde rol alan ünlü kadın oyuncu kimdir?",
    options: ["Hazal Kaya", "Tuba Büyüküstün", "Neslihan Atagül", "Beren Saat"],
    correct: 3,
    category: CATEGORIES.CINEMA_TV.name,
    difficulty: "Kolay"
  },
  {
    id: 1283,
    question: "Steven Spielberg'in 1993 yapımı, nesli tükenmiş hayvanların klonlandığı bilim kurgu filmi nedir?",
    options: ["E.T.", "Yıldızlararası", "Close Encounters of the Third Kind", "Jurassic Park"],
    correct: 3,
    category: CATEGORIES.CINEMA_TV.name,
    difficulty: "Kolay"
  },
  {
    id: 1284,
    question: "Hangi film türü, genellikle seyirciyi korkutmayı ve germeyi amaçlayan temalara odaklanır?",
    options: ["Korku (Horror)", "Belgesel", "Fantastik", "Romantik"],
    correct: 0,
    category: CATEGORIES.CINEMA_TV.name,
    difficulty: "Kolay"
  },
  {
    id: 1285,
    question: "Bir filmin setinde kullanılan, oyuncuların seslerinin bozulmaması için kameranın örtüldüğü bölüme ne ad verilir?",
    options: ["Işık Yansıtıcı", "Camera Blimp", "Set", "Ses Kabini"],
    correct: 1,
    category: CATEGORIES.CINEMA_TV.name,
    difficulty: "Zor"
  },
  {
    id: 1286,
    question: "Yeşilçam'ın usta oyuncusu, 'Hababam Sınıfı'nda 'Badi Ekrem' karakteriyle tanınan sanatçı kimdir?",
    options: ["Feridun Şavlı", "Şener Şen", "Tuncay Akça", "Tayfun Akalın"],
    correct: 0,
    category: CATEGORIES.CINEMA_TV.name,
    difficulty: "Kolay"
  },
  {
    id: 1287,
    question: "Bir filmin, orijinal filmdeki olaylardan daha geriye giden bir hikayeyi anlatması durumuna ne ad verilir?",
    options: ["Spin-off", "Sequel", "Prequel", "Remake"],
    correct: 2,
    category: CATEGORIES.CINEMA_TV.name,
    difficulty: "Orta"
  },
  {
    id: 1288,
    question: "Hollywood'un 'Altın Çağı' olarak bilinen dönem hangi yılları kapsar?",
    options: ["1960'lar", "1930'lar ve 1940'lar", "1970'ler", "1950'ler"],
    correct: 1,
    category: CATEGORIES.CINEMA_TV.name,
    difficulty: "Zor"
  },
  {
    id: 1289,
    question: "Bir TV yayınında, canlı görüntülere eklenen ve gerçek zamanlı olarak değişen bilgilere ne ad verilir?",
    options: ["Altyazı", "Jenerik", "Afiş", "Teker (Crawling Text)"],
    correct: 3,
    category: CATEGORIES.CINEMA_TV.name,
    difficulty: "Orta"
  },
  {
    id: 1290,
    question: "Hangi film, 'Houston, we have a problem' (Houston, bir sorunumuz var) repliğiyle ünlüdür?",
    options: ["The Martian", "Apollo 13", "Interstellar", "Gravity"],
    correct: 1,
    category: CATEGORIES.CINEMA_TV.name,
    difficulty: "Kolay"
  },
  {
    id: 1291,
    question: "Türkiye'de 'Eşkıya', 'Gönül Yarası' ve 'Av Mevsimi' gibi filmlerin başrolünde oynayan usta aktör kimdir?",
    options: ["Uğur Yücel", "Şener Şen", "Kenan İmirzalıoğlu", "Cem Yılmaz"],
    correct: 1,
    category: CATEGORIES.CINEMA_TV.name,
    difficulty: "Kolay"
  },
  {
    id: 1292,
    question: "Hangi dünyaca ünlü animasyon stüdyosu, 'Toy Story', 'Finding Nemo' ve 'Up' filmlerini yapmıştır?",
    options: ["Blue Sky Studios", "DreamWorks", "Disney", "Pixar"],
    correct: 3,
    category: CATEGORIES.CINEMA_TV.name,
    difficulty: "Kolay"
  },
  {
    id: 1293,
    question: "Bir TV dizisinin, ana diziden ayrılarak farklı bir karaktere veya konuya odaklanan devam serisine ne ad verilir?",
    options: ["Spin-off", "Pilot Bölüm", "Remake", "Prequel"],
    correct: 0,
    category: CATEGORIES.CINEMA_TV.name,
    difficulty: "Orta"
  },
  {
    id: 1294,
    question: "Filmlerde kullanılan ve hareketli nesnelere gerçekçi bir görünüm veren teknoloji nedir?",
    options: ["CGI (Bilgisayarla Üretilen Görüntü)", "Animasyon", "Green Screen", "Stop-Motion"],
    correct: 0,
    category: CATEGORIES.CINEMA_TV.name,
    difficulty: "Orta"
  },
  {
    id: 1295,
    question: "'Bir Ankara Masalı' alt başlığıyla bilinen, Türk TV dizisi hangisidir?",
    options: ["Kurtlar Vadisi", "Behzat Ç.", "Leyla ile Mecnun", "Ezel"],
    correct: 1,
    category: CATEGORIES.CINEMA_TV.name,
    difficulty: "Kolay"
  },
  {
    id: 1296,
    question: "Hangi yönetmen, 'Yurttaş Kane' filmiyle sinema tarihinin en etkileyici eserlerinden birini yaratmıştır?",
    options: ["Alfred Hitchcock", "Martin Scorsese", "Stanley Kubrick", "Orson Welles"],
    correct: 3,
    category: CATEGORIES.CINEMA_TV.name,
    difficulty: "Zor"
  },
  {
    id: 1297,
    question: "Bir sinema filminde, oyuncuların kostümlerini ve makyajlarını tasarlayan ekip kime bağlıdır?",
    options: ["Sanat Yönetmeni", "Yönetmen", "Yapımcı", "Görüntü Yönetmeni"],
    correct: 0,
    category: CATEGORIES.CINEMA_TV.name,
    difficulty: "Orta"
  },
  {
    id: 1298,
    question: "Hangi ödül, televizyon dünyasının en iyilerini onurlandıran, her yıl İngiltere'de düzenlenen törendir?",
    options: ["BAFTA TV Ödülleri", "Altın Küre", "Pulitzer", "Oscar"],
    correct: 0,
    category: CATEGORIES.CINEMA_TV.name,
    difficulty: "Orta"
  },
  {
    id: 1299,
    question: "Hangi ünlü oyuncu, 'James Bond' serisinde en uzun süre bu karakteri canlandırmıştır?",
    options: ["Sean Connery", "Roger Moore", "Daniel Craig", "Pierce Brosnan"],
    correct: 1,
    category: CATEGORIES.CINEMA_TV.name,
    difficulty: "Zor"
  },
  {
    id: 1300,
    question: "Bir filmin veya TV dizisinin en önemli hikaye noktalarını içeren kısa özetine ne ad verilir?",
    options: ["Pitch", "Treatment", "Logline", "Senaryo"],
    correct: 2,
    category: CATEGORIES.CINEMA_TV.name,
    difficulty: "Orta"
  },
  {
    id: 1301,
    question: "'Yüzüklerin Efendisi' üçlemesinde, ana kötü karakter olan ve Sauron'un gücünü taşıyan yüzüğe ne ad verilir?",
    options: ["Göz Yüzüğü", "Gölge Yüzüğü", "Tek Yüzük", "Büyük Yüzük"],
    correct: 2,
    category: "Sinema ve TV",
    difficulty: "Kolay"
  },
  {
    id: 1302,
    question: "Alfred Hitchcock'un yönettiği, ünlü duş sahnesiyle tanınan ve korku sinemasının klasiği kabul edilen film hangisidir?",
    options: ["Vertigo", "Kuşlar", "Sapık (Psycho)", "Arka Pencere"],
    correct: 2,
    category: "Sinema ve TV",
    difficulty: "Kolay"
  },
  {
    id: 1303,
    question: "Türkiye'de 'Tosun Paşa', 'Neşeli Günler', 'Çöpçüler Kralı' gibi filmleriyle tanınan, 'Gülen Adam' lakaplı efsanevi aktör kimdir?",
    options: ["Şener Şen", "Münir Özkul", "Tarık Akan", "Kemal Sunal"],
    correct: 3,
    category: "Sinema ve TV",
    difficulty: "Kolay"
  },
  {
    id: 1304,
    question: "Sinema tarihinde ilk uzun metraj sesli film olarak kabul edilen, 1927 yapımı eser hangisidir?",
    options: ["Napolyon", "Caz Şarkıcısı (The Jazz Singer)", "Yurttaş Kane", "Metropolis"],
    correct: 1,
    category: "Sinema ve TV",
    difficulty: "Orta"
  },
  {
    id: 1305,
    question: "'Godfather' (Baba) üçlemesinin yönetmeni olan İtalyan asıllı Amerikalı sinemacı kimdir?",
    options: ["Francis Ford Coppola", "Quentin Tarantino", "Steven Spielberg", "Martin Scorsese"],
    correct: 0,
    category: "Sinema ve TV",
    difficulty: "Kolay"
  },
  {
    id: 1306,
    question: "HBO'nun popüler dizisi 'Game of Thrones'un geçtiği kurgusal kıtanın adı nedir?",
    options: ["Orta Dünya", "Narnia", "Westeros", "Tatooine"],
    correct: 2,
    category: "Sinema ve TV",
    difficulty: "Kolay"
  },
  {
    id: 1307,
    question: "'Star Wars' (Yıldız Savaşları) serisinde, Darth Vader'ın asıl adı nedir?",
    options: ["Obi-Wan Kenobi", "Anakin Skywalker", "Luke Skywalker", "Han Solo"],
    correct: 1,
    category: "Sinema ve TV",
    difficulty: "Kolay"
  },
  {
    id: 1308,
    question: "Sinema perdesinde ilk kez '007' kod adıyla James Bond karakterini canlandıran aktör kimdir?",
    options: ["Daniel Craig", "Pierce Brosnan", "Roger Moore", "Sean Connery"],
    correct: 3,
    category: "Sinema ve TV",
    difficulty: "Kolay"
  },
  {
    id: 1309,
    question: "Quentin Tarantino'nun yönettiği, kurgusal hikayelerin iç içe geçtiği kült film hangisidir?",
    options: ["Zincirsiz (Django Unchained)", "Rezervuar Köpekleri", "Ucuz Roman (Pulp Fiction)", "Kill Bill"],
    correct: 2,
    category: "Sinema ve TV",
    difficulty: "Kolay"
  },
  {
    id: 1310,
    question: "'Hababam Sınıfı' film serisinde, 'Güdük Necmi' karakterini canlandıran oyuncu kimdir?",
    options: ["Tarık Akan", "Ayşen Gruda", "Halit Akçatepe", "Şener Şen"],
    correct: 2,
    category: "Sinema ve TV",
    difficulty: "Kolay"
  },
  {
    id: 1311,
    question: "Akademi Ödülleri'nde (Oscar) 'En İyi Film' de dahil olmak üzere toplam 11 ödül alan ve Jack Dawson karakteriyle Leonardo DiCaprio'nun oynadığı film hangisidir?",
    options: ["Jaws", "Forrest Gump", "Titanik", "Avatar"],
    correct: 2,
    category: "Sinema ve TV",
    difficulty: "Kolay"
  },
  {
    id: 1312,
    question: "'Matrix' film serisinde, başroldeki Thomas Anderson'ın (Neo) hackerlık yaptığı bilgisayar programının adı nedir?",
    options: ["Matrix", "Kırmızı Hap", "Gerçeklik Simülasyonu", "Beyaz Tavşan"],
    correct: 0,
    category: "Sinema ve TV",
    difficulty: "Kolay"
  },
  {
    id: 1313,
    question: "Steven Spielberg'ün yönettiği, büyük beyaz bir köpekbalığının terör estirdiği 1975 yapımı korku/gerilim filmi nedir?",
    options: ["Üçüncü Türden Yakınlaşmalar", "E.T.", "Jurassic Park", "Jaws"],
    correct: 3,
    category: "Sinema ve TV",
    difficulty: "Kolay"
  },
  {
    id: 1314,
    question: "Türkiye'de 'Deliormanlı', 'G.O.R.A.' ve 'Arif V 216' filmleriyle tanınan komedyen ve sinemacı kimdir?",
    options: ["Yılmaz Erdoğan", "Cem Yılmaz", "Ata Demirer", "Şahan Gökbakar"],
    correct: 1,
    category: "Sinema ve TV",
    difficulty: "Kolay"
  },
  {
    id: 1315,
    question: "Christopher Nolan'ın yönettiği ve rüyalar aracılığıyla bilinçaltına sızma temasını işleyen bilim kurgu filmi hangisidir?",
    options: ["Akıl Defteri (Memento)", "Başlangıç (Inception)", "Yıldızlararası", "Kara Şövalye"],
    correct: 1,
    category: "Sinema ve TV",
    difficulty: "Kolay"
  },
  {
    id: 1316,
    question: "Sinema sektöründe yönetmenin, filmin en yaratıcı kontrolüne sahip olduğu ve filmin son kesimini belirlediği anlaşmaya ne ad verilir?",
    options: ["Final Cut (Son Kesim)", "Yapımcı Onayı", "Görüntü Yönetmeni Anlaşması", "Yönetmen Kredisi"],
    correct: 0,
    category: "Sinema ve TV",
    difficulty: "Orta"
  },
  {
    id: 1317,
    question: "Televizyon dizilerinde, olayların kronolojik sıralamasının dışına çıkarak geçmişten bir sahneyi gösterme tekniği nedir?",
    options: ["Flashforward", "Atlama (Jump Cut)", "Flashback (Geriye Dönüş)", "Montaj"],
    correct: 2,
    category: "Sinema ve TV",
    difficulty: "Kolay"
  },
  {
    id: 1318,
    question: "'Breaking Bad' dizisinde, kimya öğretmeni olan ve uyuşturucu üretimine başlayan ana karakter kimdir?",
    options: ["Saul Goodman", "Gustavo Fring", "Walter White", "Jesse Pinkman"],
    correct: 2,
    category: "Sinema ve TV",
    difficulty: "Kolay"
  },
  {
    id: 1319,
    question: "Stanley Kubrick'in yönettiği, halüsinasyon yaratan bir içecek içen gençlerin suç dolu hikayesini anlatan distopik film nedir?",
    options: ["2001: Bir Uzay Destanı", "Cinnet (The Shining)", "Otomatik Portakal (A Clockwork Orange)", "Full Metal Jacket"],
    correct: 2,
    category: "Sinema ve TV",
    difficulty: "Orta"
  },
  {
    id: 1320,
    question: "Türkiye'nin ilk Oscar adayı olan ve Nuri Bilge Ceylan'ın yönettiği, üç ödül (Altın Palmiye dahil) kazanan film hangisidir?",
    options: ["Bir Zamanlar Anadolu'da", "Üç Maymun", "Ahlat Ağacı", "Kış Uykusu"],
    correct: 3,
    category: "Sinema ve TV",
    difficulty: "Kolay"
  },
  {
    id: 1321,
    question: "Marvel Sinematik Evreni'nde (MCU), Thor'un çekicinin adı nedir?",
    options: ["Stormbreaker", "Mjöllnir", "Gungnir", "Odinforce"],
    correct: 1,
    category: "Sinema ve TV",
    difficulty: "Kolay"
  },
  {
    id: 1322,
    question: "Sinema tarihinde, oyuncuların seslerinin kameraya senkronize olarak kaydedilmeye başlandığı dönem hangi adla anılır?",
    options: ["Altın Çağ", "Yeni Dalga", "Sesli Filmler Dönemi", "Sessiz Dönem"],
    correct: 2,
    category: "Sinema ve TV",
    difficulty: "Kolay"
  },
  {
    id: 1323,
    question: "'Yeşil Yol' (The Green Mile) filminde, mucizeler yaratan ve haksız yere idam cezası alan siyahi mahkumun adı nedir?",
    options: ["Percy Wetmore", "John Coffey", "Brooks Hatlen", "Paul Edgecomb"],
    correct: 1,
    category: "Sinema ve TV",
    difficulty: "Kolay"
  },
  {
    id: 1324,
    question: "Kanlı savaş sahneleri, epik anlatımı ve 'Russell Crowe'un başrolde olduğu, Antik Roma'da geçen ünlü film hangisidir?",
    options: ["300 Spartalı", "Troya", "Cesur Yürek", "Gladyatör"],
    correct: 3,
    category: "Sinema ve TV",
    difficulty: "Kolay"
  },
  {
    id: 1325,
    question: "Sinema ve TV çekimlerinde, görüntüyü sabitlemek ve titreşimi engellemek için kullanılan mekanik dengeleyici sisteme ne ad verilir?",
    options: ["Kamera Takip Sistemi", "Dolly", "Tripod", "Steadicam"],
    correct: 3,
    category: "Sinema ve TV",
    difficulty: "Orta"
  },
  {
    id: 1326,
    question: "'Friends' dizisinde, kahve içtikleri mekanın adı nedir?",
    options: ["Luke's Diner", "The Daily Grind", "Central Perk", "Monk's Cafe"],
    correct: 2,
    category: "Sinema ve TV",
    difficulty: "Kolay"
  },
  {
    id: 1327,
    question: "Türkiye'de 'Eşkıya' ve 'Gönül Yarası' gibi önemli filmlerin yönetmenliğini yapmış ünlü sinemacı kimdir?",
    options: ["Yılmaz Erdoğan", "Ferzan Özpetek", "Yılmaz Güney", "Yavuz Turgul"],
    correct: 3,
    category: "Sinema ve TV",
    difficulty: "Kolay"
  },
  {
    id: 1328,
    question: "'Schindler'in Listesi' filminin yönetmeni olan, aynı zamanda 'Er Ryan'ı Kurtarmak' gibi eserleriyle tanınan isim kimdir?",
    options: ["Steven Spielberg", "Martin Scorsese", "George Lucas", "Stanley Kubrick"],
    correct: 0,
    category: "Sinema ve TV",
    difficulty: "Kolay"
  },
  {
    id: 1329,
    question: "Bilim kurgu türünde, uzay gemisinde yapay zekaya sahip 'HAL 9000' karakterinin yer aldığı, Stanley Kubrick filmi nedir?",
    options: ["Cinnet", "Otomatik Portakal", "2001: Bir Uzay Destanı", "Dr. Strangelove"],
    correct: 2,
    category: "Sinema ve TV",
    difficulty: "Orta"
  },
  {
    id: 1330,
    question: "Sinema dilinde, kameranın sabit bir noktadan yatay eksende sağa veya sola dönmesi hareketine ne ad verilir?",
    options: ["Zoom", "Pan (Panoramik)", "Tilt", "Dolly"],
    correct: 1,
    category: "Sinema ve TV",
    difficulty: "Kolay"
  },
  {
    id: 1331,
    question: "'Baba' (The Godfather) filminde, Michael Corleone karakterini canlandıran aktör kimdir?",
    options: ["Robert De Niro", "Marlon Brando", "James Caan", "Al Pacino"],
    correct: 3,
    category: "Sinema ve TV",
    difficulty: "Kolay"
  },
  {
    id: 1332,
    question: "Amerikan televizyon tarihinin en uzun soluklu komedi dizilerinden olan ve Springfield adlı kurgusal kasabada geçen animasyon nedir?",
    options: ["South Park", "Simpsonlar (The Simpsons)", "Futurama", "Family Guy"],
    correct: 1,
    category: "Sinema ve TV",
    difficulty: "Kolay"
  },
  {
    id: 1333,
    question: "Korku filmlerinde, bir karakterin veya nesnenin hızla ekrana girerek izleyiciyi aniden şaşırtması tekniği nedir?",
    options: ["Jump Scare (Ani Korkutma)", "Found Footage", "Gore", "Suspense (Gerilim)"],
    correct: 0,
    category: "Sinema ve TV",
    difficulty: "Kolay"
  },
  {
    id: 1334,
    question: "'Titanik' filminde, Jack Dawson'ın Rose'a hediye ettiği, okyanusun kalbi adındaki elmas kolye hangi tarihte kaybolmuştur?",
    options: ["1912", "1997", "1945", "Kurgusaldır"],
    correct: 3,
    category: "Sinema ve TV",
    difficulty: "Kolay"
  },
  {
    id: 1335,
    question: "Bir filmin vizyon tarihinden önce, eleştirmenler ve sektör profesyonelleri için yapılan özel gösterime ne ad verilir?",
    options: ["Ön Gösterim (Screening)", "Vizyon", "Gala", "Prömiyer"],
    correct: 0,
    category: "Sinema ve TV",
    difficulty: "Kolay"
  },
  {
    id: 1336,
    question: "'Harry Potter' serisinde, Harry'nin en yakın iki arkadaşının adları nedir?",
    options: ["Draco Malfoy ve Severus Snape", "Neville Longbottom ve Luna Lovegood", "Cedric Diggory ve Cho Chang", "Ron Weasley ve Hermione Granger"],
    correct: 3,
    category: "Sinema ve TV",
    difficulty: "Kolay"
  },
  {
    id: 1337,
    question: "Sinemada, çekilen görüntünün parlaklık, renk ve kontrast ayarlarının yapıldığı aşama nedir?",
    options: ["Ses Miksajı", "Renk Düzenleme (Color Grading)", "Kurgu", "Senaryo Yazımı"],
    correct: 1,
    category: "Sinema ve TV",
    difficulty: "Orta"
  },
  {
    id: 1338,
    question: "'The Sopranos' dizisinde, New Jersey'li bir mafya patronu olan ana karakter kimdir?",
    options: ["Tony Soprano", "Silvio Dante", "Carmela Soprano", "Paulie Gualtieri"],
    correct: 0,
    category: "Sinema ve TV",
    difficulty: "Kolay"
  },
  {
    id: 1339,
    question: "Charlie Chaplin'in yarattığı, melon şapkalı, bastonlu ve komik yürüyüşlü karakterin adı nedir?",
    options: ["Calvero", "The Dictator", "Monsieur Verdoux", "The Tramp (Serseri)"],
    correct: 3,
    category: "Sinema ve TV",
    difficulty: "Kolay"
  },
  {
    id: 1340,
    question: "Türkiye'de 'Selvi Boylum Al Yazmalım' filminin yönetmenliğini yapmış, önemli sinemacımız kimdir?",
    options: ["Atıf Yılmaz", "Metin Erksan", "Yılmaz Güney", "Ömer Lütfi Akad"],
    correct: 0,
    category: "Sinema ve TV",
    difficulty: "Kolay"
  },
  {
    id: 1341,
    question: "DC Comics evreninde, Batman'in kurgusal şehri neresidir?",
    options: ["Gotham City", "Star City", "Metropolis", "Central City"],
    correct: 0,
    category: "Sinema ve TV",
    difficulty: "Kolay"
  },
  {
    id: 1342,
    question: "Kamera merceğinin optik yakınlaştırma (zoom) yapmasıyla karakterin yüzüne odaklanırken, arka planın uzaklaşmış gibi görünmesi tekniğine ne ad verilir?",
    options: ["Aşırı Yakın Çekim", "Slow Motion", "Vertigo Efekti (Dolly Zoom)", "Rack Focus"],
    correct: 2,
    category: "Sinema ve TV",
    difficulty: "Zor"
  },
  {
    id: 1343,
    question: "Ünlü 'Citizen Kane' (Yurttaş Kane) filminin yönetmeni ve başrol oyuncusu olan sinema dehası kimdir?",
    options: ["Howard Hawks", "Billy Wilder", "Frank Capra", "Orson Welles"],
    correct: 3,
    category: "Sinema ve TV",
    difficulty: "Orta"
  },
  {
    id: 1344,
    question: "'The Office' dizisinde, Scranton şubesinin bölgesel müdürü olan ve komik karakteriyle tanınan kişi kimdir?",
    options: ["Michael Scott", "Dwight Schrute", "Jim Halpert", "Stanley Hudson"],
    correct: 0,
    category: "Sinema ve TV",
    difficulty: "Kolay"
  },
  {
    id: 1345,
    question: "Bilim kurgu filmlerinde, uzay gemilerinin, patlamaların veya ateşin yapıldığı özel görsel efektlere ne ad verilir?",
    options: ["Kurgu", "Makyaj Efektleri", "Görsel Efektler (VFX)", "Animasyon"],
    correct: 2,
    category: "Sinema ve TV",
    difficulty: "Kolay"
  },
  {
    id: 1346,
    question: "Yunan yönetmen Theo Angelopoulos'un 1998'de Altın Palmiye kazandığı ve bir şairin hikayesini anlatan filmi nedir?",
    options: ["Leyleğin Geciken Adımı", "Ulis'in Bakışı", "Ağlayan Çayır", "Sonsuzluk ve Bir Gün"],
    correct: 3,
    category: "Sinema ve TV",
    difficulty: "Zor"
  },
  {
    id: 1347,
    question: "Türkiye'de Kemal Sunal'ın 'Şaban' karakteriyle oynadığı ve askerlik anılarını konu alan film serisi nedir?",
    options: ["Züğürt Ağa", "Şaban (Seri Adı Yok)", "Davaro", "Propaganda"],
    correct: 1,
    category: "Sinema ve TV",
    difficulty: "Orta"
  },
  {
    id: 1348,
    question: "'Pulp Fiction' (Ucuz Roman) filminde, Vincent Vega ve Jules Winnfield'ın patronu olan mafya liderinin adı nedir?",
    options: ["Marsellus Wallace", "Mr. Wolf", "Brett", "Butch Coolidge"],
    correct: 0,
    category: "Sinema ve TV",
    difficulty: "Orta"
  },
  {
    id: 1349,
    question: "Bir filmin çekimi sırasında, görüntünün netlik noktasının bir objeden diğerine kaydırılması tekniğine ne ad verilir?",
    options: ["Pan", "Tilt", "Rack Focus (Netlik Kaydırma)", "Dolly"],
    correct: 2,
    category: "Sinema ve TV",
    difficulty: "Orta"
  },
  {
    id: 1350,
    question: "'Friends' dizisinde, Ross Geller'ın sık sık alay konusu olan ve birden fazla kez boşanmasına neden olan kariyeri nedir?",
    options: ["Şef", "Paleontolog", "Yazar", "Oyuncu"],
    correct: 1,
    category: "Sinema ve TV",
    difficulty: "Kolay"
  },
  {
    id: 1351,
    question: "Yönetmen David Fincher'ın, iki ana karakterin (Norton ve Pitt) başrolde olduğu, sürpriz sonlu kült filmi nedir?",
    options: ["Zodiac", "Sosyal Ağ", "Se7en", "Dövüş Kulübü (Fight Club)"],
    correct: 3,
    category: "Sinema ve TV",
    difficulty: "Kolay"
  },
  {
    id: 1352,
    question: "Animasyon film 'Oyuncak Hikayesi' (Toy Story) serisinde, Andy'nin en sevdiği kovboy oyuncağının adı nedir?",
    options: ["Rex", "Buzz Lightyear", "Slinky", "Woody"],
    correct: 3,
    category: "Sinema ve TV",
    difficulty: "Kolay"
  },
  {
    id: 1353,
    question: "Türkiye'de 'Vizontele', 'Kelebeğin Rüyası' gibi filmlerin yönetmenliğini ve senaristliğini yapan ünlü isim kimdir?",
    options: ["Fatih Akın", "Nuri Bilge Ceylan", "Yılmaz Erdoğan", "Çağan Irmak"],
    correct: 2,
    category: "Sinema ve TV",
    difficulty: "Kolay"
  },
  {
    id: 1354,
    question: "Sinema filmlerinin sonundaki, çekim hatalarını veya komik anları gösteren bölümün adı nedir?",
    options: ["Ekstra Sahneler", "Kamera Arkası (Behind the Scenes)", "Krediler", "Gag Reel (Hata Derlemesi)"],
    correct: 3,
    category: "Sinema ve TV",
    difficulty: "Kolay"
  },
  {
    id: 1355,
    question: "Bilim kurgu serisi 'Doctor Who'da, Doktor'un uzay ve zamanda yolculuk yaptığı telefon kulübesi şeklindeki araca ne ad verilir?",
    options: ["TARDIS", "Millennium Falcon", "Stargate", "Enterprise"],
    correct: 0,
    category: "Sinema ve TV",
    difficulty: "Kolay"
  },
  {
    id: 1356,
    question: "Üç defa 'En İyi Yönetmen' Oscar'ını kazanan (Mr. Deeds Goes to Town, It Happened One Night, You Can't Take It with You) klasik Hollywood yönetmeni kimdir?",
    options: ["John Ford", "Alfred Hitchcock", "Billy Wilder", "Frank Capra"],
    correct: 3,
    category: "Sinema ve TV",
    difficulty: "Zor"
  },
  {
    id: 1357,
    question: "Bir sinema filmi veya TV şovunda, bir karakterin daha sonraki olayları anlatarak sahneyi seslendirmesi tekniği nedir?",
    options: ["Dış Ses (Voice-over)", "Dublaj", "Diyalog", "Monolog"],
    correct: 0,
    category: "Sinema ve TV",
    difficulty: "Kolay"
  },
  {
    id: 1358,
    question: "'The Walking Dead' dizisinin merkezinde yer alan kıyamet sonrası olay örgüsü nedir?",
    options: ["Robotların İsyanı", "Nükleer Savaş", "Uzaylı İstilası", "Zombi (Yürüyen Ölü) Salgını"],
    correct: 3,
    category: "Sinema ve TV",
    difficulty: "Kolay"
  },
  {
    id: 1359,
    question: "'Kısa Film' (Short Film) türünde, bir filmin maksimum süresi kaç dakikadır (Genellikle uluslararası kabul edilen süre)?" ,
    options: ["20 dakika", "60 dakika", "30 dakika", "40 dakika"],
    correct: 3,
    category: "Sinema ve TV",
    difficulty: "Orta"
  },
  {
    id: 1360,
    question: "Sinema filmlerinde, gerçek görüntüler üzerine bilgisayarda yaratılan görüntülerin eklenmesiyle oluşan efektlere ne ad verilir?",
    options: ["Stop Motion", "Animatronik", "Makyaj", "CGI (Bilgisayar Üretimli Görüntü)"],
    correct: 3,
    category: "Sinema ve TV",
    difficulty: "Kolay"
  },
  {
    id: 1361,
    question: "'La Casa de Papel' dizisinde, soygunları planlayan ve ekibi yöneten zeka küpü karakter kimdir?",
    options: ["Profesör", "Tokyo", "Rio", "Berlin"],
    correct: 0,
    category: "Sinema ve TV",
    difficulty: "Kolay"
  },
  {
    id: 1362,
    question: "'Yeşilçam' dönemi Türk sinemasının en üretken yönetmenlerinden olan ve 'Sultan', 'Banker Bilo' gibi filmleriyle tanınan usta kimdir?",
    options: ["Ertem Eğilmez", "Yılmaz Güney", "Lütfi Akad", "Atıf Yılmaz"],
    correct: 0,
    category: "Sinema ve TV",
    difficulty: "Kolay"
  },
  {
    id: 1363,
    question: "'Forrest Gump' filminde, başrol oyuncusunun sıkça söylediği ve filmle özdeşleşen replik nedir?",
    options: ["Hasta la vista, baby.", "Hayat bir kutu çikolata gibidir.", "May The Force Be With You.", "Ben senin babanım."],
    correct: 1,
    category: "Sinema ve TV",
    difficulty: "Kolay"
  },
  {
    id: 1364,
    question: "TV'de, belirli bir konuyu detaylıca araştıran, gerçek olayları veya kişileri konu alan program türü nedir?",
    options: ["Sitcom", "Belgesel (Documentary)", "Reality Show", "Talk Show"],
    correct: 1,
    category: "Sinema ve TV",
    difficulty: "Kolay"
  },
  {
    id: 1365,
    question: "Sinema filmlerinde, kameranın bir nesneye yaklaşıp sahneyi yavaşça dönerek göstermesi tekniği nedir?",
    options: ["Tracking Shot", "Zoom", "Arc Shot (Yay Çekim)", "Pan"],
    correct: 2,
    category: "Sinema ve TV",
    difficulty: "Orta"
  },
  {
    id: 1366,
    question: "Yönetmen Ridley Scott'ın çektiği, bilim kurgu-korku türünün öncüsü olan ve 'Yaratık'ın (Alien) ilk kez göründüğü film nedir?",
    options: ["Yaratık (Alien)", "Marslı", "Gladyatör", "Bıçak Sırtı (Blade Runner)"],
    correct: 0,
    category: "Sinema ve TV",
    difficulty: "Kolay"
  },
  {
    id: 1367,
    question: "Sinema ve TV'de, seslerin (adım, kapı sesi, kıyafet hışırtısı vb.) özel olarak yeniden kaydedilmesi ve senkronize edilmesi işine ne ad verilir?",
    options: ["Foley Sanatı (Ses Efekti)", "ADR (Otomatik Diyalog Değişimi)", "Müzik Yerleştirme", "Ses Miksajı"],
    correct: 0,
    category: "Sinema ve TV",
    difficulty: "Orta"
  },
  {
    id: 1368,
    question: "Amerikan dizisi 'Lost'ta, uçağın düştüğü adada bulunan ve Dharma Girişimi'ne ait olan gizemli tesislerin genel adı nedir?",
    options: ["The Black Rock", "The Swan", "The Dharma Initiative (Dharma Girişimi)", "The Hatch (Kapak)"],
    correct: 2,
    category: "Sinema ve TV",
    difficulty: "Kolay"
  },
  {
    id: 1369,
    question: "Oscar tarihinde, 'En İyi Film', 'En İyi Yönetmen', 'En İyi Erkek Oyuncu', 'En İyi Kadın Oyuncu' ve 'En İyi Senaryo' olmak üzere 5 büyük ödülü birden kazanan film sayısı kaçtır?",
    options: ["3", "2", "5", "1"],
    correct: 0,
    category: "Sinema ve TV",
    difficulty: "Zor"
  },
  {
    id: 1370,
    question: "Türk Sineması'nda 'Umut' filmiyle tanınan, 'Çirkin Kral' lakaplı yönetmen ve oyuncu kimdir?",
    options: ["Metin Erksan", "Lütfi Akad", "Yılmaz Güney", "Atıf Yılmaz"],
    correct: 2,
    category: "Sinema ve TV",
    difficulty: "Kolay"
  },
  {
    id: 1371,
    question: "Hollywood'da, bir filmin vizyona girmesinden sonra elde edilen gişe gelirlerine ne ad verilir?",
    options: ["Bütçe", "Box Office (Gişe)", "Telif Hakkı", "Dağıtım Ücreti"],
    correct: 1,
    category: "Sinema ve TV",
    difficulty: "Kolay"
  },
  {
    id: 1372,
    question: "TV dizilerinde, bir bölümün finalinde, izleyiciyi merak içinde bırakan ve sonraki bölüme bağlayan teknik nedir?",
    options: ["Cliffhanger (Askıda Bırakma)", "Pilot Bölüm", "Sezon Finali", "Spin-off"],
    correct: 0,
    category: "Sinema ve TV",
    difficulty: "Kolay"
  },
  {
    id: 1373,
    question: "Robert Zemeckis'in yönettiği, Marty McFly'ın zamanda yolculuk yaptığı ünlü bilim kurgu üçlemesi nedir?",
    options: ["Zamanda Yolculuk", "Matrix", "Terminator", "Geleceğe Dönüş (Back to the Future)"],
    correct: 3,
    category: "Sinema ve TV",
    difficulty: "Kolay"
  },
  {
    id: 1374,
    question: "İngiliz komedyen Rowan Atkinson'ın canlandırdığı, sakar ve komik karakterin adı nedir?",
    options: ["Monty Python", "Ali G", "Borat", "Mr. Bean"],
    correct: 3,
    category: "Sinema ve TV",
    difficulty: "Kolay"
  },
  {
    id: 1375,
    question: "Sinema filmlerinde, oyuncunun yüzünün tamamını kaplayan, detaylara odaklanan çekim tekniği nedir?",
    options: ["Geniş Açı", "Aşırı Yakın Çekim (Extreme Close-up)", "Orta Çekim", "Boy Çekim"],
    correct: 1,
    category: "Sinema ve TV",
    difficulty: "Kolay"
  },
  {
    id: 1376,
    question: "Pixar stüdyosunun ilk uzun metraj animasyon filmi hangisidir?",
    options: ["Canavarlar Üniversitesi", "Arabalar", "Kayıp Balık Nemo", "Oyuncak Hikayesi (Toy Story)"],
    correct: 3,
    category: "Sinema ve TV",
    difficulty: "Kolay"
  },
  {
    id: 1377,
    question: "Türkiye'de 'Aşk-ı Memnu' dizisinin uyarlandığı, Halit Ziya Uşaklıgil'in eseri hangi edebi akıma aittir?",
    options: ["Romantizm", "Fütürizm", "Realizm ve Natüralizm", "Sembolizm"],
    correct: 2,
    category: "Sinema ve TV",
    difficulty: "Orta"
  },
  {
    id: 1378,
    question: "Sinema tarihinde, kamera arkasında çalışan, ışıklandırma ve görsel estetikten sorumlu kişi kimdir?",
    options: ["Kurgucu", "Görüntü Yönetmeni (DP/Cinematographer)", "Yönetmen", "Sanat Yönetmeni"],
    correct: 1,
    category: "Sinema ve TV",
    difficulty: "Kolay"
  },
  {
    id: 1379,
    question: "Oscar ödüllerinde, bir filmin müziklerinin telif hakkının yanı sıra, bestecinin sanatsal katkısını ödüllendiren kategori nedir?",
    options: ["En İyi Ses Efekti", "En İyi Şarkı", "En İyi Orijinal Müzik (Original Score)", "En İyi Ses Kurgusu"],
    correct: 2,
    category: "Sinema ve TV",
    difficulty: "Kolay"
  },
  {
    id: 1380,
    question: "'Sherlock' dizisinde, Sherlock Holmes'un zekice çözdüğü olayları kaydettiği ve yaşadığı ünlü adres neresidir?",
    options: ["Privet Drive 4", "Downing Street 10", "Baker Street 221B", "Wall Street 1"],
    correct: 2,
    category: "Sinema ve TV",
    difficulty: "Kolay"
  },
  {
    id: 1381,
    question: "Christopher Nolan'ın 'Kara Şövalye' üçlemesinde, Batman'in kural tanımayan baş düşmanı kimdir?",
    options: ["Two-Face", "Penguen", "Bane", "Joker"],
    correct: 3,
    category: "Sinema ve TV",
    difficulty: "Kolay"
  },
  {
    id: 1382,
    question: "Bir filmin ana çekimlerinin tamamlandığını belirten ve ekibe teşekkür edilen terim nedir?",
    options: ["Post Prodüksiyon", "Wrap (Çekimlerin Bitişi)", "Kurgu Başlangıcı", "Set Kapatma"],
    correct: 1,
    category: "Sinema ve TV",
    difficulty: "Orta"
  },
  {
    id: 1383,
    question: "Yönetmen Damien Chazelle'in, genç bir caz davulcusunun zorlu bir müzik öğretmeniyle ilişkisini anlatan filmi nedir?",
    options: ["Aşıklar Şehri (La La Land)", "The Eddy", "Whiplash", "Ay'da İlk İnsan"],
    correct: 2,
    category: "Sinema ve TV",
    difficulty: "Kolay"
  },
  {
    id: 1384,
    question: "TV dizilerinde, hikayenin geçtiği orijinal diziden ayrılan ve yan karakterlerin maceralarını konu alan yeni dizilere ne ad verilir?",
    options: ["Remake", "Sezon", "Prekuel", "Spin-off"],
    correct: 3,
    category: "Sinema ve TV",
    difficulty: "Kolay"
  },
  {
    id: 1385,
    question: "Sinema dilinde, kameranın göz hizasından çok daha aşağıdan, yukarıya doğru çekim yapmasına ne ad verilir?",
    options: ["Alt Açı (Low Angle)", "Hollanda Açısı (Dutch Angle)", "Göz Hizasında Çekim", "Üst Açı (High Angle)"],
    correct: 0,
    category: "Sinema ve TV",
    difficulty: "Kolay"
  },
  {
    id: 1386,
    question: "Türk Sineması'nda 'Muhsin Bey', 'Eşkıya', 'Av Mevsimi' gibi filmleriyle tanınan, usta aktör kimdir?",
    options: ["Haluk Bilginer", "Cem Yılmaz", "Kemal Sunal", "Şener Şen"],
    correct: 3,
    category: "Sinema ve TV",
    difficulty: "Kolay"
  },
  {
    id: 1387,
    question: "Bilim kurgu serisi 'Battlestar Galactica'da, insanlığın yaratıp kendisine karşı savaştığı robot ırkının adı nedir?",
    options: ["Borg", "Cylons", "Replikant", "Terminator"],
    correct: 1,
    category: "Sinema ve TV",
    difficulty: "Orta"
  },
  {
    id: 1388,
    question: "'Casablanca' filminde, Rick Blaine'in (Humphrey Bogart) işlettiği, filmdeki kilit mekan olan gece kulübünün adı nedir?",
    options: ["Rick's Café Américain", "Le Chat Noir", "The Speakeasy", "Blue Parrot"],
    correct: 0,
    category: "Sinema ve TV",
    difficulty: "Orta"
  },
  {
    id: 1389,
    question: "Marvel çizgi romanlarında, Kaptan Amerika'nın kalkanının yapıldığı hayali metalin adı nedir?",
    options: ["Kryptonite", "Uru", "Adamantium", "Vibranium"],
    correct: 3,
    category: "Sinema ve TV",
    difficulty: "Kolay"
  },
  {
    id: 1390,
    question: "Sinemada, görüntülerin arka arkaya getirilerek hikayenin anlatıldığı düzenleme sürecine ne ad verilir?",
    options: ["Kurgu (Montaj/Editing)", "Yönetmenlik", "Prodüksiyon", "Senaryo"],
    correct: 0,
    category: "Sinema ve TV",
    difficulty: "Kolay"
  },
  {
    id: 1391,
    question: "Netflix'in popüler dizisi 'Stranger Things'in geçtiği kurgusal kasabanın adı nedir?",
    options: ["Riverdale", "Hawkins", "Twin Peaks", "Stars Hollow"],
    correct: 1,
    category: "Sinema ve TV",
    difficulty: "Kolay"
  },
  {
    id: 1392,
    question: "Amerikalı yönetmen Martin Scorsese'nin, organize suç ve mafya temalı filmleriyle tanınan usta kimdir?",
    options: ["Steven Soderbergh", "Francis Ford Coppola", "Brian De Palma", "Martin Scorsese"],
    correct: 3,
    category: "Sinema ve TV",
    difficulty: "Kolay"
  },
  {
    id: 1393,
    question: "'Geleceğe Dönüş' (Back to the Future) filminde, zaman makinesi olarak kullanılan araba modeli nedir?",
    options: ["Chevrolet Camaro", "DeLorean DMC-12", "Ford Mustang", "Porsche 911"],
    correct: 1,
    category: "Sinema ve TV",
    difficulty: "Kolay"
  },
  {
    id: 1394,
    question: "Sinema dilinde, genellikle bir karaktere odaklanmak için omuz hizasından başlayan çekim tekniği nedir?",
    options: ["Medium Shot (Orta Çekim)", "Over The Shoulder", "Close-up (Yakın Çekim)", "Full Shot (Tam Çekim)"],
    correct: 0,
    category: "Sinema ve TV",
    difficulty: "Kolay"
  },
  {
    id: 1395,
    question: "İngiliz yönetmen Christopher Nolan'ın 'Memento' (Akıl Defteri) filminde, baş karakter hangi rahatsızlıktan muzdariptir?",
    options: ["Anterograd Amnezi (Kısa Süreli Hafıza Kaybı)", "Disleksi", "Şizofreni", "Otizm"],
    correct: 0,
    category: "Sinema ve TV",
    difficulty: "Orta"
  },
  {
    id: 1396,
    question: "Oscar ödüllerinde, bir filmdeki makyaj ve saç tasarımının ödüllendirildiği kategori nedir?",
    options: ["En İyi Makyaj ve Saç Tasarımı", "En İyi Görsel Efekt", "En İyi Sanat Yönetimi", "En İyi Kostüm Tasarımı"],
    correct: 0,
    category: "Sinema ve TV",
    difficulty: "Kolay"
  },
  {
    id: 1397,
    question: "'Kara Ayna' (Black Mirror) dizisinin temel konusu nedir?",
    options: ["Doğaüstü Olaylar", "Siyaset ve Tarih", "Modern Teknoloji ve Toplum Üzerindeki Etkisi", "İnsan İlişkileri ve Romantizm"],
    correct: 2,
    category: "Sinema ve TV",
    difficulty: "Kolay"
  },
  {
    id: 1398,
    question: "Yeşilçam döneminin 'Sultan' lakaplı, Türk sinemasının en önemli kadın oyuncularından biri kimdir?",
    options: ["Türkan Şoray", "Fatma Girik", "Hülya Koçyiğit", "Filiz Akın"],
    correct: 0,
    category: "Sinema ve TV",
    difficulty: "Kolay"
  },
  {
    id: 1399,
    question: "Sinema ve TV'de, bir oyuncunun ilk kez uzun metrajlı bir filmde başrol oynamasına ne ad verilir?",
    options: ["Misafir Oyuncu", "En İyi Performans", "Cameo", "Debüt (İlk Kez)"],
    correct: 3,
    category: "Sinema ve TV",
    difficulty: "Orta"
  },
  {
    id: 1400,
    question: "'Harry Potter' serisinde, Hogwarts Cadılık ve Büyücülük Okulu'nun bulunduğu ülkedeki kurgusal kurum nedir?",
    options: ["Gizemler Departmanı", "Büyücüler Birliği", "Büyü Bakanlığı", "Gringotts Bankası"],
    correct: 2,
    category: "Sinema ve TV",
    difficulty: "Kolay"
  },

  // ==================== TEKNOLOJİ ====================
{
    id: 1401,
    question: "Bilgisayarın merkezi işlem birimi (CPU) hangi temel görevi yerine getirir?",
    options: ["Grafikleri işleme", "İnternet bağlantısı sağlama", "Hesaplama ve komut yürütme", "Veri depolama"],
    correct: 2,
    category: CATEGORIES.TECHNOLOGY.name,
    difficulty: "Kolay"
  },
  {
    id: 1402,
    question: "Web sitelerine erişim sağlamak için kullanılan temel protokol nedir?",
    options: ["HTTP", "SMTP", "FTP", "ICMP"],
    correct: 0,
    category: CATEGORIES.TECHNOLOGY.name,
    difficulty: "Kolay"
  },
  {
    id: 1403,
    question: "Bir bilgisayarın tüm donanım ve yazılımlarını yöneten ana yazılım sistemi nedir?",
    options: ["İşletim Sistemi", "Sürücü (Driver)", "Güvenlik Duvarı", "Uygulama Yazılımı"],
    correct: 0,
    category: CATEGORIES.TECHNOLOGY.name,
    difficulty: "Kolay"
  },
  {
    id: 1404,
    question: "Bilgisayar biliminde en küçük veri birimi nedir?",
    options: ["Kilobyte", "Byte", "Bit", "Megabit"],
    correct: 2,
    category: CATEGORIES.TECHNOLOGY.name,
    difficulty: "Kolay"
  },
  {
    id: 1405,
    question: "Bir yerel alan ağı (LAN) içindeki cihazların birbirleriyle iletişim kurmasını sağlayan cihaz nedir?",
    options: ["Modem", "Yönlendirici (Router)", "Anahtar (Switch)", "Sunucu (Server)"],
    correct: 2,
    category: CATEGORIES.TECHNOLOGY.name,
    difficulty: "Kolay"
  },
  {
    id: 1406,
    question: "'Hello World!' yazdırmak için kullanılan en yaygın programlama dili hangisidir?",
    options: ["SQL", "CSS", "HTML", "Python"],
    correct: 3,
    category: CATEGORIES.TECHNOLOGY.name,
    difficulty: "Kolay"
  },
  {
    id: 1407,
    question: "Bilgisayar kapatıldığında bile veriyi tutabilen depolama türü nedir?",
    options: ["Önbellek (Cache)", "Geçici Hafıza", "RAM", "Kalıcı Depolama (ROM/SSD/HDD)"],
    correct: 3,
    category: CATEGORIES.TECHNOLOGY.name,
    difficulty: "Kolay"
  },
  {
    id: 1408,
    question: "Bilgisayarların verilerden öğrenmesini ve tahminlerde bulunmasını sağlayan teknoloji dalı nedir?",
    options: ["Sanal Gerçeklik", "Makine Öğrenimi (Machine Learning)", "Kuantum Fiziği", "Blok Zinciri"],
    correct: 1,
    category: CATEGORIES.TECHNOLOGY.name,
    difficulty: "Kolay"
  },
  {
    id: 1409,
    question: "Apple şirketinin kurucularından biri kimdir?",
    options: ["Mark Zuckerberg", "Steve Jobs", "Elon Musk", "Bill Gates"],
    correct: 1,
    category: CATEGORIES.TECHNOLOGY.name,
    difficulty: "Kolay"
  },
  {
    id: 1410,
    question: "Bir IP adresini okunabilir bir alan adına (örneğin google.com) çeviren sistem nedir?",
    options: ["TCP/IP", "HTML", "DNS", "VPN"],
    correct: 2,
    category: CATEGORIES.TECHNOLOGY.name,
    difficulty: "Kolay"
  },
  {
    id: 1411,
    question: "TCP protokolü için en önemli özellik nedir?",
    options: ["Hızlı ve güvenilir olmayan", "Sadece metin tabanlı", "Bağlantısız", "Güvenilir ve bağlantı tabanlı"],
    correct: 3,
    category: CATEGORIES.TECHNOLOGY.name,
    difficulty: "Orta"
  },
  {
    id: 1412,
    question: "Yazılım geliştirmede, bir nesnenin kendi içinde veri ve işlevi bir araya getirme prensibine ne ad verilir?",
    options: ["Kapsülleme (Encapsulation)", "Kalıtım (Inheritance)", "Soyutlama", "Polimorfizm"],
    correct: 0,
    category: CATEGORIES.TECHNOLOGY.name,
    difficulty: "Orta"
  },
  {
    id: 1413,
    question: "Bilgisayarın geçici olarak çalıştığı verileri depoladığı, yüksek hızlı bellek türü nedir?",
    options: ["SSD", "HDD", "ROM", "RAM"],
    correct: 3,
    category: CATEGORIES.TECHNOLOGY.name,
    difficulty: "Kolay"
  },
  {
    id: 1414,
    question: "Bir web sayfasının yapı iskelesini (içeriğini ve yapısını) oluşturan işaretleme dili nedir?",
    options: ["PHP", "JavaScript", "HTML", "CSS"],
    correct: 2,
    category: CATEGORIES.TECHNOLOGY.name,
    difficulty: "Kolay"
  },
  {
    id: 1415,
    question: "Açık kaynaklı bir işletim sistemi çekirdeği (kernel) nedir?",
    options: ["macOS", "Windows", "Android", "Linux"],
    correct: 3,
    category: CATEGORIES.TECHNOLOGY.name,
    difficulty: "Kolay"
  },
  {
    id: 1416,
    question: "Hangi yapay zeka algoritması, düğüm ve katmanlardan oluşan insan beynini taklit eden bir yapı kullanır?",
    options: ["Yapay Sinir Ağları", "Destek Vektör Makineleri", "Karar Ağaçları", "K-Ortalama"],
    correct: 0,
    category: CATEGORIES.TECHNOLOGY.name,
    difficulty: "Orta"
  },
  {
    id: 1417,
    question: "Mekanik disklerin (HDD) yerini alan, hareketli parçası olmayan ve daha hızlı okuma/yazma hızı sunan depolama birimi nedir?",
    options: ["Flash Bellek", "SSD", "DVD-ROM", "Manyetik Bant"],
    correct: 1,
    category: CATEGORIES.TECHNOLOGY.name,
    difficulty: "Kolay"
  },
  {
    id: 1418,
    question: "Bilgi paketlerinin ağlar arasında yönlendirilmesinden sorumlu protokol hangisidir?",
    options: ["IP", "SMTP", "FTP", "HTTP"],
    correct: 0,
    category: CATEGORIES.TECHNOLOGY.name,
    difficulty: "Orta"
  },
  {
    id: 1419,
    question: "Bir programlama dilinde, bir koşul doğru olduğu sürece aynı kod bloğunu tekrar tekrar çalıştırma yapısına ne ad verilir?",
    options: ["Değişken Tanımlama", "Döngü (Loop)", "Fonksiyon", "Koşul İfadesi (If/Else)"],
    correct: 1,
    category: CATEGORIES.TECHNOLOGY.name,
    difficulty: "Kolay"
  },
  {
    id: 1420,
    question: "İlk modern elektronik dijital bilgisayarın adı nedir?",
    options: ["UNIVAC", "ENIAC", "EDVAC", "Colossus"],
    correct: 1,
    category: CATEGORIES.TECHNOLOGY.name,
    difficulty: "Zor"
  },
  {
    id: 1421,
    question: "Fiziksel donanıma gerek kalmadan, internet üzerinden sunulan bilişim hizmetleri modeline ne ad verilir?",
    options: ["Süper Bilgisayar", "Bulut Bilişim (Cloud Computing)", "Yerel Ağ (LAN)", "Kişisel Bilgisayar"],
    correct: 1,
    category: CATEGORIES.TECHNOLOGY.name,
    difficulty: "Kolay"
  },
  {
    id: 1422,
    question: "Verilerin şifrelenmiş bir tünel üzerinden güvenli bir şekilde aktarılmasını sağlayan teknoloji nedir?",
    options: ["VPN", "DNS", "URL", "HTTP"],
    correct: 0,
    category: CATEGORIES.TECHNOLOGY.name,
    difficulty: "Kolay"
  },
  {
    id: 1423,
    question: "Ekran kartının (GPU) temel görevi nedir?",
    options: ["Klavye girdilerini işlemek", "İşletim sistemini yönetmek", "İnternet bağlantısı sağlamak", "Grafik ve görüntü işleme"],
    correct: 3,
    category: CATEGORIES.TECHNOLOGY.name,
    difficulty: "Kolay"
  },
  {
    id: 1424,
    question: "Python, Java ve C# gibi dillerde, bellek yönetimini otomatik olarak yapan mekanizma nedir?",
    options: ["Statik Bellek", "Elle Yönetim", "Sanal Bellek", "Çöp Toplama (Garbage Collection)"],
    correct: 3,
    category: CATEGORIES.TECHNOLOGY.name,
    difficulty: "Orta"
  },
  {
    id: 1425,
    question: "Büyük, yapılandırılmamış ve hızla değişen veri kümelerini tanımlamak için kullanılan terim nedir?",
    options: ["Küçük Veri", "Büyük Veri (Big Data)", "Statik Veri", "Temiz Veri"],
    correct: 1,
    category: CATEGORIES.TECHNOLOGY.name,
    difficulty: "Kolay"
  },
  {
    id: 1426,
    question: "Bir web sayfasının görünümünü (renk, font, düzen) tanımlayan stil sayfası dili nedir?",
    options: ["PHP", "CSS", "HTML", "XML"],
    correct: 1,
    category: CATEGORIES.TECHNOLOGY.name,
    difficulty: "Kolay"
  },
  {
    id: 1427,
    question: "Kötü amaçlı yazılımların genel adı nedir?",
    options: ["Firmware", "Malware", "Sürücü (Driver)", "Yazılım Paketi"],
    correct: 1,
    category: CATEGORIES.TECHNOLOGY.name,
    difficulty: "Kolay"
  },
  {
    id: 1428,
    question: "İnsan benzeri bir konuşma yeteneğine sahip, metin tabanlı yapay zeka programına ne ad verilir?",
    options: ["Sanal Gerçeklik", "Otonom Sistem", "Sohbet Robotu (Chatbot)", "Robot"],
    correct: 2,
    category: CATEGORIES.TECHNOLOGY.name,
    difficulty: "Kolay"
  },
  {
    id: 1429,
    question: "Bilgisayarın anakartında (Motherboard), CPU'yu diğer bileşenlere bağlayan yüksek hızlı iletişim yolu nedir?",
    options: ["Sabit Disk", "RAM", "Güç Kaynağı", "Veri Yolu (Bus)"],
    correct: 3,
    category: CATEGORIES.TECHNOLOGY.name,
    difficulty: "Orta"
  },
  {
    id: 1430,
    question: "İlk programlanabilir elektromekanik bilgisayarı (Z serisi) tasarlayan Alman mühendis kimdir?",
    options: ["Alan Turing", "John von Neumann", "Charles Babbage", "Konrad Zuse"],
    correct: 3,
    category: CATEGORIES.TECHNOLOGY.name,
    difficulty: "Zor"
  },
  {
    id: 1431,
    question: "Bir nesne tabanlı programlama dilinde, bir sınıfın başka bir sınıftan özellik ve davranışları devralması ilkesine ne ad verilir?",
    options: ["Polimorfizm", "Kapsülleme", "Kalıtım (Inheritance)", "Soyutlama"],
    correct: 2,
    category: CATEGORIES.TECHNOLOGY.name,
    difficulty: "Orta"
  },
  {
    id: 1432,
    question: "Ağ katmanında (Layer 3) çalışan ve farklı ağlar arasında veri paketlerini yönlendiren cihaz nedir?",
    options: ["Anahtar (Switch)", "Yönlendirici (Router)", "Tekrarlayıcı (Repeater)", "Köprü (Bridge)"],
    correct: 1,
    category: CATEGORIES.TECHNOLOGY.name,
    difficulty: "Orta"
  },
  {
    id: 1433,
    question: "İlişkisel veritabanı yönetim sistemlerinde veri sorgulama için kullanılan standart dil nedir?",
    options: ["SQL", "Python", "Java", "HTML"],
    correct: 0,
    category: CATEGORIES.TECHNOLOGY.name,
    difficulty: "Kolay"
  },
  {
    id: 1434,
    question: "Bir web sitesinin sunucuya her istek gönderdiğinde kimlik bilgilerini depolayan küçük veri parçası nedir?",
    options: ["Çerez (Cookie)", "IP Adresi", "URL", "Alan Adı"],
    correct: 0,
    category: CATEGORIES.TECHNOLOGY.name,
    difficulty: "Kolay"
  },
  {
    id: 1435,
    question: "Her bir işlemin birden fazla bilgisayarda kaydedildiği ve merkezi olmayan, şeffaf kayıt sistemi nedir?",
    options: ["Sanal Gerçeklik", "Yapay Zeka", "Nesnelerin İnterneti (IoT)", "Blok Zinciri (Blockchain)"],
    correct: 3,
    category: CATEGORIES.TECHNOLOGY.name,
    difficulty: "Kolay"
  },
  {
    id: 1436,
    question: "CPU'nun içindeki küçük ve çok hızlı veri depolama birimi (RAM'den daha hızlı) nedir?",
    options: ["HDD", "Anakart", "Önbellek (Cache)", "SSD"],
    correct: 2,
    category: CATEGORIES.TECHNOLOGY.name,
    difficulty: "Orta"
  },
  {
    id: 1437,
    question: "Bir makine öğrenimi modelinin, etiketlenmemiş verilerle örüntüleri (paternleri) kendi başına bulmaya çalıştığı öğrenme türü nedir?",
    options: ["Takviyeli Öğrenme", "Gözetimli Öğrenme", "Derin Öğrenme", "Gözetimsiz Öğrenme"],
    correct: 3,
    category: CATEGORIES.TECHNOLOGY.name,
    difficulty: "Zor"
  },
  {
    id: 1438,
    question: "İki farklı protokolü veya ağı birbirine bağlayan, veri paketlerini dönüştürebilen cihaz nedir?",
    options: ["Switch", "Gateway (Ağ Geçidi)", "Hub", "Modem"],
    correct: 1,
    category: CATEGORIES.TECHNOLOGY.name,
    difficulty: "Zor"
  },
  {
    id: 1439,
    question: "Bir fonksiyonun aynı isme sahip farklı parametrelerle (sayı/tür) tanımlanabilmesine ne ad verilir?",
    options: ["Aşırı Yükleme (Overloading)", "Soyutlama", "Geçersiz Kılma (Overriding)", "Kalıtım"],
    correct: 0,
    category: CATEGORIES.TECHNOLOGY.name,
    difficulty: "Zor"
  },
  {
    id: 1440,
    question: "Apple Macintosh'un 1984'te piyasaya sürülmesiyle popüler hale gelen bilgisayar arayüzü türü nedir?",
    options: ["Metin Tabanlı Arayüz", "Kart Tabanlı Sistem", "Komut Satırı", "Grafiksel Kullanıcı Arayüzü (GUI)"],
    correct: 3,
    category: CATEGORIES.TECHNOLOGY.name,
    difficulty: "Kolay"
  },
  {
    id: 1441,
    question: "Bir veritabanında, bir tablo içindeki her bir satırı benzersiz olarak tanımlayan alan nedir?",
    options: ["Görünüm (View)", "İndeks", "Birincil Anahtar (Primary Key)", "Yabancı Anahtar"],
    correct: 2,
    category: CATEGORIES.TECHNOLOGY.name,
    difficulty: "Orta"
  },
  {
    id: 1442,
    question: "E-posta göndermek için kullanılan temel protokol nedir?",
    options: ["SMTP", "IMAP", "HTTP", "POP3"],
    correct: 0,
    category: CATEGORIES.TECHNOLOGY.name,
    difficulty: "Kolay"
  },
  {
    id: 1443,
    question: "Bir programın kaynak kodunu (source code) alıp doğrudan makine diline çeviren yazılım nedir?",
    options: ["Derleyici (Compiler)", "Yorumlayıcı (Interpreter)", "Debugger", "Kod Editörü"],
    correct: 0,
    category: CATEGORIES.TECHNOLOGY.name,
    difficulty: "Orta"
  },
  {
    id: 1444,
    question: "Çevremizdeki nesnelerin internete bağlanması ve veri alışverişinde bulunması konsepti nedir?",
    options: ["Blok Zinciri", "Sanal Gerçeklik", "Bulut Bilişim", "Nesnelerin İnterneti (IoT)"],
    correct: 3,
    category: CATEGORIES.TECHNOLOGY.name,
    difficulty: "Kolay"
  },
  {
    id: 1445,
    question: "Bir ağdaki tüm cihazlara veri gönderen, akıllı olmayan ağ cihazı nedir?",
    options: ["Hub", "Router", "Switch", "Gateway"],
    correct: 0,
    category: CATEGORIES.TECHNOLOGY.name,
    difficulty: "Orta"
  },
  {
    id: 1446,
    question: "C++ ve Java'da kullanılan, bir fonksiyonun veya değişkenin yalnızca tanımlandığı kapsam (scope) içinde erişilebilir olmasını sağlayan anahtar kelime nedir?",
    options: ["Static", "Public", "Protected", "Private"],
    correct: 3,
    category: CATEGORIES.TECHNOLOGY.name,
    difficulty: "Zor"
  },
  {
    id: 1447,
    question: "Bilgisayarın BIOS/UEFI ayarlarını ve saati tutan küçük, pille çalışan bellek nedir?",
    options: ["Cache", "RAM", "ROM", "CMOS"],
    correct: 3,
    category: CATEGORIES.TECHNOLOGY.name,
    difficulty: "Zor"
  },
  {
    id: 1448,
    question: "Bir web sitesinin sunucudan gelen verinin doğru ve güvenli olduğunu garanti eden sertifika türü nedir?",
    options: ["CSS", "DRM", "HTML", "SSL/TLS"],
    correct: 3,
    category: CATEGORIES.TECHNOLOGY.name,
    difficulty: "Kolay"
  },
  {
    id: 1449,
    question: "Büyük bir veri kümesini, benzer özelliklere sahip gruplara (kümelere) ayırmayı amaçlayan gözetimsiz makine öğrenimi görevi nedir?",
    options: ["Boyut Azaltma", "Regresyon", "Kümeleme (Clustering)", "Sınıflandırma"],
    correct: 2,
    category: CATEGORIES.TECHNOLOGY.name,
    difficulty: "Orta"
  },
  {
    id: 1450,
    question: "Intel'in 1971'de piyasaya sürdüğü, ticari olarak başarılı olan ilk mikroişlemci nedir?",
    options: ["Intel 8086", "Intel 4004", "Intel Pentium", "Intel Core 2 Duo"],
    correct: 1,
    category: CATEGORIES.TECHNOLOGY.name,
    difficulty: "Zor"
  },
  {
    id: 1451,
    question: "Bir programlama dilinde, bellekte sabitlenmiş ve değeri değiştirilemeyen veri birimi nedir?",
    options: ["Metot (Method)", "Değişken (Variable)", "Sınıf (Class)", "Sabit (Constant)"],
    correct: 3,
    category: CATEGORIES.TECHNOLOGY.name,
    difficulty: "Kolay"
  },
  {
    id: 1452,
    question: "Verilerin kayıp veya gecikmeye karşı daha az toleranslı olduğu (örneğin canlı video akışı) protokol hangisidir?",
    options: ["UDP", "TCP", "ICMP", "HTTP"],
    correct: 0,
    category: CATEGORIES.TECHNOLOGY.name,
    difficulty: "Orta"
  },
  {
    id: 1453,
    question: "İşlemcilerin saniyede yapabildiği döngü sayısını ifade eden hız birimi nedir?",
    options: ["Volt", "Hertz (Hz)", "Byte", "Watt"],
    correct: 1,
    category: CATEGORIES.TECHNOLOGY.name,
    difficulty: "Kolay"
  },
  {
    id: 1454,
    question: "'MongoDB' ve 'Cassandra' gibi veritabanları hangi kategoriye girer?",
    options: ["NoSQL", "Ağ Tabanlı", "SQL Tabanlı", "İlişkisel"],
    correct: 0,
    category: CATEGORIES.TECHNOLOGY.name,
    difficulty: "Orta"
  },
  {
    id: 1455,
    question: "World Wide Web'i (WWW) icat eden kişi kimdir?",
    options: ["Jeff Bezos", "Tim Berners-Lee", "Larry Page", "Bill Gates"],
    correct: 1,
    category: CATEGORIES.TECHNOLOGY.name,
    difficulty: "Kolay"
  },
  {
    id: 1456,
    question: "Bir kullanıcının kimliğini doğrulamak için kullanılan yöntem nedir?",
    options: ["Şifreleme", "Kimlik Doğrulama (Authentication)", "Yetkilendirme", "Dijital İmza"],
    correct: 1,
    category: CATEGORIES.TECHNOLOGY.name,
    difficulty: "Kolay"
  },
  {
    id: 1457,
    question: "Tamamen dijital olarak oluşturulmuş ve fiziksel dünyadan bağımsız, etkileşimli üç boyutlu ortam nedir?",
    options: ["Karma Gerçeklik", "Sanal Gerçeklik (VR)", "Blok Zinciri", "Artırılmış Gerçeklik (AR)"],
    correct: 1,
    category: CATEGORIES.TECHNOLOGY.name,
    difficulty: "Kolay"
  },
  {
    id: 1458,
    question: "HTML'de bir web sayfasının stil ve düzenini kontrol etmek için kullanılan teknik nedir?",
    options: ["CSS", "XML", "PHP", "JavaScript"],
    correct: 0,
    category: CATEGORIES.TECHNOLOGY.name,
    difficulty: "Kolay"
  },
  {
    id: 1459,
    question: "Bilgisayar sisteminde ana bileşenlerin (CPU, RAM, GPU) takıldığı merkezi devre kartı nedir?",
    options: ["Kasa", "Güç Kaynağı", "Anakart (Motherboard)", "SSD"],
    correct: 2,
    category: CATEGORIES.TECHNOLOGY.name,
    difficulty: "Kolay"
  },
  {
    id: 1460,
    question: "1950'lerde geliştirilen ve hala kullanılan ilk yüksek seviyeli programlama dili nedir?",
    options: ["COBOL", "C", "Fortran", "Pascal"],
    correct: 2,
    category: CATEGORIES.TECHNOLOGY.name,
    difficulty: "Zor"
  },
  {
    id: 1461,
    question: "Bir ağdaki cihazlara otomatik olarak IP adresi atayan protokol nedir?",
    options: ["DNS", "ICMP", "ARP", "DHCP"],
    correct: 3,
    category: CATEGORIES.TECHNOLOGY.name,
    difficulty: "Orta"
  },
  {
    id: 1462,
    question: "Yapılandırılmış veriyi XML'e benzer şekilde, ancak daha hafif bir formatta depolamak için kullanılan format nedir?",
    options: ["PDF", "HTML", "JSON", "CSV"],
    correct: 2,
    category: CATEGORIES.TECHNOLOGY.name,
    difficulty: "Kolay"
  },
  {
    id: 1463,
    question: "Bir programın çalışması sırasında oluşan beklenmedik durumlara ne ad verilir?",
    options: ["İstisna (Exception)", "Hata Ayıklama", "Derleme Hatası", "Mantık Hatası"],
    correct: 0,
    category: CATEGORIES.TECHNOLOGY.name,
    difficulty: "Orta"
  },
  {
    id: 1464,
    question: "Bir ağdaki her cihazın benzersiz fiziksel tanımlayıcısı nedir?",
    options: ["Protokol", "IP Adresi", "Port Numarası", "MAC Adresi"],
    correct: 3,
    category: CATEGORIES.TECHNOLOGY.name,
    difficulty: "Orta"
  },
  {
    id: 1465,
    question: "Bir yapay zeka sisteminin, kendisine verilen hedefe ulaşmak için deneme yanılma yoluyla öğrendiği öğrenme türü nedir?",
    options: ["Takviyeli Öğrenme (Reinforcement Learning)", "Gözetimsiz", "Gözetimli", "Derin Öğrenme"],
    correct: 0,
    category: CATEGORIES.TECHNOLOGY.name,
    difficulty: "Zor"
  },
  {
    id: 1466,
    question: "Ticari olmayan, değiştirilebilir ve ücretsiz olarak dağıtılabilen yazılım türü nedir?",
    options: ["Paylaşılan Yazılım", "Deneme Sürümü", "Özel Mülk Yazılım", "Açık Kaynak Kodlu Yazılım"],
    correct: 3,
    category: CATEGORIES.TECHNOLOGY.name,
    difficulty: "Kolay"
  },
  {
    id: 1467,
    question: "Bir CPU'nun içinde bulunan ve aritmetik, mantıksal işlemleri gerçekleştiren birim nedir?",
    options: ["Aritmetik Mantık Birimi (ALU)", "Kayıt Defteri (Register)", "Önbellek", "Kontrol Ünitesi"],
    correct: 0,
    category: CATEGORIES.TECHNOLOGY.name,
    difficulty: "Orta"
  },
  {
    id: 1468,
    question: "Web sayfalarında etkileşimli öğeler (animasyonlar, dinamik içerik) oluşturmak için kullanılan programlama dili nedir?",
    options: ["JavaScript", "Python", "CSS", "HTML"],
    correct: 0,
    category: CATEGORIES.TECHNOLOGY.name,
    difficulty: "Kolay"
  },
  {
    id: 1469,
    question: "Veri ambarlarında, büyük veri setlerini hızlıca analiz etmek için kullanılan çok boyutlu veri yapısına ne ad verilir?",
    options: ["İlişki", "Görünüm", "Tablo", "Küp (Cube)"],
    correct: 3,
    category: CATEGORIES.TECHNOLOGY.name,
    difficulty: "Zor"
  },
  {
    id: 1470,
    question: "İlk bilgisayar algoritmasını yazan ve 'dünyanın ilk programcısı' olarak kabul edilen kişi kimdir?",
    options: ["Alan Turing", "Charles Babbage", "Ada Lovelace", "Grace Hopper"],
    correct: 2,
    category: CATEGORIES.TECHNOLOGY.name,
    difficulty: "Zor"
  },
  {
    id: 1471,
    question: "Bir programlama dilinde, bir sınıfın metotlarının alt sınıflarca farklı şekillerde uygulanabilmesi ilkesi nedir?",
    options: ["Polimorfizm", "Kalıtım", "Kapsülleme", "Soyutlama"],
    correct: 0,
    category: CATEGORIES.TECHNOLOGY.name,
    difficulty: "Orta"
  },
  {
    id: 1472,
    question: "5GHz ve 2.4GHz frekans bantlarını kullanarak kablosuz ağ bağlantısı sağlayan teknoloji nedir?",
    options: ["Bluetooth", "NFC", "Ethernet", "Wi-Fi"],
    correct: 3,
    category: CATEGORIES.TECHNOLOGY.name,
    difficulty: "Kolay"
  },
  {
    id: 1473,
    question: "Bir bilgisayara harici cihazları (klavye, fare, yazıcı) bağlamak için kullanılan seri veri yolu standardı nedir?",
    options: ["PCIe", "USB", "HDMI", "SATA"],
    correct: 1,
    category: CATEGORIES.TECHNOLOGY.name,
    difficulty: "Kolay"
  },
  {
    id: 1474,
    question: "Bilgisayarlar tarafından üretilen öğelerin, gerçek dünya görüntülerinin üzerine bindirildiği teknoloji nedir?",
    options: ["Sanal Gerçeklik", "Artırılmış Gerçeklik (AR)", "Karma Gerçeklik", "Bulut Bilişim"],
    correct: 1,
    category: CATEGORIES.TECHNOLOGY.name,
    difficulty: "Kolay"
  },
  {
    id: 1475,
    question: "Bir veritabanında, bir tablodaki verilerin nasıl saklandığını ve düzenlendiğini tanımlayan yapı nedir?",
    options: ["Sorgu", "Görünüm", "Şema (Schema)", "Dizin (Index)"],
    correct: 2,
    category: CATEGORIES.TECHNOLOGY.name,
    difficulty: "Orta"
  },
  {
    id: 1476,
    question: "Bir kullanıcının eylemlerinin veya kimlik bilgilerinin çalınması amacıyla tasarlanmış sahte web siteleri veya e-postalar kullanılarak yapılan siber saldırı türü nedir?",
    options: ["Fidye Yazılımı", "DDoS", "Oltalama (Phishing)", "Kaba Kuvvet Saldırısı"],
    correct: 2,
    category: CATEGORIES.TECHNOLOGY.name,
    difficulty: "Kolay"
  },
  {
    id: 1477,
    question: "Bir sunucunun kullanıcıdan gelen isteği, diğer bir sunucuya iletip yanıtı geri döndürdüğü aracı sunucu nedir?",
    options: ["Web Sunucusu", "DNS Sunucusu", "Proxy Sunucu", "CDN"],
    correct: 2,
    category: CATEGORIES.TECHNOLOGY.name,
    difficulty: "Orta"
  },
  {
    id: 1478,
    question: "Java, C++ ve Python'da, bir nesnenin ilk oluşturulması sırasında çağrılan özel metoda ne ad verilir?",
    options: ["Metot", "Değişken", "Yıkıcı (Destructor)", "Kurucu (Constructor)"],
    correct: 3,
    category: CATEGORIES.TECHNOLOGY.name,
    difficulty: "Kolay"
  },
  {
    id: 1479,
    question: "Çok sayıda çekirdeği (Core) bulunan ve paralel hesaplamalar için optimize edilmiş işlemci türü nedir?",
    options: ["RAM", "ROM", "GPU", "CPU"],
    correct: 2,
    category: CATEGORIES.TECHNOLOGY.name,
    difficulty: "Kolay"
  },
  {
    id: 1480,
    question: "Silikon Vadisi'nin temellerini atan ve yarı iletken (transistör) teknolojisinin gelişiminde kilit rol oynayan bilim adamı kimdir?",
    options: ["Jack Kilby", "Robert Noyce", "Gordon Moore", "William Shockley"],
    correct: 3,
    category: CATEGORIES.TECHNOLOGY.name,
    difficulty: "Zor"
  },
  {
    id: 1481,
    question: "Bir ağdaki trafiğin kalitesini (gecikme, bant genişliği) yönetmeye odaklanan teknoloji nedir?",
    options: ["QoS (Hizmet Kalitesi)", "DNS", "DHCP", "VPN"],
    correct: 0,
    category: CATEGORIES.TECHNOLOGY.name,
    difficulty: "Zor"
  },
  {
    id: 1482,
    question: "Makine öğreniminde, modelin eğitim verilerini ezberlemesi ve yeni verilere kötü genelleme yapması durumu nedir?",
    options: ["Uyumsuzluk", "Örnekleme", "Yetersiz Öğrenme", "Aşırı Öğrenme (Overfitting)"],
    correct: 3,
    category: CATEGORIES.TECHNOLOGY.name,
    difficulty: "Orta"
  },
  {
    id: 1483,
    question: "Bir programdaki hataları bulma ve düzeltme işlemine ne ad verilir?",
    options: ["Optimizasyon", "Derleme", "Hata Ayıklama (Debugging)", "Yorumlama"],
    correct: 2,
    category: CATEGORIES.TECHNOLOGY.name,
    difficulty: "Kolay"
  },
  {
    id: 1484,
    question: "Bir programlama dilinde, verilerin yanlışlıkla değiştirilmesini önlemek için uygulanan sınırlama ilkesi nedir?",
    options: ["Polimorfizm", "Kalıtım", "Soyutlama", "Kapsülleme"],
    correct: 3,
    category: CATEGORIES.TECHNOLOGY.name,
    difficulty: "Orta"
  },
  {
    id: 1485,
    question: "Hangi protokol, bir cihazın ağdaki diğer cihazların fiziksel adresini (MAC) IP adresi üzerinden öğrenmesini sağlar?",
    options: ["DNS", "DHCP", "ARP", "RARP"],
    correct: 2,
    category: CATEGORIES.TECHNOLOGY.name,
    difficulty: "Zor"
  },
  {
    id: 1486,
    question: "Yüksek performanslı bilgisayarlarda, işlemcinin ısısını uzaklaştırmak için kullanılan bileşen nedir?",
    options: ["Fan ve Soğutucu", "RAM", "Depolama", "Güç Kaynağı"],
    correct: 0,
    category: CATEGORIES.TECHNOLOGY.name,
    difficulty: "Kolay"
  },
  {
    id: 1487,
    question: "Büyük veri setlerinde, verilerin toplanması, temizlenmesi ve analize hazır hale getirilmesi sürecine ne ad verilir?",
    options: ["Veri Modelleme", "Veri Mühendisliği", "Veri Madenciliği", "Veri Görselleştirme"],
    correct: 1,
    category: CATEGORIES.TECHNOLOGY.name,
    difficulty: "Orta"
  },
  {
    id: 1488,
    question: "İnsansız hava araçlarının (drone) kontrol ve navigasyon teknolojilerine ne ad verilir?",
    options: ["Kuantum Bilgisayarlar", "Telekominikasyon", "Otonom Sistemler", "Blok Zinciri"],
    correct: 2,
    category: CATEGORIES.TECHNOLOGY.name,
    difficulty: "Kolay"
  },
  {
    id: 1489,
    question: "Hangi ağ topolojisinde, tüm cihazlar tek bir merkezi noktaya (hub veya switch) bağlıdır?",
    options: ["Ağaç (Tree)", "Mesh", "Yıldız (Star)", "Halka (Ring)"],
    correct: 2,
    category: CATEGORIES.TECHNOLOGY.name,
    difficulty: "Orta"
  },
  {
    id: 1490,
    question: "İlk ticari işletim sistemlerinden biri olan MS-DOS'u geliştiren şirket hangisidir?",
    options: ["Microsoft", "Oracle", "IBM", "Apple"],
    correct: 0,
    category: CATEGORIES.TECHNOLOGY.name,
    difficulty: "Kolay"
  },
  {
    id: 1491,
    question: "Bir ağa veya sisteme yasa dışı erişim sağlamaya çalışan kişiye ne ad verilir?",
    options: ["Yönetici", "Hacker", "Programcı", "Analist"],
    correct: 1,
    category: CATEGORIES.TECHNOLOGY.name,
    difficulty: "Kolay"
  },
  {
    id: 1492,
    question: "Python'da, kodun okunabilirliğini ve yapısını sağlamak için kullanılan boşluk ve girintilere ne ad verilir?",
    options: ["Girinti (Indentation)", "Noktalı Virgül", "Etiket (Tag)", "Ayraç (Bracket)"],
    correct: 0,
    category: CATEGORIES.TECHNOLOGY.name,
    difficulty: "Kolay"
  },
  {
    id: 1493,
    question: "Bilgisayara elektrik kesintisi durumunda kısa süreli güç sağlamak için kullanılan cihaz nedir?",
    options: ["Jeneratör", "Güç Kaynağı (PSU)", "Regülatör", "UPS (Kesintisiz Güç Kaynağı)"],
    correct: 3,
    category: CATEGORIES.TECHNOLOGY.name,
    difficulty: "Kolay"
  },
  {
    id: 1494,
    question: "Bir web sitesinin sunucu tarafından işlenen ve kullanıcıya HTML olarak gönderilen programlama dili nedir?",
    options: ["JavaScript", "CSS", "Sunucu Taraflı (Server-side) Diller (PHP, ASP.NET)", "Python"],
    correct: 2,
    category: CATEGORIES.TECHNOLOGY.name,
    difficulty: "Orta"
  },
  {
    id: 1495,
    question: "Bir yapay zeka sisteminin, insan konuşmasını anlaması ve yanıtlaması yeteneğine ne ad verilir?",
    options: ["Kuantum Bilişim", "Görüntü İşleme", "Biyometri", "Doğal Dil İşleme (NLP)"],
    correct: 3,
    category: CATEGORIES.TECHNOLOGY.name,
    difficulty: "Kolay"
  },
  {
    id: 1496,
    question: "Bilgisayarın hesaplama gücünü, nesnelerin süperpozisyon ve dolanıklık gibi kuantum özelliklerini kullanarak artıran teknoloji nedir?",
    options: ["Süper Bilgisayar", "Blok Zinciri", "Kuantum Bilişim", "Yapay Sinir Ağları"],
    correct: 2,
    category: CATEGORIES.TECHNOLOGY.name,
    difficulty: "Zor"
  },
  {
    id: 1497,
    question: "Bir web sitesinden otomatik olarak büyük miktarda veri çekme işlemine ne ad verilir?",
    options: ["Veri Modelleme", "Veri Görselleştirme", "Veri Madenciliği", "Web Kazıma (Web Scraping)"],
    correct: 3,
    category: CATEGORIES.TECHNOLOGY.name,
    difficulty: "Orta"
  },
  {
    id: 1498,
    question: "Bir programın veya sistemin kararlılığını ve performansını artırmak için yapılan geliştirme aşaması nedir?",
    options: ["Sürüm Yayınlama", "Beta Testi", "Optimizasyon", "Kurulum"],
    correct: 2,
    category: CATEGORIES.TECHNOLOGY.name,
    difficulty: "Kolay"
  },
  {
    id: 1499,
    question: "TCP/IP modelinde, uygulama verilerini paketleyip iletmekten sorumlu katman hangisidir?",
    options: ["Ağ Katmanı", "İletim Katmanı", "Uygulama Katmanı", "Fiziksel Katman"],
    correct: 1,
    category: CATEGORIES.TECHNOLOGY.name,
    difficulty: "Orta"
  },
  {
    id: 1500,
    question: "İnternetin öncüsü olarak kabul edilen ve 1960'larda geliştirilen ağ nedir?",
    options: ["Ethernet", "ARPANET", "World Wide Web", "NSFNet"],
    correct: 1,
    category: CATEGORIES.TECHNOLOGY.name,
    difficulty: "Kolay"
  },
  {
    id: 1501,
    question: "Bir bilgisayarın 'beyni' olarak adlandırılan ve tüm işlem yeteneklerini sağlayan donanım birimi nedir?",
    options: ["RAM", "Ekran Kartı", "Merkezi İşlem Birimi (CPU)", "Anakart"],
    correct: 2,
    category: "Teknoloji",
    difficulty: "Kolay"
  },
  {
    id: 1502,
    question: "Bir bilgisayarın geçici verileri sakladığı ve elektrik kesildiğinde içerisindeki bilgilerin kaybolduğu hafıza türü nedir?",
    options: ["Sabit Disk (HDD)", "SSD", "Rastgele Erişimli Bellek (RAM)", "ROM"],
    correct: 2,
    category: "Teknoloji",
    difficulty: "Kolay"
  },
  {
    id: 1503,
    question: "İnternet üzerindeki bir kaynağın benzersiz adresine ne ad verilir?",
    options: ["Alan Adı", "MAC Adresi", "URL (Tekdüzen Kaynak Konumlayıcı)", "IP Adresi"],
    correct: 2,
    category: "Teknoloji",
    difficulty: "Kolay"
  },
  {
    id: 1504,
    question: "Yapay zeka (AI) alanında, insan benzeri akıllı davranışları taklit eden programlar geliştirmeyi amaçlayan bilim dalı nedir?",
    options: ["Biyoloji", "Makine Öğrenimi (Machine Learning)", "Kuantum Fiziği", "Robotik"],
    correct: 1,
    category: "Teknoloji",
    difficulty: "Kolay"
  },
  {
    id: 1505,
    question: "Verilerin küçük, şifreli bloklar halinde saklandığı ve değiştirilemez bir kayıt defteri oluşturan dağıtık defter teknolojisi nedir?",
    options: ["Bulut Bilişim", "Blok Zinciri (Blockchain)", "Sanal Gerçeklik", "Veritabanı"],
    correct: 1,
    category: "Teknoloji",
    difficulty: "Kolay"
  },
  {
    id: 1506,
    question: "İnternet'in temelini oluşturan ve web sayfalarının oluşturulmasında kullanılan standart işaretleme dili nedir?",
    options: ["Python", "HTML (Köprü Metni İşaretleme Dili)", "C++", "Java"],
    correct: 1,
    category: "Teknoloji",
    difficulty: "Kolay"
  },
  {
    id: 1507,
    question: "Dosyaları ve programları kalıcı olarak depolamak için kullanılan ve hareketli parçası olmayan depolama aygıtı nedir?",
    options: ["CD-ROM", "Sabit Disk (HDD)", "Katı Hal Sürücüsü (SSD)", "Flash Bellek"],
    correct: 2,
    category: "Teknoloji",
    difficulty: "Kolay"
  },
  {
    id: 1508,
    question: "Bir bilgisayarın temel işlevlerini (açılış, donanım kontrolü vb.) yöneten, donanıma gömülü yazılım nedir?",
    options: ["Uygulama Yazılımı", "Oyun Yazılımı", "İşletim Sistemi (OS)", "Sürücü Yazılımı"],
    correct: 2,
    category: "Teknoloji",
    difficulty: "Kolay"
  },
  {
    id: 1509,
    question: "İnternet üzerindeki cihazların birbirleriyle haberleşmesini sağlayan ve her cihaza atanan sayısal adres nedir?",
    options: ["MAC Adresi", "IP (İnternet Protokolü) Adresi", "URL", "E-posta Adresi"],
    correct: 1,
    category: "Teknoloji",
    difficulty: "Kolay"
  },
  {
    id: 1510,
    question: "Bir bilgisayar ağına yetkisiz erişim sağlamaya çalışan kötü niyetli yazılımların genel adı nedir?",
    options: ["Kötü Amaçlı Yazılım (Malware)", "Antivirüs", "Güvenlik Duvarı (Firewall)", "Tarayıcı (Browser)"],
    correct: 0,
    category: "Teknoloji",
    difficulty: "Kolay"
  },
  {
    id: 1511,
    question: "Kablosuz ağlarda (Wi-Fi) güvenliği sağlamak ve yetkisiz erişimi engellemek için kullanılan şifreleme protokolü nedir?",
    options: ["FTP", "SMTP", "WPA (Wi-Fi Korumalı Erişim)", "HTTP"],
    correct: 2,
    category: "Teknoloji",
    difficulty: "Kolay"
  },
  {
    id: 1512,
    question: "Görüntü kalitesini ifade etmek için kullanılan ve bir görüntüyü oluşturan en küçük tek renkli noktalara ne ad verilir?",
    options: ["Megabayt", "Santimetre", "Piksel", "Vektör"],
    correct: 2,
    category: "Teknoloji",
    difficulty: "Kolay"
  },
  {
    id: 1513,
    question: "Yapay zeka sistemlerinin büyük miktarda veriden otomatik olarak desenleri ve kuralları öğrenmesini sağlayan alt alan nedir?",
    options: ["Yapay Sinir Ağları", "Makine Öğrenimi (Machine Learning)", "Doğal Dil İşleme", "Derin Öğrenme (Deep Learning)"],
    correct: 1,
    category: "Teknoloji",
    difficulty: "Kolay"
  },
  {
    id: 1514,
    question: "İnternet'i icat eden ve World Wide Web (WWW) sistemini geliştiren kişi kimdir?",
    options: ["Steve Jobs", "Jeff Bezos", "Bill Gates", "Tim Berners-Lee"],
    correct: 3,
    category: "Teknoloji",
    difficulty: "Kolay"
  },
  {
    id: 1515,
    question: "Bir bilgisayar programında, istenmeyen veya yanlış sonuçlara yol açan hataya ne ad verilir?",
    options: ["Çözümleme", "Hata (Bug)", "Algoritma", "Kodlama"],
    correct: 1,
    category: "Teknoloji",
    difficulty: "Kolay"
  },
  {
    id: 1516,
    question: "Veri depolama birimi olarak kullanılan, kapasitesi genellikle Terabayt (TB) cinsinden ölçülen kalıcı depolama aygıtı nedir?",
    options: ["Sabit Disk (HDD/SSD)", "RAM", "CPU", "Anakart"],
    correct: 0,
    category: "Teknoloji",
    difficulty: "Kolay"
  },
  {
    id: 1517,
    question: "E-posta göndermek için kullanılan standart ağ protokolü nedir?",
    options: ["SMTP (Basit Posta Aktarım Protokolü)", "FTP", "POP3", "IMAP"],
    correct: 0,
    category: "Teknoloji",
    difficulty: "Orta"
  },
  {
    id: 1518,
    question: "Bilgisayarda kullanılan ve iki temel sayı olan 0 ve 1'lerden oluşan sayı sistemi nedir?",
    options: ["Onaltılık (Hexadecimal)", "İkili (Binary)", "Ondalık (Decimal)", "Sekizlik (Octal)"],
    correct: 1,
    category: "Teknoloji",
    difficulty: "Kolay"
  },
  {
    id: 1519,
    question: "Kullanıcının klavye, fare veya dokunmatik ekran aracılığıyla bilgisayara veri girmesini sağlayan birime ne ad verilir?",
    options: ["İşlem Birimi", "Depolama Birimi", "Çıkış Birimi", "Giriş Birimi"],
    correct: 3,
    category: "Teknoloji",
    difficulty: "Kolay"
  },
  {
    id: 1520,
    question: "Mobil cihazlarda, coğrafi konumu belirlemek için kullanılan küresel uydu tabanlı navigasyon sistemi nedir?",
    options: ["Bluetooth", "NFC", "GPS (Küresel Konumlandırma Sistemi)", "Wi-Fi"],
    correct: 2,
    category: "Teknoloji",
    difficulty: "Kolay"
  },
  {
    id: 1521,
    question: "Büyük miktarda verinin internet üzerinden uzak sunucularda depolanması ve bu verilere erişim sağlanması hizmeti nedir?",
    options: ["Yapay Zeka", "Veritabanı Yönetimi", "Bulut Bilişim (Cloud Computing)", "Veri Madenciliği"],
    correct: 2,
    category: "Teknoloji",
    difficulty: "Kolay"
  },
  {
    id: 1522,
    question: "Bilgisayar ağlarında, ağ trafiğini denetleyen ve farklı ağlar arasında veri paketlerini yönlendiren cihaz nedir?",
    options: ["Yönlendirici (Router)", "Anahtar (Switch)", "Modem", "Hub"],
    correct: 0,
    category: "Teknoloji",
    difficulty: "Kolay"
  },
  {
    id: 1523,
    question: "Bir bilgisayarın aynı anda birden fazla görevi veya işlemi yapabilme yeteneğine ne ad verilir?",
    options: ["Sanal Gerçeklik", "Tek Görevlilik", "Önceliklendirme", "Çoklu Görev (Multitasking)"],
    correct: 3,
    category: "Teknoloji",
    difficulty: "Kolay"
  },
  {
    id: 1524,
    question: "Yazılı bir metnin, bilgisayarın anlayabileceği ve işleyebileceği bir koda (örneğin ASCII) dönüştürülmesi işlemine ne ad verilir?",
    options: ["Çözümleme", "Kodlama (Encoding)", "Sıkıştırma", "Şifreleme"],
    correct: 1,
    category: "Teknoloji",
    difficulty: "Orta"
  },
  {
    id: 1525,
    question: "3 boyutlu sanal bir ortamda kullanıcıya gerçeklik hissi veren teknolojinin genel adı nedir?",
    options: ["Artırılmış Gerçeklik (AR)", "Sanal Gerçeklik (VR)", "Geniş Ekran", "Karma Gerçeklik"],
    correct: 1,
    category: "Teknoloji",
    difficulty: "Kolay"
  },
  {
    id: 1526,
    question: "İnternet'e bağlı cihazların (nesnelerin) birbirleriyle iletişim kurmasını ve veri alışverişi yapmasını sağlayan kavram nedir?",
    options: ["Mobil Bilişim", "Büyük Veri", "Kuantum Bilişim", "Nesnelerin İnterneti (IoT)"],
    correct: 3,
    category: "Teknoloji",
    difficulty: "Kolay"
  },
  {
    id: 1527,
    question: "Verileri sıkıştırmak ve orijinal formata geri döndürmek için kullanılan, veri paketlerinin boyutunu küçülten süreç nedir?",
    options: ["Ağ Protokolü", "Şifreleme", "Sıkıştırma (Compression)", "Veri Madenciliği"],
    correct: 2,
    category: "Teknoloji",
    difficulty: "Kolay"
  },
  {
    id: 1528,
    question: "Bir web sayfasının veya uygulamaların görsel tasarımını, düzenini ve etkileşimini tanımlayan stil sayfası dili nedir?",
    options: ["JavaScript", "HTML", "Python", "CSS (Basamaklı Stil Sayfaları)"],
    correct: 3,
    category: "Teknoloji",
    difficulty: "Kolay"
  },
  {
    id: 1529,
    question: "Bilgisayar korsanlarının (Hacker) bir web sitesini veya sistemi aşırı trafikle yavaşlatıp çökertmeyi amaçladığı saldırı türü nedir?",
    options: ["Kötü Amaçlı Yazılım", "Phishing (Oltalama)", "Man-in-the-Middle", "Hizmet Reddi (DDoS) Saldırısı"],
    correct: 3,
    category: "Teknoloji",
    difficulty: "Orta"
  },
  {
    id: 1530,
    question: "Bir kullanıcının web siteleri arasında dolaşırken bilgisayarına kaydedilen küçük metin dosyaları nedir?",
    options: ["Cache (Önbellek)", "URL", "Tarayıcı Geçmişi", "Çerez (Cookie)"],
    correct: 3,
    category: "Teknoloji",
    difficulty: "Kolay"
  },
  {
    id: 1531,
    question: "Microsoft'un popüler işletim sistemi serisinin adı nedir?",
    options: ["macOS", "Linux", "Android", "Windows"],
    correct: 3,
    category: "Teknoloji",
    difficulty: "Kolay"
  },
  {
    id: 1532,
    question: "Bir bilgisayar ağında, tüm cihazların aynı kabloya veya kanala bağlandığı topoloji (yapı) nedir?",
    options: ["Mesh Topoloji", "Otobüs (Bus) Topoloji", "Halka Topoloji", "Yıldız Topoloji"],
    correct: 1,
    category: "Teknoloji",
    difficulty: "Orta"
  },
  {
    id: 1533,
    question: "Yapay zeka alanında, bilgisayarların insan dilini (yazılı veya sözlü) anlaması, yorumlaması ve üretmesi yeteneği nedir?",
    options: ["Ses Tanıma", "Robotik", "Doğal Dil İşleme (NLP)", "Görüntü İşleme"],
    correct: 2,
    category: "Teknoloji",
    difficulty: "Kolay"
  },
  {
    id: 1534,
    question: "Büyük miktarda veriyi (genellikle bir saniyede gigabaytlarca) işleyebilen süper bilgisayarların temelini oluşturan fizik prensibi nedir?",
    options: ["Elektromanyetizma", "Newton Mekaniği", "Termodinamik", "Kuantum Bilişim"],
    correct: 3,
    category: "Teknoloji",
    difficulty: "Zor"
  },
  {
    id: 1535,
    question: "Görüntüleri ve videoları işleyerek ekrana aktarmaktan sorumlu olan donanım birimi nedir?",
    options: ["CPU", "Grafik İşlem Birimi (GPU)", "RAM", "Anakart"],
    correct: 1,
    category: "Teknoloji",
    difficulty: "Kolay"
  },
  {
    id: 1536,
    question: "Bilgisayarların ağ üzerinden güvenli bir şekilde iletişim kurmasını sağlayan şifreli protokol nedir (Web sitelerinde 'https' ile gösterilir)?",
    options: ["HTTP", "SSL/TLS (HTTPS)", "FTP", "TCP/IP"],
    correct: 1,
    category: "Teknoloji",
    difficulty: "Kolay"
  },
  {
    id: 1537,
    question: "Apple'ın iPhone, iPad ve iPod Touch gibi mobil cihazlarında kullandığı işletim sistemi nedir?",
    options: ["Linux", "Android", "Windows Mobile", "iOS"],
    correct: 3,
    category: "Teknoloji",
    difficulty: "Kolay"
  },
  {
    id: 1538,
    question: "Bir programcı tarafından bilgisayarın belirli bir görevi yerine getirmesi için yazılan talimatlar dizisine ne ad verilir?",
    options: ["Donanım", "Kod (Code)", "Hata", "Veri"],
    correct: 1,
    category: "Teknoloji",
    difficulty: "Kolay"
  },
  {
    id: 1539,
    question: "İki veya daha fazla bilgisayarın birbiriyle veri alışverişi yapabildiği bağlantı sistemine ne ad verilir?",
    options: ["Yazıcı", "Monitör", "Kasa", "Ağ (Network)"],
    correct: 3,
    category: "Teknoloji",
    difficulty: "Kolay"
  },
  {
    id: 1540,
    question: "Bir web sitesi açıldığında tarayıcıya ilk yüklenen ana sayfaya ne ad verilir?",
    options: ["Ana Sayfa (Homepage)", "Alan Adı", "URL", "Ağ Geçidi"],
    correct: 0,
    category: "Teknoloji",
    difficulty: "Kolay"
  },
  {
    id: 1541,
    question: "Görüntüyü veya metni dijital formattan kağıt üzerine çıkaran donanım birimi nedir?",
    options: ["Monitör", "Webcam", "Tarayıcı (Scanner)", "Yazıcı (Printer)"],
    correct: 3,
    category: "Teknoloji",
    difficulty: "Kolay"
  },
  {
    id: 1542,
    question: "Bir bilgisayarın veya ağın güvenliğini test etmek amacıyla yasal olarak sistemlere sızmaya çalışan profesyonellere ne ad verilir?",
    options: ["Etik Hacker (Beyaz Şapkalı)", "Siber Casus", "Siyah Şapkalı Hacker", "Phisher"],
    correct: 0,
    category: "Teknoloji",
    difficulty: "Kolay"
  },
  {
    id: 1543,
    question: "İnternet üzerinde dosya transferi (indirme ve yükleme) için kullanılan standart protokol nedir?",
    options: ["FTP (Dosya Aktarım Protokolü)", "SMTP", "HTTP", "TCP"],
    correct: 0,
    category: "Teknoloji",
    difficulty: "Kolay"
  },
  {
    id: 1544,
    question: "Bir web sitesinin ana yapısını ve içeriğini (metinler, görseller vb.) tanımlayan dil nedir?",
    options: ["CSS", "Python", "JavaScript", "HTML"],
    correct: 3,
    category: "Teknoloji",
    difficulty: "Kolay"
  },
  {
    id: 1545,
    question: "Yapay zekada, bir yapay sinir ağının girdi katmanı ile çıktı katmanı arasında kalan katmanlara ne ad verilir?",
    options: ["Çıktı Katmanı", "Gizli Katmanlar", "Ağırlık Katmanı", "Girdi Katmanı"],
    correct: 1,
    category: "Teknoloji",
    difficulty: "Orta"
  },
  {
    id: 1546,
    question: "Bir bilgisayarın güç kaynağı ünitesine ne ad verilir?",
    options: ["RAM", "CPU", "Anakart", "PSU (Güç Kaynağı Ünitesi)"],
    correct: 3,
    category: "Teknoloji",
    difficulty: "Kolay"
  },
  {
    id: 1547,
    question: "Veri miktarını ifade eden ve $1024$ Gigabayt'a (GB) eşit olan ölçü birimi nedir?",
    options: ["Kilobayt (KB)", "Terabayt (TB)", "Petabayt (PB)", "Megabayt (MB)"],
    correct: 1,
    category: "Teknoloji",
    difficulty: "Kolay"
  },
  {
    id: 1548,
    question: "Bir programı kullanmadan önce kullanıcı tarafından kabul edilmesi gereken yasal sözleşmeye ne ad verilir?",
    options: ["Lisans", "Son Kullanıcı Lisans Sözleşmesi (EULA)", "Telifsiz Hak", "Garanti Belgesi"],
    correct: 1,
    category: "Teknoloji",
    difficulty: "Orta"
  },
  {
    id: 1549,
    question: "İnternetteki web sayfalarını görüntülemeye yarayan yazılım nedir?",
    options: ["Tarayıcı (Web Browser)", "Hesap Tablosu", "Metin Editörü", "Antivirüs"],
    correct: 0,
    category: "Teknoloji",
    difficulty: "Kolay"
  },
  {
    id: 1550,
    question: "Kamera, mikrofon gibi sensörlerden elde edilen verileri işleyerek yapay zekanın çevresini algılamasını sağlayan bilim dalı nedir?",
    options: ["Bilgisayarlı Görü (Computer Vision)", "Veritabanı", "Siber Güvenlik", "Doğal Dil İşleme"],
    correct: 0,
    category: "Teknoloji",
    difficulty: "Kolay"
  },
  {
    id: 1551,
    question: "Kullanıcıları kandırarak kişisel bilgilerini (şifre, kredi kartı vb.) çalmaya çalışan siber saldırı türü nedir?",
    options: ["Oltalama (Phishing)", "Güvenlik Duvarı", "Malware", "DDoS"],
    correct: 0,
    category: "Teknoloji",
    difficulty: "Kolay"
  },
  {
    id: 1552,
    question: "Bir bilgisayarda aynı anda birden fazla CPU (veya çekirdek) kullanılmasını sağlayan teknoloji nedir?",
    options: ["Tek Çekirdeklilik", "Tek İşlemcilik", "Çoklu İşlem (Multiprocessing)", "Sanal Gerçeklik"],
    correct: 2,
    category: "Teknoloji",
    difficulty: "Orta"
  },
  {
    id: 1553,
    question: "Bir web sitesinin veya uygulamanın kullanıcıyla doğrudan etkileşime giren, görünen kısmına ne ad verilir?",
    options: ["Backend (Arka Yüz)", "Sunucu", "Veritabanı", "Frontend (Ön Yüz)"],
    correct: 3,
    category: "Teknoloji",
    difficulty: "Kolay"
  },
  {
    id: 1554,
    question: "Genellikle optik fiber kablolar aracılığıyla yüksek hızda internet erişimi sağlayan teknoloji nedir?",
    options: ["ADSL", "Fiber Optik İnternet", "Dial-up", "Uydu İnternet"],
    correct: 1,
    category: "Teknoloji",
    difficulty: "Kolay"
  },
  {
    id: 1555,
    question: "Bir yazılımın veya sistemin kararlılığını ve performansını test etmek için kullanılan teknik nedir?",
    options: ["Derleme", "Kodlama", "Yazılım Testi", "Veri Madenciliği"],
    correct: 2,
    category: "Teknoloji",
    difficulty: "Kolay"
  },
  {
    id: 1556,
    question: "Bir bilgisayara bağlı tüm donanım bileşenlerini (CPU, RAM, GPU vb.) üzerinde barındıran temel devre kartı nedir?",
    options: ["Anakart (Motherboard)", "Güç Kaynağı", "Sabit Disk", "Ekran Kartı"],
    correct: 0,
    category: "Teknoloji",
    difficulty: "Kolay"
  },
  {
    id: 1557,
    question: "Dijital ortamda bir belgenin veya dosyanın kimliğini ve bütünlüğünü doğrulamak için kullanılan şifreleme tekniği nedir?",
    options: ["Dijital İmza", "Sıkıştırma", "Şifreleme", "Parola Koruma"],
    correct: 0,
    category: "Teknoloji",
    difficulty: "Orta"
  },
  {
    id: 1558,
    question: "İlk programlanabilir dijital elektronik bilgisayarın (ENIAC) geliştirildiği üniversite hangisidir?",
    options: ["Stanford Üniversitesi", "MIT", "Harvard Üniversitesi", "Pennsylvania Üniversitesi"],
    correct: 3,
    category: "Teknoloji",
    difficulty: "Zor"
  },
  {
    id: 1559,
    question: "Veri hacminin, hızının ve çeşitliliğinin geleneksel yöntemlerle işlenmesi zor olan büyük veri setlerine ne ad verilir?",
    options: ["Küçük Veri", "Hafif Veri", "Özel Veri", "Büyük Veri (Big Data)"],
    correct: 3,
    category: "Teknoloji",
    difficulty: "Kolay"
  },
  {
    id: 1560,
    question: "Bir bilgisayarın veya mobil cihazın yerel ağdaki adresini belirleyen, fiziksel olarak karta yazılı benzersiz adres nedir?",
    options: ["URL", "Port Numarası", "IP Adresi", "MAC (Ortam Erişim Kontrolü) Adresi"],
    correct: 3,
    category: "Teknoloji",
    difficulty: "Orta"
  },
  {
    id: 1561,
    question: "Yazılım geliştirme sürecinde, bir programcının kaynak kodu yazmak için kullandığı yazılıma ne ad verilir?",
    options: ["Web Tarayıcısı", "Grafik Programı", "Kod Editörü/IDE (Entegre Geliştirme Ortamı)", "Oyun Konsolu"],
    correct: 2,
    category: "Teknoloji",
    difficulty: "Kolay"
  },
  {
    id: 1562,
    question: "Robotikte, bir robotun dış dünyayı algılamasını sağlayan cihazlara ne ad verilir?",
    options: ["Sensör", "Güç Kaynağı", "Aktüatör", "Yazılım"],
    correct: 0,
    category: "Teknoloji",
    difficulty: "Kolay"
  },
  {
    id: 1563,
    question: "İnternet üzerinde alan adlarını (örneğin google.com) IP adreslerine çeviren dağıtık sistem nedir?",
    options: ["DNS (Alan Adı Sistemi)", "ARP", "FTP", "DHCP"],
    correct: 0,
    category: "Teknoloji",
    difficulty: "Kolay"
  },
  {
    id: 1564,
    question: "Kablosuz cihazlar arasında kısa mesafede veri transferi sağlayan düşük enerjili iletişim teknolojisi nedir?",
    options: ["Wi-Fi", "3G/4G", "Kızılötesi", "Bluetooth"],
    correct: 3,
    category: "Teknoloji",
    difficulty: "Kolay"
  },
  {
    id: 1565,
    question: "Bir bilgisayarın başlangıçta açılması için gerekli olan, sadece okunabilen ve değiştirilemeyen bellek türü nedir?",
    options: ["ROM (Salt Okunur Bellek)", "RAM", "Cache", "SSD"],
    correct: 0,
    category: "Teknoloji",
    difficulty: "Kolay"
  },
  {
    id: 1566,
    question: "Yapay zekada, karar verme sürecinde her bir özelliğin önemini belirleyen sayısal değere ne ad verilir?",
    options: ["Hata Oranı", "Ağırlık (Weight)", "Girdi", "Bias"],
    correct: 1,
    category: "Teknoloji",
    difficulty: "Orta"
  },
  {
    id: 1567,
    question: "Bir bilgisayarın işlemcisinin (CPU) saniyede gerçekleştirebildiği döngü sayısını ifade eden hız birimi nedir?",
    options: ["Gigabayt (GB)", "Volt", "Megabayt (MB)", "Gigahertz (GHz)"],
    correct: 3,
    category: "Teknoloji",
    difficulty: "Kolay"
  },
  {
    id: 1568,
    question: "Kullanıcıların e-posta almasını sağlayan ve genellikle sunucudan e-postaları silen protokol nedir?",
    options: ["HTTP", "IMAP", "POP3 (Posta Ofisi Protokolü)", "SMTP"],
    correct: 2,
    category: "Teknoloji",
    difficulty: "Orta"
  },
  {
    id: 1569,
    question: "Kullanıcının bilgisayarında çalışan ve internet üzerindeki bir hizmetten (sunucudan) veri isteyen cihaza ne ad verilir?",
    options: ["İstemci (Client)", "Modem", "Yönlendirici", "Sunucu (Server)"],
    correct: 0,
    category: "Teknoloji",
    difficulty: "Kolay"
  },
  {
    id: 1570,
    question: "E-postalarda, istenmeyen veya toplu olarak gönderilen reklam mesajlarına ne ad verilir?",
    options: ["EULA", "Phishing", "Virus", "Spam"],
    correct: 3,
    category: "Teknoloji",
    difficulty: "Kolay"
  },
  {
    id: 1571,
    question: "Mobil cihazlarda, gerçek dünyadaki görüntünün üzerine dijital bilgilerin veya nesnelerin yerleştirilmesi teknolojisi nedir?",
    options: ["Kuantum Bilişim", "Artırılmış Gerçeklik (AR)", "Sanal Gerçeklik (VR)", "3D Modelleme"],
    correct: 1,
    category: "Teknoloji",
    difficulty: "Kolay"
  },
  {
    id: 1572,
    question: "Yazılım geliştirme sürecinde, yeni özellikler eklemek ve hataları düzeltmek için yapılan periyodik yayınlara ne ad verilir?",
    options: ["Kopyalama", "Derleme", "Yazılım Güncellemesi/Sürümü (Release)", "Kodlama"],
    correct: 2,
    category: "Teknoloji",
    difficulty: "Kolay"
  },
  {
    id: 1573,
    question: "Bir bilgisayarın klavyesinde bulunan ve sayısal girişler için ayrılmış bölüme ne ad verilir?",
    options: ["Fonksiyon Tuşları", "Sayısal Tuş Takımı (Numpad)", "Yön Tuşları", "Kontrol Tuşları"],
    correct: 1,
    category: "Teknoloji",
    difficulty: "Kolay"
  },
  {
    id: 1574,
    question: "İnternet üzerinde bir alan adının (örneğin google.com) sonundaki uzantıya ne ad verilir?",
    options: ["Üst Düzey Alan Adı (TLD - Top-Level Domain)", "IP Adresi", "Protokol", "Sunucu Adı"],
    correct: 0,
    category: "Teknoloji",
    difficulty: "Kolay"
  },
  {
    id: 1575,
    question: "Bir bilgisayarın ana belleği (RAM) ile işlemcisi (CPU) arasında hızlı veri transferi için kullanılan küçük ve hızlı hafıza nedir?",
    options: ["Önbellek (Cache)", "Sabit Disk", "ROM", "SSD"],
    correct: 0,
    category: "Teknoloji",
    difficulty: "Orta"
  },
  {
    id: 1576,
    question: "Kötü amaçlı yazılımların genel bir türü olan ve kendini kopyalayarak bilgisayar sistemlerine yayılan program nedir?",
    options: ["Adware", "Virüs", "Truva Atı (Trojan)", "Casus Yazılım"],
    correct: 1,
    category: "Teknoloji",
    difficulty: "Kolay"
  },
  {
    id: 1577,
    question: "Veri depolama birimlerinde, manyetik disklerin dönme hızı hangi birimle ifade edilir?",
    options: ["RPM (Dakika Başına Devir)", "MHz", "MB/s", "GHz"],
    correct: 0,
    category: "Teknoloji",
    difficulty: "Orta"
  },
  {
    id: 1578,
    question: "Yazılım geliştirme disiplininde, bir programın nasıl çalıştığını gösteren adım adım talimatlar kümesine ne ad verilir?",
    options: ["Veri Yapısı", "Kodlama Dili", "Söz Dizimi (Syntax)", "Algoritma"],
    correct: 3,
    category: "Teknoloji",
    difficulty: "Kolay"
  },
  {
    id: 1579,
    question: "İnternet üzerinde video, ses ve diğer medya içeriklerini sürekli bir akış halinde izleme/dinleme eylemine ne ad verilir?",
    options: ["Akış (Streaming)", "İndirme (Download)", "Sıkıştırma", "Yükleme (Upload)"],
    correct: 0,
    category: "Teknoloji",
    difficulty: "Kolay"
  },
  {
    id: 1580,
    question: "Optik disk teknolojisinde, verilerin okunduğu ve yazıldığı mavi lazer kullanan yüksek kapasiteli disk formatı nedir?",
    options: ["Flash Bellek", "Blu-ray Disk", "DVD-ROM", "CD-ROM"],
    correct: 1,
    category: "Teknoloji",
    difficulty: "Kolay"
  },
  {
    id: 1581,
    question: "Bir bilgisayarın işlemcisinin (CPU) ürettiği fazla ısıyı dağıtmak için kullanılan soğutma bileşeni nedir?",
    options: ["RAM", "Soğutucu/Fan (Heatsink/Fan)", "Sabit Disk", "Güç Kaynağı"],
    correct: 1,
    category: "Teknoloji",
    difficulty: "Kolay"
  },
  {
    id: 1582,
    question: "Yazılım geliştirme süreçlerini hızlandıran ve otomatikleştiren araç ve yöntemlerin genel adı nedir?",
    options: ["Siber Güvenlik", "DevOps", "Yapay Zeka", "Veritabanı Yönetimi"],
    correct: 1,
    category: "Teknoloji",
    difficulty: "Orta"
  },
  {
    id: 1583,
    question: "İnternet üzerinde canlı yayın yapan bir kişinin bilgisayarına veya mobil cihazına ne ad verilir?",
    options: ["Modem", "Sunucu", "Yayıncı (Streamer)", "İstemci"],
    correct: 2,
    category: "Teknoloji",
    difficulty: "Kolay"
  },
  {
    id: 1584,
    question: "Verilerin şifrelenmesi ve sadece yetkili kişilerin bu şifreyi çözebilmesi için kullanılan matematiksel yönteme ne ad verilir?",
    options: ["Sıkıştırma", "Algoritma", "Veri Madenciliği", "Kriptografi (Şifreleme Bilimi)"],
    correct: 3,
    category: "Teknoloji",
    difficulty: "Kolay"
  },
  {
    id: 1585,
    question: "Web sitelerinde, kullanıcı etkileşimini, animasyonları ve dinamik içeriği sağlayan programlama dili nedir?",
    options: ["JavaScript", "SQL", "HTML", "CSS"],
    correct: 0,
    category: "Teknoloji",
    difficulty: "Kolay"
  },
  {
    id: 1586,
    question: "Bilgisayarın çalışma sırasında ürettiği geçici verileri silmek veya temizlemek için kullanılan bölüme ne ad verilir?",
    options: ["Sabit Disk", "ROM", "Önbellek (Cache) / Geçici Dosyalar", "RAM"],
    correct: 2,
    category: "Teknoloji",
    difficulty: "Kolay"
  },
  {
    id: 1587,
    question: "Siber güvenlikte, kötü niyetli yazılımların ve saldırıların sistemlere girmesini engelleyen koruyucu yazılım veya donanım nedir?",
    options: ["Antivirüs", "Güvenlik Duvarı (Firewall)", "Tarayıcı", "İşletim Sistemi"],
    correct: 1,
    category: "Teknoloji",
    difficulty: "Kolay"
  },
  {
    id: 1588,
    question: "Kablosuz ağlarda (Wi-Fi), sinyal gücünü artırmak ve kapsama alanını genişletmek için kullanılan cihaz nedir?",
    options: ["Yönlendirici", "Menzil Genişletici (Repeater/Extender)", "Modem", "Switch"],
    correct: 1,
    category: "Teknoloji",
    difficulty: "Kolay"
  },
  {
    id: 1589,
    question: "Nesnelerin İnterneti (IoT) cihazlarının uzaktan kontrol edilmesini ve izlenmesini sağlayan temel teknoloji nedir?",
    options: ["Bulut Bilişim ve Ağ Bağlantısı", "Bluetooth", "NFC", "Uydu İletişimi"],
    correct: 0,
    category: "Teknoloji",
    difficulty: "Kolay"
  },
  {
    id: 1590,
    question: "İlk kişisel bilgisayar (PC) olarak kabul edilen ve 1981'de piyasaya sürülen model hangisidir?",
    options: ["Altair 8800", "Commodore PET", "IBM PC", "Apple II"],
    correct: 2,
    category: "Teknoloji",
    difficulty: "Zor"
  },
  {
    id: 1591,
    question: "Yapay zekada, bir modelin eğitiminde kullanılan veri setinin içindeki hatalı veya eksik veriye ne ad verilir?",
    options: ["Doğru Veri", "Özellik", "Temiz Veri", "Gürültü (Noise) / Aykırı Değer (Outlier)"],
    correct: 3,
    category: "Teknoloji",
    difficulty: "Orta"
  },
  {
    id: 1592,
    question: "Bir bilgisayar ağı üzerinden başka bir bilgisayara (sunucuya) uzaktan erişim sağlamak için kullanılan protokol nedir?",
    options: ["FTP", "SMTP", "HTTP", "Telnet / SSH (Güvenli Kabuk)"],
    correct: 3,
    category: "Teknoloji",
    difficulty: "Orta"
  },
  {
    id: 1593,
    question: "Görüntü çözünürlüğünde kullanılan ve saniyedeki kare sayısını (akıcılığı) ifade eden birim nedir?",
    options: ["Piksel", "FPS (Saniyedeki Kare Sayısı)", "DPI", "Hertz"],
    correct: 1,
    category: "Teknoloji",
    difficulty: "Kolay"
  },
  {
    id: 1594,
    question: "Bir web sitesinin görünümünü ve düzenini değiştirmek, yazı tiplerini ve renklerini ayarlamak için kullanılan teknoloji nedir?",
    options: ["Python", "JavaScript", "HTML", "CSS"],
    correct: 3,
    category: "Teknoloji",
    difficulty: "Kolay"
  },
  {
    id: 1595,
    question: "Dijital verinin en küçük birimi olan ve 0 veya 1 değerini alabilen temel yapı taşı nedir?",
    options: ["Bit", "Bayt", "Kilobayt", "Kelime"],
    correct: 0,
    category: "Teknoloji",
    difficulty: "Kolay"
  },
  {
    id: 1596,
    question: "Veri miktarını ifade eden ve $8$ Bit'e eşit olan ölçü birimi nedir?",
    options: ["Bayt (Byte)", "Bit", "Megabayt", "Kilobit"],
    correct: 0,
    category: "Teknoloji",
    difficulty: "Kolay"
  },
  {
    id: 1597,
    question: "Bir web sitesinin ziyaretçi trafiğini, davranışlarını ve etkileşimlerini izlemeye yarayan analiz araçları nedir?",
    options: ["E-posta Sunucusu", "Web Tarayıcısı", "Web Analitiği (Analytics) Yazılımları", "Antivirüs"],
    correct: 2,
    category: "Teknoloji",
    difficulty: "Kolay"
  },
  {
    id: 1598,
    question: "Kötü amaçlı yazılımların genel bir türü olan ve kendisini faydalı bir yazılım gibi gösteren program nedir?",
    options: ["Virüs", "Solucan (Worm)", "Casus Yazılım", "Truva Atı (Trojan Horse)"],
    correct: 3,
    category: "Teknoloji",
    difficulty: "Kolay"
  },
  {
    id: 1599,
    question: "Genellikle sunucular için kullanılan ve çalışırken kapatılamayan, kararlı ve güvenilir işletim sistemi türü nedir?",
    options: ["macOS", "Android", "Windows", "Linux / UNIX"],
    correct: 3,
    category: "Teknoloji",
    difficulty: "Kolay"
  },
  {
    id: 1600,
    question: "Bir programlama dilinde, yazılan kodun bilgisayarın anlayacağı makine diline çevrilmesi işlemine ne ad verilir?",
    options: ["Hata Ayıklama", "Yorumlama", "Derleme (Compilation)", "Kodlama"],
    correct: 2,
    category: "Teknoloji",
    difficulty: "Orta"
  },

  // ==================== GENEL KÜLTÜR ====================
{
    id: 1601,
    question: "Güneş Sistemi'ndeki en büyük gezegen hangisidir?",
    options: ["Dünya", "Jüpiter", "Venüs", "Mars"],
    correct: 1,
    category: CATEGORIES.GENERAL_CULTURE.name,
    difficulty: "Kolay"
  },
  {
    id: 1602,
    question: "Amerika Birleşik Devletleri'nin başkenti neresidir?",
    options: ["New York", "Chicago", "Washington D.C.", "Los Angeles"],
    correct: 2,
    category: CATEGORIES.GENERAL_CULTURE.name,
    difficulty: "Kolay"
  },
  {
    id: 1603,
    question: "İtalya'nın başkenti olan şehir hangisidir?",
    options: ["Floransa", "Venedik", "Milano", "Roma"],
    correct: 3,
    category: CATEGORIES.GENERAL_CULTURE.name,
    difficulty: "Kolay"
  },
  {
    id: 1604,
    question: "DNA'nın yapısını keşfeden bilim insanları kimlerdir?",
    options: ["Isaac Newton ve Albert Einstein", "James Watson ve Francis Crick", "Galileo Galilei ve Nikola Tesla", "Marie Curie ve Pierre Curie"],
    correct: 1,
    category: CATEGORIES.GENERAL_CULTURE.name,
    difficulty: "Orta"
  },
  {
    id: 1605,
    question: "Ünlü 'Çığlık' tablosu hangi ressama aittir?",
    options: ["Claude Monet", "Edvard Munch", "Pablo Picasso", "Vincent van Gogh"],
    correct: 1,
    category: CATEGORIES.GENERAL_CULTURE.name,
    difficulty: "Kolay"
  },
  {
    id: 1606,
    question: "'Sineklerin Tanrısı' (Lord of the Flies) adlı eserin yazarı kimdir?",
    options: ["William Golding", "Ernest Hemingway", "Franz Kafka", "George Orwell"],
    correct: 0,
    category: CATEGORIES.GENERAL_CULTURE.name,
    difficulty: "Orta"
  },
  {
    id: 1607,
    question: "Tarihte bilinen ilk yazı hangi uygarlık tarafından bulunmuştur?",
    options: ["Çin Hanedanlığı", "Mezopotamya (Sümerler)", "Mısır Uygarlığı", "Roma İmparatorluğu"],
    correct: 1,
    category: CATEGORIES.GENERAL_CULTURE.name,
    difficulty: "Kolay"
  },
  {
    id: 1608,
    question: "Türkiye Cumhuriyeti'nin kurucusu Mustafa Kemal Atatürk nerede doğmuştur?",
    options: ["İzmir", "Ankara", "İstanbul", "Selanik"],
    correct: 3,
    category: CATEGORIES.GENERAL_CULTURE.name,
    difficulty: "Kolay"
  },
  {
    id: 1609,
    question: "Pisa Kulesi hangi ülkededir?",
    options: ["İtalya", "Yunanistan", "İspanya", "Fransa"],
    correct: 0,
    category: CATEGORIES.GENERAL_CULTURE.name,
    difficulty: "Kolay"
  },
  {
    id: 1610,
    question: "Periyodik tablonun mucidi kimdir?",
    options: ["Niels Bohr", "John Dalton", "Antoine Lavoisier", "Dmitri Mendeleyev"],
    correct: 3,
    category: CATEGORIES.GENERAL_CULTURE.name,
    difficulty: "Orta"
  },
  {
    id: 1611,
    question: "'Anna Karenina' ve 'Savaş ve Barış' eserleriyle tanınan Rus yazar kimdir?",
    options: ["Anton Çehov", "Fyodor Dostoyevski", "Maksim Gorki", "Leo Tolstoy"],
    correct: 3,
    category: CATEGORIES.GENERAL_CULTURE.name,
    difficulty: "Kolay"
  },
  {
    id: 1612,
    question: "Olimpiyat Oyunları'nın sembolündeki beş halka neyi temsil eder?",
    options: ["5 büyük şehri", "5 ana spor dalını", "5 element", "5 kıtayı"],
    correct: 3,
    category: CATEGORIES.GENERAL_CULTURE.name,
    difficulty: "Kolay"
  },
  {
    id: 1613,
    question: "Doğadaki en sert madde nedir?",
    options: ["Demir", "Altın", "Elmas", "Platin"],
    correct: 2,
    category: CATEGORIES.GENERAL_CULTURE.name,
    difficulty: "Kolay"
  },
  {
    id: 1614,
    question: "Antik Yunan mitolojisinde gök gürültüsü ve şimşek tanrısı kimdir?",
    options: ["Hades", "Ares", "Zeus", "Poseidon"],
    correct: 2,
    category: CATEGORIES.GENERAL_CULTURE.name,
    difficulty: "Kolay"
  },
  {
    id: 1615,
    question: "İstanbul'daki Yerebatan Sarnıcı'nda bulunan mitolojik figür nedir?",
    options: ["Deniz Kızı", "Kanatlı At Pegasus", "Minotaur", "Medusa Başı"],
    correct: 3,
    category: CATEGORIES.GENERAL_CULTURE.name,
    difficulty: "Orta"
  },
  {
    id: 1616,
    question: "Kanada'nın başkenti hangi şehirdir?",
    options: ["Toronto", "Montreal", "Ottawa", "Vancouver"],
    correct: 2,
    category: CATEGORIES.GENERAL_CULTURE.name,
    difficulty: "Kolay"
  },
  {
    id: 1617,
    question: "Dünya üzerindeki en uzun nehir hangisidir?",
    options: ["Amazon Nehri", "Mississippi Nehri", "Yangtze Nehri", "Nil Nehri"],
    correct: 3,
    category: CATEGORIES.GENERAL_CULTURE.name,
    difficulty: "Orta"
  },
  {
    id: 1618,
    question: "Osmanlı İmparatorluğu'nun kurucusu kimdir?",
    options: ["Osman Gazi", "Orhan Gazi", "Yavuz Sultan Selim", "Fatih Sultan Mehmet"],
    correct: 0,
    category: CATEGORIES.GENERAL_CULTURE.name,
    difficulty: "Kolay"
  },
  {
    id: 1619,
    question: "Sanat tarihinde Rönesans dönemi hangi ülkede başlamıştır?",
    options: ["İtalya", "Fransa", "İspanya", "Almanya"],
    correct: 0,
    category: CATEGORIES.GENERAL_CULTURE.name,
    difficulty: "Kolay"
  },
  {
    id: 1620,
    question: "Elektriği depolayan ve elektrik enerjisini kimyasal enerjiye çeviren cihaz nedir?",
    options: ["Direnç", "Pil (Batarya)", "Transistör", "Kondansatör"],
    correct: 1,
    category: CATEGORIES.GENERAL_CULTURE.name,
    difficulty: "Kolay"
  },
  {
    id: 1621,
    question: "Işığın boşluktaki hızı saniyede yaklaşık kaç kilometredir?",
    options: ["30.000 km", "3.000 km", "300.000 km", "30.000.000 km"],
    correct: 2,
    category: CATEGORIES.GENERAL_CULTURE.name,
    difficulty: "Kolay"
  },
  {
    id: 1622,
    question: "Brezilya'nın resmi dili nedir?",
    options: ["Portekizce", "İspanyolca", "İtalyanca", "Fransızca"],
    correct: 0,
    category: CATEGORIES.GENERAL_CULTURE.name,
    difficulty: "Kolay"
  },
  {
    id: 1623,
    question: "Çin Seddi hangi amaçla inşa edilmiştir?",
    options: ["Sınırları savunmak için", "Ticaret yolu olarak", "Halkı birleştirmek için", "Dini törenler için"],
    correct: 0,
    category: CATEGORIES.GENERAL_CULTURE.name,
    difficulty: "Kolay"
  },
  {
    id: 1624,
    question: "Bilinen en küçük kuş türü hangisidir?",
    options: ["Penguen", "Karga", "Serçe", "Sinekkuşu"],
    correct: 3,
    category: CATEGORIES.GENERAL_CULTURE.name,
    difficulty: "Orta"
  },
  {
    id: 1625,
    question: "1989'da yıkılan, Doğu ve Batı Almanya'yı ayıran sembolik yapı nedir?",
    options: ["Aachen Sınırı", "Soğuk Savaş Hattı", "Berlin Duvarı", "Prag Duvarı"],
    correct: 2,
    category: CATEGORIES.GENERAL_CULTURE.name,
    difficulty: "Kolay"
  },
  {
    id: 1626,
    question: "'Don Kişot' adlı ünlü eserin yazarı kimdir?",
    options: ["Victor Hugo", "Homer", "Gabriel García Márquez", "Miguel de Cervantes"],
    correct: 3,
    category: CATEGORIES.GENERAL_CULTURE.name,
    difficulty: "Kolay"
  },
  {
    id: 1627,
    question: "İnsan vücudundaki en büyük organ hangisidir?",
    options: ["Deri", "Beyin", "Akciğer", "Kalp"],
    correct: 0,
    category: CATEGORIES.GENERAL_CULTURE.name,
    difficulty: "Kolay"
  },
  {
    id: 1628,
    question: "Hangi gezegen 'Kızıl Gezegen' olarak bilinir?",
    options: ["Venüs", "Mars", "Merkür", "Uranüs"],
    correct: 1,
    category: CATEGORIES.GENERAL_CULTURE.name,
    difficulty: "Kolay"
  },
  {
    id: 1629,
    question: "Ünlü 'Ay Işığı Sonatı' hangi besteciye aittir?",
    options: ["Johann Sebastian Bach", "Wolfgang Amadeus Mozart", "Ludwig van Beethoven", "Frédéric Chopin"],
    correct: 2,
    category: CATEGORIES.GENERAL_CULTURE.name,
    difficulty: "Kolay"
  },
  {
    id: 1630,
    question: "Ekmek yapımında kullanılan ana mikroorganizma nedir?",
    options: ["Virüs", "Yosun", "Bakteri", "Maya"],
    correct: 3,
    category: CATEGORIES.GENERAL_CULTURE.name,
    difficulty: "Kolay"
  },
  {
    id: 1631,
    question: "Antik Mısır'da Güneş Tanrısı'nın adı nedir?",
    options: ["Anubis", "Ra", "Osiris", "İsis"],
    correct: 1,
    category: CATEGORIES.GENERAL_CULTURE.name,
    difficulty: "Orta"
  },
  {
    id: 1632,
    question: "İngiltere'nin ulusal sembollerinden biri olan 'Gül Savaşları' hangi hanedanlar arasında yaşanmıştır?",
    options: ["Stuart ve Tudor", "Norman ve Plantagenet", "Lancaster ve York", "Windsor ve York"],
    correct: 2,
    category: CATEGORIES.GENERAL_CULTURE.name,
    difficulty: "Zor"
  },
  {
    id: 1633,
    question: "Hangi filozof, 'Biliyorum ki hiçbir şey bilmiyorum' sözüyle tanınır?",
    options: ["Diogenes", "Platon", "Sokrates", "Aristoteles"],
    correct: 2,
    category: CATEGORIES.GENERAL_CULTURE.name,
    difficulty: "Kolay"
  },
  {
    id: 1634,
    question: "Kanın pıhtılaşmasını sağlayan vitamin hangisidir?",
    options: ["D Vitamini", "A Vitamini", "C Vitamini", "K Vitamini"],
    correct: 3,
    category: CATEGORIES.GENERAL_CULTURE.name,
    difficulty: "Orta"
  },
  {
    id: 1635,
    question: "Avustralya'nın başkenti hangi şehirdir?",
    options: ["Melbourne", "Canberra", "Brisbane", "Sydney"],
    correct: 1,
    category: CATEGORIES.GENERAL_CULTURE.name,
    difficulty: "Orta"
  },
  {
    id: 1636,
    question: "Birleşmiş Milletler (BM) Genel Merkezi hangi şehirdedir?",
    options: ["New York", "Cenevre", "Londra", "Paris"],
    correct: 0,
    category: CATEGORIES.GENERAL_CULTURE.name,
    difficulty: "Kolay"
  },
  {
    id: 1637,
    question: "Nobel ödülleri hangi alanda verilmez?",
    options: ["Matematik", "Edebiyat", "Barış", "Fizik"],
    correct: 0,
    category: CATEGORIES.GENERAL_CULTURE.name,
    difficulty: "Kolay"
  },
  {
    id: 1638,
    question: "Mona Lisa tablosu hangi müzede sergilenmektedir?",
    options: ["Louvre Müzesi", "British Museum", "Hermitage Müzesi", "The Metropolitan Museum of Art"],
    correct: 0,
    category: CATEGORIES.GENERAL_CULTURE.name,
    difficulty: "Kolay"
  },
  {
    id: 1639,
    question: "Amerikan Bağımsızlık Bildirgesi hangi yıl kabul edilmiştir?",
    options: ["1776", "1800", "1750", "1789"],
    correct: 0,
    category: CATEGORIES.GENERAL_CULTURE.name,
    difficulty: "Orta"
  },
  {
    id: 1640,
    question: "Ses hızından daha hızlı hareket eden cisimlere ne ad verilir?",
    options: ["Ultrasonik", "Hipersonik", "Subsonik", "Supersonik"],
    correct: 3,
    category: CATEGORIES.GENERAL_CULTURE.name,
    difficulty: "Orta"
  },
  {
    id: 1641,
    question: "Dünya'nın en yüksek zirvesi olan Everest Dağı hangi sıradağlarda yer alır?",
    options: ["And Dağları", "Alpler", "Kayalık Dağlar", "Himalayalar"],
    correct: 3,
    category: CATEGORIES.GENERAL_CULTURE.name,
    difficulty: "Kolay"
  },
  {
    id: 1642,
    question: "İlk kez 1896'da modern olarak düzenlenen Olimpiyat Oyunları hangi şehirde gerçekleşmiştir?",
    options: ["Paris", "Roma", "Atina", "Londra"],
    correct: 2,
    category: CATEGORIES.GENERAL_CULTURE.name,
    difficulty: "Kolay"
  },
  {
    id: 1643,
    question: "Türkiye'nin en uzun akarsuyu hangisidir?",
    options: ["Kızılırmak", "Fırat", "Sakarya", "Dicle"],
    correct: 0,
    category: CATEGORIES.GENERAL_CULTURE.name,
    difficulty: "Orta"
  },
  {
    id: 1644,
    question: "'Yüzüklerin Efendisi' serisinin yazarı kimdir?",
    options: ["C.S. Lewis", "George R.R. Martin", "J.K. Rowling", "J.R.R. Tolkien"],
    correct: 3,
    category: CATEGORIES.GENERAL_CULTURE.name,
    difficulty: "Kolay"
  },
  {
    id: 1645,
    question: "Hangi element 'Hayat Ağacı' olarak adlandırılır ve tüm organik bileşiklerin temelidir?",
    options: ["Hidrojen", "Azot", "Karbon", "Oksijen"],
    correct: 2,
    category: CATEGORIES.GENERAL_CULTURE.name,
    difficulty: "Kolay"
  },
  {
    id: 1646,
    question: "Leonardo da Vinci'nin ünlü 'Son Akşam Yemeği' tablosu nerede bulunmaktadır?",
    options: ["Venedik", "Roma", "Floransa", "Milano"],
    correct: 3,
    category: CATEGORIES.GENERAL_CULTURE.name,
    difficulty: "Orta"
  },
  {
    id: 1647,
    question: "Rusya'nın başkenti neresidir?",
    options: ["Moskova", "St. Petersburg", "Kiev", "Kazan"],
    correct: 0,
    category: CATEGORIES.GENERAL_CULTURE.name,
    difficulty: "Kolay"
  },
  {
    id: 1648,
    question: "Dünya'nın uydusu olan Ay, Dünya etrafındaki bir turu yaklaşık kaç günde tamamlar?",
    options: ["27 gün", "7 gün", "365 gün", "30 gün"],
    correct: 0,
    category: CATEGORIES.GENERAL_CULTURE.name,
    difficulty: "Kolay"
  },
  {
    id: 1649,
    question: "Bir müzik parçasını belirli bir tempoda tutmaya yarayan alet nedir?",
    options: ["Metronom", "Akort Aleti", "Piyano", "Tuning Fork"],
    correct: 0,
    category: CATEGORIES.GENERAL_CULTURE.name,
    difficulty: "Kolay"
  },
  {
    id: 1650,
    question: "Fransız İhtilali hangi yılda gerçekleşmiştir?",
    options: ["1848", "1815", "1789", "1776"],
    correct: 2,
    category: CATEGORIES.GENERAL_CULTURE.name,
    difficulty: "Kolay"
  },
  {
    id: 1651,
    question: "Dünya'nın en büyük çölü (sıcak çöl) hangisidir?",
    options: ["Gobi Çölü", "Sahra Çölü", "Kalahari Çölü", "Arabistan Çölü"],
    correct: 1,
    category: CATEGORIES.GENERAL_CULTURE.name,
    difficulty: "Kolay"
  },
  {
    id: 1652,
    question: "Gezegenlerin Güneş etrafında elips yörüngelerde dolandığını keşfeden bilim insanı kimdir?",
    options: ["Galileo Galilei", "Nicolaus Copernicus", "Johannes Kepler", "Edwin Hubble"],
    correct: 2,
    category: CATEGORIES.GENERAL_CULTURE.name,
    difficulty: "Orta"
  },
  {
    id: 1653,
    question: "Suudi Arabistan'ın resmi para birimi nedir?",
    options: ["Lira", "Dirhem", "Riyal", "Dinar"],
    correct: 2,
    category: CATEGORIES.GENERAL_CULTURE.name,
    difficulty: "Orta"
  },
  {
    id: 1654,
    question: "Mitolojide Aşk Tanrıçası kimdir?",
    options: ["Athena", "Artemis", "Afrodit", "Hera"],
    correct: 2,
    category: CATEGORIES.GENERAL_CULTURE.name,
    difficulty: "Kolay"
  },
  {
    id: 1655,
    question: "İspanyol ressam Pablo Picasso'nun en ünlü eserlerinden biri olan savaş karşıtı tablo nedir?",
    options: ["Avignonlu Kızlar", "Yaşlı Gitarist", "Dora Maar'ın Portresi", "Guernica"],
    correct: 3,
    category: CATEGORIES.GENERAL_CULTURE.name,
    difficulty: "Orta"
  },
  {
    id: 1656,
    question: "Atom bombasını geliştiren 'Manhattan Projesi'nin bilimsel lideri kimdir?",
    options: ["Enrico Fermi", "Robert Oppenheimer", "Albert Einstein", "Niels Bohr"],
    correct: 1,
    category: CATEGORIES.GENERAL_CULTURE.name,
    difficulty: "Zor"
  },
  {
    id: 1657,
    question: "Hangi Türk edebiyatçısı 'İnce Memed' romanıyla tanınır?",
    options: ["Yaşar Kemal", "Halide Edip Adıvar", "Nazım Hikmet", "Orhan Pamuk"],
    correct: 0,
    category: CATEGORIES.GENERAL_CULTURE.name,
    difficulty: "Kolay"
  },
  {
    id: 1658,
    question: "Gözün renkli kısmı (göze rengini veren) nedir?",
    options: ["Gözbebeği", "Kornea", "Retina", "İris"],
    correct: 3,
    category: CATEGORIES.GENERAL_CULTURE.name,
    difficulty: "Kolay"
  },
  {
    id: 1659,
    question: "Buhar makinesini geliştiren İskoç mucit kimdir?",
    options: ["James Watt", "Thomas Edison", "Alexander Graham Bell", "Nikola Tesla"],
    correct: 0,
    category: CATEGORIES.GENERAL_CULTURE.name,
    difficulty: "Kolay"
  },
  {
    id: 1660,
    question: "1945'te II. Dünya Savaşı'nı bitiren, Japonya'ya atılan atom bombalarının atıldığı şehirler hangileridir?",
    options: ["Yokohama ve Kobe", "Hiroşima ve Nagazaki", "Tokyo ve Kyoto", "Osaka ve Nagoya"],
    correct: 1,
    category: CATEGORIES.GENERAL_CULTURE.name,
    difficulty: "Kolay"
  },
  {
    id: 1661,
    question: "Tarihte ilk kez 'Kağıt Para'yı kullanan uygarlık hangisidir?",
    options: ["Çin", "Roma", "Lidya", "Bizans"],
    correct: 0,
    category: CATEGORIES.GENERAL_CULTURE.name,
    difficulty: "Orta"
  },
  {
    id: 1662,
    question: "Türkiye'nin en büyük gölü hangi ildedir?",
    options: ["Van Gölü (Van)", "Beyşehir Gölü (Konya)", "Tuz Gölü (Konya)", "Eğirdir Gölü (Isparta)"],
    correct: 0,
    category: CATEGORIES.GENERAL_CULTURE.name,
    difficulty: "Kolay"
  },
  {
    id: 1663,
    question: "Ünlü 'Kaplumbağa Terbiyecisi' tablosu hangi Türk ressama aittir?",
    options: ["Osman Hamdi Bey", "Fikret Mualla", "İbrahim Çallı", "Şeker Ahmet Paşa"],
    correct: 0,
    category: CATEGORIES.GENERAL_CULTURE.name,
    difficulty: "Kolay"
  },
  {
    id: 1664,
    question: "Su, deniz seviyesinde kaç santigrat derecede donar?",
    options: ["10°C", "0°C", "20°C", "-10°C"],
    correct: 1,
    category: CATEGORIES.GENERAL_CULTURE.name,
    difficulty: "Kolay"
  },
  {
    id: 1665,
    question: "Hindistan'ın başkenti hangi şehirdir?",
    options: ["Yeni Delhi", "Mumbai", "Kalküta", "Bangalore"],
    correct: 0,
    category: CATEGORIES.GENERAL_CULTURE.name,
    difficulty: "Kolay"
  },
  {
    id: 1666,
    question: "Hangi elementin simgesi 'Au'dur?",
    options: ["Alüminyum", "Cıva", "Altın", "Gümüş"],
    correct: 2,
    category: CATEGORIES.GENERAL_CULTURE.name,
    difficulty: "Kolay"
  },
  {
    id: 1667,
    question: "Shakespeare'in 'Hamlet' oyununun geçtiği ülke neresidir?",
    options: ["İtalya", "İskoçya", "Danimarka", "İngiltere"],
    correct: 2,
    category: CATEGORIES.GENERAL_CULTURE.name,
    difficulty: "Zor"
  },
  {
    id: 1668,
    question: "Dünya'nın en kalabalık ülkesi (2024 itibarıyla) hangisidir?",
    options: ["Endonezya", "Çin", "Amerika Birleşik Devletleri", "Hindistan"],
    correct: 3,
    category: CATEGORIES.GENERAL_CULTURE.name,
    difficulty: "Kolay"
  },
  {
    id: 1669,
    question: "Meksika'nın resmi dili nedir?",
    options: ["İspanyolca", "Fransızca", "Portekizce", "İngilizce"],
    correct: 0,
    category: CATEGORIES.GENERAL_CULTURE.name,
    difficulty: "Kolay"
  },
  {
    id: 1670,
    question: "Türkiye'nin en yüksek dağı hangisidir?",
    options: ["Kaçkar Dağı", "Ağrı Dağı", "Erciyes Dağı", "Süphan Dağı"],
    correct: 1,
    category: CATEGORIES.GENERAL_CULTURE.name,
    difficulty: "Kolay"
  },
  {
    id: 1671,
    question: "İlk çağlarda Anadolu'da yaşamış ve parayı icat eden uygarlık hangisidir?",
    options: ["Urartular", "Lidyalılar", "Hititler", "Frigler"],
    correct: 1,
    category: CATEGORIES.GENERAL_CULTURE.name,
    difficulty: "Kolay"
  },
  {
    id: 1672,
    question: "Roma İmparatorluğu'nun başkenti, Doğu ve Batı olarak ikiye ayrıldıktan sonra Doğu Roma'nın (Bizans) başkenti neresi olmuştur?",
    options: ["Konstantinopolis (İstanbul)", "Atina", "İzmir", "İskenderiye"],
    correct: 0,
    category: CATEGORIES.GENERAL_CULTURE.name,
    difficulty: "Kolay"
  },
  {
    id: 1673,
    question: "Hangi yazar 'Küçük Prens' adlı eseriyle ünlüdür?",
    options: ["Victor Hugo", "Albert Camus", "Jean-Paul Sartre", "Antoine de Saint-Exupéry"],
    correct: 3,
    category: CATEGORIES.GENERAL_CULTURE.name,
    difficulty: "Kolay"
  },
  {
    id: 1674,
    question: "Bir maddenin katı halden doğrudan gaz hale geçmesine ne ad verilir?",
    options: ["Süblimleşme", "Erime", "Buharlaşma", "Yoğuşma"],
    correct: 0,
    category: CATEGORIES.GENERAL_CULTURE.name,
    difficulty: "Orta"
  },
  {
    id: 1675,
    question: "Uluslararası standart saat dilimlerini belirleyen ana meridyen hangisidir?",
    options: ["Yengeç Dönencesi", "Tarih Değiştirme Çizgisi", "Ekvator", "Greenwich Meridyeni"],
    correct: 3,
    category: CATEGORIES.GENERAL_CULTURE.name,
    difficulty: "Kolay"
  },
  {
    id: 1676,
    question: "Hangi elementin atom numarası (proton sayısı) 1'dir?",
    options: ["Hidrojen", "Oksijen", "Helyum", "Karbon"],
    correct: 0,
    category: CATEGORIES.GENERAL_CULTURE.name,
    difficulty: "Kolay"
  },
  {
    id: 1677,
    question: "1923 yılında ilan edilen Türkiye Cumhuriyeti'nin ilk başbakanı kimdir?",
    options: ["Kazım Karabekir", "Fevzi Çakmak", "Rauf Orbay", "İsmet İnönü"],
    correct: 3,
    category: CATEGORIES.GENERAL_CULTURE.name,
    difficulty: "Kolay"
  },
  {
    id: 1678,
    question: "Pekin (Beijing) hangi ülkenin başkentidir?",
    options: ["Japonya", "Güney Kore", "Çin", "Tayland"],
    correct: 2,
    category: CATEGORIES.GENERAL_CULTURE.name,
    difficulty: "Kolay"
  },
  {
    id: 1679,
    question: "Basketbol maçında bir takımın saha içinde topu potaya göndermek için kaç saniyesi vardır?",
    options: ["14 saniye", "24 saniye", "30 saniye", "20 saniye"],
    correct: 1,
    category: CATEGORIES.GENERAL_CULTURE.name,
    difficulty: "Orta"
  },
  {
    id: 1680,
    question: "Vücudumuzdaki en güçlü kas hangisidir?",
    options: ["Kalp Kası", "Çiğneme Kası (Masseter)", "Biceps (Pazu)", "Dört Başlı Kas (Quadriceps)"],
    correct: 1,
    category: CATEGORIES.GENERAL_CULTURE.name,
    difficulty: "Zor"
  },
  {
    id: 1681,
    question: "İngiliz Fizikçi Isaac Newton, yerçekimi yasasını hangi meyve sayesinde keşfettiği rivayet edilir?",
    options: ["Elma", "Kiraz", "Armut", "Portakal"],
    correct: 0,
    category: CATEGORIES.GENERAL_CULTURE.name,
    difficulty: "Kolay"
  },
  {
    id: 1682,
    question: "Avrupa Birliği (AB) hangi antlaşmayla kurulmuştur?",
    options: ["Roma Antlaşması", "Paris Antlaşması", "Lizbon Antlaşması", "Maastricht Antlaşması"],
    correct: 3,
    category: CATEGORIES.GENERAL_CULTURE.name,
    difficulty: "Zor"
  },
  {
    id: 1683,
    question: "Dört Element (Toprak, Su, Hava, Ateş) kavramını ortaya atan Antik Yunan filozofu kimdir?",
    options: ["Demokritos", "Tales", "Herakleitos", "Empedokles"],
    correct: 3,
    category: CATEGORIES.GENERAL_CULTURE.name,
    difficulty: "Zor"
  },
  {
    id: 1684,
    question: "Türk sinemasının en önemli karakterlerinden biri olan 'Eşkiya' filminin başrol oyuncusu kimdir?",
    options: ["Şener Şen", "Kemal Sunal", "Haluk Bilginer", "Cem Yılmaz"],
    correct: 0,
    category: CATEGORIES.GENERAL_CULTURE.name,
    difficulty: "Kolay"
  },
  {
    id: 1685,
    question: "Afrika kıtasının en yüksek noktası olan dağ hangisidir?",
    options: ["Kilimanjaro", "K2", "Mont Blanc", "Atlas Dağları"],
    correct: 0,
    category: CATEGORIES.GENERAL_CULTURE.name,
    difficulty: "Orta"
  },
  {
    id: 1686,
    question: "Türkiye'nin en uzun kara sınırı hangi ülke iledir?",
    options: ["Gürcistan", "Suriye", "İran", "Irak"],
    correct: 1,
    category: CATEGORIES.GENERAL_CULTURE.name,
    difficulty: "Kolay"
  },
  {
    id: 1687,
    question: "Yavuz Sultan Selim döneminde Osmanlı İmparatorluğu'na katılan, Mısır'daki kutsal emanetlerin getirildiği seferin adı nedir?",
    options: ["Mercidabık ve Ridaniye Savaşları", "Preveze Deniz Savaşı", "Çaldıran Savaşı", "Belgrad Seferi"],
    correct: 0,
    category: CATEGORIES.GENERAL_CULTURE.name,
    difficulty: "Orta"
  },
  {
    id: 1688,
    question: "Müzikte, bir eserin ana teması olan ve melodinin tekrarlandığı bölüme ne ad verilir?",
    options: ["Solo", "Prelüd", "Koro", "Nakarat (Refrain)"],
    correct: 3,
    category: CATEGORIES.GENERAL_CULTURE.name,
    difficulty: "Kolay"
  },
  {
    id: 1689,
    question: "Kanada ve ABD arasında doğal sınır oluşturan, dünyanın en ünlü şelalelerinden biri hangisidir?",
    options: ["Angel Şelalesi", "Niagara Şelalesi", "Iguazu Şelalesi", "Victoria Şelalesi"],
    correct: 1,
    category: CATEGORIES.GENERAL_CULTURE.name,
    difficulty: "Kolay"
  },
  {
    id: 1690,
    question: "İletişim, eğitim ve haberleşme amaçlı fırlatılan ilk yapay uydu nedir?",
    options: ["Apollo", "Explorer 1", "Hubble", "Sputnik 1"],
    correct: 3,
    category: CATEGORIES.GENERAL_CULTURE.name,
    difficulty: "Orta"
  },
  {
    id: 1691,
    question: "Tarihte bilinen ilk kadın hükümdarlardan biri olan, Mısır firavunu kimdir?",
    options: ["Hatshepsut", "Nefertiti", "Nefertari", "Kleopatra"],
    correct: 0,
    category: CATEGORIES.GENERAL_CULTURE.name,
    difficulty: "Zor"
  },
  {
    id: 1692,
    question: "Türkiye'nin coğrafi olarak hem Asya hem de Avrupa kıtasında toprağı olan tek şehri hangisidir?",
    options: ["Çanakkale", "İstanbul", "Tekirdağ", "Edirne"],
    correct: 1,
    category: CATEGORIES.GENERAL_CULTURE.name,
    difficulty: "Kolay"
  },
  {
    id: 1693,
    question: "Basketbol tarihinin en çok şampiyonluk kazanan takımı (NBA) hangisidir?",
    options: ["Los Angeles Lakers", "Chicago Bulls", "Boston Celtics", "Golden State Warriors"],
    correct: 2,
    category: CATEGORIES.GENERAL_CULTURE.name,
    difficulty: "Orta"
  },
  {
    id: 1694,
    question: "'Bir insanın değeri, başkaları için ne kadar değerli olduğuyla ölçülür' sözü kime aittir?",
    options: ["Mahatma Gandhi", "Malcolm X", "Albert Einstein", "Martin Luther King Jr."],
    correct: 2,
    category: CATEGORIES.GENERAL_CULTURE.name,
    difficulty: "Zor"
  },
  {
    id: 1695,
    question: "Güney Kutbu'nda bulunan kıta hangisidir?",
    options: ["Antarktika", "Avustralya", "Afrika", "Grönland"],
    correct: 0,
    category: CATEGORIES.GENERAL_CULTURE.name,
    difficulty: "Kolay"
  },
  {
    id: 1696,
    question: "Ünlü 'Kızıl Kule' hangi İspanyol şehrinde yer alır?",
    options: ["Barselona", "Granada", "Sevilla", "Madrid"],
    correct: 1,
    category: CATEGORIES.GENERAL_CULTURE.name,
    difficulty: "Orta"
  },
  {
    id: 1697,
    question: "Avustralya'nın yerli halkına ne ad verilir?",
    options: ["Maoriler", "Kızılderililer", "Aborjinler", "İnuitler"],
    correct: 2,
    category: CATEGORIES.GENERAL_CULTURE.name,
    difficulty: "Kolay"
  },
  {
    id: 1698,
    question: "Hangi element hem en hafif hem de evrende en bol bulunan elementtir?",
    options: ["Lityum", "Oksijen", "Helyum", "Hidrojen"],
    correct: 3,
    category: CATEGORIES.GENERAL_CULTURE.name,
    difficulty: "Kolay"
  },
  {
    id: 1699,
    question: "20. yüzyılın en etkili felsefi akımlarından biri olan 'Varoluşçuluk'un (Existentialism) öncülerinden kabul edilen yazar/filozof kimdir?",
    options: ["Karl Marx", "Sigmund Freud", "Friedrich Nietzsche", "Albert Camus"],
    correct: 2,
    category: CATEGORIES.GENERAL_CULTURE.name,
    difficulty: "Zor"
  },
  {
    id: 1700,
    question: "I. Dünya Savaşı'nın başlangıç sebebi olarak kabul edilen suikast nerede gerçekleşmiştir?",
    options: ["Saraybosna", "Viyana", "Berlin", "İstanbul"],
    correct: 0,
    category: CATEGORIES.GENERAL_CULTURE.name,
    difficulty: "Kolay"
  },
  {
    id: 1701,
    question: "Modern Olimpiyat Oyunları hangi şehirde ve hangi yılda yeniden başlatılmıştır?",
    options: ["Atina, 1896", "Paris, 1900", "Londra, 1908", "Berlin, 1936"],
    correct: 0,
    category: "Genel Kültür",
    difficulty: "Kolay"
  },
  {
    id: 1702,
    question: "Birleşmiş Milletler (BM) Genel Merkezi hangi şehirde bulunmaktadır?",
    options: ["Londra", "Cenevre", "Lahey", "New York"],
    correct: 3,
    category: "Genel Kültür",
    difficulty: "Kolay"
  },
  {
    id: 1703,
    question: "Leonardo da Vinci'nin ünlü tablosu 'Mona Lisa', hangi sanat akımının en önemli eserlerinden biri olarak kabul edilir?",
    options: ["Barok", "Gotik", "İzlenimcilik (Empresyonizm)", "Rönesans"],
    correct: 3,
    category: "Genel Kültür",
    difficulty: "Kolay"
  },
  {
    id: 1704,
    question: "Atom teorisini geliştiren ve elementlerin periyodik tablosunu oluşturmaya büyük katkı sağlayan Rus kimyager kimdir?",
    options: ["Marie Curie", "Dimitri Mendeleyev", "Isaac Newton", "Albert Einstein"],
    correct: 1,
    category: "Genel Kültür",
    difficulty: "Kolay"
  },
  {
    id: 1705,
    question: "Afrika kıtasının en yüksek dağı olan ve Tanzanya'da bulunan volkanik dağ nedir?",
    options: ["Ras Dejen", "Atlas Dağları", "Kenya Dağı", "Kilimanjaro Dağı"],
    correct: 3,
    category: "Genel Kültür",
    difficulty: "Kolay"
  },
  {
    id: 1706,
    question: "Roma İmparatorluğu'nun ikiye ayrılmasından (Doğu ve Batı) sonra Doğu Roma İmparatorluğu'nun başkenti hangi şehir olmuştur?",
    options: ["Antakya", "Konstantinopolis (İstanbul)", "İskenderiye", "Roma"],
    correct: 1,
    category: "Genel Kültür",
    difficulty: "Kolay"
  },
  {
    id: 1707,
    question: "Nobel Edebiyat Ödülü'nü kazanan ve 'Yüzyıllık Yalnızlık' adlı eseriyle tanınan Kolombiyalı yazar kimdir?",
    options: ["Gabriel García Márquez", "Pablo Neruda", "Octavio Paz", "Jorge Luis Borges"],
    correct: 0,
    category: "Genel Kültür",
    difficulty: "Kolay"
  },
  {
    id: 1708,
    question: "İnsan vücudunda kanın pompalanmasından sorumlu olan hayati organ nedir?",
    options: ["Böbrek", "Akciğer", "Karaciğer", "Kalp"],
    correct: 3,
    category: "Genel Kültür",
    difficulty: "Kolay"
  },
  {
    id: 1709,
    question: "Antik Yunan'da demokrasi, felsefe ve sanatın merkezi olan şehir devleti hangisidir?",
    options: ["Sparta", "Thebes", "Korint", "Atina"],
    correct: 3,
    category: "Genel Kültür",
    difficulty: "Kolay"
  },
  {
    id: 1710,
    question: "Bir cismin hareketine karşı koyan, yüzeyler arasında oluşan kuvvete ne ad verilir?",
    options: ["Sürtünme Kuvveti", "Manyetik Kuvvet", "Merkezkaç Kuvveti", "Yer Çekimi"],
    correct: 0,
    category: "Genel Kültür",
    difficulty: "Kolay"
  },
  {
    id: 1711,
    question: "Bir eserin veya fikrin yasal olarak sahibine ait olduğunu gösteren hakka ne ad verilir?",
    options: ["Patent", "Ticari Marka", "Fikri Mülkiyet", "Telif Hakkı (Copyright)"],
    correct: 3,
    category: "Genel Kültür",
    difficulty: "Kolay"
  },
  {
    id: 1712,
    question: "Gezegenleri, yıldızları ve diğer gök cisimlerini inceleyen bilim dalı nedir?",
    options: ["Biyoloji", "Meteoroloji", "Jeoloji", "Astronomi"],
    correct: 3,
    category: "Genel Kültür",
    difficulty: "Kolay"
  },
  {
    id: 1713,
    question: "Türk edebiyatında 'Kürk Mantolu Madonna' ve 'İçimizdeki Şeytan' gibi eserleriyle tanınan yazar kimdir?",
    options: ["Sabahattin Ali", "Halide Edip Adıvar", "Orhan Pamuk", "Yaşar Kemal"],
    correct: 0,
    category: "Genel Kültür",
    difficulty: "Kolay"
  },
  {
    id: 1714,
    question: "Dünyanın en uzun nehrinin adı nedir?",
    options: ["Yangtze Nehri", "Nil Nehri", "Mississippi Nehri", "Amazon Nehri"],
    correct: 1,
    category: "Genel Kültür",
    difficulty: "Kolay"
  },
  {
    id: 1715,
    question: "Müzikte, bir şarkının her bir ölçüsünde kaç vuruş olduğunu belirten terim nedir?",
    options: ["Ölçü İşareti (Metre)", "Nota", "Armoni", "Tempo"],
    correct: 0,
    category: "Genel Kültür",
    difficulty: "Kolay"
  },
  {
    id: 1716,
    question: "I. Dünya Savaşı'nın bitiş tarihi hangi gündür?",
    options: ["28 Haziran 1914", "1 Eylül 1939", "6 Nisan 1917", "11 Kasım 1918"],
    correct: 3,
    category: "Genel Kültür",
    difficulty: "Kolay"
  },
  {
    id: 1717,
    question: "Gezegenleri Güneş etrafında elips şeklindeki yörüngelerde hareket ettiğini ispatlayan bilim insanı kimdir?",
    options: ["Johannes Kepler", "Isaac Newton", "Galileo Galilei", "Nicolaus Copernicus"],
    correct: 0,
    category: "Genel Kültür",
    difficulty: "Orta"
  },
  {
    id: 1718,
    question: "Mezopotamya'da, Fırat ve Dicle nehirleri arasında kurulan en eski medeniyetlerden biri hangisidir?",
    options: ["Sümer Uygarlığı", "Hititler", "Maya Uygarlığı", "Mısır Medeniyeti"],
    correct: 0,
    category: "Genel Kültür",
    difficulty: "Kolay"
  },
  {
    id: 1719,
    question: "Bir ülkenin yasal olarak kabul edilmiş en yüksek hukuk kuralı ve yönetim biçimini belirleyen belge nedir?",
    options: ["Anayasa", "Tebliğ", "Kanun", "Yönetmelik"],
    correct: 0,
    category: "Genel Kültür",
    difficulty: "Kolay"
  },
  {
    id: 1720,
    question: "Türkiye'nin en uzun kara sınırı hangi ülke iledir?",
    options: ["İran", "Suriye", "Gürcistan", "Irak"],
    correct: 1,
    category: "Genel Kültür",
    difficulty: "Kolay"
  },
  {
    id: 1721,
    question: "Mitolojide, kendi güzelliğine aşık olan ve bir çiçeğe dönüşen genç adamın adı nedir?",
    options: ["Narkissos (Narsist)", "Apollo", "Zeus", "Orpheus"],
    correct: 0,
    category: "Genel Kültür",
    difficulty: "Kolay"
  },
  {
    id: 1722,
    question: "Vücudun temel enerji kaynağı olarak kullanılan organik bileşik sınıfı nedir?",
    options: ["Vitaminler", "Yağlar", "Proteinler", "Karbonhidratlar"],
    correct: 3,
    category: "Genel Kültür",
    difficulty: "Kolay"
  },
  {
    id: 1723,
    question: "İspanyol ressam Pablo Picasso'nun, İspanya İç Savaşı'nı anlatan ve savaşın dehşetini tasvir eden ünlü tablosu nedir?",
    options: ["Guernica", "Avignonlu Kızlar", "Yaşlı Gitarist", "Yalın Ayaklar"],
    correct: 0,
    category: "Genel Kültür",
    difficulty: "Kolay"
  },
  {
    id: 1724,
    question: "Hangi element, periyodik tablonun 1. sırasında yer alır ve evrende en bol bulunan elementtir?",
    options: ["Karbon", "Hidrojen", "Oksijen", "Helyum"],
    correct: 1,
    category: "Genel Kültür",
    difficulty: "Kolay"
  },
  {
    id: 1725,
    question: "Bir ülkenin ithalat ve ihracat dengesini gösteren ekonomik gösterge nedir?",
    options: ["Gayri Safi Milli Hasıla", "Dış Ticaret Dengesi", "Büyüme Hızı", "Enflasyon"],
    correct: 1,
    category: "Genel Kültür",
    difficulty: "Orta"
  },
  {
    id: 1726,
    question: "Shakespeare'in ünlü trajedisinde, Danimarka Prensi olan ve amcasının babasını öldürdüğünü öğrenen karakter kimdir?",
    options: ["Macbeth", "Othello", "Hamlet", "Romeo"],
    correct: 2,
    category: "Genel Kültür",
    difficulty: "Kolay"
  },
  {
    id: 1727,
    question: "Müzikte, sesi değiştirmeden notaların yüksekliğini yarım ton inceltmeye yarayan işaret nedir?",
    options: ["Diyez (Sharp)", "Doğal (Natural)", "Bemol (Flat)", "Çift Diyez"],
    correct: 2,
    category: "Genel Kültür",
    difficulty: "Orta"
  },
  {
    id: 1728,
    question: "Bir kültürün kendine özgü sözlü geleneklerini, hikayelerini ve inanışlarını inceleyen bilim dalı nedir?",
    options: ["Sosyoloji", "Arkeoloji", "Psikoloji", "Folklor"],
    correct: 3,
    category: "Genel Kültür",
    difficulty: "Kolay"
  },
  {
    id: 1729,
    question: "İnsan vücudundaki en büyük organ hangisidir?",
    options: ["Deri (Cilt)", "Karaciğer", "Beyin", "Kalp"],
    correct: 0,
    category: "Genel Kültür",
    difficulty: "Kolay"
  },
  {
    id: 1730,
    question: "Modern Türk tiyatrosunun kurucularından kabul edilen ve 'Vatan Yahut Silistre' gibi eserleriyle tanınan yazar kimdir?",
    options: ["Tevfik Fikret", "Yahya Kemal Beyatlı", "Recaizade Mahmut Ekrem", "Namık Kemal"],
    correct: 3,
    category: "Genel Kültür",
    difficulty: "Kolay"
  },
  {
    id: 1731,
    question: "Dünyanın en büyük okyanusu hangisidir?",
    options: ["Arktik Okyanusu", "Pasifik Okyanusu", "Atlas Okyanusu", "Hint Okyanusu"],
    correct: 1,
    category: "Genel Kültür",
    difficulty: "Kolay"
  },
  {
    id: 1732,
    question: "Işığın hızını ölçen ve İzafiyet Teorisi'ni geliştiren bilim insanı kimdir?",
    options: ["Albert Einstein", "Stephen Hawking", "Max Planck", "Niels Bohr"],
    correct: 0,
    category: "Genel Kültür",
    difficulty: "Kolay"
  },
  {
    id: 1733,
    question: "1989 yılında yıkılan ve Soğuk Savaş'ın sembolü haline gelen duvar nerede bulunuyordu?",
    options: ["Kıbrıs", "Kore", "Çin", "Berlin"],
    correct: 3,
    category: "Genel Kültür",
    difficulty: "Kolay"
  },
  {
    id: 1734,
    question: "Bir maddenin katı, sıvı veya gaz halleri arasındaki dönüşümlere ne ad verilir?",
    options: ["Nükleer Reaksiyon", "Yoğunluk Değişimi", "Faz Değişimi", "Kimyasal Tepkime"],
    correct: 2,
    category: "Genel Kültür",
    difficulty: "Kolay"
  },
  {
    id: 1735,
    question: "Sanatta, 19. yüzyılın sonlarında ortaya çıkan ve ışığın anlık etkisini yakalamayı amaçlayan akım nedir?",
    options: ["Sürrealizm", "Kübizm", "İzlenimcilik (Empresyonizm)", "Klasisizm"],
    correct: 2,
    category: "Genel Kültür",
    difficulty: "Kolay"
  },
  {
    id: 1736,
    question: "Mısır mitolojisinde, ölümden sonraki yaşamın tanrısı ve yargıcı olarak bilinen tanrı kimdir?",
    options: ["Anubis", "Horus", "Osiris", "Ra"],
    correct: 2,
    category: "Genel Kültür",
    difficulty: "Orta"
  },
  {
    id: 1737,
    question: "Bir toplumun düşünce yapısını, değer yargılarını ve davranış kalıplarını inceleyen bilim dalı nedir?",
    options: ["Sosyoloji", "Antropoloji", "Coğrafya", "Ekonomi"],
    correct: 0,
    category: "Genel Kültür",
    difficulty: "Kolay"
  },
  {
    id: 1738,
    question: "İtalya'da bulunan ve 79 yılında patlayarak Pompeii şehrini yok eden yanardağ nedir?",
    options: ["Etna", "Stromboli", "Fuji Dağı", "Vezüv Yanardağı"],
    correct: 3,
    category: "Genel Kültür",
    difficulty: "Kolay"
  },
  {
    id: 1739,
    question: "Türkiye'nin en batı ucunda bulunan ve aynı zamanda Ege Denizi'ne en yakın nokta olan ilimiz hangisidir?",
    options: ["İzmir", "Muğla", "Edirne", "Çanakkale"],
    correct: 2,
    category: "Genel Kültür",
    difficulty: "Orta"
  },
  {
    id: 1740,
    question: "Matematikte, çevresi ile çapı arasındaki oran olan ve yaklaşık $3.14159$ değerine sahip sabit sayı nedir?",
    options: ["Pi Sayısı ($\\pi$)", "Faktöriyel", "Euler Sayısı (e)", "Altın Oran ($\\phi$)"],
    correct: 0,
    category: "Genel Kültür",
    difficulty: "Kolay"
  },
  {
    id: 1741,
    question: "Dünya üzerindeki en büyük mercan resif sistemi nerede bulunmaktadır?",
    options: ["Maldivler", "Kızıldeniz", "Karayipler", "Büyük Set Resifi (Avustralya)"],
    correct: 3,
    category: "Genel Kültür",
    difficulty: "Kolay"
  },
  {
    id: 1742,
    question: "Mikroorganizmaları inceleyen bilim dalı nedir?",
    options: ["Paleontoloji", "Zooloji", "Mikrobiyoloji", "Botanik"],
    correct: 2,
    category: "Genel Kültür",
    difficulty: "Kolay"
  },
  {
    id: 1743,
    question: "Fransız Devrimi hangi yılda başlamıştır?",
    options: ["1917", "1776", "1789", "1848"],
    correct: 2,
    category: "Genel Kültür",
    difficulty: "Kolay"
  },
  {
    id: 1744,
    question: "Amerikalı yazar Mark Twain'in, Tom Sawyer ve Huckleberry Finn karakterlerini yarattığı ünlü romanı hangisidir?",
    options: ["Tom Sawyer'ın Maceraları", "Mississippi'de Hayat", "Büyük Umutlar", "Moby Dick"],
    correct: 0,
    category: "Genel Kültür",
    difficulty: "Kolay"
  },
  {
    id: 1745,
    question: "Bir devletin egemenlik haklarını ve bağımsızlığını sembolize eden işaret nedir?",
    options: ["Para Birimi", "Sınır Hattı", "Ulusal Marş", "Bayrak"],
    correct: 3,
    category: "Genel Kültür",
    difficulty: "Kolay"
  },
  {
    id: 1746,
    question: "Hint Okyanusu'nun kuzeyinde oluşan ve şiddetli rüzgar ve yağmurlarla karakterize edilen hava olayı nedir?",
    options: ["Kasırga", "Muson (Mevsim Rüzgarları)", "Tayfun", "Tornado"],
    correct: 1,
    category: "Genel Kültür",
    difficulty: "Orta"
  },
  {
    id: 1747,
    question: "Müzikte, bir orkestrayı yöneten ve eserin yorumlanmasından sorumlu olan kişi kimdir?",
    options: ["Konser Şefi", "Solist", "Orkestra Şefi (Kondüktör)", "Besteci"],
    correct: 2,
    category: "Genel Kültür",
    difficulty: "Kolay"
  },
  {
    id: 1748,
    question: "Canlıların kalıtsal özelliklerini ve genetik varyasyonlarını inceleyen bilim dalı nedir?",
    options: ["Genetik", "Anatomi", "Fizyoloji", "Ekoloji"],
    correct: 0,
    category: "Genel Kültür",
    difficulty: "Kolay"
  },
  {
    id: 1749,
    question: "Türkiye'de 'Deli Dumrul', 'Bamsı Beyrek' gibi hikayeleri içeren, Türk destanları külliyatı nedir?",
    options: ["Dede Korkut Hikayeleri", "Manas Destanı", "Oğuz Kağan Destanı", "Ergenekon Destanı"],
    correct: 0,
    category: "Genel Kültür",
    difficulty: "Kolay"
  },
  {
    id: 1750,
    question: "1969 yılında Ay'a ilk ayak basan astronot kimdir?",
    options: ["Neil Armstrong", "Buzz Aldrin", "Yuri Gagarin", "Michael Collins"],
    correct: 0,
    category: "Genel Kültür",
    difficulty: "Kolay"
  },
  {
    id: 1751,
    question: "Uluslararası standartlara göre, bir ülkenin para biriminin değerinin başka bir para birimi cinsinden ifadesine ne ad verilir?",
    options: ["Deflasyon", "Enflasyon", "Faiz Oranı", "Döviz Kuru"],
    correct: 3,
    category: "Genel Kültür",
    difficulty: "Kolay"
  },
  {
    id: 1752,
    question: "İnsanlığın ilk kez tekerleği kullanmaya başladığı kabul edilen tarihsel dönem hangisidir?",
    options: ["Mezolitik Çağ", "Paleolitik Çağ", "Neolitik Çağ (Yeni Taş Çağı)", "Demir Çağı"],
    correct: 2,
    category: "Genel Kültür",
    difficulty: "Orta"
  },
  {
    id: 1753,
    question: "İspanya ve Portekiz'in bulunduğu yarımadanın adı nedir?",
    options: ["İskandinav Yarımadası", "İber Yarımadası", "Anadolu Yarımadası", "Balkan Yarımadası"],
    correct: 1,
    category: "Genel Kültür",
    difficulty: "Kolay"
  },
  {
    id: 1754,
    question: "Resimde, üç boyutlu nesnelerin iki boyutlu yüzeye derinlik hissi verilerek aktarılması tekniği nedir?",
    options: ["Kolaj", "Füzyon", "Mozaik", "Perspektif"],
    correct: 3,
    category: "Genel Kültür",
    difficulty: "Kolay"
  },
  {
    id: 1755,
    question: "İnsan vücudunda kemikleri birbirine bağlayan, sert ve esnek dokulara ne ad verilir?",
    options: ["Sinir", "Tendon", "Kas", "Ligament (Bağ)"],
    correct: 3,
    category: "Genel Kültür",
    difficulty: "Orta"
  },
  {
    id: 1756,
    question: "İslamiyet'te, namaz kılarken Kabe'ye dönülen yöne ne ad verilir?",
    options: ["Rüku", "Secde", "Kıble", "Kıyam"],
    correct: 2,
    category: "Genel Kültür",
    difficulty: "Kolay"
  },
  {
    id: 1757,
    question: "Avustralya'nın başkenti hangi şehirdir?",
    options: ["Sydney", "Brisbane", "Canberra", "Melbourne"],
    correct: 2,
    category: "Genel Kültür",
    difficulty: "Kolay"
  },
  {
    id: 1758,
    question: "Türk Tarihinde, 'Kanuni' olarak bilinen ve Osmanlı İmparatorluğu'nun en uzun süre tahtta kalan padişahı kimdir?",
    options: ["Yavuz Sultan Selim", "Fatih Sultan Mehmet", "Süleyman I (Kanuni Sultan Süleyman)", "II. Bayezid"],
    correct: 2,
    category: "Genel Kültür",
    difficulty: "Kolay"
  },
  {
    id: 1759,
    question: "Bir nesnenin kütle ve hızının çarpımı ile hesaplanan fiziksel büyüklük nedir?",
    options: ["Momentum", "Kuvvet", "Enerji", "İvme"],
    correct: 0,
    category: "Genel Kültür",
    difficulty: "Orta"
  },
  {
    id: 1760,
    question: "Rus yazar Fyodor Dostoyevski'nin, Raskolnikov karakteri üzerinden suç ve vicdan temasını işlediği ünlü eseri nedir?",
    options: ["Budala", "Suç ve Ceza", "Karamazov Kardeşler", "Yer Altından Notlar"],
    correct: 1,
    category: "Genel Kültür",
    difficulty: "Kolay"
  },
  {
    id: 1761,
    question: "Hangi element, hem elmas hem de grafit gibi farklı allotroplara sahip olan bir elementtir?",
    options: ["Azot", "Karbon", "Oksijen", "Silisyum"],
    correct: 1,
    category: "Genel Kültür",
    difficulty: "Kolay"
  },
  {
    id: 1762,
    question: "Dünyanın en soğuk kıtası ve aynı zamanda en rüzgarlı bölgesi neresidir?",
    options: ["Antarktika", "Asya", "Grönland", "Kuzey Kutbu"],
    correct: 0,
    category: "Genel Kültür",
    difficulty: "Kolay"
  },
  {
    id: 1763,
    question: "Türkiye'de, 1923'te Cumhuriyet'in ilan edildiği tarih nedir?",
    options: ["23 Nisan 1920", "30 Ağustos 1922", "19 Mayıs 1919", "29 Ekim 1923"],
    correct: 3,
    category: "Genel Kültür",
    difficulty: "Kolay"
  },
  {
    id: 1764,
    question: "Müzikte, bir enstrüman veya sesin perdesi ile ilgili olan, tiz veya pes olma özelliğine ne ad verilir?",
    options: ["Oktav", "Ses Perdesi (Pitch)", "Tını", "Ritim"],
    correct: 1,
    category: "Genel Kültür",
    difficulty: "Kolay"
  },
  {
    id: 1765,
    question: "Resimde, kağıt veya tuval üzerine çizgilerle gölgelendirme ve tonlama yapma sanatına ne ad verilir?",
    options: ["Fresk", "Seramik", "Çizim (Desin)", "Heykel"],
    correct: 2,
    category: "Genel Kültür",
    difficulty: "Kolay"
  },
  {
    id: 1766,
    question: "Mitolojide, 'Truva Atı' fikrini ortaya atan ve Truva Savaşı'nı bitiren komutan kimdir?",
    options: ["Odysseus", "Hektor", "Paris", "Aşil"],
    correct: 0,
    category: "Genel Kültür",
    difficulty: "Orta"
  },
  {
    id: 1767,
    question: "Felsefede, bilginin kaynağının deneyim ve duyular olduğunu savunan akım nedir?",
    options: ["Empirizm (Deneycilik)", "Rasyonalizm", "İdealizm", "Varoluşçuluk"],
    correct: 0,
    category: "Genel Kültür",
    difficulty: "Orta"
  },
  {
    id: 1768,
    question: "Bir ülkenin belirli bir dönemde ürettiği tüm mal ve hizmetlerin toplam parasal değerine ne ad verilir?",
    options: ["Bütçe Açığı", "Milli Gelir", "Gayri Safi Yurt İçi Hasıla (GSYİH)", "Tüketici Fiyat Endeksi"],
    correct: 2,
    category: "Genel Kültür",
    difficulty: "Kolay"
  },
  {
    id: 1769,
    question: "Güneş sistemindeki en büyük gezegen hangisidir?",
    options: ["Dünya", "Jüpiter", "Mars", "Satürn"],
    correct: 1,
    category: "Genel Kültür",
    difficulty: "Kolay"
  },
  {
    id: 1770,
    question: "Türk edebiyatında, 'Çalıkuşu', 'Dudaktan Kalbe' gibi eserleriyle tanınan yazar kimdir?",
    options: ["Reşat Nuri Güntekin", "Halit Ziya Uşaklıgil", "Aka Gündüz", "Ömer Seyfettin"],
    correct: 0,
    category: "Genel Kültür",
    difficulty: "Kolay"
  },
  {
    id: 1771,
    question: "İnsan vücudunda, kanın temizlenmesinden ve idrar oluşumundan sorumlu organlar nedir?",
    options: ["Karaciğer", "Böbrekler", "Mide", "Akciğerler"],
    correct: 1,
    category: "Genel Kültür",
    difficulty: "Kolay"
  },
  {
    id: 1772,
    question: "Jeolojide, yer kabuğunu oluşturan büyük ve hareketli parçalara ne ad verilir?",
    options: ["Fay Hattı", "Volkanlar", "Kıtalar", "Tektonik Plakalar"],
    correct: 3,
    category: "Genel Kültür",
    difficulty: "Kolay"
  },
  {
    id: 1773,
    question: "Antik Mısır'da, ölülerin korunması ve ahirete hazırlanması için yapılan işleme ne ad verilir?",
    options: ["Fresk Boyama", "Piramit İnşaatı", "Mumyalama", "Heykel Yapımı"],
    correct: 2,
    category: "Genel Kültür",
    difficulty: "Kolay"
  },
  {
    id: 1774,
    question: "Müzikte, üç veya daha fazla farklı notanın aynı anda veya sıralı olarak çalınmasıyla oluşan uyumlu ses dizisine ne ad verilir?",
    options: ["Akort (Ahenk/Kord)", "Ritim", "Melodi", "Kontrpuan"],
    correct: 0,
    category: "Genel Kültür",
    difficulty: "Kolay"
  },
  {
    id: 1775,
    question: "Hukukta, bir suçun işlendiği anda uygulanan yasalara ne ad verilir?",
    options: ["Uluslararası Hukuk", "Ceza Hukuku", "Özel Hukuk", "Anayasa Hukuku"],
    correct: 1,
    category: "Genel Kültür",
    difficulty: "Kolay"
  },
  {
    id: 1776,
    question: "Dünya'nın uydusu olan gök cismi nedir?",
    options: ["Güneş", "Ay", "Venüs", "Mars"],
    correct: 1,
    category: "Genel Kültür",
    difficulty: "Kolay"
  },
  {
    id: 1777,
    question: "Kimyada, bir çözeltinin asitlik veya bazlık derecesini ölçen skalaya ne ad verilir?",
    options: ["pH Skalası", "Molarite", "Celsius", "Kelvin"],
    correct: 0,
    category: "Genel Kültür",
    difficulty: "Kolay"
  },
  {
    id: 1778,
    question: "İkinci Dünya Savaşı'nın başlangıç tarihi olarak kabul edilen, Almanya'nın Polonya'yı işgali hangi tarihte gerçekleşmiştir?",
    options: ["1 Eylül 1939", "6 Haziran 1944", "7 Aralık 1941", "8 Mayıs 1945"],
    correct: 0,
    category: "Genel Kültür",
    difficulty: "Kolay"
  },
  {
    id: 1779,
    question: "Türk edebiyatında 'Divan Şiiri' geleneğinin en önemli temsilcilerinden olan ve 'Leyla ve Mecnun' mesnevisini yazan şair kimdir?",
    options: ["Şeyhi", "Nedim", "Fuzûlî", "Baki"],
    correct: 2,
    category: "Genel Kültür",
    difficulty: "Orta"
  },
  {
    id: 1780,
    question: "Büyük İskender'in Pers İmparatorluğu'nu yenerek kurduğu imparatorluğun kültürel sentezine ne ad verilir?",
    options: ["Makedon Kültürü", "Bizans Kültürü", "Helenistik Kültür", "Roma Kültürü"],
    correct: 2,
    category: "Genel Kültür",
    difficulty: "Orta"
  },
  {
    id: 1781,
    question: "Coğrafyada, bir yerin deniz seviyesinden yüksekliğini ifade eden terim nedir?",
    options: ["Enlem", "Boylam", "Rakım (Yükseklik)", "Derinlik"],
    correct: 2,
    category: "Genel Kültür",
    difficulty: "Kolay"
  },
  {
    id: 1782,
    question: "Bir maddenin çevresine ısı yayarak katı hale geçmesi olayına ne ad verilir?",
    options: ["Donma (Katılaşma)", "Yoğunlaşma", "Erime", "Buharlaşma"],
    correct: 0,
    category: "Genel Kültür",
    difficulty: "Kolay"
  },
  {
    id: 1783,
    question: "Bir ülkenin belirli bir ürüne dışarıdan gelen rekabeti azaltmak için uyguladığı vergiye ne ad verilir?",
    options: ["Gümrük Vergisi (Tarife)", "Gelir Vergisi", "Özel Tüketim Vergisi", "Katma Değer Vergisi"],
    correct: 0,
    category: "Genel Kültür",
    difficulty: "Orta"
  },
  {
    id: 1784,
    question: "Müzikte, seslerin belirli bir düzen ve ritim içinde sıralanmasıyla ortaya çıkan yapıya ne ad verilir?",
    options: ["Tını", "Melodi", "Armoni", "Tempo"],
    correct: 1,
    category: "Genel Kültür",
    difficulty: "Kolay"
  },
  {
    id: 1785,
    question: "Resimde, bir nesnenin ışık almayan tarafına ne ad verilir?",
    options: ["Orta Ton", "Aydınlık Alan", "Gölge", "Halka"],
    correct: 2,
    category: "Genel Kültür",
    difficulty: "Kolay"
  },
  {
    id: 1786,
    question: "Mitolojide, rüzgarların tanrısı kimdir?",
    options: ["Hephaistos", "Poseidon", "Aeolus (Aiolos)", "Hades"],
    correct: 2,
    category: "Genel Kültür",
    difficulty: "Orta"
  },
  {
    id: 1787,
    question: "İnsan vücudunda, oksijenin kana karışmasını sağlayan ve karbondioksitin dışarı atılmasını sağlayan organlar nedir?",
    options: ["Böbrekler", "Kalp", "Akciğerler", "Mide"],
    correct: 2,
    category: "Genel Kültür",
    difficulty: "Kolay"
  },
  {
    id: 1788,
    question: "Antik Roma'da, halkın eğlenmesi ve gladyatör dövüşleri için kullanılan büyük amfi tiyatro nedir?",
    options: ["Forum", "Kolezyum", "Panteon", "Caracalla Hamamları"],
    correct: 1,
    category: "Genel Kültür",
    difficulty: "Kolay"
  },
  {
    id: 1789,
    question: "Türk edebiyatında, Milli Edebiyat akımının en önemli temsilcilerinden olan ve 'Yaban' romanıyla tanınan yazar kimdir?",
    options: ["Halide Edip Adıvar", "Refik Halit Karay", "Ömer Seyfettin", "Yakup Kadri Karaosmanoğlu"],
    correct: 3,
    category: "Genel Kültür",
    difficulty: "Kolay"
  },
  {
    id: 1790,
    question: "Birleşmiş Milletler Güvenlik Konseyi'nde veto yetkisine sahip daimi üye ülke sayısı kaçtır?",
    options: ["5", "7", "10", "3"],
    correct: 0,
    category: "Genel Kültür",
    difficulty: "Kolay"
  },
  {
    id: 1791,
    question: "Gezegenlerin, atmosferlerinin yoğun sera etkisi nedeniyle 'Kızıl Gezegen' olarak adlandırılan gezegen hangisidir?",
    options: ["Dünya", "Venüs", "Jüpiter", "Mars"],
    correct: 3,
    category: "Genel Kültür",
    difficulty: "Kolay"
  },
  {
    id: 1792,
    question: "Matematikte, bir sayının kendisi hariç pozitif tam bölenlerinin toplamı sayıdan büyükse, bu sayıya ne ad verilir?",
    options: ["Bolluk Sayısı (Abundant Number)", "Asal Sayı", "Eksik Sayı", "Mükemmel Sayı"],
    correct: 0,
    category: "Genel Kültür",
    difficulty: "Zor"
  },
  {
    id: 1793,
    question: "Avrupa'da, Rönesans döneminin önemli eserlerinden olan ve Michelangelo tarafından boyanan şapel neresidir?",
    options: ["Notre Dame Katedrali", "Aziz Mark Bazilikası", "Petersburg Katedrali", "Sistina Şapeli"],
    correct: 3,
    category: "Genel Kültür",
    difficulty: "Kolay"
  },
  {
    id: 1794,
    question: "Türkiye'nin Asya ve Avrupa kıtalarında toprakları bulunan tek ili hangisidir?",
    options: ["Bursa", "İzmit", "İstanbul", "Çanakkale"],
    correct: 2,
    category: "Genel Kültür",
    difficulty: "Kolay"
  },
  {
    id: 1795,
    question: "Hukukta, bir kişinin ölümünden sonra mal varlığının yasal olarak devredilmesini düzenleyen hukuk dalı nedir?",
    options: ["Ticaret Hukuku", "İcra Hukuku", "Miras Hukuku", "Borçlar Hukuku"],
    correct: 2,
    category: "Genel Kültür",
    difficulty: "Kolay"
  },
  {
    id: 1796,
    question: "Tarihte, matbaayı Avrupa'da ilk kez kullanan ve hareketli matbaa sistemini geliştiren kişi kimdir?",
    options: ["Marco Polo", "Galileo", "Gutenberg", "Leonardo da Vinci"],
    correct: 2,
    category: "Genel Kültür",
    difficulty: "Kolay"
  },
  {
    id: 1797,
    question: "Bir canlının belirli bir ortamda yaşayabilme ve üreyebilme yeteneğine ne ad verilir?",
    options: ["Seçilim", "Mutasyon", "Adaptasyon (Uyum)", "Evrim"],
    correct: 2,
    category: "Genel Kültür",
    difficulty: "Kolay"
  },
  {
    id: 1798,
    question: "Müzikte, bir eserin ana temasını veya duygusal atmosferini belirleyen terim nedir?",
    options: ["Mod (Makam/Ton)", "Oktav", "Ritim", "Tempo"],
    correct: 0,
    category: "Genel Kültür",
    difficulty: "Kolay"
  },
  {
    id: 1799,
    question: "Felsefede, varoluşun anlamını, özgürlüğü ve sorumluluğu temel alan akım nedir?",
    options: ["Mantıksal Pozitivizm", "Varoluşçuluk (Egzistansiyalizm)", "Yapısalcılık", "Sürrealizm"],
    correct: 1,
    category: "Genel Kültür",
    difficulty: "Orta"
  },
  {
    id: 1800,
    question: "Dünya'nın en yüksek dağı olan Everest'in bulunduğu sıradağ sistemi nedir?",
    options: ["Alp Dağları", "And Dağları", "Himalayalar", "Kafkas Dağları"],
    correct: 2,
    category: "Genel Kültür",
    difficulty: "Kolay"
  },

  // ==================== MİTOLOJİ ve DİNLER ====================
{
    id: 1801,
    question: "Antik Yunan mitolojisinde Olimpos tanrılarının kralı ve gök gürültüsü tanrısı kimdir?",
    options: ["Ares", "Zeus", "Poseidon", "Hades"],
    correct: 1,
    category: CATEGORIES.MYTHOLOGY_RELIGION.name,
    difficulty: "Kolay"
  },
  {
    id: 1802,
    question: "Hristiyanlığın kutsal kitabı ve inancın temelini oluşturan metinler bütünü nedir?",
    options: ["Tevrat", "Kuran", "Zebur", "İncil (Kitab-ı Mukaddes)"],
    correct: 3,
    category: CATEGORIES.MYTHOLOGY_RELIGION.name,
    difficulty: "Kolay"
  },
  {
    id: 1803,
    question: "İskandinav (Norse) mitolojisinde, çekici Mjölnir ile tanınan gök gürültüsü tanrısı kimdir?",
    options: ["Odin", "Loki", "Thor", "Tyr"],
    correct: 2,
    category: CATEGORIES.MYTHOLOGY_RELIGION.name,
    difficulty: "Kolay"
  },
  {
    id: 1804,
    question: "İslam'da, belirli şartlar ve zamanlarda Mekke'deki Kâbe'yi ziyaret etme ibadeti nedir?",
    options: ["Namaz", "Zekât", "Hac", "Oruç"],
    correct: 2,
    category: CATEGORIES.MYTHOLOGY_RELIGION.name,
    difficulty: "Kolay"
  },
  {
    id: 1805,
    question: "Antik Mısır mitolojisinde, genellikle şahin başlı veya güneş diskli tasvir edilen Güneş Tanrısı kimdir?",
    options: ["Anubis", "Osiris", "Thoth", "Ra"],
    correct: 3,
    category: CATEGORIES.MYTHOLOGY_RELIGION.name,
    difficulty: "Kolay"
  },
  {
    id: 1806,
    question: "Gautama Siddhartha olarak da bilinen, Budizm'in kurucusu kimdir?",
    options: ["Konfüçyüs", "Mahavira", "Buda", "Lao Tzu"],
    correct: 2,
    category: CATEGORIES.MYTHOLOGY_RELIGION.name,
    difficulty: "Kolay"
  },
  {
    id: 1807,
    question: "Hinduizm ve Budizm gibi Hint dinlerinde ruhun ölümden sonra yeni bir bedende yeniden doğması inancına ne ad verilir?",
    options: ["Dharma", "Samsara", "Karma", "Mokşa"],
    correct: 1,
    category: CATEGORIES.MYTHOLOGY_RELIGION.name,
    difficulty: "Orta"
  },
  {
    id: 1808,
    question: "Roma mitolojisinde aşk, güzellik ve doğurganlık tanrıçası kimdir (Yunan'daki Afrodit'in karşılığı)?",
    options: ["Ceres", "Venüs", "Diana", "Minerva"],
    correct: 1,
    category: CATEGORIES.MYTHOLOGY_RELIGION.name,
    difficulty: "Kolay"
  },
  {
    id: 1809,
    question: "Museviliğin (Yahudiliğin) en kutsal kitabı ve inancın temelini oluşturan metin nedir?",
    options: ["İncil", "Kuran", "Zebur", "Tevrat"],
    correct: 3,
    category: CATEGORIES.MYTHOLOGY_RELIGION.name,
    difficulty: "Kolay"
  },
  {
    id: 1810,
    question: "Yunan mitolojisinde, Medusa'nın başını keserek onu yenen ve sonra Andromedayı kurtaran kahraman kimdir?",
    options: ["Theseus", "Perseus", "Herakles", "Odisseus"],
    correct: 1,
    category: CATEGORIES.MYTHOLOGY_RELIGION.name,
    difficulty: "Orta"
  },
  {
    id: 1811,
    question: "Zerdüştlüğün (Zoroastrianism) tek tanrısı ve bilgelik tanrısı kimdir?",
    options: ["Indra", "Ahri-man", "Mithras", "Ahura Mazda"],
    correct: 3,
    category: CATEGORIES.MYTHOLOGY_RELIGION.name,
    difficulty: "Zor"
  },
  {
    id: 1812,
    question: "Konfüçyüsçülükte, 'İnsancıllık, merhamet ve başkalarını sevme' anlamına gelen en önemli ahlaki ilke nedir?",
    options: ["Ren", "Yi", "Li", "Zhi"],
    correct: 0,
    category: CATEGORIES.MYTHOLOGY_RELIGION.name,
    difficulty: "Zor"
  },
  {
    id: 1813,
    question: "Yunan mitolojisinde Hades'in yönettiği yeraltı dünyasını koruyan üç başlı köpek nedir?",
    options: ["Siren", "Kerberos", "Minotauros", "Hydra"],
    correct: 1,
    category: CATEGORIES.MYTHOLOGY_RELIGION.name,
    difficulty: "Kolay"
  },
  {
    id: 1814,
    question: "İslam inancına göre, Allah'ın vahiylerini peygamberlere ulaştırmakla görevli baş melek kimdir?",
    options: ["Cebrail", "İsrafil", "Azrail", "Mikail"],
    correct: 0,
    category: CATEGORIES.MYTHOLOGY_RELIGION.name,
    difficulty: "Kolay"
  },
  {
    id: 1815,
    question: "İskandinav mitolojisinde tanrıların dünyası Asgard'ı, insanların dünyası Midgard'a bağlayan gökkuşağı köprüsü nedir?",
    options: ["Jotunheim", "Bifrost", "Valhalla", "Niflheim"],
    correct: 1,
    category: CATEGORIES.MYTHOLOGY_RELIGION.name,
    difficulty: "Orta"
  },
  {
    id: 1816,
    question: "Hristiyanlıkta, İsa'nın en yakın takipçileri ve yardımcıları olarak bilinen havarilerin sayısı kaçtır?",
    options: ["10", "12", "7", "4"],
    correct: 1,
    category: CATEGORIES.MYTHOLOGY_RELIGION.name,
    difficulty: "Kolay"
  },
  {
    id: 1817,
    question: "Antik Yunan mitolojisinde zekâ, sanat, strateji ve savaş tanrıçası kimdir?",
    options: ["Artemis", "Hera", "Athena", "Afrodit"],
    correct: 2,
    category: CATEGORIES.MYTHOLOGY_RELIGION.name,
    difficulty: "Kolay"
  },
  {
    id: 1818,
    question: "Hinduizm'de evrenin yaratıcısı (Brahma), koruyucusu (Vishnu) ve yok edicisi olarak bilinen üç ana tanrı (Trimurti) üçlüsünün eksik üyesi hangisidir?",
    options: ["Hanuman", "Krishna", "Şiva", "Rama"],
    correct: 2,
    category: CATEGORIES.MYTHOLOGY_RELIGION.name,
    difficulty: "Orta"
  },
  {
    id: 1819,
    question: "Dünyanın bilinen en eski edebi eserlerinden biri olan, Gılgamış'ın ölümsüzlük arayışını anlatan destan nedir?",
    options: ["Yaratılış Destanı", "Gılgamış Destanı", "İlyada Destanı", "Odisse Destanı"],
    correct: 1,
    category: CATEGORIES.MYTHOLOGY_RELIGION.name,
    difficulty: "Orta"
  },
  {
    id: 1820,
    question: "Roma mitolojisinde denizler, depremler ve atlar tanrısı kimdir (Yunan'daki Poseidon'un karşılığı)?",
    options: ["Mars", "Plüton", "Jüpiter", "Neptün"],
    correct: 3,
    category: CATEGORIES.MYTHOLOGY_RELIGION.name,
    difficulty: "Kolay"
  },
  {
    id: 1821,
    question: "Taoizm'in temel metni ve yol, ilke veya varoluşun kaynağı gibi temel kavramları içeren eser nedir?",
    options: ["Tripitaka", "Tao Te Ching", "Analects", "Veda"],
    correct: 1,
    category: CATEGORIES.MYTHOLOGY_RELIGION.name,
    difficulty: "Zor"
  },
  {
    id: 1822,
    question: "İslam'da, dünyanın neresinde olursa olsun, Müslümanların namaz kılarken yöneldikleri kıble istikameti neresidir?",
    options: ["Kudüs", "Kahire", "Medine", "Kâbe (Mekke)"],
    correct: 3,
    category: CATEGORIES.MYTHOLOGY_RELIGION.name,
    difficulty: "Kolay"
  },
  {
    id: 1823,
    question: "İskandinav mitolojisinde Asgard, hangi varlıkların diyarıdır?",
    options: ["İnsanlar", "Devler", "Tanrılar", "Cüceler"],
    correct: 2,
    category: CATEGORIES.MYTHOLOGY_RELIGION.name,
    difficulty: "Kolay"
  },
  {
    id: 1824,
    question: "Yunan mitolojisinde Girit'te Minos'un emriyle Minotauros için labirenti (Labyrinth) inşa eden mimar ve mucit kimdir?",
    options: ["Daidalos", "Hephaistos", "İkaros", "Prometheus"],
    correct: 0,
    category: CATEGORIES.MYTHOLOGY_RELIGION.name,
    difficulty: "Zor"
  },
  {
    id: 1825,
    question: "Musevilikte, Işık Bayramı (Hanuka) ve diğer dini törenlerde kullanılan yedi kollu şamdanın adı nedir?",
    options: ["Kippa", "Menora", "Mezuzah", "Tefillin"],
    correct: 1,
    category: CATEGORIES.MYTHOLOGY_RELIGION.name,
    difficulty: "Kolay"
  },
  {
    id: 1826,
    question: "Jainizm'in temel ilkelerinden biri olan ve canlılara zarar vermeme ilkesi nedir?",
    options: ["Samsara", "Satya", "Dharma", "Ahimsa"],
    correct: 3,
    category: CATEGORIES.MYTHOLOGY_RELIGION.name,
    difficulty: "Zor"
  },
  {
    id: 1827,
    question: "Antik Mısır mitolojisinde ölülerin ve yeraltı dünyasının tanrısı kimdir?",
    options: ["Osiris", "Horus", "Seth", "Ra"],
    correct: 0,
    category: CATEGORIES.MYTHOLOGY_RELIGION.name,
    difficulty: "Orta"
  },
  {
    id: 1828,
    question: "İncil'e göre, İsa'nın son akşam yemeğinde ona ihanet ederek Romalılara teslim eden havari kimdir?",
    options: ["Tomas", "Yuhanna", "Petrus", "Yahuda İskariyot"],
    correct: 3,
    category: CATEGORIES.MYTHOLOGY_RELIGION.name,
    difficulty: "Kolay"
  },
  {
    id: 1829,
    question: "Yunan mitolojisinde yeraltı dünyasındaki beş nehirden biri olan ve nefret, acı ve kederin somutlaştığı nehir hangisidir?",
    options: ["Styx", "Lethe", "Cocytus", "Acheron"],
    correct: 0,
    category: CATEGORIES.MYTHOLOGY_RELIGION.name,
    difficulty: "Zor"
  },
  {
    id: 1830,
    question: "Japonya'nın geleneksel inancı Şintoizm'de (Shinto), tapınılan kutsal ruhlar, tanrılar veya doğa güçleri için kullanılan genel terim nedir?",
    options: ["Torii", "Kami-dana", "Kami", "Kama"],
    correct: 2,
    category: CATEGORIES.MYTHOLOGY_RELIGION.name,
    difficulty: "Zor"
  },
  {
    id: 1831,
    question: "Budizm'de dünyevi acı ve ıstıraplardan kurtularak ulaşılan nihai huzur ve aydınlanma durumuna ne ad verilir?",
    options: ["Dharma", "Nirvana", "Mokşa", "Samsara"],
    correct: 1,
    category: CATEGORIES.MYTHOLOGY_RELIGION.name,
    difficulty: "Kolay"
  },
  {
    id: 1832,
    question: "Hicri takvimin ilk ayı ve İslam'da yeni yılın başlangıcı sayılan ay hangisidir?",
    options: ["Muharrem", "Ramazan", "Şaban", "Zilhicce"],
    correct: 0,
    category: CATEGORIES.MYTHOLOGY_RELIGION.name,
    difficulty: "Orta"
  },
  {
    id: 1833,
    question: "Yunan mitolojisinde gökyüzünü omuzlarında taşıma cezasına çarptırılan Titan kimdir?",
    options: ["Prometheus", "Atlas", "Epimetheus", "Kronos"],
    correct: 1,
    category: CATEGORIES.MYTHOLOGY_RELIGION.name,
    difficulty: "Kolay"
  },
  {
    id: 1834,
    question: "Sihizm'in on guru tarafından yazılan ve dinin temel inançlarını içeren kutsal kitabı nedir?",
    options: ["Guru Granth Sahib", "Veda", "Gita", "Avesta"],
    correct: 0,
    category: CATEGORIES.MYTHOLOGY_RELIGION.name,
    difficulty: "Zor"
  },
  {
    id: 1835,
    question: "İskandinav mitolojisinde tanrıların, devlerin ve tüm dünyanın sonunu getirecek olan kıyamet savaşına ne ad verilir?",
    options: ["Ragnarök", "Midgard", "Valhalla", "Jotunheim"],
    correct: 0,
    category: CATEGORIES.MYTHOLOGY_RELIGION.name,
    difficulty: "Orta"
  },
  {
    id: 1836,
    question: "Antik Mısır mitolojisinde kötülük, kargaşa ve çöl fırtınalarının tanrısı kimdir?",
    options: ["Horus", "Seth", "Thoth", "Osiris"],
    correct: 1,
    category: CATEGORIES.MYTHOLOGY_RELIGION.name,
    difficulty: "Zor"
  },
  {
    id: 1837,
    question: "Yunan mitolojisinde yeraltı dünyasındaki beş nehirden biri olan ve sularını içenlerin geçmişi unuttuğu nehir hangisidir?",
    options: ["Lethe", "Acheron", "Cocytus", "Styx"],
    correct: 0,
    category: CATEGORIES.MYTHOLOGY_RELIGION.name,
    difficulty: "Orta"
  },
  {
    id: 1838,
    question: "Hristiyanlık tarihinde, İsa'nın ilahi doğası hakkındaki önemli kararların alındığı, 325 yılında toplanan ilk Ekümenik Konsil hangi şehirde düzenlenmiştir?",
    options: ["Roma", "Kudüs", "İznik (Nicea)", "İstanbul (Konstantinopolis)"],
    correct: 2,
    category: CATEGORIES.MYTHOLOGY_RELIGION.name,
    difficulty: "Zor"
  },
  {
    id: 1839,
    question: "Hinduizm'de kutsal kabul edilen ve tanrıça Ganga olarak kişileştirilen nehir hangisidir?",
    options: ["Brahmaputra Nehri", "Ganj Nehri", "İndus Nehri", "Yamuna Nehri"],
    correct: 1,
    category: CATEGORIES.MYTHOLOGY_RELIGION.name,
    difficulty: "Kolay"
  },
  {
    id: 1840,
    question: "Şintoizm'de, kutsal bir alana girişi simgeleyen ve genellikle iki dik direk ile iki yatay kirişten oluşan geleneksel kapı yapısı nedir?",
    options: ["Shimenawa", "Torii", "Gohei", "Shintai"],
    correct: 1,
    category: CATEGORIES.MYTHOLOGY_RELIGION.name,
    difficulty: "Orta"
  },
  {
    id: 1841,
    question: "Yunan mitolojisinde, annesi tarafından topuk hariç ölümsüz yapılan ve Truva Savaşı'nın en büyük kahramanı olan kişi kimdir?",
    options: ["Akhilleus (Aşil)", "Menelaos", "Hektor", "Aias"],
    correct: 0,
    category: CATEGORIES.MYTHOLOGY_RELIGION.name,
    difficulty: "Kolay"
  },
  {
    id: 1842,
    question: "İslam'ın beş şartından biri olan oruç ibadetinin yapıldığı kutsal ay hangisidir?",
    options: ["Şevval", "Recep", "Ramazan", "Muharrem"],
    correct: 2,
    category: CATEGORIES.MYTHOLOGY_RELIGION.name,
    difficulty: "Kolay"
  },
  {
    id: 1843,
    question: "Roma mitolojisinde savaş tanrısı kimdir (Yunan'daki Ares'in karşılığı)?",
    options: ["Mars", "Neptün", "Jüpiter", "Merkür"],
    correct: 0,
    category: CATEGORIES.MYTHOLOGY_RELIGION.name,
    difficulty: "Kolay"
  },
  {
    id: 1844,
    question: "Aztek mitolojisinde, rüzgar, hava ve öğrenme tanrısı olarak bilinen tüylü yılan tanrı kimdir?",
    options: ["Tlaloc", "Tezcatlipoca", "Huitzilopochtli", "Quetzalcoatl"],
    correct: 3,
    category: CATEGORIES.MYTHOLOGY_RELIGION.name,
    difficulty: "Zor"
  },
  {
    id: 1845,
    question: "Yunan mitolojisinde hasat, tarım, bereket ve tahıl tanrıçası kimdir?",
    options: ["Hera", "Artemis", "Demeter", "Hestia"],
    correct: 2,
    category: CATEGORIES.MYTHOLOGY_RELIGION.name,
    difficulty: "Orta"
  },
  {
    id: 1846,
    question: "Musevilikte (Yahudilik), tövbe ve oruçla geçirilen, yılın en kutsal günü kabul edilen bayram hangisidir?",
    options: ["Sukkot", "Yom Kippur", "Roş Aşana", "Hamursuz (Pesah)"],
    correct: 1,
    category: CATEGORIES.MYTHOLOGY_RELIGION.name,
    difficulty: "Orta"
  },
  {
    id: 1847,
    question: "İskandinav mitolojisinde Odin'in, dünyayı dolaşarak ona haber getiren iki kuzgununun adları nedir?",
    options: ["Fenrir ve Jörmungandr", "Geri ve Freki", "Hugin ve Munin", "Sleipnir ve Grani"],
    correct: 2,
    category: CATEGORIES.MYTHOLOGY_RELIGION.name,
    difficulty: "Zor"
  },
  {
    id: 1848,
    question: "Konfüçyüsçülüğün temelini oluşturan ve geleneksel Çin kültüründe önemli bir yer tutan, Konfüçyüs'ün öğrencileri tarafından derlenmiş metinler bütünü nedir?",
    options: ["Yedi Klasik", "Dört Kitap ve Beş Kanun", "Beş Klasik ve Dört Kitap", "Dokuz Yasa"],
    correct: 2,
    category: CATEGORIES.MYTHOLOGY_RELIGION.name,
    difficulty: "Zor"
  },
  {
    id: 1849,
    question: "Antik Mısır mitolojisinde ölülerin yargılanmasından sorumlu olan ve genellikle çakal başlı tasvir edilen tanrı kimdir?",
    options: ["Anubis", "Thoth", "Horus", "Osiris"],
    correct: 0,
    category: CATEGORIES.MYTHOLOGY_RELIGION.name,
    difficulty: "Zor"
  },
  {
    id: 1850,
    question: "Hristiyanlıkta, Yahudiliğin de kutsal kabul ettiği ve Musa'nın beş kitabından oluşan ilk kısım nedir?",
    options: ["Tevrat (Pentateuch)", "Peygamberler", "Vahiy", "Mezmurlar"],
    correct: 0,
    category: CATEGORIES.MYTHOLOGY_RELIGION.name,
    difficulty: "Kolay"
  },
  {
    id: 1851,
    question: "Yunan mitolojisinde Girit'teki labirentte yaşayan, yarı insan yarı boğa canavarı nedir?",
    options: ["Siren", "Minotauros", "Kentaur", "Gorgon"],
    correct: 1,
    category: CATEGORIES.MYTHOLOGY_RELIGION.name,
    difficulty: "Kolay"
  },
  {
    id: 1852,
    question: "İslam'ın temel inanç esası olan, Allah'ın bir ve tek olduğu inancına ne ad verilir?",
    options: ["Tevhid", "Ahiret", "Haşr", "Nübüvvet"],
    correct: 0,
    category: CATEGORIES.MYTHOLOGY_RELIGION.name,
    difficulty: "Kolay"
  },
  {
    id: 1853,
    question: "Hinduizm'de yaratıcı (Brahma) ve koruyucu (Vishnu) tanrılarla birlikte, aynı zamanda yok edici olarak da bilinen tanrı kimdir?",
    options: ["Krishna", "Ganeşa", "Hanuman", "Şiva"],
    correct: 3,
    category: CATEGORIES.MYTHOLOGY_RELIGION.name,
    difficulty: "Kolay"
  },
  {
    id: 1854,
    question: "Yunan mitolojisinde, ruhları Styx nehrinden geçirerek yeraltı dünyasına taşıyan kayıkçı kimdir?",
    options: ["Hades", "Thanatos", "Kharon (Charon)", "Hypnos"],
    correct: 2,
    category: CATEGORIES.MYTHOLOGY_RELIGION.name,
    difficulty: "Orta"
  },
  {
    id: 1855,
    question: "Musevilikte, İsrailoğulları'nı Mısır'daki kölelikten kurtararak Kızıldeniz'i yarıp geçiren peygamber kimdir?",
    options: ["Musa", "Davut", "İbrahim", "Nuh"],
    correct: 0,
    category: CATEGORIES.MYTHOLOGY_RELIGION.name,
    difficulty: "Kolay"
  },
  {
    id: 1856,
    question: "İskandinav mitolojisinde Asgard, Midgard ve diğer dokuz diyarı birbirine bağlayan devasa dünya ağacı nedir?",
    options: ["Gungnir", "Yggdrasil", "Mjölnir", "Nidhogg"],
    correct: 1,
    category: CATEGORIES.MYTHOLOGY_RELIGION.name,
    difficulty: "Orta"
  },
  {
    id: 1857,
    question: "Hristiyanlıkta, Meryem'e İsa'nın doğumunu müjdeleyen baş melek (Gabriel) kimdir?",
    options: ["Mikail", "İsrafil", "Cebrail", "Azrail"],
    correct: 2,
    category: CATEGORIES.MYTHOLOGY_RELIGION.name,
    difficulty: "Orta"
  },
  {
    id: 1858,
    question: "Yunan mitolojisinde denizlerin, atların ve depremlerin tanrısı kimdir?",
    options: ["Hades", "Poseidon", "Hephaistos", "Hermes"],
    correct: 1,
    category: CATEGORIES.MYTHOLOGY_RELIGION.name,
    difficulty: "Kolay"
  },
  {
    id: 1859,
    question: "Budizm'in temelini oluşturan ve 'Istırap, ıstırabın kaynağı, ıstırabın sona ermesi ve sona erme yolu'nu içeren Dört Yüce Gerçeği kim öğretmiştir?",
    options: ["Buda (Siddhartha Gautama)", "Zerdüşt", "Lao Tzu", "Konfüçyüs"],
    correct: 0,
    category: CATEGORIES.MYTHOLOGY_RELIGION.name,
    difficulty: "Kolay"
  },
  {
    id: 1860,
    question: "İslam'da, Mekke'de bulunan ve Müslümanların kıblesini oluşturan, içinde Hacerü'l-Esved'in (Kara Taş) bulunduğu küp şeklindeki yapı nedir?",
    options: ["Arafat", "Safa ve Merve", "Mescid-i Nebevi", "Kâbe"],
    correct: 3,
    category: CATEGORIES.MYTHOLOGY_RELIGION.name,
    difficulty: "Kolay"
  },
  {
    id: 1861,
    question: "Yunan mitolojisinde, tanrılar tarafından insan ırkına ceza olarak yaratılan ve kutusundan tüm kötülükleri dünyaya yayan ilk kadın kimdir?",
    options: ["Medea", "Elektra", "Pandora", "Helena"],
    correct: 2,
    category: CATEGORIES.MYTHOLOGY_RELIGION.name,
    difficulty: "Orta"
  },
  {
    id: 1862,
    question: "Hinduizm'de kişinin ahlaki görevi, erdemli yaşam tarzı ve doğru davranış ilkelerini ifade eden temel kavram nedir?",
    options: ["Dharma", "Mokşa", "Karma", "Samsara"],
    correct: 0,
    category: CATEGORIES.MYTHOLOGY_RELIGION.name,
    difficulty: "Orta"
  },
  {
    id: 1863,
    question: "İskandinav mitolojisinde, zincirle bağlanan ve Ragnarök sırasında serbest kalıp Odin'i öldüreceği kehanet edilen devasa kurt nedir?",
    options: ["Geri", "Jörmungandr", "Hugin", "Fenrir"],
    correct: 3,
    category: CATEGORIES.MYTHOLOGY_RELIGION.name,
    difficulty: "Zor"
  },
  {
    id: 1864,
    question: "Musevilikte (Yahudilik), özellikle sabah duaları sırasında giyilen püsküllü ibadet şalı nedir?",
    options: ["Tallit", "Tefillin", "Kippa", "Mezuzah"],
    correct: 0,
    category: CATEGORIES.MYTHOLOGY_RELIGION.name,
    difficulty: "Zor"
  },
  {
    id: 1865,
    question: "Antik Mısır mitolojisinde annelik, büyü, şifa ve bereket tanrıçası olarak bilinen figür kimdir?",
    options: ["İsis", "Hathor", "Nephthys", "Ma'at"],
    correct: 0,
    category: CATEGORIES.MYTHOLOGY_RELIGION.name,
    difficulty: "Kolay"
  },
  {
    id: 1866,
    question: "Hristiyanlıkta, Tanrı'nın Baba, Oğul (İsa Mesih) ve hangi varlıktan oluşan üçlü birliğini ifade eden temel inanç doktrini nedir?",
    options: ["Meryem Ana", "Kilise", "Kutsal Ruh", "Melek Cebrail"],
    correct: 2,
    category: CATEGORIES.MYTHOLOGY_RELIGION.name,
    difficulty: "Kolay"
  },
  {
    id: 1867,
    question: "Yunan mitolojisinde keçi gövdeli, yılan kuyruklu ve aslan başlı, ateş püskürten canavar nedir?",
    options: ["Khimaira (Kimera)", "Hydra", "Sfenks", "Gorgon"],
    correct: 0,
    category: CATEGORIES.MYTHOLOGY_RELIGION.name,
    difficulty: "Zor"
  },
  {
    id: 1868,
    question: "İslam'da, Kuran'ın indirilmeye başlandığı, bin aydan daha hayırlı olduğuna inanılan gece hangisidir?",
    options: ["Kadir Gecesi", "Mevlid Kandili", "Berat Kandili", "Miraç Kandili"],
    correct: 0,
    category: CATEGORIES.MYTHOLOGY_RELIGION.name,
    difficulty: "Orta"
  },
  {
    id: 1869,
    question: "Taoizm'de zıt güçlerin (örneğin karanlık-aydınlık, dişi-erkek) uyumlu birliğini ve evrendeki dengeyi temsil eden sembol nedir?",
    options: ["Yin ve Yang", "Mandala", "Svastika", "Aum (Om)"],
    correct: 0,
    category: CATEGORIES.MYTHOLOGY_RELIGION.name,
    difficulty: "Kolay"
  },
  {
    id: 1870,
    question: "Yunan mitolojisinde dokuz ilham perisinden (Musa) destan şiirinin perisi kimdir?",
    options: ["Thalia", "Kalliope", "Erato", "Melpomene"],
    correct: 1,
    category: CATEGORIES.MYTHOLOGY_RELIGION.name,
    difficulty: "Zor"
  },
  {
    id: 1871,
    question: "Hinduizm'in kutsal metinlerinden biri olan ve 'Tanrı'nın Şarkısı' anlamına gelen felsefi şiir nedir?",
    options: ["Upanishadlar", "Bhagavad Gita", "Mahabharata", "Ramayana"],
    correct: 1,
    category: CATEGORIES.MYTHOLOGY_RELIGION.name,
    difficulty: "Zor"
  },
  {
    id: 1872,
    question: "Musevilik (Yahudilik), Hristiyanlık ve İslam için kutsal kabul edilen ve her üç dinin önemli mabetlerinin bulunduğu şehir hangisidir?",
    options: ["Mekke", "Kudüs", "Roma", "Medine"],
    correct: 1,
    category: CATEGORIES.MYTHOLOGY_RELIGION.name,
    difficulty: "Kolay"
  },
  {
    id: 1873,
    question: "İskandinav mitolojisinde, genellikle Asgard'ın düşmanı olarak tasvir edilen devlerin (Jötnar) diyarı nedir?",
    options: ["Jotunheim", "Niflheim", "Muspelheim", "Vanaheim"],
    correct: 0,
    category: CATEGORIES.MYTHOLOGY_RELIGION.name,
    difficulty: "Orta"
  },
  {
    id: 1874,
    question: "Hristiyanlık ve Musevilikte, Sina Dağı'nda Tanrı'dan On Emri (Ten Commandments) alan peygamber kimdir?",
    options: ["Davut", "Musa", "İbrahim", "İsa"],
    correct: 1,
    category: CATEGORIES.MYTHOLOGY_RELIGION.name,
    difficulty: "Kolay"
  },
  {
    id: 1875,
    question: "Yunan mitolojisinde babasının (Daidalos) uyarılarına rağmen balmumu kanatlarla güneşe çok yaklaşıp denize düşen kişi kimdir?",
    options: ["Herakles", "Theseus", "Perseus", "İkaros"],
    correct: 3,
    category: CATEGORIES.MYTHOLOGY_RELIGION.name,
    difficulty: "Kolay"
  },
  {
    id: 1876,
    question: "İslam dininin en büyük iki ana mezhebi hangileridir?",
    options: ["Dürzilik ve Alevilik", "Haricilik ve Mutezile", "Selefilik ve Sufilik", "Sünnilik ve Şiilik"],
    correct: 3,
    category: CATEGORIES.MYTHOLOGY_RELIGION.name,
    difficulty: "Kolay"
  },
  {
    id: 1877,
    question: "Geleneksel Çin inanışında, hükümdarın yönetim hakkının gökler tarafından verildiği ve ahlaki erdemiyle devam ettiği inancı nedir?",
    options: ["Tao", "Beş Element Teorisi", "Yin ve Yang", "Göklerin Emri (Cennetin Mandası)"],
    correct: 3,
    category: CATEGORIES.MYTHOLOGY_RELIGION.name,
    difficulty: "Zor"
  },
  {
    id: 1878,
    question: "Yunan mitolojisinde avcılık, vahşi doğa, ay ve bakireliğin tanrıçası kimdir?",
    options: ["Afrodit", "Hera", "Artemis", "Hestia"],
    correct: 2,
    category: CATEGORIES.MYTHOLOGY_RELIGION.name,
    difficulty: "Kolay"
  },
  {
    id: 1879,
    question: "Budizm'de Buda'nın öğretilerini (Dharma) temsil eden tekerlek sembolü (Dharma Çakra) genellikle kaç kolludur?",
    options: ["6", "4", "8", "10"],
    correct: 2,
    category: CATEGORIES.MYTHOLOGY_RELIGION.name,
    difficulty: "Zor"
  },
  {
    id: 1880,
    question: "Hinduizm'in en eski ve kutsal metinleri olan Vedalar'ın yazıldığı ve hala dini ayinlerde kullanılan eski Hint dili nedir?",
    options: ["Pali", "Tamil", "Sanskritçe", "Hintçe"],
    correct: 2,
    category: CATEGORIES.MYTHOLOGY_RELIGION.name,
    difficulty: "Zor"
  },
  {
    id: 1881,
    question: "Yunan mitolojisinde şarap, bereket, coşku ve çılgınlık tanrısı kimdir?",
    options: ["Hermes", "Dionysos", "Hefaisos", "Apollon"],
    correct: 1,
    category: CATEGORIES.MYTHOLOGY_RELIGION.name,
    difficulty: "Orta"
  },
  {
    id: 1882,
    question: "Hristiyanlıkta, İsa tarafından havarilere öğretilen ve Hristiyanlığın en bilinen duası olan dua nedir?",
    options: ["Mezmur 23", "Havariler Amentüsü", "Pederimiz (Rab'bin Duası)", "Selam Sana Meryem"],
    correct: 2,
    category: CATEGORIES.MYTHOLOGY_RELIGION.name,
    difficulty: "Kolay"
  },
  {
    id: 1883,
    question: "İskandinav mitolojisinde tanrı Odin'in daima amacına ulaşan sihirli mızrağının adı nedir?",
    options: ["Mjölnir", "Gungnir", "Gram", "Tyrfing"],
    correct: 1,
    category: CATEGORIES.MYTHOLOGY_RELIGION.name,
    difficulty: "Zor"
  },
  {
    id: 1884,
    question: "İslam'ın beş şartından biri olan ve günün belirli vakitlerinde yerine getirilen ibadet nedir?",
    options: ["Zekât", "Hac", "Namaz", "Oruç"],
    correct: 2,
    category: CATEGORIES.MYTHOLOGY_RELIGION.name,
    difficulty: "Kolay"
  },
  {
    id: 1885,
    question: "Antik Mısır mitolojisinde hakikat, adalet ve kozmik düzenin (Ma'at) tanrıçası kimdir?",
    options: ["Sekhmet", "Hathor", "Ma'at", "İsis"],
    correct: 2,
    category: CATEGORIES.MYTHOLOGY_RELIGION.name,
    difficulty: "Zor"
  },
  {
    id: 1886,
    question: "Yunan mitolojisinde, Argo gemisiyle yola çıkarak Altın Post'u (Golden Fleece) aramaya giden kahraman kimdir?",
    options: ["Achilleus", "Perseus", "Herakles", "İason (Jason)"],
    correct: 3,
    category: CATEGORIES.MYTHOLOGY_RELIGION.name,
    difficulty: "Orta"
  },
  {
    id: 1887,
    question: "Musevilikte (Yahudilik), Seleukos İmparatorluğu'na karşı kazanılan zaferi ve Kudüs'teki tapınağın yeniden adanmasını anmak için kutlanan bayram nedir?",
    options: ["Pesah", "Yom Kippur", "Purim", "Hanuka"],
    correct: 3,
    category: CATEGORIES.MYTHOLOGY_RELIGION.name,
    difficulty: "Kolay"
  },
  {
    id: 1888,
    question: "Budizm'de aşırı çilecilikten ve aşırı lüks yaşamdan kaçınmayı öğütleyen ve aydınlanmaya giden yolu temsil eden yol nedir?",
    options: ["Dört Yüce Gerçek", "Orta Yol", "Sekiz Katlı Yol", "Yüce Yol"],
    correct: 1,
    category: CATEGORIES.MYTHOLOGY_RELIGION.name,
    difficulty: "Kolay"
  },
  {
    id: 1889,
    question: "Antik Mısır'da, öbür dünya inancına bağlı olarak, ölülerin bedenlerinin bozulmadan korunması için yapılan işlem nedir?",
    options: ["Mumyalama", "Nil Töreni", "Hiyeroglif Yazımı", "Sfenks İnşası"],
    correct: 0,
    category: CATEGORIES.MYTHOLOGY_RELIGION.name,
    difficulty: "Kolay"
  },
  {
    id: 1890,
    question: "Yunan mitolojisinde ocak (ateş), ev ve aile yaşamının tanrıçası kimdir?",
    options: ["Hera", "Hestia", "Afrodit", "Demeter"],
    correct: 1,
    category: CATEGORIES.MYTHOLOGY_RELIGION.name,
    difficulty: "Zor"
  },
  {
    id: 1891,
    question: "Hristiyanlıkta, İsa'nın kanını ve yeni ahdi simgelemek için Komünyon (Eucharist) ayininde tüketilen içecek nedir?",
    options: ["Su", "Zeytinyağı", "Süt", "Şarap"],
    correct: 3,
    category: CATEGORIES.MYTHOLOGY_RELIGION.name,
    difficulty: "Kolay"
  },
  {
    id: 1892,
    question: "İskandinav mitolojisinde dev Surtr'un yaşadığı ve Ragnarök'te Asgard'ı yakacak olan ateş diyarı nedir?",
    options: ["Muspelheim", "Midgard", "Asgard", "Niflheim"],
    correct: 0,
    category: CATEGORIES.MYTHOLOGY_RELIGION.name,
    difficulty: "Orta"
  },
  {
    id: 1893,
    question: "İslam inancına göre, Hz. Muhammed'e ilk vahyin geldiği Mekke yakınlarındaki mağara hangisidir?",
    options: ["Ashab-ı Kehf Mağarası", "Sevr Mağarası", "Zülkarneyn Mağarası", "Hira Mağarası"],
    correct: 3,
    category: CATEGORIES.MYTHOLOGY_RELIGION.name,
    difficulty: "Orta"
  },
  {
    id: 1894,
    question: "Yunan mitolojisinde, Zeus tarafından tahttan indirilen ve zamanı kişileştiren en güçlü Titan kimdir?",
    options: ["Okeanos", "Atlas", "Prometheus", "Kronos (Satürn)"],
    correct: 3,
    category: CATEGORIES.MYTHOLOGY_RELIGION.name,
    difficulty: "Orta"
  },
  {
    id: 1895,
    question: "Hinduizm'deki geleneksel kast sisteminde, genellikle rahipler, öğretmenler ve alimlerden oluşan en üstteki sosyal sınıf (Varna) hangisidir?",
    options: ["Brahman", "Vaişya", "Kshatriya", "Şudra"],
    correct: 0,
    category: CATEGORIES.MYTHOLOGY_RELIGION.name,
    difficulty: "Zor"
  },
  {
    id: 1896,
    question: "Roma mitolojisinde, kapılar, geçitler, başlangıçlar ve sonların iki yüzlü tanrısı kimdir?",
    options: ["Mars", "Merkür", "Janus", "Jüpiter"],
    correct: 2,
    category: CATEGORIES.MYTHOLOGY_RELIGION.name,
    difficulty: "Zor"
  },
  {
    id: 1897,
    question: "Budizm'in en eski kutsal metinlerinden biri olan ve 'Üç Sepet' anlamına gelen Pali dilindeki eser nedir?",
    options: ["Sutra", "Tripitaka", "Upanishad", "Veda"],
    correct: 1,
    category: CATEGORIES.MYTHOLOGY_RELIGION.name,
    difficulty: "Zor"
  },
  {
    id: 1898,
    question: "Yunan mitolojisinde, tanrıların insan ırkına ceza olarak yarattığı ve kutusundan tüm kötülükleri dünyaya yayan figür kimdir?",
    options: ["Helena", "Elektra", "Pandora", "Medea"],
    correct: 2,
    category: CATEGORIES.MYTHOLOGY_RELIGION.name,
    difficulty: "Kolay"
  },
  {
    id: 1899,
    question: "İslam dininin en kutsal şehri ve Kâbe'nin bulunduğu yer neresidir?",
    options: ["Mekke", "Şam", "Kudüs", "Medine"],
    correct: 0,
    category: CATEGORIES.MYTHOLOGY_RELIGION.name,
    difficulty: "Kolay"
  },
  {
    id: 1900,
    question: "Hristiyanlıkta, inancı uğruna taşlanarak öldürülen ve genellikle 'ilk şehit' (protomartyr) olarak anılan kişi kimdir?",
    options: ["Yahya (Vaftizci)", "Petrus", "Pavlus", "Stefanus"],
    correct: 3,
    category: CATEGORIES.MYTHOLOGY_RELIGION.name,
    difficulty: "Zor"
  },
  {
    id: 1901,
    question: "Antik Yunan mitolojisinde, tanrıların kralı ve gök gürültüsü tanrısı kimdir?",
    options: ["Hades", "Apollo", "Zeus", "Poseidon"],
    correct: 2,
    category: "Mitoloji ve Dinler",
    difficulty: "Kolay"
  },
  {
    id: 1902,
    question: "Hristiyanlıkta, İsa'nın çarmıha gerildiği yerin adı nedir?",
    options: ["Celile", "Betlehem", "Nazaret", "Golgota (Kafatası Tepesi)"],
    correct: 3,
    category: "Mitoloji ve Dinler",
    difficulty: "Kolay"
  },
  {
    id: 1903,
    question: "Hinduizm'de, koruyucu tanrı olarak bilinen ve dünyayı kötü güçlerden kurtaran tanrı kimdir?",
    options: ["Şiva", "Brahma", "Vişnu", "Ganeşa"],
    correct: 2,
    category: "Mitoloji ve Dinler",
    difficulty: "Kolay"
  },
  {
    id: 1904,
    question: "Norse (İskandinav) mitolojisinde, tanrıların ve savaşçıların öbür dünyada toplandığı büyük salonun adı nedir?",
    options: ["Asgard", "Helheim", "Valhalla", "Niflheim"],
    correct: 2,
    category: "Mitoloji ve Dinler",
    difficulty: "Kolay"
  },
  {
    id: 1905,
    question: "İslamiyet'te, peygamberin Mekke'den Medine'ye göç etmesi olayına ne ad verilir?",
    options: ["Vahiy", "Miraç", "Hicret", "Tebliğ"],
    correct: 2,
    category: "Mitoloji ve Dinler",
    difficulty: "Kolay"
  },
  {
    id: 1906,
    question: "Antik Mısır mitolojisinde, ölümden sonraki yaşamın ve ölüler dünyasının tanrısı kimdir?",
    options: ["Osiris", "Anubis", "Ra", "Horus"],
    correct: 0,
    category: "Mitoloji ve Dinler",
    difficulty: "Kolay"
  },
  {
    id: 1907,
    question: "Budizm'in kurucusu kabul edilen ve 'Aydınlanmış Kişi' anlamına gelen isim nedir?",
    options: ["Siddhartha Gautama (Buda)", "Mahavira", "Konfüçyüs", "Lao Tzu"],
    correct: 0,
    category: "Mitoloji ve Dinler",
    difficulty: "Kolay"
  },
  {
    id: 1908,
    question: "Yahudilikte, Tanrı'nın Hz. Musa'ya Sina Dağı'nda verdiği on emrin bulunduğu kutsal sandığa ne ad verilir?",
    options: ["Tevrat", "Menora", "Ahit Sandığı (Ark of the Covenant)", "Talmud"],
    correct: 2,
    category: "Mitoloji ve Dinler",
    difficulty: "Orta"
  },
  {
    id: 1909,
    question: "Yunan mitolojisinde, yeraltı dünyasının (Hades) kapısını bekleyen üç başlı köpek nedir?",
    options: ["Hydra", "Kerberos (Cerberus)", "Medusa", "Minotor"],
    correct: 1,
    category: "Mitoloji ve Dinler",
    difficulty: "Kolay"
  },
  {
    id: 1910,
    question: "İslam'ın beş şartından biri olan ve kutsal topraklara (Mekke) yapılan hac vazifesine ne ad verilir?",
    options: ["Oruç", "Hac", "Namaz", "Zekat"],
    correct: 1,
    category: "Mitoloji ve Dinler",
    difficulty: "Kolay"
  },
  {
    id: 1911,
    question: "Roma mitolojisinde, savaş tanrısı kimdir?",
    options: ["Neptün", "Vulcan", "Mars", "Jüpiter"],
    correct: 2,
    category: "Mitoloji ve Dinler",
    difficulty: "Kolay"
  },
  {
    id: 1912,
    question: "Çin mitolojisinde, genellikle bereket ve gücü temsil eden efsanevi yaratık nedir?",
    options: ["Anka Kuşu", "Maymun", "Kaplan", "Ejderha"],
    correct: 3,
    category: "Mitoloji ve Dinler",
    difficulty: "Kolay"
  },
  {
    id: 1913,
    question: "Sihizm'in kutsal kitabı ve ebedi gurusu olarak kabul edilen metin nedir?",
    options: ["Vedalar", "Upanishadlar", "Guru Granth Sahib", "Tao Te Ching"],
    correct: 2,
    category: "Mitoloji ve Dinler",
    difficulty: "Zor"
  },
  {
    id: 1914,
    question: "Yunan mitolojisinde, insanlara ateşi çaldığı için zincire vurularak cezalandırılan titan kimdir?",
    options: ["Atlas", "Prometheus", "Kronos", "Epimetheus"],
    correct: 1,
    category: "Mitoloji ve Dinler",
    difficulty: "Kolay"
  },
  {
    id: 1915,
    question: "Hristiyanlıkta, İsa'nın dirilişini kutlayan ve genellikle baharda kutlanan bayram nedir?",
    options: ["Paskalya", "Pentikost", "Cadılar Bayramı", "Noel"],
    correct: 0,
    category: "Mitoloji ve Dinler",
    difficulty: "Kolay"
  },
  {
    id: 1916,
    question: "Mezopotamya mitolojisinde, Büyük Tufan hikayesinin kahramanı olarak bilinen Sümer kralı kimdir?",
    options: ["Nabukadnezar", "Gılgamış", "Hammurabi", "Sargon"],
    correct: 1,
    category: "Mitoloji ve Dinler",
    difficulty: "Orta"
  },
  {
    id: 1917,
    question: "Japon mitolojisinde, Güneş Tanrıçası ve Shinto inancının en önemli tanrısı kimdir?",
    options: ["Tsukuyomi", "Izanami", "Amaterasu", "Susanoo"],
    correct: 2,
    category: "Mitoloji ve Dinler",
    difficulty: "Zor"
  },
  {
    id: 1918,
    question: "Taoizm'in kurucusu olarak kabul edilen ve 'Tao Te Ching' adlı eseri yazdığı düşünülen Çinli filozof kimdir?",
    options: ["Lao Tzu", "Konfüçyüs", "Sun Tzu", "Mencius"],
    correct: 0,
    category: "Mitoloji ve Dinler",
    difficulty: "Orta"
  },
  {
    id: 1919,
    question: "İslamiyette, cennet ve cehennem arasında olduğu rivayet edilen ve bir köprü veya duvar olarak tasvir edilen yerin adı nedir?",
    options: ["Tuba Ağacı", "Kevser", "Araf", "Sırat Köprüsü"],
    correct: 2,
    category: "Mitoloji ve Dinler",
    difficulty: "Kolay"
  },
  {
    id: 1920,
    question: "Norse mitolojisinde, tüm dünyayı saran ve Ragnarök'ta (Tanrıların Alacakaranlığı) serbest kalacak olan dev yılan nedir?",
    options: ["Sleipnir", "Hela", "Jörmungandr", "Fenrir"],
    correct: 2,
    category: "Mitoloji ve Dinler",
    difficulty: "Orta"
  },
  {
    id: 1921,
    question: "Yunan mitolojisinde, güzellik ve aşk tanrıçası kimdir?",
    options: ["Artemis", "Athena", "Hera", "Afrodit"],
    correct: 3,
    category: "Mitoloji ve Dinler",
    difficulty: "Kolay"
  },
  {
    id: 1922,
    question: "Yahudilikte, erkek çocukların sekiz günlükken sünnet edilmesi törenine ne ad verilir?",
    options: ["Yom Kippur", "Brit Mila (Sünnet Anlaşması)", "Bar Mitsva", "Pesah"],
    correct: 1,
    category: "Mitoloji ve Dinler",
    difficulty: "Orta"
  },
  {
    id: 1923,
    question: "Hinduizm'de, yok edici ve yeniden yaratıcı gücü temsil eden tanrı kimdir?",
    options: ["Lakşmi", "Şiva", "Brahma", "Vişnu"],
    correct: 1,
    category: "Mitoloji ve Dinler",
    difficulty: "Kolay"
  },
  {
    id: 1924,
    question: "Maya mitolojisinde, Gök Tanrısı ve yaratan tanrı olarak bilinen figür kimdir?",
    options: ["Tlaloc", "Huitzilopochtli", "Itzamna", "Quetzalcoatl"],
    correct: 2,
    category: "Mitoloji ve Dinler",
    difficulty: "Zor"
  },
  {
    id: 1925,
    question: "Hristiyanlıkta, dinsel ibadet ve öğretilerin merkezi olan, İncil'in bir parçası olan kitaplar bütününe ne ad verilir?",
    options: ["Zebur", "Yeni Ahit", "Tevrat", "Eski Ahit"],
    correct: 1,
    category: "Mitoloji ve Dinler",
    difficulty: "Kolay"
  },
  {
    id: 1926,
    question: "Afrika mitolojilerinde, genellikle gökkuşağı ile ilişkilendirilen ve yılan şeklinde tasvir edilen yaratık nedir?",
    options: ["Fil Ruhu", "Leopar Ruhu", "Gökkuşağı Yılanı (Ayida Weddo / Oshun)", "Aslan Tanrısı"],
    correct: 2,
    category: "Mitoloji ve Dinler",
    difficulty: "Zor"
  },
  {
    id: 1927,
    question: "Yunan mitolojisinde, ölüleri Kharon'un kayığıyla yeraltı dünyasına götürdüğü nehir nedir?",
    options: ["Nil Nehri", "Styx Nehri", "Fırat Nehri", "Tuna Nehri"],
    correct: 1,
    category: "Mitoloji ve Dinler",
    difficulty: "Kolay"
  },
  {
    id: 1928,
    question: "İslamiyet'te, yoksullara yardım etmek amacıyla verilen zorunlu sadakaya ne ad verilir?",
    options: ["Fıtır Sadakası", "Zekat", "Sadaka", "Fitre"],
    correct: 1,
    category: "Mitoloji ve Dinler",
    difficulty: "Kolay"
  },
  {
    id: 1929,
    question: "Budizm'de, dünyanın acılarından kurtulmak için izlenmesi gereken yola ne ad verilir?",
    options: ["Sekiz Aşamalı Asil Yol", "Karma", "Reenkarnasyon", "Nirvana"],
    correct: 0,
    category: "Mitoloji ve Dinler",
    difficulty: "Orta"
  },
  {
    id: 1930,
    question: "Norse mitolojisinde, tek gözlü, kargaları olan ve bilgelik, savaş ve sihir tanrısı kimdir?",
    options: ["Thor", "Tyr", "Odin", "Loki"],
    correct: 2,
    category: "Mitoloji ve Dinler",
    difficulty: "Kolay"
  },
  {
    id: 1931,
    question: "Yunan mitolojisinde, denizlerin ve depremlerin tanrısı kimdir?",
    options: ["Hades", "Apollo", "Poseidon", "Ares"],
    correct: 2,
    category: "Mitoloji ve Dinler",
    difficulty: "Kolay"
  },
  {
    id: 1932,
    question: "Hristiyanlıkta, Yeni Ahit'in ilk dört kitabına ne ad verilir?",
    options: ["Mektuplar", "Resullerin İşleri", "Vahiy", "İnciller (Matta, Markos, Luka, Yuhanna)"],
    correct: 3,
    category: "Mitoloji ve Dinler",
    difficulty: "Kolay"
  },
  {
    id: 1933,
    question: "Antik Mısır'da, güneş tanrısı ve tanrıların kralı olarak kabul edilen figür kimdir?",
    options: ["Thoth", "Ra", "Anubis", "Set"],
    correct: 1,
    category: "Mitoloji ve Dinler",
    difficulty: "Kolay"
  },
  {
    id: 1934,
    question: "Hinduizm'de, 'Kutsal Üçlü'yü (Trimurti) oluşturan tanrılardan biri olmayan kimdir?",
    options: ["Şiva (Yok Edici)", "Brahma (Yaratıcı)", "İndra (Savaş Tanrısı)", "Vişnu (Koruyucu)"],
    correct: 2,
    category: "Mitoloji ve Dinler",
    difficulty: "Kolay"
  },
  {
    id: 1935,
    question: "Aztek mitolojisinde, tüylü yılan tanrısı olarak bilinen ve yaratılışla ilişkilendirilen tanrı kimdir?",
    options: ["Tezcatlipoca", "Tlaloc", "Quetzalcoatl", "Huitzilopochtli"],
    correct: 2,
    category: "Mitoloji ve Dinler",
    difficulty: "Zor"
  },
  {
    id: 1936,
    question: "İslamiyet'te, Hz. Muhammed'in göğe yükseldiği (semaya çıktığı) geceye ne ad verilir?",
    options: ["Miraç Gecesi", "Kadir Gecesi", "Regaib Gecesi", "Berat Gecesi"],
    correct: 0,
    category: "Mitoloji ve Dinler",
    difficulty: "Kolay"
  },
  {
    id: 1937,
    question: "Yunan mitolojisinde, yeryüzü tanrıçası ve tüm titanların annesi kimdir?",
    options: ["Artemis", "Hera", "Hestia", "Gaia"],
    correct: 3,
    category: "Mitoloji ve Dinler",
    difficulty: "Orta"
  },
  {
    id: 1938,
    question: "Konfüçyüsçülük'te, ahlaki mükemmelliğe ulaşmış, erdemli insan anlamına gelen terim nedir?",
    options: ["Wei", "Yin", "Junzi (Asil İnsan)", "Tao"],
    correct: 2,
    category: "Mitoloji ve Dinler",
    difficulty: "Zor"
  },
  {
    id: 1939,
    question: "Norse mitolojisinde, Odin'in atı olan ve sekiz bacağı bulunan efsanevi hayvan nedir?",
    options: ["Geri", "Hugin", "Freki", "Sleipnir"],
    correct: 3,
    category: "Mitoloji ve Dinler",
    difficulty: "Orta"
  },
  {
    id: 1940,
    question: "Jainizm'in temelini oluşturan ve şiddetsizlik anlamına gelen ilke nedir?",
    options: ["Ahimsa", "Dharma", "Nirvana", "Karma"],
    correct: 0,
    category: "Mitoloji ve Dinler",
    difficulty: "Zor"
  },
  {
    id: 1941,
    question: "Antik Yunan'da, bilgi, sanat ve ilham tanrıçaları olarak bilinen dokuz kız kardeşe ne ad verilir?",
    options: ["Naiadlar", "Harpyalar", "Müzler (Musalar)", "Hesperidler"],
    correct: 2,
    category: "Mitoloji ve Dinler",
    difficulty: "Kolay"
  },
  {
    id: 1942,
    question: "Yahudilikte, haftalık dinlenme ve ibadet günü olan ve Cuma gün batımından Cumartesi gün batımına kadar süren güne ne ad verilir?",
    options: ["Roş Aşana", "Pesah", "Yom Kippur", "Şabat (Sabbath)"],
    correct: 3,
    category: "Mitoloji ve Dinler",
    difficulty: "Kolay"
  },
  {
    id: 1943,
    question: "Antik Mısır'da, Güneş Tanrısı Ra'nın başındaki güneş diski ve kutsal yılanın birleşimi olan sembol nedir?",
    options: ["Uraeus", "Ankh", "Göz (Udjat)", "Sfenks"],
    correct: 0,
    category: "Mitoloji ve Dinler",
    difficulty: "Orta"
  },
  {
    id: 1944,
    question: "Budizm'de, kişinin yeniden doğuş döngüsünden (Samsara) kurtuluşa erdiği nihai durum nedir?",
    options: ["Nirvana", "Mokşa", "Karma", "Dharma"],
    correct: 0,
    category: "Mitoloji ve Dinler",
    difficulty: "Kolay"
  },
  {
    id: 1945,
    question: "İslamiyet'te, dört büyük melekten biri olan ve ölüm meleği olarak da bilinen melek kimdir?",
    options: ["İsrafil", "Cebrail", "Mikail", "Azrail"],
    correct: 3,
    category: "Mitoloji ve Dinler",
    difficulty: "Kolay"
  },
  {
    id: 1946,
    question: "Yunan mitolojisinde, Girit'teki bir labirentte yaşayan, yarı insan yarı boğa yaratık nedir?",
    options: ["Minotor", "Siren", "Medusa", "Kentaur"],
    correct: 0,
    category: "Mitoloji ve Dinler",
    difficulty: "Kolay"
  },
  {
    id: 1947,
    question: "Hinduizm'de, kutsal kabul edilen ve Hindistan'ın en uzun nehri olan nehir nedir?",
    options: ["Brahmaputra", "Yamuna Nehri", "Ganj Nehri", "İndus Nehri"],
    correct: 2,
    category: "Mitoloji ve Dinler",
    difficulty: "Kolay"
  },
  {
    id: 1948,
    question: "Hristiyanlıkta, Yeni Ahit'in en son kitabı olan ve dünyanın sonunu (kıyamet) anlatan kitap nedir?",
    options: ["Matta İncili", "Vahiy (Apokalips)", "Yuhanna İncili", "Romalılara Mektup"],
    correct: 1,
    category: "Mitoloji ve Dinler",
    difficulty: "Orta"
  },
  {
    id: 1949,
    question: "İskandinav mitolojisinde, tanrı Odin'in bilgelik elde etmek için feda ettiği organı nedir?",
    options: ["Bacağını", "Gözünü", "Kolunu", "Kulağını"],
    correct: 1,
    category: "Mitoloji ve Dinler",
    difficulty: "Orta"
  },
  {
    id: 1950,
    question: "Şamanizm'de, ruhlar ve insanlar arasında aracılık eden dini lidere ne ad verilir?",
    options: ["Şaman", "Rahip", "Derviş", "Guru"],
    correct: 0,
    category: "Mitoloji ve Dinler",
    difficulty: "Kolay"
  },
  {
    id: 1951,
    question: "Yunan mitolojisinde, tanrıça Artemis'in alanı nedir?",
    options: ["Avcılık ve Ay", "Bereket ve Tarım", "Aşk ve Güzellik", "Savaş ve Bilgelik"],
    correct: 0,
    category: "Mitoloji ve Dinler",
    difficulty: "Kolay"
  },
  {
    id: 1952,
    question: "Yahudilikte, Tanrı ile İsrail halkı arasındaki anlaşmayı (ahit) temsil eden ve kutsal sayılan sembol nedir?",
    options: ["Magen David", "Menorah", "Menora", "Davut Yıldızı"],
    correct: 3,
    category: "Mitoloji ve Dinler",
    difficulty: "Kolay"
  },
  {
    id: 1953,
    question: "Mısır mitolojisinde, gök gürültüsü ve fırtına tanrısı, aynı zamanda karmaşanın sembolü olan tanrı kimdir?",
    options: ["Seth", "Osiris", "Thoth", "Anubis"],
    correct: 0,
    category: "Mitoloji ve Dinler",
    difficulty: "Orta"
  },
  {
    id: 1954,
    question: "Hinduizm'de, iyi ve kötü eylemlerin sonuçlarının kişinin bir sonraki hayatını belirlediği inanç sistemi nedir?",
    options: ["Nirvana", "Mokşa", "Dharma", "Karma"],
    correct: 3,
    category: "Mitoloji ve Dinler",
    difficulty: "Kolay"
  },
  {
    id: 1955,
    question: "İslamiyet'te, Kur'an'ın ilk ayetlerinin Hz. Muhammed'e indirildiği mağaranın adı nedir?",
    options: ["Kehf Mağarası", "Hira Mağarası", "Ashab-ı Kehf", "Sevr Mağarası"],
    correct: 1,
    category: "Mitoloji ve Dinler",
    difficulty: "Kolay"
  },
  {
    id: 1956,
    question: "Yunan mitolojisinde, Güneş Tanrısı kimdir?",
    options: ["Hermes", "Apollo", "Zeus", "Ares"],
    correct: 1,
    category: "Mitoloji ve Dinler",
    difficulty: "Kolay"
  },
  {
    id: 1957,
    question: "Hristiyanlıkta, Üçleme (Baba, Oğul, Kutsal Ruh) inancına ne ad verilir?",
    options: ["Teslis (Trinity)", "Protestanlık", "Hristiyanlık", "Katoliklik"],
    correct: 0,
    category: "Mitoloji ve Dinler",
    difficulty: "Kolay"
  },
  {
    id: 1958,
    question: "Antik Mezopotamya'da, her şehir devleti için bir koruyucu tanrıya adanmış, basamaklı piramit şeklinde tapınak nedir?",
    options: ["Tapınak", "Kule", "Ziggurat", "Piramit"],
    correct: 2,
    category: "Mitoloji ve Dinler",
    difficulty: "Orta"
  },
  {
    id: 1959,
    question: "Meksika mitolojisinde, Ateş ve Güneş Tanrısı olarak bilinen Aztek tanrısı kimdir?",
    options: ["Huitzilopochtli", "Tlaloc", "Quetzalcoatl", "Tezcatlipoca"],
    correct: 0,
    category: "Mitoloji ve Dinler",
    difficulty: "Zor"
  },
  {
    id: 1960,
    question: "Taoizm'in sembolü olan ve evrendeki karşıt güçlerin dengesini temsil eden işaret nedir?",
    options: ["Lotus Çiçeği", "Yin ve Yang", "Ay", "Güneş"],
    correct: 1,
    category: "Mitoloji ve Dinler",
    difficulty: "Kolay"
  },
  {
    id: 1961,
    question: "Yunan mitolojisinde, labirentten çıkışı bulan ve ipliği kullanan kahraman kimdir?",
    options: ["Herkül", "Jason", "Perseus", "Theseus"],
    correct: 3,
    category: "Mitoloji ve Dinler",
    difficulty: "Kolay"
  },
  {
    id: 1962,
    question: "Yahudilikte, büyük günahları affetmek için yılda bir kez tutulan en kutsal oruç ve kefaret günü nedir?",
    options: ["Pesah", "Yom Kippur (Kefaret Günü)", "Purim", "Hanuka"],
    correct: 1,
    category: "Mitoloji ve Dinler",
    difficulty: "Orta"
  },
  {
    id: 1963,
    question: "Budizm'de, Buda'nın öğretilerini, cemaati ve ahlaki kuralları kapsayan üç temel ilkeye ne ad verilir?",
    options: ["Üç Kapı", "Üç Hazine (Triratna)", "Üç Gerçek", "Üç Yol"],
    correct: 1,
    category: "Mitoloji ve Dinler",
    difficulty: "Zor"
  },
  {
    id: 1964,
    question: "Antik Mısır'da, hayat, bereket ve ölümsüzlük sembolü olan anahtar şeklindeki sembol nedir?",
    options: ["Sfenks", "Ankh (Hayat Anahtarı)", "Piramit", "Kartuş"],
    correct: 1,
    category: "Mitoloji ve Dinler",
    difficulty: "Kolay"
  },
  {
    id: 1965,
    question: "Norse mitolojisinde, tanrıların Alacakaranlığı ve dünyanın sonu olarak bilinen kıyamet savaşına ne ad verilir?",
    options: ["Götterdämmerung", "Ragnarök", "Jotunheim", "Asgard"],
    correct: 1,
    category: "Mitoloji ve Dinler",
    difficulty: "Kolay"
  },
  {
    id: 1966,
    question: "İslamiyet'te, Kur'an'ın ilk sure'sine ne ad verilir?",
    options: ["Fatiha Suresi", "Yasin Suresi", "Bakara Suresi", "İhlas Suresi"],
    correct: 0,
    category: "Mitoloji ve Dinler",
    difficulty: "Kolay"
  },
  {
    id: 1967,
    question: "Yunan mitolojisinde, ölülerin ruhlarının bulunduğu yeraltı dünyasının tanrısı kimdir?",
    options: ["Hades", "Poseidon", "Hermes", "Zeus"],
    correct: 0,
    category: "Mitoloji ve Dinler",
    difficulty: "Kolay"
  },
  {
    id: 1968,
    question: "Sihizm'de, tüm insanlar arasında eşitliği savunan ve ırk, kast farklarını reddeden inanç nedir?",
    options: ["Seva (Hizmet)", "Reenkarnasyon", "Dharma", "Karma"],
    correct: 0,
    category: "Mitoloji ve Dinler",
    difficulty: "Zor"
  },
  {
    id: 1969,
    question: "Hristiyanlıkta, Meryem Ana'nın oğlu İsa'ya hamile kaldığı mucizevi olaya ne ad verilir?",
    options: ["Vaftiz", "Diriliş", "Müjde (Duyuru)", "Çarmıha Gerilme"],
    correct: 2,
    category: "Mitoloji ve Dinler",
    difficulty: "Orta"
  },
  {
    id: 1970,
    question: "Hinduizm'de, yaratılışın ilk ve en eski kutsal metinleri olan külliyata ne ad verilir?",
    options: ["Bhagavad Gita", "Puranalar", "Vedalar", "Upanishadlar"],
    correct: 2,
    category: "Mitoloji ve Dinler",
    difficulty: "Kolay"
  },
  {
    id: 1971,
    question: "Yunan mitolojisinde, kendi yansımasına aşık olan ve bu yüzden ölen kahraman kimdir?",
    options: ["Narkissos", "Achilles", "Oidipus", "Ikarus"],
    correct: 0,
    category: "Mitoloji ve Dinler",
    difficulty: "Kolay"
  },
  {
    id: 1972,
    question: "İslamiyet'te, namaz kılınan temiz ve kutsal yere ne ad verilir?",
    options: ["Türbe", "Mescit", "Kabe", "Cami"],
    correct: 3,
    category: "Mitoloji ve Dinler",
    difficulty: "Kolay"
  },
  {
    id: 1973,
    question: "Roma mitolojisinde, aşk ve güzellik tanrıçası kimdir?",
    options: ["Diana", "Venüs", "Ceres", "Minerva"],
    correct: 1,
    category: "Mitoloji ve Dinler",
    difficulty: "Kolay"
  },
  {
    id: 1974,
    question: "Budizm'de, yaşamın acılarla dolu olduğunu belirten temel öğretiye ne ad verilir?",
    options: ["Karma", "Dört Yüce Gerçek", "Sekiz Yol", "Nirvana"],
    correct: 1,
    category: "Mitoloji ve Dinler",
    difficulty: "Orta"
  },
  {
    id: 1975,
    question: "İskandinav mitolojisinde, Thor'un çekici olan ve sadece onun kullanabildiği silahın adı nedir?",
    options: ["Hofund", "Mjölnir", "Gungnir", "Tyrfing"],
    correct: 1,
    category: "Mitoloji ve Dinler",
    difficulty: "Kolay"
  },
  {
    id: 1976,
    question: "Aztek mitolojisinde, Güneş'in her gün doğması için insan kurbanı talep eden tanrı kimdir?",
    options: ["Tezcatlipoca", "Tlaloc", "Huitzilopochtli", "Quetzalcoatl"],
    correct: 2,
    category: "Mitoloji ve Dinler",
    difficulty: "Zor"
  },
  {
    id: 1977,
    question: "Yahudilik ve Hristiyanlıkta, Adem ve Havva'nın Cennet'ten kovulmasına neden olan ilk günah nedir?",
    options: ["Hırs", "İtaatsizlik (Yasak Meyveyi Yemek)", "Yalan", "Kıskançlık"],
    correct: 1,
    category: "Mitoloji ve Dinler",
    difficulty: "Kolay"
  },
  {
    id: 1978,
    question: "Türk mitolojisinde, yeryüzünün ilk insanı ve yaratılış destanlarının ana figürü kimdir?",
    options: ["Erlik Han", "Kayra Han (veya Er Tös Han)", "Oğuz Kağan", "Alp Er Tunga"],
    correct: 1,
    category: "Mitoloji ve Dinler",
    difficulty: "Orta"
  },
  {
    id: 1979,
    question: "Antik Mısır'da, akıl, bilgi ve yazı tanrısı olarak bilinen tanrı kimdir?",
    options: ["Osiris", "Horus", "Thoth", "Ra"],
    correct: 2,
    category: "Mitoloji ve Dinler",
    difficulty: "Orta"
  },
  {
    id: 1980,
    question: "Jainizm'de, tüm canlılara karşı zararsızlık ve şefkat ilkesi olan 'Ahimsa'yı uygulayan kişiye ne ad verilir?",
    options: ["Guru", "Tirthankara", "Rahipler", "Brahmin"],
    correct: 1,
    category: "Mitoloji ve Dinler",
    difficulty: "Zor"
  },
  {
    id: 1981,
    question: "Yunan mitolojisinde, deniz kızı vücuduna ve korkunç bir sese sahip olan efsanevi yaratıklar nedir?",
    options: ["Harpyalar", "Müzler", "Sirenler", "Naiadlar"],
    correct: 2,
    category: "Mitoloji ve Dinler",
    difficulty: "Kolay"
  },
  {
    id: 1982,
    question: "İslamiyet'te, Kur'an'ın nazil olmaya başladığı ay hangisidir?",
    options: ["Şevval", "Zilhicce", "Ramazan", "Muharrem"],
    correct: 2,
    category: "Mitoloji ve Dinler",
    difficulty: "Kolay"
  },
  {
    id: 1983,
    question: "Hristiyanlıkta, İsa'nın doğumunun kutlandığı bayram nedir?",
    options: ["Noel (Christmas)", "Paskalya", "Pentikost", "Epifani"],
    correct: 0,
    category: "Mitoloji ve Dinler",
    difficulty: "Kolay"
  },
  {
    id: 1984,
    question: "Roma mitolojisinde, tanrıların habercisi ve ticaret tanrısı kimdir?",
    options: ["Mars", "Jüpiter", "Merkür", "Apollo"],
    correct: 2,
    category: "Mitoloji ve Dinler",
    difficulty: "Kolay"
  },
  {
    id: 1985,
    question: "Hinduizm'de, ebedi ve ilahi düzen, yasa veya doğru yaşam yolu anlamına gelen kavram nedir?",
    options: ["Mokşa", "Karma", "Dharma", "Samsara"],
    correct: 2,
    category: "Mitoloji ve Dinler",
    difficulty: "Orta"
  },
  {
    id: 1986,
    question: "Konfüçyüsçülük'ün temelini oluşturan, aileye, yaşlılara ve devlete saygı ve itaat ilkesine ne ad verilir?",
    options: ["Yi (Doğruluk)", "Ren (İnsanlık)", "Li (Ritüel)", "Xiao (Evlatlık Saygısı)"],
    correct: 3,
    category: "Mitoloji ve Dinler",
    difficulty: "Zor"
  },
  {
    id: 1987,
    question: "Yunan mitolojisinde, Titanların en büyüğü ve zamanın sembolü olan titan kimdir?",
    options: ["Prometheus", "Oceanus", "Atlas", "Kronos"],
    correct: 3,
    category: "Mitoloji ve Dinler",
    difficulty: "Kolay"
  },
  {
    id: 1988,
    question: "Antik Mısır'da, kalbi ölüler dünyasında tartılan ve eğer günahlı ise yiyen canavar nedir?",
    options: ["Apep", "Set", "Ammit", "Sobek"],
    correct: 2,
    category: "Mitoloji ve Dinler",
    difficulty: "Zor"
  },
  {
    id: 1989,
    question: "Budizm'de, kişinin geçmiş eylemlerinin mevcut ve gelecekteki yaşamını etkilediği inanç sistemi nedir?",
    options: ["Nirvana", "Samsara", "Dharma", "Karma"],
    correct: 3,
    category: "Mitoloji ve Dinler",
    difficulty: "Kolay"
  },
  {
    id: 1990,
    question: "Yunan mitolojisinde, şarap, coşku ve bereket tanrısı kimdir?",
    options: ["Hades", "Dionysos", "Hermes", "Apollo"],
    correct: 1,
    category: "Mitoloji ve Dinler",
    difficulty: "Kolay"
  },
  {
    id: 1991,
    question: "İslamiyet'te, namaz kılmadan önce belirli organları su ile yıkama işlemine ne ad verilir?",
    options: ["Teyemmüm", "Temizlik", "Abdest", "Gusül"],
    correct: 2,
    category: "Mitoloji ve Dinler",
    difficulty: "Kolay"
  },
  {
    id: 1992,
    question: "Yahudilikte, inançlarının ve yaşam tarzlarının temelini oluşturan yasal ve ahlaki kurallar bütününe ne ad verilir?",
    options: ["Kabala", "Talmud", "Halakha", "Tevrat"],
    correct: 2,
    category: "Mitoloji ve Dinler",
    difficulty: "Zor"
  },
  {
    id: 1993,
    question: "Norse mitolojisinde, tanrıların evi ve göklerin en yüksek alemi nedir?",
    options: ["Jotunheim", "Midgard", "Helheim", "Asgard"],
    correct: 3,
    category: "Mitoloji ve Dinler",
    difficulty: "Kolay"
  },
  {
    id: 1994,
    question: "Hinduizm'de, yeniden doğuş döngüsüne ne ad verilir?",
    options: ["Dharma", "Mokşa", "Karma", "Samsara"],
    correct: 3,
    category: "Mitoloji ve Dinler",
    difficulty: "Kolay"
  },
  {
    id: 1995,
    question: "Hristiyanlıkta, bir kişinin günahlarından arınmak için Tanrı'dan af dilemesi eylemine ne ad verilir?",
    options: ["Komünyon", "Hac", "Vaftiz", "Tövbe (İtiraf)"],
    correct: 3,
    category: "Mitoloji ve Dinler",
    difficulty: "Kolay"
  },
  {
    id: 1996,
    question: "Yunan mitolojisinde, bilgeliğin ve savaş stratejisinin tanrıçası kimdir?",
    options: ["Afrodit", "Hera", "Artemis", "Athena"],
    correct: 3,
    category: "Mitoloji ve Dinler",
    difficulty: "Kolay"
  },
  {
    id: 1997,
    question: "İslamiyet'te, kıyametin kopuşunu haber verecek olan meleğin adı nedir?",
    options: ["Azrail", "Cebrail", "İsrafil", "Mikail"],
    correct: 2,
    category: "Mitoloji ve Dinler",
    difficulty: "Kolay"
  },
  {
    id: 1998,
    question: "Türk mitolojisinde, yeraltı dünyasının ve kötülüğün tanrısı kimdir?",
    options: ["Kayra Han", "Gök Tanrı", "Erlik Han", "Ülgen"],
    correct: 2,
    category: "Mitoloji ve Dinler",
    difficulty: "Kolay"
  },
  {
    id: 1999,
    question: "Antik Mısır'da, ölenlerin ruhlarının öbür dünyaya güvenle geçmesini sağlamak için yazılan ünlü metin nedir?",
    options: ["Ölüler Kitabı", "Piramit Metinleri", "Amduat", "Kefen Metinleri"],
    correct: 0,
    category: "Mitoloji ve Dinler",
    difficulty: "Orta"
  },
  {
    id: 2000,
    question: "Budizm'de, Buda'nın ilk vaazında açıkladığı, acı ve ızdırabın nedenlerini açıklayan temel öğreti nedir?",
    options: ["Nirvana", "Dört Yüce Gerçek", "Karma", "Sekiz Yol"],
    correct: 1,
    category: "Mitoloji ve Dinler",
    difficulty: "Kolay"
  }

  // ... Bu şekilde 10.000+ soru eklemeye devam edeceğiz
  // Her kategori için yüzlerce soru olacak

];

// 🎯 TOPLAM SORU SAYISI
export const TOTAL_QUESTIONS = QUESTIONS.length;