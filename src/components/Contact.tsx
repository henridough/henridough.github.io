
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Linkedin, Github, Phone } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Here you would typically send the form data to your backend or email service
    console.log('Form submitted:', formData);
    
    toast({
      title: "Message sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });

    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold font-poppins mb-4 text-white">
            Get In <span className="bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, collaborations, or just having a chat about technology.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Contact info */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold font-poppins mb-6 text-white">Let's Connect</h3>
              <p className="text-gray-300 mb-8">
                Feel free to reach out through any of these channels. I typically respond within 24 hours.
              </p>
            </div>

            <div className="space-y-4">
              <Card className="p-4 hover:shadow-md hover:shadow-green-500/10 transition-all duration-300 bg-gray-900 border-gray-700 hover:border-green-500/50">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-gray-800 rounded-lg">
                    <Mail className="h-5 w-5 text-green-500" />
                  </div>
                  <div>
                    <p className="font-medium text-white">Email</p>
                    <a 
                      href="mailto:henrygreen101@outlook.com" 
                      className="text-sm text-gray-300 hover:text-green-500 transition-colors"
                    >
                      henrygreen101@outlook.com
                    </a>
                  </div>
                </div>
              </Card>

              <Card className="p-4 hover:shadow-md hover:shadow-green-500/10 transition-all duration-300 bg-gray-900 border-gray-700 hover:border-green-500/50">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-gray-800 rounded-lg">
                    <Linkedin className="h-5 w-5 text-green-500" />
                  </div>
                  <div>
                    <p className="font-medium text-white">LinkedIn</p>
                    <a 
                      href="https://linkedin.com/in/henrydo" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-sm text-gray-300 hover:text-green-500 transition-colors"
                    >
                      LinkedIn Profile
                    </a>
                  </div>
                </div>
              </Card>

              <Card className="p-4 hover:shadow-md hover:shadow-green-500/10 transition-all duration-300 bg-gray-900 border-gray-700 hover:border-green-500/50">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-gray-800 rounded-lg">
                    <Github className="h-5 w-5 text-green-500" />
                  </div>
                  <div>
                    <p className="font-medium text-white">GitHub</p>
                    <a 
                      href="https://github.com/henrydo" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-sm text-gray-300 hover:text-green-500 transition-colors"
                    >
                      GitHub Profile
                    </a>
                  </div>
                </div>
              </Card>

              <Card className="p-4 hover:shadow-md hover:shadow-green-500/10 transition-all duration-300 bg-gray-900 border-gray-700 hover:border-green-500/50">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-gray-800 rounded-lg">
                    <Phone className="h-5 w-5 text-green-500" />
                  </div>
                  <div>
                    <p className="font-medium text-white">Phone</p>
                    <a 
                      href="tel:(504) 884-7618" 
                      className="text-sm text-gray-300 hover:text-green-500 transition-colors"
                    >
                      (504) 884-7618
                    </a>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          {/* Contact form */}
          <div className="lg:col-span-2">
            <Card className="bg-gray-900 border-gray-700">
              <CardHeader>
                <CardTitle className="text-2xl font-poppins text-white">Send a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium text-white">
                        Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Your name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="bg-gray-800 border-gray-600 focus:border-green-500 text-white placeholder:text-gray-400"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium text-white">
                        Email *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="your.email@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="bg-gray-800 border-gray-600 focus:border-green-500 text-white placeholder:text-gray-400"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium text-white">
                      Subject *
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      placeholder="What's this about?"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="bg-gray-800 border-gray-600 focus:border-green-500 text-white placeholder:text-gray-400"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-white">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell me about your project or just say hi!"
                      className="min-h-[120px] bg-gray-800 border-gray-600 focus:border-green-500 text-white placeholder:text-gray-400"
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-green-500 hover:bg-green-400 text-black font-medium"
                  >
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
