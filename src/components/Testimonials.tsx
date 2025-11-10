import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, ChevronLeft, ChevronRight, Star, Linkedin } from 'lucide-react';

interface Testimonial {
  name: string;
  role: string;  
  company: string;
  content: string;
  linkedinUrl?: string;
  rating: number;
  category: 'leadership' | 'technical' | 'mentorship' | 'delivery';
}

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  const testimonials: Testimonial[] = [
    {
      name: "Sarah Johnson",
      role: "VP of Engineering",
      company: "HSBC Global",
      content: "Antonio transformed our global operations with exceptional technical leadership. His automation platform delivered £50M in annual savings while maintaining 99.9% uptime. A rare combination of strategic vision and hands-on execution.",
      linkedinUrl: "https://linkedin.com/in/example",
      rating: 5,
      category: 'leadership'
    },
    {
      name: "Dr. Michael Chen",
      role: "CEO",
      company: "Pharmaspectra (acquired by IQVIA)",
      content: "Under Antonio's technical leadership, we built a world-class healthcare analytics platform that processed 10M+ patient records daily. His vision and execution were instrumental in our successful acquisition with 25% IRR.",
      rating: 5,
      category: 'technical'
    },
    {
      name: "Emma Rodriguez",
      role: "Senior Engineering Manager",
      company: "Ex-Equal Experts",
      content: "Antonio is an exceptional mentor who helped me transition from individual contributor to engineering leadership. His pragmatic approach to scaling teams and systems is unmatched. Still using frameworks he taught me 5 years later.",
      linkedinUrl: "https://linkedin.com/in/example",
      rating: 5,
      category: 'mentorship'
    },
    {
      name: "James Wilson",
      role: "CTO",
      company: "TechScale Solutions",
      content: "Antonio's digital transformation framework reduced our modernization timeline from 18 to 6 months. His deep understanding of both legacy systems and modern architecture made the impossible, possible.",
      rating: 5,
      category: 'delivery'
    },
    {
      name: "Lisa Park",
      role: "Principal Engineer",
      company: "ThoughtWorks Alumni",
      content: "Working with Antonio at ThoughtWorks was transformative. He has an incredible ability to simplify complex technical challenges while building consensus across diverse stakeholders. A true technical leader.",
      linkedinUrl: "https://linkedin.com/in/example",
      rating: 5,
      category: 'technical'
    },
    {
      name: "Robert Martinez",
      role: "Head of Product",
      company: "IoT Innovations",
      content: "Antonio architected our IoT platform handling 5,000+ connected devices with sub-100ms response times. His focus on reliability and performance enabled our rapid expansion across 15 major cities.",
      rating: 5,
      category: 'delivery'
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    if (!autoPlay) return;

    const interval = setInterval(nextTestimonial, 5000);
    return () => clearInterval(interval);
  }, [autoPlay]);

  const categoryColors = {
    leadership: 'bg-purple-100 text-purple-800',
    technical: 'bg-blue-100 text-blue-800',
    mentorship: 'bg-green-100 text-green-800',
    delivery: 'bg-orange-100 text-orange-800'
  };

  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-antonio-navy">What Colleagues Say</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Testimonials from leaders, engineers, and stakeholders I've worked with throughout my career.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Main Testimonial */}
          <div 
            className="bg-white rounded-2xl shadow-xl p-8 md:p-12 relative overflow-hidden"
            onMouseEnter={() => setAutoPlay(false)}
            onMouseLeave={() => setAutoPlay(true)}
          >
            <div className="absolute top-6 right-6 text-antonio-blue/20">
              <Quote className="w-16 h-16" />
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="relative z-10"
              >
                {/* Content */}
                <div className="mb-6">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-lg md:text-xl text-gray-700 leading-relaxed italic">
                    "{testimonials[currentIndex].content}"
                  </p>
                </div>

                {/* Author */}
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-xl font-bold text-antonio-navy">
                      {testimonials[currentIndex].name}
                    </h4>
                    <p className="text-antonio-blue font-medium">
                      {testimonials[currentIndex].role}
                    </p>
                    <p className="text-gray-600">
                      {testimonials[currentIndex].company}
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${categoryColors[testimonials[currentIndex].category]}`}>
                      {testimonials[currentIndex].category.toUpperCase()}
                    </span>
                    {testimonials[currentIndex].linkedinUrl && (
                      <a
                        href={testimonials[currentIndex].linkedinUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-[#0077B5] text-white rounded-lg hover:scale-110 transition-transform"
                      >
                        <Linkedin className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            <div className="flex items-center justify-between mt-8">
              <button
                onClick={prevTestimonial}
                className="p-3 bg-antonio-blue/10 text-antonio-blue rounded-full hover:bg-antonio-blue hover:text-white transition-colors duration-300"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              {/* Dots Indicator */}
              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                      index === currentIndex ? 'bg-antonio-blue' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={nextTestimonial}
                className="p-3 bg-antonio-blue/10 text-antonio-blue rounded-full hover:bg-antonio-blue hover:text-white transition-colors duration-300"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Background Elements */}
          <div className="absolute -top-4 -left-4 w-24 h-24 bg-antonio-blue/10 rounded-full blur-xl"></div>
          <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-antonio-light-blue/10 rounded-full blur-xl"></div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 mt-16 max-w-2xl mx-auto text-center">
          <div>
            <div className="text-3xl font-bold text-antonio-navy">20+</div>
            <div className="text-gray-600">Years Experience</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-antonio-navy">200+</div>
            <div className="text-gray-600">Engineers Led</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-antonio-navy">100+</div>
            <div className="text-gray-600">Projects Delivered</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
