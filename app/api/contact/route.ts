// IMPORTANTE: Antes de usar este endpoint añade tu API key de Resend a las
// variables de entorno:
//   RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxxxxxx
//
// En desarrollo: crea/edita el archivo `.env.local` en la raíz del proyecto y añade la línea:
//   RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxxxxxx
//
// Obtén tu API key en: https://resend.com/api-keys
// Nota: con el dominio onboarding@resend.dev solo puedes enviar al email
// verificado en tu cuenta Resend. Para enviar a cualquier destino necesitas
// verificar tu propio dominio en resend.com/domains.

import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
    let body: unknown;
    try {
        body = await request.json();
    } catch {
        return NextResponse.json({ error: "Cuerpo de la petición inválido" }, { status: 400 });
    }

    if (
        typeof body !== "object" ||
        body === null ||
        !("name" in body) ||
        !("email" in body) ||
        !("message" in body)
    ) {
        return NextResponse.json({ error: "Faltan campos requeridos" }, { status: 400 });
    }

    const { name, email, message } = body as Record<string, unknown>;

    if (typeof name !== "string" || !name.trim()) {
        return NextResponse.json({ error: "El nombre es obligatorio" }, { status: 400 });
    }
    if (typeof email !== "string" || !email.trim()) {
        return NextResponse.json({ error: "El email es obligatorio" }, { status: 400 });
    }
    if (typeof message !== "string" || !message.trim()) {
        return NextResponse.json({ error: "El mensaje es obligatorio" }, { status: 400 });
    }

    try {
        const { error } = await resend.emails.send({
            from: "Erasmiau Web <onboarding@resend.dev>",
            to: "marioreymario@gmail.com",
            subject: `Nuevo mensaje de contacto: ${name.trim()}`,
            html: `
                <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 24px;">
                    <h2 style="color: #2d3f5e; margin-bottom: 24px;">Nuevo mensaje de contacto</h2>
                    <table style="width: 100%; border-collapse: collapse;">
                        <tr>
                            <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; color: #6b7280; width: 120px; vertical-align: top;">
                                <strong>Nombre</strong>
                            </td>
                            <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; color: #111827; vertical-align: top;">
                                ${escapeHtml(name.trim())}
                            </td>
                        </tr>
                        <tr>
                            <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; color: #6b7280; vertical-align: top;">
                                <strong>Email</strong>
                            </td>
                            <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; color: #111827; vertical-align: top;">
                                <a href="mailto:${escapeHtml(email.trim())}" style="color: #E8003A;">
                                    ${escapeHtml(email.trim())}
                                </a>
                            </td>
                        </tr>
                        <tr>
                            <td style="padding: 10px 0; color: #6b7280; vertical-align: top;">
                                <strong>Mensaje</strong>
                            </td>
                            <td style="padding: 10px 0; color: #111827; vertical-align: top; white-space: pre-wrap;">
                                ${escapeHtml(message.trim())}
                            </td>
                        </tr>
                    </table>
                </div>
            `,
        });

        if (error) {
            console.error("Error de Resend:", JSON.stringify(error));
            return NextResponse.json(
                { error: `Resend error: ${error.message}` },
                { status: 500 }
            );
        }

        return NextResponse.json({ ok: true });
    } catch (err) {
        console.error("Error inesperado al enviar email:", err);
        return NextResponse.json(
            { error: "Error interno del servidor" },
            { status: 500 }
        );
    }
}

function escapeHtml(text: string): string {
    return text
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#39;");
}
