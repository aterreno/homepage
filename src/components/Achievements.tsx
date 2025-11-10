import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Trophy, TrendingUp, Users, Award, Target, Zap } from 'lucide-react';

interface Achievement {
  icon: React.ReactNode;
  title: string;
  description: string;
  metric: string;
  category: 'business' | 'technical' | 'leadership' | 'innovation';
}

interface CounterProps {
  end: number;
  duration: number;
  suffix?: string;
  prefix?: string;
}

const Counter: React.FC<CounterProps> = ({ end, duration, suffix = '', prefix = '' }) => {
  const [count, setCount] = useState(0);
  const countRef = useRef<HTMLSpanElement>(null);
  const isInView = useInView(countRef, { once: true });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number;
    const startCount = 0;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = (timestamp - startTime) / (duration * 1000);

      if (progress < 1) {
        setCount(Math.floor(startCount + (end - startCount) * progress));
        requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, end, duration]);

  return (
    <span ref={countRef} className="font-bold">
      {prefix}{count}{suffix}
    </span>
  );
};

const Achievements: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const keyMetrics = [
    {
      icon: <TrendingUp className="w-8 h-8" />,
      label: "Cost Savings Delivered",
      value: 75,
      suffix: "M+",
      prefix: "£",
      description: "Annual operational cost reductions across global operations"
    },
    {
      icon: <Users className="w-8 h-8" />,
      label: "Engineers Led",
      value: 200,
      suffix: "+",
      prefix: "",
      description: "Total engineering professionals managed across multiple organizations"
    },
    {
      icon: <Award className="w-8 h-8" />,
      label: "ROI Delivered",
      value: 25,
      suffix: "%",
      prefix: "",
      description: "Investment return on Pharmaspectra acquisition by IQVIA"
    },
    {
      icon: <Target className="w-8 h-8" />,
      label: "Uptime Achieved",
      value: 99.9,
      suffix: "%",
      prefix: "",
      description: "System availability across mission-critical platforms"
    }
  ];

  const achievements = [
    {
      metric: "$100M",
      label: "Annual Budget Managed",
      description: "Led global operations function at HSBC with 1000-person team supporting 80,000 users worldwide"
    },
    {
      metric: "$30M+",
      label: "Annual Savings Projected",
      description: "Delivered through $9M AI innovation portfolio and automation initiatives over three years"
    },
    {
      metric: "25%",
      label: "IRR for Investors",
      description: "Contributed to Pharmaspectra's successful acquisition by IQVIA through technology due diligence leadership"
    },
    {
      metric: "50%",
      label: "Change Failure Rate Reduction",
      description: "Improved engineering performance through scaling leadership and agile product delivery practices"
    },
    {
      metric: "+10%",
      label: "Release Frequency Improvement",
      description: "Accelerated delivery while reducing incident volumes by 20% and lead time to deploy by 10%"
    },
    {
      metric: "20+",
      label: "Engineers Developed",
      description: "Led Evolve Programme at Equal Experts, hiring and developing consultants as permanent employees"
    }
  ];

  const detailedAchievements = [
    {
      title: "Global Engineering Transformation",
      company: "HSBC",
      impact: "Transformed 1000-person operations function supporting 80K users with $100M budget",
      metrics: ["10% improvement in release frequency", "50% reduction in change failure rate", "20% reduction in incident volumes"],
      year: "2023-2025"
    },
    {
      title: "AI Innovation Portfolio Leadership",
      company: "HSBC", 
      impact: "Led $9M AI innovation portfolio delivering operational capabilities",
      metrics: ["$30M+ projected annual savings", "New AI-powered operational capabilities", "Three-year ROI achievement"],
      year: "2023-2025"
    },
    {
      title: "Successful Private Equity Exit",
      company: "Pharmaspectra",
      impact: "Led technology due diligence during acquisition by IQVIA",
      metrics: ["25% IRR for investors", "Cloud-native architecture on AWS", "UK centre of engineering excellence"],
      year: "2021-2022"
    },
    {
      title: "Startup Technology Foundation",
      company: "TheUp.co & Labrador",
      impact: "Built technology functions from scratch for two pre-series A startups",
      metrics: ["End-to-end platform rebuilds", "Cloud-native AWS architecture", "Secured seed funding"],
      year: "2017-2020"
    },
    {
      title: "Consultancy Partnership & Growth",
      company: "Equal Experts", 
      impact: "Promoted to Partner and led talent development programme",
      metrics: ["20 consultants hired permanently", "Digital transformation leadership", "Fortune 500 client delivery"],
      year: "2012-2017"
    }
  ];

  const categoryColors = {
    business: 'bg-green-500',
    technical: 'bg-blue-500',
    leadership: 'bg-purple-500',
    innovation: 'bg-orange-500'
  };

  return (
    <section id="achievements" ref={ref} className="py-20 bg-gradient-to-br from-antonio-navy to-antonio-blue text-white">
      <div className="container mx-auto px-6">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Proven Track Record</h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Quantifiable results from two decades of technology leadership, team building, and strategic innovation.
          </p>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {keyMetrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-xl"
            >
              <div className="flex justify-center mb-3 text-antonio-light-blue">
                {metric.icon}
              </div>
              <div className="text-2xl md:text-3xl font-bold mb-1">
                <Counter 
                  end={metric.value} 
                  duration={2} 
                  suffix={metric.suffix}
                  prefix={metric.prefix}
                />
              </div>
              <div className="text-sm font-medium mb-2">{metric.label}</div>
              <div className="text-xs text-gray-300 leading-relaxed">{metric.description}</div>
            </motion.div>
          ))}
        </div>

        {/* Detailed Achievements */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-center mb-12">Key Achievements</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {detailedAchievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.8 + (index * 0.1) }}
                className="p-6 bg-white/10 backdrop-blur-sm rounded-xl hover:bg-white/15 transition-colors duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-blue-500 bg-opacity-20">
                    <Trophy className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold text-lg">{achievement.title}</h4>
                      <span className="text-antonio-light-blue font-bold text-sm bg-white/10 px-2 py-1 rounded">
                        {achievement.metrics[0]}
                      </span>
                    </div>
                    <p className="text-gray-300 text-sm leading-relaxed">{achievement.impact}</p>
                    <div className="mt-3">
                      <span className="text-xs px-2 py-1 rounded-full bg-blue-500 bg-opacity-30 text-white font-medium">
                        {achievement.company}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1.5 }}
          className="text-center mt-16"
        >
          <p className="text-lg text-gray-300 mb-6">
            Ready to drive similar results for your organization?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center px-8 py-3 bg-white text-antonio-navy rounded-lg font-medium hover:bg-gray-100 transition-colors duration-300"
          >
            Let's Discuss Your Challenges
            <TrendingUp className="ml-2 w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;
