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
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors:{
        primary:{
          dark_green:"#007D51",
          green:"#4CAF50",
          orange:"#FFA500",
          coral:"#FF6347",
          blue:"#3498DB",
          yellow:"#FFD700"
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
            7:"#777777"
          }

        }
      }
    },
  },
  plugins: [],
}
export default config
