# 📁 Multi-Project README Templates

## 🔹 1. React Accordion Component

# 🧩 React Accordion

An interactive Accordion component built with **React.js**, featuring both **single** and **multiple selection modes**. Users can expand/collapse answers by clicking on questions.

---

## 📸 Preview

<img width="100%" alt="React Accordion" src="https://github.com/user-attachments/assets/64e17417-569f-4073-8e5c-117e477d4ee2" />

---

## 🚀 Features

- 📌 Single and multiple selection modes
- 📖 Click-to-toggle Q&A interface
- ⚛️ Built using React functional components and hooks
- 📂 Modular structure with a separate `data.js` file

---

## 🧠 How It Works

- **Single Selection**: Only one item can be open at a time.
- **Multiple Selection**: Users can expand multiple items.
- Uses `useState()` to track selected question(s)

```js
// Single
setSelected(currentId === selected ? null : currentId);

// Multiple
if (!selectedArray.includes(id)) {
  setSelected([...selectedArray, id]);
} else {
  setSelected(selectedArray.filter(item => item !== id));
}
```

## 💡 What I Learned

- Handling UI state with conditional rendering
- Managing arrays in state
- Clean and reusable component structures

---

## 🔹 2. Random Color Generator

# 🎨 Random Color Generator (HEX & RGB)

A dynamic color generator that switches between **HEX** and **RGB** formats. Built in React using hooks.

---

## 🎥 Demo Preview

> Add your preview gif or screenshot here.

---

## 🚀 Features

- 🎲 Generate random HEX and RGB colors
- 🔀 Switch between HEX and RGB modes
- 🎨 Live background color updates
- 🧠 Built with React Hooks (`useState`, `useEffect`)

---

## ⚙️ How It Works

- On mode switch, it triggers `useEffect` to auto-generate a color
- HEX is generated from a character array
- RGB uses random 0–255 values for each color

```js
const hex = [...Array(10).keys(), 'A', 'B', 'C', 'D', 'E', 'F'];
hexColor += hex[Math.floor(Math.random() * hex.length)];

const r = Math.floor(Math.random() * 256);
const g = Math.floor(Math.random() * 256);
const b = Math.floor(Math.random() * 256);
```

## 💡 What I Learned

- Using useEffect to trigger logic based on state change
- Efficient color generation logic
- Managing conditional UI based on user actions

---

## 🔹 3. React Image Slider

# 🖼️ React Image Slider

A responsive and functional image carousel/slider built using **React**, consuming images from a public API.

---

## 📸 Preview

> Add image/gif preview of the image slider in action.

---

## 🚀 Features

- ⬅️➡️ Navigate through images with arrows
- 🔘 Pagination indicators
- 📥 Fetches images from API using `fetch`
- ⚛️ Built using React Hooks
- 📁 Custom styles using CSS modules or plain CSS

---

## 🧠 How It Works

- Fetches image data on mount via `useEffect`
- Stores image data and current index in state
- Navigation logic wraps around (infinite loop)
- Pagination indicators update based on active index

```js
setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1);
```

## 🧪 API Example

You can use an API like:

```bash
https://picsum.photos/v2/list?page=1&limit=5
```

## 💡 What I Learned

- Handling asynchronous API calls in React
- Conditional rendering and error states
- Clean navigation UX using arrow buttons
- CSS styling for dynamic components

---

## 🔹 4. Load More Data

# 📦 Load More Data Component

A React component that implements pagination by loading products from an API in batches, featuring a "Load More" button for better user experience.

---

## 📸 Preview

> Add your preview gif or screenshot here showing the load more functionality.

---

## 🚀 Features

- 📦 Loads products in batches of 20 items
- 🔄 Progressive loading with "Load More" button
- 🖼️ Grid layout for product display
- ⏳ Loading states and error handling
- 🚫 Automatic button disable when all data is loaded
- 📱 Responsive grid layout

---

## 🧠 How It Works

- Fetches products from DummyJSON API with pagination
- Uses `skip` parameter to load next batch of items
- Tracks count state to calculate skip offset
- Disables button when reaching maximum products (194)

```js
const response = await fetch(
  `https://dummyjson.com/products?limit=20&skip=${
    count === 0 ? 0 : count * 20
  }`
);

setProducts((prevData) => [...prevData, ...result.products]);
```

## 🧪 API Used

```bash
https://dummyjson.com/products?limit=20&skip=0
```

## 💡 What I Learned

- Implementing pagination with API calls
- Managing loading states effectively
- Concatenating new data with existing state
- Conditional button disabling based on data limits
- CSS Grid for responsive layouts

---

## 🔹 5. Star Rating Component

# ⭐ Interactive Star Rating

A customizable star rating component built with React, featuring hover effects and click interactions using React Icons.

---

## 📸 Preview

> Add your preview gif or screenshot showing the star rating in action.

---

## 🚀 Features

- ⭐ Interactive star rating system
- 🖱️ Hover effects for better UX
- 🎨 Visual feedback with color changes
- ⚙️ Customizable number of stars
- 📱 Responsive design
- 🔧 Built with React Icons (FaStar)

---

## 🧠 How It Works

- Uses `useState` to track both permanent rating and hover state
- Maps through array to create star components
- Conditional styling based on hover or rating state
- Mouse events handle interaction feedback

```js
const [rating, setRating] = useState(0);
const [hover, setHover] = useState(0);

<FaStar
  className={index <= (hover || rating) ? "active" : "inactive"}
  onClick={() => handleClick(index)}
  onMouseMove={() => handleMouseEnter(index)}
  onMouseLeave={() => handleMouseLeave(index)}
/>
```

## 🎨 Styling

```css
.active {
  color: gold;
}
.inactive {
  color: lightgray;
}
```

## 💡 What I Learned

- Managing multiple state variables for smooth UX
- Event handling for mouse interactions
- Conditional rendering with dynamic classes
- Using external icon libraries effectively
- Creating reusable components with props

---

## 📚 Pro Tips for Making These Recruiter-Attractive on GitHub

- ✅ Add a short **project description** under the repo name
- ✅ Upload working **demo video or gif** (you can record with Loom, Screenity, or VSCode Recorder)
- ✅ Add **live demo link** (if hosted)
- ✅ Pin top projects to your GitHub profile
- ✅ Use **project boards** or issues if it's a larger project
