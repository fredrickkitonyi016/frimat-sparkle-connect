import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium font-tech ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 relative overflow-hidden",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg hover:shadow-xl transform hover:scale-105 duration-300",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90 shadow-lg hover:shadow-xl",
        outline:
          "border-2 border-primary/50 bg-background/50 hover:bg-primary/10 hover:border-primary hover:text-primary backdrop-blur-sm cyber-border",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80 glass-card",
        ghost: "hover:bg-accent hover:text-accent-foreground hover:scale-105 duration-300",
        link: "text-primary underline-offset-4 hover:underline text-gradient",
        hero: "btn-glow text-primary-foreground font-semibold tracking-wider uppercase relative",
        premium: "bg-gradient-primary text-primary-foreground shadow-neon hover:shadow-[var(--shadow-neon)] transform hover:scale-110 hover:rotate-1 duration-500",
        cyber: "glass-card border-primary/40 text-primary hover:bg-primary/20 hover:text-foreground cyber-border shimmer",
        neon: "bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground hover:shadow-[var(--shadow-neon)] animate-glow-pulse",
      },
      size: {
        default: "h-11 px-6 py-3 text-sm",
        sm: "h-9 rounded-md px-4 text-xs",
        lg: "h-14 rounded-xl px-10 text-base font-semibold",
        xl: "h-16 rounded-2xl px-12 text-lg font-bold",
        icon: "h-11 w-11",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
