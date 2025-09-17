import React, { useState } from 'react';
import { Shield, Smartphone, MapPin, AlertTriangle, Zap, Users, Globe, Lock, QrCode, Brain, Cpu, Database, CheckCircle, ArrowRight, Menu, X, Star, Play } from 'lucide-react';

const MargaraksakHomepage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const features = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Blockchain Security",
      description: "Immutable NFT-based passports stored on Ethereum with cryptographic verification"
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "AI Anomaly Detection",
      description: "Machine learning algorithms detect suspicious travel patterns and fraudulent activities"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Smart Geofencing",
      description: "Location-based services with automated check-ins and travel tracking"
    },
    {
      icon: <AlertTriangle className="w-6 h-6" />,
      title: "Emergency SOS",
      description: "Instant emergency signals with location data for traveler safety"
    }
  ];

  const stats = [
    { number: "100%", label: "Tamper Proof" },
    { number: "99.9%", label: "Uptime" },
    { number: "< 2s", label: "Verification" },
    { number: "24/7", label: "SOS Support" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <defs>
                    <linearGradient id="mountains" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#14B8A6" />
                      <stop offset="100%" stopColor="#0F766E" />
                    </linearGradient>
                    <linearGradient id="shield" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#1E40AF" />
                      <stop offset="100%" stopColor="#1E3A8A" />
                    </linearGradient>
                  </defs>
                  <path d="M50 5 L20 20 L20 65 Q20 85 50 95 Q80 85 80 65 L80 20 Z" fill="url(#shield)" />
                  <path d="M25 25 L35 15 L45 20 L55 15 L65 20 L75 15 L75 25 L25 25 Z" fill="url(#mountains)" />
                  <path d="M30 70 Q35 65 40 70 Q45 75 50 70 Q55 65 60 70 Q65 75 70 70" stroke="#F59E0B" strokeWidth="3" fill="none" />
                  <path d="M32 72 L34 72 M38 68 L40 68 M48 72 L50 72 M58 68 L60 68 M66 72 L68 72" stroke="#F59E0B" strokeWidth="1.5" />
                </svg>
              </div>
              <span className="text-xl font-bold text-gray-900">MÄRGARAKŞAK</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-700 hover:text-green-600 transition-colors">Features</a>
              <a href="#security" className="text-gray-700 hover:text-green-600 transition-colors">Security</a>
              <button className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors">
                Get Started
              </button>
            </div>

            <button 
              className="md:hidden p-2 text-gray-700"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-b border-gray-200">
          <div className="px-6 py-4 space-y-4">
            <a href="#features" className="block text-gray-700 hover:text-green-600" onClick={() => setIsMenuOpen(false)}>Features</a>
            <a href="#security" className="block text-gray-700 hover:text-green-600" onClick={() => setIsMenuOpen(false)}>Security</a>
            <button className="w-full bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors">
              Get Started
            </button>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <div className="mb-8">
            <span className="inline-block px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium">
              🔒 Powered by Blockchain & AI
            </span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Protecting Your
            <br />
            <span className="text-green-600">Digital Journey</span>
          </h1>
          
          <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
            Advanced blockchain-based digital passport system with AI-powered security, intelligent geofencing, 
            and emergency SOS capabilities - safeguarding every step of your journey.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="bg-green-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-700 transition-colors flex items-center space-x-2">
              <span>Create Your Passport</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-green-50 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index}>
                <div className="text-3xl md:text-4xl font-bold text-green-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Core Features
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Advanced technology stack combining blockchain security with AI intelligence 
              and location-based services.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="p-6 border border-gray-200 rounded-xl hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4 text-green-600">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Section */}
      <section id="security" className="bg-green-50 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Enterprise-Grade Security
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Multi-layered security approach ensuring your digital identity 
                remains protected at all times.
              </p>
              
              <div className="space-y-4">
                {[
                  "Blockchain immutability prevents data tampering",
                  "AI-powered real-time fraud detection",
                  "Encrypted storage on decentralized IPFS network",
                  "Smart contract automation for transparency",
                  "Emergency SOS with precise location tracking",
                  "Zero-knowledge proof verification"
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-white p-12 rounded-2xl border border-gray-200 text-center">
              <Lock className="w-20 h-20 text-green-600 mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">256-Bit Encryption</h3>
              <p className="text-gray-600 mb-6">Military-grade security standards</p>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="bg-green-50 p-3 rounded-lg">
                  <div className="font-semibold text-green-700">Blockchain</div>
                  <div className="text-gray-600">Ethereum Network</div>
                </div>
                <div className="bg-green-50 p-3 rounded-lg">
                  <div className="font-semibold text-green-700">Storage</div>
                  <div className="text-gray-600">IPFS Distributed</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-green-600 text-white py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Join thousands of users who trust MÄRGARAKŞAK for secure, 
            intelligent digital identity management and journey protection.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="bg-white text-green-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-50 transition-colors">
              Create Your Passport
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-700 transition-colors">
              View Documentation
            </button>
          </div>
        </div>
      </section>

      {/* Demo Video Section */}
      <section className="bg-gray-100 py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            See MÄRGARAKŞAK in Action
          </h2>
          <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
            Watch our comprehensive demo to understand how our blockchain digital passport 
            system protects and simplifies your travel experience.
          </p>
          
          <div className="relative bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
            <div className="relative bg-gradient-to-br from-green-100 to-green-50 rounded-xl p-16 mb-6">
              <div className="absolute inset-0 bg-green-600 bg-opacity-10 rounded-xl"></div>
              <button className="relative w-20 h-20 bg-green-600 hover:bg-green-700 rounded-full flex items-center justify-center mx-auto mb-6 transition-all duration-300 transform hover:scale-110 shadow-lg">
                <Play className="w-8 h-8 text-white ml-1" />
              </button>
              <div className="text-center">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Interactive Demo Video</h3>
                <p className="text-gray-600">5 minutes • Full walkthrough</p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-600">
              <div className="flex items-center justify-center space-x-2">
                <Shield className="w-4 h-4 text-green-600" />
                <span>Blockchain Security</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <Brain className="w-4 h-4 text-green-600" />
                <span>AI Detection</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <MapPin className="w-4 h-4 text-green-600" />
                <span>SOS Features</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <div className="w-8 h-8">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <defs>
                    <linearGradient id="mountains-footer" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#14B8A6" />
                      <stop offset="100%" stopColor="#0F766E" />
                    </linearGradient>
                    <linearGradient id="shield-footer" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#1E40AF" />
                      <stop offset="100%" stopColor="#1E3A8A" />
                    </linearGradient>
                  </defs>
                  <path d="M50 5 L20 20 L20 65 Q20 85 50 95 Q80 85 80 65 L80 20 Z" fill="url(#shield-footer)" />
                  <path d="M25 25 L35 15 L45 20 L55 15 L65 20 L75 15 L75 25 L25 25 Z" fill="url(#mountains-footer)" />
                  <path d="M30 70 Q35 65 40 70 Q45 75 50 70 Q55 65 60 70 Q65 75 70 70" stroke="#F59E0B" strokeWidth="3" fill="none" />
                  <path d="M32 72 L34 72 M38 68 L40 68 M48 72 L50 72 M58 68 L60 68 M66 72 L68 72" stroke="#F59E0B" strokeWidth="1.5" />
                </svg>
              </div>
              <span className="text-lg font-bold text-gray-900">MÄRGARAKŞAK</span>
            </div>
            
            <div className="flex items-center space-x-6 text-sm text-gray-600">
              <span>© 2025 MÄRGARAKŞAK</span>
              <span>•</span>
              <a href="#" className="hover:text-green-600 transition-colors">Privacy Policy</a>
              <span>•</span>
              <a href="#" className="hover:text-green-600 transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MargaraksakHomepage;