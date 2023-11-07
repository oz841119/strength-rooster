const {nextui} = require("@nextui-org/react");
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}', // Note the addition of the `app` directory.
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
 
    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    // Next UI
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  corePlugins: {
    preflight: true,
  },
  theme: {
    extend: {
      colors: {
        "card-title": "#A2A8B4"
      },
      width: {
        '48/100': '48%'
      }
    },
  },
  darkMode: "class",
  plugins: [
    nextui({
    })
  ]
}

