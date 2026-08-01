import type { ReactNode } from 'react';
import { cn } from '@/utils/cn';

interface BadgeProps {
  children: ReactNode;
  icon?: string;
  className?: string;
  subtle?: boolean;
}

export function Badge({ children, icon, className, subtle = false }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-2 rounded-md px-4 py-2 text-sm font-medium',
        subtle ? 'bg-surface-soft/60 text-muted' : 'bg-surface-soft text-text',
        className,
      )}
    >
      {icon && <img src={icon} alt="" className="h-4 w-4 object-contain" aria-hidden />}
      {children}
    </span>
  );
}
