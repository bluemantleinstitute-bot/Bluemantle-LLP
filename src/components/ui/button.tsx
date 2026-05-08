import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90 rounded-md",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90 rounded-md",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground rounded-md",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80 rounded-md",
        ghost: "hover:bg-accent hover:text-accent-foreground rounded-md",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  animated?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, animated = true, children, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    const shouldAnimate = animated && variant !== "ghost" && variant !== "link";
    
    if (shouldAnimate) {
      const innerClasses = cn(
        "relative z-10 inline-flex h-full w-full cursor-pointer items-center justify-center gap-2 rounded-full backdrop-blur-3xl transition-colors",
        size === "lg"
          ? "px-8 py-3 text-base font-semibold"
          : size === "sm"
            ? "px-4 py-2 text-sm"
            : "px-6 py-2.5 text-sm font-medium",
        variant === "default" && "bg-card/90 text-primary-foreground hover:bg-card/80",
        variant === "secondary" && "bg-card/90 text-secondary hover:bg-card/80",
        variant === "outline" && "bg-background text-foreground hover:bg-muted",
        variant === "destructive" && "bg-card/90 text-destructive hover:bg-card/80",
        !variant && "bg-card/90 text-primary-foreground hover:bg-card/80",
      );

      const wrapperClasses = cn(
        "relative inline-flex overflow-hidden rounded-full p-[2px] transition-shadow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50 group hover:shadow-[var(--shadow-glow-cyan)]",
        className,
      );

      const gradientSpan = (
        <span className="absolute inset-[-1000%] motion-reduce:animate-none animate-[spin_2.4s_linear_infinite] opacity-90 bg-[conic-gradient(from_90deg_at_50%_50%,hsl(var(--secondary))_0%,hsl(var(--primary))_35%,hsl(var(--purple))_55%,hsl(var(--primary))_75%,hsl(var(--secondary))_100%)]" />
      );

      if (asChild) {
        return (
          <span className={wrapperClasses}>
            {gradientSpan}
            <Comp className={innerClasses} ref={ref} {...props}>
              {children}
            </Comp>
          </span>
        );
      }

      return (
        <button
          className={wrapperClasses}
          ref={ref}
          {...props}
        >
          {gradientSpan}
          <span className={innerClasses}>
            {children}
          </span>
        </button>
      );
    }
    
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props}>{children}</Comp>;
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
