import { type NextRequest, NextResponse } from "next/server"
import { getQuoteRequests, updateQuoteStatus } from "@/lib/db"

export async function GET() {
  try {
    const quotes = getQuoteRequests()
    return NextResponse.json({ quotes })
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch quotes" }, { status: 500 })
  }
}

export async function PATCH(request: NextRequest) {
  try {
    const body = await request.json()
    const { id, status } = body

    const updated = updateQuoteStatus(id, status)
    if (!updated) {
      return NextResponse.json({ error: "Quote not found" }, { status: 404 })
    }

    return NextResponse.json({ success: true, quote: updated })
  } catch (error) {
    return NextResponse.json({ error: "Failed to update quote" }, { status: 500 })
  }
}
