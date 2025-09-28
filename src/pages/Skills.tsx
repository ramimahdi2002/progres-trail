import { Network, Shield, Database, Code, Users, TrendingUp } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Technical Expertise",
      icon: <Network className="h-6 w-6" />,
      skills: [
        { name: "Network Architecture", level: 95 },
        { name: "Cybersecurity", level: 90 },
        { name: "Telecom Systems", level: 88 },
        { name: "Data Analysis", level: 85 },
        { name: "System Administration", level: 82 },
        { name: "Cloud Infrastructure", level: 80 }
      ]
    },
    {
      title: "Business & Management",
      icon: <TrendingUp className="h-6 w-6" />,
      skills: [
        { name: "Strategic Planning", level: 92 },
        { name: "Project Management", level: 90 },
        { name: "Team Leadership", level: 88 },
        { name: "Risk Assessment", level: 85 },
        { name: "Budget Management", level: 80 },
        { name: "Stakeholder Relations", level: 78 }
      ]
    },
    {
      title: "Research & Development",
      icon: <Code className="h-6 w-6" />,
      skills: [
        { name: "Academic Research", level: 95 },
        { name: "Technical Writing", level: 90 },
        { name: "Data Modeling", level: 88 },
        { name: "Statistical Analysis", level: 85 },
        { name: "Innovation Management", level: 82 },
        { name: "Grant Writing", level: 75 }
      ]
    }
  ];

  const technologies = [
    {
      category: "Networking & Security",
      items: ["Cisco Systems", "Fortinet", "Palo Alto", "Juniper", "pfSense", "Wireshark", "Nmap", "OpenVPN"]
    },
    {
      category: "Programming & Development", 
      items: ["Python", "Java", "C/C++", "JavaScript", "SQL", "MATLAB", "R", "LaTeX"]
    },
    {
      category: "Cloud & Infrastructure",
      items: ["AWS", "Azure", "Docker", "Kubernetes", "Terraform", "Ansible", "VMware", "Linux"]
    },
    {
      category: "Data & Analytics",
      items: ["Pandas", "NumPy", "Scikit-learn", "Tableau", "Power BI", "Jupyter", "Apache Spark", "MongoDB"]
    }
  ];

  const certifications = [
    { name: "CISSP - Certified Information Systems Security Professional", year: "2022" },
    { name: "CCNP Enterprise - Cisco Certified Network Professional", year: "2021" },
    { name: "PMP - Project Management Professional", year: "2020" },
    { name: "AWS Solutions Architect Professional", year: "2020" },
    { name: "CISM - Certified Information Security Manager", year: "2019" }
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
                
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium text-foreground">{skill.name}</span>
                        <span className="text-sm text-accent font-medium">{skill.level}%</span>
                      </div>
                      <div className="skill-bar">
                        <div 
                          className="skill-progress"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
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
        <section>
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
      </div>
    </main>
  );
};

export default Skills;