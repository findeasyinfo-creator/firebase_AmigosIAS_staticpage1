import {Avatar, AvatarFallback, AvatarImage} from '@/components/ui/avatar';
import {Card, CardContent, CardHeader} from '@/components/ui/card';
import {faculty} from '@/lib/data';
import type {Faculty} from '@/lib/data';
import {PlaceHolderImages} from '@/lib/placeholder-images';

function FacultyCard({member}: {member: Faculty}) {
  const image = PlaceHolderImages.find((img) => img.id === member.imageId);

  return (
    <Card className="h-full overflow-hidden text-center transition-all duration-300 hover:shadow-xl">
      <CardHeader className="items-center bg-muted/50 p-6">
        <Avatar className="h-24 w-24 border-4 border-background shadow-lg">
          {image && <AvatarImage src={image.imageUrl} alt={member.name} data-ai-hint={image.imageHint} />}
          <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
        </Avatar>
      </CardHeader>
      <CardContent className="p-6">
        <h3 className="font-headline text-xl font-semibold">{member.name}</h3>
        <p className="mt-1 text-sm text-primary">{member.qualification}</p>
        <p className="mt-4 text-muted-foreground">{member.experience}</p>
      </CardContent>
    </Card>
  );
}

export default function Faculty() {
  return (
    <section id="faculty" className="py-16 sm:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">Meet Our Mentors</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Learn from the best. Our faculty comprises experienced educators, subject matter experts, and former
            civil servants.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {faculty.map((member) => (
            <FacultyCard key={member.name} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
}
