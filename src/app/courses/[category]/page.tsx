'use client';
import React, { useState, useMemo } from 'react';
import { useParams } from 'next/navigation';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { courses, courseCategories } from '@/lib/data';
import type { Course, CourseCategory } from '@/lib/data';
import Header from '@/components/common/header';
import Footer from '@/components/common/footer';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Image from 'next/image';
import { ArrowRight, BookOpenCheck, Calendar, Clock, Globe } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const CourseCard = ({ course }: { course: Course }) => {
  return (
    <Card className="group flex h-full transform-gpu flex-col overflow-hidden border-transparent bg-background shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl dark:bg-muted/40">
      <CardHeader className="flex flex-row items-start gap-4 p-6">
        <div className="rounded-lg bg-primary/10 p-3 transition-colors duration-300 group-hover:bg-primary">
          <course.icon className="h-6 w-6 text-primary transition-colors duration-300 group-hover:text-primary-foreground" />
        </div>
        <div className="flex-1">
          <CardTitle className="font-headline text-lg">{course.title}</CardTitle>
          <div className="mt-2 flex flex-wrap gap-2">
            {course.tags.map(tag => (
              <Badge key={tag} variant="secondary">{tag}</Badge>
            ))}
          </div>
        </div>
      </CardHeader>
      <CardContent className="flex-grow p-6 pt-0">
         <p className="text-sm text-muted-foreground">{course.detailedDescription}</p>
         <div className="mt-4 grid grid-cols-2 gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>Duration: {course.duration}</span>
            </div>
            <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>Mode: {course.mode}</span>
            </div>
         </div>
      </CardContent>
      <CardFooter className="p-6 pt-0">
        <Button variant="outline" className="w-full">
          Learn More
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </CardFooter>
    </Card>
  );
};


export default function CourseCategoryPage() {
  const params = useParams();
  const categorySlug = params.category as string;
  
  const [searchQuery, setSearchQuery] = useState('');
  const [modeFilter, setModeFilter] = useState('all');

  const category = courseCategories.find(c => c.slug === categorySlug);
  
  const filteredCourses = useMemo(() => {
    let categoryCourses = courses.filter(c => c.category === categorySlug);

    if (searchQuery) {
        categoryCourses = categoryCourses.filter(c => c.title.toLowerCase().includes(searchQuery.toLowerCase()) || c.detailedDescription.toLowerCase().includes(searchQuery.toLowerCase()));
    }

    if (modeFilter !== 'all') {
        categoryCourses = categoryCourses.filter(c => c.mode.toLowerCase() === modeFilter);
    }
    
    return categoryCourses;
  }, [categorySlug, searchQuery, modeFilter]);

  if (!category) {
    return (
      <div className="flex min-h-dvh flex-col bg-background">
        <Header />
        <main className="flex-1">
          <div className="container mx-auto py-16 text-center">
            <h1 className="text-2xl font-bold">Category not found</h1>
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
        <section className="bg-muted py-12">
            <div className="container mx-auto px-4 md:px-6">
                <h1 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">{category.title}</h1>
                <p className="mt-4 max-w-3xl text-lg text-muted-foreground">{category.description}</p>
            </div>
        </section>

        <section className="py-12 md:py-16">
            <div className="container mx-auto px-4 md:px-6">
                <div className="mb-8 grid grid-cols-1 gap-4 md:grid-cols-3">
                    <Input 
                        placeholder="Search courses..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="md:col-span-2"
                    />
                     <Select onValueChange={setModeFilter} defaultValue="all">
                        <SelectTrigger className="w-full">
                            <SelectValue placeholder="Filter by Mode" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="all">All Modes</SelectItem>
                            <SelectItem value="online">Online</SelectItem>
                            <SelectItem value="offline">Offline</SelectItem>
                        </SelectContent>
                    </Select>
                </div>

                {filteredCourses.length > 0 ? (
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                        {filteredCourses.map((course) => (
                            <CourseCard key={course.title} course={course} />
                        ))}
                    </div>
                ) : (
                    <div className="py-16 text-center text-muted-foreground">
                        <p>No courses found for this category. Try adjusting your filters.</p>
                    </div>
                )}
            </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
