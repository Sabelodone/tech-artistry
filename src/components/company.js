import React, { useEffect, useState } from 'react'; 
import { motion } from 'framer-motion';

const Company = () => {
  const [scrollY, setScrollY] = useState(0);

  // Handle scroll event to update the scrollY value
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Define reusable animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1 } },
  };

  return (
    <motion.div
      className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32"
      initial="hidden"
      animate="visible"
      variants={fadeIn}
    >
      <motion.img 
        src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-y=.8&w=2830&h=1500&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply" 
        alt="Company Background"
        className="absolute inset-0 -z-10 h-full w-full object-cover"
        style={{ 
          transform: `translateY(${scrollY * 0.3}px)` // Parallax effect: image moves slower than content
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 1.5 } }}
      />

      <motion.div
        className="mx-auto max-w-7xl px-6 lg:px-8"
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
      >
        <header className="mx-auto max-w-2xl lg:mx-0 text-center">
          <motion.h2 className="text-5xl font-semibold tracking-tight text-white sm:text-7xl">
            Innovation meets creativity
          </motion.h2>
        </header>

        <motion.section
          className="mt-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h3 className="text-4xl font-semibold text-purple-600 mb-4 text-center">Our Mission</h3>
          <p className="text-gray-300 text-lg px-4 md:px-12 text-center">
            At Tech Artistry, our mission is to leverage technology to solve real-world problems and enhance the user experience through innovative design and development solutions.
          </p>
        </motion.section>

        <motion.section
          className="mt-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h3 className="text-4xl font-semibold text-purple-600 mb-4 text-center">Why Choose Us?</h3>
          <p className="text-gray-300 text-lg px-4 md:px-12 text-center">
            Our dedication to excellence and a customer-centric approach has positioned Tech Artistry as a leader in the digital landscape. We pride ourselves on fostering innovation, ensuring quality, and building long-lasting relationships with our clients.
          </p>
        </motion.section>

        <motion.div
          className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4 text-white"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <div className="flex flex-col-reverse gap-1 text-center">
            <dt className="text-base text-gray-300">Offices worldwide</dt>
            <dd className="text-4xl font-semibold tracking-tight">1</dd>
          </div>
          <div className="flex flex-col-reverse gap-1 text-center">
            <dt className="text-base text-gray-300">Full-time colleagues</dt>
            <dd className="text-4xl font-semibold tracking-tight">5</dd>
          </div>
          <div className="flex flex-col-reverse gap-1 text-center">
            <dt className="text-base text-gray-300">Hours per week</dt>
            <dd className="text-4xl font-semibold tracking-tight">40</dd>
          </div>
          <div className="flex flex-col-reverse gap-1 text-center">
            <dt className="text-base text-gray-300">Paid time off</dt>
            <dd className="text-4xl font-semibold tracking-tight">3 weeks</dd>
          </div>
        </motion.div>

        <motion.section
          className="mt-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h3 className="text-4xl font-semibold text-purple-600 mb-4 text-center">Meet Our Team</h3>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {/* Team Member Cards */}
            {["Alice Johnson", "Bob Smith", "Clara Lee", "David Brown", "Eva Green"].map((name, index) => (
              <motion.div
                key={index}
                className="bg-gray-800 p-4 rounded-lg text-center"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
              >
                <h4 className="text-xl font-semibold text-white">{name}</h4>
                <p className="text-gray-300">{["CEO & Founder", "Lead Developer", "UI/UX Designer", "Marketing Specialist", "Content Creator"][index]}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </motion.div>
    </motion.div>
  );
};

export default Company;
