import { type NextRequest, NextResponse } from "next/server"
import { getContactSubmissions, updateContactStatus } from "@/lib/db"

export async function GET() {
  try {
    const contacts = getContactSubmissions()
    return NextResponse.json({ contacts })
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch contacts" }, { status: 500 })
  }
}

export async function PATCH(request: NextRequest) {
  try {
    const body = await request.json()
    const { id, status } = body

    const updated = updateContactStatus(id, status)
    if (!updated) {
      return NextResponse.json({ error: "Contact not found" }, { status: 404 })
    }

    return NextResponse.json({ success: true, contact: updated })
  } catch (error) {
    return NextResponse.json({ error: "Failed to update contact" }, { status: 500 })
  }
}
