/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                "my-blue": "#575ef5",
                "my-pink": "#cf26f5",
                "my-red": "#f52255",
                "my-sky": "#05afec",
            },
        },
    },
    plugins: [],
};
