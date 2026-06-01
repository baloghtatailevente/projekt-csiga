"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AlapokPage() {
  const router = useRouter();
  
  // State-ek a bemeneti mezőkhöz
  const [inputs, setInputs] = useState({
    G: "",
    F: "",
    r: "",
   d: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const handleNavigation = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { G, F, r , d } = inputs;

    // Logika az irányításhoz
    if (G && r) {
      // Ha G és r megvan -> ero oldal
      router.push(`/allo/ero?G=${G}&r=${r}`);
    } else if (F && r) {
      // Ha F és r megvan -> gravitacios oldal
      router.push(`/allo/gravitacios?F=${F}&r=${r}`);
    } else if (d) {
      // Ha csak r van meg -> sugar oldal
      router.push(`/allo/sugar?r=${d}`);
    } else {
      alert("Kérlek, töltsd ki a megfelelő mezőket a navigációhoz!");
    }
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-4">
      <div className="flex w-full max-w-md flex-col items-center rounded-tr-[50px] bg-gray-50 p-8 shadow-2xl">
        <h1 className="text-xl font-semibold text-center mb-6">Álló csiga paramétereinek megadása</h1>

        <form onSubmit={handleNavigation} className="w-full flex flex-col gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-600">G (Gravitációs állandó / Súly):</label>
            <input
              type="number"
              name="G"
              value={inputs.G}
              onChange={handleChange}
              className="w-full rounded-xl border border-gray-300 p-3 outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="G értéke..."
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600">F (Erő):</label>
            <input
              type="number"
              name="F"
              value={inputs.F}
              onChange={handleChange}
              className="w-full rounded-xl border border-gray-300 p-3 outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="F értéke..."
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600">r (Sugár):</label>
            <input
              type="number"
              name="r"
              value={inputs.r}
              onChange={handleChange}
              className="w-full rounded-xl border border-gray-300 p-3 outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="r értéke..."
            />
          </div>

             <div>
            <label className="block text-sm font-medium text-gray-600">d (Átmérő):</label>
            <input
              type="number"
              name="d"
              value={inputs.d}
              onChange={handleChange}
              className="w-full rounded-xl border border-gray-300 p-3 outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="d értéke..."
            />
          </div>

          <button
            type="submit"
            className="mt-4 w-full bg-blue-500 text-white font-bold py-3 rounded-full hover:bg-blue-600 transition-transform active:scale-95"
          >
            Számítás és Navigáció
          </button>
        </form>
      </div>
    </div>
  );
}