import { useEffect, useState } from "react";
import "../styles/Counter.css"

function Counter ({skillMin=1, skillMax, totalSkills, setTotalSkills}) {
    const [skill, setSkill] = useState(0);

    useEffect (() => {
		setSkill(skillMin);
	}, [])
    
    function addLevel(e) {
        e.preventDefault();
        //if there is some skills again to use
        if(totalSkills < skillMax) {
            setSkill(skill + 1);
            //we update the total
            setTotalSkills(totalSkills + 1);
        }
    }

    function removeLevel(e) {
        e.preventDefault();
        //if there is some skills again to use
        if(skill > skillMin) {
            setSkill(skill - 1);
            //we update the total
            setTotalSkills(totalSkills - 1);
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