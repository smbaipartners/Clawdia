import React from 'react';

export default function LeadScoringModal({ isOpen, onClose, lead }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-slate-900 border border-slate-700 rounded-xl w-full max-w-2xl overflow-hidden shadow-2xl">
        <div className="p-4 border-b border-slate-700 flex justify-between items-center bg-slate-800">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <span className="text-emerald-400">⚡</span> Lead Intelligence Score
          </h2>
          <button onClick={onClose} className="text-slate-400 hover:text-white transition-colors">✕</button>
        </div>
        
        <div className="p-6">
          <div className="flex gap-6 mb-6">
            <div className="flex-1 bg-slate-800/50 rounded-lg p-4 border border-slate-700">
              <h3 className="text-slate-400 text-xs uppercase font-bold tracking-widest mb-2">Total Score</h3>
              <div className="text-5xl font-mono text-emerald-400">94/100</div>
              <p className="text-sm text-slate-500 mt-2">Ultra-High Intent</p>
            </div>
            <div className="flex-2 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-slate-300">Revenue Potential</span>
                <span className="text-blue-400 font-mono">25/25</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-300">Market Authority</span>
                <span className="text-blue-400 font-mono">22/25</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-300">Tech Stack Gap</span>
                <span className="text-emerald-400 font-mono">24/25</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-300">Engagement Likelihood</span>
                <span className="text-blue-400 font-mono">23/25</span>
              </div>
            </div>
          </div>
          
          <div className="bg-emerald-900/20 border border-emerald-800/50 rounded-lg p-4 mb-4">
            <h4 className="text-emerald-400 text-sm font-bold mb-1">Recommended Action</h4>
            <p className="text-slate-300 text-sm">Deploy Specialist-Delta with 'Surgical Authority' framing. Lead exhibits strong signals for immediate AI-assisted patient intake optimization.</p>
          </div>
        </div>
        
        <div className="p-4 border-t border-slate-700 bg-slate-800 flex justify-end gap-3">
          <button onClick={onClose} className="px-4 py-2 text-sm text-slate-300 hover:text-white transition-colors">Dismiss</button>
          <button className="px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white text-sm font-bold rounded shadow transition-colors">
            Deploy Specialist
          </button>
        </div>
      </div>
    </div>
  );
}
