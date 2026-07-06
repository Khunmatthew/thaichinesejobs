'use client'
import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
export default function SeekerDashboard() {
  const [profile, setProfile] = useState({ fullName: '张明', chineseLevel: '流利', thaiLevel: '良好', location: '曼谷', experience: 4 })
  const [applications] = useState([
    { id: '1', jobTitle: '行政经理', company: '深圳科技（泰国）', status: 'PENDING', date: '2026-07-05' },
    { id: '2', jobTitle: '销售经理', company: '浙江新能源', status: 'INTERVIEW', date: '2026-07-02' }
  ])
  return (
    <div className="max-w-5xl mx-auto px-6 py-10">
      <div className="flex justify-between items-center mb-8"><h1 className="text-3xl font-semibold tracking-tight">求职者后台</h1><Button variant="outline" asChild><Link href="/jobs">浏览更多职位</Link></Button></div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-1"><Card><CardHeader><CardTitle>我的资料</CardTitle></CardHeader><CardContent className="space-y-4"><div><Label>姓名</Label><Input value={profile.fullName} onChange={e => setProfile({...profile, fullName: e.target.value})} /></div><Button className="w-full mt-4">保存资料</Button></CardContent></Card></div>
        <div className="lg:col-span-2"><Tabs defaultValue="applications"><TabsList><TabsTrigger value="applications">我的申请</TabsTrigger><TabsTrigger value="recommendations">AI 推荐</TabsTrigger></TabsList><TabsContent value="applications"><div className="space-y-4">{applications.map(app => <Card key={app.id}><CardContent className="flex justify-between items-center p-5"><div><div className="font-semibold">{app.jobTitle}</div><div className="text-sm text-muted-foreground">{app.company}</div></div><Badge>{app.status}</Badge></CardContent></Card>)}</div></TabsContent></Tabs></div></div>
      </div>
    </div>
  )
}