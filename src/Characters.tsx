import { useState, useEffect } from "react";
import axios from "axios";
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import CharCards from "./CharCards";

const Characters = () => {
  const [characters, setCharacters] = useState<Array<object>>([]);

  useEffect(() => {
    console.log('hello');
    const getCharacters = async () => {
      try {
        const url = "https://rickandmortyapi.com/api/character";
        const response = await axios.get(url);
        const data = response.data.results;
        console.log('DATA!!!:', data)
        const newCharacters = [];
        for (let i = 0; i < 5; i++) {
          const character = data[i];
          newCharacters.push({
            name: character.name,
            image: character.image,
            species: character.species,
            gender: character.gender,
            status: character.status,
            origin: character.origin.name,
          });
        }
        setCharacters(newCharacters);
        console.log(newCharacters);
      } catch (error) {
        console.error('Error fetching characters:', error);
      }
    };

    getCharacters();
  }, []);



  const charactersArr = characters.map((character, idx) => {
    return (<CharCards
      key={idx}
      character={character}
    />);
  });

  return (
    <div>
      <h1>List of Characters</h1>
      <Container className="container" >
        <Row >
          {charactersArr}
        </Row>
      </Container>
    </div>
  );
}


export default Characters;
