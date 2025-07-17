import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

export const runtime = 'nodejs';

export async function POST(req) {
  try {
    const formData = await req.formData();

    const nome = formData.get('nome');
    const email = formData.get('email');
    const contacto = formData.get('contacto');
    const comentarios = formData.get('comentarios');
    const descricaoJson = formData.get('descricao');
    const imagens = formData.getAll('imagem').filter(Boolean);

    // Validar campos obrigatórios básicos
    if (!nome || !email || !contacto || imagens.length === 0) {
      return NextResponse.json({ message: 'Campos obrigatórios em falta' }, { status: 400 });
    }

    let descricao;
    try {
      descricao = JSON.parse(descricaoJson);
    } catch (err) {
      return NextResponse.json({ message: 'Formato inválido de descrição' }, { status: 400 });
    }

    // Validação da descrição
    if (!Array.isArray(descricao) || descricao.length === 0) {
      return NextResponse.json({ message: 'Nenhuma descrição foi fornecida' }, { status: 400 });
    }

    //for (const item of descricao) {
      //if (!item.fnm || !item.generico || !item.dosagem || !item.forma) {
        //return NextResponse.json({ message: 'Todos os campos da descrição são obrigatórios' }, { status: 400 });
      //}
    //}

    if (imagens.length > 4) {
      return NextResponse.json({ message: 'No máximo 4 imagens podem ser enviadas' }, { status: 400 });
    }

    const attachments = await Promise.all(
      imagens.map(async (imagem) => ({
        filename: imagem.name,
        content: Buffer.from(await imagem.arrayBuffer()),
      }))
    );

    // Tabela de medicamentos
    const linhasTabela = descricao.map((item) => `
      <tr>
        <td style="padding:8px; border:1px solid #e5e7eb;">${item.fnm}</td>
        <td style="padding:8px; border:1px solid #e5e7eb;">${item.generico}</td>
        <td style="padding:8px; border:1px solid #e5e7eb;">${item.dosagem}</td>
        <td style="padding:8px; border:1px solid #e5e7eb;">${item.forma}</td>
      </tr>
    `).join('');

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"${nome}" <${email}>`,
      to: process.env.CONSULTOR_EMAIL,
      subject: '📩 Novo pedido de reconciliação de receita',
      html: `
        <div style="font-family: Arial, sans-serif; background:#f8fafc; padding:24px; border-radius:12px; max-width:800px; margin:auto; color:#1f2937;">
          <h2 style="color:#0ea5e9; margin-bottom:16px;">Novo Pedido de Reconciliação</h2>

          <p><strong>👤 Nome:</strong> ${nome}</p>
          <p><strong>📧 Email:</strong> ${email}</p>
          <p><strong>📳 Contacto:</strong> ${contacto}</p>

          <table style="width:100%; border-collapse:collapse; margin:16px 0; font-size:14px;">
            <tr style="background:#0ea5e9; color:white;">
              <th style="padding:8px; border:1px solid #e5e7eb;">FNM</th>
              <th style="padding:8px; border:1px solid #e5e7eb;">Nome Genérico</th>
              <th style="padding:8px; border:1px solid #e5e7eb;">Dosagem</th>
              <th style="padding:8px; border:1px solid #e5e7eb;">Forma Farmacêutica</th>
            </tr>
            ${linhasTabela}
          </table>

          ${
            comentarios
              ? `<p><strong>💬 Comentários adicionais:</strong></p>
                 <div style="background:#fef9c3; padding:12px; border-radius:6px;">${comentarios}</div>`
              : ''
          }

          <p style="margin-top:16px;"><strong>📎 Imagens anexadas:</strong> ${imagens.map(i => i.name).join(', ')}</p>

          <hr style="margin:24px 0; border:none; border-top:1px solid #cbd5e1;" />
          <p style="font-size:12px; color:#64748b;">Este e-mail foi gerado automaticamente pelo sistema de reconciliação de receitas.</p>
        </div>
      `,
      attachments,
    });

    return NextResponse.json({ message: 'Email enviado com sucesso' });
  } catch (err) {
    console.error('Erro ao enviar email:', err);
    return NextResponse.json({ message: 'Falha ao enviar email' }, { status: 500 });
  }
}
