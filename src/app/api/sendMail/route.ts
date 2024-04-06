import { sendEmailConfig } from '@/configs/sendGrid';
import { NextResponse } from 'next/server';

interface SendMailForm {
  yourName: string;
  email: string;
  company: string;
  message: string;
}

const POST = async (req: any, res: any) => {
  const { yourName, email, company, message } = req.body;

  try {
    await sendEmailConfig({ yourName, email, company, message });
    return NextResponse.json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: 'Internal Server Error!' },
      { status: 500 },
    );
  }
};

export { POST };
