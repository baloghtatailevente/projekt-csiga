type SearchParams = {
  G?: string;
  r?: string;
};

export default async function PageWithSearchParams({
  searchParams,
}: {
  searchParams: Promise<SearchParams>;
}) {
  const p = await searchParams;
  const G: number = Number(p.G) || 10;
  const r: number = Number(p.r) || 2;

  const ero: number = G/2;

  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <div className="flex w-100 flex-col rounded-full bg-white p-3 shadow-2xl">
        <form className="flex flex-col gap-4 bg-gray-50">
          <p className="text-center text-xl font-semibold">Mozgó csigára ható érő kiszámítása</p>
          <div>
            <label className="text-xl font-semibold text-blue-500" htmlFor="G">
              G=
            </label>
            <input
              className="input border-2 border-blue-500 input-primary text-xl"
              defaultValue={G}
              id="G"
              name="G"
              required
              type="text"
            />
          </div>
          <div>
            <label className="text-xl font-semibold text-blue-500" htmlFor="r">
              r=
            </label>
            <input
              className="input border-2 border-blue-500 input-primary text-xl"
              defaultValue={r}
              id="r"
              name="r"
              required
              type="text"
            />
          </div>
          <div className="flex justify-center">
            <input className="hidden" type="submit" value="Számol" />
          </div>
          <div className="flex justify-around text-xl font-semibold text-blue-500">
            <p>F={ero.toFixed(2)} N</p>
          </div>
        </form>
      </div>
    </div>
  );
}
