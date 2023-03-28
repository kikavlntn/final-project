import { LargeButton } from "@/components/LargeButton";
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import { getSession } from "next-auth/react";

export default function Home() {
	const { push } = useRouter();

	const { data: session } = useSession();
	useEffect(() => {
		if (!session) {
			push("/auth/signIn");
		} else checkOrCreateUser(session);
	}, [session]);

	const handleSignOut = () => {
		signOut({ redirect: true, callbackUrl: "/auth/signIn" });
	};

	return (
		<>
			<Head>
				<title>Create Next App</title>
				<meta name="description" content="Generated by create next app" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<h1 className="text-red-600 text-4xl font-bold flex justify-center">
				Landing Page
			</h1>
			<button onClick={() => push("/auth/signIn")}>Sign In</button>
			<button onClick={handleSignOut}>Sign Out</button>
		</>
	);
}

export async function getServerSideProps(context: any) {
	const session = await getSession(context);

	if (session) {
		return {
			redirect: {
				destination: "/home",
				permanent: false,
			},
		};
	}

	return {
		props: {},
	};
}
