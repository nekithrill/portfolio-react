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
| **i18next**, **react-i18next**          | Localization                |
| **Sass**                                | Styling                     |
| **TypeScript**, **Vite**                | Type-safe frontend tooling  |
| **ESLint**, **Prettier**, **Stylelint** | Code quality and formatting |

<br>

</details>

<details>
<summary><strong>📜 Scripts</strong></summary>

<br>

| Script           | Command                            | Purpose                                                |
| ---------------- | ---------------------------------- | ------------------------------------------------------ |
| `dev`            | `vite`                             | Runs project in development mode.                      |
| `build`          | `tsc -b && vite build`             | Builds **TypeScript** + bundle project using **Vite**. |
| `preview`        | `vite preview`                     | Local preview of production build.                     |
| `lint`           | `eslint . --ext .ts,.tsx,.js,.jsx` | Checks JS/TS files with **ESLint**.                    |
| `lint:fix`       | `npm run lint -- --fix`            | Autofix of **ESLint** errors.                          |
| `lint:style`     | `stylelint "src/**/*.{css,scss}"`  | Checks CSS/SCSS files with **Stylelint**.              |
| `lint:style:fix` | `npm run lint:style -- --fix`      | Autofix of **Stylelint** errors.                       |
| `format:check`   | `prettier --check .`               | Checks formatting with **Prettier**.                   |
| `format`         | `prettier --write .`               | Formats files according to **Prettier** rules.         |
| `typecheck`      | `tsc --build`                      | Types check with **TypeScript**.                       |

</details>

<br>

## **🧰 Supported devices and browsers**

| Type | Name    | Support | Version | OS                    | Screen Size |
| ---- | ------- | :-----: | ------- | --------------------- | ----------- |
| 🌐   | Chrome  |   ❌    | 00+     | —                     | —           |
| 🌐   | Firefox |   ❌    | 00+     | —                     | —           |
| 🌐   | Safari  |   ❌    | 00+     | —                     | —           |
| 🌐   | Edge    |   ❌    | 00+     | —                     | —           |
| 🌐   | Opera   |   ❌    | 00+     | —                     | —           |
| 🌐   | IE      |   ❌    | 00+     | —                     | —           |
| 💻   | Desktop |   ❌    | —       | Windows, macOS, Linux | ≥1024px     |
| 📟   | Tablet  |   ❌    | —       | iPadOS, Android       | ≥768px      |
| 📱   | Phone   |   ❌    | —       | iOS, Android          | ≥360px      |

<br>

## **🗂️ Project structure**

The project was implemented using an adapted **FSD architecture**: the key principles of layering (app, features, shared, widgets) were preserved, but the structure was simplified to suit the specifics of the application and personal preferences (im not using deep module splitting (ui, api, model, etc)).

📁 `app`: entry point, configs, providers, global styles.

📁 `widgets`: blocks that builds from features/shared and used at app level.

📁 `features`: modules with business logic.

📁 `shared`: reusable stuff (ui, layouts, icons, hooks, assets).

<pre lang="md">📦 root
├── 📁 src  
│    ├── 📁 app
│    │    ├── 📁 config
│    │    ├── 📁 styles
│    │    ├── 📄 App.tsx
│    │    └── 📄 main.tsx
│    │
│    ├── 📁 features
│    │    ├── 📁 contact-form
│    │    ├── 📁 clock
│    │    ├── 📁 language-switch
│    │    └── 📁 theme-switch
│    │
│    ├── 📁 shared
│    │    ├── 📁 assets
│    │    ├── 📁 components
│    │    └── 📁 hooks
│    │    
│    └── 📁 widgets
│         ├── 📁 header
│         ├── 📁 footer
│         └── 📁 content-tile
│
├── 📄 index.html
├── ⚙️ .gitignore
├── ⚙️ .eslintignore
├── ⚙️ .eslintrc.cjs
├── ⚙️ .prettierignore
├── ⚙️ .prettierrc
├── ⚙️ .stylelintrc.cjs
├── ⚙️ tsconfig.json
├── ⚙️ tsconfig.app.json
├── ⚙️ tsconfig.node.json
├── ⚙️ vite.config.ts
├── ⚙️ vite-env.d.ts
├── ⚙️ global.d.ts
└── ⚙️ package.json
</pre>
