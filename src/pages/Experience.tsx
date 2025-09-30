import { Building, Users, GraduationCap, Award, Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "Network and Telecom Administrator",
      company: "BBAC Bank",
      location: "Beirut, Lebanon",
      period: "February 2019 – CURRENT",
      type: "Full-time",
      description: "Manage Cisco-based voice and data networks, including CUCM and UCCX, for a leading banking institution in Lebanon.",
      responsibilities: [
        "Manage Cisco-based voice and data networks, including CUCM and UCCX",
        "Monitor network performance using PRTG and resolve service disruptions",
        "Configure and maintain LAN switches, VLANs, and IP Telephony systems",
        "Collaborate with IT teams to support network projects and documentation"
      ],
      achievements: [
        "Maintained high network availability for critical banking operations",
        "Successfully implemented unified communications solutions",
        "Improved network monitoring and alerting capabilities",
        "Enhanced collaboration between IT teams and business units"
      ],
      technologies: ["Cisco Unified Communications", "CUCM", "UCCX", "PRTG", "IP Telephony", "LAN/WAN", "VLAN"]
    },
    {
      title: "Data Management Specialist",
      company: "Dorsch Impact GmbH",
      location: "Hybrid",
      period: "SEPTEMBER 2024 – CURRENT",
      type: "Part-time",
      description: "Conducted data cleaning, analysis, and visualization for development projects. Supported field teams with dashboards, collection tools, and structured reporting.",
      responsibilities: [
        "Conducted data cleaning, analysis, and visualization for development projects",
        "Supported field teams with dashboards, collection tools, and structured reporting"
      ],
      achievements: [
        "Improved data quality and reporting efficiency for field teams",
        "Developed comprehensive dashboards for project monitoring",
        "Streamlined data collection processes"
      ],
      technologies: ["Data Analysis", "Data Visualization", "Dashboard Development", "Reporting Tools"]
    },
    {
      title: "University Instructor",
      company: "Lebanese University, Faculty Of Technology",
      location: "Abey, Mount Lebanon",
      period: "MARCH 2023 – CURRENT",
      type: "Part-time",
      description: "Teach hands-on courses in networking, Linux, and programming fundamentals. Lead lab sessions and student mentorship for graduation projects.",
      responsibilities: [
        "Teach hands-on courses in networking, Linux, and programming fundamentals",
        "Lead lab sessions and student mentorship for graduation projects"
      ],
      achievements: [
        "Successfully mentored students in practical networking applications",
        "Developed hands-on curriculum for networking and Linux courses",
        "Guided students through graduation projects in computer engineering"
      ],
      technologies: ["Networking", "Linux Systems", "Programming Fundamentals", "Lab Instruction"]
    },
    {
      title: "University Lecturer",
      company: "MUC UNIVERSITY",
      location: "Mount Lebanon, Lebanon", 
      period: "OCTOBER 2023 – JULY 2024",
      type: "Part-time",
      description: "Lectured in computer engineering and IT fundamentals. Delivered coursework integrated with real-world case studies.",
      responsibilities: [
        "Lectured in computer engineering and IT fundamentals",
        "Delivered coursework integrated with real-world case studies"
      ],
      achievements: [
        "Successfully integrated real-world applications into academic curriculum",
        "Enhanced student understanding of practical computer engineering concepts",
        "Developed case studies connecting theory with industry practice"
      ],
      technologies: ["Computer Engineering", "IT Fundamentals", "Case Study Development", "Academic Instruction"]
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
                <div className="text-3xl font-bold text-accent mb-2">6+</div>
                <div className="font-medium text-primary">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent mb-2">100+</div>
                <div className="font-medium text-primary">Students Taught</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent mb-2">4</div>
                <div className="font-medium text-primary">Current Roles</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent mb-2">3</div>
                <div className="font-medium text-primary">Advanced Degrees</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Experience;