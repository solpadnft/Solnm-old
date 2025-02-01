"use client";
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import { WalletProvider } from "@solana/wallet-adapter-react";
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";
import type { AppProps } from "next/app";
import Head from "next/head";
import "@/styles/globals.css";

import "@solana/wallet-adapter-react-ui/styles.css";
import { ChakraProvider } from '@chakra-ui/react'
import { Footer } from "@/components/tools/Footer";
import { Footer2 } from "@/components/mobile/Footer2";
import { Navbar } from "@/components/tools/Navbar";
import { Navbar2 } from "@/components/mobile/Navbar2";

import React, { useMemo } from "react";
import {
  SolflareWalletAdapter,
  UnsafeBurnerWalletAdapter,
  LedgerWalletAdapter,
  MathWalletAdapter,
  Coin98WalletAdapter,
  
  /* ... other adapters ... */
} from '@solana/wallet-adapter-wallets';
import styles from "../styles/Home.module.css";

export default function App({ Component, pageProps }: AppProps) {
  const network = WalletAdapterNetwork.Mainnet;
  const wallets = useMemo(
    () => [
      new SolflareWalletAdapter(),
      new LedgerWalletAdapter(),
      new Coin98WalletAdapter(),
      new MathWalletAdapter(),
      new UnsafeBurnerWalletAdapter(),

    ],
    [network],
  );
  return (
    <>
      <Head>
      <title>SOLNM</title>
      <script async src="https://tally.so/widgets/embed.js"></script>
      </Head>
      
      <ChakraProvider>
        <WalletProvider wallets={wallets}>
            <WalletModalProvider>
                <Navbar />
                <div className={styles.container2}>
                <Navbar2  />
                </div>
                <Component {...pageProps} />
                <Footer />
                <div className={styles.container2}>
                <Footer2 />
                </div>
            </WalletModalProvider>
        </WalletProvider>
      </ChakraProvider>
    </>
  );
}
