
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border z-50 border-red-500">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="font-poppins font-bold text-xl text-gradient">
            Portfolio
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="text-muted-foreground hover:text-foreground transition-colors duration-300"
              >
                {item.name}
              </button>
            ))}
          </div>

          {/* Social Links */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="sm" asChild>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4" />
              </a>
            </Button>
            <Button variant="ghost" size="sm" asChild>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-4 w-4" />
              </a>
            </Button>
            <Button variant="ghost" size="sm" asChild>
              <a href="mailto:your.email@example.com">
                <Mail className="h-4 w-4" />
              </a>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-background border-t border-border">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="block px-3 py-2 text-base font-medium text-muted-foreground hover:text-foreground transition-colors duration-300"
                >
                  {item.name}
                </button>
              ))}
              <div className="flex space-x-4 px-3 py-2">
                <Button variant="ghost" size="sm" asChild>
                  <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4" />
                  </a>
                </Button>
                <Button variant="ghost" size="sm" asChild>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="h-4 w-4" />
                  </a>
                </Button>
                <Button variant="ghost" size="sm" asChild>
                  <a href="mailto:your.email@example.com">
                    <Mail className="h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
