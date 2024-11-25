import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import * as XLSX from 'xlsx';

const studentSchema = z.object({
  fullName: z.string().min(2, 'Name must be at least 2 characters'),
  universityName: z.string().min(2, 'University name is required'),
  grade: z.string().min(1, 'Grade is required'),
  subjects: z.string().min(2, 'Subject(s) are required'),
  projectDetails: z.string().optional(),
  whatsapp: z.string().min(10, 'Valid WhatsApp number is required'),
  learningMode: z.enum(['online', 'offline', 'both'], {
    required_error: 'Please select a learning mode',
  }),
});

type StudentFormData = z.infer<typeof studentSchema>;

export default function StudentForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<StudentFormData>({
    resolver: zodResolver(studentSchema),
  });

  const onSubmit = async (data: StudentFormData) => {
    try {
      console.log('Student Form Data:', data);

      // Convert data to a 2D array suitable for an Excel sheet
      const studentData = [
        ['Full Name', 'University Name', 'Grade', 'Subjects', 'Project Details', 'WhatsApp', 'Learning Mode'],
        [
          data.fullName,
          data.universityName,
          data.grade,
          data.subjects,
          data.projectDetails || '',
          data.whatsapp,
          data.learningMode,
        ],
      ];

      // Create a workbook and worksheet
      const workbook = XLSX.utils.book_new();
      const worksheet = XLSX.utils.aoa_to_sheet(studentData);

      // Append the worksheet to the workbook
      XLSX.utils.book_append_sheet(workbook, worksheet, 'Student Data');

      // Generate Excel file and trigger download
      XLSX.writeFile(workbook, 'StudentData.xlsx');

      alert('Registration successful! Data saved to Excel.');
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('An error occurred. Please try again.');
    }
  };

  return (
    <div id="student-form" className="bg-white p-8 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6">Student Registration</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Input fields remain unchanged */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
          <input
            type="text"
            {...register('fullName')}
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500"
          />
          {errors.fullName && (
            <p className="text-red-500 text-sm mt-1">{errors.fullName.message}</p>
          )}
        </div>

        {/* Other fields similar to the example provided above */}

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors disabled:bg-indigo-400"
        >
          {isSubmitting ? 'Submitting...' : 'Register as Student'}
        </button>
      </form>
    </div>
  );
}
