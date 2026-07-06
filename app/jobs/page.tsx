'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'
import { JobCard } from '@/components/JobCard'

interface Job {
  id: string
  title: string
  company: string
  location: string
  salary: string
  salaryMin: number
  salaryMax: number
  chineseLevel: string
  visaSupport: boolean
  industry: string
  jobType: string
  experienceLevel: string
  isFeatured?: boolean
}

const mockJobs: Job[] = [
  { id: "1", title: "行政经理 / Office Manager", company: "深圳科技（泰国）有限公司", location: "曼谷 - 素坤逸", salary: "45,000 - 65,000 THB", salaryMin: 45000, salaryMax: 65000, chineseLevel: "流利", visaSupport: true, industry: "制造业", jobType: "全职", experienceLevel: "5年以上", isFeatured: true },
  { id: "2", title: "财务主管 / Finance Supervisor", company: "华南贸易（泰国）有限公司", location: "曼谷 - 拉玛9", salary: "55,000 - 80,000 THB", salaryMin: 55000, salaryMax: 80000, chineseLevel: "商务流利", visaSupport: true, industry: "贸易", jobType: "全职", experienceLevel: "3-5年" },
  { id: "3", title: "TikTok 运营专员", company: "广州跨境电商（泰国）有限公司", location: "曼谷 - 吞武里", salary: "28,000 - 42,000 THB", salaryMin: 28000, salaryMax: 42000, chineseLevel: "基础", visaSupport: false, industry: "电商", jobType: "全职", experienceLevel: "1-3年" }
]

const locations = ["曼谷 - 素坤逸", "曼谷 - 拉玛9", "曼谷 - 拉差达", "曼谷 - 吞武里", "曼谷 - 诗娜卡琳", "清迈", "芭提雅"]
const industries = ["制造业", "贸易", "电商", "新能源", "服务业", "房地产", "科技"]
const chineseLevels = ["基础", "商务", "流利", "母语级"]

export default function JobsPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedLocations, setSelectedLocations] = useState<string[]>([])
  const [selectedIndustries, setSelectedIndustries] = useState<string[]>([])
  const [selectedChineseLevels, setSelectedChineseLevels] = useState<string[]>([])
  const [visaOnly, setVisaOnly] = useState(false)

  const filteredJobs = mockJobs.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) || job.company.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesLocation = selectedLocations.length === 0 || selectedLocations.includes(job.location)
    const matchesIndustry = selectedIndustries.length === 0 || selectedIndustries.includes(job.industry)
    const matchesChinese = selectedChineseLevels.length === 0 || selectedChineseLevels.includes(job.chineseLevel)
    const matchesVisa = !visaOnly || job.visaSupport
    return matchesSearch && matchesLocation && matchesIndustry && matchesChinese && matchesVisa
  })

  const toggleFilter = (value: string, setState: React.Dispatch<React.SetStateAction<string[]>>) => {
    setState(prev => prev.includes(value) ? prev.filter(v => v !== value) : [...prev, value])
  }

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl font-semibold tracking-tight text-[#0A2540]">全部职位</h1>
            <p className="text-muted-foreground mt-1">共找到 {filteredJobs.length} 个匹配的职位</p>
          </div>
          <Button asChild className="bg-[#0A2540] hover:bg-[#0A2540]/90"><Link href="/post-job">发布新职位</Link></Button>
        </div>

        <div className="flex gap-8">
          <div className="w-72 flex-shrink-0 hidden lg:block">
            <Card className="sticky top-6">
              <CardContent className="p-6 space-y-8">
                <div>
                  <div className="font-semibold mb-4 text-sm tracking-wider text-[#0A2540]">搜索</div>
                  <Input placeholder="职位或公司名称..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
                </div>
                <div>
                  <div className="font-semibold mb-3 text-sm tracking-wider text-[#0A2540]">工作地点</div>
                  <div className="space-y-2.5">
                    {locations.map(loc => (
                      <div key={loc} className="flex items-center gap-2.5">
                        <Checkbox id={loc} checked={selectedLocations.includes(loc)} onCheckedChange={() => toggleFilter(loc, setSelectedLocations)} />
                        <Label htmlFor={loc} className="text-sm cursor-pointer">{loc}</Label>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="flex-1">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {filteredJobs.length > 0 ? filteredJobs.map(job => <JobCard key={job.id} job={job} />) : <p>没有找到匹配的职位</p>}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}