type SearchParams = {
  d?: string;
};

export default async function PageWithSearchParams({
  searchParams,
}: {
  searchParams: Promise<SearchParams>;
}) {
  const p = await searchParams;
  const d: number = Number(p.d) || 20;
 
  const sugar: number = d/2;

  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <div className="flex w-100 flex-col rounded-full bg-white p-3 shadow-2xl">
        <form className="flex flex-col gap-4 bg-gray-50">
          <p className="text-center text-xl font-semibold">Álló csiga sugarának kiszámítása</p>
          <div>
            <label className="text-xl font-semibold text-blue-500" htmlFor="G">
              d=
            </label>
            <input
              className="input border-2 border-blue-500 input-primary text-xl"
              defaultValue={d}
              id="d"
              name="d"
              required
              type="text"
            />
          </div>
          <div className="flex justify-center">
            <input className="hidden" type="submit" value="Számol" />
          </div>
          <div className="flex justify-around text-xl font-semibold text-blue-500">
            <p>r={sugar.toFixed(2)} cm</p>
          </div>
        </form>
      </div>
    </div>
  );
}
