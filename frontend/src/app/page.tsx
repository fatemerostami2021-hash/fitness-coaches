import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"
import { Button } from "@/components/ui/Button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card"
import { Users, Calendar, BarChart, MessageSquare, CreditCard, Activity, ArrowLeft, Star } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 to-white py-20 md:py-32">
          <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-block bg-primary-50 text-primary-700 px-4 py-1.5 rounded-full text-sm font-medium">
                پلتفرم مدیریت هوشمند مربیان
              </div>
              <h1 className="text-4xl md:text-6xl font-extrabold text-navy-900 leading-tight">
                تمام ابزارهای مربیگری، <br />
                در یک <span className="text-primary-600">پلتفرم حرفه‌ای</span>
              </h1>
              <p className="text-lg text-slate-600 leading-relaxed max-w-xl">
                مدیریت شاگردان، ساخت برنامه‌های تمرینی و غذایی، پیگیری پیشرفت و افزایش درآمد خود را به ساده‌ترین شکل ممکن تجربه کنید.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <Button size="lg" className="group">
                  شروع رایگان
                  <ArrowLeft className="mr-2 h-5 w-5 transition-transform group-hover:-translate-x-1" />
                </Button>
                <Button size="lg" variant="outline">
                  مشاهده دمو
                </Button>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-500 pt-4">
                <div className="flex">
                  {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-accent-500 text-accent-500" />)}
                </div>
                <span>توسط بیش از ۵۰۰۰ مربی حرفه‌ای استفاده می‌شود</span>
              </div>
            </div>
            
            <div className="relative">
              {/* Mockup Dashboard */}
              <div className="bg-white rounded-2xl shadow-2xl border border-slate-100 p-6 max-w-md mx-auto">
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-100">
                  <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center">
                    <Users className="h-5 w-5 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-navy-900">داشبورد مربی</h3>
                    <p className="text-xs text-slate-500">خلاصه وضعیت امروز</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-slate-50 p-4 rounded-lg">
                    <p className="text-xs text-slate-500 mb-1">شاگردان فعال</p>
                    <p className="text-2xl font-bold text-navy-900">۴۸</p>
                  </div>
                  <div className="bg-slate-50 p-4 rounded-lg">
                    <p className="text-xs text-slate-500 mb-1">درآمد این ماه</p>
                    <p className="text-2xl font-bold text-primary-600">۱۲.۵ م</p>
                  </div>
                </div>
                <div className="bg-navy-50 p-4 rounded-lg">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-navy-800">پیشرفت شاگردان</span>
                    <Activity className="h-4 w-4 text-primary-600" />
                  </div>
                  <div className="w-full bg-white rounded-full h-2.5">
                    <div className="bg-primary-500 h-2.5 rounded-full" style={{ width: "75%" }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">هر آنچه برای مدیریت کسب‌وکار خود نیاز دارید</h2>
              <p className="text-slate-600 max-w-2xl mx-auto">ابزارهای حرفه‌ای برای رشد و مدیریت بهتر شاگردان</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { icon: Users, title: "مدیریت شاگردان", desc: "پروفایل اختصاصی برای هر شاگرد و دسته‌بندی آسان" },
                { icon: Calendar, title: "ساخت برنامه تمرینی", desc: "ایجاد برنامه‌های روزانه و هفتگی با چند کلیک" },
                { icon: BarChart, title: "گزارش پیشرفت", desc: "نمودارهای دقیق از تغییرات وزن و حجم" },
                { icon: MessageSquare, title: "پیام‌رسانی داخلی", desc: "ارتباط مستقیم با شاگردان بدون نیاز به تلگرام یا واتساپ" },
                { icon: CreditCard, title: "مدیریت پرداخت", desc: "ثبت و پیگیری سفارش‌ها و برنامه‌های مالی" },
                { icon: Activity, title: "برنامه غذایی", desc: "طراحی رژیم‌های تغذیه‌ای متناسب با اهداف شاگرد" }
              ].map((feature, index) => (
                <Card key={index} className="hover:border-primary-200 transition-colors">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-xl bg-primary-50 flex items-center justify-center mb-2">
                      <feature.icon className="h-6 w-6 text-primary-600" />
                    </div>
                    <CardTitle className="text-lg">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 text-sm leading-relaxed">{feature.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-navy-900 text-white">
          <div className="container mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "+۵۰۰۰", label: "مربیان فعال" },
              { value: "+۵۰،۰۰۰", label: "شاگردان مدیریت‌شده" },
              { value: "+۱۲۰ هزار", label: "برنامه ساخته‌شده" },
              { value: "۹۸٪", label: "رضایت کاربران" }
            ].map((stat, i) => (
              <div key={i}>
                <div className="text-4xl md:text-5xl font-extrabold text-primary-500 mb-2">{stat.value}</div>
                <div className="text-slate-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}