import React from 'react';
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

export default function Services() {
  const services = [
    {
      icon: '🖥️',
      title: 'IT Platforms & Services',
      description: 'Comprehensive IT infrastructure solutions designed for scalability and security.',
      features: [
        'Cloud Infrastructure',
        'System Integration',
        'Platform Development',
        'IT Support & Maintenance',
      ],
      image: 'https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      icon: '📊',
      title: 'Data Analytics',
      description: 'Transform raw data into actionable insights that drive business decisions.',
      features: [
        'Business Intelligence',
        'Predictive Analytics',
        'Data Visualization',
        'Real-time Dashboards',
      ],
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      icon: '🏢',
      title: 'ERP Development',
      description: 'Custom Enterprise Resource Planning solutions tailored to your business needs.',
      features: [
        'Custom ERP Solutions',
        'Module Development',
        'System Migration',
        'Training & Support',
      ],
      image: 'https://images.pexels.com/photos/669610/pexels-photo-669610.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      icon: '💼',
      title: 'Consulting & Advisory',
      description: 'Expert guidance to navigate digital transformation and optimize operations.',
      features: [
        'IT Strategy',
        'Digital Transformation',
        'Process Optimization',
        'Technology Assessment',
      ],
      image: 'https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      icon: '⚙️',
      title: 'Custom IT Solutions',
      description: 'Bespoke technology solutions designed specifically for your unique challenges.',
      features: [
        'Custom Development',
        'API Integration',
        'Automation Solutions',
        'Legacy System Modernization',
      ],
      image: 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
  ];

  return (
    <div className="min-h-screen pt-16">
      <section className="bg-gradient-to-br from-tech-blue to-tech-blue-dark text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">Our Services</h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto animate-slide-up">
            Comprehensive technology solutions designed to transform your business
            and drive innovation
          </p>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-16">
            {services.map((service, index) => (
              <AnimatedCard key={index} delay={index * 100}>
                <div className={`flex flex-col lg:flex-row gap-8 items-center ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
                  <div className="lg:w-1/2">
                    <div className="relative overflow-hidden rounded-2xl shadow-2xl group">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-96 object-cover transform group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-tech-blue/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="absolute top-4 left-4 text-6xl">{service.icon}</div>
                    </div>
                  </div>
                  <div className="lg:w-1/2">
                    <h3 className="text-3xl font-bold text-gray-900 mb-4 hover:text-tech-blue transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    <h4 className="font-semibold text-lg mb-4 text-tech-blue">Key Features:</h4>
                    <ul className="space-y-3">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center group/item">
                          <svg
                            className="w-6 h-6 text-tech-blue mr-3 flex-shrink-0 transform group-hover/item:scale-110 transition-transform"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                          <span className="text-gray-700 group-hover/item:text-gray-900 transition-colors">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedCard>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Need a Custom Solution?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Every business is unique. Let's discuss how we can create a tailored
              solution that meets your specific needs.
            </p>
            <a
              href="/contact"
              className="inline-block px-8 py-4 bg-gradient-to-r from-tech-blue to-tech-blue-dark text-white font-semibold rounded-lg hover:from-tech-blue-dark hover:to-tech-blue transition-all transform hover:scale-105 shadow-lg"
            >
              Get in Touch
            </a>
          </AnimatedCard>
        </div>
      </section>
    </div>
  );
}
