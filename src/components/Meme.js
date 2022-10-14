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
    console.log(allMemes);

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

// export default function Counter(){

//     const [state, setState] = React.useState(["Hi 1"]);

//     function addCount(){
//         setState((prevState) => {
//             let arr = [...prevState];
//             arr.push(`Hi ${arr.length + 1}`);
//             return arr;
//             // return [...prevState, `Hi ${prevState.length + 1}`];
//         })
//     }

//     function removeCount(){
//         setState((prevState) => {
//             let arr = [...prevState];
//             arr.pop();
//             return arr;
//         })
//     }

//     const update = state.map(i => <p>{i}</p>)

//     return (
//         <div className="counter" style={{textAlign : "center"}}>
//             <button className="minus" style={{height : "40px", width : "90px", backgroundColor : "aqua"}} onClick={addCount}>+</button> 
//             <button className="minus" style={{height : "40px", width : "90px", backgroundColor : "aqua"}} onClick={removeCount}>-</button>

//             <div className="count">
//                 {update}
//             </div>
//         </div>
//     )
// }