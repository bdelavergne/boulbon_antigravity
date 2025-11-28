// Language Switcher Logic
document.addEventListener('DOMContentLoaded', () => {
    const langToggle = document.querySelector('.lang-toggle');
    const html = document.documentElement;
    const footer = document.querySelector('.footer');

    // Language handling
    const savedLang = localStorage.getItem('site-lang') || 'en';
    setLanguage(savedLang);

    if (langToggle) {
        langToggle.addEventListener('click', (e) => {
            // Check if a specific button was clicked
            const btn = e.target.closest('[data-lang-btn]');
            if (btn) {
                const newLang = btn.getAttribute('data-lang-btn');
                setLanguage(newLang);
            } else {
                // Toggle if clicking container
                const currentLang = html.getAttribute('lang');
                const newLang = currentLang === 'en' ? 'fr' : 'en';
                setLanguage(newLang);
            }
        });
    }

    function setLanguage(lang) {
        html.setAttribute('lang', lang);
        localStorage.setItem('site-lang', lang);

        // Update UI
        document.querySelectorAll('[data-lang-btn]').forEach(btn => {
            btn.classList.toggle('active', btn.getAttribute('data-lang-btn') === lang);
        });
    }

    // Footer reveal on scroll
    const revealFooter = () => {
        const scrollY = window.scrollY || window.pageYOffset;
        const viewportHeight = window.innerHeight;
        const docHeight = document.body.scrollHeight;
        // When near bottom (within 200px)
        if (scrollY + viewportHeight >= docHeight - 200) {
            footer.classList.add('show');
        } else {
            footer.classList.remove('show');
        }
    };

    window.addEventListener('scroll', revealFooter);
    // Initial check
    revealFooter();
});
