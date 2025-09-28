import { GraduationCap, Building, Users, Trophy } from 'lucide-react';

const About = () => {
  const timeline = [
    {
      year: "2024",
      title: "M2 Research Program",
      subtitle: "Telecom Networks & Security",
      description: "Currently pursuing advanced research in telecommunications security and network infrastructure optimization.",
      type: "current"
    },
    {
      year: "2022",
      title: "Senior Networking Specialist",
      subtitle: "Leading Banking Institution",
      description: "Architecting enterprise network solutions and implementing security protocols for critical financial systems.",
      type: "professional"
    },
    {
      year: "2020",
      title: "MSc Business Administration",
      subtitle: "Strategic Leadership Focus",
      description: "Integrated technical expertise with business strategy, focusing on technology management and organizational leadership.",
      type: "education"
    },
    {
      year: "2018",
      title: "MSc Computer Engineering",
      subtitle: "Network Systems Specialization", 
      description: "Advanced study in network architecture, security protocols, and distributed systems engineering.",
      type: "education"
    },
    {
      year: "2016",
      title: "University Lecturer",
      subtitle: "Computer Engineering Department",
      description: "Teaching undergraduate courses in networking fundamentals and computer systems architecture.",
      type: "professional"
    },
    {
      year: "2014",
      title: "BSc Computer Engineering",
      subtitle: "Summa Cum Laude",
      description: "Foundation in computer systems, programming, and engineering principles with honors distinction.",
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
                  With over 15 years of experience spanning academic research and industry practice, 
                  I specialize in bridging the gap between cutting-edge research and real-world applications 
                  in networking and telecommunications security.
                </p>
                <p className="leading-relaxed">
                  My unique background combines deep technical expertise in computer engineering with 
                  strategic business acumen, enabling me to lead complex technology initiatives while 
                  maintaining focus on organizational objectives and stakeholder value.
                </p>
                <p className="leading-relaxed">
                  Currently pursuing advanced research in telecommunications security, I remain committed 
                  to contributing meaningful innovations to both academic knowledge and industry practice.
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
                <h3 className="font-medium text-primary mb-2">Industry Leadership</h3>
                <p className="text-sm text-muted-foreground">Senior roles in banking and technology sectors</p>
              </div>
              <div className="professional-card text-center">
                <Users className="h-8 w-8 text-accent mx-auto mb-3" />
                <h3 className="font-medium text-primary mb-2">Teaching & Mentoring</h3>
                <p className="text-sm text-muted-foreground">University lecturer and research supervisor</p>
              </div>
              <div className="professional-card text-center">
                <Trophy className="h-8 w-8 text-accent mx-auto mb-3" />
                <h3 className="font-medium text-primary mb-2">Research Impact</h3>
                <p className="text-sm text-muted-foreground">Published researcher in network security</p>
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