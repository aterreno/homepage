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
      title: "CTO DevOps Services Product Partner",
      company: "HSBC",
      period: "Jan 2023 - Present",
      description: "Leading the DevOps services and products across HSBC. Raised a USD 9M 'Innovation portfolio' focusing on cloud computing and artificial intelligence initiatives.",
      logoUrl: "https://media.licdn.com/dms/image/v2/D4E0BAQGF7uhTJxFBvQ/img-crop_100/img-crop_100/0/1717419425342?e=1748476800&v=beta&t=ziEz0t98L-AjvOwJULio1dv1n45qHGkm6WLD99wBpE0"
    },
    {
      title: "Head of Software Engineering - Global Operations & Automation",
      company: "HSBC",
      period: "Jan 2021 - Jan 2023",
      description: "Led software engineering and implementation of automation solutions across global operations.",
      logoUrl: "https://media.licdn.com/dms/image/v2/D4E0BAQGF7uhTJxFBvQ/img-crop_100/img-crop_100/0/1717419425342?e=1748476800&v=beta&t=ziEz0t98L-AjvOwJULio1dv1n45qHGkm6WLD99wBpE0"
    },
    {
      title: "VP of Engineering",
      company: "Pharmaspectra",
      period: "2019 - 2021",
      description: "Led engineering teams and technology strategy, contributing to the successful sale of Pharmaspectra to IQVIA with a 25% IRR.",
      logoUrl: "https://media.licdn.com/dms/image/v2/D4E0BAQHLD9UquB5z-Q/company-logo_400_400/company-logo_400_400/0/1712600607916/pharmaspectra_logo?e=1748476800&v=beta&t=pTCVDiqQOpL0nLaqVjxg6oxttC9qnfpbLlI4h6B9ziA"
    },
    {
      title: "CTO",
      company: "theUp.co (ChargedUp/CleanedUp)",
      period: "2018 - 2019",
      description: "Oversaw technology strategy and implementation for innovative charging and sanitization solutions.",
      logoUrl: "https://media.licdn.com/dms/image/v2/C4D0BAQE5UIf8sc6Lvg/company-logo_400_400/company-logo_400_400/0/1630516751323/chargedupworld_logo?e=1748476800&v=beta&t=GnsGcEKYgwxJwpJzVjTzU2OFUKcIqxXFyQxgGUJLbFg"
    },
    {
      title: "CTO",
      company: "Labrador Ltd",
      period: "2017 - 2018",
      description: "Led technology development and strategy for innovative digital solutions.",
      logoUrl: "https://media.licdn.com/dms/image/v2/C4E0BAQGYROPyY48AUQ/company-logo_400_400/company-logo_400_400/0/1630610911411/thelabrador_logo?e=1748476800&v=beta&t=p1pV8HUteFfmcvuOqobst0fqukR-25pxO1sU7I6NikA"
    },
    {
      title: "Partner",
      company: "Equal Experts",
      period: "2015 - 2017",
      description: "Collaborated on high-impact software engineering projects and strategic initiatives.",
      logoUrl: "https://media.licdn.com/dms/image/v2/D4E0BAQEUzF1-j7DLSA/company-logo_400_400/company-logo_400_400/0/1719825900353/equal_experts_logo?e=1748476800&v=beta&t=KVVl7TCzhLW_7PZLbsS3yyej3h0YjmxXuvt_mawu87c"
    },
    {
      title: "Senior Consultant",
      company: "ThoughtWorks",
      period: "2012 - 2015",
      description: "Provided expertise in software engineering, agile methodologies, and technology strategy.",
      logoUrl: "https://media.licdn.com/dms/image/v2/C4E0BAQE5QBG-mhja9g/company-logo_400_400/company-logo_400_400/0/1630637271377/thoughtworks_logo?e=1748476800&v=beta&t=RSXX7Pz1wWpX94dtglkeg3fZbolILIWHn-WLKf5qPNk"
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