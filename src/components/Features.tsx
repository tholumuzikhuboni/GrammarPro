import React from 'react';
import { Zap, Shield, Cpu, Globe, BookOpen, Clock, Sparkles, Palette } from 'lucide-react';

const features = [
  {
    icon: Zap,
    title: 'Real-time Analysis',
    description: 'Get instant feedback on your writing with advanced AI-powered analysis.',
  },
  {
    icon: Shield,
    title: 'Privacy First',
    description: 'Your text is processed securely and never stored without your permission.',
  },
  {
    icon: Cpu,
    title: 'AI Powered',
    description: 'Leveraging Google Gemini AI for accurate and contextual suggestions.',
  },
  {
    icon: Globe,
    title: 'Multiple Languages',
    description: 'Support for various languages and writing styles.',
  },
  {
    icon: BookOpen,
    title: 'Style Guide',
    description: 'Recommendations for maintaining consistent writing style and tone.',
  },
  {
    icon: Clock,
    title: 'Quick Turnaround',
    description: 'Get suggestions within seconds, no matter the text length.',
  },
  {
    icon: Sparkles,
    title: 'Smart Suggestions',
    description: 'Context-aware recommendations that understand your writing intent.',
  },
  {
    icon: Palette,
    title: 'Tone Analysis',
    description: 'Insights into the emotional tone and readability of your text.',
  },
];

export default function Features() {
  return (
    <section id="features" className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Features that Make Us Stand Out
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1"
            >
              <feature.icon className="h-8 w-8 text-indigo-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}