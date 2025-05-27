import React from 'react';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription
} from '@/components/ui/card';
import AnimatedSection from '@/components/animatedSection';
import { Truck, Ship, Package, ExternalLink, Car, ShoppingBag } from 'lucide-react';
import Image from 'next/image';
import img1 from "@/app/assets/iyara.png"

type Service = {
  icon: React.ReactNode;
  title: string;
  description: string[];
};


const Iyara: React.FC = () => {
 
  const services: Service[] = [
    {
      icon: <Car className="h-5 w-5 text-[#D39E00]" />,
      title: 'Location de vehicule',
      description: [
        'Suivi en temps réel des véhicules.',
        'Optimisation des itinéraires pour réduire les délais.',
        'Fiabilité pour les livraisons nationales et régionales.'
      ]
    },
    {
      icon: <Ship className="h-5 w-5 text-[#D39E00]" />,
      title: 'Opération Logistique',
      description: [
        'Fret maritime pour l’export/import international.',
        'Gestion complète des démarches portuaires.',
        'Partenariats avec des compagnies maritimes de renommée.'
      ]
    },

    {
      icon: <ShoppingBag className="h-5 w-5 text-[#D39E00]" />,
      title: 'Service de livraison',
      description: [
        'Stockage sécurisé et inventaire en temps réel.',
        'Préparation des commandes et expéditions automatisées.',
        'Livraison finale à votre client avec traçabilité complète.'
      ]
    }
  ];

  return (
    <section id="transport" className="lg:px-20 px-2 lg:py-20 py-10 bg-gray-50">
      <div className="container mx-auto px-6">
        <AnimatedSection animation="fade-up">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-4xl font-bold text-[#D39E00] mb-4">Iyara</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Iyara offre une combinaison unique de diversité de flotte, de personnalisation de services et d'engagement envers la satisfaction client.
            </p>
          </div>
        </AnimatedSection>

          <div className="mb-16 flex items-center justify-center">
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
              <AnimatedSection animation="fade-up">
                  <Card key={index} className="p-2 hover:shadow-lg transition-all duration-300 border-b-4 border-[#D39E00] border-t-0 border-l-0 border-r-0">
                    <CardHeader className="flex flex-row items-center gap-3">
                      <div>{service.icon}</div>
                      <div>
                        <CardTitle className="text-base text-gray-800">{service.title}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className=" list-inside text-sm text-gray-600 space-y-1">
                        {service.description.map((item, i) => (
                          <li key={i}> • {item}</li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
               </AnimatedSection>

              ))}
            </div>
          </div>

          <AnimatedSection animation="fade-up" delay={400} className="mt-16">
          <div className="bg-white rounded-xl overflow-hidden shadow-lg">
            <div className="relative grid grid-cols-1 md:grid-cols-2">

              <div className="block md:hidden relative h-72 overflow-hidden">
                <Image
                  src={img1}
                  alt="iyara"
                  fill
                  className="object-cover object-center"
                />
    
               <div className="absolute inset-0 bg-[#3c3a3a2b] backdrop-blur-sm md:hidden"></div>
              </div>

              <div className="absolute md:static inset-0 p-6 flex items-center z-20">
                <div className="w-full py-3">
                  <h3 className="text-xl text-center font-bold text-black  lg:text-[#2C2C2C] mb-4">
                    Vivez une expérience complète et innovante !
                  </h3>
                  <p className=" text-center text-white lg:text-[#7A7A7A] mb-6 leading-relaxed">
                    En choisissant IYARA, vous bénéficiez d'une gamme étendue de véhicules, depuis les voitures personnelles jusqu'aux moteurs de chantier, accompagnée de solutions sur mesure adaptées à votre entreprise.
                  </p>
                  <div className="md:block hidden absolute bottom-1">
                    <a href="#" className="text-[#FFD700] font-semibold flex gap-2">
                      Visiter le site <ExternalLink className="h-5 w-5" />
                    </a>
                  </div>

                  <div className="md:hidden flex items-center justify-center">
                    <a href="#" className="text-[#FFD700] font-semibold flex gap-2">
                      Visiter le site <ExternalLink className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              </div>

              <div className="hidden md:block">
                <Image
                  src={img1}
                  alt="iyara"
                  className="w-full h-auto max-h-80 object-cover object-center rounded-r-xl border-r-4 border-[#D39E00]"
                />
              </div>
            </div>
          </div>
        </AnimatedSection>


      </div>
    </section>
  );
};

export default Iyara;
