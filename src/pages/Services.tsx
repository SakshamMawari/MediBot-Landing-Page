import React from 'react';
import { Stethoscope, Brain, Heart } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Stethoscope,
      title: "Rural Health Assessment",
      description: "AI-powered symptom analysis designed for rural healthcare challenges. Works offline when internet is limited, provides guidance in local languages, and helps identify common rural health issues like malnutrition, water-borne diseases, and agricultural injuries."
    },
    {
      icon: Brain,
      title: "Mental Health Support for Rural Communities",
      description: "Specialized mental health assistance addressing rural-specific challenges like farmer stress, isolation, and limited access to counselors. Provides culturally appropriate support and connects users with local mental health resources when available."
    },
    {
      icon: Heart,
      title: "Basic Health Monitoring",
      description: "Simple health tracking suitable for rural settings with limited medical equipment. Monitors vital signs, tracks medication adherence, and provides early warning alerts for common rural health conditions like hypertension and diabetes."
    }
  ];

  const stats = [
    { number: "85%", label: "Rural Coverage" },
    { number: "24/7", label: "Offline Support" },
    { number: "10K+", label: "Rural Users" },
    { number: "15+", label: "Local Languages" }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="pt-20 pb-16">
        <div className="container mx-auto px-4">
                 <div className="text-center max-w-4xl mx-auto">
                   <h1 className="text-5xl font-bold bg-gradient-to-b from-[#ffd319] via-[#ff2975] to-[#8c1eff] bg-clip-text text-transparent mb-6">
                     Rural Healthcare Services
                   </h1>
                   <p className="text-xl text-muted-foreground mb-8">
                     Specialized medical assistance designed for rural communities with limited healthcare access. Get instant medical guidance, symptom analysis, and health monitoring tailored for rural India.
                   </p>
                 </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="bg-background/5 border border-border backdrop-blur-lg rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-background/10"
                >
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full mx-auto mb-6">
                    <Icon className="w-8 h-8 text-purple-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-4 text-center">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-center">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-pink-600/10" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold bg-gradient-to-b from-[#ffd319] via-[#ff2975] to-[#8c1eff] bg-clip-text text-transparent mb-4">
              Trusted by Healthcare Professionals
            </h2>
            <p className="text-lg text-muted-foreground">
              Our platform has been adopted by medical professionals worldwide
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl font-bold text-foreground mb-2">
                  {stat.number}
                </div>
                <div className="text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl font-bold bg-gradient-to-b from-[#ffd319] via-[#ff2975] to-[#8c1eff] bg-clip-text text-transparent mb-6">
            Ready to Access Rural Healthcare?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of rural users who now have access to quality healthcare guidance through our AI-powered medical assistant.
          </p>
          <button className="relative inline-block overflow-hidden rounded-full p-[1.5px]">
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <div className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-background text-xs font-medium backdrop-blur-3xl">
              <span className="inline-flex rounded-full text-center group items-center w-full justify-center bg-gradient-to-tr from-zinc-300/20 via-purple-400/30 to-transparent dark:from-zinc-300/5 dark:via-purple-400/20 text-foreground border-input border-[1px] hover:bg-gradient-to-tr hover:from-zinc-300/30 hover:via-purple-400/40 hover:to-transparent dark:hover:from-zinc-300/10 dark:hover:via-purple-400/30 transition-all sm:w-auto py-4 px-10">
                Get Started Today
              </span>
            </div>
          </button>
        </div>
      </section>
    </div>
  );
};

export default Services;
