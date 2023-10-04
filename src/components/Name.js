import { useState } from "react";

function Name ({characterName, setCharacterName}) {
    const [inputValue, setInputValue] = useState('');

    function handleInput(e){
        return (setInputValue(e.target.value))
    }

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