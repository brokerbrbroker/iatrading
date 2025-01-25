import { useEffect } from 'react';

export default function PixelTracking() {
  useEffect(() => {
    // Initialize pixel
    window.pixelId = "677891e012ce5287755a5e6f";
    
    // Add pixel.js script
    const pixelScript = document.createElement("script");
    pixelScript.setAttribute("async", "");
    pixelScript.setAttribute("defer", "");
    pixelScript.setAttribute("src", "https://cdn.utmify.com.br/scripts/pixel/pixel.js");
    document.head.appendChild(pixelScript);

    // Add UTMs script
    const utmsScript = document.createElement("script");
    utmsScript.setAttribute("src", "https://cdn.utmify.com.br/scripts/utms/latest.js");
    utmsScript.setAttribute("data-utmify-prevent-subids", "");
    utmsScript.setAttribute("async", "");
    utmsScript.setAttribute("defer", "");
    document.head.appendChild(utmsScript);

    // Cleanup
    return () => {
      pixelScript.remove();
      utmsScript.remove();
    };
  }, []);

  return null;
}