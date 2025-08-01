import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Vulfpeck風のナチュラルカラーパレット
        cream: {
          50: "#FDFCFB",
          100: "#FAF8F5",
          200: "#F5F0E8",
          300: "#EDE4D3",
          400: "#E2D4BB",
          500: "#D4C2A2",
          600: "#B8A183",
          700: "#9A8268",
          800: "#7C6752",
          900: "#5F4F40",
        },
        brown: {
          50: "#FAF8F6",
          100: "#F3EDE7",
          200: "#E5D8C8",
          300: "#D4BCA1",
          400: "#C09B79",
          500: "#A77E58",
          600: "#8E6644",
          700: "#745238",
          800: "#5E4330",
          900: "#4E3829",
        },
        forest: {
          50: "#F3F6F4",
          100: "#E1E9E3",
          200: "#C4D3C8",
          300: "#9BB4A2",
          400: "#6F9179",
          500: "#4F7358",
          600: "#3D5C45",
          700: "#334A39",
          800: "#2B3D30",
          900: "#243229",
        },
        // ベースカラー
        background: "#FAF8F5",
        foreground: "#2C2416",
      },
      fontFamily: {
        sans: ["Inter", "Helvetica Neue", "Arial", "sans-serif"],
        display: ["Archivo", "Inter", "sans-serif"],
      },
      fontSize: {
        "2xs": ["0.625rem", { lineHeight: "0.875rem" }],
      },
      spacing: {
        "18": "4.5rem",
        "88": "22rem",
        "104": "26rem",
        "112": "28rem",
      },
      animation: {
        "fade-in": "fadeIn 0.3s ease-in-out",
        "slide-up": "slideUp 0.4s ease-out",
        "slide-down": "slideDown 0.4s ease-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        slideDown: {
          "0%": { transform: "translateY(-20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
      typography: {
        DEFAULT: {
          css: {
            color: "#2C2416",
            a: {
              color: "#4F7358",
              "&:hover": {
                color: "#3D5C45",
              },
            },
            h1: {
              color: "#2C2416",
              fontWeight: "700",
              fontFamily: "Archivo, sans-serif",
            },
            h2: {
              color: "#2C2416",
              fontWeight: "600",
              fontFamily: "Archivo, sans-serif",
            },
            h3: {
              color: "#2C2416",
              fontWeight: "600",
              fontFamily: "Archivo, sans-serif",
            },
            code: {
              backgroundColor: "#F5F0E8",
              color: "#2C2416",
              padding: "0.25rem 0.375rem",
              borderRadius: "0.25rem",
              fontWeight: "500",
            },
            "code::before": {
              content: '""',
            },
            "code::after": {
              content: '""',
            },
            blockquote: {
              borderLeftColor: "#4F7358",
              color: "#5E4330",
            },
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
}
