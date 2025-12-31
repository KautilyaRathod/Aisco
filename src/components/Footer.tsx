import React from 'react';
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <img 
              src="/Angola Logo.png" 
              alt="AISCO Logo" 
              className="h-16 sm:h-20 lg:h-24 w-auto mb-4 sm:mb-6"
              loading="lazy"
              decoding="async"
            />
            <p className="text-gray-300 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
              AISCO – Angola Iron and Steel Corporation, LDA is Angola's leading steel manufacturing enterprise, dedicated to producing world-class reinforcing steel for national infrastructure, industrial growth, and sustainable development. Backed by cutting-edge European technologies and led by visionary leadership, AISCO stands at the forefront of Southern Africa's industrial transformation.
            </p>
            <p className="text-gray-300 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
              Our operations reflect a bold commitment to quality, innovation, and nation-building—powering roads, bridges, high-rise structures, and energy projects with steel made in Angola, for Angola.
            </p>
            <div className="text-xl sm:text-2xl font-bold text-blue-400 mb-4 sm:mb-2">BUILD FOR GENERATIONS</div>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="Facebook">
                <Facebook size={20} className="sm:w-6 sm:h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="Twitter">
                <Twitter size={20} className="sm:w-6 sm:h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="LinkedIn">
                <Linkedin size={20} className="sm:w-6 sm:h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="Instagram">
                <Instagram size={20} className="sm:w-6 sm:h-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 sm:mb-6">Quick Links</h3>
            <ul className="space-y-2 sm:space-y-3">
              <li><a href="#about" className="text-gray-300 hover:text-white transition-colors text-sm sm:text-base">About AISCO</a></li>
              <li><a href="#products" className="text-gray-300 hover:text-white transition-colors text-sm sm:text-base">Our Products</a></li>
              <li><a href="#manufacturing" className="text-gray-300 hover:text-white transition-colors text-sm sm:text-base">Manufacturing</a></li>
              <li><a href="#quality" className="text-gray-300 hover:text-white transition-colors text-sm sm:text-base">Quality & Certifications</a></li>
              <li><a href="#sustainability" className="text-gray-300 hover:text-white transition-colors text-sm sm:text-base">Sustainability</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-white transition-colors text-sm sm:text-base">Contact Us</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Information</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin size={24} className="sm:w-14 sm:h-14 lg:w-16 lg:h-16 text-blue-400 mt-1 flex-shrink-0" />
                <div className="text-gray-300 text-sm sm:text-base">
                  <div>Manufacturing Site;</div>
                  <div className="notranslate">Muceque Cabele, Comuna Da Barra Do Dande, Municipio Do Dande, Provincia Do Benga, Angola.</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={20} className="text-blue-400 flex-shrink-0" />
                <div className="text-gray-300 text-sm sm:text-base">+244 941475798</div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={20} className="text-blue-400 flex-shrink-0" />
                <div className="text-gray-300 notranslate text-sm sm:text-base break-all sm:break-normal">info@aisco.com.co</div>
              </div>
            </div>

            {/* Certifications */}
            <div className="mt-8">
              <h4 className="font-semibold mb-3">Certifications</h4>
              <div className="text-sm text-gray-300 space-y-1">
                <div>LNEC E 450-2017</div>
                <div>NA 34:2016</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm">
            © 2024 AISCO – Angola Iron and Steel Corporation, LDA. All rights reserved.
          </div>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;