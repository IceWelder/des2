"use client"
import React, { useState, useEffect } from 'react';

export default function Footer() {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  useEffect(() => {
    
    const intervalId = setInterval(() => {
      const newYear = new Date().getFullYear();
      if (newYear !== currentYear) {
        setCurrentYear(newYear);
      }
    }, 60000); 

    return () => clearInterval(intervalId);
  }, [currentYear]);

  return (
    <section className="bg-red-500 text-white py-4 md:grid-cols-2 lg:grid-cols-3">
      <div className="container mx-auto text-center">
        &copy; {currentYear} Fórmula 1
      </div>
    </section>
  );
}
