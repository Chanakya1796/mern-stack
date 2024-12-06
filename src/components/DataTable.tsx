import React from 'react';
import { Trash2 } from 'lucide-react';
import { Student, Faculty } from '../types';

interface DataTableProps {
  data: (Student | Faculty)[];
  type: 'student' | 'faculty';
  onDelete: (id: string) => void;
}

export default function DataTable({ data, type, onDelete }: DataTableProps) {
  const headers = type === 'student' 
    ? ['Name', 'Email', 'Grade', 'Major', 'Enrollment Date', 'Actions']
    : ['Name', 'Email', 'Department', 'Title', 'Join Date', 'Actions'];

  return (
    <div className="overflow-x-auto bg-white rounded-lg shadow-md">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            {headers.map((header) => (
              <th
                key={header}
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {data.map((item) => (
            <tr key={item.id} className="hover:bg-gray-50">
              <td className="px-6 py-4 whitespace-nowrap">{item.name}</td>
              <td className="px-6 py-4 whitespace-nowrap">{item.email}</td>
              <td className="px-6 py-4 whitespace-nowrap">
                {type === 'student' 
                  ? (item as Student).grade 
                  : (item as Faculty).department}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                {type === 'student' 
                  ? (item as Student).major 
                  : (item as Faculty).title}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                {type === 'student' 
                  ? (item as Student).enrollmentDate 
                  : (item as Faculty).joinDate}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <button
                  onClick={() => onDelete(item.id)}
                  className="text-red-600 hover:text-red-900"
                >
                  <Trash2 size={20} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}