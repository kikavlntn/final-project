import Head from "next/head";

export default function Home() {
	return (
		<>
			<Head>
				<title>Create Next App</title>
				<meta
					name="description"
					content="Generated by create next app"
				/>
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<h1 className="text-red-600 text-4xl font-bold flex justify-center">
				Home page
			</h1>
			<div className=" w-414px h-82px flex flex-row items-center justify-space-between p-4">
				<h3>HEY, BEAUTIFUL</h3>
				
			</div>
			<div className=" w-25 h-6  rounded-lg mt-4 mx-14 p-1">
				<input
					type="text"
					placeholder="Search"
					className=" border border-slate-300 rounded-full w-52 h-8"
				/>
			</div>
		</>
	);
}
