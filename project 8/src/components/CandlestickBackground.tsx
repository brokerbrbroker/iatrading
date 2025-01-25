import React, { useEffect, useRef } from 'react';

export default function CandlestickBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const candlesticks: any[] = [];
    const totalCandles = 20;

    // Initialize candlesticks
    for (let i = 0; i < totalCandles; i++) {
      candlesticks.push({
        x: (canvas.width / totalCandles) * i,
        open: Math.random() * 100 + 50,
        close: Math.random() * 100 + 50,
        high: Math.random() * 150 + 50,
        low: Math.random() * 50,
        opacity: 0.1
      });
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      candlesticks.forEach((candle) => {
        const isGreen = candle.close > candle.open;
        const color = isGreen ? '#22c55e' : '#ef4444';
        
        // Draw candlestick body
        ctx.globalAlpha = candle.opacity;
        ctx.beginPath();
        ctx.fillStyle = color;
        ctx.fillRect(
          candle.x,
          Math.min(candle.open, candle.close),
          canvas.width / totalCandles / 2,
          Math.abs(candle.close - candle.open)
        );

        // Draw wicks
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.moveTo(candle.x + (canvas.width / totalCandles / 4), candle.high);
        ctx.lineTo(candle.x + (canvas.width / totalCandles / 4), candle.low);
        ctx.stroke();

        // Animate values
        candle.open += (Math.random() - 0.5) * 2;
        candle.close += (Math.random() - 0.5) * 2;
        candle.high = Math.max(candle.open, candle.close) + Math.random() * 10;
        candle.low = Math.min(candle.open, candle.close) - Math.random() * 10;
      });

      requestAnimationFrame(animate);
    }

    animate();

    return () => {
      // Cleanup
      cancelAnimationFrame(0);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full -z-10"
    />
  );
}