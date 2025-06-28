import { Resend } from "resend";

export async function POST(req) {
  const { name, email, message } = await req.json();

  if (!name || !email || !message)
    return new Response("Missing fields", { status: 400 });

  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>", // allowed without domain setup
      to: "yourgmail@gmail.com", // ← your Gmail
      subject: `New message from ${name}`,
      html: `
        <h3>New Contact Message</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong><br/>${message.replace(/\n/g, "<br/>")}</p>
      `,
    });

    return new Response("Message sent", { status: 200 });
  } catch (err) {
    console.error("Email error:", err);
    return new Response("Failed to send", { status: 500 });
  }
}
