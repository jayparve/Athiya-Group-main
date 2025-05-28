// 'import React, { useState } from 'react';
// import { Search, MapPin, Info } from 'lucide-react';

// const LandingPage = () => {
//   const [activeTab, setActiveTab] = useState('all');
//   const [searchTerm, setSearchTerm] = useState('');
//   const [selectedPlot, setSelectedPlot] = useState(null);
  
//   const plotData = [
//     {
//       id: 1,
//       taluka: 'PEN',
//       talukaHindi: 'पेण',
//       image: "/api/placeholder/800/600",
//       description: "Pen offers scenic agricultural plots with excellent connectivity to Mumbai. These plots are ideal for both residential development and farmhouse projects.",
//       villages: [
//         { name: 'RAVE', nameHindi: 'रावे', rate: 4, checked: true, image: "/api/placeholder/800/600" },
//         { name: 'JOHE', nameHindi: 'जोहे', rate: 4, checked: false, image: "/api/placeholder/800/600" },
//         { name: 'KALVE', nameHindi: 'कळवे', rate: 4, checked: true, image: "/api/placeholder/800/600" },
//         { name: 'HAMPAPURI', nameHindi: 'हम्रापुरी', rate: 4, checked: true, image: "/api/placeholder/800/600" },
//         { name: 'SAPOLI', nameHindi: 'सापोली', rate: 4, checked: false, image: "/api/placeholder/800/600" },
//         { name: 'SONKHAR', nameHindi: 'सोनखार', rate: 4, checked: false, image: "/api/placeholder/800/600" }
//       ]
//     },
//     {
//       id: 2,
//       taluka: 'URAN',
//       talukaHindi: 'उरण',
//       image: "/api/placeholder/800/600",
//       description: "Uran is a rapidly developing area with excellent investment potential due to planned infrastructure projects. Close to JNPT port and upcoming airport.",
//       villages: [
//         { name: 'VINDHANE', nameHindi: 'विंधणे', rate: 8, checked: true, image: "/api/placeholder/800/600" },
//         { name: 'CHIRNER', nameHindi: 'चिरनेर', rate: 8, checked: false, image: "/api/placeholder/800/600" },
//         { name: 'KALAMBUSARE', nameHindi: 'कळंबुसरे', rate: 8, checked: false, image: "/api/placeholder/800/600" },
//         { name: 'MOTHEJI', nameHindi: 'मोठेजाई', rate: 8, checked: true, image: "/api/placeholder/800/600" },
//         { name: 'KOPROLI', nameHindi: 'कोपरोली', rate: 8, checked: true, image: "/api/placeholder/800/600" },
//         { name: 'KHOPATE', nameHindi: 'खोपटे', rate: 8, checked: true, image: "/api/placeholder/800/600" },
//         { name: 'PIRKON', nameHindi: 'पिरकोन', rate: 8, checked: true, image: "/api/placeholder/800/600" },
//         { name: 'TALBANDKHAR', nameHindi: 'तळबंदखार', rate: 8, checked: true, image: "/api/placeholder/800/600" }
//       ]
//     },
//     {
//       id: 3,
//       taluka: 'URAN',
//       talukaHindi: 'उरण',
//       image: "/api/placeholder/800/600",
//       description: "Premium plots in Uran with scenic views and proximity to upcoming infrastructure projects. Great potential for long-term value appreciation.",
//       villages: [
//         { name: 'SARDE', nameHindi: 'सारदे', rate: 7, checked: false, image: "/api/placeholder/800/600" },
//         { name: 'VASHENI', nameHindi: 'वषेणी', rate: 7, checked: false, image: "/api/placeholder/800/600" },
//         { name: 'PUNADE', nameHindi: 'पुनाडे', rate: 7, checked: false, image: "/api/placeholder/800/600" }
//       ]
//     },
//     {
//       id: 4,
//       taluka: 'PANVEL',
//       talukaHindi: 'पनवेल',
//       image: "/api/placeholder/800/600",
//       description: "Panvel offers excellent connectivity to Mumbai and Pune. These plots are strategically located near the planned Navi Mumbai International Airport.",
//       villages: [
//         { name: 'KELVANE', nameHindi: 'केळवणे', rate: 5, checked: true, image: "/api/placeholder/800/600" }
//       ]
//     },
//     {
//       id: 5,
//       taluka: 'PANVEL',
//       talukaHindi: 'पनवेल',
//       image: "/api/placeholder/800/600",
//       description: "Premium plots in Panvel with excellent investment potential due to upcoming infrastructure projects and proximity to major highways.",
//       villages: [
//         { name: 'DIGHATI', nameHindi: 'दिघाटी', rate: 6, checked: true, image: "/api/placeholder/800/600" },
//         { name: 'SAI', nameHindi: 'साई', rate: 6, checked: true, image: "/api/placeholder/800/600" }
//       ]
//     }
//   ];
  
