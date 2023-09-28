import "../../styles/Newcard.css";
import data from '../../datas/datas.json';

function Card() {

    console.log(data.characters);

    return (
        <form action="">
            {/* {
                    data.characters.map(({}) => {

                    })
            } */}
                    
            <div>
                <label for="name">Name</label>
                <input type="text" id="formName" required/>
            </div>
            <div>
                <label for="formFamily">Class</label>
                <select name="family" id="formFamily" required>
                    <option value="">--Please choose an option--</option>
                    <option value="wizard">Wizard</option>
                    <option value="cleric">Cleric</option>
                    <option value="artificer">Paladin</option>
                    <option value="ranger">Ranger</option>
                </select>
            </div>
            <div>
                <h3>skills</h3>
                    {/* <li key={skills.id}>
                        <label for={skills.name} min={skills.} max="10">Strength</label>
                        <input type="number" id="strength" required/>
                    </li>    */}

                <label for="strength" min="0" max="10">Strength</label>
                <input type="number" id="strength" required/>
                <label for="wisdom" min="0" max="10">Wisdom</label>
                <input type="number" id="wisdom" required/>
                <label for="dexterity" min="0" max="10">Dexterity</label>
                <input type="number" id="dexterity" required/>
                <label for="intelligence" min="0" max="10">Intelligence</label>
                <input type="number" id="intelligence" required/>
            </div>

            <button type="submit">Create</button>
        </form>
    )
}

export default Card