/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                dark: {
                    bg: '#000000',
                    text: '#A1A1AA',
                    heading: '#FFFFFF',
                },
                light: {
                    bg: '#FFFFFF',
                    text: '#4B5563',
                }
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                mono: ['monospace'],
            }
        },
    },
    plugins: [],
    darkMode: 'class', 
}
