import React, { useState } from 'react';
import { Send, Phone, MessageCircle, CheckCircle, ArrowRight, Calculator } from 'lucide-react';
import { useInView } from '../../hooks/useInView';
import { apiUrl } from '../../utils/apiUrl';

const ProductInquiry = () => {
  const [ref, isInView] = useInView({ threshold: 0.3 });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    projectType: '',
    rebarDiameter: '',
    quantity: '',
    deliveryLocation: '',
    timeline: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const resp = await fetch(apiUrl('/api/inquiry'), {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      if (!resp.ok) {
        const err = await resp.json().catch(() => ({}));
        throw new Error(err?.error || 'Failed to submit inquiry');
      }
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        projectType: '',
        rebarDiameter: '',
        quantity: '',
        deliveryLocation: '',
        timeline: '',
        message: ''
      });
      alert('Inquiry submitted successfully.');
    } catch (err: any) {
      alert(err?.message || 'Unable to submit. Please try again.');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const services = [
    {
      icon: <Calculator size={24} />,
      title: "Bulk Order Quotes",
      description: "Competitive pricing for large quantity orders"
    },
    {
      icon: <Phone size={24} />,
      title: "Technical Support",
      description: "Expert consultation on product selection"
    },
    {
      icon: <ArrowRight size={24} />,
      title: "Custom Delivery Planning",
      description: "Flexible logistics solutions for your project"
    }
  ];

  return (
    <section ref={ref} className="py-20 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20" />
        {/* Spotlight Effect */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl animate-pulse" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold text-white mb-6 transition-all duration-1000 ${
            isInView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            Get In Touch for Your Project
          </h2>
          <p className={`text-xl text-blue-100 mb-8 max-w-3xl mx-auto transition-all duration-1000 delay-200 ${
            isInView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            Looking for certified rebar for your next construction project? 
            Our experts are ready to provide technical support and competitive pricing.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className={`transition-all duration-1000 ${
            isInView ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'
          }`} style={{ transitionDelay: '400ms' }}>
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-6">Request a Quote</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-blue-100 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-blue-200 focus:ring-2 focus:ring-blue-400 focus:border-transparent backdrop-blur-sm"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-blue-100 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-blue-200 focus:ring-2 focus:ring-blue-400 focus:border-transparent backdrop-blur-sm"
                      placeholder="your.email@company.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-blue-100 mb-2">
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-blue-200 focus:ring-2 focus:ring-blue-400 focus:border-transparent backdrop-blur-sm"
                      placeholder="Your company"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-blue-100 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-blue-200 focus:ring-2 focus:ring-blue-400 focus:border-transparent backdrop-blur-sm"
                      placeholder="+244 xxx xxx xxx"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="projectType" className="block text-sm font-medium text-blue-100 mb-2">
                      Project Type
                    </label>
                    <select
                      id="projectType"
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:ring-2 focus:ring-blue-400 focus:border-transparent backdrop-blur-sm"
                    >
                      <option value="" className="text-gray-900">Select project type</option>
                      <option value="residential" className="text-gray-900">Residential</option>
                      <option value="commercial" className="text-gray-900">Commercial</option>
                      <option value="infrastructure" className="text-gray-900">Infrastructure</option>
                      <option value="industrial" className="text-gray-900">Industrial</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="rebarDiameter" className="block text-sm font-medium text-blue-100 mb-2">
                      Rebar Diameter
                    </label>
                    <select
                      id="rebarDiameter"
                      name="rebarDiameter"
                      value={formData.rebarDiameter}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:ring-2 focus:ring-blue-400 focus:border-transparent backdrop-blur-sm"
                    >
                      <option value="" className="text-gray-900">Select diameter</option>
                      <option value="8mm" className="text-gray-900">8mm</option>
                      <option value="10mm" className="text-gray-900">10mm</option>
                      <option value="12mm" className="text-gray-900">12mm</option>
                      <option value="16mm" className="text-gray-900">16mm</option>
                      <option value="20mm" className="text-gray-900">20mm</option>
                      <option value="25mm" className="text-gray-900">25mm</option>
                      <option value="32mm" className="text-gray-900">32mm</option>
                      <option value="mixed" className="text-gray-900">Mixed sizes</option>
                    </select>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="quantity" className="block text-sm font-medium text-blue-100 mb-2">
                      Estimated Quantity (MT)
                    </label>
                    <input
                      type="number"
                      id="quantity"
                      name="quantity"
                      value={formData.quantity}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-blue-200 focus:ring-2 focus:ring-blue-400 focus:border-transparent backdrop-blur-sm"
                      placeholder="e.g., 50"
                    />
                  </div>
                  <div>
                    <label htmlFor="timeline" className="block text-sm font-medium text-blue-100 mb-2">
                      Delivery Timeline
                    </label>
                    <select
                      id="timeline"
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:ring-2 focus:ring-blue-400 focus:border-transparent backdrop-blur-sm"
                    >
                      <option value="" className="text-gray-900">Select timeline</option>
                      <option value="immediate" className="text-gray-900">Immediate (1-2 weeks)</option>
                      <option value="month" className="text-gray-900">Within a month</option>
                      <option value="quarter" className="text-gray-900">Within 3 months</option>
                      <option value="flexible" className="text-gray-900">Flexible</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="deliveryLocation" className="block text-sm font-medium text-blue-100 mb-2">
                    Delivery Location
                  </label>
                  <input
                    type="text"
                    id="deliveryLocation"
                    name="deliveryLocation"
                    value={formData.deliveryLocation}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-blue-200 focus:ring-2 focus:ring-blue-400 focus:border-transparent backdrop-blur-sm"
                    placeholder="City, Province, Angola"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-blue-100 mb-2">
                    Additional Requirements
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-blue-200 focus:ring-2 focus:ring-blue-400 focus:border-transparent backdrop-blur-sm"
                    placeholder="Tell us about your specific requirements, certifications needed, or any other details..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl inline-flex items-center justify-center space-x-3 group"
                >
                  <Send size={24} className="group-hover:translate-x-1 transition-transform" />
                  <span>Send Inquiry</span>
                </button>
              </form>
            </div>
          </div>

          {/* Contact Information & Services */}
          <div className={`transition-all duration-1000 ${
            isInView ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
          }`} style={{ transitionDelay: '600ms' }}>
            
            {/* Services */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-white mb-6">What We Offer</h3>
              <div className="space-y-4">
                {services.map((service, index) => (
                  <div key={index} className="flex items-start space-x-4 p-4 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">
                    <div className="bg-orange-500 text-white p-2 rounded-lg">
                      {service.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">{service.title}</h4>
                      <p className="text-blue-100 text-sm">{service.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Contact */}
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20 mb-8">
              <h4 className="text-xl font-bold text-white mb-4">Quick Contact</h4>
              <div className="space-y-4">
                <a href="tel:+244931977848" className="flex items-center space-x-3 text-blue-100 hover:text-white transition-colors">
                  <Phone size={20} />
                  <span>+244 931977848</span>
                </a>
                <a href="#" className="flex items-center space-x-3 text-blue-100 hover:text-white transition-colors">
                  <MessageCircle size={20} />
                  <span>WhatsApp Available</span>
                </a>
              </div>
            </div>

            {/* Response Time */}
            <div className="bg-green-600/20 backdrop-blur-sm p-6 rounded-2xl border border-green-400/30">
              <div className="flex items-center space-x-3 mb-3">
                <CheckCircle size={24} className="text-green-400" />
                <h4 className="text-xl font-bold text-white">Fast Response Guarantee</h4>
              </div>
              <p className="text-green-100 mb-4">
                We respond to all inquiries within 24 hours with detailed quotes and technical specifications.
              </p>
              <div className="grid grid-cols-2 gap-4 text-center">
                <div className="bg-white/10 p-3 rounded-lg">
                  <div className="text-2xl font-bold text-green-400">24h</div>
                  <div className="text-green-100 text-sm">Response Time</div>
                </div>
                <div className="bg-white/10 p-3 rounded-lg">
                  <div className="text-2xl font-bold text-green-400">100%</div>
                  <div className="text-green-100 text-sm">Quote Accuracy</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductInquiry;