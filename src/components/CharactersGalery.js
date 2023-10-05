import '../styles/CharactersGalery.css';
import CharacterItem from './CharacterItem';

function CharactersGalery({characters}) {
  return (
    <div className="CharactersGalery-itemContainer">
        {
            characters.map(
                (character, index) => (
                    <CharacterItem key={`${character.characterName}-${index}`} characterClass={character.characterClass} characterName={character.characterName} characterSkills={character.characterSkills} characterKey={`${character.characterName}-${index}`} />
                )             
            )
        }
    </div>
  )
}

export default CharactersGalery