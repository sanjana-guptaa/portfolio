/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#C8A2C8", // Lilac branding color
        primaryHover: "#A97BA9", // Deeper lilac for hover state
        background: "#F5F3FA", // Soft lilac-toned background
        textPrimary: "#2C2C54", // Rich navy for high contrast text
        textSecondary: "#787993", // Muted gray-lilac for subtle text
        cardBackground: "#E6E0F4", // Slightly darker lilac for cards
        accent: "#FF6B6F", // Vibrant coral for accents and actions
        secondaryAccent: "#7F86D2", // Lavender for secondary accents (e.g., links, tags)
        darkBackground: "#1F1F2E", // Dark mode
        darkCardBackground: "#2C2C54",
        darkTextPrimary: "#F5F3FA",
        darkTextSecondary: "#A1A1A1",
      },
      fontFamily: {
        heading: ["Poppins", "sans-serif"],
        body: ["Inter", "sans-serif"],
        accent: ["Playfair Display", "serif"],
      },
      screens: {
        sm2: "930px",
        lg2: "1100px",
      },
      keyframes: {
        scroll: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
      animation: {
        scroll: "scroll 20s linear infinite",
      },
      boxShadow: {
        "hero-light":
          "0px 20px 50px rgba(134, 64, 134, 0.8), 0px 0px 30px rgba(134, 64, 134, 0.9)",
        "hero-dark-soft":
          "0px 20px 50px rgba(220, 100, 255, 0.4), 0px 0px 30px rgba(220, 100, 255, 0.6)",
        "hero-dark-rich":
          "0px 15px 40px rgba(40, 40, 100, 0.8), 0px 0px 20px rgba(60, 60, 150, 0.7)",
      },
      filter: {
        light: "brightness(1) contrast(1) grayscale(0.8)",
        dark: "brightness(0.5) grayscale(0.8) contrast(1.2) saturate(0.5)",
      },
    },
  },
  plugins: [require("tailwindcss-filters")],
};
