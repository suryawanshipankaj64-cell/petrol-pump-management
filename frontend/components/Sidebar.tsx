'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  LayoutDashboard, 
  FileText, 
  Fuel, 
  Users, 
  BarChart3, 
  Bell,
  LogOut 
} from 'lucide-react';

const sidebarNav = [
  { href: '/dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { href: '/bills', label: 'Billing', icon: FileText },
  { href: '/fuel', label: 'Fuel Stock', icon: Fuel },
  { href: '/employees', label: 'Employees', icon: Users },
  { href: '/customers', label: 'Customers', icon: Users },
  { href: '/reports', label: 'Reports', icon: BarChart3 },
  { href: '/notifications', label: 'Notifications', icon: Bell },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="w-64 bg-dark-surface/80 backdrop-blur-lg border-r border-dark-border h-screen p-6 sticky top-0">
      <div className="mb-12">
        <div className="text-2xl font-bold bg-gradient-to-r from-primary-500 to-blue-600 bg-clip-text text-transparent mb-2">
          ⛽ PetrolPro
        </div>
        <p className="text-dark-muted text-sm">Fuel Management System</p>
      </div>

      <nav className="space-y-2">
        {sidebarNav.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;
          
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`sidebar-link ${isActive ? 'bg-primary-500/20 text-primary-400 border-r-2 border-primary-500' : ''}`}
            >
              <Icon size={20} />
              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>

      <div className="absolute bottom-6 w-full">
        <button className="sidebar-link w-full text-left">
          <LogOut size={20} />
          <span>Logout</span>
        </button>
      </div>
    </div>
  );
}

