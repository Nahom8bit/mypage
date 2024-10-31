export default function SkillBar({ skill, level }: { skill: string; level: number }) {
  return (
    <div className="space-y-2">
      <div className="flex justify-between">
        <span>{skill}</span>
        <span>{level}%</span>
      </div>
      <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
        <div 
          className="h-full bg-blue-500 rounded-full transition-all duration-1000"
          style={{ width: `${level}%` }}
        />
      </div>
    </div>
  );
} 