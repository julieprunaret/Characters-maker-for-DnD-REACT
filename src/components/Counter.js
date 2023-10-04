import { useEffect, useState } from "react";
import "../styles/Counter.css"

function Counter ({pointsTotal, pointsDistribued, setPointsDistribued, characterSkills, name, characterClass}) {

    const pointsMin = characterClass.characteristics[0].name === name? (
            characterClass.characteristics[0].modifier
        ) : (
            characterSkills[name]
        );

        const [skill, setSkill] = useState(pointsMin);

        useEffect (() => {
            setSkill(pointsMin)
        }, [])

        useEffect (() => {
            skill === 1 && setSkill(pointsMin)
        }, [pointsMin, skill, characterClass])

    
    function addLevel(e) {
        e.preventDefault();
        //if there is some skills again to use
        if(pointsDistribued < pointsTotal) {
            setSkill(skill + 1);
            //we update the total
            setPointsDistribued(pointsDistribued + 1);
            characterSkills[name]=skill + 1;
        }
    }

    function removeLevel(e) {
        e.preventDefault();
        //if there is some skills again to use
        if(skill > pointsMin) {
            setSkill(skill - 1);
            //we update the total
            setPointsDistribued(pointsDistribued - 1);
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