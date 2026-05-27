export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        acimco: {
          sky: "#00A9E0",
          deep: "#003A5D",
          petrol: "#005B7F",
          pale: "#EAF8FC",
          green: "#6FAE2E",
          ink: "#1F2933",
          soft: "#F6F8FB"
        }
      },
      fontFamily: {
        sans: ["Inter", "Manrope", "\"Source Sans 3\"", "\"Segoe UI\"", "system-ui", "sans-serif"]
      },
      boxShadow: {
        soft: "0 18px 50px rgba(0, 58, 93, 0.13)"
      }
    }
  },
  plugins: []
};
