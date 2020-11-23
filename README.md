# Modokemdev

<modokemdev.com> is my personal landing page. As of November 2020, the website is built with Create React App and Tailwind CSS.

## Index

[Deployment to GitHub pages]()  
[Adding Tailwind CSS to Create React App]()  
[React auto generated README]()  

## Deployment to GitHub pages

This web application is ready for deployment using `gh-pages`. Simply run the following command in `git bash`:

```console
npm run deploy
```

**You will need to update the domain name as gh-pages is not optimized for user page.**

> In other words, add the `CNAME` file after deployment!

## Adding Tailwind CSS to Create React App

The main reason why adding Tailwind CSS to **Create React App** is a problem is that **Create React App** manages the WebPack config for us. There are plenty of ways to add Tailwind CSS. You can add the [CRACO](https://www.npmjs.com/package/@craco/craco) npm package (see [dev.to article](https://dev.to/ryandunn/how-to-use-tailwind-with-create-react-app-and-postcss-with-no-hassle-2i09) and this [Create React App issue](https://github.com/facebook/create-react-app/issues/2133)). Another way of adding Tailwind CSS without CRACO is explained in this article : [create-react-app with tailwind via postcss plus purgecss](https://medium.com/@xijo/create-react-app-with-tailwind-via-postcss-plus-purgecss-5c36b4c33ba7), which is close to what I did.

Personally, I followed this article : [Setup Tailwind with PostCSS in Create-React-App in 5 Minutes](https://medium.com/@grobeldev/setup-tailwind-with-postcss-in-create-react-app-in-5-minutes-43ae343e2789), and the [Tailwind official installation guide](https://tailwindcss.com/docs/installation).

Here are the steps :  

1. Following [Tailwind official installation guide](https://tailwindcss.com/docs/installation), **install Tailwind via npm**: `npm install tailwindcss`. You don't need to install `autoprefixer`, because it is [already installed](https://create-react-app.dev/docs/post-processing-css/).  
2. **Add Tailwind as a PostCSS plugin**. Add `postcss.config.js` file at the root of your project and paste the following code:  

```javascript
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  }
}
```

3. **Create your configuration file** using `npx tailwindcss init` and paste the following code in the `tailwind.config.js` file (_you can also manually create the file, it is located at the root of the project_):  

```javascript
module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'accent-1': '#333',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
```

4. **Include Tailwind in your CSS**. Add a `src/styles/global.css` file and and use the `@tailwind` directive to inject Tailwind's `base`, `components`, and `utilities` styles:  

```javascript
@tailwind base;
@tailwind components;
@tailwind utilities;
```

5. **Build your CSS**. This is where it gets tricky because we can't tell WebPack by default how to pick `PostCSS` configuration. A workaround, is to add the [postCSS CLI](https://github.com/postcss/postcss-cli) npm package: `npm install postcss-cli --save-dev` and to add the following scripts to your `package.json` file:  

```json
"scripts": {
  "build:styles": "postcss src/styles/global.css -o src/global.css",
  "prebuild": "npm run build:styles",
  "prestart": "npm run build:styles"
  }
```

> You don't need to install **postCSS** because it is [already installed](https://create-react-app.dev/docs/post-processing-css/).  

For this to work, you will need to add an `import` directive in the `src/index.js` file:  

```javascript
import './global.css';
```

Now, every time you run your project, as you would usually do, a `global.css` file will be generated in the `src` folder containing your tailwind CSS!

## React auto generated README

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.  
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.  
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.  
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.  
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.  
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc.) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
