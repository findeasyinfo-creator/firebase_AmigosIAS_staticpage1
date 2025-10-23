'use client';
import {Button} from '@/components/ui/button';
import {Card, CardContent, CardFooter, CardHeader, CardTitle} from '@/components/ui/card';
import {courses} from '@/lib/data';
import type {Course} from '@/lib/data';
import {ArrowRight} from 'lucide-react';
import React from 'react';

function CourseCard({course}: {course: Course}) {
  return (
    <Card className="group flex h-full transform-gpu flex-col overflow-hidden border-transparent bg-background shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl dark:bg-muted/40">
      <CardHeader className="flex flex-row items-start gap-4 p-6">
        <div className="rounded-lg bg-primary/10 p-3 transition-colors duration-300 group-hover:bg-primary">
          <course.icon className="h-6 w-6 text-primary transition-colors duration-300 group-hover:text-primary-foreground" />
        </div>
        <div className="flex-1">
          <CardTitle className="font-headline text-lg">{course.title}</CardTitle>
          <p className="mt-2 text-sm text-muted-foreground">{course.description}</p>
        </div>
      </CardHeader>
      <CardContent className="flex-grow" />
      <CardFooter className="p-6 pt-0">
        <Button variant="outline" className="w-full">
          Learn More
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </CardFooter>
    </Card>
  );
}

export default function Courses() {
  return (
    <section id="courses" className="bg-muted/50 py-16 sm:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">Our Premier Programs</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Structured programs designed for every stage of your UPSC preparation, from foundation to final interview.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
          {courses.map((course) => (
            <CourseCard key={course.title} course={course} />
          ))}
        </div>
      </div>
    </section>
  );
}
