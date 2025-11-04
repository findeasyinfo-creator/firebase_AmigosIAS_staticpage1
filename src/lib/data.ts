import type {LucideIcon} from 'lucide-react';
import {BookOpenCheck, PenSquare, UserCheck, Presentation, GraduationCap, Award} from 'lucide-react';

export interface Course {
  title: string;
  description: string;
  icon: LucideIcon;
}

export const courses: Course[] = [
  {
    title: 'Integrated Prelims cum Mains',
    description: 'A comprehensive program covering the entire syllabus for both Prelims and Mains in an integrated manner.',
    icon: BookOpenCheck,
  },
  {
    title: 'Prelims Value Addition Program',
    description: 'A specialized course to boost your Prelims score with targeted content, test series, and strategy sessions.',
    icon: GraduationCap,
  },
  {
    title: 'Mains Value Addition Program',
    description: 'Enhance your Mains performance through intensive answer writing practice, essay guidance, and ethics case studies.',
    icon: PenSquare,
  },
  {
    title: 'Interview Guidance Program',
    description: 'Master the art of the UPSC interview with mock panels, DAF analysis, and personalized feedback from experts.',
    icon: UserCheck,
  },
];

export interface Faculty {
  name: string;
  qualification: string;
  experience: string;
  imageId: string;
}

export const faculty: Faculty[] = [
  {
    name: 'Dr. Anirudh Sharma',
    qualification: 'PhD in Political Science',
    experience: '15+ years of teaching, mentored 200+ successful candidates.',
    imageId: 'faculty-1',
  },
  {
    name: 'Prof. Meera Kapoor',
    qualification: 'MA in History, Ex-Civil Servant',
    experience: 'Brings a unique blend of academic knowledge and practical administrative experience.',
    imageId: 'faculty-2',
  },
  {
    name: 'Mr. Vikram Rathore',
    qualification: 'M.Sc in Geography, JRF',
    experience: 'An expert in Geography and Environment, known for his dynamic teaching style.',
    imageId: 'faculty-3',
  },
  {
    name: 'Ms. Sunita Reddy',
    qualification: 'MA in Economics',
    experience: 'Specializes in Indian Economy with a focus on current affairs and contemporary issues.',
    imageId: 'faculty-4',
  },
];

export interface SuccessStory {
  name: string;
  rank: string;
  story: string;
  imageId: string;
}

export const successStories: SuccessStory[] = [
  {
    name: 'Priya Singh',
    rank: 'AIR 23, UPSC CSE 2022',
    story:
      'AmigosIAS provided the right guidance and a competitive environment. The faculty is exceptional and always ready to help. Their test series was a game changer for me.',
    imageId: 'success-1',
  },
  {
    name: 'Rohan Mehta',
    rank: 'AIR 45, UPSC CSE 2023',
    story:
      'The personalized mentorship at AmigosIAS is unparalleled. The Mains Value Addition program helped me structure my answers effectively, significantly boosting my score.',
    imageId: 'success-2',
  },
  {
    name: 'Anjali Desai',
    rank: 'AIR 12, UPSC CSE 2021',
    story:
      "From Prelims to the Interview, AmigosIAS was my constant support. The Interview Guidance Program was incredibly realistic and gave me the confidence to face the actual board.",
    imageId: 'success-3',
  },
];

export type UPSCSubject = 'GS Paper I' | 'GS Paper II' | 'GS Paper III' | 'GS Paper IV' | 'Essay' | 'General';

export interface CurrentAffairsArticle {
  id: number;
  title: string;
  summary: string;
  date: string;
  subject: UPSCSubject;
  tags: string[];
}

export const currentAffairsArticles: CurrentAffairsArticle[] = [
  {
    id: 1,
    title: 'New Developments in India\'s Space Program',
    summary: 'ISRO announces plans for its next lunar mission, aiming to explore the south pole of the moon in more detail.',
    date: '2024-07-28',
    subject: 'GS Paper III',
    tags: ['science', 'technology', 'space', 'isro'],
  },
  {
    id: 2,
    title: 'Understanding the Uniform Civil Code (UCC)',
    summary: 'A deep dive into the legal and social implications of the proposed Uniform Civil Code in India.',
    date: '2024-07-27',
    subject: 'GS Paper II',
    tags: ['polity', 'law', 'constitution', 'ucc'],
  },
  {
    id: 3,
    title: 'Monsoon Impact on Indian Agriculture',
    summary: 'Analyzing the effects of the delayed monsoon on crop yields and the rural economy.',
    date: '2024-07-26',
    subject: 'GS Paper III',
    tags: ['economy', 'agriculture', 'geography', 'monsoon'],
  },
  {
    id: 4,
    title: 'The Ethics of Artificial Intelligence in Governance',
    summary: 'Exploring the ethical dilemmas and frameworks required for deploying AI in public administration.',
    date: '2024-07-25',
    subject: 'GS Paper IV',
    tags: ['ethics', 'ai', 'governance', 'technology'],
  },
  {
    id: 5,
    title: 'India\'s Role in Global Diplomacy',
    summary: 'Examining India\'s evolving foreign policy and its position on major international issues.',
    date: '2024-07-24',
    subject: 'GS Paper II',
    tags: ['international relations', 'foreign policy', 'diplomacy'],
  },
  {
    id: 6,
    title: 'Challenges of Urbanization in India',
    summary: 'A look at the growing pains of Indian cities, including housing, sanitation, and transportation issues.',
    date: '2024-07-23',
    subject: 'GS Paper I',
    tags: ['social issues', 'urbanization', 'society'],
  },
  {
    id: 7,
    title: 'Financial Inclusion and Digital Payments',
    summary: 'How digital payment systems are transforming financial inclusion in rural and urban India.',
    date: '2024-07-22',
    subject: 'GS Paper III',
    tags: ['economy', 'banking', 'digital india'],
  },
  {
    id: 8,
    title: 'Philosophical basis of goodness and ultimate happiness',
    summary: 'The concept of "Eudaimonia" and its relevance in modern life and ethical decision-making.',
    date: '2024-07-21',
    subject: 'Essay',
    tags: ['philosophy', 'ethics', 'essay topic'],
  },
];
