import React from "react";
import axios from "axios";
import "../App.css";

export default function Meme(){

    const [meme , setMeme] = React.useState({imageUrl : "https://imgur.com/6AGbiHj.jpg"});
    const [allMemes, setAllMemes] = React.useState({})

    function displayMemeImageUrl(){
        const randomNumber = Math.floor(Math.random() * 50);
        setMeme((prevState) => {
            return {
                ...prevState,
                imageUrl : allMemes.memes[randomNumber].url
            }
        })
    }

    React.useEffect(() => {
        axios.get(`https://meme-api.herokuapp.com/gimme/wholesomememes/50`)
         .then(res => setAllMemes(res.data))
    },[])
  

    return(
        <main>
            <div className="meme-form">

                <button onClick={displayMemeImageUrl}>Get a new Meme image</button>
                
            </div>
            
            <div className="meme-view">
                <img src={meme.imageUrl} alt="logo" />
            </div>
        </main>
    ) 

    

}
