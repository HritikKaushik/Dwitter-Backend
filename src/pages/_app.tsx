import "../styles/globals.css";
import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThirdwebProvider, ChainId } from "@thirdweb-dev/react";
import Header from "../components/Header";
import {Poppins} from "@next/font/google";


const poppins = Poppins({subsets:['devanagari'],weight:'200'})
export default function App({ Component, pageProps }: AppProps) {
  // the chainId our app wants to be running on
  // for our example the Polygon Mumbai Testnet
  const desiredChainId = ChainId.Polygon;

  // Create a client
  const queryClient = new QueryClient();

  return (
    <main className={poppins.className}>
    <ThirdwebProvider desiredChainId={desiredChainId}>
      <QueryClientProvider client={queryClient}>
        <Header />
        <Component {...pageProps} />
      </QueryClientProvider>
    </ThirdwebProvider>
    </main>
  );
}
