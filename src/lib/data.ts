import type {LucideIcon} from 'lucide-react';
import {BookOpenCheck, PenSquare, UserCheck, Presentation, GraduationCap, Award, Briefcase, TestTube2, Globe} from 'lucide-react';

export type CourseCategorySlug = 
  | 'upsc-prep'
  | 'optional-subjects'
  | 'test-series'
  | 'interview-guidance'
  | 'weekend-courses';

export interface CourseCategory {
    slug: CourseCategorySlug;
    title: string;
    description: string;
}

export const courseCategories: CourseCategory[] = [
    {
        slug: 'upsc-prep',
        title: 'UPSC Prep+',
        description: 'Comprehensive programs for end-to-end UPSC CSE preparation.'
    },
    {
        slug: 'optional-subjects',
        title: 'Optional Subjects',
        description: 'Specialized coaching for a wide range of optional subjects.'
    },
    {
        slug: 'test-series',
        title: 'Test Series',
        description: 'Rigorous test series to evaluate your preparation and improve scores.'
    },
    {
        slug: 'interview-guidance',
        title: 'Interview Guidance Program',
        description: 'Expert guidance to excel in the UPSC personality test.'
    },
    {
        slug: 'weekend-courses',
        title: 'Weekend / Working Professionals',
        description: 'Flexible courses designed for working professionals and students.'
    }
];

export interface Course {
  slug: string;
  title: string;
  description: string; // Short description for homepage
  detailedDescription: string; // Longer description for course page
  icon: LucideIcon;
  category: CourseCategorySlug;
  tags: string[];
  duration: string;
  mode: 'Online' | 'Offline' | 'Hybrid';
}

