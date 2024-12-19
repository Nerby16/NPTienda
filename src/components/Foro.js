import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';

const ForoTienda = () => {
    const [posts, setPosts] = useState([]);
    const [newPost, setNewPost] = useState("");

    const handlePostSubmit = (e) => {
        e.preventDefault();
        if (newPost.trim() !== "") {
            setPosts([...posts, { id: Date.now(), content: newPost }]);
            setNewPost("");
        }
    };

    const handlePostChange = (e) => {
        setNewPost(e.target.value);
    };

    return (
        <Container className="mt-4" style={{ backgroundColor: '#f8f9fa', padding: '20px', borderRadius: '10px' }}>
            <Row>
                <Col>
                    <h2 className="text-primary mb-4">Foro de la Tienda</h2>
                </Col>
            </Row>
            <Row>
                <Col md={8} className="mx-auto">
                    <Form onSubmit={handlePostSubmit}>
                        <Form.Group controlId="newPost">
                            <Form.Label className="text-primary">Escribe tu publicación</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={3}
                                placeholder="Comparte tus ideas, preguntas o comentarios"
                                value={newPost}
                                onChange={handlePostChange}
                                style={{ borderColor: '#007bff' }}
                            />
                        </Form.Group>
                        <Button className="mt-3" variant="primary" type="submit">
                            Publicar
                        </Button>
                    </Form>
                </Col>
            </Row>
            <Row className="mt-4">
                <Col>
                    <h4 className="text-secondary">Publicaciones Recientes</h4>
                    {posts.length > 0 ? (
                        posts.map((post) => (
                            <Card key={post.id} className="mb-3" style={{ backgroundColor: '#e9ecef', borderColor: '#007bff' }}>
                                <Card.Body>
                                    <Card.Text>{post.content}</Card.Text>
                                </Card.Body>
                            </Card>
                        ))
                    ) : (
                        <p className="text-muted">No hay publicaciones todavía. ¡Sé el primero en participar!</p>
                    )}
                </Col>
            </Row>
        </Container>
    );
};

export default ForoTienda;
