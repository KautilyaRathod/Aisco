# Portuguese Translation Fix

## Issue
When selecting Português (Portuguese), the page reloads but the translation doesn't apply.

## Root Cause
1. Cookie value was being URL encoded, but Google Translate expects the raw format
2. Translation wasn't being forcefully triggered after page reload
3. Multiple cookie reading locations were using decodeURIComponent unnecessarily

## Fixes Applied

### 1. Cookie Setting (LanguageSwitcher.tsx)
- **Changed**: Removed `encodeURIComponent()` when setting the cookie
- **Reason**: Google Translate reads the cookie value directly without decoding
- **Cookie Format**: `/en/pt` for Portuguese, `/en/en` for English (raw format)

### 2. Cookie Reading
- **Changed**: Removed `decodeURIComponent()` when reading cookies
- **Location**: Both `index.html` and `LanguageSwitcher.tsx`
- **Reason**: Google Translate stores cookies in raw format, so we should read them directly

### 3. Enhanced Translation Triggering
- Added multiple attempts to trigger translation after page load
- Added window load event listener to force translation
- Added multiple setTimeout calls with increasing delays to catch Google Translate initialization

### 4. Translation Application Logic
- Multiple translation trigger attempts (1500ms, 2500ms, 3500ms after initialization)
- Multiple methods to trigger translation:
  - Event dispatching (change, input events)
  - Direct onchange handler call
  - Focus/blur triggers
  - Iframe postMessage attempts

## How It Works Now

1. **User selects Português**:
   - Cookie `googtrans=/en/pt` is set (raw format, no encoding)
   - Page reloads after 200ms

2. **On page reload**:
   - Google Translate script loads
   - `googleTranslateElementInit()` runs
   - Cookie is read (raw format)
   - If `/en/pt` is found, translation is triggered multiple times with delays
   - Additional window load event also attempts to trigger translation

3. **Translation triggers**:
   - Select element value is set to 'pt'
   - Change event is dispatched
   - onchange handler is called directly
   - Multiple retry attempts ensure translation happens

## Testing

1. Select Português from language dropdown
2. Page should reload
3. After reload, page content should be in Portuguese
4. Check browser console for cookie value (should be `/en/pt`)
5. Verify translation is applied to all text content

## Key Changes

- **Cookie Format**: Raw format `/en/pt` (not URL encoded)
- **Cookie Reading**: Direct reading (no decodeURIComponent)
- **Translation Triggering**: Multiple attempts with various methods
- **Timing**: Multiple delays to catch Google Translate at different initialization stages
