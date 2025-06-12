
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Code, Database, Settings } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: <Code className="h-6 w-6" />,
      skills: [
        { name: 'Java', level: 90 },
        { name: 'JavaScript', level: 85 },
        { name: 'C#', level: 85 },
        { name: 'Python', level: 80 },
        { name: 'C/C++', level: 75 }
      ]
    },
    {
      title: 'Frameworks & Technologies',
      icon: <Settings className="h-6 w-6" />,
      skills: [
        { name: 'React', level: 85 },
        { name: 'ASP.NET/.NET Core', level: 90 },
        { name: 'Flutter', level: 80 },
        { name: 'Node.js', level: 75 },
        { name: 'Entity Framework', level: 85 }
      ]
    },
    {
      title: 'Databases & Tools',
      icon: <Database className="h-6 w-6" />,
      skills: [
        { name: 'SQL Server', level: 90 },
        { name: 'MySQL', level: 85 },
        { name: 'MongoDB', level: 80 },
        { name: 'Firebase', level: 85 },
        { name: 'Azure DevOps', level: 80 }
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
            A comprehensive overview of my technical skills and proficiency levels across different technologies and frameworks.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card key={category.title} className="group hover:shadow-lg transition-all duration-300">
              <CardHeader className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-muted rounded-full text-foreground group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
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
          <h3 className="text-2xl font-bold font-poppins mb-8">Additional Technologies & Tools</h3>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {[
              'Visual Studio', 'Android Studio', 'XCode', 'VS Code', 'NetBeans', 'Eclipse', 'PyCharm',
              'Figma', 'Git', 'Agile/Scrum', 'REST APIs', 'Web API', 'Bootstrap', 'Unity', 'Blender',
              'IDA Pro', 'OpenAI', 'JUnit', 'ISTQB', 'SQLite'
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
