import {Card, CardContent, CardHeader, CardTitle} from '@/components/ui/card';
import {Users, Target, HeartHandshake} from 'lucide-react';

const features = [
  {
    icon: Users,
    title: 'Personalized Mentorship',
    description: 'Receive one-on-one guidance from our expert faculty and retired civil servants to craft a study plan that works for you.',
  },
  {
    icon: Target,
    title: 'Evidence-Based Strategy',
    description: 'Our curriculum is built on a foundation of data-driven insights and proven strategies that have helped countless aspirants succeed.',
  },
  {
    icon: HeartHandshake,
    title: 'Quality Student Support',
    description: 'We are committed to your success. Our dedicated support team is always available to answer your questions and provide encouragement.',
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="py-16 sm:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">Why Choose Amigos IAS?</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            We provide a holistic approach to UPSC preparation, focusing on what truly matters for your success.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
          {features.map((feature) => (
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
  );
}
