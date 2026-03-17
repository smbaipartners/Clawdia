import React, { useState } from 'react';
import FleetControl from './FleetControl';

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
    { name: 'Original Smile - Brentwood', status: 'New', priority: 'High', type: 'Cosmetic', details: 'High-end cosmetic dentistry; focus on extreme smile makeovers in Brentwood.' },
    { name: 'Beverly Hills Dental Care', status: 'New', priority: 'High', type: 'Dental', details: 'Comprehensive aesthetic & implant dentistry in Wilshire corridor; high-intent.' },
    { name: 'Brentwood Orthodontics', status: 'New', priority: 'High', type: 'Dental', details: 'Dr. Parker Brown; Boutique care with personalized cell service for elite clients.' },
    { name: 'BH Dental Health & Wellness', status: 'New', priority: 'High', type: 'Dental', details: 'Integrated biological & holistic dental care; elite Beverly Hills market.' },
    { name: 'SM Periodontics & Surgery', status: 'New', priority: 'High', type: 'Surgery', details: 'Elite periodontal & implant surgery; 3D imaging & laser focus in Santa Monica.' },
    { name: 'Fairview Dental', status: 'New', priority: 'High', type: 'Surgery', details: 'Comprehensive oral & maxillofacial surgeon; diagnosis to restoration in one office.' },
    { name: 'Ora Dental Implant', status: 'New', priority: 'High', type: 'Implant', details: 'Advanced 3D imaging & planning for precision implant restorations in Brentwood.' },
    { name: 'Arthur Glosman DDS', status: 'New', priority: 'High', type: 'Cosmetic', details: 'High-end celebrity cosmetic focus; 20+ years of smile transformations.' },
    { name: 'Brentwood Dental Care', status: 'New', priority: 'High', type: 'Implant', details: 'Dr. Justin Raanan; Harvard instructor; minimally invasive periodontics & implants.' },
    { name: 'Anson Periodontal', status: 'New', priority: 'High', type: 'Implant', details: 'Dr. David Anson; Periodontal specialist; focus on bone & guided tissue regeneration.' },
    { name: 'Elite Chiro & Wellness', status: 'New', priority: 'High', type: 'Chiro', details: 'Beverly Hills elite; specific spinal adjustments & decompression focus.' },
    { name: 'Delta Spine & Sportcare', status: 'New', priority: 'High', type: 'Chiro/Acu', details: 'Brentwood/SM authority; high-intent sports/spine focus.' },
    { name: 'Elite Dental & Ortho', status: 'New', priority: 'High', type: 'Dental', details: 'Comprehensive dental & ortho near Beverly Hills; elite market segment.' },
    { name: 'BH Acupuncture & Herbs', status: 'New', priority: 'High', type: 'Acu', details: 'Specializes in infertility & chronic pain; elite brand authority in Beverly Hills.' },
    { name: 'Clinic For Pain & Anxiety', status: 'New', priority: 'High', type: 'Acu', details: 'Professional acupuncture for high-intent pain/anxiety treatment.' },
    { name: 'Seyhart Santa Monica', status: 'New', priority: 'High', type: 'Acu', details: 'High-end modern acupuncture & wellness sanctuary; elite brand authority.' },
    { name: 'Elite Sports Medicine', status: 'New', priority: 'High', type: 'Chiro', details: 'Physiotherapy & sports medicine for high-performance athletes; Westchester/LAX.' },
    { name: 'UCLA East-West Medicine', status: 'New', priority: 'High', type: 'Medical', details: 'Elite academic-backed integrative medicine; high patient authority.' },
    { name: 'Arbor Vitae Wellness', status: 'New', priority: 'High', type: 'Chiro/Acu', details: 'Holistic chiropractic & acupuncture; multi-modality West LA focus.' },
    { name: 'Emerson Dental Arts', status: 'New', priority: 'High', type: 'Dental', details: 'Dr. Robert G. Sisson; Board-certified; elite cosmetic & implant reconstruction.' },
    { name: 'Concierge Smile Boutique', status: 'New', priority: 'High', type: 'Dental', details: 'Dr. Nima Shayesteh; biomimetic reconstructive dentistry; elite precision focus.' },
    { name: 'Oral Surgery Partners', status: 'New', priority: 'High', type: 'Surgery', details: 'Board Certified; comprehensive surgical solutions in Westchester; high authority.' },
    { name: 'Dove Dental Spa', status: 'New', priority: 'High', type: 'Implant', details: 'High-end boutique experience; focus on natural-looking implants in Westchester.' },
    { name: 'Khashayar Khodadadi DDS', status: 'New', priority: 'High', type: 'Implant', details: 'Emphasis on bone preservation and long-term implant stability; Westchester.' },
    { name: 'Premiere Spine & Sports', status: 'New', priority: 'High', type: 'Chiro', details: 'Integrated chiro + spinal decompression for high-performance athletes.' },
    { name: 'Michael Araghi DC', status: 'New', priority: 'High', type: 'Chiro', details: 'Multi-modality (Chiro/Acu/Decompression) near LAX; elite Westchester focus.' },
    { name: 'Westside Aesthetic Dentistry', status: 'New', priority: 'High', type: 'Cosmetic', details: 'Spa-like experience in Playa Vista; high-end aesthetic focus.' },
    { name: 'Los Angeles Dental Arts', status: 'New', priority: 'High', type: 'Dental', details: 'Dr. Theodore Burnett; biomimetic and same-day crowns specialist.' },
    { name: 'Brumfield Wellness Center', status: 'New', priority: 'High', type: 'Chiro', details: 'Elite sports medicine and injury rehabilitation in Westchester.' },
    { name: 'Brentwood Dental Spa PV', status: 'New', priority: 'High', type: 'Implant', details: 'Specialized dental implants with luxury spa amenities.' },
    { name: 'Synergy Chiropractic', status: 'New', priority: 'High', type: 'Chiro', details: 'High market authority; 18+ years serving the Westchester/LAX area.' },
    { name: 'Dr. Nathan Eshoiee', status: 'New', priority: 'High', type: 'Implant', details: 'Phenomenal reputation for complex periodontal & implant success in Culver City.' },
    { name: 'Dentex Dental Specialty', status: 'New', priority: 'High', type: 'Surgery', details: 'Multidisciplinary specialist group; focus on sedation oral surgery and sedation dentistry.' },
    { name: 'Dr. Theotokis Kolovos', status: 'New', priority: 'High', type: 'Surgery', details: 'Board Certified Oral & Maxillofacial Surgeon; elite head/neck surgery focus in Culver City.' },
    { name: 'West LA Dental', status: 'New', priority: 'High', type: 'Dental', details: 'Advanced family & cosmetic dentistry with high-end surgical wing.' },
    { name: 'Marina Dentistry', status: 'New', priority: 'High', type: 'Implant', details: 'High-authority All-on-4 & implant center serving Culver/Marina area.' },
    { name: 'Playa Vista Dental', status: 'New', priority: 'High', type: 'Dental', details: 'Modern high-tech clinic; focus on Invisalign & aesthetic implants.' },
    { name: 'Elegant Dentistry', status: 'New', priority: 'High', type: 'Dental', details: 'Marina del Rey elite; focus on laser periodontics & high-end aesthetics.' },
    { name: 'Marina Advanced Dentistry', status: 'New', priority: 'High', type: 'Surgery', details: 'MDR oral surgery & All-on-4 specialist; high market authority.' },
    { name: 'Pacific Oral Surgery', status: 'New', priority: 'High', type: 'Surgery', details: 'All-on-4 oral surgeon; Yomi robotic surgery focus; SM/MDR area.' },
    { name: 'MDR Periodontics', status: 'New', priority: 'High', type: 'Implant', details: 'Premier MDR periodontal & implant clinic; Perio Implant Health Professionals.' },
    { name: 'Dr. Tracy Golden', status: 'New', priority: 'High', type: 'Implant', details: 'Marina del Rey concierge periodontal care; patient-centered high-touch focus.' },
    { name: 'Premiere Dental Group', status: 'New', priority: 'High', type: 'Cosmetic', details: 'Advanced cosmetic focus; CEREC crowns and amalgam-free restorations in MDR.' },
    { name: 'Dr. Homyak DDS', status: 'New', priority: 'High', type: 'Cosmetic', details: 'Elevated high-end experience; tech-heavy cosmetic focus in Marina del Rey.' },
    { name: 'Venice Family Dentistry', status: 'New', priority: 'High', type: 'Implant', details: 'High-end cosmetic & implant focus in the heart of Venice.' },
    { name: 'Fuller Smiles Venice', status: 'New', priority: 'High', type: 'Cosmetic', details: 'Multi-location authority; complex full-mouth restoration focus.' },
    { name: 'Soft Touch Dental', status: 'New', priority: 'High', type: 'Implant', details: 'High patient satisfaction; comprehensive gum care + implants focus in MDR.' },
    { name: 'Dr. Moris Aynechi', status: 'New', priority: 'High', type: 'Surgery', details: 'Dual-degree Board Certified; elite facial/implant surgeon in Beverly Hills.' },
    { name: 'Dr. Gabriel Gabbaypour', status: 'New', priority: 'High', type: 'Surgery', details: 'UCLA background; complex reconstructive and dental implant expert.' },
    { name: 'Dr. David Dorfman', status: 'New', priority: 'High', type: 'Surgery', details: 'Double board-certified (Maxillofacial/Plastic); 3D imaging jaw surgery specialist.' },
    { name: 'Dr. Peter Balacky', status: 'New', priority: 'High', type: 'Surgery', details: 'Larchmont Village; Board Certified; specialist in dental implants/wisdom teeth.' },
    { name: 'Wilshire Oral Surgery', status: 'New', priority: 'High', type: 'Surgery', details: 'Premier state-of-the-art practice; full-scope surgical & implant focus.' },
    { name: 'Dr. Michael Borenstein', status: 'New', priority: 'High', type: 'Surgery', details: 'Beverly Hills expert in corrective jaw surgery and bone grafting since 1991.' },
    { name: 'Dr. Douglas Galen', status: 'New', priority: 'High', type: 'Surgery', details: 'High-end surgical outcomes focus; elite boutique practice in Beverly Hills.' },
    { name: 'Dr. Arthur Nordon', status: 'New', priority: 'High', type: 'Surgery', details: 'Specialist in facial reconstruction and TMJ disorders.' },
    { name: 'Dr. Michael Issakharian', status: 'New', priority: 'High', type: 'Surgery', details: 'All-on-X specialist; in-house surgeon for high-end Beverly Hills practices.' },
    { name: 'Implant Dentistry By Doc Rok', status: 'New', priority: 'High', type: 'Implant', details: 'Dr. Vivian Roknian; Board-certified Implantologist; high-authority lecturer.' },
    { name: 'Dr. Alina Krivitsky', status: 'New', priority: 'High', type: 'Implant', details: 'Dual board-certified; exclusive periodontal & implant solutions at The CENTER.' },
    { name: 'Vahedi & Shadi Oral Surgery', status: 'New', priority: 'High', type: 'Surgery', details: 'Dr. Vahedi; Double board-certified in Oral Surgery & Medicine.' },
    { name: 'Dr. Jay K. Lee', status: 'New', priority: 'High', type: 'Surgery', details: 'Board Certified Oral Surgeon; elite trauma & reconstruction specialist at LACOMS.' },
    { name: 'Dr. Omar Kholaki', status: 'New', priority: 'High', type: 'Surgery', details: 'Board Certified Oral Surgeon; expert in advanced full-arch restoration at LACOMS.' },
    { name: 'Dr. Steven F. Hotta', status: 'New', priority: 'High', type: 'Surgery', details: 'Board Certified; Full-scope oral & maxillofacial surgery in Santa Monica.' },
    { name: 'Dr. Solomon Habibian', status: 'New', priority: 'High', type: 'Surgery', details: 'High-end Beverly Hills surgical center; focus on dental implants.' },
    { name: 'Dr. Nader Nikman', status: 'New', priority: 'High', type: 'Cosmetic', details: '25+ years in Brentwood; advanced cosmetic & laser dentistry.' },
    { name: 'Dr. Roshen Ganesh', status: 'New', priority: 'High', type: 'Cosmetic', details: 'Focused on complex restorative and aesthetic smile design in Santa Monica.' },
    { name: 'Dr. Shadi Rezaiamiri', status: 'New', priority: 'High', type: 'Implant', details: 'Board Certified Periodontist; focus on laser-assisted periodontal surgery.' },
    { name: 'Dr. Brian LeSage', status: 'New', priority: 'High', type: 'Cosmetic', details: 'Accredited Fellow AACD; top-tier cosmetic authority in Beverly Hills.' },
    { name: 'Dr. Saghi Parham', status: 'New', priority: 'High', type: 'Cosmetic', details: 'Elite cosmetic & restorative; high-tech focus in Beverly Hills/West LA.' },
    { name: 'Westwood Dental Arts', status: 'New', priority: 'High', type: 'Dental', details: 'Dr. Ali Makhmalbaf; Specialist in prosthodontics & elite aesthetics.' },
    { name: 'Dr. Benjamin Walline', status: 'New', priority: 'High', type: 'Surgery', details: 'Board Certified Oral Surgeon; elite trauma & reconstruction at LACOMS.' },
    { name: 'Dr. Robert J. Relle', status: 'New', priority: 'High', type: 'Surgery', details: 'Elite jaw surgery & maxillofacial specialist at LACOMS.' },
    { name: 'Dr. Kevin Sands', status: 'New', priority: 'High', type: 'Cosmetic', details: 'Ultra high-end/Celebrity cosmetic specialist; 20+ years expertise.' },
    { name: 'Dr. Kourosh Maddahi', status: 'New', priority: 'High', type: 'Cosmetic', details: 'Board-certified pioneer in cosmetic & anti-aging; 10,000+ smile makeovers.' },
    { name: 'Zakhor Dental', status: 'New', priority: 'High', type: 'Cosmetic', details: 'Dr. Mansour Zakhor; AI-driven diagnosis & smile design; celebrity/high-profile focus.' },
    { name: 'BH Dentistry', status: 'New', priority: 'High', type: 'Implant', details: 'Dr. Kevin Frawley; Decades of aesthetics focus; specialists in All-on-X.' },
    { name: 'Dr. Parvaz Mizrahi', status: 'New', priority: 'High', type: 'Surgery', details: 'Board-certified oral/maxillofacial surgeon; complex implant specialist.' },
    { name: 'Dr. Joseph Stan', status: 'New', priority: 'High', type: 'Implant', details: '30+ years exp; global leader in full mouth reconstructive; High-value target.' },
    { name: 'Dr. Joseph Goodman', status: 'New', priority: 'High', type: 'Implant', details: 'Celebrity cosmetic + top-tier implantology; High market authority.' },
    { name: 'Dr. Ziv Simon', status: 'New', priority: 'High', type: 'Implant', details: 'Double-boarded specialist; elite periodontics & implants; 40+ years expertise.' },
    { name: 'Sterling Periodontics', status: 'New', priority: 'High', type: 'Implant', details: 'Board-certified; Dr. Mohamed Khaled; specializes in LANAP & advanced implants.' },
    { name: 'Dr. Sam Harouni', status: 'New', priority: 'High', type: 'Surgery', details: 'Oral & Maxillofacial Surgeon; minimally invasive technologies; high-intent implant focus.' },
    { name: 'Perio Artist', status: 'New', priority: 'High', type: 'Implant', details: 'Dr. Ricardo Raschkovsky; 25+ years Board Certified; specialized surgical & restorative implantology.' },
    { name: 'Zadeh Dentistry', status: 'New', priority: 'High', type: 'Implant', details: 'Dr. Parsa T. Zadeh; world leader in implant technology; same-day implants specialist.' },
    { name: 'Larchmont Dental Arts', status: 'New', priority: 'High', type: 'Cosmetic', details: 'Dr. Arthur Kezian; high-end cosmetic & implant focus; emergency dental expertise.' },
    { name: 'Culver City Dental', status: 'New', priority: 'High', type: 'Dental', details: 'High-intent hybrid practice; advanced restorative & aesthetic dentistry.' },
    { name: 'Century City Smiles', status: 'New', priority: 'High', type: 'Dental', details: 'Dr. Shawn Saidian; Premier tooth-replacement in Century City; mimics natural teeth.' },
    { name: 'Nima DMD', status: 'New', priority: 'High', type: 'Dental', details: '200+ 5-star reviews; tech-forward cosmetic focus.' },
    { name: 'Century City Aesthetic', status: 'New', priority: 'High', type: 'Cosmetic', details: 'Dr. Bill Dorfman; High-end/Celebrity focus; Elite market segment.' },
    { name: 'SM Oral Surgery', status: 'New', priority: 'High', type: 'Surgery', details: 'Dr. Richard Ting; Complex implants & Oral surgery chair at St. Johns.' },
    { name: 'Oral Surgery Center', status: 'New', priority: 'High', type: 'Surgery', details: 'Dr. Shaun Daneshgar; Clinical Instructor at Cedars-Sinai; 20+ years experience.' },
    { name: 'Dr. Borzoo Ahmadi', status: 'New', priority: 'High', type: 'Dental', details: 'Natural-looking restorations; high-end West LA focus.' },
    { name: 'Dr. Steven Becker', status: 'New', priority: 'High', type: 'Chiro', details: 'Chiropractic Neurology & Orthopedics specialist; UCLA grad.' },
    { name: 'West LA Chiropractic', status: 'New', priority: 'High', type: 'Chiro', details: 'DRX9000 Spinal Decompression Therapy; FDA-cleared tech.' },
    { name: 'Mind Body Spirit', status: 'New', priority: 'High', type: 'Acu', details: '20+ years experience; Infertility/Women\'s Health specialist.' },
    { name: 'Cosmetic Dental SM', status: 'New', priority: 'High', type: 'Implant', details: 'Dr. Omid Kashani; All-on-4 & Implant specialist; high-intent aesthetic focus.' },
    { name: 'Westside Dentistry', status: 'New', priority: 'High', type: 'Dental', details: 'Dr. Charles Wood; CEREC same-day crowns; advanced laser tech focus.' },
    { name: 'Sunyo Acupuncture', status: 'New', priority: 'High', type: 'Acu', details: 'Integrative modern acupuncture + motion techniques for chronic pain.' },
    { name: 'Alternative Medical Clinic', status: 'New', priority: 'High', type: 'Acu', details: 'Infertility + Insomnia specialist; 20+ years in Santa Monica.' },
    { name: 'Wilshire Oral Surgery', status: 'New', priority: 'High', type: 'Surgery', details: 'Board Certified; "Teeth in a day" specialists; 300+ 5-star reviews.' },
    { name: 'LACOMS', status: 'New', priority: 'High', type: 'Surgery', details: 'All surgeons Board Certified; "Jaw in a Day" high-value protocol.' },
    { name: 'Advanced Periodontal', status: 'New', priority: 'High', type: 'Implant', details: 'Dual Board-Certified periodontists; exclusive SM implantology focus.' },
    { name: 'BH Periodontics', status: 'New', priority: 'High', type: 'Implant', details: 'Dr. Peiman Soleymani; Board Certified specialist; high-intent grafts.' },
    { name: 'Sunset Oral Surgery', status: 'New', priority: 'High', type: 'Surgery', details: 'Dr. David Salehani; Board Certified; comprehensive surgical range.' },
    { name: 'Dr. June Tanpattana', status: 'New', priority: 'High', type: 'Implant', details: 'Board Certified Periodontist; Diplomate of American Board of Periodontology.' },
    { name: 'Pacific View Smile', status: 'New', priority: 'High', type: 'Implant', details: 'High-tech dental implants focus in Santa Monica.' },
    { name: 'Brentwood Dental Center', status: 'New', priority: 'High', type: 'Surgery', details: 'Oral surgery + Comprehensive focus serving Santa Monica area.' },
    { name: 'UCLA Oral Surgery', status: 'New', priority: 'High', type: 'Surgery', details: 'Academic & Surgical elite specialists; high-value complex cases.' },
    { name: 'Dental Implants BH', status: 'New', priority: 'High', type: 'Implant', details: 'Board-certified periodontists; High-end aesthetic results focus in Beverly Hills.' },
    { name: 'BH Oral Maxillofacial', status: 'New', priority: 'High', type: 'Surgery', details: 'Dr. Moris Aynechi; Board-certified, dual-degree oral surgeon; certified ambulatory surgery center.' },
    { name: 'BH Periodontal Clinic', status: 'New', priority: 'High', type: 'Implant', details: 'Dr. Ari Rosenblatt; 40+ years combined periodontal expertise; professional & comprehensive care.' },
    { name: 'Century City Smiles', status: 'New', priority: 'High', type: 'Dental', details: 'Dr. Shawn Saidian; Premier tooth-replacement focus; mimicking natural teeth aesthetics.' },
    { name: 'Perio Implant Health', status: 'New', priority: 'High', type: 'Implant', details: 'Top 10 Best Dentists; Foremost choice for periodontal/implant procedures in Century City.' },
    { name: 'ModelSmile Dentistry', status: 'New', priority: 'High', type: 'Implant', details: 'Dr. Albert Chow; Zirconia implants; 2% elite credentialed specialist.' },
    { name: 'Thomas Hirsch DDS', status: 'New', priority: 'High', type: 'Implant', details: 'High-quality implants in Malibu; focus on natural-looking restoration.' },
    { name: 'The Palisades Dentists', status: 'New', priority: 'High', type: 'Implant', details: 'Prosthetic implants mimicking natural teeth; Pacific Palisades elite focus.' },
    { name: 'Dentistry by Design', status: 'New', priority: 'High', type: 'Dental', details: 'Multidisciplinary; complex full-mouth rehabilitation specialist in Pacific Palisades.' },
    { name: 'Dr. Emma Y. Kim', status: 'New', priority: 'High', type: 'Implant', details: 'Advanced technology implant specialist; Pacific Palisades elite focus.' },
    { name: 'Dental Spa CA', status: 'New', priority: 'High', type: 'Dental', details: 'Luxury holistic spa dentistry in Pacific Palisades; high-intent aesthetic segment.' },
    { name: 'PP Pediatric Dentistry', status: 'New', priority: 'High', type: 'Dental', details: 'Elite pediatric specialist serving high-net-worth Palisades families.' },
    { name: 'Malibu Dentistry', status: 'New', priority: 'High', type: 'Cosmetic', details: 'Flagship Malibu cosmetic & restorative practice; high market authority.' },
    { name: 'Malibu Chiropractic', status: 'New', priority: 'High', type: 'Chiro', details: 'Premier Malibu chiro; 30+ years in the community; high-intent rehab focus.' },
    { name: 'Malibu Acupuncture', status: 'New', priority: 'High', type: 'Acu', details: 'Lauren M.; Integrated traditional Chinese medicine in Malibu; elite wellness niche.' },
    { name: 'First Dental Implant', status: 'New', priority: 'High', type: 'Implant', details: 'Custom implants; Full-arch fixed systems specialists in Malibu.' },
    { name: 'Smiles in Malibu', status: 'New', priority: 'High', type: 'Implant', details: 'Dr. Bob Perkins; Precision implant placement; natural-looking aesthetics.' },
    { name: 'Palisades Perio', status: 'New', priority: 'High', type: 'Implant', details: 'Dr. Navid Nobaharestan; 3D imaging & stem cell enhanced healing focus.' },
    { name: 'Radiant Health Malibu', status: 'New', priority: 'High', type: 'Acu', details: 'Dr. Michael J. Maguire; Orthopedic & Constitutional Facial Acupuncture.' },
    { name: 'SoulSpace Malibu', status: 'New', priority: 'High', xstatus: 'New', priority: 'High', type: 'Acu', details: 'Corie Tappin, L.Ac.; Concierge healing; sports injury & stress relief niche.' },
    { name: 'Oasis Palisades', status: 'New', priority: 'High', type: 'Acu', details: 'Dr. Antonia Balfour; Holistic skin conditions & fertility specialist.' },
    { name: 'Thumos Health', status: 'New', priority: 'High', type: 'Acu', details: 'High-quality fertility & immune system support focus in Pacific Palisades.' },
    { name: 'Malibu Chiro & Wellness', status: 'New', priority: 'High', type: 'Chiro', details: 'Dr. Ron Maugeri; Official USA Surf Team chiropractor; rapid pain relief.' },
    { name: 'Pain Relief Center LA', status: 'New', priority: 'High', type: 'Acu/Chiro', details: 'Dr. Thomas Marinaro; Luxury concierge-style acupuncture & chiropractic.' },
    { name: 'Luxury Chiropractic', status: 'New', priority: 'High', type: 'Chiro', details: 'Nervous system regulation & neural efficiency focus; Beverly Hills.' },
    { name: 'TUbeauty Med Spa', status: 'New', priority: 'High', type: 'Wellness', details: 'Luxury beauty & wellness; IV therapy + Hyperbaric niche in Culver City.' },
    { name: 'Wellness MedSpa', status: 'New', priority: 'High', type: 'Wellness', details: 'PRP thread lifting & skin rejuvenation specialists; high-intent aesthetic.' },
    { name: 'Concierge Smile Boutique', status: 'New', priority: 'High', type: 'Dental', details: 'Dr. Nima Shayesteh; biomimetic reconstructive dentistry; elite precision focus.' },
    { name: 'Trinity Health & Wellness', status: 'New', priority: 'High', type: 'Medical', details: 'Dr. Noelle Reid; Integrative family medicine + high-end medical aesthetics.' },
    { name: 'Formula Fig', status: 'New', priority: 'High', type: 'Wellness', details: 'High-tech results-driven immersive skincare; The Culver Steps elite location.' },
  ];

  return (
    <div className="p-6 bg-slate-900 text-white min-h-screen relative">
      <h1 className="text-3xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">Revenue & Lead Intelligence</h1>
      
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <div className="bg-slate-800 p-4 rounded-lg shadow border border-slate-700">
          <h3 className="text-slate-400 text-xs uppercase font-bold tracking-widest mb-1">Total Leads</h3>
          <p className="text-3xl font-mono text-emerald-400">213</p>
        </div>
        <div className="bg-slate-800 p-4 rounded-lg shadow border border-slate-700">
          <h3 className="text-slate-400 text-xs uppercase font-bold tracking-widest mb-1">High Intent</h3>
          <p className="text-3xl font-mono text-blue-400">171</p>
        </div>
        <div className="bg-slate-800 p-4 rounded-lg shadow border border-slate-700">
          <h3 className="text-slate-400 text-xs uppercase font-bold tracking-widest mb-1">Active Campaigns</h3>
          <p className="text-3xl font-mono text-amber-400">73</p>
        </div>
        <div className="bg-slate-800 p-4 rounded-lg shadow border border-slate-700">
          <h3 className="text-slate-400 text-xs uppercase font-bold tracking-widest mb-1">Est. Deal Value</h3>
          <p className="text-3xl font-mono text-purple-400">$532,500</p>
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
                        <p className="text-sm text-slate-100">Scraping Batch 6 (SM/Brentwood)</p>
                        <p className="text-[9px] text-slate-500 font-mono">L.SYNC: 18:51 PM</p>
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
                            <span>38%</span>
                        </div>
                        <div className="w-full bg-slate-700 h-1 rounded-full overflow-hidden">
                            <div className="bg-blue-400 h-full w-[38%]"></div>
                        </div>
                    </div>
                    <div>
                        <div className="flex justify-between text-[10px] font-bold text-slate-400 uppercase mb-1">
                            <span>Santa Monica / Palisades</span>
                            <span>32%</span>
                        </div>
                        <div className="w-full bg-slate-700 h-1 rounded-full overflow-hidden">
                            <div className="bg-emerald-400 h-full w-[32%]"></div>
                        </div>
                    </div>
                    <div>
                        <div className="flex justify-between text-[10px] font-bold text-slate-400 uppercase mb-1">
                            <span>Culver City / Westchester / MDR</span>
                            <span>30%</span>
                        </div>
                        <div className="w-full bg-slate-700 h-1 rounded-full overflow-hidden">
                            <div className="bg-amber-400 h-full w-[30%]"></div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-8">
                <h3 className="text-xs font-black text-slate-500 uppercase tracking-[0.2em] mb-4">Resource Usage</h3>
                <div className="w-full bg-slate-700 h-1.5 rounded-full overflow-hidden mb-2">
                    <div className="bg-blue-500 h-full w-[72%]"></div>
                </div>
                <p className="text-[10px] text-slate-400 font-bold uppercase">Throttle: 50 req/hr (Stable)</p>
            </div>
        </div>
      </div>

      <FleetControl />

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
