import React from 'react';

const FleetControl = () => {
  const agents = [
    { id: 'scout-1', name: 'MedScout', status: 'Active', task: 'Lead Extraction', health: 98, leads: 370 },
    { id: 'specialist-1', name: 'DEX Specialist', status: 'Active', task: 'DEX Dashboard Sync', health: 100 },
    { id: 'hunter-1', name: 'The Hunter', status: 'Standby', task: 'Engagement', health: 95 },
  ];

  return (
    <div className="p-6 bg-slate-900 text-white rounded-xl shadow-2xl border border-slate-800 mt-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold tracking-tight text-indigo-400">Fleet Control Center</h2>
        <div className="flex space-x-4 items-center">
          <div className="text-right">
            <p className="text-xs text-slate-500 uppercase tracking-widest">Total Intelligence</p>
            <p className="text-lg font-mono text-indigo-300">370 Leads Collected</p>
          </div>
          <span className="px-3 py-1 bg-green-900/30 text-green-400 text-xs rounded-full border border-green-800">Operational</span>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {agents.map((agent) => (
          <div key={agent.id} className="p-4 bg-slate-800/50 rounded-lg border border-slate-700 hover:border-indigo-500 transition-colors">
            <div className="flex justify-between items-start mb-2">
              <div>
                <p className="font-semibold text-slate-200">{agent.name}</p>
                <p className="text-xs text-slate-500 uppercase tracking-widest">{agent.id}</p>
              </div>
              <div className="flex flex-col items-end">
                <span className={`text-xs px-2 py-0.5 rounded ${agent.status === 'Active' ? 'bg-indigo-900/50 text-indigo-300' : 'bg-slate-700 text-slate-400'}`}>
                  {agent.status}
                </span>
              </div>
            </div>
            <div className="mt-4">
              <div className="flex justify-between text-xs text-slate-400 mb-1">
                <span>Task: {agent.task}</span>
                <span>{agent.health}% Health</span>
              </div>
              <div className="w-full bg-slate-700 h-1.5 rounded-full overflow-hidden">
                <div 
                  className="bg-indigo-500 h-full rounded-full transition-all duration-500" 
                  style={{ width: \`${agent.health}%\` }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FleetControl;
