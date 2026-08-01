import { motion } from 'framer-motion';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  align?: 'center' | 'left';
}

export function SectionHeading({ eyebrow, title, align = 'center' }: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5 }}
      className={align === 'center' ? 'text-center' : 'text-left'}
    >
      {eyebrow && (
        <p className="mb-2 font-mono text-xs uppercase tracking-[0.3em] text-cyan">{eyebrow}</p>
      )}
      <h2 className="text-3xl font-bold sm:text-4xl">{title}</h2>
    </motion.div>
  );
}
