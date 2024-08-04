/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  important: "#root",
  theme: {
    colors: {
      grey: "#424242",
      orange: "#ff4c00",
      blue: "#148ffa",
    },
    extend: {
      boxShadow: {
        navbar: "0 2px 16px 0 rgba(0, 0, 0, 0.1)",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        biennalelight: ["biennalelight", "sans-serif"],
        biennalemedium: ["biennalemedium", "sans-serif"],
        biennalesemibold: ["biennalesemibold", "sans-serif"],
      },
    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        ".nav-link": {
          "@apply relative cursor-pointer select-none text-grey transition-colors duration-200":
            {},
          "&:hover": {
            "@apply text-blue": {},
          },
          "&::after": {
            content: '""',
            "@apply absolute left-1/2 bottom-0 w-0 h-[4px] bg-orange transition-all duration-200 ease-in-out":
              {},
          },
          "&:hover::after": {
            "@apply w-full left-0": {},
          },
        },
      });
    },
  ],
};
