import { useState } from 'react';
import { Mail, Phone, MapPin, Linkedin, Send, Download, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Message sent successfully!",
      description: "Thank you for your message. I'll get back to you soon.",
    });
    
    setFormData({ name: '', email: '', subject: '', message: '' });
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5" />,
      label: "Email",
      value: "sarah.johnson@university.edu",
      link: "mailto:sarah.johnson@university.edu"
    },
    {
      icon: <Phone className="h-5 w-5" />,
      label: "Phone", 
      value: "+1 (555) 123-4567",
      link: "tel:+15551234567"
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      label: "Location",
      value: "Boston, MA | Paris, France",
      link: null
    },
    {
      icon: <Linkedin className="h-5 w-5" />,
      label: "LinkedIn",
      value: "linkedin.com/in/sarahjohnson",
      link: "https://linkedin.com/in/sarahjohnson"
    }
  ];

  const opportunities = [
    {
      title: "Research Collaboration",
      description: "Academic partnerships, joint research projects, and co-authorship opportunities in network security and telecommunications."
    },
    {
      title: "Consulting Services",
      description: "Expert consultation on enterprise network architecture, security implementation, and technology strategy."
    },
    {
      title: "Speaking Engagements",
      description: "Conference presentations, keynote speeches, and technical workshops on networking and cybersecurity topics."
    },
    {
      title: "PhD Supervision",
      description: "Opportunities for PhD students interested in network security, privacy-preserving technologies, and 5G/6G research."
    }
  ];

  return (
    <main className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="section-title">Get In Touch</h1>
          <p className="subtitle max-w-3xl mx-auto">
            Let's discuss research collaborations, consulting opportunities, or academic partnerships
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div className="lg:col-span-1 space-y-8">
              {/* Contact Details */}
              <div className="professional-card">
                <h3 className="text-xl font-playfair font-semibold text-primary mb-6">
                  Contact Information
                </h3>
                <div className="space-y-4">
                  {contactInfo.map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-accent/10 text-accent">
                        {item.icon}
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-medium text-primary">{item.label}</p>
                        {item.link ? (
                          <a 
                            href={item.link}
                            className="text-sm text-muted-foreground hover:text-accent transition-colors"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-sm text-muted-foreground">{item.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Actions */}
              <div className="professional-card">
                <h3 className="text-xl font-playfair font-semibold text-primary mb-6">
                  Quick Actions
                </h3>
                <div className="space-y-3">
                  <Button className="w-full btn-accent justify-start">
                    <Download className="mr-2 h-4 w-4" />
                    Download CV
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Calendar className="mr-2 h-4 w-4" />
                    Schedule Meeting
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Linkedin className="mr-2 h-4 w-4" />
                    Connect on LinkedIn
                  </Button>
                </div>
              </div>

              {/* Availability */}
              <div className="professional-card accent-card">
                <h3 className="text-lg font-semibold text-primary mb-3">Current Availability</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  I'm currently based between Boston and Paris, available for:
                </p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Research collaboration meetings</li>
                  <li>• Consulting engagements</li> 
                  <li>• Conference presentations</li>
                  <li>• Academic supervision</li>
                </ul>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="professional-card">
                <h3 className="text-xl font-playfair font-semibold text-primary mb-6">
                  Send a Message
                </h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-primary mb-2">
                        Full Name *
                      </label>
                      <Input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        placeholder="Your full name"
                        className="w-full"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-primary mb-2">
                        Email Address *
                      </label>
                      <Input
                        type="email"
                        name="email" 
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        placeholder="your.email@example.com"
                        className="w-full"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-primary mb-2">
                      Subject *
                    </label>
                    <Input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      placeholder="Brief subject of your inquiry"
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-primary mb-2">
                      Message *
                    </label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      placeholder="Please describe your inquiry in detail..."
                      className="w-full resize-none"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="btn-primary w-full md:w-auto"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </div>
            </div>
          </div>

          {/* Collaboration Opportunities */}
          <section className="mt-20">
            <h2 className="text-2xl font-playfair font-semibold text-primary mb-12 text-center">
              Collaboration Opportunities
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {opportunities.map((opp, index) => (
                <div key={index} className="professional-card">
                  <h3 className="text-lg font-semibold text-primary mb-3">{opp.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{opp.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Response Time */}
          <div className="mt-16 text-center">
            <div className="professional-card accent-card max-w-2xl mx-auto">
              <h3 className="text-lg font-semibold text-primary mb-3">Response Time</h3>
              <p className="text-muted-foreground">
                I typically respond to messages within 24-48 hours during business days. 
                For urgent matters, please indicate the priority in your subject line.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Contact;