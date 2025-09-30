import { GraduationCap, Building, Users, Trophy } from 'lucide-react';

const About = () => {
  const timeline = [
    {
      year: "2025-2026",
      title: "M2 Research in Telecom, Networks and Security",
      subtitle: "Partnership between Saint Joseph University of Beirut (USJ) and Lebanese University – Faculty of Engineering",
      description: "Currently pursuing advanced research program focusing on telecommunications, network security, and emerging technologies in partnership between two leading Lebanese universities.",
      type: "current"
    },
    {
      year: "2024",
      title: "Data Management Specialist",
      subtitle: "Dorsch Impact GmbH",
      description: "Conducted data cleaning, analysis, and visualization for development projects. Supported field teams with dashboards, collection tools, and structured reporting.",
      type: "current"
    },
    {
      year: "2023",
      title: "University Instructor",
      subtitle: "Lebanese University, Faculty Of Technology",
      description: "Teaching hands-on courses in networking, Linux, and programming fundamentals. Leading lab sessions and student mentorship for graduation projects.",
      type: "current"
    },
    {
      year: "2023",
      title: "University Lecturer",
      subtitle: "MUC UNIVERSITY",
      description: "Lectured in computer engineering and IT fundamentals. Delivered coursework integrated with real-world case studies.",
      type: "professional"
    },
    {
      year: "2021-2023",
      title: "MBA – General Business Administration",
      subtitle: "Lebanese International University",
      description: "Integrated technical expertise with business strategy, focusing on technology management and organizational leadership.",
      type: "education"
    },
    {
      year: "2018-2021",
      title: "MS in Communication & Computer Engineering (MCCE)",
      subtitle: "Lebanese International University",
      description: "Advanced study in communication systems, computer engineering, and network technologies with emphasis on practical applications.",
      type: "education"
    },
    {
      year: "2019",
      title: "Network and Telecom Administrator",
      subtitle: "BBAC Bank",
      description: "Managing Cisco-based voice and data networks, including CUCM and UCCX. Monitoring network performance using PRTG and resolving service disruptions.",
      type: "current"
    },
    {
      year: "2014-2017",
      title: "BS in Communication & Computer Networks Engineering (CCNE)",
      subtitle: "Lebanese University, Faculty Of Technology",
      description: "Foundation in computer systems, networking, and engineering principles with focus on communication and computer networks.",
      type: "education"
    }
  ];

  return (
    <main className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="section-title">About Me</h1>
          <p className="subtitle max-w-3xl mx-auto">
            A journey through academia and industry, bridging theoretical knowledge with practical innovation
          </p>
        </div>

        {/* Professional Overview */}
        <section className="mb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl font-playfair font-semibold text-primary mb-6">
                Professional Overview
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p className="leading-relaxed">
                  Network and Telecom Engineer with over 6 years of experience in enterprise infrastructure, 
                  unified communications, and academic instruction. Proven expertise in Cisco Unified Communications, 
                  network design, IP telephony, and data systems.
                </p>
                <p className="leading-relaxed">
                  My unique background combines deep technical expertise in network engineering with 
                  strategic business acumen, enabling me to bridge IT with strategic goals while 
                  maintaining focus on organizational objectives and stakeholder value.
                </p>
                <p className="leading-relaxed">
                  Dedicated university instructor with a passion for mentoring and bridging IT with strategic goals. 
                  Currently serving as both a network administrator and academic instructor, contributing to both 
                  industry practice and educational excellence.
                </p>
              </div>
            </div>
            
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="professional-card text-center">
                <GraduationCap className="h-8 w-8 text-accent mx-auto mb-3" />
                <h3 className="font-medium text-primary mb-2">Academic Excellence</h3>
                <p className="text-sm text-muted-foreground">Multiple advanced degrees in engineering and business</p>
              </div>
              <div className="professional-card text-center">
                <Building className="h-8 w-8 text-accent mx-auto mb-3" />
                <h3 className="font-medium text-primary mb-2">Network Administration</h3>
                <p className="text-sm text-muted-foreground">Cisco Unified Communications and enterprise infrastructure</p>
              </div>
              <div className="professional-card text-center">
                <Users className="h-8 w-8 text-accent mx-auto mb-3" />
                <h3 className="font-medium text-primary mb-2">Teaching & Mentoring</h3>
                <p className="text-sm text-muted-foreground">University instructor and student mentor</p>
              </div>
              <div className="professional-card text-center">
                <Trophy className="h-8 w-8 text-accent mx-auto mb-3" />
                <h3 className="font-medium text-primary mb-2">Research Impact</h3>
                <p className="text-sm text-muted-foreground">Published researcher in copy-move forgery detection</p>
              </div>
            </div>
          </div>
        </section>

        {/* Academic & Professional Timeline */}
        <section>
          <h2 className="text-2xl font-playfair font-semibold text-primary mb-12 text-center">
            Academic & Professional Journey
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {timeline.map((item, index) => (
                <div key={index} className="timeline-item">
                  <div className="professional-card">
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                      <div className="flex items-center gap-4">
                        <span className="text-2xl font-playfair font-bold text-accent">
                          {item.year}
                        </span>
                        <div>
                          <h3 className="text-xl font-medium text-primary">
                            {item.title}
                          </h3>
                          <p className="text-accent font-medium">
                            {item.subtitle}
                          </p>
                        </div>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        item.type === 'current' ? 'bg-accent/20 text-accent' :
                        item.type === 'education' ? 'bg-primary/20 text-primary' :
                        'bg-secondary text-secondary-foreground'
                      }`}>
                        {item.type === 'current' ? 'Current' :
                         item.type === 'education' ? 'Education' : 'Professional'}
                      </span>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default About;