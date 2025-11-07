# **Portfolio app**

[![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=000000)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=ffffff)](https://www.typescriptlang.org/)
[![SCSS](https://img.shields.io/badge/SCSS-CC6699?style=for-the-badge&logo=sass&logoColor=ffffff)](https://sass-lang.com/)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=ffffff)](https://vitejs.dev/)
[![ESLint](https://img.shields.io/badge/ESLint-4B32C3?style=for-the-badge&logo=eslint&logoColor=ffffff)](https://eslint.org/)
[![Stylelint](https://img.shields.io/badge/Stylelint-2e2e2e?style=for-the-badge&logo=stylelint)](https://stylelint.io/)
[![Prettier](https://img.shields.io/badge/Prettier-F7B93E?style=for-the-badge&logo=prettier&logoColor=000000)](https://prettier.io/)

## **🧩 Overview**

A React + TypeScript SPA built with Vite. Styled via SCSS modules and enhanced with animations and interactive components. Code quality ensured by ESLint, Stylelint, and Prettier.

<details>
<summary><strong>📚 Dependencies</strong></summary>
<br>

| Package                                 | Purpose                     |
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
<summary><strong>🧰 Compatibility</strong></summary>
<br>

| Type               | Support | Notes                                                  |
| ------------------ | :-----: | ------------------------------------------------------ |
| 🌐 Modern browsers |   ✅    | Chrome, Firefox, Safari, Edge, Opera (last 2 versions) |
| 🌐 IE              |   ❌    | not supported                                          |
| 💻 Desktop         |   ✅    | ≥1024px                                                |
| 📟 Tablet          |   ✅    | ≥768px                                                 |
| 📱 Phone           |   ✅    | ≥360px                                                 |

<br>
</details>

<details>
<summary><strong>📜 Scripts</strong></summary>
<br>

| Script         | Command                                    | Purpose                                                  |
| -------------- | ------------------------------------------ | -------------------------------------------------------- |
| `dev`          | `vite`                                     | Runs project in development mode.                        |
| `build`        | `tsc -b && vite build`                     | Builds **TypeScript** and bundles project with **Vite**. |
| `preview`      | `vite preview`                             | Local preview of production build.                       |
| `check:lint`   | `eslint src --ext .ts,.tsx,.js,.jsx`       | Checks JS/TS files with **ESLint**.                      |
| `check:style`  | `stylelint \"src/**/*.{css,scss}\"`        | Checks CSS/SCSS files with **Stylelint**.                |
| `check:format` | `prettier --check .`                       | Checks code formatting with **Prettier**.                |
| `fix:lint`     | `eslint src --ext .ts,.tsx,.js,.jsx --fix` | Autofix **ESLint** errors.                               |
| `fix:style`    | `stylelint \"src/**/*.{css,scss}\" --fix`  | Autofix **Stylelint** errors.                            |
| `fix:format`   | `prettier --write .`                       | Formats code according to **Prettier** rules.            |
|                |

<br>
</details>

## **🏗️ Project structure**

<details>
<summary><strong>🧱 Folders architecture</strong></summary>
<br>

The project follows an **adapted FSD (Feature-Sliced Design)** approach.  
It keeps the core layering principles (_app → pages → widgets → features → shared_),  
but with simplified module separation to match the app’s scope and personal preferences (w/o deep splitting).

- 📁 `app`: providers, layouts, global styles.
- 📁 `pages`: pages that builds from widgets and used at app level.
- 📁 `widgets`: blocks that builds from features/shared and used at pages level.
- 📁 `features`: modules with business logic.
- 📁 `shared`: reusable stuff (ui elements, icons, configs, hooks, assets).

<pre lang="md">📦 root
├── 📁 src  
│    ├── 📁 app
│    │    ├── 📁 providers
│    │    ├── 📁 layouts
│    │    ├── 📁 styles
│    │    ├── 📄 App.tsx
│    │    └── 📄 main.tsx
│    │
│    ├── 📁 pages
│    │    ├── 📁 home
│    │    ├── 📁 about
│    │    ├── 📁 project
│    │    ├── 📁 skills
│    │    ├── 📁 contacts
│    │    └── 📁 privacy
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
<br>
</details>

<details>
<summary><strong>🎨 Styling architecture</strong></summary>
<br>

The project uses **SCSS modules** for component-level styling, combined with a simplified **7–1 architecture** for global styles.
This approach keeps styles modular and scoped by default while maintaining a clear global structure for shared variables, mixins, and themes.
Component-specific styles are implemented as **\*.module.scss** files located alongside their components.

- 📁 `abstracts`: global variables, mixins, and utility functions.
- 📁 `base`: resets, typography, and global element styles.
- 📁 `themes`: theme definitions.
- 📄 `main`: entry point.

<pre lang="md">📦 /app/styles
├── 📁 abstracts
│    ├── 📄 _breakpoints.scss
│    ├── 📄 _animations.scss
│    └── 📄 _index.scss
│
├── 📁 base
│    ├── 📄 _reset.scss
│    ├── 📄 _base.scss
│    ├── 📄 _typography.scss
│    └── 📄 _index.scss
│
├── 📁 themes
│    ├── 📄 _light.scss
│    ├── 📄 _dark.scss
│    └── 📄 _index.scss
│
└── 📄 main.scss
</pre>
</details>
<br>
