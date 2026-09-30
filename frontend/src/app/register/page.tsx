"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/Button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card"
import { User, Mail, Lock } from "lucide-react"

export default function RegisterPage() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [role, setRole] = useState<"COACH" | "STUDENT">("STUDENT")
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError("")

    try {
      const res = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password, role }),
      })
      const data = await res.json()
      
      if (!res.ok) throw new Error(data.error || "خطا در ثبت‌نام")
      
      localStorage.setItem("token", data.token)
      localStorage.setItem("user", JSON.stringify(data.user))
      
      router.push("/dashboard")
    } catch (err: any) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl">ایجاد حساب کاربری</CardTitle>
        </CardHeader>
        <CardContent>
          {/* Role Selector */}
          <div className="grid grid-cols-2 gap-2 mb-6 bg-slate-100 p-2 rounded-lg">
            <button
              type="button"
              onClick={() => setRole("STUDENT")}
              className={`py-2 rounded-md text-sm font-medium transition-colors ${role === "STUDENT" ? "bg-white shadow text-navy-900" : "text-slate-500"}`}
            >
              شاگرد
            </button>
            <button
              type="button"
              onClick={() => setRole("COACH")}
              className={`py-2 rounded-md text-sm font-medium transition-colors ${role === "COACH" ? "bg-white shadow text-navy-900" : "text-slate-500"}`}
            >
              مربی
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-700">نام و نام خانوادگی</label>
              <div className="relative">
                <User className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full pr-10 pl-3 py-2.5 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:border-primary-500"
                  placeholder="نام خود را وارد کنید"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-700">ایمیل</label>
              <div className="relative">
                <Mail className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pr-10 pl-3 py-2.5 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:border-primary-500"
                  placeholder="example@mail.com"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-700">رمز عبور</label>
              <div className="relative">
                <Lock className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pr-10 pl-3 py-2.5 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:border-primary-500"
                  placeholder="حداقل ۶ کاراکتر"
                />
              </div>
            </div>

            {error && <div className="text-sm text-red-500 bg-red-50 p-3 rounded-lg">{error}</div>}

            <Button type="submit" disabled={loading} className="w-full">
              {loading ? "در حال ثبت‌نام..." : "ثبت‌نام"}
            </Button>
          </form>
          
          <p className="text-center text-sm text-slate-500 mt-6">
            قبلاً ثبت‌نام کرده‌اید؟ <Link href="/login" className="text-primary-600 font-medium">ورود کنید</Link>
          </p>
        </CardContent>
      </Card>
    </div>
  )
}