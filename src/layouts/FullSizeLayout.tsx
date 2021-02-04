import React, { ReactElement } from 'react';
import { Container, Col, Row } from 'react-bootstrap';

interface FullSizeLayoutProps {
  children: ReactElement;
}

export function FullSizeLayout({ children }: FullSizeLayoutProps): ReactElement {
  return (
    <Container fluid>
      <Row className="justify-content-md-center vh-100">
        <Col>{children}</Col>
      </Row>
    </Container>
  );
}
