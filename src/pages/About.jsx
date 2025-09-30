import React from 'react';

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
      <section className="bg-gradient-to-br from-blue-600 to-cyan-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">About TechBridge</h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
            Building bridges between businesses and technology for over 15 years
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                Founded in 2010, TechBridge started with a simple mission: to help
                businesses harness the power of technology to achieve their goals.
              </p>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                Over the years, we've grown from a small team of passionate developers
                into a full-service technology consultancy, serving clients across
                multiple industries worldwide.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Today, we're proud to have helped over 200 companies transform their
                digital presence and achieve measurable results through innovative
                technology solutions.
              </p>
            </div>
            <div>
              <img
                src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Team collaboration"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg text-center hover:shadow-xl transition-all transform hover:-translate-y-2"
              >
                <div className="text-5xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The talented people behind TechBridge
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center group">
                <div className="relative overflow-hidden rounded-2xl mb-4 shadow-lg">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-80 object-cover transform group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-blue-600">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Join Our Team</h2>
          <p className="text-xl mb-8 text-blue-100">
            We're always looking for talented individuals to join our growing team
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-all transform hover:scale-105 shadow-lg"
          >
            View Open Positions
          </a>
        </div>
      </section>
    </div>
  );
}
