import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, TrendingUp, Users, Clock, Award } from 'lucide-react';

interface Project {
  title: string;
  company: string;
  period: string;
  description: string;
  technologies: string[];
  metrics: {
    icon: React.ReactNode;
    label: string;
    value: string;
  }[];
  category: 'enterprise' | 'healthcare' | 'iot' | 'hospitality' | 'energy' | 'fintech';
  image: string;
  link: string;
}

interface ProjectCardProps extends Project {
  delay: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  company,
  period,
  description,
  technologies,
  metrics,
  category,
  image,
  link,
  delay
}) => {
  const categoryColors = {
    enterprise: 'bg-blue-500',
    healthcare: 'bg-green-500',
    iot: 'bg-purple-500',
    hospitality: 'bg-orange-500',
    energy: 'bg-red-500',
    fintech: 'bg-yellow-500'
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: delay * 0.1 }}
      className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
    >
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <div className={`w-3 h-3 rounded-full ${categoryColors[category]}`}></div>
              <span className="text-sm text-gray-500 font-medium uppercase tracking-wide">
                {category.replace(/([A-Z])/g, ' $1').trim()}
              </span>
            </div>
            <h3 className="text-xl font-bold text-antonio-navy mb-1">{title}</h3>
            <p className="text-antonio-blue font-medium">{company}</p>
            <p className="text-sm text-gray-500">{period}</p>
          </div>
        </div>

        <p className="text-gray-700 mb-4 leading-relaxed">{description}</p>

        {/* Metrics */}
        <div className="grid grid-cols-3 gap-4 mb-4">
          {metrics.map((metric, index) => (
            <div key={index} className="text-center p-3 bg-gray-50 rounded-lg">
              <div className="flex justify-center mb-1 text-antonio-blue">
                {metric.icon}
              </div>
              <div className="text-lg font-bold text-antonio-navy">{metric.value}</div>
              <div className="text-xs text-gray-600">{metric.label}</div>
            </div>
          ))}
        </div>

        {/* Technologies */}
        <div className="mb-4">
          <p className="text-sm font-medium text-gray-600 mb-2">Technologies:</p>
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech, index) => (
              <span
                key={index}
                className="px-2 py-1 bg-antonio-blue/10 text-antonio-blue text-xs rounded-full font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Projects: React.FC = () => {
  const [activeCategory, setActiveCategory] = React.useState<string>('all');

  const projects: Project[] = [
    {
      title: "Global Operations Automation Platform",
      company: "HSBC",
      period: "2023-2025",
      description: "Led transformation of global operations function supporting 80,000 users with $100M budget. Implemented AI innovation portfolio delivering $30M+ annual savings through automation and operational capabilities.",
      image: "/images/hsbc-automation.jpg",
      technologies: ["AI/ML", "AWS", "Microservices", "DevOps", "CI/CD"],
      category: "enterprise" as const,
      metrics: [
        { icon: <Users className="w-4 h-4" />, label: "Budget", value: "$100M" },
        { icon: <TrendingUp className="w-4 h-4" />, label: "Users", value: "80K" },
        { icon: <Award className="w-4 h-4" />, label: "Savings", value: "$30M+" }
      ],
      link: "#"
    },
    {
      title: "Medical Affairs Data Platform",
      company: "Pharmaspectra",
      period: "2021-2022",
      description: "Built and scaled technology capabilities for medical affairs data company from ground up. Created UK-based centre of engineering excellence with cloud-native architecture supporting company's growth to successful private equity exit.",
      image: "/images/pharmaspectra-platform.jpg", 
      technologies: ["AWS", "Cloud-Native", "TDD", "CI/CD", "Infrastructure as Code"],
      category: "healthcare" as const,
      metrics: [
        { icon: <TrendingUp className="w-4 h-4" />, label: "IRR", value: "25%" },
        { icon: <Award className="w-4 h-4" />, label: "Exit", value: "IQVIA" },
        { icon: <Users className="w-4 h-4" />, label: "Architecture", value: "Cloud" }
      ],
      link: "#"
    },
    {
      title: "ChargedUp IoT Platform Rebuild",
      company: "TheUp.co",
      period: "2019-2020",
      description: "Delivered end-to-end rebuild of ChargedUp MVP for PAYG mobile phone battery sharing platform. Architected scalable cloud-native systems using modern, lightweight tech stack on AWS for hospitality and IoT sectors.",
      image: "/images/chargedup-platform.jpg",
      technologies: ["IoT", "AWS", "Cloud-Native", "Mobile", "QR Codes"],
      category: "iot" as const,
      metrics: [
        { icon: <Clock className="w-4 h-4" />, label: "Delivery", value: "E2E" },
        { icon: <TrendingUp className="w-4 h-4" />, label: "Platform", value: "IoT" },
        { icon: <Award className="w-4 h-4" />, label: "Stack", value: "Modern" }
      ],
      link: "#"
    },
    {
      title: "ServedUp Mobile Food Platform",
      company: "TheUp.co",
      period: "2019-2020",
      description: "Launched ServedUp, a new mobile food ordering platform based on QR code scanning. Established core engineering practices and technical foundations to enable rapid product iteration in hospitality sector.",
      image: "/images/servedup-platform.jpg",
      technologies: ["Mobile", "QR Codes", "Cloud-Native", "AWS", "Microservices"],
      category: "hospitality" as const,
      metrics: [
        { icon: <Award className="w-4 h-4" />, label: "Launch", value: "New" },
        { icon: <TrendingUp className="w-4 h-4" />, label: "Tech", value: "QR" },
        { icon: <Users className="w-4 h-4" />, label: "Sector", value: "Food" }
      ],
      link: "#"
    },
    {
      title: "Intelligent Energy Platform",
      company: "Labrador",
      period: "2017-2019",
      description: "Created and led engineering function to deliver intelligent energy platform from MVP to early scale. Architected cloud-native solutions and implemented DevOps practices for big data and IoT applications.",
      image: "/images/labrador-energy.jpg",
      technologies: ["Big Data", "IoT", "Cloud-Native", "DevOps", "Energy Systems"],
      category: "energy" as const,
      metrics: [
        { icon: <TrendingUp className="w-4 h-4" />, label: "Scale", value: "MVP→" },
        { icon: <Award className="w-4 h-4" />, label: "Funding", value: "Seed" },
        { icon: <Users className="w-4 h-4" />, label: "Data", value: "Big" }
      ],
      link: "#"
    },
    {
      title: "MergerMarket Digital Transformation",
      company: "Equal Experts",
      period: "2012-2017",
      description: "Kicked off digital transformation initiative for MergerMarket that led to the creation of the Acuris group. Led strategic technology initiatives and implementation of modern engineering practices.",
      image: "/images/mergermarket-transformation.jpg",
      technologies: ["Digital Transformation", "Enterprise Architecture", "Agile", "DevOps"],
      category: "fintech" as const,
      metrics: [
        { icon: <Award className="w-4 h-4" />, label: "Result", value: "Acuris" },
        { icon: <TrendingUp className="w-4 h-4" />, label: "Type", value: "Transform" },
        { icon: <Users className="w-4 h-4" />, label: "Scale", value: "Enterprise" }
      ],
      link: "#"
    }
  ];

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'enterprise', label: 'Enterprise' },
    { id: 'healthcare', label: 'Healthcare' },
    { id: 'iot', label: 'IoT' },
    { id: 'hospitality', label: 'Hospitality' },
    { id: 'energy', label: 'Energy' },
    { id: 'fintech', label: 'Fintech' }
  ];

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-6">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-antonio-navy">Key Projects & Deliverables</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Strategic initiatives that delivered measurable business impact through innovative technology solutions and exceptional leadership.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-antonio-blue text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={`${project.company}-${project.title}`}
              {...project}
              delay={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
