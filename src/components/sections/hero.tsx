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
      <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/70 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/70 to-transparent" />

      <div className="container relative z-10 mx-auto flex h-full flex-col items-start justify-center px-4 text-left md:px-6">
        <div className="max-w-3xl">
          <div className="relative">
            <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-orange-500/50 to-red-500/50 opacity-20 blur-3xl glow-shadow" />
            <h1
              className="font-headline text-4xl font-extrabold tracking-tight drop-shadow-lg md:text-5xl lg:text-7xl bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent animated-gradient fade-in-up"
              style={{animationDelay: '0.2s'}}
            >
              Hyderabad's most trusted and loved IAS Academy
            </h1>
          </div>
          <p
            className="mt-6 text-lg text-foreground/80 md:text-xl fade-in-up"
            style={{animationDelay: '0.4s'}}
          >
            Your Journey to Civil Services Starts Here.
          </p>
          <div
            className="mt-8 flex flex-wrap items-center gap-4 fade-in-up"
            style={{animationDelay: '0.6s'}}
          >
            <Button size="lg" asChild>
              <a href="#courses">Join Now</a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="#contact">Enquire Now</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
