// src/components/Home.js
import React from 'react';
import { Container, Row, Col, Button} from 'react-bootstrap';
import '../styles/Home.css';
import Curso from './Curso';

function Home() {
  return (
    <Container className="py-5">
      <header className="header text-center mb-5">
        <h1>Bienvenido a los cursos de Universae</h1>
        <p>Compra y consume cursos a tu propio ritmo con la mejor asistencia online.</p>
        <Button className="button-primary" href="/register">Regístrate</Button>
      </header>

      <section className="my-5">
        <h2 className="section-title text-center">¿Qué Ofrecemos?</h2>
        <p className="text-center">
          Ofrecemos una variedad de cursos en línea diseñados para ayudarte a mejorar tus habilidades. Desde programación hasta ciencia de datos, encontrarás contenido actualizado y de alta calidad.
        </p>
      </section>

      <section className="my-5">
        <h2 className="section-title text-center">Nuestros Cursos Destacados</h2>
        <Row>
          <Col md={4}>
            <Curso/>
          </Col>
          <Col md={4}>
            <Curso/>
          </Col>
          <Col md={4}>
            <Curso/>
          </Col>
        </Row>
      </section>

      <section className="my-5">
        <h2 className="section-title text-center">Cómo Funciona</h2>
        <Row>
          <Col md={4} className="text-center">
            <h5>1. Regístrate</h5>
            <p>Crea una cuenta para acceder a una amplia variedad de cursos.</p>
          </Col>
          <Col md={4} className="text-center">
            <h5>2. Compra Cursos</h5>
            <p>Explora y compra cursos que se ajusten a tus necesidades.</p>
          </Col>
          <Col md={4} className="text-center">
            <h5>3. Aprende a tu Ritmo</h5>
            <p>Accede al contenido y comienza a aprender cuando quieras.</p>
          </Col>
        </Row>
      </section>

      <section className="my-5 text-center">
        <h2 className="section-title">Únete a nuestra Comunidad</h2>
        <p>Comparte tus experiencias y resuelve tus dudas en nuestro foro.</p>
        <Button className="button-secondary" href="/community">Visitar el Foro</Button>
      </section>
    </Container>
  );
}

export default Home;

