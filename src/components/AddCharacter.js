import "../styles/AddCharacter.css";
import data from '../datas/data.json';
import ClassOption from "./ClassOption";
// import barbarian from "../assets/characters/barbarian.svg";
// import thief from "../assets/characters/thief.svg";
// import wizard from "../assets/characters/wizard.svg";
// import bard from "../assets/characters/bard.svg";
// import cleric from "../assets/characters/cleric.svg";
// import warrior from "../assets/characters/warrior.svg";
import { useEffect, useState } from "react";
import Counter from "./Counter";

function Card() {
    const [totalskills, setTotalSkills] = useState('');
    useEffect (() => {
        const skillsMin = data.characteristics.min;	
        setTotalSkills(skillsMin)
    }, [])
     
    

    const skillMax = data.characteristics.max;

    return (
        <form action="">
                    
            <div>
                <label for="name">Name</label>
                <input type="text" id="formName"/>
            </div>
            <div>
            <h3>class</h3>
            <div className="AddCharacter-classes">
            {
                data.classes.map((classe) => 
                    <ClassOption characterClass={classe.name} image={classe.img}/>                    
                )
            }
            </div>
            
            </div>
            <div>
                <h3>skills</h3>
                <p>total points distributed : {totalskills}</p>
                {totalskills === skillMax ?(
                    <p className="AddCharacter-details">Congrats ! Your character is now equiped</p>
                ):(
                    <p className="AddCharacter-details">You have {skillMax - totalskills} left to distribute</p>
                )}
                {
                    data.characteristics.list.map((characteristic) => (
                    <li key={characteristic.name}>
                        <p>{characteristic.name}</p>
                        <Counter setTotalSkills={setTotalSkills} totalSkills={totalskills} skillMax={skillMax}/> 
                    </li>     
                    )             
                )
            }

            </div>

            <button type="submit" className="AddCharacter-button">Create</button>
        </form>
    )
}

export default Card