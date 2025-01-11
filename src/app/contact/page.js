'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Mail } from 'lucide-react'

export default function Contact() {
  return (
    <motion.main 
      className="min-h-screen bg-gray-100 py-20 px-4 sm:px-6 lg:px-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Contact Me</h1>
        <motion.div 
          className="bg-white rounded-lg shadow-md p-6"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <p className="text-gray-700 mb-6">
            I'm always open to new opportunities and collaborations. Feel free to reach out to me through any of the following channels:
          </p>
          <div className="flex justify-center space-x-6">
            <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
              <Github className="w-8 h-8" />
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
              <Linkedin className="w-8 h-8" />
            </a>
            <a href="mailto:your.email@example.com" className="text-gray-600 hover:text-gray-900 transition-colors">
              <Mail className="w-8 h-8" />
            </a>
          </div>
        </motion.div>
      </div>
    </motion.main>
  )
}

