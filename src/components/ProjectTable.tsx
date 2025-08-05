import React from 'react';
import type { Project } from '../services/projectApi';

type Props = {
  projects: Project[];
  onEdit: (id: number) => void;
  onDelete: (id: number) => void;
};

const ProjectTable: React.FC<Props> = ({ projects, onEdit, onDelete }) => (
  <table className="w-full border-collapse border">
    <thead>
      <tr className="bg-gray-100">
        <th className="border p-2">Project</th>
        <th className="border p-2">Client</th>
        <th className="border p-2">Languages</th>
        <th className="border p-2">End Date</th>
        <th className="border p-2">Billable</th>
        <th className="border p-2">Actions</th>
      </tr>
    </thead>
    <tbody>
      {projects.map((p) => (
        <tr key={p.id}>
          <td className="border p-2">{p.projectName}</td>
          <td className="border p-2">{p.clientName}</td>
          <td className="border p-2">{p.languageUsed}</td>
          <td className="border p-2">{p.endDate}</td>
          <td className="border p-2">{p.isBillable ? 'Yes' : 'No'}</td>
          <td className="border p-2">
            <button onClick={() => onEdit(p.id)} className="text-blue-600">Edit</button>
            <button onClick={() => onDelete(p.id)} className="text-red-600 ml-2">Delete</button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default ProjectTable;