# User Directory

This project is a user directory built with Vite, React, and TypeScript. It fetches user data from FakeStoreAPI and displays it in a responsive and attractive UI using Material-UI.

# node version

v21.7.3

## Installation:

To install the project dependencies, follow these steps:

```bash
   npm install
```

## Clone the repository:

```bash
   git clone https://github.com/TigranGev89/user-directory.git
```

## Navigate to the project directory:

```bash
   cd user-directory
```

## Running the Project:

```bash
	 npm run dev
```

## To run prettier

```bash
   npx prettier --write .
```

## Dependencies

- [@mui/icons-material](https://ghub.io/@mui/icons-material): Material Design icons distributed as SVG React components.
- [@mui/material](https://ghub.io/@mui/material): React components that implement Google&#39;s Material Design.
- [@mui/styled-engine-sc](https://ghub.io/@mui/styled-engine-sc): styled() API wrapper package for styled-components.

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: ["./tsconfig.json", "./tsconfig.node.json", "./tsconfig.app.json"],
    tsconfigRootDir: __dirname,
  },
};
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
