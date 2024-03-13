import { useState } from "react";
import MemeData from "./MemeData";
export default function Meme() {
  let memeUrl;
  const memesArray = MemeData;
  let randomNumber = Math.floor(Math.random() * memesArray.length);
  memeUrl = memesArray[randomNumber].imageUrl;
  const [memeImage, setImage] = useState(memeUrl);
  function handleClick() {
    randomNumber = Math.floor(Math.random() * memesArray.length);
    memeUrl = memesArray[randomNumber].imageUrl;
    setImage(memeUrl);
  }
  return (
    <div className="meme-component">
      <div className="meme-inputs">
        <div className="input-labeled">
          <label>Top Text</label>
          <input type="text" />
        </div>
        <div className="input-labeled">
          <label>Bottom text</label>
          <input type="text" />
        </div>
      </div>
      <button onClick={handleClick} className="meme-button">
        Get a new meme image 🖼
      </button>
      <div className="">
        <img src={memeUrl} alt="Meme-image" className="meme-image" />
      </div>
    </div>
  );
}
