# Language Translation Guide - Full Page Translation

## Overview
The website supports full-page translation between English and Portuguese using Google Translate. When a language is selected, the **entire page content** is translated, except for specific elements that should remain in their original language (emails, addresses, language UI).

## How It Works

### Language Selection
1. **User selects a language** (English or Portuguese) from the language switcher
2. **Cookie is set**: `googtrans=/en/en` (English) or `googtrans=/en/pt` (Portuguese)
3. **Page reloads** to apply the translation consistently

### Translation Application

#### When Portuguese is Selected:
- The `notranslate` class is removed from the root element (`#root`)
- This allows Google Translate to translate **ALL content** on the page
- Google Translate automatically translates all text elements
- Only elements with the `notranslate` class remain untranslated

#### When English is Selected:
- Cookie is set to `/en/en` which tells Google Translate not to translate
- Original English content is displayed
- No translation occurs

### Elements That Remain Untranslated

The following elements use the `notranslate` class and will **NOT** be translated:
1. **Email addresses**: `info@aisco.com.co`, `sales@aisco.com.co`
2. **Physical addresses**: Location names containing "Muceque", "Angola", etc.
3. **Language switcher UI**: The language selection dropdown and its labels

### Implementation Details

#### Root Element (`#root`)
- Initially has `notranslate` class to prevent translation during React render
- Class is removed after React renders (1.5 seconds delay)
- Removal allows Google Translate to translate all child content

#### Translation Triggering
- Multiple attempts are made to trigger translation at different intervals:
  - 800ms after page load
  - 1500ms after page load
  - 2500ms after page load
  - 3500ms after page load (for dynamically loaded content)

#### Route Changes
- When navigating between pages (React Router), the language preference is maintained
- Translation is re-applied when the route changes
- Cookie persists across navigation

## Files Modified

### Core Translation Files:
1. **`src/main.tsx`**: Removes `notranslate` from root after React renders
2. **`src/components/LanguageSwitcher.tsx`**: Handles language selection and translation triggering
3. **`index.html`**: Contains Google Translate initialization script

### CSS:
- **`src/index.css`**: Contains styles for Google Translate UI hiding and language modal

## How to Verify Translation is Working

### For Portuguese:
1. Select Portuguese from language switcher
2. Page reloads
3. **All text content** should appear in Portuguese
4. **Email addresses and addresses** should remain in English (notranslate)
5. **Language switcher UI** should remain in English

### For English:
1. Select English from language switcher
2. Page reloads
3. **All content** should appear in original English
4. No translation occurs

## Troubleshooting

### If content is not being translated:
1. Check if `#root` element has `notranslate` class (it shouldn't after page loads)
2. Verify Google Translate cookie: `document.cookie` should contain `googtrans=/en/pt` for Portuguese
3. Check browser console for any errors
4. Verify Google Translate script is loaded: Check if `.goog-te-combo` element exists in DOM

### If specific content should not be translated:
- Add `notranslate` class to that element
- Example: `<span className="notranslate">Do not translate this</span>`

### If translation is applied too early:
- The delays in `src/main.tsx` can be adjusted (currently 1.5s, 800ms, 1500ms, 2500ms, 3500ms)

## Notes

- Google Translate automatically handles translation once the `notranslate` class is removed from the root
- The translation is applied at the DOM level, so it works with React components
- Dynamic content loaded after initial render is also translated automatically
- The translation persists as long as the cookie is set

