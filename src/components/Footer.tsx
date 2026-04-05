/**
 * Footer Component
 * Displays footer links, company info, and legal links
 */

export default function Footer() {
  const footerLinks = {
    product: [
      { label: 'Features', href: '#' },
      { label: 'Pricing', href: '#' },
      { label: 'FAQ', href: '#' },
    ],
    company: [
      { label: 'About', href: '#' },
      { label: 'Blog', href: '#' },
      { label: 'Contact', href: '#' },
    ],
    legal: [
      { label: 'Privacy', href: '#' },
      { label: 'Terms', href: '#' },
      { label: 'Cookie Policy', href: '#' },
    ],
  };

  return (
    <footer className="bg-[#111827] border-t border-gray-800 py-12">
      <div className="max-w-5xl mx-auto px-8">
        {/* Brand Section */}
        <div className="mb-10">
          <h3 className="text-lg font-bold mb-3">The Deep Work Blueprint</h3>
          <p className="text-gray-400 text-sm max-w-md">Master the art of focused, productive work and transform your career with sustainable habits and proven frameworks.</p>
        </div>
        
        {/* Footer Links Grid */}
        <div className="grid grid-cols-3 gap-12 text-sm mb-10">
          {/* Product Links */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Product</h4>
            <ul className="space-y-2 text-gray-400">
              {footerLinks.product.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="hover:text-white transition">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Company Links */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Company</h4>
            <ul className="space-y-2 text-gray-400">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="hover:text-white transition">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Legal Links */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Legal</h4>
            <ul className="space-y-2 text-gray-400">
              {footerLinks.legal.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="hover:text-white transition">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        {/* Copyright Section */}
        <div className="border-t border-gray-700 pt-8">
          <p className="text-gray-400 text-sm text-center">© 2024 The Deep Work Blueprint. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
