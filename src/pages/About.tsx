import React from 'react';
import { Award, Target, Users, Heart, Shield, Globe, Zap } from 'lucide-react';
import { RetroGrid } from '../components/ui/retro-grid';

const About = () => {
  const stats = [
    { icon: Users, number: "50K+", label: "Active Users" },
    { icon: Award, number: "95%", label: "Accuracy Rate" },
    { icon: Heart, number: "24/7", label: "Support Available" },
    { icon: Globe, number: "100+", label: "Countries Served" }
  ];

  const team = [
    {
      name: "Dr. Sarah Johnson",
      role: "Chief Medical Officer",
      description: "Board-certified physician with 15+ years of experience in AI-assisted healthcare and digital medicine innovation."
    },
    {
      name: "Michael Chen",
      role: "AI Research Director",
      description: "Leading expert in machine learning and healthcare AI with PhD from MIT and 20+ years in medical technology."
    },
    {
      name: "Dr. Emily Rodriguez",
      role: "Head of Mental Health",
      description: "Licensed psychologist specializing in AI-powered mental health interventions and digital therapy solutions."
    },
    {
      name: "Dr. James Wilson",
      role: "Chief Technology Officer",
      description: "Healthcare technology visionary with expertise in secure medical data systems and AI implementation."
    }
  ];

  const values = [
    {
      icon: Shield,
      title: "Innovation",
      description: "Continuously advancing healthcare through cutting-edge AI technology and medical research breakthroughs."
    },
    {
      icon: Heart,
      title: "Compassion",
      description: "Putting human care at the heart of every technological solution we develop and implement."
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Maintaining the highest standards in medical accuracy, service quality, and patient outcomes."
    },
    {
      icon: Globe,
      title: "Accessibility",
      description: "Making advanced healthcare accessible to everyone, everywhere, regardless of location or circumstances."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="pt-20 pb-16 relative">
        <div className="absolute top-0 z-[0] h-screen w-screen bg-background" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl font-bold bg-gradient-to-b from-[#ffd319] via-[#ff2975] to-[#8c1eff] bg-clip-text text-transparent mb-6">
              About Medibot
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Revolutionizing healthcare through artificial intelligence and compassionate care, making advanced medical assistance accessible to everyone.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="relative flex flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl mb-16">
            <span className="pointer-events-none z-10 whitespace-pre-wrap bg-gradient-to-b from-[#ffd319] via-[#ff2975] to-[#8c1eff] bg-clip-text text-center text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tighter text-transparent mb-8">
              Our Mission
            </span>
            <RetroGrid />
          </div>
          
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              At Medibot, we believe that quality healthcare should be accessible to everyone, everywhere. 
              Our AI-powered platform combines cutting-edge technology with medical expertise to provide 
              personalized, accurate, and compassionate healthcare solutions that transcend geographical 
              and economic barriers.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We're committed to breaking down barriers in healthcare delivery, making advanced medical 
              assistance available 24/7, and empowering individuals to take control of their health journey 
              with confidence and clarity.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-pink-600/10" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold bg-gradient-to-b from-[#ffd319] via-[#ff2975] to-[#8c1eff] bg-clip-text text-transparent mb-4">
              Our Impact
            </h2>
            <p className="text-lg text-muted-foreground">
              Trusted by healthcare professionals and patients worldwide
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center">
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full mx-auto mb-4">
                    <Icon className="w-8 h-8 text-purple-400" />
                  </div>
                  <div className="text-4xl font-bold text-foreground mb-2">
                    {stat.number}
                  </div>
                  <div className="text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Meet Our Team
            </h2>
            <p className="text-lg text-muted-foreground">
              World-class medical professionals and AI experts working together to revolutionize healthcare
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-background/5 border border-border backdrop-blur-lg rounded-xl p-8 shadow-lg hover:bg-background/10 transition-all duration-300"
              >
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  {member.name}
                </h3>
                <p className="text-purple-400 font-semibold mb-4">
                  {member.role}
                </p>
                <p className="text-muted-foreground">
                  {member.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold bg-gradient-to-b from-[#ffd319] via-[#ff2975] to-[#8c1eff] bg-clip-text text-transparent mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-muted-foreground">
              The principles that guide everything we do
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="text-center">
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full mx-auto mb-6">
                    <Icon className="w-8 h-8 text-purple-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">{value.title}</h3>
                  <p className="text-muted-foreground">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
