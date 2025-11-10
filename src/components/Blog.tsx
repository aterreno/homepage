import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight, Tag, ExternalLink } from 'lucide-react';

interface BlogPost {
  title: string;
  excerpt: string;
  readTime: number;
  publishDate: string;
  category: string;
  tags: string[];
  url: string;
  featured: boolean;
}

const Blog: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const blogPosts: BlogPost[] = [
    {
      title: "Building Resilient Systems: Lessons from 20 Years in Engineering Leadership",
      excerpt: "Key principles and practices for architecting systems that survive the test of time, scale, and organizational change. From monoliths to microservices, what really matters for long-term success.",
      readTime: 8,
      publishDate: "2024-12-15",
      category: "Engineering",
      tags: ["Architecture", "Leadership", "Systems Design"],
      url: "#",
      featured: true
    },
    {
      title: "The ROI of Engineering Excellence: How Technical Debt Costs More Than You Think",
      excerpt: "Quantifying the hidden costs of technical debt and presenting a framework for making the business case for engineering excellence initiatives.",
      readTime: 6,
      publishDate: "2024-11-28",
      category: "Leadership",
      tags: ["Technical Debt", "ROI", "Business Case"],
      url: "#",
      featured: true
    },
    {
      title: "Scaling Engineering Teams: From 5 to 200 Without Losing Your Soul",
      excerpt: "Practical strategies for maintaining culture, quality, and velocity while rapidly scaling engineering organizations. Real lessons from multiple scale-ups.",
      readTime: 10,
      publishDate: "2024-11-10",
      category: "Leadership",
      tags: ["Team Scaling", "Culture", "Hiring"],
      url: "#",
      featured: false
    },
    {
      title: "Cloud Economics: Optimizing for Cost AND Performance",
      excerpt: "Beyond the basics of cloud cost optimization. Advanced strategies for balancing performance, reliability, and cost in cloud-native architectures.",
      readTime: 7,
      publishDate: "2024-10-22",
      category: "Cloud",
      tags: ["Cloud", "Cost Optimization", "Performance"],
      url: "#",
      featured: false
    },
    {
      title: "The Future of DevSecOps: Security as a Competitive Advantage",
      excerpt: "How leading organizations are turning security from a bottleneck into a business differentiator through cultural and technical transformation.",
      readTime: 5,
      publishDate: "2024-10-05",
      category: "Security",
      tags: ["DevSecOps", "Security", "Culture"],
      url: "#",
      featured: false
    },
    {
      title: "AI in Engineering: Practical Applications Beyond the Hype",
      excerpt: "Real-world applications of AI and ML in engineering workflows, from code review to infrastructure optimization. What works, what doesn't, and what's coming next.",
      readTime: 9,
      publishDate: "2024-09-18",
      category: "Innovation",
      tags: ["AI/ML", "Automation", "Innovation"],
      url: "#",
      featured: false
    }
  ];

  const categories = [
    { id: 'all', label: 'All Posts' },
    { id: 'Engineering', label: 'Engineering' },
    { id: 'Leadership', label: 'Leadership' },
    { id: 'Cloud', label: 'Cloud' },
    { id: 'Security', label: 'Security' },
    { id: 'Innovation', label: 'Innovation' }
  ];

  const filteredPosts = activeCategory === 'all' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === activeCategory);

  const featuredPosts = blogPosts.filter(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <section id="blog" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-antonio-navy">Thought Leadership</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Insights on engineering leadership, technology strategy, and building high-performing teams from two decades in the field.
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
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Featured Posts */}
        {activeCategory === 'all' && featuredPosts.length > 0 && (
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-8 text-antonio-navy">Featured Articles</h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredPosts.map((post, index) => (
                <motion.article
                  key={post.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group bg-gradient-to-br from-antonio-blue to-antonio-navy rounded-xl overflow-hidden text-white hover:shadow-xl transition-all duration-300"
                >
                  <div className="p-8">
                    <div className="flex items-center gap-4 mb-4 text-antonio-light-blue">
                      <span className="bg-white/20 px-3 py-1 rounded-full text-sm font-medium">
                        {post.category}
                      </span>
                      <div className="flex items-center gap-1 text-sm">
                        <Clock className="w-4 h-4" />
                        {post.readTime} min read
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold mb-3 group-hover:text-antonio-light-blue transition-colors">
                      {post.title}
                    </h3>
                    
                    <p className="text-gray-200 mb-4 leading-relaxed">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1 text-sm text-gray-300">
                        <Calendar className="w-4 h-4" />
                        {formatDate(post.publishDate)}
                      </div>
                      
                      <a
                        href={post.url}
                        className="inline-flex items-center gap-2 text-white hover:text-antonio-light-blue transition-colors font-medium"
                      >
                        Read More
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </a>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        )}

        {/* Regular Posts */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {regularPosts.map((post, index) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <div className="p-6">
                <div className="flex items-center gap-4 mb-4 text-sm text-gray-600">
                  <span className="bg-antonio-blue/10 text-antonio-blue px-3 py-1 rounded-full font-medium">
                    {post.category}
                  </span>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {post.readTime} min
                  </div>
                </div>
                
                <h3 className="text-lg font-bold mb-3 text-antonio-navy group-hover:text-antonio-blue transition-colors line-clamp-2">
                  {post.title}
                </h3>
                
                <p className="text-gray-600 mb-4 leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.slice(0, 2).map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center gap-1 text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded"
                    >
                      <Tag className="w-3 h-3" />
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div className="flex items-center gap-1 text-sm text-gray-500">
                    <Calendar className="w-4 h-4" />
                    {formatDate(post.publishDate)}
                  </div>
                  
                  <a
                    href={post.url}
                    className="inline-flex items-center gap-2 text-antonio-blue hover:text-antonio-navy transition-colors font-medium text-sm"
                  >
                    Read More
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 p-8 bg-gray-50 rounded-xl">
          <h3 className="text-xl font-bold mb-3 text-antonio-navy">Want to discuss these topics?</h3>
          <p className="text-gray-600 mb-6">
            I'm always interested in engaging discussions about engineering leadership and technology strategy.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center px-6 py-3 bg-antonio-blue text-white rounded-lg font-medium hover:bg-antonio-navy transition-colors"
          >
            Let's Connect
            <ArrowRight className="ml-2 w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Blog;
