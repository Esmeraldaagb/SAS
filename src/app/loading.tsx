"use client"
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

function LoadingPage() {
  const [progress, setProgress] = useState(0);
  
  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(timer);
          return 100;
        }
        return prev + 1;
      });
    }, 30);
    
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-white z-50">
      <div className="w-64">
        {/* Abstract animated logo */}
        <motion.div
          className="relative aspect-square mb-8"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Image
            src="https://images.pexels.com/photos/3846226/pexels-photo-3846226.jpeg"
            alt="SAS Abstract Logo"
            className="w-full h-full object-cover rounded-full"
          />
          
          <motion.div 
            className="absolute inset-0 rounded-full border-4 border-transparent border-t-sas-red border-r-sas-yellow"
            animate={{ 
              rotate: 360,
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        </motion.div>
   
        <div className="flex justify-center space-x-2 mb-6">
          <AnimatePresence>
            {[0, 1, 2].map((dot) => (
              <motion.div
                key={dot}
                className="w-2 h-2 rounded-full bg-sas-red"
                initial={{ opacity: 0, y: 0 }}
                animate={{ 
                  opacity: [0.2, 1, 0.2], 
                  y: [0, -6, 0] 
                }}
                transition={{ 
                  duration: 1.5, 
                  repeat: Infinity, 
                  delay: dot * 0.3,
                  ease: "easeInOut" 
                }}
                exit={{ opacity: 0 }}
              />
            ))}
          </AnimatePresence>
        </div>
        
        {/* Progress bar */}
        <div className="flex items-center">
          <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
            <motion.div 
              className="h-full bg-gradient-to-r from-sas-red to-sas-yellow"
              style={{ width: `${progress}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>
          <p className="ml-4 text-lg font-medium text-gray-700 min-w-[48px]">
            {progress}%
          </p>
        </div>
      </div>
    </div>
  );
}

export default LoadingPage;