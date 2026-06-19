import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const data = await request.json();
  const name = typeof data?.name === "string" ? data.name.trim() : "";
  const email = typeof data?.email === "string" ? data.email.trim() : "";
  const phone = typeof data?.phone === "string" ? data.phone.trim() : "";
  const subject = typeof data?.subject === "string" ? data.subject.trim() : "";
  const message = typeof data?.message === "string" ? data.message.trim() : "";

  // Validate required fields
  if (!name || !email || !subject || !message) {
    return NextResponse.json(
      { error: "Please fill in all required fields before sending your message." },
      { status: 400 }
    );
  }

  // Validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return NextResponse.json(
      { error: "Please enter a valid email address." },
      { status: 400 }
    );
  }

  // Validate phone format if provided
  if (phone) {
    const phoneRegex = /^[\d\s\-\+\(\)]{10,}$/;
    if (!phoneRegex.test(phone)) {
      return NextResponse.json(
        { error: "Please enter a valid phone number." },
        { status: 400 }
      );
    }
  }

  // Validate message length
  if (message.length < 10) {
    return NextResponse.json(
      { error: "Message must be at least 10 characters long." },
      { status: 400 }
    );
  }

  // Log submission
  console.log("[Contact API] New submission:", { name, email, phone, subject, message });

  // TODO: Send email to admin or save to database
  // Example: await sendEmail({ to: 'admin@sblm.edu.in', ...formData })

  return NextResponse.json({ 
    message: "Thank you! Your message has been received. We'll get back to you shortly." 
  });
}
