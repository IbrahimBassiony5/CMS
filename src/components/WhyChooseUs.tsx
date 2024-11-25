import { Check } from 'lucide-react';

const reasons = [
  "Expert educators with diverse academic backgrounds",
  "Convenient access to academic help anytime, anywhere",
  "Personalized guidance for projects, assignments, and exams",
  "Flexible learning modes to suit your preferences",
  "Quality education at competitive prices",
  "Dedicated support throughout your academic journey"
];

export default function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="py-20 bg-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Why Choose CMS Academy?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We're committed to providing the best academic support for university students
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, index) => (
            <div key={index} className="flex items-start gap-4 p-6 bg-white rounded-lg shadow-sm">
              <Check className="w-6 h-6 text-green-500 flex-shrink-0" />
              <p className="text-gray-700">{reason}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}