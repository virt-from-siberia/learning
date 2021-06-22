import { GetStaticProps } from "next";
import React from "react";
import axios from "axios";

import { withLayout } from "../layout/Layout";
import { MenuItem } from "../interfaces/menu.interface";

interface HomeProps extends Record<string, unknown> {
  menu: MenuItem[];
  firstCategory: number;
}

function Search(): JSX.Element {
  return <>SEARCH</>;
}

export default withLayout(Search);

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const firstCategory = 0;

  const { data: menu } = await axios.post<MenuItem[]>(
    // process.env.NEXT_PUBLIC_DOMAIN + "/api/top-page/find",
    "https://courses-top.ru/api/top-page/find",
    {
      firstCategory,
    }
  );

  return {
    props: {
      menu,
      firstCategory,
    },
  };
};
