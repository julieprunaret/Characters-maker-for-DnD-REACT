import "../styles/classOption.css"

function ClassOption ({characterClass, image}) {
    function chooseClass(e){
        e.preventDefault();
        console.log(characterClass)

    }
    return (
        <button className="classOption-button" key={characterClass} onClick={(e) => chooseClass(e)}>
            {/* <img src={`../assets/characters/${characterClass}.svg`} alt={characterClass} className={`classOption-img ${imageClass}`}/> */}
            <img className="classOption-image" alt={`illutration of ${characterClass}`} src={image}/>
            <p className="classOption-text">{characterClass}</p>
        </button>
    )
}

export default ClassOption;