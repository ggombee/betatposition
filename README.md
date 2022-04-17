# 1. Summary

### 1. Purpose
Make function of basic commnuity Web service,,,
Develop community with Javascript, CRA without state management library (redux, mobx, recoli,,) aiming to strengthen the basics of React.
Thinking about the extensibility of the code in developing.
Inventing a efificent way to seperate components according to design.

### 2. About
Title : "Cat MBTI test"
Base : create-react-app
Styles : styled-component

### 3. Settings
#### 1. Available Scripts
In the project directory, you can run:

npm install
npm start
Runs the app in the development mode. Open http://localhost:3000 to view it in the browser.

The page will reload if you make edits. You will also see any lint errors in the console.

#### 2. Structure of Folders
src

- components
- pages
- assets

Components (presentation components)
Smallest unit of functional groups such as multiple combinations of ui and charts below the list.

Pages
Responsible for one page.
Basically responds 1:1 with Helmet information, server data initially requested from the server, and container.
Routers
Page to route SPA, Using 'react-router-dom'.
