import { NextResponse } from 'next/server'

export async function POST(request) {
  try {
    const { email } = await request.json()

    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { error: 'Valid email is required' },
        { status: 400 }
      )
    }

    const apiKey = process.env.BREVO_API_KEY
    if (!apiKey) {
      console.error('[subscribe] BREVO_API_KEY env variable is not set')
      return NextResponse.json({ error: 'Server misconfiguration' }, { status: 500 })
    }

    let brevoResponse
    try {
      brevoResponse = await fetch('https://api.brevo.com/v3/contacts', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'api-key': apiKey
        },
        body: JSON.stringify({
          email,
          listIds: [7],
          updateEnabled: true
        })
      })
    } catch (networkError) {
      console.error('[subscribe] Network error reaching Brevo:', networkError)
      return NextResponse.json({ error: 'Could not reach email service' }, { status: 502 })
    }

    // 201 Created or 204 No Content (updateEnabled hit existing contact) = success
    if (brevoResponse.status === 201 || brevoResponse.status === 204) {
      return NextResponse.json({ success: true }, { status: 200 })
    }

    // Parse Brevo error body (may be empty on some statuses)
    let errorBody = {}
    try {
      errorBody = await brevoResponse.json()
    } catch {
      errorBody = { raw: `status ${brevoResponse.status}, no JSON body` }
    }

    console.error('[subscribe] Brevo returned error:', brevoResponse.status, JSON.stringify(errorBody))

    // duplicate_parameter only fires when updateEnabled is false; handle as safety net
    if (errorBody.code === 'duplicate_parameter') {
      return NextResponse.json({ success: true }, { status: 200 })
    }

    return NextResponse.json(
      { error: 'Subscription failed', code: errorBody.code ?? 'unknown' },
      { status: 500 }
    )

  } catch (error) {
    console.error('[subscribe] Unexpected error:', error)
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}
