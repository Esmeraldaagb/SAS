import React from 'react';
import { Card, CardContent, CardTitle, CardHeader } from '@/components/ui/card';
import AnimatedSection from '@/components/animatedSection';
import { Code, Database, Cloud, ExternalLink } from 'lucide-react';
import img1 from "@/app/assets/squirel.png"
import Image from 'next/image';
type Service = {
  icon: React.ReactNode;
  title: string;
  description: string[];
};
const Squirel: React.FC = () => {
  const services: Service[] = [
    {
      icon: <Code className="h-10 w-10 text-[#C0392B]" />,
      title: 'Développement Logiciel',
      description: [
        'Suivi en temps réel des véhicules.',
        'Optimisation des itinéraires pour réduire les délais.',
        'Fiabilité pour les livraisons nationales et régionales.'
      ]
    },
    {
      icon: <Database className="h-10 w-10 text-[#C0392B]" />,
      title: 'Solutions Cloud',
      description: [
        'Suivi en temps réel des véhicules.',
        'Optimisation des itinéraires pour réduire les délais.',
        'Fiabilité pour les livraisons nationales et régionales.'
      ]
    },
    {
      icon: <Cloud className="h-10 w-10 text-[#C0392B]" />,
      title: 'Intelligence Artificielle',
      description: [
        'Suivi en temps réel des véhicules.',
        'Optimisation des itinéraires pour réduire les délais.',
        'Fiabilité pour les livraisons nationales et régionales.'
      ]
    },
   
  ];

  return (
    <section id="technology" className="lg:px-20 px-2 lg:py-20 py-10 bg-white">
      <div className="container mx-auto px-6">
        <AnimatedSection animation="fade-up">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-4xl font-bold text-[#C0392B] mb-4">Squirel</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Notre division technologique conçoit des solutions innovantes pour accélérer votre transformation digitale et votre croissance.
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection animation="fade-up" delay={200} className="mb-16">
            <div className="bg-white rounded-xl overflow-hidden shadow-lg">
              <div className="relative grid grid-cols-1 md:grid-cols-2">
                <div className="hidden md:block">
                  <Image
                    src={img1}
                    alt="iyara"
                    className="w-full h-auto max-h-80 object-cover object-center rounded-l-xl border-l-4 border-[#C0392B]"
                  />
                </div>
                
                <div className="relative flex items-center p-4 sm:p-10">
                  <div
                    className="absolute inset-0 block md:hidden bg-cover bg-center"
                    style={{ backgroundImage: `url(${img1.src})`, opacity: 0.1 }}
                  ></div>

                    <div className="relative z-10 w-full p-4 sm:p-6 rounded-lg">
                      <h3 className="text-xl lg:text-2xl font-bold text-[#2C2C2C] mb-4 text-center md:text-left">
                        Vivez une expérience complète et innovante !
                      </h3>
                      <p className="text-[#7A7A7A] text-center md:text-left mb-6 leading-relaxed text-sm">
                        Nous proposons des services étendus incluant le renforcement sur les réseaux sociaux, la communication, les conseils stratégiques, la gestion de serveurs, la sécurité, la vente et la gestion d'hébergement.
                      </p>

                      <div className="hidden md:block absolute bottom-1 right-4">
                        <a
                          href="#"
                          className="text-[#C0392B] font-semibold flex gap-2 hover:underline"
                        >
                          Visiter le site <ExternalLink className="h-5 w-5" />
                        </a>
                      </div>

                      <div className="md:hidden flex items-center justify-center">
                    <a href="#" className="text-[#C0392B] font-semibold flex gap-2">
                      Visiter le site <ExternalLink className="h-5 w-5" />
                    </a>
                  </div>
                    </div>
                </div>
              </div>
            </div>
       </AnimatedSection>

        <div className="mb-6 flex items-center justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <AnimatedSection 
              key={service.title} 
              animation="fade-up"
              delay={index * 200 + 400}
            >
             <Card className='border-b-4 border-[#C0392B] border-t-0 border-l-0 border-r-0'>
                <CardHeader className="flex flex-row items-center gap-3">
                    <div>{service.icon}</div>
                      <div>
                        <CardTitle className="text-base text-gray-800">{service.title}</CardTitle>
                      </div>
                </CardHeader>
                    <CardContent>
                        <ul className=" list-inside text-sm text-gray-600 space-y-1">
                          {service.description.map((item, i) => (
                            <li key={i}>• {item}</li>
                          ))}
                        </ul>
                      </CardContent>
            </Card>
            </AnimatedSection>
          ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Squirel;