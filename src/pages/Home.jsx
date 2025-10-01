import React from 'react';
import { Link } from 'react-router-dom';
import { useScrollAnimation } from '../utils/animations';

function AnimatedCard({ children, delay = 0 }) {
  const [ref, isVisible] = useScrollAnimation();

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

export default function Home() {
  const features = [
    {
      icon: '🖥️',
      title: 'IT Platforms',
      description: 'Scalable, secure IT infrastructure and platform solutions designed for modern businesses.',
    },
    {
      icon: '📊',
      title: 'Data Analytics',
      description: 'Transform raw data into actionable insights with our advanced analytics solutions.',
    },
    {
      icon: '💼',
      title: 'Consulting Services',
      description: 'Expert guidance to help you navigate digital transformation and optimize operations.',
    },
  ];

  const stats = [
    { number: '500+', label: 'Projects Completed' },
    { number: '200+', label: 'Happy Clients' },
    { number: '50+', label: 'Team Members' },
    { number: '15+', label: 'Years Experience' },
  ];

  return (
    <div className="min-h-screen">
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-tech-blue via-tech-blue-dark to-tech-blue text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-tech-blue-light/30 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse delay-700"></div>
        </div>

        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=1920)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        ></div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-in">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight animate-slide-up">
            TechBridge
          </h1>
          <p className="text-2xl md:text-3xl mb-8 font-light italic animate-slide-up" style={{ animationDelay: '200ms' }}>
            Bridging Innovation and Technology
          </p>
          <p className="text-xl md:text-2xl mb-12 text-blue-100 max-w-3xl mx-auto animate-slide-up" style={{ animationDelay: '400ms' }}>
            Empowering businesses with cutting-edge IT solutions, data analytics, and consulting services
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-zoom-in" style={{ animationDelay: '600ms' }}>
            <Link
              to="/services"
              className="px-8 py-4 bg-white text-tech-blue font-semibold rounded-lg hover:bg-blue-50 transition-all transform hover:scale-105 shadow-lg"
            >
              Discover Our Solutions
            </Link>
            <Link
              to="/contact"
              className="px-8 py-4 bg-tech-blue-light/20 backdrop-blur-sm text-white font-semibold rounded-lg hover:bg-white/30 transition-all border-2 border-white/30"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <AnimatedCard key={index} delay={index * 100}>
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-tech-blue mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedCard>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Our Core Solutions
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Comprehensive technology services designed to drive your business forward
              </p>
            </div>
          </AnimatedCard>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <AnimatedCard key={index} delay={index * 150}>
                <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group">
                  <div className="text-6xl mb-6 transform group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-tech-blue transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedCard>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                  Why Choose TechBridge?
                </h2>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  We combine deep technical expertise with industry knowledge to deliver
                  solutions that truly make a difference. Our team of experienced professionals
                  is committed to your success.
                </p>
                <ul className="space-y-4">
                  {['Proven Track Record', 'Innovative Solutions', '24/7 Support', 'Cost-Effective'].map((item, index) => (
                    <li key={index} className="flex items-center">
                      <svg className="w-6 h-6 text-tech-blue mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700 font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative">
                <img
                  src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Professional IT team"
                  className="rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </AnimatedCard>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-tech-blue to-tech-blue-dark text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedCard>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Let's discuss how we can help you achieve your technology goals
            </p>
            <Link
              to="/contact"
              className="inline-block px-8 py-4 bg-white text-tech-blue font-semibold rounded-lg hover:bg-blue-50 transition-all transform hover:scale-105 shadow-lg"
            >
              Contact Us Today
            </Link>
          </AnimatedCard>
        </div>
      </section>
    </div>
  );
}
