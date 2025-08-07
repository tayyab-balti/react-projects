import { useState } from "react";
import { FaStar } from "react-icons/fa";
import './styles.css'

export default function StarRating({ noOfStars = 5 }) {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  function handleClick(getCurrentIndex) {
    // console.log("Clicked: ", getCurrentIndex)
    setRating(getCurrentIndex)
  }

  function handleMouseEnter(getCurrentIndex) {
    // console.log("Entered: ", getCurrentIndex)
    setHover(getCurrentIndex)
  }

  function handleMouseLeave() {
    // console.log("Left: ", getCurrentIndex)
    setHover(rating)
  }

  return (
    <div className="star-rating">
      {[...Array(noOfStars)].map((_, index) => {
        index += 1;    // IDX -> 1 to 5

        return (
          <FaStar
            key={index}  // 🔑 Unique ID for React’s internal optimization
            className={index <= (hover || rating) ? "active" : "inactive"}
            onClick={() => handleClick(index)}    // 🖱️ Set rating on click
            onMouseMove={() => handleMouseEnter(index)}   // 🖱️ Highlight stars temporarily on hover
            onMouseLeave={() => handleMouseLeave(index)}  // 🐭 Reset stars to permanent rating
            size={40}
          />
        );
      })}
    </div>
  );
}
