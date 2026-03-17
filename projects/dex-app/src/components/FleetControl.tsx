import React from 'react';

const FleetControl = () => {
  const agents = [
    { name: 'MedScout-Alpha', task: 'Lead Generation', status: 'Active', load: '65%', uptime: '14h 22m' },
    { name: 'Submitter-Beta', task: 'Portal Entry', status: 'Standby', load: '0%', uptime: '4h 10m' },
    { name: 'Producer-Gamma', task: 'Briefing Prep', status: 'Queued', load: '12%', uptime: '1h 05m' },
    { name: 'Specialist-Delta', task: 'Technical Audit', status: 'Sleep', load: '0%', uptime: '0m' },
  ];

  return (
    <div className="bg-slate-800 rounded-lg shadow border border-slate-700 p-6 mt-8">
      <h2 className="text-xl font-bold mb-6 text-slate-100 uppercase tracking-widest flex items-center">
        <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
        Fleet Control Center
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {agents.map((agent, i) => (
          <div key={i} className="p-4 bg-slate-900/80 rounded-lg border border-slate-700 hover:border-blue-500/50 transition-all group">
            <div className="flex justify-between items-start mb-3">
              <p className="text-sm font-black text-white group-hover:text-blue-400 transition-colors uppercase tracking-tighter">{agent.name}</p>
              <span className={`text-[9px] px-1.5 py-0.5 rounded font-black uppercase ${agent.status === 'Active' ? 'bg-emerald-900/50 text-emerald-400' : 'bg-slate-800 text-slate-500'}`}>
                {agent.status}
              </span>
            </div>
            <p className="text-[10px] text-slate-500 font-bold uppercase mb-4">{agent.task}</p>
            <div className="space-y-2">
              <div className="flex justify-between text-[9px] font-mono text-slate-400">
                <span>LOAD</span>
                <span>{agent.load}</span>
              </div>
              <div className="w-full bg-slate-800 h-1 rounded-full overflow-hidden">
                <div className={`h-full ${agent.status === 'Active' ? 'bg-emerald-500' : 'bg-slate-700'}`} style={{ width: agent.load }}></div>
              </div>
              <div className="flex justify-between text-[9px] font-mono text-slate-400 pt-2">
                <span>UPTIME</span>
                <span>{agent.uptime}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FleetControl;
