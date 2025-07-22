import { type NextRequest, NextResponse } from "next/server"
import { saveQuoteRequest } from "@/lib/db"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    // Save quote request
    const quoteRequest = saveQuoteRequest({
      type: body.type || "quote",
      contactInfo: {
        name: body.name,
        phone: body.phone,
        email: body.email,
      },
    })

    return NextResponse.json({
      success: true,
      message: "Quote request received! Our team will contact you shortly.",
      id: quoteRequest.id,
    })
  } catch (error) {
    console.error("Quote request error:", error)
    return NextResponse.json({ error: "Failed to submit quote request. Please try again." }, { status: 500 })
  }
}
