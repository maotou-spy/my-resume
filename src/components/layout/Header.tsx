import { useEffect, useState } from 'react';
import { Menu } from 'lucide-react';
import { navItems } from '@/constants/nav';
import { profile } from '@/data/profile';
import { useActiveSection } from '@/hooks/useActiveSection';
import { ThemeToggle } from '@/components/ui/ThemeToggle';
import { Container } from '@/components/common/Container';
import { cn } from '@/utils/cn';

interface HeaderProps {
  onOpenMenu: () => void;
}

export function Header({ onOpenMenu }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const activeId = useActiveSection(navItems.map((item) => item.href.replace('#', '')));

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className="sticky top-0 z-40 px-4 pt-4 sm:px-6 lg:px-8">
      <Container
        className={cn(
          'flex h-16 items-center justify-between rounded-2xl border px-4 transition-all duration-300 sm:px-6',
          scrolled
            ? 'border-border bg-surface/85 shadow-xl shadow-black/10 backdrop-blur-xl'
            : 'border-white/10 bg-surface/35 backdrop-blur-md',
        )}
      >
        <a
          href="#home"
          style={{ fontFamily: "'Satisfy', cursive" }}
          className="inline-block px-1 text-3xl font-bold italic bg-linear-to-r from-blue via-50% to-violet-light bg-clip-text text-transparent"
          aria-label={`${profile.wordmark} — back to top`}
        >
          {profile.wordmark}
        </a>

        <nav className="hidden items-center gap-6 md:flex" aria-label="Primary">
          <span className="flex items-center gap-2 rounded-full border border-cyan/40 bg-cyan/10 px-3 py-1.5 font-mono text-xs text-cyan">
            <span className="size-1.5 rounded-full bg-cyan shadow-[0_0_8px_var(--color-cyan)]" aria-hidden />
            Available for opportunities
          </span>
          {navItems.map((item) => {
            const isActive = activeId === item.href.replace('#', '');
            return (
              <a
                key={item.href}
                href={item.href}
                className={cn(
                  'text-sm font-medium transition-colors hover:text-cyan',
                  isActive ? 'text-cyan' : 'text-text',
                )}
                aria-current={isActive ? 'true' : undefined}
              >
                {item.label}
              </a>
            );
          })}
          <ThemeToggle />
        </nav>

        <div className="flex items-center gap-3 md:hidden">
          <span className="size-2 rounded-full bg-cyan shadow-[0_0_8px_var(--color-cyan)]" aria-label="Available for opportunities" />
          <ThemeToggle />
          <button
            type="button"
            onClick={onOpenMenu}
            aria-label="Open navigation menu"
            className="flex h-9 w-9 items-center justify-center rounded-md text-text hover:text-cyan focus-visible:outline-2 focus-visible:outline-cyan"
          >
            <Menu size={22} aria-hidden />
          </button>
        </div>
      </Container>
    </header>
  );
}
