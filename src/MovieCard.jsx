
import React from "react";
import Card from "react-bootstrap/Card";

const MovieCard = ({ title, description, rating, imageUrl } ) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src= {imageUrl}/>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          Description: {description}
          <br />
          Rating: {rating}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default MovieCard;