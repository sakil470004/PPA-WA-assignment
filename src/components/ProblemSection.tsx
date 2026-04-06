"use client";

/**
 * Problem Section Component
 * Displays the problem/pain point that the course helps solve
 * Features a badge, headline text, and visual imagery of people experiencing the problem
 */

import Image from 'next/image';
import person1 from '@/assets/poblem_section_img/person1.png';
import person2 from '@/assets/poblem_section_img/person2.png';
import person3 from '@/assets/poblem_section_img/person3.png';

// Helper function to wrap each letter with staggered animation delay
const AnimatedText = ({ text }: { text: string }) => {
  return (
    <>
      {text.split('').map((char, index) => (
        <span
          key={index}
          className="animate-letter-glow inline-block"
          style={{
            animationDelay: `${index * 0.05}s`, // 50ms delay between each letter
          }}
        >
          {char === ' ' ? '\u00A0' : char} {/* Non-breaking space for spaces */}
        </span>
      ))}
    </>
  );
};

export default function ProblemSection() {
  // Sample images representing people facing productivity challenges
  // Images imported directly from src/assets/poblem_section_img/
  const problemImages = [
    {
      alt: 'Person feeling overwhelmed with tasks',
      src: person1,
    },
    {
      alt: 'Person struggling with focus',
      src: person2,
    },
    {
      alt: 'Person working on laptop',
      src: person3,
    },
  ];

  const headingText = "If you struggle to focus, feel overwhelmed by endless tasks, or procrastinate instead of making progress, you're not alone.";

  return (
    <section className="bg-[#1a202c] py-20">
      <div className="max-w-6xl mx-auto px-8 text-center">
        {/* Badge - Introduces the main pain point */}
        <div className="inline-flex items-center gap-2 bg-[#1f2937] rounded-full px-6 py-2 mb-8 border border-gray-700">
          <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
          <span className="text-sm text-gray-300">Are Distractions Holding You Back?</span>
        </div>

        {/* Main heading - Letter by letter animation from left to right */}
        <h2 className="text-4xl md:text-5xl font-bold mb-12 leading-tight max-w-5xl mx-auto text-gray-400">
          <AnimatedText text={headingText} />
        </h2>

        {/* Problem Images Grid - Visual representation of the problems */}
        <div className="flex justify-center items-center gap-4">
          {problemImages.map((image, index) => (
            <div key={index} className="relative">
              {/* Rounded image container - Shows real people facing these challenges */}
              <div className="w-32 h-40 rounded-2xl overflow-hidden">
                {/* Display actual problem scenario images */}
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={128}
                  height={160}
                  className="object-cover w-full h-full"
                  priority={index === 0}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
