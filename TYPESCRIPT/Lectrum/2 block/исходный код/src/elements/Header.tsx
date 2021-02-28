import React, { FC, useState } from "react";

type HeaderPropTypes = {
  title?: string;
  children?: never;
};

export const Header: FC<HeaderPropTypes> = ({ title }) => {
  const content = typeof title === "string" ? title.toLowerCase() : null;
  const [counter, setCounter] = useState<number>(0);

  const increase = (): void => {
    setCounter((prevCounter) => prevCounter + 1);
  };

  const decrease = (): void => {
    setCounter((prevCounter) => prevCounter - 1);
  };

  return (
    <>
      <h1>{content}</h1>
      <h3>{counter.toFixed()}</h3>
      <button type='button' onClick={increase}>
        Increase
      </button>
      <button type='button' onClick={decrease}>
        Decrease
      </button>
    </>
  );
};

Header.defaultProps = {
  title: "Hello",
};
