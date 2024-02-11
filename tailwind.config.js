/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./public/***.{html,js}/'],
    darkMode: 'class',
    theme: {
        container : {
            center:'true',
            padding : '16px', 
        },
        extend: {
            colors: {
                primary: '#14b8a6',
                dark: '#0f172a',
                hover: '#2dd4bf',
                secondary : '#64748b',
            },
            screen:{
                '2xl' : '1320px'
            }
        },
    },
    plugins: [],
};
