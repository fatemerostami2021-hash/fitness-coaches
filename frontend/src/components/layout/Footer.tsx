import Link from "next/link"
import { Dumbbell, Instagram, Twitter, Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-navy-900 text-slate-300 mt-20">
      <div className="container mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="space-y-4">
          <div className="flex items-center gap-2 font-bold text-xl text-white">
            <Dumbbell className="h-6 w-6 text-primary-500" />
            <span>کوچ‌هاب</span>
          </div>
          <p className="text-sm leading-relaxed text-slate-400">
            پلتفرم جامع مدیریت مربیان ورزشی، متخصصان تغذیه و شاگردان.
          </p>
        </div>
        
        <div>
          <h4 className="font-semibold text-white mb-4">پلتفرم</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/features" className="hover:text-primary-500">امکانات</Link></li>
            <li><Link href="/pricing" className="hover:text-primary-500">قیمت‌گذاری</Link></li>
            <li><Link href="/coaches" className="hover:text-primary-500">مربیان</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-white mb-4">پشتیبانی</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/contact" className="hover:text-primary-500">تماس با ما</Link></li>
            <li><Link href="/faq" className="hover:text-primary-500">سوالات متداول</Link></li>
            <li><Link href="/blog" className="hover:text-primary-500">بلاگ</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-white mb-4">ما را دنبال کنید</h4>
          <div className="flex gap-4">
            <a href="#" className="bg-navy-700 p-2 rounded-lg hover:bg-primary-600 transition-colors"><Instagram className="h-5 w-5" /></a>
            <a href="#" className="bg-navy-700 p-2 rounded-lg hover:bg-primary-600 transition-colors"><Twitter className="h-5 w-5" /></a>
            <a href="#" className="bg-navy-700 p-2 rounded-lg hover:bg-primary-600 transition-colors"><Linkedin className="h-5 w-5" /></a>
          </div>
        </div>
      </div>
      <div className="border-t border-navy-700 py-4 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} کوچ‌هاب. تمامی حقوق محفوظ است.
      </div>
    </footer>
  )
}