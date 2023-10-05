import '../styles/App.css';
import Banner from './Banner';
import AddCharacter from './AddCharacter';
import CharactersGalery from './CharactersGalery';
import { useEffect, useState } from 'react';

function App() {
  // varialble to retrieve the stored data
 const savedCharacters = localStorage.getItem('characters')
  // if there is something inside we bring it, in the other way we create an empty array
  const [characters, setCharacters] = useState(savedCharacters? JSON.parse(savedCharacters) : [])
  // at each change of state, we store the data into the localstorage
  useEffect(() => {
    localStorage.setItem('characters', JSON.stringify(characters))
  }, [characters])

  return (
    <div className="App">
      <Banner />
      <AddCharacter characters={characters} setCharacters={setCharacters}/>
      <CharactersGalery characters={characters} setCharacters={setCharacters}/>

      {/* to clean the storage and delete all characters if there is some*/}
      {characters.length?(
        <button onClick={() => setCharacters([])} className="AddCharacter-button">clean</button>
      ):(
        <p>you will be able to see your characters here once created</p>
      )}
    </div>
  );
}

export default App;
