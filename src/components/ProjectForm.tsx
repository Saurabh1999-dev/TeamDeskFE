import React, { useState, useEffect } from 'react';
import type { CreateProjectDto } from '../services/projectApi';

type Props = {
  initialData?: CreateProjectDto;
  submitLabel?: string;
  onSubmit: (form: CreateProjectDto) => void;
};

const ProjectForm: React.FC<Props> = ({ initialData, submitLabel = 'Submit', onSubmit }) => {
  const [form, setForm] = useState<CreateProjectDto>({
    projectName: '',
    clientName: '',
    languageUsed: '',
    endDate: '',
    isBillable: false,
  });

  useEffect(() => {
    if (initialData) setForm(initialData);
  }, [initialData]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setForm({ ...form, [name]: type === 'checkbox' ? checked : value });
  };

  return (
    <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); onSubmit(form); }}>
      <input name="projectName" value={form.projectName} onChange={handleChange} placeholder="Project Name" className="border p-2 w-full" />
      <input name="clientName" value={form.clientName} onChange={handleChange} placeholder="Client Name" className="border p-2 w-full" />
      <input name="languageUsed" value={form.languageUsed} onChange={handleChange} placeholder="Languages Used" className="border p-2 w-full" />
      <input type="date" name="endDate" value={form.endDate} onChange={handleChange} className="border p-2 w-full" />
      <label className="flex items-center gap-2">
        <input type="checkbox" name="isBillable" checked={form.isBillable} onChange={handleChange} /> Billable
      </label>
      <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded">{submitLabel}</button>
    </form>
  );
};

export default ProjectForm;