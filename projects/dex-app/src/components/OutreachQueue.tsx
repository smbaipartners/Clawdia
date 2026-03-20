import React, { useState } from 'react';

interface OutreachItem {
  practice: string;
  type: string;
  channel: 'Email' | 'DM' | 'Portal';
  status: 'Queued' | 'Sent' | 'Replied' | 'Closed';
  priority: 'High' | 'Medium';
  hook: string;
}

const OutreachQueue = () => {
  const [filter, setFilter] = useState<'All' | 'Queued' | 'Sent' | 'Replied'>('All');

  const queue: OutreachItem[] = [
    { practice: "South Park Dental", type: "Implant", channel: "Email", status: "Queued", priority: "High", hook: "DTLA Cosmetic dentistry; post-op nurture + cosmetic case presentation." },
    { practice: "Downtown LA Periodontics", type: "Implant", channel: "Portal", status: "Queued", priority: "High", hook: "DTLA Board-certified periodontist; referral loop automation + implant follow-up." },
    { practice: "Urban Wellness Clinic", type: "Chiro/Acu", channel: "Email", status: "Queued", priority: "Medium", hook: "DTLA trifecta PT/Chiro/Acu; cross-discipline patient journey automation." },    { practice: 'West Valley Implant Dental', type: 'Implant', channel: 'Email', status: 'Queued', priority: 'High', hook: 'Board-certified periodontist; new patient automation + implant follow-up sequences.' },
    { practice: 'Studio City Dental Implant & Perio', type: 'Implant', channel: 'Email', status: 'Queued', priority: 'High', hook: 'Dual-specialist practice; post-op nurture + multi-provider scheduling workflows.' },
    { practice: 'Implants 4 Life', type: 'Implant', channel: 'DM', status: 'Queued', priority: 'High', hook: 'Celebrity focus; in-house lab + AI-driven treatment plan presentation automation.' },
    { practice: 'Healing Point Integrative Acu', type: 'Acu', channel: 'Email', status: 'Queued', priority: 'High', hook: 'East-West integrative brand; herbal consult automation + rebooking sequences.' },
    { practice: 'Back to Wellness Center', type: 'Chiro/Acu', channel: 'Email', status: 'Queued', priority: 'High', hook: 'Multi-modality PT/Chiro/Acu; cross-discipline patient journey + referral automation.' },
    { practice: 'Angha Periodontics', type: 'Implant', channel: 'Email', status: 'Queued', priority: 'High', hook: 'Boutique minimally invasive; post-op care sequences + Pasadena market referral engine.' },
    { practice: 'Glendale Periodontics', type: 'Implant', channel: 'Email', status: 'Queued', priority: 'High', hook: 'Luxury comfort brand; automated recall + implant re-engagement campaigns.' },
    { practice: 'Dr. Paul Nassif', type: 'Surgery', channel: 'DM', status: 'Queued', priority: 'High', hook: 'Ultra-authority TV surgeon; high-end concierge onboarding + global referral network automation.' },
    { practice: 'Zadeh Dentistry', type: 'Implant', channel: 'Email', status: 'Queued', priority: 'High', hook: 'World leader in same-day implants; AI appointment scheduling + patient re-engagement.' },
    { practice: 'Dr. Kourosh Maddahi', type: 'Cosmetic', channel: 'Portal', status: 'Queued', priority: 'High', hook: '10,000+ smile makeovers; automated case presentation + follow-up for high-value treatment plans.' },
    { practice: 'Synergy Dental Implants & OMS', type: 'Surgery', channel: 'Email', status: 'Queued', priority: 'High', hook: 'Calabasas OMS authority; complex implant + surgical workflow automation + new patient onboarding sequences.' },
    { practice: 'California Center of Longevity & FM', type: 'Medical', channel: 'Email', status: 'Queued', priority: 'High', hook: 'Longevity/functional medicine elite brand; PRP + stem cell consult automation + patient reactivation engine.' },
    { practice: 'Toluca Lake Periodontics', type: 'Implant', channel: 'Email', status: 'Queued', priority: 'High', hook: 'Dual board-certified ABP Diplomates; implant + sinus augmentation workflow automation + Burbank market referral engine.' },
    { practice: 'Chiropractic Remedy', type: 'Chiro/Acu', channel: 'Email', status: 'Queued', priority: 'High', hook: 'VoyageLA-featured Burbank authority; multi-modality intake + rebooking automation + injury rehab follow-up sequences.' },
    { practice: 'Encino Oral & Maxillofacial Surgery', type: 'Surgery', channel: 'Email', status: 'Queued', priority: 'High', hook: 'Encino OMS authority; surgical case consult automation + high-value post-op sequences.' },
    { practice: 'Sherman Oaks Dental Esthetics', type: 'Cosmetic', channel: 'DM', status: 'Queued', priority: 'High', hook: 'High-end cosmetic brand; veneer consult automation + premium patient experience.' },
    { practice: 'Studio City Orthodontics', type: 'Ortho', channel: 'Portal', status: 'Queued', priority: 'High', hook: 'Elite Diamond Plus provider; automated aligner tracking + clear aligner lead gen.' },
  ];

  const filtered = filter === 'All' ? queue : queue.filter(i => i.status === filter);

  const statusColors: Record<string, string> = {
    Queued: 'bg-amber-900/40 text-amber-300 border border-amber-800',
    Sent: 'bg-blue-900/40 text-blue-300 border border-blue-800',
    Replied: 'bg-emerald-900/40 text-emerald-300 border border-emerald-800',
    Closed: 'bg-slate-700 text-slate-400 border border-slate-600',
  };

  const channelIcons: Record<string, string> = {
    Email: '✉',
    DM: '💬',
    Portal: '🔗',
  };

  const counts = {
    All: queue.length,
    Queued: queue.filter(i => i.status === 'Queued').length,
    Sent: queue.filter(i => i.status === 'Sent').length,
    Replied: queue.filter(i => i.status === 'Replied').length,
  };

  return (
    <div className="bg-slate-800 rounded-lg shadow border border-slate-700 p-6 mt-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-slate-100 uppercase tracking-widest flex items-center">
          <span className="w-2 h-2 bg-amber-500 rounded-full mr-2 animate-pulse"></span>
          Outreach Queue
        </h2>
        <div className="flex gap-2">
          {(['All', 'Queued', 'Sent', 'Replied'] as const).map(f => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`text-[9px] px-2 py-1 rounded font-black uppercase tracking-widest border transition-all ${filter === f ? 'bg-blue-600 text-white border-blue-500' : 'bg-slate-900/50 text-slate-400 border-slate-700 hover:border-slate-500'}`}
            >
              {f} <span className="opacity-60">({counts[f]})</span>
            </button>
          ))}
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead className="bg-slate-700/50 text-slate-300 text-[10px] uppercase font-bold tracking-widest">
            <tr>
              <th className="p-3">Practice</th>
              <th className="p-3">Type</th>
              <th className="p-3">Channel</th>
              <th className="p-3">Status</th>
              <th className="p-3">Outreach Hook</th>
              <th className="p-3 text-right">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-700/50">
            {filtered.map((item, i) => (
              <tr key={i} className="hover:bg-slate-700/20 transition-colors">
                <td className="p-3 font-semibold text-slate-100 text-sm">{item.practice}</td>
                <td className="p-3 text-slate-400 text-xs">{item.type}</td>
                <td className="p-3 text-slate-400 text-xs font-mono">
                  <span className="mr-1">{channelIcons[item.channel]}</span>{item.channel}
                </td>
                <td className="p-3">
                  <span className={`px-2 py-0.5 rounded text-[9px] font-black uppercase tracking-tight ${statusColors[item.status]}`}>
                    {item.status}
                  </span>
                </td>
                <td className="p-3 text-slate-500 text-xs italic max-w-xs truncate">{item.hook}</td>
                <td className="p-3 text-right">
                  <button className="text-[9px] text-emerald-400 hover:text-emerald-300 font-black uppercase tracking-widest border border-emerald-900/50 px-2 py-1 rounded bg-emerald-900/10 transition-all">
                    Launch
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-6 pt-4 border-t border-slate-700/50 flex justify-between items-center text-[10px] font-bold text-slate-500 uppercase tracking-[0.15em]">
        <span>{filtered.length} items showing</span>
        <span className="text-amber-500">Rate Limit: 50 req/hr — Stable</span>
      </div>
    </div>
  );
};

export default OutreachQueue;
