module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        'infow': 'calc(100% - 28rem)',
        'infoh': 'calc(100% - 8rem)'
      }
    },
  },
  plugins: [],
}
