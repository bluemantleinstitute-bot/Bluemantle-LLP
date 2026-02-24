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
            "w-full max-w-[400px] relative h-[380px] sm:h-[420px] md:h-[450px] overflow-hidden group mx-auto dark:bg-black bg-white dark:border-0 border rounded-xl dark:text-white text-black shadow-lg",
            className
        )}>
            <div className='w-full h-full absolute inset-0'>
                <img
                    src={image}
                    alt={name}
                    className='h-full w-full object-cover transition-all duration-500 rounded-xl'
                    style={{ objectPosition: imagePosition, transform: `scale(${imageScale})` }}
                />
            </div>

            {/* Overlay Content (Visible on Hover / Tap on mobile) */}
            <article className='p-6 sm:p-8 w-full h-full overflow-hidden z-10 absolute top-0 flex flex-col justify-end rounded-xl bg-black/70 opacity-0 group-hover:opacity-100 active:opacity-100 transition-all duration-500'>
                <div className='translate-y-10 group-hover:translate-y-0 transition-all duration-500 space-y-3 sm:space-y-4'>
                    <h3 className='text-xl sm:text-2xl font-bold text-white'>About</h3>
                    <p className='text-sm sm:text-base text-white/90 leading-relaxed font-medium'>
                        {bio}
                    </p>
                    {linkedin && (
                        <a
                            href={linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-start w-[45px] h-[45px] border-none rounded-full cursor-pointer relative overflow-hidden transition-all duration-300 shadow-[2px_2px_10px_rgba(0,0,0,0.199)] bg-[#0a66c2] hover:w-[135px] hover:rounded-[40px] group/btn active:translate-x-[2px] active:translate-y-[2px]"
                        >
                            <div className="w-full transition-all duration-300 flex items-center justify-center group-hover/btn:w-[30%] group-hover/btn:pl-2.5">
                                <Linkedin className="w-5 h-5 text-white" />
                            </div>
                            <div className="absolute right-0 w-0 opacity-0 text-white text-[1.2em] font-semibold transition-all duration-300 group-hover/btn:opacity-100 group-hover/btn:w-[70%] group-hover/btn:pr-2.5">
                                LinkedIn
                            </div>
                        </a>
                    )}
                </div>
            </article>

            {/* Bottom Label (Hidden on Hover) */}
            <article className='p-4 sm:p-6 w-full flex flex-col justify-end absolute bottom-0 rounded-b-xl bg-gradient-to-t from-gray-900/90 to-transparent opacity-100 group-hover:opacity-0 group-hover:-bottom-4 transition-all duration-500'>
                <h2 className='text-lg sm:text-2xl font-bold text-white mb-1'>{name}</h2>
                <p className='text-cyan-300 font-medium tracking-wide text-xs sm:text-sm'>{role}</p>
            </article>
        </div>
    );
};

export default TeamMemberCard;
