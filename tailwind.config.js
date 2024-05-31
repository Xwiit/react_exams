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
        delete: "#f72585",
        edit: "#e0fbfc",
        english: "#fdc5f5",
        math: "#f20089",

        textColor1: "#10002b",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".scrollbar-thin": {
          scrollbarWidth: "thin",
          scrollBarColor: "#3c096c",
        },
        ".scrollbar-webkit": {
          "&::-webkit-scrollbar": {
            width: "8px",
          },

          "$::-webkit-scrollbar-track": {
            background: "white",
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "#240046",
            borderRadius: "20px",
            border: "1px solid white",
          },
        },
      };
      addUtilities(newUtilities, ["responsive", "hover"]);
    },
  ],
};
