"use client";

import { Code, Mail } from "lucide-react";

interface User {
  id: string;
  name: string;
  title: string;
  email: string;
  github: string;
  color: string;
}

// Egy külön kis komponens a kártyának, hogy ne ismételjük magunkat
const ContactCard = ({ user }: { user: User }) => (
  <div className="w-full max-w-sm overflow-hidden rounded-2xl border border-gray-200 bg-white p-4 shadow-xl transition-all hover:shadow-2xl">
    <div className={`h-2 bg-gradient-to-r ${user.color}`} />

    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-extrabold tracking-tight text-gray-900">{user.name}</h1>
        <p className="mt-1 text-xs font-semibold tracking-widest">
          {user.title}
        </p>
      </div>

      <div className="space-y-4">
        <div className="group flex items-center">
          <Mail className="h-4 w-4 text-gray-400 transition-colors" />
          <a
            className="ml-3 text-sm font-medium text-gray-600"
            href={`mailto:${user.email}`}
            rel="noopener noreferrer"
            target="_blank"
          >
            {user.email}
          </a>
        </div>
        <br />

        <div className="group flex items-center">
          <Code className="h-4 w-4 text-gray-400 transition-colors" />
          <a
            className="ml-3 text-sm font-medium text-gray-600"
            href={user.github}
            rel="noopener noreferrer"
            target="_blank"
          >
            {user.github}
          </a>
        </div>
      </div>
    </div>

    <div className="flex items-center justify-between border-t border-gray-100 bg-gray-50 px-6 py-3">
      <span className="text-[10px] font-bold tracking-wider text-gray-400 uppercase">
        {user.id}
      </span>
      <div className="h-2 w-2 rounded-full" />
    </div>
  </div>
);

const BusinessPage = () => {
  const users = [
    {
      id: "Számolási Logikák",
      name: "Gaál Kristóf Zoltán",
      title: "Számolási Logikák",
      email: "gaal.kristof.zoltan@students.jedlik.eu",
      github: "https://github.com/gaal-kristof-zoltan",
      color: "from-cyan-500 to-blue-500",
    },

    {
      id: "Főoldal, Számolási Router",
      name: "Balogh-Tatai Levente",
      title: "Főoldal, Számolási Router",
      email: "baloghtatai.levente@students.jedlik.eu",
      github: "https://github.com/baloghtatailevente",
      color: "from-purple-500 to-pink-500",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="mx-auto max-w-5xl">
        <h1 className="mt-5 mb-5 text-center text-5xl font-semibold">Csapatunk</h1>

        <div className="m-4 flex flex-wrap justify-center gap-4">
          {users.map((user) => (
            <ContactCard key={user.id} user={user} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BusinessPage;
