import React from 'react';
import Navigation from './components/Navigation';
import Features from './components/Features';
import TechStack from './components/TechStack';
import TextEditor from './components/TextEditor';
import Footer from './components/Footer';
import { Brain, Sparkles, Globe, Shield, Code2, Users, Bug, Book, MessageSquare, Rocket, Award, Coffee, Github } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6 animate-gradient bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 bg-[length:200%_auto] bg-clip-text text-transparent">
            Perfect Your Writing with AI
          </h1>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            Professional grammar and proofreading powered by Google's Gemini AI.
            Get instant, accurate suggestions to improve your writing.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <main>
        <TextEditor />
        
        {/* Why Choose Section */}
        <section id="why-use" className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Why Choose GrammarPro?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-8 bg-gray-50 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
                <div className="flex items-center mb-6">
                  <Brain className="h-8 w-8 text-indigo-600 mr-3" />
                  <h3 className="text-2xl font-semibold text-gray-900">Advanced AI Technology</h3>
                </div>
                <p className="text-gray-600">
                  Powered by Google's Gemini AI, our tool provides context-aware grammar and style
                  suggestions that understand the nuances of language, going beyond simple spell-checking.
                </p>
              </div>
              
              <div className="p-8 bg-gray-50 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
                <div className="flex items-center mb-6">
                  <Globe className="h-8 w-8 text-indigo-600 mr-3" />
                  <h3 className="text-2xl font-semibold text-gray-900">Universal Accessibility</h3>
                </div>
                <p className="text-gray-600">
                  Available to everyone, everywhere. Our tool supports multiple languages and writing
                  styles, making professional writing assistance accessible globally.
                </p>
              </div>
              
              <div className="p-8 bg-gray-50 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
                <div className="flex items-center mb-6">
                  <Shield className="h-8 w-8 text-indigo-600 mr-3" />
                  <h3 className="text-2xl font-semibold text-gray-900">Privacy First</h3>
                </div>
                <p className="text-gray-600">
                  Your privacy matters. We process your text securely and never store it without
                  your explicit permission. Your writing stays yours.
                </p>
              </div>
            </div>

            <div className="mt-16 p-8 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl">
              <div className="flex items-start gap-8">
                <Award className="h-12 w-12 text-indigo-600 flex-shrink-0" />
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">Created by Tholumuzi Khuboni</h3>
                  <p className="text-gray-600">
                    As a passionate developer and language enthusiast, Tholumuzi created GrammarPro
                    to revolutionize how we approach writing assistance. With extensive experience in
                    natural language processing and AI, he designed this tool to be both powerful and
                    intuitive, making professional writing help accessible to everyone.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Features />
        <TechStack />

        {/* How to Use Section */}
        <section id="how-to-use" className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              How to Use GrammarPro
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6 bg-gray-50 rounded-lg">
                <div className="text-2xl font-bold text-indigo-600 mb-4">1</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Enter Your Text</h3>
                <p className="text-gray-600">
                  Type or paste your text into the editor, or upload a .txt file.
                  Our tool supports various text formats and lengths.
                </p>
              </div>
              <div className="p-6 bg-gray-50 rounded-lg">
                <div className="text-2xl font-bold text-indigo-600 mb-4">2</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Get Analysis</h3>
                <p className="text-gray-600">
                  Click "Check Grammar" and let our AI analyze your text for
                  grammar, style, and clarity improvements.
                </p>
              </div>
              <div className="p-6 bg-gray-50 rounded-lg">
                <div className="text-2xl font-bold text-indigo-600 mb-4">3</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Review & Apply</h3>
                <p className="text-gray-600">
                  Review the suggestions and apply the recommended changes
                  to enhance your writing.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contribute Section */}
        <section id="contribute" className="py-16 bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Contribute to GrammarPro
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
                <Code2 className="h-8 w-8 text-indigo-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Code Contributions</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <Rocket className="h-4 w-4 mr-2 text-indigo-500" />
                    Submit pull requests for new features
                  </li>
                  <li className="flex items-center">
                    <Bug className="h-4 w-4 mr-2 text-indigo-500" />
                    Fix bugs and improve performance
                  </li>
                  <li className="flex items-center">
                    <Coffee className="h-4 w-4 mr-2 text-indigo-500" />
                    Optimize code and enhance UI/UX
                  </li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
                <Book className="h-8 w-8 text-indigo-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Documentation</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <Sparkles className="h-4 w-4 mr-2 text-indigo-500" />
                    Improve documentation clarity
                  </li>
                  <li className="flex items-center">
                    <Book className="h-4 w-4 mr-2 text-indigo-500" />
                    Write tutorials and guides
                  </li>
                  <li className="flex items-center">
                    <Globe className="h-4 w-4 mr-2 text-indigo-500" />
                    Help with translations
                  </li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
                <Users className="h-8 w-8 text-indigo-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Community</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <MessageSquare className="h-4 w-4 mr-2 text-indigo-500" />
                    Report issues and suggest features
                  </li>
                  <li className="flex items-center">
                    <Users className="h-4 w-4 mr-2 text-indigo-500" />
                    Help other users
                  </li>
                  <li className="flex items-center">
                    <Sparkles className="h-4 w-4 mr-2 text-indigo-500" />
                    Share feedback and ideas
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="text-center">
              <a
                href="https://github.com/tholumuzikhuboni/grammarpro"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors duration-300"
              >
                <Github className="h-5 w-5 mr-2" />
                Visit Our GitHub Repository
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;