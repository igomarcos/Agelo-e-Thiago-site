/* ======================================
   JAVASCRIPT - FUNCIONALIDADES
   ====================================== */

'use strict';

// ======================================
// CONFIGURAÇÕES GLOBAIS
// ======================================

const APP = {
    sections: {},
    form: null,
    navLinks: [],
    init() {
        this.cacheDOM();
        this.bindEvents();
        this.smoothScroll();
        this.handleActiveNavLink();
        console.log('APP inicializado com sucesso');
    },

    cacheDOM() {
        this.form = document.getElementById('contactForm');
        this.navLinks = document.querySelectorAll('.nav-link');
        this.formMessage = document.getElementById('formMessage');
    },

    bindEvents() {
        if (this.form) {
            this.form.addEventListener('submit', (e) => this.handleFormSubmit(e));
        }

        window.addEventListener('scroll', () => this.handleActiveNavLink());
        window.addEventListener('scroll', () => this.revealSections());
        
        // Fechar menu mobile ao clicar em um link
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                const navbarCollapse = document.querySelector('.navbar-collapse');
                if (navbarCollapse.classList.contains('show')) {
                    document.querySelector('.navbar-toggler').click();
                }
            });
        });
    },

    // ======================================
    // SMOOTH SCROLL
    // ======================================
    smoothScroll() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                const href = this.getAttribute('href');
                if (href !== '#' && href !== '#!' && document.querySelector(href)) {
                    e.preventDefault();
                    const target = document.querySelector(href);
                    const offsetTop = target.offsetTop - 80;
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            });
        });
    },

    // ======================================
    // NAVEGAÇÃO ATIVA
    // ======================================
    handleActiveNavLink() {
        const sections = document.querySelectorAll('section[id]');
        const scrollPos = window.scrollY + 100;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            const sectionId = section.getAttribute('id');

            if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                this.navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    },

    // ======================================
    // REVEAL SECTIONS (Animação ao scroll)
    // ======================================
    revealSections() {
        const reveals = document.querySelectorAll('.skill-card, .release-card, .portfolio-card');
        
        reveals.forEach(element => {
            const windowHeight = window.innerHeight;
            const elementTop = element.getBoundingClientRect().top;
            const elementVisible = 150;

            if (elementTop < windowHeight - elementVisible) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    },

    // ======================================
    // VALIDAÇÃO E ENVIO DO FORMULÁRIO
    // ======================================
    handleFormSubmit(e) {
        e.preventDefault();
        
        if (!this.form.checkValidity()) {
            e.stopPropagation();
            this.form.classList.add('was-validated');
            return;
        }

        this.submitForm();
    },

    async submitForm() {
        const formData = new FormData(this.form);
        const data = {
            name: formData.get('name'),
            email: formData.get('email'),
            phone: formData.get('phone'),
            subject: formData.get('subject'),
            message: formData.get('message')
        };

        try {
            // Aqui você pode integrar com um serviço de envio de emails
            // Por enquanto, vamos simular o envio
            this.showMessage(
                'Mensagem enviada com sucesso! Obrigado pelo contato. Responderemos em breve.',
                'success'
            );

            // Limpar formulário
            this.form.reset();
            this.form.classList.remove('was-validated');

            // Simular envio para WhatsApp também
            this.sendToWhatsApp(data);

        } catch (error) {
            console.error('Erro ao enviar formulário:', error);
            this.showMessage(
                'Erro ao enviar mensagem. Por favor, tente novamente ou entre em contato pelo WhatsApp.',
                'error'
            );
        }
    },

    // ======================================
    // ENVIO PARA WHATSAPP
    // ======================================
    sendToWhatsApp(data) {
        const message = `
*Nova mensagem do site Angelo & Thiago*

Nome: ${data.name}
Email: ${data.email}
Telefone: ${data.phone || 'Não informado'}
Assunto: ${data.subject}

Mensagem:
${data.message}
        `.trim();

        const whatsappLink = `https://wa.me/5511960959532?text=${encodeURIComponent(message)}`;
        
        // Opcional: abrir WhatsApp em uma nova aba
        // window.open(whatsappLink, '_blank');
    },

    // ======================================
    // EXIBIR MENSAGEM DE FEEDBACK
    // ======================================
    showMessage(message, type) {
        this.formMessage.textContent = message;
        this.formMessage.className = `alert alert-${type === 'success' ? 'success' : 'danger'}`;
        this.formMessage.classList.remove('d-none');

        // Esconder mensagem após 5 segundos
        setTimeout(() => {
            this.formMessage.classList.add('d-none');
        }, 5000);
    }
};

// ======================================
// UTILITÁRIOS
// ======================================

const Utils = {
    // Validar Email
    isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    },

    // Validar Telefone
    isValidPhone(phone) {
        const phoneRegex = /^[\d\s\-\+\(\)]+$/;
        return phoneRegex.test(phone) && phone.replace(/\D/g, '').length >= 10;
    },

    // Formatar Telefone
    formatPhone(phone) {
        const cleaned = phone.replace(/\D/g, '');
        if (cleaned.length === 11) {
            return `(${cleaned.slice(0, 2)}) ${cleaned.slice(2, 7)}-${cleaned.slice(7)}`;
        }
        return phone;
    },

    // Debounce para otimizar eventos
    debounce(func, delay) {
        let timeoutId;
        return function (...args) {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(() => func.apply(this, args), delay);
        };
    },

    // Throttle para otimizar scroll/resize
    throttle(func, limit) {
        let inThrottle;
        return function (...args) {
            if (!inThrottle) {
                func.apply(this, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        };
    }
};

// ======================================
// PERFORMANCE E LAZY LOADING
// ======================================

const LazyLoader = {
    init() {
        // Implementar Intersection Observer para lazy loading de imagens
        if ('IntersectionObserver' in window) {
            this.observeElements();
        }
    },

    observeElements() {
        const images = document.querySelectorAll('img[data-src]');
        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    observer.unobserve(img);
                }
            });
        });

        images.forEach(img => observer.observe(img));
    }
};

