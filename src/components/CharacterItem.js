import "../styles/CharacterItem.css"

function CharacterItem({characterClass, characterName, characterSkills, characterKey}) {

  return (
      <li className="characterItem-container">
          <h3>{characterName}</h3>
          <img className="classOption-image" alt={`illutration of ${characterClass.name}`} src={characterClass.img}/>
        
            {/* 👇️ iterate object KEYS */}
            <p className="characterItem-skills">
                {
                    Object.keys(characterSkills).map((key, index) => {
                        return (
                        <span key={`${characterKey}-${key}`}>
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