type SearchParams = {
  G?: string;
  F?: string;
  r?: string;
};

export default async function PageWithSearchParams({
  searchParams,
}: {
  searchParams: Promise<SearchParams>;
}) {
 const p = await searchParams;
 const G: number = Number(p.G) || 5;
 const F: number = Number(p.F) || 10;
 const r: number = Number(p.r) || 15;

const G : number = F*r/r;
const F: number = G*r/r;

  return( <div>
    
  </div>
)}
