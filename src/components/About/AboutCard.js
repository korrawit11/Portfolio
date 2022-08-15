import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Korrawit Rojsiripornchai </span>
            from <span className="purple">Samutprakan, Thailand.</span>
            <br />I am person who change path to junior software developer.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading books
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Remember that the reason you're doing this is to make your life better."{" "}
          </p>
          <footer className="blockquote-footer">Korrawit Rojsiripornchai</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
