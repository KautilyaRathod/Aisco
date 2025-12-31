# Language Switching Functionality - Fixes Applied

## Issues Identified and Fixed

### 1. **Cookie Parsing Issues**
- **Problem**: Cookie values were not being URL decoded, causing parsing failures
- **Fix**: Added `decodeURIComponent()` when reading cookies and `encodeURIComponent()` when setting cookies
- **Location**: `LanguageSwitcher.tsx` lines 28, 110

### 2. **Google Translate Element Placement**
- **Problem**: The `google_translate_element` div was inside the React component, which could cause initialization issues
- **Fix**: Moved the element to `index.html` body (static DOM) where Google Translate expects it
- **Location**: `index.html` line 29

### 3. **Element Initialization Conflicts**
- **Problem**: Multiple initialization attempts and conflicts between index.html and component
- **Fix**: 
  - Improved initialization logic in `index.html` to check if element is already initialized
  - Removed duplicate initialization from component
  - Added proper checks before initializing
- **Location**: `index.html` lines 34-79, `LanguageSwitcher.tsx` lines 20-92

### 4. **CSS Hiding Issues**
- **Problem**: `display: none !important` prevented Google Translate from initializing
- **Fix**: Changed to absolute positioning with negative coordinates instead of display none
- **Location**: `src/index.css` lines 238-250

### 5. **Cookie Format**
- **Problem**: Cookie format might not match Google Translate's expected format exactly
- **Fix**: 
  - Proper format: `/en/pt` for Portuguese, `/en/en` for English
  - Added `SameSite=Lax` for cookie security
  - Proper URL encoding/decoding
- **Location**: `LanguageSwitcher.tsx` lines 108-111

### 6. **Language Application Timing**
- **Problem**: Translation wasn't being applied when page loaded with Portuguese cookie
- **Fix**: 
  - Added interval checking for Google Translate ready state
  - Proper event dispatching for language change
  - Better timing with setTimeout
- **Location**: `LanguageSwitcher.tsx` lines 48-84, `index.html` lines 47-78

### 7. **Missing Cleanup**
- **Problem**: Intervals were not being cleaned up properly
- **Fix**: Added proper cleanup in useEffect return function
- **Location**: `LanguageSwitcher.tsx` lines 86-91

## Key Changes Summary

### Files Modified:
1. **src/components/LanguageSwitcher.tsx**
   - Improved cookie parsing with URL decoding
   - Better initialization logic
   - Proper cleanup of intervals
   - Removed duplicate Google Translate element (moved to HTML)

2. **index.html**
   - Added `google_translate_element` div in body
   - Improved `googleTranslateElementInit()` function
   - Better cookie reading with URL decoding
   - Prevented duplicate initialization

3. **src/index.css**
   - Changed Google Translate element hiding method from `display: none` to absolute positioning
   - Allows initialization while keeping element hidden

## Testing Checklist

- [ ] Language switcher button appears and opens dropdown
- [ ] Selecting English sets cookie and reloads page
- [ ] Selecting Portuguese sets cookie and reloads page  
- [ ] After reload, correct language is displayed (English or Portuguese)
- [ ] Cookie persists across page refreshes
- [ ] Language preference is maintained across navigation
- [ ] No console errors during language switching
- [ ] Translation applies correctly to page content

## How It Works Now

1. **Initial Load**:
   - Component reads `googtrans` cookie
   - If Portuguese cookie exists, waits for Google Translate to load and applies translation
   - Updates HTML lang attribute

2. **Language Change**:
   - User clicks language option
   - Cookie is set with proper format (`/en/pt` or `/en/en`)
   - Cookie is URL encoded
   - Page reloads after 150ms (enough time for cookie to be set)
   - On reload, Google Translate applies the saved language

3. **Cookie Format**:
   - English: `googtrans=/en/en`
   - Portuguese: `googtrans=/en/pt`
   - Cookie has 1 year expiration
   - SameSite=Lax for security

## Dependencies

- Google Translate script loaded from: `//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit`
- React 18.3.1
- No additional npm packages required (uses browser APIs)

## Notes

- Page reload is required for reliable translation (prevents React/Google Translate DOM conflicts)
- Google Translate element must be in static HTML (not React component) for proper initialization
- Translation applies to all page content except elements with `notranslate` class
