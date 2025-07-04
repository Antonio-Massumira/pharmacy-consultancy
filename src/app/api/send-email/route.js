import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

export const runtime = 'nodejs'; // garante ambiente Node

export async function POST(req) {
  try {
    const formData = await req.formData();
    
    //Campos 
    const nome      = formData.get('nome');
    const email     = formData.get('email');
    const fnm       = formData.get('fnm');        // nome comercial
    const generico  = formData.get('generico');   // nome genérico
    const dosagem   = formData.get('dosagem');
    const forma     = formData.get('forma');      // forma farmacêutica
    const comentarios = formData.get('comentarios');
    const imagem    = formData.get('imagem');     // File

    // Validação mínima
    if (![nome, email, fnm, generico, dosagem, forma, imagem].every(Boolean)) {
      return NextResponse.json({ message: 'Campos obrigatórios em falta' }, { status: 400 });
    }

    // Converte imagem em Buffer
    const buffer = Buffer.from(await imagem.arrayBuffer());

    /* ---------- Nodemailer ---------- */
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS, // App Password
      },
    });

    await transporter.sendMail({
      from: `"${nome}" <${email}>`,
      to:   process.env.CONSULTOR_EMAIL,
      subject: '📩 Novo pedido de reconciliação de receita',
      html: `
        <div style="font-family: Arial, sans-serif; background:#f8fafc; padding:24px; border-radius:12px; max-width:800px; margin:auto; color:#1f2937;">
          <h2 style="color:#0ea5e9; margin-bottom:16px;">Novo Pedido de Reconciliação</h2>

          <p style="margin:0 0 12px;"><strong>👤 Nome:</strong> ${nome}</p>
          <br>
          <p style="margin:0 0 16px;"><strong>📧 Email:</strong> ${email}</p>
          <br>
          
          <!-- TABELA DA RECEITA (formato horizontal) -->
          <table style="width:100%; border-collapse:collapse; margin-bottom:16px; font-size:14px;">
            <tr style="background:#0ea5e9; color:white;">
              <th style="padding:8px; text-align:left; border:1px solid #e5e7eb;">FNM</th>
              <th style="padding:8px; text-align:left; border:1px solid #e5e7eb;">Nome Genérico</th>
              <th style="padding:8px; text-align:left; border:1px solid #e5e7eb;">Dosagem</th>
              <th style="padding:8px; text-align:left; border:1px solid #e5e7eb;">Forma Farmacêutica</th>
            </tr>
            <tr>
              <td style="padding:8px; border:1px solid #e5e7eb;">${fnm}</td>
              <td style="padding:8px; border:1px solid #e5e7eb;">${generico}</td>
              <td style="padding:8px; border:1px solid #e5e7eb;">${dosagem}</td>
              <td style="padding:8px; border:1px solid #e5e7eb;">${forma}</td>
            </tr>
          </table>

          ${
            comentarios
              ? `<p style="margin:0 0 8px;"><strong>💬 Comentários adicionais:</strong></p>
                 <div style="background:#fef9c3; padding:12px; border-radius:6px; margin-bottom:16px;">${comentarios}</div>`
              : ''
          }

          <p style="margin:0;"><strong>📎 Anexo:</strong> ${imagem.name}</p>

          <hr style="margin:24px 0; border:none; border-top:1px solid #cbd5e1;" />
          <p style="font-size:12px; color:#64748b;">Este e-mail foi gerado automaticamente pelo sistema de reconciliação de receitas.</p>
        </div>
      `,
      attachments: [
        {
          filename: imagem.name,
          content:  buffer,
        },
      ],
    });

    return NextResponse.json({ message: 'Email enviado com sucesso' });
  } catch (err) {
    console.error('Erro ao enviar email:', err);
    return NextResponse.json({ message: 'Falha ao enviar email' }, { status: 500 });
  }
}
