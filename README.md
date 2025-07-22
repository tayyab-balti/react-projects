<<<<<<< HEAD
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
=======
# 🧩 React Accordion Project

A simple and interactive Accordion component built with React.js. It displays a list of questions where users can toggle answers by clicking, with support for both **single** and **multiple selection** modes.

---

## 📸 Preview

<img width="1327" height="686" alt="Image" src="https://github.com/user-attachments/assets/64e17417-569f-4073-8e5c-117e477d4ee2" />

---

## 🚀 Features

- Toggle between **single** and **multiple** open items
- Click to **show/hide answers**
- Built using **React Hooks (useState)**
- Data-driven using a separate `data.js` file

---

## 🧠 How It Works

- **Single Selection**: Only one answer is shown at a time. Clicking again closes it.
- **Multiple Selection**: Multiple answers can be shown by toggling them individually.

```js
// Core logic for toggling single selection
setSelected(getCurrentId === selected ? null : getCurrentId);

// Core logic for toggling multiple selection
if (notInArray) → add to array;
else → remove from array;
```

---

## 🔁 What Happens When User Clicks a Question…

- onClick triggers with dataItem.id
-	Calls correct handler (handleSingleSelection or handleMultiSelection)
-	Inside handler, setSelected or setMultiple updates state
-	React sees state changed → re-renders the UI
-	In re-render, if selected or multiple contains that ID → show the answer
>>>>>>> e760c5ad9ccc9a365399c5eef2cb2fdad5c13fea
