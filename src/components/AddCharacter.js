import "../styles/AddCharacter.css";
import data from '../datas/data.json';
import ClassOption from "./ClassOption";
import { useEffect, useState } from "react";
import Counter from "./Counter";
import Name from "./Name";

function Card({characters, setCharacters}) {
    const [characterClass, setCharacterClass] = useState({
        name: "barbarian",
        label: "Barbarian",
        description: "Blablabla",
        img: "images/barbarian.svg",
        characteristics: [
            {
            name: "strength",
            modifier: 2
            }
        ]
    });
    const [characterName, setCharacterName] = useState("");
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

    useEffect (() => {
        const pointsMin = data.characteristics.min * data.characteristics.list.length;	
        setPointsDistribued(pointsMin)
    }, [])

    useEffect (() => {
        console.log(characters)
    }, [characters])

    function addNewCharacter(e, characterSkills, characterClass, characterName) {
        console.log()
        e.preventDefault();

        characters.length? (
            setCharacters(
                [...characters, { characterSkills, characterClass, characterName }]
            )
        ) : (
            setCharacters(
                [{ characterSkills, characterClass, characterName }]
            )
        )
        
        console.log(characters)
    }

    return (
        <form action="">

        <Name characterName={characterName} setCharacterName={setCharacterName}/>
                    
            <div>
                <h3>class</h3>
                <div className="AddCharacter-classes">
                    {
                        data.classes.map((classe) => 
                            <ClassOption characterClass={characterClass} setCharacterClass={setCharacterClass} classe={classe}/>      
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
                                    /> 
                            </li>     
                            )             
                        )
                    }
                </ul>


            </div>

            <button onClick={(e) => addNewCharacter(e, characterSkills, characterClass, characterName)} className="AddCharacter-button">Create</button>

        </form>
    )
}

export default Card