import { useEffect } from "react";
import "../styles/classOption.css"

function ClassOption ({characterClass, setCharacterClass, classe}) {
    // we check if the class selected is the class of the component (true or false)
    let isClassSelected = characterClass === classe ? true : false;

    // for every change of class we change the value of the variable
    useEffect (() => {
        characterClass === classe ? isClassSelected = true : isClassSelected = false;
    }, [characterClass])
    
    // if the class is clicked, the value replace the old class
    function chooseClass(e){
        e.preventDefault();
        setCharacterClass(characterClass=classe);
    }
    
    return (
        <button className={`classOption-button ${isClassSelected === true ? "isSelected" : ""}`} onClick={(e) => chooseClass(e)}>
            <img className="classOption-image" alt={`illutration of ${classe.name}`} src={classe.img}/>
            <p className="classOption-text">{classe.name}</p>
        </button>
    )
}

export default ClassOption;