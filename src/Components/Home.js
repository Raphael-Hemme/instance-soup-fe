import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";


const Home = ({allSoupList}) => {
  return (
    <Container fluid={true} className="justify-content-center mt-3 pb-5">
      <Row className="w-100 justify-content-center">
        <Col sm={12} md={10} lg={8} className="d-flex flex-wrap">
          {allSoupList &&
            allSoupList.map((soup) => {
              return (
                <Card key={soup.id} className="m-1" style={{ width: "18rem" }}>
                  <Card.Img variant="top" src="holder.js/100px180" />
                  <Card.Body>
                    <Card.Title>{soup.title}</Card.Title>
                    <Card.Text>
                      {soup.abstract}
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                  </Card.Body>
                </Card>
              );
            })}
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
