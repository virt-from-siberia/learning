import { Htag } from "../components/Htag/Htag";
import { Button } from "../components/Button/Button";
import { P } from "../components/P/P";
import { Tag } from "../components/Tag/Tag";
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
      <P size="l">Большой</P>
      <P size="m">Средний</P>
      <P size="s">Маленький</P>
      <Tag size="s">Маленький</Tag>
    </React.Fragment>
  );
}
