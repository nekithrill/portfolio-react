# **👨🏻‍💼 Portfolio app**

[![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=000000)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=ffffff)](https://www.typescriptlang.org/)
[![Three.js](https://img.shields.io/badge/Three.js-000000?style=for-the-badge&logo=three.js&logoColor=ffffff)](https://threejs.org/)
[![SCSS](https://img.shields.io/badge/SCSS-CC6699?style=for-the-badge&logo=sass&logoColor=ffffff)](https://sass-lang.com/)
[![ESLint](https://img.shields.io/badge/ESLint-4B32C3?style=for-the-badge&logo=eslint&logoColor=ffffff)](https://eslint.org/)
[![Prettier](https://img.shields.io/badge/Prettier-F7B93E?style=for-the-badge&logo=prettier&logoColor=000000)](https://prettier.io/)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=ffffff)](https://vitejs.dev/)

The portfolio is implemented as an SPA using React and Vite. The application is written in TypeScript, styled using SCSS modules, includes animations and interactive components. The project uses ESLint and Prettier to keep the code clean. Three.js elements and adaptive layout are also integrated.

## **🧩 Used dependencies**

## **🗂️ Project structure**

The project was implemented using an adapted **FSD architecture**: the key principles of layering (features, entities, shared, pages, widgets) were preserved, but the structure was simplified to suit the specifics of the application and personal preferences.

<pre lang="md">📦 root
├── 📁 src  
│    ├── 📁 app
│    │    ├── 📁 config
│    │    │    └── 📁 i18n
│    │    │         ├── 📁 locales
│    │    │         │     ├── 📄 en.json
│    │    │         │     ├── 📄 ua.json
│    │    │         │     └── 📄 ru.json
│    │    │         └── 📄 i18n.ts
│    │    ├── 📁 providers
│    │    │    ├── 📄 
│    │    │    ├── 📄 
│    │    │    └── 📄 
│    │    ├── 📁 store
│    │    │    └── 📄 store.ts		 
│    │    ├── 📁 styles
│    │    │    ├── 📁 abstracts
│    │    │    │    ├── 📄 _animations.scss
│    │    │    │    ├── 📄 _breakpoints.scss
│    │    │    │    ├── 📄 _colors.scss
│    │    │    │    ├── 📄 _typography.scss
│    │    │    │    └── 📄 _index.scss
│    │    │    ├── 📁 base
│    │    │    │    ├── 📄 _base.scss
│    │    │    │    ├── 📄 _reset.scss
│    │    │    │    └── 📄 _index.scss
│    │    │    ├── 📁 utilities
│    │    │    │    ├── 📄 _reset.scss
│    │    │    │    └── 📄 _index.scss
│    │    │    └── 📄 globals.scss
│    │    ├── 📄 App.tsx
│    │    └── 📄 main.tsx
│    │
│    ├── 📁 features
│    │    ├── 📁 contact-form
│    │    │    ├── 📄 ContactForm.module.scss
│    │    │    └── 📄 ContactForm.tsx
│    │    ├── 📁 clock
│    │    │    ├── 📄 Clock.module.scss
│    │    │    ├── 📄 Clock.tsx
│    │    │    └── 📄 useClock.ts
│    │    ├── 📁 language-switch
│    │    │    ├── 📄 LanguageSwitch.module.scss
│    │    │    ├── 📄 LanguageSwitch.tsx
│    │    │    └── 📄 useLanguageSwitch.ts
│    │    └── 📁 theme-switch
│    │         ├── 📄 ThemeSwitch.module.scss
│    │         ├── 📄 ThemeSwitch.tsx
│    │         └── 📄 useThemeSwitch.ts
│    │
│    ├── 📁 shared
│    │    ├── 📁 assets
│    │    │    ├── 📁 fonts
│    │    │    ├── 📁 images
│    │    │    └── 📄 logo.svg
│    │    ├── 📁 components
│    │    │    ├── 📁 icons
│    │    │    ├── 📁 layout
│    │    │    └── 📁 ui
│    │    └── 📁 hooks
│    │         ├── 📄 useSomething.ts
│    │         └── 📄 useSomething.ts
│    │    
│    └── 📁 widgets
│         ├── 📁 header
│         │    ├── 📄 Header.module.scss
│         │    ├── 📄 Header.tsx
│         │    └── 📄 Logo.tsx
│         ├── 📁 footer
│         │    ├── 📄 Footer.module.scss
│         │    └── 📄 Footer.tsx
│         └── 📁 content-tile
│              ├── 📄 
│              └── 📄 
│
├── 📄 index.html
├── ⚙️ .gitignore
├── ⚙️ .eslintignore
├── ⚙️ .eslintrc.cjs
├── ⚙️ .prettierignore
├── ⚙️ .prettierrc
├── ⚙️ tsconfig.json
├── ⚙️ tsconfig.app.json
├── ⚙️ tsconfig.node.json
├── ⚙️ vite.config.ts
├── ⚙️ vite-env.d.ts
├── ⚙️ global.d.ts
├── ⚙️ package.json
└── ⚙️ package-lock.json
</pre>
