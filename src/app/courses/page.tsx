'use client';
import React from 'react';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { courses, courseCategories } from '@/lib/data';
import type { CourseCategory, Course } from '@/lib/data';
import Header from '@/components/common/header';
import Footer from '@/components/common/footer';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

function CoursesHero() {
  const heroImage = PlaceHolderImages.find((img) => img.id === 'courses-hero');
  return (
    <section className="relative py-20 md:py-32">
      {heroImage && (
        <Image
          key={heroImage.id}
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
          <h1 className="font-headline text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
            Our Premier Programs
          </h1>
          <p className="mt-4 text-lg text-white/90">
            Find the perfect course to guide you on your journey to becoming a Civil Servant.
          </p>
        </div>
      </div>
    </section>
  );
}

const CategoryCard = ({ category }: { category: CourseCategory }) => {
    const categoryCourses = courses.filter(c => c.category === category.slug);
    return (
        <Card className="flex flex-col">
            <CardHeader>
                <CardTitle className="font-headline text-2xl">{category.title}</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
                <p className="text-muted-foreground">{category.description}</p>
                <ul className="mt-4 list-disc space-y-2 pl-5 text-muted-foreground">
                    {categoryCourses.slice(0, 2).map((course) => (
                        <li key={course.title}>{course.title}</li>
                    ))}
                    {categoryCourses.length > 2 && <li>And more...</li>}
                </ul>
            </CardContent>
            <CardContent>
                <Button asChild>
                    <Link href={`/courses/${category.slug}`}>
                        View Courses <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                </Button>
            </CardContent>
        </Card>
    );
};

export default function CoursesPage() {
  return (
    <div className="flex min-h-dvh flex-col bg-background">
      <Header />
      <main className="flex-1">
        <CoursesHero />
        <section className="py-16 sm:py-24">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {courseCategories.map((category) => (
                        <CategoryCard key={category.slug} category={category} />
                    ))}
                </div>
            </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
