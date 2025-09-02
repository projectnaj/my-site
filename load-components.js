// ملف JavaScript لتحميل الهيدر والفوتر
document.addEventListener('DOMContentLoaded', function() {
    // تحميل الهيدر
    loadComponent('header.html', 'header-placeholder');
    
    // تحميل الفوتر
    loadComponent('footer.html', 'footer-placeholder');
    
    // تحميل ملف CSS للهيدر والفوتر
    loadCSS('header-footer-styles.css');
    
    // تحميل ملف JavaScript للهيدر والفوتر
    loadScript('header-footer-scripts.js');
});

// دالة تحميل المكونات
function loadComponent(url, placeholderId) {
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.text();
        })
        .then(data => {
            const placeholder = document.getElementById(placeholderId);
            if (placeholder) {
                placeholder.innerHTML = data;
            }
        })
        .catch(error => {
            console.error(`Error loading ${url}:`, error);
            // في حالة فشل التحميل، عرض محتوى بديل
            const placeholder = document.getElementById(placeholderId);
            if (placeholder && url.includes('header')) {
                placeholder.innerHTML = createFallbackHeader();
            } else if (placeholder && url.includes('footer')) {
                placeholder.innerHTML = createFallbackFooter();
            }
        });
}

// دالة تحميل ملف CSS
function loadCSS(url) {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = url;
    document.head.appendChild(link);
}

// دالة تحميل ملف JavaScript
function loadScript(url) {
    const script = document.createElement('script');
    script.src = url;
    document.head.appendChild(script);
}

// هيدر بديل في حالة فشل التحميل
function createFallbackHeader() {
    return `
        <div style="background: #2c3e50; color: white; padding: 10px 0; text-align: center;">
            <div style="max-width: 1200px; margin: 0 auto; padding: 0 15px;">
                <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap;">
                    <div>
                        <a href="tel:+966553011504" style="color: white; text-decoration: none; margin-left: 20px; display: flex; align-items: center; gap: 5px;">
                            <i class="fas fa-phone"></i> 0553011504
                        </a>
                        <a href="mailto:info@sadaacoo.com" style="color: white; text-decoration: none; display: flex; align-items: center; gap: 5px;">
                            <i class="fas fa-envelope"></i> info@sadaacoo.com
                        </a>
                    </div>
                    <div>
                        <a href="https://www.facebook.com/Glass.cleanin/" target="_blank" style="color: white; margin: 0 5px; font-size: 1.1rem;"><i class="fab fa-facebook-f"></i></a>
                        <a href="https://x.com/sadaacco" target="_blank" style="color: white; margin: 0 5px; font-size: 1.1rem;"><i class="fab fa-twitter"></i></a>
                        <a href="https://www.instagram.com/ios_cd/" target="_blank" style="color: white; margin: 0 5px; font-size: 1.1rem;"><i class="fab fa-instagram"></i></a>
                        <a href="https://wa.me/966553011504" target="_blank" style="color: white; margin: 0 5px; font-size: 1.1rem;"><i class="fab fa-whatsapp"></i></a>
                    </div>
                </div>
            </div>
        </div>
        <header style="background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); padding: 15px 0;">
            <div style="max-width: 1200px; margin: 0 auto; padding: 0 15px;">
                <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap;">
                    <div>
                        <img src="https://www.sadaacoo.com/wp-content/uploads/2024/08/‎⁨الشعار⁩.png" alt="مؤسسة صدى الالوان للمقاولات" style="height: 50px;">
                    </div>
                    <nav style="display: flex; gap: 20px; flex-wrap: wrap;">
                        <a href="index.html" style="text-decoration: none; color: #333; padding: 5px 10px;">الرئيسية</a>
                        <a href="من نحن.html" style="text-decoration: none; color: #333; padding: 5px 10px;">من نحن</a>
                        <a href="خدماتنا.html" style="text-decoration: none; color: #333; padding: 5px 10px;">خدماتنا</a>
                        <a href="خدمات الواجهات.html" style="text-decoration: none; color: #333; padding: 5px 10px;">خدمات الواجهات</a>
                        <a href="الخدمات المنزلية.html" style="text-decoration: none; color: #333; padding: 5px 10px;">الخدمات المنزلية</a>
                        <a href="المدونة.html" style="text-decoration: none; color: #333; padding: 5px 10px;">المدونة</a>
                        <a href="الميزانية.html" style="text-decoration: none; color: #333; padding: 5px 10px;">الميزانية</a>
                        <a href="الصيانة.html" style="text-decoration: none; color: #333; padding: 5px 10px;">الصيانة</a>
                        <a href="اتصل بنا.html" style="text-decoration: none; color: #333; padding: 5px 10px;">اتصل بنا</a>
                    </nav>
                </div>
            </div>
        </header>
        <div style="position: fixed; bottom: 20px; right: 20px; z-index: 9999;">
            <a href="tel:+966553011504" style="display: flex; width: 60px; height: 60px; background: #27ae60; color: white; border-radius: 50%; align-items: center; justify-content: center; text-decoration: none; margin-bottom: 10px; font-size: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.3);"><i class="fas fa-phone"></i></a>
            <a href="https://wa.me/966553011504" style="display: flex; width: 60px; height: 60px; background: #25d366; color: white; border-radius: 50%; align-items: center; justify-content: center; text-decoration: none; font-size: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.3);"><i class="fab fa-whatsapp"></i></a>
        </div>
    `;
}

