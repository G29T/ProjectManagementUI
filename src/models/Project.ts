export interface IProject {
    name: string;
    description: string;
    startDate: string; 
    status?: 'Not Started' | 'In Progress' | 'Completed'; 
}
  
export interface DatePickerProps {
    selectedDate: Date | null;
    onChange: (date: Date | null) => void;
    required?: boolean;
}

export interface ProjectFormProps {
    onSubmit: (project: IProject) => void;
}

export interface ProjectDetailsProps {
    projects: IProject[];
    onStatusChange: (index: number, newStatus: 'Not Started' | 'In Progress' | 'Completed') => void;
}
  