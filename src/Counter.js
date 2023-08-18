import { useState } from "react";

// function Profile({image,name}){
//   return(
//     <>
//     <img src= {image}  height = {200} width={200} />
//     <h1>{name}</h1>
//     </>
//   )
// };
export function Counter() {
  const [like, setlike] = useState(1);
  return (
    <div className='Form'>
      <input type='Email' name='Email' placeholder='Enter your Email' />
      <input type='Password' name='Password' placeholder='Enter your password' />

      <button onClick={() => {
        setlike(like + 1);

        //console.log(like+1);
      }}>
        Like
      </button>

      <p>{like}</p>
    </div>

  );
}
