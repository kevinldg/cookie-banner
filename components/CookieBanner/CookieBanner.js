import Cookies from "js-cookie";
import { useState, useEffect } from "react";

export default function CookieBanner() {
  const [isAccepted, setIsAccepted] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);

    if (Cookies.get("cookieConsent")) {
      setIsAccepted(true);
    }
  }, []);

  const handleAccept = () => {
    setIsAccepted(true);
    Cookies.set("cookieConsent", true, { expires: 365 });
  };

  const handleRemove = () => {
    setIsAccepted(false);
    Cookies.remove("cookieConsent");
  };

  if (!isMounted) {
    return null;
  }

  if (isAccepted) {
    return (
      <div className=" bg-neutral-700 text-white p-4 flex flex-col gap-4">
        <p>Cookies are currently consent on this website.</p>
        <button
          onClick={handleRemove}
          className="px-2 py-1 bg-blue-500 text-white rounded w-fit"
        >
          Revoke permission
        </button>
      </div>
    );
  }

  return (
    <div className=" bg-neutral-700 text-white p-4 flex flex-col gap-4">
      <p>
        This website uses cookies. By using this website, you consent to the use
        of cookies.
      </p>
      <button
        onClick={handleAccept}
        className="px-2 py-1 bg-blue-500 rounded w-fit"
      >
        Allow cookies
      </button>
    </div>
  );
}
