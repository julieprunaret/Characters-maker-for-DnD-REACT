import { useState } from "react";

function Name ({characterName, setCharacterName}) {
    const [inputValue, setInputValue] = useState('');

    // we collect the value from the input
    function handleInput(e){
        return (setInputValue(e.target.value))
    }

    // once the user clicks out of the input, the value is saved if the name is > 2 caracters
    function handleBlur(){
        if (inputValue.length > 2) {
            setCharacterName(characterName = inputValue);
        } 
    }

    return (
        <div>
            <p>Name</p>
            <input
                placeholder="choose an amazing name"
                value={inputValue}
                onChange={(e)=>handleInput(e)}
                onBlur={handleBlur}
            />
            {inputValue.length < 2 && <p>The name must have at least 2 characters</p>}
        </div>
    )
}

export default Name;