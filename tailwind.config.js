/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#10002b",
        semiForeColor: "#240046",
        forecolor: "#3c096c",
        forecolor1: "#9d4edd",
        btn: "#e0aaff",
        lightColor: "#e0aaff",

        textColor1: "#10002b",
      },
    },
  },
  plugins: [],
};
