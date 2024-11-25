import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

const teacherSchema = z.object({
  fullName: z.string().min(2, 'Name must be at least 2 characters'),
  academicDegree: z.string().min(2, 'Academic degree is required'),
  subjects: z.string().min(2, 'Subject(s) are required'),
  availability: z.enum(['online', 'offline', 'both'], {
    required_error: 'Please select your availability',
  }),
  whatsapp: z.string().min(10, 'Valid WhatsApp number is required'),
  experience: z.string().min(1, 'Years of experience is required'),
});

type TeacherFormData = z.infer<typeof teacherSchema>;

export default function TeacherForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<TeacherFormData>({
    resolver: zodResolver(teacherSchema),
  });

  const onSubmit = async (data: TeacherFormData) => {
    try {
      console.log('Teacher Form Data:', data);
      // Here you would typically send the data to your backend
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate API call
      alert('Registration successful!');
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('An error occurred. Please try again.');
    }
  };

  return (
    <div id="teacher-form" className="bg-white p-8 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6">Teacher Registration</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Full Name
          </label>
          <input
            type="text"
            {...register('fullName')}
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500"
          />
          {errors.fullName && (
            <p className="text-red-500 text-sm mt-1">{errors.fullName.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Academic Degree
          </label>
          <input
            type="text"
            {...register('academicDegree')}
            placeholder="e.g., Ph.D. in Mathematics"
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500"
          />
          {errors.academicDegree && (
            <p className="text-red-500 text-sm mt-1">{errors.academicDegree.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Subjects You Can Teach
          </label>
          <input
            type="text"
            {...register('subjects')}
            placeholder="e.g., Mathematics, Physics"
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500"
          />
          {errors.subjects && (
            <p className="text-red-500 text-sm mt-1">{errors.subjects.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Years of Teaching Experience
          </label>
          <select
            {...register('experience')}
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500"
          >
            <option value="">Select Experience</option>
            <option value="1-3">1-3 years</option>
            <option value="4-6">4-6 years</option>
            <option value="7-10">7-10 years</option>
            <option value="10+">More than 10 years</option>
          </select>
          {errors.experience && (
            <p className="text-red-500 text-sm mt-1">{errors.experience.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            WhatsApp Number
          </label>
          <input
            type="tel"
            {...register('whatsapp')}
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500"
          />
          {errors.whatsapp && (
            <p className="text-red-500 text-sm mt-1">{errors.whatsapp.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Teaching Availability
          </label>
          <select
            {...register('availability')}
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500"
          >
            <option value="">Select Availability</option>
            <option value="online">Online Only</option>
            <option value="offline">Offline Only</option>
            <option value="both">Both Online & Offline</option>
          </select>
          {errors.availability && (
            <p className="text-red-500 text-sm mt-1">{errors.availability.message}</p>
          )}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors disabled:bg-indigo-400"
        >
          {isSubmitting ? 'Submitting...' : 'Register as Teacher'}
        </button>
      </form>
    </div>
  );
}