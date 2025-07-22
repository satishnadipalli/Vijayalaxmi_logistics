import { type NextRequest, NextResponse } from "next/server"
import { saveContactSubmission } from "@/lib/db"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    // Validate required fields
    if (!body.name || !body.email || !body.phone) {
      return NextResponse.json({ error: "Name, email, and phone are required" }, { status: 400 })
    }

    // Save to database
    const submission = saveContactSubmission({
      name: body.name,
      email: body.email,
      phone: body.phone,
      service: body.service || "General Inquiry",
      message: body.message || "",
    })

    // In production, you might want to:
    // - Send email notification to admin
    // - Send confirmation email to customer
    // - Integrate with CRM system

    return NextResponse.json({
      success: true,
      message: "Thank you for your inquiry! We will contact you within 24 hours.",
      id: submission.id,
    })
  } catch (error) {
    console.error("Contact form error:", error)
    return NextResponse.json({ error: "Failed to submit form. Please try again." }, { status: 500 })
  }
}
