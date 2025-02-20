import { NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
  try {
    const data = await req.json()
    
    const emailContent = `
      New Project Pitch from SwarmFund Website
      
      Founder: ${data.founderName}
      Project: ${data.projectName}
      Email: ${data.email}
      X/Twitter: ${data.xHandle}
      
      Description:
      ${data.description}
    `

    await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'swarmfund@deadcow.xyz',
      subject: `New Project Pitch: ${data.projectName}`,
      text: emailContent,
    })
    
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error processing pitch:', error)
    return NextResponse.json({ error: 'Error processing pitch' }, { status: 500 })
  }
} 