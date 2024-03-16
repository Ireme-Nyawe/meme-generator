import { useState } from "react";
import MemeData from "./MemeData";
export default function Meme() {
  let memeUrl;
  const memesArray = MemeData;
  let randomNumber = Math.floor(Math.random() * memesArray.length);
  memeUrl = memesArray[randomNumber].imageUrl;
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    memeImage:
      "https://i.kym-cdn.com/entries/icons/original/000/013/564/doge.jpg",
  });

  const [memeText, setMemeText] = useState({ topText: "", bottomText: "" });
  function handleChange(event) {
    setMemeText((prevMemeText) => {
      return { ...prevMemeText, [event.target.name]: event.target.value };
    });
  }

  function handleClick() {
    randomNumber = Math.floor(Math.random() * memesArray.length);
    memeUrl = memesArray[randomNumber].imageUrl;
    setMeme((prevMeme) => ({
      ...prevMeme,
      memeImage: memeUrl,
    }));
  }
  return (
    <div className="meme-component">
      <div className="meme-inputs">
        <div className="input-labeled">
          <label>Top Text</label>
          <input
            type="text"
            name="topText"
            value={memeText.topText}
            placeholder="Type---"
            onChange={handleChange}
          />
        </div>
        <div className="input-labeled">
          <label>Bottom text</label>
          <input
            type="text"
            name="bottomText"
            value={memeText.bottomText}
            placeholder="Type---"
            onChange={handleChange}
          />
        </div>
      </div>
      <button onClick={handleClick} className="meme-button">
        Get a new meme image 🖼
      </button>
      <div className="meme">
        <img src={meme.memeImage} alt="Meme-image" className="meme-image" />
        <h2 className="top-text">{memeText.topText}</h2>
        <h2 className="bottom-text">{memeText.bottomText}</h2>
      </div>
    </div>
  );
}
