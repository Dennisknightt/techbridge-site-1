import React, { useState } from 'react';
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

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      title: 'Global Finance Platform',
      category: 'ERP Development',
      description: 'Developed a comprehensive ERP solution for a leading financial institution, improving operational efficiency by 40%.',
      image: 'https://images.pexels.com/photos/187041/pexels-photo-187041.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['erp', 'finance'],
      results: ['40% efficiency increase', '50% cost reduction', '99.9% uptime'],
    },
    {
      title: 'Healthcare Analytics Dashboard',
      category: 'Data Analytics',
      description: 'Built real-time analytics platform for healthcare provider, enabling data-driven decisions across 200+ facilities.',
      image: 'https://images.pexels.com/photos/669610/pexels-photo-669610.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['analytics', 'healthcare'],
      results: ['200+ facilities connected', 'Real-time insights', '30% cost savings'],
    },
    {
      title: 'E-Commerce Platform Modernization',
      category: 'IT Platforms',
      description: 'Transformed legacy e-commerce system into modern, scalable cloud platform serving 1M+ users daily.',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['platforms', 'cloud'],
      results: ['1M+ daily users', '3x faster performance', '60% infrastructure cost reduction'],
    },
    {
      title: 'Digital Transformation Strategy',
      category: 'Consulting',
      description: 'Guided Fortune 500 company through complete digital transformation, modernizing all core systems.',
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['consulting', 'strategy'],
      results: ['100% process digitization', '$5M annual savings', '6-month implementation'],
    },
  ];

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'erp', label: 'ERP' },
    { id: 'analytics', label: 'Analytics' },
    { id: 'platforms', label: 'Platforms' },
    { id: 'consulting', label: 'Consulting' },
  ];

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(project => project.tags.includes(activeFilter));

  return (
    <div className="min-h-screen pt-16">
      <section className="bg-gradient-to-br from-tech-blue to-tech-blue-dark text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">Portfolio & Case Studies</h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto animate-slide-up">
            Discover how we've helped businesses achieve remarkable results
          </p>
        </div>
      </section>

      <section className="py-12 bg-white sticky top-16 z-40 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all transform hover:scale-105 ${
                  activeFilter === filter.id
                    ? 'bg-tech-blue text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {filteredProjects.map((project, index) => (
              <AnimatedCard key={index} delay={index * 150}>
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="relative overflow-hidden h-64">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-tech-blue/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                      <span className="text-white font-semibold text-lg">{project.category}</span>
                    </div>
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-tech-blue transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">{project.description}</p>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-tech-blue mb-3">Key Results:</h4>
                      {project.results.map((result, idx) => (
                        <div key={idx} className="flex items-center">
                          <svg
                            className="w-5 h-5 text-green-500 mr-3 flex-shrink-0"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                          <span className="text-gray-700">{result}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedCard>
            <div className="bg-gradient-to-r from-tech-blue to-tech-blue-dark rounded-2xl p-12 text-center text-white shadow-2xl">
              <h2 className="text-4xl font-bold mb-6">
                Ready to Start Your Success Story?
              </h2>
              <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
                Join our growing list of satisfied clients and transform your business
                with our innovative solutions.
              </p>
              <a
                href="/contact"
                className="inline-block px-8 py-4 bg-white text-tech-blue font-semibold rounded-lg hover:bg-blue-50 transition-all transform hover:scale-105 shadow-lg"
              >
                Start Your Project
              </a>
            </div>
          </AnimatedCard>
        </div>
      </section>
    </div>
  );
}
