import "../styles/AddCharacter.css";
import data from '../datas/data.json';
import ClassOption from "./ClassOption";
import { useEffect, useState } from "react";
import Counter from "./Counter";
import Name from "./Name";

function Card({allCharacters, setAllCharacters}) {
    const [character, setCharacter] = useState({
        name:"", 
        class: {}, 
        skills: {}
    });
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

    // const [character, setNewCharacter] = useState({
    //     name:"", 
    //     class: {}, 
    //     skills: {}
    // });

    useEffect (() => {
        const pointsMin = data.characteristics.min * data.characteristics.list.length;	
        setPointsDistribued(pointsMin)
    }, [])



    function addNewCharacter(e, characterSkills, characterClass, characterName) {
        e.preventDefault();
        setCharacter(character.name=characterName, character.class=characterClass, character.skills=characterSkills);


        console.log(character)

        //------------
        // to put the new character in the characters array
        //------------
        

        // allCharacters? (
        //     setAllCharacters ([
        //         ...allCharacters,
        //         { character }
        //     ])
        // ) : (
        //     setAllCharacters ([
        //         { character }
        //     ])
        // )

        //------------
    }

    // function addNewCharacterGroup(e, character) {
    //     e.preventDefault();

    //     allCharacters? (
    //         setAllCharacters ([
    //             ...allCharacters,
    //             { character }
    //         ])
    //     ) : (
    //         setAllCharacters ([
    //             { character }
    //         ])
    //     )

    //     console.log(allCharacters)
    // }

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
                {
                
                    data.characteristics.list.map((characteristic) => (
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
                )}
                

            </div>

            <button onClick={(e) => addNewCharacter(e, characterSkills, characterClass, characterName)} className="AddCharacter-button">Create</button>
            {/* <button onClick={(e) => addNewCharacterGroup(e, character)} className="AddCharacter-button">mettre dans tab</button> */}
        </form>
    )
}

export default Card