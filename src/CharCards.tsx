import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

interface Character {
  name: string;
  image: string;
  species: string;
  gender: string;
  status: string;
  origin: {
    name: string;
  };
}

interface CharCardsProps {
  character: Character;
}

const CharCards: React.FC<CharCardsProps> = (props) => {

  return (
    <Col>
      <Card className="h-100" style={{ width: '18rem' }}>
        <Card.Img variant="top" src={props.character.image} alt={props.character.name} />
        <Card.Body className="cardBody" >
          <Card.Title>{props.character.name}</Card.Title>
          <Card.Text>"species: "{props.character.species}</Card.Text>
          <Card.Text>"gender: "{props.character.gender}</Card.Text>
          <Card.Text>"gender: "{props.character.status}</Card.Text>
          <Card.Text>"gender: "{props.character.origin.name}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  )
}

export default CharCards;