// ======================================
// DARK MODE (Opcional)
// ======================================

const DarkMode = {
    toggle() {
        const isDark = localStorage.getItem('darkMode') === 'true';
        localStorage.setItem('darkMode', !isDark);
        this.apply();
    },

    apply() {
        const isDark = localStorage.getItem('darkMode') === 'true';
        document.documentElement.style.colorScheme = isDark ? 'dark' : 'light';
    },

    init() {
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        if (prefersDark && !localStorage.getItem('darkMode')) {
            localStorage.setItem('darkMode', 'true');
        }
        this.apply();
    }
};

// ======================================
// ANALYTICS (Opcional)
// ======================================

const Analytics = {
    trackEvent(eventName, eventData = {}) {
        // Integrar com Google Analytics, Mixpanel, etc
        console.log(`Event: ${eventName}`, eventData);
    },

    trackPageView(pageName) {
        this.trackEvent('page_view', { page: pageName });
    }
};

// ======================================
// INICIALIZAÇÃO
// ======================================

document.addEventListener('DOMContentLoaded', function() {
    // Inicializar aplicação
    APP.init();
    
    // Inicializar lazy loading
    LazyLoader.init();
    
    // Inicializar dark mode
    DarkMode.init();

    // Rastrear visita
    Analytics.trackPageView('home');

    // Adicionar estilos iniciais para animações
    const styles = document.createElement('style');
    styles.textContent = `
        .skill-card, .release-card, .portfolio-card {
            opacity: 0;
            transform: translateY(30px);
            transition: opacity 0.6s ease, transform 0.6s ease;
        }
    `;
    document.head.appendChild(styles);
});

// ======================================
// SERVICE WORKER (Para PWA - Opcional)
// ======================================

if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        // Descomentar para usar Service Worker
        // navigator.serviceWorker.register('sw.js')
        //     .then(reg => console.log('Service Worker registrado'))
        //     .catch(err => console.log('Service Worker erro:', err));
    });
}

// ======================================
// ERROR HANDLING
// ======================================

window.addEventListener('error', function(event) {
    console.error('Erro global:', event.error);
    // Aqui você pode enviar erros para um serviço de logging
});

window.addEventListener('unhandledrejection', function(event) {
    console.error('Promise rejeitada não tratada:', event.reason);
});

// ======================================
// EXPORT (Para modularização futura)
// ======================================

if (typeof module !== 'undefined' && module.exports) {
    module.exports = { APP, Utils, LazyLoader, DarkMode, Analytics };
}
