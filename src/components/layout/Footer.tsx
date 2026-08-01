import { Heart } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t border-border py-8 text-center">
      <p className="flex items-center justify-center gap-1.5 text-sm text-muted">
        Made by Maotou with <Heart size={14} className="fill-current text-red-400" aria-hidden />
        <span className="sr-only">love</span>
      </p>
    </footer>
  );
}
