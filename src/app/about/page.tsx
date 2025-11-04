'use client';

import React from 'react';
import Header from '@/components/common/header';
import Footer from '@/components/common/footer';
import Faculty from '@/components/sections/faculty';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Eye, Goal, HeartHandshake, Award } from 'lucide-react';
import Image from 'next/image';

const values = [
  {
    icon: HeartHandshake,
    title: 'Student Centricity',
    description: 'We prioritize the needs and success of our students above all else, providing personalized attention and unwavering support.',
  },
  {
    icon: Award,
    title: 'Excellence',
    description: 'We uphold the highest standards of teaching, content, and mentorship to ensure an unparalleled learning experience.',
  },
  {
    icon: Goal,
    title: 'Integrity',
    description: 'We operate with transparency and honesty, fostering a culture of trust and ethical conduct among students and faculty.',
  },
];

function AboutHero() {
  const heroImage = PlaceHolderImages.find((img) => img.id === 'about-hero');
  return (
    <section className="relative py-20 md:py-32">
      {heroImage && (
         <Image
          src={heroImage.imageUrl}
          alt={heroImage.description}
          fill
          className="object-cover"
          data-ai-hint={heroImage.imageHint}
          priority
        />
      )}
      <div className="absolute inset-0 bg-black/60" />
      <div className="container relative mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="font-headline text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">About Amigos IAS</h1>
          <p className="mt-4 text-lg text-white/90">
            Learn about our journey, our values, and the team dedicated to guiding you towards success in the Civil Services Examination.
          </p>
        </div>
      </div>
    </section>
  );
}

function VisionMission() {
  return (
    <section className="py-16 sm:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-12 md:grid-cols-2 md:gap-16">
          <Card className="flex flex-col">
            <CardHeader className="flex flex-row items-center gap-4">
              <div className="rounded-full bg-primary/10 p-3">
                <Eye className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="font-headline text-2xl">Our Vision</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-muted-foreground">
                To be the most respected and effective institution for Civil Services Examination preparation, empowering aspirants from all backgrounds to achieve their full potential and serve the nation.
              </p>
            </CardContent>
          </Card>
          <Card className="flex flex-col">
            <CardHeader className="flex flex-row items-center gap-4">
              <div className="rounded-full bg-primary/10 p-3">
                <Goal className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="font-headline text-2xl">Our Mission</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-muted-foreground">
                To provide holistic, high-quality, and evidence-based guidance through personalized mentorship, a data-driven curriculum, and a nurturing ecosystem that fosters critical thinking and leadership.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

function OurValues() {
  return (
     <section id="our-values" className="bg-muted/50 py-16 sm:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">Our Core Values</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            The principles that guide every aspect of our academy.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
          {values.map((feature) => (
            <Card key={feature.title} className="text-center transition-all duration-300 hover:shadow-lg">
              <CardHeader className="items-center">
                <div className="rounded-full bg-primary/10 p-4">
                  <feature.icon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="font-headline pt-4 text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

function DirectorsMessage() {
  const directorImage = PlaceHolderImages.find((img) => img.id === 'faculty-1');
  return (
    <section className="py-16 sm:py-24">
       <div className="container mx-auto px-4 md:px-6">
        <div className="grid items-center gap-8 md:grid-cols-2 md:gap-16">
          <div className="space-y-4">
            <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">Message from the Director</h2>
            <p className="text-lg text-primary font-semibold">Dr. Anirudh Sharma</p>
            <blockquote className="border-l-4 border-primary pl-4 italic text-muted-foreground">
              "Our journey at Amigos IAS began with a simple yet powerful conviction: every aspirant deserves a fighting chance. We are not just a coaching center; we are mentors, guides, and partners in your arduous journey. Our commitment is to provide an evidence-based strategy, personalized attention, and an environment where your potential can blossom into success. Join us, and let's write your success story together."
            </blockquote>
          </div>
          <div className="relative flex justify-center">
            {directorImage && (
              <Avatar className="h-64 w-64 border-4 border-primary shadow-lg">
                <AvatarImage src={directorImage.imageUrl} alt="Director's Message" data-ai-hint={directorImage.imageHint} />
                <AvatarFallback>AS</AvatarFallback>
              </Avatar>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}


export default function AboutPage() {
  return (
    <div className="flex min-h-dvh flex-col bg-background">
      <Header />
      <main className="flex-1">
        <AboutHero />
        <VisionMission />
        <DirectorsMessage />
        <OurValues />
        <Faculty />
      </main>
      <Footer />
    </div>
  );
}
