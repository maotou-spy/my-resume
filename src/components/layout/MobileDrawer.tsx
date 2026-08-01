import { AnimatePresence, motion } from 'framer-motion';
import { X, Home, User, Briefcase, Mail } from 'lucide-react';
import { navItems } from '@/constants/nav';

const icons = [Home, User, Briefcase, Mail];

interface MobileDrawerProps {
  open: boolean;
  onClose: () => void;
}

export function MobileDrawer({ open, onClose }: MobileDrawerProps) {
  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/60"
            onClick={onClose}
            aria-hidden
          />
          <motion.aside
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.25, ease: 'easeOut' }}
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
            className="fixed right-0 top-0 z-50 flex h-full w-72 flex-col gap-2 bg-surface p-6 shadow-2xl"
          >
            <button
              type="button"
              onClick={onClose}
              aria-label="Close navigation menu"
              className="mb-6 flex h-9 w-9 items-center justify-center self-end rounded-md text-muted hover:text-cyan focus-visible:outline-2 focus-visible:outline-cyan"
            >
              <X size={20} aria-hidden />
            </button>
            {navItems.map((item, index) => {
              const Icon = icons[index] ?? Home;
              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={onClose}
                  className="flex items-center gap-3 rounded-lg px-3 py-3 text-base font-medium text-text transition-colors hover:bg-surface-soft hover:text-cyan"
                >
                  <Icon size={18} aria-hidden />
                  {item.label}
                </a>
              );
            })}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
