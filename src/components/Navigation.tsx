import React from 'react';
import { DramaIcon as GrammarIcon, Github } from 'lucide-react';

export default function Navigation() {
  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-sm z-50 border-b border-gray-100 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <GrammarIcon className="h-8 w-8 text-indigo-600" />
            <span className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              GrammarPro
            </span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#why-use" className="text-gray-600 hover:text-indigo-600 transition-colors">
              Why Use
            </a>
            <a href="#features" className="text-gray-600 hover:text-indigo-600 transition-colors">
              Features
            </a>
            <a href="#how-to-use" className="text-gray-600 hover:text-indigo-600 transition-colors">
              How to Use
            </a>
            <a href="#contribute" className="text-gray-600 hover:text-indigo-600 transition-colors">
              Contribute
            </a>
            <a
              href="https://github.com/tholumuzikhuboni/grammarpro"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-indigo-600 transition-colors"
            >
              <Github className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}