/**
 * Course Modules Section Component
 * Displays course modules with individual lessons and a feature card
 */

import { PlayIcon } from '@heroicons/react/24/solid';

interface Lesson {
  id: string;
  title: string;
  duration: string;
  isPreview?: boolean;
}

interface Module {
  id: number;
  title: string;
  duration: string;
  lessons: Lesson[];
}

export default function CourseModulesSection() {
  // List of course modules with individual lessons
  const modules: Module[] = [
    {
      id: 1,
      title: 'Module 1: Foundations of Deep Work',
      duration: '1.7h of video',
      lessons: [
        { id: '1-1', title: 'Understanding Focus & Distraction', duration: '14:23', isPreview: true },
        { id: '1-2', title: 'The Science Behind Deep Work', duration: '22:51' },
        { id: '1-3', title: 'Identifying Your Productivity Killers', duration: '34:42' },
        { id: '1-4', title: 'How to Strengthen Your Attention Span', duration: '27:08' },
      ],
    },
    {
      id: 2,
      title: 'Module 2: Building Your Deep Work Routine',
      duration: '1.3h of video',
      lessons: [],
    },
    {
      id: 3,
      title: 'Module 3: Eliminating Procrastination',
      duration: '1.5h of video',
      lessons: [],
    },
    {
      id: 4,
      title: 'Module 4: Advanced Focus & Productivity Hacks',
      duration: '1.2h of video',
      lessons: [],
    },
  ];

  // Features included in the course
  const features = [
    '6h of videos - Step-by-step deep work strategies.',
    'Templates & Trackers - Stay on track effortlessly.',
    'Live Q&As - Expert guidance & accountability.',
    'Exclusive Community - Connect with others.',
  ];

  return (
    <section className="py-16 px-8">
      <div className="max-w-7xl mx-auto">
        {/* Badge - Course Curriculum */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex items-center gap-2  rounded-full px-4 py-2 border border-sky-500">
            <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
            <span className="text-sm text-white font-medium">Course Curriculum</span>
          </div>
        </div>

        {/* Section Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-300">
          Mastering Deep Work: A Structured<br />Path to Peak Productivity
        </h2>
        
        {/* Two Column Layout: Modules on left, Features card on right */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left Column - Modules List (takes 2 columns on large screens) */}
          <div className="lg:col-span-2 space-y-8">
            {modules.map((module) => (
              <div key={module.id}>
                {/* Module Header with duration */}
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-400 mb-1">{module.title}</h3>
                  <p className="text-sm text-gray-500">{module.duration}</p>
                </div>

                {/* Lessons List */}
                <div className="space-y-4">
                  {module.lessons.map((lesson) => (
                    <div key={lesson.id} className="flex items-center justify-between border-b border-gray-700 pb-4">
                      {/* Play button and lesson title */}
                      <div className="flex items-center gap-4">
                        <button className="flex items-center justify-center w-8 h-8 rounded-full text-blue-500 hover:text-blue-400 transition flex-shrink-0">
                          <PlayIcon className="w-5 h-5" />
                        </button>
                        <span className="text-gray-300">{lesson.title}</span>
                      </div>

                      {/* Duration and preview badge */}
                      <div className="flex items-center gap-3 flex-shrink-0">
                        {lesson.isPreview && (
                          <span className="bg-gray-800 text-gray-300 text-xs px-3 py-1 rounded-full">
                            Preview
                          </span>
                        )}
                        <span className="text-gray-500 text-sm">{lesson.duration}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Right Column - Feature Card */}
          <div className="lg:col-span-1">
            <div className="bg-black border border-gray-800 rounded-2xl p-8 sticky top-20">
              {/* Card heading */}
              <h3 className="text-2xl font-bold text-white mb-6">Not only video lessons!</h3>
              
              {/* Features list with checkmark bullets */}
              <ul className="space-y-4 mb-8">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full border border-gray-600 bg-gray-800 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="w-2 h-2 bg-white rounded-full"></span>
                    </span>
                    <span className="text-sm text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
              
              {/* Call-to-action button */}
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition">
                Enroll now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
