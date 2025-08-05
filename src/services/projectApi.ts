import api from './api';

export interface Project {
  id: number;
  projectName: string;
  clientName: string;
  languageUsed: string;
  endDate: string;
  isBillable: boolean;
}

export interface CreateProjectDto {
  projectName: string;
  clientName: string;
  languageUsed: string;
  endDate: string;
  isBillable: boolean;
}

export const getProjects = () => api.get<Project[]>('/project');
export const getProjectById = (id: number) => api.get<Project>(`/project/${id}`);
export const createProject = (project: CreateProjectDto) => api.post('/project', project);
export const updateProject = (id: number, project: CreateProjectDto) => api.put(`/project/${id}`, project);
export const deleteProject = (id: number) => api.delete(`/project/${id}`);