import '../styles/App.css';
import Banner from './Banner';
import AddCharacter from './AddCharacter';
import { useEffect, useState } from 'react';

function App() {
  // const [character, setCharacter] = useState({
  //     name:"", 
  //     class: {}, 
  //     skills: {}
  // });
  // const savedCharacters = localStorage.getItem('characters')

  // // if there is something inside we bring it, in the other way  
  // const [allCharacters, setAllCharacters] = useState(savedCharacters? 
  //   JSON.parse(savedCharacters) : [...allCharacters, []])
  // // at each change of state, we store the data into the localstorage
  // useEffect(() => {
  //   localStorage.setItem('characters', JSON.stringify(character))
  // }, [character])

    // if there is something inside we bring it, in the other way  
    const [allCharacters, setAllCharacters] = useState([])

  return (
    <div className="App">
      <Banner />
      <AddCharacter allCharacters={allCharacters} setAllCharacters={setAllCharacters}/>
    </div>
  );
}

export default App;
