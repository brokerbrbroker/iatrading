import React, { useEffect, useRef } from 'react';

export default function VideoPlayer() {
  const containerRef = useRef<HTMLDivElement>(null);
  const scriptRef = useRef<HTMLScriptElement | null>(null);

  useEffect(() => {
    const loadScript = () => {
      // Remove any existing script first
      if (scriptRef.current) {
        scriptRef.current.remove();
      }

      // Create new script
      const script = document.createElement('script');
      script.src = "https://scripts.converteai.net/3c6ee8c2-baee-4efc-9734-ed8b1e29b5f8/players/6642cb3aceb2d9000a786100/player.js";
      script.async = true;
      script.id = "scr_6642cb3aceb2d9000a786100"; // Match the original script ID
      
      // Error handling
      script.onerror = () => {
        console.error('Failed to load video player script');
      };

      scriptRef.current = script;
      document.head.appendChild(script);
    };

    // Load script only if container is mounted
    if (containerRef.current) {
      loadScript();
    }

    return () => {
      if (scriptRef.current) {
        scriptRef.current.remove();
      }
    };
  }, []);

  return (
    <div className="w-full max-w-md mx-auto px-4 mb-12" ref={containerRef}>
      <div className="relative w-full rounded-xl overflow-hidden shadow-2xl bg-black/20">
        <div 
          id="vid_6642cb3aceb2d9000a786100" 
          className="relative w-full" 
          style={{ paddingTop: '178.21782178217822%' }}
        >
          <img 
            id="thumb_6642cb3aceb2d9000a786100" 
            src="https://images.converteai.net/3c6ee8c2-baee-4efc-9734-ed8b1e29b5f8/players/6642cb3aceb2d9000a786100/thumbnail.jpg"
            className="absolute top-0 left-0 w-full h-full object-cover"
            alt="Demonstração do Hacker Quotex"
          />
          <div 
            id="backdrop_6642cb3aceb2d9000a786100" 
            className="absolute top-0 w-full h-full backdrop-blur-sm"
          />
        </div>
      </div>
      
      <div className="mt-4 text-center">
        <p className="text-sm text-green-500 font-semibold">
          Veja o app em ação: 5 vitórias consecutivas transformando R$50 em R$1.000+
        </p>
      </div>
    </div>
  );
}