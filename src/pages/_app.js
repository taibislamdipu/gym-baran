import "@/styles/globals.css";
import "aos/dist/aos.css";
import ScrollToTop from "react-scroll-to-top";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <ScrollToTop smooth />
    </>
  );
}
