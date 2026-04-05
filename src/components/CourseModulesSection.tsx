/**
 * Course Modules Section Component
 * Displays collapsible course modules with descriptions
 */

interface Module {
  id: number;
  title: string;
  description: string;
}

export default function CourseModulesSection() {
  const modules: Module[] = [
    {
      id: 1,
      title: 'Module 1: Introduction to Deep Work & Peak Performance',
      description: 'Learn the fundamentals of deep work and how it can transform your productivity and career.',
    },
    {
      id: 2,
      title: 'Module 2: Building Your Deep Work Foundation',
      description: 'Establish the habits and practices that support sustained focus and deep work.',
    },
    {
      id: 3,
      title: 'Module 3: Advanced Deep Work Techniques',
      description: 'Master advanced strategies for maintaining focus and maximizing output.',
    },
    {
      id: 4,
      title: 'Module 4: Sustaining Momentum & Avoiding Burnout',
      description: 'Learn how to maintain your productivity journey without experiencing burnout.',
    },
  ];

  return (
    <section className="py-16 max-w-3xl mx-auto px-8">
      {/* Section Heading */}
      <h2 className="text-4xl font-bold text-center mb-12">
        Mastering Deep Work: A Structured<br />Path to Peak Productivity
      </h2>
      
      {/* Modules List - collapsible details */}
      <div className="space-y-3">
        {modules.map((module) => (
          <details key={module.id} className="border border-gray-700 rounded-lg p-5 cursor-pointer group">
            {/* Summary - clickable header */}
            <summary className="flex justify-between items-center font-semibold">
              <span className="text-white">{module.title}</span>
              {/* Rotating plus icon for open/closed state */}
              <span className="text-gray-400 group-open:rotate-45 transition">+</span>
            </summary>
            
            {/* Module description - revealed when expanded */}
            <p className="text-gray-400 mt-4 text-sm">{module.description}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
