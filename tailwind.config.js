/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: [
    {
      pattern: /^bg-(red|blue|green|yellow|purple|pink|fuchsia|indigo|gray|black|white|orange|teal|cyan|lime|emerald|violet|rose|slate|zinc|neutral|stone|amber|sky)-(400|500|600|700|800|900)$/,
    },
    {
      pattern: /^border-(red|blue|green|yellow|purple|pink|fuchsia|indigo|gray|black|white|orange|teal|cyan|lime|emerald|violet|rose|slate|zinc|neutral|stone|amber|sky)-(200)$/,
    },
    {
      pattern: /^bg-(red|blue|green|yellow|purple|pink|fuchsia|indigo|gray|black|white|orange|teal|cyan|lime|emerald|violet|rose|slate|zinc|neutral|stone|amber|sky)-(50)$/,
    },
    {
      pattern: /^text-(red|blue|green|yellow|purple|pink|fuchsia|indigo|gray|black|white|orange|teal|cyan|lime|emerald|violet|rose|slate|zinc|neutral|stone|amber|sky)-(900)$/,
    },
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
