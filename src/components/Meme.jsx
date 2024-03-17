import { useEffect, useState } from "react";
export default function Meme() {
  const [allMemes, setAllMemes] = useState([]);
  const [memeText, setMemeText] = useState({ topText: "", bottomText: "" });
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    memeImage: "https://i.imgflip.com/1ur9b0.jpg",
  });
  // fetch data / use effect
  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => setAllMemes(data.data.memes));
  }, []);

  // handle generate new image click
  function handleClick() {
    const randomNumber = Math.floor(Math.random() * allMemes.length);
    console.log(allMemes[randomNumber].url);
    setMeme((prevMeme) => 
      ({ ...prevMeme, memeImage: allMemes[randomNumber].url }
    ));
  }
  // handle form data
  function handleChange(event) {
    setMemeText((prevMemeText) => {
      return { ...prevMemeText, [event.target.name]: event.target.value };
    });
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
