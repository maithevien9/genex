'use client';
import Header from '@/components/Header';
import Input from '@/components/Input';
import TextArea from '@/components/TextArea';
import { useState } from 'react';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface SendMailForm {
  yourName: string;
  email: string;
  company: string;
  message: string;
}

export default function Home() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [values, setValues] = useState<SendMailForm>({
    yourName: '',
    email: '',
    company: '',
    message: '',
  });

  const handleSubmit = async () => {
    setIsLoading(true);
    try {
      await fetch('/api/sendMail', {
        body: JSON.stringify({
          values,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'POST',
      });
      toast.success('Email sent successfully!');
      setIsLoading(false);
    } catch (_) {
      toast.error('Internal Server Error!');
    }
  };

  return (
    <main className="h-full relative pt-[20px] md:pt-[30px] 4xl:pt-[58px] z-50 bg-black overflow-auto">
      <Header />
      <div className="mt-[120px] md:mt-0 md:absolute static top-1/2 left-1/2 md:transform md:-translate-x-1/2 md:-translate-y-1/2 w-full flex justify-center">
        <div className="px-[16px] md:px-[46px] md:translate-y-8 2xl:translate-y-2">
          <div className="text-white text-[42px] md:text-[50px] 4xl:text-[64px] leading-[50px] text-start w-fit">
            MAKE THE DESIGN BETTER
          </div>

          <form
            onSubmit={(event) => {
              event.preventDefault();
              handleSubmit();
            }}
            className="pl-[2px] flex flex-col gap-[16px] mt-[16px] mb-[20px]"
          >
            <Input
              label="Your name"
              onChange={(values) =>
                setValues((prev) => ({ ...prev, yourName: values }))
              }
            />
            <Input
              label="Email"
              onChange={(values) =>
                setValues((prev) => ({ ...prev, email: values }))
              }
            />
            <Input
              label="Your company"
              onChange={(values) =>
                setValues((prev) => ({ ...prev, company: values }))
              }
            />
            <TextArea
              label="Leave us message or service you want to do with us"
              onChange={(values) =>
                setValues((prev) => ({ ...prev, message: values }))
              }
            />
            <button
              disabled={isLoading}
              type="submit"
              style={{ backgroundColor: isLoading ? 'gray' : 'white' }}
              className="w-[176px] h-[51px] flex justify-between items-center px-[18px] cursor-pointer rounded-3xl border-none bg-none"
            >
              <div className="text-[20px] font-bold">Send us</div>
              <img src="./send.svg" alt="bg-top" className="z-50" />
            </button>
          </form>
        </div>
      </div>
      <ToastContainer />
    </main>
  );
}
