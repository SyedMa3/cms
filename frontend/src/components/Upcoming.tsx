import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";
import ListGroup from "react-bootstrap/ListGroup";
import { Container } from "react-bootstrap";
import "./Upcoming.css";
import React, { useState } from "react";

function Upcoming() {
  const para =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
  const [eventNumber, setEventNumber] = useState(1);
  const [eventDetails, setEventDetails] = useState(para);
  const [eventDate , setEventDate] = useState("12-10-2022");
  return (
    <div className="Event__Page">
      <div className="Event__list">
        <button
          onClick={() => {
            setEventDetails(
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            );
            setEventNumber(1);
            setEventDate("12-10-2022")
          }}
        >
          12-10-2022 | Event 1
        </button>
        <button
          onClick={() => {
            setEventDetails(
                "Lorem ipsum dolor sit amet, consecteturolore magna aliqua. Ut enim ad minim veexercitation ullt aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
              );
            setEventNumber(2);
            setEventDate("12-11-2022")
          }}
        >
          12-11-2022 | Event 2
        </button>
        <button
          onClick={() => {
            setEventDetails(
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temnulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
              );
            setEventNumber(3);
            setEventDate("12-13-2022")
          }}
        >
          12-12-2022 | Event 3
        </button>
        <button
          onClick={() => {
            setEventDetails(
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,"
              );
            setEventNumber(4);
            setEventDate("12-14-2022")
          }}
        >
          12-13-2022 | Event 4
        </button>
      </div>
      <div className="Event__Content">
        <h2>Event {eventNumber}</h2>
        <p className="Event__date">Date - {eventDate}</p>
        <p className="Event__details">
          {eventDetails}
        </p>
        <h6>Registration - Link {eventNumber}</h6>
      </div>
    </div>
    // <div>
    //     <h3>Upcoming Activites</h3>
    //     <Container>
    //         <Tab.Container defaultActiveKey="#link1">
    //             <Row>
    //                 <Col sm={4}>
    //                     <ListGroup>
    //                         <ListGroup.Item action href="#link1">
    //                             Date | Event 1
    //                         </ListGroup.Item>
    //                         <ListGroup.Item action href="#link2">
    //                             Date | Event 2
    //                         </ListGroup.Item>
    //                     </ListGroup>
    //                 </Col>
    //                 <Col sm={8}>
    //                     <Tab.Content>
    //                         <Tab.Pane eventKey="#link1">
    //                         Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
    //                         </Tab.Pane>
    //                         <Tab.Pane eventKey="#link2">
    //                             fff
    //                         </Tab.Pane>
    //                     </Tab.Content>
    //                 </Col>
    //             </Row>
    //         </Tab.Container>
    //     </Container>
    // </div>
  );
}

export default Upcoming;
