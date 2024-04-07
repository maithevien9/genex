'use server';

import { createTransport } from 'nodemailer';

interface ContactFormState {
  message: string;
  error: boolean;
  success: boolean;
  fieldValues: {
    sender_name: string;
    sender_email: string;
    sender_message: string;
  };
}

interface SendMailForm {
  yourName: string;
  email: string;
  company: string;
  message: string;
}

export async function sendEmailwithBrevoSmtpAction(values: SendMailForm) {
  const mail_from = process.env.NEXT_PUBLIC_EMAIL_FROM;
  const mail_to = process.env.NEXT_PUBLIC_EMAIL_FROM;
  const brevo_key = process.env.NEXT_PUBLIC_BREVO_KEY;

  if (!mail_from || !mail_to || !brevo_key) {
    return {
      message: 'Ooops something went wrong on our side, please try again later',
      error: true,
      success: false,
    };
  }
  const rawFormData = {
    sender_name: values.yourName,
    sender_company: values.company,
    sender_email: values.email,
    sender_message: values.message,
  };

  const transporter = createTransport({
    host: 'smtp-relay.brevo.com',
    port: 587,
    auth: {
      user: mail_to,
      pass: brevo_key,
    },
  });

  const mailOptions = {
    from: mail_from,
    to: mail_to,
    subject: `New message from ${rawFormData.sender_name}`,
    text: `
    Client Name: ${rawFormData.sender_name} \n 
    Email: ${rawFormData.sender_email} \n 
    Company: ${rawFormData.sender_company} \n 
    Message: ${rawFormData.sender_message} \n 
        `,
  };

  async function asyncsendMail() {
    return new Promise<ContactFormState>((resolve, reject) => {
      transporter.sendMail(mailOptions, function (error: any, info: any) {
        if (error) {
          resolve({
            message: 'Something went wrong',
            error: true,
            success: false,
            fieldValues: {
              sender_name: '',
              sender_email: '',
              sender_message: '',
            },
          });
        } else {
          resolve({
            message: 'Successfully sent, Thank you!',
            error: false,
            success: true,
            fieldValues: {
              sender_name: '',
              sender_email: '',
              sender_message: '',
            },
          });
        }
      });
    });
  }

  return await asyncsendMail();
}
