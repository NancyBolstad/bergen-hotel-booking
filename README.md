# Holidaze Bergen Hotel Booking App [![Netlify Status](https://api.netlify.com/api/v1/badges/2a170d03-299d-4f05-bbad-a743ce573826/deploy-status)](https://app.netlify.com/sites/holidaze-bergen/deploys)

A full-stack web development project built with Google Cloud Functions, Firebase, Node.js, TypeScript, React and Styled-Components.

<p align='center'>
<img src='https://res.cloudinary.com/dykdxdtuu/image/upload/q_auto:eco/v1591882382/holidaza/holidaze-bergen.netlify.app__Laptop_with_MDPI_screen_1_mlajdb.png' width='600' alt='screenshot of the webpage'>
</p>

## Features

- [x] A Node.js Restful API for CRUD operations using Express, TypeScript, Google Cloud Functions with Firebase.
- [x] Automated development workflow using GitHub Actions.
- [x] React components based design system using Styled-Components and Storybook.
- [x] Search, filtering, sorting and paginating using Custom React Hooks.
- [x] Dynamic routes and authentication using react-router-dom.
- [x] Performance optimization, code splitting and lazy loading.
- [x] Redux-like persisted Global Store using React Hooks and the State Reducer Pattern
- [x] Schema-based form-level validation using Yup.

## Building the code

In the project directory, you can run:

### To set up project

```sh
yarn && npm-run-all -p setup:yarn:*
```

### To deploy Google Functions

```sh
cd functions && yarn install && yarn deploy
```

### To build the client app

```sh
cd client && yarn install && yarn build
```

### To develop the client app

```sh
cd client && yarn start
```

### To run Storybook

```sh
cd client && yarn storybook
```
