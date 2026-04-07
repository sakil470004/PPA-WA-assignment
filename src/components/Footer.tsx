/**
 * Footer Component
 * Displays footer with branding, CTA card, and links
 */

'use client';

import { ArrowRightIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';
import person1 from '@/assets/poblem_section_img/person1.png';
import person2 from '@/assets/poblem_section_img/person2.png';
import person3 from '@/assets/poblem_section_img/person3.png';

export default function Footer() {
  // Footer navigation links
  const footerLinks = [
    { label: 'Terms & conditions', href: '#' },
    { label: 'Refund policy', href: '#' },
    { label: 'Pricing', href: '#' },
    { label: 'Support', href: '#' },
  ];

  // Avatar images for the CTA card
  const avatars = [person1, person2, person3];

  return (
    <footer className="bg-[#0f0f0f] py-20 px-8">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content - Two Column Layout */}
        <div className="flex items-center justify-between mb-16 pb-16 border-b border-gray-800">
          {/* Left Column - Branding */}
          <div className="flex-1">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-3 leading-tight">
              The Deep<br />Work Blueprint
            </h2>
            <p className="text-gray-400 text-lg">
              Master Focus & Get More Done in Less Time
            </p>
          </div>

          {/* Right Column - CTA Card */}
          <div className="flex-1 flex justify-end">
            <div className="bg-blue-600 rounded-2xl p-8 max-w-sm w-full">
              {/* Avatars and Arrow */}
              <div className="flex items-center justify-between mb-6">
                {/* Overlapping Avatars */}
                <div className="flex items-center -space-x-4">
                  {avatars.map((avatar, index) => (
                    <div
                      key={index}
                      className="relative w-12 h-12 rounded-full border-2 border-blue-600 overflow-hidden bg-gray-700"
                    >
                      <Image
                        src={avatar}
                        alt={`Student ${index + 1}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>

                {/* Arrow Icon */}
                <button className="w-12 h-12 rounded-full bg-white flex items-center justify-center hover:bg-gray-100 transition flex-shrink-0">
                  <ArrowRightIcon className="w-6 h-6 text-blue-600" />
                </button>
              </div>

              {/* CTA Text */}
              <p className="text-white font-semibold text-lg">
                Join with 5K other students
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Footer - Copyright and Links */}
        <div className="flex items-center justify-between">
          {/* Copyright */}
          <p className="text-gray-400 text-sm">
            © Copyright 2024, All Rights Reserved
          </p>

          {/* Footer Links */}
          <div className="flex items-center gap-8">
            {footerLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="text-gray-400 text-sm hover:text-white transition"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
