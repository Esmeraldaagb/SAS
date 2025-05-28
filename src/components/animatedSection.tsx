"use client";
import React, { useEffect, useRef, useState } from "react";

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  animation?: 'fade-up' | 'fade-in' | 'slide-in-right' | 'slide-in-left';
  delay?: number;
  threshold?: number;
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  className = '',
  animation = 'fade-up',
  delay = 0,
  threshold = 0.2,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
  
    const handleScroll = () => {
      const rect = section.getBoundingClientRect();
      if (rect.top <= window.innerHeight * (1 - threshold)) {
        setIsVisible(true);
      }
    };
  
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Vérifie dès le montage
  
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [threshold]);
  
  const animationClasses = {
    'fade-up': 'opacity-0 translate-y-8',
    'fade-in': 'opacity-0',
    'slide-in-right': 'opacity-0 translate-x-8',
    'slide-in-left': 'opacity-0 -translate-x-8',
  };

  const activeClass = isVisible
    ? 'opacity-100 translate-y-0 translate-x-0'
    : animationClasses[animation];

  return (
    <div
      ref={sectionRef}
      className={`transition-all duration-700 ease-out ${activeClass} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;