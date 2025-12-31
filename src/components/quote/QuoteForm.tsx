import React, { useState } from 'react';
import { Send, CheckCircle, User, Building, Phone, Mail, Package, MapPin, Calendar, MessageSquare, ChevronDown, MessageCircle } from 'lucide-react';
import { useInView } from '../../hooks/useInView';
// Wire up to backend API
// In production with nginx proxy, use relative path (empty string)
// In development, use full URL or let vite proxy handle it
const API_BASE_URL = (import.meta as any).env?.VITE_API_URL || 
  (import.meta.env.PROD ? '' : 'http://localhost:4000');

const QuoteForm = () => {
  const [ref, isInView] = useInView({ threshold: 0.3 });
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    countryCode: '+91',
    phoneNumber: '',
    whatsappCountryCode: '+91',
    whatsappNumber: '',
    emailAddress: '',
    projectLocation: '',
    productType: '',
    quantityRange: '',
    requiredDiameter: [],
    deliveryRequired: false,
    deliveryLocation: '',
    projectTimeline: '',
    message: '',
    agreeToTerms: false
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage('');

    // Validate required fields
    if (!formData.fullName || !formData.companyName || !formData.countryCode || !formData.phoneNumber || !formData.emailAddress || !formData.projectLocation || !formData.productType || !formData.quantityRange || !formData.projectTimeline || !formData.agreeToTerms || formData.requiredDiameter.length === 0) {
      setErrorMessage('Please complete all required fields.');
      setIsSubmitting(false);
      return;
    }
    try {
      const payload = {
        ...formData,
        deliveryRequired: formData.deliveryRequired === true || formData.deliveryRequired === 'yes'
      } as any;
      const resp = await fetch(`${API_BASE_URL}/api/quote`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      if (!resp.ok) {
        const err = await resp.json().catch(() => ({}));
        throw new Error(err?.error || 'Failed to submit quote request');
      }
      setIsSubmitted(true);
      setFormData({
        fullName: '',
        companyName: '',
        countryCode: '+91',
        phoneNumber: '',
        whatsappCountryCode: '+91',
        whatsappNumber: '',
        emailAddress: '',
        projectLocation: '',
        productType: '',
        quantityRange: '',
        requiredDiameter: [],
        deliveryRequired: false,
        deliveryLocation: '',
        projectTimeline: '',
        message: '',
        agreeToTerms: false
      });
      setTimeout(() => setIsSubmitted(false), 5000);
    } catch (err: any) {
      setErrorMessage(err?.message || 'Unable to submit. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      if (name === 'requiredDiameter') {
        setFormData(prev => ({
          ...prev,
          requiredDiameter: checked 
            ? [...prev.requiredDiameter, value]
            : prev.requiredDiameter.filter(d => d !== value)
        }));
      } else {
        setFormData(prev => ({ ...prev, [name]: checked }));
      }
    } else if (type === 'radio' && name === 'deliveryRequired') {
      setFormData(prev => ({ ...prev, deliveryRequired: value === 'yes' }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const productTypes = [
    { value: '', label: 'Select Product Type' },
    { value: 'rebar', label: 'Reinforcing Steel Bars (Rebar)' },
    { value: 'billets', label: 'Steel Billets' },
    { value: 'custom', label: 'Custom Order' }
  ];

  const quantityRanges = [
    { value: '', label: 'Select Quantity Range' },
    { value: 'small', label: '< 50 MT' },
    { value: 'medium', label: '50 - 100 MT' },
    { value: 'large', label: '100 - 300 MT' },
    { value: 'bulk', label: '300+ MT' }
  ];

  const diameters = ['8mm', '10mm', '12mm', '16mm', '20mm', '25mm', '32mm'];

  const timelines = [
    { value: '', label: 'Select Timeline' },
    { value: 'immediate', label: 'Immediate (1-2 weeks)' },
    { value: 'month', label: 'Within 1 Month' },
    { value: 'quarter', label: 'Within 3 Months' },
    { value: 'flexible', label: 'Flexible Timeline' }
  ];

  const countryCodes = [
    { code: '+91', country: 'India', flag: '🇮🇳' },
    { code: '+244', country: 'Angola', flag: '🇦🇴' },
    { code: '+1', country: 'United States', flag: '🇺🇸' },
    { code: '+44', country: 'United Kingdom', flag: '🇬🇧' },
    { code: '+86', country: 'China', flag: '🇨🇳' },
    { code: '+81', country: 'Japan', flag: '🇯🇵' },
    { code: '+49', country: 'Germany', flag: '🇩🇪' },
    { code: '+33', country: 'France', flag: '🇫🇷' },
    { code: '+39', country: 'Italy', flag: '🇮🇹' },
    { code: '+34', country: 'Spain', flag: '🇪🇸' },
    { code: '+55', country: 'Brazil', flag: '🇧🇷' },
    { code: '+61', country: 'Australia', flag: '🇦🇺' },
    { code: '+7', country: 'Russia', flag: '🇷🇺' },
    { code: '+82', country: 'South Korea', flag: '🇰🇷' },
    { code: '+65', country: 'Singapore', flag: '🇸🇬' },
    { code: '+971', country: 'UAE', flag: '🇦🇪' },
    { code: '+966', country: 'Saudi Arabia', flag: '🇸🇦' },
    { code: '+27', country: 'South Africa', flag: '🇿🇦' },
    { code: '+234', country: 'Nigeria', flag: '🇳🇬' },
    { code: '+20', country: 'Egypt', flag: '🇪🇬' },
    { code: '+90', country: 'Turkey', flag: '🇹🇷' },
    { code: '+31', country: 'Netherlands', flag: '🇳🇱' },
    { code: '+46', country: 'Sweden', flag: '🇸🇪' },
    { code: '+47', country: 'Norway', flag: '🇳🇴' },
    { code: '+45', country: 'Denmark', flag: '🇩🇰' },
    { code: '+358', country: 'Finland', flag: '🇫🇮' },
    { code: '+41', country: 'Switzerland', flag: '🇨🇭' },
    { code: '+43', country: 'Austria', flag: '🇦🇹' },
    { code: '+32', country: 'Belgium', flag: '🇧🇪' },
    { code: '+351', country: 'Portugal', flag: '🇵🇹' },
    { code: '+30', country: 'Greece', flag: '🇬🇷' },
    { code: '+48', country: 'Poland', flag: '🇵🇱' },
    { code: '+420', country: 'Czech Republic', flag: '🇨🇿' },
    { code: '+36', country: 'Hungary', flag: '🇭🇺' },
    { code: '+40', country: 'Romania', flag: '🇷🇴' },
    { code: '+359', country: 'Bulgaria', flag: '🇧🇬' },
    { code: '+385', country: 'Croatia', flag: '🇭🇷' },
    { code: '+386', country: 'Slovenia', flag: '🇸🇮' },
    { code: '+421', country: 'Slovakia', flag: '🇸🇰' },
    { code: '+370', country: 'Lithuania', flag: '🇱🇹' },
    { code: '+371', country: 'Latvia', flag: '🇱🇻' },
    { code: '+372', country: 'Estonia', flag: '🇪🇪' },
    { code: '+353', country: 'Ireland', flag: '🇮🇪' },
    { code: '+354', country: 'Iceland', flag: '🇮🇸' },
    { code: '+356', country: 'Malta', flag: '🇲🇹' },
    { code: '+357', country: 'Cyprus', flag: '🇨🇾' },
    { code: '+352', country: 'Luxembourg', flag: '🇱🇺' },
    { code: '+377', country: 'Monaco', flag: '🇲🇨' },
    { code: '+378', country: 'San Marino', flag: '🇸🇲' },
    { code: '+39', country: 'Vatican City', flag: '🇻🇦' },
    { code: '+376', country: 'Andorra', flag: '🇦🇩' },
    { code: '+423', country: 'Liechtenstein', flag: '🇱🇮' }
  ];

  if (isSubmitted) {
    return (
      <section id="quote-form" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-green-50 border border-green-200 rounded-2xl p-12">
            <CheckCircle size={80} className="text-green-600 mx-auto mb-6 animate-bounce" />
            <h3 className="text-4xl font-bold text-green-800 mb-4">Thank You for Your Quote Request!</h3>
            <p className="text-green-700 text-xl mb-6">
              Your quote request has been received. Our sales team will reach out within 24 hours 
              with your pricing and product proposal.
            </p>
            <div className="bg-white p-6 rounded-lg inline-block mb-6">
              <p className="text-green-600 font-semibold text-lg">
                📧 Confirmation sent to {formData.emailAddress}
              </p>
              <p className="text-gray-600 mt-2">
                Reference ID: QR-{Date.now().toString().slice(-6)}
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-4 max-w-2xl mx-auto">
              <button className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors">
                Download Company Profile
              </button>
              <button className="border-2 border-green-600 text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors">
                View Product Page
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="quote-form" ref={ref} className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className={`text-4xl font-bold text-gray-900 mb-4 transition-all duration-1000 ${
            isInView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            Quote Request Form
          </h2>
          <p className={`text-xl text-gray-600 transition-all duration-1000 delay-200 ${
            isInView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            Industrial-grade steel with precision, performance, and purpose
          </p>
        </div>

        <div className={`bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl shadow-2xl p-8 border-4 border-blue-100 transition-all duration-1000 ${
          isInView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`} style={{ transitionDelay: '400ms' }}>
          
          {errorMessage && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
              <p className="text-red-600 text-sm">{errorMessage}</p>
            </div>
          )}
          
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Personal Information Section */}
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <User className="mr-3 text-blue-600" size={24} />
                Contact Information
              </h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="group">
                  <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 group-hover:border-blue-300"
                    placeholder="Your full name"
                  />
                </div>
                
                <div className="group">
                  <label htmlFor="companyName" className="block text-sm font-medium text-gray-700 mb-2">
                    Company Name *
                  </label>
                  <input
                    type="text"
                    id="companyName"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 group-hover:border-blue-300"
                    placeholder="Your company name"
                  />
                </div>
                
                <div className="group">
                  <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <div className="flex">
                    <div className="relative">
                      <select
                        name="countryCode"
                        value={formData.countryCode}
                        onChange={handleChange}
                        className="px-3 py-3 border border-gray-300 rounded-l-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-white appearance-none cursor-pointer"
                        style={{ minWidth: '120px' }}
                      >
                        {countryCodes.map((country) => (
                          <option key={`${country.code}-${country.country}`} value={country.code}>
                            {country.flag} {country.code}
                          </option>
                        ))}
                      </select>
                      <ChevronDown size={16} className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" />
                    </div>
                    <input
                      type="tel"
                      id="phoneNumber"
                      name="phoneNumber"
                      value={formData.phoneNumber}
                      onChange={handleChange}
                      required
                      className="flex-1 px-4 py-3 border border-gray-300 border-l-0 rounded-r-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 group-hover:border-blue-300"
                      placeholder="xxx xxx xxx"
                    />
                  </div>
                </div>
                
                <div className="group">
                  <label htmlFor="whatsappNumber" className="block text-sm font-medium text-gray-700 mb-2 flex items-center">
                    <MessageCircle size={16} className="mr-2 text-green-600" />
                    WhatsApp Number
                  </label>
                  <div className="flex">
                    <div className="relative">
                      <select
                        name="whatsappCountryCode"
                        value={formData.whatsappCountryCode}
                        onChange={handleChange}
                        className="px-3 py-3 border border-gray-300 rounded-l-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 bg-white appearance-none cursor-pointer"
                        style={{ minWidth: '120px' }}
                      >
                        {countryCodes.map((country) => (
                          <option key={`${country.code}-${country.country}`} value={country.code}>
                            {country.flag} {country.code}
                          </option>
                        ))}
                      </select>
                      <ChevronDown size={16} className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" />
                    </div>
                    <input
                      type="tel"
                      id="whatsappNumber"
                      name="whatsappNumber"
                      value={formData.whatsappNumber}
                      onChange={handleChange}
                      className="flex-1 px-4 py-3 border border-gray-300 border-l-0 rounded-r-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 group-hover:border-green-300"
                      placeholder="xxx xxx xxx"
                    />
                  </div>
                </div>
                
                <div className="group md:col-span-2">
                  <label htmlFor="emailAddress" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="emailAddress"
                    name="emailAddress"
                    value={formData.emailAddress}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 group-hover:border-blue-300"
                    placeholder="your.email@company.com"
                  />
                </div>
              </div>
            </div>

            {/* Project Information Section */}
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Building className="mr-3 text-green-600" size={24} />
                Project Details
              </h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="group">
                  <label htmlFor="projectLocation" className="block text-sm font-medium text-gray-700 mb-2">
                    Project Location *
                  </label>
                  <input
                    type="text"
                    id="projectLocation"
                    name="projectLocation"
                    value={formData.projectLocation}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 group-hover:border-blue-300"
                    placeholder="City, Province, Angola"
                  />
                </div>
                
                <div className="group">
                  <label htmlFor="projectTimeline" className="block text-sm font-medium text-gray-700 mb-2">
                    Project Timeline *
                  </label>
                  <select
                    id="projectTimeline"
                    name="projectTimeline"
                    value={formData.projectTimeline}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 group-hover:border-blue-300"
                  >
                    {timelines.map((timeline) => (
                      <option key={timeline.value} value={timeline.value}>
                        {timeline.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* Product Specifications Section */}
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Package className="mr-3 text-orange-600" size={24} />
                Product Specifications
              </h3>
              
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="group">
                  <label htmlFor="productType" className="block text-sm font-medium text-gray-700 mb-2">
                    Product Type *
                  </label>
                  <select
                    id="productType"
                    name="productType"
                    value={formData.productType}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 group-hover:border-blue-300"
                  >
                    {productTypes.map((type) => (
                      <option key={type.value} value={type.value}>
                        {type.label}
                      </option>
                    ))}
                  </select>
                </div>
                
                <div className="group">
                  <label htmlFor="quantity" className="block text-sm font-medium text-gray-700 mb-2">
                    Quantity Range *
                  </label>
                  <select
                    id="quantityRange"
                    name="quantityRange"
                    value={formData.quantityRange}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 group-hover:border-blue-300"
                  >
                    {quantityRanges.map((range) => (
                      <option key={range.value} value={range.value}>
                        {range.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Diameter Selection */}
              <div className="group">
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Required Diameter (Select all that apply) *
                </label>
                <div className="grid grid-cols-4 md:grid-cols-7 gap-3">
                  {diameters.map((diameter) => (
                    <label key={diameter} className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="checkbox"
                        name="requiredDiameter"
                        value={diameter}
                        checked={formData.requiredDiameter.includes(diameter)}
                        onChange={handleChange}
                        className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                      />
                      <span className="text-sm font-medium text-gray-700">{diameter}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>

            {/* Delivery Information Section */}
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <MapPin className="mr-3 text-purple-600" size={24} />
                Delivery Information
              </h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="group">
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Delivery Required? *
                  </label>
                  <div className="flex space-x-6">
                    <label className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="radio"
                        name="deliveryRequired"
                        value="yes"
                        checked={formData.deliveryRequired === 'yes'}
                        onChange={handleChange}
                        className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                      />
                      <span className="text-sm font-medium text-gray-700">Yes</span>
                    </label>
                    <label className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="radio"
                        name="deliveryRequired"
                        value="no"
                        checked={formData.deliveryRequired === 'no'}
                        onChange={handleChange}
                        className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                      />
                      <span className="text-sm font-medium text-gray-700">No (Pickup)</span>
                    </label>
                  </div>
                </div>
                
                {(formData.deliveryRequired === true || formData.deliveryRequired === 'yes') && (
                  <div className="group">
                    <label htmlFor="deliveryLocation" className="block text-sm font-medium text-gray-700 mb-2">
                      Delivery Location
                    </label>
                    <input
                      type="text"
                      id="deliveryLocation"
                      name="deliveryLocation"
                      value={formData.deliveryLocation}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 group-hover:border-blue-300"
                      placeholder="Delivery address"
                    />
                  </div>
                )}
              </div>
            </div>

            {/* Additional Requirements */}
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <MessageSquare className="mr-3 text-indigo-600" size={24} />
                Additional Requirements
              </h3>
              
              <div className="group">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message / Notes
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 group-hover:border-blue-300 resize-none"
                  placeholder="Tell us about your specific requirements, certifications needed, project details, or any other information that would help us provide an accurate quote..."
                />
              </div>
            </div>

            {/* Terms Agreement */}
            <div className="flex items-start space-x-3">
              <input
                type="checkbox"
                id="agreeToTerms"
                name="agreeToTerms"
                checked={formData.agreeToTerms}
                onChange={handleChange}
                required
                className="mt-1 w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              <label htmlFor="agreeToTerms" className="text-sm text-gray-600">
                I agree to the <a href="#" className="text-blue-600 hover:text-blue-700 underline">terms and privacy policy</a> and 
                consent to AISCO contacting me regarding this quote request. I understand that this quote is valid for 30 days. *
              </label>
            </div>

            {/* Submit Button */}
            <div className="text-center pt-6">
              <button
                type="submit"
                disabled={!formData.agreeToTerms || isSubmitting}
                className="group bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 disabled:from-gray-400 disabled:to-gray-500 text-white px-16 py-5 rounded-xl font-bold text-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl disabled:cursor-not-allowed disabled:hover:scale-100 inline-flex items-center space-x-4"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-7 w-7 border-b-2 border-white"></div>
                    <span>Submitting...</span>
                  </>
                ) : (
                  <>
                    <Send size={28} className="group-hover:translate-x-1 transition-transform" />
                    <span>Submit Quote Request</span>
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default QuoteForm;