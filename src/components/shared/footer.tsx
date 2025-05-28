"use client"
import React from 'react';
import { Facebook, Twitter, Linkedin, Instagram, MapPin, Mail, Phone } from 'lucide-react';
import Image from 'next/image';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#2F2F2F] text-white lg:px-20 px-6 lg:pt-12 pt-6 pb-8">
      <div className="max-w-8xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          <div>
            <Image src="/logo.png" width={60} height={60} alt="logo" />
            <p className="text-[#BDBDBD] text-sm mt-4 mb-6 leading-relaxed">
              Nous sommes un groupe diversifié spécialisé dans le transport, la technologie et le conseil aux entreprises cherchant à {"s'implanter à l'international"}.
            </p>
            <div className="flex space-x-4">
              {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
                <a key={i} href="#" className="text-[#BDBDBD] hover:text-[#F4B400] transition-colors duration-300">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4 text-[#E0E0E0]">Nos Entreprises</h4>
            <ul className="space-y-2 text-sm">
              {["Iyara", "Mirobex", "Squirel"].map((name, i) => (
                <li key={i}>
                  <a href="#" className="text-[#BDBDBD] hover:text-[#F4B400] transition-colors duration-300">
                    {name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4 text-[#E0E0E0]">Liens Rapides</h4>
            <ul className="space-y-2 text-sm">
              {["À propos", "Services", "Carrières", "Actualités", "Contact"].map((label, i) => (
                <li key={i}>
                  <a href="#" className="text-[#BDBDBD] hover:text-[#F4B400] transition-colors duration-300">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4 text-[#E0E0E0]">Nous Contacter</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start">
                <MapPin className="mr-3 text-[#F4B400] h-4 w-4 mt-1" />
                <p className="text-[#BDBDBD]">St Rita (Gbedagba) Cotonou, Bénin</p>
              </div>
              <div className="flex items-center">
                <Phone className="mr-3 text-[#F4B400] h-4 w-4" />
                <p className="text-[#BDBDBD]">+33 1 23 45 67 89</p>
              </div>
              <div className="flex items-center">
                <Mail className="mr-3 text-[#F4B400] h-4 w-4" />
                <p className="text-[#BDBDBD]">contact@groupecorp.com</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-10 pt-6">
          <p className="text-[#BDBDBD] text-xs text-center">
            © {new Date().getFullYear()} Société Africaine des Services. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
