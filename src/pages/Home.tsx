import { ArrowRight, Download, Mail, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <main className="relative">
      {/* Hero Section */}
      <section className="min-h-screen relative overflow-hidden">
        {/* Background Gradient */}
        <div className="absolute inset-0 gradient-hero opacity-5"></div>
        
        <div className="container mx-auto px-4 min-h-screen flex items-center">
          <div className="w-full max-w-4xl mx-auto">
            {/* Content */}
            <div className="space-y-8 text-center">
              <div className="animate-fade-in">
                <h1 className="hero-title mb-6 animate-slide-up">
                  Taghreed H. Hamzeh
                </h1>
                <p className="subtitle mb-6 animate-slide-up" style={{ animationDelay: '0.2s' }}>
                  Network & Telecom Engineer | University Instructor | MBA
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '0.4s' }}>
                  Network and Telecom Engineer with over 6 years of experience in enterprise infrastructure, unified communications, and academic instruction. Proven expertise in Cisco Unified Communications, network design, IP telephony, and data systems. Dedicated university instructor with a passion for mentoring and bridging IT with strategic goals.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: '0.6s' }}>
                <Link to="/projects">
                  <Button className="btn-primary group hover:scale-105 transition-all duration-300">
                    View My Work
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
                <a 
                  href="/src/assets/Taghreed Hamzeh CV 2025.pdf" 
                  download="Taghreed_Hamzeh_CV_2025.pdf"
                  className="relative z-10"
                  style={{ pointerEvents: 'auto' }}
                >
                  <Button className="btn-outline group cursor-pointer hover:scale-105 transition-all duration-300">
                    <Download className="mr-2 h-4 w-4" />
                    Download CV
                  </Button>
                </a>
              </div>

              {/* Quick Links */}
              <div className="flex items-center gap-6 relative z-10 justify-center animate-fade-in" style={{ animationDelay: '0.8s' }}>
                <a 
                  href="mailto:taghreed_hamzeh@outlook.com" 
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-muted-foreground hover:text-accent hover:bg-accent/10 transition-all duration-300 border border-transparent hover:border-accent/20 cursor-pointer hover:scale-105"
                  title="Send email to Taghreed"
                  style={{ pointerEvents: 'auto' }}
                >
                  <Mail className="h-5 w-5" />
                  <span className="text-sm font-medium">Email</span>
                </a>
                <a 
                  href="https://www.linkedin.com/in/taghreed-hamzeh-29b128137" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-muted-foreground hover:text-accent hover:bg-accent/10 transition-all duration-300 border border-transparent hover:border-accent/20 cursor-pointer hover:scale-105"
                  title="Visit Taghreed's LinkedIn profile"
                  style={{ pointerEvents: 'auto' }}
                >
                  <Linkedin className="h-5 w-5" />
                  <span className="text-sm font-medium">LinkedIn</span>
                </a>
              </div>
            </div>
          </div>
        </div>

      </section>

      {/* Professional Summary Section */}
      <section className="py-20 gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="section-title animate-fade-in">Professional Journey</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="professional-card text-center animate-slide-up hover:scale-105 transition-all duration-300" style={{ animationDelay: '0.2s' }}>
                <div className="text-3xl font-bold text-accent mb-2">6+</div>
                <div className="font-medium text-primary mb-2">Years Experience</div>
                <div className="text-sm text-muted-foreground">Network & Telecom Engineering</div>
              </div>
              <div className="professional-card accent-card text-center animate-slide-up hover:scale-105 transition-all duration-300" style={{ animationDelay: '0.4s' }}>
                <div className="text-3xl font-bold text-accent mb-2">3</div>
                <div className="font-medium text-primary mb-2">Advanced Degrees</div>
                <div className="text-sm text-muted-foreground">Engineering & Business Administration</div>
              </div>
              <div className="professional-card text-center animate-slide-up hover:scale-105 transition-all duration-300" style={{ animationDelay: '0.6s' }}>
                <div className="text-3xl font-bold text-accent mb-2">1</div>
                <div className="font-medium text-primary mb-2">Research Publication</div>
                <div className="text-sm text-muted-foreground">Copy-Move Forgery Detection</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;