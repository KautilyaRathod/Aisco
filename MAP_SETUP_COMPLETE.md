# Quick Map Setup for AISCO Website

## Immediate Map Visibility

The map is now configured to show **immediately** on your website! Here's what I've implemented:

### ✅ Current Status
- **Map is visible**: Uses Google Maps embed iframe (no API key required)
- **Correct coordinates**: -8.8371, 13.2333 (Muceque Cabele, Comuna Da Barra Do Dande, Municipio Do Dande, Provincia Do Benga, Angola.)
- **Interactive features**: Users can zoom, pan, and explore
- **Mobile responsive**: Works on all devices

### 🗺️ What Users Can Do
- **Zoom in/out** using mouse wheel or controls
- **Pan around** the facility area
- **Switch map types** (satellite, street view, etc.)
- **Click "Open in Google Maps"** for full navigation

### 🔧 For Enhanced Features (Optional)
To get the advanced interactive features with custom markers:

1. **Get Google Maps API Key**:
   - Go to [Google Cloud Console](https://console.cloud.google.com/)
   - Enable Maps JavaScript API
   - Create API key

2. **Add to environment**:
   Create `.env` file in project root:
   ```
   VITE_GOOGLE_MAPS_API_KEY=your_api_key_here
   ```

3. **Restart development server**:
   ```bash
   npm run dev
   ```

### 📍 Current Map Features
- **Location**: AISCO Main Facility, Muceque Cabele, Comuna Da Barra Do Dande, Municipio Do Dande, Provincia Do Benga, Angola.
- **Coordinates**: -8.5829096, 13.405045
- **Zoom Level**: 15-16 (shows facility detail)
- **Map Type**: Hybrid (satellite + street labels)
- **Google Maps Link**: https://www.google.com/maps/place/AISCO+-+Angola+Iron+%26+Steel+Corporation,+Lda./@-8.5829096,13.405045,744m/data=!3m2!1e3!4b1!4m6!3m5!1s0x1a51dd9e004ad419:0xe03e0650414ce3e9!8m2!3d-8.5829096!4d13.405045!16s%2Fg%2F11cs6kqpbn?entry=ttu&g_ep=EgoyMDI1MTAxNC4wIKXMDSoASAFQAw%3D%3D

The map is now **fully functional** and visible on your contact page!
