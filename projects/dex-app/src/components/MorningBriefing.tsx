import React from 'react';

export default function MorningBriefing() {
  return (
    <div className="bg-slate-800 p-6 rounded-lg shadow border border-slate-700 mb-8 mt-8">
      <h2 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400 mb-4">
        Morning Briefing (08:00)
      </h2>
      <div className="space-y-4 text-slate-300">
        <p><strong>Fleet Status:</strong> 293 total leads acquired. Expanding through DTLA and East LA.</p>
        <p><strong>Revenue Pipeline:</strong> Est. Deal Value at $1,238,500. 226 High Intent targets identified.</p>
        <p><strong>Immediate Directives:</strong></p>
        <ul className="list-disc pl-5 text-sm space-y-2">
          <li>Complete DTLA/Arts District MedScout final sweep (Batch 8).</li>
          <li>Initialize outreach sequences via the newly deployed OutreachQueue.</li>
          <li>Monitor Fortune 500 portals for strategic placement opportunities.</li>
        </ul>
      </div>
    </div>
  );
}
