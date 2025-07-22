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
