/**
 * Benefits Section Component
 * Displays the key outcomes and benefits students will achieve
 */

interface Benefit {
  number: number;
  title: string;
  description: string;
}

export default function BenefitsSection() {
  const benefits: Benefit[] = [
    {
      number: 1,
      title: 'Develop deep work skills',
      description: 'Master techniques that help you concentrate better and produce your best work consistently',
    },
    {
      number: 2,
      title: 'Eliminate distractions',
      description: 'Learn proven strategies to create an environment free from interruptions and maintain laser focus',
    },
    {
      number: 3,
      title: 'Boost productivity',
      description: 'Accomplish more important work in less time using time-tested productivity systems and frameworks',
    },
    {
      number: 4,
      title: 'Build better habits',
      description: 'Create sustainable daily routines and practices that support long-term success and personal fulfillment',
    },
  ];

  return (
    <section className="bg-[#111827] py-20">
      <div className="max-w-5xl mx-auto px-8">
        {/* Section headline - emphasizes course structure and outcomes */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 leading-tight">
          A self-paced<br />results-driven course<br />designed to help you
        </h2>
        
        {/* Benefits grid - 2 columns on desktop, stacked on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {benefits.map((benefit) => (
            <div key={benefit.number} className="flex gap-6 items-start group hover:transform hover:scale-105 transition duration-300">
              {/* Numbered badge - circular design with blue gradient */}
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 shadow-lg">
                  <span className="text-white font-bold text-lg">{benefit.number}</span>
                </div>
              </div>
              
              {/* Benefit content - title and description */}
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-white mb-2">{benefit.title}</h3>
                <p className="text-gray-400 leading-relaxed">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
