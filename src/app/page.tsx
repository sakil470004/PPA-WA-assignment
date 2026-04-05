// Main homepage for Deep Work Blueprint - a focus and productivity course
// Built with Next.js & Tailwind CSS (Dark theme with blue accents)

export default function Home() {
  return (
    <div className="bg-[#0A0E27] text-white">
      {/* ========== NAVIGATION ========== */}
      <nav className="border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-8 py-4 flex items-center justify-between">
          {/* Logo */}
          <div className="text-xl font-bold">QFm</div>
          
          {/* Nav Links - Center */}
          <div className="flex gap-8 text-sm text-gray-300">
            <a href="#" className="hover:text-white transition">Home</a>
            <a href="#" className="hover:text-white transition">Features</a>
            <a href="#" className="hover:text-white transition">Pricing</a>
            <a href="#" className="hover:text-white transition">Contact</a>
          </div>
          
          {/* Blue Button */}
          <button className="bg-[#2563EB] hover:bg-blue-700 text-white px-6 py-2 rounded font-medium transition">
            Get Started
          </button>
        </div>
      </nav>

      {/* ========== HERO SECTION ========== */}
      {/* Hero section featuring course headline, tagline, and promotional video thumbnail */}
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

      {/* ========== PROBLEM SECTION ========== */}
      <section className="bg-[#111827] py-16">
        <div className="max-w-5xl mx-auto px-8">
          {/* Problem Headline */}
          <p className="text-gray-300 text-center mb-12 text-lg leading-relaxed">
            If you struggle to focus, feel overwhelmed<br />
            by endless tasks, or procrastinate instead<br />
            of making progress, you're not alone.
          </p>
          
          {/* 3 Problem Cards */}
          <div className="grid grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="text-center">
              <div className="bg-gradient-to-br from-orange-400 to-orange-600 rounded-xl h-40 mb-4"></div>
              <h3 className="font-semibold text-lg">Time Management</h3>
              <p className="text-gray-400 text-sm mt-2">Struggling to prioritize your tasks effectively</p>
            </div>
            
            {/* Card 2 */}
            <div className="text-center">
              <div className="bg-gradient-to-br from-amber-400 to-amber-600 rounded-xl h-40 mb-4"></div>
              <h3 className="font-semibold text-lg">Focus Issues</h3>
              <p className="text-gray-400 text-sm mt-2">Getting distracted and losing concentration</p>
            </div>
            
            {/* Card 3 */}
            <div className="text-center">
              <div className="bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-xl h-40 mb-4"></div>
              <h3 className="font-semibold text-lg">Progress Blocks</h3>
              <p className="text-gray-400 text-sm mt-2">Finding it hard to move forward on projects</p>
            </div>
          </div>
        </div>
      </section>

      {/* ========== FEATURES SECTION ========== */}
      <section className="py-16 max-w-5xl mx-auto px-8">
        <div className="grid grid-cols-2 gap-12 items-center">
          {/* Left: Image Placeholder */}
          <div className="bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl h-96"></div>
          
          {/* Right: Content */}
          <div>
            <h2 className="text-4xl font-bold mb-6">
              Add Systematic<br />Planning to Your<br />Daily Routine
            </h2>
            
            <p className="text-gray-400 mb-6 leading-relaxed">
              By dedicating just 15 minutes each morning to planning your day, you'll experience dramatic improvements in focus, productivity, and overall life satisfaction.
            </p>
            
            {/* Feature Checkmarks */}
            <div className="space-y-4 mb-8">
              <div className="flex gap-3 items-start">
                <span className="text-yellow-400 font-bold mt-1">✓</span>
                <span className="text-white">Learn proven planning frameworks used by top performers</span>
              </div>
              <div className="flex gap-3 items-start">
                <span className="text-yellow-400 font-bold mt-1">✓</span>
                <span className="text-white">Create your personalized daily success routine</span>
              </div>
              <div className="flex gap-3 items-start">
                <span className="text-yellow-400 font-bold mt-1">✓</span>
                <span className="text-white">Master the art of prioritization and time blocking</span>
              </div>
              <div className="flex gap-3 items-start">
                <span className="text-yellow-400 font-bold mt-1">✓</span>
                <span className="text-white">Get lifetime access to planning templates and tools</span>
              </div>
            </div>
            
            <button className="bg-[#2563EB] hover:bg-blue-700 text-white px-8 py-3 rounded font-medium transition">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* ========== BENEFITS SECTION ========== */}
      {/* Highlights the key outcomes students will achieve from the course */}
      <section className="bg-[#111827] py-20">
        <div className="max-w-5xl mx-auto px-8">
          {/* Section headline - emphasizes course structure and outcomes */}
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 leading-tight">
            A self-paced<br />results-driven course<br />designed to help you
          </h2>
          
          {/* Benefits grid - 2 columns on desktop, stacked on mobile */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Benefit 1 - Develop deep work skills */}
            <div className="flex gap-6 items-start group hover:transform hover:scale-105 transition duration-300">
              {/* Numbered badge - circular design with blue gradient */}
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 shadow-lg">
                  <span className="text-white font-bold text-lg">1</span>
                </div>
              </div>
              
              {/* Benefit content - title and description */}
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-white mb-2">Develop deep work skills</h3>
                <p className="text-gray-400 leading-relaxed">Master techniques that help you concentrate better and produce your best work consistently</p>
              </div>
            </div>
            
            {/* Benefit 2 - Eliminate distractions */}
            <div className="flex gap-6 items-start group hover:transform hover:scale-105 transition duration-300">
              {/* Numbered badge */}
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 shadow-lg">
                  <span className="text-white font-bold text-lg">2</span>
                </div>
              </div>
              
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-white mb-2">Eliminate distractions</h3>
                <p className="text-gray-400 leading-relaxed">Learn proven strategies to create an environment free from interruptions and maintain laser focus</p>
              </div>
            </div>
            
            {/* Benefit 3 - Boost productivity */}
            <div className="flex gap-6 items-start group hover:transform hover:scale-105 transition duration-300">
              {/* Numbered badge */}
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 shadow-lg">
                  <span className="text-white font-bold text-lg">3</span>
                </div>
              </div>
              
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-white mb-2">Boost productivity</h3>
                <p className="text-gray-400 leading-relaxed">Accomplish more important work in less time using time-tested productivity systems and frameworks</p>
              </div>
            </div>
            
            {/* Benefit 4 - Build better habits */}
            <div className="flex gap-6 items-start group hover:transform hover:scale-105 transition duration-300">
              {/* Numbered badge */}
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 shadow-lg">
                  <span className="text-white font-bold text-lg">4</span>
                </div>
              </div>
              
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-white mb-2">Build better habits</h3>
                <p className="text-gray-400 leading-relaxed">Create sustainable daily routines and practices that support long-term success and personal fulfillment</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== COURSE MODULES SECTION ========== */}
      <section className="py-16 max-w-3xl mx-auto px-8">
        <h2 className="text-4xl font-bold text-center mb-12">
          Mastering Deep Work: A Structured<br />Path to Peak Productivity
        </h2>
        
        <div className="space-y-3">
          {/* Module 1 */}
          <details className="border border-gray-700 rounded-lg p-5 cursor-pointer group">
            <summary className="flex justify-between items-center font-semibold">
              <span className="text-white">Module 1: Introduction to Deep Work & Peak Performance</span>
              <span className="text-gray-400 group-open:rotate-45 transition">+</span>
            </summary>
            <p className="text-gray-400 mt-4 text-sm">Learn the fundamentals of deep work and how it can transform your productivity and career.</p>
          </details>
          
          {/* Module 2 */}
          <details className="border border-gray-700 rounded-lg p-5 cursor-pointer group">
            <summary className="flex justify-between items-center font-semibold">
              <span className="text-white">Module 2: Building Your Deep Work Foundation</span>
              <span className="text-gray-400 group-open:rotate-45 transition">+</span>
            </summary>
            <p className="text-gray-400 mt-4 text-sm">Establish the habits and practices that support sustained focus and deep work.</p>
          </details>
          
          {/* Module 3 */}
          <details className="border border-gray-700 rounded-lg p-5 cursor-pointer group">
            <summary className="flex justify-between items-center font-semibold">
              <span className="text-white">Module 3: Advanced Deep Work Techniques</span>
              <span className="text-gray-400 group-open:rotate-45 transition">+</span>
            </summary>
            <p className="text-gray-400 mt-4 text-sm">Master advanced strategies for maintaining focus and maximizing output.</p>
          </details>
          
          {/* Module 4 */}
          <details className="border border-gray-700 rounded-lg p-5 cursor-pointer group">
            <summary className="flex justify-between items-center font-semibold">
              <span className="text-white">Module 4: Sustaining Momentum & Avoiding Burnout</span>
              <span className="text-gray-400 group-open:rotate-45 transition">+</span>
            </summary>
            <p className="text-gray-400 mt-4 text-sm">Learn how to maintain your productivity journey without experiencing burnout.</p>
          </details>
        </div>
      </section>

      {/* ========== TESTIMONIALS SECTION ========== */}
      <section className="bg-[#111827] py-16">
        <div className="max-w-6xl mx-auto px-8">
          <h2 className="text-4xl font-bold text-center mb-12">
            Real Results from<br />Real People
          </h2>
          
          <div className="grid grid-cols-4 gap-6">
            {/* Testimonial 1 */}
            <div className="text-center">
              <div className="bg-gradient-to-br from-green-500 to-green-700 rounded-lg h-48 mb-4 flex items-center justify-center">
                <div className="w-14 h-14 bg-white/30 rounded-full flex items-center justify-center">
                  <span className="text-white text-2xl">▶</span>
                </div>
              </div>
              <h4 className="font-semibold text-white">Sarah Chen</h4>
              <p className="text-gray-400 text-sm">Product Designer</p>
              <p className="text-gray-400 text-xs mt-3 leading-relaxed">This course completely transformed how I work. I'm more focused and productive.</p>
            </div>
            
            {/* Testimonial 2 */}
            <div className="text-center">
              <div className="bg-gradient-to-br from-purple-500 to-purple-700 rounded-lg h-48 mb-4 flex items-center justify-center">
                <div className="w-14 h-14 bg-white/30 rounded-full flex items-center justify-center">
                  <span className="text-white text-2xl">▶</span>
                </div>
              </div>
              <h4 className="font-semibold text-white">Marcus Johnson</h4>
              <p className="text-gray-400 text-sm">Software Engineer</p>
              <p className="text-gray-400 text-xs mt-3 leading-relaxed">I've tried many courses, but this one actually delivers real, lasting results.</p>
            </div>
            
            {/* Testimonial 3 */}
            <div className="text-center">
              <div className="bg-gradient-to-br from-pink-500 to-pink-700 rounded-lg h-48 mb-4 flex items-center justify-center">
                <div className="w-14 h-14 bg-white/30 rounded-full flex items-center justify-center">
                  <span className="text-white text-2xl">▶</span>
                </div>
              </div>
              <h4 className="font-semibold text-white">Emma Rodriguez</h4>
              <p className="text-gray-400 text-sm">Entrepreneur</p>
              <p className="text-gray-400 text-xs mt-3 leading-relaxed">The frameworks taught here are game-changing for anyone serious about their work.</p>
            </div>
            
            {/* Testimonial 4 */}
            <div className="text-center">
              <div className="bg-gradient-to-br from-indigo-500 to-indigo-700 rounded-lg h-48 mb-4 flex items-center justify-center">
                <div className="w-14 h-14 bg-white/30 rounded-full flex items-center justify-center">
                  <span className="text-white text-2xl">▶</span>
                </div>
              </div>
              <h4 className="font-semibold text-white">David Lee</h4>
              <p className="text-gray-400 text-sm">Executive Coach</p>
              <p className="text-gray-400 text-xs mt-3 leading-relaxed">I recommend this course to every client who struggles with focus and productivity.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ========== PRICING SECTION ========== */}
      <section className="py-20 max-w-2xl mx-auto px-8">
        <div className="bg-[#111827] rounded-xl p-12">
          <h2 className="text-3xl font-bold text-center mb-2">
            Invest in Your<br />Deep Work Skills
          </h2>
          <p className="text-gray-400 text-center mb-10">
            Get lifetime access to all courses, templates, and future updates.
          </p>
          
          {/* Price */}
          <div className="text-center mb-12">
            <div className="text-6xl font-bold text-white mb-2">$349</div>
            <p className="text-gray-400">One-time payment • No recurring fees</p>
          </div>
          
          {/* Features */}
          <div className="space-y-3 mb-10">
            <div className="flex gap-3 items-center">
              <span className="text-blue-400 font-bold">✓</span>
              <span className="text-white">Lifetime access to all 4 modules</span>
            </div>
            <div className="flex gap-3 items-center">
              <span className="text-blue-400 font-bold">✓</span>
              <span className="text-white">Planning templates and productivity tools</span>
            </div>
            <div className="flex gap-3 items-center">
              <span className="text-blue-400 font-bold">✓</span>
              <span className="text-white">Weekly live Q&A sessions for 3 months</span>
            </div>
            <div className="flex gap-3 items-center">
              <span className="text-blue-400 font-bold">✓</span>
              <span className="text-white">30-day money-back guarantee</span>
            </div>
          </div>
          
          {/* Enrollment Button */}
          <button className="w-full bg-[#2563EB] hover:bg-blue-700 text-white py-3 rounded font-semibold transition">
            Enroll Now - $349
          </button>
        </div>
      </section>

      {/* ========== FOOTER ========== */}
      <footer className="bg-[#111827] border-t border-gray-800 py-12">
        <div className="max-w-5xl mx-auto px-8">
          <div className="mb-10">
            <h3 className="text-lg font-bold mb-3">The Deep Work Blueprint</h3>
            <p className="text-gray-400 text-sm max-w-md">Master the art of focused, productive work and transform your career with sustainable habits and proven frameworks.</p>
          </div>
          
          <div className="grid grid-cols-3 gap-12 text-sm mb-10">
            {/* Product */}
            <div>
              <h4 className="font-semibold mb-4 text-white">Product</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition">Features</a></li>
                <li><a href="#" className="hover:text-white transition">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition">FAQ</a></li>
              </ul>
            </div>
            
            {/* Company */}
            <div>
              <h4 className="font-semibold mb-4 text-white">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition">About</a></li>
                <li><a href="#" className="hover:text-white transition">Blog</a></li>
                <li><a href="#" className="hover:text-white transition">Contact</a></li>
              </ul>
            </div>
            
            {/* Legal */}
            <div>
              <h4 className="font-semibold mb-4 text-white">Legal</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition">Privacy</a></li>
                <li><a href="#" className="hover:text-white transition">Terms</a></li>
                <li><a href="#" className="hover:text-white transition">Cookie Policy</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-700 pt-8">
            <p className="text-gray-400 text-sm text-center">© 2024 The Deep Work Blueprint. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
