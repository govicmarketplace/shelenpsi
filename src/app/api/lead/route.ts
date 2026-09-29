import { NextResponse } from "next/server";
import { db } from "@/lib/db";

export const runtime = "nodejs";

type LeadBody = {
  name?: string;
  email?: string;
  phone?: string;
  format?: string;
  message?: string;
};

export async function GET() {
  try {
    const count = await db.lead.count();
    return NextResponse.json({ count });
  } catch (err) {
    return NextResponse.json(
      { error: "Não foi possível contar os leads.", detail: String(err) },
      { status: 500 },
    );
  }
}

export async function POST(req: Request) {
  let body: LeadBody;

  try {
    body = (await req.json()) as LeadBody;
  } catch {
    return NextResponse.json(
      { error: "Formato de dados inválido." },
      { status: 400 },
    );
  }

  const name = (body.name || "").trim();
  const email = (body.email || "").trim();
  const phone = (body.phone || "").trim() || null;
  const format = (body.format || "").trim() || null;
  const message = (body.message || "").trim() || null;

  if (!name) {
    return NextResponse.json({ error: "Nome é obrigatório." }, { status: 422 });
  }
  if (!email || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
    return NextResponse.json(
      { error: "Informe um e-mail válido." },
      { status: 422 },
    );
  }

  try {
    const lead = await db.lead.create({
      data: {
        name,
        email,
        phone,
        format,
        message,
      },
    });

    return NextResponse.json(
      { success: true, id: lead.id, createdAt: lead.createdAt },
      { status: 201 },
    );
  } catch (err) {
    return NextResponse.json(
      { error: "Não foi possível registrar agora. Tente novamente." , detail: String(err) },
      { status: 500 },
    );
  }
}
