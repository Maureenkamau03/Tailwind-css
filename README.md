To create package.json run 
- npm init -y

to update node modules run
- npm i -D tailwindcss

To create tailwindcss config file run
- npx tailwindcss init

In the config file add this
- content: ['./*.html']

Add this to package.json
-  "scripts": {
    "build": "tailwindcss -i ./src/input.css  -o ./css/main.css",
    "watch": "tailwindcss -i ./src/input.css  -o ./css/main.css --watch"}

To run the app run 
- npm run build

To run the app and keep building run
- npm run watch

to add breakpoints add this script to the config file under theme
- screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px"
    }
