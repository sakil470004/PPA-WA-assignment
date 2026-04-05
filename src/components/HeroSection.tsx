/**
 * Hero Section Component
 * Main attention-grabbing section featuring headline, tagline, CTA buttons, and promotional video
 */
import Image from 'next/image';
import heroImage from '../assets/demo_video_image.png';

export default function HeroSection() {
   
  return (
    <section 
      className="py-20 text-center px-8 relative overflow-hidden"
      style={{
        background: `
          repeating-linear-gradient(
            0deg,
            rgba(37, 99, 235, 0.1) 0px,
            rgba(37, 99, 235, 0.1) 1px,
            transparent 1px,
            transparent 10px
          ),
          linear-gradient(to top, rgba(37, 99, 235, 0.4) 0%, rgba(0, 0, 0, 0.7) 100%)
        `
      }}
    >
    
    <div className='max-w-6xl mx-auto relative z-10'>
      {/* Badge - indicates special preview offer */}
      <div className="inline-block   px-4 py-2 rounded-full text-xs font-semibold mb-8 border border-blue-500/30 backdrop-blur-sm">
        ✨ 30% off until 4d : 2h : 41m : 17s
      </div>
      
      {/* Main Headline - catchy and benefit-focused */}
      <h1 className="text-6xl md:text-7xl  max-w-3xl mb-6 leading-tight tracking-tight mx-auto">
        Master Focus & Get More Done in Less Time
      </h1>
      
      {/* Subheading - addresses pain points */}
      <p className="text-gray-400 text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
        A step-by-step system to eliminate procrastination, train your brain for deep work, and boost productivity effortlessly.
      </p>
      
      {/* CTA Button Group - primary action and alternative */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
        <button className="bg-[#2563EB] hover:bg-blue-700 rounded-lg text-white px-3 py-2 text-sm transition">
          Enroll Now
        </button>
        <button className="bg-[#2563EB] hover:bg-blue-700 rounded-lg text-white px-3 py-2 text-sm transition">
          Download Free Guide
        </button>
      </div>
      <div className="relative w-full max-w-4xl mx-auto rounded-lg overflow-hidden shadow-lg z-20">
        {/* Video Placeholder - simulates course promo video thumbnail */}
        <Image src={heroImage} alt="Course Promo Video" className="w-full h-auto object-cover" />
        </div>
        </div>
    </section>
  );
}
