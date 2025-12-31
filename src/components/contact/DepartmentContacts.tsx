import React from 'react';
import { ShoppingCart, Wrench, Truck, Handshake, Users, Award } from 'lucide-react';
import { useInView } from '../../hooks/useInView';

const DepartmentContacts = () => {
  const [ref, isInView] = useInView({ threshold: 0.3 });

  const departments = [
    {
      icon: <ShoppingCart size={32} />,
      title: "Sales & Orders",
      email: "sales@aisco.com.co",
      description: "Product quotes, bulk orders, pricing, and sales support",
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-500",
      phone: "+244 941475798"
    },
    {
      icon: <Wrench size={32} />,
      title: "Technical & Quality",
      email: "quality@aisco.com.co", 
      description: "Technical specifications, quality documentation, and compliance",
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-500",
      phone: "+244 931977848"
    },
    {
      icon: <Truck size={32} />,
      title: "Logistics & Delivery",
      email: "logistics@aisco.com.co",
      description: "Shipping, delivery schedules, and transportation coordination",
      color: "from-orange-500 to-orange-600",
      bgColor: "bg-orange-500",
      phone: "+244 941475798"
    },
    {
      icon: <Handshake size={32} />,
      title: "Partnerships & CSR",
      email: "partnerships@aisco.com.co",
      description: "Business partnerships, CSR initiatives, and community programs",
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-500",
      phone: "+244 931977848"
    },
    {
      icon: <Users size={32} />,
      title: "Human Resources",
      email: "hr@aisco.com.co",
      description: "Career opportunities, recruitment, and employee relations",
      color: "from-indigo-500 to-indigo-600",
      bgColor: "bg-indigo-500",
      phone: "+244 941475798"
    },
    {
      icon: <Award size={32} />,
      title: "Management Office",
      email: "management@aisco.com.co",
      description: "Executive communications, strategic partnerships, and VIP relations",
      color: "from-red-500 to-red-600",
      bgColor: "bg-red-500",
      phone: "+244 931977848"
    }
  ];

  return (
    <section ref={ref} className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-4xl font-bold text-gray-900 mb-4 transition-all duration-1000 ${
            isInView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            Department-Wise Contacts
          </h2>
          <p className={`text-xl text-gray-600 transition-all duration-1000 delay-200 ${
            isInView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            Connect directly with the right team for faster, more specialized support
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {departments.map((dept, index) => (
            <div
              key={index}
              className={`group relative p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-4 ${
                isInView ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 150 + 400}ms` }}
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${dept.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-500`} />
              
              {/* Icon Container */}
              <div className={`relative w-16 h-16 ${dept.bgColor} rounded-xl flex items-center justify-center text-white mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg`}>
                {dept.icon}
                
                {/* Pulse Effect */}
                <div className={`absolute inset-0 ${dept.bgColor} rounded-xl animate-ping opacity-20 group-hover:opacity-40`} />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-700 transition-colors">
                {dept.title}
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed group-hover:text-gray-700 transition-colors">
                {dept.description}
              </p>

              {/* Contact Information */}
              <div className="space-y-3">
                <a 
                  href={`mailto:${dept.email}`}
                  className="flex items-center space-x-3 text-blue-600 hover:text-blue-700 transition-colors group/email"
                >
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center group-hover/email:bg-blue-200 transition-colors">
                    <span className="text-xs">📧</span>
                  </div>
                  <span className="font-medium notranslate">{dept.email}</span>
                </a>
                
                <a 
                  href={`tel:${dept.phone.replace(/\s/g, '')}`}
                  className="flex items-center space-x-3 text-green-600 hover:text-green-700 transition-colors group/phone"
                >
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center group-hover/phone:bg-green-200 transition-colors">
                    <span className="text-xs">📞</span>
                  </div>
                  <span className="font-medium">{dept.phone}</span>
                </a>
              </div>

              {/* Quick Action Button */}
              <div className="mt-6">
                <button className={`w-full bg-gradient-to-r ${dept.color} text-white py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg`}>
                  Contact {dept.title.split(' ')[0]}
                </button>
              </div>

              {/* Hover Glow */}
              <div className="absolute inset-0 rounded-2xl bg-blue-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          ))}
        </div>

        {/* Quick Contact Summary */}
        <div className={`mt-16 bg-white rounded-2xl shadow-lg p-8 transition-all duration-1000 ${
          isInView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`} style={{ transitionDelay: '1200ms' }}>
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Quick Contact Guide</h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { need: "Need a Quote?", contact: "Sales Team", color: "bg-blue-100 text-blue-800" },
              { need: "Technical Question?", contact: "Quality Team", color: "bg-green-100 text-green-800" },
              { need: "Delivery Issue?", contact: "Logistics Team", color: "bg-orange-100 text-orange-800" },
              { need: "Job Opportunity?", contact: "HR Team", color: "bg-purple-100 text-purple-800" }
            ].map((guide, index) => (
              <div key={index} className="text-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <div className="font-semibold text-gray-900 mb-2">{guide.need}</div>
                <div className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${guide.color}`}>
                  {guide.contact}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DepartmentContacts;