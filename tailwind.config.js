/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "light-red-text": "hsl(356,100%,66%)",
        "hover-red": "hsl(355, 100%, 74%)",
        "headings-blue": "hsl(208, 49%, 24%)",
        "text-white": "hsl(0, 0%, 100%)",
        "blue-footer-text": "hsl(240, 2%, 79%)",
        "v-d-g-b": "hsl(207, 13%, 34%)",
        "footer-bg": "hsl(240, 10%, 16%)",
        "v-light-header-gradient": "hsl(13, 100%, 72%)",
        "light-red": "hsl(353, 100%, 62%)",
        "bg-gradient-body": "hsl(237, 17%, 21%)",
        "desaturated-blue": "hsl(237, 23%, 32%) ",
      },
      backgroundImage: {
        "header-bg": "url(/src/assets/images/header-bg-desk.svg)",
        "header-bg-mob": "url(/src/assets/images/header-bg-mob.svg)",
        "circle-bg": "url(/src/assets/images/circles.svg)",
      },
    },
  },
  plugins: [require("daisyui")],
};
