import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Saurabh Mulik </span>
            from <span className="purple"> Pune,Maharastra, India.</span>
            <br />
            I am currently intern as a Data engineer at Dataeaze.
            <br />
            I am currently pursuing a Bachelor of Technology (B.Tech) in Computer Engineering at MIT College.
            <br />
            <br />
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
