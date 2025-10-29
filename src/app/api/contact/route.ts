import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: NextRequest) {
    try {
        const { name, email, message } = await request.json();
        
        // Transporter configuration
        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: Number(process.env.SMTP_PORT),
            secure: false,
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            },
        });
        
        // Email to support (you)
        await transporter.sendMail({
            from: process.env.SMTP_USER,           // Your authenticated email
            to: process.env.SMTP_USER,             // Send to yourself
            replyTo: email,                        // When you hit reply, it goes to user
            subject: `Balanso Support Request from ${name}`,
            html: `
                <h2>New Support Request</h2>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Message:</strong></p>
                <p>${message}</p>
                <hr>
                <p><small>Reply to this email to respond directly to ${name} at ${email}</small></p>
            `,
        });

        // Thank you email to user
        await transporter.sendMail({
            from: process.env.SMTP_USER,           // Your authenticated email
            to: email,                             // Send to user
            subject: 'Thanks for contacting Balanso!',
            html: `
                <h2>Thank you for contacting Balanso!</h2>
                <p>Hi ${name},</p>
                <p>We received your message and will get back to you soon.</p>
                <p>Best regards,<br>The Balanso Team</p>
            `,
        });

        return NextResponse.json({ success: true, message: 'Emails sent successfully!' });
        
    } catch (error) {
        console.error('Error sending email:', error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}