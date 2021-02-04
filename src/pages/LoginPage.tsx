import React, { ReactElement } from 'react';
import styled from 'styled-components';
import { Card } from 'react-bootstrap';
import { FullSizeLayout } from '../layouts';
import { LoginContainer } from '../domain/User';
import 'react-toastify/dist/ReactToastify.css';

const Wrapper = styled.div`
  width: 400px;
`;

export function LoginPage(): ReactElement {
  return (
    <FullSizeLayout>
      <Wrapper className="mx-auto mt-4">
        <h3 className="p-4 text-center">Redux Toolkit Boilerplate</h3>
        <Card className="p-4">
          <LoginContainer />
        </Card>
        <div className="p-4 text-center" style={{ fontSize: '14px' }}>
          이 웹사이트는 구글 크롬 브라우저에 최적화되어 있습니다.
        </div>
      </Wrapper>
    </FullSizeLayout>
  );
}
