/**
 * Problem Section Component
 * Displays common problems/pain points that the course helps solve
 */

export default function ProblemSection() {
  const problems = [
    {
      title: 'Time Management',
      description: 'Struggling to prioritize your tasks effectively',
      gradient: 'from-orange-400 to-orange-600',
    },
    {
      title: 'Focus Issues',
      description: 'Getting distracted and losing concentration',
      gradient: 'from-amber-400 to-amber-600',
    },
    {
      title: 'Progress Blocks',
      description: 'Finding it hard to move forward on projects',
      gradient: 'from-yellow-400 to-yellow-600',
    },
  ];

  return (
    <section className="bg-[#111827] py-16">
      <div className="max-w-5xl mx-auto px-8">
        {/* Problem Headline - Sets up context for the problems */}
        <p className="text-gray-300 text-center mb-12 text-lg leading-relaxed">
          If you struggle to focus, feel overwhelmed<br />
          by endless tasks, or procrastinate instead<br />
          of making progress, you're not alone.
        </p>
        
        {/* 3 Problem Cards Grid */}
        <div className="grid grid-cols-3 gap-8">
          {problems.map((problem, index) => (
            <div key={index} className="text-center">
              {/* Gradient placeholder for problem icon/visual */}
              <div className={`bg-gradient-to-br ${problem.gradient} rounded-xl h-40 mb-4`}></div>
              
              {/* Problem title and description */}
              <h3 className="font-semibold text-lg">{problem.title}</h3>
              <p className="text-gray-400 text-sm mt-2">{problem.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
