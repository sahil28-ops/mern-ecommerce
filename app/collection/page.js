'use client';
import { useEffect, useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchCategory = async () => {
      let response = await fetch("https://fakestoreapi.com/products");
      if (!response.ok) throw new Error("Failed to fetch products");
      let data = await response.json();
      setProducts(data);
    };
    fetchCategory();
  }, []);

  return (
    <div>
      <Container className="py-4">
        <Row className="g-4">
          {products.map((curEle, index) => (
            <Col key={curEle.id || index} sm={12} md={6} lg={4}>
              <Card className="h-100 shadow">
                <Card.Img variant="top" src={curEle.image} alt={curEle.title} className="p-3" style={{ height: "250px", objectFit: "contain" }} />
                <Card.Body>
                  <Card.Title className="text-truncate">{curEle.title}</Card.Title>
                  <Card.Text className="text-muted">{curEle.category}</Card.Text>
                  <Card.Text className="fw-bold">${curEle.price.toFixed(2)}</Card.Text>
                  <Card.Text className="text-truncate">{curEle.description}</Card.Text>
                </Card.Body>
                <Card.Footer className="text-muted">
                  <small>Rating: {curEle.rating.rate} ({curEle.rating.count} reviews)</small>
                </Card.Footer>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Home;
