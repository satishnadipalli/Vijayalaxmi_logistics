// Simple in-memory database for demo purposes
// In production, you'd use a real database like PostgreSQL, MongoDB, etc.

export interface ContactSubmission {
  id: string
  name: string
  email: string
  phone: string
  service: string
  message: string
  createdAt: Date
  status: "new" | "contacted" | "completed"
}

export interface QuoteRequest {
  id: string
  type: "quote" | "crane" | "emergency"
  contactInfo: {
    name?: string
    phone?: string
    email?: string
  }
  createdAt: Date
  status: "new" | "processing" | "sent"
}

// In-memory storage (in production, use a real database)
const contactSubmissions: ContactSubmission[] = []
const quoteRequests: QuoteRequest[] = []

// Contact form functions
export function saveContactSubmission(data: Omit<ContactSubmission, "id" | "createdAt" | "status">) {
  const submission: ContactSubmission = {
    id: Date.now().toString(),
    ...data,
    createdAt: new Date(),
    status: "new",
  }
  contactSubmissions.push(submission)
  return submission
}

export function getContactSubmissions() {
  return contactSubmissions.sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime())
}

export function updateContactStatus(id: string, status: ContactSubmission["status"]) {
  const submission = contactSubmissions.find((s) => s.id === id)
  if (submission) {
    submission.status = status
  }
  return submission
}

// Quote request functions
export function saveQuoteRequest(data: Omit<QuoteRequest, "id" | "createdAt" | "status">) {
  const request: QuoteRequest = {
    id: Date.now().toString(),
    ...data,
    createdAt: new Date(),
    status: "new",
  }
  quoteRequests.push(request)
  return request
}

export function getQuoteRequests() {
  return quoteRequests.sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime())
}

export function updateQuoteStatus(id: string, status: QuoteRequest["status"]) {
  const request = quoteRequests.find((r) => r.id === id)
  if (request) {
    request.status = status
  }
  return request
}

// Stats
export function getStats() {
  return {
    totalContacts: contactSubmissions.length,
    totalQuotes: quoteRequests.length,
    newContacts: contactSubmissions.filter((s) => s.status === "new").length,
    newQuotes: quoteRequests.filter((r) => r.status === "new").length,
  }
}
