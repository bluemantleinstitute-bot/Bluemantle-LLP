import { useEffect, useRef } from "react";

const DotMatrixLogo: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const DPR = window.devicePixelRatio || 1;
        const width = 700;
        const height = 700;

        canvas.width = width * DPR;
        canvas.height = height * DPR;
        canvas.style.width = `${width}px`;
        canvas.style.height = `${height}px`;
        ctx.scale(DPR, DPR);

        const image = new Image();
        image.src = "/BLUEMANTLE_A1-01.PNG";

        let animationFrame = 0;

        image.onload = () => {
            const tempCanvas = document.createElement("canvas");
            const tempCtx = tempCanvas.getContext("2d");
            if (!tempCtx) return;

            tempCanvas.width = width;
            tempCanvas.height = height;
            tempCtx.drawImage(image, 0, 0, width, height);

            const imageData = tempCtx.getImageData(0, 0, width, height).data;

            const particles: {
                x: number;
                y: number;
                size: number;
                alpha: number;
                phase: number;
            }[] = [];

            const gap = 6; // slightly denser to match image

            for (let y = 0; y < height; y += gap) {
                for (let x = 0; x < width; x += gap) {
                    const index = (y * width + x) * 4;
                    const r = imageData[index];
                    const g = imageData[index + 1];
                    const b = imageData[index + 2];
                    const a = imageData[index + 3];
                    const brightness = (r + g + b) / 3;

                    if (a > 50 && brightness > 20) {
                        particles.push({
                            x,
                            y,
                            size: 2 + Math.random() * 2,
                            alpha: 0.5 + Math.random() * 0.5,
                            phase: Math.random() * Math.PI * 2,
                        });
                    }
                }
            }

            // Matrix Rain Setup
            const chars = "01".split("");
            const fontSize = 12;
            const columns = Math.floor(width / fontSize);
            const drops: number[] = [];
            for (let x = 0; x < columns; x++) {
                drops[x] = Math.random() * (height / fontSize); 
            }

            // To avoid the logo trailing too much, we will clear the canvas completely each frame,
            // and draw the matrix rain trails explicitly without the fillRect trick, 
            // ensuring the logo stays sharp and distinct.
            
            // Wait, actually, let's use the fillRect trick but carefully.
            // A dedicated canvas for matrix rain might be better, but we can do it in one by accepting trails on the logo.
            // Let's try the explicit matrix rain rendering without trailing the whole canvas.

            const matrixRain = new Array(columns).fill(0).map(() => ({
                y: Math.random() * height,
                speed: 1 + Math.random() * 2,
                chars: new Array(20).fill(0).map(() => chars[Math.floor(Math.random() * chars.length)])
            }));

            const animate = (time: number) => {
                ctx.clearRect(0, 0, width, height);

                // Draw Matrix Rain
                ctx.font = `${fontSize}px monospace`;
                ctx.textAlign = "center";
                
                matrixRain.forEach((drop, i) => {
                    const x = i * fontSize + fontSize / 2;
                    drop.y += drop.speed;
                    if (drop.y > height + 20 * fontSize) {
                        drop.y = -20 * fontSize;
                        drop.speed = 1 + Math.random() * 2;
                    }

                    drop.chars.forEach((char, j) => {
                        const charY = drop.y - j * fontSize;
                        if (charY > 0 && charY < height) {
                            // Head of the stream is brighter, tail fades out
                            const alpha = Math.max(0, 1 - (j / drop.chars.length));
                            ctx.fillStyle = `rgba(6, 182, 212, ${alpha * 0.3})`; // Cyan for rain
                            ctx.shadowBlur = 0;
                            // Occasionally swap characters for the "glitch" effect
                            const displayChar = Math.random() > 0.95 ? chars[Math.floor(Math.random() * chars.length)] : char;
                            ctx.fillText(displayChar, x, charY);
                        }
                    });
                });

                // Draw Logo Dots
                particles.forEach((p) => {
                    const pulse = 0.6 + Math.sin(time * 0.002 + p.phase) * 0.4;
                    const radius = p.size * pulse;

                    ctx.beginPath();
                    ctx.fillStyle = `rgba(85, 190, 255, ${p.alpha * pulse})`; // Bright cyan/blue for logo
                    ctx.shadowColor = "#4fc3ff";
                    ctx.shadowBlur = 12;
                    ctx.arc(p.x, p.y, radius, 0, Math.PI * 2);
                    ctx.fill();
                });

                animationFrame = requestAnimationFrame(animate);
            };

            animate(0);
        };

        return () => cancelAnimationFrame(animationFrame);
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="max-w-full h-auto opacity-80"
        />
    );
};

export default DotMatrixLogo;