export const courses: Course[] = [
  {
    slug: 'integrated-prelims-cum-mains',
    title: 'Integrated Prelims cum Mains',
    description: 'A comprehensive program covering the entire syllabus for both Prelims and Mains in an integrated manner.',
    detailedDescription: 'This flagship program is a one-stop solution for UPSC CSE preparation. It covers GS papers, CSAT, Essay, and optional subject preparation from scratch to an advanced level, ensuring a holistic understanding of the syllabus. Our approach integrates static knowledge with current affairs, providing a dynamic learning experience.',
    icon: BookOpenCheck,
    category: 'upsc-prep',
    tags: ['Foundation', 'Comprehensive', 'Beginner-Friendly'],
    duration: '12 Months',
    mode: 'Hybrid',
  },
  {
    slug: 'prelims-value-addition-program',
    title: 'Prelims Value Addition Program',
    description: 'A specialized course to boost your Prelims score with targeted content, test series, and strategy sessions.',
    detailedDescription: 'Designed for aspirants who have completed their basic preparation, this course focuses on score maximization through advanced concepts, current affairs linkage, and intensive MCQ practice. It includes targeted workshops on difficult areas and personalized performance analysis.',
    icon: GraduationCap,
    category: 'upsc-prep',
    tags: ['Prelims', 'Score Booster', 'Advanced'],
    duration: '4 Months',
    mode: 'Online',
  },
  {
    slug: 'mains-value-addition-program',
    title: 'Mains Value Addition Program',
    description: 'Enhance your Mains performance through intensive answer writing practice, essay guidance, and ethics case studies.',
    detailedDescription: 'Improve your answer writing skills, learn effective structuring, and enrich your content for all GS papers and Essay. This program includes personalized feedback from experienced evaluators, model answers for all tests, and mentorship sessions.',
    icon: PenSquare,
    category: 'upsc-prep',
    tags: ['Mains', 'Answer Writing', 'Ethics'],
    duration: '3 Months',
    mode: 'Hybrid',
  },
  {
    slug: 'interview-guidance-program',
    title: 'Interview Guidance Program',
    description: 'Master the art of the UPSC interview with mock panels, DAF analysis, and personalized feedback from experts.',
    detailedDescription: 'Our IGP is led by retired bureaucrats and subject matter experts. It includes multiple mock interviews with detailed video analysis, DAF-based personal sessions to prepare for specific questions, and classes on current national and international issues.',
    icon: UserCheck,
    category: 'interview-guidance',
    tags: ['Personality Test', 'Mock Interview', 'DAF Analysis'],
    duration: '1 Month',
    mode: 'Offline',
  },
  {
    slug: 'psir-optional-foundation',
    title: 'PSIR Optional Foundation',
    description: 'Political Science & International Relations optional course.',
    detailedDescription: 'A comprehensive course covering both Paper 1 and Paper 2 of the PSIR optional subject, with a focus on conceptual clarity and interlinkages with current events. Taught by renowned faculty, the program includes exhaustive study material and regular answer writing sessions.',
    icon: Globe,
    category: 'optional-subjects',
    tags: ['PSIR', 'Optional', 'Social Science'],
    duration: '6 Months',
    mode: 'Online',
  },
    {
    slug: 'sociology-optional-course',
    title: 'Sociology Optional Course',
    description: 'In-depth coverage of Sociology optional syllabus.',
    detailedDescription: 'Master the concepts of Sociology with our expert faculty. The course includes detailed notes compiled from standard sources, dedicated answer writing practice sessions, and sociological analysis of contemporary Indian society.',
    icon: Award,
    category: 'optional-subjects',
    tags: ['Sociology', 'Optional', 'Social Science'],
    duration: '5 Months',
    mode: 'Hybrid',
  },
  {
    slug: 'prelims-test-series-2025',
    title: 'Prelims Test Series 2025',
    description: 'Comprehensive test series for UPSC Prelims.',
    detailedDescription: 'Includes over 30 tests, including sectional, full-length, and CSAT papers, designed to simulate the latest UPSC exam pattern. Detailed performance analysis, all-India ranking, and video explanations are provided for each test.',
    icon: TestTube2,
    category: 'test-series',
    tags: ['Prelims', 'MCQ Practice', 'Evaluation'],
    duration: '6 Months',
    mode: 'Online',
  },
    {
    slug: 'mains-test-series-2025',
    title: 'Mains Test Series 2025',
    description: 'Extensive answer writing practice for UPSC Mains.',
    detailedDescription: 'A series of 20+ tests including sectional, essay, and full-length GS papers. Features high-quality questions based on UPSC trends, detailed evaluation with personalized feedback within a week, and model answers from toppers.',
    icon: TestTube2,
    category: 'test-series',
    tags: ['Mains', 'Answer Writing', 'Evaluation'],
    duration: '4 Months',
    mode: 'Hybrid',
  },
  {
    slug: 'weekend-gs-foundation-course',
    title: 'Weekend GS Foundation Course',
    description: 'A comprehensive GS course for working professionals.',
    detailedDescription: 'Covering the entire GS syllabus for Prelims and Mains, this course is designed with a flexible schedule for those who are working or in college. Classes are held on Saturdays and Sundays, with access to recorded sessions and weekday support.',
    icon: Briefcase,
    category: 'weekend-courses',
    tags: ['Working Professionals', 'Foundation', 'Flexible'],
    duration: '15 Months',
    mode: 'Hybrid',
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

export type UPSCSubject =
  | 'History'
  | 'Art & Culture'
  | 'Indian Society'
  | 'Indian Polity'
  | 'Governance'
  | 'International Relations'
  | 'Indian Economy'
  | 'Science & Technology'
  | 'Environment & Ecology'
  | 'Internal Security'
  | 'Disaster Management'
  | 'Ethics';

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
    subject: 'Science & Technology',
    tags: ['science', 'technology', 'space', 'isro'],
  },
  {
    id: 2,
    title: 'Understanding the Uniform Civil Code (UCC)',
    summary: 'A deep dive into the legal and social implications of the proposed Uniform Civil Code in India.',
    date: '2024-07-27',
    subject: 'Indian Polity',
    tags: ['polity', 'law', 'constitution', 'ucc'],
  },
  {
    id: 3,
    title: 'Monsoon Impact on Indian Agriculture',
    summary: 'Analyzing the effects of the delayed monsoon on crop yields and the rural economy.',
    date: '2024-07-26',
    subject: 'Indian Economy',
    tags: ['economy', 'agriculture', 'geography', 'monsoon'],
  },
  {
    id: 4,
    title: 'The Ethics of Artificial Intelligence in Governance',
    summary: 'Exploring the ethical dilemmas and frameworks required for deploying AI in public administration.',
    date: '2024-07-25',
    subject: 'Ethics',
    tags: ['ethics', 'ai', 'governance', 'technology'],
  },
  {
    id: 5,
    title: 'India\'s Role in Global Diplomacy',
    summary: 'Examining India\'s evolving foreign policy and its position on major international issues.',
    date: '2024-07-24',
    subject: 'International Relations',
    tags: ['international relations', 'foreign policy', 'diplomacy'],
  },
  {
    id: 6,
    title: 'Challenges of Urbanization in India',
    summary: 'A look at the growing pains of Indian cities, including housing, sanitation, and transportation issues.',
    date: '2024-07-23',
    subject: 'Indian Society',
    tags: ['social issues', 'urbanization', 'society'],
  },
  {
    id: 7,
    title: 'Financial Inclusion and Digital Payments',
    summary: 'How digital payment systems are transforming financial inclusion in rural and urban India.',
    date: '2024-07-22',
    subject: 'Indian Economy',
    tags: ['economy', 'banking', 'digital india'],
  },
  {
    id: 8,
    title: 'Ancient Indus Valley Civilization Insights',
    summary: 'New archaeological findings shed light on the trade routes and cultural practices of the Indus Valley Civilization.',
    date: '2024-07-21',
    subject: 'History',
    tags: ['history', 'archaeology', 'indus valley'],
  },
];
