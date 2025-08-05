export const roleOptions = [
  { value: '', label: 'Select role', disabled: true },
  { value: 'Admin', label: 'Admin' },
  { value: 'Staff', label: 'Staff' },
  { value: 'Manager', label: 'Manager' },
];

export const roleMap: Record<string, number> = {
    Staff: 0,
    Admin: 1,
    HR: 2,
  };
