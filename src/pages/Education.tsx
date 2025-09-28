import { GraduationCap, Award, BookOpen, Users, Calendar, MapPin } from 'lucide-react';

const Education = () => {
  const education = [
    {
      degree: "M2 Research Program",
      field: "Telecommunications Networks & Security",
      institution: "École Supérieure d'Électricité (Supélec)",
      location: "Paris, France",
      period: "2024 - Present",
      status: "In Progress",
      gpa: "Current: 3.9/4.0",
      description: "Advanced research program focusing on next-generation telecommunications security, 5G/6G network optimization, and machine learning applications in network management.",
      coursework: [
        "Advanced Network Security Protocols",
        "5G/6G Network Architecture",
        "Machine Learning for Networks",
        "Cryptographic Systems Design",
        "Research Methodology & Ethics"
      ],
      research: "Developing novel security frameworks for 5G network slicing with emphasis on privacy-preserving authentication mechanisms.",
      achievements: [
        "Research assistantship with full funding",
        "Presented preliminary findings at IEEE Network Security Conference 2024",
        "Collaboration with industry partners including Orange and Ericsson"
      ]
    },
    {
      degree: "Master of Science",
      field: "Business Administration",
      institution: "MIT Sloan School of Management",
      location: "Cambridge, MA",
      period: "2018 - 2020",
      status: "Graduated Magna Cum Laude",
      gpa: "3.8/4.0",
      description: "Strategic business education with focus on technology management, innovation leadership, and organizational transformation in the digital age.",
      coursework: [
        "Strategic Technology Management",
        "Innovation and Entrepreneurship",
        "Financial Management",
        "Operations and Supply Chain Management",
        "Leadership and Organizational Behavior",
        "Digital Transformation"
      ],
      capstone: "Led team project developing go-to-market strategy for 5G enterprise solutions, resulting in partnership with major telecom provider.",
      achievements: [
        "Dean's List for 3 consecutive semesters",
        "MBA Academic Excellence Award",
        "President, Technology Management Club",
        "Winner, MIT $100K Business Plan Competition (team category)"
      ]
    },
    {
      degree: "Master of Science",
      field: "Computer Engineering",
      institution: "Stanford University",
      location: "Stanford, CA",
      period: "2014 - 2016",
      status: "Graduated Summa Cum Laude",
      gpa: "3.95/4.0",
      description: "Specialized in network systems architecture, distributed computing, and cybersecurity with emphasis on large-scale system design.",
      coursework: [
        "Advanced Computer Networks",
        "Distributed Systems",
        "Network Security",
        "Machine Learning Systems",
        "Computer Systems Architecture",
        "Cryptography and Security"
      ],
      thesis: "Scalable Intrusion Detection for Cloud-Native Architectures: A Machine Learning Approach",
      achievements: [
        "Outstanding Graduate Student Award",
        "NSF Graduate Research Fellowship",
        "Published 3 papers in top-tier conferences (SIGCOMM, NDSS, USENIX Security)",
        "Teaching Assistant for CS244: Advanced Topics in Networking"
      ]
    },
    {
      degree: "Bachelor of Science",
      field: "Computer Engineering",
      institution: "University of California, Berkeley",
      location: "Berkeley, CA", 
      period: "2010 - 2014",
      status: "Graduated Summa Cum Laude",
      gpa: "3.92/4.0",
      description: "Comprehensive foundation in computer systems, software engineering, and electrical engineering with focus on networking and communications.",
      coursework: [
        "Computer Networks",
        "Operating Systems",
        "Computer Architecture",
        "Algorithms and Data Structures",
        "Digital Signal Processing",
        "Software Engineering"
      ],
      capstone: "Design and implementation of a distributed network monitoring system for campus-wide deployment.",
      achievements: [
        "Phi Beta Kappa Honor Society",
        "Electrical Engineering and Computer Sciences Department Citation",
        "President, IEEE Student Branch",
        "Undergraduate Research Opportunity Program (UROP) Scholar"
      ]
    }
  ];

  const additionalEducation = [
    {
      title: "Executive Certificate in Digital Leadership",
      institution: "Harvard Business School",
      year: "2021",
      description: "Intensive program on leading digital transformation initiatives in large organizations."
    },
    {
      title: "Cybersecurity for Critical Infrastructure",
      institution: "Carnegie Mellon University",
      year: "2020",
      description: "Specialized training in protecting critical national infrastructure from cyber threats."
    },
    {
      title: "Advanced Network Security Certification",
      institution: "SANS Institute",
      year: "2019",
      description: "Hands-on training in enterprise network security, penetration testing, and incident response."
    }
  ];

  return (
    <main className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="section-title">Education & Academic Excellence</h1>
          <p className="subtitle max-w-3xl mx-auto">
            A rigorous academic journey across leading institutions, building expertise in technology and business
          </p>
        </div>

        {/* Academic Degrees */}
        <div className="max-w-4xl mx-auto mb-20">
          {education.map((edu, index) => (
            <div key={index} className="timeline-item">
              <div className="professional-card">
                {/* Header */}
                <div className="flex flex-col lg:flex-row lg:items-start justify-between mb-6">
                  <div className="flex-1">
                    <h3 className="text-2xl font-playfair font-semibold text-primary mb-2">
                      {edu.degree}
                    </h3>
                    <p className="text-lg font-medium text-accent mb-3">{edu.field}</p>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-muted-foreground mb-4">
                      <div className="flex items-center gap-2">
                        <GraduationCap className="h-4 w-4 text-accent" />
                        <span className="font-medium">{edu.institution}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-accent" />
                        <span>{edu.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-accent" />
                        <span>{edu.period}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-end gap-2">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      edu.status.includes('Progress') ? 'bg-blue-100 text-blue-800' :
                      edu.status.includes('Magna') || edu.status.includes('Summa') ? 'bg-gold-100 text-gold-800' :
                      'bg-green-100 text-green-800'
                    }`}>
                      {edu.status}
                    </span>
                    <span className="text-sm font-medium text-accent">{edu.gpa}</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {edu.description}
                </p>

                {/* Academic Details */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-primary mb-3 flex items-center gap-2">
                      <BookOpen className="h-4 w-4 text-accent" />
                      Key Coursework
                    </h4>
                    <ul className="space-y-1">
                      {edu.coursework.map((course, courseIndex) => (
                        <li key={courseIndex} className="text-sm text-muted-foreground flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0"></span>
                          {course}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-primary mb-3 flex items-center gap-2">
                      <Award className="h-4 w-4 text-accent" />
                      Achievements & Recognition
                    </h4>
                    <ul className="space-y-1">
                      {edu.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="text-sm text-muted-foreground flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0"></span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Research/Thesis */}
                {(edu.research || edu.thesis || edu.capstone) && (
                  <div className="mt-6 pt-6 border-t border-border">
                    <h4 className="font-semibold text-primary mb-2">
                      {edu.research ? 'Current Research' : edu.thesis ? 'Master\'s Thesis' : 'Capstone Project'}
                    </h4>
                    <p className="text-sm text-muted-foreground italic">
                      {edu.research || edu.thesis || edu.capstone}
                    </p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Education & Certifications */}
        <section>
          <h2 className="text-2xl font-playfair font-semibold text-primary mb-12 text-center">
            Continuing Education & Professional Development
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {additionalEducation.map((cert, index) => (
              <div key={index} className="professional-card accent-card text-center">
                <h3 className="font-semibold text-primary mb-3">{cert.title}</h3>
                <p className="text-accent font-medium mb-2">{cert.institution}</p>
                <p className="text-sm text-muted-foreground mb-3">{cert.year}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{cert.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Academic Summary */}
        <div className="mt-20">
          <div className="gradient-subtle rounded-2xl p-8">
            <h2 className="text-2xl font-playfair font-semibold text-primary mb-8 text-center">
              Academic Excellence Summary
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-accent mb-2">3.9</div>
                <div className="font-medium text-primary">Cumulative GPA</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent mb-2">4</div>
                <div className="font-medium text-primary">Degrees Earned</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent mb-2">15+</div>
                <div className="font-medium text-primary">Academic Awards</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent mb-2">25+</div>
                <div className="font-medium text-primary">Research Publications</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Education;