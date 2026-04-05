/**
 * Testimonials Section Component
 * Displays real user testimonials and success stories
 */

interface Testimonial {
  id: number;
  name: string;
  role: string;
  feedback: string;
  gradient: string;
}

export default function TestimonialsSection() {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: 'Sarah Chen',
      role: 'Product Designer',
      feedback: 'This course completely transformed how I work. I\'m more focused and productive.',
      gradient: 'from-green-500 to-green-700',
    },
    {
      id: 2,
      name: 'Marcus Johnson',
      role: 'Software Engineer',
      feedback: 'I\'ve tried many courses, but this one actually delivers real, lasting results.',
      gradient: 'from-purple-500 to-purple-700',
    },
    {
      id: 3,
      name: 'Emma Rodriguez',
      role: 'Entrepreneur',
      feedback: 'The frameworks taught here are game-changing for anyone serious about their work.',
      gradient: 'from-pink-500 to-pink-700',
    },
    {
      id: 4,
      name: 'David Lee',
      role: 'Executive Coach',
      feedback: 'I recommend this course to every client who struggles with focus and productivity.',
      gradient: 'from-indigo-500 to-indigo-700',
    },
  ];

  return (
    <section className="bg-[#111827] py-16">
      <div className="max-w-6xl mx-auto px-8">
        {/* Section Heading */}
        <h2 className="text-4xl font-bold text-center mb-12">
          Real Results from<br />Real People
        </h2>
        
        {/* Testimonials Grid */}
        <div className="grid grid-cols-4 gap-6">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="text-center">
              {/* Video Placeholder - simulates testimonial video thumbnail */}
              <div className={`bg-gradient-to-br ${testimonial.gradient} rounded-lg h-48 mb-4 flex items-center justify-center`}>
                <div className="w-14 h-14 bg-white/30 rounded-full flex items-center justify-center">
                  <span className="text-white text-2xl">▶</span>
                </div>
              </div>

              {/* Testimonial Info */}
              <h4 className="font-semibold text-white">{testimonial.name}</h4>
              <p className="text-gray-400 text-sm">{testimonial.role}</p>
              
              {/* Testimonial feedback quote */}
              <p className="text-gray-400 text-xs mt-3 leading-relaxed">{testimonial.feedback}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
