import Image from "next/image";

export default function ComponentName() {
  return (
    <>
      <h1 className="mt-5 text-center text-5xl font-semibold">Csigák a fizikában</h1>
      <p className="mx-auto ms-auto me-auto mt-2 w-130 text-center text-xl">
        Fedezd fel az egyszerű gépek világát és tanuld meg, hogy könnyítik meg a munkánkat!
      </p>

      <div className="mt-10 flex justify-center px-6">
        <div className="grid w-full max-w-5xl grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-2xl bg-white p-4 shadow">
            <header className="flex items-center">
              <div className="inline-flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-blue-400">
                <span
                  className="material-symbols-outlined text-white"
                  style={{ fontSize: "2.5rem", lineHeight: "1" }}
                >
                  info
                </span>
              </div>
              <h1 className="ms-3 text-xl font-semibold">Mi az a csiga?</h1>
            </header>
          </div>
          <div className="rounded-2xl bg-red-200 p-4">Kártya 2</div>
          <div className="rounded-2xl bg-red-200 p-4">Kártya 3</div>
        </div>
      </div>
    </>
  );
}
