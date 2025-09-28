import { Building, Users, GraduationCap, Award, Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "Senior Networking Specialist",
      company: "International Banking Corporation",
      location: "New York, NY",
      period: "2022 - Present",
      type: "Full-time",
      description: "Lead enterprise network architecture and security initiatives for a Fortune 500 financial institution with global operations.",
      responsibilities: [
        "Architect and implement enterprise-scale network infrastructure supporting 50,000+ users across 25 countries",
        "Design and deploy advanced security protocols, reducing network vulnerabilities by 80%",
        "Lead cross-functional teams of 15+ engineers in major infrastructure modernization projects",
        "Manage $2M+ annual network infrastructure budget with consistent cost optimization",
        "Establish disaster recovery and business continuity protocols meeting regulatory requirements"
      ],
      achievements: [
        "Reduced network downtime from 99.9% to 99.99% uptime",
        "Implemented zero-trust architecture ahead of industry standards",
        "Led successful migration to hybrid cloud infrastructure",
        "Received 'Excellence in Innovation' award 2023"
      ],
      technologies: ["Cisco Systems", "Fortinet", "AWS", "Azure", "Python", "Terraform"]
    },
    {
      title: "Data Entry Specialist & Data Analyst",
      company: "Global Health Initiative NGO",
      location: "Remote",
      period: "2020 - Present",
      type: "Part-time",
      description: "Provide data management and analytical support for international health programs serving underserved populations.",
      responsibilities: [
        "Manage and analyze large-scale health data sets from 15+ developing countries",
        "Develop automated data processing pipelines reducing manual effort by 70%",
        "Create comprehensive reports and visualizations for stakeholders and donors",
        "Ensure data quality and compliance with international privacy regulations",
        "Train local staff in data collection and management best practices"
      ],
      achievements: [
        "Improved data accuracy from 85% to 98% through process optimization",
        "Designed dashboard system used by 200+ field workers",
        "Contributed to 3 published research papers on global health metrics"
      ],
      technologies: ["Python", "R", "Tableau", "Power BI", "SQL", "Excel"]
    },
    {
      title: "University Lecturer",
      company: "State University Computer Engineering Department",
      location: "Boston, MA",
      period: "2016 - 2022",
      type: "Part-time",
      description: "Taught undergraduate and graduate courses in computer networking, systems architecture, and cybersecurity.",
      responsibilities: [
        "Delivered lectures to 150+ students per semester in networking fundamentals and advanced topics",
        "Developed curriculum for new cybersecurity concentration program",
        "Supervised 25+ undergraduate research projects and 8 graduate theses",
        "Mentored students in career development and graduate school applications",
        "Collaborated with industry partners on curriculum modernization initiatives"
      ],
      achievements: [
        "Received 'Outstanding Faculty Award' in 2019 and 2021",
        "Maintained 4.8/5 student evaluation rating across all courses",
        "92% of supervised students secured positions at top tech companies or graduate programs",
        "Co-authored 12 peer-reviewed publications with student collaborators"
      ],
      technologies: ["Network Simulation", "MATLAB", "Python", "Packet Tracer", "Wireshark"]
    },
    {
      title: "Network Systems Engineer",
      company: "TechFlow Solutions",
      location: "San Francisco, CA", 
      period: "2014 - 2018",
      type: "Full-time",
      description: "Designed and implemented network solutions for mid-market clients across various industries.",
      responsibilities: [
        "Designed custom network architectures for 50+ client organizations",
        "Implemented security solutions including firewalls, VPNs, and intrusion detection systems",
        "Provided technical consulting on network optimization and modernization projects",
        "Managed client relationships and technical support for ongoing projects",
        "Developed standard operating procedures and documentation"
      ],
      achievements: [
        "Achieved 98% client satisfaction rating across all projects",
        "Reduced average project delivery time by 30% through process improvements",
        "Generated $1.5M in additional revenue through upselling security services"
      ],
      technologies: ["Cisco", "Juniper", "pfSense", "VMware", "Linux", "Windows Server"]
    }
  ];

  return (
    <main className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="section-title">Professional Experience</h1>
          <p className="subtitle max-w-3xl mx-auto">
            A career spanning academic excellence, industry leadership, and social impact
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <div key={index} className="timeline-item">
              <div className="professional-card">
                {/* Header */}
                <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-6">
                  <div className="flex-1">
                    <h3 className="text-2xl font-playfair font-semibold text-primary mb-2">
                      {exp.title}
                    </h3>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Building className="h-4 w-4 text-accent" />
                        <span className="font-medium">{exp.company}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-accent" />
                        <span>{exp.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-accent" />
                        <span>{exp.period}</span>
                      </div>
                      <span className="px-2 py-1 bg-accent/10 text-accent rounded text-sm">
                        {exp.type}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {exp.description}
                </p>

                {/* Responsibilities & Achievements */}
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="font-semibold text-primary mb-3 flex items-center gap-2">
                      <Users className="h-4 w-4 text-accent" />
                      Key Responsibilities
                    </h4>
                    <ul className="space-y-2">
                      {exp.responsibilities.map((resp, respIndex) => (
                        <li key={respIndex} className="text-sm text-muted-foreground flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0"></span>
                          {resp}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-primary mb-3 flex items-center gap-2">
                      <Award className="h-4 w-4 text-accent" />
                      Key Achievements
                    </h4>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="text-sm text-muted-foreground flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0"></span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Technologies */}
                <div>
                  <h4 className="font-semibold text-primary mb-3">Technologies & Tools</h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Summary Stats */}
        <div className="mt-20">
          <div className="gradient-subtle rounded-2xl p-8">
            <h2 className="text-2xl font-playfair font-semibold text-primary mb-8 text-center">
              Career Highlights
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-accent mb-2">15+</div>
                <div className="font-medium text-primary">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent mb-2">200+</div>
                <div className="font-medium text-primary">Students Taught</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent mb-2">$5M+</div>
                <div className="font-medium text-primary">Projects Managed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent mb-2">50+</div>
                <div className="font-medium text-primary">Organizations Served</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Experience;