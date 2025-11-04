'use client';

import {Button} from '@/components/ui/button';
import {PlaceHolderImages} from '@/lib/placeholder-images';
import Image from 'next/image';
import React from 'react';
import Autoplay from 'embla-carousel-autoplay';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';

export default function Hero() {
  const heroImages = PlaceHolderImages.filter(
    (img) => img.id.startsWith('hero-background')
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
          {heroImages.map((heroImage) => (
            <CarouselItem key={heroImage.id}>
              <div className="relative h-[80dvh] w-full">
                <Image
                  src={heroImage.imageUrl}
                  alt={heroImage.description}
                  fill
                  className="object-cover"
                  data-ai-hint={heroImage.imageHint}
                  priority={heroImages.indexOf(heroImage) === 0}
                />
                <div className="absolute inset-0 bg-black/50" />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      <div className="container absolute inset-0 z-10 mx-auto flex h-full flex-col items-start justify-center px-4 text-left md:px-6">
        <div className="max-w-3xl">
          <h1
            className="font-headline text-4xl font-extrabold tracking-tight text-white drop-shadow-lg md:text-5xl lg:text-7xl"
          >
            Hyderabad's most trusted and loved IAS Academy
          </h1>
          <p
            className="mt-6 text-lg text-white/90 md:text-xl"
          >
            Your Journey to Civil Services Starts Here.
          </p>
          <div
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <Button size="lg" asChild>
              <a href="#courses">Join Now</a>
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent text-white border-white hover:bg-white hover:text-black" asChild>
              <a href="#contact">Enquire Now</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
