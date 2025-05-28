'use client';

import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import AnimatedSection from '@/components/animatedSection';
import {  ExternalLink, BrainCog, Handshake, Network } from 'lucide-react';
import Image from 'next/image';
import img1 from "@/app/assets/mirobex.png"
type Service = {
  icon: React.ReactNode;
  title: string;
  description: string[];
};

const Mirabex: React.FC = () => {
  const services: Service[] = [
    {
      icon: <Handshake className="h-10 w-10 text-[#0400F0]" />,
      title: 'Représentation commerciale',
      description: [
        'Suivi en temps réel des véhicules.',
        'Optimisation des itinéraires pour réduire les délais.',
        'Fiabilité pour les livraisons nationales et régionales.'
      ]
    },
    {
      icon: <BrainCog className="h-10 w-10 text-[#0400F0]" />,
      title: 'Conseil en entreprise',
      description: [
        'Suivi en temps réel des véhicules.',
        'Optimisation des itinéraires pour réduire les délais.',
        'Fiabilité pour les livraisons nationales et régionales.'
      ]
    },
    {
      icon: <Network className="h-10 w-10 text-[#0400F0]" />,
      title: 'Externalisation des services',
      description: [
        'Suivi en temps réel des véhicules.',
        'Optimisation des itinéraires pour réduire les délais.',
        'Fiabilité pour les livraisons nationales et régionales.'
      ]
    },
  ];

  return (
    <section id="consulting" className="lg:px-20 px-2 lg:py-20 py-10 bg-gray-50">
      <div className="container mx-auto px-6">
        <AnimatedSection animation="fade-up">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-4xl font-bold text-[#0400F0] mb-4">Mirobex</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Notre division conseil accompagne les entreprises dans leur expansion internationale avec une expertise locale et une vision globale.
            </p>
          </div>
        </AnimatedSection>

        <div className="mb-16 flex items-center justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <AnimatedSection key={service.title} animation="fade-up" delay={index * 200}>
                <Card className="p-2 hover:shadow-lg transition-all duration-300 border-b-4 border-[#0400F0] border-t-0 border-l-0 border-r-0">  
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

        <AnimatedSection animation="fade-up" delay={400} className="mt-16">
          <div className="bg-gradient-to-r from-white to-[#cfcfdb] rounded-xl overflow-hidden shadow-lg">
            <div className="grid grid-cols-1 lg:grid-cols-4 relative">

              <div className="block lg:hidden relative h-[420px] sm:h-[500px] overflow-hidden">
                <Image
                  src={img1}
                  alt="mirobex"
                  fill
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-[#3c3a3a2b] backdrop-blur-sm md:hidden"></div>
              </div>

              <div className="lg:col-span-3 p-6 md:p-10 flex flex-col justify-between z-10 relative">
                <div>
                  <h3 className="lg:text-2xl text-center text-lg font-bold text-black lg:text-[#2C2C2C] mb-4">
                    Pourquoi choisir Mirobex pour votre expansion internationale ?
                  </h3>
                  <p className="text-[#2C2C2C] text-sm lg:text-md mb-6 leading-relaxed">
                    Avec plus de 15 ans {"d'expérience"} dans {"l'accompagnement d'entreprises à l'international"}, notre équipe {"d'experts"} vous guide à chaque étape de votre expansion. Nous combinons une connaissance approfondie des marchés locaux avec une vision stratégique globale.
                  </p>

                  <Card className="bg-[#0400f02f] lg:p-4 p-2 rounded-lg backdrop-blur-sm mb-6">
                    <CardContent>
                      <h4 className="text-[#7A7A7A] font-semibold lg:text-lg text-sm mb-2">Clientèle visée</h4>
                      <ul className="space-y-4">
                        <li className="flex flex-col md:flex-row gap-2">
                          <p className="text-[#1B263B]  font-semibold lg:text-md text-sm">Entreprises internationales</p>
                          <p className="text-[#7A7A7A] text-sm hidden lg:block">: Succursale / mandat de gestion / Représentation / joint-venture</p>
                        </li>
                        <li className="flex flex-col md:flex-row gap-2">
                          <p className="text-[#1B263B]  font-semibold lg:text-md text-sm">Commerçants et boutiques locales</p>
                          <p className="text-[#7A7A7A] text-sm hidden lg:block">: Etablissements / PME recherchant des solutions pour optimiser leurs activités</p>
                        </li>
                        <li className="flex flex-col md:flex-row gap-2">
                          <p className="text-[#1B263B]  font-semibold lg:text-md text-sm">Sociétés de taille moyenne</p>
                          <p className="text-[#7A7A7A] text-sm hidden lg:block">: Externalisation des services / Franchises / Mandat de gestion</p>
                        </li>
                        <li className="flex flex-col md:flex-row gap-2">
                          <p className="text-[#1B263B]  font-semibold lg:text-md text-sm">Gouvernement et ONG</p>
                          <p className="text-[#7A7A7A] text-sm hidden lg:block">: Joint-venture / Partenariat Public-Privé</p>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>

                <div className="md:block hidden absolute bottom-3">
                  <a href="#" className="text-[#0400F0] font-semibold flex items-center gap-2 hover:underline">
                    Visiter le site <ExternalLink className="h-5 w-5" />
                  </a>
                </div>

                <div className="md:hidden flex items-center justify-center">
                  <a href="#" className="text-[#0400F0] font-semibold flex gap-2">
                    Visiter le site <ExternalLink className="h-5 w-5" />
                  </a>
                </div>
              </div>

              <div className="hidden lg:block w-full h-full relative">
                <Image
                  src={img1}
                  alt="mirobex"
                  fill
                  className="object-cover object-center w-full h-full border-r-4 border-[#0400F0]"
                />
              </div>
            </div>
          </div>
      </AnimatedSection>

      </div>
    </section>
  );
};

export default Mirabex;
