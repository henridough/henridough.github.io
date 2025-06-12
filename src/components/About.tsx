
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const About = () => {
  const timeline = [
    {
      year: '2024',
      title: 'Bachelor of Science, Computer Science',
      organization: 'Louisiana State University',
      description: 'Graduated with a degree in Computer Science, focusing on data structures, software development, and cybersecurity.',
      type: 'education'
    },
    {
      year: '2023',
      title: 'Applications Developer Intern',
      organization: 'Louisiana State Employees\' Retirement System',
      description: 'Developed and maintained .NET applications using C#, ASP.NET, and SQL Server for 100,000+ members. Participated in Agile/Scrum methodologies.',
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
                I'm Henry Do, a Computer Science graduate from Louisiana State University with hands-on experience 
                as an Applications Developer. My journey in tech has led me through developing enterprise-level 
                .NET applications, building mobile apps with Flutter, and creating full-stack web solutions.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                During my internship at Louisiana State Employees' Retirement System, I worked on mission-critical 
                applications serving over 100,000 members, collaborating in Agile environments and contributing to 
                sprint planning and CI/CD automation. I'm passionate about writing clean, maintainable code and 
                building solutions that make a real impact.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                I believe in continuous learning and enjoy exploring new technologies, from mobile development 
                to cloud computing and cybersecurity. When I'm not coding, you'll find me working on personal 
                projects or contributing to open-source initiatives.
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
                  <div className="relative z-10 w-8 h-8 rounded-full flex items-center justify-center bg-primary text-primary-foreground">
                    <div className="w-2 h-2 bg-current rounded-full"></div>
                  </div>
                  
                  {/* Timeline content */}
                  <Card className="flex-1 hover:shadow-md transition-shadow duration-300">
                    <CardContent className="p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-sm font-medium text-muted-foreground">{item.year}</span>
                        <span className="px-2 py-1 rounded-full text-xs font-medium bg-muted text-muted-foreground">
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
