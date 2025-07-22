import { useState } from "react";
import data from "./data";

export default function Accordian() {
  const [selected, setSelected] = useState(null);
  const [enableMultiSelection, setEnableMultiSelection] = useState(false);
  const [multiple, setMultiple] = useState([]);

  function handleSingleSelection(getCurrentId) {
    setSelected(getCurrentId === selected ? null : getCurrentId);
    console.log("Current ID ", getCurrentId,"Selected ID ", selected)
  }

  function handleMultiSelection(getCurrentId) {
    let copyMultiple = [...multiple];
    const currentIdIndex = copyMultiple.indexOf(getCurrentId)
    
    if (currentIdIndex === -1) copyMultiple.push(getCurrentId);
    else copyMultiple.splice(currentIdIndex, 1);

    setMultiple(copyMultiple);

}
    console.log(multiple);

  return (
    <div className="wrapper">
      <button onClick={() => setEnableMultiSelection(!enableMultiSelection)}>
        Enable Multi Selection
      </button>
      <div className="accordian">
        {data && data.length > 0 ? (
          data.map((dataItem) => (
            <div className="item" key={dataItem.id}>
              <div
                onClick={
                  enableMultiSelection
                    ? () => handleMultiSelection(dataItem.id)
                    : () => handleSingleSelection(dataItem.id)
                }
                className="title"
              >
                <h3>{dataItem.question}</h3>
                <span>+</span>
                </div>
                {
                    enableMultiSelection 
                    ? multiple.indexOf(dataItem.id) !== -1 && (
                        <div className="content">{dataItem.answer}</div>
                    )
                    : selected === dataItem.id && (
                  <div className="content">{dataItem.answer}</div>
                ) 
                }
                
            </div>
          ))
        ) : (
          <div>Data not found!</div>
        )}
        <div className="title"></div>
      </div>
    </div>
  );
}
