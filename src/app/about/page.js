'use client'

import { motion } from 'framer-motion'

export default function About() {
  return (
    <motion.main 
      className="min-h-screen bg-gray-100 py-20 px-4 sm:px-6 lg:px-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">About Me</h1>
        <motion.div 
          className="bg-white rounded-lg shadow-md p-6"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <p className="text-gray-700 mb-4">
            I'm a web developer with a passion for creating intuitive and visually appealing user interfaces. 
            With experience in both front-end and back-end technologies, I enjoy bringing ideas to life through code.
          </p>
          <p className="text-gray-700 mb-4">
            My journey in web development started [X] years ago, and since then, I've worked on a variety of projects, 
            from small business websites to complex web applications.
          </p>
          <p className="text-gray-700">
            When I'm not coding, you can find me [your hobbies or interests]. I believe in continuous learning and 
            always strive to stay up-to-date with the latest web technologies and best practices.
          </p>
        </motion.div>
      </div>
    </motion.main>
  )
}

