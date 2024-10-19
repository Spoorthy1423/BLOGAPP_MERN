/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Your component paths
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}", // Include Flowbite components
    "node_modules/flowbite/**/*.{js,jsx,ts,tsx}", // Include Flowbite styles
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
