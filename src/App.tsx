import React, { useState } from 'react';
import { GraduationCap, Users } from 'lucide-react';
import StudentForm from './components/StudentForm';
import FacultyForm from './components/FacultyForm';
import DataTable from './components/DataTable';
import { Student, Faculty } from './types';

function App() {
  const [activeTab, setActiveTab] = useState<'students' | 'faculty'>('students');
  const [students, setStudents] = useState<Student[]>([]);
  const [faculty, setFaculty] = useState<Faculty[]>([]);

  const handleAddStudent = (studentData: Omit<Student, 'id'>) => {
    const newStudent = {
      ...studentData,
      id: crypto.randomUUID(),
    };
    setStudents([...students, newStudent]);
  };

  const handleAddFaculty = (facultyData: Omit<Faculty, 'id'>) => {
    const newFaculty = {
      ...facultyData,
      id: crypto.randomUUID(),
    };
    setFaculty([...faculty, newFaculty]);
  };

  const handleDeleteStudent = (id: string) => {
    setStudents(students.filter(student => student.id !== id));
  };

  const handleDeleteFaculty = (id: string) => {
    setFaculty(faculty.filter(f => f.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Student Management System</h1>
          <div className="flex gap-4">
            <button
              className={`tab-button ${activeTab === 'students' ? 'active' : ''} flex items-center gap-2`}
              onClick={() => setActiveTab('students')}
            >
              <GraduationCap size={20} />
              Students
            </button>
            <button
              className={`tab-button ${activeTab === 'faculty' ? 'active' : ''} flex items-center gap-2`}
              onClick={() => setActiveTab('faculty')}
            >
              <Users size={20} />
              Faculty
            </button>
          </div>
        </div>

        <div className="space-y-8">
          {activeTab === 'students' ? (
            <>
              <StudentForm onSubmit={handleAddStudent} />
              <DataTable
                data={students}
                type="student"
                onDelete={handleDeleteStudent}
              />
            </>
          ) : (
            <>
              <FacultyForm onSubmit={handleAddFaculty} />
              <DataTable
                data={faculty}
                type="faculty"
                onDelete={handleDeleteFaculty}
              />
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;