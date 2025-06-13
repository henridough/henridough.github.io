
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Github } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tech: string[];
  category: string;
  githubUrl: string;
  liveUrl?: string;
}

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const projects: Project[] = [
    {
      id: 1,
      title: 'Automobile Service App',
      description: 'A comprehensive mobile application built with Flutter for Android/iOS platforms. Features real-time database interactions, service tracking, and user account management with Firebase backend integration.',
      image: 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=400&h=200&fit=crop',
      tech: ['Flutter', 'Firebase', 'Android Studio', 'Figma', 'Blender'],
      category: 'Mobile',
      githubUrl: 'https://github.com'
    },
    {
      id: 2,
      title: 'PC Builder Project',
      description: 'A full-stack web application for custom PC configuration management. Built with React frontend and Java backend, featuring modular design and reusable components for optimal maintainability.',
      image: 'https://images.unsplash.com/photo-1591488320449-011701bb6704?w=400&h=200&fit=crop',
      tech: ['React', 'Java', 'MongoDB', 'HTML/CSS'],
      category: 'Full Stack',
      githubUrl: 'https://github.com'
    },
    {
      id: 3,
      title: 'Retirement System Applications',
      description: 'Enterprise-level .NET applications developed for Louisiana State Employees\' Retirement System. Built custom queries and reports for 100,000+ members using C#, ASP.NET, and SQL Server.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=200&fit=crop',
      tech: ['C#', 'ASP.NET', 'SQL Server', '.NET Core', 'Azure DevOps'],
      category: 'Enterprise',
      githubUrl: 'https://github.com'
    },
    {
      id: 4,
      title: 'Database Management System',
      description: 'Comprehensive database solution with advanced query optimization and data management capabilities. Implemented using modern database technologies and best practices.',
      image: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=400&h=200&fit=crop',
      tech: ['MySQL', 'SQLite', 'SQL Server', 'MongoDB'],
      category: 'Backend',
      githubUrl: 'https://github.com'
    }
  ];

  const categories = ['All', 'Mobile', 'Full Stack', 'Enterprise', 'Backend'];

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <section id="projects" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold font-poppins mb-4 text-black">
            Featured <span className="bg-gradient-to-r from-gray-600 to-black bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Here are some of my notable projects that showcase my skills in application development, 
            from mobile apps to enterprise systems.
          </p>
        </div>

        {/* Filter buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className={selectedCategory === category 
                ? "rounded-full bg-black text-white hover:bg-gray-800" 
                : "rounded-full border-black text-black hover:bg-black hover:text-white"
              }
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <Card key={project.id} className="group hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 bg-white border-gray-200">
              <div className="aspect-video overflow-hidden rounded-t-lg">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-xl font-poppins text-black">{project.title}</CardTitle>
                <CardDescription className="text-sm text-gray-600">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <Badge key={tech} className="text-xs bg-gray-200 text-black hover:bg-gray-300">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline" asChild className="border-black text-black hover:bg-black hover:text-white">
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </a>
                  </Button>
                  {project.liveUrl && (
                    <Button size="sm" asChild className="bg-black text-white hover:bg-gray-800">
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        Live Demo
                      </a>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
