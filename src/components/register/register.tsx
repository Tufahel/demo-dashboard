import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { JSX, SVGProps } from "react";

export default function RegisterComponent() {
  return (
    <div className="flex flex-col md:flex-row h-screen bg-gray-100">
      <div className="flex flex-col w-full md:w-1/2 bg-black text-white p-8 md:p-12 space-y-6">
        <div className="flex items-center space-x-2">
          <GaugeIcon className="h-6 w-6 text-white" />
          <span className="font-bold text-lg">Acme Inc</span>
        </div>
        <div className="mt-10 md:mt-20">
          <blockquote>
            "This library has saved me countless hours of work and helped me
            deliver stunning designs to my clients faster than ever before."
          </blockquote>
          <cite className="block mt-4">Sofia Davis</cite>
        </div>
      </div>
      <div className="flex flex-col w-full md:w-1/2 items-center justify-center p-8 md:p-12">
        <div className="flex justify-end w-full pr-4 md:pr-12">
          <Link
            className="text-gray-600 hover:text-gray-800"
            href="/login"
            prefetch={false}
          >
            Login
          </Link>
        </div>
        <div className="w-full max-w-md">
          <div className="mb-4 md:mb-6">
            <h2 className="text-2xl md:text-3xl font-bold mb-2">
              Create an account
            </h2>
            <div className="text-gray-600">
              Enter your email below to create your account
            </div>
          </div>
          <div className="space-y-4">
            <Input placeholder="name@example.com" />
            <Button className="bg-[#bd1e59] text-white w-full">
              <Link href="/dashboard" className="px-6 py-2" prefetch={false}>
                Signin with Email
              </Link>
            </Button>
            <div className="flex items-center">
              <div className="flex-grow h-px bg-gray-300" />
              <span className="px-4 text-gray-500">OR CONTINUE WITH</span>
              <div className="flex-grow h-px bg-gray-300" />
            </div>
            <Button className="bg-white text-gray-600 border border-gray-300 w-full">
              <ChromeIcon className="h-5 w-5 text-gray-600 mr-2" />
              Google
            </Button>
          </div>
          <div className="text-xs text-gray-500 mt-4">
            By clicking continue, you agree to our{" "}
            <a href="#" className="text-[#bd1e59]">
              Terms of Service
            </a>{" "}
            and{" "}
            <a href="#" className="text-[#bd1e59]">
              Privacy Policy
            </a>
            .
          </div>
        </div>
      </div>
    </div>
  );
}

function ChromeIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="4" />
      <line x1="21.17" x2="12" y1="8" y2="8" />
      <line x1="3.95" x2="8.54" y1="6.06" y2="14" />
      <line x1="10.88" x2="15.46" y1="21.94" y2="14" />
    </svg>
  );
}

function GaugeIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m12 14 4-4" />
      <path d="M3.34 19a10 10 0 1 1 17.32 0" />
    </svg>
  );
}