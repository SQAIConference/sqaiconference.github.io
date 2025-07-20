# SQAI Website Internationalization (i18n) System

## Overview

This i18n system provides seamless language switching between English (EN), Chinese (中文), and Spanish (ES) for the SQAI website. The system automatically detects user language preferences, persists selections, and dynamically updates all page content.

## Features

- **Language Cycling**: EN → ZH → ES → EN
- **Persistent Preferences**: User selections saved in localStorage
- **Dynamic Content Updates**: Real-time translation without page reload
- **Responsive Design**: Works on desktop and mobile devices
- **Visual Feedback**: Toast notifications for language changes
- **SEO Friendly**: Updates page title and meta descriptions
- **Accessibility**: Proper ARIA labels and keyboard navigation

## Files Structure

### Core Files
- `assets/js/i18n.json` - Translation data for all supported languages
- `assets/js/i18n.js` - Main i18n management system
- `assets/css/lang-switch.css` - Styling for language switcher and notifications

### Modified Files
- `_includes/masthead.html` - Language switcher button
- `_layouts/default.html` - Script inclusion
- `_pages/about.html` - Content with translation attributes
- `_pages/about.md` - Main page content with translation attributes

## Usage

### Adding Translatable Content

To make content translatable, add the `data-i18n` attribute:

```html
<h1 data-i18n="welcome_title">Welcome from the Chairs of SQAI 2026</h1>
<p data-i18n="welcome_content">English content here...</p>
```

### Adding New Translations

1. Edit `assets/js/i18n.json`
2. Add the translation key to all three language sections:

```json
{
  "translations": {
    "en": {
      "new_key": "English text"
    },
    "zh": {
      "new_key": "中文文本"
    },
    "es": {
      "new_key": "Texto en español"
    }
  }
}
```

### Language Detection Logic

1. **localStorage**: Checks for saved user preference
2. **Browser Language**: Falls back to browser's language setting
3. **Default**: English if no preference found

### Navigation Translation

Navigation items are automatically translated based on their href attributes:
- `/committees/` → "Committees" / "委员会" / "Comités"
- `/cfp/` → "Authors" / "作者" / "Autores"
- `/program/` → "Program" / "会议议程" / "Programa"
- `/registration/` → "Registration" / "注册" / "Registro"
- `/sponsors/` → "Sponsors" / "赞助商" / "Patrocinadores"
- `/past/` → "Past Conferences" / "往届会议" / "Conferencias Anteriores"

## Technical Implementation

### Language Switching Mechanism

The language switcher cycles through languages in the specified order. Clicking the button:
1. Advances to the next language
2. Updates all content with `data-i18n` attributes
3. Updates navigation menu
4. Updates page title and meta description
5. Saves preference to localStorage
6. Shows confirmation toast
7. Updates language button label

### Browser Compatibility

- Modern browsers with ES6+ support
- localStorage support required for persistence
- Fetch API for loading translations

### Performance Considerations

- Translations loaded once on page load
- Updates are synchronous and immediate
- Minimal DOM manipulation for optimal performance

## Maintenance

### Adding a New Language

1. Add language configuration to `i18n.json`:
```json
"languages": {
  "fr": {
    "name": "Français",
    "code": "fr",
    "flag": "🇫🇷",
    "label": "FR"
  }
}
```

2. Add translations for all existing keys
3. Update the languages array in `i18n.js`:
```javascript
this.languages = ['en', 'zh', 'es', 'fr'];
```

### Debugging

Enable console logging by setting:
```javascript
console.log('Current language:', window.i18n.getCurrentLanguage());
```

### Testing

The system includes comprehensive error handling and fallbacks:
- Missing translations default to the key name
- Invalid language codes are ignored
- Network failures are logged but don't break functionality

## Accessibility Features

- **ARIA Labels**: Language switcher has proper accessibility attributes
- **Keyboard Navigation**: Fully accessible via keyboard
- **Screen Readers**: Announces language changes
- **High Contrast**: Button styling works with accessibility themes

## Mobile Responsiveness

- Language switcher remains visible on mobile devices
- Toast notifications are positioned appropriately
- Button size adjusts for touch interfaces
- Works on screens as small as 320px wide

## Browser Storage

The system uses localStorage with the key `sqai-language` to persist user preferences across sessions. The stored value is one of: `en`, `zh`, or `es`.

## Error Handling

- Graceful degradation if i18n.json fails to load
- Fallback to English for missing translations
- Console warnings for development debugging
- No breaking of page functionality if JavaScript is disabled