import type { SkillItem } from '@/types';

import java from '@/assets/icons/java.png';
import dotnet from '@/assets/icons/dotnet.png';
import restful from '@/assets/icons/restful.png';
import flutter from '@/assets/icons/flutter.png';
import dart from '@/assets/icons/dart.png';
import android from '@/assets/icons/android.png';
import html5 from '@/assets/icons/html5.png';
import css3 from '@/assets/icons/css3.png';
import playwright from '@/assets/icons/playwright.png';
import selenium from '@/assets/icons/selenium.jpg';
import mysql from '@/assets/icons/mysql.png';
import mssql from '@/assets/icons/mssql.png';
import git from '@/assets/icons/git.png';
import github from '@/assets/icons/github.png';

export const technicalSkills: SkillItem[] = [
  { name: 'Java', icon: java },
  { name: '.NET / ASP.NET', icon: dotnet },
  { name: 'RESTful API', icon: restful },
  { name: 'Flutter', icon: flutter },
  { name: 'Dart', icon: dart },
  { name: 'Android (Java)', icon: android },
  { name: 'HTML5', icon: html5 },
  { name: 'CSS3', icon: css3 },
  { name: 'Playwright', icon: playwright },
  { name: 'Selenium', icon: selenium },
  { name: 'MSSQL', icon: mssql },
  { name: 'MySQL', icon: mysql },
  { name: 'Git', icon: git },
  { name: 'GitHub', icon: github },
];

export const coreSkills: string[] = [
  'Teamwork',
  'Problem Solving',
  'Presentation',
  'Adaptability',
  'Communication',
  'Reading & comprehending documentation',
];
