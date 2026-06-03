import { NextResponse } from 'next/server'

export async function POST(request) {
  try {
    const body = await request.json()
    const { fullName, email, company, phone, service, message } = body

    if (!fullName || !email || !message) {
      return NextResponse.json(
        { error: 'Required fields missing' },
        { status: 400 }
      )
    }

    const BREVO_API_KEY = process.env.BREVO_API_KEY

    // STEP 1 — Add contact to Brevo list 7
    await fetch('https://api.brevo.com/v3/contacts', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'api-key': BREVO_API_KEY
      },
      body: JSON.stringify({
        email,
        firstName: fullName.split(' ')[0],
        lastName: fullName.split(' ').slice(1).join(' ') || '',
        attributes: {
          COMPANY: company || '',
          PHONE: phone || '',
          SERVICE_INTEREST: service || ''
        },
        listIds: [7],
        updateEnabled: true
      })
    })

    // STEP 2 — Send notification email to hello@ai1team.com
    const emailResponse = await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'api-key': BREVO_API_KEY
      },
      body: JSON.stringify({
        sender: { name: 'AI1team Website', email: 'hello@ai1team.com' },
        to: [{ email: 'hello@ai1team.com', name: 'AI1team' }],
        subject: `New Contact Form Submission — ${fullName}`,
        htmlContent: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #f9f9f9; padding: 30px; border-radius: 10px;">
            <div style="background: #1A3C6E; padding: 20px; border-radius: 8px; text-align: center; margin-bottom: 24px;">
              <h1 style="color: white; margin: 0; font-size: 22px;">New Contact Form Submission</h1>
              <p style="color: #94a3b8; margin: 8px 0 0;">AI1team Website</p>
            </div>
            <div style="background: white; border-radius: 8px; padding: 24px; margin-bottom: 16px;">
              <table style="width: 100%; border-collapse: collapse;">
                <tr style="border-bottom: 1px solid #f0f0f0;">
                  <td style="padding: 12px 0; font-weight: bold; color: #1A3C6E; width: 140px;">Full Name</td>
                  <td style="padding: 12px 0; color: #333;">${fullName}</td>
                </tr>
                <tr style="border-bottom: 1px solid #f0f0f0;">
                  <td style="padding: 12px 0; font-weight: bold; color: #1A3C6E;">Email</td>
                  <td style="padding: 12px 0;"><a href="mailto:${email}" style="color: #2E6DB4;">${email}</a></td>
                </tr>
                <tr style="border-bottom: 1px solid #f0f0f0;">
                  <td style="padding: 12px 0; font-weight: bold; color: #1A3C6E;">Phone</td>
                  <td style="padding: 12px 0; color: #333;">${phone || 'Not provided'}</td>
                </tr>
                <tr style="border-bottom: 1px solid #f0f0f0;">
                  <td style="padding: 12px 0; font-weight: bold; color: #1A3C6E;">Company</td>
                  <td style="padding: 12px 0; color: #333;">${company || 'Not provided'}</td>
                </tr>
                <tr style="border-bottom: 1px solid #f0f0f0;">
                  <td style="padding: 12px 0; font-weight: bold; color: #1A3C6E;">Service Interest</td>
                  <td style="padding: 12px 0; color: #333;">${service || 'Not specified'}</td>
                </tr>
                <tr>
                  <td style="padding: 12px 0; font-weight: bold; color: #1A3C6E; vertical-align: top;">Message</td>
                  <td style="padding: 12px 0; color: #333; line-height: 1.6;">${message}</td>
                </tr>
              </table>
            </div>
            <div style="text-align: center; margin-top: 24px;">
              <a href="mailto:${email}" style="background: #2E6DB4; color: white; padding: 12px 28px; border-radius: 50px; text-decoration: none; font-weight: bold; font-size: 15px;">
                Reply to ${fullName}
              </a>
            </div>
            <p style="text-align: center; color: #999; font-size: 12px; margin-top: 24px;">
              This email was sent from the AI1team contact form at ai1team.com/contact
            </p>
          </div>
        `
      })
    })

    if (!emailResponse.ok) {
      console.error('Brevo email error:', await emailResponse.text())
    }

    // STEP 3 — Send auto-reply to the client
    await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'api-key': BREVO_API_KEY
      },
      body: JSON.stringify({
        to: [{ email, name: fullName }],
        templateId: 14,
        params: {
          FIRSTNAME: fullName.split(' ')[0],
          FULLNAME: fullName
        }
      })
    })

    return NextResponse.json({ success: true }, { status: 200 })

  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}