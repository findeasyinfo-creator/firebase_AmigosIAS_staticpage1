const NAV_LINKS = [
  {name: 'Courses', href: '#courses'},
  {name: 'Why Amigos IAS', href: '#why-choose-us'},
  {name: 'Faculty', href: '#faculty'},
  {name: 'Testimonials', href: '#success-stories'},
  {name: 'Contact', href: '#contact'},
];

const Logo = () => {
  return (
    <a href="#" className="flex items-center gap-2">
      <span className="text-xl font-extrabold bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
        Amigos IAS
      </span>
    </a>
  );
};

export default function Footer() {
  return (
    <footer className="bg-muted py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-8 md:grid-cols-3">
          <div className="flex flex-col gap-2">
            <Logo />
            <p className="text-muted-foreground">Hyderabad's most trusted and loved IAS Academy.</p>
          </div>
          <div>
            <h3 className="mb-4 font-headline text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-muted-foreground hover:text-primary">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-4 font-headline text-lg font-semibold">Connect With Us</h3>
            <div className="space-y-2 text-muted-foreground">
              <p>AmigosIAS Academy, Ashok Nagar, Hyderabad</p>
              <p>Email: contact@amigosias.com</p>
              <p>Phone: +91 98765 43210</p>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t pt-6 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Amigos IAS. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
