/**
 * Features Section Component
 * Highlights the core benefit: concentration is a trainable skill
 * Features a large main image on the left and testimonial/social proof on the right
 */

import Image from 'next/image';
import mainImage from '@/assets/future_section_img/main.png';
import sub1Image from '@/assets/future_section_img/sub1.png';
import sub2Image from '@/assets/future_section_img/sub2.png';
import sub3Image from '@/assets/future_section_img/sub3.png';

export default function FeaturesSection() {
  // Avatar images for social proof section
  const avatars = [
    { id: 1, initials: 'JD' },
    { id: 2, initials: 'SK' },
    { id: 3, initials: 'MJ' },
  ];

  // Testimonial images array for the right side stack
  const testimonialImages = [
    { src: sub1Image, alt: 'Student testimonial 1' },
    { src: sub2Image, alt: 'Student testimonial 2' },
    { src: sub3Image, alt: 'Student testimonial 3' },
  ];

  return (
    <section className="bg-[#1a202c] py-20">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-3 gap-12 items-start">
          {/* Left: Main Feature Image - Takes full height */}
          <div className="col-span-1">
            {/* Large image showing someone working focused on laptop */}
            <div className="bg-gradient-to-br from-gray-700 to-gray-900 rounded-3xl h-[600px] overflow-hidden">
              {/* Main feature image of person concentrating */}
              <Image
                src={mainImage}
                alt="Person concentrating on work with laptop"
                className="w-full h-full object-cover"
                priority
              />
            </div>
          </div>

          {/* Middle: Content with messaging and social proof */}
          <div className="col-span-1 flex flex-col gap-8 h-full justify-around">
         
      

            {/* Badge - Reassurance message */}
            <div>

            <div className="inline-flex items-center gap-2 bg-[#1f2937] rounded-full px-6 py-2 border border-gray-700 w-fit">
              <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
              <span className="text-sm text-gray-300">No worries</span>
            </div>
            </div>
      
            {/* Subheading - Core insight */}
            <div>
               
                 <p className="text-gray-400 text-lg leading-relaxed mb-8">
                The ability to concentrate deeply is the ultimate productivity hack
              </p>
                {/* Main Heading - Key benefit */}
              <h2 className="text-5xl md:text-5xl font-bold text-white leading-tight ">
                And fortunately it's a skill you can train & develop.
              </h2>
            
              
           
            </div>

         
          
         </div>

          {/* Right:Stacked Testimonial Images */}
          
          <div className='col-span-1 flex flex-col items-end justify-between h-full'>
               {/* Social Proof - Join section with avatars */}
            
            <div >
              {/* Avatar Stack */}
              <div className="flex -space-x-3">
                {avatars.map((avatar, index) => (
                  <div
                    key={avatar.id}
                    className="w-10 h-10 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center border-2 border-[#1a202c] text-xs font-semibold text-white"
                  >
                    {avatar.initials[index % 2]}
                  </div>
                ))}
              </div>
              
              {/* Join Text */}
              <span className="text-gray-300 text-sm">
                Join with 5K other students
              </span>
            </div>
          <div className="flex  flex-col gap-1 items-end justify-between">
            
            {/* Three stacked images on the right showing different people */}
            {testimonialImages.map((img, index) => (
              <div key={index} className="h-36   from-gray-600 to-gray-800 rounded-2xl  overflow-hidden">
                {/* Testimonial/proof images */}
                <Image
                 
                  src={img.src}
                  alt={img.alt}
                  className=" object-cover"
                />
              </div>
            ))}
          </div>
        </div>
        </div>
      </div>
    </section>
  );
}
