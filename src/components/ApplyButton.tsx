import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { LucideIcon } from 'lucide-react';

interface ApplyButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    text: string;
    to?: string;
    href?: string;
    download?: string;
    target?: string;
    rel?: string;
    icon?: LucideIcon;
    className?: string;
}

const ApplyButton: React.FC<ApplyButtonProps> = ({
    text,
    to,
    href,
    download,
    target,
    rel,
    icon: Icon,
    className,
    ...props
}) => {
    // Styles based on User's CSS request adapted to "Website Black & Cyan"
    // Base: bg-slate-950 (Black), text-white
    // Hover: bg-cyan-400 (Cyan), text-slate-950 (Black), border-slate-950 (Black)
    // Animation: spin_357 on hover

    const baseClasses = cn(
        "group inline-flex items-center justify-center font-semibold text-base",
        "bg-slate-950 text-white", // Background: #222 equivalent
        "border-2 border-transparent", // Reserve space
        "rounded-lg px-8 py-3",
        "transition-all duration-300",
        // Hover state: Background White (or Cyan as requested), Text Black, Border Black
        "hover:bg-cyan-400 hover:text-slate-950 hover:border-slate-950",
        className
    );

    // Icon styles
    const iconClasses = cn(
        "w-5 h-5 mr-3 text-white transition-all duration-300",
        "group-hover:text-slate-950", // Icon dark on hover
        "group-hover:[animation:spin_357_0.85s_linear]" // Animation trigger
    );

    const Content = () => (
        <>
            {Icon && <Icon className={iconClasses} />}
            {text}
        </>
    );

    if (to) {
        return (
            <Link to={to} className={baseClasses}>
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
                className={baseClasses}
            >
                <Content />
            </a>
        );
    }

    return (
        <button className={baseClasses} {...props}>
            <Content />
        </button>
    );
};

export default ApplyButton;
