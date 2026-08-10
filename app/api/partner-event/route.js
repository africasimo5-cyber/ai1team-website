import { NextResponse } from 'next/server'

export async function POST(request) {
  try {
    const body = await request.json()
    const { fullName, email } = body

    if (!fullName || !email) {
      return NextResponse.json(
        { error: 'Name and email are required' },
        { status: 400 }
      )
    }

    const BREVO_API_KEY = process.env.BREVO_API_KEY
    if (!BREVO_API_KEY) {
      console.error('[partner-event] BREVO_API_KEY env variable is not set')
      return NextResponse.json({ error: 'Server misconfiguration' }, { status: 500 })
    }

    const BREVO_BASE = 'https://api.brevo.com/v3'
    const firstName = fullName.split(' ')[0]
    const lastName = fullName.split(' ').slice(1).join(' ') || ''

    // STEP 1 — Add to Brevo List ID 12 (BizOS Partner Program Live Event Registrants)
    const contactRes = await fetch(`${BREVO_BASE}/contacts`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'api-key': BREVO_API_KEY
      },
      body: JSON.stringify({
        email,
        firstName,
        lastName,
        listIds: [12],
        updateEnabled: true
      })
    })
    if (!contactRes.ok) {
      console.error('[partner-event] Brevo add-contact error:', await contactRes.text())
    }

    // STEP 2 — Send confirmation email (Template ID 17)
    const emailRes = await fetch(`${BREVO_BASE}/smtp/email`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'api-key': BREVO_API_KEY
      },
      body: JSON.stringify({
        to: [{ email, name: fullName }],
        templateId: 17,
        params: {
          FIRSTNAME: firstName,
          FULLNAME: fullName
        }
      })
    })
    if (!emailRes.ok) {
      console.error('[partner-event] Brevo send-email error:', await emailRes.text())
    }

    return NextResponse.json({ success: true }, { status: 200 })

  } catch (error) {
    console.error('[partner-event] Unhandled error:', error)
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}
