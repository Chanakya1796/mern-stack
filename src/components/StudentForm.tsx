import React, { useState } from 'react';
import { PlusCircle } from 'lucide-react';
import { Student } from '../types';

interface StudentFormProps {
  onSubmit: (student: Omit<Student, 'id'>) => void;
}

export default function StudentForm({ onSubmit }: StudentFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    grade: '',
    major: '',
    enrollmentDate: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({
      name: '',
      email: '',
      grade: '',
      major: '',
      enrollmentDate: '',
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">Add New Student</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          type="text"
          placeholder="Full Name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="input-field"
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="input-field"
          required
        />
        <input
          type="text"
          placeholder="Grade"
          value={formData.grade}
          onChange={(e) => setFormData({ ...formData, grade: e.target.value })}
          className="input-field"
          required
        />
        <input
          type="text"
          placeholder="Major"
          value={formData.major}
          onChange={(e) => setFormData({ ...formData, major: e.target.value })}
          className="input-field"
          required
        />
        <input
          type="date"
          value={formData.enrollmentDate}
          onChange={(e) => setFormData({ ...formData, enrollmentDate: e.target.value })}
          className="input-field"
          required
        />
      </div>
      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
      >
        <PlusCircle size={20} />
        Add Student
      </button>
    </form>
  );
}