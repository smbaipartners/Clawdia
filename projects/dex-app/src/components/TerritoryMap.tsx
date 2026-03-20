export default function TerritoryMap() {
  return (
    <div className="bg-slate-800 p-6 rounded-lg shadow-lg border border-slate-700">
      <h2 className="text-xl font-bold text-white mb-4">Territory Heatmap</h2>
      <div className="h-64 bg-slate-900 rounded border border-slate-700 relative overflow-hidden flex items-center justify-center">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-purple-500 rounded-full mix-blend-screen filter blur-3xl opacity-50 animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-emerald-500 rounded-full mix-blend-screen filter blur-3xl opacity-40 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-48 h-48 bg-blue-500 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-pulse delay-2000"></div>
        
        <div className="z-10 text-center">
          <p className="text-slate-400 text-sm mb-2">Pasadena / San Marino Region</p>
          <div className="flex gap-2 justify-center">
            <span className="px-2 py-1 bg-emerald-500/20 text-emerald-300 rounded text-xs">High Density</span>
            <span className="px-2 py-1 bg-blue-500/20 text-blue-300 rounded text-xs">Growing</span>
          </div>
        </div>
      </div>
    </div>
  );
}
