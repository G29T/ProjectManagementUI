import { useNavigate } from 'react-router-dom';
import { ProjectDetailsProps } from '../../models/Project';

const ProjectDetails = ({ projects, onStatusChange }: ProjectDetailsProps) => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate('/'); 
  };

  // Sort projects by startDate in ascending order
  const sortedProjects = [...projects].sort((a, b) => {
    const dateA = new Date(a.startDate);
    const dateB = new Date(b.startDate);
    return dateA.getTime() - dateB.getTime();
  });

  return (
    <div className="bg-white bg-opacity-90 p-6 rounded-lg shadow-xl w-full max-w-4xl mt-8 space-y-6">
      <button 
        onClick={goBack} 
        className="text-blue-500 hover:text-blue-700 text-lg font-semibold"
      >
        Back to Form
      </button>

      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-800">Projects</h1>
      </div>

      {sortedProjects.length === 0 ? (
        <p className="text-center text-gray-900">No projects submitted yet.</p>
      ) : (
        <div>
          {sortedProjects.map((project, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md mb-6 transition duration-300 hover:shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900">{project.name}</h3> 
              <p className="text-gray-800 mt-2">{project.description}</p> 
              <p className="text-gray-700 mt-2">Start Date: {project.startDate}</p> 
    
              <div className="mt-2">
                <label className="block text-sm font-medium text-gray-900">Status</label>
                <select
                  value={project.status}
                  onChange={(event) => onStatusChange(index, event.target.value as 'Not Started' | 'In Progress' | 'Completed')}
                  className="w-auto px-3 py-1 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                >
                  <option value="Not Started">Not Started</option>
                  <option value="In Progress">In Progress</option>
                  <option value="Completed">Completed</option>
                </select>
              </div>

              <p className={`text-sm mt-2 
                ${project.status === 'Not Started' ? 'text-red-600' : ''} 
                ${project.status === 'In Progress' ? 'text-yellow-700' : ''} 
                ${project.status === 'Completed' ? 'text-green-600' : ''}`}
              >
                Status: {project.status}
              </p> 
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProjectDetails;
