module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}", // For Next.js pages
    "./components/**/*.{js,ts,jsx,tsx}", // For Next.js components
    "./src/**/*.{html,js,jsx,ts,tsx}", // For React or Next.js components and files
    "./public/index.html", // For plain HTML files
    "./views/**/*.blade.php", // For Blade files in Laravel
    "./resources/**/*.{js,jsx,ts,tsx,vue}", // For Vue.js or other JS/TS files in Laravel
  ],
  theme: {
    extend: {
      screens: {
        xs: { max: "640px" }, // Added custom xs breakpoint
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],

        sans: ['"Source Sans Pro"', "system-ui", "sans-serif"], // Added Source Sans Pro
        "dm-sans": ["DM Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
