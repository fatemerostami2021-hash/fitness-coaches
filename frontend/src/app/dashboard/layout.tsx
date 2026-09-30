"use client"

import Link from "next/link"
import { useState } from "react"
import { Dumbbell, Home, Users, Calendar, BarChart, Settings, Menu, X, Bell, Search } from "lucide-react"

const navItems = [
  { title: "داشبورد", href: "/dashboard", icon: Home },
  { title: "شاگردان", href: "/dashboard/students", icon: Users },
  { title: "برنامه‌ها", href: "/dashboard/plans", icon: Calendar },
  { title: "پیشرفت", href: "/dashboard/progress", icon: BarChart },
  { title: "تنظیمات", href: "/dashboard/settings", icon: Settings },
]

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="min-h-screen bg-slate-50 flex">
      {/* Sidebar */}
      <aside className={`fixed md:static inset-y-0 right-0 z-50 w-64 bg-navy-900 text-white p-6 space-y-8 transform transition-transform md:translate-x-0 ${sidebarOpen ? "translate-x-0" : "translate-x-full"}`}>
        <div className="flex items-center gap-2 font-bold text-xl text-white">
          <Dumbbell className="h-6 w-6 text-primary-500" />
          <span>کوچ‌هاب</span>
          <button className="md:hidden mr-auto" onClick={() => setSidebarOpen(false)}>
            <X className="h-6 w-6" />
          </button>
        </div>
        
        <nav className="flex flex-col gap-2">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-navy-800 text-slate-300 hover:text-white transition-colors">
              <item.icon className="h-5 w-5" />
              {item.title}
            </Link>
          ))}
        </nav>
      </aside>

      {/* Overlay for mobile */}
      {sidebarOpen && <div className="fixed inset-0 bg-black/50 z-40 md:hidden" onClick={() => setSidebarOpen(false)} />}

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-h-screen">
        <header className="bg-white h-16 border-b border-slate-200 flex items-center justify-between px-6">
          <button className="md:hidden p-2" onClick={() => setSidebarOpen(true)}>
            <Menu className="h-6 w-6" />
          </button>
          <div className="relative w-64 hidden md:block">
            <Search className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
            <input type="text" placeholder="جستجو..." className="w-full bg-slate-100 pr-9 pl-3 py-2 rounded-lg text-sm focus:outline-none" />
          </div>
          <div className="flex items-center gap-4">
            <button className="relative">
              <Bell className="h-6 w-6 text-slate-600" />
              <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-accent-500"></span>
            </button>
            <div className="w-10 h-10 rounded-full bg-primary-500 text-white flex items-center justify-center font-bold">
              ع
            </div>
          </div>
        </header>

        <main className="flex-1 p-6 overflow-auto">
          {children}
        </main>
      </div>
    </div>
  )
}