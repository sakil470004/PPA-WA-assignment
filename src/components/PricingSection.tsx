/**
 * Pricing Section Component
 * Displays introduction card and pricing card with countdown timer
 * Two-column layout with bonuses on left, pricing details on right
 */

'use client';

import { useState, useEffect } from 'react';

export default function PricingSection() {
  // Pricing features list with exact text from design
  const features = [
    '6h of videos - Step-by-step deep work strategies.',
    'Templates & Trackers – Stay on track effortlessly.',
    'Live Q&As – Expert guidance & accountability.',
    'Exclusive Community – Connect with others.',
  ];

  // Bonus items for left card - with plus icon style
  const bonuses = [
    'Bonus: 1:1 coaching session to boost focus.',
    'Discount: Save 30% when you enroll now!',
  ];

  // Countdown timer state
  const [countdown, setCountdown] = useState({
    days: 4,
    hours: 2,
    minutes: 41,
    seconds: 17,
  });

  // Countdown timer effect
  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        let { days, hours, minutes, seconds } = prev;

        // Decrement seconds
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

    return () => clearInterval(timer);
  }, []);

  // Format countdown value to always show 2 digits
  const formatTime = (value: number) => String(value).padStart(2, '0');

  return (
    <section className="bg-[#1a202c] py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Two Column Layout - Equal Height Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - Introduction Card */}
          <div className="col-span-1 lg:col-span-2 bg-black border border-gray-800 rounded-3xl p-6 sm:p-10 min-h-full flex flex-col">
            {/* Badge - Introducing */}
            <div className="inline-flex items-center gap-2 mb-6">
              <span className="w-2.5 h-2.5 bg-blue-500 rounded-full"></span>
              <span className="text-xs text-gray-400 font-medium">Introducing</span>
            </div>

            {/* Main Heading */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
              The Deep Work Blueprint
            </h2>

            {/* Subheading */}
            <p className="text-gray-400 text-base mb-10">
              What extra you will get if you enroll now
            </p>

            {/* Bonuses List */}
            <div className="space-y-5 flex-1">
              {bonuses.map((bonus, index) => (
                <div key={index} className="flex items-start gap-4">
                  {/* Plus Icon Circle */}
                  <div className="w-6 h-6 rounded-full border-2 border-gray-600 flex items-center justify-center flex-none mt-0.5">
                    <span className="text-gray-400 font-light text-sm">+</span>
                  </div>
                  <span className="text-gray-300 text-sm leading-relaxed">{bonus}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Pricing Card */}
          <div className="bg-black border border-gray-800 rounded-3xl p-6 sm:p-10 min-h-full flex flex-col">
            {/* Top Section - Price, Original Price and Badge */}
            <div className="mb-8">
              {/* Price Row with Badge */}
              <div className="flex flex-col sm:flex-row sm:items-start items-start justify-between mb-6 gap-3 sm:gap-0">
                <div className="flex items-baseline gap-3">
                  <span className="text-4xl sm:text-5xl font-bold text-white">${349}</span>
                  <span className="text-lg sm:text-xl text-gray-500 line-through">${500}</span>
                </div>
                {/* 30% off Badge */}
                <div className="bg-blue-600 text-white text-xs font-bold px-3 py-1.5 rounded-full whitespace-nowrap">
                  30% off
                </div>
              </div>

              {/* Countdown Timer */}
              <p className="text-gray-400 text-sm mb-8">
                30% off until {formatTime(countdown.days)}d : {formatTime(countdown.hours)}h : {formatTime(countdown.minutes)}m : {formatTime(countdown.seconds)}s
              </p>

              {/* Features List with Checkmarks */}
              <div className="space-y-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-gray-400 flex-none mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-300 text-sm leading-relaxed">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Enroll Button */}
            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-xl transition duration-200 text-base">
              Enroll now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
