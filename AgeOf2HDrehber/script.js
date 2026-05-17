/* =====================================================
   AGE OF EMPIRES II: HD EDITION - CIVILIZATIONS GUIDE
   JAVASCRIPT: İnteraktivite & Medeniyetler Yönetimi
   ===================================================== */

document.addEventListener('DOMContentLoaded', () => {
    console.log('✨ Age of Empires II: HD Edition Rehberi Yükleniyor...');
    
    /* =====================================================
       1. MEDENIYETLERI SEÇME DÜĞMELERİ
       ===================================================== */
    const civButtons = document.querySelectorAll('.civ-btn');
    const civCards = document.querySelectorAll('.civilization-card');
    
    /**
     * Medeniyeti Değiştirme Fonksiyonu
     * @param {string} civId - Seçilen medeniyetin ID'si (turks, britons, mayans)
     */
    function switchCivilization(civId) {
        // Tüm kartları gizle
        civCards.forEach(card => {
            card.classList.remove('active');
            // Fade-Out animasyonunun hızlı tamamlanması için
            card.style.opacity = '0';
        });
        
        // Tüm düğmeleri pasif yap
        civButtons.forEach(btn => {
            btn.classList.remove('active');
        });
        
        // Timeout ile yeni kartı göster (animasyon efekti için)
        setTimeout(() => {
            const selectedCard = document.querySelector(`.civilization-card[data-civ="${civId}"]`);
            const selectedBtn = document.querySelector(`.civ-btn[data-civ="${civId}"]`);
            
            if (selectedCard && selectedBtn) {
                selectedCard.classList.add('active');
                selectedBtn.classList.add('active');
                
                // Fade-In animasyonu başlat
                requestAnimationFrame(() => {
                    selectedCard.style.opacity = '1';
                    selectedCard.style.transition = 'opacity 0.3s ease-in-out';
                });
                
                /* Sayfa Scroll: Seçilen Medeniyetin Başına Git */
                const civHeader = selectedCard.querySelector('.civ-header');
                if (civHeader) {
                    civHeader.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            }
        }, 150);
    }
    
    /**
     * Düğme Tıklama Olayı: Medeniyeti Değiştir
     */
    civButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const civId = btn.getAttribute('data-civ');
            switchCivilization(civId);
            
            console.log(`➜ ${civId.toUpperCase()} medeniyeti seçildi`);
        });
        
        /* İsteğe Bağlı: Hover Efekti */
        btn.addEventListener('mouseenter', () => {
            btn.style.boxShadow = `0 0 12px ${getComputedStyle(document.documentElement).getPropertyValue('--color-gold')}`;
        });
        
        btn.addEventListener('mouseleave', () => {
            if (!btn.classList.contains('active')) {
                btn.style.boxShadow = '';
            }
        });
    });
    
    /**
     * Şimdi: Keyboard Shortcut'ları (Opsiyonel)
     * - "1" = Türkler
     * - "2" = İngilizler
     * - "3" = Mayalar
     */
    document.addEventListener('keydown', (e) => {
        const keyMap = {
            '1': 'turks',
            '2': 'britons',
            '3': 'mayans'
        };
        
        if (keyMap[e.key]) {
            switchCivilization(keyMap[e.key]);
            console.log(`⌨️ Tuş: ${e.key} → ${keyMap[e.key]} seçildi`);
        }
    });
    
    /* =====================================================
       2. BAŞLANGICI: TÜRKLER SEÇILI BAŞLA
       ===================================================== */
    console.log('✨ Varsayılan: Türkler yükleniyor...');
    switchCivilization('turks');
    
    /* =====================================================
       3. BÖLÜM KUTULARı: İleri Hover Efektleri
       ===================================================== */
    const sectionBoxes = document.querySelectorAll('.section-box');
    
    sectionBoxes.forEach((box, index) => {
        /* Staggered Animation: Her kutu farklı zamanda belir */
        box.style.animationDelay = `${0.1 * index}s`;
        
        /* Hover: Enhanc Glow Efekti */
        box.addEventListener('mouseenter', function() {
            this.style.boxShadow = `
                0 0 15px rgba(212, 175, 55, 0.4),
                inset 0 0 10px rgba(212, 175, 55, 0.1)
            `;
        });
        
        box.addEventListener('mouseleave', function() {
            this.style.boxShadow = '';
        });
    });
    
    /* =====================================================
       4. BONUS/WEAKNESS LİST ÖĞELERİ: Animasyon
       ===================================================== */
    const listItems = document.querySelectorAll('.bonus-item, .weakness-item');
    
    listItems.forEach((item, index) => {
        /* Staggered Entry Animation */
        item.style.opacity = '0';
        item.style.animation = `slideInLeft 0.5s ease-in-out ${0.1 * index}s forwards`;
    });
    
    /* Slide-In-Left Animasyonu (CSS'de tanımladığımız gibi) */
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideInLeft {
            from {
                opacity: 0;
                transform: translateX(-20px);
            }
            to {
                opacity: 1;
                transform: translateX(0);
            }
        }
    `;
    document.head.appendChild(style);
    
    /* =====================================================
       5. STATISTICS BOX: Sayı Animasyonu (İsteğe Bağlı)
       ===================================================== */
    const statValues = document.querySelectorAll('.stat-value');
    
    /**
     * Sayı Animasyonu: 0'dan Hedef Değere Kadar Say
     * (Bonus: Sayfa Yüklendiğinde etki)
     */
    function animateNumbers() {
        statValues.forEach(stat => {
            const targetText = stat.textContent.trim();
            const targetNumber = parseInt(targetText, 10);
            
            /* Eğer Sayı İse Animasyonu Başlat */
            if (!isNaN(targetNumber) && targetNumber > 0 && targetNumber < 100) {
                let currentNum = 0;
                const duration = 600; // ms
                const increment = targetNumber / (duration / 16);
                
                const counter = setInterval(() => {
                    currentNum += increment;
                    if (currentNum >= targetNumber) {
                        stat.textContent = targetNumber;
                        clearInterval(counter);
                    } else {
                        stat.textContent = Math.floor(currentNum);
                    }
                }, 16);
            }
        });
    }
    
    /* İlk Medeniyeti Yüklendikten Sonra Sayıları Animasyon Yap */
    setTimeout(animateNumbers, 500);
    
    /* =====================================================
       6. SMOOTH SCROLL BEHAVIOR (Link Tıklaması)
       ===================================================== */
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    /* =====================================================
       7. LOCAL STORAGE: Kullanıcının Son Seçimini Hatırla
       ===================================================== */
    
    /**
     * Seçilen Medeniyeti Local Storage'a Kaydet
     */
    function saveCivilizationPreference(civId) {
        try {
            localStorage.setItem('lastCivilization', civId);
        } catch (e) {
            console.warn('⚠️ LocalStorage yazma hatası:', e);
        }
    }
    
    /**
     * Daha Önceki Medeniyet Tercihi Yükle
     */
    function loadCivilizationPreference() {
        try {
            const lastCiv = localStorage.getItem('lastCivilization');
            if (lastCiv && document.querySelector(`.civilization-card[data-civ="${lastCiv}"]`)) {
                switchCivilization(lastCiv);
                console.log(`📌 Son tercih yüklendi: ${lastCiv}`);
            }
        } catch (e) {
            console.warn('⚠️ LocalStorage okuma hatası:', e);
        }
    }
    
    /**
     * Düğme Tıklandığında Tercihi Kaydet
     */
    civButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const civId = btn.getAttribute('data-civ');
            saveCivilizationPreference(civId);
        });
    });
    
    /* Sayfa Yüklendiğinde Son Tercihi Yükle (Opsiyonel - İlk olarak Türkler Yüklü) */
    // loadCivilizationPreference(); // Yorum Satırını Aç İster misin?
    
    /* =====================================================
       8. CONSOLE LOG: Bilgilendirme
       ===================================================== */
    console.log(`
    ╔════════════════════════════════════════════════════════╗
    ║ Age of Empires II: HD Edition - Uygarlıklar Rehberi   ║
    ║                                                        ║
    ║  🎮 Kontroller:                                        ║
    ║     • Düğmeleri Tıkla: Medeniyeti Değiştir            ║
    ║     • Tuşlar: "1" (Türkler), "2" (İngilizler),       ║
    ║               "3" (Mayalar)                            ║
    ║                                                        ║
    ║  🎨 Tasarım:                                           ║
    ║     • Tarihi Atmosfer                                 ║
    ║     • Smooth Animasyonlar                            ║
    ║     • Responsive Design                               ║
    ║                                                        ║
    ║  📧 Rehber Hazırlayan: Geliştiriciler                 ║
    ║     • HTML: Semantic Yapı                             ║
    ║     • CSS: Custom Properties & Animasyonlar          ║
    ║     • JS: İnteraktivite & UX                          ║
    ╚════════════════════════════════════════════════════════╝
    `);
    
    console.log('✅ Uygulama başarıyla yüklendi!');
});

/* =====================================================
   9. OPSIYONEL: Sayfayı Ayrıntılı Şekilde Yapılandırma
   ===================================================== */

/**
 * BU BÖLÜMÜ KENDI HİTMAPLARıNıZI EKLEDIĞINIZDE KULLANI
 * 
 * Medeniyetler Veri Yapısı:
 * 
 * const civilizationsData = {
 *     turks: {
 *         name: "Türkler",
 *         icon: "🔫",
 *         focus: "Barut Birlikleri Uzmanı",
 *         bonuses: [ ... ],
 *         weaknesses: [ ... ],
 *         uniqueUnit: { ... },
 *         uniqueTech: { ... },
 *         teamBonus: "..."
 *     },
 *     ...
 * }
 * 
 * Sonra, HTML'de sadece ID'ler ve veriler otomatik doldurulabilir.
 * Şu an için sabit HTML yapısı kullanıyoruz — hepsi zaten HTML'de yazılı.
 */
