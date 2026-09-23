export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, subject, message } = body

    if (!name || !email || !subject || !message) {
      return Response.json(
        { error: "All fields are required." },
        { status: 400 }
      )
    }

    const phone = process.env.CALLMEBOT_PHONE
    const apiKey = process.env.CALLMEBOT_API_KEY

    if (!phone || !apiKey) {
      return Response.json(
        { error: "WhatsApp configuration is missing." },
        { status: 500 }
      )
    }

    const text = `New website inquiry\nName: ${name}\nEmail: ${email}\nSubject: ${subject}\n\n${message}`

    const callMeBotUrl = `https://api.callmebot.com/whatsapp.php?phone=${encodeURIComponent(phone)}&text=${encodeURIComponent(text)}&apikey=${encodeURIComponent(apiKey)}`

    const response = await fetch(callMeBotUrl, { cache: "no-store" })
    const providerMessage = (await response.text()).trim()
    const lowerProviderMessage = providerMessage.toLowerCase()
    const providerReportedError =
      lowerProviderMessage.includes("error") ||
      lowerProviderMessage.includes("invalid") ||
      lowerProviderMessage.includes("failed") ||
      lowerProviderMessage.includes("not found")

    if (!response.ok || providerReportedError) {
      return Response.json(
        { error: "CallMeBot could not send the WhatsApp message." },
        { status: 502 }
      )
    }

    return Response.json({ success: true })
  } catch (error) {
    return Response.json(
      { error: "Something went wrong while sending the message." },
      { status: 500 }
    )
  }
}
