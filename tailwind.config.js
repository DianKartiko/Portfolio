/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['index.html'],
    darkMode: 'class',
    theme: {
        container: {
            center: 'true',
            padding: '16px',
        },
        extend: {
            colors: {
                primary: '#14b8a6',
                dark: '#0f172a',
                hover: '#2dd4bf',
                secondary: '#64748b',
                html : '#FF5733'
            },
            screen: {
                '2xl': '1320px',
            },
        },
    },
    plugins: [],
};
