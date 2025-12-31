# Google Maps Integration Setup

## Required Setup for Interactive Maps

To enable the interactive Google Maps functionality in the contact page, you need to:

### 1. Get Google Maps API Key
1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select an existing one
3. Enable the **Maps JavaScript API**
4. Create credentials (API Key)
5. Restrict the API key to your domain for security

### 2. Configure Environment Variables
Create a `.env` file in the project root with:
```
VITE_GOOGLE_MAPS_API_KEY=your_actual_api_key_here
```

### 3. Features Included
- **Interactive zoom in/out** controls
- **Fullscreen mode** for detailed viewing
- **Multiple facility markers** (Main Plant, Quality Lab, Visitor Center)
- **GPS coordinates** display
- **Open in Google Maps** button for external navigation
- **Hybrid map view** showing satellite imagery with labels

### 4. Location Details
- **Coordinates**: -8.5829096, 13.405045 (Muceque Cabele, Comuna Da Barra Do Dande, Municipio Do Dande, Provincia Do Benga, Angola.)
- **Facility Area**: 400 Ha total area
- **Map Link**: https://www.google.com/maps/place/AISCO+-+Angola+Iron+%26+Steel+Corporation,+Lda./@-8.5829096,13.405045,744m/data=!3m2!1e3!4b1!4m6!3m5!1s0x1a51dd9e004ad419:0xe03e0650414ce3e9!8m2!3d-8.5829096!4d13.405045!16s%2Fg%2F11cs6kqpbn?entry=ttu&g_ep=EgoyMDI1MTAxNC4wIKXMDSoASAFQAw%3D%3D

### 5. Components Updated
- `OfficeLocation.tsx` - Main contact page map
- `VisitUsSection.tsx` - Visit planning map
- `InteractiveMap.tsx` - Reusable map component

The maps will show a placeholder until the API key is configured.
