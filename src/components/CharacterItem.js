import "../styles/CharacterItem.css"

function CharacterItem({characterClass, characterName, characterSkills, characterKey}) {

  return (
      <li key={characterKey} className="characterItem-container">
          <h3>{characterName}</h3>
          <img className="classOption-image" alt={`illutration of ${characterClass.name}`} src={characterClass.img}/>
        
            {/* 👇️ iterate object KEYS */}
            <p className="characterItem-skills">
                {
                    Object.keys(characterSkills).map((key, index) => {
                        return (
                        <span key={index}>
                            {key} : {characterSkills[key]}
                        </span>
                        );
                    })
                }
            </p>

        
      </li>
  )
}

export default CharacterItem;