//   // Filter plots based on search term and active tab
//   const filteredPlots = plotData.filter(plot => {
//     const matchesTaluka = plot.taluka.toLowerCase().includes(searchTerm.toLowerCase());
//     const matchesVillage = plot.villages.some(village => 
//       village.name.toLowerCase().includes(searchTerm.toLowerCase())
//     );
    
//     if (activeTab === 'all') return matchesTaluka || matchesVillage;
//     return plot.taluka === activeTab && (matchesTaluka || matchesVillage);
//   });
  
//   const uniqueTalukas = [...new Set(plotData.map(plot => plot.taluka))];
  
//   const handleVillageClick = (plot, village) => {
//     setSelectedPlot({
//       taluka: plot.taluka,
//       talukaHindi: plot.talukaHindi,
//       village: village.name,
//       villageHindi: village.nameHindi,
//       rate: village.rate,
//       image: village.image,
//       description: plot.description
//     });
//   };
  
//   const formatRate = (rate) => {
//     return `${rate} Lakh per Guntha`;
//   };

//   return (
//     <div className="min-h-screen bg-gray-50">
//       {/* Hero Section */}
//       <div className="bg-gradient-to-r from-blue-800 to-blue-600 py-16 px-4 relative">
//         <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{backgroundImage: 'url("/api/placeholder/1920/1080")'}}></div>
//         <div className="max-w-6xl mx-auto text-center relative z-10">
//           <h1 className="text-4xl font-bold text-white mb-4">KSC New Township Land Plots</h1>
//           <p className="text-xl text-blue-100 mb-8">Find your ideal investment opportunity in premium locations</p>
          
//           {/* Search */}
//           <div className="relative max-w-xl mx-auto">
//             <input
//               type="text"
//               placeholder="Search for Taluka or Village..."
//               className="w-full py-3 px-12 rounded-full shadow-lg text-gray-700 focus:outline-none"
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//             />
//             <Search className="absolute left-4 top-3.5 text-gray-400" size={20} />
//           </div>
//         </div>
//       </div>
      
//       {/* Main Content */}
//       <div className="max-w-6xl mx-auto py-8 px-4">
//         {/* Tabs */}
//         <div className="flex overflow-x-auto scrollbar-hide space-x-2 mb-8 pb-2">
//           <button
//             onClick={() => setActiveTab('all')}
//             className={`px-4 py-2 rounded-full whitespace-nowrap ${
//               activeTab === 'all' 
//                 ? 'bg-blue-600 text-white' 
//                 : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
//             }`}
//           >
//             All Locations
//           </button>
          
//           {uniqueTalukas.map(taluka => (
//             <button
//               key={taluka}
//               onClick={() => setActiveTab(taluka)}
//               className={`px-4 py-2 rounded-full whitespace-nowrap ${
//                 activeTab === taluka 
//                   ? 'bg-blue-600 text-white' 
//                   : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
//               }`}
//             >
//               {taluka}
//             </button>
//           ))}
//         </div>
        
//         {/* Plot Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {filteredPlots.map(plot => (
//             <div key={`${plot.taluka}-${plot.id}`} className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
//               <div className="relative">
//                 <img 
//                   src={plot.image} 
//                   alt={`${plot.taluka} Land Plots`} 
//                   className="w-full h-48 object-cover"
//                 />
//                 <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
//                   <h3 className="text-lg font-semibold text-white flex items-center">
//                     <MapPin size={18} className="mr-2" />
//                     {plot.taluka} ({plot.talukaHindi})
//                   </h3>
//                 </div>
//               </div>
              
//               <div className="p-4">
//                 <p className="text-gray-600 mb-3 text-sm line-clamp-2">{plot.description}</p>
//                 <ul className="divide-y divide-gray-200">
//                   {plot.villages.map(village => (
//                     <li 
//                       key={village.name} 
//                       className="py-3 flex justify-between items-center cursor-pointer hover:bg-gray-50 px-2 rounded"
//                       onClick={() => handleVillageClick(plot, village)}
//                     >
//                       <div className="flex items-center">
//                         {village.checked && (
//                           <span className="w-2 h-2 bg-green-500 rounded-full mr-2" title="Available"></span>
//                         )}
//                         <span>{village.name} <span className="text-gray-500 text-sm">({village.nameHindi})</span></span>
//                       </div>
//                       <span className="font-medium text-blue-600">₹{village.rate} Lakh</span>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             </div>
//           ))}
//         </div>
        
//         {/* Plot Details Modal */}
//         {selectedPlot && (
//           <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
//             <div className="bg-white rounded-lg max-w-2xl w-full">
//               <div className="bg-blue-700 text-white px-6 py-4 rounded-t-lg flex justify-between items-center">
//                 <h3 className="text-xl font-bold">Plot Details</h3>
//                 <button 
//                   onClick={() => setSelectedPlot(null)}
//                   className="text-white hover:text-blue-200"
//                 >
//                   ✕
//                 </button>
//               </div>
              
