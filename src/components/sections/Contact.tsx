import { useForm } from 'react-hook-form';
import { Mail, MapPin, Phone } from 'lucide-react';
import type { ContactFormValues } from '@/types';
import { contactInfo, socialLinks } from '@/data/social';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';
import { Reveal } from '@/components/common/Reveal';
import { Container } from '@/components/common/Container';
import linkedinIcon from '@/assets/icons/linkedin.png';
import githubIcon from '@/assets/icons/github.png';

const iconMap = {
  location: MapPin,
  phone: Phone,
  email: Mail,
  linkedin: null,
  github: null,
} as const;

const imageIconMap: Partial<Record<string, string>> = {
  linkedin: linkedinIcon,
  github: githubIcon,
};

export function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm<ContactFormValues>();

  const onSubmit = (values: ContactFormValues) => {
    const body = encodeURIComponent(values.message);
    const subject = encodeURIComponent(values.subject);
    window.open(`mailto:${contactInfo.email}?subject=${subject}&body=${body}`, '_self');
    reset();
  };

  return (
    <section id="contact" className="py-24">
      <Container className="max-w-4xl">
        <div className="rounded-2xl border border-border bg-surface/60 p-8 sm:p-12">
          <SectionHeading eyebrow="Say hello" title="Contact Me" />

          <div className="mt-12 grid gap-12 md:grid-cols-[1.2fr_1fr]">
            <Reveal>
              <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5" noValidate>
                <div>
                  <label htmlFor="subject" className="sr-only">
                    Subject
                  </label>
                  <input
                    id="subject"
                    type="text"
                    placeholder="Subject"
                    aria-invalid={errors.subject ? 'true' : 'false'}
                    className="w-full border-b border-border bg-transparent py-2 text-text placeholder:text-muted/70 focus:border-violet-light focus:outline-none"
                    {...register('subject', { required: 'Please add a subject.' })}
                  />
                  {errors.subject && (
                    <p role="alert" className="mt-1 text-xs text-red-400">
                      {errors.subject.message}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="message" className="sr-only">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    placeholder="Message"
                    aria-invalid={errors.message ? 'true' : 'false'}
                    className="w-full resize-none border-b border-border bg-transparent py-2 text-text placeholder:text-muted/70 focus:border-violet-light focus:outline-none"
                    {...register('message', {
                      required: 'Please write a short message.',
                      minLength: {
                        value: 10,
                        message: 'Message should be at least 10 characters.',
                      },
                    })}
                  />
                  {errors.message && (
                    <p role="alert" className="mt-1 text-xs text-red-400">
                      {errors.message.message}
                    </p>
                  )}
                </div>

                <Button type="submit" variant="outline" className="mt-2 self-center">
                  Send Message
                </Button>

                {isSubmitSuccessful && (
                  <p role="status" className="text-center text-sm text-mint">
                    Your email client should now be open — thanks for reaching out!
                  </p>
                )}
              </form>
            </Reveal>

            <Reveal delay={0.1}>
              <ul className="flex flex-col gap-5">
                {socialLinks.map((link) => {
                  const Icon = iconMap[link.icon];
                  const image = imageIconMap[link.icon];
                  return (
                    <li key={link.label} className="flex items-start gap-3">
                      {Icon ? (
                        <Icon size={20} className="mt-0.5 shrink-0 text-cyan" aria-hidden />
                      ) : image ? (
                        <img
                          src={image}
                          alt=""
                          aria-hidden
                          className="mt-0.5 h-5 w-5 object-contain"
                        />
                      ) : null}
                      {link.href === '#' ? (
                        <span className="text-sm text-muted">{link.label}</span>
                      ) : (
                        <a
                          href={link.href}
                          target={link.href.startsWith('http') ? '_blank' : undefined}
                          rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
                          className="text-sm text-muted transition-colors hover:text-cyan"
                        >
                          {link.label}
                        </a>
                      )}
                    </li>
                  );
                })}
              </ul>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
