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
