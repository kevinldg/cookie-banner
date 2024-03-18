import CookieBanner from "@/components/CookieBanner/CookieBanner";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <CookieBanner />
      <div className="p-4">
        <Component {...pageProps} />
      </div>
    </>
  );
}
