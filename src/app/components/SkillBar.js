'use client'

import { motion } from 'framer-motion'

export default function SkillBar({ name, level, index }) {
  return (
    <div className="relative pt-1">
      <div className="flex mb-2 items-center justify-between">
        <div>
          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-primary bg-black bg-opacity-20">
            {name}
          </span>
        </div>
        <div className="text-right">
          <span className="text-xs font-semibold inline-block text-primary">
            {level}%
          </span>
        </div>
      </div>
      <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200">
        <motion.div
          style={{ width: `${level}%` }}
          className="shadow-none flex flex-col text-center whitespace-nowrap text-white skill-bar-bg justify-center transition-all"
          initial={{ width: 0 }}
          animate={{ width: `${level}%` }}
          transition={{ duration: 1, delay: index * 0.1, ease: 'easeOut' }}
          aria-label={`Skill: ${name}, Level: ${level}%`} // Added ARIA label
        />
      </div>
    </div>
  )
}
