import React, { useState } from 'react';
import { Cloud, Code, Brain, Server, Shield, BarChart } from 'lucide-react';

interface Skill {
  name: string;
  icon: React.ReactNode;
  description: string;
  level: number; // 1-5
}

const Skills: React.FC = () => {
  const [activeSkill, setActiveSkill] = useState<string | null>(null);

  const skills: Skill[] = [
    {
      name: "Cloud Computing",
      icon: <Cloud className="w-8 h-8" />,
      description: "Expert in AWS, Azure, and GCP with extensive experience architecting and implementing cloud solutions for enterprise-scale applications.",
      level: 5
    },
    {
      name: "Software Engineering",
      icon: <Code className="w-8 h-8" />,
      description: "Proficient in multiple programming languages with a deep understanding of software architecture and design patterns.",
      level: 5
    },
    {
      name: "Artificial Intelligence",
      icon: <Brain className="w-8 h-8" />,
      description: "Strong knowledge of AI/ML technologies and their practical applications in solving business challenges.",
      level: 4
    },
    {
      name: "DevSecOps",
      icon: <Shield className="w-8 h-8" />,
      description: "Experienced in implementing DevSecOps practices, CI/CD pipelines, and security automation.",
      level: 5
    },
    {
      name: "Software Architecture",
      icon: <Server className="w-8 h-8" />,
      description: "Deep expertise in designing scalable and resilient software architectures for complex enterprise systems.",
      level: 5
    },
    {
      name: "Team Leadership",
      icon: <BarChart className="w-8 h-8" />,
      description: "Proven track record of leading large-scale engineering teams and driving successful delivery of complex projects.",
      level: 5
    }
  ];

  const handleSkillHover = (name: string) => {
    setActiveSkill(name);
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
              key={skill.name}
              className={`p-6 rounded-xl transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${
                activeSkill === skill.name 
                  ? 'bg-antonio-blue/20 backdrop-blur-sm' 
                  : 'bg-white/5 backdrop-blur-sm'
              }`}
              onMouseEnter={() => handleSkillHover(skill.name)}
              onMouseLeave={handleSkillLeave}
            >
              <div className={`w-16 h-16 rounded-xl flex items-center justify-center mb-4 transition-all duration-300 ${
                activeSkill === skill.name 
                  ? 'bg-antonio-blue text-white' 
                  : 'bg-white/10 text-antonio-light-blue'
              }`}>
                {skill.icon}
              </div>
              
              <h3 className="text-xl font-semibold mb-3">{skill.name}</h3>
              
              <div className="mb-4 flex items-center">
                {[...Array(5)].map((_, i) => (
                  <div 
                    key={i} 
                    className={`w-2 h-8 rounded-full mr-1 ${
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