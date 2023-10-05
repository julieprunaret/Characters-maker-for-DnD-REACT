import "../styles/AddCharacter.css";
import data from '../datas/data.json';
import ClassOption from "./ClassOption";
import { useEffect, useState } from "react";
import Counter from "./Counter";
import Name from "./Name";

function Card({characters, setCharacters}) {
    const [characterName, setCharacterName] = useState("");

    const [characterClass, setCharacterClass] = useState({
        name: data.classes[0].name,
        label: data.classes[0].name,
        description: data.classes[0].description,
        img: data.classes[0].img,
        characteristics: data.classes[0].characteristics
    });
    const [characterSkills, setCharacterSkills] = useState({
        strength: data.characteristics.min,
        dexterity: data.characteristics.min,
        constitution: data.characteristics.min,
        intelligence: data.characteristics.min,
        wisdom: data.characteristics.min,
        charisma: data.characteristics.min
    });
    const [pointsDistribued, setPointsDistribued] = useState('');
    const pointsTotal = data.characteristics.pointsNumber;
    const [errorSentence, setErrorSentence] = useState("");

    // there is a minimum of points number (nomber of skills * number min of point/skill)
    useEffect (() => {
        const pointsMin = data.characteristics.min * data.characteristics.list.length;	
        setPointsDistribued(pointsMin)
    }, [])

    function addNewCharacter(e, characterSkills, characterClass, characterName) {
        e.preventDefault();
        // the character must have a name and a number of skills to be create
        if (characterName.length > 1 && pointsDistribued === pointsTotal) {
            // if there is already characters in the tab, using the spread operator to merge them
            characters.length? (
                setCharacters(
                    [...characters, { characterSkills, characterClass, characterName }]
                )
            ) : (
                 // if there is no chracter, we send the object without merging
                setCharacters(
                    [{ characterSkills, characterClass, characterName }]
                )
            )
            // we clean the error message
            setErrorSentence("")
        } else if (characterName.length < 1) {
            // if the name is empty
            setErrorSentence("Please choose a name for your character")
        } else {
            // if all points arn't distributed
            setErrorSentence("Please distribute all the points to your character")
        }
    }

    return (
        <form action="">

        <Name characterName={characterName} setCharacterName={setCharacterName}/>
                    
            <div>
                <h3>class</h3>
                <div className="AddCharacter-classes">
                    {
                        data.classes.map((classe) => 
                            <ClassOption characterClass={characterClass} key={classe.name} setCharacterClass={setCharacterClass} classe={classe}/>      
                        )              
                    }
                </div>
                { characterClass ? (
                    <div>
                        <p>{characterClass.name}</p>
                        <p>{characterClass.description}</p>
                    </div>
                ):(
                    <p>no class</p>
                ) }
            </div>
            <div>
                <h3>skills</h3>
                <p>total points distributed : {pointsDistribued}</p>
                {
                    pointsDistribued === pointsTotal ?(

                        <p className="AddCharacter-details">Congrats ! Your character is now equiped</p>
                    ):(
                        <p className="AddCharacter-details">You have {pointsTotal - pointsDistribued} left to distribute</p>
                    )
                }
                <ul className="AddCharacter-skillsContainer">
                    {
                        data.characteristics.list.map(
                            (characteristic) => (
                            <li key={characteristic.name}>
                                <p>{characteristic.name}</p>
                                <Counter 
                                    setPointsDistribued={setPointsDistribued} 
                                    pointsDistribued={pointsDistribued} 
                                    pointsTotal={pointsTotal} 
                                    characterClass={characterClass}
                                    characterSkills={characterSkills} 
                                    setCharacterSkills={setCharacterSkills} 
                                    name={characteristic.name}
                                    min={data.characteristics.min}
                                    /> 
                            </li>     
                            )             
                        )
                    }
                </ul>
            </div>
            <button onClick={(e) => addNewCharacter(e, characterSkills, characterClass, characterName)} className="AddCharacter-button">Create</button><span>{errorSentence}</span>
        </form>
    )
}

export default Card