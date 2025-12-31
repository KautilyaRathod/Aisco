import React, { useState } from 'react';
import { Download, FileText, BarChart3, Clipboard, Eye, ArrowRight, X, File } from 'lucide-react';
import { useInView } from '../../hooks/useInView';

const TechnicalDownloads = () => {
  const [ref, isInView] = useInView({ threshold: 0.3 });
  const [showFileModal, setShowFileModal] = useState(false);

  const downloads = [
    {
      icon: <FileText size={32} />,
      title: "Rebar Technical Datasheet",
      description: "Complete specifications, dimensions, and mechanical properties",
      fileSize: "2.4 MB",
      format: "PDF",
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-500"
    },
    {
      icon: <Clipboard size={32} />,
      title: "Compliance Certificates",
      description: "LNEC E 450-2017 and NA 34:2016 certification documents",
      fileSize: "1.8 MB",
      format: "PDF",
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-500"
    },
    {
      icon: <BarChart3 size={32} />,
      title: "Chemical Composition Chart",
      description: "Detailed chemical analysis and composition data",
      fileSize: "856 KB",
      format: "PDF",
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-500"
    },
    {
      icon: <BarChart3 size={32} />,
      title: "Mechanical Test Reports",
      description: "Tensile properties, surface characteristics, and rebend test data",
      fileSize: "Multiple Files",
      format: "PDF",
      color: "from-orange-500 to-orange-600",
      bgColor: "bg-orange-500"
    }
  ];

  // Mechanical Properties files for selection
  const mechanicalPropertiesFiles = [
    {
      filename: "AISCO Charts. (1)[1].pdf",
      displayName: "Tensile Properties",
      description: "Comprehensive tensile strength and elongation data",
      fileSize: "1.2 MB"
    },
    {
      filename: "AISCO Charts. (3)[1].pdf",
      displayName: "Surface Geometrical Characteristics",
      description: "Surface finish and geometric property specifications",
      fileSize: "856 KB"
    },
    {
      filename: "AISCO Charts. (4)[1].pdf",
      displayName: "Rebend Test",
      description: "Rebend test results and bending performance data",
      fileSize: "1.1 MB"
    }
  ];

  const handleDownload = (title: string) => {
    if (title === "Rebar Technical Datasheet") {
      try {
        // Create a link element to download the AISCO Charts (2) file
        const link = document.createElement('a');
        link.href = '/AISCO Charts. (2)[1].pdf';
        link.download = 'AISCO_Rebar_Technical_Datasheet.pdf';
        link.style.display = 'none';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        
        // Show success message
        console.log('Rebar Technical Datasheet downloaded successfully');
      } catch (error) {
        console.error('Download failed:', error);
        alert('Download failed. Please try again or contact us for assistance.');
      }
    } else if (title === "Compliance Certificates") {
      try {
        // Create a link element to download the certificate.pdf file
        const link = document.createElement('a');
        link.href = '/certificate.pdf';
        link.download = 'AISCO_Compliance_Certificates.pdf';
        link.style.display = 'none';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        
        // Show success message
        console.log('Certificate downloaded successfully');
      } catch (error) {
        console.error('Download failed:', error);
        alert('Download failed. Please try again or contact us for assistance.');
      }
    } else if (title === "Chemical Composition Chart") {
      try {
        // Create a link element to download the AISCO Charts (5) file
        const link = document.createElement('a');
        link.href = '/AISCO Charts. (5)[1].pdf';
        link.download = 'AISCO_Chemical_Composition_Chart.pdf';
        link.style.display = 'none';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        
        // Show success message
        console.log('Chemical Composition Chart downloaded successfully');
      } catch (error) {
        console.error('Download failed:', error);
        alert('Download failed. Please try again or contact us for assistance.');
      }
    } else if (title === "Mechanical Test Reports") {
      // Show file selection modal instead of direct download
      setShowFileModal(true);
    } else {
      // For other documents, show a message or handle differently
      console.log(`Downloading: ${title}`);
      alert(`${title} download will be available soon. Please contact us for immediate access.`);
    }
  };

  const handlePreview = (title: string) => {
    // Simulate preview
    console.log(`Previewing: ${title}`);
  };

  const downloadMechanicalPropertiesFile = (filename: string, displayName: string) => {
    try {
      const link = document.createElement('a');
      link.href = `/${filename}`;
      link.download = `${displayName.replace(/\s+/g, '_')}.pdf`;
      link.style.display = 'none';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      console.log(`${displayName} downloaded successfully`);
      setShowFileModal(false);
    } catch (error) {
      console.error('Download failed:', error);
      alert('Download failed. Please try again or contact us for assistance.');
    }
  };

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Technical Documentation
          </h2>
          <p className="text-xl text-gray-600">
            Download comprehensive technical specifications and certificates
          </p>
        </div>

        {/* Downloads Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {downloads.map((download, index) => (
            <div
              key={index}
              className="relative bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-lg"
            >
              {/* Icon Container */}
              <div className={`w-16 h-16 ${download.bgColor} rounded-xl flex items-center justify-center text-white mb-6 shadow-lg`}>
                {download.icon}
              </div>
              
              {/* Content */}
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {download.title}
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {download.description}
              </p>

              {/* File Info */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-4">
                  <div className="text-sm text-gray-500">
                    <span className="font-semibold">{download.format}</span> • {download.fileSize}
                  </div>
                </div>
                <div className="text-green-600 text-sm font-semibold">
                  ✓ Available
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex space-x-3">
                <button
                  onClick={() => handleDownload(download.title)}
                  className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-lg font-semibold transition-colors duration-200 inline-flex items-center justify-center space-x-2"
                >
                  <Download size={18} />
                  <span>Download</span>
                </button>
                <button
                  onClick={() => handlePreview(download.title)}
                  className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-3 rounded-lg font-semibold transition-colors duration-200 inline-flex items-center justify-center"
                >
                  <Eye size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Access Section */}
        <div className={`bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-white transition-all duration-1000 ${
          isInView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`} style={{ transitionDelay: '1000ms' }}>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">Need Custom Documentation?</h3>
              <p className="text-blue-100 mb-6 leading-relaxed">
                Our technical team can provide customized specifications, test reports, 
                and compliance documentation tailored to your specific project requirements.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center space-x-2 text-blue-200">
                  <div className="w-2 h-2 bg-blue-300 rounded-full"></div>
                  <span className="text-sm">Project-specific reports</span>
                </div>
                <div className="flex items-center space-x-2 text-blue-200">
                  <div className="w-2 h-2 bg-blue-300 rounded-full"></div>
                  <span className="text-sm">Custom test certificates</span>
                </div>
                <div className="flex items-center space-x-2 text-blue-200">
                  <div className="w-2 h-2 bg-blue-300 rounded-full"></div>
                  <span className="text-sm">Engineering support</span>
                </div>
              </div>
            </div>
            <div className="text-center">
              <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl inline-flex items-center space-x-3 group">
                <span>Request Custom Docs</span>
                <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <p className="text-blue-200 text-sm mt-3">Response within 24 hours</p>
            </div>
          </div>
        </div>

        {/* Additional Resources */}
        <div className={`mt-16 grid md:grid-cols-3 gap-8 transition-all duration-1000 ${
          isInView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`} style={{ transitionDelay: '1200ms' }}>
          {[
            {
              title: "Installation Guide",
              description: "Best practices for rebar installation and handling",
              icon: "📋"
            },
            {
              title: "Safety Guidelines",
              description: "Comprehensive safety protocols for rebar handling",
              icon: "🦺"
            },
            {
              title: "Storage Instructions",
              description: "Proper storage methods to maintain quality",
              icon: "📦"
            }
          ].map((resource, index) => (
            <div key={index} className="text-center p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
              <div className="text-4xl mb-4">{resource.icon}</div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">{resource.title}</h4>
              <p className="text-gray-600 text-sm mb-4">{resource.description}</p>
              <button className="text-blue-600 hover:text-blue-700 font-semibold text-sm transition-colors">
                Learn More →
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* File Selection Modal */}
      {showFileModal && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center text-white">
                  <BarChart3 size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Mechanical Test Reports</h3>
                  <p className="text-gray-600">Choose the test report you want to download</p>
                </div>
              </div>
              <button
                onClick={() => setShowFileModal(false)}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <X size={24} className="text-gray-500" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6">
              <div className="space-y-4">
                {mechanicalPropertiesFiles.map((file, index) => (
                  <div
                    key={index}
                    className="border border-gray-200 rounded-lg p-4 hover:border-orange-300 hover:bg-orange-50 transition-all duration-200"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                          <File size={20} className="text-gray-600" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900">{file.displayName}</h4>
                          <p className="text-sm text-gray-600">{file.description}</p>
                          <p className="text-xs text-gray-500 mt-1">PDF • {file.fileSize}</p>
                        </div>
                      </div>
                      <button
                        onClick={() => downloadMechanicalPropertiesFile(file.filename, file.displayName)}
                        className="bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-lg font-semibold transition-colors duration-200 inline-flex items-center space-x-2"
                      >
                        <Download size={16} />
                        <span>Download</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Modal Footer */}
              <div className="mt-6 pt-4 border-t border-gray-200">
                <p className="text-sm text-gray-600 text-center">
                  All files contain comprehensive mechanical properties data. Choose the version that best fits your needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default TechnicalDownloads;