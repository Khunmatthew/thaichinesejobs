import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'

export default function JobDetailPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-10">
      <Link href="/jobs" className="text-sm text-muted-foreground hover:text-[#0A2540]">← 返回职位列表</Link>
      <div className="mt-6">
        <h1 className="text-4xl font-semibold tracking-tight text-[#0A2540]">行政经理 / Office Manager</h1>
        <p className="text-xl text-muted-foreground mt-1">深圳科技（泰国）有限公司</p>
      </div>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2">
          <Card>
            <CardContent className="p-8">
              <h3 className="font-semibold text-lg mb-4">职位描述</h3>
              <div className="prose prose-sm max-w-none">
                <p>岗位职责：<br />• 负责泰国工厂/办公室日常行政管理工作<br />• 协调中泰双方团队沟通<br />• 管理行政团队（5-8人）</p>
              </div>
            </CardContent>
          </Card>
        </div>
        <div>
          <Card>
            <CardContent className="p-6 space-y-4 text-sm">
              <div className="flex justify-between"><span className="text-muted-foreground">月薪</span> <span className="font-medium">45,000 - 65,000 THB</span></div>
              <div className="flex justify-between"><span className="text-muted-foreground">工作地点</span> <span>曼谷 - 素坤逸</span></div>
              <div className="flex justify-between"><span className="text-muted-foreground">中文要求</span> <span className="font-medium text-teal-600">流利</span></div>
              <Button className="w-full mt-4 bg-[#0A2540]">立即申请此职位</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}