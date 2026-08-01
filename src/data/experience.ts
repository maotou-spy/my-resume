import type { ExperienceItem } from '@/types';

import s4bt from '@/assets/images/s4bt-logo.png';
import tsb from '@/assets/images/tsb-logo.png';
import fptSoftware from '@/assets/images/fpt-software-logo.png';
import bai from '@/assets/images/bai-project.png';
import lumos from '@/assets/images/lumos-project.jpg';

export const workExperience: ExperienceItem[] = [
  {
    id: 's4bt',
    logo: s4bt,
    company: 'S4BT Solutions for Business Travel',
    companyDescription: 'European company simplifying business travel booking and payments.',
    role: 'QA Automation Engineer',
    period: '2026 - Present',
    summary:
      'QA automation for booking workflows, manual/API testing, and automation with Playwright & Selenium.',
    techUsed: ['Selenium (C#)', 'Playwright (TypeScript)', 'Azure DevOps', 'Git'],
    teamSize: '15',
  },
  {
    id: 'tsb',
    logo: tsb,
    company: 'Total Soft Bank Ltd.',
    companyDescription: 'Global leader in maritime and logistics software.',
    role: 'Software QA Engineer',
    period: '2025 - 2026',
    summary:
      'Analyzed requirements, coordinated QA testing, and validated API integrations with ERP systems.',
    teamSize: '5',
  },
  {
    id: 'fpt-software',
    logo: fptSoftware,
    company: 'FPT Software Co., Ltd.',
    role: 'Java Developer Intern',
    period: '2023',
    summary:
      'Developed backend services and RESTful APIs for a recruitment site using Spring Boot.',
    techUsed: ['Java', 'Spring Boot', 'Git', 'Google Docs'],
    teamSize: '10',
  },
];

export const personalExperience: ExperienceItem[] = [
  {
    id: 'bai',
    logo: bai,
    company: 'Bai - Bike Parking App for FPTU',
    role: 'Backend & Mobile Developer',
    period: '2024',
    summary: 'Cashless parking management app with in-app payments, statistics, and user roles.',
    techUsed: ['Electron', 'ASP.NET', 'Flutter', 'VNPAY', 'ZaloPay'],
  },
  {
    id: 'lumos',
    logo: lumos,
    company: "Lumos - Mothers' Home Healthcare Platform",
    role: 'Backend & Mobile Developer',
    period: '2024',
    summary:
      'Platform connecting mothers & infants to home medical services with easy appointment scheduling.',
    techUsed: ['Next.js', 'ASP.NET', 'Flutter', 'payOS'],
    videoUrl: 'https://youtu.be/sdqDnwKHtEE',
  },
];
