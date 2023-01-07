# CHANGELOG

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