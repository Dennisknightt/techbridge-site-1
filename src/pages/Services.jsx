import React from 'react';

export default function Services() {
  const services = [
    {
      icon: '💻',
      title: 'Web Development',
      description: 'Create stunning, responsive websites that deliver exceptional user experiences.',
      features: [
        'Custom Web Applications',
        'E-commerce Solutions',
        'Progressive Web Apps',
        'API Development & Integration',
      ],
      gradient: 'from-blue-500 to-blue-600',
    },
    {
      icon: '📱',
      title: 'Mobile Development',
      description: 'Build powerful mobile apps that engage users across all platforms.',
      features: [
        'iOS & Android Apps',
        'Cross-Platform Development',
        'App Store Optimization',
        'Mobile UI/UX Design',
      ],
      gradient: 'from-cyan-500 to-cyan-600',
    },
    {
      icon: '☁️',
      title: 'Cloud Solutions',
      description: 'Scale your infrastructure with secure, reliable cloud services.',
      features: [
        'Cloud Migration',
        'Infrastructure as Code',
        'DevOps & CI/CD',
        'Cloud Cost Optimization',
      ],
      gradient: 'from-sky-500 to-sky-600',
    },
    {
      icon: '🎨',
      title: 'UI/UX Design',
      description: 'Design beautiful interfaces that users love and understand intuitively.',
      features: [
        'User Research & Testing',
        'Wireframing & Prototyping',
        'Visual Design',
        'Design Systems',
      ],
      gradient: 'from-violet-500 to-violet-600',
    },
    {
      icon: '🔒',
      title: 'Cybersecurity',
      description: 'Protect your business with comprehensive security solutions.',
      features: [
        'Security Audits',
        'Penetration Testing',
        'Compliance Management',
        'Incident Response',
      ],
      gradient: 'from-red-500 to-red-600',
    },
    {
      icon: '📊',
      title: 'Data Analytics',
      description: 'Turn data into insights that drive better business decisions.',
      features: [
        'Business Intelligence',
        'Data Visualization',
        'Predictive Analytics',
        'Real-time Dashboards',
      ],
      gradient: 'from-emerald-500 to-emerald-600',
    },
  ];

  return (
    <div className="min-h-screen pt-16">
      <section className="bg-gradient-to-br from-blue-600 to-cyan-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Services</h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
            Comprehensive technology solutions designed to transform your business
            and drive innovation
          </p>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
              >
                <div className={`bg-gradient-to-r ${service.gradient} p-8 text-white`}>
                  <div className="text-6xl mb-4">{service.icon}</div>
                  <h3 className="text-3xl font-bold mb-3">{service.title}</h3>
                  <p className="text-blue-50">{service.description}</p>
                </div>
                <div className="p-8">
                  <h4 className="font-semibold text-lg mb-4 text-gray-900">Key Features:</h4>
                  <ul className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <svg
                          className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0"
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
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Need a Custom Solution?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Every business is unique. Let's discuss how we can create a tailored
            solution that meets your specific needs.
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all transform hover:scale-105 shadow-lg"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </div>
  );
}
