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

export default function About() {
  const values = [
    {
      icon: '🎯',
      title: 'Innovation',
      description: 'We constantly push boundaries to deliver cutting-edge solutions.',
    },
    {
      icon: '🤝',
      title: 'Partnership',
      description: 'Your success is our success. We work closely with you every step of the way.',
    },
    {
      icon: '⚡',
      title: 'Excellence',
      description: 'We strive for perfection in every project, big or small.',
    },
    {
      icon: '🌟',
      title: 'Integrity',
      description: 'Honesty and transparency guide all our business relationships.',
    },
  ];

  const timeline = [
    {
      year: '2010',
      title: 'Company Founded',
      description: 'TechBridge was established with a vision to transform businesses through technology.',
    },
    {
      year: '2013',
      title: 'First Major Client',
      description: 'Secured partnership with Fortune 500 company, expanding our service offerings.',
    },
    {
      year: '2016',
      title: 'Global Expansion',
      description: 'Opened offices in three continents, serving clients worldwide.',
    },
    {
      year: '2019',
      title: 'Innovation Award',
      description: 'Recognized as "Most Innovative IT Solutions Provider" by Tech Excellence Awards.',
    },
    {
      year: '2022',
      title: 'AI Integration',
      description: 'Launched AI-powered analytics platform, revolutionizing data insights.',
    },
    {
      year: '2025',
      title: 'Leading the Future',
      description: 'Continued growth with 200+ satisfied clients and cutting-edge solutions.',
    },
  ];

  const team = [
    {
      name: 'Sarah Johnson',
      role: 'CEO & Founder',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      name: 'Michael Chen',
      role: 'CTO',
      image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      name: 'Emily Rodriguez',
      role: 'Lead Designer',
      image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      name: 'David Kim',
      role: 'Head of Development',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
  ];

  return (
    <div className="min-h-screen pt-16">
      <section className="bg-gradient-to-br from-tech-blue to-tech-blue-dark text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">About TechBridge</h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto animate-slide-up">
            Building bridges between businesses and technology for over 15 years
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedCard>
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
                <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                  TechBridge is an innovative IT solutions provider helping businesses scale through
                  technology platforms, data analytics, and consulting. Founded in 2010, we started
                  with a simple mission: to help businesses harness the power of technology to achieve
                  their goals.
                </p>
                <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                  Over the years, we've grown from a small team of passionate developers into a
                  full-service technology consultancy, serving clients across multiple industries worldwide.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Today, we're proud to have helped over 200 companies transform their digital presence
                  and achieve measurable results through innovative technology solutions.
                </p>
              </div>
            </AnimatedCard>
            <AnimatedCard delay={200}>
              <div>
                <img
                  src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Diverse IT professionals collaborating"
                  className="rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
                />
              </div>
            </AnimatedCard>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedCard>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Journey</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                A timeline of growth, innovation, and success
              </p>
            </div>
          </AnimatedCard>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-tech-blue hidden lg:block"></div>

            {timeline.map((item, index) => (
              <AnimatedCard key={index} delay={index * 100}>
                <div className={`relative mb-12 lg:mb-16 ${index % 2 === 0 ? 'lg:pr-12' : 'lg:pl-12'}`}>
                  <div className={`lg:flex ${index % 2 === 0 ? 'lg:justify-end' : ''} lg:w-1/2 ${index % 2 === 0 ? 'ml-auto' : ''}`}>
                    <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2 group">
                      <div className="flex items-center mb-4">
                        <div className="w-16 h-16 bg-gradient-to-br from-tech-blue to-tech-blue-light rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                          {item.year}
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 group-hover:text-tech-blue transition-colors">
                          {item.title}
                        </h3>
                      </div>
                      <p className="text-gray-600 leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                  <div className="hidden lg:block absolute left-1/2 top-8 transform -translate-x-1/2 w-4 h-4 bg-tech-blue rounded-full border-4 border-white shadow-lg"></div>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedCard>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                The principles that guide everything we do
              </p>
            </div>
          </AnimatedCard>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <AnimatedCard key={index} delay={index * 100}>
                <div className="bg-gray-50 p-8 rounded-xl shadow-lg text-center hover:shadow-xl transition-all transform hover:-translate-y-2 group">
                  <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform">{value.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-tech-blue transition-colors">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
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
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                The talented people behind TechBridge
              </p>
            </div>
          </AnimatedCard>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <AnimatedCard key={index} delay={index * 100}>
                <div className="text-center group">
                  <div className="relative overflow-hidden rounded-2xl mb-4 shadow-lg">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-80 object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-tech-blue/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-tech-blue">{member.role}</p>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-tech-blue to-tech-blue-dark text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedCard>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Join Our Team</h2>
            <p className="text-xl mb-8 text-blue-100">
              We're always looking for talented individuals to join our growing team
            </p>
            <a
              href="/contact"
              className="inline-block px-8 py-4 bg-white text-tech-blue font-semibold rounded-lg hover:bg-blue-50 transition-all transform hover:scale-105 shadow-lg"
            >
              View Open Positions
            </a>
          </AnimatedCard>
        </div>
      </section>
    </div>
  );
}
