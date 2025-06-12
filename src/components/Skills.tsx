
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Code, User, Book } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: <Code className="h-6 w-6" />,
      skills: [
        { name: 'React.js', level: 85 },
        { name: 'TypeScript', level: 80 },
        { name: 'Tailwind CSS', level: 90 },
        { name: 'JavaScript', level: 85 },
        { name: 'HTML/CSS', level: 95 }
      ]
    },
    {
      title: 'Backend Development',
      icon: <User className="h-6 w-6" />,
      skills: [
        { name: 'Node.js', level: 75 },
        { name: 'Express.js', level: 70 },
        { name: 'MongoDB', level: 65 },
        { name: 'PostgreSQL', level: 60 },
        { name: 'REST APIs', level: 80 }
      ]
    },
    {
      title: 'Tools & Technologies',
      icon: <Book className="h-6 w-6" />,
      skills: [
        { name: 'Git/GitHub', level: 85 },
        { name: 'VS Code', level: 95 },
        { name: 'Docker', level: 50 },
        { name: 'AWS', level: 45 },
        { name: 'Figma', level: 70 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold font-poppins mb-4">
            Skills & <span className="text-gradient">Expertise</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and proficiency levels across different technologies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card key={category.title} className="group hover:shadow-lg transition-all duration-300">
              <CardHeader className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-primary/10 rounded-full text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                    {category.icon}
                  </div>
                </div>
                <CardTitle className="text-xl font-poppins">{category.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {category.skills.map((skill) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-muted-foreground">{skill.level}%</span>
                      </div>
                      <Progress value={skill.level} className="h-2" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional skills as badges */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold font-poppins mb-8">Other Technologies</h3>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {[
              'Python', 'Java', 'C++', 'GraphQL', 'Redux', 'Next.js', 'Sass', 'Bootstrap',
              'Jest', 'Cypress', 'Webpack', 'Babel', 'ESLint', 'Prettier', 'Jira', 'Slack'
            ].map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 bg-muted text-muted-foreground rounded-full text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors duration-300 cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
