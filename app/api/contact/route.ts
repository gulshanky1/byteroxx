import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, message } = body ?? {}

    if (!name || !email || !message) {
      return NextResponse.json({ ok: false, error: 'Please fill in all required fields.' }, { status: 400 })
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailPattern.test(email)) {
      return NextResponse.json({ ok: false, error: 'Please provide a valid email address.' }, { status: 400 })
    }

    // TODO: connect this route to an email provider (Resend, Postmark, SendGrid,
    // Nodemailer, etc.) to actually deliver the message to your inbox. For now it
    // validates the payload and returns success so the front-end flow is fully wired.
    console.log('New contact form submission:', body)

    return NextResponse.json({ ok: true })
  } catch {
    return NextResponse.json({ ok: false, error: 'Something went wrong. Please try again.' }, { status: 500 })
  }
}
