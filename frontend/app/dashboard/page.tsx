'use client';

// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

import { BarChart3, DollarSign, Fuel, TrendingUp } from 'lucide-react';

const stats = [
  { title: "Total Revenue", value: "₹2,45,680", change: "+12.5%", icon: DollarSign },
  { title: "Total Transactions", value: "1,247", change: "+8.3%", icon: TrendingUp },
  { title: "Fuel Sold (L)", value: "12,450", change: "-2.1%", icon: Fuel },
];

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <h1 className="text-3xl font-bold">Dashboard</h1>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((stat, index) => (
          <div key={index} className="card hover:shadow-2xl transition-all">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-primary-500/10 rounded-xl">
                <stat.icon className="w-6 h-6 text-primary-500" />
              </div>
              <div>
                <p className="text-dark-muted text-sm">{stat.title}</p>
                <p className="text-2xl font-bold text-dark-text">{stat.value}</p>
                <p className="text-sm {stat.change.startsWith('+') ? 'text-green-400' : 'text-red-400'}">
                  {stat.change} from last month
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="card">
          <div className="p-6">
            <h3 className="text-xl font-bold mb-2">Revenue Trend</h3>
            <p className="text-sm text-gray-500 mb-4">Last 30 days</p>
            {/* Chart placeholder */}
            <div className="h-64 bg-slate-800/50 rounded-xl flex items-center justify-center">
              <p className="text-gray-400">📈 Chart.js integration coming</p>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="p-6">
            <h3 className="text-xl font-bold mb-2">Fuel Distribution</h3>
            <p className="text-sm text-gray-500 mb-4">By type</p>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span>Petrol</span>
                <span className="font-medium">62%</span>
              </div>
              <div className="w-full bg-slate-800 rounded-full h-2">
                <div className="bg-primary-500 h-2 rounded-full" style={{width: '62%'}}></div>
              </div>
              <div className="flex justify-between">
                <span>Diesel</span>
                <span className="font-medium">38%</span>
              </div>
              <div className="w-full bg-slate-800 rounded-full h-2">
                <div className="bg-orange-500 h-2 rounded-full" style={{width: '38%'}}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

