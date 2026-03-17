import { Scan, Database, Shield, BarChart3 } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6 text-center">
      <div className="max-w-md w-full space-y-8">
        <header className="space-y-2">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-6xl text-white">DEX</h1>
          <p className="text-zinc-400">Batch Array Vision Protocol v1.0</p>
        </header>

        <div className="grid grid-cols-1 gap-4 py-8">
          <div className="p-4 border border-zinc-800 rounded-lg flex items-center space-x-4 bg-zinc-950/50 hover:border-zinc-700 transition-colors">
            <Scan className="w-6 h-6 text-blue-500" />
            <div className="text-left">
              <h3 className="font-semibold text-sm text-zinc-100 uppercase tracking-wider">Scanner</h3>
              <p className="text-xs text-zinc-500">Multi-boundary grid detection active.</p>
            </div>
          </div>
          
          <div className="p-4 border border-zinc-800 rounded-lg flex items-center space-x-4 bg-zinc-950/50 hover:border-zinc-700 transition-colors">
            <Database className="w-6 h-6 text-green-500" />
            <div className="text-left">
              <h3 className="font-semibold text-sm text-zinc-100 uppercase tracking-wider">Lead Database</h3>
              <p className="text-xs text-zinc-500">203 medical practices synced from MedScout.</p>
            </div>
          </div>

          <Link href="/revenue" className="p-4 border border-zinc-800 rounded-lg flex items-center space-x-4 bg-zinc-950/50 hover:border-blue-900/50 hover:bg-blue-950/10 transition-all group">
            <BarChart3 className="w-6 h-6 text-yellow-500 group-hover:scale-110 transition-transform" />
            <div className="text-left">
              <h3 className="font-semibold text-sm text-zinc-100 uppercase tracking-wider">Revenue Intelligence</h3>
              <p className="text-xs text-zinc-500">Live dashboard and MedLeads integration.</p>
            </div>
          </Link>
        </div>

        <button className="w-full py-4 px-6 bg-zinc-100 text-black font-bold rounded-md hover:bg-white active:scale-[0.98] transition-all uppercase tracking-widest text-sm">
          Initialize Scanner
        </button>
      </div>
    </main>
  );
}
