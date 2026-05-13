import InfoCard from "@/app/ui/InfoCard";

export default function ComponentName() {
  return (
    <>
      <h1 className="mt-5 text-center text-5xl font-semibold">Csigák a fizikában</h1>
      <p className="mx-auto ms-auto me-auto mt-2 w-130 text-center text-xl">
        Fedezd fel az egyszerű gépek világát és tanuld meg, hogy könnyítik meg a munkánkat!
      </p>

      <div className="mt-10 flex justify-center px-6">
        <div className="grid w-full max-w-5xl grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {/* <div className="rounded-2xl bg-white p-4 shadow">
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
          </div> */}

          <InfoCard
            alerts={[]}
            color="blue"
            description="A csiga egy egyszerű gép, amely egy tengely körül forgó tárcsából és a rajta átvetett
              kötélből (vagy láncból) áll. Elsődleges célja az erőátvitel megkönnyítése:
              segítségével kisebb erővel emelhetünk nehéz tárgyakat, vagy kényelmesebb irányba
              terelhetjük a kifejtett erőt. Hol találkozhatsz vele? Építkezési daruknál,
              vitorlásokon, edzőtermi gépeken vagy akár a színházi díszletek mozgatásánál."
            logo="info"
            title="Mi az a csiga?"
          />

          <InfoCard
            alerts={[]}
            color="fuchsia"
            description=" Az állócsiga tengelye rögzítve van, így a tárcsa nem mozdul el a teherrel együtt.
              Ennél a típusnál nem spórolunk meg erőt, de megváltoztatjuk annak irányát."
            logo="info"
            title="Állócsiga"
          />

          <InfoCard
            alerts={[
              {
                title: "Figyelem",
                description: "A mozgócsiga használata során figyeljen a biztonságra!",
                color: "red",
              },
            ]}
            color="green"
            description="A mozgócsiga egyik vége rögzített, a tárcsa pedig a teherrel együtt mozog. Ez a típus
              felezi a kifejtendő erőt, cserébe viszont kétszer olyan hosszú kötelet kell behúznunk."
            logo="info"
            title="Mozgócsiga"
          />
        </div>
      </div>

      <div className="mx-auto ms-auto me-auto mt-10 grid w-full max-w-5xl grid-cols-1 gap-4 md:grid-cols-2">
        <a
          className="btn rounded-2xl bg-fuchsia-600 text-xl text-white hover:bg-fuchsia-800"
          href="/allo"
        >
          Állócsiga kalkulátor
        </a>

        <a
          className="btn rounded-2xl bg-green-600 text-xl text-white hover:bg-green-800"
          href="/mozgo"
        >
          Mozgócsiga kalkulátor
        </a>
      </div>
    </>
  );
}
