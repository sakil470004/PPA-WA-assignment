/**
 * Main Home Page Component
 * Composes all page sections together with the dark theme background
 * This is the entry point that brings together all reusable components
 */

import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import ProblemSection from '@/components/ProblemSection';
import FeaturesSection from '@/components/FeaturesSection';
import BenefitsSection from '@/components/BenefitsSection';
import CourseModulesSection from '@/components/CourseModulesSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import PricingSection from '@/components/PricingSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="bg-[#0A0E27] text-white">
      {/* Navigation Bar */}
      <Navigation />

      {/* Hero Section - Main attention-grabbing area */}
      <HeroSection />

      {/* Problem Section - Highlights pain points */}
      <ProblemSection />

      {/* Features Section - Shows key benefits */}
      <FeaturesSection />

      {/* Benefits Section - Lists course outcomes */}
      <BenefitsSection />

      {/* Course Modules Section - Collapsible course outline */}
      <CourseModulesSection />

      {/* Testimonials Section - Real user success stories */}
      <TestimonialsSection />

      {/* Pricing Section - Course investment and enrollment */}
      <PricingSection />

      {/* Footer - Company info and links */}
      <Footer />
    </div>
  );
}
