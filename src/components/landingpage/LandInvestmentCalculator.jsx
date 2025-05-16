import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { BsCurrencyRupee, BsGraphUp, BsShieldCheck, BsBank, BsBuilding } from 'react-icons/bs';
import { FaChartLine, FaRupeeSign, FaRegLightbulb, FaHandHoldingUsd } from 'react-icons/fa';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { MdCompareArrows, MdOutlineModelTraining } from 'react-icons/md';
import { TbChartInfographic } from 'react-icons/tb';

const LandInvestmentCalculator = () => {
  const [investmentAmount, setInvestmentAmount] = useState(5000000); // 50 Lakhs default
  const [timeInYears, setTimeInYears] = useState(5);
  const appreciationRate = 15; // Fixed 15% annual appreciation
  const [projectedValue, setProjectedValue] = useState(0);
  const [gain, setGain] = useState(0);
  const [activeTab, setActiveTab] = useState('calculator'); // 'calculator', 'comparison', 'benefits'
  const [chartData, setChartData] = useState([]);
  
  // Calculate data for the growth chart
  useEffect(() => {
    const years = Array.from({ length: timeInYears + 1 }, (_, i) => i);
    const values = years.map(year => {
      return {
        year,
        value: Math.round(investmentAmount * Math.pow((1 + appreciationRate / 100), year))
      };
    });
    setChartData(values);
  }, [investmentAmount, timeInYears, appreciationRate]);

  useEffect(() => {
    const calculateInvestment = () => {
      const futureValue = investmentAmount * Math.pow((1 + appreciationRate / 100), timeInYears);
      setProjectedValue(Math.round(futureValue));
      setGain(Math.round(futureValue - investmentAmount));
    };
    
    calculateInvestment();
  }, [investmentAmount, timeInYears, appreciationRate]);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        duration: 0.5, 
        staggerChildren: 0.1 
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  // Data for other investment comparisons
  const comparisonData = [
    { name: 'Land at KSC Town', returnRate: 15, icon: <BsBuilding className="text-yellow-500" /> },
    { name: 'Fixed Deposit', returnRate: 5.5, icon: <BsBank className="text-blue-500" /> },
    { name: 'Gold', returnRate: 8, icon: <FaHandHoldingUsd className="text-yellow-600" /> },
    { name: 'Stock Market Index', returnRate: 12, icon: <FaChartLine className="text-green-500" /> }
  ];

  // Calculate comparison values based on the same investment amount and time
  const comparisonResults = comparisonData.map(item => {
    const futureValue = investmentAmount * Math.pow((1 + item.returnRate / 100), timeInYears);
    return {
      ...item,
      futureValue: Math.round(futureValue),
      gain: Math.round(futureValue - investmentAmount)
    };
  });

  // Get the maximum value for chart scaling
  const maxValue = Math.max(...chartData.map(d => d.value));
  
  // Benefits of investing in KSC Town
  const benefits = [
    {
      title: "Prime Location Advantage",
      icon: <HiOutlineLocationMarker className="text-yellow-500" />,
      description: "Strategically located near upcoming infrastructure projects and business hubs."
    },
    {
      title: "Limited Supply, Growing Demand",
      icon: <TbChartInfographic className="text-yellow-500" />,
      description: "Land is finite, while population and development continues to grow in Navi Mumbai."
    },
    {
      title: "Historical Appreciation",
      icon: <BsGraphUp className="text-yellow-500" />,
      description: "KSC Town area has shown consistent 12-18% annual appreciation over the past decade."
    },
    {
      title: "Infrastructure Development",
      icon: <MdOutlineModelTraining className="text-yellow-500" />,
      description: "Upcoming metro, coastal road and airport expansion are driving property values up."
    }
  ];

  return (
    <motion.div 
      className="py-10 md:py-20 px-4 bg-gradient-to-br from-yellow-50 to-white"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
      id="investment-calculator"
    >
      <motion.div variants={itemVariants} className="max-w-6xl mx-auto text-center mb-8">
        <h2 className="text-2xl md:text-4xl font-bold mb-3 text-gray-800">
          KSC Town Navi Mumbai Land Investment Calculator
        </h2>
        <p className="text-md md:text-lg text-gray-600 mb-4">
          Discover the potential return on your investment in Prime Land at KSC Town
        </p>
        <div className="flex items-center justify-center space-x-2 mb-4">
          <HiOutlineLocationMarker className="text-yellow-500 text-xl" />
          <p className="font-medium text-sm md:text-base">KSC Town, Navi Mumbai - Prime Location with High Growth Potential</p>
        </div>
        
        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-8 mt-6">
          {[
            { id: 'calculator', label: 'Calculator', icon: <BsCurrencyRupee /> },
            { id: 'comparison', label: 'Compare Investments', icon: <MdCompareArrows /> },
            { id: 'benefits', label: 'Why KSC Town?', icon: <FaRegLightbulb /> }
          ].map(tab => (
            <motion.button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm md:text-base transition-all ${
                activeTab === tab.id 
                  ? 'bg-yellow-400 text-gray-800 shadow-md' 
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {tab.icon}
              <span className="hidden md:inline">{tab.label}</span>
            </motion.button>
          ))}
        </div>
      </motion.div>

      {/* Calculator Tab */}
      {activeTab === 'calculator' && (
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {/* Input Section */}
            <motion.div 
              variants={itemVariants}
              className="bg-white p-5 md:p-8 rounded-2xl shadow-lg order-2 md:order-1"
            >
              <h3 className="text-xl md:text-2xl font-semibold mb-6 text-gray-800 flex items-center">
                <BsCurrencyRupee className="mr-2 text-yellow-500" />
                Investment Parameters
              </h3>
              
              <div className="space-y-6 md:space-y-8">
                <div>
                  <label className="block text-gray-700 mb-2 font-medium">Investment Amount (₹)</label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">₹</span>
                    <input 
                      type="number"
                      value={investmentAmount}
                      onChange={(e) => setInvestmentAmount(Number(e.target.value))}
                      className="w-full pl-8 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-yellow-400 focus:border-yellow-400 bg-gray-50"
                      min="1000000"
                      max="100000000"
                    />
                  </div>
                  <input
                    type="range"
                    min="1000000"
                    max="100000000"
                    step="500000"
                    value={investmentAmount}
                    onChange={(e) => setInvestmentAmount(Number(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer mt-2 accent-yellow-400"
                  />
                  <div className="flex justify-between text-sm text-gray-500 mt-1">
                    <span>10L</span>
                    <span>5Cr</span>
                    <span>10Cr</span>
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 mb-2 font-medium">Investment Duration (Years)</label>
                  <input
                    type="range"
                    min="1"
                    max="15"
                    value={timeInYears}
                    onChange={(e) => setTimeInYears(Number(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-yellow-400"
                  />
                  <div className="flex justify-between text-gray-700 mt-2 font-medium">
                    {[1, 5, 10, 15].map((year) => (
                      <button
                        key={year}
                        onClick={() => setTimeInYears(year)}
                        className={`px-3 py-1 rounded-full text-xs md:text-sm ${
                          timeInYears === year 
                            ? 'bg-yellow-400 text-gray-800' 
                            : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                        }`}
                      >
                        {year} {year === 1 ? 'Year' : 'Years'}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 mb-2 font-medium">Annual Appreciation Rate</label>
                  <div className="bg-yellow-400 p-4 rounded-xl text-center">
                    <span className="text-2xl font-bold">15%</span>
                    <p className="text-sm text-gray-800 mt-1">Projected annual growth rate for KSC Town</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Results Section */}
            <motion.div 
              variants={itemVariants}
              className="bg-gradient-to-br from-gray-800 to-gray-900 text-white p-5 md:p-8 rounded-2xl shadow-lg order-1 md:order-2"
            >
              <h3 className="text-xl md:text-2xl font-semibold mb-6 flex items-center">
                <BsGraphUp className="mr-2 text-yellow-400" />
                Projected Returns
              </h3>

              <div className="space-y-6">
                <div className="bg-gray-700/50 p-4 md:p-6 rounded-xl">
                  <p className="text-gray-300 mb-1 text-sm">Initial Investment</p>
                  <div className="flex items-baseline">
                    <FaRupeeSign className="text-lg text-yellow-400 mr-1" />
                    <span className="text-2xl md:text-3xl font-bold">
                      {(investmentAmount / 10000000).toFixed(2)} Cr
                    </span>
                  </div>
                </div>

                <div className="bg-gray-700/50 p-4 md:p-6 rounded-xl">
                  <p className="text-gray-300 mb-1 text-sm">Projected Value in {timeInYears} {timeInYears === 1 ? 'year' : 'years'}</p>
                  <div className="flex items-baseline">
                    <FaRupeeSign className="text-lg text-yellow-400 mr-1" />
                    <motion.span 
                      key={projectedValue}
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-2xl md:text-3xl font-bold"
                    >
                      {(projectedValue / 10000000).toFixed(2)} Cr
                    </motion.span>
                  </div>
                </div>

                <div className="bg-yellow-400/90 text-gray-900 p-4 md:p-6 rounded-xl">
                  <p className="text-gray-800 mb-1 text-sm">Potential Gain</p>
                  <div className="flex items-baseline">
                    <FaRupeeSign className="text-lg text-gray-800 mr-1" />
                    <motion.span 
                      key={gain}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-2xl md:text-3xl font-bold"
                    >
                      {(gain / 10000000).toFixed(2)} Cr
                    </motion.span>
                  </div>
                  <p className="mt-2 text-gray-800 flex items-center text-sm">
                    <FaChartLine className="mr-2" />
                    {((gain / investmentAmount) * 100).toFixed(1)}% total growth
                  </p>
                </div>
                
                {/* Visual Growth Chart */}
                <div className="mt-6">
                  <p className="mb-2 text-sm">Growth Visualization</p>
                  <div className="relative h-32 bg-gray-800 rounded-lg p-2">
                    <div className="absolute bottom-2 left-0 right-0 border-t border-gray-600 border-dashed"></div>
                    <div className="flex justify-between h-full relative">
                      {chartData.map((point, index) => {
                        const height = (point.value / maxValue) * 100;
                        return (
                          <div key={index} className="flex flex-col items-center justify-end h-full flex-1">
                            <motion.div 
                              initial={{ height: 0 }}
                              animate={{ height: `${height}%` }}
                              transition={{ duration: 0.7, delay: index * 0.1 }}
                              className={`w-3 md:w-4 rounded-t-md ${index === 0 ? 'bg-gray-600' : 'bg-yellow-400'}`}
                            />
                            <p className="text-xs mt-1 text-gray-400">Y{point.year}</p>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>

                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full mt-4 bg-yellow-400 text-gray-800 py-3 px-6 rounded-lg shadow-lg font-medium text-center cursor-pointer hover:bg-yellow-300 transition-all"
                >
                  Schedule Site Visit
                </motion.button>
              </div>
            </motion.div>
          </div>
          
          {/* Trust Indicators */}
          <motion.div 
            variants={itemVariants}
            className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4"
          >
            {[
              { icon: <BsShieldCheck className="text-xl" />, text: "RERA Approved" },
              { icon: <FaChartLine className="text-xl" />, text: "Historical 15% CAGR" },
              { icon: <BsBuilding className="text-xl" />, text: "Clear Land Titles" },
              { icon: <HiOutlineLocationMarker className="text-xl" />, text: "Prime Location" }
            ].map((item, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-md flex items-center justify-center flex-col text-center">
                <div className="text-yellow-500 mb-2">{item.icon}</div>
                <p className="text-xs md:text-sm font-medium">{item.text}</p>
              </div>
            ))}
          </motion.div>
        </div>
      )}
      
      {/* Comparison Tab */}
      {activeTab === 'comparison' && (
        <motion.div 
          variants={itemVariants} 
          className="max-w-6xl mx-auto"
        >
          <div className="bg-white p-5 md:p-8 rounded-2xl shadow-lg mb-8">
            <h3 className="text-xl md:text-2xl font-semibold mb-6 text-gray-800 flex items-center">
              <MdCompareArrows className="mr-2 text-yellow-500" />
              Investment Comparison
            </h3>
            
            <p className="text-gray-600 mb-6 text-sm md:text-base">
              See how a ₹{(investmentAmount/100000).toFixed(1)} lakhs investment in KSC Town land compares to other investment options over {timeInYears} years:
            </p>
            
            <div className="overflow-x-auto">
              {/* Mobile comparison - vertical cards */}
              <div className="md:hidden space-y-4">
                {comparisonResults.map((item, index) => (
                  <div 
                    key={index} 
                    className={`p-4 rounded-xl ${index === 0 ? 'bg-yellow-50 border-2 border-yellow-400' : 'bg-gray-50'}`}
                  >
                    <div className="flex items-center mb-2">
                      <div className="mr-2 text-lg">{item.icon}</div>
                      <h4 className="font-medium">{item.name}</h4>
                      {index === 0 && <span className="ml-2 bg-yellow-400 text-xs px-2 py-1 rounded-full">Best</span>}
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <div>
                        <p className="text-xs text-gray-500">Return Rate</p>
                        <p className="font-bold">{item.returnRate}%</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500">Future Value</p>
                        <p className="font-bold">₹{(item.futureValue / 10000000).toFixed(2)}Cr</p>
                      </div>
                      <div className="col-span-2">
                        <p className="text-xs text-gray-500">Total Gain</p>
                        <p className={`font-bold ${index === 0 ? 'text-yellow-600' : 'text-gray-700'}`}>
                          ₹{(item.gain / 10000000).toFixed(2)}Cr (+{((item.gain / investmentAmount) * 100).toFixed(0)}%)
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Desktop comparison - table */}
              <table className="hidden md:table w-full text-left">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="p-3 rounded-l-lg">Investment Type</th>
                    <th className="p-3">Annual Return</th>
                    <th className="p-3">Future Value</th>
                    <th className="p-3 rounded-r-lg">Total Gain</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonResults.map((item, index) => (
                    <motion.tr 
                      key={index}
                      className={`border-b ${index === 0 ? 'bg-yellow-50' : ''}`}
                      whileHover={{ backgroundColor: index === 0 ? '#fef9c3' : '#f9fafb' }}
                    >
                      <td className="p-3 flex items-center">
                        <div className="mr-2">{item.icon}</div>
                        {item.name}
                        {index === 0 && <span className="ml-2 bg-yellow-400 text-xs px-2 py-1 rounded-full">Best</span>}
                      </td>
                      <td className="p-3">{item.returnRate}% per year</td>
                      <td className="p-3">₹{(item.futureValue / 10000000).toFixed(2)} Cr</td>
                      <td className={`p-3 font-semibold ${index === 0 ? 'text-yellow-600' : ''}`}>
                        ₹{(item.gain / 10000000).toFixed(2)} Cr
                        <span className="block text-sm">
                          (+{((item.gain / investmentAmount) * 100).toFixed(0)}%)
                        </span>
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            <div className="mt-8 text-sm text-gray-600 italic">
              <p>*Returns are projections based on historical performance. Actual returns may vary.</p>
              <p>*Land investments typically offer better long-term appreciation compared to traditional investments.</p>
            </div>
          </div>
          
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="w-full md:w-auto mx-auto block bg-yellow-400 text-gray-800 py-3 px-8 rounded-lg shadow-lg font-medium text-center cursor-pointer hover:bg-yellow-300 transition-all"
          >
            Invest in KSC Town
          </motion.button>
        </motion.div>
      )}

      {/* Benefits Tab */}
      {activeTab === 'benefits' && (
        <motion.div 
          variants={itemVariants} 
          className="max-w-6xl mx-auto"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Benefits Section */}
            <div className="bg-white p-5 md:p-8 rounded-2xl shadow-lg">
              <h3 className="text-xl md:text-2xl font-semibold mb-6 text-gray-800 flex items-center">
                <FaRegLightbulb className="mr-2 text-yellow-500" />
                Why Invest in KSC Town?
              </h3>
              
              <div className="space-y-5">
                {benefits.map((benefit, index) => (
                  <motion.div 
                    key={index}
                    className="flex p-4 bg-gray-50 rounded-lg"
                    whileHover={{ backgroundColor: '#FEFCE8' }}
                  >
                    <div className="mr-4 text-2xl mt-1">{benefit.icon}</div>
                    <div>
                      <h4 className="font-semibold text-gray-800">{benefit.title}</h4>
                      <p className="text-sm text-gray-600 mt-1">{benefit.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              <div className="mt-8 p-4 bg-yellow-50 rounded-lg border-l-4 border-yellow-400">
                <h4 className="font-medium text-yellow-800">Land: The Ultimate Inflation Hedge</h4>
                <p className="text-sm text-gray-700 mt-2">
                  While inflation devalues currency over time, land tends to appreciate, providing a natural hedge against economic uncertainties and preserving your wealth for generations to come.
                </p>
              </div>
            </div>
            
            {/* Testimonial and Trust Section */}
            <div className="space-y-6">
              {/* Testimonial */}
              <motion.div 
                className="bg-gradient-to-br from-gray-800 to-gray-900 text-white p-5 md:p-8 rounded-2xl shadow-lg"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-gray-600 flex items-center justify-center text-xl font-bold mr-3">RS</div>
                  <div>
                    <p className="font-medium">Rajesh Sharma</p>
                    <p className="text-xs text-gray-300">Invested in 2018</p>
                  </div>
                </div>
                
                <p className="italic text-gray-300">"I invested in a land parcel at KSC Town 5 years ago. The value has already increased by 82%. One of the best investment decisions I've made."</p>
                
                <div className="flex mt-3 text-yellow-400">
                  {[1, 2, 3, 4, 5].map(star => (
                    <svg key={star} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                      <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                    </svg>
                  ))}
                </div>
              </motion.div>
              
              {/* Growth Facts */}
              <div className="bg-white p-5 md:p-8 rounded-2xl shadow-lg">
                <h3 className="text-lg font-semibold mb-4 text-gray-800">KSC Town Growth Facts</h3>
                
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { title: "Infrastructure Growth", value: "₹12,000 Cr" },
                    { title: "Connectivity Projects", value: "4 Major" },
                    { title: "Job Creation", value: "50,000+" },
                    { title: "5-Yr Land Appreciation", value: "97%" }
                  ].map((stat, index) => (
                    <div key={index} className="bg-gray-50 p-3 rounded-lg text-center">
                      <p className="text-xs text-gray-600">{stat.title}</p>
                      <p className="font-bold text-lg text-gray-800">{stat.value}</p>
                    </div>
                  ))}
                </div>
              </div>
              
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-yellow-400 text-gray-800 py-3 px-6 rounded-lg shadow-lg font-medium text-center cursor-pointer hover:bg-yellow-300 transition-all"
              >
                Download Investment Brochure
              </motion.button>
            </div>
          </div>
        </motion.div>
      )}

      <motion.div variants={itemVariants} className="mt-8 md:mt-12 max-w-6xl mx-auto text-center">
        <p className="text-gray-600 italic text-xs md:text-sm">
          *Note: This calculator provides projected estimates based on historical data and market trends.
          Actual returns may vary based on multiple factors including market conditions, location specifics, and economic factors.
        </p>
      </motion.div>
    </motion.div>
  );
};

export default LandInvestmentCalculator; 