"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Download } from "lucide-react";
import SkillBar from "../components/SkillBar";

const experiences = [
  {
    title: "MERN Developer Training",
    company: "QSpiders Chandigarh",
    period: "Sept-2023 - July-2024",
    description:
      "Led a team of developers in creating cutting-edge web applications using React and Node.js.",
  },
  {
    title: "Web Development Internship",
    company: "VeriTech Software IT Services",
    period: "March-2024 - April-2024",
    description:
      "Developed and maintained various web applications, focusing on both front-end and back-end technologies.",
  },
];

const skills = [
  { name: "React", level: 90 },
  { name: "JavaScript", level: 85 },
  { name: "Node.js", level: 80 },
  { name: "HTML/CSS", level: 95 },
  { name: "Java", level: 70 },
  { name: "SQL", level: 75 },
];

export default function About() {
  const [selectedExperience, setSelectedExperience] = useState(0);

  return (
    <motion.main
      className="min-h-screen py-20 px-4 sm:px-6 lg:px-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold gradient-text mb-8">About Me</h1>

        <motion.section
          className="card p-6 mb-8"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <h2 className="text-2xl font-semibold mb-4">Resume</h2>
          <p className="mb-4">
            Download my resume to learn more about my qualifications and
            experience.
          </p>
          <a
            href="https://drive.google.com/file/d/10uPeCcyfWRxKqzgJVcVKxj28x_K6b6GM/view?usp=sharing"
            download
            className="btn-primary inline-flex items-center"
          >
            <Download className="mr-2 h-5 w-5" />
            Download Resume
          </a>
        </motion.section>

        <motion.section
          className="card p-6 mb-8"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <h2 className="text-2xl font-semibold mb-4">Experience</h2>
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/3 mb-4 md:mb-0">
              {experiences.map((exp, index) => (
                <button
                  key={index}
                  className={`block w-full text-left p-2 mb-2 rounded transition-colors ${
                    selectedExperience === index
                      ? "bg-primary text-blue-500"
                      : "hover:bg-gray-100"
                  }`}
                  onClick={() => setSelectedExperience(index)}
                >
                  {exp.company}
                </button>
              ))}
            </div>
            <div className="md:w-2/3 md:pl-6">
              <motion.div
                key={selectedExperience}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-xl font-semibold">
                  {experiences[selectedExperience].title}
                </h3>
                <p className="text-text-light mb-2">
                  {experiences[selectedExperience].period}
                </p>
                <p>{experiences[selectedExperience].description}</p>
              </motion.div>
            </div>
          </div>
        </motion.section>

        <motion.section
          className="card p-6"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <h2 className="text-2xl font-semibold mb-4">Skills</h2>
          <div className="space-y-4">
            {skills.map((skill, index) => (
              <SkillBar
                key={index}
                name={skill.name}
                level={skill.level}
                index={index}
              />
            ))}
          </div>
        </motion.section>
      </div>
    </motion.main>
  );
}
