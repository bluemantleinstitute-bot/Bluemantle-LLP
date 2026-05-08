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

            const gap = 8;

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

            const animate = (time: number) => {
                ctx.clearRect(0, 0, width, height);

                particles.forEach((p) => {
                    const pulse = 0.6 + Math.sin(time * 0.002 + p.phase) * 0.4;
                    const radius = p.size * pulse;

                    ctx.beginPath();
                    ctx.fillStyle = `rgba(85, 190, 255, ${p.alpha * pulse})`;
                    ctx.shadowColor = "#4fc3ff";
                    ctx.shadowBlur = 10;
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
            className="max-w-full h-auto opacity-60"
        />
    );
};

export default DotMatrixLogo;
