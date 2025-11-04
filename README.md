# **Portfolio app**

[![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=000000)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=ffffff)](https://www.typescriptlang.org/)
[![SCSS](https://img.shields.io/badge/SCSS-CC6699?style=for-the-badge&logo=sass&logoColor=ffffff)](https://sass-lang.com/)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=ffffff)](https://vitejs.dev/)
[![ESLint](https://img.shields.io/badge/ESLint-4B32C3?style=for-the-badge&logo=eslint&logoColor=ffffff)](https://eslint.org/)
[![Stylelint](https://img.shields.io/badge/Stylelint-2e2e2e?style=for-the-badge&logo=stylelint)](https://stylelint.io/)
[![Prettier](https://img.shields.io/badge/Prettier-F7B93E?style=for-the-badge&logo=prettier&logoColor=000000)](https://prettier.io/)

Portfolio is implemented as SPA using React and Vite. The application is written in TypeScript, styled using SCSS modules, includes animations and interactive components. The project uses ESLint, Stylelint and Prettier to keep the code clean.

## **🧩 Dependencies and scripts**

<details>
<summary><strong>📚 Dependencies</strong></summary>

<br>

| Package(s)                              | Purpose                     |
| --------------------------------------- | --------------------------- |
| **React**, **ReactDOM**                 | UI                          |
| **react-router-dom**                    | Routing                     |
| **i18next**, **react-i18next**          | Localization                |
| **Sass**                                | Styling                     |
| **TypeScript**, **Vite**                | Type-safe tooling           |
| **Framer Motion**                       | Animations                  |
| **ESLint**, **Prettier**, **Stylelint** | Code quality and formatting |

<br>

</details>

<details>
<summary><strong>📜 Scripts</strong></summary>

<br>

| Script         | Command                                                             | Purpose                                                  |
| -------------- | ------------------------------------------------------------------- | -------------------------------------------------------- |
| `dev`          | `vite`                                                              | Runs project in development mode.                        |
| `build`        | `tsc -b && vite build`                                              | Builds **TypeScript** and bundles project with **Vite**. |
| `preview`      | `vite preview`                                                      | Local preview of production build.                       |
| `check`        | `npm run check:lint && npm run check:style && npm run check:format` | Runs all checks: ESLint, Stylelint, and Prettier.        |
| `check:lint`   | `eslint 'src/**/*.{ts,tsx,js,jsx}'`                                 | Checks JS/TS files with **ESLint**.                      |
| `check:style`  | `stylelint 'src/**/*.{css,scss}'`                                   | Checks CSS/SCSS files with **Stylelint**.                |
| `check:format` | `prettier --check .`                                                | Checks code formatting with **Prettier**.                |
| `fix`          | `npm run fix:lint && npm run fix:style && npm run fix:format`       | Runs autofix for ESLint, Stylelint, and Prettier.        |
| `fix:lint`     | `eslint 'src/**/*.{ts,tsx,js,jsx}' --fix`                           | Autofix **ESLint** errors.                               |
| `fix:style`    | `stylelint 'src/**/*.{css,scss}' --fix`                             | Autofix **Stylelint** errors.                            |
| `fix:format`   | `prettier --write .`                                                | Formats code according to **Prettier** rules.            |
|                |

</details>

<br>

## **🧰 Supported devices and browsers**

| Type               | Support | Notes                                                  |
| ------------------ | :-----: | ------------------------------------------------------ |
| 🌐 Modern browsers |   ✅    | Chrome, Firefox, Safari, Edge, Opera (last 2 versions) |
| 🌐 IE              |   ❌    | not supported                                          |
| 💻 Desktop         |   ✅    | ≥1024px                                                |
| 📟 Tablet          |   ✅    | ≥768px                                                 |
| 📱 Phone           |   ✅    | ≥360px                                                 |

<br>

## **🗂️ Project structure**

The project was implemented using an adapted **FSD architecture**: the key principles of layering (app, features, shared, widgets) were preserved, but the structure was simplified to suit the specifics of the application and personal preferences (im not using deep module splitting (ui, api, model, etc)).

📁 `app`: pages, providers, layouts, global styles.

📁 `widgets`: blocks that builds from features/shared and used at app level.

📁 `features`: modules with business logic.

📁 `shared`: reusable stuff (ui elements, icons, configs, hooks, assets).

<pre lang="md">📦 root
├── 📁 src  
│    ├── 📁 app
│    │    ├── 📁 pages
│    │    ├── 📁 providers
│    │    ├── 📁 layouts
│    │    ├── 📁 styles
│    │    ├── 📄 App.tsx
│    │    └── 📄 main.tsx
│    │
│    ├── 📁 features
│    │    ├── 📁 file-container
│    │    ├── 📁 language-switch
│    │    ├── 📁 theme-switch
│    │    └── 📁 clock
│    │
│    ├── 📁 shared
│    │    ├── 📁 assets
│    │    ├── 📁 components
│    │    │   ├── 📁 ui
│    │    │   └── 📁 icons
│    │    │
│    │    ├── 📁 configs
│    │    │   └── 📁 i18n
│    │    │        ├── 📁 locales
│    │    │        │    ├── 📄 en.json
│    │    │        │    ├── 📄 ua.json
│    │    │        │    └── 📄 ru.json
│    │    │        └── 📄 config.ts
│    │    │
│    │    ├── 📁 hooks
│    │    └── 📁 types
│    │    
│    └── 📁 widgets
│         ├── 📁 header
│         ├── 📁 footer
│         ├── 📁 navbar
│         └── 📁 sidebar
│
├── 📄 index.html
├── ⚙️ .gitignore
├── ⚙️ .prettierignore
├── ⚙️ .prettierrc
├── ⚙️ .stylelintrc.cjs
├── ⚙️ .eslintrc.cjs
├── ⚙️ tsconfig.json
├── ⚙️ tsconfig.node.json
├── ⚙️ vite.config.ts
├── ⚙️ vite-env.d.ts
└── ⚙️ package.json
</pre>
