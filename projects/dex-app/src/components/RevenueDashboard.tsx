import React, { useState } from 'react';
import MorningBriefing from "./MorningBriefing";
import FleetControl from './FleetControl';
import OutreachQueue from './OutreachQueue';

interface Lead {
  name: string;
  status: string;
  priority: string;
  type: string;
  details?: string;
}

const RevenueDashboard = () => {
  const [selectedLead, setSelectedLead] = useState<Lead | null>(null);

  const leads: Lead[] = [
    { name: 'Beaumont Dental Center', status: 'New', priority: 'High', type: 'Implant/Cosmetic', details: 'Primary elite implant/cosmetic authority in Banning Pass; high geographic authority.' },
    { name: 'New Start Dental', status: 'New', priority: 'High', type: 'Dental', details: 'High-intent emergency and personalized dental authority in Beaumont.' },
    { name: 'San Jacinto Smiles', status: 'New', priority: 'High', type: 'Implant/Ortho', details: 'Specialized implant and orthodontic authority for San Jacinto market growth.' },
    { name: 'Dr. Lee Beaumont Dental', status: 'New', priority: 'High', type: 'Surgery', details: 'Specialist oral surgery focus in the Beaumont market; local surgical authority.' },
    { name: 'Dental Implant SoCal', status: 'New', priority: 'High', type: 'Implant', details: 'Pure-play implant surgical authority in Hemet (Latham Ave); high-value focus.' },
    { name: 'Lake Elsinore Oral Surgery', status: 'New', priority: 'High', type: 'Surgery', details: 'Specialized oral and maxillofacial surgery in Lake Elsinore.' },
    { name: 'Menifee Valley Dental', status: 'New', priority: 'High', type: 'Dental', details: 'High-intent implant and cosmetic focus in Menifee.' },
    { name: 'Wildomar Oral Surgery', status: 'New', priority: 'High', type: 'Surgery', details: 'Specialist surgical center for implants and extractions in Wildomar.' },
    { name: 'Murrieta Dental Implants', status: 'New', priority: 'High', type: 'Implant', details: 'Dr. J.S. Grewal; specialist in complex full-mouth reconstruction; state-of-the-art tech.' },
    { name: 'Temecula Valley Acupuncture', status: 'New', priority: 'High', type: 'Acu', details: 'High-intent fertility & pain management niche; elite Temecula market.' },
    { name: 'Legacy Dental of Murrieta', status: 'New', priority: 'High', type: 'Dental', details: '4.8 star high-intent implant ad focus; California Oaks hub.' },
    { name: 'Murrieta Chiropractic', status: 'New', priority: 'High', type: 'Chiro', details: '20+ years; cold laser therapy & spinal decompression focus; Murrieta elite.' },
    { name: 'Menifee Dental Group', status: 'New', priority: 'High', type: 'Dental', details: 'High-intent family & cosmetic dentistry; large-scale practice with implant focus.' },
    { name: 'Riverside Oral Surgery', status: 'New', priority: 'High', type: 'Surgery', details: 'Board-certified specialists; high-value dental implant & jaw surgery focus.' },
    { name: 'Corona Dental Implants', status: 'New', priority: 'High', type: 'Implant', details: 'Elite restorative center; focus on All-on-4 and immediate load protocols.' },
    { name: 'ClearChoice Riverside', status: 'New', priority: 'High', type: 'Implant', details: 'High-authority full-arch implant center; elite brand awareness in Riverside.' },
    { name: 'Dental Implants GPS', status: 'New', priority: 'High', type: 'Surgery', details: 'Specializes in GPS guided implant surgery; top-rated Riverside periodontist.' },
    { name: 'Inland Valley Oral Surgery', status: 'New', priority: 'High', type: 'Surgery', details: 'Elite board-certified OMS; high-value reconstructive & implant cases; Moreno Valley.' },
    { name: 'Redlands Spine and Sport', status: 'New', priority: 'High', type: 'Chiro/Acu', details: '"Best chiropractor in this area"; elite acupuncture & sports rehab in Redlands.' },
    { name: 'Redlands Chiropractic', status: 'New', priority: 'High', type: 'Chiro/Acu', details: '500+ reviews; high-intent acupuncture & chiro hybrid focus; Redlands authority.' },
    { name: 'Redlands Family Dentistry', status: 'New', priority: 'High', type: 'Dental', details: 'Dr. Frederick Hoffer; High-end cosmetic; same-day dentistry with in-office lab.' },
    { name: 'Loma Linda Family Dentistry', status: 'New', priority: 'High', type: 'Implant', details: 'Dr. Kiddee Poomprakobsri; elite implant specialist; LLU School of Dentistry Professor.' },
    { name: 'Inland Empire Oral Surgery', status: 'New', priority: 'High', type: 'Surgery', details: 'Dr. Ferraro / Dr. Malan; Board Certified; elite "Jaw in a Day" protocol; Upland/Ontario authority.' },
    { name: 'Mission Dental Care', status: 'New', priority: 'High', type: 'Implant', details: 'Comprehensive treatment; All-on-4 & Invisalign focus; 500+ reviews; Ontario, CA.' },
    { name: 'Arcadia Dental Arts', status: 'New', priority: 'High', type: 'Cosmetic', details: 'High-intent cosmetic dentistry in Arcadia; 30+ years experience.' },
    { name: 'San Gabriel Oral Surgery', status: 'New', priority: 'High', type: 'Surgery', details: 'Elite surgical case volume in San Gabriel; board-certified OMS.' },
    { name: 'La Verne Dental & Implants', status: 'New', priority: 'High', type: 'Implant', details: 'Dr. Shideler; board-certified; elite implant & restorative authority.' },
    { name: 'Claremont Dental Institute', status: 'New', priority: 'High', type: 'Surgery', details: 'Dr. Arredondo; multi-specialty; high-value surgical cases & rehabilitation.' },
    { name: 'Glendora Oral Surgery', status: 'New', priority: 'High', type: 'Surgery', details: 'Dr. Mundi; board-certified OMS; elite implant & facial surgery focus.' },
    { name: 'Inland Empire Periodontics', status: 'New', priority: 'High', type: 'Implant', details: 'Dr. Sannareddy; board-certified; specialist in LANAP & advanced implants.' },
    { name: 'Los Feliz Dental Center', status: 'New', priority: 'High', type: 'Implant', details: 'Sedation dentistry + digital imaging; All-on-4 implants; elite Los Feliz market.' },
    { name: 'Inspired Smiles Los Feliz', status: 'New', priority: 'High', type: 'Implant', details: 'All-On-4 + cosmetic focus; comprehensive restorative in Los Feliz.' },
    { name: 'Dr. Paul Nassif', status: 'New', priority: 'High', type: 'Surgery', details: 'Ultra-authority "Botched" star; complex revision specialist in Beverly Hills.' },
    { name: 'Dr. Garth Fisher', status: 'New', priority: 'High', type: 'Surgery', details: 'World-renowned "Extreme Makeover" pioneer; elite celebrity focus in Beverly Hills.' },
    { name: 'Dr. Jason Diamond', status: 'New', priority: 'High', type: 'Surgery', details: 'Top facial plastic surgeon to the stars; global authority in Beverly Hills.' },
    { name: 'Epione Beverly Hills', status: 'New', priority: 'High', type: 'Cosmetic', details: 'Dr. Simon Ourian; Leading innovator in non-surgical aesthetics; massive social authority.' },
    { name: 'Dr. Raj Kanodia', status: 'New', priority: 'High', type: 'Surgery', details: 'The "King of Rhinoplasty"; global authority for high-profile clients in Beverly Hills.' },
    { name: 'Dr. Ritu Chopra', status: 'New', priority: 'High', type: 'Surgery', details: 'Board-certified; signature DEFINE Deep-Plane Facelift; elite surgical training in Beverly Hills.' },
    { name: 'Smile Studios BH', status: 'New', priority: 'High', type: 'Dental', details: 'Celebrity clientele; state-of-the-art "picture-perfect" smiles in Beverly Hills.' },
    { name: 'The Plastic Surgery Institute', status: 'New', priority: 'High', type: 'Surgery', details: 'Standard for global results; leading elite surgical facility in Beverly Hills.' },
    { name: 'Brentwood Surgery Center', status: 'New', priority: 'High', type: 'Surgery', details: '21,000 sq ft state-of-the-art outpatient surgery center in Brentwood.' },
    { name: 'Dr. Kevin Sands', status: 'New', priority: 'High', type: 'Cosmetic', details: 'Ultra high-end/Celebrity cosmetic specialist; 20+ years expertise.' },
    { name: 'Dr. Kourosh Maddahi', status: 'New', priority: 'High', type: 'Cosmetic', details: 'Board-certified pioneer in cosmetic & anti-aging; 10,000+ smile makeovers.' },
    { name: 'Dr. Joseph Stan', status: 'New', priority: 'High', type: 'Implant', details: '30+ years exp; global leader in full mouth reconstructive; High-value target.' },
    { name: 'Dr. Joseph Goodman', status: 'New', priority: 'High', type: 'Implant', details: 'Celebrity cosmetic + top-tier implantology; High market authority.' },
    { name: 'Dr. Ziv Simon', status: 'New', priority: 'High', type: 'Implant', details: 'Double-boarded specialist; elite periodontics & implants; 40+ years expertise.' },
    { name: 'Century City Aesthetic', status: 'New', priority: 'High', type: 'Cosmetic', details: 'Dr. Bill Dorfman; High-end/Celebrity focus; Elite market segment.' },
    { name: 'LACOMS', status: 'New', priority: 'High', type: 'Surgery', details: 'All surgeons Board Certified; "Jaw in a Day" high-value protocol.' },
  ];

  return (
    <div className="p-6 bg-slate-900 text-white min-h-screen relative">
      <h1 className="text-3xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">Revenue & Lead Intelligence</h1>
      
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <div className="bg-slate-800 p-4 rounded-lg shadow border border-slate-700">
          <h3 className="text-slate-400 text-xs uppercase font-bold tracking-widest mb-1">Total Leads</h3>
          <p className="text-3xl font-mono text-emerald-400">400</p>
        </div>
        <div className="bg-slate-800 p-4 rounded-lg shadow border border-slate-700">
          <h3 className="text-slate-400 text-xs uppercase font-bold tracking-widest mb-1">High Intent</h3>
          <p className="text-3xl font-mono text-blue-400">314</p>
        </div>
        <div className="bg-slate-800 p-4 rounded-lg shadow border border-slate-700">
          <h3 className="text-slate-400 text-xs uppercase font-bold tracking-widest mb-1">Active Campaigns</h3>
          <p className="text-3xl font-mono text-amber-400">160</p>
        </div>
        <div className="bg-slate-800 p-4 rounded-lg shadow border border-slate-700">
          <h3 className="text-slate-400 text-xs uppercase font-bold tracking-widest mb-1">Est. Deal Value</h3>
          <p className="text-3xl font-mono text-purple-400">$2,012,500</p>
        </div>
      </div>

      {/* Fleet & Campaign Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
        {/* Leads Table */}
        <div className="lg:col-span-2 bg-slate-800 rounded-lg shadow overflow-hidden border border-slate-700">
          <div className="max-h-[600px] overflow-y-auto">
            <table className="w-full text-left">
              <thead className="bg-slate-700 text-slate-200 text-xs uppercase font-bold tracking-widest sticky top-0 z-10">
                <tr>
                  <th className="p-4">Practice Name</th>
                  <th className="p-4">Type</th>
                  <th className="p-4">Status</th>
                  <th className="p-4">Priority</th>
                  <th className="p-4 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-700">
                {leads.map((lead, i) => (
                  <tr key={i} className="hover:bg-slate-750 transition-colors">
                    <td className="p-4 font-medium text-slate-100">{lead.name}</td>
                    <td className="p-4 text-slate-400 text-sm">{lead.type}</td>
                    <td className="p-4">
                      <span className={`px-2 py-0.5 rounded text-[10px] font-black uppercase tracking-tighter ${lead.status === 'New' ? 'bg-blue-900/40 text-blue-300 border border-blue-800' : 'bg-emerald-900/40 text-emerald-300 border border-emerald-800'}`}>
                        {lead.status}
                      </span>
                    </td>
                    <td className="p-4">
                        <span className={`text-sm font-bold ${lead.priority === 'High' ? 'text-amber-400' : 'text-slate-400'}`}>
                            {lead.priority}
                        </span>
                    </td>
                    <td className="p-4 text-right">
                      <button 
                        onClick={() => setSelectedLead(lead)}
                        className="text-[10px] text-blue-400 hover:text-blue-300 font-black uppercase tracking-widest border border-blue-900/50 px-2 py-1 rounded bg-blue-900/10"
                      >
                        Intelligence
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Fleet Status Card */}
        <div className="bg-slate-800 rounded-lg shadow border border-slate-700 p-6">
            <h2 className="text-lg font-bold mb-4 text-slate-100 uppercase tracking-widest flex items-center">
                <span className="w-2 h-2 bg-emerald-500 rounded-full mr-2 animate-pulse"></span>
                Fleet Status
            </h2>
            <div className="space-y-4">
                <div className="flex justify-between items-center p-3 bg-slate-900/50 rounded border border-slate-700/50">
                    <div>
                        <p className="text-xs font-bold text-slate-400 uppercase tracking-tighter">MedScout</p>
                        <p className="text-sm text-slate-100">Batch 9 (Hemet / Beaumont expansion)</p>
                        <p className="text-[9px] text-slate-500 font-mono">L.SYNC: 06:27 AM</p>
                    </div>
                    <div className="text-right text-[10px] font-black text-emerald-400 uppercase">Active</div>
                </div>
                <div className="flex justify-between items-center p-3 bg-slate-900/50 rounded border border-slate-700/50">
                    <div>
                        <p className="text-xs font-bold text-slate-400 uppercase tracking-tighter">Submitter</p>
                        <p className="text-sm text-slate-100">Portal Monitoring</p>
                    </div>
                    <div className="text-right text-[10px] font-black text-blue-400 uppercase">Standby</div>
                </div>
                <div className="flex justify-between items-center p-3 bg-slate-900/50 rounded border border-slate-700/50">
                    <div>
                        <p className="text-xs font-bold text-slate-400 uppercase tracking-tighter">Producer</p>
                        <p className="text-sm text-slate-100">Briefing Prep</p>
                    </div>
                    <div className="text-right text-[10px] font-black text-amber-400 uppercase">Queued</div>
                </div>
            </div>
            
            <div className="mt-8">
                <h3 className="text-xs font-black text-slate-500 uppercase tracking-[0.2em] mb-4">Geographic Focus</h3>
                <div className="space-y-3">
                    <div>
                        <div className="flex justify-between text-[10px] font-bold text-slate-400 uppercase mb-1">
                            <span>Beverly Hills / West LA</span>
                            <span>30%</span>
                        </div>
                        <div className="w-full bg-slate-700 h-1 rounded-full overflow-hidden">
                            <div className="bg-blue-400 h-full w-[30%]"></div>
                        </div>
                    </div>
                    <div>
                        <div className="flex justify-between text-[10px] font-bold text-slate-400 uppercase mb-1">
                            <span>Santa Monica / Palisades</span>
                            <span>25%</span>
                        </div>
                        <div className="w-full bg-slate-700 h-1 rounded-full overflow-hidden">
                            <div className="bg-emerald-400 h-full w-[25%]"></div>
                        </div>
                    </div>
                    <div>
                        <div className="flex justify-between text-[10px] font-bold text-slate-400 uppercase mb-1">
                            <span>Inland Empire (Redlands/Riv)</span>
                            <span>20%</span>
                        </div>
                        <div className="w-full bg-slate-700 h-1 rounded-full overflow-hidden">
                            <div className="bg-violet-400 h-full w-[20%]"></div>
                        </div>
                    </div>
                    <div>
                        <div className="flex justify-between text-[10px] font-bold text-slate-400 uppercase mb-1">
                            <span>Hemet / San Jacinto / Banning</span>
                            <span>15%</span>
                        </div>
                        <div className="w-full bg-slate-700 h-1 rounded-full overflow-hidden">
                            <div className="bg-rose-400 h-full w-[15%]"></div>
                        </div>
                    </div>
                    <div>
                        <div className="flex justify-between text-[10px] font-bold text-slate-400 uppercase mb-1">
                            <span>Culver / Westchester / MDR</span>
                            <span>10%</span>
                        </div>
                        <div className="w-full bg-slate-700 h-1 rounded-full overflow-hidden">
                            <div className="bg-amber-400 h-full w-[10%]"></div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-8">
                <h3 className="text-xs font-black text-slate-500 uppercase tracking-[0.2em] mb-4">Resource Usage</h3>
                <div className="w-full bg-slate-700 h-1.5 rounded-full overflow-hidden mb-2">
                    <div className="bg-blue-500 h-full w-[80%]"></div>
                </div>
                <p className="text-[10px] text-slate-400 font-bold uppercase">Throttle: 50 req/hr (Stable)</p>
            </div>
        </div>
      </div>

      <MorningBriefing />
      <FleetControl />
      <OutreachQueue />

      {/* Lead Details Sidepanel (Overlay) */}
      {selectedLead && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex justify-end">
          <div className="w-full max-w-md bg-slate-800 h-full p-8 border-l border-slate-700 shadow-2xl animate-in slide-in-from-right duration-300">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-bold tracking-tight text-white uppercase italic">Intelligence Report</h2>
              <button 
                onClick={() => setSelectedLead(null)}
                className="text-slate-400 hover:text-white text-2xl font-light"
              >
                &times;
              </button>
            </div>
            
            <div className="space-y-8">
              <div>
                <label className="text-[10px] text-slate-500 uppercase font-black tracking-[0.2em] block mb-2">Practice Identity</label>
                <p className="text-2xl font-bold text-white leading-tight">{selectedLead.name}</p>
              </div>
              
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="text-[10px] text-slate-500 uppercase font-black tracking-[0.2em] block mb-2">Specialty</label>
                  <p className="text-slate-200 font-medium">{selectedLead.type}</p>
                </div>
                <div>
                  <label className="text-[10px] text-slate-500 uppercase font-black tracking-[0.2em] block mb-2">Capture Status</label>
                  <p className="text-emerald-400 font-bold">{selectedLead.status}</p>
                </div>
              </div>

              <div>
                <label className="text-[10px] text-slate-500 uppercase font-black tracking-[0.2em] block mb-2">Strategic Insight</label>
                <div className="bg-slate-900/80 p-5 rounded-lg border border-slate-700/50 mt-2 relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-1 h-full bg-blue-500/50"></div>
                  <p className="text-slate-300 italic text-sm leading-relaxed font-serif">
                    "{selectedLead.details || 'Baseline lead data ingested. Campaign-ready.'}"
                  </p>
                </div>
              </div>

              <div className="pt-10">
                <button className="w-full bg-gradient-to-r from-blue-600 to-emerald-600 hover:from-blue-500 hover:to-emerald-500 text-white font-black py-4 rounded-lg shadow-lg transition-all uppercase text-xs tracking-[0.3em]">
                  Initialize Campaign Sequence
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RevenueDashboard;
