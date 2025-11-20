# Değişiklik Günlüğü ve Planlar

## 20 Kasım 2025 - Leaderboard Özelliği Eklendi

### Yapılan Değişiklikler

1.  **Rastgele Kullanıcı Adı Oluşturma:**
    *   `src/utils/usernameGenerator.ts` dosyası oluşturuldu.
    *   Kullanıcılar için sıfat ve isim kombinasyonlarından oluşan (örn: "HızlıKaplan123") rastgele kullanıcı adları üretiliyor.
    *   Kullanıcı adı `localStorage` üzerinde saklanarak kalıcılık sağlanıyor.

2.  **Mock Leaderboard Verisi:**
    *   `src/data/leaderboard.ts` dosyası oluşturuldu.
    *   Rastgele puanlara sahip sanal kullanıcılar içeren bir JSON yapısı oluşturuldu.

3.  **Leaderboard Bileşeni:**
    *   `src/components/Leaderboard.tsx` bileşeni oluşturuldu.
    *   Kullanıcının kendi skorunu ve diğer kullanıcıların skorlarını gösteren bir tablo tasarlandı.
    *   Aktif kullanıcı tabloda vurgulanarak (highlight) gösteriliyor.

4.  **Arayüz Entegrasyonu:**
    *   `src/App.tsx` güncellendi.
    *   "Bugünkü Quiz'i Tamamladın!" ekranına ve oyun sonu ekranına Leaderboard tablosu eklendi.
    *   `src/App.css` dosyasına leaderboard için gerekli stiller eklendi.

### Gelecek Planları

1.  **Backend Entegrasyonu:**
    *   Şu anki mock veriler yerine gerçek bir backend servisi ile kullanıcı skorlarının sunucuda tutulması.
    *   Tüm kullanıcıların gerçek zamanlı sıralamasının çekilmesi.

2.  **Kullanıcı Adı Düzenleme:**
    *   Kullanıcıların rastgele atanan isimlerini değiştirebilmesi için bir profil düzenleme ekranı.

3.  **Haftalık/Aylık Sıralama:**
    *   Sadece günlük değil, haftalık ve aylık en iyiler listesinin oluşturulması. (Tamamlandı)

## 20 Kasım 2025 - Leaderboard Geliştirmeleri ve Düzenlemeler

### Yapılan Değişiklikler

1.  **Haftalık ve Aylık Sıralama:**
    *   `src/data/leaderboard.ts` güncellenerek günlük, haftalık ve aylık mock veriler eklendi.
    *   `src/components/Leaderboard.tsx` bileşenine sekme (tab) yapısı eklendi. Artık kullanıcılar "Günlük", "Haftalık" ve "Aylık" sıralamalar arasında geçiş yapabiliyor.
    *   Kullanıcının haftalık ve aylık skorları, günlük skor üzerinden simüle edilerek hesaplanıyor.

3.  **Sıralama Gösterimi Güncellemesi:**
    *   Leaderboard artık her zaman ilk 9 kişiyi gösteriyor.
    *   Eğer kullanıcı ilk 9'da değilse, 10. sırada kullanıcının kendi sırası ve puanı gösteriliyor (örn: 1, 2, ..., 9, 45).
    *   Kullanıcı ilk 9'da ise normal sıralama (ilk 10) gösteriliyor.

2.  **Kod Düzenlemeleri (Refactoring):**
    *   `src/App.tsx` içindeki `Footer` bileşeni ayrı bir dosyaya (`src/components/Footer.tsx`) taşındı. Bu sayede kod daha modüler ve temiz hale geldi.
    *   CSS dosyasındaki bazı stil tutarsızlıkları giderildi ve yeni leaderboard sekmeleri için stiller eklendi.

### Gelecek Planları

1.  **Gerçek Veri Bağlantısı:**
    *   Mock verilerin yerini gerçek API çağrılarının alması.
