import "../styles/globals.css";
import { useEffect, useState } from "react";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import Router from "next/router";

Router.events.on("routeChangeStart", () => {
  const loader = document.getElementById("globalLoader");
  if (loader) loader.style.display = "flex";
});
Router.events.on("routeChangeComplete", () => {
  const loader = document.getElementById("globalLoader");
  if (loader) loader.style.display = "none";
});
Router.events.on("routeChangeError", () => NProgress.done());
export default function App({ Component, pageProps }) {
  const [isShown, setShown] = useState(false)
  useEffect(() => {
    // screen size
    if (window.innerWidth < 768) {
      setShown(true)
    }
    if (typeof window !== "undefined") {
      const loader = document.getElementById("globalLoader");
      if (loader) loader.style.display = "none";
    }
  }, []);
  return (
    <Component {...pageProps} />
  );
}
