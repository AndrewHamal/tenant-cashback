import type { NextApiRequest, NextApiResponse } from 'next';
import { EmailTemplate } from '../../components/email-template';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if(req.method === 'POST'){
    const { data, error } = await resend.emails.send({
      from: `Tenant's cashback <${req.body.email}>`,
      to: ['andrew@revealize.com'],
      subject: 'Tenancy deposit',
      react: EmailTemplate(req.body),
    });

    if (error) {
      return res.status(400).json(error);
    }

    return res.json(data);
  }

  return res.status(401).json('method not allowed');
};