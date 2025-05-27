"use client";
import React from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';
import AnimatedSection from '@/components/animatedSection';
import Image from 'next/image';
const Hero: React.FC = () => {
  const scrollToNextSection = () => {
    const nextSection = document.getElementById('transport');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen lg:px-20 px-2 flex items-center bg-[rgba(0,0,0,0.17)]">
      <div className="container mx-auto px-6 z-10 mt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        
          <div className="text-white">
            <AnimatedSection animation="fade-in" delay={300}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Une vision globale.<br />
                Trois expertises.
              </h1>
            </AnimatedSection>

            <AnimatedSection animation="fade-in" delay={600}>
              <p className="text-lg md:text-xl text-[#2C2C2C] mb-8 leading-relaxed">
                Société africaine des services vous accompagne dans le transport, l’innovation technologique et le conseil pour votre développement international.
              </p>
            </AnimatedSection>

            <AnimatedSection animation="fade-in" delay={900}>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Button
                  variant="default"
                  size="lg"
                  className="bg-[#C0392B] hover:bg-[#a93226] text-white px-8 py-6 text-base font-semibold"
                >
                  Découvrir
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white text-black px-8 py-6 text-base font-semibold"
                >
                  Nous contacter
                </Button>
              </div>
            </AnimatedSection>
          </div>

          <div className="hidden lg:block">
            <Image src="/header.png" alt='header'className="w-full bg-cover bg-center" width={700} height={500}/>
          </div>
        </div>
      </div>

    
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <button onClick={scrollToNextSection} className="flex flex-col items-center focus:outline-none">
          <span className="text-sm mb-2">Découvrir</span>
          <ChevronDown className="h-6 w-6" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