//               <div className="flex flex-col md:flex-row">
//                 <div className="md:w-1/2">
//                   <img 
//                     src={selectedPlot.image} 
//                     alt={`${selectedPlot.village} Land Plot`}
//                     className="w-full h-full object-cover"
//                   />
//                 </div>
                
//                 <div className="p-6 md:w-1/2">
//                   <div className="mb-4">
//                     <p className="text-gray-500 text-sm">Taluka</p>
//                     <p className="text-lg font-medium">{selectedPlot.taluka} ({selectedPlot.talukaHindi})</p>
//                   </div>
                  
//                   <div className="mb-4">
//                     <p className="text-gray-500 text-sm">Village</p>
//                     <p className="text-lg font-medium">{selectedPlot.village} ({selectedPlot.villageHindi})</p>
//                   </div>
                  
//                   <div className="mb-4">
//                     <p className="text-gray-500 text-sm">Rate per Guntha</p>
//                     <p className="text-2xl font-bold text-blue-600">₹{selectedPlot.rate} Lakh</p>
//                   </div>
                  
//                   <div className="mb-6">
//                     <p className="text-gray-500 text-sm">Description</p>
//                     <p className="text-gray-700">{selectedPlot.description}</p>
//                   </div>
                  
//                   <div className="flex space-x-4">
//                     <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg flex-1 font-medium">
//                       Book Site Visit
//                     </button>
//                     <button className="bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg flex-1 font-medium">
//                       Contact Agent
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
      
//       {/* Features */}
//       <div className="bg-gray-100 py-12 px-4">
//         <div className="max-w-6xl mx-auto">
//           <h2 className="text-3xl font-bold text-center mb-10">Why Choose KSC New Township?</h2>
          
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             <div className="bg-white p-6 rounded-lg shadow-md text-center">
//               <div className="bg-blue-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
//                 <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
//                 </svg>
//               </div>
//               <h3 className="text-xl font-semibold mb-2">Prime Location</h3>
//               <p className="text-gray-600">Strategically located plots with excellent connectivity to major highways and urban centers.</p>
//             </div>
            
//             <div className="bg-white p-6 rounded-lg shadow-md text-center">
//               <div className="bg-blue-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
//                 <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
//                 </svg>
//               </div>
//               <h3 className="text-xl font-semibold mb-2">Investment Potential</h3>
//               <p className="text-gray-600">Rapidly developing area with significant appreciation potential in the coming years.</p>
//             </div>
            
//             <div className="bg-white p-6 rounded-lg shadow-md text-center">
//               <div className="bg-blue-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
//                 <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
//                 </svg>
//               </div>
//               <h3 className="text-xl font-semibold mb-2">Clear Title</h3>
//               <p className="text-gray-600">All plots come with clear legal titles and necessary approvals from local authorities.</p>
//             </div>
//           </div>
//         </div>
//       </div>
      
//       {/* CTA */}
//       <div className="bg-blue-800 text-white py-12 px-4">
//         <div className="max-w-4xl mx-auto text-center">
//           <h2 className="text-3xl font-bold mb-4">Ready to Invest in Your Future?</h2>
//           <p className="text-xl mb-8">Contact our experts today to schedule a site visit or learn more about our available plots.</p>
//           <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
//             <input 
//               type="text" 
//               placeholder="Your Name" 
//               className="px-4 py-3 rounded-lg text-gray-800 focus:outline-none"
//             />
//             <input 
//               type="text" 
//               placeholder="Your Phone" 
//               className="px-4 py-3 rounded-lg text-gray-800 focus:outline-none"
//             />
//             <button className="bg-green-600 hover:bg-green-700 px-6 py-3 rounded-lg font-medium">
//               Contact Now
//             </button>
//           </div>
//         </div>
//       </div>
      
//       {/* Footer */}
//       <footer className="bg-gray-900 text-white py-8 px-4">
//         <div className="max-w-6xl mx-auto">
//           <div className="flex flex-col md:flex-row justify-between items-center">
//             <div className="mb-4 md:mb-0">
//               <h3 className="text-xl font-bold">KSC New Township</h3>
//               <p className="text-gray-400">Premium land plots at competitive rates</p>
//             </div>
            
//             <div className="flex flex-col space-y-2">
//               <p className="flex items-center">
//                 <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
//                 </svg>
//                 +91 98765 43210
//               </p>
//               <p className="flex items-center">
//                 <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
//                 </svg>
//                 info@kscnewtownship.com
//               </p>
//             </div>
//           </div>
//           <div className="mt-8 pt-6 border-t border-gray-800 text-center text-gray-500">
//             <p>&copy; 2025 KSC New Township. All rights reserved.</p>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default LandingPage;


import React from 'react'

function plotData() {
  return (
    <div>plotData</div>
  )
}

export default plotData