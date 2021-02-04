import React from 'react';
import styled from 'styled-components';
import { Container } from 'react-bootstrap';

interface DefaultLayoutProps {
  children: React.ReactNode;
}

// TODO
// styled component로 색을 관리하자.
const Main = styled.main`
  right: 0;
  left: 220px;
  position: absolute;
  background: #eee;
`;

export function DefaultLayout({ children }: DefaultLayoutProps): JSX.Element {
  return (
    <Container fluid>
      <Main>{children}</Main>
    </Container>
  );
}
