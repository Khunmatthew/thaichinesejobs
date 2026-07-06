import Link from 'next/link'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
interface JobCardProps { job: { id: string; title: string; company: string; location: string; salary: string; chineseLevel: string; visaSupport?: boolean; isFeatured?: boolean } }
export function JobCard({ job }: JobCardProps) {
  return (
    <Link href={`/jobs/${job.id}`}>
      <Card className="group hover:shadow-md transition-all border hover:border-[#0A2540]/20 h-full">
        <CardContent className="p-6">
          <div className="flex justify-between items-start"><div><div className="font-semibold text-lg group-hover:text-[#0A2540] transition">{job.title}</div><div className="text-sm text-muted-foreground mt-0.5">{job.company}</div></div>{job.isFeatured && <Badge className="bg-teal-100 text-teal-700">精选</Badge>}</div>
          <div className="mt-5 flex flex-wrap gap-2 text-sm"><Badge variant="outline">{job.location}</Badge><Badge variant="outline">{job.chineseLevel} 中文</Badge>{job.visaSupport && <Badge variant="outline" className="border-teal-600 text-teal-600">支持签证</Badge>}</div>
          <div className="mt-5 text-sm font-medium text-[#0A2540]">{job.salary}</div>
        </CardContent>
      </Card>
    </Link>
  )
}