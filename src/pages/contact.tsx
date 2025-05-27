'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import AnimatedSection from '@/components/animatedSection';
import { Send } from 'lucide-react';
import MapLocation from '@/components/mapLocation';
const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Votre message a été envoyé. Nous vous contacterons bientôt!');
    setFormData({
      name: '',
      email: '',
      company: '',
      service: '',
      message: ''
    });
  };

  return (
    <section id="contact" className="py-12 lg:px-20 px-2 bg-white">
      <div className="container mx-auto px-6">
        <AnimatedSection animation="fade-up">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Nous contacter</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discutons de vos projets et de comment nos divisions peuvent vous aider à atteindre vos objectifs.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <AnimatedSection animation="slide-in-left">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="name">Nom complet</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Votre nom"
                    
                  />
                </div>
                <div>
                  <Label htmlFor="email">Adresse email</Label>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="votre@email.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="company">Entreprise</Label>
                  <Input
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Nom de votre entreprise"
                  />
                </div>
                <div>
                  <Label htmlFor="service">Service concerné</Label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full mt-2 px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#2C2C2C] bg-white"
                  >
                    <option value="">Sélectionnez un service</option>
                    <option value="transport">Iyara</option>
                    <option value="technology">Squirel</option>
                    <option value="consulting">Mirobex</option>
                    <option value="other">Autre</option>
                  </select>
                </div>
              </div>

              <div>
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  placeholder="Décrivez votre projet ou vos besoins..."
                />
              </div>

              <div>
                <Button type="submit" size="lg" className="w-full bg-[#C0392B] md:w-auto">
                  Envoyer le message <Send className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </form>
          </AnimatedSection>

          <AnimatedSection animation="slide-in-right">

              <section className="py-5 px-6">
                  <h2 className="text-2xl font-bold text-center mb-2">Notre Localisation</h2>
                  <MapLocation />
              </section>

          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default Contact;
