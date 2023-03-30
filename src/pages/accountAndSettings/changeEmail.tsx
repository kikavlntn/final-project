import { LargeButton } from "@/components/LargeButton";
import Head from "next/head";
import { FiChevronLeft, FiUser } from "react-icons/fi";
import { Transition } from "@headlessui/react";
import { FormEvent, useState } from "react";
import { signIn } from "next-auth/react";
import Link from "next/link";

type ButtonProps = {
  variant: "primary";
  label: string;
  disable: boolean;
};

export default function Settings(props: ButtonProps) {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    //If I'm not mistaken, doesn't this just log someone into another email addess? And not send their data
    signIn("email", { email: email, callbackURL: "http://localhost:3000/" });
  };
  const emailCheck = new RegExp(`[A-z]+@[a-z]+.[a-zA-Z]{2,3}$`);

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="px-8 flex flex-col">
        <header className="w-full flex items-center h-10 pt-8">
          <Link href="/accountAndSettings">
            <FiChevronLeft size={28} />
          </Link>
        </header>
        <div className="flex-grow flex flex-col justify-around items-center gap-5">
          {/* This section will change depending on the account status of the User */}
          <div>
            <FiUser size={28} />
          </div>
          <form onSubmit={handleSubmit} className="flex flex-col">
            <input
              type="text"
              className="flex items-center pr-8 gap-3 invalid:border-ux-error  focus:outline-primary-default-Solid focus:outline-2 border-1
								rounded-lg py-4 px-5 w-96 h-auto
								
								p-2 m-2 ml-22 border border-primary-default-Solid bg-transparent text-center"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />

            <Transition
              show={emailCheck.test(email)}
              enter="transform transition duration-400"
              enterFrom="opacity-0 scale-y-0"
              enterTo="opacity-100 scale-y-100"
              leave="transform duration-400 transition ease-in-out"
              leaveFrom="opacity-100 scale-y-100"
              leaveTo="opacity-0 scale-y-0"
            >
              <LargeButton
                variant="primary"
                label="Get new link"
                disabled={false}
              />
            </Transition>
          </form>
        </div>
      </div>
    </>
  );
}
