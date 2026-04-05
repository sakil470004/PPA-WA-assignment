/**
 * Hero Section Component
 * Main attention-grabbing section featuring headline, tagline, CTA buttons, and promotional video
 */

export default function HeroSection() {
  return (
    <section className="py-20 text-center max-w-6xl mx-auto px-8">
      {/* Badge - indicates special preview offer */}
      <div className="inline-block bg-gradient-to-r from-blue-500/20 to-blue-400/10 text-blue-300 px-4 py-2 rounded-full text-xs font-semibold mb-8 border border-blue-500/30 backdrop-blur-sm">
        ✨ Free Preview Available
      </div>
      
      {/* Main Headline - catchy and benefit-focused */}
      <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight tracking-tight">
        Master Focus &<br />Get More Done<br />in Less Time
      </h1>
      
      {/* Subheading - addresses pain points */}
      <p className="text-gray-400 text-xl max-w-3xl mx-auto mb-10 leading-relaxed">
        Stop feeling rushed, overwhelmed, or procrastinating. Learn proven deep work techniques used by top performers to achieve peak productivity.
      </p>
      
      {/* CTA Button Group - primary action and alternative */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
        <button className="bg-gradient-to-r from-[#2563EB] to-blue-600 hover:from-blue-700 hover:to-blue-800 text-white px-10 py-4 rounded-lg font-semibold transition transform hover:scale-105 shadow-lg">
          Enroll Now
        </button>
        <button className="border-2 border-gray-600 text-white px-10 py-4 rounded-lg font-semibold hover:border-blue-500 hover:bg-blue-500/10 transition">
          Download Free Guide
        </button>
      </div>
      
      {/* Video Showcase Section - hero visual with play action */}
      <div className="relative max-w-4xl mx-auto">
        {/* Video thumbnail container with gradient background */}
        <div className="relative rounded-2xl overflow-hidden shadow-2xl">
          {/* Gradient background simulating video thumbnail */}
          <div className="bg-gradient-to-br from-blue-600 via-purple-600 to-orange-500 h-96 flex items-center justify-center relative">
            {/* Subtle noise/texture overlay */}
            <div className="absolute inset-0 opacity-10 bg-repeating-linear-gradient(45deg, transparent, transparent 3px, rgba(255,255,255,.1) 3px, rgba(255,255,255,.1) 6px)"></div>
            
            {/* Play Button - floating circle with icon */}
            <div className="relative z-10">
              <button className="w-24 h-24 rounded-full bg-white/20 backdrop-blur-sm border-4 border-white/40 flex items-center justify-center hover:bg-white/30 hover:border-white/60 transition-all transform hover:scale-110 group shadow-lg">
                {/* Play icon - centered triangle */}
                <svg className="w-10 h-10 text-white fill-current ml-1 group-hover:scale-125 transition" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              </button>
            </div>
          </div>
          
          {/* Border frame effect */}
          <div className="absolute inset-0 rounded-2xl border-8 border-black/50 pointer-events-none"></div>
        </div>
        
        {/* Optional: Subtitle under video */}
        <p className="text-gray-400 text-sm mt-6 text-center">
          Preview the first module and discover how you can transform your productivity in just 15 minutes a day
        </p>
      </div>
    </section>
  );
}
