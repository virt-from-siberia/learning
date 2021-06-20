import React, { useState } from "react";

import { Htag } from "../components/Htag/Htag";
import { Button } from "../components/Button/Button";
import { P } from "../components/P/P";
import { Tag } from "../components/Tag/Tag";
import { Raiting } from "../components/Raiting/Raiting";
import { withLayout } from "../layout/Layout";

function Home(): JSX.Element {
  const [rating, setRating] = useState<number>(4);

  return (
    <>
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
      <Tag size="s" color="ghost">
        Ghost
      </Tag>
      <Tag size="m" color="red">
        Red
      </Tag>
      <Tag size="s" color="green">
        Green
      </Tag>
      <Tag size="s" color="primary">
        Primary
      </Tag>
      <Raiting rating={rating} setRating={setRating} isEditable />
    </>
  );
}

export default withLayout(Home);
