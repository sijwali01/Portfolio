'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const projects = [
  { 
    id: 1, 
    title: 'Dev Tinder', 
    description: 'A full-stack platform for developers.',
    image: '/Project-Images/dev-tinder.jpg',
    href:'https://github.com/sijwali01/Dev_Tinder'
  },
  { 
    id: 2, 
    title: 'Foodie Hub', 
    description: 'A platform for foodies to share their recipes and food experiences.',
    image: '/Project-Images/the-food-hub.jpg',
    href:'https://github.com/sijwali01/Foodie-Restaurant'
  },
  { 
    id: 3, 
    title: 'Authentication System', 
    description: 'A full-stack authentication system using Reactjs, Node.js, Express, and MongoDB.',
    image: '/Project-Images/Auth_image.png',
    href:'https://github.com/sijwali01/Auth_User'
  },
  { 
    id: 4, 
    title: 'Portfolio Website', 
    description: 'A responsive portfolio website showcasing my work and skills.',
    image: '/Project-Images/Portfolio-Desk.jpg',
    href:'https://github.com/sijwali01/Portfolio'
  },
  { 
    id: 5, 
    title: 'Weather Dashboard', 
    description: 'A weather dashboard using React and integrating with a weather API.',
    image: '/Project-Images/whether.jpg',
    href:'https://github.com/sijwali01/weather-web'
  },
  { 
    id: 6, 
    title: 'Todo App', 
    description: 'A simple todo app using React.',
    image: '/Project-Images/todo.jpg',
    href:'https://github.com/sijwali01/todoApp'
  },
 
]

export default function Projects() {
  return (
    <motion.main 
      className="min-h-screen py-20 px-4 sm:px-6 lg:px-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold gradient-text mb-8">My Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div 
              key={project.id} 
              className="card overflow-hidden"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.1 }}
            >
              <Image
                src={project.image}
                alt={project.title}
                width={400}
                height={300}
                className="w-full h-60 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-text-light mb-4">{project.description}</p>
                <a href={project.href} className="btn-primary inline-block">View Project</a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.main>
  )
}

