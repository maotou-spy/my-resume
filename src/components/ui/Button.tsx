import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react';
import { cn } from '@/utils/cn';

type Variant = 'primary' | 'outline' | 'ghost';

const variantClasses: Record<Variant, string> = {
  primary:
    'btn-gradient text-white shadow-lg shadow-violet/20 hover:brightness-110 hover:-translate-y-0.5',
  outline:
    'border border-violet-light/70 text-text hover:bg-violet-light/10 hover:-translate-y-0.5',
  ghost: 'text-muted hover:text-text',
};

const baseClasses =
  'inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3 text-sm font-semibold tracking-wide transition-all duration-200 focus-visible:outline-2 focus-visible:outline-cyan';

interface CommonProps {
  variant?: Variant;
  children: ReactNode;
  className?: string;
}

type ButtonProps = CommonProps & ButtonHTMLAttributes<HTMLButtonElement>;
type LinkProps = CommonProps & AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

export function Button({ variant = 'primary', className, children, ...rest }: ButtonProps) {
  return (
    <button className={cn(baseClasses, variantClasses[variant], className)} {...rest}>
      {children}
    </button>
  );
}

export function LinkButton({ variant = 'primary', className, children, ...rest }: LinkProps) {
  return (
    <a className={cn(baseClasses, variantClasses[variant], className)} {...rest}>
      {children}
    </a>
  );
}
