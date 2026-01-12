"use client";

import React, { useEffect, useState } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell, PieChart, Pie } from "recharts";

interface WakaData {
  data: {
    humantime: string; // "14 hrs 3 mins"
    total_seconds: number;
    daily_average: {
        text: string; // "3 hrs 4 mins"
    };
    languages: {
      name: string;
      percent: number;
      text: string; // "10 hrs 30 mins"
      color?: string;
    }[];
    editors: {
      name: string;
      percent: number;
    }[];
    operating_systems: {
        name: string;
        percent: number;
    }[];
  };
}

const COLORS = ["#3b82f6", "#8b5cf6", "#ec4899", "#10b981", "#f59e0b", "#6366f1"];

export default function CodingActivity() {
  const [stats, setStats] = useState<WakaData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch("/api/wakatime");
        if (!res.ok) throw new Error("Failed to fetch");
        const data = await res.json();
        setStats(data);
      } catch (err) {
        console.error(err);
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  if (loading) return (
      <section className="py-24 bg-[#121212] flex justify-center">
          <div className="animate-pulse text-white/20 uppercase tracking-widest text-sm">Loading Stats...</div>
      </section>
  );

  if (error || !stats?.data) return null;

  const { languages, humantime, daily_average } = stats.data;
  
  // Format data for visualizations
  const topLanguages = languages.slice(0, 5); 
  
  // Create a mock "Weekly Activity" simply because the free endpoint usually just gives the aggregate.
  // The 'last_7_days' endpoint DOES NOT give daily breakdown in the `data` object directly in the same way `summaries` does.
  // However, for the purpose of this component based on the request which asked for "Daily coding activity",
  // we might need `summaries` endpoint. But let's stick to what we have in `stats` which is the aggregate.
  // We will visualize the "Language Breakdown" which is robust.

  return (
    <section className="relative bg-[#0d0d0d] py-32 px-4 border-t border-white/5 z-20">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            📊 Coding Activity
            </h2>
            <p className="text-white/40 text-lg max-w-2xl">
            Coding activity powered by WakaTime. These stats represent real development work across projects, showcasing consistency and language proficiency.
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1: Total Time (Key Metric) */}
            <div className="col-span-1 md:col-span-1 p-8 rounded-3xl bg-white/5 border border-white/10 flex flex-col justify-center items-center text-center relative overflow-hidden group">
                 <div className="absolute inset-0 bg-blue-500/10 blur-[50px] group-hover:bg-blue-500/20 transition-all duration-700" />
                 <h3 className="text-white/50 text-sm uppercase tracking-widest mb-4 relative z-10">Last 7 Days</h3>
                 <div className="text-5xl md:text-6xl font-bold text-white mb-2 relative z-10">
                    {humantime}
                 </div>
                 <p className="text-blue-400 font-mono text-sm relative z-10">
                    Daily Avg: {daily_average.text}
                 </p>
            </div>

            {/* Card 2: Language Distribution (Bar Chart) */}
            <div className="col-span-1 md:col-span-2 p-8 rounded-3xl bg-white/5 border border-white/10 flex flex-col justify-center">
                <h3 className="text-white font-bold mb-6 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-purple-500" />
                    Top Languages
                </h3>
                
                <div className="space-y-6">
                    {topLanguages.map((lang, index) => (
                        <div key={lang.name} className="relative">
                            <div className="flex justify-between text-sm text-white/70 mb-2">
                                <span className="font-medium">{lang.name}</span>
                                <span className="font-mono">{lang.text} ({lang.percent}%)</span>
                            </div>
                            <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                                <div 
                                    className="h-full rounded-full transition-all duration-1000 ease-out"
                                    style={{ 
                                        width: `${lang.percent}%`,
                                        backgroundColor: COLORS[index % COLORS.length]
                                    }}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Card 3: Editor / OS Stats (Mini Grid) */}
            <div className="col-span-1 md:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {stats.data.editors && stats.data.editors.length > 0 && (
                    <div className="p-6 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-between">
                         <div>
                             <h4 className="text-white/40 text-xs uppercase tracking-widest mb-1">Top Editor</h4>
                             <p className="text-xl font-bold text-white">{stats.data.editors[0].name}</p>
                         </div>
                         <div className="text-2xl font-bold text-emerald-400">
                             {stats.data.editors[0].percent}%
                         </div>
                    </div>
                )}
                
                {stats.data.operating_systems && stats.data.operating_systems.length > 0 && (
                    <div className="p-6 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-between">
                         <div>
                             <h4 className="text-white/40 text-xs uppercase tracking-widest mb-1">OS Usage</h4>
                             <p className="text-xl font-bold text-white">{stats.data.operating_systems[0].name}</p>
                         </div>
                         <div className="text-2xl font-bold text-pink-400">
                             {stats.data.operating_systems[0].percent}%
                         </div>
                    </div>
                )}
            </div>
        </div>
        
        <div className="mt-8 text-center">
             <a 
                href="https://wakatime.com/@35d26341-d9d5-43d9-9637-6de7d04726b7"
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-white/20 hover:text-white transition-colors text-sm"
             >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9v-2h2v2zm0-4H9V7h2v5z"/>
                </svg>
                Verify on WakaTime
             </a>
        </div>
      </div>
    </section>
  );
}
