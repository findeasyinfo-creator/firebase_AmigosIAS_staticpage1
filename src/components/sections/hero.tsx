'use client';

import {Button} from '@/components/ui/button';
import {Input} from '@/components/ui/input';
import {PlaceHolderImages} from '@/lib/placeholder-images';
import {Search} from 'lucide-react';
import Image from 'next/image';
import React from 'react';

export default function Hero() {
  const heroImage = PlaceHolderImages.find((img) => img.id === 'hero-background');
  return (
    <section className="relative h-[80dvh] w-full">
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
      <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/40 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/70 to-transparent" />

      <div className="container relative z-10 mx-auto flex h-full flex-col items-start justify-center px-4 text-left md:px-6">
        <div className="max-w-3xl">
          <h1 className="font-headline text-4xl font-bold tracking-tight drop-shadow-sm md:text-5xl lg:text-7xl bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
            Your Journey to Civil Services Starts Here
          </h1>
          <p className="mt-6 text-lg text-foreground/80 md:text-xl">
            Amigos IAS is Hyderabad's most trusted and loved IAS Academy, guiding aspirants to achieve their dreams with
            expert faculty and a proven methodology.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
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
