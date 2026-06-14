import { NextResponse } from 'next/server'

export async function POST(request) {
  try {
    const body = await request.json()
    const {
      fullName,
      email,
      phone,
      companyName,
      industry,
      businessSize,
      revenueRange,
      currentTools,
      biggestChallenge,
      automationGoals,
      triedAutomation,
      budgetRange,
      timeline,
      hearAboutUs,
      additionalInfo
    } = body

    if (!fullName || !email || !companyName) {
      return NextResponse.json(
        { error: 'Required fields missing' },
        { status: 400 }
      )
    }

    const BREVO_API_KEY = process.env.BREVO_API_KEY
    const BREVO_BASE = 'https://api.brevo.com/v3'

    // STEP 1 — Add contact to Brevo list 7
    const contactRes = await fetch(`${BREVO_BASE}/contacts`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'api-key': BREVO_API_KEY
      },
      body: JSON.stringify({
        email: email,
        firstName: fullName.split(' ')[0],
        lastName: fullName.split(' ').slice(1).join(' ') || '',
        attributes: {
          COMPANY: companyName || '',
          PHONE: phone || '',
          SOURCE: 'Intake Form'
        },
        listIds: [7],
        updateEnabled: true
      })
    })
    console.log('Contact add status:', contactRes.status)

    // STEP 2 — Send notification to team
    const notifyRes = await fetch(`${BREVO_BASE}/smtp/email`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'api-key': BREVO_API_KEY
      },
      body: JSON.stringify({
        sender: {
          name: 'AI1team Intake Form',
          email: 'hello@ai1team.com'
        },
        to: [{ email: 'hello@ai1team.com', name: 'AI1team' }],
        subject: `🎯 New Intake Form — ${fullName} (${companyName})`,
        htmlContent: `
          <div style="font-family:Arial,sans-serif;
          max-width:600px;margin:0 auto;
          background:#f4f7fb;padding:30px;
          border-radius:10px;">
            <div style="background:#1A3C6E;
            padding:20px;border-radius:8px;
            text-align:center;margin-bottom:24px;">
              <h1 style="color:white;margin:0;
              font-size:20px;">
                🎯 New Intake Form Submission
              </h1>
              <p style="color:#94a3b8;
              margin:6px 0 0;font-size:13px;">
                Submitted via ai1team.com/intake
              </p>
            </div>
            <div style="background:white;
            border-radius:8px;padding:24px;">
              <table style="width:100%;
              border-collapse:collapse;">
                <tr style="background:#F0F6FF;">
                  <td colspan="2"
                  style="padding:10px 12px;
                  font-weight:bold;color:#1A3C6E;
                  font-size:13px;">
                    CONTACT INFO
                  </td>
                </tr>
                <tr style="border-bottom:1px solid #f0f0f0;">
                  <td style="padding:10px 12px;
                  font-weight:bold;color:#1A3C6E;
                  width:160px;font-size:13px;">
                    Full Name
                  </td>
                  <td style="padding:10px 12px;
                  color:#333;font-size:13px;">
                    ${fullName}
                  </td>
                </tr>
                <tr style="border-bottom:1px solid #f0f0f0;">
                  <td style="padding:10px 12px;
                  font-weight:bold;color:#1A3C6E;
                  font-size:13px;">Email</td>
                  <td style="padding:10px 12px;
                  font-size:13px;">
                    <a href="mailto:${email}"
                    style="color:#2E6DB4;">
                      ${email}
                    </a>
                  </td>
                </tr>
                <tr style="border-bottom:1px solid #f0f0f0;">
                  <td style="padding:10px 12px;
                  font-weight:bold;color:#1A3C6E;
                  font-size:13px;">Phone</td>
                  <td style="padding:10px 12px;
                  color:#333;font-size:13px;">
                    ${phone || 'Not provided'}
                  </td>
                </tr>
                <tr style="border-bottom:1px solid #f0f0f0;">
                  <td style="padding:10px 12px;
                  font-weight:bold;color:#1A3C6E;
                  font-size:13px;">Company</td>
                  <td style="padding:10px 12px;
                  color:#333;font-size:13px;">
                    ${companyName}
                  </td>
                </tr>
                <tr style="border-bottom:1px solid #f0f0f0;">
                  <td style="padding:10px 12px;
                  font-weight:bold;color:#1A3C6E;
                  font-size:13px;">Industry</td>
                  <td style="padding:10px 12px;
                  color:#333;font-size:13px;">
                    ${industry || 'Not provided'}
                  </td>
                </tr>
                <tr style="background:#F0F6FF;">
                  <td colspan="2"
                  style="padding:10px 12px;
                  font-weight:bold;color:#1A3C6E;
                  font-size:13px;">
                    BUSINESS DETAILS
                  </td>
                </tr>
                <tr style="border-bottom:1px solid #f0f0f0;">
                  <td style="padding:10px 12px;
                  font-weight:bold;color:#1A3C6E;
                  font-size:13px;">
                    Business Size
                  </td>
                  <td style="padding:10px 12px;
                  color:#333;font-size:13px;">
                    ${businessSize || 'Not provided'}
                  </td>
                </tr>
                <tr style="border-bottom:1px solid #f0f0f0;">
                  <td style="padding:10px 12px;
                  font-weight:bold;color:#1A3C6E;
                  font-size:13px;">Revenue</td>
                  <td style="padding:10px 12px;
                  color:#333;font-size:13px;">
                    ${revenueRange || 'Not provided'}
                  </td>
                </tr>
                <tr style="border-bottom:1px solid #f0f0f0;">
                  <td style="padding:10px 12px;
                  font-weight:bold;color:#1A3C6E;
                  font-size:13px;">
                    Current Tools
                  </td>
                  <td style="padding:10px 12px;
                  color:#333;font-size:13px;">
                    ${currentTools || 'Not provided'}
                  </td>
                </tr>
                <tr style="border-bottom:1px solid #f0f0f0;">
                  <td style="padding:10px 12px;
                  font-weight:bold;color:#1A3C6E;
                  font-size:13px;">
                    Tried Automation?
                  </td>
                  <td style="padding:10px 12px;
                  color:#333;font-size:13px;">
                    ${triedAutomation || 'Not provided'}
                  </td>
                </tr>
                <tr style="background:#F0F6FF;">
                  <td colspan="2"
                  style="padding:10px 12px;
                  font-weight:bold;color:#1A3C6E;
                  font-size:13px;">
                    GOALS & BUDGET
                  </td>
                </tr>
                <tr style="border-bottom:1px solid #f0f0f0;">
                  <td style="padding:10px 12px;
                  font-weight:bold;color:#1A3C6E;
                  font-size:13px;vertical-align:top;">
                    Challenge
                  </td>
                  <td style="padding:10px 12px;
                  color:#333;font-size:13px;
                  line-height:1.6;">
                    ${biggestChallenge || 'Not provided'}
                  </td>
                </tr>
                <tr style="border-bottom:1px solid #f0f0f0;">
                  <td style="padding:10px 12px;
                  font-weight:bold;color:#1A3C6E;
                  font-size:13px;vertical-align:top;">
                    Automation Goals
                  </td>
                  <td style="padding:10px 12px;
                  color:#333;font-size:13px;
                  line-height:1.6;">
                    ${Array.isArray(automationGoals)
                      ? automationGoals.join(', ')
                      : automationGoals || 'Not provided'}
                  </td>
                </tr>
                <tr style="border-bottom:1px solid #f0f0f0;">
                  <td style="padding:10px 12px;
                  font-weight:bold;color:#1A3C6E;
                  font-size:13px;">Budget</td>
                  <td style="padding:10px 12px;
                  color:#333;font-size:13px;">
                    ${budgetRange || 'Not provided'}
                  </td>
                </tr>
                <tr style="border-bottom:1px solid #f0f0f0;">
                  <td style="padding:10px 12px;
                  font-weight:bold;color:#1A3C6E;
                  font-size:13px;">Timeline</td>
                  <td style="padding:10px 12px;
                  color:#333;font-size:13px;">
                    ${timeline || 'Not provided'}
                  </td>
                </tr>
                <tr style="border-bottom:1px solid #f0f0f0;">
                  <td style="padding:10px 12px;
                  font-weight:bold;color:#1A3C6E;
                  font-size:13px;">
                    Found Us Via
                  </td>
                  <td style="padding:10px 12px;
                  color:#333;font-size:13px;">
                    ${hearAboutUs || 'Not provided'}
                  </td>
                </tr>
                <tr>
                  <td style="padding:10px 12px;
                  font-weight:bold;color:#1A3C6E;
                  font-size:13px;vertical-align:top;">
                    Additional Info
                  </td>
                  <td style="padding:10px 12px;
                  color:#333;font-size:13px;
                  line-height:1.6;">
                    ${additionalInfo || 'None'}
                  </td>
                </tr>
              </table>
              <div style="text-align:center;
              margin-top:20px;">
                <a href="mailto:${email}"
                style="background:#2E6DB4;
                color:white;padding:12px 28px;
                border-radius:50px;
                text-decoration:none;
                font-weight:bold;
                font-size:14px;">
                  Reply to ${fullName}
                </a>
              </div>
            </div>
            <p style="text-align:center;
            color:#999;font-size:11px;
            margin-top:16px;">
              Submitted via ai1team.com/intake
            </p>
          </div>
        `
      })
    })
    console.log('Notify email status:', notifyRes.status)
    const notifyData = await notifyRes.json()
    console.log('Notify email response:', JSON.stringify(notifyData))

    // STEP 3 — Send auto-reply to client using Template ID 15
    const replyRes = await fetch(`${BREVO_BASE}/smtp/email`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'api-key': BREVO_API_KEY
      },
      body: JSON.stringify({
        to: [{ email: email, name: fullName }],
        templateId: 15,
        params: {
          FIRSTNAME: fullName.split(' ')[0],
          FULLNAME: fullName
        }
      })
    })
    console.log('Auto-reply status:', replyRes.status)
    const replyData = await replyRes.json()
    console.log('Auto-reply response:', JSON.stringify(replyData))

    return NextResponse.json(
      { success: true },
      { status: 200 }
    )

  } catch (error) {
    console.error('Intake form error:', error.message)
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    )
  }
}
