import React from 'react';
import { useApplyTransition } from '@/components/ApplyLoadingContext';
import { cn } from '@/lib/utils';
import { LucideIcon } from 'lucide-react';

interface CoursesApplyButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    text: string;
    to?: string;
    icon?: LucideIcon;
    className?: string;
}

const CoursesApplyButton: React.FC<CoursesApplyButtonProps> = ({
    text,
    to,
    icon: Icon,
    className,
    ...props
}) => {
    const { startTransition } = useApplyTransition();

    return (
        <button
            onClick={() => startTransition(to || "/apply")}
            className={cn("group relative inline-flex items-center justify-center overflow-hidden transition-all duration-300", className)}
            {...props}
        >
            <div
                className={cn(
                    // Base styles
                    "relative px-8 py-3 rounded-xl font-bold text-base cursor-pointer transition-all duration-300",
                    "border-2 border-cyan-400", // Border
                    "bg-slate-950", // Background
                    "text-cyan-400", // Text Color
                    "shadow-[0_2px_0_2px_rgba(8,145,178,0.5)]", // Box Shadow (cyan-700 approx)

                    // Hover State
                    "hover:bg-cyan-500 hover:text-slate-950 hover:shadow-[0_2px_0_2px_#06b6d4]",

                    // Active State
                    "active:scale-90",

                    "overflow-hidden" // Important for the pseudo element
                )}
            >
                {/* Pseudo-element for the swipe effect */}
                <span className={cn(
                    "absolute top-1/2 left-0 w-[100px] h-[120%] bg-purple-600/80 z-0",
                    "transform -translate-y-1/2 -skew-x-[30deg] -translate-x-[150%]", // Initial position (off-screen left)
                    "transition-all duration-500 ease-out",

                    // Hover: Slide across
                    "group-hover:translate-x-[150%]" // Slide to right
                )} />

                {/* Content - Z-index to stay on top of pseudo */}
                <span className="relative z-10 flex items-center gap-2">
                    {Icon && <Icon className="w-5 h-5" />}
                    {text}
                </span>
            </div>
        </button>
    );
};

export default CoursesApplyButton;
