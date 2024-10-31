'use client';

import { useEffect, useState } from 'react';

type Repository = {
  id: number;
  name: string;
  description: string;
  topics: string[];
  html_url: string;
};

type ProjectCategory = 'frontend' | 'python' | 'modeling' | 'accounting';

type ColorScheme = {
  border: string;
  bg: string;
  hover: string;
  text: string;
  tag: string;
};

type ExpertiseColors = {
  [K in ProjectCategory]: ColorScheme;
};

// Function to determine project category based on topics or name
function getProjectCategory(repo: Repository): ProjectCategory {
  const topics = repo.topics.map(t => t.toLowerCase());
  const name = repo.name.toLowerCase();

  if (topics.some(t => ['react', 'nextjs', 'javascript', 'html', 'css'].includes(t)) || 
      name.includes('web') || name.includes('site')) {
    return 'frontend';
  }
  if (topics.includes('python') || name.includes('py') || name.includes('gui')) {
    return 'python';
  }
  if (topics.some(t => ['3d', 'blender', 'modeling'].includes(t)) || 
      name.includes('3d') || name.includes('model')) {
    return 'modeling';
  }
  if (topics.some(t => ['accounting', 'finance'].includes(t)) || 
      name.includes('account') || name.includes('finance')) {
    return 'accounting';
  }
  
  return 'frontend'; // default category
}

export default function GithubProjects({ colors }: { colors: ExpertiseColors }) {
  const [projects, setProjects] = useState<Repository[]>([]);

  useEffect(() => {
    fetch('https://api.github.com/users/nahom8bit/repos')
      .then(res => res.json())
      .then(data => {
        setProjects(data.slice(0, 6)); // Get first 6 repositories
      })
      .catch(console.error);
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {projects.map(repo => {
        const category = getProjectCategory(repo);
        return (
          <a
            key={repo.id}
            href={repo.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className={`group p-6 border rounded-lg transition-colors ${colors[category].border} ${colors[category].bg} ${colors[category].hover}`}
          >
            <h3 className="text-xl font-bold mb-2">{repo.name}</h3>
            <p className="text-gray-400 mb-4">{repo.description || 'No description available'}</p>
            <div className="flex flex-wrap gap-2 text-sm">
              {repo.topics.map(topic => (
                <span key={topic} className={`px-2 py-1 rounded-full ${colors[category].tag}`}>
                  {topic}
                </span>
              ))}
            </div>
          </a>
        );
      })}
    </div>
  );
}