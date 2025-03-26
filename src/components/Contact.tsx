import React, { useState } from 'react';
import { Send, Linkedin, Github, Mail, MapPin, Globe } from 'lucide-react';

const Contact: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    
    // Simulate form submission
    setTimeout(() => {
      setSending(false);
      setSent(true);
      setName('');
      setEmail('');
      setMessage('');
      
      // Reset sent status after 5 seconds
      setTimeout(() => {
        setSent(false);
      }, 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get in Touch</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Interested in working together or have a question? Let's connect!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="glass-card p-8 rounded-xl">
            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <label htmlFor="name" className="block text-antonio-navy font-medium mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-antonio-blue/50 focus:border-transparent transition-colors"
                  placeholder="Your name"
                  required
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="email" className="block text-antonio-navy font-medium mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-antonio-blue/50 focus:border-transparent transition-colors"
                  placeholder="Your email address"
                  required
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-antonio-navy font-medium mb-2">Message</label>
                <textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-antonio-blue/50 focus:border-transparent transition-colors"
                  rows={5}
                  placeholder="Your message"
                  required
                />
              </div>
              
              <button
                type="submit"
                disabled={sending || sent}
                className={`w-full py-3 px-6 rounded-lg font-medium flex items-center justify-center transition-all duration-300 ${
                  sent 
                    ? 'bg-green-500 text-white' 
                    : 'bg-antonio-blue text-white hover:bg-antonio-navy'
                }`}
              >
                {sending ? (
                  <span className="flex items-center">
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </span>
                ) : sent ? (
                  <span className="flex items-center">
                    Message Sent
                    <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </span>
                ) : (
                  <span className="flex items-center">
                    Send Message
                    <Send size={16} className="ml-2" />
                  </span>
                )}
              </button>
            </form>
          </div>
          
          <div className="flex flex-col justify-between">
            <div className="glass-card p-8 rounded-xl mb-6">
              <h3 className="text-xl font-semibold mb-4 text-antonio-navy">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <Mail className="w-5 h-5 text-antonio-blue mt-1 mr-3" />
                  <div>
                    <p className="font-medium text-antonio-navy">Email</p>
                    <a href="mailto:contact@antonioTerreno.com" className="text-gray-600 hover:text-antonio-blue transition-colors">
                      contact@antonioTerreno.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <MapPin className="w-5 h-5 text-antonio-blue mt-1 mr-3" />
                  <div>
                    <p className="font-medium text-antonio-navy">Location</p>
                    <p className="text-gray-600">London, United Kingdom</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Globe className="w-5 h-5 text-antonio-blue mt-1 mr-3" />
                  <div>
                    <p className="font-medium text-antonio-navy">Languages</p>
                    <p className="text-gray-600">English (Native or Bilingual), Italian (Native or Bilingual)</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="glass-card p-8 rounded-xl">
              <h3 className="text-xl font-semibold mb-4 text-antonio-navy">Connect Online</h3>
              <div className="flex flex-wrap gap-4">
                <a 
                  href="https://linkedin.com/in/antonioTerreno" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-12 h-12 rounded-lg bg-[#0077B5] text-white hover:scale-110 transition-transform"
                >
                  <Linkedin size={20} />
                </a>
                <a 
                  href="https://github.com/antonioTerreno" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-12 h-12 rounded-lg bg-[#333] text-white hover:scale-110 transition-transform"
                >
                  <Github size={20} />
                </a>
                {/* Add more social links as needed */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;