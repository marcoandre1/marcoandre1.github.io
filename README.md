# Modokemdev

<https://modokemdev.com/> is my personal website. As of December 2020, the website is built with [Create React App](https://create-react-app.dev/docs/getting-started/) and Tailwind CSS. This README explains some of the step I used to get a working website on GitHub Pages. If you have any question please open an issue. Thanks!

> **NOTE:** to any one starting a new project, please consider [Next.js](https://nextjs.org/). The main reason I use **Create React App** _(CRA)_ is because this is an old repo and CRA was, at the time, a good solution. But Next.js is a newer and _far better_ solution to implement a React website. Take a look at my [speakers-app](https://github.com/marcoandre1/speakers-app) and my [nextjs-blog](https://github.com/marcoandre1/nextjs-blog) repositories, here on GitHub. That said, CRA apps are still very good. It really depends on your use case.  

## Index

[Deployment to GitHub pages](https://github.com/marcoandre1/marcoandre1.github.io#deployment-to-github-pages)  
[Adding Tailwind CSS to Create React App](https://github.com/marcoandre1/marcoandre1.github.io#adding-tailwind-css-to-create-react-app)  
[Formatting Code Automatically](https://github.com/marcoandre1/marcoandre1.github.io#formatting-code-automatically)  
[Adding Dark Mode with Tailwind CSS](https://github.com/marcoandre1/marcoandre1.github.io#adding-dark-mode-with-tailwind-css)  
[React auto generated README](https://github.com/marcoandre1/marcoandre1.github.io#react-auto-generated-readme)  

## Deployment to GitHub Pages

> **Before deploying** to GitHub pages, ensure your branch is up to date and run `npm start` to make sure everything works as expected!  

Follow the official documentation for [deploying to GitHub Pages](https://create-react-app.dev/docs/deployment#github-pages) from **Create React App**:

1. [Step 1: `Add homepage` to `package.json`](https://create-react-app.dev/docs/deployment#step-1-add-homepage-to-packagejson)  
2. [Step 2: Install `gh-pages` and add `deploy` to `scripts` in `package.json`](https://create-react-app.dev/docs/deployment#step-2-install-gh-pages-and-add-deploy-to-scripts-in-packagejson)  
3. [Step 3: Deploy the site by running `npm run deploy`](https://create-react-app.dev/docs/deployment#step-3-deploy-the-site-by-running-npm-run-deploy)  
4. [Step 4: For a project page, ensure your project’s settings use `gh-pages`](https://create-react-app.dev/docs/deployment#step-4-for-a-project-page-ensure-your-projects-settings-use-gh-pages)  
5. [Step 5: Optionally, configure the domain](https://create-react-app.dev/docs/deployment#step-5-optionally-configure-the-domain)  

### Additional notes for deploying to GitHub Pages

Make sure to run `npm run deploy` from `git bash` (just tap `git bash` on the console, it should already be installed if you have [git](https://git-scm.com/)). This is necessary because only [git bash](https://gitforwindows.org/) is going to prompt you for your password, if you have set your `ssh` key, which is necessary to deploy to GitHub Pages. If you want to learn more about `git bash` you can check [What is Git Bash for Windows anyway?](https://superuser.com/questions/1053633/what-is-git-bash-for-windows-anyway).  

Also, if you don't want to add manually the `CNAME` file after deploying, you can add it on the build process. Update the `package.json` scripts as follows:  

```json
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build",
  "build": "react-scripts build && echo modokemdev.com > ./build/CNAME",
}
```

## Adding Tailwind CSS to Create React App

> **NOTE:** As of December 2020, there is an official guide to [Install Tailwind CSS with Create React App](https://tailwindcss.com/docs/guides/create-react-app). You can either follow the official documentation or the steps below.  

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
  purge: ['./src/**/*.{js,ts,jsx,tsx}', './public/index.html'],
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

4. **Include Tailwind in your CSS**. Add a `src/styles/index.css` file and and use the `@tailwind` directive to inject Tailwind's `base`, `components`, and `utilities` styles:  

```javascript
@tailwind base;
@tailwind components;
@tailwind utilities;
```

5. **Build your CSS**. This is where it gets tricky because we can't tell WebPack by default how to pick `PostCSS` configuration. A workaround, is to add the [postCSS CLI](https://github.com/postcss/postcss-cli) npm package: `npm install postcss-cli --save-dev` and to add the following scripts to your `package.json` file:  

```json
"scripts": {
  "build:styles": "postcss src/styles/index.css -o src/index.css",
  "prebuild": "npm run build:styles",
  "prestart": "npm run build:styles"
  }
```

> You don't need to install **postCSS** because it is [already installed](https://create-react-app.dev/docs/post-processing-css/).  

For this to work, you will need to keep the `import` directive for `index.css` in the `src/index.js` file:  

```javascript
import './index.css';
```

Now, every time you run your project, as you would usually do, an `index.css` file will be generated in the `src` folder containing your tailwind CSS!

## Formatting Code Automatically

There is an official documentation on [Formatting Code Automatically](https://create-react-app.dev/docs/setting-up-your-editor#formatting-code-automatically). Here are the steps:  

1. `npm install --save husky lint-staged prettier`  
2. Update `package.json`:

```json
{
  "husky": {
    "hooks": {
      "pre-commit": "lint-staged"
    }
  },
  "lint-staged": {
    "src/**/*.{js,jsx,ts,tsx,json,md}": [
      "prettier --write"
    ]
  }
}
```

> **Note:** Because we are using **Tailwind CSS**, we recommend removing `css,scss` from `lint-staged`. This will improve the running time because prettier will not format those files.  

## Adding Dark Mode with Tailwind CSS

Tailwind CSS offers the possibility to add [dark mode](https://tailwindcss.com/docs/dark-mode). All you need to do is update the `darkMode` setting in your `tailwind.config.js` file from `false` to `media` or `class`. In our case, I added `class` because it allows us to toggle dark mode manually.  

```javascript
// tailwind.config.js
module.exports = {
  darkMode: 'class',
  // ...
}
```

To enable dark mode with `class` you need to add the `dark` class to the `html` tag:

```javascript
<!-- Dark mode enabled -->
<html class="dark">
<body>
  <!-- Will be black -->
  <div class="bg-white dark:bg-black">
    <!-- ... -->
  </div>
</body>
</html>
```

Now, this is where it becomes tricky because you need to manipulate a DOM element, the `html` tag, with React. There is not a _good way_ of doing this. Which means that you can do it however you want because React does not offer a straightforward solution of doing this. Following the Tailwind CSS docs for dark mode, I implemented a solution which works quite well without adding any extra package. Please, take a look at `App.js` to see how this is done and the section below for further details.  

### Toggling Dark Mode (extra notes)

Toggling dark mode with React and Tailwind CSS can be a pain if you are not very familiar with either of one (my case). Keep in mind that Tailwind CSS docs don't offer a solution to implement this feature but rather guidelines. You really need to understand or try your best at understanding React and Tailwind CSS to get a _nice_ result.  

Here are some of the articles that help me to implement the final solution:  

- [How to Use Variables within Classes](https://www.pluralsight.com/guides/how-to-use-variables-within-classes): good starting point at understanding variables within classes, which is my case because `App.js` defines a class.  
- [Tailwind UI docs React](https://tailwindui.com/documentation#js-react): great examples on how to implement Tailwind UI component into a React projects. The `DarkModeButton` component is based on the basic click handler demo.  
- [Adding Lifecycle Methods to a Class](https://reactjs.org/docs/state-and-lifecycle.html#adding-lifecycle-methods-to-a-class): shows how to use `this.setState()` to apply updates to the component local state. I use it in `App.js` to return the values of `isDarkMode` and `isMenuOpen` which are Booleans that control CSS properties dynamically.  

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
