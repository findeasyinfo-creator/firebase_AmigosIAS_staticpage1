'use client';

import React, { useMemo, useState } from 'react';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Button } from '@/components/ui/button';
import { Calendar as CalendarIcon, Search, Tag, Book, CalendarDays } from 'lucide-react';
import { Calendar } from '@/components/ui/calendar';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import { format, type DayPicker } from 'date-fns';
import { currentAffairsArticles, type CurrentAffairsArticle, type UPSCSubject } from '@/lib/data';
import Header from '@/components/common/header';
import Footer from '@/components/common/footer';

const subjects: UPSCSubject[] = ['GS Paper I', 'GS Paper II', 'GS Paper III', 'GS Paper IV', 'Essay', 'General'];

export default function CurrentAffairsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSubject, setSelectedSubject] = useState<UPSCSubject | 'all'>('all');
  const [date, setDate] = useState<Date | undefined>();

  const filteredArticles = useMemo(() => {
    return currentAffairsArticles.filter((article) => {
      const searchLower = searchQuery.toLowerCase();
      const matchesSearch =
        searchQuery === '' ||
        article.title.toLowerCase().includes(searchLower) ||
        article.summary.toLowerCase().includes(searchLower) ||
        article.tags.some((tag) => tag.toLowerCase().includes(searchLower));

      const matchesSubject = selectedSubject === 'all' || article.subject === selectedSubject;

      const matchesDate = !date || format(new Date(article.date), 'yyyy-MM-dd') === format(date, 'yyyy-MM-dd');

      return matchesSearch && matchesSubject && matchesDate;
    });
  }, [searchQuery, selectedSubject, date]);

  return (
    <div className="flex min-h-dvh flex-col bg-background">
      <Header />
      <main className="flex-1">
        <section className="bg-muted/50 py-12">
          <div className="container mx-auto px-4 md:px-6">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">Current Affairs</h1>
              <p className="mt-4 text-lg text-muted-foreground">
                Stay updated with the latest news and analysis relevant for UPSC CSE preparation.
              </p>
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="container mx-auto px-4 md:px-6">
            <div className="mb-8 grid grid-cols-1 gap-4 md:grid-cols-3">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search articles, keywords, or tags..."
                  className="w-full pl-10"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>

              <Select onValueChange={(value) => setSelectedSubject(value as UPSCSubject | 'all')} defaultValue="all">
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Filter by Subject" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Subjects</SelectItem>
                  {subjects.map((subject) => (
                    <SelectItem key={subject} value={subject}>
                      {subject}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant={'outline'}
                    className={cn('w-full justify-start text-left font-normal', !date && 'text-muted-foreground')}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {date ? format(date, 'PPP') : <span>Filter by date</span>}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar mode="single" selected={date} onSelect={setDate} initialFocus />
                </PopoverContent>
              </Popover>
            </div>

            {filteredArticles.length > 0 ? (
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {filteredArticles.map((article) => (
                  <Card key={article.id} className="flex h-full flex-col">
                    <CardHeader>
                      <CardTitle>{article.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <p className="text-muted-foreground">{article.summary}</p>
                    </CardContent>
                    <CardFooter className="flex flex-col items-start gap-4">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CalendarDays className="h-4 w-4" />
                        <span>{format(new Date(article.date), 'MMMM dd, yyyy')}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                         <Book className="h-4 w-4" />
                         <span>{article.subject}</span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        <Tag className="h-5 w-5 text-muted-foreground" />
                        {article.tags.map((tag) => (
                          <Badge key={tag} variant="secondary">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="py-16 text-center text-muted-foreground">
                <p>No articles found. Try adjusting your filters.</p>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}