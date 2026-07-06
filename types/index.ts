export type UserRole = 'EMPLOYER' | 'SEEKER' | 'ADMIN'
export interface Job {
  id: string
  employerId: string
  title: string
  description: string
  location: string
  industry: string
  jobType: string
  salaryMin?: number
  salaryMax?: number
  chineseRequired?: string
  visaSupport: boolean
  status: 'DRAFT' | 'PUBLISHED' | 'CLOSED' | 'EXPIRED'
  isFeatured: boolean
  createdAt: string
}
export interface Application {
  id: string
  jobId: string
  seekerId: string
  status: string
  createdAt: string
}