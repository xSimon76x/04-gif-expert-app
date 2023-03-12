import PropTypes from 'prop-types'

export const AddCategory = ({onAddAnime, inputValue, setInputValue}) => {

    const agregarAnime = (e) => {
        e.preventDefault();

        console.log("prueba",inputValue)
        if(inputValue.trim().length <= 1) return;
        
        onAddAnime(inputValue.trim())
        setInputValue("");
    }

    const onChange = ({target}) => {
        setInputValue(target.value);
    }
    

    return (
        <>  
            <form onSubmit={(e) => agregarAnime(e)} aria-label="form">
                <div style={{display: "flex"}}>
                    <input 
                        id="inputCategoria" 
                        type="text"
                        onChange={onChange}
                        value={inputValue}
                    />
                    <button onClick={agregarAnime}>Agregar Anime</button>
                </div>
            </form>

        </>
    )
}

AddCategory.propTypes = {
    onAddAnime: PropTypes.func.isRequired, 
    inputValue: PropTypes.string, 
    setInputValue: PropTypes.func
}