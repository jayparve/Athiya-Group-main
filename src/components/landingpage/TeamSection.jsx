import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedinIn, FaEnvelope } from 'react-icons/fa';
import anand from '../../assets/anandkamble.jpg';


const TeamSection = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Anand Kamble",
      role: "Founder & CEO",
      image: anand,
      bio: "With over 20 years of experience in real estate development, Rajesh has transformed the urban landscape with innovative residential projects.",
      linkedin: "https://linkedin.com/",
      email: "rajesh@athiyagroup.com"
    },
    {
      id: 2,
      name: "Priya Patel",
      role: "Chief Operating Officer",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
      bio: "Priya oversees all operational aspects of Athiya Group, ensuring timely execution of projects with highest quality standards.",
      linkedin: "https://linkedin.com/",
      email: "priya@athiyagroup.com"
    },
    {
      id: 3,
      name: "Vikram Mehta",
      role: "Head of Architecture",
      image: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
      bio: "An award-winning architect known for creating sustainable and aesthetically pleasing designs that harmonize with nature.",
      linkedin: "https://linkedin.com/",
      email: "vikram@athiyagroup.com"
    },
    {
      id: 4,
      name: "Ananya Desai",
      role: "Marketing Director",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
      bio: "Leading our marketing initiatives with innovative strategies to showcase our premium properties to the right audience.",
      linkedin: "https://linkedin.com/",
      email: "ananya@athiyagroup.com"
    }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Meet Our Leadership Team
          </h2>
          <div className="w-24 h-1 bg-yellow-400 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A dedicated team of professionals with decades of experience in real estate development
          </p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {teamMembers.map((member) => (
            <motion.div
              key={member.id}
              variants={itemVariants}
              className="bg-white rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:-translate-y-2"
            >
              <div className="relative overflow-hidden h-72">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent h-1/3 pointer-events-none"></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-yellow-600 font-medium text-sm mb-4">{member.role}</p>
                
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">{member.bio}</p>
                
                <div className="flex space-x-3">
                  <a 
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-100 hover:bg-blue-100 text-blue-700 p-2 rounded-full transition-colors"
                    aria-label={`${member.name}'s LinkedIn`}
                  >
                    <FaLinkedinIn size={18} />
                  </a>
                  <a 
                    href={`mailto:${member.email}`}
                    className="bg-gray-100 hover:bg-yellow-100 text-yellow-700 p-2 rounded-full transition-colors"
                    aria-label={`Email ${member.name}`}
                  >
                    <FaEnvelope size={18} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>


      </div>
    </section>
  );
};

export default TeamSection; 