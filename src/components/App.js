import '../styles/App.css';
import Banner from './Banner';
import AddCharacter from './AddCharacter';
import CharacterItem from './CharacterItem';
import { useEffect, useState } from 'react';

function App() {
  // const [characters, setCharacters] = useState([]);
 const savedCharacters = localStorage.getItem('characters')

  // // if there is something inside we bring it, in the other way  
  const [characters, setCharacters] = useState(savedCharacters? 
     JSON.parse(savedCharacters) : [])
  // // at each change of state, we store the data into the localstorage
  useEffect(() => {
    localStorage.setItem('characters', JSON.stringify(characters))
  }, [characters])

    // if there is something inside we bring it, in the other way  

  return (
    <div className="App">
      <Banner />
      <AddCharacter characters={characters} setCharacters={setCharacters}/>
      <div class="app-itemContainer">
      {
          characters.map(
              (character, index) => (
                  <CharacterItem characterKey={`${character}-${index}`} characterClass={character.characterClass} characterName={character.characterName} characterSkills={character.characterSkills}/>
              )             
          )
      }
      </div>
      {characters.length?(<button onClick={() => setCharacters([])} className="AddCharacter-button">clean</button>):(<p>you will be able to see your characters here once created</p>) }
    </div>
  );
}

export default App;
