import { useState } from 'react';
import { Button } from '@/components/ui/button';

const Projects = () => {
  const [filter, setFilter] = useState('all');
  
  const projects = [
    {
      title: "Enterprise Network Security Framework",
      category: "professional",
      description: "Designed and implemented a comprehensive security framework for a major banking institution, reducing security incidents by 75% while maintaining system performance.",
      technologies: ["Cisco ASA", "Fortinet", "Python", "SIEM", "Zero Trust"],
      year: "2023",
      status: "Completed"
    },
    {
      title: "5G Network Optimization Research",
      category: "research", 
      description: "Ongoing research project investigating advanced optimization algorithms for 5G network resource allocation and performance enhancement.",
      technologies: ["MATLAB", "Python", "Machine Learning", "5G NR", "Network Simulation"],
      year: "2024",
      status: "In Progress"
    },
    {
      title: "IoT Security Protocol Enhancement",
      category: "academic",
      description: "Developed novel authentication protocols for IoT devices in industrial environments, published in top-tier security conference.",
      technologies: ["Cryptography", "IoT", "Blockchain", "Security Protocols"],
      year: "2023",
      status: "Published"
    },
    {
      title: "Telecom Infrastructure Modernization",
      category: "professional",
      description: "Led the migration of legacy telecom systems to modern cloud-native architecture, improving scalability and reducing operational costs by 40%.",
      technologies: ["AWS", "Kubernetes", "Microservices", "DevOps", "Terraform"],
      year: "2022",
      status: "Completed"
    },
    {
      title: "Network Anomaly Detection System",
      category: "research",
      description: "Machine learning-based system for real-time detection of network anomalies and security threats with 99.2% accuracy rate.",
      technologies: ["Python", "TensorFlow", "Wireshark", "Elasticsearch", "Kibana"],
      year: "2022",
      status: "Completed"
    },
    {
      title: "Smart Grid Communication Security",
      category: "academic",
      description: "Research collaboration on securing communication protocols in smart grid infrastructure, focusing on privacy-preserving data aggregation.",
      technologies: ["Cryptography", "Smart Grid", "Privacy", "Secure Multiparty Computation"],
      year: "2021",
      status: "Published"
    },
    {
      title: "Online Courses Portfolio",
      category: "academic",
      description: "Comprehensive collection of online courses and educational materials showcasing expertise in networking, security, and telecommunications.",
      technologies: ["Education", "Online Learning", "Course Development"],
      year: "2024",
      status: "Active",
      link: "https://www.studocu.com/row/user/taghreed-hamzeh/18936023"
    },
    {
      title: "Copy-Move Forgery Detection Research",
      category: "research",
      description: "Research paper on copy-move forgery detection using principal component analysis and discrete cosine transform, published in IEEE.",
      technologies: ["Image Processing", "PCA", "DCT", "Digital Forensics", "Pattern Recognition"],
      year: "2017",
      status: "Published",
      link: "https://ieeexplore.ieee.org/document/8125021"
    },
    {
      title: "ResearchGate Profile",
      category: "research",
      description: "Academic profile showcasing research publications, collaborations, and professional network in the field of network security and telecommunications.",
      technologies: ["Academic Networking", "Research Publications", "Professional Collaboration"],
      year: "2024",
      status: "Active",
      link: "https://www.researchgate.net/profile/Taghreed-Hamzeh"
    }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  const filters = [
    { id: 'all', label: 'All Projects', count: projects.length },
    { id: 'professional', label: 'Professional', count: projects.filter(p => p.category === 'professional').length },
    { id: 'research', label: 'Research', count: projects.filter(p => p.category === 'research').length },
    { id: 'academic', label: 'Academic', count: projects.filter(p => p.category === 'academic').length }
  ];

  return (
    <main className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="section-title">Projects & Research</h1>
          <p className="subtitle max-w-3xl mx-auto">
            A portfolio of innovative solutions spanning industry applications and academic research
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filterOption) => (
            <button
              key={filterOption.id}
              onClick={() => setFilter(filterOption.id)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                filter === filterOption.id
                  ? 'bg-accent text-accent-foreground'
                  : 'bg-secondary text-secondary-foreground hover:bg-accent/20'
              }`}
            >
              {filterOption.label} ({filterOption.count})
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <div key={index} className="professional-card group hover:shadow-accent/10">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-xl font-playfair font-semibold text-primary">
                      {project.title}
                    </h3>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      project.status === 'Completed' ? 'bg-green-100 text-green-800' :
                      project.status === 'In Progress' ? 'bg-blue-100 text-blue-800' :
                      'bg-purple-100 text-purple-800'
                    }`}>
                      {project.status}
                    </span>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                    <span className="capitalize font-medium text-accent">{project.category}</span>
                    <span>{project.year}</span>
                  </div>
                </div>
              </div>

              <p className="text-muted-foreground mb-4 leading-relaxed">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="mb-6">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-2 py-1 bg-accent/10 text-accent rounded text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Project Link */}
              {project.link && (
                <div className="mt-4">
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-accent hover:text-accent/80 transition-colors font-medium"
                  >
                    <span>View Project</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              )}

            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="professional-card accent-card max-w-2xl mx-auto">
            <h3 className="text-xl font-playfair font-semibold text-primary mb-3">
              Interested in Collaboration?
            </h3>
            <p className="text-muted-foreground mb-6">
              I'm always open to discussing new research opportunities, consulting projects, 
              or academic collaborations in networking and security.
            </p>
            <Button className="btn-accent">
              Get In Touch
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Projects;