import React from 'react';
import { HeroSectionDemo } from '../components/ui/demo';
import { GlowingEffectDemo } from '../components/ui/glowing-effect-demo';
import { RetroGridDemo } from '../components/ui/retro-grid-demo';
import { PricingTableDemo } from '../components/ui/pricing-table-demo';
import { AnimatedFooterDemo } from '../components/ui/animated-footer-demo';

const Home = () => {
  return (
    <div className="App bg-background min-h-screen">
      <HeroSectionDemo />
      <section className="bg-background">
        <div className="container mx-auto px-4 py-16">
          <GlowingEffectDemo />
        </div>
      </section>
      <section className="bg-background">
        <div className="container mx-auto px-4 py-16">
          <RetroGridDemo />
        </div>
      </section>
      <section className="bg-background">
        <PricingTableDemo />
      </section>
      <AnimatedFooterDemo />
    </div>
  );
};

export default Home;
