/**
 * Navigation Component
 * Displays the main navigation bar with logo, links, and CTA button
 */
'use client';

import { useState } from 'react';
import Image from 'next/image';
import logo from '../assets/logo.png';

export default function Navigation() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <nav className="border-b border-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between gap-4">
                {/* Logo - Brand identifier with image */}
                <div className="flex items-center gap-2">
                    <Image
                        src={logo}
                        alt="PPA Logo"
                        width={32}
                        height={32}
                        className="w-8 h-8"
                    />
                    <span className="text-xl font-bold">PPA</span>
                </div>

                {/* Nav Links - Center navigation menu */}
                <div className="hidden md:flex gap-8 text-sm text-gray-300">
                    <a href="#" className="hover:text-white transition">Overview</a>
                    <a href="#" className="hover:text-white transition">Curriculum</a>
                    <a href="#" className="hover:text-white transition">Testimonials</a>
                    <a href="#" className="hover:text-white transition">Pricing</a>
                </div>
                <div className='hidden md:flex gap-8 items-center'>
                    {/* div for light and dark them radio default dark */}
                    <label className="toggle text-base-content font-bold ">
                        <input type="checkbox" />
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4 ">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
                        </svg>

                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
                        </svg>

                    </label>
                    {/* CTA Button - Primary action button */}
                    <button className="bg-[#2563EB] hover:bg-blue-700 rounded-lg text-white px-3 py-2 text-sm transition">
                        Get Started
                    </button>
                </div>

                <button
                    type="button"
                    className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-lg border border-gray-700 text-gray-200"
                    aria-label="Toggle navigation menu"
                    aria-expanded={isMobileMenuOpen}
                    onClick={() => setIsMobileMenuOpen((prev) => !prev)}
                >
                    <span className="sr-only">Toggle navigation menu</span>
                    <span className="text-xl leading-none">☰</span>
                </button>
            </div>

            <div className={`md:hidden border-t border-gray-800 px-4 sm:px-6 transition-all duration-200 ${isMobileMenuOpen ? 'max-h-96 py-4 opacity-100' : 'max-h-0 overflow-hidden py-0 opacity-0'}`}>
                <div className="flex flex-col gap-4 text-sm text-gray-300">
                    <a href="#" className="hover:text-white transition">Overview</a>
                    <a href="#" className="hover:text-white transition">Curriculum</a>
                    <a href="#" className="hover:text-white transition">Testimonials</a>
                    <a href="#" className="hover:text-white transition">Pricing</a>
                    <button className="mt-2 rounded-lg bg-[#2563EB] px-4 py-2 text-left text-white transition hover:bg-blue-700">
                        Get Started
                    </button>
                </div>
            </div>
        </nav>
    );
}
