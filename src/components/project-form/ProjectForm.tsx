import { useState } from 'react';
import { IProject, ProjectFormProps } from '../../models/Project';
import CustomDatePicker from '../date-picker/DatePicker';
import { useNavigate } from 'react-router-dom';

const ProjectForm: React.FC<ProjectFormProps> = ({ onSubmit }) => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [startDate, setStartDate] = useState<Date | null>(null);
    const [status, setStatus] = useState<'Not Started' | 'In Progress' | 'Completed'>('Not Started');
    const navigate = useNavigate();

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();

        if (name && description && startDate) {
            const newProject: IProject = {
                name,
                description,
                startDate: startDate.toISOString().split('T')[0],
                status,
            };

            onSubmit(newProject);
            setName('');
            setDescription('');
            setStartDate(null);
            setStatus('Not Started');

            navigate('/projects');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="bg-white bg-opacity-90 p-6 rounded-lg shadow-md mb-8 space-y-4">
            <div className="text-center mb-8">
                <h1 className="text-4xl font-bold text-gray-800">Project Management</h1>
            </div>
            <h2 className="text-xl font-semibold text-gray-900">Create Project</h2>
            <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-900">Project Name</label>
                <input
                    id="name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-gray-900"
                    required
                />
            </div>
            <div>
                <label htmlFor="description" className="block text-sm font-medium text-gray-900">Project Description</label>
                <textarea
                    id="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-gray-900"
                    required
                />
            </div>
            <div>
                <label htmlFor="start-date" className="block text-sm font-medium text-gray-900">Start Date</label>
                <CustomDatePicker selectedDate={startDate} onChange={setStartDate} required />
            </div>
            <div>
                <label htmlFor="status" className="block text-sm font-medium text-gray-900">Status</label>
                <select
                    value={status}
                    onChange={(event) => setStatus(event.target.value as 'Not Started' | 'In Progress' | 'Completed')}
                    className="w-auto max-w-xs px-4 py-2 mt-1 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-gray-900"
                >
                    <option value="Not Started">Not Started</option>
                    <option value="In Progress">In Progress</option>
                    <option value="Completed">Completed</option>
                </select>
            </div>
            <button
                type="submit"
                className="w-full py-2 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
                Submit
            </button>
        </form>
    );
};


export default ProjectForm;