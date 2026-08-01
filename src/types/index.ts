export interface NavItem {
  label: string;
  href: string;
}

export interface SkillItem {
  name: string;
  icon: string;
}

export interface ExperienceItem {
  id: string;
  logo: string;
  company: string;
  companyDescription?: string;
  role: string;
  period: string;
  summary: string;
  techUsed?: string[];
  teamSize?: string;
  videoUrl?: string;
}

export interface SocialLink {
  label: string;
  href: string;
  icon: 'email' | 'phone' | 'location' | 'linkedin' | 'github';
}

export interface ContactFormValues {
  subject: string;
  message: string;
}
