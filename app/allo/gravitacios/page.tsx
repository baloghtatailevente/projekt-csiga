type SearchParams = {
  F?: string;
  r?: string;
};

export default async function PageWithSearchParams({
  searchParams,
}: {
  searchParams: Promise<SearchParams>;
}) {
  const p = await searchParams;
  const F: number = Number(p.F) || 3;
  const r: number = Number(p.r) || 5;

  const gravitacios: number = (F * r) / r;

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-blue-200">
      <div className="flex w-100 flex-col rounded-full bg-white p-3 shadow-2xl">
        <form className="flex flex-col gap-4 bg-gray-50">
          <p className="text-center text-xl font-semibold">Álló csigára ható gravitációs érő kiszámítása</p>
          <div>
            <label className="text-xl font-semibold text-blue-500" htmlFor="G">
              F=
            </label>
            <input
              className="input border-2 border-blue-500 input-primary text-xl"
              defaultValue={F}
              id="F"
              name="F"
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
            <p>G={gravitacios.toFixed(2)} N</p>
          </div>
        </form>
      </div>
    </div>
  );
}
