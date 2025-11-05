'use client';
import { useParams } from 'next/navigation';
import { courses, courseCategories } from '@/lib/data';
import type { Course } from '@/lib/data';
import Header from '@/components/common/header';
import Footer from '@/components/common/footer';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Calendar, Clock, Tag, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function CourseDetailPage() {
  const params = useParams();
  const courseSlug = params.slug as string;

  const course = courses.find((c) => c.slug === courseSlug);
  const category = course ? courseCategories.find(cat => cat.slug === course.category) : undefined;

  if (!course || !category) {
    return (
      <div className="flex min-h-dvh flex-col bg-background">
        <Header />
        <main className="flex flex-1 items-center justify-center text-center">
          <div>
            <h1 className="text-4xl font-bold">Course Not Found</h1>
            <p className="mt-4 text-muted-foreground">
              The course you are looking for does not exist.
            </p>
            <Button asChild className="mt-8">
              <Link href="/courses">Explore Courses</Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="flex min-h-dvh flex-col bg-background">
      <Header />
      <main className="flex-1">
        <section className="bg-muted py-8">
          <div className="container mx-auto px-4 md:px-6">
            <Button variant="ghost" asChild className="mb-4">
               <Link href={`/courses/${category.slug}`}>
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back to {category.title}
                </Link>
            </Button>
            <h1 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">{course.title}</h1>
            <div className="mt-4 flex flex-wrap items-center gap-4 text-muted-foreground">
                <div className="flex items-center gap-2">
                    <Calendar className="h-5 w-5" />
                    <span>Duration: {course.duration}</span>
                </div>
                <div className="flex items-center gap-2">
                    <Clock className="h-5 w-5" />
                    <span>Mode: {course.mode}</span>
                </div>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
                {course.tags.map(tag => (
                    <Badge key={tag} variant="secondary">{tag}</Badge>
                ))}
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16">
            <div className="container mx-auto grid grid-cols-1 gap-8 px-4 md:grid-cols-3 md:px-6">
                <div className="md:col-span-2">
                    <h2 className="font-headline text-2xl font-semibold">About this course</h2>
                    <div className="prose prose-lg mt-4 max-w-none text-muted-foreground">
                       <p>{course.detailedDescription}</p>
                    </div>
                </div>
                <div className="md:col-span-1">
                    <Card>
                        <CardContent className="p-6">
                            <h3 className="font-headline text-xl font-semibold">Ready to start?</h3>
                            <p className="mt-2 text-muted-foreground">Take the next step in your UPSC journey.</p>
                             <Button className="mt-6 w-full" size="lg">Register for Demo</Button>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
