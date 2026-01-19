/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#E29578",
                "primary-light": "#FFDDD2",
                secondary: "#BCAC9B",
                accent: "#D4AF37",
                bg: "#FFF9F5",
                text: "#2D3142",
                "text-light": "#4F5D75",
            },
            fontFamily: {
                serif: ['"Playfair Display"', 'serif'],
                sans: ['Montserrat', 'sans-serif'],
            },
            boxShadow: {
                'glass': '0 8px 32px 0 rgba(226, 149, 120, 0.1)',
            }
        },
    },
    plugins: [],
}
