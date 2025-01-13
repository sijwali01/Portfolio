"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

export default function Home() {
  return (
    <motion.main
      className="min-h-screen bg-gray-100 py-20 px-4 sm:px-6 lg:px-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
         <Image
  src="/Project-Images/profile.png"
  alt="Profile Picture"
  width={250} // Adjust for small screen
  height={250} // Adjust for small screen
  className="mx-auto rounded-full shadow-lg mb-8 sm:w-1/2 md:w-1/3 lg:w-1/4"
/>

        </motion.div>
        <motion.h1
          className="text-4xl font-bold text-gray-900 mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          MANISH SIJWALI
        </motion.h1>
        <motion.p
          className="text-xl text-gray-600 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          <TypeAnimation
           sequence={[
            "HELLO -- I'm A",
            800,  // Reduce delay
            "MERN-DEVELOPER",
            800,  // Reduce delay
          ]}
            wrapper="span"
            speed={50}
            style={{ fontSize: "1.5em", display: "block", color: "grey" }}
            repeat={Infinity}
          />
        </motion.p>
        <motion.p
          className="text-gray-700 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.9 }}
        >
          I’m a passionate MERN stack developer, specializing in building
          dynamic and scalable web applications using MongoDB, Express, React,
          and Node.js. With expertise in both front-end and back-end, I create
          seamless, user-friendly experiences. Check out my projects, and let's
          connect if you'd like to collaborate!
        </motion.p>
      </div>
    </motion.main>
  );
}
