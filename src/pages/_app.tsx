import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Inter, Staatliches } from "@next/font/google";
import { SessionProvider } from "next-auth/react";
import {
	QueryClient,
	QueryClientProvider,
} from '@tanstack/react-query'
const queryClient = new QueryClient()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="bg-grad-frame h-screen w-auto">
      <SessionProvider>
        <Component {...pageProps} />
      </SessionProvider>
    </div>
  );
}
