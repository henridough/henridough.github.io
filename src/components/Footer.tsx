
import { Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="font-poppins font-bold text-xl mb-4 text-white">
              <span className="bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">Portfolio</span>
            </h3>
            <p className="text-gray-300 mb-4">
              Computer Science graduate passionate about creating innovative web applications and solving complex problems through code.
            </p>
            <div className="flex space-x-2">
              <Button variant="ghost" size="sm" asChild className="text-gray-300 hover:text-green-500 hover:bg-gray-800">
                <a href="https://github.com/henrydo" target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4" />
                </a>
              </Button>
              <Button variant="ghost" size="sm" asChild className="text-gray-300 hover:text-green-500 hover:bg-gray-800">
                <a href="https://linkedin.com/in/henrydo" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-4 w-4" />
                </a>
              </Button>
              <Button variant="ghost" size="sm" asChild className="text-gray-300 hover:text-green-500 hover:bg-gray-800">
                <a href="mailto:henrygreen101@outlook.com">
                  <Mail className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold font-poppins mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-300 hover:text-green-500 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-300 hover:text-green-500 transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#projects" className="text-gray-300 hover:text-green-500 transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="#skills" className="text-gray-300 hover:text-green-500 transition-colors">
                  Skills
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-green-500 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold font-poppins mb-4 text-white">Get In Touch</h4>
            <div className="space-y-2">
              <p className="text-gray-300">
                📧 henrygreen101@outlook.com
              </p>
              <p className="text-gray-300">
                💼 Available for opportunities
              </p>
              <p className="text-gray-300">
                📍 Louisiana, USA
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-gray-300 text-sm">
            © {currentYear} Henry Do. All rights reserved.
          </p>
          <p className="text-gray-300 text-sm mt-2 sm:mt-0">
            Built with React, TypeScript & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
