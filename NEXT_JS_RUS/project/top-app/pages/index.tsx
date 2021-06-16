import { Htag } from "../components/Htag/Htag";
import { Button } from "../components/Button/Button";
import React from "react";

export default function Home(): JSX.Element {
  return (
    <React.Fragment>
      <Htag tag="h3">sadasd</Htag>
      <Button appearance="primary" className="asdsadsad" arrow="right">
        Button
      </Button>
      <Button appearance="ghost" arrow="right">
        Button
      </Button>
    </React.Fragment>
  );
}
