import { useState } from "react";

export function Addcolor() {
  const [color, setcolor] = useState("Delete the word and type color");
  const styles = {
    backgroundColor: color
  };
  return (
    <div>
      <input style={styles} type='text'
        placeholder='Enter the color'
        onChange={(event) => setcolor(event.target.value)}
        value={color} />
      {/* <button
            onClick={()=>{
              setcolor([color])
            }}>Add Color</button> */}
      <Colorbox clr={color} />
    </div>
  );
}
function Colorbox({ clr }) {
  const styles = {
    backgroundColor: clr,
    width: "320px",
    height: "300px",
    margin: "0 14rem",
  };
  return (
    <div style={styles}></div>
  );
}
