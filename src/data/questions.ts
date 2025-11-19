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
    options: ["Asurlular ve Babilliler", "Mısırlılar ve Hititler", "Yunanlar ve Persler", "Sümerler ve Akadlar"],
    correct: 1,
    category: CATEGORIES.HISTORY.name,
    difficulty: "Kolay"
  },
  {
    id: 2,
    question: "Milattan önce 776 yılında ilk kez düzenlenen Antik Olimpiyat Oyunları hangi medeniyette ortaya çıkmıştır?",
    options: ["Roma", "Mısır", "Yunan", "Mezopotamya"],
    correct: 2,
    category: CATEGORIES.HISTORY.name,
    difficulty: "Kolay"
  },
  {
    id: 3,
    question: "Roma İmparatorluğu'nun ikiye ayrılmasından sonra Batı Roma İmparatorluğu kaç yılında yıkılmıştır?",
    options: ["395", "476", "1453", "1071"],
    correct: 1,
    category: CATEGORIES.HISTORY.name,
    difficulty: "Orta"
  },
  {
    id: 4,
    question: "İslam'ın yayılmasında büyük rol oynayan ve Mekke'den Medine'ye yapılan göç (Hicret) hangi yılda gerçekleşmiştir?",
    options: ["610", "622", "632", "661"],
    correct: 1,
    category: CATEGORIES.HISTORY.name,
    difficulty: "Kolay"
  },
  {
    id: 5,
    question: "Anadolu'da kurulan ve parayı (sikke) tarihte ilk kez kullanan uygarlık hangisidir?",
    options: ["Hititler", "Frigler", "Urartular", "Lidyalılar"],
    correct: 3,
    category: CATEGORIES.HISTORY.name,
    difficulty: "Kolay"
  },
  {
    id: 6,
    question: "1453 yılında İstanbul'u fethederek Bizans İmparatorluğu'na son veren Osmanlı padişahı kimdir?",
    options: ["Yavuz Sultan Selim", "Kanuni Sultan Süleyman", "Fatih Sultan Mehmet", "II. Beyazıt"],
    correct: 2,
    category: CATEGORIES.HISTORY.name,
    difficulty: "Kolay"
  },
  {
    id: 7,
    question: "Amerika kıtasını Avrupalılar adına keşfeden (kayıt altına alan) denizci kimdir?",
    options: ["Vasco da Gama", "Kristof Kolomb", "Ferdinand Macellan", "Amerigo Vespucci"],
    correct: 1,
    category: CATEGORIES.HISTORY.name,
    difficulty: "Kolay"
  },
  {
    id: 8,
    question: "1789'da gerçekleşen ve feodalizmi yıkarak cumhuriyet rejimine geçişi sağlayan büyük olay nedir?",
    options: ["İngiliz Devrimi", "Amerikan Bağımsızlık Savaşı", "Fransız İhtilali", "Rus Ekim Devrimi"],
    correct: 2,
    category: CATEGORIES.HISTORY.name,
    difficulty: "Kolay"
  },
  {
    id: 9,
    question: "1071 yılında gerçekleşen ve Anadolu'nun kapılarını Türklere açan savaş hangisidir?",
    options: ["Pasınlar Savaşı", "Dandanakan Savaşı", "Miryokefalon Savaşı", "Malazgirt Savaşı"],
    correct: 3,
    category: CATEGORIES.HISTORY.name,
    difficulty: "Kolay"
  },
  {
    id: 10,
    question: "I. Dünya Savaşı'nın başlangıç sebebi olan Saraybosna Suikastı'nda öldürülen kişi kimdir?",
    options: ["Kral V. George", "Arşidük Franz Ferdinand", "Kaiser II. Wilhelm", "Çar II. Nikolay"],
    correct: 1,
    category: CATEGORIES.HISTORY.name,
    difficulty: "Kolay"
  },
  {
    id: 11,
    question: "Türklerin kullandığı ve 12 hayvan adıyla anılan takvim hangisidir?",
    options: ["Celali Takvimi", "Rumi Takvim", "Hicri Takvim", "12 Hayvanlı Türk Takvimi"],
    correct: 3,
    category: CATEGORIES.HISTORY.name,
    difficulty: "Kolay"
  },
  {
    id: 12,
    question: "Türk tarihinin ilk düzenli ordusunu kuran ve 'Onlu Sistemi' bulan kişi kimdir?",
    options: ["Mete Han", "Teoman", "Attila", "Bumin Kağan"],
    correct: 0,
    category: CATEGORIES.HISTORY.name,
    difficulty: "Kolay"
  },
  {
    id: 13,
    question: "Orta Asya'da kurulan ve hükümdarı Bumin Kağan olan ilk Türk devleti hangisidir?",
    options: ["Hun İmparatorluğu", "Göktürk Kağanlığı", "Uygur Devleti", "Avar Kağanlığı"],
    correct: 1,
    category: CATEGORIES.HISTORY.name,
    difficulty: "Kolay"
  },
  {
    id: 14,
    question: "Tarihte ilk kez 'Kağıt Para'yı kullanan uygarlık hangisidir?",
    options: ["Lidyalılar", "Romalılar", "Çinliler", "Sümerler"],
    correct: 2,
    category: CATEGORIES.HISTORY.name,
    difficulty: "Orta"
  },
  {
    id: 15,
    question: "Hititlerin başkenti olan ve bugün Çorum sınırları içinde yer alan antik kent neresidir?",
    options: ["Gordion", "Hattuşaş", "Troya", "Efes"],
    correct: 1,
    category: CATEGORIES.HISTORY.name,
    difficulty: "Kolay"
  },
  {
    id: 16,
    question: "Moğol İmparatorluğu'nun kurucusu ve ilk Kağanı kimdir?",
    options: ["Kubilay Han", "Timur", "Cengiz Han", "Ogeday Han"],
    correct: 2,
    category: CATEGORIES.HISTORY.name,
    difficulty: "Kolay"
  },
  {
    id: 17,
    question: "Endülüs Emevi Devleti'nin başkenti olan ve Orta Çağ'da bilim ve kültür merkezi haline gelen şehir neresidir?",
    options: ["Granada", "Sevilla", "Kurtuba (Cordoba)", "Toledo"],
    correct: 2,
    category: CATEGORIES.HISTORY.name,
    difficulty: "Orta"
  },
  {
    id: 18,
    question: "1923 yılında ilan edilen Türkiye Cumhuriyeti'nin ilk Cumhurbaşkanı kimdir?",
    options: ["İsmet İnönü", "Fevzi Çakmak", "Mustafa Kemal Atatürk", "Celal Bayar"],
    correct: 2,
    category: CATEGORIES.HISTORY.name,
    difficulty: "Kolay"
  },
  {
    id: 19,
    question: "Rönesans'ın (Yeniden Doğuş) ilk olarak ortaya çıktığı ve sanat, bilim alanında büyük ilerlemelerin yaşandığı Avrupa ülkesi hangisidir?",
    options: ["İspanya", "İtalya", "Fransa", "İngiltere"],
    correct: 1,
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
    options: ["Çatalhöyük", "Göbeklitepe", "Efes", "Çatalhöyük"],
    correct: 2,
    category: CATEGORIES.HISTORY.name,
    difficulty: "Zor"
  },
  {
    id: 22,
    question: "Osmanlı Devleti'nde ilk anayasal düzen olan Kanun-i Esasi hangi yılda kabul edilmiştir?",
    options: ["1839", "1856", "1876", "1908"],
    correct: 2,
    category: CATEGORIES.HISTORY.name,
    difficulty: "Orta"
  },
  {
    id: 23,
    question: "II. Dünya Savaşı sırasında Almanya'nın başlattığı, İngiltere'ye yönelik hava saldırılarına verilen isim nedir?",
    options: ["Barbarossa Harekatı", "Yıldırım Savaşı (Blitzkrieg)", "Kartal Hücumu", "İngiltere Savaşı (Battle of Britain)"],
    correct: 3,
    category: CATEGORIES.HISTORY.name,
    difficulty: "Orta"
  },
  {
    id: 24,
    question: "Mezopotamya'da tarihin ilk yazılı kanunlarını hazırlayan Babil kralı kimdir?",
    options: ["Nabukadnezar", "Sargon", "Hammurabi", "Gılgamış"],
    correct: 2,
    category: CATEGORIES.HISTORY.name,
    difficulty: "Kolay"
  },
  {
    id: 25,
    question: "Çin Seddi hangi temel amaçla inşa edilmiştir?",
    options: ["Ticaret yollarını kontrol etmek", "Dini törenler için", "Kuzeyden gelen göçebe akınlarını (özellikle Hunları) engellemek", "Tarımsal sulama"],
    correct: 2,
    category: CATEGORIES.HISTORY.name,
    difficulty: "Kolay"
  },
  {
    id: 26,
    question: "Kurtuluş Savaşı sırasında gerçekleşen ve Mustafa Kemal Atatürk'ün 'Hattı müdafaa yoktur, sathı müdafaa vardır. O satıh bütün vatandır.' sözünü söylediği savaş hangisidir?",
    options: ["I. İnönü Savaşı", "II. İnönü Savaşı", "Sakarya Meydan Muharebesi", "Büyük Taarruz"],
    correct: 2,
    category: CATEGORIES.HISTORY.name,
    difficulty: "Kolay"
  },
  {
    id: 27,
    question: "Magna Carta Libertatum (Büyük Özgürlük Sözleşmesi) hangi yılda ve hangi ülkede imzalanmıştır?",
    options: ["1215 - İngiltere", "1492 - İspanya", "1776 - Amerika", "1789 - Fransa"],
    correct: 0,
    category: CATEGORIES.HISTORY.name,
    difficulty: "Orta"
  },
  {
    id: 28,
    question: "Osmanlı Devleti'nin kuruluş döneminde ilk Haçlı seferine karşı mücadele eden padişah kimdir?",
    options: ["Osman Gazi", "Orhan Gazi", "I. Murad", "I. Beyazıt (Yıldırım)"],
    correct: 3,
    category: CATEGORIES.HISTORY.name,
    difficulty: "Zor"
  },
  {
    id: 29,
    question: "Antik Mısır'da krallara verilen unvan nedir?",
    options: ["Sultan", "Kayser", "Firavun", "Şah"],
    correct: 2,
    category: CATEGORIES.HISTORY.name,
    difficulty: "Kolay"
  },
  {
    id: 30,
    question: "Sovyetler Birliği'nin 1991'de dağılmasından sonra bağımsızlığını kazanan ülkeler arasında aşağıdakilerden hangisi yoktur?",
    options: ["Ukrayna", "Litvanya", "Polonya", "Kazakistan"],
    correct: 2,
    category: CATEGORIES.HISTORY.name,
    difficulty: "Kolay"
  },
  {
    id: 31,
    question: "Türklerin Anadolu'yu yurt edinme sürecini tamamlayan ve Bizans'ın Anadolu'daki Türk varlığını kabul etmek zorunda kaldığı savaş hangisidir?",
    options: ["Malazgirt Savaşı", "Dandanakan Savaşı", "Miryokefalon Savaşı", "Kösedağ Savaşı"],
    correct: 2,
    category: CATEGORIES.HISTORY.name,
    difficulty: "Orta"
  },
  {
    id: 32,
    question: "Tarihte bilinen ilk imparatorluğu kuran Mezopotamya uygarlığı hangisidir?",
    options: ["Sümerler", "Asurlular", "Akadlar", "Babilliler"],
    correct: 2,
    category: CATEGORIES.HISTORY.name,
    difficulty: "Zor"
  },
  {
    id: 33,
    question: "Fransız İhtilali'nin yaydığı en önemli fikirlerden biri aşağıdakilerden hangisidir?",
    options: ["Teokrasi", "Monarşi", "Milliyetçilik", "Feodalizm"],
    correct: 2,
    category: CATEGORIES.HISTORY.name,
    difficulty: "Kolay"
  },
  {
    id: 34,
    question: "Osmanlı Devleti'nin ilk başkenti neresidir?",
    options: ["Söğüt", "Bursa", "Edirne", "İstanbul"],
    correct: 1,
    category: CATEGORIES.HISTORY.name,
    difficulty: "Kolay"
  },
  {
    id: 35,
    question: "1517'de Yavuz Sultan Selim'in Mısır'ı fethederek halifeliği Osmanlı'ya geçirdiği savaş hangisidir?",
    options: ["Çaldıran Savaşı", "Mercidabık Savaşı", "Ridaniye Savaşı", "Preveze Deniz Savaşı"],
    correct: 2,
    category: CATEGORIES.HISTORY.name,
    difficulty: "Orta"
  },
  {
    id: 36,
    question: "Sanayi Devrimi ilk olarak hangi sektörde başlamıştır?",
    options: ["Otomotiv", "Tekstil", "Demir-Çelik", "Kimya"],
    correct: 1,
    category: CATEGORIES.HISTORY.name,
    difficulty: "Kolay"
  },
  {
    id: 37,
    question: "II. Dünya Savaşı'nın en önemli dönüm noktalarından biri olan ve Alman ilerlemesinin durdurulduğu şehir savunması nedir?",
    options: ["Moskova Savaşı", "Leningrad Kuşatması", "Stalingrad Savaşı", "Kursk Muharebesi"],
    correct: 2,
    category: CATEGORIES.HISTORY.name,
    difficulty: "Kolay"
  },
  {
    id: 38,
    question: "Türkiye Cumhuriyeti'nin siyasi rejimini ve devlet şeklini belirleyen, 29 Ekim 1923'te kabul edilen gelişme nedir?",
    options: ["Saltanatın Kaldırılması", "Cumhuriyetin İlanı", "Halifeliğin Kaldırılması", "Teşkilat-ı Esasiye'nin Kabulü"],
    correct: 1,
    category: CATEGORIES.HISTORY.name,
    difficulty: "Kolay"
  },
  {
    id: 39,
    question: "Anadolu'da kurulan ve tarım, hayvancılıkla uğraşan, başkenti Gordion olan uygarlık hangisidir?",
    options: ["Urartular", "Hititler", "Frigler", "İyonlar"],
    correct: 2,
    category: CATEGORIES.HISTORY.name,
    difficulty: "Kolay"
  },
  {
    id: 40,
    question: "Soğuk Savaş döneminde, SSCB ve müttefiklerinin kurduğu askeri ittifakın adı nedir?",
    options: ["NATO", "SEATO", "Varşova Paktı", "CENTO"],
    correct: 2,
    category: CATEGORIES.HISTORY.name,
    difficulty: "Kolay"
  },
  {
    id: 41,
    question: "Avrupa'nın ilk üniversitelerinin (örneğin Bologna, Oxford) kurulduğu dönem hangi çağa denk gelir?",
    options: ["İlk Çağ", "Orta Çağ", "Yeni Çağ", "Yakın Çağ"],
    correct: 1,
    category: CATEGORIES.HISTORY.name,
    difficulty: "Orta"
  },
  {
    id: 42,
    question: "Büyük İskender'in Pers İmparatorluğu'nu yenerek kurduğu büyük imparatorluğun kültürel sentezi için kullanılan terim nedir?",
    options: ["Roma Kültürü", "Helenizm", "Akdeniz Kültürü", "Mısır Uygarlığı"],
    correct: 1,
    category: CATEGORIES.HISTORY.name,
    difficulty: "Orta"
  },
  {
    id: 43,
    question: "Türk tarihinde ilk kez yerleşik yaşama geçen ve matbaayı kullanan Türk topluluğu hangisidir?",
    options: ["Göktürkler", "Uygurlar", "Hunlar", "Karluklar"],
    correct: 1,
    category: CATEGORIES.HISTORY.name,
    difficulty: "Kolay"
  },
  {
    id: 44,
    question: "1921'de kabul edilen ve Türk Devleti'nin ilk anayasası olan metin nedir?",
    options: ["Kanun-i Esasi", "Teşkilat-ı Esasiye Kanunu", "1924 Anayasası", "Medeni Kanun"],
    correct: 1,
    category: CATEGORIES.HISTORY.name,
    difficulty: "Kolay"
  },
  {
    id: 45,
    question: "Dünya'nın yedi harikasından biri olan İskenderiye Feneri hangi medeniyet döneminde inşa edilmiştir?",
    options: ["Roma", "Yunan (Helenistik Dönem)", "Mısır (Firavunlar Dönemi)", "Babil"],
    correct: 1,
    category: CATEGORIES.HISTORY.name,
    difficulty: "Zor"
  },
  {
    id: 46,
    question: "Osmanlı Devleti'nde Tanzimat Fermanı hangi padişah döneminde ilan edilmiştir?",
    options: ["II. Mahmut", "Abdülmecid", "Abdülaziz", "II. Abdülhamid"],
    correct: 1,
    category: CATEGORIES.HISTORY.name,
    difficulty: "Orta"
  },
  {
    id: 47,
    question: "Kutsal Roma İmparatorluğu'nun (Roma İmparatorluğu ile karıştırılmamalı) kurucusu ve Batı Avrupa'nın büyük bölümünü birleştiren kişi kimdir?",
    options: ["Jül Sezar", "Büyük Konstantin", "Şarlman (Charlemagne)", "Attila"],
    correct: 2,
    category: CATEGORIES.HISTORY.name,
    difficulty: "Zor"
  },
  {
    id: 48,
    question: "Rusya'da Çarlık rejimini yıkan ve Sovyetler Birliği'nin kurulmasına yol açan 1917 devrimi nedir?",
    options: ["Menşevik Devrimi", "Ekim Devrimi (Bolşevik Devrimi)", "Nisan Devrimi", "Şubat Devrimi"],
    correct: 1,
    category: CATEGORIES.HISTORY.name,
    difficulty: "Kolay"
  },
  {
    id: 49,
    question: "Tarihte ilk kez İstanbul'u kuşatan Türk devleti/topluluğu hangisidir?",
    options: ["Hunlar", "Avarlar", "Selçuklular", "Osmanlılar"],
    correct: 1,
    category: CATEGORIES.HISTORY.name,
    difficulty: "Zor"
  },
  {
    id: 50,
    question: "II. Dünya Savaşı'nın Pasifik cephesini bitiren, Japonya'ya atılan atom bombalarının atıldığı şehirler hangileridir?",
    options: ["Tokyo ve Osaka", "Hiroşima ve Nagazaki", "Kyoto ve Yokohama", "Nagoya ve Kobe"],
    correct: 1,
    category: CATEGORIES.HISTORY.name,
    difficulty: "Kolay"
  },
  {
    id: 51,
    question: "Türklerin İslamiyet'i kabul etmesinde dönüm noktası kabul edilen ve Çinlilerle yapılan savaş hangisidir?",
    options: ["Talas Savaşı", "Dandanakan Savaşı", "Malazgirt Savaşı", "Pasınlar Savaşı"],
    correct: 0,
    category: CATEGORIES.HISTORY.name,
    difficulty: "Kolay"
  },
  {
    id: 52,
    question: "Osmanlı Devleti'nin kuruluş sürecinde, Haçlılarla yapılan ve Osmanlı'nın Balkanlardaki ilerleyişini pekiştiren büyük savaş hangisidir?",
    options: ["Sırpsındığı Savaşı", "I. Kosova Savaşı", "Varna Savaşı", "Niğbolu Savaşı"],
    correct: 1,
    category: CATEGORIES.HISTORY.name,
    difficulty: "Orta"
  },
  {
    id: 53,
    question: "Fizikçi Albert Einstein'ın 'İzafiyet Teorisi'ni (Görelilik) yayımladığı ve modern fiziğin temellerini attığı yıl hangi döneme denk gelir?",
    options: ["Orta Çağ", "Aydınlanma Çağı", "Sanayi Devrimi", "Yakın Çağ (20. Yüzyıl Başları)"],
    correct: 3,
    category: CATEGORIES.HISTORY.name,
    difficulty: "Kolay"
  },
  {
    id: 54,
    question: "Makedonya Kralı II. Philip'in oğlu olan ve büyük bir imparatorluk kuran komutan kimdir?",
    options: ["Büyük Konstantin", "Jül Sezar", "Büyük İskender", "Hannibal"],
    correct: 2,
    category: CATEGORIES.HISTORY.name,
    difficulty: "Kolay"
  },
  {
    id: 55,
    question: "Anadolu Selçuklu Devleti'nin yıkılış sürecine girmesine neden olan Moğol İlhanlılarla yapılan savaş hangisidir?",
    options: ["Dandanakan Savaşı", "Malazgirt Savaşı", "Kösedağ Savaşı", "Miryokefalon Savaşı"],
    correct: 2,
    category: CATEGORIES.HISTORY.name,
    difficulty: "Kolay"
  },
  {
    id: 56,
    question: "1648 yılında imzalanan ve 30 Yıl Savaşları'nı sona erdirerek modern ulus devlet sisteminin temellerini atan antlaşma nedir?",
    options: ["Vestfalya Barışı", "Augsburg Barışı", "Utrecht Antlaşması", "Paris Antlaşması"],
    correct: 0,
    category: CATEGORIES.HISTORY.name,
    difficulty: "Zor"
  },
  {
    id: 57,
    question: "Türkiye Cumhuriyeti'nin kurulmasından sonra, 3 Mart 1924'te kaldırılan kurum hangisidir?",
    options: ["Saltanat", "Halifelik", "Şeyhülislamlık", "Harbiye Nezareti"],
    correct: 1,
    category: CATEGORIES.HISTORY.name,
    difficulty: "Kolay"
  },
  {
    id: 58,
    question: "Antik Yunan filozofu Sokrates'in öğrencisi olan ve 'Devlet' (Politeia) adlı eseriyle bilinen düşünür kimdir?",
    options: ["Aristoteles", "Platon", "Herakleitos", "Tales"],
    correct: 1,
    category: CATEGORIES.HISTORY.name,
    difficulty: "Kolay"
  },
  {
    id: 59,
    question: "Osmanlı Devleti'nde Fatih Sultan Mehmet döneminde çıkarılan ve padişahın kardeş katlini yasal hale getiren kanunname nedir?",
    options: ["Tanzimat Fermanı", "Kanun-i Kadim", "Kanunname-i Ali Osman", "Sened-i İttifak"],
    correct: 2,
    category: CATEGORIES.HISTORY.name,
    difficulty: "Orta"
  },
  {
    id: 60,
    question: "Sina Yarımadası'nda, Mısır ile İsrail arasında, 1978'de ABD'nin arabuluculuğu ile imzalanan ve Arap-İsrail çatışmasında bir dönüm noktası olan antlaşma nedir?",
    options: ["Oslo Anlaşmaları", "Camp David Sözleşmeleri", "Madrid Konferansı", "Tanca Görüşmeleri"],
    correct: 1,
    category: CATEGORIES.HISTORY.name,
    difficulty: "Zor"
  },
  {
    id: 61,
    question: "Eski Türk devletlerinde devlet işlerinin görüşüldüğü, Kağan'ın başkanlık ettiği meclis/toplantı nedir?",
    options: ["Kurultay", "Divan-ı Hümayun", "Töre", "İkili Teşkilat"],
    correct: 0,
    category: CATEGORIES.HISTORY.name,
    difficulty: "Kolay"
  },
  {
    id: 62,
    question: "1948 yılında kurulmasına karar verilen ve Arap-İsrail savaşlarına neden olan devlet hangisidir?",
    options: ["Lübnan", "Ürdün", "İsrail", "Suriye"],
    correct: 2,
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
    options: ["Malta Kuşatması", "Viyana İkinci Kuşatması", "Zigetvar Kuşatması", "Estergon Kuşatması"],
    correct: 1,
    category: CATEGORIES.HISTORY.name,
    difficulty: "Kolay"
  },
  {
    id: 65,
    question: "Antik Roma'da halkın sorunlarını dile getiren ve soylulara karşı haklarını koruyan görevliye ne ad verilirdi?",
    options: ["Konsül", "Sezar", "Tiran", "Halk Tribünü"],
    correct: 3,
    category: CATEGORIES.HISTORY.name,
    difficulty: "Zor"
  },
  {
    id: 66,
    question: "Osmanlı Devleti'nde, 1908'de II. Abdülhamid'in baskıcı yönetimine karşı yapılan ve ikinci kez meşrutiyetin ilan edildiği hareket nedir?",
    options: ["Bab-ı Ali Baskını", "31 Mart Olayı", "Meşrutiyet'in İlanı (II. Meşrutiyet)", "Tanzimat Fermanı"],
    correct: 2,
    category: CATEGORIES.HISTORY.name,
    difficulty: "Orta"
  },
  {
    id: 67,
    question: "İngiliz sömürgelerinden bağımsızlığını kazanarak modern Hindistan'ın kurulmasına önderlik eden kişi kimdir?",
    options: ["Cevahirlal Nehru", "Muhammed Ali Cinnah", "Mahatma Gandhi", "Indira Gandhi"],
    correct: 2,
    category: CATEGORIES.HISTORY.name,
    difficulty: "Kolay"
  },
  {
    id: 68,
    question: "1929'da ABD'de başlayan ve tüm dünyayı etkisi altına alan büyük ekonomik krizin adı nedir?",
    options: ["Petrol Krizi", "Kara Perşembe", "Büyük Buhran", "Asya Kaplanları Krizi"],
    correct: 2,
    category: CATEGORIES.HISTORY.name,
    difficulty: "Kolay"
  },
  {
    id: 69,
    question: "Türk Kurtuluş Savaşı'nı sona erdiren ve Türkiye Cumhuriyeti'nin bağımsızlığını tescilleyen uluslararası antlaşma nedir?",
    options: ["Sevr Antlaşması", "Mondros Ateşkesi", "Lozan Barış Antlaşması", "Ankara Antlaşması"],
    correct: 2,
    category: CATEGORIES.HISTORY.name,
    difficulty: "Kolay"
  },
  {
    id: 70,
    question: "Afrika'nın güney ucuna (Ümit Burnu) ulaşan ilk Portekizli denizci kimdir?",
    options: ["Vasco da Gama", "Kristof Kolomb", "Bartolomeu Dias", "Ferdinand Macellan"],
    correct: 2,
    category: CATEGORIES.HISTORY.name,
    difficulty: "Zor"
  },
  {
    id: 71,
    question: "Birinci Köktürk Devleti'nin kurucuları olan kardeşler kimlerdir?",
    options: ["Mete ve Teoman", "Bumin ve İstemi", "Kül Tigin ve Bilge Kağan", "Mukan ve Taşpar"],
    correct: 1,
    category: CATEGORIES.HISTORY.name,
    difficulty: "Orta"
  },
  {
    id: 72,
    question: "Orta Çağ'da Avrupa'da Kilise'nin otoritesine karşı çıkan, matbaayı kullanarak İncil'i halk diline çeviren ve Reform hareketini başlatan kişi kimdir?",
    options: ["Erasmus", "Galileo Galilei", "Martin Luther", "Jean Calvin"],
    correct: 2,
    category: CATEGORIES.HISTORY.name,
    difficulty: "Kolay"
  },
  {
    id: 73,
    question: "Türk-İslam mimarisinin en önemli eserlerinden biri olan Selimiye Camii hangi mimara aittir?",
    options: ["Mimar Hayreddin", "Mimar Sinan", "Mimar Kemaleddin", "Mimar Davut Ağa"],
    correct: 1,
    category: CATEGORIES.HISTORY.name,
    difficulty: "Kolay"
  },
  {
    id: 74,
    question: "Osmanlı Devleti'nin 'Lale Devri' olarak adlandırılan dönemi hangi iki padişah arasında yaşanmıştır?",
    options: ["II. Osman - IV. Murad", "III. Ahmet - I. Mahmud", "III. Selim - II. Mahmud", "I. Abdülmecid - I. Abdülaziz"],
    correct: 1,
    category: CATEGORIES.HISTORY.name,
    difficulty: "Orta"
  },
  {
    id: 75,
    question: "II. Dünya Savaşı sırasında müttefiklerin Avrupa'da ikinci bir cephe açmak amacıyla, Fransa'nın Normandiya kıyılarına yaptıkları büyük çıkarma harekatının adı nedir?",
    options: ["Market Garden Harekatı", "Husky Harekatı", "Overlord Harekatı (D-Day)", "Torch Harekatı"],
    correct: 2,
    category: CATEGORIES.HISTORY.name,
    difficulty: "Kolay"
  },
  {
    id: 76,
    question: "Antik Yunan'da tarih yazıcılığının kurucusu olarak bilinen ve 'Tarih' adlı eseriyle ünlenen kişi kimdir?",
    options: ["Thukydides", "Herodotos", "Plutarkhos", "Homeros"],
    correct: 1,
    category: CATEGORIES.HISTORY.name,
    difficulty: "Orta"
  },
  {
    id: 77,
    question: "1299'da kurulan Osmanlı Beyliği, hangi devletin zayıflamasıyla ortaya çıkan beyliklerdendir?",
    options: ["Büyük Selçuklu Devleti", "Anadolu Selçuklu Devleti", "Memlük Devleti", "Bizans İmparatorluğu"],
    correct: 1,
    category: CATEGORIES.HISTORY.name,
    difficulty: "Kolay"
  },
  {
    id: 78,
    question: "Soğuk Savaş'ın başlangıcı sayılan, ABD'nin komünizm tehlikesi altındaki ülkelere ekonomik ve askeri yardım yapmayı taahhüt ettiği doktrin nedir?",
    options: ["Marshall Planı", "Truman Doktrini", "Eisenhower Doktrini", "Monroe Doktrini"],
    correct: 1,
    category: CATEGORIES.HISTORY.name,
    difficulty: "Orta"
  },
  {
    id: 79,
    question: "Türklerin tarihte ilk kez yerleşik düzene geçmesiyle ortaya çıkan en önemli sanat eserleri hangi Uygur eserleridir?",
    options: ["Orhun Yazıtları", "Balbal heykelleri", "Fresk (duvar resmi) ve minyatürler", "Yazılı kanunlar"],
    correct: 2,
    category: CATEGORIES.HISTORY.name,
    difficulty: "Orta"
  },
  {
    id: 80,
    question: "Osmanlı Devleti'nde Kapıkulu Ocağı'nın en önemli askeri birliği olan ve padişahın daimi ordusunu oluşturan sınıf hangisidir?",
    options: ["Tımarlı Sipahiler", "Akıncılar", "Yeniçeriler", "Azaplar"],
    correct: 2,
    category: CATEGORIES.HISTORY.name,
    difficulty: "Kolay"
  },
  {
    id: 81,
    question: "Milli Mücadele'de, TBMM Hükümeti'nin uluslararası alanda ilk siyasi başarısı kabul edilen antlaşma hangisidir?",
    options: ["Moskova Antlaşması", "Gümrü Antlaşması", "Kars Antlaşması", "Ankara Antlaşması (Fransa ile)"],
    correct: 1,
    category: CATEGORIES.HISTORY.name,
    difficulty: "Orta"
  },
  {
    id: 82,
    question: "Orta Çağ'da Batı Avrupa'da toprağa bağlı köylülerin çalıştığı ekonomik ve siyasi sistem nedir?",
    options: ["Kapitalizm", "Sosyalizm", "Feodalizm", "Merkantilizm"],
    correct: 2,
    category: CATEGORIES.HISTORY.name,
    difficulty: "Kolay"
  },
  {
    id: 83,
    question: "Rönesans döneminde, 'Son Yargı' ve 'Adem'in Yaratılışı' gibi eserleriyle Sistine Şapeli'nin tavanını resimleyen sanatçı kimdir?",
    options: ["Leonardo da Vinci", "Raffaello", "Tiziano", "Michelangelo"],
    correct: 3,
    category: CATEGORIES.HISTORY.name,
    difficulty: "Kolay"
  },
  {
    id: 84,
    question: "Jül Sezar'ın MÖ 44'te öldürüldüğü şehir hangisidir?",
    options: ["İskenderiye", "Pompei", "Roma", "Kartaca"],
    correct: 2,
    category: CATEGORIES.HISTORY.name,
    difficulty: "Kolay"
  },
  {
    id: 85,
    question: "Osmanlı Devleti'nde Divan-ı Hümayun'da alınan kararları yazıp saklayan ve nişancıya yardımcı olan görevli kimdir?",
    options: ["Vezir-i Azam", "Defterdar", "Reisülküttap", "Kazasker"],
    correct: 2,
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
    options: ["Perikles", "Darius", "Büyük İskender", "Heredot"],
    correct: 2,
    category: CATEGORIES.HISTORY.name,
    difficulty: "Kolay"
  },
  {
    id: 88,
    question: "İlk Türk devletlerinde hükümdarlık yetkisinin Gök Tanrı tarafından verildiği inancına ne ad verilir?",
    options: ["Urug", "Kut", "Töre", "Balbal"],
    correct: 1,
    category: CATEGORIES.HISTORY.name,
    difficulty: "Orta"
  },
  {
    id: 89,
    question: "Osmanlı'nın duraklama döneminde (17. yy.) IV. Murat döneminde sosyal düzeni sağlamak için hazırlanan raporla bilinen bilim insanı ve devlet adamı kimdir?",
    options: ["Katip Çelebi", "Naima", "Koçi Bey", "Evliya Çelebi"],
    correct: 2,
    category: CATEGORIES.HISTORY.name,
    difficulty: "Zor"
  },
  {
    id: 90,
    question: "1949'da Çin'de gerçekleşen devrimle iktidara gelen, Mao Zedong liderliğindeki rejim nedir?",
    options: ["Cumhuriyetçi Hükümet", "Milliyetçi Hükümet", "Komünist Yönetim", "Monarşi"],
    correct: 2,
    category: CATEGORIES.HISTORY.name,
    difficulty: "Kolay"
  },
  {
    id: 91,
    question: "Mimar Sinan'ın 'kalfalık eserim' dediği, İstanbul'daki cami hangisidir?",
    options: ["Süleymaniye Camii", "Şehzade Camii", "Mihrimah Sultan Camii", "Atik Valide Camii"],
    correct: 0,
    category: CATEGORIES.HISTORY.name,
    difficulty: "Kolay"
  },
  {
    id: 92,
    question: "Türkiye Cumhuriyeti'nin ilk çok partili seçimi hangi yılda yapılmıştır?",
    options: ["1923", "1930", "1946", "1950"],
    correct: 2,
    category: CATEGORIES.HISTORY.name,
    difficulty: "Orta"
  },
  {
    id: 93,
    question: "Antik Mısır'da yazı sistemi olarak kullanılan resim ve sembollerden oluşan yazı türü nedir?",
    options: ["Çivi Yazısı", "Piktogram", "Hiyeroglif", "Fenike Alfabesi"],
    correct: 2,
    category: CATEGORIES.HISTORY.name,
    difficulty: "Kolay"
  },
  {
    id: 94,
    question: "Orta Çağ'da, Hristiyanların Kudüs'ü Müslümanlardan geri almak için düzenlediği seferlere verilen ad nedir?",
    options: ["Bizans Seferleri", "Reform Hareketleri", "Haçlı Seferleri", "Rönesans"],
    correct: 2,
    category: CATEGORIES.HISTORY.name,
    difficulty: "Kolay"
  },
  {
    id: 95,
    question: "II. Dünya Savaşı'nın hemen ardından, Batı Avrupa'nın ekonomik olarak yeniden inşa edilmesi için ABD tarafından başlatılan yardım programı nedir?",
    options: ["Truman Doktrini", "Monroe Doktrini", "Marshall Planı", "Comecon"],
    correct: 2,
    category: CATEGORIES.HISTORY.name,
    difficulty: "Kolay"
  },
  {
    id: 96,
    question: "Ankara Antlaşması (1921) ile hangi ülke Güney Cephesi'nden çekilmiş ve Hatay'a özerklik verilmiştir?",
    options: ["İtalya", "Yunanistan", "İngiltere", "Fransa"],
    correct: 3,
    category: CATEGORIES.HISTORY.name,
    difficulty: "Kolay"
  },
  {
    id: 97,
    question: "Antik Yunan'da filozofları, sanatçıları ve bilim insanlarını koruyup destekleyen şehir devleti hangisidir?",
    options: ["Sparta", "Atina", "Korint", "Teb"],
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
    options: ["Töre", "Bengü Taş", "Yazı", "Vakayiname (Kronik)"],
    correct: 3,
    category: CATEGORIES.HISTORY.name,
    difficulty: "Zor"
  },
  {
    id: 101,
    question: "Büyük Selçuklu Devleti'nin kurucusu ve ilk sultanı kimdir?",
    options: ["Alp Arslan", "Melikşah", "Tuğrul Bey", "Sultan Sencer"],
    correct: 2,
    category: "Tarih",
    difficulty: "Kolay"
  },
  {
    id: 102,
    question: "Antik Yunan'da, Sparta'ya karşı Peloponez Savaşları'nı kaybeden şehir devleti hangisidir?",
    options: ["Korint", "Teb", "Atina", "Makedonya"],
    correct: 2,
    category: "Tarih",
    difficulty: "Orta"
  },
  {
    id: 103,
    question: "Osmanlı Devleti'nin ilk deniz zaferi olarak kabul edilen, Venediklilerle yapılan savaş hangisidir?",
    options: ["Preveze Deniz Savaşı", "İnebahtı Deniz Savaşı", "Çalıbey Savaşı", "Cerbe Deniz Savaşı"],
    correct: 2,
    category: "Tarih",
    difficulty: "Zor"
  },
  {
    id: 104,
    question: "Mezopotamya'da, tarihte ilk kez bilinen kütüphaneyi kuran Asur kralı kimdir?",
    options: ["Hammurabi", "Sargon", "Nabukadnezar", "Asurbanipal"],
    correct: 3,
    category: "Tarih",
    difficulty: "Zor"
  },
  {
    id: 105,
    question: "Hz. Muhammed'in vefatından sonra Dört Halife Dönemi'nin ilk halifesi kimdir?",
    options: ["Hz. Ömer", "Hz. Ali", "Hz. Ebu Bekir", "Hz. Osman"],
    correct: 2,
    category: "Tarih",
    difficulty: "Kolay"
  },
  {
    id: 106,
    question: "İngiltere'de meşrutiyetin temellerini atan ve kralın yetkilerini kısıtlayan 'Haklar Bildirisi' (Bill of Rights) hangi yılda kabul edilmiştir?",
    options: ["1215", "1689", "1776", "1789"],
    correct: 1,
    category: "Tarih",
    difficulty: "Orta"
  },
  {
    id: 107,
    question: "Fatih Sultan Mehmet döneminde, Karadeniz'in Türk gölü haline gelmesinde önemli rol oynayan fetih hangisidir?",
    options: ["Belgrad", "Mora", "Kırım", "Otranto"],
    correct: 2,
    category: "Tarih",
    difficulty: "Orta"
  },
  {
    id: 108,
    question: "Tarihin sıfır noktası kabul edilen ve Neolitik döneme ait kalıntıları barındıran, Şanlıurfa'daki yapı neresidir?",
    options: ["Çatalhöyük", "Göbeklitepe", "Hattuşaş", "Troya"],
    correct: 1,
    category: "Tarih",
    difficulty: "Kolay"
  },
  {
    id: 109,
    question: "Osmanlı Devleti'nin dağılma döneminde (19. yy.) Mısır'da isyan ederek Osmanlı'yı zor durumda bırakan vali kimdir?",
    options: ["Cezzar Ahmet Paşa", "Kavalalı Mehmet Ali Paşa", "Tepedelenli Ali Paşa", "Ali Paşa"],
    correct: 1,
    category: "Tarih",
    difficulty: "Orta"
  },
  {
    id: 110,
    question: "II. Dünya Savaşı sırasında, Almanya'nın Sovyetler Birliği'ni işgal etmek için başlattığı operasyonun kod adı nedir?",
    options: ["Deniz Aslanı Harekatı", "Barbarossa Harekatı", "Savaş Baltası Harekatı", "Sarı Plan"],
    correct: 1,
    category: "Tarih",
    difficulty: "Kolay"
  },
  {
    id: 111,
    question: "Büyük Hun İmparatorluğu'nun en parlak dönemini yaşatan ve Çin'i vergiye bağlayan hükümdar kimdir?",
    options: ["Teoman", "Ki-ok", "Mete Han", "Attila"],
    correct: 2,
    category: "Tarih",
    difficulty: "Kolay"
  },
  {
    id: 112,
    question: "Orta Çağ'da Avrupa'da, papalık tarafından Kilise'ye karşı gelenlerin (sapkınların) yargılandığı kurum nedir?",
    options: ["Konsül", "Engizisyon", "Feodal Meclis", "Senato"],
    correct: 1,
    category: "Tarih",
    difficulty: "Orta"
  },
  {
    id: 113,
    question: "1774'te imzalanan ve Osmanlı Devleti'nin Kırım'ı kaybetme yolunda attığı ilk adım olan antlaşma nedir?",
    options: ["Yaş Antlaşması", "Belgrad Antlaşması", "Küçük Kaynarca Antlaşması", "Prut Antlaşması"],
    correct: 2,
    category: "Tarih",
    difficulty: "Orta"
  },
  {
    id: 114,
    question: "Tarihte ilk kez 'Alfabeyi' bulan ve deniz ticaretiyle yayan Akdeniz medeniyeti hangisidir?",
    options: ["Yunanlar", "Romalılar", "Fenikeliler", "İbraniler"],
    correct: 2,
    category: "Tarih",
    difficulty: "Kolay"
  },
  {
    id: 115,
    question: "Anadolu Selçuklu Devleti'nin kurucusu ve ilk sultanı kimdir?",
    options: ["Kutalmışoğlu Süleyman Şah", "I. Mesud", "I. Kılıç Arslan", "II. Kılıç Arslan"],
    correct: 0,
    category: "Tarih",
    difficulty: "Kolay"
  },
  {
    id: 116,
    question: "Osmanlı Devleti'nde ilk kez matbaanın kullanılmasını teşvik eden ve bu döneme adını veren sadrazam kimdir?",
    options: ["Nevşehirli Damat İbrahim Paşa", "Köprülü Mehmet Paşa", "Merzifonlu Kara Mustafa Paşa", "Alemdar Mustafa Paşa"],
    correct: 0,
    category: "Tarih",
    difficulty: "Orta"
  },
  {
    id: 117,
    question: "17. yüzyılda bilimde 'Güneş merkezli sistem' (Heliocentric) teorisini savunduğu için Kilise tarafından yargılanan İtalyan bilim adamı kimdir?",
    options: ["Kopernik", "Newton", "Galileo Galilei", "Kepler"],
    correct: 2,
    category: "Tarih",
    difficulty: "Kolay"
  },
  {
    id: 118,
    question: "Türk Kurtuluş Savaşı sırasında, Doğu Cephesi'nde Ermenilere karşı büyük zafer kazanan komutan kimdir?",
    options: ["İsmet İnönü", "Fevzi Çakmak", "Kazım Karabekir Paşa", "Ali Fuat Cebesoy"],
    correct: 2,
    category: "Tarih",
    difficulty: "Kolay"
  },
  {
    id: 119,
    question: "I. Dünya Savaşı'nda Almanya, Osmanlı Devleti ve Avusturya-Macaristan'ın oluşturduğu ittifakın adı nedir?",
    options: ["İtilaf Devletleri", "Müttefik Devletler", "Üçlü İttifak (Bağlaşma)", "Merkez Devletleri"],
    correct: 3,
    category: "Tarih",
    difficulty: "Kolay"
  },
  {
    id: 120,
    question: "İslam tarihinde, Müslümanlar arasında ilk iç savaşın (Sıffin Savaşı) yaşandığı dönem hangisidir?",
    options: ["Hz. Ebu Bekir Dönemi", "Hz. Ömer Dönemi", "Hz. Osman Dönemi", "Hz. Ali Dönemi"],
    correct: 3,
    category: "Tarih",
    difficulty: "Orta"
  },
  {
    id: 121,
    question: "Anadolu'da kurulan ve hayvancılıkla uğraşan, başkenti Tuşpa (Van) olan uygarlık hangisidir?",
    options: ["Lidyalılar", "Frigler", "Urartular", "Hititler"],
    correct: 2,
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
    options: ["1924", "1930", "1934", "1945"],
    correct: 1,
    category: "Tarih",
    difficulty: "Kolay"
  },
  {
    id: 124,
    question: "Fransız İhtilali'nin sonuçlarından biri olarak kabul edilen ve tüm insanların eşit ve özgür olduğunu ilan eden belge nedir?",
    options: ["Magna Carta", "İnsan ve Yurttaş Hakları Bildirisi", "Haklar Bildirisi (Bill of Rights)", "Paris Sözleşmesi"],
    correct: 1,
    category: "Tarih",
    difficulty: "Kolay"
  },
  {
    id: 125,
    question: "Osmanlı Devleti'nde II. Mahmut döneminde kurulan, Batı tarzı ilk düzenli ordu nedir?",
    options: ["Sekban-ı Cedid", "Eşkinci Ocağı", "Nizam-ı Cedid", "Asakir-i Mansure-i Muhammediye"],
    correct: 3,
    category: "Tarih",
    difficulty: "Orta"
  },
  {
    id: 126,
    question: "1989'da yıkılarak Soğuk Savaş'ın sembolik sonu kabul edilen yapı neresidir?",
    options: ["Berlin Duvarı", "Çin Seddi", "İzmir Saat Kulesi", "Versay Sarayı"],
    correct: 0,
    category: "Tarih",
    difficulty: "Kolay"
  },
  {
    id: 127,
    question: "Büyük Selçuklu İmparatorluğu'nun en parlak dönemini yaşatan ve Nizamiye medreselerini kurduran vezir kimdir?",
    options: ["Tuğrul Bey", "Alp Arslan", "Nizamülmülk", "Melikşah"],
    correct: 2,
    category: "Tarih",
    difficulty: "Kolay"
  },
  {
    id: 128,
    question: "Türklerdeki ilk yazılı kaynaklar olan ve Bilge Kağan, Kültigin adına dikilen anıtlar nerede bulunur?",
    options: ["Yenisey Yazıtları", "Orhun Yazıtları", "Maniheizm Kitapları", "Irk Bitig"],
    correct: 1,
    category: "Tarih",
    difficulty: "Kolay"
  },
  {
    id: 129,
    question: "1918'de I. Dünya Savaşı'nı bitiren ve ağır şartları nedeniyle II. Dünya Savaşı'nın sebeplerinden biri sayılan antlaşma nedir?",
    options: ["Sevr Antlaşması", "Versay Antlaşması", "Trianon Antlaşması", "Paris Barış Konferansı"],
    correct: 1,
    category: "Tarih",
    difficulty: "Kolay"
  },
  {
    id: 130,
    question: "İslam tarihinde, peygamberin ölümünden sonraki siyasi otorite (liderlik) sorunu sonucu ortaya çıkan mezhep ayrılıkları hangi olayla derinleşmiştir?",
    options: ["Cemel Vakası", "Sıffin Savaşı", "Kerbela Olayı", "Haricilerin Ortaya Çıkışı"],
    correct: 2,
    category: "Tarih",
    difficulty: "Orta"
  },
  {
    id: 131,
    question: "Anadolu'da kurulan ve Hititlerin yönetim şekli olan 'Tavananna' (kraliçe) ve 'Pankuş' (meclis) ile bilinen devlet hangisidir?",
    options: ["Frigler", "Urartular", "Hititler", "Lidyalılar"],
    correct: 2,
    category: "Tarih",
    difficulty: "Zor"
  },
  {
    id: 132,
    question: "Antik Mısır'da, kralların mezarları olarak inşa edilen ve büyük mimari yapılar olan yapılar nedir?",
    options: ["Ziggurat", "Piramit", "Tapınak", "Sarkofaj"],
    correct: 1,
    category: "Tarih",
    difficulty: "Kolay"
  },
  {
    id: 133,
    question: "Osmanlı Devleti'nin gerileme döneminde (18. yy.), ilk kez Batı tarzında askeri ıslahatlar yapan padişah kimdir?",
    options: ["III. Selim", "III. Ahmet", "I. Mahmut", "II. Osman"],
    correct: 2,
    category: "Tarih",
    difficulty: "Orta"
  },
  {
    id: 134,
    question: "Yeniçağ'da, devletlerin zenginliğini sahip olduğu altın ve gümüş miktarıyla ölçen ekonomik akım nedir?",
    options: ["Liberalizm", "Kapitalizm", "Feodalizm", "Merkantilizm"],
    correct: 3,
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
    options: ["SEATO", "NATO", "Varşova Paktı", "CENTO"],
    correct: 1,
    category: "Tarih",
    difficulty: "Kolay"
  },
  {
    id: 137,
    question: "Tarihte 'Çağ Açıp Çağ Kapayan' olay olarak kabul edilen gelişme nedir?",
    options: ["Reform Hareketleri", "İstanbul'un Fethi", "Coğrafi Keşifler", "Fransız İhtilali"],
    correct: 1,
    category: "Tarih",
    difficulty: "Kolay"
  },
  {
    id: 138,
    question: "1934 yılında kabul edilen 'Soyadı Kanunu' ile Mustafa Kemal'e verilen soyadı nedir?",
    options: ["Gazi", "Paşa", "Kamal", "Atatürk"],
    correct: 3,
    category: "Tarih",
    difficulty: "Kolay"
  },
  {
    id: 139,
    question: "Avrupa'da Kilise'nin eğitim ve bilim üzerindeki baskısını azaltan, aklın ve bilimin ön plana çıktığı 18. yüzyıl dönemi nedir?",
    options: ["Rönesans", "Reform", "Aydınlanma Çağı", "Sanayi Devrimi"],
    correct: 2,
    category: "Tarih",
    difficulty: "Kolay"
  },
  {
    id: 140,
    question: "Büyük Selçukluların kuruluşunda önemli rol oynayan, Gaznelilerle yapılan savaş hangisidir?",
    options: ["Malazgirt Savaşı", "Pasınlar Savaşı", "Kösedağ Savaşı", "Dandanakan Savaşı"],
    correct: 3,
    category: "Tarih",
    difficulty: "Kolay"
  },
  {
    id: 141,
    question: "İlk Türk devletlerinde hükümdarın eşine verilen unvan nedir?",
    options: ["Tigin", "Hatun", "Buyruk", "Yabgu"],
    correct: 1,
    category: "Tarih",
    difficulty: "Kolay"
  },
  {
    id: 142,
    question: "Osmanlı Devleti'nin ilk kez toprak kaybettiği ve Avrupa'da büyük bir gerileme döneminin başladığı antlaşma hangisidir?",
    options: ["Edirne Segedin Antlaşması", "Zitvatorok Antlaşması", "Karlofça Antlaşması", "İstanbul Antlaşması (1533)"],
    correct: 2,
    category: "Tarih",
    difficulty: "Orta"
  },
  {
    id: 143,
    question: "II. Dünya Savaşı sırasında, Almanya'nın teslim olmasından sonra, müttefiklerin savaşı Japonya'ya karşı sürdürme kararı aldığı ve atom bombası çağını başlatan konferans hangisidir?",
    options: ["Yalta Konferansı", "Potsdam Konferansı", "Tahran Konferansı", "Kazablanka Konferansı"],
    correct: 1,
    category: "Tarih",
    difficulty: "Zor"
  },
  {
    id: 144,
    question: "Mezopotamya'da, her katı farklı bir tanrıya adanmış, teraslı piramit biçimli tapınaklara ne ad verilir?",
    options: ["Piramit", "Sfenks", "Ziggurat", "Obelisk"],
    correct: 2,
    category: "Tarih",
    difficulty: "Kolay"
  },
  {
    id: 145,
    question: "Türk Kurtuluş Savaşı'nda Batı Cephesi'nde Yunanlılara karşı kazanılan ilk askeri zafer hangisidir?",
    options: ["Kütahya-Eskişehir Savaşları", "Sakarya Meydan Muharebesi", "I. İnönü Savaşı", "Büyük Taarruz"],
    correct: 2,
    category: "Tarih",
    difficulty: "Kolay"
  },
  {
    id: 146,
    question: "1066'da İngiltere'yi fethederek Anglo-Sakson Krallığı'na son veren ve İngiliz tahtına geçen kişi kimdir?",
    options: ["Kral Arthur", "Fatih William (Norman Dükü)", "I. Edward", "I. Richard (Aslan Yürekli)"],
    correct: 1,
    category: "Tarih",
    difficulty: "Zor"
  },
  {
    id: 147,
    question: "Osmanlı Devleti'nde, şehzadelerin sancağa çıkma uygulamasını başlatan padişah kimdir?",
    options: ["Orhan Gazi", "I. Murat", "Yıldırım Bayezid", "Fatih Sultan Mehmet"],
    correct: 1,
    category: "Tarih",
    difficulty: "Orta"
  },
  {
    id: 148,
    question: "Rönesans'ın sanatçı ve bilim insanlarını destekleyen, Floransa'nın güçlü banker ailesi hangisidir?",
    options: ["Borgia Ailesi", "Medici Ailesi", "Sforza Ailesi", "Pazzi Ailesi"],
    correct: 1,
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
    options: ["Vasco da Gama", "Kristof Kolomb", "Ferdinand Macellan", "Bartolomeu Dias"],
    correct: 2,
    category: "Tarih",
    difficulty: "Kolay"
  },
  {
    id: 151,
    question: "İslam tarihinde, Emevi Devleti'nin başkenti hangi şehir olmuştur?",
    options: ["Mekke", "Medine", "Şam (Dımaşk)", "Bağdat"],
    correct: 2,
    category: "Tarih",
    difficulty: "Kolay"
  },
  {
    id: 152,
    question: "1787'de yazılan ve hala yürürlükte olan, dünyanın en eski yazılı anayasası hangi ülkeye aittir?",
    options: ["İngiltere", "Fransa", "Amerika Birleşik Devletleri", "Kanada"],
    correct: 2,
    category: "Tarih",
    difficulty: "Orta"
  },
  {
    id: 153,
    question: "Osmanlı Devleti'nde, Fatih Sultan Mehmet döneminde 'İltizam Sistemi' (Vergi toplama hakkının kiralanması) yerine getirilen düzenleme nedir?",
    options: ["Tımar Sistemi", "Mültezim Sistemi", "Divan-ı Hümayun", "Kapıkulu Ocağı"],
    correct: 0,
    category: "Tarih",
    difficulty: "Zor"
  },
  {
    id: 154,
    question: "Orta Asya'da Maniheizm dinini kabul ederek yerleşik yaşama geçen ve askeri özelliklerini kaybeden Türk devleti hangisidir?",
    options: ["Göktürkler", "Uygurlar", "Karluklar", "Akhunlar"],
    correct: 1,
    category: "Tarih",
    difficulty: "Kolay"
  },
  {
    id: 155,
    question: "Antik Roma'da, şehirdeki en önemli siyasi ve dini binaların bulunduğu ana meydanın adı nedir?",
    options: ["Kolezyum", "Panteon", "Circus Maximus", "Forum"],
    correct: 3,
    category: "Tarih",
    difficulty: "Kolay"
  },
  {
    id: 156,
    question: "Mustafa Kemal Atatürk'ün 'Ben size taarruzu emretmiyorum, ölmeyi emrediyorum.' dediği I. Dünya Savaşı cephesi hangisidir?",
    options: ["Kafkas Cephesi", "Kanal Cephesi", "Çanakkale Cephesi", "Sina-Filistin Cephesi"],
    correct: 2,
    category: "Tarih",
    difficulty: "Kolay"
  },
  {
    id: 157,
    question: "İngiltere'de Sanayi Devrimi'nin başlamasını sağlayan en önemli teknik icat nedir?",
    options: ["Telgraf", "Buhar Makinesi", "Elektrik", "Matbaa"],
    correct: 1,
    category: "Tarih",
    difficulty: "Kolay"
  },
  {
    id: 158,
    question: "Helenistik dönemin en önemli felsefe akımlarından biri olan ve kişinin duygulardan arınmış, akılcı bir yaşam sürmesini savunan akım nedir?",
    options: ["Epikürizm", "Stoacılık", "Sinizm", "Sofizm"],
    correct: 1,
    category: "Tarih",
    difficulty: "Zor"
  },
  {
    id: 159,
    question: "Osmanlı Devleti'nde padişahın mutlak vekilinin ve en üst düzey yöneticisinin unvanı nedir?",
    options: ["Defterdar", "Kazasker", "Veziriazam (Sadrazam)", "Nişancı"],
    correct: 2,
    category: "Tarih",
    difficulty: "Kolay"
  },
  {
    id: 160,
    question: "Yunan mitolojisindeki Truva Savaşı'nı anlatan ve Batı edebiyatının temellerinden sayılan destan nedir?",
    options: ["Odisse", "Ramayana", "Gılgamış", "İlyada"],
    correct: 3,
    category: "Tarih",
    difficulty: "Kolay"
  },
  {
    id: 161,
    question: "Orta Çağ'da, Bizans İmparatorluğu'nun başkenti olan ve 1453'te Osmanlı'ya geçen şehir neresidir?",
    options: ["İznik", "Trabzon", "İstanbul (Konstantinopolis)", "Roma"],
    correct: 2,
    category: "Tarih",
    difficulty: "Kolay"
  },
  {
    id: 162,
    question: "1945'te kurulan, uluslararası barış ve güvenliği sağlamakla görevli, beş daimi üyesi bulunan kuruluş hangisidir?",
    options: ["NATO", "Avrupa Konseyi", "Birleşmiş Milletler (BM)", "G-7"],
    correct: 2,
    category: "Tarih",
    difficulty: "Kolay"
  },
  {
    id: 163,
    question: "Osmanlı Devleti'nin kuruluş sürecinde, Bizans İmparatorluğu ile yaptığı ilk savaş hangisidir?",
    options: ["Maltepe Savaşı", "Pelekanon Savaşı", "Koyunhisar Savaşı", "Sazlıdere Savaşı"],
    correct: 2,
    category: "Tarih",
    difficulty: "Orta"
  },
  {
    id: 164,
    question: "1596'da Kanuni Sultan Süleyman'ın vefat ettiği son seferi olan kale kuşatması hangisidir?",
    options: ["Rodos Kuşatması", "Belgrad Kuşatması", "Mohaç Meydan Muharebesi", "Zigetvar Kuşatması"],
    correct: 3,
    category: "Tarih",
    difficulty: "Orta"
  },
  {
    id: 165,
    question: "Türk Kurtuluş Savaşı'nda, Milli Mücadele'nin gerekçesi, yöntemi ve amacı ilk kez nerede belirlenmiştir?",
    options: ["Amasya Genelgesi", "Erzurum Kongresi", "Sivas Kongresi", "Havza Genelgesi"],
    correct: 0,
    category: "Tarih",
    difficulty: "Kolay"
  },
  {
    id: 166,
    question: "Mezopotamya'da çivi yazısını ve tekerleği icat eden ilk uygarlık hangisidir?",
    options: ["Akadlar", "Babilliler", "Sümerler", "Asurlular"],
    correct: 2,
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
    options: ["Büyük İskender", "Perikles", "Darius", "Kserkses"],
    correct: 0,
    category: "Tarih",
    difficulty: "Kolay"
  },
  {
    id: 169,
    question: "1955'te Endonezya'da toplanan ve Soğuk Savaş blokları dışında kalan ülkelerin (Üçüncü Dünya) bir araya geldiği konferans nedir?",
    options: ["Tahran Konferansı", "Bağlantısızlar Hareketi (Bandung Konferansı)", "Yalta Konferansı", "NATO Zirvesi"],
    correct: 1,
    category: "Tarih",
    difficulty: "Zor"
  },
  {
    id: 170,
    question: "İlk çağlarda Anadolu'da kurulan, Kibele tanrıçasına tapınan ve en ünlü kralı Midas olan uygarlık hangisidir?",
    options: ["Lidyalılar", "Urartular", "Frigler", "İyonlar"],
    correct: 2,
    category: "Tarih",
    difficulty: "Kolay"
  },
  {
    id: 171,
    question: "Abbasiler döneminde, Bağdat'ta kurulan ve çeviri, bilim, felsefe çalışmaları yapılan önemli akademik merkez nedir?",
    options: ["Nizamiye Medresesi", "Darülfünun", "Beytülhikme (Bilgelik Evi)", "Kütüphane"],
    correct: 2,
    category: "Tarih",
    difficulty: "Zor"
  },
  {
    id: 172,
    question: "II. Dünya Savaşı sırasında, Yahudilerin toplu olarak katledilmesine yönelik sistematik soykırımın adı nedir?",
    options: ["Etnik Temizlik", "Holokost", "Kristal Gece", "Nürnberg Yasaları"],
    correct: 1,
    category: "Tarih",
    difficulty: "Kolay"
  },
  {
    id: 173,
    question: "Osmanlı Devleti'nde ilk kez 'Padişahın yetkilerinin kanunla sınırlandırılması' fikri hangi belgeyle başlamıştır?",
    options: ["Kanun-i Esasi", "Islahat Fermanı", "Tanzimat Fermanı", "Sened-i İttifak"],
    correct: 3,
    category: "Tarih",
    difficulty: "Orta"
  },
  {
    id: 174,
    question: "Büyük Roma İmparatorluğu'nu resmen ikiye ayıran (Batı ve Doğu) imparator kimdir?",
    options: ["Augustus", "Jül Sezar", "Büyük Konstantin", "Theodosius"],
    correct: 3,
    category: "Tarih",
    difficulty: "Orta"
  },
  {
    id: 175,
    question: "Milli Mücadele döneminde, Temsil Heyeti'nin Ankara'yı merkez olarak seçmesinin en önemli nedeni nedir?",
    options: ["Batı Cephesi'ne yakınlık", "Ankara'nın jeopolitik konumu ve işgal altında olmaması", "Ekonomik imkanlar", "İstanbul'a yakınlık"],
    correct: 1,
    category: "Tarih",
    difficulty: "Kolay"
  },
  {
    id: 176,
    question: "Türk-İslam devletlerinde, hükümdarın özel hayatından sorumlu olan, önemli devlet işlerinde söz sahibi olan görevli kimdir?",
    options: ["Ulu Hacib", "Vezir", "Hacibülhüccab", "Emir-i Dad"],
    correct: 0,
    category: "Tarih",
    difficulty: "Zor"
  },
  {
    id: 177,
    question: "17. yüzyıl Osmanlı'sında sarayın dışından, devlete karşı güçlü bir otorite kuran ve sadrazamlık makamını aile içinde tutan hanedan kimdir?",
    options: ["Çandarlı Ailesi", "Köprülü Ailesi", "Evrenos Ailesi", "Zağanos Ailesi"],
    correct: 1,
    category: "Tarih",
    difficulty: "Orta"
  },
  {
    id: 178,
    question: "Antik Yunan'da ilk kez atom fikrini ortaya atan ve tüm maddelerin bölünemez küçük parçacıklardan (atomos) oluştuğunu savunan filozof kimdir?",
    options: ["Aristo", "Demokritos", "Platon", "Tales"],
    correct: 1,
    category: "Tarih",
    difficulty: "Zor"
  },
  {
    id: 179,
    question: "Milli Mücadele döneminde, Kuvâ-yi Milliye'nin kaldırılmasına ve düzenli orduya geçişe neden olan isyan hangisidir?",
    options: ["Anzavur İsyanı", "Çerkez Ethem Ayaklanması", "Koçgiri Ayaklanması", "Şeyh Said Ayaklanması"],
    correct: 1,
    category: "Tarih",
    difficulty: "Kolay"
  },
  {
    id: 180,
    question: "Abbasiler döneminde, Horasan'dan başlayarak İslami sanatı etkileyen ve ilk kez figüratif resmi (minyatür) kullanan Türk hanedanı hangisidir?",
    options: ["Karahanlılar", "Gazneliler", "Samanoğulları", "Tolunoğulları"],
    correct: 1,
    category: "Tarih",
    difficulty: "Zor"
  },
  {
    id: 181,
    question: "Osmanlı Devleti'nde mali işlerden sorumlu olan, gelir ve giderleri hesaplayan Divan-ı Hümayun üyesi kimdir?",
    options: ["Kazasker", "Nişancı", "Defterdar", "Reisülküttap"],
    correct: 2,
    category: "Tarih",
    difficulty: "Kolay"
  },
  {
    id: 182,
    question: "Orta Çağ'da, Uzak Doğu'dan Avrupa'ya ulaşan ve Avrupa nüfusunun büyük bir kısmının ölümüne neden olan salgın hastalık nedir?",
    options: ["Kolera", "Veba (Kara Ölüm)", "Tifüs", "Çiçek Hastalığı"],
    correct: 1,
    category: "Tarih",
    difficulty: "Kolay"
  },
  {
    id: 183,
    question: "Milli Mücadele'de Batı Cephesi Komutanı olarak büyük başarılara imza atan ve ileride Cumhurbaşkanı olan kişi kimdir?",
    options: ["Fevzi Çakmak", "Kazım Karabekir", "Ali Fuat Cebesoy", "İsmet İnönü"],
    correct: 3,
    category: "Tarih",
    difficulty: "Kolay"
  },
  {
    id: 184,
    question: "Osmanlı Devleti'nin 'Duraklama Dönemi'ne (17. yy.) girmesinin en önemli dış sebebi nedir?",
    options: ["Kapitülasyonlar", "Saray kadınlarının yönetime karışması", "Coğrafi Keşifler ve ticaret yollarının değişmesi", "Yeniçeri isyanları"],
    correct: 2,
    category: "Tarih",
    difficulty: "Kolay"
  },
  {
    id: 185,
    question: "1962'de ABD ve Sovyetler Birliği'ni nükleer savaşın eşiğine getiren kriz hangi ülkede yaşanmıştır?",
    options: ["Vietnam", "Kore", "Küba", "Almanya"],
    correct: 2,
    category: "Tarih",
    difficulty: "Kolay"
  },
  {
    id: 186,
    question: "Anadolu'da kurulan ve ilk kez bilinen 'Halk Meclisi' (Pankuş) ile meşruti yönetime benzeyen bir sistem kuran uygarlık hangisidir?",
    options: ["Lidyalılar", "Urartular", "Frigler", "Hititler"],
    correct: 3,
    category: "Tarih",
    difficulty: "Zor"
  },
  {
    id: 187,
    question: "Osmanlı Devleti'nin kuruluş döneminde (1371) Sırplarla yapılan ve Balkanlar'da Osmanlı otoritesini güçlendiren savaş hangisidir?",
    options: ["Niğbolu Savaşı", "Sırpsındığı Savaşı", "I. Kosova Savaşı", "Varna Savaşı"],
    correct: 1,
    category: "Tarih",
    difficulty: "Zor"
  },
  {
    id: 188,
    question: "Antik Yunan'da, doğa bilimlerinin ve felsefenin geliştiği, ticaretle zenginleşen Ege kıyısındaki şehir devletleri (İyonya) hangi şehrin öncülüğünde yer almıştır?",
    options: ["Atina", "Efes", "Milet", "Foça"],
    correct: 2,
    category: "Tarih",
    difficulty: "Orta"
  },
  {
    id: 189,
    question: "Türk-İslam tarihinde, ilk kez 'Sultan' unvanını kullanan hükümdar kimdir?",
    options: ["Tuğrul Bey", "Gazneli Mahmut", "Alp Arslan", "Satuk Buğra Han"],
    correct: 1,
    category: "Tarih",
    difficulty: "Orta"
  },
  {
    id: 190,
    question: "1929'daki Büyük Buhran'dan sonra ABD'de Franklin D. Roosevelt'in ekonomiyi canlandırmak için uyguladığı program nedir?",
    options: ["Marshall Planı", "New Deal", "Truman Doktrini", "Monroe Doktrini"],
    correct: 1,
    category: "Tarih",
    difficulty: "Zor"
  },
  {
    id: 191,
    question: "Osmanlı Devleti'nde, ilk kez II. Mahmut döneminde kurulan ve Avrupa'ya öğrenci gönderen okul türü nedir?",
    options: ["Enderun Mektebi", "Mekteb-i Harbiye", "Mühendishane-i Berr-i Hümayun", "Tıbbiye"],
    correct: 1,
    category: "Tarih",
    difficulty: "Zor"
  },
  {
    id: 192,
    question: "Abbasiler döneminde, Türklerin yeteneklerinden dolayı kurulan ve sadece Türklere özgü ordugah şehri neresidir?",
    options: ["Kahire", "İsfahan", "Semerkant", "Samarra"],
    correct: 3,
    category: "Tarih",
    difficulty: "Zor"
  },
  {
    id: 193,
    question: "1938'de Almanya'nın ilhak ettiği ve I. Dünya Savaşı'ndan sonra parçalanan Slav devleti hangisidir?",
    options: ["Polonya", "Avusturya", "Çekoslovakya", "Yugoslavya"],
    correct: 2,
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
    options: ["Trakya", "Güneybatı Anadolu (Antalya ve çevresi)", "Kuzeydoğu Anadolu", "İstanbul"],
    correct: 1,
    category: "Tarih",
    difficulty: "Kolay"
  },
  {
    id: 196,
    question: "1487'de Ümit Burnu'nu keşfeden Portekizli denizci kimdir?",
    options: ["Bartolomeu Dias", "Vasco da Gama", "Kristof Kolomb", "Ferdinand Macellan"],
    correct: 0,
    category: "Tarih",
    difficulty: "Kolay"
  },
  {
    id: 197,
    question: "Osmanlı Devleti'nde ilk kez 'Mutlakiyet'in sona erdiği ve 'Meşrutiyet' rejimine geçişin yaşandığı dönem nedir?",
    options: ["Lale Devri", "Tanzimat Dönemi", "I. Meşrutiyet Dönemi", "Fetret Devri"],
    correct: 2,
    category: "Tarih",
    difficulty: "Kolay"
  },
  {
    id: 198,
    question: "Orta Çağ Avrupası'nda, bir derebeyine bağlılık yemini eden ve onun askeri hizmetini gören savaşçıya ne ad verilir?",
    options: ["Senyör", "Köylü (Serf)", "Vasal", "Burjuva"],
    correct: 2,
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
    options: ["Sivas", "Kayseri", "Malatya", "İznik"],
    correct: 3,
    category: "Tarih",
    difficulty: "Orta"
  },

  // ==================== COĞRAFYA ====================
  {
    id: 201,
    question: "Türkiye'nin en büyük gölü hangisidir?",
    options: ["Van Gölü", "Tuz Gölü", "Eğirdir Gölü", "Beyşehir Gölü"],
    correct: 0,
    category: CATEGORIES.GEOGRAPHY.name,
    difficulty: 'Kolay'
  },
  {
    id: 202,
    question: "Hangi ülke 'Yükselen Güneşin Ülkesi' olarak bilinir?",
    options: ["Japonya", "Çin", "Güney Kore", "Tayland"],
    correct: 0,
    category: CATEGORIES.GEOGRAPHY.name,
    difficulty: 'Kolay'
  },
  {
    id: 203,
    question: "Dünyanın en uzun nehri hangisidir?",
    options: ["Amazon", "Nil", "Yangtze", "Mississippi"],
    correct: 1,
    category: CATEGORIES.GEOGRAPHY.name,
    difficulty: "Kolay"
  },
  {
    id: 204,
    question: "Türkiye'nin en yüksek dağı hangisidir?",
    options: ["Erciyes Dağı", "Ağrı Dağı", "Süphan Dağı", "Kaçkar Dağları"],
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
    options: ["Şili", "Peru", "Ekvador", "Kolombiya"],
    correct: 2,
    category: CATEGORIES.GEOGRAPHY.name,
    difficulty: "Orta"
  },
  {
    id: 207,
    question: "İstanbul Boğazı hangi denizleri birbirine bağlar?",
    options: ["Akdeniz ve Ege", "Karadeniz ve Akdeniz", "Marmara ve Akdeniz", "Karadeniz ve Marmara"],
    correct: 3,
    category: CATEGORIES.GEOGRAPHY.name,
    difficulty: "Kolay"
  },
  {
    id: 208,
    question: "En fazla sayıda ülkeyle sınır komşusu olan kıta hangisidir?",
    options: ["Avrupa", "Asya", "Afrika", "Güney Amerika"],
    correct: 2,
    category: CATEGORIES.GEOGRAPHY.name,
    difficulty: "Orta"
  },
  {
    id: 209,
    question: "Hangi iklim tipinde yıl boyunca yüksek sıcaklık ve bol yağış görülür?",
    options: ["Akdeniz İklimi", "Karasal İklim", "Ekvatoral İklim", "Muson İklimi"],
    correct: 2,
    category: CATEGORIES.GEOGRAPHY.name,
    difficulty: "Kolay"
  },
  {
    id: 210,
    question: "Kanada'nın başkenti neresidir?",
    options: ["Toronto", "Vancouver", "Montreal", "Ottawa"],
    correct: 3,
    category: CATEGORIES.GEOGRAPHY.name,
    difficulty: "Kolay"
  },
  {
    id: 211,
    question: "Atlas Okyanusu'nu Büyük Okyanus'a bağlayan kanal hangisidir?",
    options: ["Süveyş Kanalı", "Panama Kanalı", "Kiel Kanalı", "Korint Kanalı"],
    correct: 1,
    category: CATEGORIES.GEOGRAPHY.name,
    difficulty: "Orta"
  },
  {
    id: 212,
    question: "Hangi dağ sırası 'ateş çemberi' (Pasifik Deprem Kuşağı) üzerinde yer alır?",
    options: ["Alp Dağları", "Ural Dağları", "Kayalık Dağları", "Himalayalar"],
    correct: 2, // Kayalık Dağları, Pasifik Ateş Çemberi'nin doğu sınırını oluşturur.
    category: CATEGORIES.GEOGRAPHY.name,
    difficulty: "Zor"
  },
  {
    id: 213,
    question: "Afrika kıtasının en güney ucu neresidir?",
    options: ["Cebelitarık Boğazı", "Ümit Burnu", "Babülmendep Boğazı", "Hormuz Boğazı"],
    correct: 1,
    category: CATEGORIES.GEOGRAPHY.name,
    difficulty: "Orta"
  },
  {
    id: 214,
    question: "Türkiye'de 'delta ovası' oluşumuna en iyi örnek nerede görülür?",
    options: ["Konya Ovası", "Harran Ovası", "Çukurova", "Iğdır Ovası"],
    correct: 2,
    category: CATEGORIES.GEOGRAPHY.name,
    difficulty: "Kolay"
  },
  {
    id: 215,
    question: "Bir bölgenin yalnızca enlem derecesiyle açıklanabilen özelliği hangisidir?",
    options: ["Günlük sıcaklık farkı", "Yerel saat farkı", "Ekinoks tarihlerinde yaşanan gece-gündüz süresi", "Yıllık yağış miktarı"],
    correct: 2,
    category: CATEGORIES.GEOGRAPHY.name,
    difficulty: "Zor"
  },
  {
    id: 216,
    question: "Fay hattı boyunca meydana gelen çöküntü alanlarına ne ad verilir?",
    options: ["Horst", "Bâti", "Graben", "Plato"],
    correct: 2,
    category: CATEGORIES.GEOGRAPHY.name,
    difficulty: "Orta"
  },
  {
    id: 217,
    question: "Dünyanın en yüksek şelalesi olan Angel Şelalesi hangi ülkede bulunur?",
    options: ["Brezilya", "Kanada", "Venezuela", "Arjantin"],
    correct: 2,
    category: CATEGORIES.GEOGRAPHY.name,
    difficulty: "Orta"
  },
  {
    id: 218,
    question: "Türkiye'de rüzgar erozyonunun en şiddetli olduğu bölgelerden biri neresidir?",
    options: ["Doğu Karadeniz", "Batı Anadolu", "İç Anadolu", "Akdeniz Bölgesi"],
    correct: 2,
    category: CATEGORIES.GEOGRAPHY.name,
    difficulty: "Kolay"
  },
  {
    id: 219,
    question: "Avustralya'nın en büyük çölü ve aynı zamanda en kalabalık şehrinin bulunduğu eyalet hangisidir?",
    options: ["Gibson Çölü / Victoria", "Büyük Victoria Çölü / Batı Avustralya", "Büyük Kum Çölü / Queensland", "Simpson Çölü / Güney Avustralya"],
    correct: 1, // Büyük Victoria Çölü (Güney Avustralya'da da payı var) ve Batı Avustralya'nın başkenti Perth
    category: CATEGORIES.GEOGRAPHY.name,
    difficulty: "Zor"
  },
  {
    id: 220,
    question: "Hangi coğrafi terim, bir nehrin denize döküldüğü yerde oluşan üçgen şeklindeki kara parçasını ifade eder?",
    options: ["Fiyort", "Haliç", "Delta", "Menderes"],
    correct: 2,
    category: CATEGORIES.GEOGRAPHY.name,
    difficulty: "Kolay"
  },
  {
    id: 221,
    question: "Dünyanın yörünge hareketinin (yıllık hareket) sonuçlarından biri nedir?",
    options: ["Gece-gündüz oluşumu", "Mevsimlerin oluşumu", "Günlük sıcaklık farkları", "Yerel saat farkları"],
    correct: 1,
    category: CATEGORIES.GEOGRAPHY.name,
    difficulty: "Kolay"
  },
  {
    id: 222,
    question: "Karstik şekillerin (mağara, obruk vb.) yaygın olduğu Türkiye bölgesi hangisidir?",
    options: ["Marmara Bölgesi", "Akdeniz Bölgesi", "Güneydoğu Anadolu", "Doğu Anadolu"],
    correct: 1,
    category: CATEGORIES.GEOGRAPHY.name,
    difficulty: "Kolay"
  },
  {
    id: 223,
    question: "Dünya'nın en derin noktası olan Mariana Çukuru hangi okyanusta yer alır?",
    options: ["Atlas Okyanusu", "Büyük Okyanus (Pasifik)", "Hint Okyanusu", "Arktik Okyanusu"],
    correct: 1,
    category: CATEGORIES.GEOGRAPHY.name,
    difficulty: "Orta"
  },
  {
    id: 224,
    question: "Moskova hangi ülkenin başkentidir?",
    options: ["Polonya", "Ukrayna", "Rusya", "Belarus"],
    correct: 2,
    category: CATEGORIES.GEOGRAPHY.name,
    difficulty: "Kolay"
  },
  {
    id: 225,
    question: "Bir yerin deniz seviyesine göre yüksekliğine ne ad verilir?",
    options: ["Boylam", "Enlem", "İzohips", "Rakım (Yükselti)"],
    correct: 3,
    category: CATEGORIES.GEOGRAPHY.name,
    difficulty: "Kolay"
  },
  {
    id: 226,
    question: "Türkiye'de falez (yalıyar) oluşumunun en tipik görüldüğü kıyı tipi hangisidir?",
    options: ["Ria tipi", "Dalmaçya tipi", "Boyuna kıyı tipi", "Enine kıyı tipi"],
    correct: 2,
    category: CATEGORIES.GEOGRAPHY.name,
    difficulty: "Zor"
  },
  {
    id: 227,
    question: "Kıtalar arasındaki sınırların belirlenmesinde genellikle hangi doğal sınır kullanılır?",
    options: ["Dağ sıraları", "Nehirler", "Denizler ve boğazlar", "Çöller"],
    correct: 2,
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
    options: ["Kayseri", "Samsun", "Adana", "Hatay"],
    correct: 3,
    category: CATEGORIES.GEOGRAPHY.name,
    difficulty: "Zor"
  },
  {
    id: 230,
    question: "Dünya nüfusunun büyük çoğunluğunun yaşadığı enlem aralığı yaklaşık olarak nedir?",
    options: ["0° - 10°", "10° - 40°", "40° - 70°", "70° - 90°"],
    correct: 1,
    category: CATEGORIES.GEOGRAPHY.name,
    difficulty: "Orta"
  },
  {
    id: 231,
    question: "Doğu ve Batı yarımküreleri ayıran başlangıç meridyeni hangi kentten geçer?",
    options: ["Paris", "Roma", "Greenwich (Londra)", "Berlin"],
    correct: 2,
    category: CATEGORIES.GEOGRAPHY.name,
    difficulty: "Kolay"
  },
  {
    id: 232,
    question: "Bir akarsuyun yatağını yana doğru aşındırması sonucu oluşan S şeklindeki kıvrımlara ne ad verilir?",
    options: ["Kanyon", "Menderes", "Dev kazanı", "Peri bacası"],
    correct: 1,
    category: CATEGORIES.GEOGRAPHY.name,
    difficulty: "Kolay"
  },
  {
    id: 233,
    question: "Afrika'nın en büyük gölü hangisidir?",
    options: ["Çad Gölü", "Malavi Gölü", "Tanganika Gölü", "Victoria Gölü"],
    correct: 3,
    category: CATEGORIES.GEOGRAPHY.name,
    difficulty: "Orta"
  },
  {
    id: 234,
    question: "Hangi doğal afetin oluşumu için sıcak ve nemli hava ile soğuk ve kuru havanın karşılaşması gerekir?",
    options: ["Deprem", "Volkanizma", "Tsunami", "Tornado"],
    correct: 3,
    category: CATEGORIES.GEOGRAPHY.name,
    difficulty: "Orta"
  },
  {
    id: 235,
    question: "Türkiye'nin en uzun kara sınırı hangi ülke iledir?",
    options: ["Suriye", "İran", "Irak", "Gürcistan"],
    correct: 0,
    category: CATEGORIES.GEOGRAPHY.name,
    difficulty: "Kolay"
  },
  {
    id: 236,
    question: "Muson rüzgarları hangi kıtada özellikle etkilidir?",
    options: ["Avrupa", "Kuzey Amerika", "Avustralya", "Asya"],
    correct: 3,
    category: CATEGORIES.GEOGRAPHY.name,
    difficulty: "Kolay"
  },
  {
    id: 237,
    question: "Antarktika'nın en yüksek zirvesi hangisidir?",
    options: ["Elbrus Dağı", "Kilimanjaro Dağı", "Vinson Massif", "Denali Dağı"],
    correct: 2,
    category: CATEGORIES.GEOGRAPHY.name,
    difficulty: "Zor"
  },
  {
    id: 238,
    question: "Mısır'da yer alan, Akdeniz'i Kızıldeniz'e bağlayan yapay su yolu hangisidir?",
    options: ["Panama Kanalı", "Cebelitarık Boğazı", "Süveyş Kanalı", "Hormuz Boğazı"],
    correct: 2,
    category: CATEGORIES.GEOGRAPHY.name,
    difficulty: "Kolay"
  },
  {
    id: 239,
    question: "Aşağıdakilerden hangisi bir 'Beşeri Coğrafya' konusu değildir?",
    options: ["Nüfus dağılımı", "Göç hareketleri", "Bitki örtüsü tipleri", "Ekonomik faaliyetler"],
    correct: 2,
    category: CATEGORIES.GEOGRAPHY.name,
    difficulty: "Orta"
  },
  {
    id: 240,
    question: "Dünya'nın iç çekirdeğinin hangi halde olduğu kabul edilir?",
    options: ["Sıvı", "Katı", "Gaz", "Yarı-sıvı (magma)"],
    correct: 1,
    category: CATEGORIES.GEOGRAPHY.name,
    difficulty: "Zor"
  },
  {
    id: 241,
    question: "Türkiye'de en çok yağış alan bölge hangisidir?",
    options: ["İç Anadolu", "Doğu Anadolu", "Karadeniz Bölgesi", "Ege Bölgesi"],
    correct: 2,
    category: CATEGORIES.GEOGRAPHY.name,
    difficulty: "Kolay"
  },
  {
    id: 242,
    question: "Avrupa ve Asya kıtalarını ayıran dağ sırası hangisidir?",
    options: ["Pireneler", "Apalaşlar", "Ural Dağları", "Toroslar"],
    correct: 2,
    category: CATEGORIES.GEOGRAPHY.name,
    difficulty: "Orta"
  },
  {
    id: 243,
    question: "Büyük Sahra Çölü hangi kıtada yer alır?",
    options: ["Asya", "Avustralya", "Afrika", "Kuzey Amerika"],
    correct: 2,
    category: CATEGORIES.GEOGRAPHY.name,
    difficulty: "Kolay"
  },
  {
    id: 244,
    question: "Bir bölgenin deniz etkisine açık olup olmadığını gösteren en önemli iklim faktörü nedir?",
    options: ["Yağış tipi", "Yıllık sıcaklık farkı", "Hava basıncı", "Rüzgar yönü"],
    correct: 1,
    category: CATEGORIES.GEOGRAPHY.name,
    difficulty: "Orta"
  },
  {
    id: 245,
    question: "Dünya'nın en büyük yüzölçümüne sahip ülkesi hangisidir?",
    options: ["Çin", "ABD", "Kanada", "Rusya"],
    correct: 3,
    category: CATEGORIES.GEOGRAPHY.name,
    difficulty: "Kolay"
  },
  {
    id: 246,
    question: "Türkiye'de rüzgarın taşıdığı ince kum ve tozların birikmesiyle oluşan yığınlara ne ad verilir?",
    options: ["Lös", "Barkan", "Kumul", "Moren"],
    correct: 2,
    category: CATEGORIES.GEOGRAPHY.name,
    difficulty: "Zor"
  },
  {
    id: 247,
    question: "Kışın sıcak ve yağışlı, yazın sıcak ve kurak geçen iklim tipi hangisidir?",
    options: ["Okyanusal İklim", "Savan İklimi", "Akdeniz İklimi", "Tundra İklimi"],
    correct: 2,
    category: CATEGORIES.GEOGRAPHY.name,
    difficulty: "Kolay"
  },
  {
    id: 248,
    question: "Meksika Körfezi'nden doğup, Kuzey Amerika'nın doğu kıyıları boyunca ilerleyen sıcak su akıntısı hangisidir?",
    options: ["Labrador Akıntısı", "Kuroşio Akıntısı", "Gulf Stream", "Humboldt Akıntısı"],
    correct: 2,
    category: CATEGORIES.GEOGRAPHY.name,
    difficulty: "Zor"
  },
  {
    id: 249,
    question: "Türkiye'nin hangi bölgesinde nüfus yoğunluğu en fazladır?",
    options: ["Doğu Anadolu", "İç Anadolu", "Marmara Bölgesi", "Güneydoğu Anadolu"],
    correct: 2,
    category: CATEGORIES.GEOGRAPHY.name,
    difficulty: "Kolay"
  },
  {
    id: 250,
    question: "Hangi doğal oluşum, volkanik arazilerde suyun buharlaşmasıyla oluşan gayzerleri barındırır?",
    options: ["Mağara", "Fay hattı", "Kaplıca", "Krater"],
    correct: 1, // Gayzerler genellikle jeotermal aktivitenin olduğu fay hatlarında veya volkanik alanlarda bulunur, ancak en doğru cevap gayzerin kendisinin oluşumudur.
    category: CATEGORIES.GEOGRAPHY.name,
    difficulty: "Orta"
  },
  {
    id: 251,
    question: "Eş yükselti eğrilerine (izohips) göre, birbirini çevrelemeyen iki farklı izohips eğrisi neyi ifade eder?",
    options: ["Aynı yükseltiye sahip farklı bölgeleri", "Farklı yükseltiye sahip iki tepenin zirvesini", "Bir vadinin tabanını", "Bir dağın zirvesini"],
    correct: 0,
    category: CATEGORIES.GEOGRAPHY.name,
    difficulty: "Orta"
  },
  {
    id: 252,
    question: "Hangi doğal kaynak yenilenebilir enerji kaynağı olarak kabul edilmez?",
    options: ["Rüzgar enerjisi", "Güneş enerjisi", "Doğal gaz", "Jeotermal enerji"],
    correct: 2,
    category: CATEGORIES.GEOGRAPHY.name,
    difficulty: "Kolay"
  },
  {
    id: 253,
    question: "Asya'nın en yüksek zirvesi olan Everest Dağı hangi iki ülkenin sınırında yer alır?",
    options: ["Çin ve Hindistan", "Pakistan ve Hindistan", "Nepal ve Çin", "Nepal ve Butan"],
    correct: 2,
    category: CATEGORIES.GEOGRAPHY.name,
    difficulty: "Orta"
  },
  {
    id: 254,
    question: "Bir izohips haritasında eğrilerin birbirine çok yakın çizildiği yerler neyi gösterir?",
    options: ["Düz arazi", "Yüksek platolar", "Eğimli (sarp) arazi", "Geniş vadi tabanı"],
    correct: 2,
    category: CATEGORIES.GEOGRAPHY.name,
    difficulty: "Kolay"
  },
  {
    id: 255,
    question: "Türkiye'nin en batı ucunda yer alan ilimiz hangisidir?",
    options: ["Edirne", "Çanakkale", "İzmir", "Aydın"],
    correct: 0,
    category: CATEGORIES.GEOGRAPHY.name,
    difficulty: "Orta"
  },
  {
    id: 256,
    question: "Hangi enlem dairesi, Güneş ışınlarının yılda bir kez 90° açıyla düştüğü son sınırdır?",
    options: ["Ekvator", "Oğlak Dönencesi", "Yengeç Dönencesi", "Kuzey Kutup Dairesi"],
    correct: 2,
    category: CATEGORIES.GEOGRAPHY.name,
    difficulty: "Zor" // Hem Oğlak hem de Yengeç Dönencesi bu tanıma uyar. Cevapta yalnızca Yengeç verilmiş. Enlem dairesi dendiği için dönencelerden biri kabul edilir.
  },
  {
    id: 257,
    question: "Akarsuların yatağını derinlemesine aşındırması sonucu oluşan, dik yamaçlı derin vadilere ne ad verilir?",
    options: ["Boğaz vadi", "Kanyon vadi", "Tabanlı vadi", "Asimetrik vadi"],
    correct: 1,
    category: CATEGORIES.GEOGRAPHY.name,
    difficulty: "Orta"
  },
  {
    id: 258,
    question: "Hollanda'da denizden kazanılan arazilere ne ad verilir?",
    options: ["Lagün", "Kıyı oku", "Polder", "Fiyort"],
    correct: 2,
    category: CATEGORIES.GEOGRAPHY.name,
    difficulty: "Orta"
  },
  {
    id: 259,
    question: "Aşağıdaki ülkelerden hangisi hem Avrupa'da hem de Asya'da toprakları bulunan bir 'transkontinental' ülke değildir?",
    options: ["Rusya", "Kazakistan", "Türkiye", "İran"],
    correct: 3,
    category: CATEGORIES.GEOGRAPHY.name,
    difficulty: "Zor"
  },
  {
    id: 260,
    question: "Bir akarsuyun yatağının eğiminin azaldığı ve yana aşındırmanın arttığı bölüme ne ad verilir?",
    options: ["Yukarı çığır", "Aşağı çığır", "Plato", "Şelale"],
    correct: 1,
    category: CATEGORIES.GEOGRAPHY.name,
    difficulty: "Kolay"
  },
  {
    id: 261,
    question: "Dünya'nın kendi ekseni etrafındaki dönüş hızının en fazla olduğu yer neresidir?",
    options: ["Kutuplar", "Yengeç Dönencesi", "Ekvator", "Oğlak Dönencesi"],
    correct: 2,
    category: CATEGORIES.GEOGRAPHY.name,
    difficulty: "Kolay"
  },
  {
    id: 262,
    question: "Hangi jeolojik devirde, Alp-Himalaya kıvrım sisteminin oluşumu başlamış ve Türkiye'deki fay hatları belirginleşmiştir?",
    options: ["Paleozoyik", "Mezozoyik", "Tersiyer (Neojen)", "Kuvaterner"],
    correct: 2,
    category: CATEGORIES.GEOGRAPHY.name,
    difficulty: "Zor"
  },
  {
    id: 263,
    question: "Atmosferin en alt katmanı ve tüm hava olaylarının yaşandığı katman hangisidir?",
    options: ["Stratosfer", "Mezosfer", "Termosfer", "Troposfer"],
    correct: 3,
    category: CATEGORIES.GEOGRAPHY.name,
    difficulty: "Kolay"
  },
  {
    id: 264,
    question: "Hangi deniz, dünyanın en tuzlu denizlerinden biri olarak bilinir?",
    options: ["Baltık Denizi", "Kızıldeniz", "Karadeniz", "Akdeniz"],
    correct: 1,
    category: CATEGORIES.GEOGRAPHY.name,
    difficulty: "Orta"
  },
  {
    id: 265,
    question: "Ülkelerin yalnızca coğrafi konumuna bağlı olarak belirlenen sınırlar ne tür sınırlardır?",
    options: ["Antlaşma sınırları", "Doğal sınırlar", "Yapısal sınırlar", "Geometrik (Astrolojik) sınırlar"],
    correct: 3,
    category: CATEGORIES.GEOGRAPHY.name,
    difficulty: "Zor"
  },
  {
    id: 266,
    question: "Türkiye'de ipekböcekçiliği ve buna bağlı olarak ipekli dokuma sanayinin en yaygın olduğu ilimiz hangisidir?",
    options: ["İstanbul", "Bursa", "Antalya", "Gaziantep"],
    correct: 1,
    category: CATEGORIES.GEOGRAPHY.name,
    difficulty: "Kolay"
  },
  {
    id: 267,
    question: "Sıcaklığın yükseldikçe azaldığı atmosfer katmanı hangisidir?",
    options: ["Troposfer", "Stratosfer", "Termosfer", "Eksosfer"],
    correct: 0,
    category: CATEGORIES.GEOGRAPHY.name,
    difficulty: "Orta"
  },
  {
    id: 268,
    question: "Aşağıdakilerden hangisi bir 'jeosenklinal' (deniz tabanındaki büyük çukurluk) bölgede oluşmuştur?",
    options: ["Plato", "Kıvrım Dağları", "Volkanik kütle", "Fay hattı"],
    correct: 1,
    category: CATEGORIES.GEOGRAPHY.name,
    difficulty: "Zor"
  },
  {
    id: 269,
    question: "Tarihi İpek Yolu'nun bitiş noktası olarak kabul edilen şehir hangisidir?",
    options: ["Pekin", "İskenderiye", "İstanbul (Konstantinopolis)", "Şam"],
    correct: 2,
    category: CATEGORIES.GEOGRAPHY.name,
    difficulty: "Orta"
  },
  {
    id: 270,
    question: "Ozon tabakası atmosferin hangi katmanında yer alır?",
    options: ["Troposfer", "Stratosfer", "Mezosfer", "Termosfer"],
    correct: 1,
    category: CATEGORIES.GEOGRAPHY.name,
    difficulty: "Kolay"
  },
  {
    id: 271,
    question: "Türkiye'de 'taşkömürü' yataklarının en yoğun olduğu bölge neresidir?",
    options: ["Ege Bölgesi", "Zonguldak (Batı Karadeniz)", "Kayseri", "Sivas"],
    correct: 1,
    category: CATEGORIES.GEOGRAPHY.name,
    difficulty: "Kolay"
  },
  {
    id: 272,
    question: "Kuzey Amerika'nın en yüksek zirvesi hangisidir?",
    options: ["Mount Rainier", "Mount Logan", "Denali (Mount McKinley)", "Mount Whitney"],
    correct: 2,
    category: CATEGORIES.GEOGRAPHY.name,
    difficulty: "Zor"
  },
  {
    id: 273,
    question: "Dünya'nın eksen eğikliğinin sonucu olarak aşağıdakilerden hangisi gerçekleşir?",
    options: ["Günlük sıcaklık farkları", "Gece ve gündüzün birbirini takip etmesi", "Güneş ışınlarının düşme açısının yıl içinde değişmesi", "Meltem rüzgarlarının oluşması"],
    correct: 2,
    category: CATEGORIES.GEOGRAPHY.name,
    difficulty: "Orta"
  },
  {
    id: 274,
    question: "İtalya'da yer alan ünlü aktif volkan hangisidir?",
    options: ["Vezüv Dağı", "Fuji Dağı", "Krakatoa", "Etna Yanardağı"],
    correct: 3,
    category: CATEGORIES.GEOGRAPHY.name,
    difficulty: "Kolay"
  },
  {
    id: 275,
    question: "Büyük Okyanus'taki adaların büyük bir kısmını kapsayan bölgeye ne ad verilir?",
    options: ["Mikronezya", "Melanezya", "Polinezya", "Okyanusya"],
    correct: 3,
    category: CATEGORIES.GEOGRAPHY.name,
    difficulty: "Orta"
  },
  {
    id: 276,
    question: "Türkiye'nin hangi bölgesi 'doğu-batı' doğrultusunda en geniş yüzölçümüne sahiptir?",
    options: ["Ege Bölgesi", "Karadeniz Bölgesi", "İç Anadolu Bölgesi", "Doğu Anadolu Bölgesi"],
    correct: 1,
    category: CATEGORIES.GEOGRAPHY.name,
    difficulty: "Zor"
  },
  {
    id: 277,
    question: "Yüksek dağlık bölgelerde, kalıcı kar sınırının altında, kısa ot ve çalılardan oluşan bitki örtüsü nedir?",
    options: ["Tundra", "Tayga", "Alpin çayır (dağ çayırı)", "Makiler"],
    correct: 2,
    category: CATEGORIES.GEOGRAPHY.name,
    difficulty: "Orta"
  },
  {
    id: 278,
    question: "İstanbul'un koordinatları yaklaşık olarak hangi meridyen ve paralel aralığında yer alır?",
    options: ["26°D - 40°K", "29°D - 41°K", "36°D - 42°K", "30°D - 36°K"],
    correct: 1,
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
    options: ["Samyeli", "Poyraz", "Lodos", "Kıble"],
    correct: 2,
    category: CATEGORIES.GEOGRAPHY.name,
    difficulty: "Kolay"
  },
  {
    id: 281,
    question: "Kayaçların çözünmesi sonucu oluşan, kırmızı renkli topraklara ne ad verilir?",
    options: ["Laterit", "Terra Rossa", "Çernezyom", "Podzol"],
    correct: 1,
    category: CATEGORIES.GEOGRAPHY.name,
    difficulty: "Orta"
  },
  {
    id: 282,
    question: "Dünya'nın en büyük adası (kıta olmayan) hangisidir?",
    options: ["Borneo", "Yeni Gine", "Madagaskar", "Grönland"],
    correct: 3,
    category: CATEGORIES.GEOGRAPHY.name,
    difficulty: "Kolay"
  },
  {
    id: 283,
    question: "Aşağıdakilerden hangisi bir 'jeomorfolojik' (yer şekilleri) olay değildir?",
    options: ["Deprem", "Sel", "Volkanizma", "Tsunami"],
    correct: 1, // Sel bir hidrolojik, deprem bir tektonik olaydır. Jeomorfolojik olaylar yer şekillerinin oluşumuyla ilgilidir. Sel erozyonla yer şekli oluşturur. Deprem ise yerin hareketidir, jeomorfolojik bir süreç değil, sonucu jeomorfolojiktir. En net cevap Sel/Tsunami'dir. Tsunami seçeneği daha genel bir afettir.
    category: CATEGORIES.GEOGRAPHY.name,
    difficulty: "Zor"
  },
  {
    id: 284,
    question: "Türkiye'de kırsal yerleşmelerde ev yapımında volkanik tüf ve bazalt gibi malzemelerin yaygın olduğu bölge neresidir?",
    options: ["Karadeniz Bölgesi", "İç Anadolu (Kapadokya çevresi)", "Akdeniz Bölgesi", "Marmara Bölgesi"],
    correct: 1,
    category: CATEGORIES.GEOGRAPHY.name,
    difficulty: "Kolay"
  },
  {
    id: 285,
    question: "Ülkeler arasında, doğal kaynakların (su, petrol vb.) paylaşımı nedeniyle çıkan anlaşmazlıkları inceleyen coğrafya alt dalı hangisidir?",
    options: ["Ekonomik Coğrafya", "Siyasi Coğrafya", "Tarihi Coğrafya", "Kültürel Coğrafya"],
    correct: 1,
    category: CATEGORIES.GEOGRAPHY.name,
    difficulty: "Orta"
  },
  {
    id: 286,
    question: "Hangi iklim bölgesinde nüfus yoğunluğu sıcaklık ve nemin yüksekliği nedeniyle düşüktür?",
    options: ["Ekvatoral Bölge", "Akdeniz Bölgesi", "Karasal Bölge", "Muson Bölgesi"],
    correct: 0,
    category: CATEGORIES.GEOGRAPHY.name,
    difficulty: "Kolay"
  },
  {
    id: 287,
    question: "Türkiye'de 'yatay ve dikey yönde' en fazla göç alan ilimiz hangisidir?",
    options: ["Ankara", "İzmir", "İstanbul", "Antalya"],
    correct: 2,
    category: CATEGORIES.GEOGRAPHY.name,
    difficulty: "Kolay"
  },
  {
    id: 288,
    question: "Kuzey Afrika'da esen, sıcak ve kuru çöl rüzgarlarına verilen genel ad nedir?",
    options: ["Mistral", "Bora", "Sirokko (Sirocco)", "Hamsin"],
    correct: 2,
    category: CATEGORIES.GEOGRAPHY.name,
    difficulty: "Zor"
  },
  {
    id: 289,
    question: "Ege Bölgesi'nde dağların kıyıya dik uzanması sonucunda oluşan kıyı tipi hangisidir?",
    options: ["Ria", "Enine", "Boyuna", "Dalmaçya"],
    correct: 1,
    category: CATEGORIES.GEOGRAPHY.name,
    difficulty: "Kolay"
  },
  {
    id: 290,
    question: "Deniz seviyesinin 200 metrenin altında kalan, kıta sahanlığının dışındaki derin deniz bölgelerine ne ad verilir?",
    options: ["Kıta yamacı", "Abisal düzlük", "Kıta sahanlığı", "Okyanus hendeği"],
    correct: 1,
    category: CATEGORIES.GEOGRAPHY.name,
    difficulty: "Zor"
  },
  {
    id: 291,
    question: "İzmir, Adana ve Bursa'da ortak olarak görülen iklim tipi hangisidir?",
    options: ["Karasal", "Akdeniz", "Karadeniz", "Yarı kurak"],
    correct: 1,
    category: CATEGORIES.GEOGRAPHY.name,
    difficulty: "Kolay"
  },
  {
    id: 292,
    question: "Dünya üzerindeki en büyük tektonik plaka hangisidir?",
    options: ["Avrasya Plakası", "Afrika Plakası", "Pasifik Plakası", "Kuzey Amerika Plakası"],
    correct: 2,
    category: CATEGORIES.GEOGRAPHY.name,
    difficulty: "Orta"
  },
  {
    id: 293,
    question: "Atmosferdeki karbondioksit ve su buharının artışının sebep olduğu olay nedir?",
    options: ["Asit yağmurları", "Sera etkisi", "Ozon incelmesi", "Hava kirliliği"],
    correct: 1,
    category: CATEGORIES.GEOGRAPHY.name,
    difficulty: "Kolay"
  },
  {
    id: 294,
    question: "Aşağıdakilerden hangisi dağ oluşumu (orojenez) sonucu meydana gelmez?",
    options: ["Kıvrım dağları", "Kırık dağları", "Volkanik dağlar", "Antiklinal"],
    correct: 2,
    category: CATEGORIES.GEOGRAPHY.name,
    difficulty: "Orta"
  },
  {
    id: 295,
    question: "Avrupa'nın en uzun nehri olan Volga Nehri hangi denize dökülür?",
    options: ["Karadeniz", "Akdeniz", "Baltık Denizi", "Hazar Denizi"],
    correct: 3,
    category: CATEGORIES.GEOGRAPHY.name,
    difficulty: "Zor"
  },
  {
    id: 296,
    question: "İklim bilimi (Klimatoloji) coğrafyanın hangi ana dalına girer?",
    options: ["Beşeri Coğrafya", "Fiziki Coğrafya", "Ekonomik Coğrafya", "Bölgesel Coğrafya"],
    correct: 1,
    category: CATEGORIES.GEOGRAPHY.name,
    difficulty: "Kolay"
  },
  {
    id: 297,
    question: "Türkiye'de kış turizminin önemli merkezlerinden biri olan Uludağ hangi ildedir?",
    options: ["Erzurum", "Bursa", "Kayseri", "Sivas"],
    correct: 1,
    category: CATEGORIES.GEOGRAPHY.name,
    difficulty: "Kolay"
  },
  {
    id: 298,
    question: "Dünyada 'Tundra' ikliminin görüldüğü bölgelerde hakim olan bitki örtüsü tipi nedir?",
    options: ["Geniş yapraklı ormanlar", "Kaktüsler", "Yosun ve likenler", "Uzun otlar (savan)"],
    correct: 2,
    category: CATEGORIES.GEOGRAPHY.name,
    difficulty: "Orta"
  },
  {
    id: 299,
    question: "İzohips haritalarında, ok işareti ile gösterilen dışa dönük eğri, neyi temsil eder?",
    options: ["Tepe", "Vadi", "Çanak (Kapalı çukur)", "Sırt"],
    correct: 2,
    category: CATEGORIES.GEOGRAPHY.name,
    difficulty: "Zor"
  },
  {
    id: 300,
    question: "Türkiye'nin matematik konumunun sonucu olarak aşağıdakilerden hangisi yaşanmaz?",
    options: ["Dört mevsimin belirgin yaşanması", "Gölge boylarının hiçbir zaman sıfır olmaması", "Batıdan doğuya gidildikçe yerel saatin ileri olması", "Kutuplara yakın kuşakta yer alması"],
    correct: 0, // Dört mevsimin yaşanması (ılıman kuşakta yer alması) göreceli (özel) konumdur, matematik konum değil.
    category: CATEGORIES.GEOGRAPHY.name,
    difficulty: "Zor"
  },
  {
    id: 301,
    question: "Yer kabuğunu oluşturan levhaların hareket etmesini inceleyen bilim dalı nedir?",
    options: ["Jeomorfoloji", "Sismoloji", "Tektonik", "Klimatoloji"],
    correct: 2,
    category: "Coğrafya",
    difficulty: "Kolay"
  },
  {
    id: 302,
    question: "Ekvatoral iklimin tipik bitki örtüsü nedir?",
    options: ["Savanlar", "Tundra", "Kaktüsler", "Geniş Yapraklı Yağmur Ormanları"],
    correct: 3,
    category: "Coğrafya",
    difficulty: "Kolay"
  },
  {
    id: 303,
    question: "Bir akarsuyun yatağını derine doğru aşındırması sonucu oluşan dik yamaçlı derin vadiye ne ad verilir?",
    options: ["Menderes", "Delta", "Kanyon", "Falez"],
    correct: 2,
    category: "Coğrafya",
    difficulty: "Orta"
  },
  {
    id: 304,
    question: "Türkiye'de Akdeniz ikliminin görüldüğü bölgelerde tipik olan kısa boylu, sert yapraklı ağaççıklardan oluşan bitki topluluğu nedir?",
    options: ["Bozkır", "Maki", "Tayga", "Alpin Çayırlar"],
    correct: 1,
    category: "Coğrafya",
    difficulty: "Kolay"
  },
  {
    id: 305,
    question: "Dünya nüfusunun en yoğun olduğu kıta hangisidir?",
    options: ["Avrupa", "Afrika", "Asya", "Kuzey Amerika"],
    correct: 2,
    category: "Coğrafya",
    difficulty: "Kolay"
  },
  {
    id: 306,
    question: "Atmosferdeki su buharının yoğunlaşması sonucu oluşan ve yer yüzeyine yakın katmanlarda görülen yoğunlaşma ürünü nedir?",
    options: ["Dolu", "Sulu Kar", "Çiy", "Sis"],
    correct: 3,
    category: "Coğrafya",
    difficulty: "Orta"
  },
  {
    id: 307,
    question: "İki dağ sırası arasında yer alan, genellikle uzun ve çukur alçak araziye ne ad verilir?",
    options: ["Plato", "Ova", "Vadi", "Sırt"],
    correct: 2,
    category: "Coğrafya",
    difficulty: "Kolay"
  },
  {
    id: 308,
    question: "İnsanların yaşamlarını devam ettirmek için ihtiyaç duyduğu kaynakları tüketme hızını ifade eden çevresel gösterge nedir?",
    options: ["Ekolojik Denge", "Biyoçeşitlilik", "Karbon Ayak İzi", "Ekolojik Ayak İzi"],
    correct: 3,
    category: "Coğrafya",
    difficulty: "Zor"
  },
  {
    id: 309,
    question: "Türkiye'deki en uzun akarsu hangisidir (Tamamı Türkiye sınırları içinde olan)?",
    options: ["Fırat Nehri", "Dicle Nehri", "Kızılırmak", "Sakarya Nehri"],
    correct: 2,
    category: "Coğrafya",
    difficulty: "Kolay"
  },
  {
    id: 310,
    question: "Dünya'nın kendi ekseni etrafındaki dönüşü sonucu ortaya çıkan kuvvet nedir?",
    options: ["Santrifüj Kuvveti", "Yerçekimi Kuvveti", "Koriolis Kuvveti", "Gelgit Kuvveti"],
    correct: 2,
    category: "Coğrafya",
    difficulty: "Orta"
  },
  {
    id: 311,
    question: "Yıllık sıcaklık farkının en fazla olduğu iklim tipi hangisidir?",
    options: ["Ekvatoral İklim", "Akdeniz İklimi", "Okyanusal İklim", "Karasal İklim"],
    correct: 3,
    category: "Coğrafya",
    difficulty: "Kolay"
  },
  {
    id: 312,
    question: "Bir haritada iki nokta arasındaki gerçek uzaklığı bulmak için kullanılan ve haritanın küçültme oranını gösteren unsur nedir?",
    options: ["Lejant", "Ölçek", "Coğrafi Koordinat", "İzohips"],
    correct: 1,
    category: "Coğrafya",
    difficulty: "Kolay"
  },
  {
    id: 313,
    question: "Lav, kül ve gaz gibi materyallerin yeryüzüne püskürdüğü konik şekilli yükseltilere ne ad verilir?",
    options: ["Fay Hattı", "Kırık Dağ", "Volkan", "Sismik Bölge"],
    correct: 2,
    category: "Coğrafya",
    difficulty: "Kolay"
  },
  {
    id: 314,
    question: "Dünya üzerinde 0° meridyenine ne ad verilir?",
    options: ["Ekvator", "Yengeç Dönencesi", "Uluslararası Tarih Değiştirme Çizgisi", "Greenwich (Başlangıç) Meridyeni"],
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
    options: ["Akdeniz Bölgesi", "İç Anadolu Bölgesi", "Doğu Anadolu Bölgesi", "Karadeniz Bölgesi"],
    correct: 3,
    category: "Coğrafya",
    difficulty: "Kolay"
  },
  {
    id: 317,
    question: "Nüfusun ikiye katlanması için gereken süreyi gösteren, nüfus coğrafyasında kullanılan terim nedir?",
    options: ["Doğurganlık Oranı", "Bağımlı Nüfus Oranı", "Demografik Dönüşüm", "Nüfus Artış Hızı"],
    correct: 2,
    category: "Coğrafya",
    difficulty: "Orta"
  },
  {
    id: 318,
    question: "Bir bölgenin su dengesini, sıcaklığını ve nemini büyük ölçüde etkileyen, geniş alanda esen rüzgar sistemi nedir?",
    options: ["Fön Rüzgarı", "Meltem Rüzgarı", "Kasırga", "Muson Rüzgarları"],
    correct: 3,
    category: "Coğrafya",
    difficulty: "Kolay"
  },
  {
    id: 319,
    question: "Göllerin sularını denizlere ulaştıran doğal kanala ne ad verilir?",
    options: ["Boğaz", "Körfez", "Lagün", "Gider (Boşalma Kanalı)"],
    correct: 3,
    category: "Coğrafya",
    difficulty: "Orta"
  },
  {
    id: 320,
    question: "Enlem dereceleri arasındaki uzaklık (kilometre cinsinden) hangi paralelde en fazladır?",
    options: ["Ekvator", "Kutupta", "30° Enlemi", "Tüm Enlemlerde Eşittir"],
    correct: 3,
    category: "Coğrafya",
    difficulty: "Orta"
  },
  {
    id: 321,
    question: "Deniz seviyesinden yüksekte kalan, akarsular tarafından derin vadilerle yarılmış geniş düzlüklere ne ad verilir?",
    options: ["Ova", "Delta", "Plato", "Graben"],
    correct: 2,
    category: "Coğrafya",
    difficulty: "Kolay"
  },
  {
    id: 322,
    question: "Türkiye'nin matematik (mutlak) konumu, hangi enlem ve meridyenler arasında yer aldığını belirtir?",
    options: ["26-45 Doğu, 36-42 Kuzey", "26-45 Kuzey, 36-42 Doğu", "36-42 Kuzey, 26-45 Doğu", "36-42 Güney, 26-45 Batı"],
    correct: 0,
    category: "Coğrafya",
    difficulty: "Kolay"
  },
  {
    id: 323,
    question: "Yer kabuğundaki derin çatlaklar boyunca meydana gelen düşey veya yatay hareketlerle oluşan dağ sistemleri nedir?",
    options: ["Kıvrım Dağları", "Volkanik Dağlar", "Kırık Dağlar (Horst-Graben)", "Deprem Fayları"],
    correct: 2,
    category: "Coğrafya",
    difficulty: "Kolay"
  },
  {
    id: 324,
    question: "Erozyonun en az olduğu, toprağın yerinde kaldığı ve genellikle eğimin az olduğu alanlarda görülen tarım şekli nedir?",
    options: ["Nadas Sistemi", "Modern Tarım", "Eğimli Yamaç Tarımı", "Basamaklama (Teraslama) Tarımı"],
    correct: 3,
    category: "Coğrafya",
    difficulty: "Orta"
  },
  {
    id: 325,
    question: "Sıcak ve soğuk okyanus akıntılarının karşılaştığı yerler, balıkçılık açısından neden zengindir?",
    options: ["Daha az avlanma yapıldığı için", "Akıntıların balıkları bir araya getirmesi", "Buzulların erimesiyle besin gelmesi", "Plankton (deniz canlısı besini) miktarının artması"],
    correct: 3,
    category: "Coğrafya",
    difficulty: "Orta"
  },
  {
    id: 326,
    question: "Denizden esen rüzgarın, dağ yamacına çarpıp yükselmesi ve yoğunlaşması sonucu oluşan yağış tipi nedir?",
    options: ["Konveksiyonel (Yükselim) Yağış", "Orografik (Yamaç) Yağış", "Cephesel Yağış", "Çiy Yağışı"],
    correct: 1,
    category: "Coğrafya",
    difficulty: "Kolay"
  },
  {
    id: 327,
    question: "Dünya'nın şekli nedeniyle Ekvator'dan kutuplara doğru gidildikçe sıcaklıkların azalması hangi faktöre bağlıdır?",
    options: ["Nemlilik", "Yükselti", "Güneş Işınlarının Geliş Açısı", "Kara ve Deniz Dağılışı"],
    correct: 2,
    category: "Coğrafya",
    difficulty: "Kolay"
  },
  {
    id: 328,
    question: "Bir bölgede yaşayan ve 65 yaş üstü olan nüfusun toplam nüfusa oranı hangi demografik yapının göstergesidir?",
    options: ["Çocuk Nüfus", "Genç Nüfus", "Yaşlı Bağımlı Nüfus", "Çalışan Nüfus"],
    correct: 2,
    category: "Coğrafya",
    difficulty: "Kolay"
  },
  {
    id: 329,
    question: "Bir akarsuyun denize döküldüğü yerde, akıntıların zayıf olması ve gelgit etkisinin az olması durumunda oluşan yeryüzü şekli nedir?",
    options: ["Haliç", "Falez", "Delta Ovası", "Kıyı Ovası"],
    correct: 2,
    category: "Coğrafya",
    difficulty: "Orta"
  },
  {
    id: 330,
    question: "Üzerindeki buzul kütlesinin erimesi sonucu oluşan çukurluklara dolan sularla oluşan göllere ne ad verilir?",
    options: ["Tektonik Göller", "Volkanik Göller", "Set Gölleri", "Buzul Gölleri (Sirk Gölleri)"],
    correct: 3,
    category: "Coğrafya",
    difficulty: "Kolay"
  },
  {
    id: 331,
    question: "Dünya'nın iç yapısında, manto ile çekirdek arasında yer alan katman hangisidir?",
    options: ["Sial", "Sima", "Dış Çekirdek", "Alt Manto"],
    correct: 2,
    category: "Coğrafya",
    difficulty: "Orta"
  },
  {
    id: 332,
    question: "Çöl ikliminin en tipik özelliği nedir?",
    options: ["Yüksek yıllık yağış miktarı", "Düşük günlük sıcaklık farkı", "Yüksek yıllık sıcaklık ortalaması", "Yüksek günlük sıcaklık farkı"],
    correct: 3,
    category: "Coğrafya",
    difficulty: "Kolay"
  },
  {
    id: 333,
    question: "Bir bölgenin nüfus dağılışını en çok etkileyen fiziki coğrafya faktörü nedir?",
    options: ["Yeraltı kaynakları", "İklim ve Yer Şekilleri", "Ulaşım imkanları", "Sanayileşme"],
    correct: 1,
    category: "Coğrafya",
    difficulty: "Kolay"
  },
  {
    id: 334,
    question: "Karstik arazilerde (kireçtaşı gibi eriyebilen kayaçlarda) yer altı sularının çözünme ve çökelme ile oluşturduğu mağara içindeki sarkıt ve dikitlere ne ad verilir?",
    options: ["Traverten", "Dolin", "Obruk", "Mağara Oluşumları (Speleotemler)"],
    correct: 3,
    category: "Coğrafya",
    difficulty: "Orta"
  },
  {
    id: 335,
    question: "Ekvator çevresindeki dinamik yüksek basınç alanlarından, 60° enlemlerindeki dinamik alçak basınç alanlarına doğru esen sürekli rüzgarlar nedir?",
    options: ["Alize Rüzgarları", "Batı Rüzgarları", "Kutup Rüzgarları", "Muson Rüzgarları"],
    correct: 1,
    category: "Coğrafya",
    difficulty: "Zor"
  },
  {
    id: 336,
    question: "Haritalarda aynı yükseltiye sahip noktaların birleştirilmesiyle elde edilen eğrilere ne ad verilir?",
    options: ["İzoterm", "İzobar", "İzohips", "İzoyet"],
    correct: 2,
    category: "Coğrafya",
    difficulty: "Kolay"
  },
  {
    id: 337,
    question: "Türkiye'nin en büyük gölü hangisidir?",
    options: ["Tuz Gölü", "Beyşehir Gölü", "Eğirdir Gölü", "Van Gölü"],
    correct: 3,
    category: "Coğrafya",
    difficulty: "Kolay"
  },
  {
    id: 338,
    question: "Tek bir ürünün uzmanlaşmış bir şekilde yetiştirildiği, genellikle büyük ölçekli ve ihracata yönelik tarım şekli nedir?",
    options: ["Ekstansif Tarım", "İntansif Tarım", "Nadas Sistemi", "Plantasyon (Monokültür) Tarımı"],
    correct: 3,
    category: "Coğrafya",
    difficulty: "Orta"
  },
  {
    id: 339,
    question: "Dünya'nın Güneş etrafındaki elips şeklindeki yörüngesi sonucu oluşan hareket nedir?",
    options: ["Günlük Hareket", "Eksen Eğikliği", "Yıllık Hareket (Yörünge Hareketi)", "Presesyon"],
    correct: 2,
    category: "Coğrafya",
    difficulty: "Kolay"
  },
  {
    id: 340,
    question: "Okyanus ve deniz tabanlarında meydana gelen, büyük su kütlelerinin yer değiştirmesiyle oluşan dev dalgalara ne ad verilir?",
    options: ["Medcezir", "Fırtına Dalgaları", "Tsunami", "Sismik Akıntı"],
    correct: 2,
    category: "Coğrafya",
    difficulty: "Kolay"
  },
  {
    id: 341,
    question: "Birincil ekonomik faaliyetler (sektör) içinde yer alan ve doğadan doğrudan elde edilen ürünler arasında hangisi bulunmaz?",
    options: ["Tarım", "Ormancılık", "Balıkçılık", "İnşaat"],
    correct: 3,
    category: "Coğrafya",
    difficulty: "Kolay"
  },
  {
    id: 342,
    question: "Ekvator'dan kutuplara doğru gidildikçe değişen, canlı türlerinin çeşitliliğini ifade eden coğrafi kavram nedir?",
    options: ["Ekosistem", "Biyoçeşitlilik", "Klimatoloji", "Biyom"],
    correct: 1,
    category: "Coğrafya",
    difficulty: "Kolay"
  },
  {
    id: 343,
    question: "Bir ülkenin nüfus piramidinde tabanın geniş olması neyi ifade eder?",
    options: ["Yaşlı nüfusun fazla olduğunu", "Ortalama yaşam süresinin uzun olduğunu", "Doğum oranının yüksek olduğunu", "Göçlerin yoğun olduğunu"],
    correct: 2,
    category: "Coğrafya",
    difficulty: "Kolay"
  },
  {
    id: 344,
    question: "Yıl boyunca sıcaklıkların düşük olduğu ve ağaç yetişmesine izin vermeyen, kalıcı donmuş toprakların (permafrost) bulunduğu iklim tipi nedir?",
    options: ["Savan İklimi", "Muson İklimi", "Tundra İklimi", "Kutup İklimi"],
    correct: 2,
    category: "Coğrafya",
    difficulty: "Kolay"
  },
  {
    id: 345,
    question: "Atlas Okyanusu'ndan başlayıp Avrupa kıtası çevresinde ısıtıcı etki yapan sıcak su akıntısı nedir?",
    options: ["Labrador Akıntısı", "Peru Akıntısı", "Alaska Akıntısı", "Gulf Stream (Körfez) Akıntısı"],
    correct: 3,
    category: "Coğrafya",
    difficulty: "Orta"
  },
  {
    id: 346,
    question: "Fay hattı boyunca meydana gelen, yer kabuğunun bloklar halinde alçalmasıyla oluşan çukur araziye ne ad verilir?",
    options: ["Horst", "Graben", "Sırt", "Antiklinal"],
    correct: 1,
    category: "Coğrafya",
    difficulty: "Orta"
  },
  {
    id: 347,
    question: "Bir bölgede, tarımsal üretimin yoğun olarak yapılabilmesi için uygun olan ve verimli alüvyal topraklardan oluşan yeryüzü şekli nedir?",
    options: ["Kanyon", "Plato", "Delta Ovası", "Vadi"],
    correct: 2,
    category: "Coğrafya",
    difficulty: "Kolay"
  },
  {
    id: 348,
    question: "Dünya'nın Eksen Eğikliği'nin (23° 27') sonuçlarından biri aşağıdakilerden hangisidir?",
    options: ["Gece ve gündüz sürelerinin eşit olması", "Gölge boyunun gün içinde değişmesi", "Mevsimlerin oluşması", "Okyanus akıntılarının oluşması"],
    correct: 2,
    category: "Coğrafya",
    difficulty: "Kolay"
  },
  {
    id: 349,
    question: "Birleşmiş Milletler tarafından kabul edilen, yaşam kalitesini ölçmek için kullanılan ve eğitim, sağlık, gelir seviyesi gibi faktörleri içeren endeks nedir?",
    options: ["Gayri Safi Yurt İçi Hasıla (GSYİH)", "Tüketici Fiyat Endeksi (TÜFE)", "İnsani Gelişme Endeksi (İGE)", "Gini Katsayısı"],
    correct: 2,
    category: "Coğrafya",
    difficulty: "Orta"
  },
  {
    id: 350,
    question: "Türkiye'de rüzgar erozyonunun en etkili olduğu bölge hangisidir?",
    options: ["Karadeniz Bölgesi", "Ege Bölgesi", "İç Anadolu Bölgesi", "Marmara Bölgesi"],
    correct: 2,
    category: "Coğrafya",
    difficulty: "Kolay"
  },
  {
    id: 351,
    question: "Endüstriyel ürünlerin üretildiği, fabrikaların ve imalat sektörünün yer aldığı ekonomik faaliyet alanı nedir?",
    options: ["Birincil Sektör", "İkincil Sektör (Sanayi)", "Üçüncül Sektör (Hizmet)", "Dördüncül Sektör"],
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
    options: ["Biyoçeşitlilik", "Klimatoloji", "Ekosistem", "Biyom"],
    correct: 2,
    category: "Coğrafya",
    difficulty: "Kolay"
  },
  {
    id: 355,
    question: "Yer kabuğunun en dış katmanına ne ad verilir?",
    options: ["Manto", "Dış Çekirdek", "İç Çekirdek", "Litosfer (Yer Kabuğu)"],
    correct: 3,
    category: "Coğrafya",
    difficulty: "Kolay"
  },
  {
    id: 356,
    question: "Güneş ışınlarının bir noktaya en dik (90°) geldiği enlemler arasında yer alan bölgeye ne ad verilir?",
    options: ["Kutup Kuşağı", "Orta Kuşak", "Ekvator Kuşağı (Tropikal Kuşak)", "Ilıman Kuşak"],
    correct: 2,
    category: "Coğrafya",
    difficulty: "Kolay"
  },
  {
    id: 357,
    question: "Büyük bir su kütlesinin (göl veya deniz) biriktirdiği malzemeyle oluşan kıyı setlerine ne ad verilir?",
    options: ["Falez", "Tombolo", "Haliç", "Lagün (Kıyı Set Gölü)"],
    correct: 3,
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
    options: ["Ozon Seyrelmesi", "Asit Yağmurları", "Şehir Isı Adası Etkisi", "Çarpık Kentleşme"],
    correct: 3,
    category: "Coğrafya",
    difficulty: "Kolay"
  },
  {
    id: 360,
    question: "Türkiye'de nüfusun en az olduğu (seyrek) bölgeler arasında aşağıdakilerden hangisi yer almaz?",
    options: ["Tuz Gölü Çevresi", "Doğu Karadeniz'in İç Kesimleri", "Menteşe Yöresi", "Çatalca-Kocaeli Bölümü"],
    correct: 3,
    category: "Coğrafya",
    difficulty: "Kolay"
  },
  {
    id: 361,
    question: "Yer kabuğunun derinliklerinde, yüksek sıcaklık ve basınç altında başkalaşım geçirerek oluşan kayaç türü nedir?",
    options: ["Tortul (Sedimanter) Kayaçlar", "Püskürük (Volkanik) Kayaçlar", "Başkalaşım (Metamorfik) Kayaçlar", "Organik Kayaçlar"],
    correct: 2,
    category: "Coğrafya",
    difficulty: "Orta"
  },
  {
    id: 362,
    question: "Kutup bölgelerinde, yılın büyük bir kısmında buzla kaplı olan okyanus nedir?",
    options: ["Pasifik Okyanusu", "Atlas Okyanusu", "Hint Okyanusu", "Arktik Okyanusu"],
    correct: 3,
    category: "Coğrafya",
    difficulty: "Kolay"
  },
  {
    id: 363,
    question: "Bir ülkenin dış ticaretinde ithalatın ihracattan fazla olması durumuna ne ad verilir?",
    options: ["Dış Ticaret Fazlası", "Dış Ticaret Açığı", "Gayri Safi Milli Hasıla", "Ödemeler Dengesi"],
    correct: 1,
    category: "Coğrafya",
    difficulty: "Kolay"
  },
  {
    id: 364,
    question: "Yeryüzünde, sıcak ve nemli havanın yükselip soğumasıyla oluşan yağış tipi nedir?",
    options: ["Orografik Yağış", "Cephesel Yağış", "Konveksiyonel (Yükselim) Yağış", "Kriyojenik Yağış"],
    correct: 2,
    category: "Coğrafya",
    difficulty: "Kolay"
  },
  {
    id: 365,
    question: "Doğu ve Batı yarım küreleri ayıran büyük daireye ne ad verilir?",
    options: ["Ekvator", "Yengeç Dönencesi", "Başlangıç Meridyeni", "Kutup Dairesi"],
    correct: 2,
    category: "Coğrafya",
    difficulty: "Kolay"
  },
  {
    id: 366,
    question: "Bir bölgenin yalnızca karasal özellikleri taşıyan, deniz etkisinden uzak iklim tipine ne ad verilir?",
    options: ["Okyanusal İklim", "Akdeniz İklimi", "Karasal İklim", "Subtropikal İklim"],
    correct: 2,
    category: "Coğrafya",
    difficulty: "Kolay"
  },
  {
    id: 367,
    question: "Sanayi ve hizmet sektörlerinin geliştiği, nüfusun büyük bir kısmının şehirlerde yaşadığı ülkeler hangi kategoriye girer?",
    options: ["Geri Kalmış Ülkeler", "Gelişmekte Olan Ülkeler", "Gelişmiş Ülkeler", "Tarım Ülkeleri"],
    correct: 2,
    category: "Coğrafya",
    difficulty: "Kolay"
  },
  {
    id: 368,
    question: "Ege Bölgesi'nde kıyıya dik uzanan dağlar arasında oluşan alçak alanlara ne ad verilir?",
    options: ["Horst", "Graben", "Plato", "Vadi"],
    correct: 1,
    category: "Coğrafya",
    difficulty: "Kolay"
  },
  {
    id: 369,
    question: "Suların akış hızı azaldığında, taşıdığı alüvyonları biriktirerek denize doğru ilerleyen üçgen şeklindeki düzlüğe ne ad verilir?",
    options: ["Tombolo", "Falez", "Delta", "Haliç"],
    correct: 2,
    category: "Coğrafya",
    difficulty: "Kolay"
  },
  {
    id: 370,
    question: "Dünya'nın iç çekirdeğinin tahmin edilen bileşimi nedir?",
    options: ["Silisyum ve Alüminyum", "Silisyum ve Magnezyum", "Kükürt ve Oksijen", "Demir ve Nikel"],
    correct: 3,
    category: "Coğrafya",
    difficulty: "Orta"
  },
  {
    id: 371,
    question: "Doğal yaşamın büyük ölçüde bozulduğu, sanayi tesisleri ve yoğun insan yerleşimi bulunan alanlara ne ad verilir?",
    options: ["Biyosfer", "Litosfer", "Antroposfer", "Ekosistem"],
    correct: 2,
    category: "Coğrafya",
    difficulty: "Zor"
  },
  {
    id: 372,
    question: "Büyük çaplı buz kütlelerinin, yer şekillerini aşındırması ve taşıması sonucu oluşan yeryüzü şekilleri hangi kuvvete bağlıdır?",
    options: ["Volkanizma", "Akarsu Aşındırması", "Buzul Aşındırması", "Rüzgar Aşındırması"],
    correct: 2,
    category: "Coğrafya",
    difficulty: "Kolay"
  },
  {
    id: 373,
    question: "Türkiye'de, ılıman denizel iklimin etkisiyle dört mevsim yağış alan bölge (yerel farklılıklar hariç) hangisidir?",
    options: ["Ege Bölgesi", "Akdeniz Bölgesi", "Güneydoğu Anadolu Bölgesi", "Karadeniz Bölgesi"],
    correct: 3,
    category: "Coğrafya",
    difficulty: "Kolay"
  },
  {
    id: 374,
    question: "Bir haritada izohips eğrilerinin birbirine çok yakın olması ne anlama gelir?",
    options: ["Eğimin az olduğunu", "Eğimin çok olduğunu", "Düz alan olduğunu", "Akarsu yatağı olduğunu"],
    correct: 1,
    category: "Coğrafya",
    difficulty: "Kolay"
  },
  {
    id: 375,
    question: "Ekvatoral bölgede, yıl boyunca yüksek sıcaklık ve yağışın olduğu iklim tipi için kullanılan diğer bir isim nedir?",
    options: ["Tundra İklimi", "Subtropikal İklim", "Savan İklimi", "Tropikal Yağmur Ormanı İklimi"],
    correct: 3,
    category: "Coğrafya",
    difficulty: "Kolay"
  },
  {
    id: 376,
    question: "Kıyı bölgelerinde, dağların kıyıya paralel uzanması sonucu oluşan dik yamaçlı kıyı şekillerine ne ad verilir?",
    options: ["Lagün", "Tombolo", "Falez", "Haliç"],
    correct: 2,
    category: "Coğrafya",
    difficulty: "Kolay"
  },
  {
    id: 377,
    question: "Nüfusun hızla artması, kırsal alandan kentsel alana göç ve kentlerin büyümesi olayı nedir?",
    options: ["Demografik Dönüşüm", "Şehirleşme (Urbanizasyon)", "Nüfus Patlaması", "Metropolleşme"],
    correct: 1,
    category: "Coğrafya",
    difficulty: "Kolay"
  },
  {
    id: 378,
    question: "Türkiye'deki genç volkanik dağlar hangi bölgede yoğunlaşmıştır?",
    options: ["Karadeniz", "Ege", "Marmara", "Doğu Anadolu"],
    correct: 3,
    category: "Coğrafya",
    difficulty: "Orta"
  },
  {
    id: 379,
    question: "Okyanuslarda ve büyük denizlerde, Ay ve Güneş'in çekim kuvveti nedeniyle oluşan periyodik su seviyesi değişimine ne ad verilir?",
    options: ["Okyanus Akıntısı", "Gelgit (Medcezir)", "Tsunami", "Sismik Akıntı"],
    correct: 1,
    category: "Coğrafya",
    difficulty: "Kolay"
  },
  {
    id: 380,
    question: "Hizmet sektörünü (eğitim, sağlık, ulaşım vb.) kapsayan ekonomik faaliyet alanı nedir?",
    options: ["Birincil Sektör", "İkincil Sektör", "Üçüncül Sektör", "Dördüncül Sektör"],
    correct: 2,
    category: "Coğrafya",
    difficulty: "Kolay"
  },
  {
    id: 381,
    question: "Bir bölgede toprak ve bitki örtüsünün, su ve rüzgar gibi etkenlerle aşınması ve taşınması olayı nedir?",
    options: ["Taşınma", "Toprak Kayması", "Erozyon", "Deprem"],
    correct: 2,
    category: "Coğrafya",
    difficulty: "Kolay"
  },
  {
    id: 382,
    question: "Yerel saat farklarının hesaplanmasında kullanılan temel coğrafi çizgi nedir?",
    options: ["Ekvator", "Paralel", "Meridyen", "Dönence"],
    correct: 2,
    category: "Coğrafya",
    difficulty: "Kolay"
  },
  {
    id: 383,
    question: "Güneydoğu Asya'da yaz aylarında şiddetli yağışlara neden olan ve tarım için hayati öneme sahip rüzgarlar nedir?",
    options: ["Alize Rüzgarları", "Batı Rüzgarları", "Muson Rüzgarları", "Fön Rüzgarı"],
    correct: 2,
    category: "Coğrafya",
    difficulty: "Kolay"
  },
  {
    id: 384,
    question: "Bir ülkede doğum oranlarının düşmesine ve yaşlı nüfusun artmasına neden olan temel sosyal faktör nedir?",
    options: ["İşsizlik", "Eğitim seviyesinin yükselmesi", "Gıda kıtlığı", "Savaşlar"],
    correct: 1,
    category: "Coğrafya",
    difficulty: "Kolay"
  },
  {
    id: 385,
    question: "Türkiye'nin en uzun kıyı şeridine sahip denizi hangisidir?",
    options: ["Karadeniz", "Akdeniz", "Ege Denizi", "Marmara Denizi"],
    correct: 2,
    category: "Coğrafya",
    difficulty: "Kolay"
  },
  {
    id: 386,
    question: "Yer kabuğundaki büyük bir alçalma çukurunun suyla dolması sonucu oluşan göl türü nedir?",
    options: ["Volkanik Göller", "Tektonik Göller", "Set Gölleri", "Buzul Gölleri"],
    correct: 1,
    category: "Coğrafya",
    difficulty: "Kolay"
  },
  {
    id: 387,
    question: "İzohips haritalarında, bir akarsuyun iki farklı eğriden geçmesi durumunda, vadi şeklinin 'V' harfini izohipsin ters yönüne çevirmesi ne anlama gelir?",
    options: ["Akarsu yatağının derin olduğu", "Akarsuyun yatağını doldurduğu", "Eğimin az olduğu", "Sırt hattı olduğu"],
    correct: 1,
    category: "Coğrafya",
    difficulty: "Zor"
  },
  {
    id: 388,
    question: "Kışın ılık ve yağışlı, yazın sıcak ve kurak geçtiği iklim tipi nedir?",
    options: ["Okyanusal İklim", "Savan İklimi", "Akdeniz İklimi", "Sert Karasal İklim"],
    correct: 2,
    category: "Coğrafya",
    difficulty: "Kolay"
  },
  {
    id: 389,
    question: "Fay hattı üzerinde yer alan, yeraltı suyunun buharlaşıp tazyikle yeryüzüne çıktığı sıcak su kaynağı nedir?",
    options: ["Kaplıca", "Madensuyu", "Gayzer", "Artezyen"],
    correct: 2,
    category: "Coğrafya",
    difficulty: "Orta"
  },
  {
    id: 390,
    question: "Birleşmiş Milletler'e göre, dünya nüfusunun yaklaşık kaçta kaçı kentlerde yaşamaktadır?",
    options: ["%30'dan az", "%40 civarı", "%55'ten fazla", "%75'ten fazla"],
    correct: 2,
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
    options: ["Daha fazladır", "Daha azdır", "Eşittir", "Sadece kütleyle ilgilidir"],
    correct: 1,
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
    options: ["Oğlak Dönencesi", "Ekvator", "Yengeç Dönencesi", "Kuzey Kutup Dairesi"],
    correct: 2,
    category: "Coğrafya",
    difficulty: "Kolay"
  },
  {
    id: 395,
    question: "Yerleşmelerin, akarsu veya yol boyunca, uzun ve şerit şeklinde geliştiği yerleşme tipi nedir?",
    options: ["Dağınık Yerleşme", "Kırsal Yerleşme", "Dairesel Yerleşme", "Çizgisel Yerleşme"],
    correct: 3,
    category: "Coğrafya",
    difficulty: "Kolay"
  },
  {
    id: 396,
    question: "Hazar Denizi, coğrafi olarak hangi tür su kütlesidir?",
    options: ["Körfez", "Deniz", "Okyanus", "Göl"],
    correct: 3,
    category: "Coğrafya",
    difficulty: "Kolay"
  },
  {
    id: 397,
    question: "Yüksek dağlık bölgelerde, sıcak havanın dağın yamaçlarından aşağıya doğru inerken sıcaklığını artırmasıyla oluşan rüzgar nedir?",
    options: ["Alize Rüzgarı", "Bora Rüzgarı", "Meltem Rüzgarı", "Fön Rüzgarı"],
    correct: 3,
    category: "Coğrafya",
    difficulty: "Kolay"
  },
  {
    id: 398,
    question: "Bir bölgenin jeolojik yapısını, oluşum sürecini ve kayaç türlerini inceleyen coğrafya alt dalı nedir?",
    options: ["Hidrografya", "Jeomorfoloji", "Kartografya", "Sismoloji"],
    correct: 1,
    category: "Coğrafya",
    difficulty: "Orta"
  },
  {
    id: 399,
    question: "Güneydoğu Anadolu Bölgesi'nde, yaz kuraklığı ve yüksek sıcaklık nedeniyle oluşan en yaygın doğal bitki örtüsü nedir?",
    options: ["Geniş Yapraklı Orman", "Maki", "Bozkır (Step)", "Tayga"],
    correct: 2,
    category: "Coğrafya",
    difficulty: "Kolay"
  },
  {
    id: 400,
    question: "Okyanuslar ve denizlerde suyun tuzluluk oranı Ekvator'dan kutuplara doğru gidildikçe genellikle nasıl değişir?",
    options: ["Sürekli artar", "Sürekli azalır", "Önce artar sonra azalır", "Değişmez"],
    correct: 2,
    category: "Coğrafya",
    difficulty: "Orta"
  },

  // ==================== BİLİM ====================
  {
    id: 401,
    question: "Suyun kimyasal formülü nedir?",
    options: ["CO2", "O2", "H2O", "NaCl"],
    correct: 2,
    category: CATEGORIES.SCIENCE.name,
    difficulty: "Kolay"
  },
  {
    id: 402,
    question: "Yerçekimi kuvvetini tanımlayan bilim insanı kimdir?",
    options: ["Albert Einstein", "Galileo Galilei", "Isaac Newton", "Nikola Tesla"],
    correct: 2,
    category: CATEGORIES.SCIENCE.name,
    difficulty: "Kolay"
  },
  {
    id: 403,
    question: "Canlıların temel yapı birimi nedir?",
    options: ["Molekül", "Atom", "Hücre", "Organ"],
    correct: 2,
    category: CATEGORIES.SCIENCE.name,
    difficulty: "Kolay"
  },
  {
    id: 404,
    question: "Elektrik akımının birimi nedir?",
    options: ["Volt", "Ohm", "Amper", "Watt"],
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
    options: ["Yoğunluk", "Erime noktası", "Faz (Hal)", "Hacim"],
    correct: 2,
    category: CATEGORIES.SCIENCE.name,
    difficulty: "Orta"
  },
  {
    id: 407,
    question: "DNA'nın tam adı nedir?",
    options: ["Deoksiribonükleik Asit", "Ribonükleik Asit", "Amino Asit", "Adenozin Trifosfat"],
    correct: 0,
    category: CATEGORIES.SCIENCE.name,
    difficulty: "Orta"
  },
  {
    id: 408,
    question: "Sesin boşlukta yayılıp yayılmadığı hakkında hangi ifade doğrudur?",
    options: ["Yalnızca çok hızlı yayılır.", "Yayılmaz, bir ortama ihtiyacı vardır.", "Radyo dalgaları gibi yayılır.", "Sadece ısı iletkenliği olan ortamlarda yayılır."],
    correct: 1,
    category: CATEGORIES.SCIENCE.name,
    difficulty: "Kolay"
  },
  {
    id: 409,
    question: "Fotosentez sürecinde bitkiler hangi gazı açığa çıkarır?",
    options: ["Karbondioksit", "Azot", "Oksijen", "Metan"],
    correct: 2,
    category: CATEGORIES.SCIENCE.name,
    difficulty: "Kolay"
  },
  {
    id: 410,
    question: "Bir atomun çekirdeğinde hangi temel parçacıklar bulunur?",
    options: ["Elektron ve Nötron", "Proton ve Elektron", "Proton ve Nötron", "Yalnızca Proton"],
    correct: 2,
    category: CATEGORIES.SCIENCE.name,
    difficulty: "Orta"
  },
  {
    id: 411,
    question: "Işığın boşluktaki hızı yaklaşık olarak ne kadardır?",
    options: ["300 km/s", "340 m/s", "300.000 km/s", "3.000.000 km/s"],
    correct: 2,
    category: CATEGORIES.SCIENCE.name,
    difficulty: "Orta"
  },
  {
    id: 412,
    question: "Evrenin genişlediği teorisi hangi gözlemle desteklenmiştir?",
    options: ["Kara deliklerin varlığı", "Gök cisimlerinin sıcaklıkları", "Kırmızıya Kayma (Redshift)", "Siyah cisim ışıması"],
    correct: 2,
    category: CATEGORIES.SCIENCE.name,
    difficulty: "Zor"
  },
  {
    id: 413,
    question: "pH değeri 7'den küçük olan maddeler ne olarak adlandırılır?",
    options: ["Baz", "Nötr", "Asit", "Tuz"],
    correct: 2,
    category: CATEGORIES.SCIENCE.name,
    difficulty: "Kolay"
  },
  {
    id: 414,
    question: "İnsan vücudundaki en büyük organ hangisidir?",
    options: ["Kalp", "Beyin", "Karaciğer", "Deri"],
    correct: 3,
    category: CATEGORIES.SCIENCE.name,
    difficulty: "Orta"
  },
  {
    id: 415,
    question: "Hangi kuvvet türü, atom çekirdeğindeki protonları bir arada tutar?",
    options: ["Zayıf Nükleer Kuvvet", "Elektromanyetik Kuvvet", "Güçlü Nükleer Kuvvet", "Yerçekimi Kuvveti"],
    correct: 2,
    category: CATEGORIES.SCIENCE.name,
    difficulty: "Zor"
  },
  {
    id: 416,
    question: "Virüslerin, bakterilerden temel farkı nedir?",
    options: ["DNA içermemeleri", "Yalnızca oksijensiz ortamda yaşamaları", "Konak hücre olmadan çoğalamamaları", "Daha büyük olmaları"],
    correct: 2,
    category: CATEGORIES.SCIENCE.name,
    difficulty: "Orta"
  },
  {
    id: 417,
    question: "Ohm Yasası temel olarak hangi fiziksel büyüklükler arasındaki ilişkiyi açıklar?",
    options: ["Kuvvet, Kütle, İvme", "Basınç, Hacim, Sıcaklık", "Voltaj, Akım, Direnç", "Enerji, Güç, Zaman"],
    correct: 2,
    category: CATEGORIES.SCIENCE.name,
    difficulty: "Kolay"
  },
  {
    id: 418,
    question: "Metabolizmanın hızını ve vücut sıcaklığını düzenleyen hormon hangisidir?",
    options: ["İnsülin", "Tiroksin", "Adrenalin", "Östrojen"],
    correct: 1,
    category: CATEGORIES.SCIENCE.name,
    difficulty: "Zor"
  },
  {
    id: 419,
    question: "Termodinamiğin birinci yasası, enerjinin hangi özelliğini ifade eder?",
    options: ["Enerjinin yok edilemezliğini", "Enerjinin korunumunu", "Entropi artışını", "Enerjinin hızını"],
    correct: 1,
    category: CATEGORIES.SCIENCE.name,
    difficulty: "Orta"
  },
  {
    id: 420,
    question: "Periyodik tabloda, aynı dikey sütunda (grupta) yer alan elementlerin ortak özelliği nedir?",
    options: ["Aynı atom kütlesine sahip olmaları", "Aynı sayıda protona sahip olmaları", "Aynı sayıda valans (değerlik) elektronuna sahip olmaları", "Aynı yoğunluğa sahip olmaları"],
    correct: 2,
    category: CATEGORIES.SCIENCE.name,
    difficulty: "Orta"
  },
  {
    id: 421,
    question: "Kütle çekim dalgalarının varlığını öngören teori hangisidir?",
    options: ["Özel Görelilik Teorisi", "Kuantum Mekaniği", "Genel Görelilik Teorisi", "Sicim Teorisi"],
    correct: 2,
    category: CATEGORIES.SCIENCE.name,
    difficulty: "Zor"
  },
  {
    id: 422,
    question: "Hücre zarından küçük moleküllerin ATP harcamadan geçişine ne ad verilir?",
    options: ["Aktif Taşıma", "Endositoz", "Ekzositoz", "Basit Difüzyon"],
    correct: 3,
    category: CATEGORIES.SCIENCE.name,
    difficulty: "Orta"
  },
  {
    id: 423,
    question: "Metal olmayan elementlerden oluşan bir bileşiğe ne ad verilir?",
    options: ["İyonik bileşik", "Metalik bileşik", "Kovalent bileşik", "Organik bileşik"],
    correct: 2,
    category: CATEGORIES.SCIENCE.name,
    difficulty: "Kolay"
  },
  {
    id: 424,
    question: "Elektrik yükü 'sıfır' olan temel atomaltı parçacık hangisidir?",
    options: ["Elektron", "Proton", "Nötrino", "Nötron"],
    correct: 3,
    category: CATEGORIES.SCIENCE.name,
    difficulty: "Kolay"
  },
  {
    id: 425,
    question: "Bir popülasyondaki gen havuzunun zamanla değişmesi süreci ne olarak adlandırılır?",
    options: ["Homeostaz", "Metamorfoz", "Evrim", "Adaptasyon"],
    correct: 2,
    category: CATEGORIES.SCIENCE.name,
    difficulty: "Kolay"
  },
  {
    id: 426,
    question: "Hangi gezegen Güneş Sistemi'nde en kısa yörünge süresine sahiptir?",
    options: ["Mars", "Venüs", "Merkür", "Dünya"],
    correct: 2,
    category: CATEGORIES.SCIENCE.name,
    difficulty: "Kolay"
  },
  {
    id: 427,
    question: "Katalizörlerin temel işlevi nedir?",
    options: ["Sıcaklığı artırmak", "Kimyasal tepkimenin son ürününü değiştirmek", "Tepkime hızını değiştirmek", "Bileşiğin kütlesini artırmak"],
    correct: 2,
    category: CATEGORIES.SCIENCE.name,
    difficulty: "Orta"
  },
  {
    id: 428,
    question: "Canlılar arasında enerji akışını gösteren sıralı beslenme ilişkisine ne ad verilir?",
    options: ["Besin Ağı", "Ekosistem", "Biyom", "Besin Zinciri"],
    correct: 3,
    category: CATEGORIES.SCIENCE.name,
    difficulty: "Kolay"
  },
  {
    id: 429,
    question: "Bir sarkaçın periyodunu etkileyen temel fiziksel büyüklük hangisidir?",
    options: ["Kütle", "Sarkacın uzunluğu", "Sarkaçın salınım açısı", "Hava direnci"],
    correct: 1,
    category: CATEGORIES.SCIENCE.name,
    difficulty: "Zor"
  },
  {
    id: 430,
    question: "Bir cismin birim hacim başına düşen kütlesi hangi terimle ifade edilir?",
    options: ["Kuvvet", "Ağırlık", "Yoğunluk", "Basınç"],
    correct: 2,
    category: CATEGORIES.SCIENCE.name,
    difficulty: "Kolay"
  },
  {
    id: 431,
    question: "Hangi bilim insanı, radyoaktiviteyi keşfetmiştir?",
    options: ["Marie Curie", "Ernest Rutherford", "Enrico Fermi", "Henri Becquerel"],
    correct: 3,
    category: CATEGORIES.SCIENCE.name,
    difficulty: "Zor"
  },
  {
    id: 432,
    question: "Hücredeki protein sentezinin gerçekleştiği organel hangisidir?",
    options: ["Mitokondri", "Ribozom", "Endoplazmik Retikulum", "Golgi Aygıtı"],
    correct: 1,
    category: CATEGORIES.SCIENCE.name,
    difficulty: "Orta"
  },
  {
    id: 433,
    question: "Bir kimyasal reaksiyonun gerçekleşmesi için gereken minimum enerjiye ne ad verilir?",
    options: ["Potansiyel enerji", "Kinetik enerji", "Aktivasyon enerjisi", "Bağ enerjisi"],
    correct: 2,
    category: CATEGORIES.SCIENCE.name,
    difficulty: "Orta"
  },
  {
    id: 434,
    question: "Hangi teleskop, uzaydaki en büyük ve en güçlü optik teleskoptur?",
    options: ["Hubble Uzay Teleskobu", "Kepler Uzay Teleskobu", "James Webb Uzay Teleskobu", "Chandra X-ışını Gözlemevi"],
    correct: 2,
    category: CATEGORIES.SCIENCE.name,
    difficulty: "Kolay"
  },
  {
    id: 435,
    question: "Maddenin en düzensiz ve en yüksek enerjili hali hangisidir?",
    options: ["Katı", "Sıvı", "Gaz", "Plazma"],
    correct: 3,
    category: CATEGORIES.SCIENCE.name,
    difficulty: "Orta"
  },
  {
    id: 436,
    question: "İnsan kanında oksijen taşıyan protein molekülü nedir?",
    options: ["Albumin", "Fibrinojen", "Hemoglobin", "İnsülin"],
    correct: 2,
    category: CATEGORIES.SCIENCE.name,
    difficulty: "Kolay"
  },
  {
    id: 437,
    question: "Mekanik enerjinin korunumu yasası hangi sistemler için geçerlidir?",
    options: ["Sürtünmeli sistemler", "Sıcak sistemler", "İdeal (sürtünmesiz) sistemler", "Açık sistemler"],
    correct: 2,
    category: CATEGORIES.SCIENCE.name,
    difficulty: "Orta"
  },
  {
    id: 438,
    question: "Aşağıdaki elementlerden hangisi bir soygazdır?",
    options: ["Oksijen", "Klor", "Neon", "Sodyum"],
    correct: 2,
    category: CATEGORIES.SCIENCE.name,
    difficulty: "Kolay"
  },
  {
    id: 439,
    question: "Hücre bölünmesi sırasında kromozomların ayrıldığı evreye ne ad verilir?",
    options: ["Profaz", "Metafaz", "Anafaz", "Telofaz"],
    correct: 2,
    category: CATEGORIES.SCIENCE.name,
    difficulty: "Zor"
  },
  {
    id: 440,
    question: "Kütlenin çekim alanı dışındaki bir nesneyi yörüngede tutan merkezcil kuvvet nedir?",
    options: ["Merkezkaç kuvveti", "Sürtünme kuvveti", "Yerçekimi kuvveti", "Elektromanyetik kuvvet"],
    correct: 2,
    category: CATEGORIES.SCIENCE.name,
    difficulty: "Orta"
  },
  {
    id: 441,
    question: "Genetik mühendisliğinde genleri kesmek için kullanılan özel enzimler nedir?",
    options: ["Amilaz", "Ligaz", "Restriksiyon enzimleri", "Proteaz"],
    correct: 2,
    category: CATEGORIES.SCIENCE.name,
    difficulty: "Zor"
  },
  {
    id: 442,
    question: "Bir elektrik devresindeki direncin birimi nedir?",
    options: ["Volt", "Amper", "Ohm", "Coulomb"],
    correct: 2,
    category: CATEGORIES.SCIENCE.name,
    difficulty: "Kolay"
  },
  {
    id: 443,
    question: "Hangi biyolojik süreçte glikoz parçalanarak ATP (enerji) üretilir?",
    options: ["Fotosentez", "Fermentasyon", "Hücresel Solunum", "Transkripsiyon"],
    correct: 2,
    category: CATEGORIES.SCIENCE.name,
    difficulty: "Orta"
  },
  {
    id: 444,
    question: "Güneşin enerjisini ürettiği temel nükleer reaksiyon türü nedir?",
    options: ["Nükleer Fisyon (Bölünme)", "Nükleer Füzyon (Birleşme)", "Radyoaktif Bozunma", "Kimyasal Yanma"],
    correct: 1,
    category: CATEGORIES.SCIENCE.name,
    difficulty: "Orta"
  },
  {
    id: 445,
    question: "Hangi element, periyodik tablonun birinci grubunda yer almasına rağmen metal değildir?",
    options: ["Lityum", "Sodyum", "Potasyum", "Hidrojen"],
    correct: 3,
    category: CATEGORIES.SCIENCE.name,
    difficulty: "Orta"
  },
  {
    id: 446,
    question: "Biyolojide, türlerin bilimsel olarak isimlendirilmesinde kullanılan ikili adlandırma sisteminin (binominal nomenklatür) kurucusu kimdir?",
    options: ["Charles Darwin", "Gregor Mendel", "Carolus Linnaeus", "Louis Pasteur"],
    correct: 2,
    category: CATEGORIES.SCIENCE.name,
    difficulty: "Zor"
  },
  {
    id: 447,
    question: "Fizikte 'İş' birimi nedir?",
    options: ["Watt", "Newton", "Joule", "Pascal"],
    correct: 2,
    category: CATEGORIES.SCIENCE.name,
    difficulty: "Kolay"
  },
  {
    id: 448,
    question: "Kalıtım biliminin (Genetik) kurucusu olarak bilinen bilim insanı kimdir?",
    options: ["James Watson", "Francis Crick", "Gregor Mendel", "Thomas Hunt Morgan"],
    correct: 2,
    category: CATEGORIES.SCIENCE.name,
    difficulty: "Kolay"
  },
  {
    id: 449,
    question: "Bir çözeltinin su kaybetmesi sonucu katı maddenin dibe çökmesine ne ad verilir?",
    options: ["Buharlaşma", "Çözünme", "Çökelme (Precipitasyon)", "Süblimleşme"],
    correct: 2,
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
    options: ["John Dalton", "Antoine Lavoisier", "Dmitri Mendeleev", "Robert Boyle"],
    correct: 1,
    category: CATEGORIES.SCIENCE.name,
    difficulty: "Zor"
  },
  {
    id: 452,
    question: "Bakterilerin hücre duvarı yapısında bulunan özel polimer nedir?",
    options: ["Kitin", "Selüloz", "Peptidoglikan", "Glikojen"],
    correct: 2,
    category: CATEGORIES.SCIENCE.name,
    difficulty: "Zor"
  },
  {
    id: 453,
    question: "Newton'un Birinci Hareket Yasası ne olarak da bilinir?",
    options: ["Etki-Tepki Yasası", "Eylemsizlik Yasası", "Hareket Yasası", "Kütle Çekim Yasası"],
    correct: 1,
    category: CATEGORIES.SCIENCE.name,
    difficulty: "Kolay"
  },
  {
    id: 454,
    question: "Metallerin ısı ve elektriği iyi iletme sebebi nedir?",
    options: ["Yüksek yoğunlukları", "Serbest (gezgin) elektronları", "Yüksek erime noktaları", "Kısa atomik bağlar"],
    correct: 1,
    category: CATEGORIES.SCIENCE.name,
    difficulty: "Orta"
  },
  {
    id: 455,
    question: "Gözde ışığın retina üzerine odaklanmasını sağlayan yapı nedir?",
    options: ["İris", "Göz bebeği", "Kornea", "Lens (Mercek)"],
    correct: 3,
    category: CATEGORIES.SCIENCE.name,
    difficulty: "Orta"
  },
  {
    id: 456,
    question: "Kütlenin enerjiye dönüştüğünü ifade eden ünlü formül (E=mc²) hangi bilim insanına aittir?",
    options: ["Max Planck", "Niels Bohr", "Albert Einstein", "Richard Feynman"],
    correct: 2,
    category: CATEGORIES.SCIENCE.name,
    difficulty: "Kolay"
  },
  {
    id: 457,
    question: "Hangi kimyasal tür, suda çözündüğünde OH- (hidroksit) iyonu verir?",
    options: ["Asit", "Baz", "Tuz", "Nötr"],
    correct: 1,
    category: CATEGORIES.SCIENCE.name,
    difficulty: "Kolay"
  },
  {
    id: 458,
    question: "Canlılarda 'Adaptasyon' ne anlama gelir?",
    options: ["Çevre koşullarına uyum", "Hızlı üreme yeteneği", "Genetik mutasyon", "Hücre bölünmesi"],
    correct: 0,
    category: CATEGORIES.SCIENCE.name,
    difficulty: "Kolay"
  },
  {
    id: 459,
    question: "Işığın saydam bir ortamdan başka bir saydam ortama geçerken yön değiştirmesi olayına ne ad verilir?",
    options: ["Yansıma", "Kırılma (Refraksiyon)", "Soğurulma", "Difüzyon"],
    correct: 1,
    category: CATEGORIES.SCIENCE.name,
    difficulty: "Kolay"
  },
  {
    id: 460,
    question: "Aşağıdakilerden hangisi bir 'doğal polimer' örneğidir?",
    options: ["Plastik", "Naylon", "Selüloz", "Polistiren"],
    correct: 2,
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
    options: ["Ksilem", "Floem", "Kök şapkası (Kalıptra)", "Tomurcuk"],
    correct: 2,
    category: CATEGORIES.SCIENCE.name,
    difficulty: "Zor"
  },
  {
    id: 463,
    question: "Bir cismin sıcaklığını ölçmek için hangi fiziksel büyüklük kullanılır?",
    options: ["Isı", "Özgül Isı", "Entropi", "Termometre (Sıcaklık)"],
    correct: 3,
    category: CATEGORIES.SCIENCE.name,
    difficulty: "Kolay"
  },
  {
    id: 464,
    question: "Kansere neden olan ve hücrelerdeki genetik materyali değiştiren maddelere ne ad verilir?",
    options: ["Antijen", "Antikor", "Mutajen", "Enzim"],
    correct: 2,
    category: CATEGORIES.SCIENCE.name,
    difficulty: "Orta"
  },
  {
    id: 465,
    question: "Tuzlu su bir çözeltidir. Bu çözeltinin 'çözücü' kısmı nedir?",
    options: ["Tuz", "Su", "Her ikisi", "Hiçbiri"],
    correct: 1,
    category: CATEGORIES.SCIENCE.name,
    difficulty: "Kolay"
  },
  {
    id: 466,
    question: "Biyolojide 'Mitoz' bölünmenin temel amacı nedir?",
    options: ["Üreme hücreleri (gamet) oluşturmak", "Genetik çeşitlilik sağlamak", "Büyüme, gelişme ve onarım sağlamak", "Kromozom sayısını yarıya indirmek"],
    correct: 2,
    category: CATEGORIES.SCIENCE.name,
    difficulty: "Orta"
  },
  {
    id: 467,
    question: "Optikte, bir cismin arkasındaki ışığı toplayarak odak noktasına düşüren mercek tipi nedir?",
    options: ["Dışbükey (Yakınsak)", "İçbükey (Iraksak)", "Silindirik", "Prizmatik"],
    correct: 0,
    category: CATEGORIES.SCIENCE.name,
    difficulty: "Orta"
  },
  {
    id: 468,
    question: "Periyodik tablonun 17. grubunda (Halojenler) yer alan ve oda sıcaklığında gaz halinde bulunan element nedir?",
    options: ["İyot", "Brom", "Klor", "Flor"],
    correct: 2,
    category: CATEGORIES.SCIENCE.name,
    difficulty: "Zor"
  },
  {
    id: 469,
    question: "En az ışıktan etkilenen ve bu nedenle genellikle karanlık maddeyi gözlemlemek için kullanılan dalga boyu aralığı nedir?",
    options: ["Görünür ışık", "X-ışınları", "Radyo dalgaları", "Morötesi ışınlar"],
    correct: 2,
    category: CATEGORIES.SCIENCE.name,
    difficulty: "Zor"
  },
  {
    id: 470,
    question: "Basıncın birimi nedir?",
    options: ["Joule", "Newton", "Pascal", "Watt"],
    correct: 2,
    category: CATEGORIES.SCIENCE.name,
    difficulty: "Kolay"
  },
  {
    id: 471,
    question: "Vücutta antikor üreterek bağışıklık tepkisini yöneten hücreler hangileridir?",
    options: ["T lenfositleri", "Makrofajlar", "Nötrofiller", "B lenfositleri"],
    correct: 3,
    category: CATEGORIES.SCIENCE.name,
    difficulty: "Zor"
  },
  {
    id: 472,
    question: "Hangi tür kuvvet, yalnızca temas gerektirir?",
    options: ["Yerçekimi", "Manyetik kuvvet", "Elektrostatik kuvvet", "Sürtünme kuvveti"],
    correct: 3,
    category: CATEGORIES.SCIENCE.name,
    difficulty: "Orta"
  },
  {
    id: 473,
    question: "Oksidasyon nedir?",
    options: ["Bir atomun elektron alması", "Bir atomun elektron vermesi", "Bir atomun çekirdek değiştirmesi", "Bir atomun nötrleşmesi"],
    correct: 1,
    category: CATEGORIES.SCIENCE.name,
    difficulty: "Orta"
  },
  {
    id: 474,
    question: "Güneş Sistemi'nde ters yönde (saat yönünde) dönen gezegen hangisidir?",
    options: ["Mars", "Jüpiter", "Venüs", "Uranüs"],
    correct: 2,
    category: CATEGORIES.SCIENCE.name,
    difficulty: "Zor"
  },
  {
    id: 475,
    question: "Bitkilerin yeşil rengini veren pigment nedir?",
    options: ["Karoten", "Ksantofil", "Antosiyanin", "Klorofil"],
    correct: 3,
    category: CATEGORIES.SCIENCE.name,
    difficulty: "Kolay"
  },
  {
    id: 476,
    question: "Kimyada, aynı atom numarasına (proton sayısı) sahip, ancak farklı kütle numarasına (nötron sayısı) sahip atomlara ne ad verilir?",
    options: ["İzoton", "İzobar", "İzotop", "Allotrop"],
    correct: 2,
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
    options: ["Volkanizma analizi", "Yer kabuğu sondajı", "Sismik dalgaların incelenmesi", "Manyetik alan ölçümü"],
    correct: 2,
    category: CATEGORIES.SCIENCE.name,
    difficulty: "Orta"
  },
  {
    id: 479,
    question: "Yağların yapı birimi olan küçük moleküller nedir?",
    options: ["Amino asitler", "Nükleotitler", "Gliserol ve Yağ Asitleri", "Monosakkaritler"],
    correct: 2,
    category: CATEGORIES.SCIENCE.name,
    difficulty: "Kolay"
  },
  {
    id: 480,
    question: "Fizikte 'Güç' birimi nedir?",
    options: ["Joule", "Newton", "Watt", "Volt"],
    correct: 2,
    category: CATEGORIES.SCIENCE.name,
    difficulty: "Kolay"
  },
  {
    id: 481,
    question: "Bir deneyde sonuçları etkilemesi beklenen, ancak sabit tutulan faktöre ne ad verilir?",
    options: ["Bağımsız değişken", "Bağımlı değişken", "Kontrol değişkeni", "Hipotez"],
    correct: 2,
    category: CATEGORIES.SCIENCE.name,
    difficulty: "Orta"
  },
  {
    id: 482,
    question: "Hangi bileşik, halk arasında 'yemek sodası' olarak bilinir?",
    options: ["Sodyum Klorür (NaCl)", "Sodyum Bikarbonat (NaHCO3)", "Kalsiyum Karbonat (CaCO3)", "Sodyum Hidroksit (NaOH)"],
    correct: 1,
    category: CATEGORIES.SCIENCE.name,
    difficulty: "Zor"
  },
  {
    id: 483,
    question: "Evrenin oluşumunu açıklayan en kabul görmüş teori nedir?",
    options: ["Kararlı Hal Teorisi", "Büyük Patlama (Big Bang) Teorisi", "Sonsuz Enflasyon Teorisi", "Döngüsel Evren Teorisi"],
    correct: 1,
    category: CATEGORIES.SCIENCE.name,
    difficulty: "Kolay"
  },
  {
    id: 484,
    question: "Proteinlerin üç boyutlu yapısını kaybetmesine ne ad verilir?",
    options: ["Denitrifikasyon", "Translasyon", "Denatürasyon", "Hidroliz"],
    correct: 2,
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
    options: ["Proton", "Nötron", "Foton", "Baryon"],
    correct: 2,
    category: CATEGORIES.SCIENCE.name,
    difficulty: "Orta"
  },
  {
    id: 487,
    question: "Hangi bilim insanı penisilini keşfetmiştir?",
    options: ["Louis Pasteur", "Robert Koch", "Alexander Fleming", "Jonas Salk"],
    correct: 2,
    category: CATEGORIES.SCIENCE.name,
    difficulty: "Kolay"
  },
  {
    id: 488,
    question: "En küçük atomaltı parçacıklar olan kuarklar hangi temel parçacıkların yapı taşıdır?",
    options: ["Leptonlar (Elektronlar)", "Fotonlar", "Baryonlar (Proton/Nötron)", "Higgs bozonları"],
    correct: 2,
    category: CATEGORIES.SCIENCE.name,
    difficulty: "Zor"
  },
  {
    id: 489,
    question: "Bir hücrenin aşırı su kaybederek büzülmesine ne ad verilir?",
    options: ["Plazmoliz", "Turgor", "Hemoliz", "Dehidrasyon"],
    correct: 0,
    category: CATEGORIES.SCIENCE.name,
    difficulty: "Zor"
  },
  {
    id: 490,
    question: "Elektrik devresinde elektrik yükünün (Q) birimi nedir?",
    options: ["Volt", "Amper", "Ohm", "Coulomb"],
    correct: 3,
    category: CATEGORIES.SCIENCE.name,
    difficulty: "Orta"
  },
  {
    id: 491,
    question: "Sıvıların yüzey alanlarını küçültme eğilimine neden olan kuvvet nedir?",
    options: ["Kılcallık", "Adezyon", "Kohezyon (Yüzey Gerilimi)", "Viskozite"],
    correct: 2,
    category: CATEGORIES.SCIENCE.name,
    difficulty: "Orta"
  },
  {
    id: 492,
    question: "Hangi organel, hücrenin sindirim ve atık yönetimi merkezidir?",
    options: ["Mitokondri", "Lizozom", "Ribozom", "Çekirdek"],
    correct: 1,
    category: CATEGORIES.SCIENCE.name,
    difficulty: "Orta"
  },
  {
    id: 493,
    question: "Metal ve ametal atomlarının elektron alışverişi yaparak oluşturduğu bağ türü nedir?",
    options: ["Kovalent Bağ", "Metalik Bağ", "İyonik Bağ", "Hidrojen Bağı"],
    correct: 2,
    category: CATEGORIES.SCIENCE.name,
    difficulty: "Kolay"
  },
  {
    id: 494,
    question: "Işığın en yüksek hızda hareket ettiği ortam hangisidir?",
    options: ["Su", "Cam", "Hava", "Boşluk (Vakum)"],
    correct: 3,
    category: CATEGORIES.SCIENCE.name,
    difficulty: "Kolay"
  },
  {
    id: 495,
    question: "Aşağıdakilerden hangisi bir 'Monosakkarit' (basit şeker) değildir?",
    options: ["Glikoz", "Fruktoz", "Sükroz", "Galaktoz"],
    correct: 2,
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
    options: ["Oksijen-16", "Azot-14", "Karbon-14", "Uranyum-238"],
    correct: 2,
    category: CATEGORIES.SCIENCE.name,
    difficulty: "Orta"
  },
  {
    id: 499,
    question: "Biyolojide, bir canlının dış görünüşü (gözlemlenebilir özellikleri) hangi terimle ifade edilir?",
    options: ["Genotip", "Homozigot", "Fenotip", "Heterozigot"],
    correct: 2,
    category: CATEGORIES.SCIENCE.name,
    difficulty: "Kolay"
  },
  {
    id: 500,
    question: "Bir sıvının kaynama noktasını artırmak için hangi işlem yapılabilir?",
    options: ["Sıvıyı karıştırmak", "Basıncı azaltmak", "Basıncı artırmak", "Çözücüyü ısıtmak"],
    correct: 2,
    category: CATEGORIES.SCIENCE.name,
    difficulty: "Orta"
  },
  {
    id: 501,
    question: "Evrenin genişlemesi teorisini destekleyen ve galaksilerin bizden uzaklaşma hızının mesafeyle orantılı olduğunu ifade eden yasa nedir?",
    options: ["Newton'un Evrensel Çekim Yasası", "Hubble Yasası", "Kepler'in Üçüncü Yasası", "Planck Yasası"],
    correct: 1,
    category: "Bilim",
    difficulty: "Kolay"
  },
  {
    id: 502,
    question: "Canlı hücrelerin enerji santrali olarak adlandırılan ve ATP üreten organel hangisidir?",
    options: ["Ribozom", "Endoplazmik Retikulum", "Mitokondri", "Lizozom"],
    correct: 2,
    category: "Bilim",
    difficulty: "Kolay"
  },
  {
    id: 503,
    question: "Maddenin ısı iletkenliğini en az olduğu hali nedir?",
    options: ["Katı", "Sıvı", "Gaz", "Plazma"],
    correct: 2,
    category: "Bilim",
    difficulty: "Orta"
  },
  {
    id: 504,
    question: "Bir atomun çekirdeğinde bulunan, yüksüz tanecik nedir?",
    options: ["Proton", "Elektron", "Nötron", "Foton"],
    correct: 2,
    category: "Bilim",
    difficulty: "Kolay"
  },
  {
    id: 505,
    question: "Bitkilerde suyun kökten yapraklara taşınmasından sorumlu damar dokusu nedir?",
    options: ["Floem", "Kambiyum", "Stoma", "Ksilem"],
    correct: 3,
    category: "Bilim",
    difficulty: "Orta"
  },
  {
    id: 506,
    question: "Işığın farklı ortamlardan geçerken doğrultu değiştirmesi olayına ne ad verilir?",
    options: ["Yansıma", "Kırılma", "Saçılma", "Polarizasyon"],
    correct: 1,
    category: "Bilim",
    difficulty: "Kolay"
  },
  {
    id: 507,
    question: "pH değeri 7'den küçük olan maddeler için kullanılan ifade nedir?",
    options: ["Baz", "Nötr", "Asit", "Tuz"],
    correct: 2,
    category: "Bilim",
    difficulty: "Kolay"
  },
  {
    id: 508,
    question: "Vücudun dışarıdan gelen mikroorganizmalara karşı geliştirdiği savunma mekanizmasına ne ad verilir?",
    options: ["Metabolizma", "Homeostazi", "Adaptasyon", "Bağışıklık (İmmünite)"],
    correct: 3,
    category: "Bilim",
    difficulty: "Kolay"
  },
  {
    id: 509,
    question: "Kütlesi olmayan, sadece enerji taşıyan temel parçacık nedir?",
    options: ["Elektron", "Proton", "Nötrino", "Foton"],
    correct: 3,
    category: "Bilim",
    difficulty: "Zor"
  },
  {
    id: 510,
    question: "Periyodik tabloda aynı dikey sütunda (grupta) bulunan elementlerin ortak özelliği nedir?",
    options: ["Aynı atom kütlesine sahip olma", "Aynı katman sayısına sahip olma", "Aynı değerlik elektron sayısına sahip olma", "Aynı periyot numarasına sahip olma"],
    correct: 2,
    category: "Bilim",
    difficulty: "Kolay"
  },
  {
    id: 511,
    question: "En büyük uydusu Ganymede olan, Güneş Sistemi'nin en büyük gezegeni hangisidir?",
    options: ["Satürn", "Mars", "Jüpiter", "Uranüs"],
    correct: 2,
    category: "Bilim",
    difficulty: "Kolay"
  },
  {
    id: 512,
    question: "Bir nesnenin hareketine karşı koyan ve sürtünmeden kaynaklanan kuvvet nedir?",
    options: ["Merkezcil Kuvvet", "Yerçekimi Kuvveti", "Sürtünme Kuvveti", "Normal Kuvvet"],
    correct: 2,
    category: "Bilim",
    difficulty: "Kolay"
  },
  {
    id: 513,
    question: "Genetik bilgiyi hücre çekirdeğinden ribozomlara taşıyan RNA türü nedir?",
    options: ["tRNA", "rRNA", "mRNA", "snRNA"],
    correct: 2,
    category: "Bilim",
    difficulty: "Orta"
  },
  {
    id: 514,
    question: "Yoğunluğu en düşük olan metal elementi nedir?",
    options: ["Altın", "Demir", "Lityum", "Alüminyum"],
    correct: 2,
    category: "Bilim",
    difficulty: "Zor"
  },
  {
    id: 515,
    question: "Bir gezegenin, Güneş'e en yakın olduğu yörünge noktasına ne ad verilir?",
    options: ["Aphelion (Günöte)", "Perigee", "Apogee", "Perihelion (Günberi)"],
    correct: 3,
    category: "Bilim",
    difficulty: "Zor"
  },
  {
    id: 516,
    question: "Yüksek sıcaklıkta eriyen kayaların (magmanın) yeryüzüne çıkarak soğuması sonucu oluşan kayaç türü nedir?",
    options: ["Tortul Kayaç", "Başkalaşım Kayacı", "Püskürük (Volkanik) Kayaç", "Organik Kayaç"],
    correct: 2,
    category: "Bilim",
    difficulty: "Kolay"
  },
  {
    id: 517,
    question: "Bir tepkimeye girerek hızını artıran, ancak kendisi harcanmayan maddeye ne ad verilir?",
    options: ["İnhibitör", "Reaktan", "Katalizör", "İzotop"],
    correct: 2,
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
    options: ["Volt", "Amper", "Ohm", "Watt"],
    correct: 2,
    category: "Bilim",
    difficulty: "Kolay"
  },
  {
    id: 520,
    question: "Atom numaraları aynı, kütle numaraları farklı olan atomlara ne ad verilir?",
    options: ["İzobar", "İzoton", "İzomer", "İzotop"],
    correct: 3,
    category: "Bilim",
    difficulty: "Kolay"
  },
  {
    id: 521,
    question: "Albert Einstein'ın ünlü $\\text{E = mc}^{2}$ formülü hangi kavramlar arasındaki ilişkiyi ifade eder?",
    options: ["Kütle ve Hız", "Kütle ve Enerji", "Momentum ve Kütle", "Kuvvet ve İvme"],
    correct: 1,
    category: "Bilim",
    difficulty: "Kolay"
  },
  {
    id: 522,
    question: "Dünya'nın uydusu olan Ay'ın, Dünya'ya göre hep aynı yüzünü göstermesinin nedeni nedir?",
    options: ["Yörünge hızının sabit olması", "Ay'ın kütleçekiminin düşük olması", "Ay'ın kendi etrafındaki dönüş süresi ile Dünya etrafındaki dolanım süresinin eşit olması", "Ay'ın elips yörüngesi"],
    correct: 2,
    category: "Bilim",
    difficulty: "Orta"
  },
  {
    id: 523,
    question: "Glikozun oksijen varlığında parçalanarak ATP enerjisine dönüştüğü biyolojik süreç nedir?",
    options: ["Fotosentez", "Fermentasyon", "Hücresel Solunum", "Transpirasyon"],
    correct: 2,
    category: "Bilim",
    difficulty: "Kolay"
  },
  {
    id: 524,
    question: "Saf maddelerin kaynama noktasının sabit kalması, hangi özelliğe sahip olduğunu gösterir?",
    options: ["Homojen karışım olma", "Molekül yapısının karmaşık olma", "Belirli bir erime ve kaynama noktasına sahip olma", "Düşük yoğunluklu olma"],
    correct: 2,
    category: "Bilim",
    difficulty: "Kolay"
  },
  {
    id: 525,
    question: "Hareket halindeki bir cismin hızı ve yönü değişmiyorsa, cisme etki eden net kuvvet nedir?",
    options: ["Maksimumdur", "Sıfırdır", "Sabit değildir", "Hıza eşittir"],
    correct: 1,
    category: "Bilim",
    difficulty: "Kolay"
  },
  {
    id: 526,
    question: "Asitlerle bazların tepkimeye girerek su ve... oluşturmasıyla sonuçlanan kimyasal tepkime nedir?",
    options: ["Oksit", "Metal", "Tuz", "Hidrojen"],
    correct: 2,
    category: "Bilim",
    difficulty: "Kolay"
  },
  {
    id: 527,
    question: "Gezegenlerin Güneş etrafında elips yörüngelerde dolandığını keşfeden bilim insanı kimdir?",
    options: ["Nicolaus Copernicus", "Galileo Galilei", "Johannes Kepler", "Isaac Newton"],
    correct: 2,
    category: "Bilim",
    difficulty: "Kolay"
  },
  {
    id: 528,
    question: "Virüslerin genetik materyali hücreye aktardıktan sonra hemen çoğalmaya başladığı döngü nedir?",
    options: ["Lizojenik Döngü", "Litotrof Döngü", "Litogenik Döngü", "Litogenik Döngü"],
    correct: 0,
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
    options: ["Asit-Baz Tepkimesi", "Redoks Tepkimesi", "Çözünme-Çökelme Tepkimesi", "Sentez Tepkimesi"],
    correct: 1,
    category: "Bilim",
    difficulty: "Orta"
  },
  {
    id: 531,
    question: "Işığın en hızlı yayıldığı ortam nedir?",
    options: ["Su", "Hava", "Cam", "Boşluk (Vakum)"],
    correct: 3,
    category: "Bilim",
    difficulty: "Kolay"
  },
  {
    id: 532,
    question: "Yaşayan organizmaların çevrelerine adaptasyon sürecini ve türlerin zamanla değişimini inceleyen bilim dalı nedir?",
    options: ["Genetik", "Ekoloji", "Evrim Biyolojisi", "Anatomi"],
    correct: 2,
    category: "Bilim",
    difficulty: "Kolay"
  },
  {
    id: 533,
    question: "Kimyasal bağ oluşumunda rol oynayan ve en dış yörüngede bulunan elektronlara ne ad verilir?",
    options: ["Çekirdek Elektronu", "Değerlik Elektronu", "İyon", "Nötrino"],
    correct: 1,
    category: "Bilim",
    difficulty: "Kolay"
  },
  {
    id: 534,
    question: "Bir cisme uygulanan kuvvetin, cismi hareket ettirdiği doğrultudaki mesafe ile çarpımına ne ad verilir?",
    options: ["Güç", "İş", "Enerji", "Momentum"],
    correct: 1,
    category: "Bilim",
    difficulty: "Kolay"
  },
  {
    id: 535,
    question: "En büyük kütleli yıldızların yaşamlarının sonunda, kendi içlerine çökerek oluşturduğu ve ışığın bile kaçamadığı gök cismi nedir?",
    options: ["Beyaz Cüce", "Nötron Yıldızı", "Kara Delik", "Kızıl Dev"],
    correct: 2,
    category: "Bilim",
    difficulty: "Kolay"
  },
  {
    id: 536,
    question: "Canlılarda kalıtsal bilgiyi taşıyan çift sarmallı molekül nedir?",
    options: ["RNA", "Protein", "ATP", "DNA"],
    correct: 3,
    category: "Bilim",
    difficulty: "Kolay"
  },
  {
    id: 537,
    question: "Buharlaşma, yoğuşma, donma gibi hal değişimleri hangi kimyasal değişim sınıfına girer?",
    options: ["Kimyasal Değişim", "Nükleer Değişim", "Fiziksel Değişim", "Redoks Değişimi"],
    correct: 2,
    category: "Bilim",
    difficulty: "Kolay"
  },
  {
    id: 538,
    question: "Dünya atmosferinde, ozon tabakasının bulunduğu katman nedir?",
    options: ["Troposfer", "Mezosfer", "Stratosfer", "Termosfer"],
    correct: 2,
    category: "Bilim",
    difficulty: "Orta"
  },
  {
    id: 539,
    question: "Bir sıvıya daldırılan cismin, sıvı tarafından yukarı doğru itilmesiyle oluşan kuvvete ne ad verilir?",
    options: ["Yüzey Gerilimi", "Kaldırma Kuvveti", "Viskozite", "Kılcallık"],
    correct: 1,
    category: "Bilim",
    difficulty: "Kolay"
  },
  {
    id: 540,
    question: "İki farklı element atomunun elektronları paylaşarak oluşturduğu bağ türü nedir?",
    options: ["İyonik Bağ", "Metalik Bağ", "Hidrojen Bağı", "Kovalent Bağ"],
    correct: 3,
    category: "Bilim",
    difficulty: "Kolay"
  },
  {
    id: 541,
    question: "Fotosentez sırasında bitkiler, hangi gazı kullanarak besin üretir?",
    options: ["Oksijen", "Azot", "Karbondioksit", "Su Buharı"],
    correct: 2,
    category: "Bilim",
    difficulty: "Kolay"
  },
  {
    id: 542,
    question: "Sesin en hızlı yayıldığı ortam genellikle hangisidir?",
    options: ["Gazlar", "Sıvılar", "Katılar", "Boşluk (Vakum)"],
    correct: 2,
    category: "Bilim",
    difficulty: "Kolay"
  },
  {
    id: 543,
    question: "Organik kimyanın temelini oluşturan element nedir?",
    options: ["Oksijen", "Azot", "Karbon", "Hidrojen"],
    correct: 2,
    category: "Bilim",
    difficulty: "Kolay"
  },
  {
    id: 544,
    question: "Güneş Sistemi'nde en kısa yörünge süresine (Güneş etrafında en hızlı dönen) sahip gezegen hangisidir?",
    options: ["Dünya", "Mars", "Jüpiter", "Merkür"],
    correct: 3,
    category: "Bilim",
    difficulty: "Kolay"
  },
  {
    id: 545,
    question: "Maddenin ısı alarak katı halden doğrudan gaz hale geçmesi olayına ne ad verilir?",
    options: ["Buharlaşma", "Yoğuşma", "Süblimleşme", "Erime"],
    correct: 2,
    category: "Bilim",
    difficulty: "Orta"
  },
  {
    id: 546,
    question: "Bir popülasyonda gen frekanslarının nesiller boyu değişimi olarak tanımlanan kavram nedir?",
    options: ["Genetik Mühendisliği", "Kalıtım", "Biyoteknoloji", "Mikroevrim"],
    correct: 3,
    category: "Bilim",
    difficulty: "Zor"
  },
  {
    id: 547,
    question: "İki farklı metalin bir araya getirilerek oluşturduğu, kimyasal özellikleri farklı olan maddeye ne ad verilir?",
    options: ["Element", "Bileşik", "Homojen Karışım (Alaşım)", "Heterojen Karışım"],
    correct: 2,
    category: "Bilim",
    difficulty: "Kolay"
  },
  {
    id: 548,
    question: "Bir dalganın birim zamanda aldığı yolun ölçüsü nedir?",
    options: ["Genlik", "Periyot", "Dalga Boyu", "Hız (Yayılma Hızı)"],
    correct: 3,
    category: "Bilim",
    difficulty: "Kolay"
  },
  {
    id: 549,
    question: "Güneş Sistemi'ndeki en büyük volkanik dağ (Olympus Mons) hangi gezegende bulunur?",
    options: ["Dünya", "Venüs", "Mars", "Jüpiter"],
    correct: 2,
    category: "Bilim",
    difficulty: "Kolay"
  },
  {
    id: 550,
    question: "Hücre zarından büyük moleküllerin ATP harcanarak (enerji kullanılarak) hücre içine alınması sürecine ne ad verilir?",
    options: ["Difüzyon", "Ozmoz", "Endositoz", "Ekzositoz"],
    correct: 2,
    category: "Bilim",
    difficulty: "Orta"
  },
  {
    id: 551,
    question: "Bir elektrik devresinde seri bağlı dirençlerin eşdeğer direnci nasıl bulunur?",
    options: ["Dirençlerin çarpımıyla", "Dirençlerin terslerinin çarpımıyla", "Dirençlerin toplamıyla", "Dirençlerin ortalamasıyla"],
    correct: 2,
    category: "Bilim",
    difficulty: "Kolay"
  },
  {
    id: 552,
    question: "Gazların yüksek basınç ve düşük sıcaklıkta sıvı hale geçme eğilimine ne ad verilir?",
    options: ["Buharlaşma", "Çözünme", "Yoğuşma", "Kritik Sıcaklık"],
    correct: 2,
    category: "Bilim",
    difficulty: "Orta"
  },
  {
    id: 553,
    question: "Bir canlının genetik yapısının tamamına ne ad verilir?",
    options: ["Fenotip", "Kromozom", "Genom", "Haploid"],
    correct: 2,
    category: "Bilim",
    difficulty: "Kolay"
  },
  {
    id: 554,
    question: "İş yapabilme yeteneği olarak tanımlanan kavram nedir?",
    options: ["Kuvvet", "Güç", "Enerji", "Momentum"],
    correct: 2,
    category: "Bilim",
    difficulty: "Kolay"
  },
  {
    id: 555,
    question: "Güneş Sistemi'nde ters yönde (saat yönünde) dönen tek gezegen hangisidir?",
    options: ["Mars", "Uranüs", "Venüs", "Jüpiter"],
    correct: 2,
    category: "Bilim",
    difficulty: "Orta"
  },
  {
    id: 556,
    question: "Güneş'ten gelen zararlı ultraviyole (UV) ışınları süzen atmosfer katmanı nedir?",
    options: ["İyonosfer", "Ozon Tabakası", "Mezosfer", "Troposfer"],
    correct: 1,
    category: "Bilim",
    difficulty: "Kolay"
  },
  {
    id: 557,
    question: "Kimyasal tepkimelerin gerçekleşmesi için gereken minimum enerji miktarına ne ad verilir?",
    options: ["Serbest Enerji", "Oluşum Entalpisi", "Aktivasyon Enerjisi", "Bağ Enerjisi"],
    correct: 2,
    category: "Bilim",
    difficulty: "Orta"
  },
  {
    id: 558,
    question: "Protein sentezinin gerçekleştiği, hücrenin en küçük ve en kalabalık organeli nedir?",
    options: ["Mitokondri", "Ribozom", "Lizozom", "Golgi Aygıtı"],
    correct: 1,
    category: "Bilim",
    difficulty: "Kolay"
  },
  {
    id: 559,
    question: "Dalga boyu en kısa olan elektromanyetik dalga türü nedir?",
    options: ["Radyo Dalgaları", "Kızılötesi", "Görünür Işık", "Gama Işınları"],
    correct: 3,
    category: "Bilim",
    difficulty: "Orta"
  },
  {
    id: 560,
    question: "Bir sıvının yüzey alanını minimuma indirme eğilimine ne ad verilir?",
    options: ["Viskozite", "Kılcallık", "Yüzey Gerilimi", "Kaldırma Kuvveti"],
    correct: 2,
    category: "Bilim",
    difficulty: "Kolay"
  },
  {
    id: 561,
    question: "İnsan vücudunda kanın pıhtılaşmasından sorumlu hücre parçacıkları nedir?",
    options: ["Akyuvarlar", "Alyuvarlar", "Trombositler", "Plazma"],
    correct: 2,
    category: "Bilim",
    difficulty: "Kolay"
  },
  {
    id: 562,
    question: "Bir kimyasal bileşiği oluşturan elementlerin sabit kütle oranları ile birleştiğini ifade eden yasa nedir?",
    options: ["Kütlenin Korunumu Yasası", "Katlı Oranlar Yasası", "Sabit Oranlar Yasası", "Hacimlerin Birleşme Oranı Yasası"],
    correct: 2,
    category: "Bilim",
    difficulty: "Orta"
  },
  {
    id: 563,
    question: "Kütlesi ve hızı olan tüm cisimlerin sahip olduğu hareket enerjisine ne ad verilir?",
    options: ["Potansiyel Enerji", "Mekanik Enerji", "Kinetik Enerji", "Termal Enerji"],
    correct: 2,
    category: "Bilim",
    difficulty: "Kolay"
  },
  {
    id: 564,
    question: "Güneş'in ana enerji kaynağı olan ve hafif atom çekirdeklerinin birleşerek daha ağır çekirdek oluşturduğu süreç nedir?",
    options: ["Nükleer Fisyon", "Nükleer Füzyon", "Radyoaktif Bozunma", "Kimyasal Yanma"],
    correct: 1,
    category: "Bilim",
    difficulty: "Kolay"
  },
  {
    id: 565,
    question: "Canlıların kalıtsal özelliklerinin nesilden nesile aktarılmasını inceleyen bilim dalı nedir?",
    options: ["Ekoloji", "Morfoloji", "Genetik", "Biyokimya"],
    correct: 2,
    category: "Bilim",
    difficulty: "Kolay"
  },
  {
    id: 566,
    question: "Yüksek basınçta ve düşük sıcaklıkta, atomların birbirine çok yakın olduğu ve akışkanlığını kaybeden madde hali nedir?",
    options: ["Plazma", "Gaz", "Bose-Einstein Yoğuşması", "Süperkritik Akışkan"],
    correct: 2,
    category: "Bilim",
    difficulty: "Zor"
  },
  {
    id: 567,
    question: "Tuzlu su, kimyasal olarak hangi tür madde sınıfına girer?",
    options: ["Element", "Bileşik", "Homojen Karışım", "Heterojen Karışım"],
    correct: 2,
    category: "Bilim",
    difficulty: "Kolay"
  },
  {
    id: 568,
    question: "Bir cismin ilk hızının sıfır olduğu ve sabit bir ivme ile hareket ettiği durumda, ivme ne anlama gelir?",
    options: ["Hızın sabit olduğu", "Kuvvetin sıfır olduğu", "Hızın birim zamanda değişimi", "Cismin kütlesi"],
    correct: 2,
    category: "Bilim",
    difficulty: "Kolay"
  },
  {
    id: 569,
    question: "Işığın parçacık özelliği taşıdığını ve enerjinin kesikli (kuantumlar halinde) olduğunu öne süren parçacık nedir?",
    options: ["Elektron", "Nötrino", "Foton", "Higgs Bozonu"],
    correct: 2,
    category: "Bilim",
    difficulty: "Orta"
  },
  {
    id: 570,
    question: "Glikozun hücre içine alınmasını sağlayan ve pankreas tarafından üretilen hormon nedir?",
    options: ["Adrenalin", "Tiroksin", "İnsülin", "Glukagon"],
    correct: 2,
    category: "Bilim",
    difficulty: "Kolay"
  },
  {
    id: 571,
    question: "Atom altı parçacıkların davranışını, belirsizlik ilkesi ile açıklayan bilim dalı nedir?",
    options: ["Klasik Mekanik", "Termodinamik", "Kuantum Fiziği", "Optik"],
    correct: 2,
    category: "Bilim",
    difficulty: "Kolay"
  },
  {
    id: 572,
    question: "Metallerin ısı ve elektrik akımını iyi iletmesinin temel nedeni nedir?",
    options: ["Atom çekirdeklerinin büyüklüğü", "Serbest değerlik elektronlarının varlığı", "Yüksek yoğunluk", "İyonik bağ yapısı"],
    correct: 1,
    category: "Bilim",
    difficulty: "Orta"
  },
  {
    id: 573,
    question: "Bir genin farklı hallerine ne ad verilir?",
    options: ["Kromozom", "Kromatin", "Lokus", "Alel"],
    correct: 3,
    category: "Bilim",
    difficulty: "Kolay"
  },
  {
    id: 574,
    question: "Uzay-zaman dokusunda kütle çekim dalgalanmalarının oluşumunu öngören teori nedir?",
    options: ["Özel Görelilik", "Kuantum Alan Teorisi", "Genel Görelilik", "Sicim Teorisi"],
    correct: 2,
    category: "Bilim",
    difficulty: "Orta"
  },
  {
    id: 575,
    question: "Gezegenlerin uydularının, halkalarının ve asteroitlerin bulunduğu, Güneş Sistemi'nin en dış bölgesi nedir?",
    options: ["Kuiper Kuşağı", "Oort Bulutu", "Asteroid Kuşağı", "Kar Delik Bölgesi"],
    correct: 0,
    category: "Bilim",
    difficulty: "Zor"
  },
  {
    id: 576,
    question: "Bir ses dalgasının bir engele çarpıp geri dönmesi olayına ne ad verilir?",
    options: ["Rezonans", "Kırınım", "Yankı (Eko)", "Doppler Etkisi"],
    correct: 2,
    category: "Bilim",
    difficulty: "Kolay"
  },
  {
    id: 577,
    question: "Kimyasal tepkimelerde atomların ve kütlenin korunumu ilkesini öne süren bilim insanı kimdir?",
    options: ["John Dalton", "Dimitri Mendeleyev", "Antoine Lavoisier", "Robert Boyle"],
    correct: 2,
    category: "Bilim",
    difficulty: "Orta"
  },
  {
    id: 578,
    question: "Hücre zarının temel yapısını oluşturan ana molekül nedir?",
    options: ["Karbonhidrat", "Protein", "Nükleik Asit", "Fosfolipit"],
    correct: 3,
    category: "Bilim",
    difficulty: "Kolay"
  },
  {
    id: 579,
    question: "Sıvıların sıcaklıkla viskozitesinin (akmaya karşı direncinin) değişimi genellikle nasıldır?",
    options: ["Sıcaklık arttıkça viskozite artar", "Sıcaklık arttıkça viskozite azalır", "Sıcaklık viskoziteyi etkilemez", "Viskozite sabittir"],
    correct: 1,
    category: "Bilim",
    difficulty: "Orta"
  },
  {
    id: 580,
    question: "Bir elementin atom numarasını (proton sayısı) değiştiren tepkime türü nedir?",
    options: ["İyonik Tepkime", "Redoks Tepkimesi", "Nükleer Tepkime", "Yanma Tepkimesi"],
    correct: 2,
    category: "Bilim",
    difficulty: "Kolay"
  },
  {
    id: 581,
    question: "Tüm canlı türlerinin ortak atadan geldiğini savunan temel biyolojik teori nedir?",
    options: ["Biyogenez Teorisi", "Kalıtım Teorisi", "Hücre Teorisi", "Evrim Teorisi"],
    correct: 3,
    category: "Bilim",
    difficulty: "Kolay"
  },
  {
    id: 582,
    question: "Su döngüsünde, bitkilerin yapraklarından su buharı salması olayına ne ad verilir?",
    options: ["Yoğuşma", "Süblimleşme", "Transpirasyon (Terleme)", "Infiltrasyon"],
    correct: 2,
    category: "Bilim",
    difficulty: "Orta"
  },
  {
    id: 583,
    question: "Gök cisimlerinin kütleçekimi nedeniyle kavisli bir yolda hareket etmesi durumunda, bu kavisli yola ne ad verilir?",
    options: ["Trajectory", "Momentum", "Yörünge", "İvme"],
    correct: 2,
    category: "Bilim",
    difficulty: "Kolay"
  },
  {
    id: 584,
    question: "En dış enerji düzeyinde 8 elektron bulundurarak (Hidrojen ve Helyum hariç) kararlı yapıya ulaşma eğilimi nedir?",
    options: ["Dublet Kuralı", "Atom Kuralı", "Oktet Kuralı", "İzotop Kuralı"],
    correct: 2,
    category: "Bilim",
    difficulty: "Kolay"
  },
  {
    id: 585,
    question: "Bir dalga kaynağının veya gözlemcinin hareketine bağlı olarak dalganın frekansında meydana gelen değişim nedir?",
    options: ["Rezonans", "Kırınım", "Doppler Etkisi", "Yankı"],
    correct: 2,
    category: "Bilim",
    difficulty: "Orta"
  },
  {
    id: 586,
    question: "Bir canlının genetik yapısının dışa yansıması (görünüşü) için kullanılan terim nedir?",
    options: ["Genotip", "Haploid", "Fenotip", "Alel"],
    correct: 2,
    category: "Bilim",
    difficulty: "Kolay"
  },
  {
    id: 587,
    question: "Küçük atom çekirdeklerinin çarpıştırılarak büyük bir çekirdek oluşturduğu tepkime türü nedir?",
    options: ["Nükleer Fisyon", "Nükleer Füzyon", "Kimyasal Bağlanma", "Radyoaktif Bozunma"],
    correct: 1,
    category: "Bilim",
    difficulty: "Kolay"
  },
  {
    id: 588,
    question: "Bir cismin sıcaklığını 1°C artırmak için gerekli olan ısı miktarına ne ad verilir?",
    options: ["Gizli Isı", "Öz Isı", "Isı Kapasitesi", "Termal Enerji"],
    correct: 1,
    category: "Bilim",
    difficulty: "Orta"
  },
  {
    id: 589,
    question: "Güneş Sistemi'ndeki gezegenlerin kütlelerinin çoğunu oluşturan iki element nedir?",
    options: ["Oksijen ve Silisyum", "Karbon ve Oksijen", "Hidrojen ve Helyum", "Demir ve Nikel"],
    correct: 2,
    category: "Bilim",
    difficulty: "Orta"
  },
  {
    id: 590,
    question: "Proteinlerin yapı taşı olan organik moleküller nedir?",
    options: ["Yağ Asitleri", "Nükleotitler", "Monosakkaritler", "Amino Asitler"],
    correct: 3,
    category: "Bilim",
    difficulty: "Kolay"
  },
  {
    id: 591,
    question: "Radyoaktif atomların kararlı hale gelene kadar alfa, beta veya gama ışınları yayarak bozunması olayı nedir?",
    options: ["Nükleer Füzyon", "Nükleer Fisyon", "Yarı Ömür", "Radyoaktif Bozunma"],
    correct: 3,
    category: "Bilim",
    difficulty: "Kolay"
  },
  {
    id: 592,
    question: "Elektrik yüklerinin birim zamanda bir noktadan geçiş miktarına ne ad verilir?",
    options: ["Gerilim", "Direnç", "Akım Şiddeti", "Güç"],
    correct: 2,
    category: "Bilim",
    difficulty: "Kolay"
  },
  {
    id: 593,
    question: "Bir kimyasal çözeltide çözücü ve çözünen miktarını ifade eden kavram nedir?",
    options: ["Yoğunluk", "Viskozite", "Konsantrasyon", "pH Değeri"],
    correct: 2,
    category: "Bilim",
    difficulty: "Kolay"
  },
  {
    id: 594,
    question: "Canlılar arasında enerji aktarımını, üreticilerden tüketicilere doğru gösteren diyagram nedir?",
    options: ["Popülasyon Grafiği", "Biyoçeşitlilik Endeksi", "Besin Zinciri", "Ekolojik Niş"],
    correct: 2,
    category: "Bilim",
    difficulty: "Kolay"
  },
  {
    id: 595,
    question: "Mikroskobik organizmaların (bakteri, virüs vb.) bilimsel olarak incelenmesiyle ilgilenen bilim dalı nedir?",
    options: ["Zooloji", "Botanik", "Genetik", "Mikrobiyoloji"],
    correct: 3,
    category: "Bilim",
    difficulty: "Kolay"
  },
  {
    id: 596,
    question: "Işığın parçacık (foton) gibi davrandığı, metal yüzeyden elektron sökme olayı nedir?",
    options: ["Compton Etkisi", "Fotoelektrik Olay", "Kırınım", "Polarizasyon"],
    correct: 1,
    category: "Bilim",
    difficulty: "Orta"
  },
  {
    id: 597,
    question: "Kimyasal reaksiyon sonucu ısı enerjisi yayan tepkimelere ne ad verilir?",
    options: ["Endotermik", "Ekzotermik", "İzotermal", "Katalitik"],
    correct: 1,
    category: "Bilim",
    difficulty: "Kolay"
  },
  {
    id: 598,
    question: "Güneş Sistemi'nde 'buz devi' olarak sınıflandırılan gezegen hangisidir?",
    options: ["Jüpiter", "Satürn", "Uranüs", "Mars"],
    correct: 2,
    category: "Bilim",
    difficulty: "Kolay"
  },
  {
    id: 599,
    question: "Bitki hücrelerinde fotosentezin gerçekleştiği organel nedir?",
    options: ["Mitokondri", "Vakuol", "Kloroplast", "Hücre Çekirdeği"],
    correct: 2,
    category: "Bilim",
    difficulty: "Kolay"
  },
  {
    id: 600,
    question: "Bir sistemin düzensizliğini veya rastgeleliğini ölçen fiziksel nicelik nedir?",
    options: ["Entalpi", "Potansiyel Enerji", "Entropi", "İş"],
    correct: 2,
    category: "Bilim",
    difficulty: "Orta"
  },

  // ==================== SANAT ve EDEBİYAT ====================
  {
    id: 601,
    question: "Modern Türk şiirinin önde gelen isimlerinden olan, 'Memleketimden İnsan Manzaraları' adlı eseriyle bilinen şair kimdir?",
    options: ["Tevfik Fikret", "Yahya Kemal Beyatlı", "Nazım Hikmet Ran", "Orhan Veli Kanık"],
    correct: 2,
    category: CATEGORIES.ART_LITERATURE.name,
    difficulty: "Kolay"
  },
  {
    id: 602,
    question: "Rönesans döneminin en ünlü eserlerinden olan, Leonardo da Vinci'nin yaptığı tablo hangisidir?",
    options: ["Son Akşam Yemeği", "Sistine Şapeli Tavanı", "Mona Lisa", "Venüs'ün Doğuşu"],
    correct: 2,
    category: CATEGORIES.ART_LITERATURE.name,
    difficulty: "Kolay"
  },
  {
    id: 603,
    question: "Türk edebiyatında Batılı anlamdaki ilk roman örneği kabul edilen eser hangisidir?",
    options: ["Araba Sevdası", "İntibah", "Ta'aşşuk-ı Talat ve Fitnat", "Aşk-ı Memnu"],
    correct: 1,
    category: CATEGORIES.ART_LITERATURE.name,
    difficulty: "Orta"
  },
  {
    id: 604,
    question: "Empresyonizm (İzlenimcilik) akımının öncülerinden, 'Gün Doğumu: İzlenim' adlı eserin sahibi ressam kimdir?",
    options: ["Vincent van Gogh", "Claude Monet", "Paul Cézanne", "Pierre-Auguste Renoir"],
    correct: 1,
    category: CATEGORIES.ART_LITERATURE.name,
    difficulty: "Orta"
  },
  {
    id: 605,
    question: "Homeros'un, Truva Savaşı'nı ve sonrasındaki olayları anlatan destanları hangileridir?",
    options: ["Ramayana ve Mahabharata", "Gılgamış ve Yaratılış", "İlyada ve Odysseia", "Aeneis ve Kalevala"],
    correct: 2,
    category: CATEGORIES.ART_LITERATURE.name,
    difficulty: "Kolay"
  },
  {
    id: 606,
    question: "İspanyol ressam Pablo Picasso'nun Kübizm akımının en önemli örneklerinden biri olan ve Guernica şehrinin bombalanmasını tasvir eden eseri hangisidir?",
    options: ["Avignonlu Kızlar", "Yaşlı Gitarist", "Guernica", "Dora Maar'ın Portresi"],
    correct: 2,
    category: CATEGORIES.ART_LITERATURE.name,
    difficulty: "Kolay"
  },
  {
    id: 607,
    question: "Bir şiirde kullanılan, tek bir dizeden oluşan ve genellikle bir fikir yoğunluğunu ifade eden nazım birimi nedir?",
    options: ["Beyit", "Bent", "Mısra (Dize)", "Kıt'a"],
    correct: 2,
    category: CATEGORIES.ART_LITERATURE.name,
    difficulty: "Kolay"
  },
  {
    id: 608,
    question: "Türk edebiyatında 'Sinekli Bakkal' ve 'Vurun Kahpeye' gibi eserleriyle tanınan kadın yazar kimdir?",
    options: ["Halide Edip Adıvar", "Nezihe Meriç", "Adalet Ağaoğlu", "Tomris Uyar"],
    correct: 0,
    category: CATEGORIES.ART_LITERATURE.name,
    difficulty: "Kolay"
  },
  {
    id: 609,
    question: "Mimar Sinan'ın 'ustalık eserim' dediği, Edirne'de bulunan ve Osmanlı mimarisinin zirvesi kabul edilen yapı hangisidir?",
    options: ["Süleymaniye Camii", "Şehzade Camii", "Selimiye Camii", "Mihrimah Sultan Camii"],
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
    options: ["Gustave Flaubert", "Victor Hugo", "Honoré de Balzac", "Alexandre Dumas"],
    correct: 1,
    category: CATEGORIES.ART_LITERATURE.name,
    difficulty: "Kolay"
  },
  {
    id: 612,
    question: "Bir resimde üç boyutlu hacim ve derinlik illüzyonu yaratma tekniğine ne ad verilir?",
    options: ["Fresko", "Kolaj", "Perspektif", "Mozaik"],
    correct: 2,
    category: CATEGORIES.ART_LITERATURE.name,
    difficulty: "Kolay"
  },
  {
    id: 613,
    question: "Rus edebiyatının devlerinden, 'Suç ve Ceza' ve 'Karamazov Kardeşler' gibi psikolojik romanlarıyla tanınan yazar kimdir?",
    options: ["Leo Tolstoy", "Anton Çehov", "Fyodor Dostoyevski", "Ivan Turgenyev"],
    correct: 2,
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
    options: ["Cemal Süreya", "Edip Cansever", "Turgut Uyar", "Orhan Veli Kanık"],
    correct: 3,
    category: CATEGORIES.ART_LITERATURE.name,
    difficulty: "Orta"
  },
  {
    id: 616,
    question: "Barok sanat akımının karakteristik özelliklerinden biri nedir?",
    options: ["Sadelik ve denge", "Hareketsizlik ve statik kompozisyon", "Duygusallık, dramatik ışık ve hareketlilik", "Mitler ve ideal formlar"],
    correct: 2,
    category: CATEGORIES.ART_LITERATURE.name,
    difficulty: "Zor"
  },
  {
    id: 617,
    question: "Edebi bir eserde, anlatılan olayların kronolojik sırasının değiştirilerek geriye dönüş yapılması tekniğine ne ad verilir?",
    options: ["Bilinç akışı", "İç monolog", "Geriye dönüş (Flashback)", "Özetleme"],
    correct: 2,
    category: CATEGORIES.ART_LITERATURE.name,
    difficulty: "Orta"
  },
  {
    id: 618,
    question: "Hollandalı ressam Vincent van Gogh'un, meşhur 'Yıldızlı Gece' tablosunu yaptığı akım hangisidir?",
    options: ["Post-Empresyonizm", "Fovizm", "Sürrealizm", "Ekspresyonizm"],
    correct: 0,
    category: CATEGORIES.ART_LITERATURE.name,
    difficulty: "Zor"
  },
  {
    id: 619,
    question: "Divan edebiyatında aşk, güzellik, şarap gibi lirik konuları işleyen şiir türü nedir?",
    options: ["Kaside", "Mesnevi", "Gazel", "Rubai"],
    correct: 2,
    category: CATEGORIES.ART_LITERATURE.name,
    difficulty: "Kolay"
  },
  {
    id: 620,
    question: "Amerikan edebiyatının 'Kayıp Kuşak' yazarlarından, 'Çanlar Kimin İçin Çalıyor' ve 'Yaşlı Adam ve Deniz' eserlerinin sahibi kimdir?",
    options: ["F. Scott Fitzgerald", "William Faulkner", "Ernest Hemingway", "John Steinbeck"],
    correct: 2,
    category: CATEGORIES.ART_LITERATURE.name,
    difficulty: "Orta"
  },
  {
    id: 621,
    question: "Heykel sanatında, bir malzemeyi (taş, mermer) yontarak form çıkarma tekniğine ne ad verilir?",
    options: ["Döküm", "Additif (eklemeli) heykel", "Rölyef", "Subtraktif (çıkarımlı) heykel"],
    correct: 3,
    category: CATEGORIES.ART_LITERATURE.name,
    difficulty: "Orta"
  },
  {
    id: 622,
    question: "Edebiyatta, kişisel duygu ve düşüncelerin coşkulu bir dille anlatıldığı nazım türü nedir?",
    options: ["Epik (Destansı)", "Lirik (Coşkun)", "Didaktik (Öğretici)", "Dramatik (Tiyatro)"],
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
    options: ["Şato", "Dönüşüm", "Dava", "Amerika"],
    correct: 1,
    category: CATEGORIES.ART_LITERATURE.name,
    difficulty: "Kolay"
  },
  {
    id: 625,
    question: "Gotik mimarinin en belirgin özelliklerinden biri hangisidir?",
    options: ["Geniş ve kalın duvarlar", "Yuvarlak kemerler", "Sivri kemerler ve uçan payandalar", "Sütun ve üçgen alınlıklar"],
    correct: 2,
    category: CATEGORIES.ART_LITERATURE.name,
    difficulty: "Orta"
  },
  {
    id: 626,
    question: "Servet-i Fünun dönemi romanının en önemli temsilcisi olan ve 'Mavi ve Siyah' adlı eseriyle bilinen yazar kimdir?",
    options: ["Mehmet Rauf", "Recaizade Mahmut Ekrem", "Halit Ziya Uşaklıgil", "Nabizade Nazım"],
    correct: 2,
    category: CATEGORIES.ART_LITERATURE.name,
    difficulty: "Orta"
  },
  {
    id: 627,
    question: "Mitolojik ve dini konular yerine, günlük hayatı ve sıradan insanları konu edinen sanat akımı nedir?",
    options: ["Klasisizm", "Romantizm", "Realizm", "Sürrealizm"],
    correct: 2,
    category: CATEGORIES.ART_LITERATURE.name,
    difficulty: "Kolay"
  },
  {
    id: 628,
    question: "Türk Edebiyatında 'Kuyu' ve 'Yağmur Kaçağı' gibi eserleriyle İkinci Yeni şiirinin önde gelen isimlerinden biri kimdir?",
    options: ["Atilla İlhan", "Cemal Süreya", "Turgut Uyar", "Edip Cansever"],
    correct: 3,
    category: CATEGORIES.ART_LITERATURE.name,
    difficulty: "Zor"
  },
  {
    id: 629,
    question: "Heykelci Auguste Rodin'in en bilinen eserlerinden olan, düşünen insan figürünü tasvir eden heykel nedir?",
    options: ["Öpücük", "Davut", "Düşünen Adam", "Özgürlük Heykeli"],
    correct: 2,
    category: CATEGORIES.ART_LITERATURE.name,
    difficulty: "Kolay"
  },
  {
    id: 630,
    question: "Bir eserin konusunu, ana fikrini veya olay örgüsünü oluşturan temel ögeye ne ad verilir?",
    options: ["Tema", "Motif", "Mekân", "Zaman"],
    correct: 0,
    category: CATEGORIES.ART_LITERATURE.name,
    difficulty: "Kolay"
  },
  {
    id: 631,
    question: "Salvador Dalí'nin 'Belleğin Azmi' (Eriyen Saatler) adlı tablosu hangi sanat akımına aittir?",
    options: ["Ekspresyonizm", "Fütürizm", "Dadaizm", "Sürrealizm"],
    correct: 3,
    category: CATEGORIES.ART_LITERATURE.name,
    difficulty: "Orta"
  },
  {
    id: 632,
    question: "Türk halk şiirinde genellikle hece ölçüsüyle yazılan ve dört dizelik bentlerden oluşan nazım biçimi nedir?",
    options: ["Semaî", "Varsağı", "Koşma", "Destan"],
    correct: 2,
    category: CATEGORIES.ART_LITERATURE.name,
    difficulty: "Kolay"
  },
  {
    id: 633,
    question: "William Shakespeare'in dört büyük trajedisinden biri olmayan eser hangisidir?",
    options: ["Hamlet", "Othello", "Kral Lear", "Bir Yaz Gecesi Rüyası"],
    correct: 3,
    category: CATEGORIES.ART_LITERATURE.name,
    difficulty: "Orta"
  },
  {
    id: 634,
    question: "İslami sanatta, yazıya estetik bir görünüm kazandırma sanatına ne ad verilir?",
    options: ["Tezhip", "Minaytür", "Ebru", "Hat (Hüsn-i Hat)"],
    correct: 3,
    category: CATEGORIES.ART_LITERATURE.name,
    difficulty: "Kolay"
  },
  {
    id: 635,
    question: "Edebiyatta 'Absürt Tiyatro' akımının en önemli eserlerinden, Godot'yu Beklerken'in yazarı kimdir?",
    options: ["Albert Camus", "Jean-Paul Sartre", "Samuel Beckett", "Eugène Ionesco"],
    correct: 2,
    category: CATEGORIES.ART_LITERATURE.name,
    difficulty: "Zor"
  },
  {
    id: 636,
    question: "Türk resim sanatının ilk çağdaş ressamlarından olan ve 'Kaplumbağa Terbiyecisi' tablosuyla ünlü sanatçı kimdir?",
    options: ["Şeker Ahmet Paşa", "Osman Hamdi Bey", "İbrahim Çallı", "Feyhaman Duran"],
    correct: 1,
    category: CATEGORIES.ART_LITERATURE.name,
    difficulty: "Kolay"
  },
  {
    id: 637,
    question: "Bir eserde olayları anlatan, ancak anlatılanların dışında duran, olaylara karışmayan bakış açısı nedir?",
    options: ["Birinci tekil şahıs", "Kahraman bakış açısı", "Gözlemci bakış açısı", "Tanrısal bakış açısı"],
    correct: 2,
    category: CATEGORIES.ART_LITERATURE.name,
    difficulty: "Orta"
  },
  {
    id: 638,
    question: "Sanatta, özellikle resimde, ışık ve gölge karşıtlıklarını kullanarak hacim ve derinlik etkisi yaratma tekniğine ne ad verilir?",
    options: ["Sfumat", "Chiaroscuro (Işık-gölge)", "Perspektif", "Tenebrizm"],
    correct: 1,
    category: CATEGORIES.ART_LITERATURE.name,
    difficulty: "Zor"
  },
  {
    id: 639,
    question: "Divan şiirinde genellikle padişahı ya da dönemin ileri gelenlerini övmek için yazılan uzun şiirler nedir?",
    options: ["Gazel", "Kasid", "Kıt'a", "Terkib-i Bent"],
    correct: 1,
    category: CATEGORIES.ART_LITERATURE.name,
    difficulty: "Kolay"
  },
  {
    id: 640,
    question: "Gustave Flaubert'in, sıkıcı ve rutin evliliğinden kaçmaya çalışan bir kadının trajik hikayesini anlatan ünlü romanı hangisidir?",
    options: ["Kırmızı ve Siyah", "İnsanın Komedyası", "Madame Bovary", "Vadideki Zambak"],
    correct: 2,
    category: CATEGORIES.ART_LITERATURE.name,
    difficulty: "Orta"
  },
  {
    id: 641,
    question: "Sanatta, tek bir konuya odaklanmak yerine, gündelik nesneleri ve tüketim kültürünü konu edinen akım nedir?",
    options: ["Minimalizm", "Pop Art", "Dadaizm", "Fütürizm"],
    correct: 1,
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
    options: ["Aziz Petrus Bazilikası", "Panteon", "Sistine Şapeli", "Borghese Galerisi"],
    correct: 2,
    category: CATEGORIES.ART_LITERATURE.name,
    difficulty: "Kolay"
  },
  {
    id: 644,
    question: "Edebiyatta 'Bilinç Akışı' tekniğini kullanan ve 'Ulysses' adlı eseriyle modern edebiyatın öncülerinden sayılan yazar kimdir?",
    options: ["Marcel Proust", "James Joyce", "Virginia Woolf", "T.S. Eliot"],
    correct: 1,
    category: CATEGORIES.ART_LITERATURE.name,
    difficulty: "Zor"
  },
  {
    id: 645,
    question: "Bir resimde, nesnelerin ana hatlarını belirginleştiren çizgilere ne ad verilir?",
    options: ["Ton", "Işık", "Kontur (Çevre Çizgisi)", "Doku"],
    correct: 2,
    category: CATEGORIES.ART_LITERATURE.name,
    difficulty: "Kolay"
  },
  {
    id: 646,
    question: "Türk Halk Edebiyatı nazım türlerinden olup, yiğitlik, kahramanlık ve savaş temalarını işleyen şiirler nedir?",
    options: ["Koşma", "Semai", "Varsağı", "Destan"],
    correct: 3,
    category: CATEGORIES.ART_LITERATURE.name,
    difficulty: "Kolay"
  },
  {
    id: 647,
    question: "Mısır piramitleri hangi dönemin mimari özelliklerini taşır?",
    options: ["Yunan Klasik Dönemi", "Mezopotamya", "Antik Mısır Eski Krallık", "Roma İmparatorluğu"],
    correct: 2,
    category: CATEGORIES.ART_LITERATURE.name,
    difficulty: "Kolay"
  },
  {
    id: 648,
    question: "Nobel Edebiyat Ödülü alan ilk Türk yazar kimdir?",
    options: ["Orhan Pamuk", "Yaşar Kemal", "Nazım Hikmet Ran", "Adalet Ağaoğlu"],
    correct: 0,
    category: CATEGORIES.ART_LITERATURE.name,
    difficulty: "Kolay"
  },
  {
    id: 649,
    question: "Heykel sanatında, bir duvardan veya yüzeyden dışarı doğru çıkıntı yapan üç boyutlu esere ne ad verilir?",
    options: ["Büst", "Stela", "Rölyef (Kabartma)", "Torso"],
    correct: 2,
    category: CATEGORIES.ART_LITERATURE.name,
    difficulty: "Orta"
  },
  {
    id: 650,
    question: "Edebi akımlardan hangisi, insan aklını, mantığını ve evrensel kuralları ön planda tutar?",
    options: ["Romantizm", "Klasisizm", "Natüralizm", "Ekspresyonizm"],
    correct: 1,
    category: CATEGORIES.ART_LITERATURE.name,
    difficulty: "Orta"
  },
  {
    id: 651,
    question: "Hollandalı ressam Rembrandt'ın en bilinen ve büyük kompozisyonlarından biri olan eseri hangisidir?",
    options: ["İnci Küpeli Kız", "Gece Devriyesi", "Danaë", "Dr. Nicolaes Tulp'un Anatomi Dersi"],
    correct: 1,
    category: CATEGORIES.ART_LITERATURE.name,
    difficulty: "Zor"
  },
  {
    id: 652,
    question: "Türk edebiyatında 'Kürk Mantolu Madonna' adlı eseriyle bilinen yazar kimdir?",
    options: ["Refik Halit Karay", "Sabahattin Ali", "Reşat Nuri Güntekin", "Peyami Safa"],
    correct: 1,
    category: CATEGORIES.ART_LITERATURE.name,
    difficulty: "Kolay"
  },
  {
    id: 653,
    question: "Tiyatroda, bir karakterin sahnede yalnızken kendi kendine yüksek sesle konuşması tekniğine ne ad verilir?",
    options: ["Diyalog", "Monolog", "Tirad", "Fısıltı"],
    correct: 1,
    category: CATEGORIES.ART_LITERATURE.name,
    difficulty: "Orta"
  },
  {
    id: 654,
    question: "Gotik katedrallerde görülen, renkli camlarla yapılmış, dairesel ve büyük pencerelere ne ad verilir?",
    options: ["Büyük Pencereler", "Vitray", "Gül Pencere (Rozet)", "Ayna"],
    correct: 2,
    category: CATEGORIES.ART_LITERATURE.name,
    difficulty: "Orta"
  },
  {
    id: 655,
    question: "Bir şiirde, anlamca birbirine bağlı en az iki dizeden oluşan bölüme ne ad verilir?",
    options: ["Uyak", "Redif", "Dörtlük (Kıt'a)", "Ölçü (Vezin)"],
    correct: 2,
    category: CATEGORIES.ART_LITERATURE.name,
    difficulty: "Kolay"
  },
  {
    id: 656,
    question: "İngiliz edebiyatının 19. yüzyıl yazarlarından, 'Oliver Twist' ve 'İki Şehrin Hikayesi' eserleriyle tanınan yazar kimdir?",
    options: ["Jane Austen", "Charles Dickens", "Charlotte Brontë", "Thomas Hardy"],
    correct: 1,
    category: CATEGORIES.ART_LITERATURE.name,
    difficulty: "Kolay"
  },
  {
    id: 657,
    question: "İslam sanatlarında, altın tozu kullanılarak kitap, levha ve ferman süsleme sanatına ne ad verilir?",
    options: ["Ebru", "Minyatür", "Tezhip", "Çini"],
    correct: 2,
    category: CATEGORIES.ART_LITERATURE.name,
    difficulty: "Orta"
  },
  {
    id: 658,
    question: "Sanatta, bir nesnenin sadece temel geometrik şekillerini ve en az ayrıntısını kullanarak soyutlama yapan akım nedir?",
    options: ["Kübizm", "Sürrealizm", "Minimalizm", "Fovizm"],
    correct: 0,
    category: CATEGORIES.ART_LITERATURE.name,
    difficulty: "Orta"
  },
  {
    id: 659,
    question: "Türk edebiyatında 'Çalıkuşu' romanıyla bilinen, milli edebiyat akımının önde gelen isimlerinden yazar kimdir?",
    options: ["Halide Edip Adıvar", "Ömer Seyfettin", "Reşat Nuri Güntekin", "Aka Gündüz"],
    correct: 2,
    category: CATEGORIES.ART_LITERATURE.name,
    difficulty: "Kolay"
  },
  {
    id: 660,
    question: "Resimde, ışığın düşüş yönü ve renklerin çevresel etkilerle değişimi üzerine odaklanan Fransız sanat akımı hangisidir?",
    options: ["Realizm", "Romantizm", "Empresyonizm (İzlenimcilik)", "Dadaizm"],
    correct: 2,
    category: CATEGORIES.ART_LITERATURE.name,
    difficulty: "Kolay"
  },
  {
    id: 661,
    question: "Edebi eserde kullanılan kelimelerin çağrışım gücüne ve müzikalitesine önem veren akım nedir?",
    options: ["Sembolizm", "Parnasizm", "Realizm", "Natüralizm"],
    correct: 0,
    category: CATEGORIES.ART_LITERATURE.name,
    difficulty: "Zor"
  },
  {
    id: 662,
    question: "Antik Yunan mimarisinde, üst kısmı hayvan veya insan figürleriyle süslenmiş dik duran taşa ne ad verilir?",
    options: ["Kemer", "Sütun", "Friz", "Stela"],
    correct: 3,
    category: CATEGORIES.ART_LITERATURE.name,
    difficulty: "Orta"
  },
  {
    id: 663,
    question: "İtalyan şair Dante Alighieri'nin, cehennemden cennete yaptığı hayali yolculuğu anlatan başyapıtı nedir?",
    options: ["Cennet ve Cehennem", "İlahî Komedya", "Don Kişot", "On İki Sandalye"],
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
    options: ["Fütürizm", "Ekspresyonizm (Dışavurumculuk)", "Dadaizm", "Pop Art"],
    correct: 1,
    category: CATEGORIES.ART_LITERATURE.name,
    difficulty: "Orta"
  },
  {
    id: 666,
    question: "Bir roman veya hikayede, anlatıcının zihinsel süreçlerini doğrudan, düzensiz ve mantıksal bir sıra olmaksızın aktarma tekniği nedir?",
    options: ["İç monolog", "Geriye dönüş", "Özetleme", "Bilinç akışı"],
    correct: 3,
    category: CATEGORIES.ART_LITERATURE.name,
    difficulty: "Zor"
  },
  {
    id: 667,
    question: "Minyatür sanatının en önemli özelliklerinden biri hangisidir?",
    options: ["Gölgelendirme ve derinlik kullanılması", "Küçük boyutlu olması ve derinlik (perspektif) olmaması", "Yağlı boya ile yapılması", "Üç boyutlu görünümün ön planda olması"],
    correct: 1,
    category: CATEGORIES.ART_LITERATURE.name,
    difficulty: "Orta"
  },
  {
    id: 668,
    question: "Divan edebiyatında, beyit sayısı 33-99 arasında değişen, belirli bir düzeni olan nazım biçimi nedir?",
    options: ["Müseddes", "Terkib-i Bent", "Kaside", "Rubai"],
    correct: 2,
    category: CATEGORIES.ART_LITERATURE.name,
    difficulty: "Zor"
  },
  {
    id: 669,
    question: "Rus besteci Stravinsky'nin 1913'teki prömiyeri skandala neden olan, ritmik karmaşıklığı ile ünlü eseri nedir?",
    options: ["Kuğu Gölü", "Bahar Ayini", "Fındıkkıran", "Boléro"],
    correct: 1,
    category: CATEGORIES.ART_LITERATURE.name,
    difficulty: "Zor"
  },
  {
    id: 670,
    question: "Tanzimat edebiyatının ilk döneminde, 'Vatan yahut Silistre' oyunuyla tiyatro türünde ün kazanan yazar kimdir?",
    options: ["Şinasi", "Namık Kemal", "Ziya Paşa", "Ahmet Mithat Efendi"],
    correct: 1,
    category: CATEGORIES.ART_LITERATURE.name,
    difficulty: "Kolay"
  },
  {
    id: 671,
    question: "Yüzyıllık Yalnızlık' adlı eseriyle 'Büyülü Gerçekçilik' akımının en önemli temsilcilerinden sayılan yazar kimdir?",
    options: ["Jorge Luis Borges", "Julio Cortázar", "Gabriel García Márquez", "Isabel Allende"],
    correct: 2,
    category: CATEGORIES.ART_LITERATURE.name,
    difficulty: "Orta"
  },
  {
    id: 672,
    question: "Antik Yunan heykel sanatında, figürün ağırlığını bir bacağına vermesiyle oluşan rahat ve doğal duruşa ne ad verilir?",
    options: ["Kouros", "Kore", "Kontraposto", "Friz"],
    correct: 2,
    category: CATEGORIES.ART_LITERATURE.name,
    difficulty: "Zor"
  },
  {
    id: 673,
    question: "Türk edebiyatında 'Yedi Meşaleciler' topluluğunun yayımladığı tek ortak kitap hangisidir?",
    options: ["Memleketimden İnsan Manzaraları", "Yedi Meşale", "Güneşin Ölümü", "Geçtiğim Yol"],
    correct: 1,
    category: CATEGORIES.ART_LITERATURE.name,
    difficulty: "Zor"
  },
  {
    id: 674,
    question: "Van Gogh'un kendi kulağını kesmesine ilham veren ressam dostu kimdir?",
    options: ["Paul Gauguin", "Paul Cézanne", "Édouard Manet", "Henri Matisse"],
    correct: 0,
    category: CATEGORIES.ART_LITERATURE.name,
    difficulty: "Zor"
  },
  {
    id: 675,
    question: "Divan şiirinde Aruz ölçüsünü esas alıp, hece ölçüsüne karşı çıkan şair kimdir?",
    options: ["Yunus Emre", "Nedim", "Fuzuli", "Mehmet Akif Ersoy"],
    correct: 2, // Fuzuli Divan Şiirinin önemli temsilcisi, Aruz'u kullanmıştır.
    category: CATEGORIES.ART_LITERATURE.name,
    difficulty: "Orta"
  },
  {
    id: 676,
    question: "Bir romanda olay örgüsünü oluşturan ana çatışmaya ne ad verilir?",
    options: ["Düğüm", "Çözüm", "Kriz (Çatışma)", "Doku"],
    correct: 2,
    category: CATEGORIES.ART_LITERATURE.name,
    difficulty: "Kolay"
  },
  {
    id: 677,
    question: "Leonardo da Vinci'nin 'Son Akşam Yemeği' adlı eseri hangi yüzeye yapılmıştır?",
    options: ["Tuval", "Ahşap panel", "Duvar (Fresk)", "İpek"],
    correct: 2,
    category: CATEGORIES.ART_LITERATURE.name,
    difficulty: "Orta"
  },
  {
    id: 678,
    question: "Batı edebiyatında ilk roman örneği kabul edilen ve İspanyol yazar Cervantes'in eseri olan yapıt nedir?",
    options: ["Gargantua ve Pantagruel", "Don Kişot", "Robinson Crusoe", "Gulliver'in Gezileri"],
    correct: 1,
    category: CATEGORIES.ART_LITERATURE.name,
    difficulty: "Kolay"
  },
  {
    id: 679,
    question: "Dışavurumculuk (Ekspresyonizm) akımının en ünlü eserlerinden olan, çığlık atan figürü içeren tablo nedir?",
    options: ["Guernica", "Çığlık", "Yıldızlı Gece", "Otoportre"],
    correct: 1,
    category: CATEGORIES.ART_LITERATURE.name,
    difficulty: "Kolay"
  },
  {
    id: 680,
    question: "Türk Edebiyatında 'Kayıp Aranıyor' romanıyla bilinen ve modern Türk romanının önemli figürlerinden olan yazar kimdir?",
    options: ["Adalet Ağaoğlu", "Oğuz Atay", "Bilge Karasu", "Leyla Erbil"],
    correct: 0,
    category: CATEGORIES.ART_LITERATURE.name,
    difficulty: "Zor"
  },
  {
    id: 681,
    question: "Bir resim kompozisyonunda, figürlerin veya nesnelerin birbiriyle olan ilişkisi ve yerleşimi ne olarak adlandırılır?",
    options: ["Doku", "Hacim", "Kompozisyon", "Renk Skalası"],
    correct: 2,
    category: CATEGORIES.ART_LITERATURE.name,
    difficulty: "Orta"
  },
  {
    id: 682,
    question: "Halk edebiyatında, saz şairlerinin atışmalarında birbirlerine söyledikleri, taşlama niteliği taşıyan şiirler nedir?",
    options: ["Koşma", "Destan", "Atışma", "Mani"],
    correct: 2,
    category: CATEGORIES.ART_LITERATURE.name,
    difficulty: "Orta"
  },
  {
    id: 683,
    question: "Sanat tarihi açısından, Antik Yunan mimarisindeki üç temel sütun düzeninden biri olmayan hangisidir?",
    options: ["Dor", "İyon", "Korint", "Toskana"],
    correct: 3,
    category: CATEGORIES.ART_LITERATURE.name,
    difficulty: "Zor"
  },
  {
    id: 684,
    question: "Amerikalı yazar George Orwell'in totaliter bir rejimin eleştirisini yaptığı ünlü distopik romanı nedir?",
    options: ["Hayvan Çiftliği", "Cesur Yeni Dünya", "1984", "Sineklerin Tanrısı"],
    correct: 2,
    category: CATEGORIES.ART_LITERATURE.name,
    difficulty: "Kolay"
  },
  {
    id: 685,
    question: "Bir edebiyat eserinde, iki farklı durumun, duygunun veya fikrin zıtlık oluşturacak şekilde bir arada kullanılması sanatı nedir?",
    options: ["Tezat (Karşıtlık)", "Tecahül-i Ârif (Bilmezden Gelme)", "Hüsn-i Ta'lil (Güzel Nedene Bağlama)", "Mübalağa (Abartma)"],
    correct: 0,
    category: CATEGORIES.ART_LITERATURE.name,
    difficulty: "Orta"
  },
  {
    id: 686,
    question: "Rönesans'ın en önemli sanatçılarından olan ve 'Davut' heykeli ile Sistine Şapeli tavan resimlerini yapan sanatçı kimdir?",
    options: ["Rafael", "Donatello", "Michelangelo", "Tiziano"],
    correct: 2,
    category: CATEGORIES.ART_LITERATURE.name,
    difficulty: "Kolay"
  },
  {
    id: 687,
    question: "Türk edebiyatında 'Göl Saatleri' ve 'Piyale' gibi eserleriyle Sembolizm ve Empresyonizm akımlarının etkisiyle tanınan şair kimdir?",
    options: ["Ahmet Hamdi Tanpınar", "Necip Fazıl Kısakürek", "Ahmet Haşim", "Yahya Kemal Beyatlı"],
    correct: 2,
    category: CATEGORIES.ART_LITERATURE.name,
    difficulty: "Zor"
  },
  {
    id: 688,
    question: "Antik Yunan tiyatrosunda, seyircilerin oturduğu yarım daire şeklindeki alana ne ad verilir?",
    options: ["Skene", "Orchestra", "Parodos", "Theatron"],
    correct: 3,
    category: CATEGORIES.ART_LITERATURE.name,
    difficulty: "Zor"
  },
  {
    id: 689,
    question: "Hollandalı ressam Johannes Vermeer'in, en ünlü eserlerinden olan, bir genç kadının portresi nedir?",
    options: ["Mona Lisa", "İnci Küpeli Kız", "Giyotin Önünde Maria Antoinette", "Whistler'ın Annesi"],
    correct: 1,
    category: CATEGORIES.ART_LITERATURE.name,
    difficulty: "Kolay"
  },
  {
    id: 690,
    question: "Türk edebiyatında 'Cemo' ve 'İnce Memed' gibi eserleriyle Çukurova insanını anlatan usta yazar kimdir?",
    options: ["Kemal Tahir", "Orhan Kemal", "Yaşar Kemal", "Rıfat Ilgaz"],
    correct: 2,
    category: CATEGORIES.ART_LITERATURE.name,
    difficulty: "Kolay"
  },
  {
    id: 691,
    question: "Mitolojik hikayeler, tanrı ve tanrıçaların yaşamları gibi konuları ele alan sanat akımı nedir?",
    options: ["Romantizm", "Klasisizm", "Realizm", "Sürrealizm"],
    correct: 1,
    category: CATEGORIES.ART_LITERATURE.name,
    difficulty: "Orta"
  },
  {
    id: 692,
    question: "Türk Halk Edebiyatı'nda aşk, doğa, ayrılık gibi konuları işleyen, hece ölçüsünün 11'li kalıbıyla yazılan şiirler nedir?",
    options: ["Mani", "Koşma", "Destan", "Türkü"],
    correct: 1,
    category: CATEGORIES.ART_LITERATURE.name,
    difficulty: "Kolay"
  },
  {
    id: 693,
    question: "Bir resmin veya fotoğrafın, sanatçının imzasıyla birlikte birden fazla kopyasının basılması işlemine ne ad verilir?",
    options: ["Orijinal", "Replika", "Litografi (Baskı)", "Heykel"],
    correct: 2,
    category: CATEGORIES.ART_LITERATURE.name,
    difficulty: "Orta"
  },
  {
    id: 694,
    question: "Rus yazar Lev Tolstoy'un Napolyon'un Rusya'yı işgali dönemini anlatan, epik ve tarihi romanı hangisidir?",
    options: ["Anna Karenina", "Savaş ve Barış", "Diriliş", "İnsan Ne İle Yaşar?"],
    correct: 1,
    category: CATEGORIES.ART_LITERATURE.name,
    difficulty: "Kolay"
  },
  {
    id: 695,
    question: "Edebiyatta 'Aydınlanma' döneminin temelini oluşturan, aklı ve bilimi esas alan felsefi akım nedir?",
    options: ["Rasyonalizm", "Ampirizm", "Determinizm", "Egzistansiyalizm"],
    correct: 0,
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
    options: ["Komedya", "Trajedi", "Dramatik İroni", "Diyalog"],
    correct: 2,
    category: CATEGORIES.ART_LITERATURE.name,
    difficulty: "Orta"
  },
  {
    id: 698,
    question: "Osmanlı mimarisinde, camilerin içini ve dışını süslemek için kullanılan, genelde çiçek ve geometrik desenli, sırlı seramik kaplamalara ne ad verilir?",
    options: ["Tezhip", "Minyatür", "Hat", "Çini"],
    correct: 3,
    category: CATEGORIES.ART_LITERATURE.name,
    difficulty: "Kolay"
  },
  {
    id: 699,
    question: "Divan şiirinde, hem aruz hem de hece ölçüsünü ustalıkla kullanan, 'Şair-i Azam' (Büyük Şair) unvanıyla anılan Tanzimat dönemi şairi kimdir?",
    options: ["Namık Kemal", "Abdülhak Hamit Tarhan", "Recaizade Mahmut Ekrem", "Tevfik Fikret"],
    correct: 1,
    category: CATEGORIES.ART_LITERATURE.name,
    difficulty: "Zor"
  },
  {
    id: 700,
    question: "Resimde, renklerin birbirine karışmadan, yan yana küçük noktalar halinde kullanılması tekniği nedir?",
    options: ["Fırça Darbesi", "Sfumato", "Noktacılık (Pointillizm)", "Empasto"],
    correct: 2,
    category: CATEGORIES.ART_LITERATURE.name,
    difficulty: "Zor"
  },
  {
    id: 701,
    question: "Homeros'un, Truva Savaşı'nı ve on yıl süren mücadeleyi anlatan ünlü destanı nedir?",
    options: ["Odysseia", "Aeneis", "İlyada", "Ramayana"],
    correct: 2,
    category: "Sanat ve Edebiyat",
    difficulty: "Kolay"
  },
  {
    id: 702,
    question: "Rönesans döneminde, 'Son Akşam Yemeği' ve 'Mona Lisa' eserleriyle tanınan İtalyan sanatçı kimdir?",
    options: ["Michelangelo", "Raphael", "Leonardo da Vinci", "Donatello"],
    correct: 2,
    category: "Sanat ve Edebiyat",
    difficulty: "Kolay"
  },
  {
    id: 703,
    question: "19. yüzyılda, duygu, hayal ve kişisel özgürlüğe önem veren, klasisizme tepki olarak doğan edebiyat akımı nedir?",
    options: ["Realizm", "Romantizm", "Natüralizm", "Sembolizm"],
    correct: 1,
    category: "Sanat ve Edebiyat",
    difficulty: "Kolay"
  },
  {
    id: 704,
    question: "Ünlü 'Çığlık' tablosu ile tanınan, dışavurumculuk akımının öncülerinden olan Norveçli ressam kimdir?",
    options: ["Vincent van Gogh", "Claude Monet", "Edvard Munch", "Gustav Klimt"],
    correct: 2,
    category: "Sanat ve Edebiyat",
    difficulty: "Kolay"
  },
  {
    id: 705,
    question: "Türk edebiyatında, 'Kuyucaklı Yusuf', 'İçimizdeki Şeytan' gibi eserleriyle tanınan yazar kimdir?",
    options: ["Yaşar Kemal", "Orhan Pamuk", "Sabahattin Ali", "Halide Edip Adıvar"],
    correct: 2,
    category: "Sanat ve Edebiyat",
    difficulty: "Kolay"
  },
  {
    id: 706,
    question: "Edebiyatta, yaşamın ve doğanın gerçekliğini olduğu gibi, nesnel bir biçimde yansıtmayı amaçlayan akım nedir?",
    options: ["Parnasizm", "Romantizm", "Realizm", "Sürrealizm"],
    correct: 2,
    category: "Sanat ve Edebiyat",
    difficulty: "Kolay"
  },
  {
    id: 707,
    question: "Antik Yunan tiyatrosunda, trajedinin en büyük üç yazarından biri olarak kabul edilen ve 'Oidipus' eseriyle bilinen isim kimdir?",
    options: ["Aristophanes", "Euripides", "Sophokles", "Aiskhylos"],
    correct: 2,
    category: "Sanat ve Edebiyat",
    difficulty: "Orta"
  },
  {
    id: 708,
    question: "'Yıldızlı Gece' tablosuyla tanınan, empresyonizm sonrası dönemin en etkili sanatçılarından olan ressam kimdir?",
    options: ["Paul Cézanne", "Pablo Picasso", "Vincent van Gogh", "Pierre-Auguste Renoir"],
    correct: 2,
    category: "Sanat ve Edebiyat",
    difficulty: "Kolay"
  },
  {
    id: 709,
    question: "Tanzimat edebiyatında, ilk yerli roman kabul edilen ve Şemseddin Sami tarafından yazılan eser nedir?",
    options: ["Araba Sevdası", "İntibah", "Taaşşuk-ı Talat ve Fitnat", "Cezmi"],
    correct: 2,
    category: "Sanat ve Edebiyat",
    difficulty: "Orta"
  },
  {
    id: 710,
    question: "Modern sanatta, nesneleri geometrik şekillere ayırarak çoklu bakış açısıyla resmeden akım nedir?",
    options: ["Fovizm", "Sürrealizm", "Kübizm", "Ekspresyonizm"],
    correct: 2,
    category: "Sanat ve Edebiyat",
    difficulty: "Kolay"
  },
  {
    id: 711,
    question: "William Shakespeare'in, Danimarka Prensi'nin intikam hikayesini anlatan ünlü trajedisi nedir?",
    options: ["Othello", "Macbeth", "Hamlet", "Kral Lear"],
    correct: 2,
    category: "Sanat ve Edebiyat",
    difficulty: "Kolay"
  },
  {
    id: 712,
    question: "19. yüzyıl Fransız edebiyatında, realist akımın en önemli temsilcilerinden olan ve 'Madam Bovary' romanıyla tanınan yazar kimdir?",
    options: ["Honoré de Balzac", "Victor Hugo", "Gustave Flaubert", "Émile Zola"],
    correct: 2,
    category: "Sanat ve Edebiyat",
    difficulty: "Orta"
  },
  {
    id: 713,
    question: "İslam sanatında, yazıların estetik bir şekilde düzenlenmesi ve süslenmesi sanatı nedir?",
    options: ["Minyatür", "Çini", "Hüsn-i Hat (Hat Sanatı)", "Ebru"],
    correct: 2,
    category: "Sanat ve Edebiyat",
    difficulty: "Kolay"
  },
  {
    id: 714,
    question: "Dış dünyayı değil, bireyin iç dünyasındaki izlenimleri ve duyguları sembollerle ifade etmeyi amaçlayan şiir akımı nedir?",
    options: ["Parnasizm", "Fütürizm", "Sembolizm", "Kübik Şiir"],
    correct: 2,
    category: "Sanat ve Edebiyat",
    difficulty: "Kolay"
  },
  {
    id: 715,
    question: "İzlenimcilik (Empresyonizm) akımının isim babası sayılan ve 'İzlenim: Gün Doğumu' tablosuyla tanınan ressam kimdir?",
    options: ["Edgar Degas", "Pierre-Auguste Renoir", "Claude Monet", "Édouard Manet"],
    correct: 2,
    category: "Sanat ve Edebiyat",
    difficulty: "Kolay"
  },
  {
    id: 716,
    question: "Türk Halk Edebiyatı'nda, aşıkların saz eşliğinde söylediği, genellikle aşk, doğa, kahramanlık konularını işleyen şiir türü nedir?",
    options: ["Gazel", "Kasida", "Koşma", "Mersiye"],
    correct: 2,
    category: "Sanat ve Edebiyat",
    difficulty: "Kolay"
  },
  {
    id: 717,
    question: "Resim, heykel ve mimaride, 17. yüzyılda ortaya çıkan, abartılı hareket, zengin süsleme ve dramatik etkiyi ön plana çıkaran sanat akımı nedir?",
    options: ["Gotik", "Neoklasisizm", "Barok", "Rokoko"],
    correct: 2,
    category: "Sanat ve Edebiyat",
    difficulty: "Orta"
  },
  {
    id: 718,
    question: "Franz Kafka'nın, baş kahramanın bir sabah böceğe dönüşmesini anlatan ünlü eseri nedir?",
    options: ["Dava", "Şato", "Dönüşüm", "Amerika"],
    correct: 2,
    category: "Sanat ve Edebiyat",
    difficulty: "Kolay"
  },
  {
    id: 719,
    question: "Modern sanatta, rastlantısallık, mantık dışılık ve geleneksel estetiğe karşı çıkışı esas alan akım nedir?",
    options: ["Pop Art", "Fütürizm", "Dadaizm", "Sürrealizm"],
    correct: 2,
    category: "Sanat ve Edebiyat",
    difficulty: "Orta"
  },
  {
    id: 720,
    question: "Türk Divan Edebiyatı'nda, genellikle 5 ila 15 beyitten oluşan, aşk, güzellik, şarap gibi konuları işleyen şiir türü nedir?",
    options: ["Kasida", "Mesnevi", "Gazel", "Terkib-i Bend"],
    correct: 2,
    category: "Sanat ve Edebiyat",
    difficulty: "Kolay"
  },
  {
    id: 721,
    question: "Salvador Dalí'nin 'Belleğin Azmi' (Eriyen Saatler) tablosu hangi sanat akımının en önemli örneklerindendir?",
    options: ["Kübizm", "Dadaizm", "Sürrealizm", "Fovizm"],
    correct: 2,
    category: "Sanat ve Edebiyat",
    difficulty: "Kolay"
  },
  {
    id: 722,
    question: "Türk edebiyatında, Kurtuluş Savaşı'nı konu alan 'Yaban' ve 'Ankara' romanlarıyla tanınan yazar kimdir?",
    options: ["Reşat Nuri Güntekin", "Halide Edip Adıvar", "Yakup Kadri Karaosmanoğlu", "Falih Rıfkı Atay"],
    correct: 2,
    category: "Sanat ve Edebiyat",
    difficulty: "Kolay"
  },
  {
    id: 723,
    question: "Antik Yunan ve Roma sanatının ideal ve rasyonel özelliklerini temel alan, 18. yüzyılda Barok ve Rokoko'ya tepki olarak doğan akım nedir?",
    options: ["Gotik", "Barok", "Neoklasisizm", "Romantizm"],
    correct: 2,
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
    options: ["Karamazov Kardeşler", "Budala", "Suç ve Ceza", "Yer Altından Notlar"],
    correct: 2,
    category: "Sanat ve Edebiyat",
    difficulty: "Kolay"
  },
  {
    id: 726,
    question: "Türk mimarisinde, 16. yüzyılda yaşamış ve 'ustalık eserim' dediği Selimiye Camii'ni inşa eden mimar kimdir?",
    options: ["Mimar Hayreddin", "Mimar Kemalettin", "Mimar Sinan", "Davut Ağa"],
    correct: 2,
    category: "Sanat ve Edebiyat",
    difficulty: "Kolay"
  },
  {
    id: 727,
    question: "Sanatta, duygusal coşkunluğu, iç gözlemi ve bireyin öznel deneyimlerini abartılı renk ve fırça darbeleriyle ifade eden akım nedir?",
    options: ["Fovizm", "Sürrealizm", "Ekspresyonizm (Dışavurumculuk)", "Pop Art"],
    correct: 2,
    category: "Sanat ve Edebiyat",
    difficulty: "Orta"
  },
  {
    id: 728,
    question: "Edebiyatta, akla ve mantığa dayanarak, kurallara bağlı ve açık bir anlatımı savunan akım nedir?",
    options: ["Romantizm", "Sembolizm", "Klasisizm", "Realizm"],
    correct: 2,
    category: "Sanat ve Edebiyat",
    difficulty: "Kolay"
  },
  {
    id: 729,
    question: "Ünlü heykeli 'Davut' ve Sistine Şapeli'ndeki tavan freskleriyle tanınan Rönesans sanatçısı kimdir?",
    options: ["Leonardo da Vinci", "Raphael", "Michelangelo", "Tiziano"],
    correct: 2,
    category: "Sanat ve Edebiyat",
    difficulty: "Kolay"
  },
  {
    id: 730,
    question: "20. yüzyıl Türk şiirinde, 'Kapalı Çarşı' ve 'Çarşı'ya İnerken' gibi eserleriyle tanınan, modern ve gelenekseli harmanlayan şair kimdir?",
    options: ["Necip Fazıl Kısakürek", "Cahit Sıtkı Tarancı", "Asaf Halet Çelebi", "Orhan Veli Kanık"],
    correct: 2,
    category: "Sanat ve Edebiyat",
    difficulty: "Orta"
  },
  {
    id: 731,
    question: "Sessizliği, uyumu ve müzikaliteyi esas alan, anlamın kapalılığını ve çağrışımı öne çıkaran Fransız şiir akımı nedir?",
    options: ["Parnasizm", "Realizm", "Sembolizm", "Fütürizm"],
    correct: 2,
    category: "Sanat ve Edebiyat",
    difficulty: "Kolay"
  },
  {
    id: 732,
    question: "George Orwell'ın, totaliter bir geleceği ve 'Büyük Birader' figürünü anlatan distopik romanı nedir?",
    options: ["Hayvan Çiftliği", "Cesur Yeni Dünya", "Bin Dokuz Yüz Seksen Dört", "Otomatik Portakal"],
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
    options: ["Gece Devriyesi", "Mona Lisa", "İnci Küpeli Kız", "Guernica"],
    correct: 2,
    category: "Sanat ve Edebiyat",
    difficulty: "Kolay"
  },
  {
    id: 735,
    question: "Edebi eserlerde, dış gözlem yerine kahramanın bilinç akışını ve iç monologlarını kullanan anlatım tekniği nedir?",
    options: ["Gözlem Tekniği", "Özetleme", "Bilinç Akışı", "Geriyedönüş"],
    correct: 2,
    category: "Sanat ve Edebiyat",
    difficulty: "Orta"
  },
  {
    id: 736,
    question: "İspanyol ressam Francisco Goya'nın, Napolyon ordusunun İspanyol isyancıları idamını konu alan ünlü eseri nedir?",
    options: ["Maja Çıplak", "Satürn Çocuğunu Yerken", "3 Mayıs 1808", "Çıplak Giyimli"],
    correct: 2,
    category: "Sanat ve Edebiyat",
    difficulty: "Orta"
  },
  {
    id: 737,
    question: "Türk edebiyatında, halk hikayelerinden esinlenerek 'İnce Memed' destanını yazan yazar kimdir?",
    options: ["Kemal Tahir", "Aziz Nesin", "Yaşar Kemal", "Orhan Kemal"],
    correct: 2,
    category: "Sanat ve Edebiyat",
    difficulty: "Kolay"
  },
  {
    id: 738,
    question: "Sanatta, gündelik yaşamın nesnelerini ve popüler kültürü eserlerine taşıyan, 1950'lerde ortaya çıkan akım nedir?",
    options: ["Minimalizm", "Fütürizm", "Pop Art", "Soyut Ekspresyonizm"],
    correct: 2,
    category: "Sanat ve Edebiyat",
    difficulty: "Kolay"
  },
  {
    id: 739,
    question: "Şiirde, biçim mükemmelliğine, nesnelliğe ve dış dünyaya ait betimlemelere önem veren, Romantizme tepki olarak doğan akım nedir?",
    options: ["Sembolizm", "Fütürizm", "Parnasizm", "Sürrealizm"],
    correct: 2,
    category: "Sanat ve Edebiyat",
    difficulty: "Orta"
  },
  {
    id: 740,
    question: "Nobel Edebiyat Ödülü alan ilk Türk yazar kimdir?",
    options: ["Yaşar Kemal", "Nazım Hikmet", "Orhan Pamuk", "Adalet Ağaoğlu"],
    correct: 2,
    category: "Sanat ve Edebiyat",
    difficulty: "Kolay"
  },
  {
    id: 741,
    question: "Klasik müzikte, duygu ve coşkunun ön planda olduğu, 19. yüzyıla damgasını vuran dönem nedir?",
    options: ["Barok Dönem", "Klasik Dönem", "Romantik Dönem", "Modern Dönem"],
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
    options: ["Realizm", "Klasisizm", "Modernizm", "Natüralizm"],
    correct: 2,
    category: "Sanat ve Edebiyat",
    difficulty: "Kolay"
  },
  {
    id: 744,
    question: "Rönesans döneminde, 'Atina Okulu' freski ile tanınan, İtalyan yüksek Rönesans ressamı kimdir?",
    options: ["Leonardo da Vinci", "Michelangelo", "Raphael", "Donatello"],
    correct: 2,
    category: "Sanat ve Edebiyat",
    difficulty: "Kolay"
  },
  {
    id: 745,
    question: "Türk edebiyatında, 'Çocuk ve Allah', 'Otuz Beş Yaş' gibi eserleriyle tanınan ve hece ölçüsünü modernleştiren şair kimdir?",
    options: ["Yahya Kemal Beyatlı", "Nazım Hikmet", "Cahit Sıtkı Tarancı", "Ahmet Haşim"],
    correct: 2,
    category: "Sanat ve Edebiyat",
    difficulty: "Kolay"
  },
  {
    id: 746,
    question: "Sanatta, renklerin parlak ve saf kullanımı, hızlı fırça darbeleri ve geçici anın yakalanması hangi akımın özelliğidir?",
    options: ["Kübİzm", "Ekspresyonizm", "Empresyonizm (İzlenimcilik)", "Fovizm"],
    correct: 2,
    category: "Sanat ve Edebiyat",
    difficulty: "Kolay"
  },
  {
    id: 747,
    question: "Divan Edebiyatı'nda, bir padişahı ya da üst düzey bir kişiyi övmek amacıyla yazılan uzun şiir türü nedir?",
    options: ["Gazel", "Mesnevi", "Kasida", "Kıt'a"],
    correct: 2,
    category: "Sanat ve Edebiyat",
    difficulty: "Kolay"
  },
  {
    id: 748,
    question: "İngiliz şair Lord Byron'ın kahraman tipini yansıtan, toplumdan dışlanmış, asi ve gizemli karakterin adı nedir?",
    options: ["Klasik Kahraman", "Don Kişot", "Byronik Kahraman", "Faust"],
    correct: 2,
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
    options: ["Orta Çağ", "Barok", "Antik Yunan ve Roma", "Modern Sanat"],
    correct: 2,
    category: "Sanat ve Edebiyat",
    difficulty: "Kolay"
  },
  {
    id: 751,
    question: "20. yüzyılın başlarında, İtalyan sanatçıların teknolojiyi, hızı ve dinamizmi yücelten akımı nedir?",
    options: ["Dadaizm", "Sürrealizm", "Fütürizm", "Kübizm"],
    correct: 2,
    category: "Sanat ve Edebiyat",
    difficulty: "Kolay"
  },
  {
    id: 752,
    question: "Bir şiirde, dizelerin ilk harflerinin yukarıdan aşağıya doğru anlamlı bir sözcük veya isim oluşturması tekniği nedir?",
    options: ["Asonans", "Aliterasyon", "Akrostiş", "Manzume"],
    correct: 2,
    category: "Sanat ve Edebiyat",
    difficulty: "Orta"
  },
  {
    id: 753,
    question: "Hollandalı ressam Hieronymus Bosch'un, fantastik, grotesk ve alegorik eserleriyle tanınan tablosu nedir?",
    options: ["Cennet Bahçesi", "Son Akşam Yemeği", "Yıldızlı Gece", "Adem'in Yaratılışı"],
    correct: 0,
    category: "Sanat ve Edebiyat",
    difficulty: "Zor"
  },
  {
    id: 754,
    question: "Türk edebiyatında, Milli Edebiyat döneminin önemli isimlerinden olan ve 'Türkçülük' akımının düşünsel temelini atan yazar kimdir?",
    options: ["Ömer Seyfettin", "Mehmet Akif Ersoy", "Ziya Gökalp", "Halide Edip Adıvar"],
    correct: 2,
    category: "Sanat ve Edebiyat",
    difficulty: "Kolay"
  },
  {
    id: 755,
    question: "Sanat tarihinde, ışık ve gölge kontrastını (Chiaroscuro) ustaca kullanarak dramatik etki yaratan İtalyan Barok ressamı kimdir?",
    options: ["Rembrandt", "Rubens", "Caravaggio", "Velázquez"],
    correct: 2,
    category: "Sanat ve Edebiyat",
    difficulty: "Orta"
  },
  {
    id: 756,
    question: "Romanda, yazarın olayları ve karakterleri, kendi yorumunu katmadan, bir bilim insanı gibi gözlemleyerek aktardığı akım nedir?",
    options: ["Sembolizm", "Klasisizm", "Natüralizm", "Romantizm"],
    correct: 2,
    category: "Sanat ve Edebiyat",
    difficulty: "Kolay"
  },
  {
    id: 757,
    question: "Pablo Picasso'nun, İspanya İç Savaşı sırasındaki bir kasabanın bombalanmasını tasvir eden ve Kübizmin etkilerini taşıyan başyapıtı nedir?",
    options: ["Avignonlu Kızlar", "Dora Maar'ın Portresi", "Guernica", "Yaşlı Adamın Gitmesi"],
    correct: 2,
    category: "Sanat ve Edebiyat",
    difficulty: "Kolay"
  },
  {
    id: 758,
    question: "Tanzimat Dönemi'nde ilk edebi roman kabul edilen, Namık Kemal'in 'Ali Bey'in yasak aşkını' konu alan eseri nedir?",
    options: ["Araba Sevdası", "Cezmi", "İntibah", "Vatan Yahut Silistre"],
    correct: 2,
    category: "Sanat ve Edebiyat",
    difficulty: "Kolay"
  },
  {
    id: 759,
    question: "20. yüzyıl sanatında, sanat eserinin kendisinden çok, yaratılma süreci ve kavramsal fikirlerin önemini vurgulayan akım nedir?",
    options: ["Soyut Ekspresyonizm", "Pop Art", "Kavramsal Sanat", "Op Art"],
    correct: 2,
    category: "Sanat ve Edebiyat",
    difficulty: "Orta"
  },
  {
    id: 760,
    question: "Divan Edebiyatı'nda, Hz. Muhammed'i övmek amacıyla yazılan şiir türü nedir?",
    options: ["Tevhid", "Münacaat", "Naat", "Hicviye"],
    correct: 2,
    category: "Sanat ve Edebiyat",
    difficulty: "Kolay"
  },
  {
    id: 761,
    question: "Fransız ressam Jean-Honoré Fragonard'ın 'Salıncak' tablosu, hangi sanat akımının hafif, zarif ve eğlenceli ruhunu yansıtır?",
    options: ["Neoklasisizm", "Barok", "Rokoko", "Empresyonizm"],
    correct: 2,
    category: "Sanat ve Edebiyat",
    difficulty: "Orta"
  },
  {
    id: 762,
    question: "Türk masal, efsane ve hikayelerinin başkahramanı olan ve 'yarı melek, yarı insan' figürünü temsil eden isim nedir?",
    options: ["Dede Korkut", "Nasreddin Hoca", "Keloğlan", "Hızır"],
    correct: 2,
    category: "Sanat ve Edebiyat",
    difficulty: "Kolay"
  },
  {
    id: 763,
    question: "Gotik mimarinin en belirgin özelliklerinden biri olan, binanın ağırlığını dışarıya aktarmaya yarayan yapısal destek nedir?",
    options: ["Sütun", "Kemer", "Uçan Payanda", "Kubbeler"],
    correct: 2,
    category: "Sanat ve Edebiyat",
    difficulty: "Orta"
  },
  {
    id: 764,
    question: "Bir şiirde, aynı seslerin veya hecelerin tekrarıyla ritim oluşturulması tekniği nedir?",
    options: ["Teşbih (Benzetme)", "İstiare", "Aliterasyon ve Asonans", "Mecaz-ı Mürsel"],
    correct: 2,
    category: "Sanat ve Edebiyat",
    difficulty: "Kolay"
  },
  {
    id: 765,
    question: "Jules Verne'in, Phileas Fogg'un bir iddia üzerine çıktığı dünya turunu anlatan ünlü macera romanı nedir?",
    options: ["Denizler Altında Yirmi Bin Fersah", "Ay'a Seyahat", "Seksen Günde Devr-i Alem", "Kaptan Grant'ın Çocukları"],
    correct: 2,
    category: "Sanat ve Edebiyat",
    difficulty: "Kolay"
  },
  {
    id: 766,
    question: "Ressam Piet Mondrian'ın, sadece yatay ve dikey çizgiler ile ana renkleri (kırmızı, mavi, sarı) kullandığı sanat akımı nedir?",
    options: ["Minimalizm", "Fovizm", "De Stijl (Neoplastisizm)", "Op Art"],
    correct: 2,
    category: "Sanat ve Edebiyat",
    difficulty: "Orta"
  },
  {
    id: 767,
    question: "Türk edebiyatında, şiiri düz yazıya yaklaştıran, ölçü ve uyaktan vazgeçen Garip Hareketi'nin (Birinci Yeni) en önemli temsilcisi kimdir?",
    options: ["Attila İlhan", "Cemal Süreya", "Orhan Veli Kanık", "Turgut Uyar"],
    correct: 2,
    category: "Sanat ve Edebiyat",
    difficulty: "Kolay"
  },
  {
    id: 768,
    question: "Müziği, şiiri ve resmi birleştirmeyi amaçlayan, sembolizmden etkilenen, 19. yüzyıl sonunda ortaya çıkan akım nedir?",
    options: ["Fütürizm", "Ekspresyonizm", "Sembolizm", "Art Nouveau"],
    correct: 2,
    category: "Sanat ve Edebiyat",
    difficulty: "Zor"
  },
  {
    id: 769,
    question: "Bir romanın veya hikayenin olaylarının geçtiği zaman ve mekan bütünlüğüne ne ad verilir?",
    options: ["Karakter", "Tema", "Mekan-Zaman (Ortam)", "Anlatıcı"],
    correct: 2,
    category: "Sanat ve Edebiyat",
    difficulty: "Kolay"
  },
  {
    id: 770,
    question: "Amerikalı sanatçı Andy Warhol'un, seri üretim ve tüketim kültürünü konu edindiği 'Campbell's Soup Cans' eseri hangi akıma aittir?",
    options: ["Sürrealizm", "Dadaizm", "Pop Art", "Minimalizm"],
    correct: 2,
    category: "Sanat ve Edebiyat",
    difficulty: "Kolay"
  },
  {
    id: 771,
    question: "İngiliz şair John Milton'ın, Adem ve Havva'nın Cennet'ten kovuluşunu anlatan ünlü epik şiiri nedir?",
    options: ["İlahi Komedya", "Odysseia", "Kayıp Cennet", "Faust"],
    correct: 2,
    category: "Sanat ve Edebiyat",
    difficulty: "Orta"
  },
  {
    id: 772,
    question: "Mimaride, sade, işlevsel ve süslemesiz yapıları savunan, 'az daha çoktur' (less is more) felsefesine dayanan akım nedir?",
    options: ["Gotik", "Barok", "Minimalizm (veya Modern Mimari)", "Art Nouveau"],
    correct: 2,
    category: "Sanat ve Edebiyat",
    difficulty: "Kolay"
  },
  {
    id: 773,
    question: "Türk edebiyatında, 'Eylül' romanıyla ilk psikolojik roman örneğini veren yazar kimdir?",
    options: ["Halit Ziya Uşaklıgil", "Mehmet Rauf", "Hüseyin Rahmi Gürpınar", "Recaizade Mahmut Ekrem"],
    correct: 1,
    category: "Sanat ve Edebiyat",
    difficulty: "Kolay"
  },
  {
    id: 774,
    question: "Heykel sanatında, malzemenin (mermer, tunç vb.) yüzeyini pürüzsüz bırakarak figürün ideal güzelliğini ön plana çıkaran tarz hangi döneme aittir?",
    options: ["Barok", "Ekspresyonizm", "Klasik (Yunan/Roma)", "Gotik"],
    correct: 2,
    category: "Sanat ve Edebiyat",
    difficulty: "Kolay"
  },
  {
    id: 775,
    question: "İtalyan yazar Dante Alighieri'nin, cehennem, araf ve cennet yolculuğunu anlatan başyapıtı nedir?",
    options: ["Decameron", "Canterbury Hikayeleri", "İlahi Komedya", "Kaybolan Cennet"],
    correct: 2,
    category: "Sanat ve Edebiyat",
    difficulty: "Kolay"
  },
  {
    id: 776,
    question: "Sanat eserlerinde derinlik hissini yaratmak için, nesnelerin büyüklüğünü ve konumunu matematiksel kurallarla düzenleyen teknik nedir?",
    options: ["Chiaroscuro", "Sfumato", "Perspektif", "Kolaj"],
    correct: 2,
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
    options: ["Pop Art", "Op Art", "Soyut Ekspresyonizm (Action Painting)", "Kavramsal Sanat"],
    correct: 2,
    category: "Sanat ve Edebiyat",
    difficulty: "Orta"
  },
  {
    id: 779,
    question: "Felsefi ve edebi bir akım olarak, insan varlığının özünden önce geldiğini, özgürlüğü ve sorumluluğu vurgulayan düşünce nedir?",
    options: ["Rasyonalizm", "Natüralizm", "Egzistansiyalizm (Varoluşçuluk)", "Pozitivizm"],
    correct: 2,
    category: "Sanat ve Edebiyat",
    difficulty: "Orta"
  },
  {
    id: 780,
    question: "Amerikalı yazar J. D. Salinger'ın, ergenlik dönemindeki Holden Caulfield karakterini anlatan kült romanı nedir?",
    options: ["Bülbülü Öldürmek", "Yolda", "Çavdar Tarlasında Çocuklar", "Gazap Üzümleri"],
    correct: 2,
    category: "Sanat ve Edebiyat",
    difficulty: "Kolay"
  },
  {
    id: 781,
    question: "Bizans ve Osmanlı sanatında, küçük, renkli cam veya taş parçacıklarının (tessera) bir araya getirilmesiyle yapılan sanat eseri nedir?",
    options: ["Fresk", "Minyatür", "Mozaik", "Çini"],
    correct: 2,
    category: "Sanat ve Edebiyat",
    difficulty: "Kolay"
  },
  {
    id: 782,
    question: "Edebiyatta, akıl ve mantık kurallarını terk ederek, bilinçaltı, rüyalar ve rastlantısallıkla eser yaratmayı amaçlayan akım nedir?",
    options: ["Dadaizm", "Fütürizm", "Sürrealizm", "Parnasizm"],
    correct: 2,
    category: "Sanat ve Edebiyat",
    difficulty: "Kolay"
  },
  {
    id: 783,
    question: "Türk Halk Edebiyatı'nda, Divan Edebiyatı'nın etkisiyle ortaya çıkan, aruz ölçüsüyle yazılan şiir türü nedir?",
    options: ["Koşma", "Mani", "Divan (Türkü)", "Semaî"],
    correct: 2,
    category: "Sanat ve Edebiyat",
    difficulty: "Orta"
  },
  {
    id: 784,
    question: "İtalyan mimar Filippo Brunelleschi'nin, Floransa Katedrali'nin kubbesini inşa etmesi hangi sanat döneminin başlangıcı olarak kabul edilir?",
    options: ["Barok", "Gotik", "Rönesans", "Neoklasisizm"],
    correct: 2,
    category: "Sanat ve Edebiyat",
    difficulty: "Kolay"
  },
  {
    id: 785,
    question: "Türk edebiyatında 'Huzur', 'Saatleri Ayarlama Enstitüsü' gibi eserleriyle tanınan, Doğu-Batı sentezi arayışındaki yazar kimdir?",
    options: ["Peyami Safa", "Halit Ziya Uşaklıgil", "Ahmet Hamdi Tanpınar", "Abdülhak Şinasi Hisar"],
    correct: 2,
    category: "Sanat ve Edebiyat",
    difficulty: "Kolay"
  },
  {
    id: 786,
    question: "Sanatta, görme fizyolojisini temel alarak, renkleri küçük noktalar halinde yan yana kullanarak optik karışım sağlayan teknik nedir?",
    options: ["Fovizm", "Sürrealizm", "Puvahtrizm (Noktacılık/Pointilizm)", "Kübizm"],
    correct: 2,
    category: "Sanat ve Edebiyat",
    difficulty: "Orta"
  },
  {
    id: 787,
    question: "Bir şiirde ya da düzyazıda, iki zıt duygunun, kavramın ya da durumun bir arada kullanılması sanatı nedir?",
    options: ["Mübalağa", "Tezat (Karşıtlık)", "Kinaye", "Tevriye"],
    correct: 1,
    category: "Sanat ve Edebiyat",
    difficulty: "Kolay"
  },
  {
    id: 788,
    question: "19. yüzyıl sonunda Fransa'da, empresyonizme tepki olarak, renk ve biçimi duygusal bir araç olarak kullanan ressam kimdir?",
    options: ["Claude Monet", "Paul Gauguin", "Pierre-Auguste Renoir", "Edgar Degas"],
    correct: 1,
    category: "Sanat ve Edebiyat",
    difficulty: "Orta"
  },
  {
    id: 789,
    question: "İrlandalı yazar James Joyce'un, bir günlük süreçte geçen, bilinç akışı tekniğini zirveye taşıdığı ünlü romanı nedir?",
    options: ["Savaş ve Barış", "Yüzyıllık Yalnızlık", "Ulysses", "Mrs. Dalloway"],
    correct: 2,
    category: "Sanat ve Edebiyat",
    difficulty: "Zor"
  },
  {
    id: 790,
    question: "Edebiyatta, kişisel gelişim ve eğitim sürecini (genç bir karakterin büyümesini) konu edinen roman türü nedir?",
    options: ["Tarihi Roman", "Polisiye Roman", "Bildungsroman (Oluşum/Gelişim Romanı)", "Gotik Roman"],
    correct: 2,
    category: "Sanat ve Edebiyat",
    difficulty: "Orta"
  },
  {
    id: 791,
    question: "Eski Mısır mimarisinde, Güneş tanrısı Ra'yı sembolize eden, dik ve dörtgen kesitli anıt yapı nedir?",
    options: ["Sfenks", "Piramit", "Obelisk (Dikilitaş)", "Mastaba"],
    correct: 2,
    category: "Sanat ve Edebiyat",
    difficulty: "Kolay"
  },
  {
    id: 792,
    question: "Edebiyatta, şairin nesnelerin gerçek görünüşü yerine, kendisinde uyandırdığı izlenimleri aktarmayı amaçladığı akım nedir?",
    options: ["Parnasizm", "Realizm", "Empresyonizm (İzlenimcilik)", "Natüralizm"],
    correct: 2,
    category: "Sanat ve Edebiyat",
    difficulty: "Kolay"
  },
  {
    id: 793,
    question: "Türk Edebiyatı'nda, ilk kez hece ölçüsüyle tiyatro eseri (Nesteren) yazan ve tiyatroyu halkı eğitmek için araç gören yazar kimdir?",
    options: ["Şinasi", "Namık Kemal", "Abdülhak Hamit Tarhan", "Recaizade Mahmut Ekrem"],
    correct: 2,
    category: "Sanat ve Edebiyat",
    difficulty: "Orta"
  },
  {
    id: 794,
    question: "Sanat eserlerinde, perspektif ve oran kurallarının kasten bozulması, uzun uzuvlar ve dramatik figürler hangi sanat akımının özelliğidir?",
    options: ["Rönesans", "Barok", "Maniyerizm", "Gotik"],
    correct: 2,
    category: "Sanat ve Edebiyat",
    difficulty: "Zor"
  },
  {
    id: 795,
    question: "Rus yazar Lev Tolstoy'un, Napolyon'un Rusya işgalini ve beş aristokrat ailenin hayatını anlatan epik romanı nedir?",
    options: ["Anna Karenina", "Diriliş", "Savaş ve Barış", "Hacı Murat"],
    correct: 2,
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
    options: ["Macera Öyküsü", "Toplumsal Öykü", "Gotik/Korku Öyküsü", "Romantik Öykü"],
    correct: 2,
    category: "Sanat ve Edebiyat",
    difficulty: "Kolay"
  },
  {
    id: 798,
    question: "Divan Edebiyatı'nda, bir şairin başka bir şairin şiirini aynı ölçü ve uyakla taklit etmesi (benzerini yazması) eylemi nedir?",
    options: ["Terkib-i Bend", "Tevhid", "Nazire", "Mersiye"],
    correct: 2,
    category: "Sanat ve Edebiyat",
    difficulty: "Orta"
  },
  {
    id: 799,
    question: "Mitolojik ve tarihi konular yerine, sıradan insanların günlük yaşamını konu edinen ve Empresyonizm'e zemin hazırlayan akım nedir?",
    options: ["Klasisizm", "Romantizm", "Realizm", "Sembolizm"],
    correct: 2,
    category: "Sanat ve Edebiyat",
    difficulty: "Kolay"
  },
  {
    id: 800,
    question: "Dünya'nın bilinen en eski yazılı destanlarından biri olan ve 'Gılgamış'ın ölümsüzlük arayışını' anlatan Mezopotamya eseri nedir?",
    options: ["Ramayana", "Mahabharata", "Gılgamış Destanı", "Nibelungen Lied"],
    correct: 2,
    category: "Sanat ve Edebiyat",
    difficulty: "Kolay"
  },

  // ==================== MÜZİK ====================
  {
    id: 801,
    question: "Klasik Batı Müziği'nin 'Dahi Çocuk'u olarak bilinen, Avusturyalı besteci kimdir?",
    options: ["Ludwig van Beethoven", "Johann Sebastian Bach", "Wolfgang Amadeus Mozart", "Franz Schubert"],
    correct: 2,
    category: CATEGORIES.MUSIC.name,
    difficulty: "Kolay"
  },
  {
    id: 802,
    question: "Bir müzik parçasının hızını belirten terim nedir?",
    options: ["Armoni", "Melodi", "Tempo", "Ritim"],
    correct: 2,
    category: CATEGORIES.MUSIC.name,
    difficulty: "Kolay"
  },
  {
    id: 803,
    question: "Gitar, telli bir çalgıdır. Peki, bir nefesli çalgı (üflemeli) örneği hangisidir?",
    options: ["Keman", "Piyano", "Trompet", "Bateri"],
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
    options: ["Sezen Aksu", "Nilüfer", "Ajda Pekkan", "Demet Akalın"],
    correct: 2,
    category: CATEGORIES.MUSIC.name,
    difficulty: "Kolay"
  },
  {
    id: 806,
    question: "Üç veya daha fazla sesin aynı anda tınlamasıyla oluşan uyuma ne ad verilir?",
    options: ["Kontrpuan", "Monofoni", "Armoni (Akor)", "Ritim"],
    correct: 2,
    category: CATEGORIES.MUSIC.name,
    difficulty: "Orta"
  },
  {
    id: 807,
    question: "İtalyanca'da 'çok hızlı' anlamına gelen tempo terimi hangisidir?",
    options: ["Adagio", "Andante", "Allegro", "Largo"],
    correct: 2,
    category: CATEGORIES.MUSIC.name,
    difficulty: "Orta"
  },
  {
    id: 808,
    question: "Geleneksel Türk Sanat Müziği'nde (TSM), temel makam sistemine ne ad verilir?",
    options: ["Gam", "Mod", "Makam", "Usul"],
    correct: 2,
    category: CATEGORIES.MUSIC.name,
    difficulty: "Kolay"
  },
  {
    id: 809,
    question: "Rock müziğin efsanevi ismi, 'Bohemian Rhapsody' ve 'We Will Rock You' gibi şarkılarıyla tanınan grup hangisidir?",
    options: ["The Beatles", "Led Zeppelin", "Queen", "Pink Floyd"],
    correct: 2,
    category: CATEGORIES.MUSIC.name,
    difficulty: "Kolay"
  },
  {
    id: 810,
    question: "Bir müzik eserinde, notaların yükseklik ve alçaklık sırasını ifade eden öge nedir?",
    options: ["Tempo", "Ritim", "Tını", "Melodi"],
    correct: 3,
    category: CATEGORIES.MUSIC.name,
    difficulty: "Kolay"
  },
  {
    id: 811,
    question: "Antonio Vivaldi'nin en ünlü eserlerinden biri olan, dört mevsimi anlatan keman konçertolarının adı nedir?",
    options: ["Su Müziği", "Brandenburg Konçertoları", "Dört Mevsim", "Ay Işığı Sonatı"],
    correct: 2,
    category: CATEGORIES.MUSIC.name,
    difficulty: "Kolay"
  },
  {
    id: 812,
    question: "Çoğunlukla dört vuruşluk ölçü birimi kullanılan, Amerika'nın New Orleans şehrinde doğan müzik türü nedir?",
    options: ["Blues", "Caz (Jazz)", "Klasik", "Reggae"],
    correct: 1,
    category: CATEGORIES.MUSIC.name,
    difficulty: "Orta"
  },
  {
    id: 813,
    question: "Piyano çalınırken tuşlara basıldığında tellere vuran parçanın adı nedir?",
    options: ["Köprü", "Akort vidası", "Çekiç (Hammer)", "Rezonans kutusu"],
    correct: 2,
    category: CATEGORIES.MUSIC.name,
    difficulty: "Zor"
  },
  {
    id: 814,
    question: "Türkiye'de 'Rock müziğin Babası' olarak anılan ve 'Tamirci Çırağı', 'Islak Islak' gibi eserleriyle bilinen sanatçı kimdir?",
    options: ["Barış Manço", "Cem Karaca", "Erkin Koray", "Fikret Kızılok"],
    correct: 1,
    category: CATEGORIES.MUSIC.name,
    difficulty: "Kolay"
  },
  {
    id: 815,
    question: "Hangi enstrüman, bir orkestrada en ince (en tiz) sesi üretir?",
    options: ["Keman (Violin)", "Viyola", "Viyolonsel (Çello)", "Kontrbas"],
    correct: 0,
    category: CATEGORIES.MUSIC.name,
    difficulty: "Orta"
  },
  {
    id: 816,
    question: "Müziğin ve dramanın birleştiği, genellikle dekor, kostüm ve oyunculuk içeren sahne eseri nedir?",
    options: ["Senfoni", "Oda Müziği", "Opera", "Konçerto"],
    correct: 2,
    category: CATEGORIES.MUSIC.name,
    difficulty: "Kolay"
  },
  {
    id: 817,
    question: "Bir müzik eserinin başlangıcında yer alan, eserin ana temasını içeren kısa parçaya ne ad verilir?",
    options: ["Koda", "Prelüd (Giriş Müziği)", "Sonat", "Füg"],
    correct: 1,
    category: CATEGORIES.MUSIC.name,
    difficulty: "Orta"
  },
  {
    id: 818,
    question: "Ludwig van Beethoven'ın, işitme kaybına rağmen bestelediği ve 'Neşeye Övgü' bölümünü içeren ünlü senfonisi hangisidir?",
    options: ["3. Senfoni (Eroica)", "5. Senfoni", "6. Senfoni (Pastoral)", "9. Senfoni"],
    correct: 3,
    category: CATEGORIES.MUSIC.name,
    difficulty: "Orta"
  },
  {
    id: 819,
    question: "Türk Halk Müziği'nde, telli ve mızraplı çalgıların en yaygın kullanılanı nedir?",
    options: ["Kemençe", "Ud", "Saz (Bağlama)", "Kanun"],
    correct: 2,
    category: CATEGORIES.MUSIC.name,
    difficulty: "Kolay"
  },
  {
    id: 820,
    question: "Bir şarkının ritmini ve zamanlamasını gösteren, birbirine eşit aralıklarla tekrar eden kuvvetli ve zayıf vuruşlar bütünü nedir?",
    options: ["Melodi", "Armoni", "Tını", "Ölçü (Metre)"],
    correct: 3,
    category: CATEGORIES.MUSIC.name,
    difficulty: "Orta"
  },
  {
    id: 821,
    question: "Hangi ünlü besteci, Viyana Klasik Okulu'nun son büyük temsilcisi olarak kabul edilir?",
    options: ["Bach", "Mozart", "Beethoven", "Haydn"],
    correct: 2,
    category: CATEGORIES.MUSIC.name,
    difficulty: "Kolay"
  },
  {
    id: 822,
    question: "Müzikte, bir notanın normalde olması gerekenden yarım ses inceltilmesini sağlayan işaret nedir?",
    options: ["Diyez (#)", "Bemol (♭)", "Naturel (♮)", "Anahtar"],
    correct: 1,
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
    options: ["Müslüm Gürses", "Ferdi Tayfur", "İbrahim Tatlıses", "Orhan Gencebay"],
    correct: 3,
    category: CATEGORIES.MUSIC.name,
    difficulty: "Kolay"
  },
  {
    id: 825,
    question: "Nota yazımında, bir dizedeki notaların adını belirleyen sembol nedir?",
    options: ["Ölçü çizgisi", "Porte", "Anahtar (Clef)", "Akor"],
    correct: 2,
    category: CATEGORIES.MUSIC.name,
    difficulty: "Orta"
  },
  {
    id: 826,
    question: "İtalyanca'da 'yavaş' anlamına gelen, bir müzik eserinin yavaş tempoda icra edilmesini belirten terim nedir?",
    options: ["Largo", "Presto", "Moderato", "Vivace"],
    correct: 0,
    category: CATEGORIES.MUSIC.name,
    difficulty: "Kolay"
  },
  {
    id: 827,
    question: "Popüler müzikte, iki gitar (ritim ve solo), bas gitar ve davuldan oluşan temel gruba ne ad verilir?",
    options: ["Orkestra", "Koro", "Dörtlü", "Rock Grubu (Band)"],
    correct: 3,
    category: CATEGORIES.MUSIC.name,
    difficulty: "Kolay"
  },
  {
    id: 828,
    question: "Barok dönemin en önemli bestecilerinden olan ve 'Matthaus Passion', 'Brandenburg Konçertoları' gibi eserleriyle tanınan kimdir?",
    options: ["George Frideric Handel", "Johann Sebastian Bach", "Antonio Vivaldi", "Claudio Monteverdi"],
    correct: 1,
    category: CATEGORIES.MUSIC.name,
    difficulty: "Orta"
  },
  {
    id: 829,
    question: "Hangi müzik türü, 'call-and-response' (çağrı ve yanıt) formu ve genellikle melankolik temalarıyla bilinir?",
    options: ["Gospel", "Folk", "Blues", "Samba"],
    correct: 2,
    category: CATEGORIES.MUSIC.name,
    difficulty: "Kolay"
  },
  {
    id: 830,
    question: "Piyano için yazılmış, tek bir enstrümanın virtüözlüğünü sergilediği eser türü nedir?",
    options: ["Senfoni", "Oda müziği", "Sonat", "Konçerto"],
    correct: 2,
    category: CATEGORIES.MUSIC.name,
    difficulty: "Orta"
  },
  {
    id: 831,
    question: "Müziğin en karmaşık formlarından biri olan, birden fazla bağımsız melodi çizgisinin aynı anda ilerlemesi tekniğine ne ad verilir?",
    options: ["Homofoni", "Monofoni", "Polifoni (Kontrpuan)", "Ritim"],
    correct: 2,
    category: CATEGORIES.MUSIC.name,
    difficulty: "Zor"
  },
  {
    id: 832,
    question: "Dünyanın en iyi kemancılarından biri kabul edilen ve 20. yüzyılın virtüözlerinden olan sanatçı kimdir?",
    options: ["Yo-Yo Ma", "Itzhak Perlman", "Mstislav Rostropovich", "Glenn Gould"],
    correct: 1,
    category: CATEGORIES.MUSIC.name,
    difficulty: "Zor"
  },
  {
    id: 833,
    question: "Türk Halk Müziği'nde, bir eserin ritmini belirleyen, kalıplaşmış vuruş düzenine ne ad verilir?",
    options: ["Makam", "Usul", "Seyir", "Ahenk"],
    correct: 1,
    category: CATEGORIES.MUSIC.name,
    difficulty: "Orta"
  },
  {
    id: 834,
    question: "Güneş Sistemi'nin yedi gezegenine adanmış, İngiliz besteci Gustav Holst'un ünlü orkestra eseri nedir?",
    options: ["Ayın Sonatı", "Gezegenler", "Yıldızların Müziği", "Samanyolu Senfonisi"],
    correct: 1,
    category: CATEGORIES.MUSIC.name,
    difficulty: "Orta"
  },
  {
    id: 835,
    question: "Hangi müzik türü, 'breakdance' ve 'graffiti' gibi alt kültür unsurlarıyla birlikte ortaya çıkmıştır?",
    options: ["Punk Rock", "Heavy Metal", "Hip-Hop", "Disco"],
    correct: 2,
    category: CATEGORIES.MUSIC.name,
    difficulty: "Kolay"
  },
  {
    id: 836,
    question: "Bir notanın normalden yarım ses kalınlaştırılmasını sağlayan işaret nedir?",
    options: ["Diyez (#)", "Bemol (♭)", "Naturel (♮)", "İkileme"],
    correct: 1,
    category: CATEGORIES.MUSIC.name,
    difficulty: "Kolay"
  },
  {
    id: 837,
    question: "Müzikte, bir şarkının veya eserin 'tekrar edilmeyen' anlamına gelen terim nedir?",
    options: ["Reprise", "Da Capo", "Through-Composed (Serbest Biçim)", "Arpej"],
    correct: 2,
    category: CATEGORIES.MUSIC.name,
    difficulty: "Zor"
  },
  {
    id: 838,
    question: "Telli çalgılarda, tellerin titreşimini artırarak sesin gücünü yükselten bölüm nedir?",
    options: ["Tuşe", "Burgu", "Rezonans Kutusu (Gövde)", "Teller"],
    correct: 2,
    category: CATEGORIES.MUSIC.name,
    difficulty: "Orta"
  },
  {
    id: 839,
    question: "İtalyanca 'sözlü eser' anlamına gelen, koro, solistler ve orkestra için yazılmış dinsel temalı müzik türü nedir?",
    options: ["Kantilena", "Arya", "Oratoryo", "Madrigal"],
    correct: 2,
    category: CATEGORIES.MUSIC.name,
    difficulty: "Zor"
  },
  {
    id: 840,
    question: "Rock and Roll'un doğuşunda büyük rol oynayan, 'Jailhouse Rock' ve 'Love Me Tender' gibi hitleriyle tanınan sanatçı kimdir?",
    options: ["Little Richard", "Chuck Berry", "Elvis Presley", "Jerry Lee Lewis"],
    correct: 2,
    category: CATEGORIES.MUSIC.name,
    difficulty: "Kolay"
  },
  {
    id: 841,
    question: "Piyanoda, aynı notanın hemen üstündeki veya altındaki bir sese ne ad verilir?",
    options: ["Oktav", "Yarım Ses (Yarım ton)", "Tam Ses (Tam ton)", "Majör"],
    correct: 1,
    category: CATEGORIES.MUSIC.name,
    difficulty: "Kolay"
  },
  {
    id: 842,
    question: "Müzikte, sesin rengini veya kalitesini ifade eden terim nedir?",
    options: ["Perde (Pitch)", "Tını (Timbre)", "Dinamik", "Ritim"],
    correct: 1,
    category: CATEGORIES.MUSIC.name,
    difficulty: "Orta"
  },
  {
    id: 843,
    question: "Rus besteci Pyotr İlyiç Çaykovski'nin en ünlü balelerinden biri hangisidir?",
    options: ["Giselle", "Sylvia", "Kuğu Gölü", "Romeo ve Juliet"],
    correct: 2,
    category: CATEGORIES.MUSIC.name,
    difficulty: "Kolay"
  },
  {
    id: 844,
    question: "Caz müziğinde, müzisyenlerin kendiliğinden, o anda melodi veya ritim yaratması eylemi nedir?",
    options: ["Akor çalma", "Kontrpuan", "İcra", "Doğaçlama (Improvisation)"],
    correct: 3,
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
    options: ["Zurna", "Kaval", "Saz (Bağlama)", "Davul"],
    correct: 2,
    category: CATEGORIES.MUSIC.name,
    difficulty: "Kolay"
  },
  {
    id: 847,
    question: "Hangi İtalyan opera bestecisi, 'Aida', 'La Traviata' ve 'Rigoletto' gibi eserleriyle ünlüdür?",
    options: ["Giacomo Puccini", "Giuseppe Verdi", "Gioachino Rossini", "Vincenzo Bellini"],
    correct: 1,
    category: CATEGORIES.MUSIC.name,
    difficulty: "Orta"
  },
  {
    id: 848,
    question: "Müziğin, notaların yazıldığı beş paralel çizgiden oluşan sisteme ne ad verilir?",
    options: ["Defter", "Porte (Dizek)", "Anahtar", "Ölçü"],
    correct: 1,
    category: CATEGORIES.MUSIC.name,
    difficulty: "Kolay"
  },
  {
    id: 849,
    question: "Bir orkestrada, sesi en kalın olan nefesli çalgı genellikle hangisidir?",
    options: ["Flüt", "Klarnet", "Fagot", "Obua"],
    correct: 2,
    category: CATEGORIES.MUSIC.name,
    difficulty: "Zor"
  },
  {
    id: 850,
    question: "Beatles'ın dağılmasından sonra solo kariyerine devam eden ve 'Imagine' şarkısıyla dünya çapında tanınan üyesi kimdir?",
    options: ["Paul McCartney", "Ringo Starr", "George Harrison", "John Lennon"],
    correct: 3,
    category: CATEGORIES.MUSIC.name,
    difficulty: "Kolay"
  },
  {
    id: 851,
    question: "Hangi müzikal element, bir eserin duygusal ve ruhsal içeriğini belirler?",
    options: ["Tempo", "Dinamik", "Tını", "Mod (Makam / Tonality)"],
    correct: 3,
    category: CATEGORIES.MUSIC.name,
    difficulty: "Orta"
  },
  {
    id: 852,
    question: "Bir orkestrayı yöneten ve eserin yorumunu belirleyen kişiye ne ad verilir?",
    options: ["Konçerto maestrosu", "Solist", "Koro şefi", "Orkestra şefi (Maestro)"],
    correct: 3,
    category: CATEGORIES.MUSIC.name,
    difficulty: "Kolay"
  },
  {
    id: 853,
    question: "Küçük, elle tutulan, nefesli ve tuşlu bir enstrüman olan, genellikle folk müzikte kullanılan çalgı nedir?",
    options: ["Harmonika (Mızıka)", "Flüt", "Obua", "Klarnet"],
    correct: 0,
    category: CATEGORIES.MUSIC.name,
    difficulty: "Kolay"
  },
  {
    id: 854,
    question: "16. ve 17. yüzyıllarda İtalya'da doğan, en eski müzikal drama formu nedir?",
    options: ["Senfoni", "Madrigal", "Kantat", "Opera"],
    correct: 3,
    category: CATEGORIES.MUSIC.name,
    difficulty: "Zor"
  },
  {
    id: 855,
    question: "Bateri setinde, ayakla kontrol edilen ve ritim tutmaya yarayan iki metal zilden oluşan kısım nedir?",
    options: ["Crash Zil", "Ride Zil", "Hi-Hat (Davul Pedalı)", "Tom Tom"],
    correct: 2,
    category: CATEGORIES.MUSIC.name,
    difficulty: "Orta"
  },
  {
    id: 856,
    question: "Rock müzikte, genellikle gitaristin melodi ve teknik becerilerini sergilediği bölüme ne ad verilir?",
    options: ["Ritim bölümü", "Köprü (Bridge)", "Giriş", "Gitar Solosu"],
    correct: 3,
    category: CATEGORIES.MUSIC.name,
    difficulty: "Kolay"
  },
  {
    id: 857,
    question: "Türk Sanat Müziği'nde (TSM), bir eserin usulünü (ritmik kalıp) tutmaya yarayan vurmalı çalgı nedir?",
    options: ["Bateri", "Darbuka", "Tef", "Kudüm"],
    correct: 3,
    category: CATEGORIES.MUSIC.name,
    difficulty: "Zor"
  },
  {
    id: 858,
    question: "Bir müzik eserinde sesin yavaş yavaş alçalmasını belirten İtalyanca terim nedir?",
    options: ["Forte", "Sforzando", "Decrescendo (Diminuendo)", "Piano"],
    correct: 2,
    category: CATEGORIES.MUSIC.name,
    difficulty: "Orta"
  },
  {
    id: 859,
    question: "Johann Strauss II'nin en ünlü eserlerinden olan, Viyana'yı simgeleyen vals hangisidir?",
    options: ["Macar Dansları", "Mavi Tuna Valsi", "Kuğu Gölü", "Boléro"],
    correct: 1,
    category: CATEGORIES.MUSIC.name,
    difficulty: "Orta"
  },
  {
    id: 860,
    question: "Gitar tellerini metal bir çubuk veya halka ile kaydırarak çalma tekniği nedir?",
    options: ["Arpej", "Tremolo", "Vibrato", "Slide (Kaydırma)"],
    correct: 3,
    category: CATEGORIES.MUSIC.name,
    difficulty: "Zor"
  },
  {
    id: 861,
    question: "Klasik müzikte, büyük orkestra için yazılmış, dört bölümden oluşan eser formu nedir?",
    options: ["Konçerto", "Sonat", "Senfoni", "Uvertür"],
    correct: 2,
    category: CATEGORIES.MUSIC.name,
    difficulty: "Kolay"
  },
  {
    id: 862,
    question: "Bir müzik eserinde 'birinci ses' anlamına gelen ve makamın ana notası olan ses nedir?",
    options: ["Dominant", "Tiz", "Tetik (Tonik)", "Mediant"],
    correct: 2,
    category: CATEGORIES.MUSIC.name,
    difficulty: "Zor"
  },
  {
    id: 863,
    question: "Madonna, Prince ve Michael Jackson'ın popüler olduğu müzikal dönem hangi on yıla aittir?",
    options: ["1970'ler", "1980'ler", "1990'lar", "2000'ler"],
    correct: 1,
    category: CATEGORIES.MUSIC.name,
    difficulty: "Kolay"
  },
  {
    id: 864,
    question: "Hangi enstrüman, bir orkestranın telli çalgılar grubunda yer almaz?",
    options: ["Viyolonsel (Çello)", "Viyola", "Harp (Arp)", "Trombon"],
    correct: 3,
    category: CATEGORIES.MUSIC.name,
    difficulty: "Kolay"
  },
  {
    id: 865,
    question: "Orta Çağ ve Rönesans müziğinde, tek sesli ve dinsel içerikli ilahi tarzı şarkılara ne ad verilir?",
    options: ["Madrigal", "Motet", "Gregorian İlahisi (Chant)", "Füg"],
    correct: 2,
    category: CATEGORIES.MUSIC.name,
    difficulty: "Zor"
  },
  {
    id: 866,
    question: "Klasik müzikte, bir solist enstrümanın orkestra eşliğinde virtüözlüğünü sergilediği eser türü nedir?",
    options: ["Senfoni", "Uvertür", "Konçerto", "Sonat"],
    correct: 2,
    category: CATEGORIES.MUSIC.name,
    difficulty: "Kolay"
  },
  {
    id: 867,
    question: "İtalyanca 'piyanodan daha yüksek sesle' anlamına gelen dinamik terimi nedir?",
    options: ["Mezzo Piano (mp)", "Forte (f)", "Pianissimo (pp)", "Fortissimo (ff)"],
    correct: 1,
    category: CATEGORIES.MUSIC.name,
    difficulty: "Orta"
  },
  {
    id: 868,
    question: "Türkiye'de 'Uzun İnce Bir Yoldayım' ve 'Dostlar Beni Hatırlasın' gibi eserleriyle tanınan Halk Ozanı kimdir?",
    options: ["Aşık Veysel Şatıroğlu", "Neşet Ertaş", "Arif Sağ", "Muharrem Ertaş"],
    correct: 0,
    category: CATEGORIES.MUSIC.name,
    difficulty: "Kolay"
  },
  {
    id: 869,
    question: "Müziğin ritmik olarak en keskin ve düzenli olduğu, genellikle askeri yürüyüşlere eşlik eden müzik formu nedir?",
    options: ["Vals", "Minyatür", "Marş", "Füg"],
    correct: 2,
    category: CATEGORIES.MUSIC.name,
    difficulty: "Orta"
  },
  {
    id: 870,
    question: "Hangi vurmalı çalgı, orkestralarda kullanılan, gerilmiş derinin vurulmasıyla ses üreten bir enstrümandır?",
    options: ["Zil", "Timpani (Kettle Davul)", "Ksilofon", "Kastanets"],
    correct: 1,
    category: CATEGORIES.MUSIC.name,
    difficulty: "Orta"
  },
  {
    id: 871,
    question: "Hangi müzik türü, 20. yüzyılın başında Amerika'da Afrika kökenli Amerikalıların manevi şarkılarından ve iş şarkılarından türemiştir?",
    options: ["Country", "Pop", "R&B (Rhythm and Blues)", "Soul"],
    correct: 2,
    category: CATEGORIES.MUSIC.name,
    difficulty: "Zor"
  },
  {
    id: 872,
    question: "Piyano, Klarnet ve Keman gibi üç farklı enstrüman için yazılmış eserlere ne ad verilir?",
    options: ["Dörtlü (Quartet)", "Beşli (Quintet)", "Trio (Üçlü)", "Duo (İkili)"],
    correct: 2,
    category: CATEGORIES.MUSIC.name,
    difficulty: "Kolay"
  },
  {
    id: 873,
    question: "Rus besteci Sergey Rahmaninov'un en bilinen ve en zorlu piyano eserlerinden biri hangisidir?",
    options: ["Ay Işığı Sonatı", "Für Elise", "Piyano Konçertosu No. 2", "Valse Triste"],
    correct: 2,
    category: CATEGORIES.MUSIC.name,
    difficulty: "Zor"
  },
  {
    id: 874,
    question: "Elektrik gitarın sesini şekillendiren, sesin sürdürülebilirliğini (sustain) ve distorsiyonunu sağlayan cihaz nedir?",
    options: ["Metronom", "Ekolayzer", "Amfi (Amplifikatör)", "Tunner"],
    correct: 2,
    category: CATEGORIES.MUSIC.name,
    difficulty: "Orta"
  },
  {
    id: 875,
    question: "Bir şarkının sözlerine ne ad verilir?",
    options: ["Mısra", "Şiir", "Libretto", "Melodi"],
    correct: 2,
    category: CATEGORIES.MUSIC.name,
    difficulty: "Kolay"
  },
  {
    id: 876,
    question: "Geleneksel Türk Sanat Müziği'nde (TSM), bir makamın tiz (ince) seslere doğru genişlemesine ne ad verilir?",
    options: ["Karar", "Yeden", "Gezinme (Seyir)", "Durağan"],
    correct: 2,
    category: CATEGORIES.MUSIC.name,
    difficulty: "Zor"
  },
  {
    id: 877,
    question: "Amerikalı 'Popun Kralı' olarak bilinen ve 'Thriller', 'Billie Jean' gibi hitleriyle dünya çapında tanınan sanatçı kimdir?",
    options: ["Prince", "Madonna", "Michael Jackson", "Elton John"],
    correct: 2,
    category: CATEGORIES.MUSIC.name,
    difficulty: "Kolay"
  },
  {
    id: 878,
    question: "Barok dönemde, bir müzik eserinin temelini oluşturan ve sürekli çalınan bas melodisine ne ad verilir?",
    options: ["Tema", "Sürekli Bas (Basso Continuo)", "Füg", "Rondo"],
    correct: 1,
    category: CATEGORIES.MUSIC.name,
    difficulty: "Zor"
  },
  {
    id: 879,
    question: "Gitar veya diğer telli çalgılarda, tellere hızlı ve arka arkaya vurarak elde edilen titreşim efekti nedir?",
    options: ["Vibrato", "Arpej", "Tremolo", "Harmonik"],
    correct: 2,
    category: CATEGORIES.MUSIC.name,
    difficulty: "Zor"
  },
  {
    id: 880,
    question: "Dört vuruşluk ölçü içinde dört tane çeyrek nota vuruşu içeren ölçü birimi nedir?",
    options: ["2/4", "3/4", "4/4", "6/8"],
    correct: 2,
    category: CATEGORIES.MUSIC.name,
    difficulty: "Orta"
  },
  {
    id: 881,
    question: "Hangi müzik terimi, bir şarkının başa dönerek tekrar çalınması gerektiğini ifade eder?",
    options: ["Fine", "Coda", "Da Capo (D.C.)", "Allegro"],
    correct: 2,
    category: CATEGORIES.MUSIC.name,
    difficulty: "Orta"
  },
  {
    id: 882,
    question: "Türk Sanat Müziği'nde (TSM) kullanılan ve yaylı, telli çalgıların en popüleri olan enstrüman nedir?",
    options: ["Kemençe", "Kanun", "Ud", "Tanbur"],
    correct: 3,
    category: CATEGORIES.MUSIC.name,
    difficulty: "Zor"
  },
  {
    id: 883,
    question: "Hangi Fransız besteci, 'Boléro' adlı, tek bir ritmik ve melodik temanın tekrarlanmasıyla ünlü eserini yazmıştır?",
    options: ["Claude Debussy", "Maurice Ravel", "Erik Satie", "Hector Berlioz"],
    correct: 1,
    category: CATEGORIES.MUSIC.name,
    difficulty: "Orta"
  },
  {
    id: 884,
    question: "Bateri çalınırken kullanılan, sırtı kalın ve ağır olan, genellikle ritim tutmaya yarayan küçük zil nedir?",
    options: ["Hi-Hat", "Crash Zil", "Ride Zil", "Splash Zil"],
    correct: 2,
    category: CATEGORIES.MUSIC.name,
    difficulty: "Orta"
  },
  {
    id: 885,
    question: "Bir müzik eserinin 'çok yumuşak' çalınması gerektiğini belirten dinamik terimi nedir?",
    options: ["Piano (p)", "Pianissimo (pp)", "Mezzo Forte (mf)", "Forte (f)"],
    correct: 1,
    category: CATEGORIES.MUSIC.name,
    difficulty: "Kolay"
  },
  {
    id: 886,
    question: "İtalyanca 'aşk' anlamına gelen ve genellikle lirik, duygusal şarkılara verilen isim nedir?",
    options: ["Scherzo", "Toccata", "Arioso", "Canzone"],
    correct: 3,
    category: CATEGORIES.MUSIC.name,
    difficulty: "Zor"
  },
  {
    id: 887,
    question: "Geleneksel Türk Halk Müziği'nde, ayakla tempo tutularak söylenen, coşkulu, ritmik tür nedir?",
    options: ["Ağıt", "Semah", "Bozlak", "Halay"],
    correct: 3,
    category: CATEGORIES.MUSIC.name,
    difficulty: "Kolay"
  },
  {
    id: 888,
    question: "Piyano, klavsen ve org gibi tuşlu çalgılarda sesin daha uzun sürmesini sağlayan pedalın adı nedir?",
    options: ["Sostenuto Pedalı", "Susturma Pedalı", "Yumuşatma Pedalı", "Sustain Pedalı"],
    correct: 3,
    category: CATEGORIES.MUSIC.name,
    difficulty: "Orta"
  },
  {
    id: 889,
    question: "Hangi müzik türü, 1960'larda İngiltere ve ABD'de 'The Beatles', 'The Rolling Stones' gibi gruplarla zirveye ulaşmıştır?",
    options: ["Folk Müzik", "Rock Müzik", "Disco", "Soul Müzik"],
    correct: 1,
    category: CATEGORIES.MUSIC.name,
    difficulty: "Kolay"
  },
  {
    id: 890,
    question: "Bir vuruşun değerini yarıya indiren nota işareti nedir?",
    options: ["Noktalı Nota", "Bağ", "Sekizlik Nota", "Onaltılık Nota"],
    correct: 2,
    category: CATEGORIES.MUSIC.name,
    difficulty: "Orta"
  },
  {
    id: 891,
    question: "Rus besteci Modest Mussorgsky'nin, arkadaşının resimlerini müzikle anlattığı ünlü piyano eseri nedir?",
    options: ["Pictures at an Exhibition (Bir Sergiden Resimler)", "Sheherazade", "Romeo ve Juliet", "Nutcracker (Fındıkkıran)"],
    correct: 0,
    category: CATEGORIES.MUSIC.name,
    difficulty: "Zor"
  },
  {
    id: 892,
    question: "Bir şarkının melodisinin veya ritminin geçici olarak yavaşlatılması tekniği nedir?",
    options: ["Accelerando", "Tempo Primo", "Rubato", "Coda"],
    correct: 2,
    category: CATEGORIES.MUSIC.name,
    difficulty: "Zor"
  },
  {
    id: 893,
    question: "Hangi caz müzisyeni, 'Satchmo' lakabıyla bilinir ve trompet virtüözü ve vokalist olarak ün kazanmıştır?",
    options: ["Miles Davis", "Duke Ellington", "Louis Armstrong", "John Coltrane"],
    correct: 2,
    category: CATEGORIES.MUSIC.name,
    difficulty: "Orta"
  },
  {
    id: 894,
    question: "Geleneksel Türk Sanat Müziği'nde (TSM), sesin gırtlakta titretilerek (dalgalandırılarak) icra edilmesi tekniği nedir?",
    options: ["Tavr", "Geçki", "Gırtlak (Vibrato)", "Hicaz"],
    correct: 2,
    category: CATEGORIES.MUSIC.name,
    difficulty: "Orta"
  },
  {
    id: 895,
    question: "Klasik müzikte, hızlı ve şakacı bir tempoda çalınan, genellikle senfonilerin üçüncü bölümü olan kısım nedir?",
    options: ["Adagio", "Andante", "Scherzo", "Menuet"],
    correct: 2,
    category: CATEGORIES.MUSIC.name,
    difficulty: "Zor"
  },
  {
    id: 896,
    question: "Müzikte, bir notanın tekrar çalınmasını gerektirmeyen, ancak süresini yarısı kadar uzatan işaret nedir?",
    options: ["Diyez", "Bemol", "Ters Nata", "Nokta"],
    correct: 3,
    category: CATEGORIES.MUSIC.name,
    difficulty: "Orta"
  },
  {
    id: 897,
    question: "Hangi ünlü müzisyen, 'Purple Haze' ve 'Voodoo Child' gibi şarkılarıyla elektro gitar virtüözü olarak tanınır?",
    options: ["Eric Clapton", "Jeff Beck", "Jimi Hendrix", "Jimmy Page"],
    correct: 2,
    category: CATEGORIES.MUSIC.name,
    difficulty: "Kolay"
  },
  {
    id: 898,
    question: "Rönesans döneminde popüler olan, genellikle eşliksiz (a capella) ve çok sesli (polifonik) koro eseri nedir?",
    options: ["Arya", "Sonat", "Madrigal", "Motet"],
    correct: 2,
    category: CATEGORIES.MUSIC.name,
    difficulty: "Zor"
  },
  {
    id: 899,
    question: "Üç telli, perde düzeni olmayan, genellikle Karadeniz Bölgesi'nde kullanılan telli çalgı nedir?",
    options: ["Ud", "Tanbur", "Kemençe", "Lavta"],
    correct: 2,
    category: CATEGORIES.MUSIC.name,
    difficulty: "Kolay"
  },
  {
    id: 900,
    question: "Müzikte, bir şarkının tamamlanmış son bölümüne ne ad verilir?",
    options: ["Uvertür", "Köprü", "Nakarat", "Koda (Coda)"],
    correct: 3,
    category: CATEGORIES.MUSIC.name,
    difficulty: "Kolay"
  },
  {
    id: 901,
    question: "Klasik Batı Müziği'nin Viyana Klasisizmi döneminin en önemli bestecilerinden olan, 'Ay Işığı Sonatı' ile tanınan sağır dahi kimdir?",
    options: ["Wolfgang Amadeus Mozart", "Franz Liszt", "Ludwig van Beethoven", "Johann Sebastian Bach"],
    correct: 2,
    category: "Müzik",
    difficulty: "Kolay"
  },
  {
    id: 902,
    question: "Türk Halk Müziği'nde, hecenin 7'li ölçüsüyle yazılan ve çoğunlukla doğa, aşk, ayrılık gibi konuları işleyen ezgi türü nedir?",
    options: ["Koşma", "Semai", "Türkü", "Mani"],
    correct: 2,
    category: "Müzik",
    difficulty: "Kolay"
  },
  {
    id: 903,
    question: "Caz müziğinde, doğaçlama ve ritim çeşitliliğinin temelini oluşturan, Afrikalı Amerikalılar tarafından geliştirilen müzik türü nedir?",
    options: ["Ragtime", "Blues", "Soul", "Gospel"],
    correct: 1,
    category: "Müzik",
    difficulty: "Kolay"
  },
  {
    id: 904,
    question: "Bir eserin hızını belirleyen ve İtalyanca terimlerle ifade edilen ölçü birimi nedir?",
    options: ["Dinamik", "Armoni", "Tempo", "Kontrpuan"],
    correct: 2,
    category: "Müzik",
    difficulty: "Kolay"
  },
  {
    id: 905,
    question: "Barok dönemin en önemli bestecilerinden olan, 'Brandenburg Konçertoları' ve 'Matthäus-Passion' eserleriyle tanınan Alman besteci kimdir?",
    options: ["George Frideric Handel", "Antonio Vivaldi", "Johann Sebastian Bach", "Joseph Haydn"],
    correct: 2,
    category: "Müzik",
    difficulty: "Kolay"
  },
  {
    id: 906,
    question: "Piyanoya özgü, virtüözite gerektiren, serbest biçimli kısa ve coşkulu müzik parçasına ne ad verilir?",
    options: ["Füg", "Sonat", "Etüt", "Noktürn"],
    correct: 2,
    category: "Müzik",
    difficulty: "Orta"
  },
  {
    id: 907,
    question: "Orkestrada, en kalın sese sahip ve yaylı çalgıların temelini oluşturan enstrüman hangisidir?",
    options: ["Viyola", "Çello (Viyolonsel)", "Kontrbas", "Keman (Keman)"],
    correct: 2,
    category: "Müzik",
    difficulty: "Kolay"
  },
  {
    id: 908,
    question: "Müzikte, bir notanın ne kadar yüksek veya alçak olduğunu belirten ses özelliği nedir?",
    options: ["Tını", "Ritim", "Perde (Pitch)", "Dinamik"],
    correct: 2,
    category: "Müzik",
    difficulty: "Kolay"
  },
  {
    id: 909,
    question: "Türkiye'de 'Minicik Bir Kuş Gibi', 'Fırtına' ve 'Gözyaşları' gibi şarkılarıyla tanınan, 'Rock'n Coke' adlı festivali düzenleyen ünlü rock grubu nedir?",
    options: ["Grup Yorum", "Duman", "Mor ve Ötesi", "Athena"],
    correct: 2,
    category: "Müzik",
    difficulty: "Kolay"
  },
  {
    id: 910,
    question: "Opera sanatında, şarkıcıların kendilerini en iyi ifade ettikleri, orkestra eşliğinde söylenen solo şarkılara ne ad verilir?",
    options: ["Resitatif", "Koro", "Arya", "Uvertür"],
    correct: 2,
    category: "Müzik",
    difficulty: "Kolay"
  },
  {
    id: 911,
    question: "Caz müziğinin önemli isimlerinden olan, 'Satchmo' lakaplı, trompetçi ve vokalist kimdir?",
    options: ["Miles Davis", "Duke Ellington", "Louis Armstrong", "John Coltrane"],
    correct: 2,
    category: "Müzik",
    difficulty: "Kolay"
  },
  {
    id: 912,
    question: "Romantik dönemin 'Vals Kralı' olarak bilinen, Avusturyalı besteci kimdir?",
    options: ["Franz Schubert", "Frédéric Chopin", "Johann Strauss II", "Richard Wagner"],
    correct: 2,
    category: "Müzik",
    difficulty: "Orta"
  },
  {
    id: 913,
    question: "Türk Sanat Müziği'nde kullanılan, 24 aralık içinde farklı tam ve yarım sesleri içeren sistem nedir?",
    options: ["Ahenk", "Ritim", "Makam", "Usul"],
    correct: 2,
    category: "Müzik",
    difficulty: "Kolay"
  },
  {
    id: 914,
    question: "Müzikte, sesin kuvvetini (yüksekliğini veya alçaklığını) ifade eden terimler (piyano, forte) hangi kavramı ifade eder?",
    options: ["Tını", "Armoni", "Dinamik", "Tempo"],
    correct: 2,
    category: "Müzik",
    difficulty: "Kolay"
  },
  {
    id: 915,
    question: "Türkiye'de 'Dillere Destan', 'İkinci Bahar' gibi şarkılarıyla tanınan ve Türk Pop Müziği'nin öncülerinden kabul edilen kadın sanatçı kimdir?",
    options: ["Ajda Pekkan", "Sezen Aksu", "Nilüfer", "Erol Evgin"],
    correct: 1,
    category: "Müzik",
    difficulty: "Kolay"
  },
  {
    id: 916,
    question: "Keman, viyola ve çellodan oluşan üçlü müzik grubuna ne ad verilir?",
    options: ["Dörtlü (Quartet)", "İkili (Duo)", "Trio", "Beşli (Quintet)"],
    correct: 2,
    category: "Müzik",
    difficulty: "Orta"
  },
  {
    id: 917,
    question: "Bir eserin başında çalınan ve eserin genel temasını tanıtan orkestra parçasına ne ad verilir?",
    options: ["Prelüd", "Koda", "Uvertür", "Sonat"],
    correct: 2,
    category: "Müzik",
    difficulty: "Kolay"
  },
  {
    id: 918,
    question: "Rock müziğinde, 1970'lerde İngiltere'de ortaya çıkan ve toplumsal kurallara karşı çıkışı simgeleyen agresif müzik akımı nedir?",
    options: ["Hard Rock", "Progressive Rock", "Punk Rock", "Glam Rock"],
    correct: 2,
    category: "Müzik",
    difficulty: "Orta"
  },
  {
    id: 919,
    question: "Piyano için yazdığı 'Noktürnler' ve 'Valsler' ile tanınan, Romantik dönemin Polonyalı bestecisi kimdir?",
    options: ["Franz Liszt", "Robert Schumann", "Frédéric Chopin", "Johannes Brahms"],
    correct: 2,
    category: "Müzik",
    difficulty: "Kolay"
  },
  {
    id: 920,
    question: "Türk Halk Müziği'nde, anonim eserlerde ritim ve ölçüyü belirleyen, genellikle uzun ve ritmik figürlerden oluşan yapıya ne ad verilir?",
    options: ["Aralık", "Usul", "Makam", "Ağıt"],
    correct: 1,
    category: "Müzik",
    difficulty: "Orta"
  },
  {
    id: 921,
    question: "Popüler müzikte, şarkıcının sesinin yankılanmasını ve derinlik kazanmasını sağlayan ses efekti nedir?",
    options: ["Distorsiyon", "Flanger", "Reverb (Yankı)", "Chorus"],
    correct: 2,
    category: "Müzik",
    difficulty: "Kolay"
  },
  {
    id: 922,
    question: "Caz müziğinde, 1940'larda ortaya çıkan ve hızlı tempoları, karmaşık doğaçlamaları ve uyumsuz akorları ile tanınan alt tür nedir?",
    options: ["Swing", "Cool Jazz", "Bebop", "Dixieland"],
    correct: 2,
    category: "Müzik",
    difficulty: "Orta"
  },
  {
    id: 923,
    question: "Viyana Klasisizmi'nin üç büyük ustasından biri olan, 'Sürpriz Senfoni'si ile tanınan Avusturyalı besteci kimdir?",
    options: ["Wolfgang Amadeus Mozart", "Ludwig van Beethoven", "Joseph Haydn", "Franz Schubert"],
    correct: 2,
    category: "Müzik",
    difficulty: "Kolay"
  },
  {
    id: 924,
    question: "Müzikte, bir melodi hattının, kendisinden önceki motifleri tekrar ederek veya değiştirerek devam etmesine ne ad verilir?",
    options: ["Kontrast", "Sekans", "Modülasyon", "Dinamik"],
    correct: 1,
    category: "Müzik",
    difficulty: "Orta"
  },
  {
    id: 925,
    question: "Türk Sanat Müziği'nde, eserlerin icrasında ritmi tutmak için kullanılan ve el/parmak hareketleriyle yapılan ritmik kalıplar bütünü nedir?",
    options: ["Ahenk", "Makam", "Usul", "Zil"],
    correct: 2,
    category: "Müzik",
    difficulty: "Kolay"
  },
  {
    id: 926,
    question: "Gitar tellerinin üzerine, ses aralıklarını belirlemek için yerleştirilen metal çubuklara ne ad verilir?",
    options: ["Köprü", "Burgu", "Perde (Fret)", "Eşik"],
    correct: 2,
    category: "Müzik",
    difficulty: "Kolay"
  },
  {
    id: 927,
    question: "Rus besteci Pyotr İlyiç Çaykovski'nin ünlü bale eserlerinden biri nedir?",
    options: ["Fındıkkıran", "Rigoletto", "Carmen", "Kuğu Gölü"],
    correct: 3,
    category: "Müzik",
    difficulty: "Kolay"
  },
  {
    id: 928,
    question: "Halk müziği alanında 'Uzun İnce Bir Yoldayım', 'Gönül Dağı' gibi eserleriyle tanınan, Türkiye'nin önemli saz ve söz ustası kimdir?",
    options: ["Neşet Ertaş", "Aşık Mahzuni Şerif", "Aşık Veysel Şatıroğlu", "Arif Sağ"],
    correct: 2,
    category: "Müzik",
    difficulty: "Kolay"
  },
  {
    id: 929,
    question: "Müzikte, iki ya da daha fazla farklı melodi hattının aynı anda çalınmasıyla oluşan doku türü nedir?",
    options: ["Homofoni", "Monofoni", "Polifoni (Kontrpuan)", "Armoni"],
    correct: 2,
    category: "Müzik",
    difficulty: "Orta"
  },
  {
    id: 930,
    question: "1960'larda popülerleşen, sözleri toplumsal ve politik mesajlar içeren müzik türü nedir?",
    options: ["Blues", "Caz", "Protest Müzik (Folk)", "R&B"],
    correct: 2,
    category: "Müzik",
    difficulty: "Kolay"
  },
  {
    id: 931,
    question: "Ünlü opera bestecisi Wolfgang Amadeus Mozart'ın tamamlayamadan vefat ettiği, bir requiem (ölü duası) eseri nedir?",
    options: ["Figaro'nun Düğünü", "Sihirli Flüt", "Requiem", "Don Giovanni"],
    correct: 2,
    category: "Müzik",
    difficulty: "Kolay"
  },
  {
    id: 932,
    question: "Türk Halk Müziği'nde kullanılan, telli ve mızrapla çalınan en yaygın enstrüman nedir?",
    options: ["Kopuz", "Tambur", "Bağlama (Saz)", "Ud"],
    correct: 2,
    category: "Müzik",
    difficulty: "Kolay"
  },
  {
    id: 933,
    question: "Müzikte, bir parçanın ana tonundan başka bir tona geçiş yapması olayına ne ad verilir?",
    options: ["Transpozisyon", "Diatonik", "Modülasyon", "Akort"],
    correct: 2,
    category: "Müzik",
    difficulty: "Orta"
  },
  {
    id: 934,
    question: "Popüler müzikte, elektronik sesler, synthesizer'lar ve tekrar eden ritimlerin hakim olduğu 1980'lerde popülerleşen tür nedir?",
    options: ["Heavy Metal", "Hip Hop", "Synth-Pop", "Grunge"],
    correct: 2,
    category: "Müzik",
    difficulty: "Kolay"
  },
  {
    id: 935,
    question: "Müzik tarihinde, genellikle 1600-1750 yılları arasını kapsayan ve süslü, karmaşık yapısıyla tanınan dönem nedir?",
    options: ["Rönesans", "Klasisizm", "Barok Dönem", "Romantizm"],
    correct: 2,
    category: "Müzik",
    difficulty: "Kolay"
  },
  {
    id: 936,
    question: "Piyanoya özgü, icracının serbest, rüya gibi bir havayla çaldığı, genellikle gece temasını işleyen Romantik parça nedir?",
    options: ["Füg", "Sonat", "Noktürn", "Vals"],
    correct: 2,
    category: "Müzik",
    difficulty: "Kolay"
  },
  {
    id: 937,
    question: "Opera sanatında, konuşma ve şarkı arasında bir geçiş sağlayan, dramatik anlatımı ilerleten vokal tekniği nedir?",
    options: ["Arya", "Koro", "Resitatif", "Duo"],
    correct: 2,
    category: "Müzik",
    difficulty: "Orta"
  },
  {
    id: 938,
    question: "Müzikte, bir sesin ya da enstrümanın kendine has rengini veya karakterini ifade eden terim nedir?",
    options: ["Perde", "Dinamik", "Tını (Timbre)", "Armoni"],
    correct: 2,
    category: "Müzik",
    difficulty: "Kolay"
  },
  {
    id: 939,
    question: "Türkiye'de 'Bir Zamanlar Deli Gönlüm', 'Bana Yalan Söylediler' gibi şarkılarıyla tanınan, pop müziğinin duayenlerinden olan sanatçı kimdir?",
    options: ["Erol Evgin", "Fuat Güner", "Kayahan", "Mazhar Alanson"],
    correct: 2,
    category: "Müzik",
    difficulty: "Kolay"
  },
  {
    id: 940,
    question: "Caz müziğinde, temel ritmik yapıyı oluşturan ve genellikle davul, kontrbas ve piyanodan oluşan bölüm nedir?",
    options: ["Melodi Hattı", "Doğaçlama", "Ritim Bölümü (Rhythm Section)", "Korno Bölümü"],
    correct: 2,
    category: "Müzik",
    difficulty: "Orta"
  },
  {
    id: 941,
    question: "Türk Sanat Müziği'nde, icra edilen makamın ve eserin ritmini belirleyen, belirli bir süre içinde tekrarlanan ritmik kalıp nedir?",
    options: ["Makam", "Usul", "Seyir", "Aralık"],
    correct: 1,
    category: "Müzik",
    difficulty: "Kolay"
  },
  {
    id: 942,
    question: "Gitar amfilerinde, sesin tınısını kalınlaştıran ve sertleştiren ses efekti nedir?",
    options: ["Reverb", "Chorus", "Distorsiyon (Fuzz)", "Delay"],
    correct: 2,
    category: "Müzik",
    difficulty: "Kolay"
  },
  {
    id: 943,
    question: "Bestecinin özgürce seçtiği çalgılar için bestelediği, genellikle dört bölümden oluşan büyük orkestra eseri nedir?",
    options: ["Konçerto", "Sonat", "Senfoni", "Opera"],
    correct: 2,
    category: "Müzik",
    difficulty: "Kolay"
  },
  {
    id: 944,
    question: "Klasik dönemde, bir solo enstrümanın orkestra eşliğinde virtüözite gösterdiği eser türü nedir?",
    options: ["Senfoni", "Süit", "Konçerto", "Füg"],
    correct: 2,
    category: "Müzik",
    difficulty: "Kolay"
  },
  {
    id: 945,
    question: "Türk Halk Müziği'nde, ölüm, deprem, salgın gibi üzücü olaylar üzerine söylenen ve serbest ritimli ezgiler nedir?",
    options: ["Ninni", "Ağıt", "Türkü", "Mani"],
    correct: 1,
    category: "Müzik",
    difficulty: "Kolay"
  },
  {
    id: 946,
    question: "Müzikte, bir eserin ana teması ve melodisinin, aralıklarla tekrarlandığı Barok dönemi tekniği nedir?",
    options: ["Rondo", "Varyasyon", "Füg", "Süit"],
    correct: 2,
    category: "Müzik",
    difficulty: "Orta"
  },
  {
    id: 947,
    question: "Piyanonun öncüsü olan, vurmalı ve telli bir klavyeli enstrüman nedir?",
    options: ["Org", "Harpsikord (Çembalo)", "Klavikord", "Synthesizer"],
    correct: 1,
    category: "Müzik",
    difficulty: "Orta"
  },
  {
    id: 948,
    question: "Rock and Roll'un 'Kralı' olarak bilinen, 'Jailhouse Rock', 'Suspicious Minds' gibi şarkılarıyla ünlü Amerikalı sanatçı kimdir?",
    options: ["Chuck Berry", "Little Richard", "Elvis Presley", "Buddy Holly"],
    correct: 2,
    category: "Müzik",
    difficulty: "Kolay"
  },
  {
    id: 949,
    question: "Müzikte, bir orkestranın farklı enstrüman gruplarının (yaylılar, nefesliler) bir arada çalmasına ne ad verilir?",
    options: ["Solo", "Duo", "Ansambl (Topluluk)", "Koro"],
    correct: 2,
    category: "Müzik",
    difficulty: "Kolay"
  },
  {
    id: 950,
    question: "İtalyan opera bestecisi Giuseppe Verdi'nin, Mısır'da geçen ve savaş ile aşk temasını işleyen ünlü operası nedir?",
    options: ["La Traviata", "Rigoletto", "Aida", "Othello"],
    correct: 2,
    category: "Müzik",
    difficulty: "Kolay"
  },
  {
    id: 951,
    question: "Türk Halk Müziği'nde, bir ezginin makamını ya da tonunu değiştirmeden, sadece ses aralıklarını değiştirmesine ne ad verilir?",
    options: ["Usul", "Makamsal Gezinti", "Ayak (Makam)", "Ahenk"],
    correct: 2,
    category: "Müzik",
    difficulty: "Zor"
  },
  {
    id: 952,
    question: "Müzikte, notaların dizek üzerindeki yerini belirleyen, seslerin kalınlık ve incelik aralığını gösteren işaret nedir?",
    options: ["Dizek", "Nota", "Anahtar (Clef)", "Ölçü İşareti"],
    correct: 2,
    category: "Müzik",
    difficulty: "Kolay"
  },
  {
    id: 953,
    question: "Caz piyanisti ve bestecisi olan, 'Take Five' gibi eserleriyle asimetrik ölçüleri caz müziğine getiren sanatçı kimdir?",
    options: ["Thelonious Monk", "Dave Brubeck", "Oscar Peterson", "Herbie Hancock"],
    correct: 1,
    category: "Müzik",
    difficulty: "Orta"
  },
  {
    id: 954,
    question: "Romantik dönemin, kahramanlık hikayelerini veya doğa manzaralarını anlatan orkestra parçası türü nedir?",
    options: ["Senfoni", "Konçerto", "Senfonik Şiir", "Sonat"],
    correct: 2,
    category: "Müzik",
    difficulty: "Orta"
  },
  {
    id: 955,
    question: "Türk Sanat Müziği'nde kullanılan, yaylı, perdesiz ve yayla çalınan telli çalgı nedir?",
    options: ["Ud", "Kanun", "Kemençe", "Tambur"],
    correct: 2,
    category: "Müzik",
    difficulty: "Kolay"
  },
  {
    id: 956,
    question: "Müzikte, bir sesin en alçak veya en kalın noktasından en yüksek veya en ince noktasına kadar olan aralığına ne ad verilir?",
    options: ["Oktav", "Dinamik Aralık", "Vokal Aralık (Range)", "Perde"],
    correct: 2,
    category: "Müzik",
    difficulty: "Kolay"
  },
  {
    id: 957,
    question: "İtalyan Barok bestecisi Antonio Vivaldi'nin, dört mevsimi konu alan ünlü konçerto serisi nedir?",
    options: ["Brandenburg Konçertoları", "La Traviata", "Dört Mevsim", "Sürpriz Senfoni"],
    correct: 2,
    category: "Müzik",
    difficulty: "Kolay"
  },
  {
    id: 958,
    question: "Türk Pop Müziği'nde, 'Arkadaş', 'Sarı Çizmeli Mehmet Ağa' gibi eserleriyle tanınan ve Anadolu Rock'a katkıda bulunan sanatçı kimdir?",
    options: ["Cem Karaca", "Erkin Koray", "Barış Manço", "Fikret Kızılok"],
    correct: 2,
    category: "Müzik",
    difficulty: "Kolay"
  },
  {
    id: 959,
    question: "Müzikte, birden fazla sesin aynı anda kulağa hoş gelecek şekilde birleşmesi olayı nedir?",
    options: ["Kontrpuan", "Melodi", "Armoni (Akorlar)", "Ritim"],
    correct: 2,
    category: "Müzik",
    difficulty: "Kolay"
  },
  {
    id: 960,
    question: "Rock müziğinde, gitar, davul ve bas gitardan oluşan temel üçlüye ne ad verilir?",
    options: ["Pop Trio", "Caz Quartet", "Power Trio", "Rock Quintet"],
    correct: 2,
    category: "Müzik",
    difficulty: "Kolay"
  },
  {
    id: 961,
    question: "Türk Halk Müziği'nde, aşıkların deyişlerini veya hikayelerini anlattığı, genellikle serbest ezgili müzik türü nedir?",
    options: ["Zeybek", "Halay", "Bozlak", "Mani"],
    correct: 2,
    category: "Müzik",
    difficulty: "Orta"
  },
  {
    id: 962,
    question: "Müzikte, aynı notanın iki katı veya yarısı frekansına sahip olan nota aralığına ne ad verilir?",
    options: ["Dörtlü", "Beşli", "Oktav", "Sekizli"],
    correct: 2,
    category: "Müzik",
    difficulty: "Kolay"
  },
  {
    id: 963,
    question: "20. yüzyıl müziğinde, ritmik ve armonik yapıyı bozarak, disonans ve atonalite kullanan akım nedir?",
    options: ["Romantizm", "Empresyonizm", "Ekspresyonizm", "Klasisizm"],
    correct: 2,
    category: "Müzik",
    difficulty: "Zor"
  },
  {
    id: 964,
    question: "Piyano ve oda müziği eserleriyle tanınan, Viyana Klasisizmini Romantizme bağlayan Avusturyalı besteci kimdir?",
    options: ["Joseph Haydn", "Franz Schubert", "Felix Mendelssohn", "Frédéric Chopin"],
    correct: 1,
    category: "Müzik",
    difficulty: "Kolay"
  },
  {
    id: 965,
    question: "İngiliz rock grubu Queen'in 'Bohemian Rhapsody' şarkısında, opera ve rock öğelerini birleştirdiği tür nedir?",
    options: ["Hard Rock", "Heavy Metal", "Progressive Rock", "Pop Rock"],
    correct: 2,
    category: "Müzik",
    difficulty: "Kolay"
  },
  {
    id: 966,
    question: "Müzikte, bir eserin ana temasının hız, ritim veya perde açısından değiştirilerek tekrar edilmesi tekniği nedir?",
    options: ["Rondo", "Sekans", "Varyasyon (Çeşitleme)", "Modülasyon"],
    correct: 2,
    category: "Müzik",
    difficulty: "Kolay"
  },
  {
    id: 967,
    question: "Türk Sanat Müziği'nde, bir makamın inici ve çıkıcı hareketlerini gösteren, makamın karakterini tanımlayan yapı nedir?",
    options: ["Usul", "Tını", "Seyir (Yol)", "Nota"],
    correct: 2,
    category: "Müzik",
    difficulty: "Orta"
  },
  {
    id: 968,
    question: "Caz müziğinde, vokalistin bir enstrüman gibi sesleri taklit ederek doğaçlama yapması tekniği nedir?",
    options: ["Blues", "Riff", "Scat Singing", "Vibrato"],
    correct: 2,
    category: "Müzik",
    difficulty: "Kolay"
  },
  {
    id: 969,
    question: "Müzik notasyonunda, notaların çalınması gereken süreyi (uzunluğunu) belirten işaret nedir?",
    options: ["Anahtar", "Dinamik", "Değer (Ritim)", "Perde"],
    correct: 2,
    category: "Müzik",
    difficulty: "Kolay"
  },
  {
    id: 970,
    question: "Türkiye'de 'Gülpembe', 'Dağlar Dağlar' gibi unutulmaz eserleriyle bilinen ve Anadolu Rock'ın önemli temsilcilerinden olan sanatçı kimdir?",
    options: ["Cem Karaca", "Erkin Koray", "Barış Manço", "Fikret Kızılok"],
    correct: 2,
    category: "Müzik",
    difficulty: "Kolay"
  },
  {
    id: 971,
    question: "Müzikte, bir akorun notalarının sırayla değil de, birbiri ardına hızlıca çalınması tekniği nedir?",
    options: ["Tremolo", "Tril", "Arpej", "Vibrato"],
    correct: 2,
    category: "Müzik",
    difficulty: "Orta"
  },
  {
    id: 972,
    question: "Rus besteci Igor Stravinsky'nin, ilkel ritimleri ve disonansları kullanarak müzik dünyasını şok eden ünlü bale eseri nedir?",
    options: ["Fındıkkıran", "Kuğu Gölü", "Bahar Ayini", "Petruşka"],
    correct: 2,
    category: "Müzik",
    difficulty: "Zor"
  },
  {
    id: 973,
    question: "Müzikte, bir parçanın ya da bir bölümün 'çok hızlı' çalınması gerektiğini ifade eden İtalyanca terim nedir?",
    options: ["Andante", "Adagio", "Presto", "Allegro"],
    correct: 2,
    category: "Müzik",
    difficulty: "Kolay"
  },
  {
    id: 974,
    question: "İtalyan opera bestecisi Giacomo Puccini'nin, Japonya'da geçen ve 'Un bel dì vedremo' aryasıyla tanınan eseri nedir?",
    options: ["Tosca", "La Bohème", "Madam Butterfly", "Turandot"],
    correct: 2,
    category: "Müzik",
    difficulty: "Orta"
  },
  {
    id: 975,
    question: "Türk Sanat Müziği'nde, genellikle dinî konulu eserlerin veya peşrevlerin makamına göre belirlenen ölçü ve ritim kalıbı nedir?",
    options: ["Makam", "Usul", "Kâr", "Gazel"],
    correct: 1,
    category: "Müzik",
    difficulty: "Kolay"
  },
  {
    id: 976,
    question: "Klasik rock ve metal müzikte, gitaristin bir akor üzerine kısa ve tekrarlayan bir melodi çalması eylemi nedir?",
    options: ["Solo", "Arpej", "Riff", "Chorus"],
    correct: 2,
    category: "Müzik",
    difficulty: "Kolay"
  },
  {
    id: 977,
    question: "Müzikte, bir notanın normalde olması gereken değerden daha uzun çalınmasını sağlayan işaret nedir?",
    options: ["Nokta", "Bağ (Tie)", "Fermata", "Akort"],
    correct: 2,
    category: "Müzik",
    difficulty: "Orta"
  },
  {
    id: 978,
    question: "Ünlü İngiliz rock grubu The Beatles'ın, John Lennon ve Paul McCartney'nin liderliğinde kurulduğu şehir neresidir?",
    options: ["Londra", "Manchester", "Liverpool", "Birmingham"],
    correct: 2,
    category: "Müzik",
    difficulty: "Kolay"
  },
  {
    id: 979,
    question: "Müzikte, melodinin veya armoninin en küçük birimi olarak kabul edilen ve birden fazla notadan oluşan yapı nedir?",
    options: ["Ritim", "Perde", "Akor (Chord)", "Tempo"],
    correct: 2,
    category: "Müzik",
    difficulty: "Kolay"
  },
  {
    id: 980,
    question: "Afrika-Amerika kökenli, sözleri genellikle zorlukları ve hüzünleri anlatan, caz ve rock müziğinin temelini oluşturan vokal tür nedir?",
    options: ["Gospel", "Ragtime", "Blues", "Swing"],
    correct: 2,
    category: "Müzik",
    difficulty: "Kolay"
  },
  {
    id: 981,
    question: "Johann Sebastian Bach'ın, armoni ve kontrpuan becerisini sergilediği, 48 füg ve prelüd içeren ünlü piyano eseri nedir?",
    options: ["Brandenburg Konçertoları", "Goldberg Varyasyonları", "İyi Düzenlenmiş Klavye (Well-Tempered Clavier)", "Müzikal Sunu"],
    correct: 2,
    category: "Müzik",
    difficulty: "Zor"
  },
  {
    id: 982,
    question: "Müzikte, bir notanın ya da akorun titreşiminin hızlı ve ritmik değişimiyle oluşan etki nedir?",
    options: ["Arpej", "Tril", "Vibrato", "Glissando"],
    correct: 2,
    category: "Müzik",
    difficulty: "Orta"
  },
  {
    id: 983,
    question: "Müzikte, bir melodinin tamamlanmış hissi verdiği ve eserin bir bölümünün sonunu işaret eden akor dizisine ne ad verilir?",
    options: ["Modülasyon", "Armoni", "Kadans (Bitiş)", "Sekans"],
    correct: 2,
    category: "Müzik",
    difficulty: "Orta"
  },
  {
    id: 984,
    question: "Türkiye'de 'Deniz Üstü Köpürür', 'Ceviz Ağacı' gibi eserleriyle bilinen ve politik/toplumsal içerikli şarkılar yazan sanatçı kimdir?",
    options: ["Fikret Kızılok", "Cem Karaca", "Zülfü Livaneli", "Selda Bağcan"],
    correct: 2,
    category: "Müzik",
    difficulty: "Kolay"
  },
  {
    id: 985,
    question: "Klasik dönemde, dört yaylı çalgıdan (2 keman, viyola, çello) oluşan oda müziği grubu nedir?",
    options: ["Trio", "Beşli (Quintet)", "Dörtlü (Quartet)", "Sekizli (Octet)"],
    correct: 2,
    category: "Müzik",
    difficulty: "Kolay"
  },
  {
    id: 986,
    question: "Müzikte, eser boyunca tekrar eden ve eserin ritmik kimliğini oluşturan düzenli vuruşlar dizisine ne ad verilir?",
    options: ["Melodi", "Armoni", "Metre (Ölçü/Ritim)", "Perde"],
    correct: 2,
    category: "Müzik",
    difficulty: "Kolay"
  },
  {
    id: 987,
    question: "Türk Sanat Müziği'nde, genellikle solo vokal tarafından icra edilen, serbest ritimli ve doğaçlamaya dayalı uzun vokal form nedir?",
    options: ["Şarkı", "Kâr", "Gazel", "Saz Semaisi"],
    correct: 2,
    category: "Müzik",
    difficulty: "Orta"
  },
  {
    id: 988,
    question: "Avusturyalı besteci Gustav Mahler'in, vokalist ve orkestra için yazdığı, Çin şiirlerinden esinlenerek bestelenen ünlü senfonik eser nedir?",
    options: ["5. Senfoni", "Yeryüzü Şarkısı (Das Lied von der Erde)", "Resurrection Senfonisi", "Titan Senfonisi"],
    correct: 1,
    category: "Müzik",
    difficulty: "Zor"
  },
  {
    id: 989,
    question: "Müzikte, bir şarkının akılda kalıcı, genellikle tekrarlanan ve en yüksek duygusal yoğunluğa sahip bölümü nedir?",
    options: ["Köprü", "Giriş (Intro)", "Nakarat (Chorus)", "Kıta (Verse)"],
    correct: 2,
    category: "Müzik",
    difficulty: "Kolay"
  },
  {
    id: 990,
    question: "İspanyol müzik türü olan ve gitar, vokal ve dansın iç içe geçtiği, yoğun duygusal ifadeye sahip müzik nedir?",
    options: ["Tango", "Samba", "Flamenko", "Bossa Nova"],
    correct: 2,
    category: "Müzik",
    difficulty: "Kolay"
  },
  {
    id: 991,
    question: "Türk Halk Müziği'nde, uzun hava (serbest ritimli) türünün en bilinen ve en yaygın formu nedir?",
    options: ["Mani", "Ninni", "Bozlak", "Koşma"],
    correct: 2,
    category: "Müzik",
    difficulty: "Orta"
  },
  {
    id: 992,
    question: "Klasik Batı Müziği'nde, genellikle dört bölümden oluşan ve her bölümün kendine özgü temposu olan eser türü nedir?",
    options: ["Konçerto", "Füg", "Sonat", "Süit"],
    correct: 2,
    category: "Müzik",
    difficulty: "Kolay"
  },
  {
    id: 993,
    question: "Müzikte, bir akorun temel notası olan ve akorun adını belirleyen nota nedir?",
    options: ["Üçlü", "Beşli", "Temel Nota (Kök Ses)", "Yedili"],
    correct: 2,
    category: "Müzik",
    difficulty: "Kolay"
  },
  {
    id: 994,
    question: "20. yüzyılın başlarında Fransa'da, Claude Debussy ve Maurice Ravel gibi bestecilerin kullandığı, pastel renkler ve izlenimci resimden etkilenen müzik akımı nedir?",
    options: ["Klasisizm", "Romantizm", "Empresyonizm (İzlenimcilik)", "Fütürizm"],
    correct: 2,
    category: "Müzik",
    difficulty: "Orta"
  },
  {
    id: 995,
    question: "ABD'de ortaya çıkan, elektronik dans müziğinin temellerini atan, disko, funk ve soul müziğini birleştiren tür nedir?",
    options: ["Hip Hop", "Reggae", "House (veya EDM)", "R&B"],
    correct: 2,
    category: "Müzik",
    difficulty: "Kolay"
  },
  {
    id: 996,
    question: "Müzikte, bir eserin ana teması ve melodisinin, aralıklarla tekrarlandığı Barok dönemi tekniği nedir?",
    options: ["Rondo", "Varyasyon", "Füg", "Süit"],
    correct: 2,
    category: "Müzik",
    difficulty: "Orta"
  },
  {
    id: 997,
    question: "Türk Halk Müziği'nde, davul ve zurna eşliğinde, genellikle hızlı ritimli ve toplu oynanan halk oyunu müziği nedir?",
    options: ["Bar", "Horon", "Halay", "Zeybek"],
    correct: 2,
    category: "Müzik",
    difficulty: "Kolay"
  },
  {
    id: 998,
    question: "Bir eserin hızını 'çok yavaş' (slow) olarak belirten İtalyanca terim nedir?",
    options: ["Moderato", "Allegro", "Adagio", "Presto"],
    correct: 2,
    category: "Müzik",
    difficulty: "Kolay"
  },
  {
    id: 999,
    question: "Müzik tarihinde, Franz Liszt ve Richard Wagner gibi bestecilerin eserlerinde duygusal derinliği ve sınırsızlığı vurgulayan dönem nedir?",
    options: ["Barok", "Klasik", "Romantik Dönem", "Modern Dönem"],
    correct: 2,
    category: "Müzik",
    difficulty: "Kolay"
  },
  {
    id: 1000,
    question: "İtalyan opera bestecisi Gioachino Rossini'nin, hızlı ve virtüöz vokal kısımlarıyla tanınan ünlü eseri nedir?",
    options: ["Tosca", "Aida", "Sevil Berberi", "Carmen"],
    correct: 2,
    category: "Müzik",
    difficulty: "Kolay"
  },

  // ==================== SPOR ====================
  {
    id: 1001,
    question: "Futbolda, bir maçta üç gol atan oyuncuya ne ad verilir?",
    options: ["Dublet", "Hat-trick", "Goleador", "Asist Kralı"],
    correct: 1,
    category: CATEGORIES.SPORTS.name,
    difficulty: "Kolay"
  },
  {
    id: 1002,
    question: "Basketbolda bir hücumun bitmesi için verilen süre kaç saniyedir?",
    options: ["14", "20", "24", "30"],
    correct: 2,
    category: CATEGORIES.SPORTS.name,
    difficulty: "Kolay"
  },
  {
    id: 1003,
    question: "Yaz Olimpiyat Oyunları'nda 100 metre koşu dünya rekoru sahibi kimdir?",
    options: ["Carl Lewis", "Justin Gatlin", "Usain Bolt", "Tyson Gay"],
    correct: 2,
    category: CATEGORIES.SPORTS.name,
    difficulty: "Kolay"
  },
  {
    id: 1004,
    question: "Teniste, puanların 40-40 eşit olması durumuna ne ad verilir?",
    options: ["Set Puanı", "Tie-break", "Avantaj", "Deuce (Döz)"],
    correct: 3,
    category: CATEGORIES.SPORTS.name,
    difficulty: "Kolay"
  },
  {
    id: 1005,
    question: "Hangi spor dalında 'nakavt' (knockout) terimi kullanılır?",
    options: ["Güreş", "Boks", "Judo", "Eskrim"],
    correct: 1,
    category: CATEGORIES.SPORTS.name,
    difficulty: "Kolay"
  },
  {
    id: 1006,
    question: "Formula 1'de en çok dünya şampiyonluğu rekorunu elinde bulunduran iki pilot kimdir?",
    options: ["Ayrton Senna ve Alain Prost", "Lewis Hamilton ve Michael Schumacher", "Sebastian Vettel ve Niki Lauda", "Juan Manuel Fangio ve Jim Clark"],
    correct: 1,
    category: CATEGORIES.SPORTS.name,
    difficulty: "Orta"
  },
  {
    id: 1007,
    question: "Yüzmede, serbest stil, sırtüstü, kurbağalama ve kelebek stillerinden oluşan yarışmaya ne ad verilir?",
    options: ["Maraton Yüzme", "Bayrak Yarışı", "Kişisel Karışık (Bireysel Medley)", "Sürat Yarışı"],
    correct: 2,
    category: CATEGORIES.SPORTS.name,
    difficulty: "Orta"
  },
  {
    id: 1008,
    question: "Futbolda ofsayt kuralını uygulayan hakem yardımcısı kimdir?",
    options: ["4. Hakem", "Çizgi Hakemi", "Video Yardımcı Hakemi (VAR)", "Orta Hakem"],
    correct: 1,
    category: CATEGORIES.SPORTS.name,
    difficulty: "Kolay"
  },
  {
    id: 1009,
    question: "Japonya kökenli, rakibi yere düşürerek veya kilitleyerek puan kazanmayı hedefleyen savaş sanatı hangisidir?",
    options: ["Karate", "Tekvando", "Güreş", "Judo"],
    correct: 3,
    category: CATEGORIES.SPORTS.name,
    difficulty: "Kolay"
  },
  {
    id: 1010,
    question: "Bir atletizm yarışında engellerin üzerinden atlanarak yapılan koşu türü nedir?",
    options: ["Sürat Koşusu", "Bayrak Koşusu", "Engelli Koşu", "Kros"],
    correct: 2,
    category: CATEGORIES.SPORTS.name,
    difficulty: "Kolay"
  },
  {
    id: 1011,
    question: "Amerika'nın en popüler sporlarından biri olan ve 'Super Bowl' ile zirveye ulaşan spor dalı hangisidir?",
    options: ["Basketbol", "Beyzbol", "Amerikan Futbolu", "Buz Hokeyi"],
    correct: 2,
    category: CATEGORIES.SPORTS.name,
    difficulty: "Kolay"
  },
  {
    id: 1012,
    question: "Bisiklet yarışlarının en prestijli ve zorlu yarışı olarak bilinen, Fransa'da düzenlenen etkinlik nedir?",
    options: ["Giro d'Italia", "Vuelta a España", "Tour de France", "Paris-Roubaix"],
    correct: 2,
    category: CATEGORIES.SPORTS.name,
    difficulty: "Orta"
  },
  {
    id: 1013,
    question: "Voleybolda, topu rakip sahaya sert bir şekilde vurarak sayı alma hamlesine ne ad verilir?",
    options: ["Servis", "Pas", "Manşet", "Smaç"],
    correct: 3,
    category: CATEGORIES.SPORTS.name,
    difficulty: "Kolay"
  },
  {
    id: 1014,
    question: "Hangi spor dalında 'Forehand' ve 'Backhand' terimleri kullanılır?",
    options: ["Badminton", "Masa Tenisi", "Golf", "Tenis"],
    correct: 3,
    category: CATEGORIES.SPORTS.name,
    difficulty: "Kolay"
  },
  {
    id: 1015,
    question: "Olimpiyat halkalarının temsil ettiği kıta sayısı kaçtır?",
    options: ["4", "5", "6", "7"],
    correct: 1,
    category: CATEGORIES.SPORTS.name,
    difficulty: "Kolay"
  },
  {
    id: 1016,
    question: "Futbolda, kaleci ve savunma oyuncularının kaleyi kapatmak için kullandığı yan yana dizilme tekniğine ne ad verilir?",
    options: ["Pres", "Kademe", "Baraj", "Libero"],
    correct: 2,
    category: CATEGORIES.SPORTS.name,
    difficulty: "Kolay"
  },
  {
    id: 1017,
    question: "Yüksekten suya atlama (dalış) sporunda hangi elementler değerlendirilir?",
    options: ["Sürat, mesafe, güç", "Yükseklik, derinlik, hız", "Kalkış, havada dönüş ve suya giriş (iz bırakmama)", "Esneklik, denge, nefes"],
    correct: 2,
    category: CATEGORIES.SPORTS.name,
    difficulty: "Orta"
  },
  {
    id: 1018,
    question: "Basketbolda bir oyuncunun tek maçta sayı, ribaund, asist, top çalma ve blok kategorilerinde çift haneli sayılara ulaşmasına ne ad verilir?",
    options: ["Triple-double", "Double-double", "Quadruple-double", "Five-by-five"],
    correct: 3,
    category: CATEGORIES.SPORTS.name,
    difficulty: "Zor"
  },
  {
    id: 1019,
    question: "Golf'te bir deliği, standart vuruş sayısının (par) bir vuruş altında bitirmeye ne ad verilir?",
    options: ["Eagle", "Birdie", "Bogey", "Albatros"],
    correct: 1,
    category: CATEGORIES.SPORTS.name,
    difficulty: "Orta"
  },
  {
    id: 1020,
    question: "Türkiye'nin ve dünyanın en önemli güreş etkinliklerinden biri olan, yağlı güreşlerin yapıldığı festival nerede düzenlenir?",
    options: ["Antalya", "Samsun", "Edirne (Kırkpınar)", "İstanbul"],
    correct: 2,
    category: CATEGORIES.SPORTS.name,
    difficulty: "Kolay"
  },
  {
    id: 1021,
    question: "Hangi spor dalında oyuncular 'Kale Çizgisi' (Goal Line) ve 'Touchdown' terimlerini kullanır?",
    options: ["Futbol", "Ragbi", "Hentbol", "Amerikan Futbolu"],
    correct: 3,
    category: CATEGORIES.SPORTS.name,
    difficulty: "Orta"
  },
  {
    id: 1022,
    question: "Maraton koşusunun standart mesafesi yaklaşık olarak kaç kilometredir?",
    options: ["21.1 km", "35.2 km", "42.195 km", "50 km"],
    correct: 2,
    category: CATEGORIES.SPORTS.name,
    difficulty: "Kolay"
  },
  {
    id: 1023,
    question: "Masa tenisinde 'Servis' atışını yapan oyuncunun topu kaç kez havaya atma hakkı vardır?",
    options: ["Sınırsız", "1", "2", "3"],
    correct: 0,
    category: CATEGORIES.SPORTS.name,
    difficulty: "Orta"
  },
  {
    id: 1024,
    question: "Hangi spor dalı, buz üzerinde iki takımın ucu kavisli sopalarla diski (pakı) rakip kaleye sokmaya çalıştığı oyundur?",
    options: ["Körling", "Buz Pateni", "Buz Hokeyi", "Bandy"],
    correct: 2,
    category: CATEGORIES.SPORTS.name,
    difficulty: "Kolay"
  },
  {
    id: 1025,
    question: "Futbolda, son zamanlarda kullanılmaya başlanan ve gol çizgisi teknolojisine benzeyen sisteme ne ad verilir?",
    options: ["VAR", "Hawk-Eye", "Goal-Line Technology", "Offside Trap"],
    correct: 2,
    category: CATEGORIES.SPORTS.name,
    difficulty: "Kolay"
  },
  {
    id: 1026,
    question: "1924 yılında ilk kez düzenlenen, kış sporlarının uluslararası etkinliği nedir?",
    options: ["Avrupa Kış Oyunları", "Kış Üniversite Oyunları", "Kış Olimpiyat Oyunları", "Kış Paralimpik Oyunları"],
    correct: 2,
    category: CATEGORIES.SPORTS.name,
    difficulty: "Orta"
  },
  {
    id: 1027,
    question: "Boksta, hakemin 10'a kadar sayması durumunda (yerdeyken kalkamama) rakibin kazandığı sonuca ne ad verilir?",
    options: ["Teknik Karar", "Hükmen Galibiyet", "Nakavt (KO)", "Diskalifiye"],
    correct: 2,
    category: CATEGORIES.SPORTS.name,
    difficulty: "Kolay"
  },
  {
    id: 1028,
    question: "Jimnastikte, sporcunun havada gerçekleştirdiği ters takla hareketine ne ad verilir?",
    options: ["Salto", "Amut", "Köprü", "Denizkızı"],
    correct: 0,
    category: CATEGORIES.SPORTS.name,
    difficulty: "Kolay"
  },
  {
    id: 1029,
    question: "Hangi sporcu, profesyonel kariyerinde 7 kez F1 Dünya Şampiyonluğu kazanmıştır?",
    options: ["Alain Prost", "Juan Manuel Fangio", "Michael Schumacher", "Ayrton Senna"],
    correct: 2,
    category: CATEGORIES.SPORTS.name,
    difficulty: "Kolay"
  },
  {
    id: 1030,
    question: "Kürek sporunda, tek bir sporcunun iki kürek kullanması durumuna ne ad verilir?",
    options: ["Sweepe", "Scull", "Coxed", "Pair"],
    correct: 1,
    category: CATEGORIES.SPORTS.name,
    difficulty: "Zor"
  },
  {
    id: 1031,
    question: "Teniste, bir maçın kazanılması için genellikle kaç set kazanılması gerekir (Grand Slam erkekler)?",
    options: ["2", "3", "4", "5"],
    correct: 1, // Grand Slam'lerde kadınlar 2, erkekler 3 set kazanır (toplam 5 set oynanır). Soru erkekleri soruyor (3 set kazanılır).
    category: CATEGORIES.SPORTS.name,
    difficulty: "Orta"
  },
  {
    id: 1032,
    question: "Atletizmde, disk atma, cirit atma ve gülle atma gibi spor dalları hangi kategoriye girer?",
    options: ["Koşular", "Atlamalar", "Atmalar", "Çoklu Branşlar"],
    correct: 2,
    category: CATEGORIES.SPORTS.name,
    difficulty: "Kolay"
  },
  {
    id: 1033,
    question: "Türkiye'de futbol liginin en üst seviyesine ne ad verilir?",
    options: ["TFF 1. Lig", "TFF 2. Lig", "Süper Lig", "Bölgesel Amatör Lig"],
    correct: 2,
    category: CATEGORIES.SPORTS.name,
    difficulty: "Kolay"
  },
  {
    id: 1034,
    question: "Basketbol sahasında, potanın önündeki yarım daire şeklindeki alana ne ad verilir?",
    options: ["Serbest atış çizgisi", "Üç sayı çizgisi", "Boyalı alan (Pota altı)", "Orta saha çizgisi"],
    correct: 2,
    category: CATEGORIES.SPORTS.name,
    difficulty: "Kolay"
  },
  {
    id: 1035,
    question: "Güreşte, rakibin omzunun yere değmesiyle kazanılan sonuca ne ad verilir?",
    options: ["Tuş", "Teknik Üstünlük", "Yüksek Puanlama", "Pasiflik"],
    correct: 0,
    category: CATEGORIES.SPORTS.name,
    difficulty: "Kolay"
  },
  {
    id: 1036,
    question: "Amerikan Beyzbol Ligi'ne ne ad verilir?",
    options: ["NBA", "NFL", "NHL", "MLB"],
    correct: 3,
    category: CATEGORIES.SPORTS.name,
    difficulty: "Orta"
  },
  {
    id: 1037,
    question: "Yüzmede, suya atlayışın ardından su altında yapılan ilk hareket nedir?",
    options: ["Kelebek vuruşu", "Dönüş", "Süzülme ve vuruş (Dolphin Kick)", "Yüzeye çıkış"],
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
    options: ["Atletizm", "Motosiklet Yarışı", "Bisiklet (Pist)", "At Yarışı"],
    correct: 2,
    category: CATEGORIES.SPORTS.name,
    difficulty: "Orta"
  },
  {
    id: 1040,
    question: "Uluslararası Olimpiyat Komitesi'nin (IOC) merkezi hangi şehirdedir?",
    options: ["Paris", "Atina", "Lozan", "Roma"],
    correct: 2,
    category: CATEGORIES.SPORTS.name,
    difficulty: "Zor"
  },
  {
    id: 1041,
    question: "Kriket'te, atıcının topu kaleye doğru fırlatmasına ne ad verilir?",
    options: ["Vuruş", "Pas", "Atış (Bowling)", "Smaç"],
    correct: 2,
    category: CATEGORIES.SPORTS.name,
    difficulty: "Zor"
  },
  {
    id: 1042,
    question: "Futbolda, oyuncu değişikliği yapmak için kullanılan sayı limiti kaçtır (normal maçta)?",
    options: ["3", "4", "5", "6"],
    correct: 2, // Güncel kural 5 oyuncu değişikliğine izin verir.
    category: CATEGORIES.SPORTS.name,
    difficulty: "Kolay"
  },
  {
    id: 1043,
    question: "Türkiye'de 'Tarihi Lise' olarak bilinen ve spor kulübü olan Galatasaray'ın kuruluş yılı hangisidir?",
    options: ["1880", "1905", "1907", "1910"],
    correct: 1,
    category: CATEGORIES.SPORTS.name,
    difficulty: "Kolay"
  },
  {
    id: 1044,
    question: "Alp disiplini kayağında, sporcuların birbirini takip eden kapılardan (bayraklardan) geçtiği yarış türü nedir?",
    options: ["Serbest Stil", "Kros", "Slalom", "Biatlon"],
    correct: 2,
    category: CATEGORIES.SPORTS.name,
    difficulty: "Orta"
  },
  {
    id: 1045,
    question: "Basketbol'da, bir oyuncunun topla zıplamayı bıraktıktan sonra tekrar zıplaması kural ihlali olarak ne adlandırılır?",
    options: ["Adım hatası", "Top sürme hatası (Dribbling)", "Hücum faulü", "Teknik faul"],
    correct: 1,
    category: CATEGORIES.SPORTS.name,
    difficulty: "Kolay"
  },
  {
    id: 1046,
    question: "Hangi dövüş sporunda, eldiven yerine el ve ayak bandajları kullanılır ve vuruşlar bacak, diz, yumruk ve dirsekle yapılabilir?",
    options: ["Boks", "Kick Boks", "Muay Thai", "Tekvando"],
    correct: 2,
    category: CATEGORIES.SPORTS.name,
    difficulty: "Orta"
  },
  {
    id: 1047,
    question: "Atletizmde, uzun atlama, üç adım atlama, yüksek atlama ve sırıkla atlamanın ortak adı nedir?",
    options: ["Atmalar", "Koşular", "Atlamalar", "Kros"],
    correct: 2,
    category: CATEGORIES.SPORTS.name,
    difficulty: "Kolay"
  },
  {
    id: 1048,
    question: "Suda yapılan, senkronize bir şekilde müzik eşliğinde hareket etme sporu nedir?",
    options: ["Su Topu", "Sualtı Hokeyi", "Senkronize Yüzme (Artistik Yüzme)", "Yüksek Dalış"],
    correct: 2,
    category: CATEGORIES.SPORTS.name,
    difficulty: "Kolay"
  },
  {
    id: 1049,
    question: "Golf'te, topun vuruş bölgesinden ayrılmasına ne ad verilir?",
    options: ["Putt", "Tee Shot", "Fade", "Draw"],
    correct: 1,
    category: CATEGORIES.SPORTS.name,
    difficulty: "Orta"
  },
  {
    id: 1050,
    question: "Futbolda, topun auta çıktığı köşeden yapılan vuruşa ne ad verilir?",
    options: ["Serbest Vuruş", "Penaltı", "Köşe Vuruşu (Korner)", "Taç Atışı"],
    correct: 2,
    category: CATEGORIES.SPORTS.name,
    difficulty: "Kolay"
  },
  {
    id: 1051,
    question: "Hangi Grand Slam tenis turnuvası, toprak kortta (kırmızı kil) oynanır?",
    options: ["Wimbledon", "Avustralya Açık", "Amerika Açık", "Roland Garros (Fransa Açık)"],
    correct: 3,
    category: CATEGORIES.SPORTS.name,
    difficulty: "Kolay"
  },
  {
    id: 1052,
    question: "Modern Olimpiyat Oyunları'nın kurucusu ve ilk organizatörü kimdir?",
    options: ["Spiridon Louis", "Pierre de Coubertin", "Baron Munchausen", "Theodore Roosevelt"],
    correct: 1,
    category: CATEGORIES.SPORTS.name,
    difficulty: "Orta"
  },
  {
    id: 1053,
    question: "Türkiye'de 'Filenin Sultanları' olarak anılan Milli Takım hangi spor dalında mücadele etmektedir?",
    options: ["Basketbol", "Hentbol", "Voleybol", "Futbol"],
    correct: 2,
    category: CATEGORIES.SPORTS.name,
    difficulty: "Kolay"
  },
  {
    id: 1054,
    question: "Eskrim sporunda, kullanılan üç ana silah (kılıç) türü hangileridir?",
    options: ["Kama, Balta, Kılıç", "Flöre, Epe, Kılıç (Sable)", "Hançer, Yay, Ok", "Mızrak, Kalkan, Sopa"],
    correct: 1,
    category: CATEGORIES.SPORTS.name,
    difficulty: "Zor"
  },
  {
    id: 1055,
    question: "Hangi spor dalında 'Striker', 'Pitch' ve 'Wicket' terimleri kullanılır?",
    options: ["Beyzbol", "Softbol", "Lakros", "Kriket"],
    correct: 3,
    category: CATEGORIES.SPORTS.name,
    difficulty: "Zor"
  },
  {
    id: 1056,
    question: "Futbol sahasında kaleye 11 metre uzaklıkta, topun yerleştirildiği çizgiye ne ad verilir?",
    options: ["Kale yayı", "Penaltı noktası", "Korner yayı", "Taç çizgisi"],
    correct: 1,
    category: CATEGORIES.SPORTS.name,
    difficulty: "Kolay"
  },
  {
    id: 1057,
    question: "Basketbolda bir oyuncunun faul limitini doldurması durumunda oyundan çıkarılmasına ne ad verilir?",
    options: ["Sakatlanma", "İhraç", "Faul dışı", "Bloklanma"],
    correct: 1,
    category: CATEGORIES.SPORTS.name,
    difficulty: "Orta"
  },
  {
    id: 1058,
    question: "Hangi atletizm branşında, sporcuların iki aşamalı bir atlayış yapması gerekir (koşu ve sıçrama sonrası)?",
    options: ["Sırıkla Atlama", "Uzun Atlama", "Üç Adım Atlama", "Yüksek Atlama"],
    correct: 2,
    category: CATEGORIES.SPORTS.name,
    difficulty: "Orta"
  },
  {
    id: 1059,
    question: "Su sporlarında, rüzgar gücüyle hareket eden bir sörf tahtası ve yelkenin kullanıldığı spor nedir?",
    options: ["Sörf", "Kano", "Yelken", "Rüzgar Sörfü (Windsurf)"],
    correct: 3,
    category: CATEGORIES.SPORTS.name,
    difficulty: "Kolay"
  },
  {
    id: 1060,
    question: "Hangi ünlü futbolcu, futbol tarihinin en çok Ballon d'Or ödülü kazanan oyuncusudur?",
    options: ["Cristiano Ronaldo", "Diego Maradona", "Lionel Messi", "Pelé"],
    correct: 2,
    category: CATEGORIES.SPORTS.name,
    difficulty: "Kolay"
  },
  {
    id: 1061,
    question: "Boksta, dirsek ile yapılan vuruşlara izin verilen dövüş sporu hangisidir?",
    options: ["Karate", "Boks", "Kick Boks", "Muay Thai"],
    correct: 3,
    category: CATEGORIES.SPORTS.name,
    difficulty: "Orta"
  },
  {
    id: 1062,
    question: "Süper Lig'de en çok şampiyonluk kazanan takım hangisidir?",
    options: ["Fenerbahçe", "Beşiktaş", "Galatasaray", "Trabzonspor"],
    correct: 2,
    category: CATEGORIES.SPORTS.name,
    difficulty: "Kolay"
  },
  {
    id: 1063,
    question: "Hangi spor dalında 'Shuttlecock' (tüylü top) kullanılır?",
    options: ["Masa Tenisi", "Tenis", "Voleybol", "Badminton"],
    correct: 3,
    category: CATEGORIES.SPORTS.name,
    difficulty: "Kolay"
  },
  {
    id: 1064,
    question: "Jimnastikte, yere düşmeden dengede durmayı, esnekliği ve gücü birleştiren aletli dal nedir?",
    options: ["Halka", "Atlama Beygiri", "Denge Aleti (Paralel Bar)", "Yer Hareketleri"],
    correct: 2,
    category: CATEGORIES.SPORTS.name,
    difficulty: "Orta"
  },
  {
    id: 1065,
    question: "Basketbolda, topu sürmeden iki elle tutarak atılan adımlarla yapılan kural ihlali nedir?",
    options: ["Faul", "Adım Hatası (Steps)", "Topla yürüme", "Saha dışı"],
    correct: 1,
    category: CATEGORIES.SPORTS.name,
    difficulty: "Kolay"
  },
  {
    id: 1066,
    question: "Koşu, yüzme ve bisiklet branşlarından oluşan dayanıklılık sporu nedir?",
    options: ["Pentatlon", "Dekatlon", "Heptatlon", "Triatlon"],
    correct: 3,
    category: CATEGORIES.SPORTS.name,
    difficulty: "Kolay"
  },
  {
    id: 1067,
    question: "Buz Hokeyi'nde, 'Pak'ı kaleye fırlatan oyuncunun hareketine ne ad verilir?",
    options: ["Body Check", "Slapshot", "Passing", "Forecheck"],
    correct: 1,
    category: CATEGORIES.SPORTS.name,
    difficulty: "Zor"
  },
  {
    id: 1068,
    question: "Teniste, servis atan oyuncunun topu rakibe ulaşmadan fileye takılmasına ne ad verilir?",
    options: ["Fault", "Let", "Ace", "Smash"],
    correct: 1,
    category: CATEGORIES.SPORTS.name,
    difficulty: "Orta"
  },
  {
    id: 1069,
    question: "Hangi sporcu, profesyonel kariyerinde 20'den fazla Grand Slam (tekler) şampiyonluğu kazanmıştır?",
    options: ["Pete Sampras", "Andre Agassi", "Roger Federer", "Andy Murray"],
    correct: 2,
    category: CATEGORIES.SPORTS.name,
    difficulty: "Kolay"
  },
  {
    id: 1070,
    question: "Futbolda, hakemin bir oyuncuya kırmızı kart göstermesi ne anlama gelir?",
    options: ["Uyarı", "Geçici Oyundan Çıkarma", "Maç Sonuna Kadar Ceza", "Saha Dışına Çıkarma (İhraç)"],
    correct: 3,
    category: CATEGORIES.SPORTS.name,
    difficulty: "Kolay"
  },
  {
    id: 1071,
    question: "Golf'te, topu deliğe sokmak için kullanılan özel sopaya ne ad verilir?",
    options: ["Driver", "Iron", "Putter", "Wedge"],
    correct: 2,
    category: CATEGORIES.SPORTS.name,
    difficulty: "Orta"
  },
  {
    id: 1072,
    question: "Modern Pentatlon hangi spor branşlarını içerir?",
    options: ["Koşu, Yüzme, Atış, Eskrim, Binicilik", "Güreş, Boks, Eskrim, Jimnastik, Koşu", "Basketbol, Voleybol, Futbol, Hentbol, Tenis", "Sörf, Kayak, Yüzme, Atletizm, Kürek"],
    correct: 0,
    category: CATEGORIES.SPORTS.name,
    difficulty: "Zor"
  },
  {
    id: 1073,
    question: "Basketbol'da en yüksek skorla biten atış kaç puandır?",
    options: ["1", "2", "3", "4"],
    correct: 2,
    category: CATEGORIES.SPORTS.name,
    difficulty: "Kolay"
  },
  {
    id: 1074,
    question: "Olimpiyat Oyunları'nda 'Citius, Altius, Fortius' (Daha Hızlı, Daha Yüksek, Daha Güçlü) sloganı hangi dili ifade eder?",
    options: ["İngilizce", "Fransızca", "Yunanca", "Latince"],
    correct: 3,
    category: CATEGORIES.SPORTS.name,
    difficulty: "Orta"
  },
  {
    id: 1075,
    question: "Gülle atma sporunda, gülle ağırlığı erkekler için kaç kilogramdır?",
    options: ["5.26 kg", "6.26 kg", "7.26 kg", "8.26 kg"],
    correct: 2,
    category: CATEGORIES.SPORTS.name,
    difficulty: "Zor"
  },
  {
    id: 1076,
    question: "Hangi spor dalında, bir topu yere sektirerek rakip oyuncuya çarptırma hedefiyle oynanır?",
    options: ["Masa Tenisi", "Voleybol", "Basketbol", "Squash"],
    correct: 3,
    category: CATEGORIES.SPORTS.name,
    difficulty: "Orta"
  },
  {
    id: 1077,
    question: "Jimnastikte, tek bir tahta çubuk üzerinde yapılan akrobatik hareketler hangi alette gerçekleştirilir?",
    options: ["Paralel Bar", "Yer", "Asimetrik Paralel", "Barfiks"],
    correct: 3,
    category: CATEGORIES.SPORTS.name,
    difficulty: "Orta"
  },
  {
    id: 1078,
    question: "Futbol maçının normal süresi kaç dakikadır?",
    options: ["45", "80", "90", "100"],
    correct: 2,
    category: CATEGORIES.SPORTS.name,
    difficulty: "Kolay"
  },
  {
    id: 1079,
    question: "Amerikan futbolunda, topu pasla yakalayan ve sayı (touchdown) yapan oyuncuya ne ad verilir?",
    options: ["Quarterback", "Linebacker", "Receiver", "Safety"],
    correct: 2,
    category: CATEGORIES.SPORTS.name,
    difficulty: "Zor"
  },
  {
    id: 1080,
    question: "Koşu, atlama ve atma dallarından oluşan, kadınlar için 7 farklı branşı içeren çoklu spor nedir?",
    options: ["Pentatlon", "Dekatlon", "Heptatlon", "Triatlon"],
    correct: 2,
    category: CATEGORIES.SPORTS.name,
    difficulty: "Zor"
  },
  {
    id: 1081,
    question: "Su Topu'nda bir takımın bir maçta havuzda aynı anda kaç oyuncusu bulunur (kaleci dahil)?",
    options: ["5", "6", "7", "8"],
    correct: 2,
    category: CATEGORIES.SPORTS.name,
    difficulty: "Zor"
  },
  {
    id: 1082,
    question: "Formula 1'de, yarış sırasında lastik değişimi ve yakıt ikmali (artık yasaklandı) için kullanılan alana ne ad verilir?",
    options: ["Grid", "Paddock", "Pit Stop", "Start/Finish Çizgisi"],
    correct: 2,
    category: CATEGORIES.SPORTS.name,
    difficulty: "Kolay"
  },
  {
    id: 1083,
    question: "Basketbolda, rakibin şutunu panya veya potaya girmeden kesme hareketine ne ad verilir?",
    options: ["Ribaund", "Top çalma", "Asist", "Blok"],
    correct: 3,
    category: CATEGORIES.SPORTS.name,
    difficulty: "Kolay"
  },
  {
    id: 1084,
    question: "Teniste, 'Serve and Volley' tekniği ne anlama gelir?",
    options: ["Sadece güçlü servis atmak", "Servis sonrası fileye koşmak", "Servis sonrası geride kalmak", "Servis sonrası rakibe pas atmak"],
    correct: 1,
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
    options: ["Bandy", "Körling", "Buz Hokeyi", "Kayma"],
    correct: 1,
    category: CATEGORIES.SPORTS.name,
    difficulty: "Orta"
  },
  {
    id: 1087,
    question: "Futbol maçlarında, kalecinin topu elle yakalayabileceği alan nedir?",
    options: ["Orta saha", "Taç çizgisi", "16 metrelik ceza alanı", "Korner yayı"],
    correct: 2,
    category: CATEGORIES.SPORTS.name,
    difficulty: "Kolay"
  },
  {
    id: 1088,
    question: "Hangi sporcu 'Yüzyılın Atleti' ve 'Uçan Fin' lakaplarıyla anılmıştır?",
    options: ["Paavo Nurmi", "Jesse Owens", "Emil Zátopek", "Fanny Blankers-Koen"],
    correct: 0,
    category: CATEGORIES.SPORTS.name,
    difficulty: "Zor"
  },
  {
    id: 1089,
    question: "Olimpiyat Oyunları'nda en fazla altın madalya kazanan spor dalı hangisidir?",
    options: ["Atletizm", "Yüzme", "Jimnastik", "Güreş"],
    correct: 1,
    category: CATEGORIES.SPORTS.name,
    difficulty: "Orta"
  },
  {
    id: 1090,
    question: "Formula 1'de, yarışa başlarken araçların sıraya dizildiği alana ne ad verilir?",
    options: ["Pit Yolu", "Paddock", "Pit Stop", "Grid"],
    correct: 3,
    category: CATEGORIES.SPORTS.name,
    difficulty: "Kolay"
  },
  {
    id: 1091,
    question: "Voleybolda, topu rakip sahaya gönderirken (servis) topun fileye değip rakip alana düşmesine ne ad verilir?",
    options: ["Fault", "Ace", "Let", "Hata"],
    correct: 2,
    category: CATEGORIES.SPORTS.name,
    difficulty: "Orta"
  },
  {
    id: 1092,
    question: "Koşularda, yarışmacıların başlangıç pozisyonunu aldığı ve yanlış çıkışları kontrol eden alet nedir?",
    options: ["Kronometre", "Çıkış Takozu", "Bitirme Çizgisi", "Engeller"],
    correct: 1,
    category: CATEGORIES.SPORTS.name,
    difficulty: "Kolay"
  },
  {
    id: 1093,
    question: "Basketbol'da topu çembere atan oyuncuya, sayı yapmasına yardımcı olan pasa ne ad verilir?",
    options: ["Blok", "Ribaund", "Top Çalma", "Asist"],
    correct: 3,
    category: CATEGORIES.SPORTS.name,
    difficulty: "Kolay"
  },
  {
    id: 1094,
    question: "Hangi Grand Slam tenis turnuvası çim kortta oynanır?",
    options: ["Fransa Açık", "Amerika Açık", "Avustralya Açık", "Wimbledon"],
    correct: 3,
    category: CATEGORIES.SPORTS.name,
    difficulty: "Kolay"
  },
  {
    id: 1095,
    question: "Hentbol'da, kalecinin ceza sahasına kaç adım atma hakkı vardır?",
    options: ["Sınırsız", "2", "3", "4"],
    correct: 0,
    category: CATEGORIES.SPORTS.name,
    difficulty: "Orta"
  },
  {
    id: 1096,
    question: "Jimnastikte, yere sabitlenmiş, iki yatay çubuktan oluşan ve akrobatik hareketler yapılan alet nedir?",
    options: ["Barfiks", "Atlama Beygiri", "Halka", "Paralel Bar (Bar Aleti)"],
    correct: 3,
    category: CATEGORIES.SPORTS.name,
    difficulty: "Orta"
  },
  {
    id: 1097,
    question: "Profesyonel Güreşte (WWE, vb.), güreşçilerin rakibini omuzlarının üzerine alıp yere sertçe vurduğu hareket nedir?",
    options: ["Diving", "Suplex", "Powerbomb", "Headlock"],
    correct: 2,
    category: CATEGORIES.SPORTS.name,
    difficulty: "Kolay"
  },
  {
    id: 1098,
    question: "Futbolda, taç atışı hangi kural ihlali sonrası kullanılır?",
    options: ["Ofsayt", "Topun taç çizgisinden dışarı çıkması", "Faul", "Kale vuruşu"],
    correct: 1,
    category: CATEGORIES.SPORTS.name,
    difficulty: "Kolay"
  },
  {
    id: 1099,
    question: "Atletizmde, kısa mesafeli koşuların (100m, 200m, 400m) genel adı nedir?",
    options: ["Maraton", "Sürat Koşuları (Sprint)", "Uzun Mesafe", "Bayrak Koşuları"],
    correct: 1,
    category: CATEGORIES.SPORTS.name,
    difficulty: "Kolay"
  },
  {
    id: 1100,
    question: "Hangi spor dalında 'Hole in One' (Tek Vuruşta Deliğe Sokma) terimi kullanılır?",
    options: ["Tenis", "Masa Tenisi", "Bilardo", "Golf"],
    correct: 3,
    category: CATEGORIES.SPORTS.name,
    difficulty: "Kolay"
  },
  {
    id: 1101,
    question: "Futbolda, kaleci hariç bir oyuncunun topu eliyle bilerek oynaması sonucu verilen karar nedir?",
    options: ["Taç Atışı", "Penaltı Vuruşu", "Serbest Vuruş (Frikik)", "Köşe Vuruşu"],
    correct: 2,
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
    options: ["2 puan", "3 puan", "1 puan", "4 puan"],
    correct: 1,
    category: "Spor",
    difficulty: "Kolay"
  },
  {
    id: 1104,
    question: "Teniste, bir oyuncunun servis attığı oyunu hiç puan vermeden (40-0) kazanmasına ne ad verilir?",
    options: ["Tie-Break", "Deuce", "Love Game (Sıfır Oyun)", "Break Point"],
    correct: 2,
    category: "Spor",
    difficulty: "Orta"
  },
  {
    id: 1105,
    question: "Boks sporunda, bir raunt kaç dakika sürer?",
    options: ["3 dakika", "2 dakika", "4 dakika", "5 dakika"],
    correct: 0,
    category: "Spor",
    difficulty: "Kolay"
  },
  {
    id: 1106,
    question: "NBA tarihinde en çok şampiyonluk yüzüğüne sahip olan efsanevi oyuncu kimdir?",
    options: ["Michael Jordan", "Kareem Abdul-Jabbar", "Bill Russell", "LeBron James"],
    correct: 2,
    category: "Spor",
    difficulty: "Kolay"
  },
  {
    id: 1107,
    question: "Bisiklet sporunun en prestijli yarışı olan, Fransa'da düzenlenen büyük tur nedir?",
    options: ["Giro d'Italia", "Vuelta a España", "Tour de France", "Paris–Roubaix"],
    correct: 2,
    category: "Spor",
    difficulty: "Kolay"
  },
  {
    id: 1108,
    question: "Yüzmede, serbest stilin yanı sıra, kelebek, sırtüstü ve hangi stil olmak üzere toplam dört temel stil bulunur?",
    options: ["Yan Stil", "Köpek Stili", "Kurbağalama (Göğüs)", "Engelli Stil"],
    correct: 2,
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
    options: ["Faul", "Blok", "Sayı (Point)", "Set Sayısı"],
    correct: 2,
    category: "Spor",
    difficulty: "Kolay"
  },
  {
    id: 1111,
    question: "Futbolda, bir maçta üç gol atan oyuncu için kullanılan terim nedir?",
    options: ["Dörtleme", "Dublaj", "Hat-Trick", "Asist Kralı"],
    correct: 2,
    category: "Spor",
    difficulty: "Kolay"
  },
  {
    id: 1112,
    question: "Formul 1 yarışlarında, bir pilotun yarışa başlarken en önde (birinci sırada) yer almasına ne ad verilir?",
    options: ["En Hızlı Tur", "Podyum", "Pole Pozisyonu", "Pit Stop"],
    correct: 2,
    category: "Spor",
    difficulty: "Kolay"
  },
  {
    id: 1113,
    question: "Amerikan Futbolu'nda (NFL) en çok şampiyonluğa (Super Bowl) sahip olan takım kimdir?",
    options: ["Dallas Cowboys", "Pittsburgh Steelers ve New England Patriots", "San Francisco 49ers", "Green Bay Packers"],
    correct: 1,
    category: "Spor",
    difficulty: "Orta"
  },
  {
    id: 1114,
    question: "Jimnastikte, sporcunun havada dönerek yaptığı akrobatik hareketlere ne ad verilir?",
    options: ["Yay", "Denge", "Salto (Takla)", "Köprü"],
    correct: 2,
    category: "Spor",
    difficulty: "Kolay"
  },
  {
    id: 1115,
    question: "Golf sporunda, topun deliğe atıldığı her vuruş sayısının, o delik için belirlenen standart vuruş sayısından (Par) bir az olması durumu nedir?",
    options: ["Bogey", "Double Bogey", "Birdie", "Eagle"],
    correct: 2,
    category: "Spor",
    difficulty: "Orta"
  },
  {
    id: 1116,
    question: "Su topu (Water Polo) sporunda, bir takım kaç oyuncu ile sahada yer alır?",
    options: ["5", "6", "7", "8"],
    correct: 2,
    category: "Spor",
    difficulty: "Zor"
  },
  {
    id: 1117,
    question: "Halter sporunda, barın tek bir hamlede yerden baş seviyesinin üzerine kaldırıldığı teknik nedir?",
    options: ["Silkme (Clean and Jerk)", "Koparma (Snatch)", "Pres", "Squat"],
    correct: 1,
    category: "Spor",
    difficulty: "Orta"
  },
  {
    id: 1118,
    question: "Tenis sporunda, her dört büyük turnuvadan oluşan serinin genel adı nedir?",
    options: ["ATP Turu", "Wimbledon", "Grand Slam", "Fed Cup"],
    correct: 2,
    category: "Spor",
    difficulty: "Kolay"
  },
  {
    id: 1119,
    question: "Türkiye'nin 'En Centilmen Sporu' olarak bilinen ve genellikle at üzerinde oynanan halk oyunu/spor dalı nedir?",
    options: ["Güreş", "Cirit", "Yüzme", "Koşu"],
    correct: 1,
    category: "Spor",
    difficulty: "Kolay"
  },
  {
    id: 1120,
    question: "Futbolda, kalecinin ceza sahası içinde yaptığı kurtarışlara ne ad verilir?",
    options: ["Pas", "Şut", "Kurtarış (Save)", "Blok"],
    correct: 2,
    category: "Spor",
    difficulty: "Kolay"
  },
  {
    id: 1121,
    question: "Basketbol maçları kaç periyottan oluşur?",
    options: ["2", "3", "4", "5"],
    correct: 2,
    category: "Spor",
    difficulty: "Kolay"
  },
  {
    id: 1122,
    question: "Artistik buz pateninde, patencinin kendi ekseni etrafında hızla dönerek yaptığı hareketlere ne ad verilir?",
    options: ["Atlays", "Pivot", "Spinel (Dönüş)", "Lift"],
    correct: 2,
    category: "Spor",
    difficulty: "Orta"
  },
  {
    id: 1123,
    question: "Masa tenisinde, topun servis sırasında fileye çarpıp rakip sahaya düşmesine ne ad verilir?",
    options: ["Faul", "Ace", "Let (Tekrar)", "Point"],
    correct: 2,
    category: "Spor",
    difficulty: "Kolay"
  },
  {
    id: 1124,
    question: "Olimpiyat halkalarında kullanılan 5 renk (mavi, sarı, siyah, yeşil, kırmızı) neyi temsil eder?",
    options: ["Spor Dallarını", "Olimpiyat Değerlerini", "5 Kıtayı", "5 Büyük Spor Organizasyonunu"],
    correct: 2,
    category: "Spor",
    difficulty: "Kolay"
  },
  {
    id: 1125,
    question: "Formula 1 araçlarının yarıştığı parkurlara ne ad verilir?",
    options: ["Pist", "Stadyum", "Arena", "Velodrom"],
    correct: 0,
    category: "Spor",
    difficulty: "Kolay"
  },
  {
    id: 1126,
    question: "Buz Hokeyi'nde, oyuncuların patenle kayarak kullandığı disk şeklindeki topa ne ad verilir?",
    options: ["Top", "Puck", "Slapshot", "Stick"],
    correct: 1,
    category: "Spor",
    difficulty: "Kolay"
  },
  {
    id: 1127,
    question: "Güreşte, rakibi sırt üstü yere sererek iki omuzunu da yere değdirmek suretiyle kazanılan duruma ne ad verilir?",
    options: ["Tuş", "Puan", "Faul", "Sayı"],
    correct: 0,
    category: "Spor",
    difficulty: "Kolay"
  },
  {
    id: 1128,
    question: "Yüksek Atlama sporunda, sporcunun geriye doğru eğilerek çıtanın üzerinden atladığı teknik nedir?",
    options: ["Makaslama", "Straddle", "Fosbury Flop", "Western Roll"],
    correct: 2,
    category: "Spor",
    difficulty: "Orta"
  },
  {
    id: 1129,
    question: "Ragbi sporunda, topu kale direklerinin arasına ve üstüne atarak sayı kazanma eylemine ne ad verilir?",
    options: ["Touchdown", "Lineout", "Goal Kick (Drop Goal/Penalty Goal)", "Try"],
    correct: 2,
    category: "Spor",
    difficulty: "Orta"
  },
  {
    id: 1130,
    question: "Beysbol'da, vuruş yapan oyuncunun sahadaki dört kalenin tamamını geçerek sayı kazanması durumuna ne ad verilir?",
    options: ["Strikeout", "Foul Ball", "Home Run", "Base Hit"],
    correct: 2,
    category: "Spor",
    difficulty: "Kolay"
  },
  {
    id: 1131,
    question: "Futbol maçlarında, topun tümüyle kale çizgisini geçip geçmediğini belirleyen teknolojiye ne ad verilir?",
    options: ["Video Yardımcı Hakem (VAR)", "Ofsayt Sistemi", "Kale Çizgisi Teknolojisi (Goal-Line Technology)", "Yarı Otomatik Ofsayt Sistemi"],
    correct: 2,
    category: "Spor",
    difficulty: "Kolay"
  },
  {
    id: 1132,
    question: "Kış Olimpiyatları'nda, bir sporcunun tüfekle atış yapıp ardından kros kayağı yaptığı disiplin nedir?",
    options: ["Kuzey Kombinesi", "Kayakla Atlama", "Biatlon", "Kızak"],
    correct: 2,
    category: "Spor",
    difficulty: "Orta"
  },
  {
    id: 1133,
    question: "Bireysel spor dalları içinde yer alan, eskrimde en yaygın kullanılan kılıç türü nedir?",
    options: ["Epe, Flöre ve Kılıç (Sable)", "Hançer", "Kama", "Mızrak"],
    correct: 0,
    category: "Spor",
    difficulty: "Orta"
  },
  {
    id: 1134,
    question: "Türkiye'de 'Filenin Sultanları' olarak bilinen ve büyük başarılar elde eden milli takım hangi spor dalında mücadele etmektedir?",
    options: ["Basketbol", "Hentbol", "Voleybol", "Futbol"],
    correct: 2,
    category: "Spor",
    difficulty: "Kolay"
  },
  {
    id: 1135,
    question: "Basketbolda, bir takımın hücum için kullanabileceği maksimum süre (saniye) nedir?",
    options: ["14 saniye", "24 saniye", "8 saniye", "30 saniye"],
    correct: 1,
    category: "Spor",
    difficulty: "Kolay"
  },
  {
    id: 1136,
    question: "Atletizmde, disk atma, cirit atma, gülle atma gibi dallar hangi kategoriye girer?",
    options: ["Koşu", "Atlamalar", "Atmalar", "Kombine"],
    correct: 2,
    category: "Spor",
    difficulty: "Kolay"
  },
  {
    id: 1137,
    question: "Yüzmede, yüzücünün suya atlayış yaptığı başlangıç platformuna ne ad verilir?",
    options: ["Blok", "Turnike", "Basamak", "Eşik"],
    correct: 0,
    category: "Spor",
    difficulty: "Kolay"
  },
  {
    id: 1138,
    question: "Profesyonel güreşte (WWE), güreşçilerin mücadele ettiği kare şeklindeki alana ne ad verilir?",
    options: ["Saha", "Zemin", "Ring", "Oktagon"],
    correct: 2,
    category: "Spor",
    difficulty: "Kolay"
  },
  {
    id: 1139,
    question: "Sörf sporunda, sörfçünün dalganın en hızlı ve en dik kısmında kaymasına ne ad verilir?",
    options: ["Tube Ride", "Cutback", "Duck Dive", "Air"],
    correct: 0,
    category: "Spor",
    difficulty: "Zor"
  },
  {
    id: 1140,
    question: "Olimpiyat Oyunları'nda, altın madalya kazanan bir sporcunun boynuna takılan madalyanın ağırlığı ne kadardır?",
    options: ["Tamamen altındır", "Gümüş ve üzeri altın kaplamadır", "Bronz ve üzeri altın kaplamadır", "Çelikten yapılmıştır"],
    correct: 1,
    category: "Spor",
    difficulty: "Orta"
  },
  {
    id: 1141,
    question: "Hentbol (el topu) maçları kaç dakikalık iki devreden oluşur?",
    options: ["30 dakika", "45 dakika", "25 dakika", "20 dakika"],
    correct: 0,
    category: "Spor",
    difficulty: "Kolay"
  },
  {
    id: 1142,
    question: "Buz Hokeyi'nde, rakip kaleye en yakın pozisyonda duran ve genellikle en çok gol atan oyuncu pozisyonu nedir?",
    options: ["Defans", "Merkez Oyuncusu (Center)", "Hücum Oyuncusu (Forward)", "Kaleci"],
    correct: 2,
    category: "Spor",
    difficulty: "Orta"
  },
  {
    id: 1143,
    question: "Teniste, servis atan oyuncunun rakibine hiç dokunulmadan sayı alması durumuna ne ad verilir?",
    options: ["Fault", "Net", "Ace", "Break"],
    correct: 2,
    category: "Spor",
    difficulty: "Kolay"
  },
  {
    id: 1144,
    question: "Futbolda, bir oyuncunun kaleye yakın mesafeden topu yükseltmeden, sert bir şekilde ağlara göndermesi tekniği nedir?",
    options: ["Aşırtma Vuruş", "Vole", "Plase", "Füze (Şut)"],
    correct: 3,
    category: "Spor",
    difficulty: "Orta"
  },
  {
    id: 1145,
    question: "Basketbolda, topu sürmeden (dribbling yapmadan) iki elle tutma veya durdurma kural ihlali nedir?",
    options: ["Top Tutma (Carrying)", "Yürüme (Traveling)", "Çift Dribbling (Double Dribble)", "Faul"],
    correct: 2,
    category: "Spor",
    difficulty: "Kolay"
  },
  {
    id: 1146,
    question: "Olimpiyat Oyunları'nda en fazla altın madalya kazanan bireysel sporcu (yüzücü) kimdir?",
    options: ["Usain Bolt", "Carl Lewis", "Michael Phelps", "Mark Spitz"],
    correct: 2,
    category: "Spor",
    difficulty: "Kolay"
  },
  {
    id: 1147,
    question: "Kürek sporunda, tek bir kürekçi tarafından kullanılan ve sporcunun sırtı hareket yönüne dönük olduğu tekneye ne ad verilir?",
    options: ["Scull", "Yacht", "Kano", "Raft"],
    correct: 0,
    category: "Spor",
    difficulty: "Zor"
  },
  {
    id: 1148,
    question: "Ragbi'de (Rugby Union), sayı kazanmanın temel yolu olan ve topu rakip kale çizgisinin arkasında yere değdirmeye ne ad verilir?",
    options: ["Drop Goal", "Penalty", "Try", "Conversion"],
    correct: 2,
    category: "Spor",
    difficulty: "Orta"
  },
  {
    id: 1149,
    question: "Atletizmde, sırıkla atlama sporunda kullanılan enstrüman nedir?",
    options: ["Mızrak", "Gülle", "Sırık", "Disk"],
    correct: 2,
    category: "Spor",
    difficulty: "Kolay"
  },
  {
    id: 1150,
    question: "Modern pentatlon sporunda yer alan 5 farklı disiplin nelerdir?",
    options: ["Koşu, Yüzme, Bisiklet, Atış, Eskrim", "Atış, Eskrim, Yüzme, Binicilik, Koşu", "Koşu, Atış, Yüzme, Binicilik, Güreş", "Koşu, Yüzme, Eskrim, Judo, Atış"],
    correct: 1,
    category: "Spor",
    difficulty: "Zor"
  },
  {
    id: 1151,
    question: "Futbolda, ofsayt kuralını ilk kez uygulayan ülke veya bölge hangisidir?",
    options: ["İtalya", "Fransa", "Büyük Britanya", "Brezilya"],
    correct: 2,
    category: "Spor",
    difficulty: "Zor"
  },
  {
    id: 1152,
    question: "Masa tenisinde, bir set kaç sayıda biter (en az 2 farkla kazanılması şartıyla)?",
    options: ["11", "21", "15", "10"],
    correct: 0,
    category: "Spor",
    difficulty: "Kolay"
  },
  {
    id: 1153,
    question: "Halter sporunda, koparma (Snatch) ve silkme (Clean and Jerk) ağırlıklarının toplamına ne ad verilir?",
    options: ["Toplam Kaldırış", "Kategori Ağırlığı", "Kombine", "Repertuar"],
    correct: 0,
    category: "Spor",
    difficulty: "Kolay"
  },
  {
    id: 1154,
    question: "Teniste, bir oyunda durumun 40-40 (eşitlik) olması halinde kullanılan terim nedir?",
    options: ["Break Point", "Game Point", "Deuce (Eşitlik)", "Advantage"],
    correct: 2,
    category: "Spor",
    difficulty: "Kolay"
  },
  {
    id: 1155,
    question: "Basketbolda, oyuncunun rakibine yasal olmayan şekilde temas etmesi sonucu verilen ceza nedir?",
    options: ["Hata (Violation)", "Top Kaybı", "Faul", "Teknik Faul"],
    correct: 2,
    category: "Spor",
    difficulty: "Kolay"
  },
  {
    id: 1156,
    question: "Yüzmede, kurbağalama stilinde, kolların suyu öne doğru iterek birleştirilmesi eylemine ne ad verilir?",
    options: ["Vuruş", "Çekiş (Pull)", "Itiş", "Dönüş"],
    correct: 1,
    category: "Spor",
    difficulty: "Orta"
  },
  {
    id: 1157,
    question: "Olimpiyat Oyunları'nın sembolü olan alev, hangi antik kentten getirilerek yakılır?",
    options: ["Atina", "Roma", "Olimpia", "Sparta"],
    correct: 2,
    category: "Spor",
    difficulty: "Kolay"
  },
  {
    id: 1158,
    question: "Boks sporunda, bir boksörün nakavtla (KO) yenilgisi için yerde kalabileceği maksimum süre (saniye) nedir?",
    options: ["5 saniye", "8 saniye", "10 saniye", "15 saniye"],
    correct: 2,
    category: "Spor",
    difficulty: "Kolay"
  },
  {
    id: 1159,
    question: "Kriket sporunda, topun atıldığı ve vurucunun durduğu bölgeye ne ad verilir?",
    options: ["Boundry", "Crease", "Pitch", "Wicket"],
    correct: 2,
    category: "Spor",
    difficulty: "Zor"
  },
  {
    id: 1160,
    question: "Voleybolda, topu karşılamak için filenin önünde zıplayarak yapılan savunma hareketine ne ad verilir?",
    options: ["Manşet", "Smaç", "Blok", "Servis"],
    correct: 2,
    category: "Spor",
    difficulty: "Kolay"
  },
  {
    id: 1161,
    question: "Basketbolda, bir takımın bir maçı uzatma (ek süre) olmadan kazanması için gerekli süre (toplam dakika) nedir?",
    options: ["30 dakika", "40 dakika", "48 dakika", "60 dakika"],
    correct: 2,
    category: "Spor",
    difficulty: "Kolay"
  },
  {
    id: 1162,
    question: "Kış Olimpiyatları'nda yer alan ve kızak üzerinde tek ya da iki kişilik takımlar halinde yapılan, hız ve zamanlamaya dayalı yarış disiplini nedir?",
    options: ["Skeleton", "Bobsled (Kızak)", "Luge", "Kısa Kulvar Sürat Pateni"],
    correct: 1,
    category: "Spor",
    difficulty: "Orta"
  },
  {
    id: 1163,
    question: "Futbolda, ceza sahası içinde kaleciye geri pas veren bir oyuncunun topu eliyle tutması sonucu verilen karar nedir?",
    options: ["Penaltı Vuruşu", "Endirekt Serbest Vuruş", "Direkt Serbest Vuruş", "Köşe Vuruşu"],
    correct: 1,
    category: "Spor",
    difficulty: "Orta"
  },
  {
    id: 1164,
    question: "Atletizmde, bayrak yarışlarında kullanılan ve devir teslimi yapılan küçük çubuğa ne ad verilir?",
    options: ["Cirit", "Disk", "Bayrak (Baton)", "Sırık"],
    correct: 2,
    category: "Spor",
    difficulty: "Kolay"
  },
  {
    id: 1165,
    question: "Teniste, tekler (single) maçlarında bir oyuncunun topu rakibin arka çizgisi ve yan çizgileri arasına atması durumuna ne ad verilir?",
    options: ["Hata (Fault)", "Net", "Out", "İçeri (In)"],
    correct: 3,
    category: "Spor",
    difficulty: "Kolay"
  },
  {
    id: 1166,
    question: "Yarış Atçılığı sporunda, atın bindiği kişiye ne ad verilir?",
    options: ["Antrenör", "Seyis", "Jokey", "Binici"],
    correct: 2,
    category: "Spor",
    difficulty: "Kolay"
  },
  {
    id: 1167,
    question: "Dağcılıkta, ip ve diğer güvenlik ekipmanları kullanılarak yapılan kontrollü iniş tekniği nedir?",
    options: ["Tırmanma", "Abseiling (İp İnişi)", "Bouldering", "Yürüyüş"],
    correct: 1,
    category: "Spor",
    difficulty: "Orta"
  },
  {
    id: 1168,
    question: "Sualtı Ragbisi sporunda, topu kimin havuz dibine yerleştirmesiyle sayı kazanılır?",
    options: ["Kaleci", "Hücum Oyuncusu", "Rakip Oyuncular", "Topu ilk alan oyuncu"],
    correct: 1,
    category: "Spor",
    difficulty: "Zor"
  },
  {
    id: 1169,
    question: "Formula 1'de, lastik değiştirmek, yakıt almak veya tamir yapmak için araçların durduğu alan neresidir?",
    options: ["Yarış Çizgisi", "Güvenlik Bölgesi", "Pit Alanı", "Start Çizgisi"],
    correct: 2,
    category: "Spor",
    difficulty: "Kolay"
  },
  {
    id: 1170,
    question: "Basketbol sahasında, potanın hemen altındaki boyalı bölgeye ne ad verilir?",
    options: ["Üç Sayı Çizgisi", "Orta Saha", "Boyalı Alan (Paint/Serbest Atış Çizgisi)", "Kenar Çizgisi"],
    correct: 2,
    category: "Spor",
    difficulty: "Kolay"
  },
  {
    id: 1171,
    question: "Voleybolda, topu yere düşürmemek için yapılan, genellikle kolun alt kısmıyla topa vurma hareketi nedir?",
    options: ["Parmak Pas", "Blok", "Manşet", "Smaç"],
    correct: 2,
    category: "Spor",
    difficulty: "Kolay"
  },
  {
    id: 1172,
    question: "Futbolda, bir maçın normal süresinin sonunda iki takımın da berabere kalması ve galip gelmesi gereken durumlarda oynanan ekstra süre nedir?",
    options: ["Uzatma Devresi (Ekstra Time)", "Penaltı Vuruşları", "Altın Gol", "Tekrar Maçı"],
    correct: 0,
    category: "Spor",
    difficulty: "Kolay"
  },
  {
    id: 1173,
    question: "Golf sporunda, topun deliğe atıldığı vuruş sayısının, o delik için belirlenen standart vuruş sayısından (Par) bir fazla olması durumu nedir?",
    options: ["Birdie", "Eagle", "Bogey", "Par"],
    correct: 2,
    category: "Spor",
    difficulty: "Orta"
  },
  {
    id: 1174,
    question: "Kayağa benzeyen, ancak tek bir tahta üzerinde her iki ayağın da sabitlendiği kış spor dalı nedir?",
    options: ["Kayakla Atlama", "Kros Kayağı", "Snowboard", "Alp Disiplini"],
    correct: 2,
    category: "Spor",
    difficulty: "Kolay"
  },
  {
    id: 1175,
    question: "Uzun Atlama sporunda, sporcunun sıçrama çizgisini geçmesi durumunda yapılan kural ihlali nedir?",
    options: ["Faul", "Kural Dışı Atlayış (Foul Jump)", "Yüksek Atlama", "Uzun Atlayış"],
    correct: 1,
    category: "Spor",
    difficulty: "Kolay"
  },
  {
    id: 1176,
    question: "Boksta, hakemin 8'e kadar saymasına rağmen boksörün kendini savunamaması veya ayağa kalkamaması durumu nedir?",
    options: ["Teknik Nakavt (TKO)", "Faul", "Nakavt (KO)", "Dönüş"],
    correct: 2,
    category: "Spor",
    difficulty: "Kolay"
  },
  {
    id: 1177,
    question: "Olimpiyat Oyunları'nda, bir sporcuya dürüstlük, fair play ve centilmenlik ruhunu yansıtan madalya ne ad verilir?",
    options: ["Altın Madalya", "Bronz Madalya", "Pierre de Coubertin Madalyası", "Gümüş Madalya"],
    correct: 2,
    category: "Spor",
    difficulty: "Orta"
  },
  {
    id: 1178,
    question: "Futbol sahasında, penaltı noktasının uzaklığı kaç metredir (yaklaşık)?" ,
    options: ["11 metre", "9 metre", "15 metre", "10 metre"],
    correct: 0,
    category: "Spor",
    difficulty: "Kolay"
  },
  {
    id: 1179,
    question: "Amerikan Futbolu'nda, hücum eden takımın topu rakibin gol alanına taşıyarak sayı kazanmasına ne ad verilir?",
    options: ["Field Goal", "Safety", "Touchdown", "Extra Point"],
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
    options: ["Tie-Break", "Deuce", "Love Game", "Break Point"],
    correct: 2,
    category: "Spor",
    difficulty: "Orta"
  },
  {
    id: 1182,
    question: "Atletizmde, 100 metrenin altında (genellikle 60 metre) kapalı alanlarda koşulan kısa mesafe yarışı nedir?",
    options: ["Orta Mesafe", "Uzun Mesafe", "Sprint", "Maraton"],
    correct: 2,
    category: "Spor",
    difficulty: "Kolay"
  },
  {
    id: 1183,
    question: "Voleybolda, bir oyuncunun fileye fazla yaklaşması veya rakip oyuncuya temas etmesi sonucu yapılan kural ihlali nedir?",
    options: ["Yürüme", "Filenin İhlali", "Top Tutma", "Çift Vuruş"],
    correct: 1,
    category: "Spor",
    difficulty: "Kolay"
  },
  {
    id: 1184,
    question: "Sualtı Hokeyi sporunda, oyuncuların ellerindeki kısa sopalarla havuzun dibinde ittiği disk şeklindeki nesne nedir?",
    options: ["Top", "Puck", "Disk", "Bilye"],
    correct: 1,
    category: "Spor",
    difficulty: "Zor"
  },
  {
    id: 1185,
    question: "Buz pateni sporunda, buz üzerinde yapılan karmaşık sıçrama ve dönüş hareketlerinin birleşimi nedir?",
    options: ["Spiral", "Spin", "Jump (Atlayış)", "Lift"],
    correct: 2,
    category: "Spor",
    difficulty: "Orta"
  },
  {
    id: 1186,
    question: "Futbol maçlarında, bir oyuncunun oyundan atılmasına neden olan, en ağır kural ihlalini belirten kart rengi nedir?",
    options: ["Sarı Kart", "Mavi Kart", "Kırmızı Kart", "Beyaz Kart"],
    correct: 2,
    category: "Spor",
    difficulty: "Kolay"
  },
  {
    id: 1187,
    question: "Türkiye'nin geleneksel sporlarından olan, pehlivanların yağlanarak mücadele ettiği güreş türü nedir?",
    options: ["Serbest Güreş", "Grekoromen Güreş", "Yağlı Güreş", "Aba Güreşi"],
    correct: 2,
    category: "Spor",
    difficulty: "Kolay"
  },
  {
    id: 1188,
    question: "Modern Olimpiyat Oyunları'nın ilk kez düzenlendiği şehir ve yıl hangisidir?",
    options: ["Paris, 1900", "Londra, 1908", "Atina, 1896", "Roma, 1960"],
    correct: 2,
    category: "Spor",
    difficulty: "Kolay"
  },
  {
    id: 1189,
    question: "Basketbolda, topu süren oyuncunun topu tutarak iki adımdan fazla atması kural ihlali nedir?",
    options: ["Çift Dribbling", "Yürüme (Traveling)", "Faul", "Pas Hatası"],
    correct: 1,
    category: "Spor",
    difficulty: "Kolay"
  },
  {
    id: 1190,
    question: "Boks sporunda, bir boksörün rakibinin vücudunun alt kısmına (bel altı) vurması kural ihlali nedir?",
    options: ["Low Blow (Bel Altı Vuruş)", "Kafa Vuruşu", "Teknik Vuruş", "Kural Dışı Vuruş"],
    correct: 0,
    category: "Spor",
    difficulty: "Kolay"
  },
  {
    id: 1191,
    question: "Futbolda, oyuncu değişikliği yapılması gereken alan (genellikle orta saha çizgisine yakın) neresidir?",
    options: ["Taç Çizgisi", "Kale Arkası", "Teknik Alan", "Orta Saha"],
    correct: 2,
    category: "Spor",
    difficulty: "Kolay"
  },
  {
    id: 1192,
    question: "Su kayağı sporunda, sporcunun su üzerinde kavisler çizerek ve atlayışlar yaparak puan topladığı disiplin nedir?",
    options: ["Slalom", "Atlama (Jump)", "Figür (Trick)", "Serbest Stil"],
    correct: 2,
    category: "Spor",
    difficulty: "Orta"
  },
  {
    id: 1193,
    question: "Teniste, bir maçta en az altı oyun kazanarak rakibine karşı en az iki oyun farkı yakalayan oyuncunun kazandığı bölüm nedir?",
    options: ["Point (Puan)", "Game (Oyun)", "Set", "Maç"],
    correct: 2,
    category: "Spor",
    difficulty: "Kolay"
  },
  {
    id: 1194,
    question: "Formul 1'de, güvenlik aracı (Safety Car) hangi durumda yarışa dahil olur?",
    options: ["Hava çok sıcak olduğunda", "Lider pilot yavaşladığında", "Pistte tehlikeli bir durum oluştuğunda", "Son 10 tur kaldığında"],
    correct: 2,
    category: "Spor",
    difficulty: "Kolay"
  },
  {
    id: 1195,
    question: "Yüzmede, sırtüstü stilinde yüzücünün suya atlayışı hangi pozisyonda yapılır?",
    options: ["Ayakta", "Oturarak", "Geriye Dönük (Sırtüstü)", "Yüzükoyun"],
    correct: 2,
    category: "Spor",
    difficulty: "Kolay"
  },
  {
    id: 1196,
    question: "Atletizmde, çekiç atma sporunda kullanılan metal topun adı nedir?",
    options: ["Disk", "Gülle", "Çekiç", "Cirit"],
    correct: 2,
    category: "Spor",
    difficulty: "Kolay"
  },
  {
    id: 1197,
    question: "Hentbol maçlarında, bir oyuncunun rakip kaleye doğru atış yapmasına ne ad verilir?",
    options: ["Pas", "Dribbling", "Şut (Atış)", "Faul"],
    correct: 2,
    category: "Spor",
    difficulty: "Kolay"
  },
  {
    id: 1198,
    question: "Golf sporunda, bir vuruşta topu deliğe sokma (Hole-in-One) durumuna ne ad verilir?",
    options: ["Bogey", "Birdie", "Ace", "Par"],
    correct: 2,
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
    options: ["Puanla Galibiyet", "Faul", "Nakavt (Knockout/KO)", "Beraberlik"],
    correct: 2,
    category: "Spor",
    difficulty: "Kolay"
  },

  // ==================== SİNEMA ve TV ====================
{
    id: 1201,
    question: "Titanik (Titanic) ve Avatar gibi gişe rekorları kıran filmlerin yönetmeni kimdir?",
    options: ["Steven Spielberg", "George Lucas", "James Cameron", "Christopher Nolan"],
    correct: 2,
    category: CATEGORIES.CINEMA_TV.name,
    difficulty: "Kolay"
  },
  {
    id: 1202,
    question: "Yeşilçam'ın efsanevi ismi, 'Sultan' lakabıyla anılan kadın oyuncu kimdir?",
    options: ["Filiz Akın", "Hülya Koçyiğit", "Fatma Girik", "Türkan Şoray"],
    correct: 3,
    category: CATEGORIES.CINEMA_TV.name,
    difficulty: "Kolay"
  },
  {
    id: 1203,
    question: "Dünyanın en prestijli film ödüllerinden biri olan Akademi Ödülleri'ne ne ad verilir?",
    options: ["Altın Küre", "BAFTA", "Oscar", "Palme d'Or"],
    correct: 2,
    category: CATEGORIES.CINEMA_TV.name,
    difficulty: "Kolay"
  },
  {
    id: 1204,
    question: "'Winter is Coming' (Kış Geliyor) sloganıyla bilinen popüler TV dizisi hangisidir?",
    options: ["The Walking Dead", "Game of Thrones", "Breaking Bad", "Stranger Things"],
    correct: 1,
    category: CATEGORIES.CINEMA_TV.name,
    difficulty: "Kolay"
  },
  {
    id: 1205,
    question: "Bir filmin görsel kalitesinden ve kamera hareketlerinden sorumlu olan teknik ekip başkanı kimdir?",
    options: ["Sanat Yönetmeni", "Görüntü Yönetmeni (DOP)", "Kurgu Yönetmeni", "Yapımcı"],
    correct: 1,
    category: CATEGORIES.CINEMA_TV.name,
    difficulty: "Orta"
  },
  {
    id: 1206,
    question: "The Godfather (Baba) üçlemesinin yönetmeni kimdir?",
    options: ["Martin Scorsese", "Alfred Hitchcock", "Francis Ford Coppola", "Stanley Kubrick"],
    correct: 2,
    category: CATEGORIES.CINEMA_TV.name,
    difficulty: "Kolay"
  },
  {
    id: 1207,
    question: "Kanada'da düzenlenen, halk oylamasıyla ödül veren ünlü film festivali hangisidir?",
    options: ["Sundance", "Cannes", "Berlin", "Toronto (TIFF)"],
    correct: 3,
    category: CATEGORIES.CINEMA_TV.name,
    difficulty: "Zor"
  },
  {
    id: 1208,
    question: "Kış Uykusu ve Uzak gibi filmleriyle tanınan, Altın Palmiye ödüllü Türk yönetmen kimdir?",
    options: ["Ferzan Özpetek", "Zeki Demirkubuz", "Nuri Bilge Ceylan", "Semih Kaplanoğlu"],
    correct: 2,
    category: CATEGORIES.CINEMA_TV.name,
    difficulty: "Kolay"
  },
  {
    id: 1209,
    question: "Bir TV dizisi veya filmin bölümlerinin veya sahnelerinin art arda çekilme sırasına ne ad verilir?",
    options: ["Kurgu", "Post Prodüksiyon", "Prodüksiyon", "Çekim (Shooting)"],
    correct: 3,
    category: CATEGORIES.CINEMA_TV.name,
    difficulty: "Orta"
  },
  {
    id: 1210,
    question: "Star Wars (Yıldız Savaşları) serisinin yaratıcısı kimdir?",
    options: ["Peter Jackson", "Ridley Scott", "George Lucas", "Denis Villeneuve"],
    correct: 2,
    category: CATEGORIES.CINEMA_TV.name,
    difficulty: "Kolay"
  },
  {
    id: 1211,
    question: "Mizah ağırlıklı, genellikle komik olaylar ve karakterler içeren film türü nedir?",
    options: ["Dram", "Gerilim", "Komedi", "Aksiyon"],
    correct: 2,
    category: CATEGORIES.CINEMA_TV.name,
    difficulty: "Kolay"
  },
  {
    id: 1212,
    question: "Yüzüklerin Efendisi (Lord of the Rings) üçlemesinin yönetmeni kimdir?",
    options: ["Guillermo del Toro", "Steven Spielberg", "Peter Jackson", "Alfonso Cuarón"],
    correct: 2,
    category: CATEGORIES.CINEMA_TV.name,
    difficulty: "Kolay"
  },
  {
    id: 1213,
    question: "Yeşilçam'ın efsanevi ismi, 'Gülen Adam' lakabıyla anılan komedi oyuncusu kimdir?",
    options: ["Münir Özkul", "Adile Naşit", "Kemal Sunal", "Şener Şen"],
    correct: 2,
    category: CATEGORIES.CINEMA_TV.name,
    difficulty: "Kolay"
  },
  {
    id: 1214,
    question: "Sinema filminde bir sahnenin çekileceği yeri ve zamanı ayrıntılı olarak gösteren metin nedir?",
    options: ["Senaryo", "Treatment", "Story Board", "Logline"],
    correct: 0,
    category: CATEGORIES.CINEMA_TV.name,
    difficulty: "Orta"
  },
  {
    id: 1215,
    question: "1994 yapımı, bir hapishaneden kaçış hikayesini anlatan ünlü film hangisidir?",
    options: ["Yeşil Yol", "Esaretin Bedeli (Shawshank Redemption)", "Prestij", "Dövüş Kulübü"],
    correct: 1,
    category: CATEGORIES.CINEMA_TV.name,
    difficulty: "Kolay"
  },
  {
    id: 1216,
    question: "Joker karakterini 'The Dark Knight' filminde canlandıran ve bu rolüyle Oscar kazanan oyuncu kimdir?",
    options: ["Joaquin Phoenix", "Jack Nicholson", "Jared Leto", "Heath Ledger"],
    correct: 3,
    category: CATEGORIES.CINEMA_TV.name,
    difficulty: "Kolay"
  },
  {
    id: 1217,
    question: "Türkiye'de en uzun süre yayında kalan (2006-...) ve polisiye-aksiyon türündeki TV dizisi hangisidir?",
    options: ["Kurtlar Vadisi", "Arka Sokaklar", "Çukur", "Eşkıya Dünyaya Hükümdar Olmaz"],
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
    options: ["Minari", "Train to Busan", "Parasite (Parazit)", "Burning"],
    correct: 2,
    category: CATEGORIES.CINEMA_TV.name,
    difficulty: "Kolay"
  },
  {
    id: 1220,
    question: "Pulp Fiction (Ucuz Roman) ve Kill Bill gibi filmlerin kendine özgü stil sahibi yönetmeni kimdir?",
    options: ["Guy Ritchie", "Joel Coen", "Quentin Tarantino", "Wes Anderson"],
    correct: 2,
    category: CATEGORIES.CINEMA_TV.name,
    difficulty: "Kolay"
  },
  {
    id: 1221,
    question: "Bir filmin veya dizinin yayınlanmadan önce tanıtım amacıyla gösterilen kısa videoya ne ad verilir?",
    options: ["Kamera Arkası", "Fragman (Trailer)", "Jenerik", "Teaser"],
    correct: 1,
    category: CATEGORIES.CINEMA_TV.name,
    difficulty: "Kolay"
  },
  {
    id: 1222,
    question: "İlk kez 1927'de New York'ta yayınlanan, 'talkies' (konuşan filmler) dönemini başlatan film hangisidir?",
    options: ["Yurttaş Kane", "Caz Şarkıcısı (The Jazz Singer)", "Metro", "Modern Zamanlar"],
    correct: 1,
    category: CATEGORIES.CINEMA_TV.name,
    difficulty: "Zor"
  },
  {
    id: 1223,
    question: "Aktörlerin ve teknik ekibin film yapım sürecindeki telif haklarını ve maliyetlerini yöneten kişi kimdir?",
    options: ["Yönetmen", "Yapımcı (Producer)", "Dağıtımcı", "Senarist"],
    correct: 1,
    category: CATEGORIES.CINEMA_TV.name,
    difficulty: "Orta"
  },
  {
    id: 1224,
    question: "Forrest Gump filminde başrol oyuncusu kimdir?",
    options: ["Brad Pitt", "Leonardo DiCaprio", "Tom Hanks", "Matt Damon"],
    correct: 2,
    category: CATEGORIES.CINEMA_TV.name,
    difficulty: "Kolay"
  },
  {
    id: 1225,
    question: "Dünyanın en eski film festivali olarak bilinen ve İtalya'da düzenlenen etkinlik nedir?",
    options: ["Venedik Film Festivali", "Cannes Film Festivali", "Berlin Film Festivali", "Sundance Film Festivali"],
    correct: 0,
    category: CATEGORIES.CINEMA_TV.name,
    difficulty: "Orta"
  },
  {
    id: 1226,
    question: "Türkiye'de 'Hababam Sınıfı' serisinin yönetmeni kimdir?",
    options: ["Ertem Eğilmez", "Yılmaz Güney", "Lütfi Ömer Akad", "Metin Erksan"],
    correct: 0,
    category: CATEGORIES.CINEMA_TV.name,
    difficulty: "Kolay"
  },
  {
    id: 1227,
    question: "Bir filmde veya dizide, seyircinin başkahramanın iç sesini duyduğu anlatım tekniğine ne ad verilir?",
    options: ["Flashback", "Montaj", "Sesli Anlatım (Voice-over)", "Mizansen"],
    correct: 2,
    category: CATEGORIES.CINEMA_TV.name,
    difficulty: "Orta"
  },
  {
    id: 1228,
    question: "Hangi dünyaca ünlü aktör, 'Karayip Korsanları' serisindeki Jack Sparrow rolüyle tanınır?",
    options: ["Robert Downey Jr.", "Johnny Depp", "Tom Cruise", "Will Smith"],
    correct: 1,
    category: CATEGORIES.CINEMA_TV.name,
    difficulty: "Kolay"
  },
  {
    id: 1229,
    question: "Türkiye'nin ilk uluslararası ödüllü film festivali nerede düzenlenmektedir?",
    options: ["İstanbul", "Ankara", "Antalya (Altın Portakal)", "Adana"],
    correct: 2,
    category: CATEGORIES.CINEMA_TV.name,
    difficulty: "Kolay"
  },
  {
    id: 1230,
    question: "Yol filmiyle Altın Palmiye kazanan, 'Umutsuzlar' ve 'Sürü' filmlerinin de yönetmeni olan usta isim kimdir?",
    options: ["Yılmaz Güney", "Ömer Kavur", "Atıf Yılmaz", "Halit Refiğ"],
    correct: 0,
    category: CATEGORIES.CINEMA_TV.name,
    difficulty: "Orta"
  },
  {
    id: 1231,
    question: "TV'de veya sinemada kullanılan, karakterin yüzünü yakın plandan gösteren çekim türü nedir?",
    options: ["Genel Çekim", "Orta Çekim", "Yakın Çekim (Close-up)", "Aşırı Genel Çekim"],
    correct: 2,
    category: CATEGORIES.CINEMA_TV.name,
    difficulty: "Kolay"
  },
  {
    id: 1232,
    question: "The Matrix filminde başroldeki Neo karakterini canlandıran aktör kimdir?",
    options: ["Tom Cruise", "Brad Pitt", "Keanu Reeves", "Christian Bale"],
    correct: 2,
    category: CATEGORIES.CINEMA_TV.name,
    difficulty: "Kolay"
  },
  {
    id: 1233,
    question: "Türkiye'de 1986 yapımı, başrolünde Müjde Ar'ın oynadığı ve sinema tarihinin önemli filmlerinden sayılan eser hangisidir?",
    options: ["Anayurt Oteli", "Muhsin Bey", "Teyzem", "Selamsız Bandosu"],
    correct: 0,
    category: CATEGORIES.CINEMA_TV.name,
    difficulty: "Zor"
  },
  {
    id: 1234,
    question: "Fransa'da düzenlenen ve dünyanın en çok ilgi gören film festivali hangisidir?",
    options: ["Venedik", "Berlin", "Cannes", "Sundance"],
    correct: 2,
    category: CATEGORIES.CINEMA_TV.name,
    difficulty: "Kolay"
  },
  {
    id: 1235,
    question: "Bir filmin gösterimi için sinema salonlarına dağıtılmasını sağlayan şirketlere ne ad verilir?",
    options: ["Prodüksiyon Şirketi", "Stüdyo", "Dağıtım Şirketi", "Ajans"],
    correct: 2,
    category: CATEGORIES.CINEMA_TV.name,
    difficulty: "Orta"
  },
  {
    id: 1236,
    question: "'Bir Zamanlar Hollywood'da' ve 'The Hateful Eight' filmlerinin yönetmeni kimdir?",
    options: ["Martin Scorsese", "Christopher Nolan", "Quentin Tarantino", "David Fincher"],
    correct: 2,
    category: CATEGORIES.CINEMA_TV.name,
    difficulty: "Kolay"
  },
  {
    id: 1237,
    question: "Yeşilçam'da 'Four in One' (Dört Yapraklı Yonca) olarak adlandırılan kadın oyunculardan biri hangisidir?",
    options: ["Hale Soygazi", "Fatma Girik", "Necla Nazır", "Gülşen Bubikoğlu"],
    correct: 1,
    category: CATEGORIES.CINEMA_TV.name,
    difficulty: "Orta"
  },
  {
    id: 1238,
    question: "Kamera görüntüsünün kadrajda soldan sağa veya sağdan sola doğru hareket etmesi tekniğine ne ad verilir?",
    options: ["Tilt", "Zoom", "Pan (Kaydırma)", "Dolly"],
    correct: 2,
    category: CATEGORIES.CINEMA_TV.name,
    difficulty: "Orta"
  },
  {
    id: 1239,
    question: "Hangi efsanevi aktör, 'Taxi Driver', 'Raging Bull' ve 'Goodfellas' gibi filmlerde rol almıştır?",
    options: ["Al Pacino", "Marlon Brando", "Robert De Niro", "Jack Nicholson"],
    correct: 2,
    category: CATEGORIES.CINEMA_TV.name,
    difficulty: "Kolay"
  },
  {
    id: 1240,
    question: "Dizi sektöründe, bir sezonun tamamlanması için ne kadar bölüm çekilir?",
    options: ["8-12", "13-18", "20-30", "Bu, ülkeden ülkeye değişir."],
    correct: 3,
    category: CATEGORIES.CINEMA_TV.name,
    difficulty: "Kolay"
  },
  {
    id: 1241,
    question: "Hangi Türk TV dizisi, 2012 yılında Uluslararası Emmy Ödülleri'nde En İyi Dizi seçilmiştir?",
    options: ["Ezel", "Kara Para Aşk", "Kara Sevda", "Muhteşem Yüzyıl"],
    correct: 0,
    category: CATEGORIES.CINEMA_TV.name,
    difficulty: "Zor"
  },
  {
    id: 1242,
    question: "Bir filmin veya dizinin çekilmesi için ayrılan bütçeye ne ad verilir?",
    options: ["Kar", "Gider", "Kasa", "Prodüksiyon Maliyeti (Bütçe)"],
    correct: 3,
    category: CATEGORIES.CINEMA_TV.name,
    difficulty: "Kolay"
  },
  {
    id: 1243,
    question: "Seri katil Hannibal Lecter karakterini 'Kuzuların Sessizliği' filminde canlandıran usta aktör kimdir?",
    options: ["Anthony Hopkins", "Kevin Spacey", "Jodie Foster", "Jeremy Irons"],
    correct: 0,
    category: CATEGORIES.CINEMA_TV.name,
    difficulty: "Kolay"
  },
  {
    id: 1244,
    question: "Hangi sinema akımı, 1940'larda ortaya çıkmış, suç ve karamsarlık temalı filmleri içerir?",
    options: ["Sürrealizm", "Film Noir (Kara Film)", "Yeni Dalga", "Dışavurumculuk"],
    correct: 1,
    category: CATEGORIES.CINEMA_TV.name,
    difficulty: "Zor"
  },
  {
    id: 1245,
    question: "Türkiye'de 'Tosun Paşa', 'Neşeli Günler' ve 'Gülünüz Güldürünüz' gibi eserleriyle tanınan komedi oyuncusu kimdir?",
    options: ["Şener Şen", "Münir Özkul", "Halit Akçatepe", "Tarık Akan"],
    correct: 1,
    category: CATEGORIES.CINEMA_TV.name,
    difficulty: "Kolay"
  },
  {
    id: 1246,
    question: "Yüksek maliyetli, büyük prodüksiyonlu ve genellikle uluslararası dağıtımı olan filmlere ne ad verilir?",
    options: ["Bağımsız Film", "B Film", "Blockbuster (Gişe Filmi)", "Sanat Filmi"],
    correct: 2,
    category: CATEGORIES.CINEMA_TV.name,
    difficulty: "Kolay"
  },
  {
    id: 1247,
    question: "Bir filmin çekimlerinin bittikten sonra, görüntülerin birleştirilmesi, ses eklenmesi gibi işlemlerin yapıldığı aşama nedir?",
    options: ["Senaryo Geliştirme", "Ön Prodüksiyon", "Post Prodüksiyon", "Çekim"],
    correct: 2,
    category: CATEGORIES.CINEMA_TV.name,
    difficulty: "Kolay"
  },
  {
    id: 1248,
    question: "Hangi efsanevi İngiliz yönetmen, 'Psiko', 'Kuşlar' ve 'Arka Pencere' gibi gerilim filmleriyle ünlüdür?",
    options: ["Orson Welles", "Stanley Kubrick", "Alfred Hitchcock", "Fritz Lang"],
    correct: 2,
    category: CATEGORIES.CINEMA_TV.name,
    difficulty: "Kolay"
  },
  {
    id: 1249,
    question: "Bir TV dizisi veya filmde, anlatının birdenbire geleceğe atladığı teknik nedir?",
    options: ["Flashback", "Flashforward", "Freeze Frame", "Jump Cut"],
    correct: 1,
    category: CATEGORIES.CINEMA_TV.name,
    difficulty: "Orta"
  },
  {
    id: 1250,
    question: "Türkiye'de 'Çalıkuşu', 'Dudaktan Kalbe' gibi roman uyarlamalarıyla bilinen yönetmen kimdir?",
    options: ["Lütfi Ömer Akad", "Osman Sınav", "Reşat Nuri Güntekin", "Orhan Aksoy"],
    correct: 3,
    category: CATEGORIES.CINEMA_TV.name,
    difficulty: "Zor"
  },
  {
    id: 1251,
    question: "Amerikan TV'sinde 'Friends', 'Seinfeld' gibi popüler komedi dizilerinin türü nedir?",
    options: ["Sitcom (Durum Komedisi)", "Mini Dizi", "Drama", "Reality Show"],
    correct: 0,
    category: CATEGORIES.CINEMA_TV.name,
    difficulty: "Kolay"
  },
  {
    id: 1252,
    question: "Christopher Nolan'ın 'Inception' (Başlangıç) filminde, rüyalar içinde rüyaya girme fikrini yansıtan nedir?",
    options: ["Paradoks", "Sürrealizm", "Çoklu Rüyalar (Dream Levels)", "Simülasyon"],
    correct: 2,
    category: CATEGORIES.CINEMA_TV.name,
    difficulty: "Orta"
  },
  {
    id: 1253,
    question: "Bir filmde, oyuncuların sahnede duruşları, hareketleri ve sahne düzenlemesine ne ad verilir?",
    options: ["Koreografi", "Mizansen (Duruş Düzeni)", "Blokaj", "Improvizasyon"],
    correct: 1,
    category: CATEGORIES.CINEMA_TV.name,
    difficulty: "Zor"
  },
  {
    id: 1254,
    question: "Hangi oyuncu 'Rocky Balboa' karakterini canlandırmıştır?",
    options: ["Arnold Schwarzenegger", "Jean-Claude Van Damme", "Sylvester Stallone", "Dolph Lundgren"],
    correct: 2,
    category: CATEGORIES.CINEMA_TV.name,
    difficulty: "Kolay"
  },
  {
    id: 1255,
    question: "Amerikan televizyon endüstrisinin en prestijli ödülleri olan Emmy Ödülleri nerede düzenlenir?",
    options: ["New York", "Chicago", "Los Angeles", "Las Vegas"],
    correct: 2,
    category: CATEGORIES.CINEMA_TV.name,
    difficulty: "Orta"
  },
  {
    id: 1256,
    question: "Yeşilçam'da 'Yakışıklı Aktör' olarak tanınan ve 1970'lerde popüler olan jön kimdir?",
    options: ["Ayhan Işık", "Kartal Tibet", "Tarık Akan", "Ediz Hun"],
    correct: 2,
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
    options: ["Stanley Kubrick", "Andrei Tarkovsky", "Ingmar Bergman", "Federico Fellini"],
    correct: 0,
    category: CATEGORIES.CINEMA_TV.name,
    difficulty: "Kolay"
  },
  {
    id: 1259,
    question: "Bir filmde, karakterlerin geçmişteki bir olayı hatırladığı anları gösteren teknik nedir?",
    options: ["Flashforward", "Montaj", "Flashback (Geriye Dönüş)", "Jump Cut"],
    correct: 2,
    category: CATEGORIES.CINEMA_TV.name,
    difficulty: "Kolay"
  },
  {
    id: 1260,
    question: "En İyi Film dalında birden fazla Oscar kazanan tek kadın yönetmen kimdir?",
    options: ["Kathryn Bigelow", "Greta Gerwig", "Chloé Zhao", "Jane Campion"],
    correct: 2,
    category: CATEGORIES.CINEMA_TV.name,
    difficulty: "Zor"
  },
  {
    id: 1261,
    question: "Marvel Sinematik Evreni'nin ilk filmi olan 'Iron Man'in başrol oyuncusu kimdir?",
    options: ["Chris Evans", "Chris Hemsworth", "Robert Downey Jr.", "Mark Ruffalo"],
    correct: 2,
    category: CATEGORIES.CINEMA_TV.name,
    difficulty: "Kolay"
  },
  {
    id: 1262,
    question: "Bir filmin veya dizinin yayın haklarını satın alıp, farklı platformlara pazarlayan kuruluşa ne ad verilir?",
    options: ["Afiş Ajansı", "Prodüksiyon Şirketi", "Lisanslama Şirketi", "Reklam Ajansı"],
    correct: 2,
    category: CATEGORIES.CINEMA_TV.name,
    difficulty: "Orta"
  },
  {
    id: 1263,
    question: "Fantastik ve macera türündeki 'Harry Potter' serisinin yazarı kimdir?",
    options: ["J. R. R. Tolkien", "George R. R. Martin", "J. K. Rowling", "Stephen King"],
    correct: 2,
    category: CATEGORIES.CINEMA_TV.name,
    difficulty: "Kolay"
  },
  {
    id: 1264,
    question: "Yeşilçam'da 'Müzeyyen' karakteriyle tanınan ve komedi filmlerinin aranan ismi olan kadın oyuncu kimdir?",
    options: ["Gülşen Bubikoğlu", "Necla Nazır", "Adile Naşit", "Suna Pekuysal"],
    correct: 2,
    category: CATEGORIES.CINEMA_TV.name,
    difficulty: "Orta"
  },
  {
    id: 1265,
    question: "Bir karakterin, kameraya bakarak direkt izleyiciyle konuştuğu film tekniğine ne ad verilir?",
    options: ["Monolog", "Diyalog", "Dördüncü Duvarı Yıkma", "Pantomim"],
    correct: 2,
    category: CATEGORIES.CINEMA_TV.name,
    difficulty: "Zor"
  },
  {
    id: 1266,
    question: "Amerikan televizyon dizilerinde, bir sezon genellikle kaç bölümden oluşur?",
    options: ["6-8", "10-13", "18-24", "30 ve üzeri"],
    correct: 2,
    category: CATEGORIES.CINEMA_TV.name,
    difficulty: "Orta"
  },
  {
    id: 1267,
    question: "The Sound of Music (Neşeli Günler) ve West Side Story (Batı Yakasının Hikayesi) hangi film türüne örnektir?",
    options: ["Western", "Korku", "Müzikal", "Biyografi"],
    correct: 2,
    category: CATEGORIES.CINEMA_TV.name,
    difficulty: "Kolay"
  },
  {
    id: 1268,
    question: "Bir filmin setinde, görüntülerin ve sahnelerin planlandığı, çizimlerle anlatıldığı taslak nedir?",
    options: ["Senaryo", "Dekor Planı", "Storyboard (Öykü Taslağı)", "Yönetmen Defteri"],
    correct: 2,
    category: CATEGORIES.CINEMA_TV.name,
    difficulty: "Orta"
  },
  {
    id: 1269,
    question: "Türkiye'nin ilk uzun metrajlı filmi kabul edilen eser hangisidir?",
    options: ["Bataklıkta Ruhlar", "Casus", "Leblebici Horhor Ağa", "Ayastefanos'taki Rus Abidesi'nin Yıkılışı"],
    correct: 3,
    category: CATEGORIES.CINEMA_TV.name,
    difficulty: "Zor"
  },
  {
    id: 1270,
    question: "Hangi efsanevi aktör, 'Rambo' ve 'The Expendables' serileriyle aksiyon filmlerinin ikonu olmuştur?",
    options: ["Bruce Willis", "Sylvester Stallone", "Wesley Snipes", "Mel Gibson"],
    correct: 1,
    category: CATEGORIES.CINEMA_TV.name,
    difficulty: "Kolay"
  },
  {
    id: 1271,
    question: "Bir TV dizisi veya filmde, hikayenin geçtiği mekanı ve ortamı tasarlayan, hazırlayan kişi kimdir?",
    options: ["Işık Şefi", "Makyaj Artisti", "Sanat Yönetmeni", "Kostüm Tasarımcısı"],
    correct: 2,
    category: CATEGORIES.CINEMA_TV.name,
    difficulty: "Orta"
  },
  {
    id: 1272,
    question: "Hangi popüler Amerikan TV dizisi, 6 arkadaşın New York'taki komik ve duygusal yaşamlarını anlatır?",
    options: ["Seinfeld", "How I Met Your Mother", "Friends", "The Big Bang Theory"],
    correct: 2,
    category: CATEGORIES.CINEMA_TV.name,
    difficulty: "Kolay"
  },
  {
    id: 1273,
    question: "'Bir zamanlar uzak, çok uzak bir galakside...' (A long time ago in a galaxy far, far away...) repliği hangi serinin başlangıcıdır?",
    options: ["Star Trek", "Dune", "Star Wars", "Doctor Who"],
    correct: 2,
    category: CATEGORIES.CINEMA_TV.name,
    difficulty: "Kolay"
  },
  {
    id: 1274,
    question: "Sinema tarihinde, kamera arkası görüntü manipülasyonu olmaksızın, sadece kamera hareketleriyle yaratılan 'yürüme' hissi tekniği nedir?",
    options: ["Pan", "Tilt", "Vertigo Etkisi (Dolly Zoom)", "Crane Shot"],
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
    options: ["Detay Çekim", "Aşırı Yakın Çekim", "Orta Çekim", "Genel Çekim"],
    correct: 2,
    category: CATEGORIES.CINEMA_TV.name,
    difficulty: "Orta"
  },
  {
    id: 1277,
    question: "Hangi film festivali, ödül olarak 'Altın Ayı' vermektedir?",
    options: ["Cannes", "Venedik", "Berlin", "Toronto"],
    correct: 2,
    category: CATEGORIES.CINEMA_TV.name,
    difficulty: "Orta"
  },
  {
    id: 1278,
    question: "Alfred Hitchcock'un ünlü filmi 'Psiko'da, başroldeki katil karakterin adı nedir?",
    options: ["Patrick Bateman", "Norman Bates", "Hannibal Lecter", "Jigsaw"],
    correct: 1,
    category: CATEGORIES.CINEMA_TV.name,
    difficulty: "Kolay"
  },
  {
    id: 1279,
    question: "Yeşilçam'ın efsanevi ismi, 'Gamzeli Güzel' lakabıyla anılan kadın oyuncu kimdir?",
    options: ["Emel Sayın", "Gülşen Bubikoğlu", "Müjde Ar", "Banu Alkan"],
    correct: 1,
    category: CATEGORIES.CINEMA_TV.name,
    difficulty: "Orta"
  },
  {
    id: 1280,
    question: "Bir filmin veya dizinin çekilmesi için önceden hazırlıkların yapıldığı aşamaya ne ad verilir?",
    options: ["Prodüksiyon", "Post Prodüksiyon", "Ön Prodüksiyon (Pre-Production)", "Dağıtım"],
    correct: 2,
    category: CATEGORIES.CINEMA_TV.name,
    difficulty: "Kolay"
  },
  {
    id: 1281,
    question: "Amerikan televizyon dizilerinde, olayların kronolojik sıralamasının bozulduğu anlatım tekniği nedir?",
    options: ["Epizodik Anlatım", "Lineer Anlatım", "Non-Lineer Anlatım", "Belgesel Anlatım"],
    correct: 2,
    category: CATEGORIES.CINEMA_TV.name,
    difficulty: "Orta"
  },
  {
    id: 1282,
    question: "Türkiye'de 'Aşk-ı Memnu' ve 'Kuzey Güney' gibi popüler dizilerde rol alan ünlü kadın oyuncu kimdir?",
    options: ["Tuba Büyüküstün", "Beren Saat", "Hazal Kaya", "Neslihan Atagül"],
    correct: 1,
    category: CATEGORIES.CINEMA_TV.name,
    difficulty: "Kolay"
  },
  {
    id: 1283,
    question: "Steven Spielberg'in 1993 yapımı, nesli tükenmiş hayvanların klonlandığı bilim kurgu filmi nedir?",
    options: ["E.T.", "Yıldızlararası", "Jurassic Park", "Close Encounters of the Third Kind"],
    correct: 2,
    category: CATEGORIES.CINEMA_TV.name,
    difficulty: "Kolay"
  },
  {
    id: 1284,
    question: "Hangi film türü, genellikle seyirciyi korkutmayı ve germeyi amaçlayan temalara odaklanır?",
    options: ["Romantik", "Fantastik", "Korku (Horror)", "Belgesel"],
    correct: 2,
    category: CATEGORIES.CINEMA_TV.name,
    difficulty: "Kolay"
  },
  {
    id: 1285,
    question: "Bir filmin setinde kullanılan, oyuncuların seslerinin bozulmaması için kameranın örtüldüğü bölüme ne ad verilir?",
    options: ["Işık Yansıtıcı", "Set", "Ses Kabini", "Camera Blimp"],
    correct: 3,
    category: CATEGORIES.CINEMA_TV.name,
    difficulty: "Zor"
  },
  {
    id: 1286,
    question: "Yeşilçam'ın usta oyuncusu, 'Hababam Sınıfı'nda 'Badi Ekrem' karakteriyle tanınan sanatçı kimdir?",
    options: ["Feridun Şavlı", "Tuncay Akça", "Şener Şen", "Tayfun Akalın"],
    correct: 0,
    category: CATEGORIES.CINEMA_TV.name,
    difficulty: "Kolay"
  },
  {
    id: 1287,
    question: "Bir filmin, orijinal filmdeki olaylardan daha geriye giden bir hikayeyi anlatması durumuna ne ad verilir?",
    options: ["Sequel", "Remake", "Prequel", "Spin-off"],
    correct: 2,
    category: CATEGORIES.CINEMA_TV.name,
    difficulty: "Orta"
  },
  {
    id: 1288,
    question: "Hollywood'un 'Altın Çağı' olarak bilinen dönem hangi yılları kapsar?",
    options: ["1950'ler", "1960'lar", "1930'lar ve 1940'lar", "1970'ler"],
    correct: 2,
    category: CATEGORIES.CINEMA_TV.name,
    difficulty: "Zor"
  },
  {
    id: 1289,
    question: "Bir TV yayınında, canlı görüntülere eklenen ve gerçek zamanlı olarak değişen bilgilere ne ad verilir?",
    options: ["Jenerik", "Afiş", "Altyazı", "Teker (Crawling Text)"],
    correct: 3,
    category: CATEGORIES.CINEMA_TV.name,
    difficulty: "Orta"
  },
  {
    id: 1290,
    question: "Hangi film, 'Houston, we have a problem' (Houston, bir sorunumuz var) repliğiyle ünlüdür?",
    options: ["Gravity", "Interstellar", "Apollo 13", "The Martian"],
    correct: 2,
    category: CATEGORIES.CINEMA_TV.name,
    difficulty: "Kolay"
  },
  {
    id: 1291,
    question: "Türkiye'de 'Eşkıya', 'Gönül Yarası' ve 'Av Mevsimi' gibi filmlerin başrolünde oynayan usta aktör kimdir?",
    options: ["Uğur Yücel", "Şener Şen", "Cem Yılmaz", "Kenan İmirzalıoğlu"],
    correct: 1,
    category: CATEGORIES.CINEMA_TV.name,
    difficulty: "Kolay"
  },
  {
    id: 1292,
    question: "Hangi dünyaca ünlü animasyon stüdyosu, 'Toy Story', 'Finding Nemo' ve 'Up' filmlerini yapmıştır?",
    options: ["DreamWorks", "Disney", "Pixar", "Blue Sky Studios"],
    correct: 2,
    category: CATEGORIES.CINEMA_TV.name,
    difficulty: "Kolay"
  },
  {
    id: 1293,
    question: "Bir TV dizisinin, ana diziden ayrılarak farklı bir karaktere veya konuya odaklanan devam serisine ne ad verilir?",
    options: ["Remake", "Prequel", "Spin-off", "Pilot Bölüm"],
    correct: 2,
    category: CATEGORIES.CINEMA_TV.name,
    difficulty: "Orta"
  },
  {
    id: 1294,
    question: "Filmlerde kullanılan ve hareketli nesnelere gerçekçi bir görünüm veren teknoloji nedir?",
    options: ["Green Screen", "Stop-Motion", "CGI (Bilgisayarla Üretilen Görüntü)", "Animasyon"],
    correct: 2,
    category: CATEGORIES.CINEMA_TV.name,
    difficulty: "Orta"
  },
  {
    id: 1295,
    question: "'Bir Ankara Masalı' alt başlığıyla bilinen, Türk TV dizisi hangisidir?",
    options: ["Kurtlar Vadisi", "Ezel", "Behzat Ç.", "Leyla ile Mecnun"],
    correct: 2,
    category: CATEGORIES.CINEMA_TV.name,
    difficulty: "Kolay"
  },
  {
    id: 1296,
    question: "Hangi yönetmen, 'Yurttaş Kane' filmiyle sinema tarihinin en etkileyici eserlerinden birini yaratmıştır?",
    options: ["Alfred Hitchcock", "Stanley Kubrick", "Martin Scorsese", "Orson Welles"],
    correct: 3,
    category: CATEGORIES.CINEMA_TV.name,
    difficulty: "Zor"
  },
  {
    id: 1297,
    question: "Bir sinema filminde, oyuncuların kostümlerini ve makyajlarını tasarlayan ekip kime bağlıdır?",
    options: ["Yönetmen", "Yapımcı", "Sanat Yönetmeni", "Görüntü Yönetmeni"],
    correct: 2,
    category: CATEGORIES.CINEMA_TV.name,
    difficulty: "Orta"
  },
  {
    id: 1298,
    question: "Hangi ödül, televizyon dünyasının en iyilerini onurlandıran, her yıl İngiltere'de düzenlenen törendir?",
    options: ["Oscar", "Altın Küre", "BAFTA TV Ödülleri", "Pulitzer"],
    correct: 2,
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
    options: ["Senaryo", "Logline", "Pitch", "Treatment"],
    correct: 1,
    category: CATEGORIES.CINEMA_TV.name,
    difficulty: "Orta"
  },
  {
    id: 1301,
    question: "'Yüzüklerin Efendisi' üçlemesinde, ana kötü karakter olan ve Sauron'un gücünü taşıyan yüzüğe ne ad verilir?",
    options: ["Göz Yüzüğü", "Büyük Yüzük", "Tek Yüzük", "Gölge Yüzüğü"],
    correct: 2,
    category: "Sinema ve TV",
    difficulty: "Kolay"
  },
  {
    id: 1302,
    question: "Alfred Hitchcock'un yönettiği, ünlü duş sahnesiyle tanınan ve korku sinemasının klasiği kabul edilen film hangisidir?",
    options: ["Kuşlar", "Arka Pencere", "Sapık (Psycho)", "Vertigo"],
    correct: 2,
    category: "Sinema ve TV",
    difficulty: "Kolay"
  },
  {
    id: 1303,
    question: "Türkiye'de 'Tosun Paşa', 'Neşeli Günler', 'Çöpçüler Kralı' gibi filmleriyle tanınan, 'Gülen Adam' lakaplı efsanevi aktör kimdir?",
    options: ["Tarık Akan", "Kemal Sunal", "Şener Şen", "Münir Özkul"],
    correct: 1,
    category: "Sinema ve TV",
    difficulty: "Kolay"
  },
  {
    id: 1304,
    question: "Sinema tarihinde ilk uzun metraj sesli film olarak kabul edilen, 1927 yapımı eser hangisidir?",
    options: ["Yurttaş Kane", "Caz Şarkıcısı (The Jazz Singer)", "Metropolis", "Napolyon"],
    correct: 1,
    category: "Sinema ve TV",
    difficulty: "Orta"
  },
  {
    id: 1305,
    question: "'Godfather' (Baba) üçlemesinin yönetmeni olan İtalyan asıllı Amerikalı sinemacı kimdir?",
    options: ["Martin Scorsese", "Francis Ford Coppola", "Steven Spielberg", "Quentin Tarantino"],
    correct: 1,
    category: "Sinema ve TV",
    difficulty: "Kolay"
  },
  {
    id: 1306,
    question: "HBO'nun popüler dizisi 'Game of Thrones'un geçtiği kurgusal kıtanın adı nedir?",
    options: ["Orta Dünya", "Westeros", "Narnia", "Tatooine"],
    correct: 1,
    category: "Sinema ve TV",
    difficulty: "Kolay"
  },
  {
    id: 1307,
    question: "'Star Wars' (Yıldız Savaşları) serisinde, Darth Vader'ın asıl adı nedir?",
    options: ["Obi-Wan Kenobi", "Luke Skywalker", "Anakin Skywalker", "Han Solo"],
    correct: 2,
    category: "Sinema ve TV",
    difficulty: "Kolay"
  },
  {
    id: 1308,
    question: "Sinema perdesinde ilk kez '007' kod adıyla James Bond karakterini canlandıran aktör kimdir?",
    options: ["Roger Moore", "Daniel Craig", "Sean Connery", "Pierce Brosnan"],
    correct: 2,
    category: "Sinema ve TV",
    difficulty: "Kolay"
  },
  {
    id: 1309,
    question: "Quentin Tarantino'nun yönettiği, kurgusal hikayelerin iç içe geçtiği kült film hangisidir?",
    options: ["Rezervuar Köpekleri", "Ucuz Roman (Pulp Fiction)", "Kill Bill", "Zincirsiz (Django Unchained)"],
    correct: 1,
    category: "Sinema ve TV",
    difficulty: "Kolay"
  },
  {
    id: 1310,
    question: "'Hababam Sınıfı' film serisinde, 'Güdük Necmi' karakterini canlandıran oyuncu kimdir?",
    options: ["Tarık Akan", "Halit Akçatepe", "Şener Şen", "Ayşen Gruda"],
    correct: 1,
    category: "Sinema ve TV",
    difficulty: "Kolay"
  },
  {
    id: 1311,
    question: "Akademi Ödülleri'nde (Oscar) 'En İyi Film' de dahil olmak üzere toplam 11 ödül alan ve Jack Dawson karakteriyle Leonardo DiCaprio'nun oynadığı film hangisidir?",
    options: ["Avatar", "Jaws", "Titanik", "Forrest Gump"],
    correct: 2,
    category: "Sinema ve TV",
    difficulty: "Kolay"
  },
  {
    id: 1312,
    question: "'Matrix' film serisinde, başroldeki Thomas Anderson'ın (Neo) hackerlık yaptığı bilgisayar programının adı nedir?",
    options: ["Kırmızı Hap", "Beyaz Tavşan", "Matrix", "Gerçeklik Simülasyonu"],
    correct: 2,
    category: "Sinema ve TV",
    difficulty: "Kolay"
  },
  {
    id: 1313,
    question: "Steven Spielberg'ün yönettiği, büyük beyaz bir köpekbalığının terör estirdiği 1975 yapımı korku/gerilim filmi nedir?",
    options: ["E.T.", "Üçüncü Türden Yakınlaşmalar", "Jaws", "Jurassic Park"],
    correct: 2,
    category: "Sinema ve TV",
    difficulty: "Kolay"
  },
  {
    id: 1314,
    question: "Türkiye'de 'Deliormanlı', 'G.O.R.A.' ve 'Arif V 216' filmleriyle tanınan komedyen ve sinemacı kimdir?",
    options: ["Şahan Gökbakar", "Cem Yılmaz", "Yılmaz Erdoğan", "Ata Demirer"],
    correct: 1,
    category: "Sinema ve TV",
    difficulty: "Kolay"
  },
  {
    id: 1315,
    question: "Christopher Nolan'ın yönettiği ve rüyalar aracılığıyla bilinçaltına sızma temasını işleyen bilim kurgu filmi hangisidir?",
    options: ["Yıldızlararası", "Kara Şövalye", "Başlangıç (Inception)", "Akıl Defteri (Memento)"],
    correct: 2,
    category: "Sinema ve TV",
    difficulty: "Kolay"
  },
  {
    id: 1316,
    question: "Sinema sektöründe yönetmenin, filmin en yaratıcı kontrolüne sahip olduğu ve filmin son kesimini belirlediği anlaşmaya ne ad verilir?",
    options: ["Yönetmen Kredisi", "Görüntü Yönetmeni Anlaşması", "Final Cut (Son Kesim)", "Yapımcı Onayı"],
    correct: 2,
    category: "Sinema ve TV",
    difficulty: "Orta"
  },
  {
    id: 1317,
    question: "Televizyon dizilerinde, olayların kronolojik sıralamasının dışına çıkarak geçmişten bir sahneyi gösterme tekniği nedir?",
    options: ["Atlama (Jump Cut)", "Flashforward", "Flashback (Geriye Dönüş)", "Montaj"],
    correct: 2,
    category: "Sinema ve TV",
    difficulty: "Kolay"
  },
  {
    id: 1318,
    question: "'Breaking Bad' dizisinde, kimya öğretmeni olan ve uyuşturucu üretimine başlayan ana karakter kimdir?",
    options: ["Jesse Pinkman", "Saul Goodman", "Walter White", "Gustavo Fring"],
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
    options: ["Üç Maymun", "Bir Zamanlar Anadolu'da", "Kış Uykusu", "Ahlat Ağacı"],
    correct: 2,
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
    options: ["Sessiz Dönem", "Yeni Dalga", "Sesli Filmler Dönemi", "Altın Çağ"],
    correct: 2,
    category: "Sinema ve TV",
    difficulty: "Kolay"
  },
  {
    id: 1323,
    question: "'Yeşil Yol' (The Green Mile) filminde, mucizeler yaratan ve haksız yere idam cezası alan siyahi mahkumun adı nedir?",
    options: ["Brooks Hatlen", "Paul Edgecomb", "John Coffey", "Percy Wetmore"],
    correct: 2,
    category: "Sinema ve TV",
    difficulty: "Kolay"
  },
  {
    id: 1324,
    question: "Kanlı savaş sahneleri, epik anlatımı ve 'Russell Crowe'un başrolde olduğu, Antik Roma'da geçen ünlü film hangisidir?",
    options: ["Cesur Yürek", "Troya", "Gladyatör", "300 Spartalı"],
    correct: 2,
    category: "Sinema ve TV",
    difficulty: "Kolay"
  },
  {
    id: 1325,
    question: "Sinema ve TV çekimlerinde, görüntüyü sabitlemek ve titreşimi engellemek için kullanılan mekanik dengeleyici sisteme ne ad verilir?",
    options: ["Tripod", "Dolly", "Steadicam", "Kamera Takip Sistemi"],
    correct: 2,
    category: "Sinema ve TV",
    difficulty: "Orta"
  },
  {
    id: 1326,
    question: "'Friends' dizisinde, kahve içtikleri mekanın adı nedir?",
    options: ["The Daily Grind", "Central Perk", "Monk's Cafe", "Luke's Diner"],
    correct: 1,
    category: "Sinema ve TV",
    difficulty: "Kolay"
  },
  {
    id: 1327,
    question: "Türkiye'de 'Eşkıya' ve 'Gönül Yarası' gibi önemli filmlerin yönetmenliğini yapmış ünlü sinemacı kimdir?",
    options: ["Yılmaz Erdoğan", "Yılmaz Güney", "Yavuz Turgul", "Ferzan Özpetek"],
    correct: 2,
    category: "Sinema ve TV",
    difficulty: "Kolay"
  },
  {
    id: 1328,
    question: "'Schindler'in Listesi' filminin yönetmeni olan, aynı zamanda 'Er Ryan'ı Kurtarmak' gibi eserleriyle tanınan isim kimdir?",
    options: ["Martin Scorsese", "Stanley Kubrick", "Steven Spielberg", "George Lucas"],
    correct: 2,
    category: "Sinema ve TV",
    difficulty: "Kolay"
  },
  {
    id: 1329,
    question: "Bilim kurgu türünde, uzay gemisinde yapay zekaya sahip 'HAL 9000' karakterinin yer aldığı, Stanley Kubrick filmi nedir?",
    options: ["Otomatik Portakal", "Cinnet", "2001: Bir Uzay Destanı", "Dr. Strangelove"],
    correct: 2,
    category: "Sinema ve TV",
    difficulty: "Orta"
  },
  {
    id: 1330,
    question: "Sinema dilinde, kameranın sabit bir noktadan yatay eksende sağa veya sola dönmesi hareketine ne ad verilir?",
    options: ["Tilt", "Dolly", "Pan (Panoramik)", "Zoom"],
    correct: 2,
    category: "Sinema ve TV",
    difficulty: "Kolay"
  },
  {
    id: 1331,
    question: "'Baba' (The Godfather) filminde, Michael Corleone karakterini canlandıran aktör kimdir?",
    options: ["Marlon Brando", "Robert De Niro", "Al Pacino", "James Caan"],
    correct: 2,
    category: "Sinema ve TV",
    difficulty: "Kolay"
  },
  {
    id: 1332,
    question: "Amerikan televizyon tarihinin en uzun soluklu komedi dizilerinden olan ve Springfield adlı kurgusal kasabada geçen animasyon nedir?",
    options: ["Family Guy", "South Park", "Simpsonlar (The Simpsons)", "Futurama"],
    correct: 2,
    category: "Sinema ve TV",
    difficulty: "Kolay"
  },
  {
    id: 1333,
    question: "Korku filmlerinde, bir karakterin veya nesnenin hızla ekrana girerek izleyiciyi aniden şaşırtması tekniği nedir?",
    options: ["Suspense (Gerilim)", "Jump Scare (Ani Korkutma)", "Gore", "Found Footage"],
    correct: 1,
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
    options: ["Gala", "Prömiyer", "Ön Gösterim (Screening)", "Vizyon"],
    correct: 2,
    category: "Sinema ve TV",
    difficulty: "Kolay"
  },
  {
    id: 1336,
    question: "'Harry Potter' serisinde, Harry'nin en yakın iki arkadaşının adları nedir?",
    options: ["Draco Malfoy ve Severus Snape", "Ron Weasley ve Hermione Granger", "Neville Longbottom ve Luna Lovegood", "Cedric Diggory ve Cho Chang"],
    correct: 1,
    category: "Sinema ve TV",
    difficulty: "Kolay"
  },
  {
    id: 1337,
    question: "Sinemada, çekilen görüntünün parlaklık, renk ve kontrast ayarlarının yapıldığı aşama nedir?",
    options: ["Kurgu", "Ses Miksajı", "Renk Düzenleme (Color Grading)", "Senaryo Yazımı"],
    correct: 2,
    category: "Sinema ve TV",
    difficulty: "Orta"
  },
  {
    id: 1338,
    question: "'The Sopranos' dizisinde, New Jersey'li bir mafya patronu olan ana karakter kimdir?",
    options: ["Tony Soprano", "Carmela Soprano", "Silvio Dante", "Paulie Gualtieri"],
    correct: 0,
    category: "Sinema ve TV",
    difficulty: "Kolay"
  },
  {
    id: 1339,
    question: "Charlie Chaplin'in yarattığı, melon şapkalı, bastonlu ve komik yürüyüşlü karakterin adı nedir?",
    options: ["The Tramp (Serseri)", "The Dictator", "Monsieur Verdoux", "Calvero"],
    correct: 0,
    category: "Sinema ve TV",
    difficulty: "Kolay"
  },
  {
    id: 1340,
    question: "Türkiye'de 'Selvi Boylum Al Yazmalım' filminin yönetmenliğini yapmış, önemli sinemacımız kimdir?",
    options: ["Ömer Lütfi Akad", "Atıf Yılmaz", "Metin Erksan", "Yılmaz Güney"],
    correct: 1,
    category: "Sinema ve TV",
    difficulty: "Kolay"
  },
  {
    id: 1341,
    question: "DC Comics evreninde, Batman'in kurgusal şehri neresidir?",
    options: ["Metropolis", "Star City", "Gotham City", "Central City"],
    correct: 2,
    category: "Sinema ve TV",
    difficulty: "Kolay"
  },
  {
    id: 1342,
    question: "Kamera merceğinin optik yakınlaştırma (zoom) yapmasıyla karakterin yüzüne odaklanırken, arka planın uzaklaşmış gibi görünmesi tekniğine ne ad verilir?",
    options: ["Rack Focus", "Vertigo Efekti (Dolly Zoom)", "Slow Motion", "Aşırı Yakın Çekim"],
    correct: 1,
    category: "Sinema ve TV",
    difficulty: "Zor"
  },
  {
    id: 1343,
    question: "Ünlü 'Citizen Kane' (Yurttaş Kane) filminin yönetmeni ve başrol oyuncusu olan sinema dehası kimdir?",
    options: ["Howard Hawks", "Frank Capra", "Orson Welles", "Billy Wilder"],
    correct: 2,
    category: "Sinema ve TV",
    difficulty: "Orta"
  },
  {
    id: 1344,
    question: "'The Office' dizisinde, Scranton şubesinin bölgesel müdürü olan ve komik karakteriyle tanınan kişi kimdir?",
    options: ["Dwight Schrute", "Jim Halpert", "Michael Scott", "Stanley Hudson"],
    correct: 2,
    category: "Sinema ve TV",
    difficulty: "Kolay"
  },
  {
    id: 1345,
    question: "Bilim kurgu filmlerinde, uzay gemilerinin, patlamaların veya ateşin yapıldığı özel görsel efektlere ne ad verilir?",
    options: ["Animasyon", "Makyaj Efektleri", "Görsel Efektler (VFX)", "Kurgu"],
    correct: 2,
    category: "Sinema ve TV",
    difficulty: "Kolay"
  },
  {
    id: 1346,
    question: "Yunan yönetmen Theo Angelopoulos'un 1998'de Altın Palmiye kazandığı ve bir şairin hikayesini anlatan filmi nedir?",
    options: ["Leyleğin Geciken Adımı", "Ulis'in Bakışı", "Sonsuzluk ve Bir Gün", "Ağlayan Çayır"],
    correct: 2,
    category: "Sinema ve TV",
    difficulty: "Zor"
  },
  {
    id: 1347,
    question: "Türkiye'de Kemal Sunal'ın 'Şaban' karakteriyle oynadığı ve askerlik anılarını konu alan film serisi nedir?",
    options: ["Davaro", "Züğürt Ağa", "Propaganda", "Şaban (Seri Adı Yok)"],
    correct: 3,
    category: "Sinema ve TV",
    difficulty: "Orta"
  },
  {
    id: 1348,
    question: "'Pulp Fiction' (Ucuz Roman) filminde, Vincent Vega ve Jules Winnfield'ın patronu olan mafya liderinin adı nedir?",
    options: ["Mr. Wolf", "Marsellus Wallace", "Butch Coolidge", "Brett"],
    correct: 1,
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
    options: ["Şef", "Oyuncu", "Paleontolog", "Yazar"],
    correct: 2,
    category: "Sinema ve TV",
    difficulty: "Kolay"
  },
  {
    id: 1351,
    question: "Yönetmen David Fincher'ın, iki ana karakterin (Norton ve Pitt) başrolde olduğu, sürpriz sonlu kült filmi nedir?",
    options: ["Se7en", "Dövüş Kulübü (Fight Club)", "Zodiac", "Sosyal Ağ"],
    correct: 1,
    category: "Sinema ve TV",
    difficulty: "Kolay"
  },
  {
    id: 1352,
    question: "Animasyon film 'Oyuncak Hikayesi' (Toy Story) serisinde, Andy'nin en sevdiği kovboy oyuncağının adı nedir?",
    options: ["Buzz Lightyear", "Rex", "Woody", "Slinky"],
    correct: 2,
    category: "Sinema ve TV",
    difficulty: "Kolay"
  },
  {
    id: 1353,
    question: "Türkiye'de 'Vizontele', 'Kelebeğin Rüyası' gibi filmlerin yönetmenliğini ve senaristliğini yapan ünlü isim kimdir?",
    options: ["Çağan Irmak", "Nuri Bilge Ceylan", "Yılmaz Erdoğan", "Fatih Akın"],
    correct: 2,
    category: "Sinema ve TV",
    difficulty: "Kolay"
  },
  {
    id: 1354,
    question: "Sinema filmlerinin sonundaki, çekim hatalarını veya komik anları gösteren bölümün adı nedir?",
    options: ["Krediler", "Kamera Arkası (Behind the Scenes)", "Gag Reel (Hata Derlemesi)", "Ekstra Sahneler"],
    correct: 2,
    category: "Sinema ve TV",
    difficulty: "Kolay"
  },
  {
    id: 1355,
    question: "Bilim kurgu serisi 'Doctor Who'da, Doktor'un uzay ve zamanda yolculuk yaptığı telefon kulübesi şeklindeki araca ne ad verilir?",
    options: ["Millennium Falcon", "Enterprise", "TARDIS", "Stargate"],
    correct: 2,
    category: "Sinema ve TV",
    difficulty: "Kolay"
  },
  {
    id: 1356,
    question: "Üç defa 'En İyi Yönetmen' Oscar'ını kazanan (Mr. Deeds Goes to Town, It Happened One Night, You Can't Take It with You) klasik Hollywood yönetmeni kimdir?",
    options: ["Alfred Hitchcock", "John Ford", "Frank Capra", "Billy Wilder"],
    correct: 2,
    category: "Sinema ve TV",
    difficulty: "Zor"
  },
  {
    id: 1357,
    question: "Bir sinema filmi veya TV şovunda, bir karakterin daha sonraki olayları anlatarak sahneyi seslendirmesi tekniği nedir?",
    options: ["Diyalog", "Monolog", "Dış Ses (Voice-over)", "Dublaj"],
    correct: 2,
    category: "Sinema ve TV",
    difficulty: "Kolay"
  },
  {
    id: 1358,
    question: "'The Walking Dead' dizisinin merkezinde yer alan kıyamet sonrası olay örgüsü nedir?",
    options: ["Uzaylı İstilası", "Robotların İsyanı", "Zombi (Yürüyen Ölü) Salgını", "Nükleer Savaş"],
    correct: 2,
    category: "Sinema ve TV",
    difficulty: "Kolay"
  },
  {
    id: 1359,
    question: "'Kısa Film' (Short Film) türünde, bir filmin maksimum süresi kaç dakikadır (Genellikle uluslararası kabul edilen süre)?" ,
    options: ["60 dakika", "30 dakika", "40 dakika", "20 dakika"],
    correct: 2,
    category: "Sinema ve TV",
    difficulty: "Orta"
  },
  {
    id: 1360,
    question: "Sinema filmlerinde, gerçek görüntüler üzerine bilgisayarda yaratılan görüntülerin eklenmesiyle oluşan efektlere ne ad verilir?",
    options: ["Makyaj", "Animatronik", "CGI (Bilgisayar Üretimli Görüntü)", "Stop Motion"],
    correct: 2,
    category: "Sinema ve TV",
    difficulty: "Kolay"
  },
  {
    id: 1361,
    question: "'La Casa de Papel' dizisinde, soygunları planlayan ve ekibi yöneten zeka küpü karakter kimdir?",
    options: ["Berlin", "Rio", "Profesör", "Tokyo"],
    correct: 2,
    category: "Sinema ve TV",
    difficulty: "Kolay"
  },
  {
    id: 1362,
    question: "'Yeşilçam' dönemi Türk sinemasının en üretken yönetmenlerinden olan ve 'Sultan', 'Banker Bilo' gibi filmleriyle tanınan usta kimdir?",
    options: ["Lütfi Akad", "Ertem Eğilmez", "Yılmaz Güney", "Atıf Yılmaz"],
    correct: 1,
    category: "Sinema ve TV",
    difficulty: "Kolay"
  },
  {
    id: 1363,
    question: "'Forrest Gump' filminde, başrol oyuncusunun sıkça söylediği ve filmle özdeşleşen replik nedir?",
    options: ["Ben senin babanım.", "Hasta la vista, baby.", "Hayat bir kutu çikolata gibidir.", "May The Force Be With You."],
    correct: 2,
    category: "Sinema ve TV",
    difficulty: "Kolay"
  },
  {
    id: 1364,
    question: "TV'de, belirli bir konuyu detaylıca araştıran, gerçek olayları veya kişileri konu alan program türü nedir?",
    options: ["Talk Show", "Sitcom", "Belgesel (Documentary)", "Reality Show"],
    correct: 2,
    category: "Sinema ve TV",
    difficulty: "Kolay"
  },
  {
    id: 1365,
    question: "Sinema filmlerinde, kameranın bir nesneye yaklaşıp sahneyi yavaşça dönerek göstermesi tekniği nedir?",
    options: ["Pan", "Zoom", "Arc Shot (Yay Çekim)", "Tracking Shot"],
    correct: 2,
    category: "Sinema ve TV",
    difficulty: "Orta"
  },
  {
    id: 1366,
    question: "Yönetmen Ridley Scott'ın çektiği, bilim kurgu-korku türünün öncüsü olan ve 'Yaratık'ın (Alien) ilk kez göründüğü film nedir?",
    options: ["Bıçak Sırtı (Blade Runner)", "Marslı", "Yaratık (Alien)", "Gladyatör"],
    correct: 2,
    category: "Sinema ve TV",
    difficulty: "Kolay"
  },
  {
    id: 1367,
    question: "Sinema ve TV'de, seslerin (adım, kapı sesi, kıyafet hışırtısı vb.) özel olarak yeniden kaydedilmesi ve senkronize edilmesi işine ne ad verilir?",
    options: ["ADR (Otomatik Diyalog Değişimi)", "Ses Miksajı", "Foley Sanatı (Ses Efekti)", "Müzik Yerleştirme"],
    correct: 2,
    category: "Sinema ve TV",
    difficulty: "Orta"
  },
  {
    id: 1368,
    question: "Amerikan dizisi 'Lost'ta, uçağın düştüğü adada bulunan ve Dharma Girişimi'ne ait olan gizemli tesislerin genel adı nedir?",
    options: ["The Hatch (Kapak)", "The Swan", "The Dharma Initiative (Dharma Girişimi)", "The Black Rock"],
    correct: 2,
    category: "Sinema ve TV",
    difficulty: "Kolay"
  },
  {
    id: 1369,
    question: "Oscar tarihinde, 'En İyi Film', 'En İyi Yönetmen', 'En İyi Erkek Oyuncu', 'En İyi Kadın Oyuncu' ve 'En İyi Senaryo' olmak üzere 5 büyük ödülü birden kazanan film sayısı kaçtır?",
    options: ["1", "2", "3", "5"],
    correct: 2,
    category: "Sinema ve TV",
    difficulty: "Zor"
  },
  {
    id: 1370,
    question: "Türk Sineması'nda 'Umut' filmiyle tanınan, 'Çirkin Kral' lakaplı yönetmen ve oyuncu kimdir?",
    options: ["Lütfi Akad", "Yılmaz Güney", "Atıf Yılmaz", "Metin Erksan"],
    correct: 1,
    category: "Sinema ve TV",
    difficulty: "Kolay"
  },
  {
    id: 1371,
    question: "Hollywood'da, bir filmin vizyona girmesinden sonra elde edilen gişe gelirlerine ne ad verilir?",
    options: ["Bütçe", "Telif Hakkı", "Box Office (Gişe)", "Dağıtım Ücreti"],
    correct: 2,
    category: "Sinema ve TV",
    difficulty: "Kolay"
  },
  {
    id: 1372,
    question: "TV dizilerinde, bir bölümün finalinde, izleyiciyi merak içinde bırakan ve sonraki bölüme bağlayan teknik nedir?",
    options: ["Sezon Finali", "Cliffhanger (Askıda Bırakma)", "Pilot Bölüm", "Spin-off"],
    correct: 1,
    category: "Sinema ve TV",
    difficulty: "Kolay"
  },
  {
    id: 1373,
    question: "Robert Zemeckis'in yönettiği, Marty McFly'ın zamanda yolculuk yaptığı ünlü bilim kurgu üçlemesi nedir?",
    options: ["Terminator", "Geleceğe Dönüş (Back to the Future)", "Matrix", "Zamanda Yolculuk"],
    correct: 1,
    category: "Sinema ve TV",
    difficulty: "Kolay"
  },
  {
    id: 1374,
    question: "İngiliz komedyen Rowan Atkinson'ın canlandırdığı, sakar ve komik karakterin adı nedir?",
    options: ["Ali G", "Borat", "Mr. Bean", "Monty Python"],
    correct: 2,
    category: "Sinema ve TV",
    difficulty: "Kolay"
  },
  {
    id: 1375,
    question: "Sinema filmlerinde, oyuncunun yüzünün tamamını kaplayan, detaylara odaklanan çekim tekniği nedir?",
    options: ["Orta Çekim", "Boy Çekim", "Aşırı Yakın Çekim (Extreme Close-up)", "Geniş Açı"],
    correct: 2,
    category: "Sinema ve TV",
    difficulty: "Kolay"
  },
  {
    id: 1376,
    question: "Pixar stüdyosunun ilk uzun metraj animasyon filmi hangisidir?",
    options: ["Kayıp Balık Nemo", "Canavarlar Üniversitesi", "Oyuncak Hikayesi (Toy Story)", "Arabalar"],
    correct: 2,
    category: "Sinema ve TV",
    difficulty: "Kolay"
  },
  {
    id: 1377,
    question: "Türkiye'de 'Aşk-ı Memnu' dizisinin uyarlandığı, Halit Ziya Uşaklıgil'in eseri hangi edebi akıma aittir?",
    options: ["Romantizm", "Sembolizm", "Realizm ve Natüralizm", "Fütürizm"],
    correct: 2,
    category: "Sinema ve TV",
    difficulty: "Orta"
  },
  {
    id: 1378,
    question: "Sinema tarihinde, kamera arkasında çalışan, ışıklandırma ve görsel estetikten sorumlu kişi kimdir?",
    options: ["Yönetmen", "Sanat Yönetmeni", "Görüntü Yönetmeni (DP/Cinematographer)", "Kurgucu"],
    correct: 2,
    category: "Sinema ve TV",
    difficulty: "Kolay"
  },
  {
    id: 1379,
    question: "Oscar ödüllerinde, bir filmin müziklerinin telif hakkının yanı sıra, bestecinin sanatsal katkısını ödüllendiren kategori nedir?",
    options: ["En İyi Şarkı", "En İyi Ses Efekti", "En İyi Orijinal Müzik (Original Score)", "En İyi Ses Kurgusu"],
    correct: 2,
    category: "Sinema ve TV",
    difficulty: "Kolay"
  },
  {
    id: 1380,
    question: "'Sherlock' dizisinde, Sherlock Holmes'un zekice çözdüğü olayları kaydettiği ve yaşadığı ünlü adres neresidir?",
    options: ["Baker Street 221B", "Privet Drive 4", "Downing Street 10", "Wall Street 1"],
    correct: 0,
    category: "Sinema ve TV",
    difficulty: "Kolay"
  },
  {
    id: 1381,
    question: "Christopher Nolan'ın 'Kara Şövalye' üçlemesinde, Batman'in kural tanımayan baş düşmanı kimdir?",
    options: ["Penguen", "Bane", "Joker", "Two-Face"],
    correct: 2,
    category: "Sinema ve TV",
    difficulty: "Kolay"
  },
  {
    id: 1382,
    question: "Bir filmin ana çekimlerinin tamamlandığını belirten ve ekibe teşekkür edilen terim nedir?",
    options: ["Kurgu Başlangıcı", "Post Prodüksiyon", "Wrap (Çekimlerin Bitişi)", "Set Kapatma"],
    correct: 2,
    category: "Sinema ve TV",
    difficulty: "Orta"
  },
  {
    id: 1383,
    question: "Yönetmen Damien Chazelle'in, genç bir caz davulcusunun zorlu bir müzik öğretmeniyle ilişkisini anlatan filmi nedir?",
    options: ["Aşıklar Şehri (La La Land)", "Whiplash", "Ay'da İlk İnsan", "The Eddy"],
    correct: 1,
    category: "Sinema ve TV",
    difficulty: "Kolay"
  },
  {
    id: 1384,
    question: "TV dizilerinde, hikayenin geçtiği orijinal diziden ayrılan ve yan karakterlerin maceralarını konu alan yeni dizilere ne ad verilir?",
    options: ["Remake", "Prekuel", "Spin-off", "Sezon"],
    correct: 2,
    category: "Sinema ve TV",
    difficulty: "Kolay"
  },
  {
    id: 1385,
    question: "Sinema dilinde, kameranın göz hizasından çok daha aşağıdan, yukarıya doğru çekim yapmasına ne ad verilir?",
    options: ["Üst Açı (High Angle)", "Göz Hizasında Çekim", "Alt Açı (Low Angle)", "Hollanda Açısı (Dutch Angle)"],
    correct: 2,
    category: "Sinema ve TV",
    difficulty: "Kolay"
  },
  {
    id: 1386,
    question: "Türk Sineması'nda 'Muhsin Bey', 'Eşkıya', 'Av Mevsimi' gibi filmleriyle tanınan, usta aktör kimdir?",
    options: ["Kemal Sunal", "Cem Yılmaz", "Şener Şen", "Haluk Bilginer"],
    correct: 2,
    category: "Sinema ve TV",
    difficulty: "Kolay"
  },
  {
    id: 1387,
    question: "Bilim kurgu serisi 'Battlestar Galactica'da, insanlığın yaratıp kendisine karşı savaştığı robot ırkının adı nedir?",
    options: ["Terminator", "Cylons", "Replikant", "Borg"],
    correct: 1,
    category: "Sinema ve TV",
    difficulty: "Orta"
  },
  {
    id: 1388,
    question: "'Casablanca' filminde, Rick Blaine'in (Humphrey Bogart) işlettiği, filmdeki kilit mekan olan gece kulübünün adı nedir?",
    options: ["Blue Parrot", "Rick's Café Américain", "Le Chat Noir", "The Speakeasy"],
    correct: 1,
    category: "Sinema ve TV",
    difficulty: "Orta"
  },
  {
    id: 1389,
    question: "Marvel çizgi romanlarında, Kaptan Amerika'nın kalkanının yapıldığı hayali metalin adı nedir?",
    options: ["Adamantium", "Kryptonite", "Vibranium", "Uru"],
    correct: 2,
    category: "Sinema ve TV",
    difficulty: "Kolay"
  },
  {
    id: 1390,
    question: "Sinemada, görüntülerin arka arkaya getirilerek hikayenin anlatıldığı düzenleme sürecine ne ad verilir?",
    options: ["Senaryo", "Prodüksiyon", "Kurgu (Montaj/Editing)", "Yönetmenlik"],
    correct: 2,
    category: "Sinema ve TV",
    difficulty: "Kolay"
  },
  {
    id: 1391,
    question: "Netflix'in popüler dizisi 'Stranger Things'in geçtiği kurgusal kasabanın adı nedir?",
    options: ["Riverdale", "Hawkins", "Stars Hollow", "Twin Peaks"],
    correct: 1,
    category: "Sinema ve TV",
    difficulty: "Kolay"
  },
  {
    id: 1392,
    question: "Amerikalı yönetmen Martin Scorsese'nin, organize suç ve mafya temalı filmleriyle tanınan usta kimdir?",
    options: ["Francis Ford Coppola", "Martin Scorsese", "Brian De Palma", "Steven Soderbergh"],
    correct: 1,
    category: "Sinema ve TV",
    difficulty: "Kolay"
  },
  {
    id: 1393,
    question: "'Geleceğe Dönüş' (Back to the Future) filminde, zaman makinesi olarak kullanılan araba modeli nedir?",
    options: ["Ford Mustang", "Chevrolet Camaro", "DeLorean DMC-12", "Porsche 911"],
    correct: 2,
    category: "Sinema ve TV",
    difficulty: "Kolay"
  },
  {
    id: 1394,
    question: "Sinema dilinde, genellikle bir karaktere odaklanmak için omuz hizasından başlayan çekim tekniği nedir?",
    options: ["Close-up (Yakın Çekim)", "Full Shot (Tam Çekim)", "Medium Shot (Orta Çekim)", "Over The Shoulder"],
    correct: 2,
    category: "Sinema ve TV",
    difficulty: "Kolay"
  },
  {
    id: 1395,
    question: "İngiliz yönetmen Christopher Nolan'ın 'Memento' (Akıl Defteri) filminde, baş karakter hangi rahatsızlıktan muzdariptir?",
    options: ["Şizofreni", "Anterograd Amnezi (Kısa Süreli Hafıza Kaybı)", "Disleksi", "Otizm"],
    correct: 1,
    category: "Sinema ve TV",
    difficulty: "Orta"
  },
  {
    id: 1396,
    question: "Oscar ödüllerinde, bir filmdeki makyaj ve saç tasarımının ödüllendirildiği kategori nedir?",
    options: ["En İyi Kostüm Tasarımı", "En İyi Sanat Yönetimi", "En İyi Makyaj ve Saç Tasarımı", "En İyi Görsel Efekt"],
    correct: 2,
    category: "Sinema ve TV",
    difficulty: "Kolay"
  },
  {
    id: 1397,
    question: "'Kara Ayna' (Black Mirror) dizisinin temel konusu nedir?",
    options: ["Siyaset ve Tarih", "İnsan İlişkileri ve Romantizm", "Modern Teknoloji ve Toplum Üzerindeki Etkisi", "Doğaüstü Olaylar"],
    correct: 2,
    category: "Sinema ve TV",
    difficulty: "Kolay"
  },
  {
    id: 1398,
    question: "Yeşilçam döneminin 'Sultan' lakaplı, Türk sinemasının en önemli kadın oyuncularından biri kimdir?",
    options: ["Türkan Şoray", "Filiz Akın", "Hülya Koçyiğit", "Fatma Girik"],
    correct: 0,
    category: "Sinema ve TV",
    difficulty: "Kolay"
  },
  {
    id: 1399,
    question: "Sinema ve TV'de, bir oyuncunun ilk kez uzun metrajlı bir filmde başrol oynamasına ne ad verilir?",
    options: ["Cameo", "En İyi Performans", "Debüt (İlk Kez)", "Misafir Oyuncu"],
    correct: 2,
    category: "Sinema ve TV",
    difficulty: "Orta"
  },
  {
    id: 1400,
    question: "'Harry Potter' serisinde, Hogwarts Cadılık ve Büyücülük Okulu'nun bulunduğu ülkedeki kurgusal kurum nedir?",
    options: ["Büyücüler Birliği", "Büyü Bakanlığı", "Gizemler Departmanı", "Gringotts Bankası"],
    correct: 1,
    category: "Sinema ve TV",
    difficulty: "Kolay"
  },

  // ==================== TEKNOLOJİ ====================
{
    id: 1401,
    question: "Bilgisayarın merkezi işlem birimi (CPU) hangi temel görevi yerine getirir?",
    options: ["Veri depolama", "Grafikleri işleme", "Hesaplama ve komut yürütme", "İnternet bağlantısı sağlama"],
    correct: 2,
    category: CATEGORIES.TECHNOLOGY.name,
    difficulty: "Kolay"
  },
  {
    id: 1402,
    question: "Web sitelerine erişim sağlamak için kullanılan temel protokol nedir?",
    options: ["SMTP", "FTP", "HTTP", "ICMP"],
    correct: 2,
    category: CATEGORIES.TECHNOLOGY.name,
    difficulty: "Kolay"
  },
  {
    id: 1403,
    question: "Bir bilgisayarın tüm donanım ve yazılımlarını yöneten ana yazılım sistemi nedir?",
    options: ["Uygulama Yazılımı", "Sürücü (Driver)", "İşletim Sistemi", "Güvenlik Duvarı"],
    correct: 2,
    category: CATEGORIES.TECHNOLOGY.name,
    difficulty: "Kolay"
  },
  {
    id: 1404,
    question: "Bilgisayar biliminde en küçük veri birimi nedir?",
    options: ["Byte", "Kilobyte", "Bit", "Megabit"],
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
    options: ["HTML", "SQL", "Python", "CSS"],
    correct: 2,
    category: CATEGORIES.TECHNOLOGY.name,
    difficulty: "Kolay"
  },
  {
    id: 1407,
    question: "Bilgisayar kapatıldığında bile veriyi tutabilen depolama türü nedir?",
    options: ["RAM", "Önbellek (Cache)", "Geçici Hafıza", "Kalıcı Depolama (ROM/SSD/HDD)"],
    correct: 3,
    category: CATEGORIES.TECHNOLOGY.name,
    difficulty: "Kolay"
  },
  {
    id: 1408,
    question: "Bilgisayarların verilerden öğrenmesini ve tahminlerde bulunmasını sağlayan teknoloji dalı nedir?",
    options: ["Kuantum Fiziği", "Makine Öğrenimi (Machine Learning)", "Blok Zinciri", "Sanal Gerçeklik"],
    correct: 1,
    category: CATEGORIES.TECHNOLOGY.name,
    difficulty: "Kolay"
  },
  {
    id: 1409,
    question: "Apple şirketinin kurucularından biri kimdir?",
    options: ["Bill Gates", "Elon Musk", "Mark Zuckerberg", "Steve Jobs"],
    correct: 3,
    category: CATEGORIES.TECHNOLOGY.name,
    difficulty: "Kolay"
  },
  {
    id: 1410,
    question: "Bir IP adresini okunabilir bir alan adına (örneğin google.com) çeviren sistem nedir?",
    options: ["TCP/IP", "DNS", "VPN", "HTML"],
    correct: 1,
    category: CATEGORIES.TECHNOLOGY.name,
    difficulty: "Kolay"
  },
  {
    id: 1411,
    question: "TCP protokolü için en önemli özellik nedir?",
    options: ["Hızlı ve güvenilir olmayan", "Bağlantısız", "Güvenilir ve bağlantı tabanlı", "Sadece metin tabanlı"],
    correct: 2,
    category: CATEGORIES.TECHNOLOGY.name,
    difficulty: "Orta"
  },
  {
    id: 1412,
    question: "Yazılım geliştirmede, bir nesnenin kendi içinde veri ve işlevi bir araya getirme prensibine ne ad verilir?",
    options: ["Kalıtım (Inheritance)", "Polimorfizm", "Kapsülleme (Encapsulation)", "Soyutlama"],
    correct: 2,
    category: CATEGORIES.TECHNOLOGY.name,
    difficulty: "Orta"
  },
  {
    id: 1413,
    question: "Bilgisayarın geçici olarak çalıştığı verileri depoladığı, yüksek hızlı bellek türü nedir?",
    options: ["ROM", "SSD", "RAM", "HDD"],
    correct: 2,
    category: CATEGORIES.TECHNOLOGY.name,
    difficulty: "Kolay"
  },
  {
    id: 1414,
    question: "Bir web sayfasının yapı iskelesini (içeriğini ve yapısını) oluşturan işaretleme dili nedir?",
    options: ["CSS", "JavaScript", "PHP", "HTML"],
    correct: 3,
    category: CATEGORIES.TECHNOLOGY.name,
    difficulty: "Kolay"
  },
  {
    id: 1415,
    question: "Açık kaynaklı bir işletim sistemi çekirdeği (kernel) nedir?",
    options: ["Windows", "macOS", "Linux", "Android"],
    correct: 2,
    category: CATEGORIES.TECHNOLOGY.name,
    difficulty: "Kolay"
  },
  {
    id: 1416,
    question: "Hangi yapay zeka algoritması, düğüm ve katmanlardan oluşan insan beynini taklit eden bir yapı kullanır?",
    options: ["Destek Vektör Makineleri", "Karar Ağaçları", "Yapay Sinir Ağları", "K-Ortalama"],
    correct: 2,
    category: CATEGORIES.TECHNOLOGY.name,
    difficulty: "Orta"
  },
  {
    id: 1417,
    question: "Mekanik disklerin (HDD) yerini alan, hareketli parçası olmayan ve daha hızlı okuma/yazma hızı sunan depolama birimi nedir?",
    options: ["DVD-ROM", "Flash Bellek", "SSD", "Manyetik Bant"],
    correct: 2,
    category: CATEGORIES.TECHNOLOGY.name,
    difficulty: "Kolay"
  },
  {
    id: 1418,
    question: "Bilgi paketlerinin ağlar arasında yönlendirilmesinden sorumlu protokol hangisidir?",
    options: ["HTTP", "FTP", "IP", "SMTP"],
    correct: 2,
    category: CATEGORIES.TECHNOLOGY.name,
    difficulty: "Orta"
  },
  {
    id: 1419,
    question: "Bir programlama dilinde, bir koşul doğru olduğu sürece aynı kod bloğunu tekrar tekrar çalıştırma yapısına ne ad verilir?",
    options: ["Koşul İfadesi (If/Else)", "Fonksiyon", "Döngü (Loop)", "Değişken Tanımlama"],
    correct: 2,
    category: CATEGORIES.TECHNOLOGY.name,
    difficulty: "Kolay"
  },
  {
    id: 1420,
    question: "İlk modern elektronik dijital bilgisayarın adı nedir?",
    options: ["UNIVAC", "ENIAC", "Colossus", "EDVAC"],
    correct: 1,
    category: CATEGORIES.TECHNOLOGY.name,
    difficulty: "Zor"
  },
  {
    id: 1421,
    question: "Fiziksel donanıma gerek kalmadan, internet üzerinden sunulan bilişim hizmetleri modeline ne ad verilir?",
    options: ["Yerel Ağ (LAN)", "Bulut Bilişim (Cloud Computing)", "Kişisel Bilgisayar", "Süper Bilgisayar"],
    correct: 1,
    category: CATEGORIES.TECHNOLOGY.name,
    difficulty: "Kolay"
  },
  {
    id: 1422,
    question: "Verilerin şifrelenmiş bir tünel üzerinden güvenli bir şekilde aktarılmasını sağlayan teknoloji nedir?",
    options: ["DNS", "VPN", "HTTP", "URL"],
    correct: 1,
    category: CATEGORIES.TECHNOLOGY.name,
    difficulty: "Kolay"
  },
  {
    id: 1423,
    question: "Ekran kartının (GPU) temel görevi nedir?",
    options: ["İşletim sistemini yönetmek", "Grafik ve görüntü işleme", "Klavye girdilerini işlemek", "İnternet bağlantısı sağlamak"],
    correct: 1,
    category: CATEGORIES.TECHNOLOGY.name,
    difficulty: "Kolay"
  },
  {
    id: 1424,
    question: "Python, Java ve C# gibi dillerde, bellek yönetimini otomatik olarak yapan mekanizma nedir?",
    options: ["Elle Yönetim", "Çöp Toplama (Garbage Collection)", "Statik Bellek", "Sanal Bellek"],
    correct: 1,
    category: CATEGORIES.TECHNOLOGY.name,
    difficulty: "Orta"
  },
  {
    id: 1425,
    question: "Büyük, yapılandırılmamış ve hızla değişen veri kümelerini tanımlamak için kullanılan terim nedir?",
    options: ["Küçük Veri", "Statik Veri", "Büyük Veri (Big Data)", "Temiz Veri"],
    correct: 2,
    category: CATEGORIES.TECHNOLOGY.name,
    difficulty: "Kolay"
  },
  {
    id: 1426,
    question: "Bir web sayfasının görünümünü (renk, font, düzen) tanımlayan stil sayfası dili nedir?",
    options: ["HTML", "XML", "CSS", "PHP"],
    correct: 2,
    category: CATEGORIES.TECHNOLOGY.name,
    difficulty: "Kolay"
  },
  {
    id: 1427,
    question: "Kötü amaçlı yazılımların genel adı nedir?",
    options: ["Sürücü (Driver)", "Firmware", "Malware", "Yazılım Paketi"],
    correct: 2,
    category: CATEGORIES.TECHNOLOGY.name,
    difficulty: "Kolay"
  },
  {
    id: 1428,
    question: "İnsan benzeri bir konuşma yeteneğine sahip, metin tabanlı yapay zeka programına ne ad verilir?",
    options: ["Robot", "Otonom Sistem", "Sohbet Robotu (Chatbot)", "Sanal Gerçeklik"],
    correct: 2,
    category: CATEGORIES.TECHNOLOGY.name,
    difficulty: "Kolay"
  },
  {
    id: 1429,
    question: "Bilgisayarın anakartında (Motherboard), CPU'yu diğer bileşenlere bağlayan yüksek hızlı iletişim yolu nedir?",
    options: ["Güç Kaynağı", "RAM", "Veri Yolu (Bus)", "Sabit Disk"],
    correct: 2,
    category: CATEGORIES.TECHNOLOGY.name,
    difficulty: "Orta"
  },
  {
    id: 1430,
    question: "İlk programlanabilir elektromekanik bilgisayarı (Z serisi) tasarlayan Alman mühendis kimdir?",
    options: ["Alan Turing", "John von Neumann", "Konrad Zuse", "Charles Babbage"],
    correct: 2,
    category: CATEGORIES.TECHNOLOGY.name,
    difficulty: "Zor"
  },
  {
    id: 1431,
    question: "Bir nesne tabanlı programlama dilinde, bir sınıfın başka bir sınıftan özellik ve davranışları devralması ilkesine ne ad verilir?",
    options: ["Kapsülleme", "Kalıtım (Inheritance)", "Polimorfizm", "Soyutlama"],
    correct: 1,
    category: CATEGORIES.TECHNOLOGY.name,
    difficulty: "Orta"
  },
  {
    id: 1432,
    question: "Ağ katmanında (Layer 3) çalışan ve farklı ağlar arasında veri paketlerini yönlendiren cihaz nedir?",
    options: ["Anahtar (Switch)", "Tekrarlayıcı (Repeater)", "Yönlendirici (Router)", "Köprü (Bridge)"],
    correct: 2,
    category: CATEGORIES.TECHNOLOGY.name,
    difficulty: "Orta"
  },
  {
    id: 1433,
    question: "İlişkisel veritabanı yönetim sistemlerinde veri sorgulama için kullanılan standart dil nedir?",
    options: ["HTML", "Python", "SQL", "Java"],
    correct: 2,
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
    options: ["Yapay Zeka", "Nesnelerin İnterneti (IoT)", "Blok Zinciri (Blockchain)", "Sanal Gerçeklik"],
    correct: 2,
    category: CATEGORIES.TECHNOLOGY.name,
    difficulty: "Kolay"
  },
  {
    id: 1436,
    question: "CPU'nun içindeki küçük ve çok hızlı veri depolama birimi (RAM'den daha hızlı) nedir?",
    options: ["HDD", "SSD", "Önbellek (Cache)", "Anakart"],
    correct: 2,
    category: CATEGORIES.TECHNOLOGY.name,
    difficulty: "Orta"
  },
  {
    id: 1437,
    question: "Bir makine öğrenimi modelinin, etiketlenmemiş verilerle örüntüleri (paternleri) kendi başına bulmaya çalıştığı öğrenme türü nedir?",
    options: ["Takviyeli Öğrenme", "Gözetimli Öğrenme", "Gözetimsiz Öğrenme", "Derin Öğrenme"],
    correct: 2,
    category: CATEGORIES.TECHNOLOGY.name,
    difficulty: "Zor"
  },
  {
    id: 1438,
    question: "İki farklı protokolü veya ağı birbirine bağlayan, veri paketlerini dönüştürebilen cihaz nedir?",
    options: ["Modem", "Switch", "Gateway (Ağ Geçidi)", "Hub"],
    correct: 2,
    category: CATEGORIES.TECHNOLOGY.name,
    difficulty: "Zor"
  },
  {
    id: 1439,
    question: "Bir fonksiyonun aynı isme sahip farklı parametrelerle (sayı/tür) tanımlanabilmesine ne ad verilir?",
    options: ["Kalıtım", "Aşırı Yükleme (Overloading)", "Geçersiz Kılma (Overriding)", "Soyutlama"],
    correct: 1,
    category: CATEGORIES.TECHNOLOGY.name,
    difficulty: "Zor"
  },
  {
    id: 1440,
    question: "Apple Macintosh'un 1984'te piyasaya sürülmesiyle popüler hale gelen bilgisayar arayüzü türü nedir?",
    options: ["Komut Satırı", "Metin Tabanlı Arayüz", "Grafiksel Kullanıcı Arayüzü (GUI)", "Kart Tabanlı Sistem"],
    correct: 2,
    category: CATEGORIES.TECHNOLOGY.name,
    difficulty: "Kolay"
  },
  {
    id: 1441,
    question: "Bir veritabanında, bir tablo içindeki her bir satırı benzersiz olarak tanımlayan alan nedir?",
    options: ["Yabancı Anahtar", "Birincil Anahtar (Primary Key)", "İndeks", "Görünüm (View)"],
    correct: 1,
    category: CATEGORIES.TECHNOLOGY.name,
    difficulty: "Orta"
  },
  {
    id: 1442,
    question: "E-posta göndermek için kullanılan temel protokol nedir?",
    options: ["POP3", "IMAP", "SMTP", "HTTP"],
    correct: 2,
    category: CATEGORIES.TECHNOLOGY.name,
    difficulty: "Kolay"
  },
  {
    id: 1443,
    question: "Bir programın kaynak kodunu (source code) alıp doğrudan makine diline çeviren yazılım nedir?",
    options: ["Yorumlayıcı (Interpreter)", "Derleyici (Compiler)", "Debugger", "Kod Editörü"],
    correct: 1,
    category: CATEGORIES.TECHNOLOGY.name,
    difficulty: "Orta"
  },
  {
    id: 1444,
    question: "Çevremizdeki nesnelerin internete bağlanması ve veri alışverişinde bulunması konsepti nedir?",
    options: ["Bulut Bilişim", "Nesnelerin İnterneti (IoT)", "Blok Zinciri", "Sanal Gerçeklik"],
    correct: 1,
    category: CATEGORIES.TECHNOLOGY.name,
    difficulty: "Kolay"
  },
  {
    id: 1445,
    question: "Bir ağdaki tüm cihazlara veri gönderen, akıllı olmayan ağ cihazı nedir?",
    options: ["Router", "Switch", "Hub", "Gateway"],
    correct: 2,
    category: CATEGORIES.TECHNOLOGY.name,
    difficulty: "Orta"
  },
  {
    id: 1446,
    question: "C++ ve Java'da kullanılan, bir fonksiyonun veya değişkenin yalnızca tanımlandığı kapsam (scope) içinde erişilebilir olmasını sağlayan anahtar kelime nedir?",
    options: ["Public", "Static", "Private", "Protected"],
    correct: 2,
    category: CATEGORIES.TECHNOLOGY.name,
    difficulty: "Zor"
  },
  {
    id: 1447,
    question: "Bilgisayarın BIOS/UEFI ayarlarını ve saati tutan küçük, pille çalışan bellek nedir?",
    options: ["CMOS", "RAM", "ROM", "Cache"],
    correct: 0,
    category: CATEGORIES.TECHNOLOGY.name,
    difficulty: "Zor"
  },
  {
    id: 1448,
    question: "Bir web sitesinin sunucudan gelen verinin doğru ve güvenli olduğunu garanti eden sertifika türü nedir?",
    options: ["DRM", "HTML", "CSS", "SSL/TLS"],
    correct: 3,
    category: CATEGORIES.TECHNOLOGY.name,
    difficulty: "Kolay"
  },
  {
    id: 1449,
    question: "Büyük bir veri kümesini, benzer özelliklere sahip gruplara (kümelere) ayırmayı amaçlayan gözetimsiz makine öğrenimi görevi nedir?",
    options: ["Regresyon", "Sınıflandırma", "Kümeleme (Clustering)", "Boyut Azaltma"],
    correct: 2,
    category: CATEGORIES.TECHNOLOGY.name,
    difficulty: "Orta"
  },
  {
    id: 1450,
    question: "Intel'in 1971'de piyasaya sürdüğü, ticari olarak başarılı olan ilk mikroişlemci nedir?",
    options: ["Intel Pentium", "Intel 8086", "Intel 4004", "Intel Core 2 Duo"],
    correct: 2,
    category: CATEGORIES.TECHNOLOGY.name,
    difficulty: "Zor"
  },
  {
    id: 1451,
    question: "Bir programlama dilinde, bellekte sabitlenmiş ve değeri değiştirilemeyen veri birimi nedir?",
    options: ["Değişken (Variable)", "Sınıf (Class)", "Sabit (Constant)", "Metot (Method)"],
    correct: 2,
    category: CATEGORIES.TECHNOLOGY.name,
    difficulty: "Kolay"
  },
  {
    id: 1452,
    question: "Verilerin kayıp veya gecikmeye karşı daha az toleranslı olduğu (örneğin canlı video akışı) protokol hangisidir?",
    options: ["TCP", "HTTP", "UDP", "ICMP"],
    correct: 2,
    category: CATEGORIES.TECHNOLOGY.name,
    difficulty: "Orta"
  },
  {
    id: 1453,
    question: "İşlemcilerin saniyede yapabildiği döngü sayısını ifade eden hız birimi nedir?",
    options: ["Byte", "Hertz (Hz)", "Volt", "Watt"],
    correct: 1,
    category: CATEGORIES.TECHNOLOGY.name,
    difficulty: "Kolay"
  },
  {
    id: 1454,
    question: "'MongoDB' ve 'Cassandra' gibi veritabanları hangi kategoriye girer?",
    options: ["İlişkisel", "SQL Tabanlı", "NoSQL", "Ağ Tabanlı"],
    correct: 2,
    category: CATEGORIES.TECHNOLOGY.name,
    difficulty: "Orta"
  },
  {
    id: 1455,
    question: "World Wide Web'i (WWW) icat eden kişi kimdir?",
    options: ["Bill Gates", "Larry Page", "Tim Berners-Lee", "Jeff Bezos"],
    correct: 2,
    category: CATEGORIES.TECHNOLOGY.name,
    difficulty: "Kolay"
  },
  {
    id: 1456,
    question: "Bir kullanıcının kimliğini doğrulamak için kullanılan yöntem nedir?",
    options: ["Şifreleme", "Yetkilendirme", "Kimlik Doğrulama (Authentication)", "Dijital İmza"],
    correct: 2,
    category: CATEGORIES.TECHNOLOGY.name,
    difficulty: "Kolay"
  },
  {
    id: 1457,
    question: "Tamamen dijital olarak oluşturulmuş ve fiziksel dünyadan bağımsız, etkileşimli üç boyutlu ortam nedir?",
    options: ["Artırılmış Gerçeklik (AR)", "Sanal Gerçeklik (VR)", "Karma Gerçeklik", "Blok Zinciri"],
    correct: 1,
    category: CATEGORIES.TECHNOLOGY.name,
    difficulty: "Kolay"
  },
  {
    id: 1458,
    question: "HTML'de bir web sayfasının stil ve düzenini kontrol etmek için kullanılan teknik nedir?",
    options: ["JavaScript", "XML", "CSS", "PHP"],
    correct: 2,
    category: CATEGORIES.TECHNOLOGY.name,
    difficulty: "Kolay"
  },
  {
    id: 1459,
    question: "Bilgisayar sisteminde ana bileşenlerin (CPU, RAM, GPU) takıldığı merkezi devre kartı nedir?",
    options: ["Güç Kaynağı", "Anakart (Motherboard)", "Kasa", "SSD"],
    correct: 1,
    category: CATEGORIES.TECHNOLOGY.name,
    difficulty: "Kolay"
  },
  {
    id: 1460,
    question: "1950'lerde geliştirilen ve hala kullanılan ilk yüksek seviyeli programlama dili nedir?",
    options: ["C", "COBOL", "Fortran", "Pascal"],
    correct: 2,
    category: CATEGORIES.TECHNOLOGY.name,
    difficulty: "Zor"
  },
  {
    id: 1461,
    question: "Bir ağdaki cihazlara otomatik olarak IP adresi atayan protokol nedir?",
    options: ["DNS", "DHCP", "ARP", "ICMP"],
    correct: 1,
    category: CATEGORIES.TECHNOLOGY.name,
    difficulty: "Orta"
  },
  {
    id: 1462,
    question: "Yapılandırılmış veriyi XML'e benzer şekilde, ancak daha hafif bir formatta depolamak için kullanılan format nedir?",
    options: ["HTML", "JSON", "CSV", "PDF"],
    correct: 1,
    category: CATEGORIES.TECHNOLOGY.name,
    difficulty: "Kolay"
  },
  {
    id: 1463,
    question: "Bir programın çalışması sırasında oluşan beklenmedik durumlara ne ad verilir?",
    options: ["Hata Ayıklama", "İstisna (Exception)", "Derleme Hatası", "Mantık Hatası"],
    correct: 1,
    category: CATEGORIES.TECHNOLOGY.name,
    difficulty: "Orta"
  },
  {
    id: 1464,
    question: "Bir ağdaki her cihazın benzersiz fiziksel tanımlayıcısı nedir?",
    options: ["IP Adresi", "Port Numarası", "MAC Adresi", "Protokol"],
    correct: 2,
    category: CATEGORIES.TECHNOLOGY.name,
    difficulty: "Orta"
  },
  {
    id: 1465,
    question: "Bir yapay zeka sisteminin, kendisine verilen hedefe ulaşmak için deneme yanılma yoluyla öğrendiği öğrenme türü nedir?",
    options: ["Gözetimsiz", "Gözetimli", "Takviyeli Öğrenme (Reinforcement Learning)", "Derin Öğrenme"],
    correct: 2,
    category: CATEGORIES.TECHNOLOGY.name,
    difficulty: "Zor"
  },
  {
    id: 1466,
    question: "Ticari olmayan, değiştirilebilir ve ücretsiz olarak dağıtılabilen yazılım türü nedir?",
    options: ["Özel Mülk Yazılım", "Paylaşılan Yazılım", "Açık Kaynak Kodlu Yazılım", "Deneme Sürümü"],
    correct: 2,
    category: CATEGORIES.TECHNOLOGY.name,
    difficulty: "Kolay"
  },
  {
    id: 1467,
    question: "Bir CPU'nun içinde bulunan ve aritmetik, mantıksal işlemleri gerçekleştiren birim nedir?",
    options: ["Kontrol Ünitesi", "Kayıt Defteri (Register)", "Aritmetik Mantık Birimi (ALU)", "Önbellek"],
    correct: 2,
    category: CATEGORIES.TECHNOLOGY.name,
    difficulty: "Orta"
  },
  {
    id: 1468,
    question: "Web sayfalarında etkileşimli öğeler (animasyonlar, dinamik içerik) oluşturmak için kullanılan programlama dili nedir?",
    options: ["HTML", "CSS", "Python", "JavaScript"],
    correct: 3,
    category: CATEGORIES.TECHNOLOGY.name,
    difficulty: "Kolay"
  },
  {
    id: 1469,
    question: "Veri ambarlarında, büyük veri setlerini hızlıca analiz etmek için kullanılan çok boyutlu veri yapısına ne ad verilir?",
    options: ["Tablo", "Küp (Cube)", "Görünüm", "İlişki"],
    correct: 1,
    category: CATEGORIES.TECHNOLOGY.name,
    difficulty: "Zor"
  },
  {
    id: 1470,
    question: "İlk bilgisayar algoritmasını yazan ve 'dünyanın ilk programcısı' olarak kabul edilen kişi kimdir?",
    options: ["Charles Babbage", "Grace Hopper", "Ada Lovelace", "Alan Turing"],
    correct: 2,
    category: CATEGORIES.TECHNOLOGY.name,
    difficulty: "Zor"
  },
  {
    id: 1471,
    question: "Bir programlama dilinde, bir sınıfın metotlarının alt sınıflarca farklı şekillerde uygulanabilmesi ilkesi nedir?",
    options: ["Kapsülleme", "Kalıtım", "Polimorfizm", "Soyutlama"],
    correct: 2,
    category: CATEGORIES.TECHNOLOGY.name,
    difficulty: "Orta"
  },
  {
    id: 1472,
    question: "5GHz ve 2.4GHz frekans bantlarını kullanarak kablosuz ağ bağlantısı sağlayan teknoloji nedir?",
    options: ["Bluetooth", "NFC", "Wi-Fi", "Ethernet"],
    correct: 2,
    category: CATEGORIES.TECHNOLOGY.name,
    difficulty: "Kolay"
  },
  {
    id: 1473,
    question: "Bir bilgisayara harici cihazları (klavye, fare, yazıcı) bağlamak için kullanılan seri veri yolu standardı nedir?",
    options: ["SATA", "PCIe", "USB", "HDMI"],
    correct: 2,
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
    options: ["Sorgu", "Dizin (Index)", "Şema (Schema)", "Görünüm"],
    correct: 2,
    category: CATEGORIES.TECHNOLOGY.name,
    difficulty: "Orta"
  },
  {
    id: 1476,
    question: "Bir kullanıcının eylemlerinin veya kimlik bilgilerinin çalınması amacıyla tasarlanmış sahte web siteleri veya e-postalar kullanılarak yapılan siber saldırı türü nedir?",
    options: ["DDoS", "Kaba Kuvvet Saldırısı", "Oltalama (Phishing)", "Fidye Yazılımı"],
    correct: 2,
    category: CATEGORIES.TECHNOLOGY.name,
    difficulty: "Kolay"
  },
  {
    id: 1477,
    question: "Bir sunucunun kullanıcıdan gelen isteği, diğer bir sunucuya iletip yanıtı geri döndürdüğü aracı sunucu nedir?",
    options: ["CDN", "Proxy Sunucu", "DNS Sunucusu", "Web Sunucusu"],
    correct: 1,
    category: CATEGORIES.TECHNOLOGY.name,
    difficulty: "Orta"
  },
  {
    id: 1478,
    question: "Java, C++ ve Python'da, bir nesnenin ilk oluşturulması sırasında çağrılan özel metoda ne ad verilir?",
    options: ["Metot", "Yıkıcı (Destructor)", "Kurucu (Constructor)", "Değişken"],
    correct: 2,
    category: CATEGORIES.TECHNOLOGY.name,
    difficulty: "Kolay"
  },
  {
    id: 1479,
    question: "Çok sayıda çekirdeği (Core) bulunan ve paralel hesaplamalar için optimize edilmiş işlemci türü nedir?",
    options: ["CPU", "GPU", "RAM", "ROM"],
    correct: 1,
    category: CATEGORIES.TECHNOLOGY.name,
    difficulty: "Kolay"
  },
  {
    id: 1480,
    question: "Silikon Vadisi'nin temellerini atan ve yarı iletken (transistör) teknolojisinin gelişiminde kilit rol oynayan bilim adamı kimdir?",
    options: ["Gordon Moore", "Robert Noyce", "William Shockley", "Jack Kilby"],
    correct: 2,
    category: CATEGORIES.TECHNOLOGY.name,
    difficulty: "Zor"
  },
  {
    id: 1481,
    question: "Bir ağdaki trafiğin kalitesini (gecikme, bant genişliği) yönetmeye odaklanan teknoloji nedir?",
    options: ["DNS", "DHCP", "QoS (Hizmet Kalitesi)", "VPN"],
    correct: 2,
    category: CATEGORIES.TECHNOLOGY.name,
    difficulty: "Zor"
  },
  {
    id: 1482,
    question: "Makine öğreniminde, modelin eğitim verilerini ezberlemesi ve yeni verilere kötü genelleme yapması durumu nedir?",
    options: ["Uyumsuzluk", "Aşırı Öğrenme (Overfitting)", "Yetersiz Öğrenme", "Örnekleme"],
    correct: 1,
    category: CATEGORIES.TECHNOLOGY.name,
    difficulty: "Orta"
  },
  {
    id: 1483,
    question: "Bir programdaki hataları bulma ve düzeltme işlemine ne ad verilir?",
    options: ["Derleme", "Yorumlama", "Hata Ayıklama (Debugging)", "Optimizasyon"],
    correct: 2,
    category: CATEGORIES.TECHNOLOGY.name,
    difficulty: "Kolay"
  },
  {
    id: 1484,
    question: "Bir programlama dilinde, verilerin yanlışlıkla değiştirilmesini önlemek için uygulanan sınırlama ilkesi nedir?",
    options: ["Soyutlama", "Kapsülleme", "Polimorfizm", "Kalıtım"],
    correct: 1,
    category: CATEGORIES.TECHNOLOGY.name,
    difficulty: "Orta"
  },
  {
    id: 1485,
    question: "Hangi protokol, bir cihazın ağdaki diğer cihazların fiziksel adresini (MAC) IP adresi üzerinden öğrenmesini sağlar?",
    options: ["ARP", "RARP", "DNS", "DHCP"],
    correct: 0,
    category: CATEGORIES.TECHNOLOGY.name,
    difficulty: "Zor"
  },
  {
    id: 1486,
    question: "Yüksek performanslı bilgisayarlarda, işlemcinin ısısını uzaklaştırmak için kullanılan bileşen nedir?",
    options: ["Güç Kaynağı", "Fan ve Soğutucu", "RAM", "Depolama"],
    correct: 1,
    category: CATEGORIES.TECHNOLOGY.name,
    difficulty: "Kolay"
  },
  {
    id: 1487,
    question: "Büyük veri setlerinde, verilerin toplanması, temizlenmesi ve analize hazır hale getirilmesi sürecine ne ad verilir?",
    options: ["Veri Modelleme", "Veri Madenciliği", "Veri Mühendisliği", "Veri Görselleştirme"],
    correct: 2,
    category: CATEGORIES.TECHNOLOGY.name,
    difficulty: "Orta"
  },
  {
    id: 1488,
    question: "İnsansız hava araçlarının (drone) kontrol ve navigasyon teknolojilerine ne ad verilir?",
    options: ["Telekominikasyon", "Otonom Sistemler", "Kuantum Bilgisayarlar", "Blok Zinciri"],
    correct: 1,
    category: CATEGORIES.TECHNOLOGY.name,
    difficulty: "Kolay"
  },
  {
    id: 1489,
    question: "Hangi ağ topolojisinde, tüm cihazlar tek bir merkezi noktaya (hub veya switch) bağlıdır?",
    options: ["Halka (Ring)", "Mesh", "Ağaç (Tree)", "Yıldız (Star)"],
    correct: 3,
    category: CATEGORIES.TECHNOLOGY.name,
    difficulty: "Orta"
  },
  {
    id: 1490,
    question: "İlk ticari işletim sistemlerinden biri olan MS-DOS'u geliştiren şirket hangisidir?",
    options: ["Apple", "IBM", "Microsoft", "Oracle"],
    correct: 2,
    category: CATEGORIES.TECHNOLOGY.name,
    difficulty: "Kolay"
  },
  {
    id: 1491,
    question: "Bir ağa veya sisteme yasa dışı erişim sağlamaya çalışan kişiye ne ad verilir?",
    options: ["Programcı", "Analist", "Hacker", "Yönetici"],
    correct: 2,
    category: CATEGORIES.TECHNOLOGY.name,
    difficulty: "Kolay"
  },
  {
    id: 1492,
    question: "Python'da, kodun okunabilirliğini ve yapısını sağlamak için kullanılan boşluk ve girintilere ne ad verilir?",
    options: ["Etiket (Tag)", "Ayraç (Bracket)", "Noktalı Virgül", "Girinti (Indentation)"],
    correct: 3,
    category: CATEGORIES.TECHNOLOGY.name,
    difficulty: "Kolay"
  },
  {
    id: 1493,
    question: "Bilgisayara elektrik kesintisi durumunda kısa süreli güç sağlamak için kullanılan cihaz nedir?",
    options: ["Güç Kaynağı (PSU)", "Regülatör", "UPS (Kesintisiz Güç Kaynağı)", "Jeneratör"],
    correct: 2,
    category: CATEGORIES.TECHNOLOGY.name,
    difficulty: "Kolay"
  },
  {
    id: 1494,
    question: "Bir web sitesinin sunucu tarafından işlenen ve kullanıcıya HTML olarak gönderilen programlama dili nedir?",
    options: ["JavaScript", "CSS", "Python", "Sunucu Taraflı (Server-side) Diller (PHP, ASP.NET)"],
    correct: 3,
    category: CATEGORIES.TECHNOLOGY.name,
    difficulty: "Orta"
  },
  {
    id: 1495,
    question: "Bir yapay zeka sisteminin, insan konuşmasını anlaması ve yanıtlaması yeteneğine ne ad verilir?",
    options: ["Görüntü İşleme", "Doğal Dil İşleme (NLP)", "Kuantum Bilişim", "Biyometri"],
    correct: 1,
    category: CATEGORIES.TECHNOLOGY.name,
    difficulty: "Kolay"
  },
  {
    id: 1496,
    question: "Bilgisayarın hesaplama gücünü, nesnelerin süperpozisyon ve dolanıklık gibi kuantum özelliklerini kullanarak artıran teknoloji nedir?",
    options: ["Süper Bilgisayar", "Kuantum Bilişim", "Blok Zinciri", "Yapay Sinir Ağları"],
    correct: 1,
    category: CATEGORIES.TECHNOLOGY.name,
    difficulty: "Zor"
  },
  {
    id: 1497,
    question: "Bir web sitesinden otomatik olarak büyük miktarda veri çekme işlemine ne ad verilir?",
    options: ["Veri Madenciliği", "Veri Görselleştirme", "Web Kazıma (Web Scraping)", "Veri Modelleme"],
    correct: 2,
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
    options: ["Fiziksel Katman", "Ağ Katmanı", "İletim Katmanı", "Uygulama Katmanı"],
    correct: 2,
    category: CATEGORIES.TECHNOLOGY.name,
    difficulty: "Orta"
  },
  {
    id: 1500,
    question: "İnternetin öncüsü olarak kabul edilen ve 1960'larda geliştirilen ağ nedir?",
    options: ["NSFNet", "Ethernet", "ARPANET", "World Wide Web"],
    correct: 2,
    category: CATEGORIES.TECHNOLOGY.name,
    difficulty: "Kolay"
  },
  {
    id: 1501,
    question: "Bir bilgisayarın 'beyni' olarak adlandırılan ve tüm işlem yeteneklerini sağlayan donanım birimi nedir?",
    options: ["RAM", "Anakart", "Merkezi İşlem Birimi (CPU)", "Ekran Kartı"],
    correct: 2,
    category: "Teknoloji",
    difficulty: "Kolay"
  },
  {
    id: 1502,
    question: "Bir bilgisayarın geçici verileri sakladığı ve elektrik kesildiğinde içerisindeki bilgilerin kaybolduğu hafıza türü nedir?",
    options: ["ROM", "Sabit Disk (HDD)", "Rastgele Erişimli Bellek (RAM)", "SSD"],
    correct: 2,
    category: "Teknoloji",
    difficulty: "Kolay"
  },
  {
    id: 1503,
    question: "İnternet üzerindeki bir kaynağın benzersiz adresine ne ad verilir?",
    options: ["IP Adresi", "MAC Adresi", "URL (Tekdüzen Kaynak Konumlayıcı)", "Alan Adı"],
    correct: 2,
    category: "Teknoloji",
    difficulty: "Kolay"
  },
  {
    id: 1504,
    question: "Yapay zeka (AI) alanında, insan benzeri akıllı davranışları taklit eden programlar geliştirmeyi amaçlayan bilim dalı nedir?",
    options: ["Biyoloji", "Robotik", "Makine Öğrenimi (Machine Learning)", "Kuantum Fiziği"],
    correct: 2,
    category: "Teknoloji",
    difficulty: "Kolay"
  },
  {
    id: 1505,
    question: "Verilerin küçük, şifreli bloklar halinde saklandığı ve değiştirilemez bir kayıt defteri oluşturan dağıtık defter teknolojisi nedir?",
    options: ["Bulut Bilişim", "Sanal Gerçeklik", "Blok Zinciri (Blockchain)", "Veritabanı"],
    correct: 2,
    category: "Teknoloji",
    difficulty: "Kolay"
  },
  {
    id: 1506,
    question: "İnternet'in temelini oluşturan ve web sayfalarının oluşturulmasında kullanılan standart işaretleme dili nedir?",
    options: ["Python", "Java", "HTML (Köprü Metni İşaretleme Dili)", "C++"],
    correct: 2,
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
    options: ["URL", "MAC Adresi", "IP (İnternet Protokolü) Adresi", "E-posta Adresi"],
    correct: 2,
    category: "Teknoloji",
    difficulty: "Kolay"
  },
  {
    id: 1510,
    question: "Bir bilgisayar ağına yetkisiz erişim sağlamaya çalışan kötü niyetli yazılımların genel adı nedir?",
    options: ["Güvenlik Duvarı (Firewall)", "Tarayıcı (Browser)", "Kötü Amaçlı Yazılım (Malware)", "Antivirüs"],
    correct: 2,
    category: "Teknoloji",
    difficulty: "Kolay"
  },
  {
    id: 1511,
    question: "Kablosuz ağlarda (Wi-Fi) güvenliği sağlamak ve yetkisiz erişimi engellemek için kullanılan şifreleme protokolü nedir?",
    options: ["HTTP", "FTP", "WPA (Wi-Fi Korumalı Erişim)", "SMTP"],
    correct: 2,
    category: "Teknoloji",
    difficulty: "Kolay"
  },
  {
    id: 1512,
    question: "Görüntü kalitesini ifade etmek için kullanılan ve bir görüntüyü oluşturan en küçük tek renkli noktalara ne ad verilir?",
    options: ["Vektör", "Santimetre", "Piksel", "Megabayt"],
    correct: 2,
    category: "Teknoloji",
    difficulty: "Kolay"
  },
  {
    id: 1513,
    question: "Yapay zeka sistemlerinin büyük miktarda veriden otomatik olarak desenleri ve kuralları öğrenmesini sağlayan alt alan nedir?",
    options: ["Derin Öğrenme (Deep Learning)", "Doğal Dil İşleme", "Makine Öğrenimi (Machine Learning)", "Yapay Sinir Ağları"],
    correct: 2,
    category: "Teknoloji",
    difficulty: "Kolay"
  },
  {
    id: 1514,
    question: "İnternet'i icat eden ve World Wide Web (WWW) sistemini geliştiren kişi kimdir?",
    options: ["Bill Gates", "Steve Jobs", "Tim Berners-Lee", "Jeff Bezos"],
    correct: 2,
    category: "Teknoloji",
    difficulty: "Kolay"
  },
  {
    id: 1515,
    question: "Bir bilgisayar programında, istenmeyen veya yanlış sonuçlara yol açan hataya ne ad verilir?",
    options: ["Algoritma", "Kodlama", "Hata (Bug)", "Çözümleme"],
    correct: 2,
    category: "Teknoloji",
    difficulty: "Kolay"
  },
  {
    id: 1516,
    question: "Veri depolama birimi olarak kullanılan, kapasitesi genellikle Terabayt (TB) cinsinden ölçülen kalıcı depolama aygıtı nedir?",
    options: ["RAM", "CPU", "Sabit Disk (HDD/SSD)", "Anakart"],
    correct: 2,
    category: "Teknoloji",
    difficulty: "Kolay"
  },
  {
    id: 1517,
    question: "E-posta göndermek için kullanılan standart ağ protokolü nedir?",
    options: ["POP3", "IMAP", "SMTP (Basit Posta Aktarım Protokolü)", "FTP"],
    correct: 2,
    category: "Teknoloji",
    difficulty: "Orta"
  },
  {
    id: 1518,
    question: "Bilgisayarda kullanılan ve iki temel sayı olan 0 ve 1'lerden oluşan sayı sistemi nedir?",
    options: ["Ondalık (Decimal)", "Onaltılık (Hexadecimal)", "İkili (Binary)", "Sekizlik (Octal)"],
    correct: 2,
    category: "Teknoloji",
    difficulty: "Kolay"
  },
  {
    id: 1519,
    question: "Kullanıcının klavye, fare veya dokunmatik ekran aracılığıyla bilgisayara veri girmesini sağlayan birime ne ad verilir?",
    options: ["Çıkış Birimi", "Depolama Birimi", "Giriş Birimi", "İşlem Birimi"],
    correct: 2,
    category: "Teknoloji",
    difficulty: "Kolay"
  },
  {
    id: 1520,
    question: "Mobil cihazlarda, coğrafi konumu belirlemek için kullanılan küresel uydu tabanlı navigasyon sistemi nedir?",
    options: ["Wi-Fi", "Bluetooth", "GPS (Küresel Konumlandırma Sistemi)", "NFC"],
    correct: 2,
    category: "Teknoloji",
    difficulty: "Kolay"
  },
  {
    id: 1521,
    question: "Büyük miktarda verinin internet üzerinden uzak sunucularda depolanması ve bu verilere erişim sağlanması hizmeti nedir?",
    options: ["Veritabanı Yönetimi", "Yapay Zeka", "Bulut Bilişim (Cloud Computing)", "Veri Madenciliği"],
    correct: 2,
    category: "Teknoloji",
    difficulty: "Kolay"
  },
  {
    id: 1522,
    question: "Bilgisayar ağlarında, ağ trafiğini denetleyen ve farklı ağlar arasında veri paketlerini yönlendiren cihaz nedir?",
    options: ["Modem", "Anahtar (Switch)", "Yönlendirici (Router)", "Hub"],
    correct: 2,
    category: "Teknoloji",
    difficulty: "Kolay"
  },
  {
    id: 1523,
    question: "Bir bilgisayarın aynı anda birden fazla görevi veya işlemi yapabilme yeteneğine ne ad verilir?",
    options: ["Tek Görevlilik", "Önceliklendirme", "Çoklu Görev (Multitasking)", "Sanal Gerçeklik"],
    correct: 2,
    category: "Teknoloji",
    difficulty: "Kolay"
  },
  {
    id: 1524,
    question: "Yazılı bir metnin, bilgisayarın anlayabileceği ve işleyebileceği bir koda (örneğin ASCII) dönüştürülmesi işlemine ne ad verilir?",
    options: ["Sıkıştırma", "Şifreleme", "Kodlama (Encoding)", "Çözümleme"],
    correct: 2,
    category: "Teknoloji",
    difficulty: "Orta"
  },
  {
    id: 1525,
    question: "3 boyutlu sanal bir ortamda kullanıcıya gerçeklik hissi veren teknolojinin genel adı nedir?",
    options: ["Artırılmış Gerçeklik (AR)", "Karma Gerçeklik", "Sanal Gerçeklik (VR)", "Geniş Ekran"],
    correct: 2,
    category: "Teknoloji",
    difficulty: "Kolay"
  },
  {
    id: 1526,
    question: "İnternet'e bağlı cihazların (nesnelerin) birbirleriyle iletişim kurmasını ve veri alışverişi yapmasını sağlayan kavram nedir?",
    options: ["Büyük Veri", "Kuantum Bilişim", "Nesnelerin İnterneti (IoT)", "Mobil Bilişim"],
    correct: 2,
    category: "Teknoloji",
    difficulty: "Kolay"
  },
  {
    id: 1527,
    question: "Verileri sıkıştırmak ve orijinal formata geri döndürmek için kullanılan, veri paketlerinin boyutunu küçülten süreç nedir?",
    options: ["Şifreleme", "Ağ Protokolü", "Sıkıştırma (Compression)", "Veri Madenciliği"],
    correct: 2,
    category: "Teknoloji",
    difficulty: "Kolay"
  },
  {
    id: 1528,
    question: "Bir web sayfasının veya uygulamaların görsel tasarımını, düzenini ve etkileşimini tanımlayan stil sayfası dili nedir?",
    options: ["HTML", "JavaScript", "CSS (Basamaklı Stil Sayfaları)", "Python"],
    correct: 2,
    category: "Teknoloji",
    difficulty: "Kolay"
  },
  {
    id: 1529,
    question: "Bilgisayar korsanlarının (Hacker) bir web sitesini veya sistemi aşırı trafikle yavaşlatıp çökertmeyi amaçladığı saldırı türü nedir?",
    options: ["Phishing (Oltalama)", "Man-in-the-Middle", "Hizmet Reddi (DDoS) Saldırısı", "Kötü Amaçlı Yazılım"],
    correct: 2,
    category: "Teknoloji",
    difficulty: "Orta"
  },
  {
    id: 1530,
    question: "Bir kullanıcının web siteleri arasında dolaşırken bilgisayarına kaydedilen küçük metin dosyaları nedir?",
    options: ["URL", "Cache (Önbellek)", "Çerez (Cookie)", "Tarayıcı Geçmişi"],
    correct: 2,
    category: "Teknoloji",
    difficulty: "Kolay"
  },
  {
    id: 1531,
    question: "Microsoft'un popüler işletim sistemi serisinin adı nedir?",
    options: ["macOS", "Linux", "Windows", "Android"],
    correct: 2,
    category: "Teknoloji",
    difficulty: "Kolay"
  },
  {
    id: 1532,
    question: "Bir bilgisayar ağında, tüm cihazların aynı kabloya veya kanala bağlandığı topoloji (yapı) nedir?",
    options: ["Halka Topoloji", "Yıldız Topoloji", "Otobüs (Bus) Topoloji", "Mesh Topoloji"],
    correct: 2,
    category: "Teknoloji",
    difficulty: "Orta"
  },
  {
    id: 1533,
    question: "Yapay zeka alanında, bilgisayarların insan dilini (yazılı veya sözlü) anlaması, yorumlaması ve üretmesi yeteneği nedir?",
    options: ["Görüntü İşleme", "Ses Tanıma", "Doğal Dil İşleme (NLP)", "Robotik"],
    correct: 2,
    category: "Teknoloji",
    difficulty: "Kolay"
  },
  {
    id: 1534,
    question: "Büyük miktarda veriyi (genellikle bir saniyede gigabaytlarca) işleyebilen süper bilgisayarların temelini oluşturan fizik prensibi nedir?",
    options: ["Elektromanyetizma", "Newton Mekaniği", "Kuantum Bilişim", "Termodinamik"],
    correct: 2,
    category: "Teknoloji",
    difficulty: "Zor"
  },
  {
    id: 1535,
    question: "Görüntüleri ve videoları işleyerek ekrana aktarmaktan sorumlu olan donanım birimi nedir?",
    options: ["RAM", "CPU", "Grafik İşlem Birimi (GPU)", "Anakart"],
    correct: 2,
    category: "Teknoloji",
    difficulty: "Kolay"
  },
  {
    id: 1536,
    question: "Bilgisayarların ağ üzerinden güvenli bir şekilde iletişim kurmasını sağlayan şifreli protokol nedir (Web sitelerinde 'https' ile gösterilir)?",
    options: ["HTTP", "FTP", "SSL/TLS (HTTPS)", "TCP/IP"],
    correct: 2,
    category: "Teknoloji",
    difficulty: "Kolay"
  },
  {
    id: 1537,
    question: "Apple'ın iPhone, iPad ve iPod Touch gibi mobil cihazlarında kullandığı işletim sistemi nedir?",
    options: ["Android", "Windows Mobile", "iOS", "Linux"],
    correct: 2,
    category: "Teknoloji",
    difficulty: "Kolay"
  },
  {
    id: 1538,
    question: "Bir programcı tarafından bilgisayarın belirli bir görevi yerine getirmesi için yazılan talimatlar dizisine ne ad verilir?",
    options: ["Donanım", "Veri", "Kod (Code)", "Hata"],
    correct: 2,
    category: "Teknoloji",
    difficulty: "Kolay"
  },
  {
    id: 1539,
    question: "İki veya daha fazla bilgisayarın birbiriyle veri alışverişi yapabildiği bağlantı sistemine ne ad verilir?",
    options: ["Monitör", "Yazıcı", "Ağ (Network)", "Kasa"],
    correct: 2,
    category: "Teknoloji",
    difficulty: "Kolay"
  },
  {
    id: 1540,
    question: "Bir web sitesi açıldığında tarayıcıya ilk yüklenen ana sayfaya ne ad verilir?",
    options: ["URL", "Ağ Geçidi", "Ana Sayfa (Homepage)", "Alan Adı"],
    correct: 2,
    category: "Teknoloji",
    difficulty: "Kolay"
  },
  {
    id: 1541,
    question: "Görüntüyü veya metni dijital formattan kağıt üzerine çıkaran donanım birimi nedir?",
    options: ["Tarayıcı (Scanner)", "Monitör", "Yazıcı (Printer)", "Webcam"],
    correct: 2,
    category: "Teknoloji",
    difficulty: "Kolay"
  },
  {
    id: 1542,
    question: "Bir bilgisayarın veya ağın güvenliğini test etmek amacıyla yasal olarak sistemlere sızmaya çalışan profesyonellere ne ad verilir?",
    options: ["Siyah Şapkalı Hacker", "Siber Casus", "Etik Hacker (Beyaz Şapkalı)", "Phisher"],
    correct: 2,
    category: "Teknoloji",
    difficulty: "Kolay"
  },
  {
    id: 1543,
    question: "İnternet üzerinde dosya transferi (indirme ve yükleme) için kullanılan standart protokol nedir?",
    options: ["HTTP", "SMTP", "FTP (Dosya Aktarım Protokolü)", "TCP"],
    correct: 2,
    category: "Teknoloji",
    difficulty: "Kolay"
  },
  {
    id: 1544,
    question: "Bir web sitesinin ana yapısını ve içeriğini (metinler, görseller vb.) tanımlayan dil nedir?",
    options: ["CSS", "JavaScript", "HTML", "Python"],
    correct: 2,
    category: "Teknoloji",
    difficulty: "Kolay"
  },
  {
    id: 1545,
    question: "Yapay zekada, bir yapay sinir ağının girdi katmanı ile çıktı katmanı arasında kalan katmanlara ne ad verilir?",
    options: ["Girdi Katmanı", "Çıktı Katmanı", "Gizli Katmanlar", "Ağırlık Katmanı"],
    correct: 2,
    category: "Teknoloji",
    difficulty: "Orta"
  },
  {
    id: 1546,
    question: "Bir bilgisayarın güç kaynağı ünitesine ne ad verilir?",
    options: ["RAM", "CPU", "PSU (Güç Kaynağı Ünitesi)", "Anakart"],
    correct: 2,
    category: "Teknoloji",
    difficulty: "Kolay"
  },
  {
    id: 1547,
    question: "Veri miktarını ifade eden ve $1024$ Gigabayt'a (GB) eşit olan ölçü birimi nedir?",
    options: ["Megabayt (MB)", "Kilobayt (KB)", "Terabayt (TB)", "Petabayt (PB)"],
    correct: 2,
    category: "Teknoloji",
    difficulty: "Kolay"
  },
  {
    id: 1548,
    question: "Bir programı kullanmadan önce kullanıcı tarafından kabul edilmesi gereken yasal sözleşmeye ne ad verilir?",
    options: ["Lisans", "Garanti Belgesi", "Son Kullanıcı Lisans Sözleşmesi (EULA)", "Telifsiz Hak"],
    correct: 2,
    category: "Teknoloji",
    difficulty: "Orta"
  },
  {
    id: 1549,
    question: "İnternetteki web sayfalarını görüntülemeye yarayan yazılım nedir?",
    options: ["Antivirüs", "Metin Editörü", "Tarayıcı (Web Browser)", "Hesap Tablosu"],
    correct: 2,
    category: "Teknoloji",
    difficulty: "Kolay"
  },
  {
    id: 1550,
    question: "Kamera, mikrofon gibi sensörlerden elde edilen verileri işleyerek yapay zekanın çevresini algılamasını sağlayan bilim dalı nedir?",
    options: ["Doğal Dil İşleme", "Siber Güvenlik", "Bilgisayarlı Görü (Computer Vision)", "Veritabanı"],
    correct: 2,
    category: "Teknoloji",
    difficulty: "Kolay"
  },
  {
    id: 1551,
    question: "Kullanıcıları kandırarak kişisel bilgilerini (şifre, kredi kartı vb.) çalmaya çalışan siber saldırı türü nedir?",
    options: ["DDoS", "Malware", "Oltalama (Phishing)", "Güvenlik Duvarı"],
    correct: 2,
    category: "Teknoloji",
    difficulty: "Kolay"
  },
  {
    id: 1552,
    question: "Bir bilgisayarda aynı anda birden fazla CPU (veya çekirdek) kullanılmasını sağlayan teknoloji nedir?",
    options: ["Tek İşlemcilik", "Tek Çekirdeklilik", "Çoklu İşlem (Multiprocessing)", "Sanal Gerçeklik"],
    correct: 2,
    category: "Teknoloji",
    difficulty: "Orta"
  },
  {
    id: 1553,
    question: "Bir web sitesinin veya uygulamanın kullanıcıyla doğrudan etkileşime giren, görünen kısmına ne ad verilir?",
    options: ["Backend (Arka Yüz)", "Veritabanı", "Frontend (Ön Yüz)", "Sunucu"],
    correct: 2,
    category: "Teknoloji",
    difficulty: "Kolay"
  },
  {
    id: 1554,
    question: "Genellikle optik fiber kablolar aracılığıyla yüksek hızda internet erişimi sağlayan teknoloji nedir?",
    options: ["ADSL", "Dial-up", "Fiber Optik İnternet", "Uydu İnternet"],
    correct: 2,
    category: "Teknoloji",
    difficulty: "Kolay"
  },
  {
    id: 1555,
    question: "Bir yazılımın veya sistemin kararlılığını ve performansını test etmek için kullanılan teknik nedir?",
    options: ["Kodlama", "Derleme", "Yazılım Testi", "Veri Madenciliği"],
    correct: 2,
    category: "Teknoloji",
    difficulty: "Kolay"
  },
  {
    id: 1556,
    question: "Bir bilgisayara bağlı tüm donanım bileşenlerini (CPU, RAM, GPU vb.) üzerinde barındıran temel devre kartı nedir?",
    options: ["Ekran Kartı", "Sabit Disk", "Anakart (Motherboard)", "Güç Kaynağı"],
    correct: 2,
    category: "Teknoloji",
    difficulty: "Kolay"
  },
  {
    id: 1557,
    question: "Dijital ortamda bir belgenin veya dosyanın kimliğini ve bütünlüğünü doğrulamak için kullanılan şifreleme tekniği nedir?",
    options: ["Şifreleme", "Sıkıştırma", "Dijital İmza", "Parola Koruma"],
    correct: 2,
    category: "Teknoloji",
    difficulty: "Orta"
  },
  {
    id: 1558,
    question: "İlk programlanabilir dijital elektronik bilgisayarın (ENIAC) geliştirildiği üniversite hangisidir?",
    options: ["Harvard Üniversitesi", "MIT", "Pennsylvania Üniversitesi", "Stanford Üniversitesi"],
    correct: 2,
    category: "Teknoloji",
    difficulty: "Zor"
  },
  {
    id: 1559,
    question: "Veri hacminin, hızının ve çeşitliliğinin geleneksel yöntemlerle işlenmesi zor olan büyük veri setlerine ne ad verilir?",
    options: ["Küçük Veri", "Özel Veri", "Büyük Veri (Big Data)", "Hafif Veri"],
    correct: 2,
    category: "Teknoloji",
    difficulty: "Kolay"
  },
  {
    id: 1560,
    question: "Bir bilgisayarın veya mobil cihazın yerel ağdaki adresini belirleyen, fiziksel olarak karta yazılı benzersiz adres nedir?",
    options: ["IP Adresi", "URL", "MAC (Ortam Erişim Kontrolü) Adresi", "Port Numarası"],
    correct: 2,
    category: "Teknoloji",
    difficulty: "Orta"
  },
  {
    id: 1561,
    question: "Yazılım geliştirme sürecinde, bir programcının kaynak kodu yazmak için kullandığı yazılıma ne ad verilir?",
    options: ["Web Tarayıcısı", "Oyun Konsolu", "Kod Editörü/IDE (Entegre Geliştirme Ortamı)", "Grafik Programı"],
    correct: 2,
    category: "Teknoloji",
    difficulty: "Kolay"
  },
  {
    id: 1562,
    question: "Robotikte, bir robotun dış dünyayı algılamasını sağlayan cihazlara ne ad verilir?",
    options: ["Aktüatör", "Yazılım", "Sensör", "Güç Kaynağı"],
    correct: 2,
    category: "Teknoloji",
    difficulty: "Kolay"
  },
  {
    id: 1563,
    question: "İnternet üzerinde alan adlarını (örneğin google.com) IP adreslerine çeviren dağıtık sistem nedir?",
    options: ["DHCP", "FTP", "DNS (Alan Adı Sistemi)", "ARP"],
    correct: 2,
    category: "Teknoloji",
    difficulty: "Kolay"
  },
  {
    id: 1564,
    question: "Kablosuz cihazlar arasında kısa mesafede veri transferi sağlayan düşük enerjili iletişim teknolojisi nedir?",
    options: ["Wi-Fi", "Kızılötesi", "Bluetooth", "3G/4G"],
    correct: 2,
    category: "Teknoloji",
    difficulty: "Kolay"
  },
  {
    id: 1565,
    question: "Bir bilgisayarın başlangıçta açılması için gerekli olan, sadece okunabilen ve değiştirilemeyen bellek türü nedir?",
    options: ["RAM", "SSD", "ROM (Salt Okunur Bellek)", "Cache"],
    correct: 2,
    category: "Teknoloji",
    difficulty: "Kolay"
  },
  {
    id: 1566,
    question: "Yapay zekada, karar verme sürecinde her bir özelliğin önemini belirleyen sayısal değere ne ad verilir?",
    options: ["Girdi", "Hata Oranı", "Ağırlık (Weight)", "Bias"],
    correct: 2,
    category: "Teknoloji",
    difficulty: "Orta"
  },
  {
    id: 1567,
    question: "Bir bilgisayarın işlemcisinin (CPU) saniyede gerçekleştirebildiği döngü sayısını ifade eden hız birimi nedir?",
    options: ["Gigabayt (GB)", "Volt", "Gigahertz (GHz)", "Megabayt (MB)"],
    correct: 2,
    category: "Teknoloji",
    difficulty: "Kolay"
  },
  {
    id: 1568,
    question: "Kullanıcıların e-posta almasını sağlayan ve genellikle sunucudan e-postaları silen protokol nedir?",
    options: ["SMTP", "IMAP", "POP3 (Posta Ofisi Protokolü)", "HTTP"],
    correct: 2,
    category: "Teknoloji",
    difficulty: "Orta"
  },
  {
    id: 1569,
    question: "Kullanıcının bilgisayarında çalışan ve internet üzerindeki bir hizmetten (sunucudan) veri isteyen cihaza ne ad verilir?",
    options: ["Sunucu (Server)", "Yönlendirici", "İstemci (Client)", "Modem"],
    correct: 2,
    category: "Teknoloji",
    difficulty: "Kolay"
  },
  {
    id: 1570,
    question: "E-postalarda, istenmeyen veya toplu olarak gönderilen reklam mesajlarına ne ad verilir?",
    options: ["Phishing", "Virus", "Spam", "EULA"],
    correct: 2,
    category: "Teknoloji",
    difficulty: "Kolay"
  },
  {
    id: 1571,
    question: "Mobil cihazlarda, gerçek dünyadaki görüntünün üzerine dijital bilgilerin veya nesnelerin yerleştirilmesi teknolojisi nedir?",
    options: ["Sanal Gerçeklik (VR)", "Kuantum Bilişim", "Artırılmış Gerçeklik (AR)", "3D Modelleme"],
    correct: 2,
    category: "Teknoloji",
    difficulty: "Kolay"
  },
  {
    id: 1572,
    question: "Yazılım geliştirme sürecinde, yeni özellikler eklemek ve hataları düzeltmek için yapılan periyodik yayınlara ne ad verilir?",
    options: ["Derleme", "Kodlama", "Yazılım Güncellemesi/Sürümü (Release)", "Kopyalama"],
    correct: 2,
    category: "Teknoloji",
    difficulty: "Kolay"
  },
  {
    id: 1573,
    question: "Bir bilgisayarın klavyesinde bulunan ve sayısal girişler için ayrılmış bölüme ne ad verilir?",
    options: ["Fonksiyon Tuşları", "Yön Tuşları", "Sayısal Tuş Takımı (Numpad)", "Kontrol Tuşları"],
    correct: 2,
    category: "Teknoloji",
    difficulty: "Kolay"
  },
  {
    id: 1574,
    question: "İnternet üzerinde bir alan adının (örneğin google.com) sonundaki uzantıya ne ad verilir?",
    options: ["Protokol", "Sunucu Adı", "Üst Düzey Alan Adı (TLD - Top-Level Domain)", "IP Adresi"],
    correct: 2,
    category: "Teknoloji",
    difficulty: "Kolay"
  },
  {
    id: 1575,
    question: "Bir bilgisayarın ana belleği (RAM) ile işlemcisi (CPU) arasında hızlı veri transferi için kullanılan küçük ve hızlı hafıza nedir?",
    options: ["ROM", "Sabit Disk", "Önbellek (Cache)", "SSD"],
    correct: 2,
    category: "Teknoloji",
    difficulty: "Orta"
  },
  {
    id: 1576,
    question: "Kötü amaçlı yazılımların genel bir türü olan ve kendini kopyalayarak bilgisayar sistemlerine yayılan program nedir?",
    options: ["Truva Atı (Trojan)", "Casus Yazılım", "Virüs", "Adware"],
    correct: 2,
    category: "Teknoloji",
    difficulty: "Kolay"
  },
  {
    id: 1577,
    question: "Veri depolama birimlerinde, manyetik disklerin dönme hızı hangi birimle ifade edilir?",
    options: ["MHz", "GHz", "RPM (Dakika Başına Devir)", "MB/s"],
    correct: 2,
    category: "Teknoloji",
    difficulty: "Orta"
  },
  {
    id: 1578,
    question: "Yazılım geliştirme disiplininde, bir programın nasıl çalıştığını gösteren adım adım talimatlar kümesine ne ad verilir?",
    options: ["Veri Yapısı", "Kodlama Dili", "Algoritma", "Söz Dizimi (Syntax)"],
    correct: 2,
    category: "Teknoloji",
    difficulty: "Kolay"
  },
  {
    id: 1579,
    question: "İnternet üzerinde video, ses ve diğer medya içeriklerini sürekli bir akış halinde izleme/dinleme eylemine ne ad verilir?",
    options: ["İndirme (Download)", "Yükleme (Upload)", "Akış (Streaming)", "Sıkıştırma"],
    correct: 2,
    category: "Teknoloji",
    difficulty: "Kolay"
  },
  {
    id: 1580,
    question: "Optik disk teknolojisinde, verilerin okunduğu ve yazıldığı mavi lazer kullanan yüksek kapasiteli disk formatı nedir?",
    options: ["CD-ROM", "DVD-ROM", "Blu-ray Disk", "Flash Bellek"],
    correct: 2,
    category: "Teknoloji",
    difficulty: "Kolay"
  },
  {
    id: 1581,
    question: "Bir bilgisayarın işlemcisinin (CPU) ürettiği fazla ısıyı dağıtmak için kullanılan soğutma bileşeni nedir?",
    options: ["Güç Kaynağı", "RAM", "Soğutucu/Fan (Heatsink/Fan)", "Sabit Disk"],
    correct: 2,
    category: "Teknoloji",
    difficulty: "Kolay"
  },
  {
    id: 1582,
    question: "Yazılım geliştirme süreçlerini hızlandıran ve otomatikleştiren araç ve yöntemlerin genel adı nedir?",
    options: ["Veritabanı Yönetimi", "DevOps", "Yapay Zeka", "Siber Güvenlik"],
    correct: 1,
    category: "Teknoloji",
    difficulty: "Orta"
  },
  {
    id: 1583,
    question: "İnternet üzerinde canlı yayın yapan bir kişinin bilgisayarına veya mobil cihazına ne ad verilir?",
    options: ["İstemci", "Sunucu", "Yayıncı (Streamer)", "Modem"],
    correct: 2,
    category: "Teknoloji",
    difficulty: "Kolay"
  },
  {
    id: 1584,
    question: "Verilerin şifrelenmesi ve sadece yetkili kişilerin bu şifreyi çözebilmesi için kullanılan matematiksel yönteme ne ad verilir?",
    options: ["Sıkıştırma", "Veri Madenciliği", "Kriptografi (Şifreleme Bilimi)", "Algoritma"],
    correct: 2,
    category: "Teknoloji",
    difficulty: "Kolay"
  },
  {
    id: 1585,
    question: "Web sitelerinde, kullanıcı etkileşimini, animasyonları ve dinamik içeriği sağlayan programlama dili nedir?",
    options: ["HTML", "CSS", "JavaScript", "SQL"],
    correct: 2,
    category: "Teknoloji",
    difficulty: "Kolay"
  },
  {
    id: 1586,
    question: "Bilgisayarın çalışma sırasında ürettiği geçici verileri silmek veya temizlemek için kullanılan bölüme ne ad verilir?",
    options: ["Sabit Disk", "RAM", "Önbellek (Cache) / Geçici Dosyalar", "ROM"],
    correct: 2,
    category: "Teknoloji",
    difficulty: "Kolay"
  },
  {
    id: 1587,
    question: "Siber güvenlikte, kötü niyetli yazılımların ve saldırıların sistemlere girmesini engelleyen koruyucu yazılım veya donanım nedir?",
    options: ["Tarayıcı", "Antivirüs", "Güvenlik Duvarı (Firewall)", "İşletim Sistemi"],
    correct: 2,
    category: "Teknoloji",
    difficulty: "Kolay"
  },
  {
    id: 1588,
    question: "Kablosuz ağlarda (Wi-Fi), sinyal gücünü artırmak ve kapsama alanını genişletmek için kullanılan cihaz nedir?",
    options: ["Modem", "Yönlendirici", "Menzil Genişletici (Repeater/Extender)", "Switch"],
    correct: 2,
    category: "Teknoloji",
    difficulty: "Kolay"
  },
  {
    id: 1589,
    question: "Nesnelerin İnterneti (IoT) cihazlarının uzaktan kontrol edilmesini ve izlenmesini sağlayan temel teknoloji nedir?",
    options: ["Bluetooth", "NFC", "Bulut Bilişim ve Ağ Bağlantısı", "Uydu İletişimi"],
    correct: 2,
    category: "Teknoloji",
    difficulty: "Kolay"
  },
  {
    id: 1590,
    question: "İlk kişisel bilgisayar (PC) olarak kabul edilen ve 1981'de piyasaya sürülen model hangisidir?",
    options: ["Apple II", "Commodore PET", "IBM PC", "Altair 8800"],
    correct: 2,
    category: "Teknoloji",
    difficulty: "Zor"
  },
  {
    id: 1591,
    question: "Yapay zekada, bir modelin eğitiminde kullanılan veri setinin içindeki hatalı veya eksik veriye ne ad verilir?",
    options: ["Doğru Veri", "Temiz Veri", "Gürültü (Noise) / Aykırı Değer (Outlier)", "Özellik"],
    correct: 2,
    category: "Teknoloji",
    difficulty: "Orta"
  },
  {
    id: 1592,
    question: "Bir bilgisayar ağı üzerinden başka bir bilgisayara (sunucuya) uzaktan erişim sağlamak için kullanılan protokol nedir?",
    options: ["FTP", "HTTP", "Telnet / SSH (Güvenli Kabuk)", "SMTP"],
    correct: 2,
    category: "Teknoloji",
    difficulty: "Orta"
  },
  {
    id: 1593,
    question: "Görüntü çözünürlüğünde kullanılan ve saniyedeki kare sayısını (akıcılığı) ifade eden birim nedir?",
    options: ["Piksel", "DPI", "FPS (Saniyedeki Kare Sayısı)", "Hertz"],
    correct: 2,
    category: "Teknoloji",
    difficulty: "Kolay"
  },
  {
    id: 1594,
    question: "Bir web sitesinin görünümünü ve düzenini değiştirmek, yazı tiplerini ve renklerini ayarlamak için kullanılan teknoloji nedir?",
    options: ["HTML", "JavaScript", "CSS", "Python"],
    correct: 2,
    category: "Teknoloji",
    difficulty: "Kolay"
  },
  {
    id: 1595,
    question: "Dijital verinin en küçük birimi olan ve 0 veya 1 değerini alabilen temel yapı taşı nedir?",
    options: ["Bayt", "Kilobayt", "Bit", "Kelime"],
    correct: 2,
    category: "Teknoloji",
    difficulty: "Kolay"
  },
  {
    id: 1596,
    question: "Veri miktarını ifade eden ve $8$ Bit'e eşit olan ölçü birimi nedir?",
    options: ["Bit", "Kilobit", "Bayt (Byte)", "Megabayt"],
    correct: 2,
    category: "Teknoloji",
    difficulty: "Kolay"
  },
  {
    id: 1597,
    question: "Bir web sitesinin ziyaretçi trafiğini, davranışlarını ve etkileşimlerini izlemeye yarayan analiz araçları nedir?",
    options: ["Web Tarayıcısı", "E-posta Sunucusu", "Web Analitiği (Analytics) Yazılımları", "Antivirüs"],
    correct: 2,
    category: "Teknoloji",
    difficulty: "Kolay"
  },
  {
    id: 1598,
    question: "Kötü amaçlı yazılımların genel bir türü olan ve kendisini faydalı bir yazılım gibi gösteren program nedir?",
    options: ["Virüs", "Solucan (Worm)", "Truva Atı (Trojan Horse)", "Casus Yazılım"],
    correct: 2,
    category: "Teknoloji",
    difficulty: "Kolay"
  },
  {
    id: 1599,
    question: "Genellikle sunucular için kullanılan ve çalışırken kapatılamayan, kararlı ve güvenilir işletim sistemi türü nedir?",
    options: ["Windows", "macOS", "Linux / UNIX", "Android"],
    correct: 2,
    category: "Teknoloji",
    difficulty: "Kolay"
  },
  {
    id: 1600,
    question: "Bir programlama dilinde, yazılan kodun bilgisayarın anlayacağı makine diline çevrilmesi işlemine ne ad verilir?",
    options: ["Kodlama", "Hata Ayıklama", "Derleme (Compilation)", "Yorumlama"],
    correct: 2,
    category: "Teknoloji",
    difficulty: "Orta"
  },

  // ==================== GENEL KÜLTÜR ====================
{
    id: 1601,
    question: "Güneş Sistemi'ndeki en büyük gezegen hangisidir?",
    options: ["Mars", "Dünya", "Jüpiter", "Venüs"],
    correct: 2,
    category: CATEGORIES.GENERAL_CULTURE.name,
    difficulty: "Kolay"
  },
  {
    id: 1602,
    question: "Amerika Birleşik Devletleri'nin başkenti neresidir?",
    options: ["New York", "Los Angeles", "Washington D.C.", "Chicago"],
    correct: 2,
    category: CATEGORIES.GENERAL_CULTURE.name,
    difficulty: "Kolay"
  },
  {
    id: 1603,
    question: "İtalya'nın başkenti olan şehir hangisidir?",
    options: ["Milano", "Roma", "Venedik", "Floransa"],
    correct: 1,
    category: CATEGORIES.GENERAL_CULTURE.name,
    difficulty: "Kolay"
  },
  {
    id: 1604,
    question: "DNA'nın yapısını keşfeden bilim insanları kimlerdir?",
    options: ["Isaac Newton ve Albert Einstein", "Marie Curie ve Pierre Curie", "James Watson ve Francis Crick", "Galileo Galilei ve Nikola Tesla"],
    correct: 2,
    category: CATEGORIES.GENERAL_CULTURE.name,
    difficulty: "Orta"
  },
  {
    id: 1605,
    question: "Ünlü 'Çığlık' tablosu hangi ressama aittir?",
    options: ["Pablo Picasso", "Vincent van Gogh", "Edvard Munch", "Claude Monet"],
    correct: 2,
    category: CATEGORIES.GENERAL_CULTURE.name,
    difficulty: "Kolay"
  },
  {
    id: 1606,
    question: "'Sineklerin Tanrısı' (Lord of the Flies) adlı eserin yazarı kimdir?",
    options: ["George Orwell", "William Golding", "Ernest Hemingway", "Franz Kafka"],
    correct: 1,
    category: CATEGORIES.GENERAL_CULTURE.name,
    difficulty: "Orta"
  },
  {
    id: 1607,
    question: "Tarihte bilinen ilk yazı hangi uygarlık tarafından bulunmuştur?",
    options: ["Mısır Uygarlığı", "Roma İmparatorluğu", "Mezopotamya (Sümerler)", "Çin Hanedanlığı"],
    correct: 2,
    category: CATEGORIES.GENERAL_CULTURE.name,
    difficulty: "Kolay"
  },
  {
    id: 1608,
    question: "Türkiye Cumhuriyeti'nin kurucusu Mustafa Kemal Atatürk nerede doğmuştur?",
    options: ["İstanbul", "Ankara", "İzmir", "Selanik"],
    correct: 3,
    category: CATEGORIES.GENERAL_CULTURE.name,
    difficulty: "Kolay"
  },
  {
    id: 1609,
    question: "Pisa Kulesi hangi ülkededir?",
    options: ["İspanya", "Yunanistan", "İtalya", "Fransa"],
    correct: 2,
    category: CATEGORIES.GENERAL_CULTURE.name,
    difficulty: "Kolay"
  },
  {
    id: 1610,
    question: "Periyodik tablonun mucidi kimdir?",
    options: ["Dmitri Mendeleyev", "Antoine Lavoisier", "Niels Bohr", "John Dalton"],
    correct: 0,
    category: CATEGORIES.GENERAL_CULTURE.name,
    difficulty: "Orta"
  },
  {
    id: 1611,
    question: "'Anna Karenina' ve 'Savaş ve Barış' eserleriyle tanınan Rus yazar kimdir?",
    options: ["Fyodor Dostoyevski", "Leo Tolstoy", "Anton Çehov", "Maksim Gorki"],
    correct: 1,
    category: CATEGORIES.GENERAL_CULTURE.name,
    difficulty: "Kolay"
  },
  {
    id: 1612,
    question: "Olimpiyat Oyunları'nın sembolündeki beş halka neyi temsil eder?",
    options: ["5 ana spor dalını", "5 kıtayı", "5 element", "5 büyük şehri"],
    correct: 1,
    category: CATEGORIES.GENERAL_CULTURE.name,
    difficulty: "Kolay"
  },
  {
    id: 1613,
    question: "Doğadaki en sert madde nedir?",
    options: ["Altın", "Elmas", "Demir", "Platin"],
    correct: 1,
    category: CATEGORIES.GENERAL_CULTURE.name,
    difficulty: "Kolay"
  },
  {
    id: 1614,
    question: "Antik Yunan mitolojisinde gök gürültüsü ve şimşek tanrısı kimdir?",
    options: ["Hades", "Poseidon", "Zeus", "Ares"],
    correct: 2,
    category: CATEGORIES.GENERAL_CULTURE.name,
    difficulty: "Kolay"
  },
  {
    id: 1615,
    question: "İstanbul'daki Yerebatan Sarnıcı'nda bulunan mitolojik figür nedir?",
    options: ["Deniz Kızı", "Kanatlı At Pegasus", "Medusa Başı", "Minotaur"],
    correct: 2,
    category: CATEGORIES.GENERAL_CULTURE.name,
    difficulty: "Orta"
  },
  {
    id: 1616,
    question: "Kanada'nın başkenti hangi şehirdir?",
    options: ["Toronto", "Montreal", "Vancouver", "Ottawa"],
    correct: 3,
    category: CATEGORIES.GENERAL_CULTURE.name,
    difficulty: "Kolay"
  },
  {
    id: 1617,
    question: "Dünya üzerindeki en uzun nehir hangisidir?",
    options: ["Amazon Nehri", "Nil Nehri", "Mississippi Nehri", "Yangtze Nehri"],
    correct: 1,
    category: CATEGORIES.GENERAL_CULTURE.name,
    difficulty: "Orta"
  },
  {
    id: 1618,
    question: "Osmanlı İmparatorluğu'nun kurucusu kimdir?",
    options: ["Fatih Sultan Mehmet", "Yavuz Sultan Selim", "Osman Gazi", "Orhan Gazi"],
    correct: 2,
    category: CATEGORIES.GENERAL_CULTURE.name,
    difficulty: "Kolay"
  },
  {
    id: 1619,
    question: "Sanat tarihinde Rönesans dönemi hangi ülkede başlamıştır?",
    options: ["Fransa", "İtalya", "İspanya", "Almanya"],
    correct: 1,
    category: CATEGORIES.GENERAL_CULTURE.name,
    difficulty: "Kolay"
  },
  {
    id: 1620,
    question: "Elektriği depolayan ve elektrik enerjisini kimyasal enerjiye çeviren cihaz nedir?",
    options: ["Direnç", "Kondansatör", "Pil (Batarya)", "Transistör"],
    correct: 2,
    category: CATEGORIES.GENERAL_CULTURE.name,
    difficulty: "Kolay"
  },
  {
    id: 1621,
    question: "Işığın boşluktaki hızı saniyede yaklaşık kaç kilometredir?",
    options: ["30.000 km", "300.000 km", "30.000.000 km", "3.000 km"],
    correct: 1,
    category: CATEGORIES.GENERAL_CULTURE.name,
    difficulty: "Kolay"
  },
  {
    id: 1622,
    question: "Brezilya'nın resmi dili nedir?",
    options: ["İspanyolca", "Portekizce", "Fransızca", "İtalyanca"],
    correct: 1,
    category: CATEGORIES.GENERAL_CULTURE.name,
    difficulty: "Kolay"
  },
  {
    id: 1623,
    question: "Çin Seddi hangi amaçla inşa edilmiştir?",
    options: ["Ticaret yolu olarak", "Dini törenler için", "Sınırları savunmak için", "Halkı birleştirmek için"],
    correct: 2,
    category: CATEGORIES.GENERAL_CULTURE.name,
    difficulty: "Kolay"
  },
  {
    id: 1624,
    question: "Bilinen en küçük kuş türü hangisidir?",
    options: ["Serçe", "Sinekkuşu", "Penguen", "Karga"],
    correct: 1,
    category: CATEGORIES.GENERAL_CULTURE.name,
    difficulty: "Orta"
  },
  {
    id: 1625,
    question: "1989'da yıkılan, Doğu ve Batı Almanya'yı ayıran sembolik yapı nedir?",
    options: ["Berlin Duvarı", "Soğuk Savaş Hattı", "Prag Duvarı", "Aachen Sınırı"],
    correct: 0,
    category: CATEGORIES.GENERAL_CULTURE.name,
    difficulty: "Kolay"
  },
  {
    id: 1626,
    question: "'Don Kişot' adlı ünlü eserin yazarı kimdir?",
    options: ["Victor Hugo", "Miguel de Cervantes", "Gabriel García Márquez", "Homer"],
    correct: 1,
    category: CATEGORIES.GENERAL_CULTURE.name,
    difficulty: "Kolay"
  },
  {
    id: 1627,
    question: "İnsan vücudundaki en büyük organ hangisidir?",
    options: ["Kalp", "Beyin", "Akciğer", "Deri"],
    correct: 3,
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
    options: ["Wolfgang Amadeus Mozart", "Ludwig van Beethoven", "Johann Sebastian Bach", "Frédéric Chopin"],
    correct: 1,
    category: CATEGORIES.GENERAL_CULTURE.name,
    difficulty: "Kolay"
  },
  {
    id: 1630,
    question: "Ekmek yapımında kullanılan ana mikroorganizma nedir?",
    options: ["Bakteri", "Yosun", "Maya", "Virüs"],
    correct: 2,
    category: CATEGORIES.GENERAL_CULTURE.name,
    difficulty: "Kolay"
  },
  {
    id: 1631,
    question: "Antik Mısır'da Güneş Tanrısı'nın adı nedir?",
    options: ["Osiris", "Ra", "Anubis", "İsis"],
    correct: 1,
    category: CATEGORIES.GENERAL_CULTURE.name,
    difficulty: "Orta"
  },
  {
    id: 1632,
    question: "İngiltere'nin ulusal sembollerinden biri olan 'Gül Savaşları' hangi hanedanlar arasında yaşanmıştır?",
    options: ["Stuart ve Tudor", "Windsor ve York", "Lancaster ve York", "Norman ve Plantagenet"],
    correct: 2,
    category: CATEGORIES.GENERAL_CULTURE.name,
    difficulty: "Zor"
  },
  {
    id: 1633,
    question: "Hangi filozof, 'Biliyorum ki hiçbir şey bilmiyorum' sözüyle tanınır?",
    options: ["Platon", "Aristoteles", "Sokrates", "Diogenes"],
    correct: 2,
    category: CATEGORIES.GENERAL_CULTURE.name,
    difficulty: "Kolay"
  },
  {
    id: 1634,
    question: "Kanın pıhtılaşmasını sağlayan vitamin hangisidir?",
    options: ["A Vitamini", "C Vitamini", "D Vitamini", "K Vitamini"],
    correct: 3,
    category: CATEGORIES.GENERAL_CULTURE.name,
    difficulty: "Orta"
  },
  {
    id: 1635,
    question: "Avustralya'nın başkenti hangi şehirdir?",
    options: ["Sydney", "Melbourne", "Canberra", "Brisbane"],
    correct: 2,
    category: CATEGORIES.GENERAL_CULTURE.name,
    difficulty: "Orta"
  },
  {
    id: 1636,
    question: "Birleşmiş Milletler (BM) Genel Merkezi hangi şehirdedir?",
    options: ["Cenevre", "Paris", "Londra", "New York"],
    correct: 3,
    category: CATEGORIES.GENERAL_CULTURE.name,
    difficulty: "Kolay"
  },
  {
    id: 1637,
    question: "Nobel ödülleri hangi alanda verilmez?",
    options: ["Edebiyat", "Fizik", "Matematik", "Barış"],
    correct: 2,
    category: CATEGORIES.GENERAL_CULTURE.name,
    difficulty: "Kolay"
  },
  {
    id: 1638,
    question: "Mona Lisa tablosu hangi müzede sergilenmektedir?",
    options: ["The Metropolitan Museum of Art", "British Museum", "Louvre Müzesi", "Hermitage Müzesi"],
    correct: 2,
    category: CATEGORIES.GENERAL_CULTURE.name,
    difficulty: "Kolay"
  },
  {
    id: 1639,
    question: "Amerikan Bağımsızlık Bildirgesi hangi yıl kabul edilmiştir?",
    options: ["1776", "1789", "1800", "1750"],
    correct: 0,
    category: CATEGORIES.GENERAL_CULTURE.name,
    difficulty: "Orta"
  },
  {
    id: 1640,
    question: "Ses hızından daha hızlı hareket eden cisimlere ne ad verilir?",
    options: ["Hipersonik", "Ultrasonik", "Supersonik", "Subsonik"],
    correct: 2,
    category: CATEGORIES.GENERAL_CULTURE.name,
    difficulty: "Orta"
  },
  {
    id: 1641,
    question: "Dünya'nın en yüksek zirvesi olan Everest Dağı hangi sıradağlarda yer alır?",
    options: ["And Dağları", "Kayalık Dağlar", "Himalayalar", "Alpler"],
    correct: 2,
    category: CATEGORIES.GENERAL_CULTURE.name,
    difficulty: "Kolay"
  },
  {
    id: 1642,
    question: "İlk kez 1896'da modern olarak düzenlenen Olimpiyat Oyunları hangi şehirde gerçekleşmiştir?",
    options: ["Londra", "Paris", "Atina", "Roma"],
    correct: 2,
    category: CATEGORIES.GENERAL_CULTURE.name,
    difficulty: "Kolay"
  },
  {
    id: 1643,
    question: "Türkiye'nin en uzun akarsuyu hangisidir?",
    options: ["Kızılırmak", "Fırat", "Dicle", "Sakarya"],
    correct: 0,
    category: CATEGORIES.GENERAL_CULTURE.name,
    difficulty: "Orta"
  },
  {
    id: 1644,
    question: "'Yüzüklerin Efendisi' serisinin yazarı kimdir?",
    options: ["C.S. Lewis", "J.R.R. Tolkien", "J.K. Rowling", "George R.R. Martin"],
    correct: 1,
    category: CATEGORIES.GENERAL_CULTURE.name,
    difficulty: "Kolay"
  },
  {
    id: 1645,
    question: "Hangi element 'Hayat Ağacı' olarak adlandırılır ve tüm organik bileşiklerin temelidir?",
    options: ["Oksijen", "Hidrojen", "Karbon", "Azot"],
    correct: 2,
    category: CATEGORIES.GENERAL_CULTURE.name,
    difficulty: "Kolay"
  },
  {
    id: 1646,
    question: "Leonardo da Vinci'nin ünlü 'Son Akşam Yemeği' tablosu nerede bulunmaktadır?",
    options: ["Floransa", "Roma", "Venedik", "Milano"],
    correct: 3,
    category: CATEGORIES.GENERAL_CULTURE.name,
    difficulty: "Orta"
  },
  {
    id: 1647,
    question: "Rusya'nın başkenti neresidir?",
    options: ["St. Petersburg", "Kazan", "Moskova", "Kiev"],
    correct: 2,
    category: CATEGORIES.GENERAL_CULTURE.name,
    difficulty: "Kolay"
  },
  {
    id: 1648,
    question: "Dünya'nın uydusu olan Ay, Dünya etrafındaki bir turu yaklaşık kaç günde tamamlar?",
    options: ["7 gün", "27 gün", "30 gün", "365 gün"],
    correct: 1,
    category: CATEGORIES.GENERAL_CULTURE.name,
    difficulty: "Kolay"
  },
  {
    id: 1649,
    question: "Bir müzik parçasını belirli bir tempoda tutmaya yarayan alet nedir?",
    options: ["Tuning Fork", "Akort Aleti", "Metronom", "Piyano"],
    correct: 2,
    category: CATEGORIES.GENERAL_CULTURE.name,
    difficulty: "Kolay"
  },
  {
    id: 1650,
    question: "Fransız İhtilali hangi yılda gerçekleşmiştir?",
    options: ["1776", "1789", "1815", "1848"],
    correct: 1,
    category: CATEGORIES.GENERAL_CULTURE.name,
    difficulty: "Kolay"
  },
  {
    id: 1651,
    question: "Dünya'nın en büyük çölü (sıcak çöl) hangisidir?",
    options: ["Gobi Çölü", "Kalahari Çölü", "Sahra Çölü", "Arabistan Çölü"],
    correct: 2,
    category: CATEGORIES.GENERAL_CULTURE.name,
    difficulty: "Kolay"
  },
  {
    id: 1652,
    question: "Gezegenlerin Güneş etrafında elips yörüngelerde dolandığını keşfeden bilim insanı kimdir?",
    options: ["Nicolaus Copernicus", "Johannes Kepler", "Galileo Galilei", "Edwin Hubble"],
    correct: 1,
    category: CATEGORIES.GENERAL_CULTURE.name,
    difficulty: "Orta"
  },
  {
    id: 1653,
    question: "Suudi Arabistan'ın resmi para birimi nedir?",
    options: ["Dinar", "Riyal", "Dirhem", "Lira"],
    correct: 1,
    category: CATEGORIES.GENERAL_CULTURE.name,
    difficulty: "Orta"
  },
  {
    id: 1654,
    question: "Mitolojide Aşk Tanrıçası kimdir?",
    options: ["Hera", "Artemis", "Afrodit", "Athena"],
    correct: 2,
    category: CATEGORIES.GENERAL_CULTURE.name,
    difficulty: "Kolay"
  },
  {
    id: 1655,
    question: "İspanyol ressam Pablo Picasso'nun en ünlü eserlerinden biri olan savaş karşıtı tablo nedir?",
    options: ["Guernica", "Avignonlu Kızlar", "Yaşlı Gitarist", "Dora Maar'ın Portresi"],
    correct: 0,
    category: CATEGORIES.GENERAL_CULTURE.name,
    difficulty: "Orta"
  },
  {
    id: 1656,
    question: "Atom bombasını geliştiren 'Manhattan Projesi'nin bilimsel lideri kimdir?",
    options: ["Albert Einstein", "Robert Oppenheimer", "Enrico Fermi", "Niels Bohr"],
    correct: 1,
    category: CATEGORIES.GENERAL_CULTURE.name,
    difficulty: "Zor"
  },
  {
    id: 1657,
    question: "Hangi Türk edebiyatçısı 'İnce Memed' romanıyla tanınır?",
    options: ["Orhan Pamuk", "Yaşar Kemal", "Nazım Hikmet", "Halide Edip Adıvar"],
    correct: 1,
    category: CATEGORIES.GENERAL_CULTURE.name,
    difficulty: "Kolay"
  },
  {
    id: 1658,
    question: "Gözün renkli kısmı (göze rengini veren) nedir?",
    options: ["Kornea", "Retina", "İris", "Gözbebeği"],
    correct: 2,
    category: CATEGORIES.GENERAL_CULTURE.name,
    difficulty: "Kolay"
  },
  {
    id: 1659,
    question: "Buhar makinesini geliştiren İskoç mucit kimdir?",
    options: ["Thomas Edison", "Nikola Tesla", "James Watt", "Alexander Graham Bell"],
    correct: 2,
    category: CATEGORIES.GENERAL_CULTURE.name,
    difficulty: "Kolay"
  },
  {
    id: 1660,
    question: "1945'te II. Dünya Savaşı'nı bitiren, Japonya'ya atılan atom bombalarının atıldığı şehirler hangileridir?",
    options: ["Tokyo ve Kyoto", "Osaka ve Nagoya", "Hiroşima ve Nagazaki", "Yokohama ve Kobe"],
    correct: 2,
    category: CATEGORIES.GENERAL_CULTURE.name,
    difficulty: "Kolay"
  },
  {
    id: 1661,
    question: "Tarihte ilk kez 'Kağıt Para'yı kullanan uygarlık hangisidir?",
    options: ["Lidya", "Roma", "Çin", "Bizans"],
    correct: 2,
    category: CATEGORIES.GENERAL_CULTURE.name,
    difficulty: "Orta"
  },
  {
    id: 1662,
    question: "Türkiye'nin en büyük gölü hangi ildedir?",
    options: ["Tuz Gölü (Konya)", "Beyşehir Gölü (Konya)", "Van Gölü (Van)", "Eğirdir Gölü (Isparta)"],
    correct: 2,
    category: CATEGORIES.GENERAL_CULTURE.name,
    difficulty: "Kolay"
  },
  {
    id: 1663,
    question: "Ünlü 'Kaplumbağa Terbiyecisi' tablosu hangi Türk ressama aittir?",
    options: ["Şeker Ahmet Paşa", "Osman Hamdi Bey", "İbrahim Çallı", "Fikret Mualla"],
    correct: 1,
    category: CATEGORIES.GENERAL_CULTURE.name,
    difficulty: "Kolay"
  },
  {
    id: 1664,
    question: "Su, deniz seviyesinde kaç santigrat derecede donar?",
    options: ["-10°C", "0°C", "10°C", "20°C"],
    correct: 1,
    category: CATEGORIES.GENERAL_CULTURE.name,
    difficulty: "Kolay"
  },
  {
    id: 1665,
    question: "Hindistan'ın başkenti hangi şehirdir?",
    options: ["Mumbai", "Kalküta", "Yeni Delhi", "Bangalore"],
    correct: 2,
    category: CATEGORIES.GENERAL_CULTURE.name,
    difficulty: "Kolay"
  },
  {
    id: 1666,
    question: "Hangi elementin simgesi 'Au'dur?",
    options: ["Gümüş", "Altın", "Alüminyum", "Cıva"],
    correct: 1,
    category: CATEGORIES.GENERAL_CULTURE.name,
    difficulty: "Kolay"
  },
  {
    id: 1667,
    question: "Shakespeare'in 'Hamlet' oyununun geçtiği ülke neresidir?",
    options: ["İngiltere", "Danimarka", "İtalya", "İskoçya"],
    correct: 1,
    category: CATEGORIES.GENERAL_CULTURE.name,
    difficulty: "Zor"
  },
  {
    id: 1668,
    question: "Dünya'nın en kalabalık ülkesi (2024 itibarıyla) hangisidir?",
    options: ["Çin", "Amerika Birleşik Devletleri", "Hindistan", "Endonezya"],
    correct: 2,
    category: CATEGORIES.GENERAL_CULTURE.name,
    difficulty: "Kolay"
  },
  {
    id: 1669,
    question: "Meksika'nın resmi dili nedir?",
    options: ["İngilizce", "İspanyolca", "Portekizce", "Fransızca"],
    correct: 1,
    category: CATEGORIES.GENERAL_CULTURE.name,
    difficulty: "Kolay"
  },
  {
    id: 1670,
    question: "Türkiye'nin en yüksek dağı hangisidir?",
    options: ["Süphan Dağı", "Erciyes Dağı", "Ağrı Dağı", "Kaçkar Dağı"],
    correct: 2,
    category: CATEGORIES.GENERAL_CULTURE.name,
    difficulty: "Kolay"
  },
  {
    id: 1671,
    question: "İlk çağlarda Anadolu'da yaşamış ve parayı icat eden uygarlık hangisidir?",
    options: ["Hititler", "Frigler", "Lidyalılar", "Urartular"],
    correct: 2,
    category: CATEGORIES.GENERAL_CULTURE.name,
    difficulty: "Kolay"
  },
  {
    id: 1672,
    question: "Roma İmparatorluğu'nun başkenti, Doğu ve Batı olarak ikiye ayrıldıktan sonra Doğu Roma'nın (Bizans) başkenti neresi olmuştur?",
    options: ["İzmir", "Atina", "Konstantinopolis (İstanbul)", "İskenderiye"],
    correct: 2,
    category: CATEGORIES.GENERAL_CULTURE.name,
    difficulty: "Kolay"
  },
  {
    id: 1673,
    question: "Hangi yazar 'Küçük Prens' adlı eseriyle ünlüdür?",
    options: ["Antoine de Saint-Exupéry", "Albert Camus", "Jean-Paul Sartre", "Victor Hugo"],
    correct: 0,
    category: CATEGORIES.GENERAL_CULTURE.name,
    difficulty: "Kolay"
  },
  {
    id: 1674,
    question: "Bir maddenin katı halden doğrudan gaz hale geçmesine ne ad verilir?",
    options: ["Erime", "Yoğuşma", "Süblimleşme", "Buharlaşma"],
    correct: 2,
    category: CATEGORIES.GENERAL_CULTURE.name,
    difficulty: "Orta"
  },
  {
    id: 1675,
    question: "Uluslararası standart saat dilimlerini belirleyen ana meridyen hangisidir?",
    options: ["Ekvator", "Yengeç Dönencesi", "Greenwich Meridyeni", "Tarih Değiştirme Çizgisi"],
    correct: 2,
    category: CATEGORIES.GENERAL_CULTURE.name,
    difficulty: "Kolay"
  },
  {
    id: 1676,
    question: "Hangi elementin atom numarası (proton sayısı) 1'dir?",
    options: ["Oksijen", "Helyum", "Karbon", "Hidrojen"],
    correct: 3,
    category: CATEGORIES.GENERAL_CULTURE.name,
    difficulty: "Kolay"
  },
  {
    id: 1677,
    question: "1923 yılında ilan edilen Türkiye Cumhuriyeti'nin ilk başbakanı kimdir?",
    options: ["İsmet İnönü", "Fevzi Çakmak", "Kazım Karabekir", "Rauf Orbay"],
    correct: 0,
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
    options: ["14 saniye", "20 saniye", "24 saniye", "30 saniye"],
    correct: 2,
    category: CATEGORIES.GENERAL_CULTURE.name,
    difficulty: "Orta"
  },
  {
    id: 1680,
    question: "Vücudumuzdaki en güçlü kas hangisidir?",
    options: ["Biceps (Pazu)", "Kalp Kası", "Çiğneme Kası (Masseter)", "Dört Başlı Kas (Quadriceps)"],
    correct: 2,
    category: CATEGORIES.GENERAL_CULTURE.name,
    difficulty: "Zor"
  },
  {
    id: 1681,
    question: "İngiliz Fizikçi Isaac Newton, yerçekimi yasasını hangi meyve sayesinde keşfettiği rivayet edilir?",
    options: ["Portakal", "Elma", "Armut", "Kiraz"],
    correct: 1,
    category: CATEGORIES.GENERAL_CULTURE.name,
    difficulty: "Kolay"
  },
  {
    id: 1682,
    question: "Avrupa Birliği (AB) hangi antlaşmayla kurulmuştur?",
    options: ["Paris Antlaşması", "Roma Antlaşması", "Maastricht Antlaşması", "Lizbon Antlaşması"],
    correct: 2,
    category: CATEGORIES.GENERAL_CULTURE.name,
    difficulty: "Zor"
  },
  {
    id: 1683,
    question: "Dört Element (Toprak, Su, Hava, Ateş) kavramını ortaya atan Antik Yunan filozofu kimdir?",
    options: ["Tales", "Herakleitos", "Empedokles", "Demokritos"],
    correct: 2,
    category: CATEGORIES.GENERAL_CULTURE.name,
    difficulty: "Zor"
  },
  {
    id: 1684,
    question: "Türk sinemasının en önemli karakterlerinden biri olan 'Eşkiya' filminin başrol oyuncusu kimdir?",
    options: ["Kemal Sunal", "Şener Şen", "Cem Yılmaz", "Haluk Bilginer"],
    correct: 1,
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
    options: ["İran", "Suriye", "Irak", "Gürcistan"],
    correct: 1,
    category: CATEGORIES.GENERAL_CULTURE.name,
    difficulty: "Kolay"
  },
  {
    id: 1687,
    question: "Yavuz Sultan Selim döneminde Osmanlı İmparatorluğu'na katılan, Mısır'daki kutsal emanetlerin getirildiği seferin adı nedir?",
    options: ["Belgrad Seferi", "Çaldıran Savaşı", "Mercidabık ve Ridaniye Savaşları", "Preveze Deniz Savaşı"],
    correct: 2,
    category: CATEGORIES.GENERAL_CULTURE.name,
    difficulty: "Orta"
  },
  {
    id: 1688,
    question: "Müzikte, bir eserin ana teması olan ve melodinin tekrarlandığı bölüme ne ad verilir?",
    options: ["Solo", "Koro", "Nakarat (Refrain)", "Prelüd"],
    correct: 2,
    category: CATEGORIES.GENERAL_CULTURE.name,
    difficulty: "Kolay"
  },
  {
    id: 1689,
    question: "Kanada ve ABD arasında doğal sınır oluşturan, dünyanın en ünlü şelalelerinden biri hangisidir?",
    options: ["Victoria Şelalesi", "Angel Şelalesi", "Niagara Şelalesi", "Iguazu Şelalesi"],
    correct: 2,
    category: CATEGORIES.GENERAL_CULTURE.name,
    difficulty: "Kolay"
  },
  {
    id: 1690,
    question: "İletişim, eğitim ve haberleşme amaçlı fırlatılan ilk yapay uydu nedir?",
    options: ["Hubble", "Apollo", "Sputnik 1", "Explorer 1"],
    correct: 2,
    category: CATEGORIES.GENERAL_CULTURE.name,
    difficulty: "Orta"
  },
  {
    id: 1691,
    question: "Tarihte bilinen ilk kadın hükümdarlardan biri olan, Mısır firavunu kimdir?",
    options: ["Kleopatra", "Nefertiti", "Hatshepsut", "Nefertari"],
    correct: 2,
    category: CATEGORIES.GENERAL_CULTURE.name,
    difficulty: "Zor"
  },
  {
    id: 1692,
    question: "Türkiye'nin coğrafi olarak hem Asya hem de Avrupa kıtasında toprağı olan tek şehri hangisidir?",
    options: ["Çanakkale", "Edirne", "İstanbul", "Tekirdağ"],
    correct: 2,
    category: CATEGORIES.GENERAL_CULTURE.name,
    difficulty: "Kolay"
  },
  {
    id: 1693,
    question: "Basketbol tarihinin en çok şampiyonluk kazanan takımı (NBA) hangisidir?",
    options: ["Chicago Bulls", "Los Angeles Lakers", "Boston Celtics", "Golden State Warriors"],
    correct: 2,
    category: CATEGORIES.GENERAL_CULTURE.name,
    difficulty: "Orta"
  },
  {
    id: 1694,
    question: "'Bir insanın değeri, başkaları için ne kadar değerli olduğuyla ölçülür' sözü kime aittir?",
    options: ["Albert Einstein", "Mahatma Gandhi", "Martin Luther King Jr.", "Malcolm X"],
    correct: 0,
    category: CATEGORIES.GENERAL_CULTURE.name,
    difficulty: "Zor"
  },
  {
    id: 1695,
    question: "Güney Kutbu'nda bulunan kıta hangisidir?",
    options: ["Avustralya", "Afrika", "Antarktika", "Grönland"],
    correct: 2,
    category: CATEGORIES.GENERAL_CULTURE.name,
    difficulty: "Kolay"
  },
  {
    id: 1696,
    question: "Ünlü 'Kızıl Kule' hangi İspanyol şehrinde yer alır?",
    options: ["Madrid", "Barselona", "Sevilla", "Granada"],
    correct: 3,
    category: CATEGORIES.GENERAL_CULTURE.name,
    difficulty: "Orta"
  },
  {
    id: 1697,
    question: "Avustralya'nın yerli halkına ne ad verilir?",
    options: ["Kızılderililer", "Maoriler", "Aborjinler", "İnuitler"],
    correct: 2,
    category: CATEGORIES.GENERAL_CULTURE.name,
    difficulty: "Kolay"
  },
  {
    id: 1698,
    question: "Hangi element hem en hafif hem de evrende en bol bulunan elementtir?",
    options: ["Helyum", "Oksijen", "Hidrojen", "Lityum"],
    correct: 2,
    category: CATEGORIES.GENERAL_CULTURE.name,
    difficulty: "Kolay"
  },
  {
    id: 1699,
    question: "20. yüzyılın en etkili felsefi akımlarından biri olan 'Varoluşçuluk'un (Existentialism) öncülerinden kabul edilen yazar/filozof kimdir?",
    options: ["Karl Marx", "Friedrich Nietzsche", "Sigmund Freud", "Albert Camus"],
    correct: 1,
    category: CATEGORIES.GENERAL_CULTURE.name,
    difficulty: "Zor"
  },
  {
    id: 1700,
    question: "I. Dünya Savaşı'nın başlangıç sebebi olarak kabul edilen suikast nerede gerçekleşmiştir?",
    options: ["Viyana", "Saraybosna", "İstanbul", "Berlin"],
    correct: 1,
    category: CATEGORIES.GENERAL_CULTURE.name,
    difficulty: "Kolay"
  },
  {
    id: 1701,
    question: "Modern Olimpiyat Oyunları hangi şehirde ve hangi yılda yeniden başlatılmıştır?",
    options: ["Paris, 1900", "Londra, 1908", "Atina, 1896", "Berlin, 1936"],
    correct: 2,
    category: "Genel Kültür",
    difficulty: "Kolay"
  },
  {
    id: 1702,
    question: "Birleşmiş Milletler (BM) Genel Merkezi hangi şehirde bulunmaktadır?",
    options: ["Cenevre", "Lahey", "New York", "Londra"],
    correct: 2,
    category: "Genel Kültür",
    difficulty: "Kolay"
  },
  {
    id: 1703,
    question: "Leonardo da Vinci'nin ünlü tablosu 'Mona Lisa', hangi sanat akımının en önemli eserlerinden biri olarak kabul edilir?",
    options: ["Barok", "İzlenimcilik (Empresyonizm)", "Rönesans", "Gotik"],
    correct: 2,
    category: "Genel Kültür",
    difficulty: "Kolay"
  },
  {
    id: 1704,
    question: "Atom teorisini geliştiren ve elementlerin periyodik tablosunu oluşturmaya büyük katkı sağlayan Rus kimyager kimdir?",
    options: ["Marie Curie", "Albert Einstein", "Dimitri Mendeleyev", "Isaac Newton"],
    correct: 2,
    category: "Genel Kültür",
    difficulty: "Kolay"
  },
  {
    id: 1705,
    question: "Afrika kıtasının en yüksek dağı olan ve Tanzanya'da bulunan volkanik dağ nedir?",
    options: ["Atlas Dağları", "Kilimanjaro Dağı", "Kenya Dağı", "Ras Dejen"],
    correct: 1,
    category: "Genel Kültür",
    difficulty: "Kolay"
  },
  {
    id: 1706,
    question: "Roma İmparatorluğu'nun ikiye ayrılmasından (Doğu ve Batı) sonra Doğu Roma İmparatorluğu'nun başkenti hangi şehir olmuştur?",
    options: ["Roma", "İskenderiye", "Konstantinopolis (İstanbul)", "Antakya"],
    correct: 2,
    category: "Genel Kültür",
    difficulty: "Kolay"
  },
  {
    id: 1707,
    question: "Nobel Edebiyat Ödülü'nü kazanan ve 'Yüzyıllık Yalnızlık' adlı eseriyle tanınan Kolombiyalı yazar kimdir?",
    options: ["Pablo Neruda", "Jorge Luis Borges", "Gabriel García Márquez", "Octavio Paz"],
    correct: 2,
    category: "Genel Kültür",
    difficulty: "Kolay"
  },
  {
    id: 1708,
    question: "İnsan vücudunda kanın pompalanmasından sorumlu olan hayati organ nedir?",
    options: ["Akciğer", "Karaciğer", "Kalp", "Böbrek"],
    correct: 2,
    category: "Genel Kültür",
    difficulty: "Kolay"
  },
  {
    id: 1709,
    question: "Antik Yunan'da demokrasi, felsefe ve sanatın merkezi olan şehir devleti hangisidir?",
    options: ["Sparta", "Thebes", "Atina", "Korint"],
    correct: 2,
    category: "Genel Kültür",
    difficulty: "Kolay"
  },
  {
    id: 1710,
    question: "Bir cismin hareketine karşı koyan, yüzeyler arasında oluşan kuvvete ne ad verilir?",
    options: ["Yer Çekimi", "Manyetik Kuvvet", "Sürtünme Kuvveti", "Merkezkaç Kuvveti"],
    correct: 2,
    category: "Genel Kültür",
    difficulty: "Kolay"
  },
  {
    id: 1711,
    question: "Bir eserin veya fikrin yasal olarak sahibine ait olduğunu gösteren hakka ne ad verilir?",
    options: ["Patent", "Ticari Marka", "Telif Hakkı (Copyright)", "Fikri Mülkiyet"],
    correct: 2,
    category: "Genel Kültür",
    difficulty: "Kolay"
  },
  {
    id: 1712,
    question: "Gezegenleri, yıldızları ve diğer gök cisimlerini inceleyen bilim dalı nedir?",
    options: ["Jeoloji", "Meteoroloji", "Astronomi", "Biyoloji"],
    correct: 2,
    category: "Genel Kültür",
    difficulty: "Kolay"
  },
  {
    id: 1713,
    question: "Türk edebiyatında 'Kürk Mantolu Madonna' ve 'İçimizdeki Şeytan' gibi eserleriyle tanınan yazar kimdir?",
    options: ["Orhan Pamuk", "Yaşar Kemal", "Sabahattin Ali", "Halide Edip Adıvar"],
    correct: 2,
    category: "Genel Kültür",
    difficulty: "Kolay"
  },
  {
    id: 1714,
    question: "Dünyanın en uzun nehrinin adı nedir?",
    options: ["Amazon Nehri", "Mississippi Nehri", "Nil Nehri", "Yangtze Nehri"],
    correct: 2,
    category: "Genel Kültür",
    difficulty: "Kolay"
  },
  {
    id: 1715,
    question: "Müzikte, bir şarkının her bir ölçüsünde kaç vuruş olduğunu belirten terim nedir?",
    options: ["Nota", "Tempo", "Ölçü İşareti (Metre)", "Armoni"],
    correct: 2,
    category: "Genel Kültür",
    difficulty: "Kolay"
  },
  {
    id: 1716,
    question: "I. Dünya Savaşı'nın bitiş tarihi hangi gündür?",
    options: ["28 Haziran 1914", "6 Nisan 1917", "11 Kasım 1918", "1 Eylül 1939"],
    correct: 2,
    category: "Genel Kültür",
    difficulty: "Kolay"
  },
  {
    id: 1717,
    question: "Gezegenleri Güneş etrafında elips şeklindeki yörüngelerde hareket ettiğini ispatlayan bilim insanı kimdir?",
    options: ["Nicolaus Copernicus", "Galileo Galilei", "Johannes Kepler", "Isaac Newton"],
    correct: 2,
    category: "Genel Kültür",
    difficulty: "Orta"
  },
  {
    id: 1718,
    question: "Mezopotamya'da, Fırat ve Dicle nehirleri arasında kurulan en eski medeniyetlerden biri hangisidir?",
    options: ["Mısır Medeniyeti", "Maya Uygarlığı", "Sümer Uygarlığı", "Hititler"],
    correct: 2,
    category: "Genel Kültür",
    difficulty: "Kolay"
  },
  {
    id: 1719,
    question: "Bir ülkenin yasal olarak kabul edilmiş en yüksek hukuk kuralı ve yönetim biçimini belirleyen belge nedir?",
    options: ["Kanun", "Yönetmelik", "Anayasa", "Tebliğ"],
    correct: 2,
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
    options: ["Apollo", "Zeus", "Narkissos (Narsist)", "Orpheus"],
    correct: 2,
    category: "Genel Kültür",
    difficulty: "Kolay"
  },
  {
    id: 1722,
    question: "Vücudun temel enerji kaynağı olarak kullanılan organik bileşik sınıfı nedir?",
    options: ["Proteinler", "Yağlar", "Karbonhidratlar", "Vitaminler"],
    correct: 2,
    category: "Genel Kültür",
    difficulty: "Kolay"
  },
  {
    id: 1723,
    question: "İspanyol ressam Pablo Picasso'nun, İspanya İç Savaşı'nı anlatan ve savaşın dehşetini tasvir eden ünlü tablosu nedir?",
    options: ["Yalın Ayaklar", "Avignonlu Kızlar", "Guernica", "Yaşlı Gitarist"],
    correct: 2,
    category: "Genel Kültür",
    difficulty: "Kolay"
  },
  {
    id: 1724,
    question: "Hangi element, periyodik tablonun 1. sırasında yer alır ve evrende en bol bulunan elementtir?",
    options: ["Oksijen", "Helyum", "Hidrojen", "Karbon"],
    correct: 2,
    category: "Genel Kültür",
    difficulty: "Kolay"
  },
  {
    id: 1725,
    question: "Bir ülkenin ithalat ve ihracat dengesini gösteren ekonomik gösterge nedir?",
    options: ["Enflasyon", "Büyüme Hızı", "Dış Ticaret Dengesi", "Gayri Safi Milli Hasıla"],
    correct: 2,
    category: "Genel Kültür",
    difficulty: "Orta"
  },
  {
    id: 1726,
    question: "Shakespeare'in ünlü trajedisinde, Danimarka Prensi olan ve amcasının babasını öldürdüğünü öğrenen karakter kimdir?",
    options: ["Romeo", "Macbeth", "Hamlet", "Othello"],
    correct: 2,
    category: "Genel Kültür",
    difficulty: "Kolay"
  },
  {
    id: 1727,
    question: "Müzikte, sesi değiştirmeden notaların yüksekliğini yarım ton inceltmeye yarayan işaret nedir?",
    options: ["Doğal (Natural)", "Diyez (Sharp)", "Bemol (Flat)", "Çift Diyez"],
    correct: 2,
    category: "Genel Kültür",
    difficulty: "Orta"
  },
  {
    id: 1728,
    question: "Bir kültürün kendine özgü sözlü geleneklerini, hikayelerini ve inanışlarını inceleyen bilim dalı nedir?",
    options: ["Arkeoloji", "Sosyoloji", "Folklor", "Psikoloji"],
    correct: 2,
    category: "Genel Kültür",
    difficulty: "Kolay"
  },
  {
    id: 1729,
    question: "İnsan vücudundaki en büyük organ hangisidir?",
    options: ["Kalp", "Beyin", "Deri (Cilt)", "Karaciğer"],
    correct: 2,
    category: "Genel Kültür",
    difficulty: "Kolay"
  },
  {
    id: 1730,
    question: "Modern Türk tiyatrosunun kurucularından kabul edilen ve 'Vatan Yahut Silistre' gibi eserleriyle tanınan yazar kimdir?",
    options: ["Tevfik Fikret", "Yahya Kemal Beyatlı", "Namık Kemal", "Recaizade Mahmut Ekrem"],
    correct: 2,
    category: "Genel Kültür",
    difficulty: "Kolay"
  },
  {
    id: 1731,
    question: "Dünyanın en büyük okyanusu hangisidir?",
    options: ["Atlas Okyanusu", "Hint Okyanusu", "Pasifik Okyanusu", "Arktik Okyanusu"],
    correct: 2,
    category: "Genel Kültür",
    difficulty: "Kolay"
  },
  {
    id: 1732,
    question: "Işığın hızını ölçen ve İzafiyet Teorisi'ni geliştiren bilim insanı kimdir?",
    options: ["Max Planck", "Niels Bohr", "Albert Einstein", "Stephen Hawking"],
    correct: 2,
    category: "Genel Kültür",
    difficulty: "Kolay"
  },
  {
    id: 1733,
    question: "1989 yılında yıkılan ve Soğuk Savaş'ın sembolü haline gelen duvar nerede bulunuyordu?",
    options: ["Kore", "Çin", "Berlin", "Kıbrıs"],
    correct: 2,
    category: "Genel Kültür",
    difficulty: "Kolay"
  },
  {
    id: 1734,
    question: "Bir maddenin katı, sıvı veya gaz halleri arasındaki dönüşümlere ne ad verilir?",
    options: ["Kimyasal Tepkime", "Nükleer Reaksiyon", "Faz Değişimi", "Yoğunluk Değişimi"],
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
    options: ["Ra", "Anubis", "Osiris", "Horus"],
    correct: 2,
    category: "Genel Kültür",
    difficulty: "Orta"
  },
  {
    id: 1737,
    question: "Bir toplumun düşünce yapısını, değer yargılarını ve davranış kalıplarını inceleyen bilim dalı nedir?",
    options: ["Antropoloji", "Ekonomi", "Sosyoloji", "Coğrafya"],
    correct: 2,
    category: "Genel Kültür",
    difficulty: "Kolay"
  },
  {
    id: 1738,
    question: "İtalya'da bulunan ve 79 yılında patlayarak Pompeii şehrini yok eden yanardağ nedir?",
    options: ["Etna", "Stromboli", "Vezüv Yanardağı", "Fuji Dağı"],
    correct: 2,
    category: "Genel Kültür",
    difficulty: "Kolay"
  },
  {
    id: 1739,
    question: "Türkiye'nin en batı ucunda bulunan ve aynı zamanda Ege Denizi'ne en yakın nokta olan ilimiz hangisidir?",
    options: ["Çanakkale", "İzmir", "Edirne", "Muğla"],
    correct: 2,
    category: "Genel Kültür",
    difficulty: "Orta"
  },
  {
    id: 1740,
    question: "Matematikte, çevresi ile çapı arasındaki oran olan ve yaklaşık $3.14159$ değerine sahip sabit sayı nedir?",
    options: ["Euler Sayısı (e)", "Altın Oran ($\phi$)", "Pi Sayısı ($\pi$)", "Faktöriyel"],
    correct: 2,
    category: "Genel Kültür",
    difficulty: "Kolay"
  },
  {
    id: 1741,
    question: "Dünya üzerindeki en büyük mercan resif sistemi nerede bulunmaktadır?",
    options: ["Karayipler", "Maldivler", "Büyük Set Resifi (Avustralya)", "Kızıldeniz"],
    correct: 2,
    category: "Genel Kültür",
    difficulty: "Kolay"
  },
  {
    id: 1742,
    question: "Mikroorganizmaları inceleyen bilim dalı nedir?",
    options: ["Zooloji", "Botanik", "Mikrobiyoloji", "Paleontoloji"],
    correct: 2,
    category: "Genel Kültür",
    difficulty: "Kolay"
  },
  {
    id: 1743,
    question: "Fransız Devrimi hangi yılda başlamıştır?",
    options: ["1776", "1789", "1848", "1917"],
    correct: 1,
    category: "Genel Kültür",
    difficulty: "Kolay"
  },
  {
    id: 1744,
    question: "Amerikalı yazar Mark Twain'in, Tom Sawyer ve Huckleberry Finn karakterlerini yarattığı ünlü romanı hangisidir?",
    options: ["Moby Dick", "Büyük Umutlar", "Mississippi'de Hayat", "Tom Sawyer'ın Maceraları"],
    correct: 3,
    category: "Genel Kültür",
    difficulty: "Kolay"
  },
  {
    id: 1745,
    question: "Bir devletin egemenlik haklarını ve bağımsızlığını sembolize eden işaret nedir?",
    options: ["Sınır Hattı", "Ulusal Marş", "Bayrak", "Para Birimi"],
    correct: 2,
    category: "Genel Kültür",
    difficulty: "Kolay"
  },
  {
    id: 1746,
    question: "Hint Okyanusu'nun kuzeyinde oluşan ve şiddetli rüzgar ve yağmurlarla karakterize edilen hava olayı nedir?",
    options: ["Tayfun", "Tornado", "Muson (Mevsim Rüzgarları)", "Kasırga"],
    correct: 2,
    category: "Genel Kültür",
    difficulty: "Orta"
  },
  {
    id: 1747,
    question: "Müzikte, bir orkestrayı yöneten ve eserin yorumlanmasından sorumlu olan kişi kimdir?",
    options: ["Solist", "Konser Şefi", "Orkestra Şefi (Kondüktör)", "Besteci"],
    correct: 2,
    category: "Genel Kültür",
    difficulty: "Kolay"
  },
  {
    id: 1748,
    question: "Canlıların kalıtsal özelliklerini ve genetik varyasyonlarını inceleyen bilim dalı nedir?",
    options: ["Ekoloji", "Fizyoloji", "Genetik", "Anatomi"],
    correct: 2,
    category: "Genel Kültür",
    difficulty: "Kolay"
  },
  {
    id: 1749,
    question: "Türkiye'de 'Deli Dumrul', 'Bamsı Beyrek' gibi hikayeleri içeren, Türk destanları külliyatı nedir?",
    options: ["Manas Destanı", "Ergenekon Destanı", "Dede Korkut Hikayeleri", "Oğuz Kağan Destanı"],
    correct: 2,
    category: "Genel Kültür",
    difficulty: "Kolay"
  },
  {
    id: 1750,
    question: "1969 yılında Ay'a ilk ayak basan astronot kimdir?",
    options: ["Buzz Aldrin", "Michael Collins", "Neil Armstrong", "Yuri Gagarin"],
    correct: 2,
    category: "Genel Kültür",
    difficulty: "Kolay"
  },
  {
    id: 1751,
    question: "Uluslararası standartlara göre, bir ülkenin para biriminin değerinin başka bir para birimi cinsinden ifadesine ne ad verilir?",
    options: ["Enflasyon", "Deflasyon", "Döviz Kuru", "Faiz Oranı"],
    correct: 2,
    category: "Genel Kültür",
    difficulty: "Kolay"
  },
  {
    id: 1752,
    question: "İnsanlığın ilk kez tekerleği kullanmaya başladığı kabul edilen tarihsel dönem hangisidir?",
    options: ["Paleolitik Çağ", "Mezolitik Çağ", "Neolitik Çağ (Yeni Taş Çağı)", "Demir Çağı"],
    correct: 2,
    category: "Genel Kültür",
    difficulty: "Orta"
  },
  {
    id: 1753,
    question: "İspanya ve Portekiz'in bulunduğu yarımadanın adı nedir?",
    options: ["Balkan Yarımadası", "İskandinav Yarımadası", "İber Yarımadası", "Anadolu Yarımadası"],
    correct: 2,
    category: "Genel Kültür",
    difficulty: "Kolay"
  },
  {
    id: 1754,
    question: "Resimde, üç boyutlu nesnelerin iki boyutlu yüzeye derinlik hissi verilerek aktarılması tekniği nedir?",
    options: ["Kolaj", "Füzyon", "Perspektif", "Mozaik"],
    correct: 2,
    category: "Genel Kültür",
    difficulty: "Kolay"
  },
  {
    id: 1755,
    question: "İnsan vücudunda kemikleri birbirine bağlayan, sert ve esnek dokulara ne ad verilir?",
    options: ["Kas", "Sinir", "Ligament (Bağ)", "Tendon"],
    correct: 2,
    category: "Genel Kültür",
    difficulty: "Orta"
  },
  {
    id: 1756,
    question: "İslamiyet'te, namaz kılarken Kabe'ye dönülen yöne ne ad verilir?",
    options: ["Kıyam", "Rüku", "Kıble", "Secde"],
    correct: 2,
    category: "Genel Kültür",
    difficulty: "Kolay"
  },
  {
    id: 1757,
    question: "Avustralya'nın başkenti hangi şehirdir?",
    options: ["Sydney", "Melbourne", "Canberra", "Brisbane"],
    correct: 2,
    category: "Genel Kültür",
    difficulty: "Kolay"
  },
  {
    id: 1758,
    question: "Türk Tarihinde, 'Kanuni' olarak bilinen ve Osmanlı İmparatorluğu'nun en uzun süre tahtta kalan padişahı kimdir?",
    options: ["Fatih Sultan Mehmet", "Yavuz Sultan Selim", "Süleyman I (Kanuni Sultan Süleyman)", "II. Bayezid"],
    correct: 2,
    category: "Genel Kültür",
    difficulty: "Kolay"
  },
  {
    id: 1759,
    question: "Bir nesnenin kütle ve hızının çarpımı ile hesaplanan fiziksel büyüklük nedir?",
    options: ["Enerji", "İvme", "Momentum", "Kuvvet"],
    correct: 2,
    category: "Genel Kültür",
    difficulty: "Orta"
  },
  {
    id: 1760,
    question: "Rus yazar Fyodor Dostoyevski'nin, Raskolnikov karakteri üzerinden suç ve vicdan temasını işlediği ünlü eseri nedir?",
    options: ["Karamazov Kardeşler", "Budala", "Suç ve Ceza", "Yer Altından Notlar"],
    correct: 2,
    category: "Genel Kültür",
    difficulty: "Kolay"
  },
  {
    id: 1761,
    question: "Hangi element, hem elmas hem de grafit gibi farklı allotroplara sahip olan bir elementtir?",
    options: ["Oksijen", "Silisyum", "Karbon", "Azot"],
    correct: 2,
    category: "Genel Kültür",
    difficulty: "Kolay"
  },
  {
    id: 1762,
    question: "Dünyanın en soğuk kıtası ve aynı zamanda en rüzgarlı bölgesi neresidir?",
    options: ["Kuzey Kutbu", "Asya", "Antarktika", "Grönland"],
    correct: 2,
    category: "Genel Kültür",
    difficulty: "Kolay"
  },
  {
    id: 1763,
    question: "Türkiye'de, 1923'te Cumhuriyet'in ilan edildiği tarih nedir?",
    options: ["23 Nisan 1920", "19 Mayıs 1919", "29 Ekim 1923", "30 Ağustos 1922"],
    correct: 2,
    category: "Genel Kültür",
    difficulty: "Kolay"
  },
  {
    id: 1764,
    question: "Müzikte, bir enstrüman veya sesin perdesi ile ilgili olan, tiz veya pes olma özelliğine ne ad verilir?",
    options: ["Ritim", "Tını", "Ses Perdesi (Pitch)", "Oktav"],
    correct: 2,
    category: "Genel Kültür",
    difficulty: "Kolay"
  },
  {
    id: 1765,
    question: "Resimde, kağıt veya tuval üzerine çizgilerle gölgelendirme ve tonlama yapma sanatına ne ad verilir?",
    options: ["Heykel", "Seramik", "Çizim (Desin)", "Fresk"],
    correct: 2,
    category: "Genel Kültür",
    difficulty: "Kolay"
  },
  {
    id: 1766,
    question: "Mitolojide, 'Truva Atı' fikrini ortaya atan ve Truva Savaşı'nı bitiren komutan kimdir?",
    options: ["Hektor", "Aşil", "Odysseus", "Paris"],
    correct: 2,
    category: "Genel Kültür",
    difficulty: "Orta"
  },
  {
    id: 1767,
    question: "Felsefede, bilginin kaynağının deneyim ve duyular olduğunu savunan akım nedir?",
    options: ["Rasyonalizm", "İdealizm", "Empirizm (Deneycilik)", "Varoluşçuluk"],
    correct: 2,
    category: "Genel Kültür",
    difficulty: "Orta"
  },
  {
    id: 1768,
    question: "Bir ülkenin belirli bir dönemde ürettiği tüm mal ve hizmetlerin toplam parasal değerine ne ad verilir?",
    options: ["Milli Gelir", "Tüketici Fiyat Endeksi", "Gayri Safi Yurt İçi Hasıla (GSYİH)", "Bütçe Açığı"],
    correct: 2,
    category: "Genel Kültür",
    difficulty: "Kolay"
  },
  {
    id: 1769,
    question: "Güneş sistemindeki en büyük gezegen hangisidir?",
    options: ["Mars", "Satürn", "Jüpiter", "Dünya"],
    correct: 2,
    category: "Genel Kültür",
    difficulty: "Kolay"
  },
  {
    id: 1770,
    question: "Türk edebiyatında, 'Çalıkuşu', 'Dudaktan Kalbe' gibi eserleriyle tanınan yazar kimdir?",
    options: ["Halit Ziya Uşaklıgil", "Ömer Seyfettin", "Reşat Nuri Güntekin", "Aka Gündüz"],
    correct: 2,
    category: "Genel Kültür",
    difficulty: "Kolay"
  },
  {
    id: 1771,
    question: "İnsan vücudunda, kanın temizlenmesinden ve idrar oluşumundan sorumlu organlar nedir?",
    options: ["Karaciğer", "Akciğerler", "Böbrekler", "Mide"],
    correct: 2,
    category: "Genel Kültür",
    difficulty: "Kolay"
  },
  {
    id: 1772,
    question: "Jeolojide, yer kabuğunu oluşturan büyük ve hareketli parçalara ne ad verilir?",
    options: ["Fay Hattı", "Kıtalar", "Tektonik Plakalar", "Volkanlar"],
    correct: 2,
    category: "Genel Kültür",
    difficulty: "Kolay"
  },
  {
    id: 1773,
    question: "Antik Mısır'da, ölülerin korunması ve ahirete hazırlanması için yapılan işleme ne ad verilir?",
    options: ["Heykel Yapımı", "Piramit İnşaatı", "Mumyalama", "Fresk Boyama"],
    correct: 2,
    category: "Genel Kültür",
    difficulty: "Kolay"
  },
  {
    id: 1774,
    question: "Müzikte, üç veya daha fazla farklı notanın aynı anda veya sıralı olarak çalınmasıyla oluşan uyumlu ses dizisine ne ad verilir?",
    options: ["Melodi", "Ritim", "Akort (Ahenk/Kord)", "Kontrpuan"],
    correct: 2,
    category: "Genel Kültür",
    difficulty: "Kolay"
  },
  {
    id: 1775,
    question: "Hukukta, bir suçun işlendiği anda uygulanan yasalara ne ad verilir?",
    options: ["Özel Hukuk", "Uluslararası Hukuk", "Ceza Hukuku", "Anayasa Hukuku"],
    correct: 2,
    category: "Genel Kültür",
    difficulty: "Kolay"
  },
  {
    id: 1776,
    question: "Dünya'nın uydusu olan gök cismi nedir?",
    options: ["Mars", "Venüs", "Ay", "Güneş"],
    correct: 2,
    category: "Genel Kültür",
    difficulty: "Kolay"
  },
  {
    id: 1777,
    question: "Kimyada, bir çözeltinin asitlik veya bazlık derecesini ölçen skalaya ne ad verilir?",
    options: ["Celsius", "Kelvin", "pH Skalası", "Molarite"],
    correct: 2,
    category: "Genel Kültür",
    difficulty: "Kolay"
  },
  {
    id: 1778,
    question: "İkinci Dünya Savaşı'nın başlangıç tarihi olarak kabul edilen, Almanya'nın Polonya'yı işgali hangi tarihte gerçekleşmiştir?",
    options: ["7 Aralık 1941", "6 Haziran 1944", "1 Eylül 1939", "8 Mayıs 1945"],
    correct: 2,
    category: "Genel Kültür",
    difficulty: "Kolay"
  },
  {
    id: 1779,
    question: "Türk edebiyatında 'Divan Şiiri' geleneğinin en önemli temsilcilerinden olan ve 'Leyla ve Mecnun' mesnevisini yazan şair kimdir?",
    options: ["Baki", "Nedim", "Fuzûlî", "Şeyhi"],
    correct: 2,
    category: "Genel Kültür",
    difficulty: "Orta"
  },
  {
    id: 1780,
    question: "Büyük İskender'in Pers İmparatorluğu'nu yenerek kurduğu imparatorluğun kültürel sentezine ne ad verilir?",
    options: ["Roma Kültürü", "Bizans Kültürü", "Helenistik Kültür", "Makedon Kültürü"],
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
    options: ["Erime", "Buharlaşma", "Donma (Katılaşma)", "Yoğunlaşma"],
    correct: 2,
    category: "Genel Kültür",
    difficulty: "Kolay"
  },
  {
    id: 1783,
    question: "Bir ülkenin belirli bir ürüne dışarıdan gelen rekabeti azaltmak için uyguladığı vergiye ne ad verilir?",
    options: ["Katma Değer Vergisi", "Gelir Vergisi", "Gümrük Vergisi (Tarife)", "Özel Tüketim Vergisi"],
    correct: 2,
    category: "Genel Kültür",
    difficulty: "Orta"
  },
  {
    id: 1784,
    question: "Müzikte, seslerin belirli bir düzen ve ritim içinde sıralanmasıyla ortaya çıkan yapıya ne ad verilir?",
    options: ["Armoni", "Tını", "Melodi", "Tempo"],
    correct: 2,
    category: "Genel Kültür",
    difficulty: "Kolay"
  },
  {
    id: 1785,
    question: "Resimde, bir nesnenin ışık almayan tarafına ne ad verilir?",
    options: ["Aydınlık Alan", "Orta Ton", "Gölge", "Halka"],
    correct: 2,
    category: "Genel Kültür",
    difficulty: "Kolay"
  },
  {
    id: 1786,
    question: "Mitolojide, rüzgarların tanrısı kimdir?",
    options: ["Poseidon", "Hades", "Aeolus (Aiolos)", "Hephaistos"],
    correct: 2,
    category: "Genel Kültür",
    difficulty: "Orta"
  },
  {
    id: 1787,
    question: "İnsan vücudunda, oksijenin kana karışmasını sağlayan ve karbondioksitin dışarı atılmasını sağlayan organlar nedir?",
    options: ["Kalp", "Mide", "Akciğerler", "Böbrekler"],
    correct: 2,
    category: "Genel Kültür",
    difficulty: "Kolay"
  },
  {
    id: 1788,
    question: "Antik Roma'da, halkın eğlenmesi ve gladyatör dövüşleri için kullanılan büyük amfi tiyatro nedir?",
    options: ["Forum", "Panteon", "Kolezyum", "Caracalla Hamamları"],
    correct: 2,
    category: "Genel Kültür",
    difficulty: "Kolay"
  },
  {
    id: 1789,
    question: "Türk edebiyatında, Milli Edebiyat akımının en önemli temsilcilerinden olan ve 'Yaban' romanıyla tanınan yazar kimdir?",
    options: ["Refik Halit Karay", "Ömer Seyfettin", "Yakup Kadri Karaosmanoğlu", "Halide Edip Adıvar"],
    correct: 2,
    category: "Genel Kültür",
    difficulty: "Kolay"
  },
  {
    id: 1790,
    question: "Birleşmiş Milletler Güvenlik Konseyi'nde veto yetkisine sahip daimi üye ülke sayısı kaçtır?",
    options: ["3", "5", "7", "10"],
    correct: 1,
    category: "Genel Kültür",
    difficulty: "Kolay"
  },
  {
    id: 1791,
    question: "Gezegenlerin, atmosferlerinin yoğun sera etkisi nedeniyle 'Kızıl Gezegen' olarak adlandırılan gezegen hangisidir?",
    options: ["Dünya", "Jüpiter", "Mars", "Venüs"],
    correct: 2,
    category: "Genel Kültür",
    difficulty: "Kolay"
  },
  {
    id: 1792,
    question: "Matematikte, bir sayının kendisi hariç pozitif tam bölenlerinin toplamı sayıdan büyükse, bu sayıya ne ad verilir?",
    options: ["Mükemmel Sayı", "Asal Sayı", "Bolluk Sayısı (Abundant Number)", "Eksik Sayı"],
    correct: 2,
    category: "Genel Kültür",
    difficulty: "Zor"
  },
  {
    id: 1793,
    question: "Avrupa'da, Rönesans döneminin önemli eserlerinden olan ve Michelangelo tarafından boyanan şapel neresidir?",
    options: ["Petersburg Katedrali", "Notre Dame Katedrali", "Sistina Şapeli", "Aziz Mark Bazilikası"],
    correct: 2,
    category: "Genel Kültür",
    difficulty: "Kolay"
  },
  {
    id: 1794,
    question: "Türkiye'nin Asya ve Avrupa kıtalarında toprakları bulunan tek ili hangisidir?",
    options: ["İzmit", "Bursa", "İstanbul", "Çanakkale"],
    correct: 2,
    category: "Genel Kültür",
    difficulty: "Kolay"
  },
  {
    id: 1795,
    question: "Hukukta, bir kişinin ölümünden sonra mal varlığının yasal olarak devredilmesini düzenleyen hukuk dalı nedir?",
    options: ["Borçlar Hukuku", "Ticaret Hukuku", "Miras Hukuku", "İcra Hukuku"],
    correct: 2,
    category: "Genel Kültür",
    difficulty: "Kolay"
  },
  {
    id: 1796,
    question: "Tarihte, matbaayı Avrupa'da ilk kez kullanan ve hareketli matbaa sistemini geliştiren kişi kimdir?",
    options: ["Gutenberg", "Leonardo da Vinci", "Galileo", "Marco Polo"],
    correct: 0,
    category: "Genel Kültür",
    difficulty: "Kolay"
  },
  {
    id: 1797,
    question: "Bir canlının belirli bir ortamda yaşayabilme ve üreyebilme yeteneğine ne ad verilir?",
    options: ["Mutasyon", "Seçilim", "Adaptasyon (Uyum)", "Evrim"],
    correct: 2,
    category: "Genel Kültür",
    difficulty: "Kolay"
  },
  {
    id: 1798,
    question: "Müzikte, bir eserin ana temasını veya duygusal atmosferini belirleyen terim nedir?",
    options: ["Ritim", "Tempo", "Mod (Makam/Ton)", "Oktav"],
    correct: 2,
    category: "Genel Kültür",
    difficulty: "Kolay"
  },
  {
    id: 1799,
    question: "Felsefede, varoluşun anlamını, özgürlüğü ve sorumluluğu temel alan akım nedir?",
    options: ["Sürrealizm", "Mantıksal Pozitivizm", "Varoluşçuluk (Egzistansiyalizm)", "Yapısalcılık"],
    correct: 2,
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
    options: ["Poseidon", "Hades", "Zeus", "Ares"],
    correct: 2,
    category: CATEGORIES.MYTHOLOGY_RELIGION.name,
    difficulty: "Kolay"
  },
  {
    id: 1802,
    question: "Hristiyanlığın kutsal kitabı ve inancın temelini oluşturan metinler bütünü nedir?",
    options: ["İncil (Kitab-ı Mukaddes)", "Zebur", "Tevrat", "Kuran"],
    correct: 0,
    category: CATEGORIES.MYTHOLOGY_RELIGION.name,
    difficulty: "Kolay"
  },
  {
    id: 1803,
    question: "İskandinav (Norse) mitolojisinde, çekici Mjölnir ile tanınan gök gürültüsü tanrısı kimdir?",
    options: ["Odin", "Thor", "Loki", "Tyr"],
    correct: 1,
    category: CATEGORIES.MYTHOLOGY_RELIGION.name,
    difficulty: "Kolay"
  },
  {
    id: 1804,
    question: "İslam'da, belirli şartlar ve zamanlarda Mekke'deki Kâbe'yi ziyaret etme ibadeti nedir?",
    options: ["Zekât", "Namaz", "Oruç", "Hac"],
    correct: 3,
    category: CATEGORIES.MYTHOLOGY_RELIGION.name,
    difficulty: "Kolay"
  },
  {
    id: 1805,
    question: "Antik Mısır mitolojisinde, genellikle şahin başlı veya güneş diskli tasvir edilen Güneş Tanrısı kimdir?",
    options: ["Anubis", "Osiris", "Ra", "Thoth"],
    correct: 2,
    category: CATEGORIES.MYTHOLOGY_RELIGION.name,
    difficulty: "Kolay"
  },
  {
    id: 1806,
    question: "Gautama Siddhartha olarak da bilinen, Budizm'in kurucusu kimdir?",
    options: ["Buda", "Lao Tzu", "Konfüçyüs", "Mahavira"],
    correct: 0,
    category: CATEGORIES.MYTHOLOGY_RELIGION.name,
    difficulty: "Kolay"
  },
  {
    id: 1807,
    question: "Hinduizm ve Budizm gibi Hint dinlerinde ruhun ölümden sonra yeni bir bedende yeniden doğması inancına ne ad verilir?",
    options: ["Mokşa", "Samsara", "Karma", "Dharma"],
    correct: 1,
    category: CATEGORIES.MYTHOLOGY_RELIGION.name,
    difficulty: "Orta"
  },
  {
    id: 1808,
    question: "Roma mitolojisinde aşk, güzellik ve doğurganlık tanrıçası kimdir (Yunan'daki Afrodit'in karşılığı)?",
    options: ["Minerva", "Diana", "Ceres", "Venüs"],
    correct: 3,
    category: CATEGORIES.MYTHOLOGY_RELIGION.name,
    difficulty: "Kolay"
  },
  {
    id: 1809,
    question: "Museviliğin (Yahudiliğin) en kutsal kitabı ve inancın temelini oluşturan metin nedir?",
    options: ["Kuran", "Tevrat", "Zebur", "İncil"],
    correct: 1,
    category: CATEGORIES.MYTHOLOGY_RELIGION.name,
    difficulty: "Kolay"
  },
  {
    id: 1810,
    question: "Yunan mitolojisinde, Medusa'nın başını keserek onu yenen ve sonra Andromedayı kurtaran kahraman kimdir?",
    options: ["Perseus", "Herakles", "Theseus", "Odisseus"],
    correct: 0,
    category: CATEGORIES.MYTHOLOGY_RELIGION.name,
    difficulty: "Orta"
  },
  {
    id: 1811,
    question: "Zerdüştlüğün (Zoroastrianism) tek tanrısı ve bilgelik tanrısı kimdir?",
    options: ["Ahri-man", "Mithras", "Ahura Mazda", "Indra"],
    correct: 2,
    category: CATEGORIES.MYTHOLOGY_RELIGION.name,
    difficulty: "Zor"
  },
  {
    id: 1812,
    question: "Konfüçyüsçülükte, 'İnsancıllık, merhamet ve başkalarını sevme' anlamına gelen en önemli ahlaki ilke nedir?",
    options: ["Li", "Yi", "Zhi", "Ren"],
    correct: 3,
    category: CATEGORIES.MYTHOLOGY_RELIGION.name,
    difficulty: "Zor"
  },
  {
    id: 1813,
    question: "Yunan mitolojisinde Hades'in yönettiği yeraltı dünyasını koruyan üç başlı köpek nedir?",
    options: ["Hydra", "Kerberos", "Minotauros", "Siren"],
    correct: 1,
    category: CATEGORIES.MYTHOLOGY_RELIGION.name,
    difficulty: "Kolay"
  },
  {
    id: 1814,
    question: "İslam inancına göre, Allah'ın vahiylerini peygamberlere ulaştırmakla görevli baş melek kimdir?",
    options: ["Cebrail", "Azrail", "Mikail", "İsrafil"],
    correct: 0,
    category: CATEGORIES.MYTHOLOGY_RELIGION.name,
    difficulty: "Kolay"
  },
  {
    id: 1815,
    question: "İskandinav mitolojisinde tanrıların dünyası Asgard'ı, insanların dünyası Midgard'a bağlayan gökkuşağı köprüsü nedir?",
    options: ["Valhalla", "Jotunheim", "Bifrost", "Niflheim"],
    correct: 2,
    category: CATEGORIES.MYTHOLOGY_RELIGION.name,
    difficulty: "Orta"
  },
  {
    id: 1816,
    question: "Hristiyanlıkta, İsa'nın en yakın takipçileri ve yardımcıları olarak bilinen havarilerin sayısı kaçtır?",
    options: ["7", "12", "10", "4"],
    correct: 1,
    category: CATEGORIES.MYTHOLOGY_RELIGION.name,
    difficulty: "Kolay"
  },
  {
    id: 1817,
    question: "Antik Yunan mitolojisinde zekâ, sanat, strateji ve savaş tanrıçası kimdir?",
    options: ["Hera", "Afrodit", "Artemis", "Athena"],
    correct: 3,
    category: CATEGORIES.MYTHOLOGY_RELIGION.name,
    difficulty: "Kolay"
  },
  {
    id: 1818,
    question: "Hinduizm'de evrenin yaratıcısı (Brahma), koruyucusu (Vishnu) ve yok edicisi olarak bilinen üç ana tanrı (Trimurti) üçlüsünün eksik üyesi hangisidir?",
    options: ["Şiva", "Rama", "Krishna", "Hanuman"],
    correct: 0,
    category: CATEGORIES.MYTHOLOGY_RELIGION.name,
    difficulty: "Orta"
  },
  {
    id: 1819,
    question: "Dünyanın bilinen en eski edebi eserlerinden biri olan, Gılgamış'ın ölümsüzlük arayışını anlatan destan nedir?",
    options: ["İlyada Destanı", "Odisse Destanı", "Gılgamış Destanı", "Yaratılış Destanı"],
    correct: 2,
    category: CATEGORIES.MYTHOLOGY_RELIGION.name,
    difficulty: "Orta"
  },
  {
    id: 1820,
    question: "Roma mitolojisinde denizler, depremler ve atlar tanrısı kimdir (Yunan'daki Poseidon'un karşılığı)?",
    options: ["Jüpiter", "Neptün", "Mars", "Plüton"],
    correct: 1,
    category: CATEGORIES.MYTHOLOGY_RELIGION.name,
    difficulty: "Kolay"
  },
  {
    id: 1821,
    question: "Taoizm'in temel metni ve yol, ilke veya varoluşun kaynağı gibi temel kavramları içeren eser nedir?",
    options: ["Analects", "Tripitaka", "Veda", "Tao Te Ching"],
    correct: 3,
    category: CATEGORIES.MYTHOLOGY_RELIGION.name,
    difficulty: "Zor"
  },
  {
    id: 1822,
    question: "İslam'da, dünyanın neresinde olursa olsun, Müslümanların namaz kılarken yöneldikleri kıble istikameti neresidir?",
    options: ["Kâbe (Mekke)", "Kudüs", "Medine", "Kahire"],
    correct: 0,
    category: CATEGORIES.MYTHOLOGY_RELIGION.name,
    difficulty: "Kolay"
  },
  {
    id: 1823,
    question: "İskandinav mitolojisinde Asgard, hangi varlıkların diyarıdır?",
    options: ["Devler", "Tanrılar", "Cüceler", "İnsanlar"],
    correct: 1,
    category: CATEGORIES.MYTHOLOGY_RELIGION.name,
    difficulty: "Kolay"
  },
  {
    id: 1824,
    question: "Yunan mitolojisinde Girit'te Minos'un emriyle Minotauros için labirenti (Labyrinth) inşa eden mimar ve mucit kimdir?",
    options: ["Prometheus", "Hephaistos", "Daidalos", "İkaros"],
    correct: 2,
    category: CATEGORIES.MYTHOLOGY_RELIGION.name,
    difficulty: "Zor"
  },
  {
    id: 1825,
    question: "Musevilikte, Işık Bayramı (Hanuka) ve diğer dini törenlerde kullanılan yedi kollu şamdanın adı nedir?",
    options: ["Kippa", "Tefillin", "Mezuzah", "Menora"],
    correct: 3,
    category: CATEGORIES.MYTHOLOGY_RELIGION.name,
    difficulty: "Kolay"
  },
  {
    id: 1826,
    question: "Jainizm'in temel ilkelerinden biri olan ve canlılara zarar vermeme ilkesi nedir?",
    options: ["Ahimsa", "Samsara", "Dharma", "Satya"],
    correct: 0,
    category: CATEGORIES.MYTHOLOGY_RELIGION.name,
    difficulty: "Zor"
  },
  {
    id: 1827,
    question: "Antik Mısır mitolojisinde ölülerin ve yeraltı dünyasının tanrısı kimdir?",
    options: ["Ra", "Osiris", "Seth", "Horus"],
    correct: 1,
    category: CATEGORIES.MYTHOLOGY_RELIGION.name,
    difficulty: "Orta"
  },
  {
    id: 1828,
    question: "İncil'e göre, İsa'nın son akşam yemeğinde ona ihanet ederek Romalılara teslim eden havari kimdir?",
    options: ["Petrus", "Yuhanna", "Tomas", "Yahuda İskariyot"],
    correct: 3,
    category: CATEGORIES.MYTHOLOGY_RELIGION.name,
    difficulty: "Kolay"
  },
  {
    id: 1829,
    question: "Yunan mitolojisinde yeraltı dünyasındaki beş nehirden biri olan ve nefret, acı ve kederin somutlaştığı nehir hangisidir?",
    options: ["Styx", "Lethe", "Acheron", "Cocytus"],
    correct: 0,
    category: CATEGORIES.MYTHOLOGY_RELIGION.name,
    difficulty: "Zor"
  },
  {
    id: 1830,
    question: "Japonya'nın geleneksel inancı Şintoizm'de (Shinto), tapınılan kutsal ruhlar, tanrılar veya doğa güçleri için kullanılan genel terim nedir?",
    options: ["Kami-dana", "Torii", "Kama", "Kami"],
    correct: 3,
    category: CATEGORIES.MYTHOLOGY_RELIGION.name,
    difficulty: "Zor"
  },
  {
    id: 1831,
    question: "Budizm'de dünyevi acı ve ıstıraplardan kurtularak ulaşılan nihai huzur ve aydınlanma durumuna ne ad verilir?",
    options: ["Samsara", "Nirvana", "Dharma", "Mokşa"],
    correct: 1,
    category: CATEGORIES.MYTHOLOGY_RELIGION.name,
    difficulty: "Kolay"
  },
  {
    id: 1832,
    question: "Hicri takvimin ilk ayı ve İslam'da yeni yılın başlangıcı sayılan ay hangisidir?",
    options: ["Ramazan", "Şaban", "Zilhicce", "Muharrem"],
    correct: 3,
    category: CATEGORIES.MYTHOLOGY_RELIGION.name,
    difficulty: "Orta"
  },
  {
    id: 1833,
    question: "Yunan mitolojisinde gökyüzünü omuzlarında taşıma cezasına çarptırılan Titan kimdir?",
    options: ["Atlas", "Kronos", "Prometheus", "Epimetheus"],
    correct: 0,
    category: CATEGORIES.MYTHOLOGY_RELIGION.name,
    difficulty: "Kolay"
  },
  {
    id: 1834,
    question: "Sihizm'in on guru tarafından yazılan ve dinin temel inançlarını içeren kutsal kitabı nedir?",
    options: ["Veda", "Guru Granth Sahib", "Avesta", "Gita"],
    correct: 1,
    category: CATEGORIES.MYTHOLOGY_RELIGION.name,
    difficulty: "Zor"
  },
  {
    id: 1835,
    question: "İskandinav mitolojisinde tanrıların, devlerin ve tüm dünyanın sonunu getirecek olan kıyamet savaşına ne ad verilir?",
    options: ["Jotunheim", "Midgard", "Ragnarök", "Valhalla"],
    correct: 2,
    category: CATEGORIES.MYTHOLOGY_RELIGION.name,
    difficulty: "Orta"
  },
  {
    id: 1836,
    question: "Antik Mısır mitolojisinde kötülük, kargaşa ve çöl fırtınalarının tanrısı kimdir?",
    options: ["Horus", "Thoth", "Osiris", "Seth"],
    correct: 3,
    category: CATEGORIES.MYTHOLOGY_RELIGION.name,
    difficulty: "Zor"
  },
  {
    id: 1837,
    question: "Yunan mitolojisinde yeraltı dünyasındaki beş nehirden biri olan ve sularını içenlerin geçmişi unuttuğu nehir hangisidir?",
    options: ["Lethe", "Styx", "Acheron", "Cocytus"],
    correct: 0,
    category: CATEGORIES.MYTHOLOGY_RELIGION.name,
    difficulty: "Orta"
  },
  {
    id: 1838,
    question: "Hristiyanlık tarihinde, İsa'nın ilahi doğası hakkındaki önemli kararların alındığı, 325 yılında toplanan ilk Ekümenik Konsil hangi şehirde düzenlenmiştir?",
    options: ["İstanbul (Konstantinopolis)", "İznik (Nicea)", "Roma", "Kudüs"],
    correct: 1,
    category: CATEGORIES.MYTHOLOGY_RELIGION.name,
    difficulty: "Zor"
  },
  {
    id: 1839,
    question: "Hinduizm'de kutsal kabul edilen ve tanrıça Ganga olarak kişileştirilen nehir hangisidir?",
    options: ["İndus Nehri", "Yamuna Nehri", "Ganj Nehri", "Brahmaputra Nehri"],
    correct: 2,
    category: CATEGORIES.MYTHOLOGY_RELIGION.name,
    difficulty: "Kolay"
  },
  {
    id: 1840,
    question: "Şintoizm'de, kutsal bir alana girişi simgeleyen ve genellikle iki dik direk ile iki yatay kirişten oluşan geleneksel kapı yapısı nedir?",
    options: ["Shimenawa", "Shintai", "Torii", "Gohei"],
    correct: 2,
    category: CATEGORIES.MYTHOLOGY_RELIGION.name,
    difficulty: "Orta"
  },
  {
    id: 1841,
    question: "Yunan mitolojisinde, annesi tarafından topuk hariç ölümsüz yapılan ve Truva Savaşı'nın en büyük kahramanı olan kişi kimdir?",
    options: ["Akhilleus (Aşil)", "Hektor", "Aias", "Menelaos"],
    correct: 0,
    category: CATEGORIES.MYTHOLOGY_RELIGION.name,
    difficulty: "Kolay"
  },
  {
    id: 1842,
    question: "İslam'ın beş şartından biri olan oruç ibadetinin yapıldığı kutsal ay hangisidir?",
    options: ["Şevval", "Ramazan", "Muharrem", "Recep"],
    correct: 1,
    category: CATEGORIES.MYTHOLOGY_RELIGION.name,
    difficulty: "Kolay"
  },
  {
    id: 1843,
    question: "Roma mitolojisinde savaş tanrısı kimdir (Yunan'daki Ares'in karşılığı)?",
    options: ["Jüpiter", "Neptün", "Mars", "Merkür"],
    correct: 2,
    category: CATEGORIES.MYTHOLOGY_RELIGION.name,
    difficulty: "Kolay"
  },
  {
    id: 1844,
    question: "Aztek mitolojisinde, rüzgar, hava ve öğrenme tanrısı olarak bilinen tüylü yılan tanrı kimdir?",
    options: ["Huitzilopochtli", "Tlaloc", "Tezcatlipoca", "Quetzalcoatl"],
    correct: 3,
    category: CATEGORIES.MYTHOLOGY_RELIGION.name,
    difficulty: "Zor"
  },
  {
    id: 1845,
    question: "Yunan mitolojisinde hasat, tarım, bereket ve tahıl tanrıçası kimdir?",
    options: ["Demeter", "Hestia", "Artemis", "Hera"],
    correct: 0,
    category: CATEGORIES.MYTHOLOGY_RELIGION.name,
    difficulty: "Orta"
  },
  {
    id: 1846,
    question: "Musevilikte (Yahudilik), tövbe ve oruçla geçirilen, yılın en kutsal günü kabul edilen bayram hangisidir?",
    options: ["Hamursuz (Pesah)", "Yom Kippur", "Sukkot", "Roş Aşana"],
    correct: 1,
    category: CATEGORIES.MYTHOLOGY_RELIGION.name,
    difficulty: "Orta"
  },
  {
    id: 1847,
    question: "İskandinav mitolojisinde Odin'in, dünyayı dolaşarak ona haber getiren iki kuzgununun adları nedir?",
    options: ["Geri ve Freki", "Fenrir ve Jörmungandr", "Hugin ve Munin", "Sleipnir ve Grani"],
    correct: 2,
    category: CATEGORIES.MYTHOLOGY_RELIGION.name,
    difficulty: "Zor"
  },
  {
    id: 1848,
    question: "Konfüçyüsçülüğün temelini oluşturan ve geleneksel Çin kültüründe önemli bir yer tutan, Konfüçyüs'ün öğrencileri tarafından derlenmiş metinler bütünü nedir?",
    options: ["Dört Kitap ve Beş Kanun", "Yedi Klasik", "Dokuz Yasa", "Beş Klasik ve Dört Kitap"],
    correct: 3,
    category: CATEGORIES.MYTHOLOGY_RELIGION.name,
    difficulty: "Zor"
  },
  {
    id: 1849,
    question: "Antik Mısır mitolojisinde ölülerin yargılanmasından sorumlu olan ve genellikle çakal başlı tasvir edilen tanrı kimdir?",
    options: ["Anubis", "Horus", "Thoth", "Osiris"],
    correct: 0,
    category: CATEGORIES.MYTHOLOGY_RELIGION.name,
    difficulty: "Zor"
  },
  {
    id: 1850,
    question: "Hristiyanlıkta, Yahudiliğin de kutsal kabul ettiği ve Musa'nın beş kitabından oluşan ilk kısım nedir?",
    options: ["Peygamberler", "Tevrat (Pentateuch)", "Vahiy", "Mezmurlar"],
    correct: 1,
    category: CATEGORIES.MYTHOLOGY_RELIGION.name,
    difficulty: "Kolay"
  },
  {
    id: 1851,
    question: "Yunan mitolojisinde Girit'teki labirentte yaşayan, yarı insan yarı boğa canavarı nedir?",
    options: ["Siren", "Kentaur", "Minotauros", "Gorgon"],
    correct: 2,
    category: CATEGORIES.MYTHOLOGY_RELIGION.name,
    difficulty: "Kolay"
  },
  {
    id: 1852,
    question: "İslam'ın temel inanç esası olan, Allah'ın bir ve tek olduğu inancına ne ad verilir?",
    options: ["Nübüvvet", "Haşr", "Ahiret", "Tevhid"],
    correct: 3,
    category: CATEGORIES.MYTHOLOGY_RELIGION.name,
    difficulty: "Kolay"
  },
  {
    id: 1853,
    question: "Hinduizm'de yaratıcı (Brahma) ve koruyucu (Vishnu) tanrılarla birlikte, aynı zamanda yok edici olarak da bilinen tanrı kimdir?",
    options: ["Şiva", "Ganeşa", "Krishna", "Hanuman"],
    correct: 0,
    category: CATEGORIES.MYTHOLOGY_RELIGION.name,
    difficulty: "Kolay"
  },
  {
    id: 1854,
    question: "Yunan mitolojisinde, ruhları Styx nehrinden geçirerek yeraltı dünyasına taşıyan kayıkçı kimdir?",
    options: ["Hades", "Kharon (Charon)", "Thanatos", "Hypnos"],
    correct: 1,
    category: CATEGORIES.MYTHOLOGY_RELIGION.name,
    difficulty: "Orta"
  },
  {
    id: 1855,
    question: "Musevilikte, İsrailoğulları'nı Mısır'daki kölelikten kurtararak Kızıldeniz'i yarıp geçiren peygamber kimdir?",
    options: ["İbrahim", "Davut", "Musa", "Nuh"],
    correct: 2,
    category: CATEGORIES.MYTHOLOGY_RELIGION.name,
    difficulty: "Kolay"
  },
  {
    id: 1856,
    question: "İskandinav mitolojisinde Asgard, Midgard ve diğer dokuz diyarı birbirine bağlayan devasa dünya ağacı nedir?",
    options: ["Gungnir", "Mjölnir", "Nidhogg", "Yggdrasil"],
    correct: 3,
    category: CATEGORIES.MYTHOLOGY_RELIGION.name,
    difficulty: "Orta"
  },
  {
    id: 1857,
    question: "Hristiyanlıkta, Meryem'e İsa'nın doğumunu müjdeleyen baş melek (Gabriel) kimdir?",
    options: ["Cebrail", "Mikail", "Azrail", "İsrafil"],
    correct: 0,
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
    options: ["Konfüçyüs", "Lao Tzu", "Buda (Siddhartha Gautama)", "Zerdüşt"],
    correct: 2,
    category: CATEGORIES.MYTHOLOGY_RELIGION.name,
    difficulty: "Kolay"
  },
  {
    id: 1860,
    question: "İslam'da, Mekke'de bulunan ve Müslümanların kıblesini oluşturan, içinde Hacerü'l-Esved'in (Kara Taş) bulunduğu küp şeklindeki yapı nedir?",
    options: ["Safa ve Merve", "Mescid-i Nebevi", "Arafat", "Kâbe"],
    correct: 3,
    category: CATEGORIES.MYTHOLOGY_RELIGION.name,
    difficulty: "Kolay"
  },
  {
    id: 1861,
    question: "Yunan mitolojisinde, tanrılar tarafından insan ırkına ceza olarak yaratılan ve kutusundan tüm kötülükleri dünyaya yayan ilk kadın kimdir?",
    options: ["Pandora", "Helena", "Medea", "Elektra"],
    correct: 0,
    category: CATEGORIES.MYTHOLOGY_RELIGION.name,
    difficulty: "Orta"
  },
  {
    id: 1862,
    question: "Hinduizm'de kişinin ahlaki görevi, erdemli yaşam tarzı ve doğru davranış ilkelerini ifade eden temel kavram nedir?",
    options: ["Mokşa", "Dharma", "Karma", "Samsara"],
    correct: 1,
    category: CATEGORIES.MYTHOLOGY_RELIGION.name,
    difficulty: "Orta"
  },
  {
    id: 1863,
    question: "İskandinav mitolojisinde, zincirle bağlanan ve Ragnarök sırasında serbest kalıp Odin'i öldüreceği kehanet edilen devasa kurt nedir?",
    options: ["Jörmungandr", "Geri", "Fenrir", "Hugin"],
    correct: 2,
    category: CATEGORIES.MYTHOLOGY_RELIGION.name,
    difficulty: "Zor"
  },
  {
    id: 1864,
    question: "Musevilikte (Yahudilik), özellikle sabah duaları sırasında giyilen püsküllü ibadet şalı nedir?",
    options: ["Kippa", "Mezuzah", "Tefillin", "Tallit"],
    correct: 3,
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
    options: ["Meryem Ana", "Kutsal Ruh", "Melek Cebrail", "Kilise"],
    correct: 1,
    category: CATEGORIES.MYTHOLOGY_RELIGION.name,
    difficulty: "Kolay"
  },
  {
    id: 1867,
    question: "Yunan mitolojisinde keçi gövdeli, yılan kuyruklu ve aslan başlı, ateş püskürten canavar nedir?",
    options: ["Sfenks", "Hydra", "Khimaira (Kimera)", "Gorgon"],
    correct: 2,
    category: CATEGORIES.MYTHOLOGY_RELIGION.name,
    difficulty: "Zor"
  },
  {
    id: 1868,
    question: "İslam'da, Kuran'ın indirilmeye başlandığı, bin aydan daha hayırlı olduğuna inanılan gece hangisidir?",
    options: ["Berat Kandili", "Mevlid Kandili", "Miraç Kandili", "Kadir Gecesi"],
    correct: 3,
    category: CATEGORIES.MYTHOLOGY_RELIGION.name,
    difficulty: "Orta"
  },
  {
    id: 1869,
    question: "Taoizm'de zıt güçlerin (örneğin karanlık-aydınlık, dişi-erkek) uyumlu birliğini ve evrendeki dengeyi temsil eden sembol nedir?",
    options: ["Yin ve Yang", "Mandala", "Aum (Om)", "Svastika"],
    correct: 0,
    category: CATEGORIES.MYTHOLOGY_RELIGION.name,
    difficulty: "Kolay"
  },
  {
    id: 1870,
    question: "Yunan mitolojisinde dokuz ilham perisinden (Musa) destan şiirinin perisi kimdir?",
    options: ["Erato", "Kalliope", "Melpomene", "Thalia"],
    correct: 1,
    category: CATEGORIES.MYTHOLOGY_RELIGION.name,
    difficulty: "Zor"
  },
  {
    id: 1871,
    question: "Hinduizm'in kutsal metinlerinden biri olan ve 'Tanrı'nın Şarkısı' anlamına gelen felsefi şiir nedir?",
    options: ["Upanishadlar", "Ramayana", "Bhagavad Gita", "Mahabharata"],
    correct: 2,
    category: CATEGORIES.MYTHOLOGY_RELIGION.name,
    difficulty: "Zor"
  },
  {
    id: 1872,
    question: "Musevilik (Yahudilik), Hristiyanlık ve İslam için kutsal kabul edilen ve her üç dinin önemli mabetlerinin bulunduğu şehir hangisidir?",
    options: ["Mekke", "Roma", "Medine", "Kudüs"],
    correct: 3,
    category: CATEGORIES.MYTHOLOGY_RELIGION.name,
    difficulty: "Kolay"
  },
  {
    id: 1873,
    question: "İskandinav mitolojisinde, genellikle Asgard'ın düşmanı olarak tasvir edilen devlerin (Jötnar) diyarı nedir?",
    options: ["Jotunheim", "Niflheim", "Vanaheim", "Muspelheim"],
    correct: 0,
    category: CATEGORIES.MYTHOLOGY_RELIGION.name,
    difficulty: "Orta"
  },
  {
    id: 1874,
    question: "Hristiyanlık ve Musevilikte, Sina Dağı'nda Tanrı'dan On Emri (Ten Commandments) alan peygamber kimdir?",
    options: ["İbrahim", "Musa", "İsa", "Davut"],
    correct: 1,
    category: CATEGORIES.MYTHOLOGY_RELIGION.name,
    difficulty: "Kolay"
  },
  {
    id: 1875,
    question: "Yunan mitolojisinde babasının (Daidalos) uyarılarına rağmen balmumu kanatlarla güneşe çok yaklaşıp denize düşen kişi kimdir?",
    options: ["Perseus", "Theseus", "İkaros", "Herakles"],
    correct: 2,
    category: CATEGORIES.MYTHOLOGY_RELIGION.name,
    difficulty: "Kolay"
  },
  {
    id: 1876,
    question: "İslam dininin en büyük iki ana mezhebi hangileridir?",
    options: ["Selefilik ve Sufilik", "Haricilik ve Mutezile", "Dürzilik ve Alevilik", "Sünnilik ve Şiilik"],
    correct: 3,
    category: CATEGORIES.MYTHOLOGY_RELIGION.name,
    difficulty: "Kolay"
  },
  {
    id: 1877,
    question: "Geleneksel Çin inanışında, hükümdarın yönetim hakkının gökler tarafından verildiği ve ahlaki erdemiyle devam ettiği inancı nedir?",
    options: ["Göklerin Emri (Cennetin Mandası)", "Beş Element Teorisi", "Yin ve Yang", "Tao"],
    correct: 0,
    category: CATEGORIES.MYTHOLOGY_RELIGION.name,
    difficulty: "Zor"
  },
  {
    id: 1878,
    question: "Yunan mitolojisinde avcılık, vahşi doğa, ay ve bakireliğin tanrıçası kimdir?",
    options: ["Hera", "Artemis", "Hestia", "Afrodit"],
    correct: 1,
    category: CATEGORIES.MYTHOLOGY_RELIGION.name,
    difficulty: "Kolay"
  },
  {
    id: 1879,
    question: "Budizm'de Buda'nın öğretilerini (Dharma) temsil eden tekerlek sembolü (Dharma Çakra) genellikle kaç kolludur?",
    options: ["4", "6", "8", "10"],
    correct: 2,
    category: CATEGORIES.MYTHOLOGY_RELIGION.name,
    difficulty: "Zor"
  },
  {
    id: 1880,
    question: "Hinduizm'in en eski ve kutsal metinleri olan Vedalar'ın yazıldığı ve hala dini ayinlerde kullanılan eski Hint dili nedir?",
    options: ["Pali", "Hintçe", "Tamil", "Sanskritçe"],
    correct: 3,
    category: CATEGORIES.MYTHOLOGY_RELIGION.name,
    difficulty: "Zor"
  },
  {
    id: 1881,
    question: "Yunan mitolojisinde şarap, bereket, coşku ve çılgınlık tanrısı kimdir?",
    options: ["Dionysos", "Apollon", "Hermes", "Hefaisos"],
    correct: 0,
    category: CATEGORIES.MYTHOLOGY_RELIGION.name,
    difficulty: "Orta"
  },
  {
    id: 1882,
    question: "Hristiyanlıkta, İsa tarafından havarilere öğretilen ve Hristiyanlığın en bilinen duası olan dua nedir?",
    options: ["Havariler Amentüsü", "Mezmur 23", "Pederimiz (Rab'bin Duası)", "Selam Sana Meryem"],
    correct: 2,
    category: CATEGORIES.MYTHOLOGY_RELIGION.name,
    difficulty: "Kolay"
  },
  {
    id: 1883,
    question: "İskandinav mitolojisinde tanrı Odin'in daima amacına ulaşan sihirli mızrağının adı nedir?",
    options: ["Mjölnir", "Tyrfing", "Gungnir", "Gram"],
    correct: 2,
    category: CATEGORIES.MYTHOLOGY_RELIGION.name,
    difficulty: "Zor"
  },
  {
    id: 1884,
    question: "İslam'ın beş şartından biri olan ve günün belirli vakitlerinde yerine getirilen ibadet nedir?",
    options: ["Oruç", "Zekât", "Hac", "Namaz"],
    correct: 3,
    category: CATEGORIES.MYTHOLOGY_RELIGION.name,
    difficulty: "Kolay"
  },
  {
    id: 1885,
    question: "Antik Mısır mitolojisinde hakikat, adalet ve kozmik düzenin (Ma'at) tanrıçası kimdir?",
    options: ["Ma'at", "Hathor", "İsis", "Sekhmet"],
    correct: 0,
    category: CATEGORIES.MYTHOLOGY_RELIGION.name,
    difficulty: "Zor"
  },
  {
    id: 1886,
    question: "Yunan mitolojisinde, Argo gemisiyle yola çıkarak Altın Post'u (Golden Fleece) aramaya giden kahraman kimdir?",
    options: ["Herakles", "İason (Jason)", "Perseus", "Achilleus"],
    correct: 1,
    category: CATEGORIES.MYTHOLOGY_RELIGION.name,
    difficulty: "Orta"
  },
  {
    id: 1887,
    question: "Musevilikte (Yahudilik), Seleukos İmparatorluğu'na karşı kazanılan zaferi ve Kudüs'teki tapınağın yeniden adanmasını anmak için kutlanan bayram nedir?",
    options: ["Purim", "Pesah", "Hanuka", "Yom Kippur"],
    correct: 2,
    category: CATEGORIES.MYTHOLOGY_RELIGION.name,
    difficulty: "Kolay"
  },
  {
    id: 1888,
    question: "Budizm'de aşırı çilecilikten ve aşırı lüks yaşamdan kaçınmayı öğütleyen ve aydınlanmaya giden yolu temsil eden yol nedir?",
    options: ["Sekiz Katlı Yol", "Dört Yüce Gerçek", "Yüce Yol", "Orta Yol"],
    correct: 3,
    category: CATEGORIES.MYTHOLOGY_RELIGION.name,
    difficulty: "Kolay"
  },
  {
    id: 1889,
    question: "Antik Mısır'da, öbür dünya inancına bağlı olarak, ölülerin bedenlerinin bozulmadan korunması için yapılan işlem nedir?",
    options: ["Mumyalama", "Sfenks İnşası", "Hiyeroglif Yazımı", "Nil Töreni"],
    correct: 0,
    category: CATEGORIES.MYTHOLOGY_RELIGION.name,
    difficulty: "Kolay"
  },
  {
    id: 1890,
    question: "Yunan mitolojisinde ocak (ateş), ev ve aile yaşamının tanrıçası kimdir?",
    options: ["Hera", "Hestia", "Demeter", "Afrodit"],
    correct: 1,
    category: CATEGORIES.MYTHOLOGY_RELIGION.name,
    difficulty: "Zor"
  },
  {
    id: 1891,
    question: "Hristiyanlıkta, İsa'nın kanını ve yeni ahdi simgelemek için Komünyon (Eucharist) ayininde tüketilen içecek nedir?",
    options: ["Su", "Süt", "Şarap", "Zeytinyağı"],
    correct: 2,
    category: CATEGORIES.MYTHOLOGY_RELIGION.name,
    difficulty: "Kolay"
  },
  {
    id: 1892,
    question: "İskandinav mitolojisinde dev Surtr'un yaşadığı ve Ragnarök'te Asgard'ı yakacak olan ateş diyarı nedir?",
    options: ["Midgard", "Asgard", "Niflheim", "Muspelheim"],
    correct: 3,
    category: CATEGORIES.MYTHOLOGY_RELIGION.name,
    difficulty: "Orta"
  },
  {
    id: 1893,
    question: "İslam inancına göre, Hz. Muhammed'e ilk vahyin geldiği Mekke yakınlarındaki mağara hangisidir?",
    options: ["Hira Mağarası", "Sevr Mağarası", "Ashab-ı Kehf Mağarası", "Zülkarneyn Mağarası"],
    correct: 0,
    category: CATEGORIES.MYTHOLOGY_RELIGION.name,
    difficulty: "Orta"
  },
  {
    id: 1894,
    question: "Yunan mitolojisinde, Zeus tarafından tahttan indirilen ve zamanı kişileştiren en güçlü Titan kimdir?",
    options: ["Atlas", "Kronos (Satürn)", "Prometheus", "Okeanos"],
    correct: 1,
    category: CATEGORIES.MYTHOLOGY_RELIGION.name,
    difficulty: "Orta"
  },
  {
    id: 1895,
    question: "Hinduizm'deki geleneksel kast sisteminde, genellikle rahipler, öğretmenler ve alimlerden oluşan en üstteki sosyal sınıf (Varna) hangisidir?",
    options: ["Kshatriya", "Vaişya", "Brahman", "Şudra"],
    correct: 2,
    category: CATEGORIES.MYTHOLOGY_RELIGION.name,
    difficulty: "Zor"
  },
  {
    id: 1896,
    question: "Roma mitolojisinde, kapılar, geçitler, başlangıçlar ve sonların iki yüzlü tanrısı kimdir?",
    options: ["Mars", "Merkür", "Jüpiter", "Janus"],
    correct: 3,
    category: CATEGORIES.MYTHOLOGY_RELIGION.name,
    difficulty: "Zor"
  },
  {
    id: 1897,
    question: "Budizm'in en eski kutsal metinlerinden biri olan ve 'Üç Sepet' anlamına gelen Pali dilindeki eser nedir?",
    options: ["Tripitaka", "Veda", "Sutra", "Upanishad"],
    correct: 0,
    category: CATEGORIES.MYTHOLOGY_RELIGION.name,
    difficulty: "Zor"
  },
  {
    id: 1898,
    question: "Yunan mitolojisinde, tanrıların insan ırkına ceza olarak yarattığı ve kutusundan tüm kötülükleri dünyaya yayan figür kimdir?",
    options: ["Helena", "Pandora", "Medea", "Elektra"],
    correct: 1,
    category: CATEGORIES.MYTHOLOGY_RELIGION.name,
    difficulty: "Kolay"
  },
  {
    id: 1899,
    question: "İslam dininin en kutsal şehri ve Kâbe'nin bulunduğu yer neresidir?",
    options: ["Kudüs", "Medine", "Mekke", "Şam"],
    correct: 2,
    category: CATEGORIES.MYTHOLOGY_RELIGION.name,
    difficulty: "Kolay"
  },
  {
    id: 1900,
    question: "Hristiyanlıkta, inancı uğruna taşlanarak öldürülen ve genellikle 'ilk şehit' (protomartyr) olarak anılan kişi kimdir?",
    options: ["Petrus", "Pavlus", "Yahya (Vaftizci)", "Stefanus"],
    correct: 3,
    category: CATEGORIES.MYTHOLOGY_RELIGION.name,
    difficulty: "Zor"
  },
  {
    id: 1901,
    question: "Antik Yunan mitolojisinde, tanrıların kralı ve gök gürültüsü tanrısı kimdir?",
    options: ["Poseidon", "Hades", "Zeus", "Apollo"],
    correct: 2,
    category: "Mitoloji ve Dinler",
    difficulty: "Kolay"
  },
  {
    id: 1902,
    question: "Hristiyanlıkta, İsa'nın çarmıha gerildiği yerin adı nedir?",
    options: ["Betlehem", "Celile", "Golgota (Kafatası Tepesi)", "Nazaret"],
    correct: 2,
    category: "Mitoloji ve Dinler",
    difficulty: "Kolay"
  },
  {
    id: 1903,
    question: "Hinduizm'de, koruyucu tanrı olarak bilinen ve dünyayı kötü güçlerden kurtaran tanrı kimdir?",
    options: ["Brahma", "Şiva", "Vişnu", "Ganeşa"],
    correct: 2,
    category: "Mitoloji ve Dinler",
    difficulty: "Kolay"
  },
  {
    id: 1904,
    question: "Norse (İskandinav) mitolojisinde, tanrıların ve savaşçıların öbür dünyada toplandığı büyük salonun adı nedir?",
    options: ["Niflheim", "Helheim", "Valhalla", "Asgard"],
    correct: 2,
    category: "Mitoloji ve Dinler",
    difficulty: "Kolay"
  },
  {
    id: 1905,
    question: "İslamiyet'te, peygamberin Mekke'den Medine'ye göç etmesi olayına ne ad verilir?",
    options: ["Miraç", "Vahiy", "Hicret", "Tebliğ"],
    correct: 2,
    category: "Mitoloji ve Dinler",
    difficulty: "Kolay"
  },
  {
    id: 1906,
    question: "Antik Mısır mitolojisinde, ölümden sonraki yaşamın ve ölüler dünyasının tanrısı kimdir?",
    options: ["Ra", "Anubis", "Osiris", "Horus"],
    correct: 2,
    category: "Mitoloji ve Dinler",
    difficulty: "Kolay"
  },
  {
    id: 1907,
    question: "Budizm'in kurucusu kabul edilen ve 'Aydınlanmış Kişi' anlamına gelen isim nedir?",
    options: ["Lao Tzu", "Konfüçyüs", "Siddhartha Gautama (Buda)", "Mahavira"],
    correct: 2,
    category: "Mitoloji ve Dinler",
    difficulty: "Kolay"
  },
  {
    id: 1908,
    question: "Yahudilikte, Tanrı'nın Hz. Musa'ya Sina Dağı'nda verdiği on emrin bulunduğu kutsal sandığa ne ad verilir?",
    options: ["Menora", "Tevrat", "Ahit Sandığı (Ark of the Covenant)", "Talmud"],
    correct: 2,
    category: "Mitoloji ve Dinler",
    difficulty: "Orta"
  },
  {
    id: 1909,
    question: "Yunan mitolojisinde, yeraltı dünyasının (Hades) kapısını bekleyen üç başlı köpek nedir?",
    options: ["Hydra", "Medusa", "Kerberos (Cerberus)", "Minotor"],
    correct: 2,
    category: "Mitoloji ve Dinler",
    difficulty: "Kolay"
  },
  {
    id: 1910,
    question: "İslam'ın beş şartından biri olan ve kutsal topraklara (Mekke) yapılan hac vazifesine ne ad verilir?",
    options: ["Namaz", "Zekat", "Hac", "Oruç"],
    correct: 2,
    category: "Mitoloji ve Dinler",
    difficulty: "Kolay"
  },
  {
    id: 1911,
    question: "Roma mitolojisinde, savaş tanrısı kimdir?",
    options: ["Jüpiter", "Vulcan", "Mars", "Neptün"],
    correct: 2,
    category: "Mitoloji ve Dinler",
    difficulty: "Kolay"
  },
  {
    id: 1912,
    question: "Çin mitolojisinde, genellikle bereket ve gücü temsil eden efsanevi yaratık nedir?",
    options: ["Anka Kuşu", "Kaplan", "Ejderha", "Maymun"],
    correct: 2,
    category: "Mitoloji ve Dinler",
    difficulty: "Kolay"
  },
  {
    id: 1913,
    question: "Sihizm'in kutsal kitabı ve ebedi gurusu olarak kabul edilen metin nedir?",
    options: ["Upanishadlar", "Vedalar", "Guru Granth Sahib", "Tao Te Ching"],
    correct: 2,
    category: "Mitoloji ve Dinler",
    difficulty: "Zor"
  },
  {
    id: 1914,
    question: "Yunan mitolojisinde, insanlara ateşi çaldığı için zincire vurularak cezalandırılan titan kimdir?",
    options: ["Atlas", "Kronos", "Prometheus", "Epimetheus"],
    correct: 2,
    category: "Mitoloji ve Dinler",
    difficulty: "Kolay"
  },
  {
    id: 1915,
    question: "Hristiyanlıkta, İsa'nın dirilişini kutlayan ve genellikle baharda kutlanan bayram nedir?",
    options: ["Noel", "Paskalya", "Pentikost", "Cadılar Bayramı"],
    correct: 1,
    category: "Mitoloji ve Dinler",
    difficulty: "Kolay"
  },
  {
    id: 1916,
    question: "Mezopotamya mitolojisinde, Büyük Tufan hikayesinin kahramanı olarak bilinen Sümer kralı kimdir?",
    options: ["Sargon", "Hammurabi", "Gılgamış", "Nabukadnezar"],
    correct: 2,
    category: "Mitoloji ve Dinler",
    difficulty: "Orta"
  },
  {
    id: 1917,
    question: "Japon mitolojisinde, Güneş Tanrıçası ve Shinto inancının en önemli tanrısı kimdir?",
    options: ["Susanoo", "Tsukuyomi", "Amaterasu", "Izanami"],
    correct: 2,
    category: "Mitoloji ve Dinler",
    difficulty: "Zor"
  },
  {
    id: 1918,
    question: "Taoizm'in kurucusu olarak kabul edilen ve 'Tao Te Ching' adlı eseri yazdığı düşünülen Çinli filozof kimdir?",
    options: ["Konfüçyüs", "Mencius", "Lao Tzu", "Sun Tzu"],
    correct: 2,
    category: "Mitoloji ve Dinler",
    difficulty: "Orta"
  },
  {
    id: 1919,
    question: "İslamiyette, cennet ve cehennem arasında olduğu rivayet edilen ve bir köprü veya duvar olarak tasvir edilen yerin adı nedir?",
    options: ["Sırat Köprüsü", "Tuba Ağacı", "Araf", "Kevser"],
    correct: 2,
    category: "Mitoloji ve Dinler",
    difficulty: "Kolay"
  },
  {
    id: 1920,
    question: "Norse mitolojisinde, tüm dünyayı saran ve Ragnarök'ta (Tanrıların Alacakaranlığı) serbest kalacak olan dev yılan nedir?",
    options: ["Fenrir", "Hela", "Jörmungandr", "Sleipnir"],
    correct: 2,
    category: "Mitoloji ve Dinler",
    difficulty: "Orta"
  },
  {
    id: 1921,
    question: "Yunan mitolojisinde, güzellik ve aşk tanrıçası kimdir?",
    options: ["Artemis", "Hera", "Afrodit", "Athena"],
    correct: 2,
    category: "Mitoloji ve Dinler",
    difficulty: "Kolay"
  },
  {
    id: 1922,
    question: "Yahudilikte, erkek çocukların sekiz günlükken sünnet edilmesi törenine ne ad verilir?",
    options: ["Bar Mitsva", "Pesah", "Brit Mila (Sünnet Anlaşması)", "Yom Kippur"],
    correct: 2,
    category: "Mitoloji ve Dinler",
    difficulty: "Orta"
  },
  {
    id: 1923,
    question: "Hinduizm'de, yok edici ve yeniden yaratıcı gücü temsil eden tanrı kimdir?",
    options: ["Brahma", "Vişnu", "Şiva", "Lakşmi"],
    correct: 2,
    category: "Mitoloji ve Dinler",
    difficulty: "Kolay"
  },
  {
    id: 1924,
    question: "Maya mitolojisinde, Gök Tanrısı ve yaratan tanrı olarak bilinen figür kimdir?",
    options: ["Tlaloc", "Quetzalcoatl", "Itzamna", "Huitzilopochtli"],
    correct: 2,
    category: "Mitoloji ve Dinler",
    difficulty: "Zor"
  },
  {
    id: 1925,
    question: "Hristiyanlıkta, dinsel ibadet ve öğretilerin merkezi olan, İncil'in bir parçası olan kitaplar bütününe ne ad verilir?",
    options: ["Tevrat", "Zebur", "Yeni Ahit", "Eski Ahit"],
    correct: 2,
    category: "Mitoloji ve Dinler",
    difficulty: "Kolay"
  },
  {
    id: 1926,
    question: "Afrika mitolojilerinde, genellikle gökkuşağı ile ilişkilendirilen ve yılan şeklinde tasvir edilen yaratık nedir?",
    options: ["Leopar Ruhu", "Aslan Tanrısı", "Gökkuşağı Yılanı (Ayida Weddo / Oshun)", "Fil Ruhu"],
    correct: 2,
    category: "Mitoloji ve Dinler",
    difficulty: "Zor"
  },
  {
    id: 1927,
    question: "Yunan mitolojisinde, ölüleri Kharon'un kayığıyla yeraltı dünyasına götürdüğü nehir nedir?",
    options: ["Tuna Nehri", "Fırat Nehri", "Styx Nehri", "Nil Nehri"],
    correct: 2,
    category: "Mitoloji ve Dinler",
    difficulty: "Kolay"
  },
  {
    id: 1928,
    question: "İslamiyet'te, yoksullara yardım etmek amacıyla verilen zorunlu sadakaya ne ad verilir?",
    options: ["Sadaka", "Fıtır Sadakası", "Zekat", "Fitre"],
    correct: 2,
    category: "Mitoloji ve Dinler",
    difficulty: "Kolay"
  },
  {
    id: 1929,
    question: "Budizm'de, dünyanın acılarından kurtulmak için izlenmesi gereken yola ne ad verilir?",
    options: ["Karma", "Reenkarnasyon", "Sekiz Aşamalı Asil Yol", "Nirvana"],
    correct: 2,
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
    options: ["Vahiy", "Mektuplar", "İnciller (Matta, Markos, Luka, Yuhanna)", "Resullerin İşleri"],
    correct: 2,
    category: "Mitoloji ve Dinler",
    difficulty: "Kolay"
  },
  {
    id: 1933,
    question: "Antik Mısır'da, güneş tanrısı ve tanrıların kralı olarak kabul edilen figür kimdir?",
    options: ["Thoth", "Set", "Ra", "Anubis"],
    correct: 2,
    category: "Mitoloji ve Dinler",
    difficulty: "Kolay"
  },
  {
    id: 1934,
    question: "Hinduizm'de, 'Kutsal Üçlü'yü (Trimurti) oluşturan tanrılardan biri olmayan kimdir?",
    options: ["Brahma (Yaratıcı)", "Vişnu (Koruyucu)", "İndra (Savaş Tanrısı)", "Şiva (Yok Edici)"],
    correct: 2,
    category: "Mitoloji ve Dinler",
    difficulty: "Kolay"
  },
  {
    id: 1935,
    question: "Aztek mitolojisinde, tüylü yılan tanrısı olarak bilinen ve yaratılışla ilişkilendirilen tanrı kimdir?",
    options: ["Huitzilopochtli", "Tlaloc", "Quetzalcoatl", "Tezcatlipoca"],
    correct: 2,
    category: "Mitoloji ve Dinler",
    difficulty: "Zor"
  },
  {
    id: 1936,
    question: "İslamiyet'te, Hz. Muhammed'in göğe yükseldiği (semaya çıktığı) geceye ne ad verilir?",
    options: ["Kadir Gecesi", "Berat Gecesi", "Miraç Gecesi", "Regaib Gecesi"],
    correct: 2,
    category: "Mitoloji ve Dinler",
    difficulty: "Kolay"
  },
  {
    id: 1937,
    question: "Yunan mitolojisinde, yeryüzü tanrıçası ve tüm titanların annesi kimdir?",
    options: ["Hera", "Artemis", "Gaia", "Hestia"],
    correct: 2,
    category: "Mitoloji ve Dinler",
    difficulty: "Orta"
  },
  {
    id: 1938,
    question: "Konfüçyüsçülük'te, ahlaki mükemmelliğe ulaşmış, erdemli insan anlamına gelen terim nedir?",
    options: ["Tao", "Yin", "Junzi (Asil İnsan)", "Wei"],
    correct: 2,
    category: "Mitoloji ve Dinler",
    difficulty: "Zor"
  },
  {
    id: 1939,
    question: "Norse mitolojisinde, Odin'in atı olan ve sekiz bacağı bulunan efsanevi hayvan nedir?",
    options: ["Geri", "Freki", "Sleipnir", "Hugin"],
    correct: 2,
    category: "Mitoloji ve Dinler",
    difficulty: "Orta"
  },
  {
    id: 1940,
    question: "Jainizm'in temelini oluşturan ve şiddetsizlik anlamına gelen ilke nedir?",
    options: ["Karma", "Dharma", "Ahimsa", "Nirvana"],
    correct: 2,
    category: "Mitoloji ve Dinler",
    difficulty: "Zor"
  },
  {
    id: 1941,
    question: "Antik Yunan'da, bilgi, sanat ve ilham tanrıçaları olarak bilinen dokuz kız kardeşe ne ad verilir?",
    options: ["Hesperidler", "Harpyalar", "Müzler (Musalar)", "Naiadlar"],
    correct: 2,
    category: "Mitoloji ve Dinler",
    difficulty: "Kolay"
  },
  {
    id: 1942,
    question: "Yahudilikte, haftalık dinlenme ve ibadet günü olan ve Cuma gün batımından Cumartesi gün batımına kadar süren güne ne ad verilir?",
    options: ["Roş Aşana", "Yom Kippur", "Şabat (Sabbath)", "Pesah"],
    correct: 2,
    category: "Mitoloji ve Dinler",
    difficulty: "Kolay"
  },
  {
    id: 1943,
    question: "Antik Mısır'da, Güneş Tanrısı Ra'nın başındaki güneş diski ve kutsal yılanın birleşimi olan sembol nedir?",
    options: ["Ankh", "Sfenks", "Uraeus", "Göz (Udjat)"],
    correct: 2,
    category: "Mitoloji ve Dinler",
    difficulty: "Orta"
  },
  {
    id: 1944,
    question: "Budizm'de, kişinin yeniden doğuş döngüsünden (Samsara) kurtuluşa erdiği nihai durum nedir?",
    options: ["Dharma", "Karma", "Nirvana", "Mokşa"],
    correct: 2,
    category: "Mitoloji ve Dinler",
    difficulty: "Kolay"
  },
  {
    id: 1945,
    question: "İslamiyet'te, dört büyük melekten biri olan ve ölüm meleği olarak da bilinen melek kimdir?",
    options: ["Cebrail", "Mikail", "Azrail", "İsrafil"],
    correct: 2,
    category: "Mitoloji ve Dinler",
    difficulty: "Kolay"
  },
  {
    id: 1946,
    question: "Yunan mitolojisinde, Girit'teki bir labirentte yaşayan, yarı insan yarı boğa yaratık nedir?",
    options: ["Kentaur", "Medusa", "Minotor", "Siren"],
    correct: 2,
    category: "Mitoloji ve Dinler",
    difficulty: "Kolay"
  },
  {
    id: 1947,
    question: "Hinduizm'de, kutsal kabul edilen ve Hindistan'ın en uzun nehri olan nehir nedir?",
    options: ["İndus Nehri", "Yamuna Nehri", "Ganj Nehri", "Brahmaputra"],
    correct: 2,
    category: "Mitoloji ve Dinler",
    difficulty: "Kolay"
  },
  {
    id: 1948,
    question: "Hristiyanlıkta, Yeni Ahit'in en son kitabı olan ve dünyanın sonunu (kıyamet) anlatan kitap nedir?",
    options: ["Matta İncili", "Romalılara Mektup", "Vahiy (Apokalips)", "Yuhanna İncili"],
    correct: 2,
    category: "Mitoloji ve Dinler",
    difficulty: "Orta"
  },
  {
    id: 1949,
    question: "İskandinav mitolojisinde, tanrı Odin'in bilgelik elde etmek için feda ettiği organı nedir?",
    options: ["Kolunu", "Bacağını", "Gözünü", "Kulağını"],
    correct: 2,
    category: "Mitoloji ve Dinler",
    difficulty: "Orta"
  },
  {
    id: 1950,
    question: "Şamanizm'de, ruhlar ve insanlar arasında aracılık eden dini lidere ne ad verilir?",
    options: ["Rahip", "Derviş", "Şaman", "Guru"],
    correct: 2,
    category: "Mitoloji ve Dinler",
    difficulty: "Kolay"
  },
  {
    id: 1951,
    question: "Yunan mitolojisinde, tanrıça Artemis'in alanı nedir?",
    options: ["Aşk ve Güzellik", "Savaş ve Bilgelik", "Avcılık ve Ay", "Bereket ve Tarım"],
    correct: 2,
    category: "Mitoloji ve Dinler",
    difficulty: "Kolay"
  },
  {
    id: 1952,
    question: "Yahudilikte, Tanrı ile İsrail halkı arasındaki anlaşmayı (ahit) temsil eden ve kutsal sayılan sembol nedir?",
    options: ["Menora", "Davut Yıldızı", "Magen David", "Menorah"],
    correct: 1,
    category: "Mitoloji ve Dinler",
    difficulty: "Kolay"
  },
  {
    id: 1953,
    question: "Mısır mitolojisinde, gök gürültüsü ve fırtına tanrısı, aynı zamanda karmaşanın sembolü olan tanrı kimdir?",
    options: ["Thoth", "Osiris", "Seth", "Anubis"],
    correct: 2,
    category: "Mitoloji ve Dinler",
    difficulty: "Orta"
  },
  {
    id: 1954,
    question: "Hinduizm'de, iyi ve kötü eylemlerin sonuçlarının kişinin bir sonraki hayatını belirlediği inanç sistemi nedir?",
    options: ["Mokşa", "Nirvana", "Karma", "Dharma"],
    correct: 2,
    category: "Mitoloji ve Dinler",
    difficulty: "Kolay"
  },
  {
    id: 1955,
    question: "İslamiyet'te, Kur'an'ın ilk ayetlerinin Hz. Muhammed'e indirildiği mağaranın adı nedir?",
    options: ["Sevr Mağarası", "Kehf Mağarası", "Hira Mağarası", "Ashab-ı Kehf"],
    correct: 2,
    category: "Mitoloji ve Dinler",
    difficulty: "Kolay"
  },
  {
    id: 1956,
    question: "Yunan mitolojisinde, Güneş Tanrısı kimdir?",
    options: ["Ares", "Zeus", "Apollo", "Hermes"],
    correct: 2,
    category: "Mitoloji ve Dinler",
    difficulty: "Kolay"
  },
  {
    id: 1957,
    question: "Hristiyanlıkta, Üçleme (Baba, Oğul, Kutsal Ruh) inancına ne ad verilir?",
    options: ["Hristiyanlık", "Katoliklik", "Teslis (Trinity)", "Protestanlık"],
    correct: 2,
    category: "Mitoloji ve Dinler",
    difficulty: "Kolay"
  },
  {
    id: 1958,
    question: "Antik Mezopotamya'da, her şehir devleti için bir koruyucu tanrıya adanmış, basamaklı piramit şeklinde tapınak nedir?",
    options: ["Piramit", "Tapınak", "Ziggurat", "Kule"],
    correct: 2,
    category: "Mitoloji ve Dinler",
    difficulty: "Orta"
  },
  {
    id: 1959,
    question: "Meksika mitolojisinde, Ateş ve Güneş Tanrısı olarak bilinen Aztek tanrısı kimdir?",
    options: ["Tlaloc", "Tezcatlipoca", "Huitzilopochtli", "Quetzalcoatl"],
    correct: 2,
    category: "Mitoloji ve Dinler",
    difficulty: "Zor"
  },
  {
    id: 1960,
    question: "Taoizm'in sembolü olan ve evrendeki karşıt güçlerin dengesini temsil eden işaret nedir?",
    options: ["Güneş", "Ay", "Yin ve Yang", "Lotus Çiçeği"],
    correct: 2,
    category: "Mitoloji ve Dinler",
    difficulty: "Kolay"
  },
  {
    id: 1961,
    question: "Yunan mitolojisinde, labirentten çıkışı bulan ve ipliği kullanan kahraman kimdir?",
    options: ["Perseus", "Herkül", "Theseus", "Jason"],
    correct: 2,
    category: "Mitoloji ve Dinler",
    difficulty: "Kolay"
  },
  {
    id: 1962,
    question: "Yahudilikte, büyük günahları affetmek için yılda bir kez tutulan en kutsal oruç ve kefaret günü nedir?",
    options: ["Pesah", "Purim", "Yom Kippur (Kefaret Günü)", "Hanuka"],
    correct: 2,
    category: "Mitoloji ve Dinler",
    difficulty: "Orta"
  },
  {
    id: 1963,
    question: "Budizm'de, Buda'nın öğretilerini, cemaati ve ahlaki kuralları kapsayan üç temel ilkeye ne ad verilir?",
    options: ["Üç Kapı", "Üç Yol", "Üç Hazine (Triratna)", "Üç Gerçek"],
    correct: 2,
    category: "Mitoloji ve Dinler",
    difficulty: "Zor"
  },
  {
    id: 1964,
    question: "Antik Mısır'da, hayat, bereket ve ölümsüzlük sembolü olan anahtar şeklindeki sembol nedir?",
    options: ["Sfenks", "Piramit", "Ankh (Hayat Anahtarı)", "Kartuş"],
    correct: 2,
    category: "Mitoloji ve Dinler",
    difficulty: "Kolay"
  },
  {
    id: 1965,
    question: "Norse mitolojisinde, tanrıların Alacakaranlığı ve dünyanın sonu olarak bilinen kıyamet savaşına ne ad verilir?",
    options: ["Götterdämmerung", "Asgard", "Ragnarök", "Jotunheim"],
    correct: 2,
    category: "Mitoloji ve Dinler",
    difficulty: "Kolay"
  },
  {
    id: 1966,
    question: "İslamiyet'te, Kur'an'ın ilk sure'sine ne ad verilir?",
    options: ["Yasin Suresi", "İhlas Suresi", "Fatiha Suresi", "Bakara Suresi"],
    correct: 2,
    category: "Mitoloji ve Dinler",
    difficulty: "Kolay"
  },
  {
    id: 1967,
    question: "Yunan mitolojisinde, ölülerin ruhlarının bulunduğu yeraltı dünyasının tanrısı kimdir?",
    options: ["Zeus", "Poseidon", "Hades", "Hermes"],
    correct: 2,
    category: "Mitoloji ve Dinler",
    difficulty: "Kolay"
  },
  {
    id: 1968,
    question: "Sihizm'de, tüm insanlar arasında eşitliği savunan ve ırk, kast farklarını reddeden inanç nedir?",
    options: ["Karma", "Dharma", "Seva (Hizmet)", "Reenkarnasyon"],
    correct: 2,
    category: "Mitoloji ve Dinler",
    difficulty: "Zor"
  },
  {
    id: 1969,
    question: "Hristiyanlıkta, Meryem Ana'nın oğlu İsa'ya hamile kaldığı mucizevi olaya ne ad verilir?",
    options: ["Vaftiz", "Çarmıha Gerilme", "Müjde (Duyuru)", "Diriliş"],
    correct: 2,
    category: "Mitoloji ve Dinler",
    difficulty: "Orta"
  },
  {
    id: 1970,
    question: "Hinduizm'de, yaratılışın ilk ve en eski kutsal metinleri olan külliyata ne ad verilir?",
    options: ["Bhagavad Gita", "Upanishadlar", "Vedalar", "Puranalar"],
    correct: 2,
    category: "Mitoloji ve Dinler",
    difficulty: "Kolay"
  },
  {
    id: 1971,
    question: "Yunan mitolojisinde, kendi yansımasına aşık olan ve bu yüzden ölen kahraman kimdir?",
    options: ["Achilles", "Ikarus", "Narkissos", "Oidipus"],
    correct: 2,
    category: "Mitoloji ve Dinler",
    difficulty: "Kolay"
  },
  {
    id: 1972,
    question: "İslamiyet'te, namaz kılınan temiz ve kutsal yere ne ad verilir?",
    options: ["Kabe", "Mescit", "Cami", "Türbe"],
    correct: 2,
    category: "Mitoloji ve Dinler",
    difficulty: "Kolay"
  },
  {
    id: 1973,
    question: "Roma mitolojisinde, aşk ve güzellik tanrıçası kimdir?",
    options: ["Minerva", "Ceres", "Venüs", "Diana"],
    correct: 2,
    category: "Mitoloji ve Dinler",
    difficulty: "Kolay"
  },
  {
    id: 1974,
    question: "Budizm'de, yaşamın acılarla dolu olduğunu belirten temel öğretiye ne ad verilir?",
    options: ["Karma", "Nirvana", "Dört Yüce Gerçek", "Sekiz Yol"],
    correct: 2,
    category: "Mitoloji ve Dinler",
    difficulty: "Orta"
  },
  {
    id: 1975,
    question: "İskandinav mitolojisinde, Thor'un çekici olan ve sadece onun kullanabildiği silahın adı nedir?",
    options: ["Gungnir", "Tyrfing", "Mjölnir", "Hofund"],
    correct: 2,
    category: "Mitoloji ve Dinler",
    difficulty: "Kolay"
  },
  {
    id: 1976,
    question: "Aztek mitolojisinde, Güneş'in her gün doğması için insan kurbanı talep eden tanrı kimdir?",
    options: ["Quetzalcoatl", "Tlaloc", "Huitzilopochtli", "Tezcatlipoca"],
    correct: 2,
    category: "Mitoloji ve Dinler",
    difficulty: "Zor"
  },
  {
    id: 1977,
    question: "Yahudilik ve Hristiyanlıkta, Adem ve Havva'nın Cennet'ten kovulmasına neden olan ilk günah nedir?",
    options: ["Hırs", "Yalan", "İtaatsizlik (Yasak Meyveyi Yemek)", "Kıskançlık"],
    correct: 2,
    category: "Mitoloji ve Dinler",
    difficulty: "Kolay"
  },
  {
    id: 1978,
    question: "Türk mitolojisinde, yeryüzünün ilk insanı ve yaratılış destanlarının ana figürü kimdir?",
    options: ["Alp Er Tunga", "Oğuz Kağan", "Erlik Han", "Kayra Han (veya Er Tös Han)"],
    correct: 3,
    category: "Mitoloji ve Dinler",
    difficulty: "Orta"
  },
  {
    id: 1979,
    question: "Antik Mısır'da, akıl, bilgi ve yazı tanrısı olarak bilinen tanrı kimdir?",
    options: ["Ra", "Osiris", "Thoth", "Horus"],
    correct: 2,
    category: "Mitoloji ve Dinler",
    difficulty: "Orta"
  },
  {
    id: 1980,
    question: "Jainizm'de, tüm canlılara karşı zararsızlık ve şefkat ilkesi olan 'Ahimsa'yı uygulayan kişiye ne ad verilir?",
    options: ["Guru", "Brahmin", "Tirthankara", "Rahipler"],
    correct: 2,
    category: "Mitoloji ve Dinler",
    difficulty: "Zor"
  },
  {
    id: 1981,
    question: "Yunan mitolojisinde, deniz kızı vücuduna ve korkunç bir sese sahip olan efsanevi yaratıklar nedir?",
    options: ["Harpyalar", "Naiadlar", "Sirenler", "Müzler"],
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
    options: ["Paskalya", "Pentikost", "Noel (Christmas)", "Epifani"],
    correct: 2,
    category: "Mitoloji ve Dinler",
    difficulty: "Kolay"
  },
  {
    id: 1984,
    question: "Roma mitolojisinde, tanrıların habercisi ve ticaret tanrısı kimdir?",
    options: ["Jüpiter", "Apollo", "Merkür", "Mars"],
    correct: 2,
    category: "Mitoloji ve Dinler",
    difficulty: "Kolay"
  },
  {
    id: 1985,
    question: "Hinduizm'de, ebedi ve ilahi düzen, yasa veya doğru yaşam yolu anlamına gelen kavram nedir?",
    options: ["Karma", "Mokşa", "Dharma", "Samsara"],
    correct: 2,
    category: "Mitoloji ve Dinler",
    difficulty: "Orta"
  },
  {
    id: 1986,
    question: "Konfüçyüsçülük'ün temelini oluşturan, aileye, yaşlılara ve devlete saygı ve itaat ilkesine ne ad verilir?",
    options: ["Ren (İnsanlık)", "Li (Ritüel)", "Xiao (Evlatlık Saygısı)", "Yi (Doğruluk)"],
    correct: 2,
    category: "Mitoloji ve Dinler",
    difficulty: "Zor"
  },
  {
    id: 1987,
    question: "Yunan mitolojisinde, Titanların en büyüğü ve zamanın sembolü olan titan kimdir?",
    options: ["Atlas", "Oceanus", "Kronos", "Prometheus"],
    correct: 2,
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
    options: ["Dharma", "Nirvana", "Karma", "Samsara"],
    correct: 2,
    category: "Mitoloji ve Dinler",
    difficulty: "Kolay"
  },
  {
    id: 1990,
    question: "Yunan mitolojisinde, şarap, coşku ve bereket tanrısı kimdir?",
    options: ["Apollo", "Dionysos", "Hades", "Hermes"],
    correct: 1,
    category: "Mitoloji ve Dinler",
    difficulty: "Kolay"
  },
  {
    id: 1991,
    question: "İslamiyet'te, namaz kılmadan önce belirli organları su ile yıkama işlemine ne ad verilir?",
    options: ["Gusül", "Teyemmüm", "Abdest", "Temizlik"],
    correct: 2,
    category: "Mitoloji ve Dinler",
    difficulty: "Kolay"
  },
  {
    id: 1992,
    question: "Yahudilikte, inançlarının ve yaşam tarzlarının temelini oluşturan yasal ve ahlaki kurallar bütününe ne ad verilir?",
    options: ["Talmud", "Kabala", "Halakha", "Tevrat"],
    correct: 2,
    category: "Mitoloji ve Dinler",
    difficulty: "Zor"
  },
  {
    id: 1993,
    question: "Norse mitolojisinde, tanrıların evi ve göklerin en yüksek alemi nedir?",
    options: ["Midgard", "Jotunheim", "Asgard", "Helheim"],
    correct: 2,
    category: "Mitoloji ve Dinler",
    difficulty: "Kolay"
  },
  {
    id: 1994,
    question: "Hinduizm'de, yeniden doğuş döngüsüne ne ad verilir?",
    options: ["Mokşa", "Dharma", "Samsara", "Karma"],
    correct: 2,
    category: "Mitoloji ve Dinler",
    difficulty: "Kolay"
  },
  {
    id: 1995,
    question: "Hristiyanlıkta, bir kişinin günahlarından arınmak için Tanrı'dan af dilemesi eylemine ne ad verilir?",
    options: ["Vaftiz", "Komünyon", "Tövbe (İtiraf)", "Hac"],
    correct: 2,
    category: "Mitoloji ve Dinler",
    difficulty: "Kolay"
  },
  {
    id: 1996,
    question: "Yunan mitolojisinde, bilgeliğin ve savaş stratejisinin tanrıçası kimdir?",
    options: ["Hera", "Afrodit", "Athena", "Artemis"],
    correct: 2,
    category: "Mitoloji ve Dinler",
    difficulty: "Kolay"
  },
  {
    id: 1997,
    question: "İslamiyet'te, kıyametin kopuşunu haber verecek olan meleğin adı nedir?",
    options: ["Cebrail", "Mikail", "İsrafil", "Azrail"],
    correct: 2,
    category: "Mitoloji ve Dinler",
    difficulty: "Kolay"
  },
  {
    id: 1998,
    question: "Türk mitolojisinde, yeraltı dünyasının ve kötülüğün tanrısı kimdir?",
    options: ["Ülgen", "Gök Tanrı", "Erlik Han", "Kayra Han"],
    correct: 2,
    category: "Mitoloji ve Dinler",
    difficulty: "Kolay"
  },
  {
    id: 1999,
    question: "Antik Mısır'da, ölenlerin ruhlarının öbür dünyaya güvenle geçmesini sağlamak için yazılan ünlü metin nedir?",
    options: ["Piramit Metinleri", "Kefen Metinleri", "Ölüler Kitabı", "Amduat"],
    correct: 2,
    category: "Mitoloji ve Dinler",
    difficulty: "Orta"
  },
  {
    id: 2000,
    question: "Budizm'de, Buda'nın ilk vaazında açıkladığı, acı ve ızdırabın nedenlerini açıklayan temel öğreti nedir?",
    options: ["Karma", "Nirvana", "Dört Yüce Gerçek", "Sekiz Yol"],
    correct: 2,
    category: "Mitoloji ve Dinler",
    difficulty: "Kolay"
  }

  // ... Bu şekilde 10.000+ soru eklemeye devam edeceğiz
  // Her kategori için yüzlerce soru olacak

];

// 🎯 TOPLAM SORU SAYISI
export const TOTAL_QUESTIONS = QUESTIONS.length;