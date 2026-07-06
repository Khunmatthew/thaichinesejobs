'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Card, CardContent } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Checkbox } from '@/components/ui/checkbox'
import { useRouter } from 'next/navigation'

export default function PostJobPage() {
  const router = useRouter()
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState({ title: '', company: '', location: '', industry: '', description: '', salaryMin: '', salaryMax: '', chineseRequired: '流利', visaSupport: false })

  const updateForm = (field: string, value: any) => setFormData(prev => ({ ...prev, [field]: value }))
  const nextStep = () => setCurrentStep(currentStep + 1)
  const prevStep = () => setCurrentStep(currentStep - 1)

  const handleSubmit = async () => {
    // TODO: Connect to Supabase
    alert('职位发布成功！（演示模式）')
    router.push('/jobs')
  }

  return (
    <div className="min-h-screen bg-[#F8FAFC] py-10">
      <div className="max-w-3xl mx-auto px-6">
        <h1 className="text-4xl font-semibold tracking-tight text-[#0A2540] mb-8">发布新职位</h1>
        <Card>
          <CardContent className="p-8">
            {currentStep === 1 && (
              <div className="space-y-6">
                <div><Label>职位名称</Label><Input value={formData.title} onChange={e => updateForm('title', e.target.value)} className="mt-2" /></div>
                <div><Label>公司名称</Label><Input value={formData.company} onChange={e => updateForm('company', e.target.value)} className="mt-2" /></div>
                <div><Label>工作地点</Label><Input value={formData.location} onChange={e => updateForm('location', e.target.value)} className="mt-2" /></div>
              </div>
            )}
            {currentStep === 2 && (
              <div><Label>职位描述</Label><Textarea value={formData.description} onChange={e => updateForm('description', e.target.value)} rows={6} className="mt-2" /></div>
            )}
            {currentStep === 3 && (
              <div className="space-y-4">
                <div><Label>月薪下限</Label><Input type="number" value={formData.salaryMin} onChange={e => updateForm('salaryMin', e.target.value)} className="mt-2" /></div>
                <div className="flex items-center gap-3 pt-4"><Checkbox checked={formData.visaSupport} onCheckedChange={checked => updateForm('visaSupport', checked)} /><Label>支持工作签证</Label></div>
              </div>
            )}
            {currentStep === 4 && <div className="text-center py-8">预览页面（开发中）</div>}
          </CardContent>
          <div className="flex justify-between border-t p-6">
            <Button variant="outline" onClick={prevStep} disabled={currentStep === 1}>上一步</Button>
            {currentStep < 4 ? <Button onClick={nextStep} className="bg-[#0A2540]">下一步</Button> : <Button onClick={handleSubmit} className="bg-[#0A2540]">确认发布</Button>}
          </div>
        </Card>
      </div>
    </div>
  )
}