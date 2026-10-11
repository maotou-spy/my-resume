import { motion } from 'framer-motion';
import { profile } from '@/data/profile';
import { site } from '@/constants/site';
import { LinkButton } from '@/components/ui/Button';
import { Container } from '@/components/common/Container';
import { TestRunConsole } from './TestRunConsole';
import phucPhoto from '@/assets/images/phuc.jpg';

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-10 pb-24 sm:pt-16">
      <Container className="grid items-stretch gap-5 lg:grid-cols-[1.08fr_0.92fr]">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex min-h-[520px] flex-col rounded-[1.75rem] border border-border/80 bg-surface/75 p-7 shadow-2xl shadow-black/20 backdrop-blur-xl sm:p-10 lg:p-12"
        >
          <div className="flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-2 rounded-full border border-cyan/40 bg-cyan/10 px-3 py-1.5 font-mono text-xs text-cyan">
              <span className="size-1.5 rounded-full bg-cyan shadow-[0_0_8px_var(--color-cyan)]" aria-hidden />
              Available for new opportunities
            </span>
          </div>

          <p className="mt-8 font-mono text-sm text-muted">{profile.greeting}</p>
          <h1 className="mt-3 text-5xl font-bold leading-[0.95] tracking-tight sm:text-7xl">{profile.name}</h1>
          <p className="mt-5 max-w-2xl text-lg font-semibold text-text sm:text-xl">{profile.title}</p>
          <p className="mt-2 font-mono text-sm text-cyan">Full-stack quality engineering / automation / API testing</p>
          <p className="mt-7 max-w-2xl text-base leading-relaxed text-muted">{profile.summary}</p>

          <div className="mt-auto flex flex-wrap gap-3 pt-10">
            <LinkButton href={site.githubUrl} variant="primary">&lt; / &gt; GitHub</LinkButton>
            <LinkButton href="#contact" variant="primary">Send an Email</LinkButton>
            <LinkButton href={site.resumeUrl} variant="outline" target="_blank" rel="noopener noreferrer">View Resume</LinkButton>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.65, delay: 0.12 }}
          className="relative min-h-[520px] overflow-hidden rounded-[1.75rem] border border-border/80 bg-surface/70 p-3 shadow-2xl shadow-black/20 backdrop-blur-xl"
        >
          <div className="absolute inset-0 bg-linear-to-br from-cyan/10 via-transparent to-violet/10" aria-hidden />
          <img src={phucPhoto} alt={`Portrait of ${profile.name}`} className="relative h-full min-h-[494px] w-full rounded-2xl object-cover object-center" width={640} height={760} />
          <div className="absolute inset-x-7 bottom-7 flex items-center justify-between rounded-xl border border-border/80 bg-surface/85 px-4 py-3 font-mono text-xs backdrop-blur-xl">
            <span>{profile.name}</span>
            <span className="text-muted">Fullstack Test Engineer</span>
          </div>
        </motion.div>
      </Container>
      <div className="mx-auto mt-8 max-w-6xl px-6 lg:px-8"><TestRunConsole /></div>
    </section>
  );
}
