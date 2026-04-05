/**
 * Features Section Component
 * Highlights key features and benefits of systematic planning
 */

export default function FeaturesSection() {
  const features = [
    'Learn proven planning frameworks used by top performers',
    'Create your personalized daily success routine',
    'Master the art of prioritization and time blocking',
    'Get lifetime access to planning templates and tools',
  ];

  return (
    <section className="py-16 max-w-5xl mx-auto px-8">
      <div className="grid grid-cols-2 gap-12 items-center">
        {/* Left: Image Placeholder */}
        <div className="bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl h-96"></div>
        
        {/* Right: Content */}
        <div>
          {/* Section Heading */}
          <h2 className="text-4xl font-bold mb-6">
            Add Systematic<br />Planning to Your<br />Daily Routine
          </h2>
          
          {/* Description paragraph */}
          <p className="text-gray-400 mb-6 leading-relaxed">
            By dedicating just 15 minutes each morning to planning your day, you'll experience dramatic improvements in focus, productivity, and overall life satisfaction.
          </p>
          
          {/* Feature Checkmarks List */}
          <div className="space-y-4 mb-8">
            {features.map((feature, index) => (
              <div key={index} className="flex gap-3 items-start">
                <span className="text-yellow-400 font-bold mt-1">✓</span>
                <span className="text-white">{feature}</span>
              </div>
            ))}
          </div>
          
          {/* CTA Button */}
          <button className="bg-[#2563EB] hover:bg-blue-700 text-white px-8 py-3 rounded font-medium transition">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}
