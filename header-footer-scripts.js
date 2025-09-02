// JavaScript موحد للهيدر والفوتر
document.addEventListener('DOMContentLoaded', function() {
    
    // تفعيل القائمة المتجاوبة
    const mobileToggle = document.querySelector('.mobile-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (mobileToggle && navMenu) {
        mobileToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            mobileToggle.classList.toggle('active');
        });
        
        // إغلاق القائمة عند النقر على رابط
        const navLinks = document.querySelectorAll('.nav-menu a');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navMenu.classList.remove('active');
                mobileToggle.classList.remove('active');
            });
        });
        
        // إغلاق القائمة عند النقر خارجها
        document.addEventListener('click', function(e) {
            if (!mobileToggle.contains(e.target) && !navMenu.contains(e.target)) {
                navMenu.classList.remove('active');
                mobileToggle.classList.remove('active');
            }
        });
        
        // إغلاق القائمة عند تغيير حجم الشاشة
        window.addEventListener('resize', function() {
            if (window.innerWidth > 992) {
                navMenu.classList.remove('active');
                mobileToggle.classList.remove('active');
            }
        });
    }
    
    // تحديد الصفحة النشطة
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-menu a');
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        const href = link.getAttribute('href');
        if (href === currentPage || (currentPage === '' && href === 'index.html')) {
            link.classList.add('active');
        }
    });
    
    // تأثير التمرير للهيدر
    let lastScrollTop = 0;
    const header = document.querySelector('header');
    
    if (header) {
        window.addEventListener('scroll', function() {
            let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            
            if (scrollTop > lastScrollTop && scrollTop > 100) {
                // التمرير لأسفل
                header.style.transform = 'translateY(-100%)';
            } else {
                // التمرير لأعلى
                header.style.transform = 'translateY(0)';
            }
            
            lastScrollTop = scrollTop;
        });
        
        // تأثير تغيير شفافية الهيدر عند التمرير
        window.addEventListener('scroll', function() {
            if (window.scrollY > 50) {
                header.style.background = 'rgba(255, 255, 255, 0.95)';
                header.style.backdropFilter = 'blur(10px)';
            } else {
                header.style.background = 'white';
                header.style.backdropFilter = 'none';
            }
        });
    }
    
    // تأثير التمرير السلس للروابط الداخلية
    const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');
    smoothScrollLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // تأثير الظهور التدريجي للعناصر
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // تطبيق تأثير الظهور على عناصر الفوتر
    const footerSections = document.querySelectorAll('.footer-section');
    footerSections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });
    
    // تأثير hover للكلمات المفتاحية
    const keywordTags = document.querySelectorAll('.keyword-tag');
    keywordTags.forEach(tag => {
        tag.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px) scale(1.05)';
        });
        
        tag.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    // تأثير النقر على أيقونات التواصل الاجتماعي
    const socialIcons = document.querySelectorAll('.top-social a, .footer-section a');
    socialIcons.forEach(icon => {
        icon.addEventListener('click', function(e) {
            // تأثير الموجة عند النقر
            const ripple = document.createElement('span');
            ripple.style.position = 'absolute';
            ripple.style.borderRadius = '50%';
            ripple.style.background = 'rgba(255,255,255,0.6)';
            ripple.style.transform = 'scale(0)';
            ripple.style.animation = 'ripple 0.6s linear';
            ripple.style.left = '50%';
            ripple.style.top = '50%';
            ripple.style.width = '20px';
            ripple.style.height = '20px';
            ripple.style.marginLeft = '-10px';
            ripple.style.marginTop = '-10px';
            ripple.style.pointerEvents = 'none';
            
            this.style.position = 'relative';
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
    
    // تتبع النقرات للتحليلات (اختياري)
    const trackableLinks = document.querySelectorAll('.nav-menu a, .keyword-tag, .footer-section a');
    trackableLinks.forEach(link => {
        link.addEventListener('click', function() {
            // يمكن إضافة تتبع Google Analytics هنا
            console.log('تم النقر على رابط:', this.href || this.textContent);
        });
    });
    
    // تأثير التمرير للخلفية (parallax خفيف)
    window.addEventListener('scroll', function() {
        const footer = document.querySelector('footer');
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.3;
        
        if (footer) {
            footer.style.backgroundPosition = `center ${rate}px`;
        }
    });
    
    // تحسين الأداء - تأخير تحميل الصور
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
});

// إضافة CSS للتأثيرات المتحركة
const style = document.createElement('style');
style.textContent = `
    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
    
    .lazy {
        opacity: 0;
        transition: opacity 0.3s;
    }
    
    .lazy.loaded {
        opacity: 1;
    }
    
    /* تحسين الأداء */
    * {
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
    
    /* تأثيرات إضافية للتفاعل */
    .nav-menu li a,
    .keyword-tag,
    .contact-btn {
        will-change: transform;
    }
`;
document.head.appendChild(style);
