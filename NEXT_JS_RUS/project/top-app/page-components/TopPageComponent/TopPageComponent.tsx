import React from "react";
import cn from "classnames";

import { TopPageComponentsProps } from "./TopPageComponent.props";
import { Htag } from "../../components/Htag/Htag";
import { Tag } from "../../components/Tag/Tag";

import styles from './TopPage.module.css'

export const TopPageComponent = ({
  page,
  products,
  firstCategory,
}: TopPageComponentsProps): JSX.Element => {
  return (
    <>
      <div className={styles.}>
        <Htag tag="h1">{page.title}</Htag>
        <Tag color="grey" size="m">
          {products && products.length}
        </Tag>
        <span>Сортировка</span>
      </div>
    </>
  );
};
