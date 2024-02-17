import React from 'react';
import Image from 'next/image';

const About = () => {
  // Single image and description for the About section
  const image = '/assets/welcome-to-driverseddepot-header.png';
  const title = 'Welcome to DriversEdDepot.com';
  const description = 'Your trusted ally in the journey towards safer driving and comprehensive traffic education.';

  return (
    <div className="flex flex-col items-center px-5 py-8 text-center lg:px-20">
      {/* Welcome section with image */}
      <div className="mb-12">
        <h1 className="text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold text-blue-800">{title}</h1>
        <p className="text-lg md:text-xl lg:text-2xl xl:text-3xl text-gray-700 max-w-prose my-6">{description}</p>
        <div className="w-full p-4">
          <Image src={image} width={640} height={360} layout="responsive" alt="Driving Education" className="rounded-lg shadow-md"/>
        </div>
      </div>

      {/* Final paragraph */}
      <div className="max-w-2xl text-lg md:text-xl lg:text-2xl xl:text-3xl text-gray-700">
        <p>Thank you for considering DriversEdDepot.com as your gateway to affordable, high-quality driver education. Drive safely, and let us guide you towards a brighter driving future.</p>
      </div>
    </div>
  );
};

export default About;
