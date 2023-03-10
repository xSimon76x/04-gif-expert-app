import { useState } from "react"
import { AddCategory, GifGrid  } from './components'

export const GifExpertApp = () => {

    const [inputValue, setInputValue] = useState("")
    const [animes, setAnimes] = useState(['Dragon Ball', 'Bleach', 'One Punch Man'])

    const onAddAnime = (onNewAnime) => {

        // if (animes.find((anime) => anime.toLowerCase().trim() == onNewAnime.toLowerCase().trim())) {
        //     alert("anime ya incluido, escriba otro");
        //     return;
        // }
        setAnimes([...animes, onNewAnime]);
    }

    return (
        <>
            <h1>GifExpertApp</h1>
            <AddCategory onAddAnime={onAddAnime} inputValue={inputValue} setInputValue={setInputValue}/>
            
            <GifGrid inputValue={inputValue} />
            
        </>
    )
}