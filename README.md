# Age of Empires II: HD Edition - Uygarlıklar Rehberi 🏰

Hoş geldiniz! Bu proje, **Age of Empires II: HD Edition** medeniyetleri için tarihsel atmosferde, interaktif bir single-page rehberi sunmaktadır.

## 📋 İçindekiler

- [Başlarken](#başlarken)
- [Dosya Yapısı](#dosya-yapısı)
- [Özellikler](#özellikler)
- [Wallpaper Ekleme](#wallpaper-ekleme)
- [Yeni Medeniyetler Ekleme](#yeni-medeniyetler-ekleme)
- [Renk Paletini Özelleştirme](#renk-paletini-özelleştirme)
- [Kontroller](#kontroller)

---

## 🚀 Başlarken

### 1. Dosyaları Açın
- `index.html` dosyasını tarayıcıda açın (herhangi bir sunucu gerekmez)
- **Veya**: VS Code'da "Live Server" eklentisini kullanın

### 2. Medeniyetleri Gezin
- Üstteki düğmelerle medeniyetler arasında geçiş yapın
- Tuş kullanarak: `1` (Türkler), `2` (İngilizler), `3` (Mayalar)

---

## 📁 Dosya Yapısı

```
AgeOf2HDrehber/
├── index.html          # Başlıca HTML (tüm içerik, semantik yapı)
├── style.css           # Tüm Stilizasyon (Custom Properties, Animasyonlar)
├── script.js           # İnteraktivite (Medeniyetler Geçişi, Efektler)
├── wallpaper.jpg       # ⭐ BURAYA KENDİN WALLPAPER EKLE
└── README.md          # Bu Dosya
```

---

## ✨ Özellikler

### Tasarım
- 🎨 **Tarihi Atmosfer**: Altın, koyu şarap kırmızısı, kraliyet mavisi
- 📐 **Responsive**: Mobil, tablet, masaüstü tamamen uyumlu
- ✨ **Smooth Animasyonlar**: Fade-in, Glow Efektleri, Hover Etkileri
- 🎭 **Semantic HTML**: Erişilebilirlik ve SEO uyumlu

### İnteraktivite
- 🔘 Medeniyetleri Seçme Düğmeleri
- ⌨️ Tuş Kısayolları (1, 2, 3)
- 💾 Son Seçimi Hatırlama (LocalStorage)
- 🎯 Smooth Scroll Navigasyonu

### İçerik Yapısı (Her Medeniyette)
1. **Ad & Amblemi** — Hemen göze çarpan başlık
2. **Odak Noktası** — Medeniyet'in ana konusu
3. **Medeniyet Bonusları** — Yeşil, onay işaretli listeler
4. **Zayıf Yönler** — Kırmızı, uyarı listesi
5. **Özel Birim** — Efsanevi birimle ilgili detaylar
6. **Özel Teknoloji** — Castleden araştırılan teknikler
7. **Takım Bonusu** — Müttefiklerine sağlanan avantajlar

---

## 🖼️ Wallpaper Ekleme

### Adım 1: Resmi Hazırla
- Resim boyutu: **1920x1080** piksel veya daha yüksek
- Format: **JPG, PNG** (GIF, WebP da çalışır)
- İçerik: Tarihi, épik, Age of Empires teması

### Adım 2: Dosyayı Ekle
- Resmi `index.html` ile aynı dizine koy
- Dosya adı: `wallpaper.jpg` (veya başka adı seç)
- ✅ **HAZIR**: Zaten `wallpaper.png` dosyası proje dizininde mevcut!

### Adım 3: CSS'de Güncelle
`style.css` dosyasını aç ve şu satırı bul:

```css
:root {
    /* Diğer Kurallar ... */
}

body {
    background-image: url('wallpaper.png'); /* ← HAZIR: wallpaper.png mevcut */
    /* Diğer kurallar ... */
}
```

Farklı bir wallpaper kullanmak istersen dosya adını güncelle:
```css
background-image: url('path/to/your-wallpaper.png');
```

---

## ➕ Yeni Medeniyetler Ekleme

### Adım 1: HTML'ye Düğme Ekle
`index.html` dosyasında `.nav-wrapper` bölümüne git ve yeni düğme ekle:

```html
<button class="civ-btn" data-civ="persians">
    <span class="civ-icon">🏹</span>
    <span class="civ-name">Persiler</span>
</button>
```

### Adım 2: Medeniyetin Kartını Oluştur
`.content-wrapper` bölümünde, son `civilization-card`'dan sonra ekle:

```html
<div class="civilization-card" data-civ="persians">
    <div class="civ-header">
        <div class="civ-header-top">
            <h2 class="civ-title">Persiler</h2>
            <div class="civ-emblem">🏹</div>
        </div>
        <p class="civ-focus">Odak: Fil Birlikleri</p>
    </div>

    <div class="civ-content">
        <!-- BONUSLAR -->
        <section class="section-box">
            <h3 class="section-title">✨ Medeniyet Bonusları</h3>
            <ul class="bonus-list">
                <li class="bonus-item">
                    <span class="bonus-icon">✓</span>
                    <span class="bonus-text"><strong>War Elephants</strong> daha güçlü</span>
                </li>
                <!-- Daha Fazla Bonus Ekle -->
            </ul>
        </section>

        <!-- ZAYıFLıKLAR -->
        <section class="section-box">
            <h3 class="section-title">⚠️ Zayıf Yönler</h3>
            <ul class="weakness-list">
                <!-- Zayıflık Maddelerini Ekle -->
            </ul>
        </section>

        <!-- ÖZEL BİRİM -->
        <section class="section-box featured">
            <h3 class="section-title">⚔️ Özel Birim: War Elephant</h3>
            <div class="unique-unit">
                <!-- Detay Ekle -->
            </div>
        </section>

        <!-- ÖZEL TEKNOLOJİ -->
        <section class="section-box">
            <h3 class="section-title">🔬 Özel Teknoloji</h3>
            <div class="tech-item">
                <!-- Teknik Detay Ekle -->
            </div>
        </section>

        <!-- TAKIM BONUSU -->
        <section class="section-box">
            <h3 class="section-title">🤝 Takım Bonusu</h3>
            <div class="team-bonus">
                <!-- Bonus Açıklama Ekle -->
            </div>
        </section>
    </div>
</div>
```

### Adım 3: JavaScript'e Ekle (Opsiyonel)
`script.js`'deki keyboard shortcut'a ekle:

```javascript
const keyMap = {
    '1': 'turks',
    '2': 'britons',
    '3': 'mayans',
    '4': 'persians'  // ← YENİ EKLE
};
```

---

## 🎨 Renk Paletini Özelleştirme

`style.css` dosyasını aç, `:root` bölümüne git:

```css
:root {
    /* Altın Rengi */
    --color-gold: #D4AF37;           /* Ana Renk Değiştir */
    --color-gold-light: #F0E68C;
    --color-gold-dark: #B8860B;
    
    /* Vurgular */
    --color-wine-red: #722F37;       /* Şarap Kırmızısı */
    --color-royal-blue: #1E3A5F;     /* Kraliyet Mavisi */
    
    /* Yazı */
    --color-light-text: #E8D7C3;     /* Parşömen Sarısı */
    
    /* Durumlar */
    --color-success: #7CB342;        /* Yeşil */
    --color-danger: #C62828;         /* Kırmızı */
}
```

Renkleri istediğin tonlara değiştir!

---

## ⌨️ Kontroller

| Aksiyon | Sonuç |
|---------|-------|
| **Düğmeyi Tıkla** | Medeniyeti Değiştir |
| **"1" Tuşu** | Türkler Seç |
| **"2" Tuşu** | İngilizler Seç |
| **"3" Tuşu** | Mayalar Seç |
| **Yukarı/Aşağı Scroll** | Sayfada Gezin |
| **Hover** | Kutuların Altın Parlaması Gördüğünü Hisset |

---

## 📱 Responsive Breakpoints

- **Masaüstü**: 1200px+ (Full Layout)
- **Tablet**: 768px - 1199px (2 Sütun)
- **Mobil**: < 768px (1 Sütun, Kompakt)

---

## 🎯 İpuçları & Öneriler

1. **Wallpaper İçin**:
   - Google Images: "historical texture background"
   - Pixabay, Unsplash: Ücretsiz yüksek kaliteli görseller
   - Şeffaflık İçin PNG Kullan

2. **Medeniyetler İçin Veri Kaynağı**:
   - AoE II Wiki: https://ageofempires.fandom.com/wiki/Age_of_Empires_II
   - **SADECE HD Edition** verilerini kullan!

3. **Performans**:
   - Arkaplan Resmi < 1MB (Optimize Et)
   - CSS Custom Properties hızlı renk değişimi sağlıyor
   - Smooth Scroll: Tarayıcı Uyumluluğu İçin Fallback Var

---

## 🐛 Sorun Çözme

### Wallpaper Görünmüyor
- ✅ Dosya Adını Kontrol Et (`wallpaper.jpg`)
- ✅ Aynı Dizinde Mi? (index.html ile birlikte)
- ✅ CSS'de Doğru Yol Mu?

### Düğmeler Çalışmıyor
- ✅ `script.js` Yüklendi Mi? (Tarayıcı Console Kontrol Et)
- ✅ `data-civ` Attribute'leri Eşleşiyor Mu?

### Yazı Çok Küçük Görünüyor
- ✅ Tarayıcı Zoom Seviyesini Artır (Ctrl + +)
- ✅ Responsive Font Sizes CSS'de Ayarla

---

## 📄 Lisans & Kredi

- **HTML/CSS/JS**: 100% Vanilla, Bağımlılık Yok
- **Fontlar**: Google Fonts (Ücretsiz, Açık Kaynak)
- **Veri**: Age of Empires II: HD Edition
- **Tasarım**: Tarihi & Modern Fusion

---

## 🎓 Kod Yapısı Hakkında

### HTML (`index.html`)
- Semantic Tags: `<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`
- Data Attributes: `data-civ` ile Dinamik İşlem
- Erişilebilir & SEO-Friendly

### CSS (`style.css`)
- **Custom Properties** (CSS Variables) ile Kolay Özelleştirme
- **Keyframe Animasyonları** Smooth Efektler İçin
- **Media Queries** Responsive Tasarım
- **Backdrop Filter** Tarihi Atmosfer
- **Grid & Flexbox** Modern Layout

### JavaScript (`script.js`)
- Event Listeners: Dinamik Medeniyetler Geçişi
- LocalStorage: Kullanıcı Tercihini Kaydet
- Keyboard Shortcuts: Klavye Erişimi
- Staggered Animations: Profesyonel Hissiyat

---

## 💡 Genişletme Fikirleri

- 🎮 **Açılır Menüler**: Birimler & Teknolojiler Detayı
- 📊 **Comparison Tool**: İki Medeniyeti Karşılaştır
- 🎵 **Ses Efektleri**: Tema Müziği veya Birim Sesleri
- 🌙 **Dark/Light Mode**: Tema Seçeneği
- 📲 **PWA**: Offline Kullanım İçin
- 🔍 **Arama**: Medeniyetleri Ara

---

## 📧 Sorularınız Varsa

1. **Kod Anlaşılmıyor**: HTML/CSS/JS Bölüm Başlarında Açıklamalar Var
2. **Daha Fazla Medeniyeti Eklemek İstiyorum**: "Yeni Medeniyetler Ekleme" Bölümüne Bak
3. **Renkleri Değiştirmek İstiyorum**: "Renk Paletini Özelleştirme" Bölümüne Bak

---

## ✅ Checklist: Yayınlamadan Önce

- [ ] Wallpaper Ekledim ve Çalışıyor
- [ ] Tüm Medeniyetlerin Verileri Doğru
- [ ] Responsive Tasarım Mobil'de Kontrol Edildi
- [ ] Tüm Linkler ve Düğmeler Çalışıyor
- [ ] Yazı Tipleri Yüklenmiş ve Düzgün Görünüyor
- [ ] Renk Paletini Hoşlandığım Şekilde Ayarladım

---

**Keyif Al! 🎮 Age of Empires II: HD Edition Rehberine Hoş Geldiniz!**

Sorun, soru, veya önerileriniz için kod yorumlarını incele — her adım detaylı açıklanmıştır.

```
"In Age of Empires, Your Civilization Defines Your Victory."
— Geliştiriciler
```
