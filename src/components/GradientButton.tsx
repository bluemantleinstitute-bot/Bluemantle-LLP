import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { useApplyTransition } from '@/components/ApplyLoadingContext';

interface GradientButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    text: string;
    to?: string;
    href?: string;
    download?: string;
    target?: string;
    rel?: string;
    className?: string;
}

const GradientButton: React.FC<GradientButtonProps> = ({
    text,
    to,
    href,
    download,
    target,
    rel,
    className,
    ...props
}) => {
    const { startTransition } = useApplyTransition();
    // Premium "Rotating Border" Button Design
    // 1. Container: Clips the content and handles positioning.
    // ... (rest of component logic remains same until the return section)
    const containerClasses = cn(
        "group relative inline-flex items-center justify-center overflow-hidden rounded-full p-[2px] transition-all duration-300",
        "focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-slate-950",
        // Enhanced Glow effect - visible by default but subtle, stronger on hover
        "shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_40px_rgba(34,211,238,0.6)]",
        className
    );

    const borderAnimation = (
        <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#0000_0%,#22D3EE_50%,#0000_100%)]" />
    );

    const innerClasses = cn(
        "inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full",
        "bg-slate-950 px-8 py-3 text-lg font-bold text-white backdrop-blur-3xl",
        "transition-all duration-300",
        "group-hover:text-cyan-400 group-hover:bg-slate-900"
    );

    const Content = () => (
        <>
            {borderAnimation}
            <span className={innerClasses}>
                {text}
            </span>
        </>
    );

    if (to === "/apply") {
        return (
            <button
                onClick={() => startTransition("/apply")}
                className={containerClasses}
                {...props}
            >
                <Content />
            </button>
        );
    }

    if (to) {
        return (
            <Link to={to} className={containerClasses}>
                <Content />
            </Link>
        );
    }

    if (href) {
        return (
            <a
                href={href}
                download={download}
                target={target}
                rel={rel}
                className={containerClasses}
            >
                <Content />
            </a>
        );
    }

    return (
        <button className={containerClasses} {...props}>
            <Content />
        </button>
    );
};

export default GradientButton;
