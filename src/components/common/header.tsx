'use client';

import {Button} from '@/components/ui/button';
import {Sheet, SheetContent, SheetTrigger} from '@/components/ui/sheet';
import {cn} from '@/lib/utils';
import {Menu} from 'lucide-react';
import React from 'react';

const NAV_LINKS = [
  {name: 'Courses', href: '#courses'},
  {name: 'About Us', href: '/about'},
  {name: 'Success Stories', href: '#success-stories'},
  {name: 'Current Affairs', href: '/current-affairs'},
];

const Logo = () => {
  return (
    <a href="/" className="flex items-center gap-2">
      <span className="text-2xl font-extrabold bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
        Amigos IAS
      </span>
    </a>
  );
};

const NavLink = ({href, children}: {href: string; children: React.ReactNode}) => (
  <a
    href={href}
    className="rounded-md px-3 py-2 text-sm font-medium transition-colors text-foreground/70 hover:text-foreground"
  >
    {children}
  </a>
);

export default function Header() {
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isHomePage = typeof window !== 'undefined' && window.location.pathname === '/';

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full transition-all duration-300',
        isScrolled ? 'border-b border-border/60 bg-background/80 backdrop-blur-sm' : 'bg-transparent'
      )}
    >
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
        <Logo />

        <nav className="hidden items-center gap-2 md:flex">
          {NAV_LINKS.map((link) => {
             if (!isHomePage && (link.href.startsWith('#'))) {
                return (
                    <NavLink key={link.href} href={`/${link.href}`}>
                        {link.name}
                    </NavLink>
                );
             }
             return (
                <NavLink key={link.href} href={link.href}>
                    {link.name}
                </NavLink>
             );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <Button asChild className="hidden md:inline-flex">
            <a href={isHomePage ? '#contact' : '/#contact'}>Contact Us</a>
          </Button>
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open navigation menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <div className="flex flex-col gap-6 p-6">
                  <Logo />
                  <nav className="flex flex-col gap-2">
                    {NAV_LINKS.map((link) => {
                       if (!isHomePage && (link.href.startsWith('#'))) {
                        return (
                            <a key={link.href} href={`/${link.href}`} className="rounded-lg p-3 text-lg font-medium hover:bg-muted">
                                {link.name}
                            </a>
                        );
                       }
                       return (
                        <a key={link.href} href={link.href} className="rounded-lg p-3 text-lg font-medium hover:bg-muted">
                            {link.name}
                        </a>
                       );
                    })}
                  </nav>
                  <Button asChild>
                    <a href={isHomePage ? '#contact' : '/#contact'}>Contact Us</a>
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}