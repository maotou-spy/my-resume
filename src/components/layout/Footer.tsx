import { ArrowUpRight, Link2, Mail, MapPin, Phone } from 'lucide-react';
import { contactInfo } from '@/data/social';

const directChannels = [
  { label: contactInfo.email, href: `mailto:${contactInfo.email}`, icon: Mail },
  { label: contactInfo.phoneNumber, href: `tel:${contactInfo.phoneNumber.replace(/[^\\d+]/g, '')}`, icon: Phone },
  { label: 'GitHub Profile', href: contactInfo.githubUrl, icon: Link2 },
  { label: 'LinkedIn Connection', href: contactInfo.linkedinUrl, icon: Link2 },
];

export function Footer() {
  return (
    <footer id="contact" className="px-4 pb-6 pt-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-3xl border border-white/10 bg-surface/80 shadow-2xl shadow-black/20 backdrop-blur-xl">
        <div className="grid gap-10 p-6 sm:p-8 lg:grid-cols-[1fr_1.15fr] lg:p-10">
          <div className="flex flex-col gap-8">
            <div>
              <div className="flex items-center gap-3">
                <span className="grid size-9 place-items-center rounded-lg bg-mint text-sm font-bold text-bg" aria-hidden>
                  DB
                </span>
                <p className="font-display text-lg font-bold text-text">Danny Bui <span className="font-mono text-sm font-normal text-muted">/&gt;</span></p>
              </div>
              <p className="mt-7 max-w-md border-l-2 border-mint pl-5 font-mono text-sm leading-7 text-muted">
                “Keep going. Everything you need will come to you at the perfect time.”
              </p>
            </div>

            <p className="flex items-center gap-2 font-mono text-xs text-muted">
              <MapPin className="text-mint" data-icon="inline-start" aria-hidden />
              {contactInfo.address}
            </p>
          </div>

          <div>
            <p className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-mint">Direct channels</p>
            <div className="grid gap-3 sm:grid-cols-2">
              {directChannels.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noreferrer' : undefined}
                  className="group flex min-w-0 items-center gap-3 rounded-xl border border-white/10 bg-black/15 px-4 py-3 text-sm text-muted transition-colors hover:border-mint/50 hover:text-text"
                >
                  <Icon className="shrink-0 text-mint" data-icon="inline-start" aria-hidden />
                  <span className="min-w-0 flex-1 truncate">{label}</span>
                  <ArrowUpRight className="shrink-0 opacity-50 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" data-icon="inline-end" aria-hidden />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mx-6 border-t border-white/10 sm:mx-8 lg:mx-10" />
        <div className="flex flex-col gap-3 px-6 py-6 font-mono text-xs text-muted sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-10">
          <p>© {new Date().getFullYear()} Danny Bui. All rights reserved.</p>
          <p className="flex items-center gap-2"><span className="size-2 rounded-full bg-mint shadow-[0_0_10px_var(--color-mint)]" aria-hidden /> Based in {contactInfo.address}</p>
        </div>
      </div>
    </footer>
  );
}
