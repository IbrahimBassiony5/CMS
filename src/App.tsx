import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import StudentForm from './components/StudentForm';
import TeacherForm from './components/TeacherForm';
import WhyChooseUs from './components/WhyChooseUs';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <div className="grid md:grid-cols-2 gap-8 max-w-7xl mx-auto px-4 py-16">
          <StudentForm />
          <TeacherForm />
        </div>
        <WhyChooseUs />
      </main>
      <Footer />
    </div>
  );
}

export default App;