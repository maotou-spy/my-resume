import { workExperience, personalExperience } from '@/data/experience';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Container } from '@/components/common/Container';
import { ExperienceCard } from './ExperienceCard';

function ExperienceRow({ title, items }: { title: string; items: typeof workExperience }) {
  return (
    <div>
      <h3 className="mb-6 text-2xl font-bold">{title}</h3>
      <div className="-mx-6 flex snap-x snap-mandatory gap-6 overflow-x-auto px-6 pb-4 sm:mx-0 sm:px-0">
        {items.map((item, index) => (
          <ExperienceCard key={item.id} item={item} index={index} />
        ))}
      </div>
    </div>
  );
}

export function Experience() {
  return (
    <section id="experience" className="py-24">
      <Container>
        <SectionHeading eyebrow="Career" title="Experience" />

        <div className="mt-14 space-y-20">
          <ExperienceRow title="Job Experience" items={workExperience} />
          <ExperienceRow title="Personal Projects" items={personalExperience} />
        </div>
      </Container>
    </section>
  );
}
