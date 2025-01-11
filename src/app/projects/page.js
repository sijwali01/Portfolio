'use client'

import { motion } from 'framer-motion'

const projects = [
  { id: 1, title: 'E-commerce Platform', description: 'A full-stack e-commerce solution built with Next.js and Stripe.' },
  { id: 2, title: 'Task Management App', description: 'A React-based task management application with a Node.js backend.' },
  { id: 3, title: 'Portfolio Website', description: 'A responsive portfolio website showcasing my work and skills.' },
  { id: 4, title: 'Weather Dashboard', description: 'A weather dashboard using React and integrating with a weather API.' },
]

export default function Projects() {
  return (
    <motion.main 
      className="min-h-screen bg-gray-100 py-20 px-4 sm:px-6 lg:px-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">My Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div 
              key={project.id} 
              className="bg-white rounded-lg shadow-md p-6"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.1 }}
            >
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <a href="#" className="text-blue-500 hover:underline">View Project</a>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.main>
  )
}

