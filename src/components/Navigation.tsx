/**
 * Navigation Component
 * Displays the main navigation bar with logo, links, and CTA button
 */

export default function Navigation() {
  return (
    <nav className="border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-8 py-4 flex items-center justify-between">
        {/* Logo - Brand identifier */}
        <div className="text-xl font-bold">QFm</div>
        
        {/* Nav Links - Center navigation menu */}
        <div className="flex gap-8 text-sm text-gray-300">
          <a href="#" className="hover:text-white transition">Home</a>
          <a href="#" className="hover:text-white transition">Features</a>
          <a href="#" className="hover:text-white transition">Pricing</a>
          <a href="#" className="hover:text-white transition">Contact</a>
        </div>
        
        {/* CTA Button - Primary action button */}
        <button className="bg-[#2563EB] hover:bg-blue-700 text-white px-6 py-2 rounded font-medium transition">
          Get Started
        </button>
      </div>
    </nav>
  );
}
