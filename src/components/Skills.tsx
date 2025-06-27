import React, { useState } from 'react';
import { Code, Database, Server, Zap, TrendingUp, Users, Shield, Target } from 'lucide-react';

interface Skill {
  icon: React.ReactNode;
  title: string;
  description: string;
  level: number; // 1-100
}

const Skills: React.FC = () => {
  const [activeSkill, setActiveSkill] = useState<string | null>(null);

  const skills: Skill[] = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Engineering Leadership",
      description: "20+ years leading engineering teams from 5 to 1000+ members. Expert in scaling engineering functions, establishing best practices, and driving organizational transformation.",
      level: 95
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Cloud Architecture",
      description: "Deep expertise in AWS cloud-native architectures, microservices, and Infrastructure as Code. Led cloud transformations for enterprise-scale platforms.",
      level: 90
    },
    {
      icon: <Server className="w-8 h-8" />,
      title: "DevOps & CI/CD",
      description: "Pioneered DevOps practices, continuous deployment, and modern engineering practices. Achieved significant improvements in delivery speed and quality.",
      level: 88
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "AI/ML & Automation",
      description: "Led $9M AI innovation portfolio delivering $30M+ savings. Expert in automation platforms and intelligent systems for operational excellence.",
      level: 85
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Digital Transformation",
      description: "Led digital transformations resulting in major corporate restructuring (MergerMarket → Acuris). Expert in modernizing legacy systems and processes.",
      level: 92
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Product Strategy",
      description: "Led product development from MVP to scale for startups and enterprises. Expert in balancing technical delivery with business outcomes.",
      level: 87
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Enterprise Architecture",
      description: "Designed scalable, resilient systems for Fortune 500 clients. Expert in microservices, event-driven architectures, and platform engineering.",
      level: 90
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Business Impact",
      description: "Consistent track record of delivering quantifiable business results: $100M+ budgets managed, 25% IRR exits, and significant cost savings.",
      level: 94
    }
  ];

  const handleSkillHover = (title: string) => {
    setActiveSkill(title);
  };

  const handleSkillLeave = () => {
    setActiveSkill(null);
  };

  return (
    <section id="skills" className="py-20 bg-antonio-navy text-white">
      <div className="container mx-auto px-6">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Skills & Expertise</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Areas where I've developed deep expertise throughout my career.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div 
              key={skill.title}
              className={`p-6 rounded-xl transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${
                activeSkill === skill.title 
                  ? 'bg-antonio-blue/20 backdrop-blur-sm' 
                  : 'bg-white/5 backdrop-blur-sm'
              }`}
              onMouseEnter={() => handleSkillHover(skill.title)}
              onMouseLeave={handleSkillLeave}
            >
              <div className={`w-16 h-16 rounded-xl flex items-center justify-center mb-4 transition-all duration-300 ${
                activeSkill === skill.title 
                  ? 'bg-antonio-blue text-white' 
                  : 'bg-white/10 text-antonio-light-blue'
              }`}>
                {skill.icon}
              </div>
              
              <h3 className="text-xl font-semibold mb-3">{skill.title}</h3>
              
              <div className="mb-4 flex items-center">
                {[...Array(100)].map((_, i) => (
                  <div 
                    key={i} 
                    className={`w-1 h-8 rounded-full mr-0.5 ${
                      i < skill.level ? 'bg-antonio-blue' : 'bg-white/20'
                    }`}
                  />
                ))}
              </div>
              
              <p className="text-gray-300">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;