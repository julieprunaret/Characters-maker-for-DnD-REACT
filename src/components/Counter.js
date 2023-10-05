import { useEffect, useState } from "react";
import "../styles/Counter.css"

function Counter ({pointsTotal, pointsDistribued, setPointsDistribued, characterSkills, name, characterClass, min}) {
    // the pointMin depends of the class and his modifier (every class has a speciality)
    const pointsMin = characterClass.characteristics[0].name === name? (
            characterClass.characteristics[0].modifier
        ) : (
            min
        );

    //the skill is the number of points inside this specific skill
    const [skill, setSkill] = useState(pointsMin);

    //if we change the class, we have to change the value of the state
    useEffect (() => {
        if ( skill === 1) {
            setSkill(pointsMin)
        } 
    }, [pointsMin, skill, characterClass])

    // to add points
    function addLevel(e) {
        e.preventDefault();
        //if there is some skills again to use
        if(pointsDistribued < pointsTotal) {
            // we iterate the skill
            setSkill(skill + 1);
            // we update the total
            setPointsDistribued(pointsDistribued + 1);
            // we put the value inside the character's skill
            characterSkills[name]=skill + 1;
        }
    }

    function removeLevel(e) {
        e.preventDefault();
        //if there is some skills again to use
        if(skill > pointsMin) {
            // we iterate the skill
            setSkill(skill - 1);
            // we update the total
            setPointsDistribued(pointsDistribued - 1);
            // we put the value inside the character's skill
            characterSkills[name]=skill - 1;
        }
    }
    
    return (
        <div className="counterContainer">
            <button className="counter-button" onClick={(e)=>removeLevel(e)}>
                -
            </button>
            {skill}
            <button className="counter-button" onClick={(e)=>addLevel(e)}>
                +
            </button>
        </div>
        
    )
}

export default Counter;