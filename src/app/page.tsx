import Header from '@/components/common/header';
import Hero from '@/components/sections/hero';
import Courses from '@/components/sections/courses';
import Faculty from '@/components/sections/faculty';
import SuccessStories from '@/components/sections/success-stories';
import StudyPlanner from '@/components/sections/study-planner';
import Contact from '@/components/sections/contact';
import Footer from '@/components/common/footer';

export default function Home() {
  return (
    <div className="flex min-h-dvh flex-col bg-background">
      <Header />
      <main className="flex-1">
        <Hero />
        <Courses />
        <Faculty />
        <SuccessStories />
        <StudyPlanner />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
