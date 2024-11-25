import { Users, BookOpen, Clock, Globe } from 'lucide-react';

const features = [
  {
    icon: Users,
    title: "Expert Educators",
    description: "Connect with qualified teachers experienced in your field of study"
  },
  {
    icon: BookOpen,
    title: "Personalized Support",
    description: "Get tailored guidance for your specific academic needs and projects"
  },
  {
    icon: Clock,
    title: "Flexible Learning",
    description: "Choose between online, offline, or hybrid learning modes"
  },
  {
    icon: Globe,
    title: "Anywhere Access",
    description: "Access academic help whenever and wherever you need it"
  }
];

export default function Features() {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="p-6 bg-gray-50 rounded-lg hover:shadow-lg transition-shadow">
              <feature.icon className="w-12 h-12 text-indigo-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}