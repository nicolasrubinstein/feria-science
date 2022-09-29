import "../styles/globals.scss";
import type { AppProps } from "next/app";
import { NameContext } from "../context/NameContext";
import { useEffect, useState } from "react";
import Layout from "../components/layout/Layout";
import { initApp } from "../firebase";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }: AppProps) {
  const _app = initApp();
  const [name, setName] = useState("");
  const router = useRouter();

  useEffect(() => {
    const hasParticipated = localStorage.getItem("participated");
    if (hasParticipated) router.push("/yaparticipo");
    const n = localStorage.getItem("name");
    if (n) {
      setName(n);
    } else {
      const submittedName = prompt(
        "¡Te damos la bienvenida a la feria de ciencia! Escribí tu nombre y apellido para poder comenzar:"
      );
      setName(submittedName || "");
      localStorage.setItem("name", submittedName || "");
    }
  }, []);

  return (
    <NameContext.Provider value={{ name, setName }}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </NameContext.Provider>
  );
}

export default MyApp;
