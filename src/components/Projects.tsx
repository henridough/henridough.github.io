
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
      id: 4,
      title: 'Database Management System',
      description: 'Comprehensive database solution with advanced query optimization and data management capabilities. Implemented using modern database technologies and best practices.',
      image: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=400&h=200&fit=crop',
      tech: ['MySQL', 'SQLite', 'SQL Server', 'MongoDB'],
      category: 'Backend',
      githubUrl: 'https://github.com'
    }
  ];

  const categories = ['All', 'Mobile', 'Full Stack', 'Backend'];

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <section id="projects" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold font-poppins mb-4 text-white">
            Featured <span className="bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Here are some of my notable projects that showcase my skills in application development, 
            from mobile apps to full-stack systems.
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
                ? "rounded-full bg-green-500 text-black hover:bg-green-400 font-medium" 
                : "rounded-full border-green-500 text-green-500 hover:bg-green-500 hover:text-black font-medium"
              }
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <Card key={project.id} className="group hover:shadow-lg hover:shadow-green-500/10 transition-all duration-300 transform hover:-translate-y-2 bg-gray-800 border-gray-700 hover:border-green-500/50">
              <div className="aspect-video overflow-hidden rounded-t-lg">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-xl font-poppins text-white">{project.title}</CardTitle>
                <CardDescription className="text-sm text-gray-300">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <Badge key={tech} className="text-xs bg-gray-700 text-green-400 hover:bg-gray-600 border-green-500/20">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline" asChild className="border-green-500 text-green-500 hover:bg-green-500 hover:text-black">
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </a>
                  </Button>
                  {project.liveUrl && (
                    <Button size="sm" asChild className="bg-green-500 text-black hover:bg-green-400">
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
