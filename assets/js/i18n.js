/**
 * i18n Language Switching Functionality for SQAI Website
 * Supports English (default), Chinese, and Spanish
 */

class I18nManager {
  constructor() {
    this.currentLanguage = 'en'; // Default language
    this.languages = ['en', 'zh', 'es']; // Order as specified: English, Chinese, Spanish
    this.translations = {};
    this.languageData = {};
    
    this.init();
  }

  async init() {
    try {
      await this.loadTranslations();
      this.setupLanguageSwitcher();
      this.detectInitialLanguage();
      this.applyTranslations();
    } catch (error) {
      console.error('Failed to initialize i18n:', error);
    }
  }

  async loadTranslations() {
    try {
      const response = await fetch('/assets/js/i18n.json');
      const data = await response.json();
      this.translations = data.translations;
      this.languageData = data.languages;
    } catch (error) {
      console.error('Failed to load translations:', error);
      throw error;
    }
  }

  detectInitialLanguage() {
    // Check localStorage first
    const saved = localStorage.getItem('sqai-language');
    if (saved && this.languages.includes(saved)) {
      this.currentLanguage = saved;
      return;
    }

    // Check browser language
    const browserLang = navigator.language.split('-')[0];
    if (this.languages.includes(browserLang)) {
      this.currentLanguage = browserLang;
    }
    
    // Default remains 'en'
  }

  setupLanguageSwitcher() {
    const langSwitch = document.querySelector('.lang-switch a');
    if (langSwitch) {
      langSwitch.addEventListener('click', (e) => {
        e.preventDefault();
        this.switchToNextLanguage();
      });
    }
  }

  switchToNextLanguage() {
    const currentIndex = this.languages.indexOf(this.currentLanguage);
    const nextIndex = (currentIndex + 1) % this.languages.length;
    this.setLanguage(this.languages[nextIndex]);
  }

  setLanguage(lang) {
    if (!this.languages.includes(lang)) {
      console.warn(`Unsupported language: ${lang}`);
      return;
    }

    const previousLanguage = this.currentLanguage;
    this.currentLanguage = lang;
    localStorage.setItem('sqai-language', lang);
    
    this.applyTranslations();
    this.updateLanguageSwitcher();
    this.updatePageLang();
    
    // Show language switch notification
    this.showLanguageNotification(previousLanguage, lang);
    
    // Dispatch custom event for other components
    window.dispatchEvent(new CustomEvent('languageChanged', { 
      detail: { language: lang, previousLanguage } 
    }));
  }

  applyTranslations() {
    const t = this.translations[this.currentLanguage];
    if (!t) return;

    // Update page title
    document.title = t.site_title;

    // Update meta description
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', t.site_description);
    }

    // Update navigation
    this.updateNavigation(t.navigation);

    // Update main content
    this.updateMainContent(t);
  }

  updateNavigation(nav) {
    if (!nav) return;

    const navItems = document.querySelectorAll('.masthead__menu .masthead__menu-item a');
    navItems.forEach(item => {
      const href = item.getAttribute('href');
      
      if (href === '/committees/') {
        item.textContent = nav.committees;
      } else if (href === '/cfp/') {
        item.textContent = nav.authors;
      } else if (href === '/program/') {
        item.textContent = nav.program;
      } else if (href === '/registration/') {
        item.textContent = nav.registration;
      } else if (href === '/sponsors/') {
        item.textContent = nav.sponsors;
      } else if (href === '/past/') {
        item.textContent = nav.past_conferences;
      }
    });

    // Update site title in masthead
    const siteTitle = document.querySelector('.masthead__menu-item--lg a');
    if (siteTitle) {
      siteTitle.textContent = this.translations[this.currentLanguage].site_title;
    }
  }

  updateMainContent(t) {
    // Update welcome title
    const welcomeTitle = document.querySelector('h1, h2, h3');
    if (welcomeTitle && welcomeTitle.textContent.includes('Welcome')) {
      welcomeTitle.textContent = t.welcome_title;
    }

    // Find and update specific content sections
    this.updateContentBySelector('[data-i18n]', t);
    
    // Update paragraphs with specific content
    this.updateWelcomeContent(t);
  }

  updateWelcomeContent(t) {
    const paragraphs = document.querySelectorAll('p');
    paragraphs.forEach(p => {
      const text = p.textContent.trim();
      if (text.includes('great pleasure') || text.includes('SQAI')) {
        p.textContent = t.welcome_content;
      } else if (text.includes('boundaries between quantum computing')) {
        p.textContent = t.about_description;
      } else if (text.includes('rich lineup')) {
        p.textContent = t.conference_highlights;
      } else if (text.includes('honored to host')) {
        p.textContent = t.closing_message;
      }
    });
  }

  updateContentBySelector(selector, translations) {
    const elements = document.querySelectorAll(selector);
    elements.forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (key && this.getNestedValue(translations, key)) {
        el.textContent = this.getNestedValue(translations, key);
      }
    });
  }

  getNestedValue(obj, path) {
    return path.split('.').reduce((current, key) => {
      return current && current[key] !== undefined ? current[key] : null;
    }, obj);
  }

  updateLanguageSwitcher() {
    const langSwitch = document.querySelector('.lang-switch a .lang-icon');
    if (langSwitch && this.languageData[this.currentLanguage]) {
      langSwitch.textContent = this.languageData[this.currentLanguage].label;
    }

    // Update title attribute
    const langLink = document.querySelector('.lang-switch a');
    if (langLink && this.languageData[this.currentLanguage]) {
      const nextLang = this.getNextLanguage();
      langLink.setAttribute('title', `Switch to ${this.languageData[nextLang].name}`);
    }
  }

  getNextLanguage() {
    const currentIndex = this.languages.indexOf(this.currentLanguage);
    const nextIndex = (currentIndex + 1) % this.languages.length;
    return this.languages[nextIndex];
  }

  updatePageLang() {
    document.documentElement.setAttribute('lang', this.currentLanguage);
  }

  // Public API
  getCurrentLanguage() {
    return this.currentLanguage;
  }

  getAvailableLanguages() {
    return [...this.languages];
  }

  t(key) {
    return this.getNestedValue(this.translations[this.currentLanguage], key) || key;
  }

  showLanguageNotification(fromLang, toLang) {
    const fromName = this.languageData[fromLang]?.name || fromLang;
    const toName = this.languageData[toLang]?.name || toLang;
    
    // Remove existing toast if any
    const existingToast = document.querySelector('.language-switch-toast');
    if (existingToast) {
      existingToast.remove();
    }

    // Create new toast
    const toast = document.createElement('div');
    toast.className = 'language-switch-toast';
    toast.textContent = `Language switched to ${toName}`;
    
    document.body.appendChild(toast);
    
    // Show toast
    setTimeout(() => toast.classList.add('show'), 100);
    
    // Hide and remove toast
    setTimeout(() => {
      toast.classList.add('hide');
      setTimeout(() => toast.remove(), 300);
    }, 2000);
  }
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  window.i18n = new I18nManager();
});

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
  module.exports = I18nManager;
}