type InquiryPayload = {
  name?: string;
  email?: string;
  businessName?: string;
  businessType?: string;
  details?: string;
};

declare const Deno: {
  serve: (handler: (req: Request) => Response | Promise<Response>) => void;
  env: {
    get: (key: string) => string | undefined;
  };
};

const jsonResponse = (body: unknown, init: ResponseInit = {}) =>
  new Response(JSON.stringify(body), {
    ...init,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Content-Type': 'application/json',
      ...(init.headers || {})
    }
  });

const escapeHtml = (value: string) =>
  value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
        'Access-Control-Allow-Methods': 'POST, OPTIONS'
      }
    });
  }

  if (req.method !== 'POST') {
    return jsonResponse({ message: 'Method not allowed' }, { status: 405 });
  }

  const resendApiKey = Deno.env.get('RESEND_API_KEY');
  const fromEmail = Deno.env.get('FROM_EMAIL') || 'Innovexa <onboarding@resend.dev>';
  const toEmail = Deno.env.get('TO_EMAIL') || 'innovexa7@gmail.com';

  if (!resendApiKey) {
    return jsonResponse(
      {
        message: 'Missing Supabase function secrets. Set RESEND_API_KEY.'
      },
      { status: 500 }
    );
  }

  let payload: InquiryPayload;

  try {
    payload = await req.json();
  } catch {
    return jsonResponse({ message: 'Invalid JSON body.' }, { status: 400 });
  }

  const name = payload.name?.trim();
  const email = payload.email?.trim();
  const details = payload.details?.trim();

  if (!name || !email || !details) {
    return jsonResponse({ message: 'Name, email, and details are required.' }, { status: 400 });
  }

  const subject = `New Innovexa inquiry from ${name}${payload.businessName ? ` - ${payload.businessName}` : ''}`;
  const html = `
    <h2>New Innovexa inquiry</h2>
    <p><strong>Name:</strong> ${escapeHtml(name)}</p>
    <p><strong>Email:</strong> ${escapeHtml(email)}</p>
    <p><strong>Business Name:</strong> ${escapeHtml(payload.businessName?.trim() || 'N/A')}</p>
    <p><strong>Business Type:</strong> ${escapeHtml(payload.businessType?.trim() || 'N/A')}</p>
    <p><strong>Details:</strong></p>
    <p>${escapeHtml(details).replace(/\n/g, '<br />')}</p>
  `;

  const emailResponse = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${resendApiKey}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      from: fromEmail,
      to: [toEmail],
      reply_to: email,
      subject,
      html
    })
  });

  if (!emailResponse.ok) {
    const errorText = await emailResponse.text();
    return jsonResponse({ message: `Email send failed: ${errorText}` }, { status: 500 });
  }

  return jsonResponse({ ok: true });
});