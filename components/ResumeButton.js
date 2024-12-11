'use client';
import { motion } from 'framer-motion';
import { ArrowDownTrayIcon } from '@heroicons/react/24/outline';

export default function ResumeButton() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.3 }}
    >
      <div className="flex space-x-4">
        {/* Download Button */}
        <a
          href="/PREMANAND-PATIL.pdf"
          download
          className="inline-flex items-center px-4 py-2 text-sm text-gray-700 
                   border border-gray-300 rounded-md hover:bg-gray-50 
                   transition-colors group"
        >
          <ArrowDownTrayIcon className="h-4 w-4 mr-2 group-hover:text-blue-600" />
          <span className="group-hover:text-blue-600">Download Resume</span>
        </a>

        {/* View Button */}
        <a
          href="/PREMANAND-PATIL.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-4 py-2 text-sm text-blue-600 
                   border border-blue-300 rounded-md hover:bg-blue-50 
                   transition-colors group"
        >
          <span>View Resume</span>
        </a>
      </div>
    </motion.div>
  );
}