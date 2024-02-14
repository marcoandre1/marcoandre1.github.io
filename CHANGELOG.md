# CHANGELOG

## [v3.0.2](https://github.com/marcoandre1/marcoandre1.github.io/tree/v3.0.2) Feb 13, 2024

- [Update Footer.jsx](https://github.com/marcoandre1/marcoandre1.github.io/pull/171/commits/8a7be6e9c9ad4ab895fd12bc4961e17d8918b2c2). (@marcoandre1)
- [Bump postcss-cli and override @svgr/webpack from react-scripts](https://github.com/marcoandre1/marcoandre1.github.io/pull/171/commits/d6d9224c4aac34e76ecf716304c8ddd2993ec8be). (@marcoandre1)

  > Implemented the [answer](https://github.com/facebook/create-react-app/issues/13337#issuecomment-1693581134) for the issue [Vulnerabilities... #13337](https://github.com/facebook/create-react-app/issues/13337) from [create-react-app](https://github.com/facebook/create-react-app) on GitHub.
  > Like stated on the [npm Docs](https://docs.npmjs.com/cli/v8/configuring-npm/package-json#overrides) :
  > Overrides provide a way to replace a package in your dependency tree with another version, or another package entirely. These changes can be scoped as specific or as vague as desired.

- [Run npm audit --fix](https://github.com/marcoandre1/marcoandre1.github.io/pull/171/commits/f37a6cf27b4062bfe30bb73203e9f89c7a79631b). (@marcoandre1)
- [Adds overrides for resolve-url-loader](https://github.com/marcoandre1/marcoandre1.github.io/pull/171/commits/dc1186ee9ba990d8931955b3b92f5bfbb2795ffa). (@marcoandre1)
- [Bump gh-pages and yaml release pipeline](https://github.com/marcoandre1/marcoandre1.github.io/pull/171/commits/583a5d13c90e11684e4ba22e0cf0b6bbf94d039c). (@marcoandre1)
- [Bump tailwindcss](https://github.com/marcoandre1/marcoandre1.github.io/pull/171/commits/7a7f7996c667a0e2872329da8c0648633d01640d). (@marcoandre1)

## [v3.0.1](https://github.com/marcoandre1/marcoandre1.github.io/tree/v3.0.1) Jan 20, 2023

- [Refactor components name](https://github.com/marcoandre1/marcoandre1.github.io/pull/166/commits/716d42aebefabf3c4fdf2c1e7e692433fa493355). (@marcoandre1)
- [Update Tailwind CSS to latest](https://github.com/marcoandre1/marcoandre1.github.io/pull/166/commits/ed223de426ef143e7764e0c166be5b1250550405). (@marcoandre1)
- [Add some Tailwind style](https://github.com/marcoandre1/marcoandre1.github.io/pull/166/commits/256db72f1a8502dc5da26717ee2dd64cf671e704). (@marcoandre1)

## v3.0.0

- [Upgrade to React 18](https://reactjs.org/blog/2022/03/08/react-18-upgrade-guide.html)
  
  > To install the latest version of React:
  > `npm install react react-dom`
  >
  > **NOTE:** see commit details [Bump react react-dom](https://github.com/marcoandre1/marcoandre1.github.io/pull/159/commits/280782c7e3082f9a06c4595437ba8dc36452f70c)

- Fix #162 [BUG]: hydrateRoot(...): Target container is not a DOM element. **Particular attention to the parameters inversion in the NEW hydrate function:** `hydrate(<App tab="home" />, container)` vs `hydrateRoot(container, <App tab="home" />)`.

  Extract from [How to Upgrade to React 18](https://reactjs.org/blog/2022/03/08/react-18-upgrade-guide.html):

  > Finally, if your app uses server-side rendering with hydration, upgrade `hydrate` to `hydrateRoot`:
  >
  > ```js
  > // Before
  > import { hydrate } from 'react-dom';
  > const container = document.getElementById('app');
  > hydrate(<App tab="home" />, container);
  >
  > // After
  > import { hydrateRoot } from 'react-dom/client';
  > const container = document.getElementById('app');
  > const root = hydrateRoot(container, <App tab="home" />);
  > // Unlike with createRoot, you don't need a separate root.render() call here.
  > ```

- [Upgrade to React Router v6](https://reactrouter.com/en/main/upgrading/v5#upgrade-to-react-router-v6)
  
  > Upgrade all `<Switch>` elements to `<Routes>`.
  > `<Route exact>` is gone.
  >  `<Route element>` replaces `<Route render>` props. (see [Upgrade to React Router v5.1](https://reactrouter.com/en/main/upgrading/v5#upgrade-to-react-router-v51))
  > `useParams` inside your route component retrieves params. (see [Upgrade to React Router v5.1](https://reactrouter.com/en/main/upgrading/v5#upgrade-to-react-router-v51))
  >
  > **NOTE:** see commit details [Bump react-router-dom to v6](https://github.com/marcoandre1/marcoandre1.github.io/pull/159/commits/4f3492e6825f86e43632894873ab50c95082e88f)

- Upgrade to react-redux 8
  
  > Add [useSelector()](https://react-redux.js.org/api/hooks#useselector) hook
  > Allows you to extract data from the Redux store state, using a selector function.
  > The selector is approximately equivalent to the mapStateToProps argument to connect conceptually.
  >
  > **NOTE:** I had to change to `useSelector()` in the `Dashboard` component instead of `mapStateToProps()` because of the upgrade to **React router v6**. See commit details [Add useSelector hook](https://github.com/marcoandre1/marcoandre1.github.io/pull/159/commits/dc358303620d89afb5ff16f37210c380a07299a9)

- Bump `@headlessui/react` because previous version incompatible with **React 18**.

## v2.0.5

- Add `"puppeteerArgs": ["--no-sandbox", "--disable-setuid-sandbox"]` in `package.json` as recommended in [README](https://github.com/stereobooster/react-snap#containers-and-other-restricted-environments):
  
  > Puppeteer (Headless Chrome) may fail due to sandboxing issues. To get around this, you may use:
  > `"puppeteerArgs": ["--no-sandbox", "--disable-setuid-sandbox"]`
  > Read more about [puppeteer troubleshooting](https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md).

- Set `ubuntu-latest` in Github Actions workflow. The proposed `puppeteer` fix should fix the issue: [There is a phenomenon in which the build does not end in the GitHub Actions (Linux Latest) environment.](https://github.com/stereobooster/react-snap/issues/571)

## v2.0.4

- Fix #147 language switch button closes correctly when language is choose.
- Fix burger menu for mobile: closes when link is selected.

## v2.0.3

- #148 Bumb puppeteer in react-snap dependency (@marcoandre1)
- #146 Add badge status to README (@marcoandre1)

## v2.0.2

- #77 Add project link to images (@marcoandre1)

## v2.0.1

- #78 Add new projects: actually some old projects that where never included on the website (@marcoandre1)
- #131 Add GitHub Actions for automatic deployment: take a look at `.github/workflows/release-on-master-pr.yml` file for more info. (@marcoandre1)
- #108 Problem with deployments: see PR #132 Update gh-pages dependency from 2.2.0 to 4.0.0 and #134 Add GitHub action for automatics deployment. After some fixes on the workflow file, everything seems to run smoothly.

## v2.0.0

- #109 Add a deployment log instead of putting info in the README (@marcoandre1)
- #110 Add issue and pull request templates (marcoandre1)
- #79 Dependency updates: #96 Update CRA from 5.0.0 to 5.0.1, #104/#99/#96 Update react-snap 1.23.0 to react-snap-test 1.23.6

**December 2021 UPDATE:** Updated Create React App from v4.0.1 to [v5.0.0](https://github.com/facebook/create-react-app/releases/tag/v5.0.0):  

```console
npm install --save --save-exact react-scripts@5.0.0
```  

Everything went smooth but my svg files wouldn't load. I solved it by running an online optimizer on my svg files (<https://www.svgviewer.dev/>).  

> **NOTE:** while trying to fix npm warnings I found this issue: [Help, `npm audit` says I have a vulnerability in react-scripts!](https://github.com/facebook/create-react-app/issues/11174). As of December 2021, I have some warnings (_3 low_ and _18 moderate_) on `npm install` and it seems to be a problem with the new CRA release using old libraries _(and probably because [react-snap](https://www.npmjs.com/package/react-snap) isn't mantained since December 13, 2018)_. There is no fix yet.  

## [v1.0.0](https://github.com/marcoandre1/marcoandre1.github.io/tree/v1.0.0) Feb 20, 2021

- Modokemdev20210220
- Presonal website release for 2021.

## [v0.1.0](https://github.com/marcoandre1/marcoandre1.github.io/tree/v0.1.0) Sep 20, 2020

- Setup
- Redux store added
- We have finally added redux store to the project! This will allow us to extract data from JSON file.
