import React from 'react';
import { motion } from 'framer-motion';
import { Stethoscope, Brain, Heart, Shield, Clock, Users } from 'lucide-react';

const services = [
  {
    icon: Stethoscope,
    title: "AI-Powered Diagnosis",
    description: "Advanced machine learning algorithms analyze symptoms and provide accurate preliminary diagnoses with detailed explanations.",
    features: ["Symptom analysis", "Risk assessment", "Treatment recommendations"]
  },
  {
    icon: Brain,
    title: "Mental Health Support",
    description: "24/7 mental health assistance with personalized therapy sessions and mood tracking capabilities.",
    features: ["Crisis intervention", "Mood tracking", "Therapy sessions"]
  },
  {
    icon: Heart,
    title: "Chronic Disease Management",
    description: "Comprehensive monitoring and management tools for patients with diabetes, hypertension, and other chronic conditions.",
    features: ["Health monitoring", "Medication reminders", "Progress tracking"]
  },
  {
    icon: Shield,
    title: "Emergency Response",
    description: "Instant emergency detection and immediate connection to healthcare professionals when critical situations arise.",
    features: ["Emergency detection", "Quick response", "Professional connection"]
  },
  {
    icon: Clock,
    title: "24/7 Availability",
    description: "Round-the-clock medical assistance ensuring you have access to healthcare support whenever you need it.",
    features: ["Always available", "Instant responses", "No waiting times"]
  },
  {
    icon: Users,
    title: "Family Health Management",
    description: "Manage health records for your entire family with personalized care plans and health insights for each member.",
    features: ["Family profiles", "Health records", "Care coordination"]
  }
];

export function ServicesPage() {
  return (
    <div className="min-h-screen bg-background py-20">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Our <span className="text-primary">Services</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive AI-powered healthcare solutions designed to provide personalized, 
            accessible, and reliable medical assistance for you and your family.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-8 hover:bg-card/80 transition-all duration-300 group"
              >
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-primary/10 rounded-xl mr-4 group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">{service.title}</h3>
                </div>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl p-12 border border-primary/20"
        >
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Ready to Experience the Future of Healthcare?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of users who have transformed their healthcare experience with our AI-powered medical assistant.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="http://localhost:3001/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-8 py-4 bg-primary text-primary-foreground rounded-xl font-semibold hover:bg-primary/90 transition-colors inline-block text-center"
            >
              Get Started Now
            </a>
            <button className="px-8 py-4 border border-border text-foreground rounded-xl font-semibold hover:bg-muted transition-colors">
              Learn More
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
