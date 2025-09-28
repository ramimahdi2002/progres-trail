import { FileText, Calendar, Users, ExternalLink, BookOpen, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Research = () => {
  const currentResearch = [
    {
      title: "Privacy-Preserving Authentication Mechanisms for 5G Network Slicing",
      status: "In Progress",
      description: "Developing novel cryptographic protocols that enable secure authentication in 5G network slices while preserving user privacy and maintaining network performance.",
      collaborators: ["Dr. Michel Dubois (Supélec)", "Prof. Sarah Chen (MIT)", "Industry: Orange Labs"],
      expectedCompletion: "2024",
      funding: "NSF Graduate Fellowship, Orange Research Grant"
    },
    {
      title: "Machine Learning Approaches for Proactive Network Security", 
      status: "Preparing Publication",
      description: "Investigating advanced ML algorithms for predicting and preventing network security incidents before they occur, with focus on explainable AI for network operations.",
      collaborators: ["Dr. James Wilson (Stanford)", "Prof. Lisa Rodriguez (Berkeley)"],
      expectedCompletion: "2024",
      funding: "NSF CAREER Award"
    }
  ];

  const publications = [
    {
      title: "Scalable Intrusion Detection for Cloud-Native Architectures: A Deep Learning Approach",
      authors: ["S. Johnson", "M. Chen", "P. Davis"],
      venue: "IEEE Symposium on Security and Privacy (Oakland)",
      year: "2024",
      type: "Conference",
      citations: 42,
      url: "#",
      abstract: "This paper presents a novel deep learning framework for real-time intrusion detection in cloud-native environments, achieving 99.7% accuracy with minimal false positives."
    },
    {
      title: "Privacy-Preserving Network Analytics Using Federated Learning",
      authors: ["S. Johnson", "A. Kumar", "R. Thompson"],
      venue: "ACM SIGCOMM",
      year: "2023", 
      type: "Conference",
      citations: 67,
      url: "#",
      abstract: "We propose a federated learning approach for network analytics that preserves privacy while maintaining analytical accuracy across distributed network environments."
    },
    {
      title: "Zero-Trust Architecture Implementation in Enterprise Banking Networks",
      authors: ["S. Johnson", "L. Williams"],
      venue: "IEEE Transactions on Network and Service Management",
      year: "2023",
      type: "Journal",
      citations: 28,
      url: "#",
      abstract: "A comprehensive study of zero-trust implementation challenges and solutions in high-security banking environments, with detailed performance analysis."
    },
    {
      title: "Advanced Threat Detection in 5G Networks Using Graph Neural Networks",
      authors: ["S. Johnson", "K. Patel", "N. Singh", "M. Brown"],
      venue: "USENIX Security Symposium",
      year: "2022",
      type: "Conference", 
      citations: 89,
      url: "#",
      abstract: "Novel application of graph neural networks for threat detection in 5G network architectures, demonstrating superior performance over traditional methods."
    },
    {
      title: "IoT Security Protocol Enhancement Through Blockchain Integration",
      authors: ["S. Johnson", "D. Lee"],
      venue: "ACM Transactions on Internet of Things",
      year: "2022",
      type: "Journal",
      citations: 156,
      url: "#",
      abstract: "Comprehensive framework for enhancing IoT security through selective blockchain integration, balancing security with performance requirements."
    }
  ];

  const presentations = [
    {
      title: "Future Directions in Network Security: From 5G to 6G",
      event: "IEEE Network Security Conference 2024",
      type: "Keynote Speaker",
      location: "San Francisco, CA",
      date: "March 2024"
    },
    {
      title: "Privacy-Preserving Technologies in Modern Networks",
      event: "ACM Privacy Engineering Workshop",
      type: "Invited Talk", 
      location: "Virtual",
      date: "February 2024"
    },
    {
      title: "Bridging Academic Research and Industry Practice in Cybersecurity",
      event: "MIT Industry Connect Symposium",
      type: "Panel Discussion",
      location: "Cambridge, MA",
      date: "January 2024"
    }
  ];

  const awards = [
    {
      title: "Outstanding Young Researcher Award",
      organization: "IEEE Communications Society",
      year: "2023",
      description: "Recognition for significant contributions to network security research"
    },
    {
      title: "Best Paper Award", 
      organization: "USENIX Security Symposium",
      year: "2022",
      description: "For 'Advanced Threat Detection in 5G Networks Using Graph Neural Networks'"
    },
    {
      title: "NSF CAREER Award",
      organization: "National Science Foundation",
      year: "2021",
      description: "Five-year research funding for 'Privacy-Preserving Network Analytics'"
    }
  ];

  return (
    <main className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="section-title">Research & Publications</h1>
          <p className="subtitle max-w-3xl mx-auto">
            Advancing the frontiers of network security, privacy, and telecommunications through rigorous research
          </p>
        </div>

        {/* Current Research Projects */}
        <section className="mb-20">
          <h2 className="text-2xl font-playfair font-semibold text-primary mb-8">
            Current Research Projects
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {currentResearch.map((project, index) => (
              <div key={index} className="professional-card accent-card">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-playfair font-semibold text-primary flex-1">
                    {project.title}
                  </h3>
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium ml-4">
                    {project.status}
                  </span>
                </div>
                
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="space-y-3 text-sm">
                  <div className="flex items-start gap-2">
                    <Users className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-medium text-primary">Collaborators: </span>
                      <span className="text-muted-foreground">{project.collaborators.join(', ')}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-accent flex-shrink-0" />
                    <span className="text-muted-foreground">Expected Completion: {project.expectedCompletion}</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Award className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-medium text-primary">Funding: </span>
                      <span className="text-muted-foreground">{project.funding}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Publications */}
        <section className="mb-20">
          <h2 className="text-2xl font-playfair font-semibold text-primary mb-8">
            Selected Publications
          </h2>
          
          <div className="space-y-6">
            {publications.map((pub, index) => (
              <div key={index} className="professional-card hover:shadow-accent/10">
                <div className="flex flex-col lg:flex-row lg:items-start gap-4">
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-lg font-medium text-primary leading-tight flex-1">
                        {pub.title}
                      </h3>
                      <div className="flex items-center gap-3 ml-4">
                        <span className={`px-2 py-1 rounded text-xs font-medium ${
                          pub.type === 'Conference' ? 'bg-blue-100 text-blue-800' : 'bg-green-100 text-green-800'
                        }`}>
                          {pub.type}
                        </span>
                        <span className="text-sm text-muted-foreground">{pub.year}</span>
                      </div>
                    </div>
                    
                    <p className="text-sm text-accent font-medium mb-2">{pub.authors.join(', ')}</p>
                    <p className="text-sm font-medium text-primary mb-3">{pub.venue}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">{pub.abstract}</p>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">
                        Citations: <span className="font-medium text-accent">{pub.citations}</span>
                      </span>
                      <Button variant="outline" size="sm">
                        <ExternalLink className="mr-2 h-3 w-3" />
                        View Paper
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Presentations */}
        <section className="mb-20">
          <h2 className="text-2xl font-playfair font-semibold text-primary mb-8">
            Recent Presentations & Talks
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {presentations.map((pres, index) => (
              <div key={index} className="professional-card">
                <h3 className="font-medium text-primary mb-2">{pres.title}</h3>
                <p className="text-accent font-medium text-sm mb-1">{pres.event}</p>
                <p className="text-muted-foreground text-sm mb-2">{pres.type}</p>
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <span>{pres.location}</span>
                  <span>{pres.date}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Awards & Recognition */}
        <section>
          <h2 className="text-2xl font-playfair font-semibold text-primary mb-8">
            Awards & Recognition
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {awards.map((award, index) => (
              <div key={index} className="professional-card accent-card text-center">
                <Award className="h-8 w-8 text-accent mx-auto mb-3" />
                <h3 className="font-semibold text-primary mb-2">{award.title}</h3>
                <p className="text-accent font-medium text-sm mb-1">{award.organization}</p>
                <p className="text-muted-foreground text-sm mb-3">{award.year}</p>
                <p className="text-xs text-muted-foreground leading-relaxed">{award.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="professional-card max-w-2xl mx-auto">
            <h3 className="text-xl font-playfair font-semibold text-primary mb-3">
              Interested in Research Collaboration?
            </h3>
            <p className="text-muted-foreground mb-6">
              I'm always open to discussing research opportunities, joint publications, 
              and academic partnerships in networking security and telecommunications.
            </p>
            <Button className="btn-accent">
              <BookOpen className="mr-2 h-4 w-4" />
              Contact for Collaboration
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Research;