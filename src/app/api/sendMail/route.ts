import { sendEmailConfig } from '@/configs/sendGrid';
import { NextApiRequest, NextApiResponse } from 'next';

interface SendMailForm {
  yourName: string;
  email: string;
  company: string;
  message: string;
}

const POST = async (req: NextApiRequest, res: NextApiResponse) => {
  const { yourName, email, company, message } = req.body;

  try {
    await sendEmailConfig({ yourName, email, company, message });
    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

export { POST };
