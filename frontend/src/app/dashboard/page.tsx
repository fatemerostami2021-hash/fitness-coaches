import { Users, Calendar, Wallet, Activity } from "lucide-react"
import Link from "next/link"

const stats = [
  { title: "شاگردان فعال", value: "۴۸", icon: Users, color: "bg-primary-100 text-primary-600" },
  { title: "برنامه‌های فعال", value: "۱۲", icon: Calendar, color: "bg-blue-100 text-blue-600" },
  { title: "درآمد این ماه", value: "۱۸.۵ م", icon: Wallet, color: "bg-purple-100 text-purple-600" },
  { title: "درخواست‌های جدید", value: "۵", icon: Activity, color: "bg-accent-100 text-accent-600" }
]

const recentStudents = [
  { name: "علی رضایی", goal: "افزایش وزن", status: "فعال" },
  { name: "مریم احمدی", goal: "کاهش وزن", status: "فعال" },
  { name: "سینا کریمی", goal: "عضله‌سازی", status: "در انتظار" },
]

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-navy-900">خلاصه وضعیت</h1>
        <p className="text-slate-500 mt-1">به داشبورد مدیریت خود خوش آمدید</p>
      </div>

      {/* Stat Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <div key={i} className="bg-white rounded-2xl border border-slate-100 p-6 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <div className={`w-12 h-12 rounded-xl ${stat.color} flex items-center justify-center`}>
                <stat.icon className="h-6 w-6" />
              </div>
            </div>
            <div className="text-3xl font-bold text-navy-900">{stat.value}</div>
            <div className="text-slate-500 text-sm mt-1">{stat.title}</div>
          </div>
        ))}
      </div>

      {/* Recent Students & Quick Actions */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white rounded-2xl border border-slate-100 p-6 shadow-sm">
          <h2 className="text-lg font-bold text-navy-900 mb-4">آخرین شاگردان</h2>
          <div className="space-y-4">
            {recentStudents.map((student, i) => (
              <div key={i} className="flex items-center justify-between p-4 bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-navy-900 text-white flex items-center justify-center">
                    {student.name[0]}
                  </div>
                  <div>
                    <div className="font-medium text-navy-900">{student.name}</div>
                    <div className="text-xs text-slate-500">{student.goal}</div>
                  </div>
                </div>
                <span className={`px-3 py-1 rounded-full text-xs ${student.status === "فعال" ? "bg-primary-100 text-primary-700" : "bg-accent-100 text-accent-700"}`}>
                  {student.status}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-navy-900 rounded-2xl p-6 text-white shadow-lg">
          <h2 className="text-lg font-bold mb-2">نمودار پیشرفت ماهانه</h2>
          <p className="text-slate-400 text-sm mb-6">میانگین پیشرفت شاگردان شما در ۳۰ روز گذشته</p>
          
          {/* Simple CSS Chart Mockup */}
          <div className="flex items-end gap-2 h-40 mb-4">
            {[40, 65, 50, 80, 70, 95, 85].map((h, i) => (
              <div key={i} className="flex-1 bg-primary-500/20 rounded-t-lg" style={{height: "100%"}}>
                <div className="bg-primary-500 rounded-t-lg" style={{height: `${h}%`}}></div>
              </div>
            ))}
          </div>
          
          <Link href="/dashboard/students" className="block text-center w-full bg-primary-500 py-2.5 rounded-lg font-medium hover:bg-primary-600 transition-colors">
            مدیریت شاگردان
          </Link>
        </div>
      </div>
    </div>
  )
}