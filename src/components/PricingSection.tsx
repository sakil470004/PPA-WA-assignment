/**
 * Pricing Section Component
 * Displays course pricing, features, and enrollment CTA
 */

export default function PricingSection() {
  const pricingFeatures = [
    'Lifetime access to all 4 modules',
    'Planning templates and productivity tools',
    'Weekly live Q&A sessions for 3 months',
    '30-day money-back guarantee',
  ];

  return (
    <section className="py-20 max-w-2xl mx-auto px-8">
      <div className="bg-[#111827] rounded-xl p-12">
        {/* Pricing Header */}
        <h2 className="text-3xl font-bold text-center mb-2">
          Invest in Your<br />Deep Work Skills
        </h2>
        
        {/* Subheading */}
        <p className="text-gray-400 text-center mb-10">
          Get lifetime access to all courses, templates, and future updates.
        </p>
        
        {/* Price Display */}
        <div className="text-center mb-12">
          <div className="text-6xl font-bold text-white mb-2">$349</div>
          <p className="text-gray-400">One-time payment • No recurring fees</p>
        </div>
        
        {/* Features List - what's included */}
        <div className="space-y-3 mb-10">
          {pricingFeatures.map((feature, index) => (
            <div key={index} className="flex gap-3 items-center">
              <span className="text-blue-400 font-bold">✓</span>
              <span className="text-white">{feature}</span>
            </div>
          ))}
        </div>
        
        {/* Enrollment CTA Button */}
        <button className="w-full bg-[#2563EB] hover:bg-blue-700 text-white py-3 rounded font-semibold transition">
          Enroll Now - $349
        </button>
      </div>
    </section>
  );
}
