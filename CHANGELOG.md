# CHANGELOG

## v3.0.0

- [Upgrade to React 18](https://reactjs.org/blog/2022/03/08/react-18-upgrade-guide.html)
  
  > To install the latest version of React:
  > `npm install react react-dom`
  >
  > **NOTE:** see commit details [Bump react react-dom](https://github.com/marcoandre1/marcoandre1.github.io/pull/159/commits/280782c7e3082f9a06c4595437ba8dc36452f70c)

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
