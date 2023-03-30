import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Inter, Staatliches } from "@next/font/google";
import {
	QueryClient,
	QueryClientProvider,
	useQuery,
} from "@tanstack/react-query";
import { useState } from "react";
import { SessionProvider } from "next-auth/react";
const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
	const [queryClient] = useState(() => new QueryClient());

	return (
		<div className="bg-grad-frame h-screen w-screen">
			<QueryClientProvider client={queryClient}>
				<SessionProvider>
					<Component {...pageProps} />
				</SessionProvider>
			</QueryClientProvider>
		</div>
	);
}
