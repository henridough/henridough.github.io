
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  const scrollToProjects = () => {
    const element = document.querySelector('#projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const downloadResume = () => {
    // This would link to your actual resume file
    const link = document.createElement('a');
    link.href = '/henry-do-resume.pdf';
    link.download = 'Henry_Do_Resume.pdf';
    link.click();
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-gray-100 to-gray-50 opacity-50"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-10 -left-10 w-20 h-20 bg-gray-400 rounded-full opacity-10 animate-float"></div>
        <div className="absolute top-1/4 right-10 w-16 h-16 bg-gray-500 rounded-full opacity-10 animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/4 left-1/4 w-12 h-12 bg-gray-600 rounded-full opacity-10 animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Profile Image */}
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <img 
                src="/lovable-uploads/6aff207e-956d-42d7-a7ee-bd546aaf609e.png" 
                alt="Henry Do" 
                className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover object-top border-4 border-black shadow-lg"
                style={{ objectPosition: '50% 20%' }}
              />
            </div>
          </div>

          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold font-poppins mb-6">
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-gray-600 to-black bg-clip-text text-transparent">Henry Do</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 animate-slide-in-left">
              Computer Science Graduate & Applications Developer
            </p>
            <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: '0.3s' }}>
              Computer Science graduate from Louisiana State University with hands-on experience developing 
              enterprise-level .NET applications for 100,000+ users and building full-stack solutions.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <Button 
              onClick={scrollToProjects}
              size="lg" 
              className="px-8 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 bg-black text-white hover:bg-gray-800"
            >
              View My Work
            </Button>
            <Button 
              onClick={downloadResume}
              variant="outline" 
              size="lg"
              className="px-8 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 border-black text-black hover:bg-black hover:text-white"
            >
              Download Resume
            </Button>
          </div>

          <div className="mt-16 animate-bounce">
            <ArrowDown className="h-6 w-6 mx-auto text-gray-600" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
