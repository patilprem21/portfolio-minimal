'use client';
import Link from 'next/link';
import { EnvelopeIcon, CodeBracketIcon } from '@heroicons/react/24/outline';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = (e) => {
    e.preventDefault();
    document.querySelector('#home').scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  };

  return (
    <footer className="bg-gray-50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Column 1 - Logo & Description */}
          <div className="space-y-4">
            {/* Replace the h3 with Link component */}
            <Link 
              href="#home"
              onClick={scrollToTop}
              className="text-xl font-light hover:text-gray-600 transition-colors"
            >
              PP
            </Link>
            <p className="text-gray-600 text-sm">
              Full Stack Developer & UI/UX Design Enthusiast based in India, 
              passionate about creating meaningful web experiences.
            </p>
          </div>

          {/* Column 2 - Quick Links */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-gray-900">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#about" className="text-gray-600 hover:text-gray-900 text-sm">
                  About
                </Link>
              </li>
              <li>
                <Link href="#projects" className="text-gray-600 hover:text-gray-900 text-sm">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-gray-600 hover:text-gray-900 text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3 - Contact Info */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-gray-900">Contact</h3>
            <ul className="space-y-3">
              <li>
                <a 
                  href="mailto:pprem22802@gmail.com" 
                  className="text-gray-600 hover:text-gray-900 text-sm flex items-center"
                >
                  <EnvelopeIcon className="h-4 w-4 mr-2" />
                  pprem22802@gmail.com
                </a>
              </li>
              <li>
                <a 
                  href="https://github.com/patilprem21" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-gray-900 text-sm flex items-center"
                >
                  <CodeBracketIcon className="h-4 w-4 mr-2" />
                  GitHub
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4 - Social Links */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-gray-900">Connect</h3>
            <div className="flex space-x-4">
              <a 
                href="https://linkedin.com/in/premanand-patil" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900"
              >
                <span className="sr-only">LinkedIn</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
             
              <a  
                href="https://github.com/patilprem21" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900"
              >
                <span className="sr-only">Github</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">

                  <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-100">
          <p className="text-center text-gray-500 text-sm">
            © {currentYear} Premanand Patil. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}