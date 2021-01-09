import React from "react";

const styles = {
  primary: {
    color: "blue",
  },
  danger: {
    color: "red",
  },
};

type StylesType = typeof styles;

type ButtonType = keyof StylesType;

interface PropTypes {
  type: ButtonType;
}

export function Button({ type }: PropTypes) {
  return (
    <button style={styles[type]} type='button'>
      Click my
    </button>
  );
}

const bJSX = <Button type='primary' />;
