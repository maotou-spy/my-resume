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
    <header
      className={cn(
        'sticky top-0 z-40 transition-colors duration-300',
        scrolled ? 'bg-bg/85 backdrop-blur-md border-b border-border' : 'bg-transparent',
      )}
    >
      <Container className="flex h-20 items-center justify-between">
        <a
          href="#home"
          style={{ fontFamily: "'Satisfy', cursive" }}
          className="inline-block px-1 text-3xl font-bold italic bg-linear-to-r from-blue via-50% to-violet-light bg-clip-text text-transparent"
          aria-label={`${profile.wordmark} — back to top`}
        >
          {profile.wordmark}
        </a>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
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
