import {Card, CardContent} from '@/components/ui/card';
import {Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious} from '@/components/ui/carousel';
import {successStories} from '@/lib/data';
import type {SuccessStory} from '@/lib/data';
import {PlaceHolderImages} from '@/lib/placeholder-images';
import {Award} from 'lucide-react';
import Image from 'next/image';

function SuccessStoryCard({story}: {story: SuccessStory}) {
  const image = PlaceHolderImages.find((img) => img.id === story.imageId);

  return (
    <Card className="h-full overflow-hidden">
      <div className="relative h-56 w-full">
        {image && (
          <Image
            src={image.imageUrl}
            alt={story.name}
            fill
            className="object-cover"
            data-ai-hint={image.imageHint}
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-4 left-4 text-white">
          <h3 className="font-headline text-2xl font-bold">{story.name}</h3>
          <p className="flex items-center gap-2 text-sm">
            <Award className="h-4 w-4 text-yellow-300" />
            {story.rank}
          </p>
        </div>
      </div>
      <CardContent className="p-6">
        <blockquote className="border-l-4 border-primary pl-4 italic text-muted-foreground">
          {story.story}
        </blockquote>
      </CardContent>
    </Card>
  );
}

export default function SuccessStories() {
  return (
    <section id="success-stories" className="bg-muted py-16 sm:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">From Aspirants to Achievers</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Hear from our students who have successfully navigated the UPSC journey with AmigosIAS.
          </p>
        </div>
        <div className="mt-12">
          <Carousel
            opts={{
              align: 'start',
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {successStories.map((story) => (
                <CarouselItem key={story.name} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <SuccessStoryCard story={story} />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="ml-14" />
            <CarouselNext className="mr-14" />
          </Carousel>
        </div>
      </div>
    </section>
  );
}
