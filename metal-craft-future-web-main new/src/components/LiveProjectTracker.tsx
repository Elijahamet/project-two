
import React, { useState, useEffect } from 'react';

const LiveProjectTracker = () => {
  const [activeProjects, setActiveProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);

  const sampleProjects = [
    {
      id: 'NCM001',
      client: 'Luxury Villa Estate',
      type: 'Spiral Staircase',
      progress: 75,
      stage: 'Installation Phase',
      estimatedCompletion: '3 days',
      location: 'East Legon, Accra',
      updates: [
        { time: '2 hours ago', message: 'Staircase assembly completed', status: 'completed' },
        { time: '1 day ago', message: 'Quality inspection passed', status: 'completed' },
        { time: '3 days ago', message: 'Metal fabrication finished', status: 'completed' },
        { time: '5 days ago', message: 'Design approval received', status: 'completed' }
      ]
    },
    {
      id: 'NCM002',
      client: 'Modern Office Complex',
      type: 'Security Gates & Railings',
      progress: 45,
      stage: 'Fabrication',
      estimatedCompletion: '7 days',
      location: 'Airport City, Accra',
      updates: [
        { time: '4 hours ago', message: 'Main gate frame welded', status: 'in-progress' },
        { time: '1 day ago', message: 'Materials quality checked', status: 'completed' },
        { time: '2 days ago', message: 'Cutting process started', status: 'completed' }
      ]
    },
    {
      id: 'NCM003',
      client: 'Residential Apartment',
      type: 'Window Frames & Burglarproof',
      progress: 20,
      stage: 'Design & Planning',
      estimatedCompletion: '12 days',
      location: 'Tema, Greater Accra',
      updates: [
        { time: '6 hours ago', message: 'Site measurement completed', status: 'completed' },
        { time: '2 days ago', message: 'Initial consultation done', status: 'completed' }
      ]
    }
  ];

  useEffect(() => {
    setActiveProjects(sampleProjects);
    setSelectedProject(sampleProjects[0]);
  }, []);

  return (
    <div className="py-20 bg-gradient-to-br from-muted/5 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-bold font-montserrat mb-6">
            <span className="metallic-text">Live Project </span>
            <span className="gold-text">Tracking</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Monitor your project's progress in real-time with our exclusive live tracking dashboard
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Project List */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold mb-4 gold-text">Active Projects</h3>
              {activeProjects.map((project) => (
                <div
                  key={project.id}
                  className={`card-metallic p-4 cursor-pointer transition-all duration-300 hover:scale-102 ${
                    selectedProject?.id === project.id ? 'ring-2 ring-gold-400' : ''
                  }`}
                  onClick={() => setSelectedProject(project)}
                >
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h4 className="font-semibold text-foreground">{project.id}</h4>
                      <p className="text-sm text-muted-foreground">{project.client}</p>
                    </div>
                    <span className="text-xs bg-gold-100 text-gold-800 px-2 py-1 rounded-full">
                      {project.progress}%
                    </span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2 mb-2">
                    <div 
                      className="bg-gold-gradient h-2 rounded-full transition-all duration-500"
                      style={{ width: `${project.progress}%` }}
                    ></div>
                  </div>
                  <p className="text-xs text-muted-foreground">{project.stage}</p>
                </div>
              ))}
            </div>

            {/* Project Details */}
            {selectedProject && (
              <div className="lg:col-span-2 card-metallic p-8">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">{selectedProject.client}</h3>
                    <p className="text-muted-foreground">{selectedProject.type}</p>
                    <p className="text-sm text-muted-foreground mt-1">
                      <i className="fas fa-map-marker-alt mr-2"></i>
                      {selectedProject.location}
                    </p>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-bold gold-text">{selectedProject.progress}%</div>
                    <p className="text-sm text-muted-foreground">Complete</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-background/50 rounded-lg p-4">
                    <h4 className="font-semibold mb-2">Current Stage</h4>
                    <p className="text-gold-600 font-medium">{selectedProject.stage}</p>
                  </div>
                  <div className="bg-background/50 rounded-lg p-4">
                    <h4 className="font-semibold mb-2">Estimated Completion</h4>
                    <p className="text-green-600 font-medium">{selectedProject.estimatedCompletion}</p>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold mb-4">Progress Timeline</h4>
                  <div className="space-y-4">
                    {selectedProject.updates.map((update, index) => (
                      <div key={index} className="flex items-start space-x-4">
                        <div className={`w-3 h-3 rounded-full mt-2 ${
                          update.status === 'completed' ? 'bg-green-500' : 'bg-gold-500'
                        }`}></div>
                        <div className="flex-1">
                          <p className="text-sm font-medium">{update.message}</p>
                          <p className="text-xs text-muted-foreground">{update.time}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex space-x-4">
                  <button className="btn-gold px-6 py-3 rounded-lg hover:scale-105 transition-all duration-300">
                    <i className="fas fa-phone mr-2"></i>
                    Contact Manager
                  </button>
                  <button className="btn-metallic px-6 py-3 rounded-lg hover:scale-105 transition-all duration-300">
                    <i className="fas fa-calendar mr-2"></i>
                    Schedule Visit
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveProjectTracker;
