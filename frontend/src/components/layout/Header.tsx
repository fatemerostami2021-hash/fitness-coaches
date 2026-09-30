"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X, Dumbbell } from "lucide-react"
import { Button } from "@/components/ui/Button"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { title: "صفحه اصلی", href: "/" },
    { title: "امکانات", href: "/features" },
    { title: "مربیان", href: "/coaches" },
    { title: "قیمت‌گذاری", href: "/pricing" },
    { title: "بلاگ", href: "/blog" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-slate-200">
      <div className="container mx-auto px-4 flex h-16 items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 font-bold text-xl text-navy-900">
          <Dumbbell className="h-6 w-6 text-primary-500" />
          <span>کوچ‌هاب</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="text-sm font-medium text-slate-600 hover:text-primary-600 transition-colors">
              {link.title}
            </Link>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-4">
          <Link href="/login" className="text-sm font-medium text-slate-600 hover:text-navy-900">
            ورود
          </Link>
          <Button size="sm" asChild>
            <Link href="/register">شروع رایگان</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden absolute top-16 right-0 w-full h-[calc(100vh-4rem)] bg-white border-t border-slate-200 p-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link 
              key={link.href} 
              href={link.href} 
              className="text-lg font-medium text-slate-700 py-2 border-b border-slate-100"
              onClick={() => setIsOpen(false)}
            >
              {link.title}
            </Link>
          ))}
          <div className="flex flex-col gap-2 mt-4">
            <Button variant="outline" asChild>
              <Link href="/login">ورود</Link>
            </Button>
            <Button asChild>
              <Link href="/register">ثبت‌نام رایگان</Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}