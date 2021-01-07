import React, { FC } from "react";

import styles from "./styles.module.css";

type TitleProps = {
  children: string;
};

export const Title: FC<TitleProps> = ({ children }: TitleProps) => (
  <>
    <h1 className={styles.title}>{children}</h1>
  </>
);
