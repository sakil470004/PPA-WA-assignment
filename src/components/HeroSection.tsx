/**
 * Hero Section Component
 * Main attention-grabbing section featuring headline, tagline, CTA buttons, and promotional video
 */
'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import heroImage from '../assets/demo_video_image.png';

export default function HeroSection() {
  // Countdown timer state - starts at 4 days, 2 hours, 41 minutes, 17 seconds
  const [countdown, setCountdown] = useState({
    days: 4,
    hours: 2,
    minutes: 41,
    seconds: 17,
  });

  // Countdown timer effect - updates every second
  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        let { days, hours, minutes, seconds } = prev;

        // Decrement seconds and cascade to higher units
        if (seconds > 0) {
          seconds--;
        } else if (minutes > 0) {
          minutes--;
          seconds = 59;
        } else if (hours > 0) {
          hours--;
          minutes = 59;
          seconds = 59;
        } else if (days > 0) {
          days--;
          hours = 23;
          minutes = 59;
          seconds = 59;
        }

        return { days, hours, minutes, seconds };
      });
    }, 1000);

    // Cleanup interval on component unmount
    return () => clearInterval(timer);
  }, []);

  // Format time values to always display 2 digits
  const formatTime = (value: number) => String(value).padStart(2, '0');
   
  return (
    <section 
      className="py-16 sm:py-20 text-center px-4 sm:px-6 lg:px-8 relative overflow-hidden"
      style={{
        background: `
          repeating-linear-gradient(
            0deg,
            rgba(37, 99, 235, 0.1) 0px,
            rgba(37, 99, 235, 0.1) 1px,
            transparent 1px,
            transparent 10px
          ),
          linear-gradient(to top, rgba(37, 99, 235, 0.4) 0%, rgba(0, 0, 0, 0.7) 100%)
        `
      }}
    >
    
    <div className='max-w-6xl mx-auto relative z-10'>
      {/* Badge - indicates special preview offer with live countdown */}
      <div className="inline-block px-4 py-2 rounded-full text-[11px] sm:text-xs font-semibold mb-8 border border-blue-500/30 backdrop-blur-sm max-w-full leading-tight">
        ✨ 30% off until {formatTime(countdown.days)}d : {formatTime(countdown.hours)}h : {formatTime(countdown.minutes)}m : {formatTime(countdown.seconds)}s
      </div>
      
      {/* Main Headline - catchy and benefit-focused */}
      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl max-w-3xl mb-6 leading-tight tracking-tight mx-auto">
        Master Focus & Get More Done in Less Time
      </h1>
      
      {/* Subheading - addresses pain points */}
      <p className="text-gray-400 text-base sm:text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
        A step-by-step system to eliminate procrastination, train your brain for deep work, and boost productivity effortlessly.
      </p>
      
      {/* CTA Button Group - primary action and alternative */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
        <button className="bg-[#2563EB] hover:bg-blue-700 rounded-lg text-white px-5 py-3 text-sm sm:text-base transition w-full sm:w-auto">
          Enroll Now
        </button>
        <button className="bg-[#2563EB] hover:bg-blue-700 rounded-lg text-white px-5 py-3 text-sm sm:text-base transition w-full sm:w-auto">
          Download Free Guide
        </button>
      </div>
      <div className="relative w-full max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-lg z-20">
        {/* Video Placeholder - simulates course promo video thumbnail */}
        <Image src={heroImage} alt="Course Promo Video" className="w-full h-auto object-cover" />
        </div>
        </div>
    </section>
  );
}
