import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from "next";
import React from "react";
import axios from "axios";

import { withLayout } from "../../layout/Layout";
import { TopPageComponent } from "../../page-components/TopPageComponent/TopPageComponent";

import { MenuItem } from "../../interfaces/menu.interface";
import { TopPageModel } from "../../interfaces/toppage.interface";
import { ParsedUrlQuery } from "querystring";
import { ProductModel } from "../../interfaces/product.interface";
import { TopLevelCategory } from "../../interfaces/toppage.interface";

import { firstLevelMenu } from "../../helpers/helpers";

interface TopPageProps extends Record<string, unknown> {
  menu: MenuItem[];
  firstCategory: TopLevelCategory;
  page: TopPageModel;
  products: ProductModel[];
}

function TopPage({ firstCategory, page, products }: TopPageProps): JSX.Element {
  return (
    <TopPageComponent
      firstCategory={firstCategory}
      products={products}
      page={page}
    />
  );
}

export default withLayout(TopPage);

export const getStaticPaths: GetStaticPaths = async () => {
  let paths: string[] = [];

  for (const m of firstLevelMenu) {
    const { data: menu } = await axios.post<MenuItem[]>(
      "https://courses-top.ru/api/top-page/find",
      { firstCategory: m.id }
    );
    paths = paths.concat(
      menu.flatMap((s) => s.pages.map((p) => `/${m.route}/${p.alias}`))
    );
  }

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps<TopPageProps> = async ({
  params,
}: GetStaticPropsContext<ParsedUrlQuery>) => {
  if (!params) return { notFound: true };

  const firstCategoryItem = firstLevelMenu.find((m) => m.route === params.type);
  if (!firstCategoryItem) return { notFound: true };

  const { data: menu } = await axios.post<MenuItem[]>(
    "https://courses-top.ru/api/top-page/find",
    { firstCategory: firstCategoryItem.id }
  );
  const { data: page } = await axios.get<TopPageModel>(
    "https://courses-top.ru/api/top-page/byAlias/" + params.alias
  );
  const { data: products } = await axios.post<ProductModel[]>(
    "https://courses-top.ru/api/product/find",
    {
      category: page.category,
      limit: 10,
    }
  );
  if (!menu || menu.length === 0 || !page || !products)
    return { notFound: true };

  return {
    props: {
      menu,
      firstCategory: firstCategoryItem.id,
      page,
      products,
    },
  };
};
