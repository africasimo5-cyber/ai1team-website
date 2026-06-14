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
    const firstName = fullName.split(' ')[0]

    // STEP 1 — Add contact to Brevo list 7
    const contactRes = await fetch('https://api.brevo.com/v3/contacts', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'api-key': BREVO_API_KEY
      },
      body: JSON.stringify({
        email,
        firstName,
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
    if (!contactRes.ok) {
      console.error('[Contact] Brevo add-contact error:', await contactRes.text())
    }

    // STEP 2 — Send notification to hello@ai1team.com
    const notifRes = await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'api-key': BREVO_API_KEY
      },
      body: JSON.stringify({
        sender: { name: 'AI1team Website', email: 'hello@ai1team.com' },
        to: [{ email: 'hello@ai1team.com', name: 'AI1team' }],
        subject: `📬 New Contact Form — ${fullName}`,
        htmlContent: `
          <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;background:#f9f9f9;padding:30px;border-radius:10px;">
            <div style="background:#1A3C6E;padding:20px;border-radius:8px;text-align:center;margin-bottom:24px;">
              <h1 style="color:white;margin:0;font-size:22px;">📬 New Contact Form Submission</h1>
              <p style="color:#94a3b8;margin:8px 0 0;font-size:13px;">Submitted via ai1team.com/contact</p>
            </div>
            <div style="background:white;border-radius:8px;padding:24px;margin-bottom:16px;">
              <table style="width:100%;border-collapse:collapse;">
                <tr style="border-bottom:1px solid #f0f0f0;">
                  <td style="padding:12px 0;font-weight:bold;color:#1A3C6E;width:140px;font-size:13px;">Full Name</td>
                  <td style="padding:12px 0;color:#333;font-size:13px;">${fullName}</td>
                </tr>
                <tr style="border-bottom:1px solid #f0f0f0;">
                  <td style="padding:12px 0;font-weight:bold;color:#1A3C6E;font-size:13px;">Email</td>
                  <td style="padding:12px 0;font-size:13px;"><a href="mailto:${email}" style="color:#2E6DB4;">${email}</a></td>
                </tr>
                <tr style="border-bottom:1px solid #f0f0f0;">
                  <td style="padding:12px 0;font-weight:bold;color:#1A3C6E;font-size:13px;">Phone</td>
                  <td style="padding:12px 0;color:#333;font-size:13px;">${phone || 'Not provided'}</td>
                </tr>
                <tr style="border-bottom:1px solid #f0f0f0;">
                  <td style="padding:12px 0;font-weight:bold;color:#1A3C6E;font-size:13px;">Company</td>
                  <td style="padding:12px 0;color:#333;font-size:13px;">${company || 'Not provided'}</td>
                </tr>
                <tr style="border-bottom:1px solid #f0f0f0;">
                  <td style="padding:12px 0;font-weight:bold;color:#1A3C6E;font-size:13px;">Service Interest</td>
                  <td style="padding:12px 0;color:#333;font-size:13px;">${service || 'Not specified'}</td>
                </tr>
                <tr>
                  <td style="padding:12px 0;font-weight:bold;color:#1A3C6E;vertical-align:top;font-size:13px;">Message</td>
                  <td style="padding:12px 0;color:#333;line-height:1.6;font-size:13px;">${message}</td>
                </tr>
              </table>
            </div>
            <div style="text-align:center;margin-top:24px;">
              <a href="mailto:${email}" style="background:#2E6DB4;color:white;padding:12px 28px;border-radius:50px;text-decoration:none;font-weight:bold;font-size:14px;">
                Reply to ${fullName}
              </a>
            </div>
            <p style="text-align:center;color:#999;font-size:11px;margin-top:20px;">
              Submitted via ai1team.com/contact
            </p>
          </div>
        `
      })
    })
    if (!notifRes.ok) {
      console.error('[Contact] Brevo notification email error:', await notifRes.text())
    } else {
      console.log('[Contact] Notification email sent OK')
    }

    // STEP 3 — Send auto-reply to the client (inline HTML, no template needed)
    const replyRes = await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'api-key': BREVO_API_KEY
      },
      body: JSON.stringify({
        sender: { name: 'AI1team', email: 'hello@ai1team.com' },
        to: [{ email, name: fullName }],
        subject: `We received your message, ${firstName}! ✅`,
        htmlContent: `
          <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;background:#f4f7fb;padding:30px;border-radius:10px;">
            <div style="background:#1A3C6E;padding:24px;border-radius:8px;text-align:center;margin-bottom:24px;">
              <h1 style="color:white;margin:0;font-size:22px;">Thanks for reaching out, ${firstName}! 👋</h1>
            </div>
            <div style="background:white;border-radius:8px;padding:28px;margin-bottom:16px;">
              <p style="color:#1A1A2E;font-size:15px;line-height:1.7;margin:0 0 16px;">
                We've received your message and our team will review it shortly.
                You can expect a reply within <strong>24 hours</strong>.
              </p>
              <p style="color:#555577;font-size:14px;line-height:1.7;margin:0 0 16px;">
                In the meantime, feel free to explore our services or book a free discovery call if you'd like to talk sooner.
              </p>
              <div style="text-align:center;margin-top:28px;">
                <a href="https://ai1team.com/services"
                  style="background:#2E6DB4;color:white;padding:12px 28px;border-radius:50px;text-decoration:none;font-weight:bold;font-size:14px;display:inline-block;">
                  Explore Our Services
                </a>
              </div>
            </div>
            <p style="text-align:center;color:#94a3b8;font-size:12px;margin-top:16px;">
              AI1team · hello@ai1team.com · ai1team.com
            </p>
          </div>
        `
      })
    })
    if (!replyRes.ok) {
      console.error('[Contact] Brevo auto-reply error:', await replyRes.text())
    } else {
      console.log('[Contact] Auto-reply sent OK')
    }

    return NextResponse.json({ success: true }, { status: 200 })

  } catch (error) {
    console.error('[Contact] Unhandled error:', error)
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}
