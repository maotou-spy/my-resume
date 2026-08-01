import { motion } from 'framer-motion';
import { profile } from '@/data/profile';
import { site } from '@/constants/site';
import { LinkButton } from '@/components/ui/Button';
import { Container } from '@/components/common/Container';
import { TestRunConsole } from './TestRunConsole';
import phucPhoto from '@/assets/images/phuc.jpg';

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-16 pb-24 sm:pt-24">
      <Container className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-lg text-muted"
          >
            {profile.greeting}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.08 }}
            className="mt-2 text-5xl font-bold leading-tight sm:text-6xl lg:text-7xl"
          >
            {profile.name}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.16 }}
            className="mt-4 text-xl font-semibold text-cyan"
          >
            {profile.title}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.24 }}
            className="mt-5 max-w-xl text-base leading-relaxed text-muted"
          >
            {profile.summary}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.32 }}
            className="mt-8 flex flex-wrap gap-4"
          >
            <LinkButton href="#contact" variant="primary">
              Get in Touch
            </LinkButton>
            <LinkButton href={site.resumeUrl} variant="outline" download>
              Download Resume
            </LinkButton>
          </motion.div>
        </div>

        <div className="flex flex-col items-center gap-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="relative"
          >
            <div className="absolute inset-0 -z-10 rounded-full bg-linear-to-br from-blue to-violet-light blur-3xl opacity-30" />
            <img
              src={phucPhoto}
              alt={`Portrait of ${profile.name}`}
              className="h-56 w-56 rounded-full border-4 border-surface-soft object-cover shadow-2xl sm:h-64 sm:w-64"
              width={256}
              height={256}
            />
          </motion.div>

          <TestRunConsole />
        </div>
      </Container>
    </section>
  );
}
