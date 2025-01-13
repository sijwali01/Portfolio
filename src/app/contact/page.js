'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Mail } from 'lucide-react'
import emailjs from 'emailjs-com'
import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const [sending, setSending] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState(false)

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }))
  }

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault()
    

    setSending(true)
    setSuccess(false)
    setError(false)

    // Send the email using EmailJS
    emailjs
      .sendForm(
        'service_8f4vmsb', // Your EmailJS service ID
        'template_pqfzrdb', // Your EmailJS template ID
        e.target, // Form element
        'vXfcWFOUsQXVXqs_e' // Your EmailJS user ID
      )
      .then(
        (result) => {
          console.log(result.text)
          setSuccess(true)
          setSending(false)
          setFormData({
            name: '',
            email: '',
            message: ''
          })
        },
        (error) => {
          console.error(error.text)
          setError(true)
          setSending(false)
        }
      )
  }

  return (
    <motion.main
      className="min-h-screen py-20 px-4 sm:px-6 lg:px-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold gradient-text mb-8">Contact Me</h1>
        <motion.div
          className="card p-6"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <p className="text-text-light mb-6">
            I'm always open to new opportunities and collaborations. Feel free to reach out to me through any of the following channels:
          </p>
          <div className="flex justify-center space-x-6">
            <a href="https://github.com/sijwali01" className="text-text-light hover:text-primary transition-colors">
              <Github className="w-8 h-8" />
            </a>
            <a href="https://www.linkedin.com/in/manish-sijwali-23b361196" className="text-text-light hover:text-primary transition-colors">
              <Linkedin className="w-8 h-8" />
            </a>
            <a href="mailto:manishsijwali@gmail.com" className="text-text-light hover:text-primary transition-colors">
              <Mail className="w-8 h-8" />
            </a>
          </div>
        </motion.div>

        <motion.form
          className="card p-6 mt-8"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          onSubmit={handleSubmit}
        >
          <h2 className="text-2xl font-semibold mb-4">Send me a message</h2>

          {/* Name Field */}
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-text-light mb-1">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              required
            />
          </div>

          {/* Email Field */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-text-light mb-1">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              required
            />
          </div>

          {/* Message Field */}
          <div className="mb-4">
            <label htmlFor="message" className="block text-sm font-medium text-text-light mb-1">Message</label>
            <textarea
              id="message"
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              required
            />
          </div>

          {/* Submit Button */}
          <button type="submit" className="btn-primary" disabled={sending}>
            {sending ? 'Sending...' : 'Send Message'}
          </button>

          {/* Success/Error Message */}
          {success && <p className="text-green-500 mt-4">Message sent successfully!</p>}
          {error && <p className="text-red-500 mt-4">There was an error sending the message. Please try again.</p>}
        </motion.form>
      </div>
    </motion.main>
  )
}
