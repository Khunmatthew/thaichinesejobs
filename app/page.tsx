import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { JobCard } from "@/components/JobCard"
import Link from "next/link"

export default function ThaiChineseJobsLanding() {
  const featuredJobs = [
    { id: "1", title: "行政经理 / Office Manager", company: "深圳科技（泰国）有限公司", location: "曼谷 - 素坤逸", salary: "45,000 - 65,000 THB", chineseLevel: "流利", visaSupport: true, isFeatured: true },
    { id: "2", title: "财务主管 / Finance Supervisor", company: "华南贸易（泰国）有限公司", location: "曼谷 - 拉玛9", salary: "55,000 - 80,000 THB", chineseLevel: "商务流利", visaSupport: true, isFeatured: true }
  ]

  return (
    <div className="min-h-screen bg-white">
      <nav className="border-b bg-white/95 backdrop-blur sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-[#0A2540] rounded-xl flex items-center justify-center"><span className="text-white font-bold text-xl">TC</span></div>
            <div><div className="font-semibold text-xl tracking-tight">ThaiChineseJobs</div><div className="text-[10px] text-muted-foreground -mt-1">泰中招聘 · TaiguoHR</div></div>
          </div>
          <div className="flex items-center gap-4 text-sm">
            <Link href="/jobs" className="hover:text-[#0A2540] transition">浏览职位</Link>
            <Link href="/pricing" className="hover:text-[#0A2540] transition">定价</Link>
            <Link href="/post-job" className="hover:text-[#0A2540] transition">发布职位</Link>
            <Button asChild variant="outline" size="sm"><Link href="/dashboard/employer">企业登录</Link></Button>
            <Button asChild size="sm" className="bg-[#0A2540] hover:bg-[#0A2540]/90"><Link href="/post-job">免费发布职位</Link></Button>
          </div>
        </div>
      </nav>

      <section className="max-w-7xl mx-auto px-6 pt-16 pb-20">
        <div className="max-w-4xl">
          <Badge className="mb-4 bg-teal-100 text-teal-700 hover:bg-teal-100">2026 中国企业泰国落地首选平台</Badge>
          <h1 className="text-6xl font-semibold tracking-tighter leading-[1.05] text-[#0A2540]">帮中国老板在泰国<br />快速找到靠谱的双语人才</h1>
          <p className="mt-6 text-xl text-muted-foreground max-w-2xl">专注中泰双语关键岗位 · AI 智能匹配 · 3 分钟发布职位 · 直达优质候选人</p>
          <div className="flex gap-4 mt-10">
            <Button size="lg" className="h-14 px-8 text-base bg-[#0A2540] hover:bg-[#0A2540]/90" asChild><Link href="/post-job">立即免费发布职位</Link></Button>
            <Button size="lg" variant="outline" className="h-14 px-8 text-base" asChild><Link href="/jobs">浏览最新职位</Link></Button>
          </div>
        </div>
      </section>
    </div>
  )
}