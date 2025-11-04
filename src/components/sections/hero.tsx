'use client';

import {Button} from '@/components/ui/button';
import {PlaceHolderImages} from '@/lib/placeholder-images';
import Image from 'next/image';
import React from 'react';
import Autoplay from 'embla-carousel-autoplay';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';

const slideContent = [
  {
    id: 'hero-background',
    headline: "Hyderabad's most trusted and loved IAS Academy",
    subheadline: 'Your Journey to Civil Services Starts Here.',
  },
  {
    id: 'hero-background-2',
    headline: 'Expert Guidance for Comprehensive Preparation',
    subheadline: 'From Prelims to Interview, we cover it all.',
  },
  {
    id: 'hero-background-3',
    headline: 'Achieve Your Dream of Becoming a Civil Servant',
    subheadline: 'Join thousands of successful alumni who started with us.',
  }
]

export default function Hero() {
  const heroImages = PlaceHolderImages.filter(
    (img) => slideContent.some(sc => sc.id === img.id)
  );

  const plugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true, stopOnMouseEnter: true })
  );

  return (
    <section className="relative h-[80dvh] w-full overflow-hidden">
      <Carousel
        plugins={[plugin.current]}
        className="h-full w-full"
        opts={{
          loop: true,
        }}
      >
        <CarouselContent>
          {slideContent.map((content, index) => {
            const heroImage = heroImages.find(img => img.id === content.id);
            if (!heroImage) return null;

            return (
              <CarouselItem key={heroImage.id}>
                <div className="relative h-[80dvh] w-full">
                  <Image
                    src={heroImage.imageUrl}
                    alt={heroImage.description}
                    fill
                    className="object-cover"
                    data-ai-hint={heroImage.imageHint}
                    priority={index === 0}
                  />
                  <div className="absolute inset-0 bg-black/50" />
                  <div className="container absolute inset-0 z-10 mx-auto flex h-full flex-col justify-center px-4 text-left md:px-6">
                    <div className="max-w-3xl">
                      <h1
                        className="font-headline text-4xl font-extrabold tracking-tight text-white drop-shadow-lg md:text-5xl lg:text-7xl"
                        style={{textShadow: '2px 2px 8px rgba(0,0,0,0.7)'}}
                      >
                        {content.headline}
                      </h1>
                      <p
                        className="mt-6 text-lg text-white/90 md:text-xl"
                        style={{textShadow: '1px 1px 4px rgba(0,0,0,0.7)'}}
                      >
                        {content.subheadline}
                      </p>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            )
          })}
        </CarouselContent>
      </Carousel>
      
      <div className="container absolute bottom-10 left-1/2 z-20 mx-auto w-full -translate-x-1/2 px-4 md:px-6">
        <div className="flex flex-wrap items-center gap-4">
            <Button size="lg" asChild>
              <a href="#courses">Join Now</a>
            </Button>
            <Button size="lg" variant="outline" className="border-accent bg-transparent text-white hover:bg-accent hover:text-accent-foreground" asChild>
              <a href="#contact">Enquire Now</a>
            </Button>
        </div>
      </div>

    </section>
  );
}
