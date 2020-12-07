import React from "react";
import { Button } from "reactstrap"

const styles = {
    image: {
      margin: 20,
      height: "200px",
      width: "200px"
    }
}

function BookCard(props) {
  return (
    <div 
      className="col-lg-3"
      id={props.id}
      key={props.id}
      >
        <br />
        <br />
      <div className="img-container">
        <h5>{props.title}</h5>
        <h6>{props.authors}</h6>
        <img 
            alt={props.title} 
            src={props.image} 
            style={styles.image}
        />
        <br />
        <Button className="customButton">
        <p><a href={props.link}>More Info</a></p>
        </Button>
      
        <Button className="customButton2">
        <p onClick={() => props.handleSaveClick(props)}>Save</p>
        </Button>

        <p>{props.description}</p>
      </div>
    </div>
  );
}

export default BookCard;