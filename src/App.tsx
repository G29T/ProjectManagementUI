import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProjectForm from './components/project-form/ProjectForm';
import ProjectDetails from './components/project-details/ProjectDetails';
import { IProject } from './models/Project';

export default function App() {
  const [projects, setProjects] = useState<IProject[]>([]);

  const handleSubmit = (newProject: IProject) => {
    setProjects((prevProjects) => [...prevProjects, newProject]);
  };

  const handleStatusChange = (index: number, newStatus: 'Not Started' | 'In Progress' | 'Completed') => {
    const updatedProjects = [...projects];
    updatedProjects[index].status = newStatus;
    setProjects(updatedProjects);
  };

  return (
    <Router>
      <div className="background-custom min-h-screen bg-gray-100 py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <Routes>
            <Route
              path="/"
              element={<ProjectForm onSubmit={handleSubmit} />}
            />
            <Route
              path="/projects"
              element={<ProjectDetails projects={projects} onStatusChange={handleStatusChange} />}
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
}
