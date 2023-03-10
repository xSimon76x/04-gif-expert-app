
export const AddCategory = ({onAddAnime, inputValue, setInputValue}) => {

    const agregarAnime = (e) => {
        e.preventDefault();
        if(inputValue.trim().length <= 1) return;

        onAddAnime(inputValue.trim())
        setInputValue("");
    }
    

    return (
        <>  
            <form onSubmit={(e) => agregarAnime(e)}>
                <div style={{display: "flex"}}>
                    <input 
                        id="inputCategoria" 
                        type="text"
                        onChange={ e => setInputValue(e.target.value)}
                        value={inputValue}
                    />
                    <button onClick={agregarAnime}>Agregar Anime</button>
                </div>
            </form>

        </>
    )
}