// فوتر بديل في حالة فشل التحميل
function createFallbackFooter() {
    return `
        <!-- شريط الكلمات المفتاحية -->
        <div style="background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%); border-top: 1px solid #dee2e6; padding: 20px 0; box-shadow: 0 -2px 8px rgba(0,0,0,0.05); margin-top: 40px;">
            <div style="max-width: 1200px; margin: 0 auto; padding: 0 15px;">
                <div style="display: flex; align-items: center; gap: 25px; flex-wrap: wrap;">
                    <div style="color: #2c3e50; font-weight: 600; font-size: 1rem; display: flex; align-items: center; gap: 10px; white-space: nowrap; background: white; padding: 10px 18px; border-radius: 25px; box-shadow: 0 3px 10px rgba(0,0,0,0.1); border: 2px solid #0088ff;">
                        <i class="fas fa-tags" style="color: #0088ff; font-size: 1.2rem;"></i>
                 خدماتنا
                    </div>
                    <div style="display: flex; gap: 12px; flex-wrap: wrap; flex: 1;">
                        <a href="ازالة_الاستيكر.html" style="display: flex; align-items: center; gap: 8px; padding: 10px 18px; background: white; border: 2px solid #2ecc71; border-radius: 25px; font-size: 0.9rem; color: #333; text-decoration: none; transition: all 0.3s ease; box-shadow: 0 3px 10px rgba(0,0,0,0.1); font-weight: 500;">
                            <i class="fas fa-eraser" style="color: #2ecc71; font-size: 0.9rem;"></i>
                            ازالة الاستيكر من الواجهات الزجاجية
                        </a>
                        <a href="شركة تنظيف واجهات زجاج بالرياض.html" style="display: flex; align-items: center; gap: 8px; padding: 10px 18px; background: white; border: 2px solid #2ecc71; border-radius: 25px; font-size: 0.9rem; color: #333; text-decoration: none; transition: all 0.3s ease; box-shadow: 0 3px 10px rgba(0,0,0,0.1); font-weight: 500;">
                            <i class="fas fa-building" style="color: #2ecc71; font-size: 0.9rem;"></i>
                            شركة تنظيف واجهات زجاج بالرياض
                        </a>
                        <a href="شركات تنظيف زجاج بجدة.html" style="display: flex; align-items: center; gap: 8px; padding: 10px 18px; background: white; border: 2px solid #2ecc71; border-radius: 25px; font-size: 0.9rem; color: #333; text-decoration: none; transition: all 0.3s ease; box-shadow: 0 3px 10px rgba(0,0,0,0.1); font-weight: 500;">
                            <i class="fas fa-building" style="color: #2ecc71; font-size: 0.9rem;"></i>
                            شركة تنظيف واجهات زجاج بجدة
                        </a>
                        <a href="خدمات الواجهات.html" style="display: flex; align-items: center; gap: 8px; padding: 10px 18px; background: white; border: 2px solid #2ecc71; border-radius: 25px; font-size: 0.9rem; color: #333; text-decoration: none; transition: all 0.3s ease; box-shadow: 0 3px 10px rgba(0,0,0,0.1); font-weight: 500;">
                            <i class="fas fa-building" style="color: #2ecc71; font-size: 0.9rem;"></i>
                            تنظيف واجهات زجاجية
                        </a>
                        <a href="الخدمات المنزلية.html" style="display: flex; align-items: center; gap: 8px; padding: 10px 18px; background: white; border: 2px solid #2ecc71; border-radius: 25px; font-size: 0.9rem; color: #333; text-decoration: none; transition: all 0.3s ease; box-shadow: 0 3px 10px rgba(0,0,0,0.1); font-weight: 500;">
                            <i class="fas fa-home" style="color: #2ecc71; font-size: 0.9rem;"></i>
                            خدمات منزلية
                        </a>
                        <a href="الصيانة.html" style="display: flex; align-items: center; gap: 8px; padding: 10px 18px; background: white; border: 2px solid #2ecc71; border-radius: 25px; font-size: 0.9rem; color: #333; text-decoration: none; transition: all 0.3s ease; box-shadow: 0 3px 10px rgba(0,0,0,0.1); font-weight: 500;">
                            <i class="fas fa-tools" style="color: #2ecc71; font-size: 0.9rem;"></i>
                            صيانة مباني
                        </a>
                        <a href="خدماتنا.html" style="display: flex; align-items: center; gap: 8px; padding: 10px 18px; background: white; border: 2px solid #2ecc71; border-radius: 25px; font-size: 0.9rem; color: #333; text-decoration: none; transition: all 0.3s ease; box-shadow: 0 3px 10px rgba(0,0,0,0.1); font-weight: 500;">
                            <i class="fas fa-swimming-pool" style="color: #2ecc71; font-size: 0.9rem;"></i>
                            تنظيف مسابح
                        </a>
                        <a href="شركة تنظيف واجهات زجاج بحائل.html" style="display: flex; align-items: center; gap: 8px; padding: 10px 18px; background: white; border: 2px solid #e67e22; border-radius: 25px; font-size: 0.9rem; color: #333; text-decoration: none; transition: all 0.3s ease; box-shadow: 0 3px 10px rgba(0,0,0,0.1); font-weight: 500;">
                            <i class="fas fa-map-marker-alt" style="color: #e67e22; font-size: 0.9rem;"></i>
                            شركة تنظيف واجهات زجاج بحائل
                        </a>
                        <a href="اتصل بنا.html" style="display: flex; align-items: center; gap: 8px; padding: 10px 18px; background: white; border: 2px solid #0088ff; border-radius: 25px; font-size: 0.9rem; color: #333; text-decoration: none; transition: all 0.3s ease; box-shadow: 0 3px 10px rgba(0,0,0,0.1); font-weight: 500;">
                            <i class="fas fa-phone" style="color: #0088ff; font-size: 0.9rem;"></i>
                            حجز خدمة
                        </a>
                    </div>
                </div>
            </div>
        </div>
        
        <footer style="background: #2c3e50; color: white; padding: 40px 0 20px;">
            <div style="max-width: 1200px; margin: 0 auto; padding: 0 15px;">
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 30px; margin-bottom: 30px;">
                    <div>
                        <h3 style="color: #0088ff; margin-bottom: 20px;">مؤسسة صدى الالوان للمقاولات</h3>
                        <p style="color: #bdc3c7; line-height: 1.6;">نحن مؤسسة متخصصة في تقديم خدمات التنظيف والصيانة بأعلى معايير الجودة والاحترافية في المملكة العربية السعودية.</p>
                        <div style="margin-top: 20px;">
                            <a href="https://www.facebook.com/Glass.cleanin/" target="_blank" style="color: white; margin-left: 15px; font-size: 1.5rem;"><i class="fab fa-facebook-f"></i></a>
                            <a href="https://x.com/sadaacco" target="_blank" style="color: white; margin-left: 15px; font-size: 1.5rem;"><i class="fab fa-twitter"></i></a>
                            <a href="https://www.instagram.com/ios_cd/" target="_blank" style="color: white; margin-left: 15px; font-size: 1.5rem;"><i class="fab fa-instagram"></i></a>
                            <a href="https://wa.me/966553011504" target="_blank" style="color: white; margin-left: 15px; font-size: 1.5rem;"><i class="fab fa-whatsapp"></i></a>
                        </div>
                    </div>
                    <div>
                        <h3 style="color: #0088ff; margin-bottom: 20px;">خدماتنا</h3>
                        <ul style="list-style: none; padding: 0;">
                            <li style="margin-bottom: 10px;"><a href="خدمات الواجهات.html" style="color: #bdc3c7; text-decoration: none;">🏢 تنظيف الواجهات الزجاجية</a></li>
                            <li style="margin-bottom: 10px;"><a href="الخدمات المنزلية.html" style="color: #bdc3c7; text-decoration: none;">🏠 الخدمات المنزلية</a></li>
                            <li style="margin-bottom: 10px;"><a href="الصيانة.html" style="color: #bdc3c7; text-decoration: none;">🔧 خدمات الصيانة</a></li>
                            <li style="margin-bottom: 10px;"><a href="خدماتنا.html" style="color: #bdc3c7; text-decoration: none;">🏊 تنظيف المسابح</a></li>
                            <li style="margin-bottom: 10px;"><a href="خدماتنا.html" style="color: #bdc3c7; text-decoration: none;">💧 تنظيف الخزانات</a></li>
                            <li style="margin-bottom: 10px;"><a href="خدماتنا.html" style="color: #bdc3c7; text-decoration: none;">🏪 التنظيف التجاري</a></li>
                        </ul>
                    </div>
                    
                    <div>
                        <h3 style="color: #0088ff; margin-bottom: 20px;">روابط مهمة</h3>
                        <ul style="list-style: none; padding: 0;">
                            <li style="margin-bottom: 10px;"><a href="index.html" style="color: #bdc3c7; text-decoration: none;">🏠 الرئيسية</a></li>
                            <li style="margin-bottom: 10px;"><a href="من نحن.html" style="color: #bdc3c7; text-decoration: none;">👥 من نحن</a></li>
                            <li style="margin-bottom: 10px;"><a href="خدماتنا.html" style="color: #bdc3c7; text-decoration: none;">⚙️ خدماتنا</a></li>
                            <li style="margin-bottom: 10px;"><a href="المدونة.html" style="color: #bdc3c7; text-decoration: none;">📝 المدونة</a></li>
                            <li style="margin-bottom: 10px;"><a href="الميزانية.html" style="color: #bdc3c7; text-decoration: none;">💰 احسب التكلفة</a></li>
                            <li style="margin-bottom: 10px;"><a href="اتصل بنا.html" style="color: #bdc3c7; text-decoration: none;">📞 اتصل بنا</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 style="color: #0088ff; margin-bottom: 20px;">معلومات الاتصال</h3>
                        <div style="background: rgba(0, 136, 255, 0.1); padding: 20px; border-radius: 10px;">
                            <p style="color: #bdc3c7; margin-bottom: 10px; display: flex; align-items: center; gap: 8px;"><i class="fas fa-phone"></i> <a href="tel:+966553011504" style="color: #bdc3c7;">0553011504</a></p>
                            <p style="color: #bdc3c7; margin-bottom: 10px; display: flex; align-items: center; gap: 8px;"><i class="fas fa-phone"></i> <a href="tel:+966532876509" style="color: #bdc3c7;">0532876509</a></p>
                            <p style="color: #bdc3c7; margin-bottom: 10px; display: flex; align-items: center; gap: 8px;"><i class="fas fa-envelope"></i> <a href="mailto:info@sadaacoo.com" style="color: #bdc3c7;">info@sadaacoo.com</a></p>
                            <p style="color: #bdc3c7; margin-bottom: 10px; display: flex; align-items: center; gap: 8px;"><i class="fas fa-map-marker-alt"></i> الرياض، المملكة العربية السعودية</p>
                            <p style="color: #bdc3c7; margin-bottom: 10px; display: flex; align-items: center; gap: 8px;"><i class="fas fa-clock"></i> متاح 24/7 طوال أيام الأسبوع</p>
                            <p style="color: #bdc3c7; display: flex; align-items: center; gap: 8px;"><i class="fab fa-whatsapp"></i> <a href="https://wa.me/966553011504" style="color: #25d366;">واتساب: 0553011504</a></p>
                        </div>
                    </div>
                </div>
                <div style="border-top: 1px solid #444; padding-top: 20px; text-align: center; color: #95a5a6;">
                    <p>&copy; 2024 مؤسسة صدى الالوان للمقاولات. جميع الحقوق محفوظة.</p>
                </div>
            </div>
        </footer>
    `;
}
