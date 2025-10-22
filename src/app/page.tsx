'use client';

import React from 'react';
import Header from '@/components/common/header';
import Hero from '@/components/sections/hero';
import Courses from '@/components/sections/courses';
import WhyChooseUs from '@/components/sections/why-choose-us';
import Faculty from '@/components/sections/faculty';
import SuccessStories from '@/components/sections/success-stories';
import Contact from '@/components/sections/contact';
import Footer from '@/components/common/footer';

export default function Home() {
  const [searchQuery, setSearchQuery] = React.useState('');

  return (
    <div className="flex min-h-dvh flex-col bg-background">
      <Header />
      <main className="flex-1">
        <Hero searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        <Courses searchQuery={searchQuery} />
        <WhyChooseUs />
        <Faculty />
        <SuccessStories />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
