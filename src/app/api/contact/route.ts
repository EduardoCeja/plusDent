import { NextResponse } from "next/server";

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: Request) {
  try {
    const form = await request.formData();

    const name = String(form.get("name") ?? "").trim();
    const email = String(form.get("email") ?? "").trim();
    const phone = String(form.get("phone") ?? "").trim();
    const message = String(form.get("message") ?? "").trim();

    // Validaciones básicas
    if (!name || name.length < 2) {
      return NextResponse.json(
        { ok: false, message: "El nombre es obligatorio." },
        { status: 400 }
      );
    }

    if (!isValidEmail(email)) {
      return NextResponse.json(
        { ok: false, message: "El email no es válido." },
        { status: 400 }
      );
    }

    if (!message || message.length < 10) {
      return NextResponse.json(
        { ok: false, message: "El mensaje debe tener al menos 10 caracteres." },
        { status: 400 }
      );
    }

    if (message.length > 1000) {
      return NextResponse.json(
        { ok: false, message: "El mensaje es demasiado largo." },
        { status: 400 }
      );
    }

    // Aquí puedes enviar a:
    // - correo (nodemailer)
    // - CRM
    // - base de datos
    // - webhook
    console.log({
      name,
      email,
      phone,
      message,
      createdAt: new Date().toISOString(),
    });

    return NextResponse.json({
      ok: true,
      message: "¡Gracias! Te contactaremos en breve.",
    });

  } catch (error) {
    console.error("Error en /api/contact:", error);

    return NextResponse.json(
      { ok: false, message: "Error interno del servidor." },
      { status: 500 }
    );
  }
}