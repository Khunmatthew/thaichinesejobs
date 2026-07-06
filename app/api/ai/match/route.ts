import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { jobId, seekerProfile } = body
    const matchResult = {
      jobId,
      score: 89,
      explanation: `该候选人中文达到「流利」水平，具备4年制造业/行政管理经验，泰语沟通能力良好。技能标签与岗位需求高度匹配。主要优势是跨文化团队管理经验丰富，建议优先安排面试。`,
      strengths: ["中文流利", "制造业行政经验", "跨文化沟通能力强"],
      concerns: ["泰语水平需面试进一步确认", "新能源行业经验较少"]
    }
    return NextResponse.json(matchResult)
  } catch (error) {
    return NextResponse.json({ error: '匹配服务暂时不可用' }, { status: 500 })
  }
}