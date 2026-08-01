import { useEffect } from 'react';

const SCROLL_END_DELAY = 700;

/**
 * Adds a `scrolling` class to the root element while the page is actively
 * being scrolled, and removes it shortly after scrolling stops. Paired with
 * CSS that only paints the scrollbar thumb while this class is present, so
 * the scrollbar auto-hides at rest and reappears on scroll.
 */
export function useScrollbarAutoHide() {
  useEffect(() => {
    const root = document.documentElement;
    let hideTimer: ReturnType<typeof setTimeout>;

    const handleScroll = () => {
      root.classList.add('scrolling');
      clearTimeout(hideTimer);
      hideTimer = setTimeout(() => root.classList.remove('scrolling'), SCROLL_END_DELAY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(hideTimer);
    };
  }, []);
}
