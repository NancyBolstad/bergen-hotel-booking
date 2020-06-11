# Holidaze Bergen Hotel Booking App [![Netlify Status](https://api.netlify.com/api/v1/badges/2a170d03-299d-4f05-bbad-a743ce573826/deploy-status)](https://app.netlify.com/sites/holidaze-bergen/deploys)

A full-stack web development project build with Google Cloud Functions, Firebase, Node.js, TypeScript, React and Styled-Components.

<p align='center'>
<img src='https://res.cloudinary.com/dykdxdtuu/image/upload/q_auto:eco/v1591882382/holidaza/holidaze-bergen.netlify.app__Laptop_with_MDPI_screen_1_mlajdb.png' width='600' alt='npm start'>
</p>

## Features

- [x] A Node.js Restful API for CRUD operations using Express, TypeScript, Google Cloud Functions with Firebase.
- [x] Automated development workflows using GitHub Actions.
- [x] React components based design system using Styled-Components and Storybook.
- [x] Search, filtering, sorting and paginating using Custom React Hooks.
- [x] Dynamic routes and authentication using react-router-dom.
- [x] Performance optimization, code splitting and lazy loading.
- [x] Redux-like persisted Global Store Using React Hooks and the State Reducer Pattern
- [x] Schema-based form-level validation through Yup.

If something doesn’t work, please [file an issue](https://github.com/NancyBolstad/bergen-hotel-booking/issues/new).

## Building the code

1. API

```sh
yarn && npm-run-all -p setup:yarn:*
cd functions && yarn install && yarn deploy
```

2. Client

```sh
yarn && npm-run-all -p setup:yarn:*
cd client && yarn install && yarn build
```
