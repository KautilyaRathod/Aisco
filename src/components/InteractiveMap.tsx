import React, { useEffect, useRef, useState } from 'react';
import { MapPin, Navigation, Maximize2, Minimize2 } from 'lucide-react';

interface InteractiveMapProps {
  latitude: number;
  longitude: number;
  zoom?: number;
  height?: string;
  showControls?: boolean;
  markers?: Array<{
    lat: number;
    lng: number;
    title: string;
    description?: string;
    color?: string;
  }>;
  className?: string;
}

const InteractiveMap: React.FC<InteractiveMapProps> = ({
  latitude,
  longitude,
  zoom = 15,
  height = '400px',
  showControls = true,
  markers = [],
  className = ''
}) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const [map, setMap] = useState<google.maps.Map | null>(null);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [currentZoom, setCurrentZoom] = useState(zoom);
  const [apiKeyAvailable, setApiKeyAvailable] = useState(false);

  // Initialize Google Maps
  useEffect(() => {
    const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;
    
    // Check if API key is available
    if (!apiKey || apiKey === 'YOUR_API_KEY') {
      setApiKeyAvailable(false);
      return;
    }

    const initMap = () => {
      if (!mapRef.current) return;

      try {
        const mapInstance = new google.maps.Map(mapRef.current, {
          center: { lat: latitude, lng: longitude },
          zoom: currentZoom,
          mapTypeId: google.maps.MapTypeId.HYBRID,
          mapTypeControl: true,
          streetViewControl: true,
          fullscreenControl: false,
          zoomControl: showControls,
          styles: [
            {
              featureType: 'poi',
              elementType: 'labels',
              stylers: [{ visibility: 'off' }]
            }
          ]
        });

        setMap(mapInstance);
        setApiKeyAvailable(true);

        // Add main facility marker
        new google.maps.Marker({
          position: { lat: latitude, lng: longitude },
          map: mapInstance,
          title: 'AISCO Main Facility',
          icon: {
            url: 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(`
              <svg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
                <circle cx="20" cy="20" r="18" fill="#dc2626" stroke="#ffffff" stroke-width="2"/>
                <path d="M20 8l-4 12h8l-4-12z" fill="#ffffff"/>
              </svg>
            `),
            scaledSize: new google.maps.Size(40, 40),
            anchor: new google.maps.Point(20, 20)
          }
        });

        // Add additional markers if provided
        markers.forEach((marker) => {
          new google.maps.Marker({
            position: { lat: marker.lat, lng: marker.lng },
            map: mapInstance,
            title: marker.title,
            icon: {
              url: 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(`
                <svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="16" cy="16" r="14" fill="${marker.color || '#059669'}" stroke="#ffffff" stroke-width="2"/>
                  <circle cx="16" cy="16" r="6" fill="#ffffff"/>
                </svg>
              `),
              scaledSize: new google.maps.Size(32, 32),
              anchor: new google.maps.Point(16, 16)
            }
          });
        });

        // Listen for zoom changes
        mapInstance.addListener('zoom_changed', () => {
          setCurrentZoom(mapInstance.getZoom() || zoom);
        });
      } catch (error) {
        console.error('Error initializing Google Maps:', error);
        setApiKeyAvailable(false);
      }
    };

    // Load Google Maps script if not already loaded
    if (!window.google) {
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places`;
      script.async = true;
      script.defer = true;
      script.onload = initMap;
      script.onerror = () => {
        console.error('Failed to load Google Maps API');
        setApiKeyAvailable(false);
      };
      document.head.appendChild(script);
    } else {
      initMap();
    }
  }, [latitude, longitude, currentZoom, markers, showControls]);

  const handleZoomIn = () => {
    if (map) {
      const newZoom = Math.min(map.getZoom()! + 1, 20);
      map.setZoom(newZoom);
      setCurrentZoom(newZoom);
    }
  };

  const handleZoomOut = () => {
    if (map) {
      const newZoom = Math.max(map.getZoom()! - 1, 1);
      map.setZoom(newZoom);
      setCurrentZoom(newZoom);
    }
  };

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  const openInGoogleMaps = () => {
    window.open(`https://maps.google.com/maps?q=${latitude},${longitude}`, '_blank');
  };

  return (
    <div className={`relative ${className} ${isFullscreen ? 'fixed inset-0 z-50 bg-white' : ''}`}>
      {apiKeyAvailable ? (
        <div 
          ref={mapRef} 
          style={{ height: isFullscreen ? '100vh' : height }}
          className="w-full rounded-2xl overflow-hidden shadow-2xl"
        />
      ) : (
        <div 
          style={{ height: isFullscreen ? '100vh' : height }}
          className="w-full rounded-2xl overflow-hidden shadow-2xl"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d744.0!2d13.405045!3d-8.5829096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1a51dd9e004ad419%3A0xe03e0650414ce3e9!2sAISCO%20-%20Angola%20Iron%20%26%20Steel%20Corporation%2C%20Lda.!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="AISCO Location Map"
          />
        </div>
      )}
      

      {/* Location Info Overlay */}
      <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-4 shadow-lg z-30" style={{ zIndex: 9999 }}>
        <div className="flex items-center space-x-2 mb-2">
          <MapPin size={20} className="text-red-600" />
          <span className="font-bold text-gray-900">AISCO Main Facility</span>
        </div>
        <p className="text-sm text-gray-600 mb-2">CC84+R2M, Fazenda Gratidão, Angola</p>
        <div className="flex items-center space-x-2 text-xs text-gray-500 mb-2">
          <span>⭐ 4.0 (28 reviews)</span>
          <span>•</span>
          <span>Corporate office</span>
        </div>
        <div className="flex items-center space-x-2 text-xs text-gray-500">
          <span>Zoom: {currentZoom}</span>
          <span>•</span>
          <span>{latitude.toFixed(6)}, {longitude.toFixed(6)}</span>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="absolute bottom-4 right-4 space-y-2 z-30" style={{ zIndex: 9999 }}>
        <button
          onClick={openInGoogleMaps}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg shadow-lg transition-all duration-300 hover:scale-105 flex items-center space-x-2"
        >
          <Navigation size={16} />
          <span>Open in Google Maps</span>
        </button>
      </div>


      {/* Fullscreen Close Button */}
      {isFullscreen && (
        <button
          onClick={toggleFullscreen}
          className="absolute top-4 right-4 bg-red-600 hover:bg-red-700 text-white p-2 rounded-lg shadow-lg transition-all duration-300"
          title="Close Fullscreen"
        >
          ✕
        </button>
      )}
    </div>
  );
};

export default InteractiveMap;
