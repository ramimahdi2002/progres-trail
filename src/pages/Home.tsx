import { ArrowRight, Download, Mail, Linkedin, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import professionalHeadshot from '@/assets/professional-headshot.jpg';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <main className="relative">
      {/* Hero Section */}
      <section className="min-h-screen relative overflow-hidden">
        {/* Background Gradient */}
        <div className="absolute inset-0 gradient-hero opacity-5"></div>
        
        <div className="container mx-auto px-4 min-h-screen flex items-center">
          <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
            {/* Content */}
            <div className="space-y-8 animate-fade-in">
              <div>
                <h1 className="hero-title mb-6">
                  Dr. Sarah Johnson
                </h1>
                <p className="subtitle mb-6">
                  Senior Networking Specialist | Researcher in Telecom Networks & Security
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
                  Bridging the gap between academic excellence and industry innovation. 
                  Computer Engineering expertise meets Business Administration acumen, 
                  focused on advancing telecommunications security and network infrastructure.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/projects">
                  <Button className="btn-primary group">
                    View My Work
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
                <Button className="btn-outline group">
                  <Download className="mr-2 h-4 w-4" />
                  Download CV
                </Button>
              </div>

              {/* Quick Links */}
              <div className="flex items-center gap-6">
                <a href="mailto:sarah.johnson@email.com" className="text-muted-foreground hover:text-accent transition-colors">
                  <Mail className="h-5 w-5" />
                </a>
                <a href="https://linkedin.com/in/sarahjohnson" className="text-muted-foreground hover:text-accent transition-colors">
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </div>

            {/* Professional Image */}
            <div className="flex justify-center lg:justify-end animate-slide-up">
              <div className="relative">
                <div className="absolute inset-0 gradient-accent rounded-2xl blur-2xl opacity-20 animate-pulse"></div>
                <img
                  src={professionalHeadshot}
                  alt="Dr. Sarah Johnson - Professional Portrait"
                  className="relative w-80 h-96 object-cover rounded-2xl shadow-elegant border-4 border-background"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="h-6 w-6 text-muted-foreground" />
        </div>
      </section>

      {/* Professional Summary Section */}
      <section className="py-20 gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="section-title">Professional Journey</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="professional-card text-center">
                <div className="text-3xl font-bold text-accent mb-2">15+</div>
                <div className="font-medium text-primary mb-2">Years Experience</div>
                <div className="text-sm text-muted-foreground">Networking & Technology</div>
              </div>
              <div className="professional-card accent-card text-center">
                <div className="text-3xl font-bold text-accent mb-2">3</div>
                <div className="font-medium text-primary mb-2">Advanced Degrees</div>
                <div className="text-sm text-muted-foreground">Computer Engineering & Business</div>
              </div>
              <div className="professional-card text-center">
                <div className="text-3xl font-bold text-accent mb-2">25+</div>
                <div className="font-medium text-primary mb-2">Research Papers</div>
                <div className="text-sm text-muted-foreground">Telecom Security & Networks</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;