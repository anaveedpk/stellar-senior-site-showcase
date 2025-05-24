
import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Download, Code, Database, Users, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const skills = {
    "Frontend": ["React", "Angular", "TypeScript", "JavaScript", "HTML5", "CSS3"],
    "Backend": [".NET Core", "C#", "Node.js", "WPF", "WCF", "MVVM"],
    "Database": ["SQL Server", "RDBMS Design", "Database Optimization"],
    "DevOps": ["Git", "Azure DevOps", "SVN", "Agile", "Scrum"],
    "Tools": ["Visual Studio", "JIRA", "DevExpress", "Telerik Controls"]
  };

  const experiences = [
    {
      title: "Team Lead",
      company: "Logiciel Services",
      period: "Aug, 2022 till Now",
      description: "Leading development of vTrader application for traders and dealers engaged in buying and selling shares.",
      achievements: [
        "Steered a dynamic Agile team, conducting comprehensive code reviews",
        "Championed development of new features using .NET Core, WPF, ReactiveX",
        "Adhered to Scrum Agile development model",
        "Leveraged Git for source control and JIRA for project management"
      ]
    },
    {
      title: "Senior Software Engineer",
      company: "Contour Software - A+W Valia",
      period: "April, 2020 till Aug 2022",
      description: "Developed Interactive enterprise level application (Smart Factory Clarity Suite) for A+W, Germany.",
      achievements: [
        "Study requirements using client discussions and documentation",
        "Develop robust UI using WPF, Telerik Controls, Micro-Services",
        "MVVM based code structure and MAF framework implementation",
        "Following Scrum Agile development model"
      ]
    },
    {
      title: "Application Specialist",
      company: "NetSol Technologies",
      period: "Mar 2011 till April, 2020",
      description: "Worked on NetSol Financial Suit (an ERP for global Leasing and Finance market) with 5+ worldwide implementations.",
      achievements: [
        "Participated in development of NextGen Leasing Suite ERP",
        "Handled updating, repairing, modifying modules",
        "Executed design, development, troubleshooting and debugging",
        "Managed technical aspects and application maintenance"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 text-white">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%239C92AC%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%224%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
        
        <div className={`container mx-auto px-6 py-20 relative z-10 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 text-center lg:text-left">
              <h1 className="text-5xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Ahmed Naveed Zafar
              </h1>
              <p className="text-xl lg:text-2xl text-blue-200 mb-8 font-light">
                Senior Software Engineer & Team Lead
              </p>
              <p className="text-lg text-slate-300 mb-8 max-w-2xl">
                Secure a responsible career opportunity to fully utilize my training and skills, while making a significant contribution to the success of the company.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105">
                  <Mail className="mr-2 h-5 w-5" />
                  anaveed_pk@hotmail.com
                </Button>
                <Button variant="outline" className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white px-8 py-3 rounded-full transition-all duration-300">
                  <Phone className="mr-2 h-5 w-5" />
                  +92-333-6958387
                </Button>
              </div>
              
              <div className="flex items-center justify-center lg:justify-start text-slate-300">
                <MapPin className="mr-2 h-5 w-5" />
                <span>Civil Defense Society, Cantt. Lahore, Pakistan</span>
              </div>
            </div>
            
            <div className="flex-shrink-0">
              <div className="relative">
                <div className="w-80 h-80 rounded-full overflow-hidden border-8 border-blue-400/30 shadow-2xl transform hover:scale-105 transition-transform duration-300">
                  <img 
                    src="/lovable-uploads/d19c34da-3992-46a6-8cce-47861c18fb1d.png" 
                    alt="Ahmed Naveed Zafar"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center animate-pulse">
                  <Code className="h-10 w-10 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-slate-800">
            Education
          </h2>
          <div className="max-w-4xl mx-auto">
            <Card className="shadow-xl border-0 bg-gradient-to-r from-blue-50 to-indigo-50">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <Award className="h-8 w-8 text-blue-600 mr-4" />
                  <h3 className="text-2xl font-bold text-slate-800">Master's in Software Engineering</h3>
                </div>
                <p className="text-lg text-slate-600">University of Engineering & Technology, Lahore, Pakistan</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Technical Expertise Section */}
      <section className="py-20 bg-gradient-to-r from-slate-100 to-blue-100">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-slate-800">
            Technical Expertise
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {Object.entries(skills).map(([category, skillList]) => (
              <Card key={category} className="shadow-lg hover:shadow-xl transition-shadow duration-300 border-0">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4 text-slate-800 flex items-center">
                    {category === 'Frontend' && <Code className="mr-2 h-6 w-6 text-blue-600" />}
                    {category === 'Backend' && <Database className="mr-2 h-6 w-6 text-green-600" />}
                    {category === 'Database' && <Database className="mr-2 h-6 w-6 text-purple-600" />}
                    {category === 'DevOps' && <Users className="mr-2 h-6 w-6 text-orange-600" />}
                    {category === 'Tools' && <Award className="mr-2 h-6 w-6 text-red-600" />}
                    {category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {skillList.map((skill) => (
                      <Badge key={skill} variant="secondary" className="bg-blue-100 text-blue-800 hover:bg-blue-200 transition-colors">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h3 className="text-2xl font-bold mb-6 text-slate-800">Core Competencies</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-slate-700 mb-3">Software Development</h4>
                <ul className="text-slate-600 space-y-2">
                  <li>• Complete application development lifecycle</li>
                  <li>• Object-Oriented, SOLID Principles, Design Pattern concepts</li>
                  <li>• Enterprise Contract management, Point of Sales portal development</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-slate-700 mb-3">Leadership & Process</h4>
                <ul className="text-slate-600 space-y-2">
                  <li>• 12+ years of programming experience</li>
                  <li>• Agile Development practices</li>
                  <li>• Source Controls like SVN, Azure DevOps, and Git</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Experience Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-slate-800">
            Professional Experience
          </h2>
          
          <div className="max-w-6xl mx-auto space-y-12">
            {experiences.map((exp, index) => (
              <Card key={index} className="shadow-xl border-0 overflow-hidden">
                <CardContent className="p-0">
                  <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-6">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                      <div>
                        <h3 className="text-2xl font-bold mb-2">{exp.title}</h3>
                        <p className="text-blue-200 text-lg">{exp.company}</p>
                      </div>
                      <Badge className="bg-white/20 text-white mt-4 md:mt-0">
                        {exp.period}
                      </Badge>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <p className="text-slate-700 mb-6 text-lg">{exp.description}</p>
                    
                    <h4 className="font-semibold text-slate-800 mb-4">Key Achievements:</h4>
                    <ul className="space-y-3">
                      {exp.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-start">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                          <span className="text-slate-600">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-8">Let's Connect</h2>
          <p className="text-xl text-blue-200 mb-12 max-w-2xl mx-auto">
            Ready to discuss opportunities or collaborate on exciting projects? I'd love to hear from you.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full text-lg transition-all duration-300 transform hover:scale-105">
              <Mail className="mr-2 h-6 w-6" />
              Get In Touch
            </Button>
            <Button variant="outline" className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white px-8 py-4 rounded-full text-lg transition-all duration-300">
              <Download className="mr-2 h-6 w-6" />
              Download Resume
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
