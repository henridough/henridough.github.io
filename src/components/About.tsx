
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const About = () => {
  const timeline = [
    {
      year: '2024',
      title: 'Application Developer',
      organization: 'Tech Company',
      description: 'Started my professional journey as an Application Developer, working on web applications using React and Node.js.',
      type: 'work'
    },
    {
      year: '2023',
      title: 'Bachelor of Computer Science',
      organization: 'University Name',
      description: 'Graduated with a degree in Computer Science, focusing on software development and data structures.',
      type: 'education'
    },
    {
      year: '2022',
      title: 'Software Development Intern',
      organization: 'Startup Company',
      description: 'Gained hands-on experience in full-stack development and agile methodologies.',
      type: 'work'
    }
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold font-poppins mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get to know me better - my journey, passion, and what drives me as a developer.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* About content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold font-poppins">Hi there! 👋</h3>
              <p className="text-muted-foreground leading-relaxed">
                I'm a passionate Computer Science graduate with 6 months of professional experience as an Application Developer. 
                My journey in tech started during college, where I discovered my love for creating digital solutions that make a difference.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                I specialize in building modern web applications using React, TypeScript, and Node.js. I'm particularly interested 
                in creating user-friendly interfaces and writing clean, maintainable code. When I'm not coding, you'll find me 
                exploring new technologies, contributing to open-source projects, or reading about the latest trends in software development.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                I believe in continuous learning and am always excited to take on new challenges that push me to grow as a developer.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button asChild>
                <a href="#contact">Get In Touch</a>
              </Button>
              <Button variant="outline" asChild>
                <a href="#projects">View My Work</a>
              </Button>
            </div>
          </div>

          {/* Timeline */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold font-poppins mb-8">My Journey</h3>
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-border"></div>
              
              {timeline.map((item, index) => (
                <div key={index} className="relative flex items-start space-x-4 pb-8">
                  {/* Timeline dot */}
                  <div className={`relative z-10 w-8 h-8 rounded-full flex items-center justify-center ${
                    item.type === 'work' 
                      ? 'bg-primary text-primary-foreground' 
                      : 'bg-portfolio-purple-500 text-white'
                  }`}>
                    <div className="w-2 h-2 bg-current rounded-full"></div>
                  </div>
                  
                  {/* Timeline content */}
                  <Card className="flex-1 hover:shadow-md transition-shadow duration-300">
                    <CardContent className="p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-sm font-medium text-muted-foreground">{item.year}</span>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          item.type === 'work' 
                            ? 'bg-primary/10 text-primary' 
                            : 'bg-portfolio-purple-100 text-portfolio-purple-600'
                        }`}>
                          {item.type === 'work' ? 'Work' : 'Education'}
                        </span>
                      </div>
                      <h4 className="font-semibold font-poppins mb-1">{item.title}</h4>
                      <p className="text-sm text-muted-foreground mb-2">{item.organization}</p>
                      <p className="text-sm leading-relaxed">{item.description}</p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
