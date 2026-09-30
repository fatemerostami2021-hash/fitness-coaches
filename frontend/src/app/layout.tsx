import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "کوچ‌هاب | پلتفرم مدیریت مربیان ورزشی و تغذیه",
  description: "تمام ابزارهای مربیگری، مدیریت شاگردان، ساخت برنامه تمرینی و غذایی در یک پلتفرم حرفه‌ای.",
  openGraph: {
    title: "کوچ‌هاب | پلتفرم مدیریت مربیان ورزشی",
    description: "پلتفرم جامع برای مربیان فیتنس، بدنسازی و تغذیه.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body className="antialiased font-sans">
        {children}
      </body>
    </html>
  );
}