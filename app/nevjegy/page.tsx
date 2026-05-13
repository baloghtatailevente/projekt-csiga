"use client";

import React from 'react';
import { Mail, Code } from 'lucide-react';

// Egy külön kis komponens a kártyának, hogy ne ismételjük magunkat
const ContactCard = ({ user }) => (
  <div className="max-w-sm w-full bg-white rounded-2xl shadow-xl p-4 overflow-hidden border border-gray-200 transition-all hover:shadow-2xl">
    <div className={`h-2 bg-gradient-to-r ${user.color}`} />
    
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-extrabold text-gray-900 tracking-tight">{user.name}</h1>
        <p className="text-blue-600 font-semibold text-xs tracking-widest uppercase mt-1">{user.title}</p>
      </div>

      <div className="space-y-4">
        <div className="flex items-center group">
          <Mail className="w-4 h-4 text-gray-400 group-hover:text-blue-500 transition-colors" />
          <span className="ml-3 text-gray-600 text-sm font-medium">{user.email}</span>
        </div><br/>

        <div className="flex items-center group">
          <Code className="w-4 h-4 text-gray-400 group-hover:text-blue-500 transition-colors" />
          <span className="ml-3 text-gray-600 text-sm font-medium">{user.github}</span>
        </div>
      </div>
    </div>

    <div className="px-6 py-3 bg-gray-50 border-t border-gray-100 flex items-center justify-between">
      <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">{user.id}</span>
      <div className="w-2 h-2 bg-green-500 rounded-full" />
    </div>
  </div>
);

const BusinessPage = () => {
  const users = [
    {
      id: "Fejlesztő-01",
      name: "Gaál Kristóf Zoltán",
      email: "gaal.kristof.zoltan@students.jedlik.eu",
      github: "https://github.com/gaal-kristof-zoltan",
      color: "from-cyan-500 to-blue-500"
    },
    {
      id: "Fejlesztő-02",
      name: "Balogh-Tatai Levente",
      email: "baloghtatai.levente@students.jedlik.eu",
      github: "https://github.com/baloghtatailevente",
      color: "from-purple-500 to-pink-500"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-center text-gray-400 font-bold uppercase tracking-[0.2em] mb-12">Csapatunk</h2>
        
        {/* Itt rakjuk őket egymás mellé (flex vagy grid) */}
        <div className="flex flex-wrap justify-center gap-4 m-4">
          {users.map((user) => (
            <ContactCard key={user.id} user={user} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BusinessPage;