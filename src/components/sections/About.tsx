import { motion } from 'framer-motion';
import { profile } from '@/data/profile';
import { technicalSkills, coreSkills } from '@/data/skills';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Badge } from '@/components/ui/Badge';
import { Reveal } from '@/components/common/Reveal';
import { Container } from '@/components/common/Container';
import fptuLogo from '@/assets/images/fptu-logo.png';

export function About() {
  return (
    <section id="about" className="py-24">
      <Container>
        <SectionHeading eyebrow="About" title="About Me" />

        <div className="mt-14 grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:items-stretch">
          <Reveal className="flex">
            <div className="flex h-full flex-col justify-center border-l-2 border-cyan/50 pl-6">
              <h3 className="text-xl font-bold text-text">{profile.education.degree}</h3>
              <p className="mt-2 italic text-muted">
                {profile.education.school} | {profile.education.period}
              </p>
              <img
                src={fptuLogo}
                alt="FPT University logo"
                className="mt-8 h-16 w-auto object-contain"
                loading="lazy"
              />
            </div>
          </Reveal>

          <div className="space-y-10">
            <Reveal delay={0.1}>
              <h3 className="mb-4 font-mono text-xs uppercase tracking-[0.3em] text-cyan">
                Technical skills
              </h3>
              <div className="flex flex-wrap gap-3">
                {technicalSkills.map((skill) => (
                  <Badge key={skill.name} icon={skill.icon}>
                    {skill.name}
                  </Badge>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <h3 className="mb-4 font-mono text-xs uppercase tracking-[0.3em] text-cyan">
                Core skills
              </h3>
              <div className="flex flex-wrap gap-3">
                {coreSkills.map((skill, index) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, y: 8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                  >
                    <Badge subtle>{skill}</Badge>
                  </motion.div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
