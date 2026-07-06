import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

const plans = [
  { name: "免费版", price: "0", period: "永久", description: "适合测试和少量招联需求", features: ["每月发布 3 个职位", "基础职位展示", "候选人申请查看"], cta: "立即开始使用", popular: false },
  { name: "专业版", price: "2,990", period: "月", description: "适合活跃招联的中国企业", features: ["无限职位发布", "精选职位推荐", "AI 智能匹配", "优先客服支持"], cta: "选择专业版", popular: true },
  { name: "企业版", price: "9,900", period: "月", description: "适合需要持续招联或代招服务", features: ["专业版全部功能", "专属招联顾问", "批量职位发布", "背景调查服务"], cta: "联系销售", popular: false }
]
export default function PricingPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <div className="text-center mb-12">
        <Badge className="mb-4 bg-teal-100 text-teal-700">简单透明的价格</Badge>
        <h1 className="text-5xl font-semibold tracking-tight text-[#0A2540]">选择适合你的方案</h1>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {plans.map((plan, index) => (
          <Card key={index} className={`relative flex flex-col ${plan.popular ? 'border-[#0A2540] shadow-xl scale-[1.02]' : ''}`}>
            {plan.popular && <div className="absolute -top-3 left-1/2 -translate-x-1/2"><Badge className="bg-[#0A2540] text-white">最受欢迎</Badge></div>}
            <CardHeader><CardTitle className="text-2xl">{plan.name}</CardTitle><div className="mt-4 flex items-baseline"><span className="text-5xl font-semibold tracking-tight">฿{plan.price}</span><span className="text-muted-foreground ml-1">/ {plan.period}</span></div></CardHeader>
            <CardContent className="flex-1 flex flex-col"><ul className="space-y-3 text-sm flex-1">{plan.features.map((f,i) => <li key={i}>✓ {f}</li>)}</ul><Button className={`mt-8 w-full ${plan.popular ? 'bg-[#0A2540]' : ''}`} asChild><Link href="/post-job">{plan.cta}</Link></Button></CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}