export default function CookieBanner() {
  return (
    <div className=" bg-neutral-700 text-white p-4 flex flex-col gap-4">
      <p>
        This website uses cookies. By using this website, you consent to the use
        of cookies.
      </p>
      <div className="flex gap-4">
        <button className="px-2 py-1 bg-blue-500 rounded">Zustimmen</button>
        <button className="px-2 py-1 bg-blue-500 rounded">Ablehnen</button>
      </div>
    </div>
  );
}
