## Setting up Tailwind css
### To create package.json run 
``` 
npm init -y 
```

### To update node modules run
```
 npm i -D tailwindcss
```
### To create tailwindcss config file run
```
npx tailwindcss init
```

### In the config file add this
```
 content: ['./*.html']
```

### Add this to package.json
```
 "scripts": {
    "build": "tailwindcss -i ./src/input.css  -o ./css/main.css",
    "watch": "tailwindcss -i ./src/input.css  -o ./css/main.css --watch"}
```
### To run the app run 
```
 npm run build
```
### To run the app and keep building run
```
npm run watch
```
### To add breakpoints add this script to the config file under theme
```
screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px"
    }
```
### Add all colors you need under extend for instance:
```
colors: {
        green: 'hsl(120, 100%, 50%)',
        black: '	hsl(0,0%,0%)',
        white: 'hsla(360, 100%, 100%, 1)',
        blue: ' hsla(209, 100%, 50%, 1)',
        lightgrey: 'hsla(0, 2%, 84%, 1)',

      },
```
### Add your custom css in the input.css file