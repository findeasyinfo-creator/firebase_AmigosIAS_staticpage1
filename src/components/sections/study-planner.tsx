'use client';

import {Button} from '@/components/ui/button';
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from '@/components/ui/card';
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from '@/components/ui/form';
import {Input} from '@/components/ui/input';
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from '@/components/ui/select';
import {useToast} from '@/hooks/use-toast';
import {zodResolver} from '@hookform/resolvers/zod';
import {BrainCircuit, CalendarDays, CheckCircle, Clock, Loader2} from 'lucide-react';
import React from 'react';
import {useForm} from 'react-hook-form';
import * as z from 'zod';

const formSchema = z.object({
  hours: z.coerce
    .number()
    .min(1, 'Please enter at least 1 hour.')
    .max(16, 'Please enter no more than 16 hours.'),
  goal: z.string().min(1, 'Please select a goal.'),
  preference: z.string().min(1, 'Please select a preference.'),
});

type StudyPlan = {
  day: string;
  topic: string;
  subject: string;
  duration: string;
};

const MOCK_PLAN: StudyPlan[] = [
  {day: 'Monday', topic: 'Ancient History - Indus Valley', subject: 'History', duration: '3 hours'},
  {day: 'Tuesday', topic: 'Indian Polity - Preamble & Union', subject: 'Polity', duration: '3 hours'},
  {day: 'Wednesday', topic: 'Physical Geography - Geomorphology', subject: 'Geography', duration: '3 hours'},
  {day: 'Thursday', topic: 'Current Affairs - Weekly Review', subject: 'Current Affairs', duration: '2 hours'},
  {day: 'Friday', topic: 'Modern History - 1857 Revolt', subject: 'History', duration: '3 hours'},
  {day: 'Saturday', topic: 'CSAT - Practice Session', subject: 'CSAT', duration: '2 hours'},
  {day: 'Sunday', topic: 'Revision & Mock Test', subject: 'Revision', duration: '4 hours'},
];

export default function StudyPlanner() {
  const {toast} = useToast();
  const [isLoading, setIsLoading] = React.useState(false);
  const [plan, setPlan] = React.useState<StudyPlan[] | null>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      hours: 8,
      goal: 'prelims-2025',
      preference: 'balanced',
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    setPlan(null);
    console.log(values);

    setTimeout(() => {
      setPlan(MOCK_PLAN);
      setIsLoading(false);
      toast({
        title: 'Plan Generated!',
        description: 'Your personalized study plan is ready.',
        action: <CheckCircle className="text-green-500" />,
      });
    }, 2000);
  }

  return (
    <section id="study-planner" className="py-16 sm:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <BrainCircuit className="mx-auto h-12 w-12 text-primary" />
          <h2 className="mt-4 font-headline text-3xl font-bold tracking-tight sm:text-4xl">
            AI-Powered Study Planner
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Let our intelligent tool craft a personalized study schedule tailored to your goals and available time.
            Achieve more with a smarter plan.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-start">
          <Card>
            <CardHeader>
              <CardTitle className="font-headline">Create Your Plan</CardTitle>
              <CardDescription>Tell us your goals, and our AI will do the rest.</CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="hours"
                    render={({field}) => (
                      <FormItem>
                        <FormLabel>Daily Study Hours</FormLabel>
                        <FormControl>
                          <Input type="number" placeholder="e.g., 8" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="goal"
                    render={({field}) => (
                      <FormItem>
                        <FormLabel>Primary Goal</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select your main exam target" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="prelims-2025">Prelims 2025</SelectItem>
                            <SelectItem value="mains-2025">Mains 2025</SelectItem>
                            <SelectItem value="integrated-2026">Integrated 2026</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="preference"
                    render={({field}) => (
                      <FormItem>
                        <FormLabel>Study Preference</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select your study style" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="balanced">Balanced (All Subjects)</SelectItem>
                            <SelectItem value="gs-heavy">GS Heavy</SelectItem>
                            <SelectItem value="optional-focused">Optional Focused</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit" className="w-full" disabled={isLoading}>
                    {isLoading ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Generating Plan...
                      </>
                    ) : (
                      'Generate My Plan'
                    )}
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>

          <Card className="min-h-[30rem] bg-muted">
            <CardHeader>
              <CardTitle className="font-headline flex items-center gap-2">
                <CalendarDays className="h-5 w-5" /> Your Weekly Plan
              </CardTitle>
              <CardDescription>Here is your AI-generated schedule for the week.</CardDescription>
            </CardHeader>
            <CardContent>
              {isLoading && (
                <div className="flex flex-col items-center justify-center gap-4 pt-16 text-muted-foreground">
                  <Loader2 className="h-12 w-12 animate-spin text-primary" />
                  <p>Our AI is crafting your perfect plan...</p>
                </div>
              )}
              {!isLoading && !plan && (
                <div className="flex flex-col items-center justify-center gap-4 pt-16 text-center text-muted-foreground">
                  <BrainCircuit className="h-12 w-12" />
                  <p>Your personalized study plan will appear here once generated.</p>
                </div>
              )}
              {plan && (
                <ul className="space-y-4">
                  {plan.map((item) => (
                    <li key={item.day} className="flex items-start gap-4">
                      <div className="mt-1 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
                        {item.day.charAt(0)}
                      </div>
                      <div className="flex-1">
                        <p className="font-semibold">{item.topic}</p>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <span>{item.subject}</span>
                          <span className="flex items-center gap-1">
                            <Clock className="h-3 w-3" /> {item.duration}
                          </span>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
