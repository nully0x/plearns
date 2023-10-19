import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
       hero:"url(/images/hero-bg.png)",
       test:"url(/images/test.png)"
      },
      colors:{
        primary:{
          dark_green:"#007D51",
          green:"#4CAF50",
          orange:"#FFA500",
          coral:"#FF6347",
          blue:"#3498DB",
          yellow:"#FFD700",
          gray:"#1E1E1E",
          gray_body:"#404040"
        },
       light:{
          white:"#FFFFFF",
          neutral:{
            1:"#F8F8F8",
            2:"#F4F4F4",
            3:"#EDEDED",
            4:"#DEDEDE",
            5:"#BBBBBB",
            6:"#999999",
            7:"#777777",
          }
        },
        dark:{
          1:"#000F15" // dark gray
        }
      },
      boxShadow:{
        "button":"0px 1px 3px 1px rgba(0, 0, 0, 0.15), 0px 1px 2px 0px rgba(0, 0, 0, 0.30)"
      },
      fontFamily:{
        "sofia-pro":"Sofia Pro, sans-serif;"
      },
    },
  },
  plugins: [],
}
export default config
