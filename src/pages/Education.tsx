import { GraduationCap, Award, BookOpen, Users, Calendar, MapPin } from 'lucide-react';

const Education = () => {
  const education = [
    {
      degree: "M2 Research in Telecom, Networks and Security",
      field: "Telecommunications, Networks and Security",
      institution: "Partnership between Saint Joseph University of Beirut (USJ) and Lebanese University – Faculty of Engineering",
      location: "Lebanon",
      period: "2025 – 2026",
      status: "In Progress",
      gpa: "Current",
      description: "Advanced research program focusing on telecommunications, network security, and emerging technologies in partnership between two leading Lebanese universities.",
      coursework: [
        "Advanced Telecommunications Systems",
        "Network Security Protocols",
        "Research Methodology",
        "Emerging Technologies",
        "Academic Research",
        "Thesis Development"
      ],
      research: "Currently pursuing advanced research in telecommunications, networks, and security with focus on practical applications and academic excellence.",
      achievements: [
        "Enrolled in prestigious partnership program",
        "Combining theoretical knowledge with practical research",
        "Building expertise in cutting-edge telecommunications"
      ]
    },
    {
      degree: "MBA – General Business Administration",
      field: "Business Administration",
      institution: "Lebanese International University",
      location: "Lebanon",
      period: "2021 - 2023",
      status: "Graduated",
      gpa: "Completed",
      description: "Strategic business education with focus on technology management, innovation leadership, and organizational transformation in the digital age.",
      coursework: [
        "Strategic Management",
        "Financial Management",
        "Operations Management",
        "Marketing Management",
        "Leadership and Organizational Behavior",
        "Business Strategy"
      ],
      capstone: "Integrated technical expertise with business strategy, focusing on technology management and organizational leadership.",
      achievements: [
        "Successfully completed MBA program",
        "Integrated technical background with business acumen",
        "Enhanced leadership and management skills"
      ]
    },
    {
      degree: "MS in Communication & Computer Engineering (MCCE)",
      field: "Communication & Computer Engineering",
      institution: "Lebanese International University",
      location: "Lebanon",
      period: "2018 - 2021",
      status: "Graduated",
      gpa: "Completed",
      description: "Advanced study in communication systems, computer engineering, and network technologies with emphasis on practical applications.",
      coursework: [
        "Advanced Communication Systems",
        "Computer Networks",
        "Network Security",
        "Digital Signal Processing",
        "Computer Architecture",
        "Telecommunications"
      ],
      thesis: "Advanced studies in communication and computer engineering with focus on network systems and telecommunications.",
      achievements: [
        "Successfully completed Master's program",
        "Advanced knowledge in communication systems",
        "Enhanced technical expertise in computer engineering"
      ]
    },
    {
      degree: "BS in Communication & Computer Networks Engineering (CCNE)",
      field: "Communication & Computer Networks Engineering",
      institution: "Lebanese University (LU), Faculty Of Technology",
      location: "Lebanon",
      period: "2014 - 2017",
      status: "Graduated",
      gpa: "Completed",
      description: "Comprehensive foundation in computer systems, networking, and communications engineering with focus on practical applications.",
      coursework: [
        "Computer Networks",
        "Communication Systems",
        "Computer Architecture",
        "Programming Fundamentals",
        "Network Security",
        "Telecommunications"
      ],
      capstone: "Foundation in computer systems, networking, and engineering principles with focus on communication and computer networks.",
      achievements: [
        "Successfully completed Bachelor's program",
        "Strong foundation in networking and communications",
        "Prepared for advanced studies and professional career"
      ]
    }
  ];

  const additionalEducation = [
    {
      title: "Cisco Unified Communications Training",
      institution: "Cisco Systems",
      year: "2020",
      description: "Specialized training in Cisco Unified Communications Manager (CUCM) and Cisco Unified Contact Center Express (UCCX)."
    },
    {
      title: "Network Monitoring and PRTG",
      institution: "Paessler AG",
      year: "2019",
      description: "Advanced training in network monitoring, alerting, and performance management using PRTG Network Monitor."
    },
    {
      title: "Data Analysis and Visualization",
      institution: "Professional Development",
      year: "2024",
      description: "Specialized training in data analysis, visualization, and dashboard development for project management and reporting."
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
                    
                    {/* Institution - Full width for long names */}
                    <div className="mb-3">
                      <div className="flex items-start gap-2 text-muted-foreground">
                        <GraduationCap className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                        <span className="font-medium leading-relaxed">{edu.institution}</span>
                      </div>
                    </div>
                    
                    {/* Location and Date - Separate line with better spacing */}
                    <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-accent flex-shrink-0" />
                        <span className="font-medium">{edu.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-accent flex-shrink-0" />
                        <span className="font-medium">{edu.period}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-end gap-2 mt-4 lg:mt-0">
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
                <div className="text-3xl font-bold text-accent mb-2">4</div>
                <div className="font-medium text-primary">Degrees (Including Current)</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent mb-2">3</div>
                <div className="font-medium text-primary">Master's Degrees</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent mb-2">1</div>
                <div className="font-medium text-primary">Bachelor's Degree</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent mb-2">1</div>
                <div className="font-medium text-primary">Research Publication</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Education;