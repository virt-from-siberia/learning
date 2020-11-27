import React from "react";
import styled from "styled-components";

import Button from "./components/Button";
import { fadeIn } from "./components/styled";

const MainWrapper = styled.section`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  animation: 2s ${fadeIn} ease-in;
`;

const PadinationWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: ${({ page }) => {
    if (page === "first") return "flex-end";
    else if (page === "middle") return "space-between";
    else return "flex-start";
  }};
`;

const Link = styled.a.attrs((props) => ({
  target: "_blank",
}))`
  color: violet;
  font-size: 1.5rem;
`;

const App = () => {
  return (
    <div>
      <MainWrapper>
        <Button margin='5rem' primary={true}>
          My button
        </Button>
        <Button margin='5rem' primary={false}>
          My button
        </Button>
        <PadinationWrapper>
          <Button>Page 1</Button>
          <Button>Page 2</Button>
        </PadinationWrapper>
        <Link href='#'>link</Link>
        <Link href='#'>Another</Link>
      </MainWrapper>
    </div>
  );
};

export default App;
