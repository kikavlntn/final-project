import Head from "next/head";

export default function Settings() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="h-screen flex flex-col">
        <div className="w-full flex items-center pl-8 pt-8">
          <div className="bg-slate-400 h-8 w-8">Back</div>
        </div>
        <div className=" px-8 py-5 w-full flex-grow flex flex-col justify-around">
          <div className="flex bg-slate-400 w-full h-10">
            Account vs settings
          </div>
          <div className="flex w-full flex-col items-center gap-5">
            <div className="bg-slate-400 h-10 w-10">Profile pic</div>
            <div className="w-full flex flex-col gap-5">
              <div className="bg-slate-400 h-20 w-full">Username</div>
              <div className="bg-slate-400 h-20 w-full">Email</div>
              <div className="bg-slate-400 h-20 w-full">Password</div>
              <div className="bg-slate-400 h-20 w-full">Password</div>
            </div>
          </div>
          <div className="flex bg-slate-400 w-full h-12">
            Create new account
          </div>
        </div>
      </div>
    </>
  );
}
