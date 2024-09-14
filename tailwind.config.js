/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./app/**/*.{js,jsx}",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        accentColor: "#E1AA74",
        baseColor: "#3876BF",
        prime: "#192655",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      backgroundImage: {
        aboutMePicture : "url('/aboutMePicture.jpg')",
        hero: "url('/Bg_Hero.jpg')",
        SoloTreningIcon: "url('/SoloTreningIcon.png')",
        BoyIcon: "url('/BoyIcon.png')",
        CoupleTrenningIcon: "url('/CoupleTrenningIcon.png')",
        dieta: "url('/Bg_MyServicesDiet.jpg')",
        trening: "url('/Bg_MyServicesTrening.jpg')",
        dietaTrening: "url('/Bg_MyServicesMix.png')",
        smoke: "url('/smoke.png')",
        apple: "url('/Bg_Hero.jpg')",
        smallDiet: "url('/Bg_SmallDiet.jpg')",
        bigDiet: "url('/Bg_BigDiet.jpg')",
        calculator: "url('/calculator.jpg')",
        stepsBg: "url('/steps-bg.jpg')",
        flex: "url('/FlexMen.png')",
        clippboard: "url('/clippboard.png')",
        bench: "url('/trenner-bench.jpg')",
        clipboard: "url('/trainerHero1.png')",
        TakingWeight: "url('/TakingWeight.jpg')",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
