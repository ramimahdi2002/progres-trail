import { Mail, Phone, MapPin, Linkedin, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Contact = () => {

  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5" />,
      label: "Email",
      value: "taghreed_hamzeh@outlook.com",
      link: "mailto:taghreed_hamzeh@outlook.com"
    },
    {
      icon: <Phone className="h-5 w-5" />,
      label: "Phone", 
      value: "(961)71517824",
      link: "tel:+96171517824"
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      label: "Location",
      value: "Mount Lebanon, Lebanon",
      link: null
    },
    {
      icon: <Linkedin className="h-5 w-5" />,
      label: "LinkedIn",
      value: "linkedin.com/in/taghreed-hamzeh-29b128137",
      link: "https://www.linkedin.com/in/taghreed-hamzeh-29b128137"
    }
  ];

  const opportunities = [
    {
      title: "Research Collaboration",
      description: "Academic partnerships, joint research projects, and collaboration opportunities in network engineering and data analysis."
    },
    {
      title: "Consulting Services",
      description: "Expert consultation on network infrastructure, unified communications, and data analysis for enterprise environments."
    },
    {
      title: "Teaching Opportunities",
      description: "Academic instruction, curriculum development, and mentorship in networking, Linux, and programming fundamentals."
    },
    {
      title: "Professional Development",
      description: "Training and workshops on Cisco Unified Communications, network monitoring, and data visualization techniques."
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
          <div className="grid lg:grid-cols-2 gap-8 items-stretch">
            {/* Left Column: Contact Information */}
            <div className="flex">
              <div className="professional-card w-full flex flex-col">
                <h3 className="text-xl font-heading font-semibold text-primary mb-6">
                  Contact Information
                </h3>
                <div className="space-y-4 flex-1">
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
            </div>

            {/* Right Column: Current Availability and Quick Actions */}
            <div className="flex flex-col space-y-6">
              {/* Current Availability */}
              <div className="professional-card accent-card flex-1">
                <h3 className="text-lg font-heading font-semibold text-primary mb-3">Current Availability</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  I'm currently based in Mount Lebanon, Lebanon, available for:
                </p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Network infrastructure consulting</li>
                  <li>• Academic teaching opportunities</li> 
                  <li>• Data analysis projects</li>
                  <li>• Professional development workshops</li>
                </ul>
              </div>

              {/* Quick Actions */}
              <div className="professional-card">
                <h3 className="text-xl font-heading font-semibold text-primary mb-6">
                  Quick Actions
                </h3>
                <div className="space-y-3">
                  <a href="/src/assets/Taghreed Hamzeh CV 2025.pdf" download="Taghreed_Hamzeh_CV_2025.pdf">
                    <Button className="w-full btn-accent justify-start">
                      <Download className="mr-2 h-4 w-4" />
                      Download CV
                    </Button>
                  </a>
                  <a href="https://www.linkedin.com/in/taghreed-hamzeh-29b128137" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" className="w-full justify-start">
                      <Linkedin className="mr-2 h-4 w-4" />
                      Connect on LinkedIn
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Collaboration Opportunities */}
          <section className="mt-20">
            <h2 className="text-2xl font-heading font-semibold text-primary mb-12 text-center">
              Collaboration Opportunities
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {opportunities.map((opp, index) => (
                <div key={index} className="professional-card">
                  <h3 className="text-lg font-heading font-semibold text-primary mb-3">{opp.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{opp.description}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </main>
  );
};

export default Contact;