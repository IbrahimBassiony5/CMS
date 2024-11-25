import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-indigo-600">CMS Academy</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-600 hover:text-indigo-600">Features</a>
            <a href="#student-form" className="text-gray-600 hover:text-indigo-600">For Students</a>
            <a href="#teacher-form" className="text-gray-600 hover:text-indigo-600">For Teachers</a>
            <a href="#why-choose-us" className="text-gray-600 hover:text-indigo-600">Why Choose Us</a>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#features" className="block px-3 py-2 text-gray-600 hover:text-indigo-600">Features</a>
              <a href="#student-form" className="block px-3 py-2 text-gray-600 hover:text-indigo-600">For Students</a>
              <a href="#teacher-form" className="block px-3 py-2 text-gray-600 hover:text-indigo-600">For Teachers</a>
              <a href="#why-choose-us" className="block px-3 py-2 text-gray-600 hover:text-indigo-600">Why Choose Us</a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}