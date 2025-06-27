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
      title: "Head of Software Engineering, Global Operations and Automation",
      company: "HSBC",
      period: "Jan 2023 - April 2025",
      description: "Transformed engineering performance for a 1000-person global operations function supporting 80,000 users with a $100M budget. Accelerated delivery by improving Release Frequency (+10%), halving Change Failure Rate, and cutting Incident volumes (–20%). Led a $9M AI innovation portfolio delivering $30M+ in projected annual savings.",
      logoUrl: 'images/hsbc-logo.jpg'    
    },
    {
      title: "VP of Software Engineering",
      company: "Pharmaspectra",
      period: "January 2021 - December 2022",
      description: "Built and scaled technology capabilities supporting Pharmaspectra's growth and successful private equity exit. Led technology due diligence during acquisition by IQVIA, contributing to a 25% IRR for investors. Created UK-based centre of engineering excellence with cloud-native architecture on AWS.",
      logoUrl: "images/pharmaspectra-logo.jpg"
    },
    {
      title: "Chief Technology Officer (CTO)",
      company: "TheUp.co (ChargedUp)",
      period: "Jul 2019 - Dec 2020",
      description: "Built technology function from scratch for pre-series A hospitality and IoT startup. Delivered end-to-end rebuild of ChargedUp MVP and launched ServedUp mobile food ordering platform. Architected scalable cloud-native systems on AWS with modern engineering practices.",
      logoUrl: "images/upco-logo.jpg"
    },
    {
      title: "Chief Technology Officer (CTO)",
      company: "Labrador",
      period: "Jul 2017 - Jul 2019",
      description: "Created and led engineering function for intelligent energy platform from MVP to early scale. Drove product development, architected cloud-native solutions, and implemented DevOps practices. Played key role in securing seed funding through credible technology roadmaps.",
      logoUrl: "images/thelabrador-logo.jpg"
    },
    {
      title: "Partner",
      company: "Equal Experts",
      period: "Jan 2012 - Jul 2017",
      description: "Promoted to Partner in 2013. Led the Evolve Programme, hiring 20 consultants as permanent employees. Worked with clients including MergerMarket (digital transformation leading to Acuris group creation) and Kingfisher Group (leading ~20 senior engineers).",
      logoUrl: "images/equalexperts-logo.jpg"
    },
    {
      title: "Lead Consultant",
      company: "ThoughtWorks",
      period: "Oct 2006 - Jun 2010",
      description: "Senior technology consultant working across UK, SE Asia, Hong Kong, Ireland, and India. Delivered enterprise-scale solutions and pioneered agile methodologies for Fortune 500 clients.",
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