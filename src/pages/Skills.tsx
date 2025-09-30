import { Network, Shield, Database, Code, Users, TrendingUp } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Network & Telecom Engineering",
      icon: <Network className="h-6 w-6" />,
      skills: [
        "Network Design & Implementation",
        "Cisco Unified Communications",
        "IP Telephony and troubleshooting",
        "LAN/WAN/VLAN Management",
        "PRTG monitoring & Alerting",
        "Riverbed WAN Optimization"
      ]
    },
    {
      title: "Data Analysis & Systems",
      icon: <Database className="h-6 w-6" />,
      skills: [
        "Data Analysis & Visualization",
        "SPSS, Excel, KoboToolbox",
        "Linux Systems",
        "Fortigate Firewalls",
        "System Administration",
        "Database Management"
      ]
    },
    {
      title: "Academic & Teaching",
      icon: <Users className="h-6 w-6" />,
      skills: [
        "Academic Teaching & Mentorship",
        "Lab Session Leadership",
        "Student Project Supervision",
        "Curriculum Development",
        "Technical Writing",
        "Research Collaboration"
      ]
    }
  ];

  const technologies = [
    {
      category: "Networking & Communications",
      items: ["Cisco Unified Communications", "CUCM", "UCCX", "Jabber", "Nimas recording system", "PRTG", "Riverbed WAN Optimization", "Fortigate Firewalls"]
    },
    {
      category: "Data Analysis & Visualization", 
      items: ["SPSS", "Excel", "KoboToolbox", "Data Analysis", "Data Visualization", "Dashboard Development", "Reporting Tools", "Statistical Analysis"]
    },
    {
      category: "Systems & Infrastructure",
      items: ["Linux Systems", "LAN/WAN/VLAN Management", "IP Telephony", "Network Design", "System Administration", "Network Monitoring", "Troubleshooting", "Documentation"]
    },
    {
      category: "Academic & Teaching",
      items: ["Academic Teaching", "Student Mentorship", "Lab Instruction", "Curriculum Development", "Project Supervision", "Technical Writing", "Research Collaboration", "Case Study Development"]
    }
  ];

  const certifications = [
    { name: "Cisco Unified Communications Training", year: "2020" },
    { name: "PRTG Network Monitor Certification", year: "2019" },
    { name: "Data Analysis and Visualization", year: "2024" },
    { name: "Linux System Administration", year: "2018" },
    { name: "Network Security Fundamentals", year: "2017" }
  ];

  const languages = [
    { name: "Arabic", level: "Native" },
    { name: "English", level: "Proficient" },
    { name: "French", level: "Basic" }
  ];

  return (
    <main className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="section-title">Skills & Expertise</h1>
          <p className="subtitle max-w-3xl mx-auto">
            A comprehensive blend of technical mastery, business acumen, and research excellence
          </p>
        </div>

        {/* Skill Categories */}
        <section className="mb-20">
          <div className="grid lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <div key={index} className="professional-card">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 rounded-lg bg-accent/10 text-accent">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-playfair font-semibold text-primary">
                    {category.title}
                  </h3>
                </div>
                
                <div className="grid grid-cols-1 gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="flex items-center gap-3 p-3 rounded-lg bg-accent/5 hover:bg-accent/10 transition-colors">
                      <div className="w-2 h-2 rounded-full bg-accent flex-shrink-0"></div>
                      <span className="font-medium text-foreground">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Technologies */}
        <section className="mb-20">
          <h2 className="text-2xl font-playfair font-semibold text-primary mb-12 text-center">
            Technologies & Tools
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {technologies.map((tech, index) => (
              <div key={index} className="professional-card">
                <h3 className="text-lg font-medium text-primary mb-4">{tech.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {tech.items.map((item, itemIndex) => (
                    <span 
                      key={itemIndex}
                      className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm font-medium"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Certifications */}
        <section className="mb-20">
          <h2 className="text-2xl font-playfair font-semibold text-primary mb-12 text-center">
            Professional Certifications
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6">
              {certifications.map((cert, index) => (
                <div key={index} className="professional-card accent-card">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="font-medium text-primary mb-2">{cert.name}</h3>
                      <span className="text-accent font-medium">{cert.year}</span>
                    </div>
                    <Shield className="h-5 w-5 text-accent flex-shrink-0 ml-3" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Languages */}
        <section>
          <h2 className="text-2xl font-playfair font-semibold text-primary mb-12 text-center">
            Languages
          </h2>
          
          <div className="max-w-2xl mx-auto">
            <div className="grid md:grid-cols-3 gap-6">
              {languages.map((lang, index) => (
                <div key={index} className="professional-card text-center">
                  <h3 className="font-medium text-primary mb-2">{lang.name}</h3>
                  <span className="text-accent font-medium">{lang.level}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Skills;