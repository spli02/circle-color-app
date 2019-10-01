# About "color-change-app"
This app is about changing color of cirlcle to type color name.

React, TypeScript, styled components are used.

If you want to know more details, check the link below.

- [React] (https://www.npmjs.com/package/react)
- [TypeScript] (https://www.npmjs.com/package/typescript)
- [styled-components] (https://www.npmjs.com/package/styled-components)

# How to use "color-change-app"
1. Execute the command below to copy(clone) react_styled-components repository.

```bash
git clone https://github.com/spli02/color-change-app.git
cd color-change-app
```

2. Execute the command below to install libraries required the project.

```bash
npm install
```

3. Execute the command below to start Webpack dev-server.

```bash
npm run start
```

This runs the start script specified in our package.json, 

and will spawn off a server which reloads the page as we save our files.

Typically the server runs at http://localhost:3000, but should be automatically opened for you.

You can see "blue circle" and input field on the screen.

## Creating a production build

```bash
npm run build
```

To run a production build, just run this.

This will create an optimized JS and CSS build in ./build/static/js and ./build/static/css respectively.

You won't need to run a production build most of the time, 

but it is useful if you need to measure things like the final size of your app.

## Testing the project

```bash
npm run test
```

Testing is also just a command away:

This command runs Jest, an incredibly useful testing utility, 

against all files whose extensions end in .test.ts or .spec.ts. 

Like with the npm run start command, Jest will automatically run as soon as it detects changes.

If you'd like, you can run npm run start and npm run test side by side 

so that you can preview changes and test them simultaneously.

## Source Code

https://github.com/Microsoft/TypeScript-React-Starter#typescript-react-starter
