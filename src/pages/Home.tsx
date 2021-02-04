import React, { ReactElement } from 'react';
import styled from 'styled-components';
import { path } from '../routes/path';
import { FullSizeLayout } from '../layouts';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const StyledH1 = styled.h1.attrs(props => ({
  className: props.className,
}))`
  color: ${props => props.theme.textColor};
`;

const StyledAtag = styled.a`
  &:hover .h1__text {
    color: ${props => props.theme.textHover};
  }
`;

export function Home(): ReactElement {
  return (
    <FullSizeLayout>
      <div className="mx-auto mt-4">
        <StyledAtag href={path.Login}>
          <header>
            <StyledH1 className="p-4 text-center display-4 h1__text">Redux Toolkit Boilerplate</StyledH1>
          </header>
          <section>
            <picture>
              <source srcSet="/src/assets/image/GOMI_BOX.webp" type="image/webp" />
              <img
                src="/src/assets/image/GOMI_BOX.png"
                alt="gomi delivery charactor"
                style={{ width: '600px' }}
                className="p-4 rounded mx-auto d-block"
              />
            </picture>
          </section>
        </StyledAtag>
      </div>
    </FullSizeLayout>
  );
}
