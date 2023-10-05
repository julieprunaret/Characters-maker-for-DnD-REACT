import { useEffect } from "react";
import "../styles/classOption.css"

function ClassOption ({characterClass, setCharacterClass, classe}) {
    // console.log(classe, characterClass)
    let isClassSelected = characterClass === classe ? true : false;;
    useEffect (() => {
        characterClass === classe ? isClassSelected = true : isClassSelected = false;
        isClassSelected === true ? (console.log(classe, "OK", characterClass)):(console.log(classe, "n'est pas égale à ", characterClass));
    }, [characterClass])
    
    function chooseClass(e){
        e.preventDefault();
        setCharacterClass(characterClass=classe);
    }
    return (
        <button className={`classOption-button ${isClassSelected === true ? "isSelected" : ""}`} key={classe.name} onClick={(e) => chooseClass(e)}>
            <img className="classOption-image" alt={`illutration of ${classe.name}`} src={classe.img}/>
            <p className="classOption-text">{classe.name}</p>
        </button>
    )
}

export default ClassOption;