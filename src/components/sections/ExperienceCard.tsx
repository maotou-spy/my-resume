import { motion } from 'framer-motion';
import { MonitorPlay } from 'lucide-react';
import type { ExperienceItem } from '@/types';

export function ExperienceCard({ item, index }: { item: ExperienceItem; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className="flex w-80 shrink-0 snap-start flex-col overflow-hidden rounded-xl border border-border bg-surface-soft transition-transform hover:-translate-y-1"
    >
      <div className="flex h-44 items-center justify-center bg-white p-6">
        <img
          src={item.logo}
          alt={`${item.company} logo`}
          className="max-h-full max-w-full object-contain"
          loading="lazy"
        />
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-lg font-bold text-text">{item.company}</h3>

        <div className="mt-1 flex items-baseline justify-between gap-2">
          {item.role && <p className="text-sm font-semibold text-cyan">{item.role}</p>}
          <p className="whitespace-nowrap text-xs text-muted">{item.period}</p>
        </div>

        <hr className="my-3 border-border/60" />

        {item.companyDescription && (
          <p className="mb-2 text-xs italic text-muted">{item.companyDescription}</p>
        )}

        <p className="text-sm leading-relaxed text-muted">{item.summary}</p>

        {item.techUsed && item.techUsed.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-1.5">
            {item.teamSize && (
              <span className="rounded-full bg-white/8 px-2.5 py-1 text-[11px] text-muted">
                Team: {item.teamSize}
              </span>
            )}
            {item.techUsed.map((tech) => (
              <span
                key={tech}
                className="rounded-full bg-white/8 px-2.5 py-1 text-[11px] text-muted"
              >
                {tech}
              </span>
            ))}
          </div>
        )}

        {item.videoUrl && (
          <a
            href={item.videoUrl}
            target="_blank"
            rel="noreferrer"
            aria-label={`Watch demo video for ${item.company}`}
            className="mt-4 inline-flex items-center gap-1.5 self-end text-xs font-medium text-muted transition-colors hover:text-red-400"
          >
            <MonitorPlay size={16} aria-hidden /> Watch demo
          </a>
        )}
      </div>
    </motion.article>
  );
}
