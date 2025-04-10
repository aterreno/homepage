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
          <div className="flex flex-col justify-between">
            <div className="glass-card p-8 rounded-xl mb-6">
              <h3 className="text-xl font-semibold mb-4 text-antonio-navy">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <Mail className="w-5 h-5 text-antonio-blue mt-1 mr-3" />
                  <div>
                    <p className="font-medium text-antonio-navy">Email</p>
                    <a href="mailto:antonio.terreno[at]gmail.com" className="text-gray-600 hover:text-antonio-blue transition-colors">
                    antonio.terreno[at]gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <MapPin className="w-5 h-5 text-antonio-blue mt-1 mr-3" />
                  <div>
                    <p className="font-medium text-antonio-navy">Location</p>
                    <p className="text-gray-600">Brighton, United Kingdom</p>
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
                  href="https://linkedin.com/in/antonioterreno" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-12 h-12 rounded-lg bg-[#0077B5] text-white hover:scale-110 transition-transform"
                >
                  <Linkedin size={20} />
                </a>
                <a 
                  href="https://github.com/aterreno" 
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
    </section>
  );
};

export default Contact;