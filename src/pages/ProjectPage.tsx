import { useEffect, useState } from 'react';
import { createProject, deleteProject, getProjects, updateProject, type Project, type CreateProjectDto } from '../services/projectApi';

import ProjectForm from '../components/ProjectForm';
import { FaPlus } from 'react-icons/fa';


const ProjectsPage: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [editingProject, setEditingProject] = useState<Project | null>(null);

  const fetchProjects = async () => {
    const res = await getProjects();
    setProjects(res.data);
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  const handleCreate = async (project: CreateProjectDto) => {
    await createProject(project);
    setShowModal(false);
    fetchProjects();
  };

  const handleUpdate = async (project: CreateProjectDto) => {
    if (editingProject) {
      await updateProject(editingProject.id, project);
      setEditingProject(null);
      setShowModal(false);
      fetchProjects();
    }
  };

  const handleEdit = (project: Project) => {
    setEditingProject(project);
    setShowModal(true);
  };

  const handleDelete = async (id: number) => {
    await deleteProject(id);
    fetchProjects();
  };

  return (
    <div className="p-6 relative">
      <div className="flex justify-end mb-6">
        <button
          onClick={() => {
            setShowModal(true);
            setEditingProject(null);
          }}
          className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          <FaPlus /> Create Project
        </button>
      </div>

      <div className="bg-white shadow rounded-lg overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Project Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Client</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Language</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">End Date</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Billable</th>
              <th className="px-6 py-3">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {projects.map((project) => (
              <tr key={project.id}>
                <td className="px-6 py-4 whitespace-nowrap">{project.projectName}</td>
                <td className="px-6 py-4 whitespace-nowrap">{project.clientName}</td>
                <td className="px-6 py-4 whitespace-nowrap">{project.languageUsed}</td>
                <td className="px-6 py-4 whitespace-nowrap">{project.endDate}</td>
                <td className="px-6 py-4 whitespace-nowrap">{project.isBillable ? 'Yes' : 'No'}</td>
                <td className="px-6 py-4 whitespace-nowrap flex gap-2">
                  <button
                    onClick={() => handleEdit(project)}
                    className="text-blue-600 hover:underline"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(project.id)}
                    className="text-red-600 hover:underline"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">
                {editingProject ? 'Edit Project' : 'Create Project'}
              </h2>
              <button
                onClick={() => {
                  setShowModal(false);
                  setEditingProject(null);
                }}
                className="text-gray-600 hover:text-red-500"
              >
                ✕
              </button>
            </div>
            <ProjectForm
              initialData={editingProject ?? undefined}
              onSubmit={editingProject ? handleUpdate : handleCreate}
              submitLabel={editingProject ? 'Update' : 'Create'}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectsPage;
