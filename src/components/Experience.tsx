import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import ExperienceCard from './ExperienceCard';

const Experience: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isInView) {
      setIsVisible(true);
    }
  }, [isInView]);

  const experiences = [

    {
      title: "Head of Software Engineering - Global Operations & Automation",
      company: "HSBC",
      period: "Jan 2021 - Aprli 2025",
      description: "Led software engineering and implementation of automation solutions across global operations.",
      logoUrl: 'images/hsbc-logo.jpg'    
    },
    {
      title: "VP of Engineering",
      company: "Pharmaspectra",
      period: "2019 - 2021",
      description: "Led engineering teams and technology strategy, contributing to the successful sale of Pharmaspectra to IQVIA with a 25% IRR.",
      logoUrl: "images/pharmaspectra-logo.jpg"
    },
    {
      title: "CTO",
      company: "theUp.co (ChargedUp/CleanedUp)",
      period: "2018 - 2019",
      description: "Oversaw technology strategy and implementation for innovative charging and sanitization solutions.",
      logoUrl: "images/upco-logo.jpg"
    },
    {
      title: "CTO",
      company: "Labrador Ltd",
      period: "2017 - 2018",
      description: "Led technology development and strategy for innovative digital solutions.",
      logoUrl: "images/thelabrador-logo.jpg"
    },
    {
      title: "Partner",
      company: "Equal Experts",
      period: "2015 - 2017",
      description: "Collaborated on high-impact software engineering projects and strategic initiatives.",
      logoUrl: "images/equalexperts-logo.jpg"
    },
    {
      title: "Senior Consultant",
      company: "ThoughtWorks",
      period: "2012 - 2015",
      description: "Provided expertise in software engineering, agile methodologies, and technology strategy.",
      logoUrl: "images/thoughtworks-logo.jpg"
    }
  ];

  return (
    <section id="experience" ref={ref} className="py-20 bg-gradient-to-b from-white to-antonio-light/50">
      <div className="container mx-auto px-6">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Professional Experience</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            My journey through the technology landscape, leading teams and driving innovation.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {experiences.map((exp, index) => (
            <ExperienceCard
              key={`${exp.company}-${exp.title}`}
              title={exp.title}
              company={exp.company}
              period={exp.period}
              description={exp.description}
              logoUrl={exp.logoUrl}
              delay={(index % 5) + 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;