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
              <h1 className="ms-3 text-2xl font-semibold">Mi az a csiga?</h1>
            </header>
            <p className="mt-5 text-justify">
              A csiga egy egyszerű gép, amely egy tengely körül forgó tárcsából és a rajta átvetett
              kötélből (vagy láncból) áll. Elsődleges célja az erőátvitel megkönnyítése:
              segítségével kisebb erővel emelhetünk nehéz tárgyakat, vagy kényelmesebb irányba
              terelhetjük a kifejtett erőt. Hol találkozhatsz vele? Építkezési daruknál,
              vitorlásokon, edzőtermi gépeken vagy akár a színházi díszletek mozgatásánál.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-4 shadow">
            <header className="flex items-center">
              <div className="inline-flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-fuchsia-600">
                <span
                  className="material-symbols-outlined text-white"
                  style={{ fontSize: "2.5rem", lineHeight: "1" }}
                >
                  anchor
                </span>
              </div>
              <h1 className="ms-3 text-2xl font-semibold">Állócsiga</h1>
            </header>
            <p className="mt-5 text-justify">
              Az állócsiga tengelye rögzítve van, így a tárcsa nem mozdul el a teherrel együtt.
              Ennél a típusnál nem spórolunk meg erőt, de megváltoztatjuk annak irányát.
              <div className="mt-5 rounded-lg border border-blue-200 bg-blue-50 p-4">
                <p className="mb-1 text-sm text-gray-600">Működése:</p>
                <code className="text-blue-900">F = G</code>
              </div>
              <div className="mt-5 rounded-lg border border-green-200 bg-green-50 p-4">
                <p className="mb-1 text-sm text-gray-600">Előnye:</p>
                <code className="text-sm text-green-900">
                  Sokkal könnyebb egy súlyt lefelé húzva (saját testsúlyunkat is bevetve) felemelni,
                  mint puszta kézzel felfelé rángatni.
                </code>
              </div>
            </p>
          </div>

          <div className="rounded-2xl bg-white p-4 shadow">
            <header className="flex items-center">
              <div className="inline-flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-green-600">
                <span
                  className="material-symbols-outlined text-white"
                  style={{ fontSize: "2.5rem", lineHeight: "1" }}
                >
                  bolt
                </span>
              </div>
              <h1 className="ms-3 text-2xl font-semibold">Mozgócsiga</h1>
            </header>
            <p className="mt-5 text-justify">
              A mozgócsiga egyik vége rögzített, a tárcsa pedig a teherrel együtt mozog. Ez a típus
              felezi a kifejtendő erőt, cserébe viszont kétszer olyan hosszú kötelet kell behúznunk.
              <div className="mt-5 rounded-lg border border-blue-200 bg-blue-50 p-4">
                <p className="mb-1 text-sm text-gray-600">Működése:</p>
                <code className="text-blue-900">F = G/2</code>
              </div>
              <div className="mt-5 rounded-lg border border-amber-200 bg-amber-50 p-4">
                <p className="mb-1 text-sm text-gray-600">A fizika ára:</p>
                <code className="text-sm text-amber-900">
                  Amit nyerünk az erőn, azt elveszítjük az úton. Ha 1 métert emelnénk a tárgyon, 2
                  méter kötelet kell meghúznunk.
                </code>
              </div>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
