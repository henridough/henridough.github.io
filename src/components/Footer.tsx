
import { Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-100 border-t border-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="font-poppins font-bold text-xl mb-4 text-black">
              <span className="bg-gradient-to-r from-gray-600 to-black bg-clip-text text-transparent">Portfolio</span>
            </h3>
            <p className="text-gray-600 mb-4">
              Computer Science graduate passionate about creating innovative web applications and solving complex problems through code.
            </p>
            <div className="flex space-x-2">
              <Button variant="ghost" size="sm" asChild className="text-gray-600 hover:text-black hover:bg-gray-200">
                <a href="https://github.com/henrydo" target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4" />
                </a>
              </Button>
              <Button variant="ghost" size="sm" asChild className="text-gray-600 hover:text-black hover:bg-gray-200">
                <a href="https://linkedin.com/in/henrydo" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-4 w-4" />
                </a>
              </Button>
              <Button variant="ghost" size="sm" asChild className="text-gray-600 hover:text-black hover:bg-gray-200">
                <a href="mailto:henrygreen101@outlook.com">
                  <Mail className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold font-poppins mb-4 text-black">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-600 hover:text-black transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-600 hover:text-black transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#projects" className="text-gray-600 hover:text-black transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="#skills" className="text-gray-600 hover:text-black transition-colors">
                  Skills
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-600 hover:text-black transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold font-poppins mb-4 text-black">Get In Touch</h4>
            <div className="space-y-2">
              <p className="text-gray-600">
                📧 henrygreen101@outlook.com
              </p>
              <p className="text-gray-600">
                💼 Available for opportunities
              </p>
              <p className="text-gray-600">
                📍 Louisiana, USA
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-300 mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-gray-600 text-sm">
            © {currentYear} Henry Do. All rights reserved.
          </p>
          <p className="text-gray-600 text-sm mt-2 sm:mt-0">
            Built with React, TypeScript & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
