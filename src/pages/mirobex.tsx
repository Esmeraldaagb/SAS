'use client';

import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import AnimatedSection from '@/components/animatedSection';
import { TrendingUp, Globe, FileText, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

type Service = {
  icon: React.ReactNode;
  title: string;
  description: string[];
};

const Mirabex: React.FC = () => {
  const services: Service[] = [
    {
      icon: <TrendingUp className="h-10 w-10 text-[#0400F0]" />,
      title: 'Stratégie d\'Expansion',
      description: [
        'Suivi en temps réel des véhicules.',
        'Optimisation des itinéraires pour réduire les délais.',
        'Fiabilité pour les livraisons nationales et régionales.'
      ]
    },
    {
      icon: <Globe className="h-10 w-10 text-[#0400F0]" />,
      title: 'Études de Marché',
      description: [
        'Suivi en temps réel des véhicules.',
        'Optimisation des itinéraires pour réduire les délais.',
        'Fiabilité pour les livraisons nationales et régionales.'
      ]
    },
    {
      icon: <FileText className="h-10 w-10 text-[#0400F0]" />,
      title: 'Conformité Réglementaire',
      description: [
        'Suivi en temps réel des véhicules.',
        'Optimisation des itinéraires pour réduire les délais.',
        'Fiabilité pour les livraisons nationales et régionales.'
      ]
    },
  ];

  return (
    <section id="consulting" className="lg:px-20 px-2 py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <AnimatedSection animation="fade-up">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0400F0] mb-4">Mirobex</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Notre division conseil accompagne les entreprises dans leur expansion internationale avec une expertise locale et une vision globale.
            </p>
          </div>
        </AnimatedSection>

        <div className="mb-16 flex items-center justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <AnimatedSection key={service.title} animation="fade-up" delay={index * 200}>
                <Card className="p-2 hover:shadow-lg transition-all duration-300">  
                  <CardHeader className="flex flex-row items-center gap-3">
                        <div>{service.icon}</div>
                        <div>
                          <CardTitle className="text-base text-gray-800">{service.title}</CardTitle>
                        </div>
                   </CardHeader>
                      <CardContent>
                        <ul className=" list-inside text-sm text-gray-600 space-y-1">
                          {service.description.map((item, i) => (
                            <li key={i}>{item}</li>
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
    <div className="grid grid-cols-1 lg:grid-cols-3">
      <div className="lg:col-span-2 p-6 md:p-10 flex flex-col justify-between relative">
        <div>
          <h3 className="text-2xl font-bold text-[#2C2C2C] mb-4">
            Pourquoi choisir ConseilCorp pour votre expansion internationale ?
          </h3>
          <p className="text-[#7A7A7A] mb-6 leading-relaxed">
            Avec plus de 15 ans d'expérience dans l'accompagnement d'entreprises à l'international, notre équipe d'experts vous guide à chaque étape de votre expansion. Nous combinons une connaissance approfondie des marchés locaux avec une vision stratégique globale.
          </p>

          <Card className="bg-[#0400f053] p-6 rounded-lg backdrop-blur-sm mb-6">
            <CardContent>
              <h4 className="text-[#7A7A7A] font-semibold text-lg mb-2">Clientèle visée</h4>
              <ul className="space-y-4">
                <li className="flex flex-col sm:flex-row gap-2">
                  <p className="text-[#1B263B] font-semibold text-md">Entreprises internationales :</p>
                  <p className="text-[#7A7A7A] text-sm">Succursale / mandat de gestion / Représentation / joint-venture</p>
                </li>

                <li className="flex flex-col sm:flex-row gap-2">
                  <p className="text-[#1B263B] font-semibold text-md">Commerçants et boutiques locales :</p>
                  <p className="text-[#7A7A7A] text-sm">Etablissements / PME recherchant des solutions pour optimiser leurs activités</p>
                </li>

                <li className="flex flex-col sm:flex-row gap-2">
                  <p className="text-[#1B263B] font-semibold text-md">Sociétés de taille moyenne :</p>
                  <p className="text-[#7A7A7A] text-sm">Externalisation des services / Franchises / Mandat de gestion</p>
                </li>

                <li className="flex flex-col sm:flex-row gap-2">
                  <p className="text-[#1B263B] font-semibold text-md">Gouvernement et ONG :</p>
                  <p className="text-[#7A7A7A] text-sm">Joint-venture / Partenariat Public-Privé</p>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="mt-4 sm:mt-0">
          <a href="#" className="text-[#0400F0] font-semibold flex items-center gap-2 hover:underline">
            Visiter le site <ExternalLink className="h-5 w-5" />
          </a>
        </div>
      </div>

      <div
        className="h-64 lg:h-auto bg-cover bg-center"
        style={{
          backgroundImage:
            'url(https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)',
        }}
      ></div>
    </div>
  </div>
</AnimatedSection>

      </div>
    </section>
  );
};

export default Mirabex;
