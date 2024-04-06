import sgMail from '@sendgrid/mail';

const SENDGRID_API_KEY = process.env.NEXT_PUBLIC_SENDGRID_API_KEY ?? '';
const EMAIL_ADMIN = process.env.NEXT_PUBLIC_EMAIL_ADMIN ?? '';
const TEMPLATE_ID_EMAIL = process.env.NEXT_PUBLIC_TEMPLATE_ID_EMAIL ?? '';

interface SendMailForm {
  yourName: string;
  email: string;
  company: string;
  message: string;
}

export const sendEmailConfig = async (values: SendMailForm) => {
  sgMail.setApiKey(SENDGRID_API_KEY);

  const msg = {
    from: EMAIL_ADMIN,
    to: 'maithevien9@gmail.com',
    templateId: TEMPLATE_ID_EMAIL,
    dynamic_template_data: values,
  };

  await sgMail.send(msg);
};
