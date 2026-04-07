/**
 * Benefits Section Component
 * Displays the key outcomes and benefits students will achieve
 * Uses DaisyUI steps component for vertical timeline with Heroicons
 */

import { LightBulbIcon, SparklesIcon, CheckCircleIcon, ArrowPathIcon } from '@heroicons/react/24/solid';

interface Benefit {
  title: string;
  icon: React.ReactNode;
}

export default function BenefitsSection() {
  // Benefits displayed in vertical timeline using DaisyUI steps with icons
  const benefits: Benefit[] = [
    {
      title: 'Develop laser-sharp focus & eliminate distractions.',
      icon: <LightBulbIcon className="w-6 h-6 text-white" />,
    },
    {
      title: 'Master deep work techniques for smarter productivity.',
      icon: <SparklesIcon className="w-6 h-6 text-white" />,
    },
    {
      title: 'Overcome procrastination & get more done.',
      icon: <CheckCircleIcon className="w-6 h-6 text-white" />,
    },
    {
      title: 'Build lasting habits for long-term success.',
      icon: <ArrowPathIcon className="w-6 h-6 text-white" />,
    },
  ];

  return (
    <section className="bg-[#1a202c] py-16 sm:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Badge - Course name */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex items-center gap-2 bg-[#1f2937] rounded-full px-6 py-2 border border-gray-700">
            <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
            <span className="text-sm text-gray-300">The Deep Work Blueprint</span>
          </div>
        </div>

        {/* Section headline */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-20 leading-tight max-w-4xl mx-auto text-white">
          A self-paced, results-driven course designed to help you
        </h2>

        {/* DaisyUI Steps Component - Vertical timeline */}
        <div className="flex justify-center">
          <ul className="steps steps-vertical-custom w-full max-w-4xl ">
            {benefits.map((benefit, index) => (
              <li key={index} className="step step-primary mx-auto">
                <div className="flex flex-col items-start gap-3 ml-4 sm:ml-6 mb-8 translate-y-0 sm:translate-y-15 ">
                  {/* Icon inside circle */}
                  <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-opacity-50 border border-blue-500 ">
                    {benefit.icon}
                  </div>
                  {/* Benefit text */}
                  <div className="text-left text-gray-300 mb-6">
                    <p className="text-base sm:text-lg font-medium max-w-sm sm:max-w-60">{benefit.title}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
