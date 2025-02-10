import React from 'react';

const techStack = [
  {
    name: 'React',
    logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg',
  },
  {
    name: 'TypeScript',
    logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg',
  },
  {
    name: 'Tailwind CSS',
    logo: 'https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg',
  },
  {
    name: 'Google Gemini',
    logo: 'https://www.gstatic.com/lamda/images/gemini_sparkle_v002_d4735304ff6292a690345.svg',
  },
];

export default function TechStack() {
  return (
    <section id="tech" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Powered by Modern Technology
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {techStack.map((tech) => (
            <div
              key={tech.name}
              className="flex flex-col items-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <img
                src={tech.logo}
                alt={`${tech.name} logo`}
                className="h-12 w-12 object-contain"
              />
              <span className="mt-4 text-gray-700 font-medium">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}