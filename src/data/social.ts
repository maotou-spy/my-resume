import type { SocialLink } from '@/types';

export const contactInfo = {
  address: 'Ho Chi Minh City, Vietnam',
  phoneNumber: '(+84) 94.505.5293',
  email: 'phucbui.workstation@gmail.com',
  linkedinUrl: 'https://www.linkedin.com/in/yemufu',
  githubUrl: 'https://github.com/maotou-spy',
} as const;

export const socialLinks: SocialLink[] = [
  { label: contactInfo.address, href: '#', icon: 'location' },
  {
    label: contactInfo.phoneNumber,
    href: `tel:${contactInfo.phoneNumber.replace(/[^\d+]/g, '')}`,
    icon: 'phone',
  },
  { label: contactInfo.email, href: `mailto:${contactInfo.email}`, icon: 'email' },
  { label: 'linkedin.com/in/yemufu', href: contactInfo.linkedinUrl, icon: 'linkedin' },
  { label: 'github.com/maotou-spy', href: contactInfo.githubUrl, icon: 'github' },
];
