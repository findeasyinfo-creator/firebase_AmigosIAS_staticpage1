'use client';

import {Button} from '@/components/ui/button';
import {Carousel, CarouselContent, CarouselItem} from '@/components/ui/carousel';
import {Input} from '@/components/ui/input';
import {PlaceHolderImages} from '@/lib/placeholder-images';
import {Search} from 'lucide-react';
import Image from 'next/image';
import Autoplay from 'embla-carousel-autoplay';
import React from 'react';

const slides = [
  {
    id: 'slide-1',
    title: 'Your Journey to Civil Services Starts Here',
    description:
      "AmigosIAS is Hyderabad's most trusted and loved IAS Academy, guiding aspirants to achieve their dreams with expert faculty and a proven methodology.",
    imageId: 'hero-background',
    cta1: {text: 'Join Now', href: '#courses'},
    cta2: {text: 'Enquire Now', href: '#contact'},
  },
  {
    id: 'slide-2',
    title: 'Unlock Your Potential with Expert Guidance',
    description:
      'Our personalized mentorship and evidence-based strategies are designed to help you succeed at every stage of the UPSC exam.',
    imageId: 'hero-background-2',
    cta1: {text: 'Our Courses', href: '#courses'},
    cta2: {text: 'Meet the Faculty', href: '#faculty'},
  },
  {
    id: 'slide-3',
    title: 'Achieve Your Dream of Becoming an IAS Officer',
    description: 'Join hundreds of successful aspirants who trusted AmigosIAS. Your success story starts with us.',
    imageId: 'hero-background-3',
    cta1: {text: 'Success Stories', href: '#success-stories'},
    cta2: {text: 'Contact Us', href: '#contact'},
  },
];

function HeroSlide({
  slide,
  searchQuery,
  setSearchQuery,
}: {
  slide: (typeof slides)[0];
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}) {
  const heroImage = PlaceHolderImages.find((img) => img.id === slide.imageId);
  return (
    <CarouselItem className="relative h-[80dvh] w-full">
      {heroImage && (
        <Image
          src={heroImage.imageUrl}
          alt={heroImage.description}
          fill
          className="object-cover"
          data-ai-hint={heroImage.imageHint}
          priority={slides.indexOf(slide) === 0}
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/40 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/70 to-transparent" />

      <div className="container relative z-10 mx-auto flex h-full flex-col items-start justify-center px-4 text-left md:px-6">
        <div className="max-w-3xl">
          <h1 className="font-headline text-4xl font-bold tracking-tight text-foreground drop-shadow-sm md:text-5xl lg:text-7xl">
            {slide.title}
          </h1>
          <p className="mt-6 text-lg text-foreground/80 md:text-xl">{slide.description}</p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Button size="lg" asChild>
              <a href={slide.cta1.href}>{slide.cta1.text}</a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href={slide.cta2.href}>{slide.cta2.text}</a>
            </Button>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search courses..."
                className="h-12 w-full rounded-md bg-background/80 pl-10 pr-4 text-base md:w-64"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </div>
      </div>
    </CarouselItem>
  );
}

export default function Hero({
  searchQuery,
  setSearchQuery,
}: {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}) {
  const plugin = React.useRef(Autoplay({delay: 5000, stopOnInteraction: true}));

  return (
    <section className="w-full overflow-hidden">
      <Carousel
        opts={{
          align: 'start',
          loop: true,
        }}
        plugins={[plugin.current]}
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
        className="w-full"
      >
        <CarouselContent>
          {slides.map((slide) => (
            <HeroSlide key={slide.id} slide={slide} searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
}
