import { GraduationCap } from 'lucide-react';

export default function Hero() {
  return (
    <div className="bg-gradient-to-br from-indigo-50 to-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <GraduationCap className="w-16 h-16 text-indigo-600 mx-auto mb-6" />
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Welcome to CMS Academy
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Your trusted online learning platform tailored for university students. Connect with expert educators to simplify complex subjects and ensure academic success.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#student-form"
              className="px-8 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
            >
              I'm a Student
            </a>
            <a
              href="#teacher-form"
              className="px-8 py-3 bg-white text-indigo-600 border-2 border-indigo-600 rounded-lg hover:bg-indigo-50 transition-colors"
            >
              I'm a Teacher
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}