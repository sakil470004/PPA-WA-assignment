/**
 * Testimonials Section Component
 * Displays testimonials carousel with alternating text and image cards
 * Text cards: dark background with testimonial text
 * Image cards: actual image with play button overlay
 */

'use client';

import { useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';
import person1 from '@/assets/poblem_section_img/person1.png';
import person2 from '@/assets/poblem_section_img/person2.png';

interface TestimonialCard {
  id: number;
  type: 'text' | 'image'; // Card type: text-only or image with play button
  name: string;
  role: string;
  feedback: string;
  avatar: string;
  imageSrc?: typeof person1; // Image import for image type cards
}

export default function TestimonialsSection() {
  // Testimonials carousel with alternating text and image cards
  const testimonials: TestimonialCard[] = [
    {
      id: 1,
      type: 'text',
      name: 'Alex Carter',
      role: 'Freelance Designer',
      feedback: 'As someone who juggles multiple projects, staying focused was always a challenge. This course gave me the tools to cut through distractions and work with absolute clarity. My productivity has never been better!',
      avatar: 'AC',
    },
    {
      id: 2,
      type: 'image',
      name: 'Daniel Foster',
      role: 'Content creator',
      feedback: 'I never realized how much distractions were holding me back. After applying the deep work techniques, I feel more in control of my time and energy. My efficiency has doubled!',
      avatar: 'DF',
      imageSrc: person1,
    },
    {
      id: 3,
      type: 'text',
      name: 'Mark Davidson',
      role: 'Software Developer',
      feedback: 'Procrastination was my biggest enemy until now. This course taught me constant action strategies and techniques that have skyrocketed my output.',
      avatar: 'MD',
    },
    {
      id: 4,
      type: 'image',
      name: 'Tom David',
      role: 'Entrepreneur',
      feedback: 'The deep work framework changed my entire approach to business. I\'m now completing projects 40% faster than before.',
      avatar: 'TD',
      imageSrc: person2,
    },
    {
      id: 5,
      type: 'text',
      name: 'James Wilson',
      role: 'Entrepreneur',
      feedback: 'This is exactly what every ambitious person needs. The strategies are practical and immediately applicable. Highly recommend!',
      avatar: 'JW',
    },
  ];

  // Carousel state - shows 4 cards at a time
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerView = 4;

  // Get visible testimonials
  const getVisibleTestimonials = () => {
    const maxIndex = Math.max(0, testimonials.length - itemsPerView);
    const safeIndex = Math.min(currentIndex, maxIndex);
    return testimonials.slice(safeIndex, safeIndex + itemsPerView);
  };

  // Navigation handlers
  const handleNext = () => {
    const maxIndex = Math.max(0, testimonials.length - itemsPerView);
    setCurrentIndex((prev) => (prev + 1 > maxIndex ? maxIndex : prev + 1));
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const visibleTestimonials = getVisibleTestimonials();

  return (
    <section className="bg-[#1a202c] py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Badge - Testimonials */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex items-center gap-2 bg-blue-600 rounded-full px-4 py-2 border border-blue-500">
            <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
            <span className="text-sm text-white font-medium">Testimonials</span>
          </div>
        </div>

        {/* Section Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-6 text-gray-300">
          Real Results from<br />Real People
        </h2>

        {/* Navigation and Subtext Row */}
        <div className="flex flex-col sm:flex-row justify-between sm:items-end items-start gap-4 mb-12">
          {/* Subtext */}
          <p className="text-gray-400 text-base sm:text-lg">Join with 5K other students</p>

          {/* Navigation Buttons */}
          <div className="flex gap-4 items-center">
            <button
              onClick={handlePrev}
              aria-disabled={currentIndex === 0}
              tabIndex={currentIndex === 0 ? -1 : 0}
              className={`w-12 h-12 rounded-full bg-black border border-gray-700 flex items-center justify-center text-white transition ${currentIndex === 0 ? 'cursor-not-allowed opacity-50' : 'hover:bg-gray-900 hover:border-gray-600'}`}
              aria-label="Previous testimonial"
            >
              <ChevronLeftIcon className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              aria-disabled={currentIndex >= testimonials.length - itemsPerView}
              tabIndex={currentIndex >= testimonials.length - itemsPerView ? -1 : 0}
              className={`w-12 h-12 rounded-full bg-black border border-gray-700 flex items-center justify-center text-white transition ${currentIndex >= testimonials.length - itemsPerView ? 'cursor-not-allowed opacity-50' : 'hover:bg-gray-900 hover:border-gray-600'}`}
              aria-label="Next testimonial"
            >
              <ChevronRightIcon className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Testimonials Carousel - Mix of text and image cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {visibleTestimonials.map((testimonial) =>
            testimonial.type === 'text' ? (
              // Text-only card
              <div
                key={testimonial.id}
                className="bg-black border border-gray-800 rounded-2xl p-6 flex flex-col justify-between min-h-80 sm:min-h-96 group hover:border-gray-700 transition"
              >
                {/* Avatar */}
                    <div className="w-10 h-10 rounded-full bg-linear-to-br from-blue-400 to-blue-600 flex items-center justify-center mb-4">
                  <span className="text-white font-bold text-xs">{testimonial.avatar}</span>
                </div>

                {/* Testimonial Text */}
                <p className="text-gray-300 text-sm leading-relaxed grow">
                  {testimonial.feedback}
                </p>

                {/* Name and Role - Bottom */}
                <div className="border-t border-gray-700 pt-4 mt-6">
                  <h4 className="text-white font-semibold text-sm">{testimonial.name}</h4>
                  <p className="text-gray-400 text-xs mt-1">{testimonial.role}</p>
                </div>
              </div>
            ) : (
              // Image card with play button and actual image
              <div
                key={testimonial.id}
                className="relative rounded-2xl overflow-hidden group min-h-80 sm:min-h-96 flex flex-col justify-between"
              >
                {/* Background Image */}
                {testimonial.imageSrc && (
                  <Image
                    src={testimonial.imageSrc}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                    priority={false}
                  />
                )}

                {/* Dark overlay */}
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition"></div>

                {/* Content Container */}
                <div className="relative z-10 p-6 flex flex-col justify-between h-full">
                  {/* Avatar - Top Left */}
                  <div className="w-10 h-10 rounded-full bg-linear-to-br from-blue-400 to-blue-600 flex items-center justify-center self-start">
                    <span className="text-white font-bold text-xs">{testimonial.avatar}</span>
                  </div>

                  {/* Play Button - Center */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 bg-white rounded-full flex items-center justify-center group-hover:scale-110 transition transform">
                      <span className="text-blue-600 text-xl font-bold ml-1">▶</span>
                    </div>
                  </div>

                  {/* Text Content - Bottom */}
                  <div className="space-y-3">
                    {/* Name and Role */}
                    <div>
                      <h4 className="text-white font-semibold text-sm">{testimonial.name}</h4>
                      <p className="text-gray-200 text-xs mt-1">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}
