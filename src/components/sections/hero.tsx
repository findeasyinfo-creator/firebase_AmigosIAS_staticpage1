'use client';

import {Button} from '@/components/ui/button';
import {PlaceHolderImages} from '@/lib/placeholder-images';
import Image from 'next/image';
import React from 'react';

export default function Hero() {
  const heroImage = PlaceHolderImages.find((img) => img.id === 'hero-background');

  return (
    <section className="relative h-[80dvh] w-full overflow-hidden">
      {heroImage && (
        <Image
          src={heroImage.imageUrl}
          alt={heroImage.description}
          fill
          className="object-cover"
          data-ai-hint={heroImage.imageHint}
          priority
        />
      )}
      <div className="absolute inset-0 bg-black/50" />

      <div className="container relative z-10 mx-auto flex h-full flex-col items-start justify-center px-4 text-left md:px-6">
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
