import "../styles/classOption.css"

function ClassOption ({characterClass, setCharacterClass, classe}) {
    function chooseClass(e){
        e.preventDefault();
        setCharacterClass(characterClass=classe);
    }
    return (
        <button className="classOption-button" key={classe.name} onClick={(e) => chooseClass(e)}>
            <img className="classOption-image" alt={`illutration of ${classe.name}`} src={classe.img}/>
            <p className="classOption-text">{classe.name}</p>
        </button>
    )
}

export default ClassOption;