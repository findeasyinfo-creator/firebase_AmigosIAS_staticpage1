import {Card, CardContent, CardHeader, CardTitle} from '@/components/ui/card';
import {courses} from '@/lib/data';
import type {Course} from '@/lib/data';

function CourseCard({course}: {course: Course}) {
  return (
    <Card className="flex h-full transform-gpu flex-col overflow-hidden bg-card/80 backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
      <CardHeader className="flex flex-row items-center gap-4">
        <div className="rounded-lg bg-primary/10 p-3">
          <course.icon className="h-8 w-8 text-primary" />
        </div>
        <CardTitle className="font-headline text-xl">{course.title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-muted-foreground">{course.description}</p>
      </CardContent>
    </Card>
  );
}

export default function Courses() {
  return (
    <section id="courses" className="bg-muted py-16 sm:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">Our Premier Programs</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Structured programs designed for every stage of your UPSC preparation, from foundation to final interview.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {courses.map((course) => (
            <CourseCard key={course.title} course={course} />
          ))}
        </div>
      </div>
    </section>
  );
}
