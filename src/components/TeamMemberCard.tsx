import { Linkedin } from 'lucide-react';
import { cn } from "@/lib/utils";

interface TeamMemberCardProps {
    name: string;
    role: string;
    bio: string;
    image: string;
    linkedin?: string;
    className?: string;
    imagePosition?: string;
    imageScale?: number;
}

const TeamMemberCard = ({ name, role, bio, image, linkedin, className, imagePosition = 'center top', imageScale = 1.05 }: TeamMemberCardProps) => {
    return (
        <div className={cn(
            "w-full max-w-[380px] group mx-auto rounded-2xl",
            "bg-gradient-to-b from-[#0c0c1d] to-[#080815]",
            "border border-cyan-500/20",
            "shadow-[0_0_15px_rgba(6,182,212,0.15),0_0_30px_rgba(6,182,212,0.05)]",
            "transition-all duration-500 ease-out",
            "p-6 sm:p-8 flex flex-col items-center text-center",
            className
        )}>
            {/* Inline keyframes for LinkedIn blink glow */}
            <style>{`
                @keyframes linkedinBlink {
                    0%, 100% { box-shadow: 0 0 6px rgba(10,102,194,0.3), 0 0 12px rgba(10,102,194,0.15); }
                    50% { box-shadow: 0 0 14px rgba(10,102,194,0.7), 0 0 28px rgba(10,102,194,0.35); }
                }
            `}</style>
            {/* Portrait */}
            <div className="relative mb-5">
                {/* Glow ring on hover */}
                <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-cyan-500/0 to-purple-500/0 group-hover:from-cyan-500/40 group-hover:to-purple-500/30 blur-md transition-all duration-500" />
                <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden ring-2 ring-white/10 group-hover:ring-cyan-400/40 transition-all duration-500">
                    <img
                        src={image}
                        alt={name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        style={{ objectPosition: imagePosition }}
                    />
                </div>
            </div>

            {/* Name */}
            <h3 className="text-lg sm:text-xl font-bold text-white tracking-wide mb-1 transition-colors duration-300 group-hover:text-cyan-100">
                {name}
            </h3>

            {/* Role */}
            <p className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400/80 mb-4">
                {role}
            </p>

            {/* Divider */}
            <div className="w-10 h-px bg-white/10 group-hover:w-16 group-hover:bg-cyan-400/40 transition-all duration-500 mb-4" />

            {/* Bio */}
            <p className="text-sm text-white/50 leading-relaxed mb-5 line-clamp-3">
                {bio}
            </p>

            {/* LinkedIn */}
            {linkedin && (
                <a
                    href={linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium text-[#0a66c2] bg-[#0a66c2]/10 border border-[#0a66c2]/30 hover:bg-[#0a66c2]/20 hover:border-[#0a66c2]/50 transition-all duration-300"
                    style={{ animation: 'linkedinBlink 2s ease-in-out infinite' }}
                >
                    <Linkedin className="w-3.5 h-3.5" />
                    <span>LinkedIn</span>
                </a>
            )}
        </div>
    );
};

export default TeamMemberCard;
