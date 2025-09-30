import { FileText, Calendar, Users, ExternalLink, BookOpen, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Research = () => {
  const currentResearch = [
    {
      title: "Network Infrastructure Optimization and Monitoring",
      status: "Ongoing",
      description: "Continuous research and development in network infrastructure optimization, monitoring systems, and unified communications solutions for enterprise environments.",
      collaborators: ["BBAC Bank IT Team", "Lebanese University Faculty", "Industry Partners"],
      expectedCompletion: "Ongoing",
      funding: "Industry Collaboration, Academic Research"
    },
    {
      title: "Data Analysis and Visualization for Development Projects", 
      status: "Active",
      description: "Research and development in data analysis methodologies, visualization techniques, and dashboard development for project management and reporting in development contexts.",
      collaborators: ["Dorsch Impact GmbH Team", "Field Teams", "Development Partners"],
      expectedCompletion: "Ongoing",
      funding: "Dorsch Impact GmbH, Development Projects"
    }
  ];

  const publications = [
    {
      title: "Copy-Move Forgery Detection using principal component analysis and discrete cosine transform",
      authors: ["A. Hilal", "T. Hamzeh", "S. Chantaf"],
      venue: "International Conference on Sensors, Networks, Smart and Emerging Technologies (SENSET)",
      year: "2017",
      type: "Conference",
      citations: "DOI:10.1109/SENSET.2017.8125021",
      url: "#",
      abstract: "This paper presents a novel approach for copy-move forgery detection using principal component analysis and discrete cosine transform techniques, demonstrating effective detection of image tampering in digital forensics applications."
    }
  ];

  const presentations = [
    {
      title: "Network Infrastructure Management in Banking Sector",
      event: "Lebanese University Technology Conference",
      type: "Academic Presentation",
      location: "Lebanon",
      date: "2023"
    },
    {
      title: "Data Analysis and Visualization in Development Projects",
      event: "Dorsch Impact Internal Workshop",
      type: "Technical Presentation", 
      location: "Hybrid",
      date: "2024"
    },
    {
      title: "Teaching Network Engineering: Practical Approaches",
      event: "MUC University Faculty Development",
      type: "Educational Workshop",
      location: "Mount Lebanon, Lebanon",
      date: "2023"
    }
  ];

  const awards = [
    {
      title: "Research Publication Recognition",
      organization: "SENSET Conference",
      year: "2017",
      description: "Published research paper on copy-move forgery detection using PCA and DCT"
    },
    {
      title: "Academic Excellence", 
      organization: "Lebanese International University",
      year: "2021",
      description: "Successfully completed MBA program with focus on technology management"
    },
    {
      title: "Professional Development",
      organization: "Industry Recognition",
      year: "2024",
      description: "Ongoing contributions to network infrastructure and data analysis in professional settings"
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
              I'm always open to discussing research opportunities, academic partnerships, 
              and collaboration in network engineering, data analysis, and telecommunications.
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