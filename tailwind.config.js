/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 1024px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1400px",
      // => @media (min-width: 1280px) { ... }

      "3xl": "1599px",
      // => @media (min-width: 1280px) { ... }
    },
    extend: {
      fontSize: {
        "2xl": "28px",
        "3xl": "38px",
        "4xl": "45px",
        "5xl": "50px",
        "6xl": "60px",
        "7xl": "72px",
      },
      colors: {
        light_black: "#373737",
        dark_black: "#1f1f1f",
        dark_black2: "#0b0b0b",
        blue: "#4F3BE5",
        dark_blue: "#20187B",
        dark_blue2: "#263FDE",
        dark_blue3: "#5953EF",
        dark_blue4: "#2237b4",
        dark_blue5: "#181433",
        off_white: "#dFdfdf",
        light_white: "#F6F9FC",
        gray: "#494848",
        light_gray: "#403A53",
        light_gray2: "#5A556B",
        light_gray3: "#5e5e5e",
        dark_gray: "#5F6D7E",
        light_theme: "#272626",
      },
      backgroundImage: {
        "common-gradient":
          "linear-gradient(93deg, #423CE3 -1.15%, #8635ED 110.24%)",
        "component-gradient":
          "linear-gradient(102deg, #20187B 14.35%, #843AB2 108.67%)",
        "btn-gradient":
          "linear-gradient(92deg, #263FDE -22.86%, #A233F2 123.37%)",
        "btn2-gradient":
          "linear-gradient(102deg, #4B3BE4 14.26%, #7836EB 66.64%)",
        "bg-gradient":
          "linear-gradient(89deg, rgba(5, 10, 37, 0.84) 53.75%, rgba(1, 1, 4, 0.37) 105.7%, rgba(0, 0, 0, 0.31) 112.84%)",
          "load-more":"linear-gradient(92deg, #FFF -22.86%, #A233F2 123.37%)",

      },
      boxShadow: {
        new: "13px 13px 60px 0px rgba(0, 0, 0, 0.10);",
        nav_shadow: "0px 4px 9px 0px rgba(0, 0, 0, 0.05);",
        form_shadow: "4px 4px 7px 0px rgba(0, 0, 0, 0.02);",
      },
    },
  },
  plugins: [],
};
