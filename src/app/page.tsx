'use client';

import React from 'react';
import Header from '@/components/common/header';
import Hero from '@/components/sections/hero';
import Courses from '@/components/sections/courses';
import SuccessStories from '@/components/sections/success-stories';
import Contact from '@/components/sections/contact';
import Footer from '@/components/common/footer';
import WhyChooseUs from '@/components/sections/why-choose-us';

export default function Home() {
  return (
    <div className="flex min-h-dvh flex-col bg-background">
      <Header />
      <main className="flex-1">
        <Hero />
        <WhyChooseUs />
        <Courses />
        <SuccessStories />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
