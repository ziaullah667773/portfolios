import "../styles/globals.css";

import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import Layout from "../components/Layout";
import Layout1 from "../components/portfolio/Layout1";
import Layout2 from "../components/schoolmanagementsystem/Layout2";
import { useState } from "react";
import { useEffect } from "react";


export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
 

  if (router.pathname.startsWith("/portfolio")) {
    return (
      <Layout>
        <Layout1>
          <Component {...pageProps} />
        </Layout1>
       </Layout>
    );
  } else if(router.pathname.startsWith("/schoolmanagementsystem")) {
    return (
      <Layout>
        <Layout2>
          <Component {...pageProps} />
        </Layout2>
       </Layout>
    );
  } else{
    return(
      <Layout>
      <Component {...pageProps} />
    </Layout>
    )
  }
}
