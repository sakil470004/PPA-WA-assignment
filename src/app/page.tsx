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
      <section className="py-16 text-center max-w-5xl mx-auto px-8">
        {/* Small badge */}
        <div className="inline-block bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-xs mb-6">
          Free Preview
        </div>
        
        {/* Main Headline */}
        <h1 className="text-5xl font-bold mb-4 leading-tight">
          Master Focus &<br />Get More Done<br />in Less Time
        </h1>
        
        {/* Subheading */}
        <p className="text-gray-400 text-lg mb-8">
          Stop feeling rushed, overwhelmed, or procrastinating instead of making progress, you're not alone.
        </p>
        
        {/* CTA Buttons */}
        <div className="flex gap-4 justify-center mb-12">
          <button className="bg-[#2563EB] hover:bg-blue-700 text-white px-8 py-3 rounded font-medium transition">
            Enroll Now
          </button>
          <button className="border border-gray-600 text-white px-8 py-3 rounded font-medium hover:border-gray-400 transition">
            Download Guide
          </button>
        </div>
        
        {/* Video Placeholder with Play Button */}
        <div className="bg-gradient-to-br from-orange-500 via-purple-500 to-blue-500 rounded-xl h-96 flex items-center justify-center">
          <div className="w-16 h-16 bg-white/30 rounded-full flex items-center justify-center hover:bg-white/50 transition cursor-pointer">
            <div className="text-white text-3xl">▶</div>
          </div>
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
      <section className="bg-[#111827] py-16">
        <div className="max-w-5xl mx-auto px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            A self-paced results-driven<br />course designed to help you
          </h2>
          
          <div className="grid grid-cols-2 gap-8">
            {/* Benefit 1 */}
            <div className="flex gap-4">
              <div className="text-blue-400 text-2xl font-bold mt-1">●</div>
              <div>
                <h3 className="font-semibold mb-2">Develop deep work skills</h3>
                <p className="text-gray-400 text-sm">Master techniques that help you concentrate better and produce your best work</p>
              </div>
            </div>
            
            {/* Benefit 2 */}
            <div className="flex gap-4">
              <div className="text-blue-400 text-2xl font-bold mt-1">●</div>
              <div>
                <h3 className="font-semibold mb-2">Eliminate distractions</h3>
                <p className="text-gray-400 text-sm">Learn how to create an environment free from interruptions and stay focused</p>
              </div>
            </div>
            
            {/* Benefit 3 */}
            <div className="flex gap-4">
              <div className="text-blue-400 text-2xl font-bold mt-1">●</div>
              <div>
                <h3 className="font-semibold mb-2">Boost productivity</h3>
                <p className="text-gray-400 text-sm">Get more important work done in less time with proven productivity systems</p>
              </div>
            </div>
            
            {/* Benefit 4 */}
            <div className="flex gap-4">
              <div className="text-blue-400 text-2xl font-bold mt-1">●</div>
              <div>
                <h3 className="font-semibold mb-2">Build better habits</h3>
                <p className="text-gray-400 text-sm">Create sustainable routines that support long-term success and fulfillment</p>
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
