// src/components/Cursos.js
import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { createClient } from '@supabase/supabase-js';
import Curso from './Curso'; // Importa el componente Curso

const supabaseUrl = 'https://iaipkcseurfmnccvimca.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlhaXBrY3NldXJmbW5jY3ZpbWNhIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTczMTMyMTMyNSwiZXhwIjoyMDQ2ODk3MzI1fQ.RenZtV5kF0H7GO1ZAHOfx1044LIFX4TSSdS9Dq_gMIg';
const supabase = createClient(supabaseUrl, supabaseKey);

function Cursos() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      const { data, error } = await supabase.from('courses').select('*');
      if (error) {
        console.error('Error fetching courses:', error);
      } else {
        setCourses(data);
      }
    };
    fetchCourses();
  }, []);

  return (
    <Container className="py-5">
      <h1 className="text-center mb-4">Nuestros Cursos</h1>
      <Row>
        {courses.map((course) => (
          <Col key={course.id} md={4} className="mb-4">
            <Curso
              id={course.id}
              image_url={course.image_url}
              title={course.title}
              description={course.description}
              duration={course.duration}
              price={course.price}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Cursos;
