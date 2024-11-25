export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1544725121-be3bf52e2dc8?auto=format&fit=crop&q=80"
              alt="Profile"
              className="rounded-lg shadow-2xl"
            />
            <div className="absolute -bottom-6 -right-6 w-72 h-72 bg-indigo-100 rounded-lg -z-10"></div>
          </div>
          
          <div>
            <h2 className="text-3xl font-bold mb-6">About Me</h2>
            <p className="text-gray-600 mb-6">
              I'm a passionate full-stack developer with 5 years of experience building web applications.
              I specialize in React, Node.js, and modern web technologies, creating responsive and
              user-friendly applications that solve real-world problems.
            </p>
            <p className="text-gray-600 mb-8">
              When I'm not coding, you can find me exploring new technologies, contributing to open-source
              projects, or sharing my knowledge through technical writing and mentoring.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h3 className="font-semibold text-lg mb-2">Location</h3>
                <p className="text-gray-600">San Francisco, CA</p>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Experience</h3>
                <p className="text-gray-600">5+ Years</p>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Education</h3>
                <p className="text-gray-600">Computer Science, BS</p>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Interests</h3>
                <p className="text-gray-600">Web3, AI, Design</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}