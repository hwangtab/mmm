module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        'neon-pink': '#FF1493',
        'electric-blue': '#0000FF',
        'acid-green': '#7FFF00',
        'cyber-yellow': '#FFD700',
        'purple-haze': '#4B0082',
        'retro-orange': '#FF4500',
        'background': '#120052',
      },
      fontFamily: {
        'title': ['HSJiptokki-Black', 'sans-serif'],
        'subtitle': ['HSSanTokki20-Regular', 'sans-serif'],
        'body': ['LeeSeoyun', 'sans-serif'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}