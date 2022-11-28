import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import ListGroup from 'react-bootstrap/ListGroup';
import { Container } from 'react-bootstrap';

function Upcoming() {
    return(
        <div>
            <h3>Upcoming Activites</h3>
            <Container>
                <Tab.Container defaultActiveKey="#link1">
                    <Row>
                        <Col sm={4}>
                            <ListGroup>
                                <ListGroup.Item action href="#link1">
                                    Date | Event 1
                                </ListGroup.Item>
                                <ListGroup.Item action href="#link2">
                                    Date | Event 2
                                </ListGroup.Item>
                            </ListGroup>
                        </Col>
                        <Col sm={8}>
                            <Tab.Content>
                                <Tab.Pane eventKey="#link1">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                </Tab.Pane>
                                <Tab.Pane eventKey="#link2">
                                    fff
                                </Tab.Pane>
                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
            </Container>
        </div>
    )
}

export default Upcoming;