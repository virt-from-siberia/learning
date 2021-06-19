import { Fragment } from "react";
import cn from "classnames";

import { Footer } from "./Footer/Footer";
import { Sidebar } from "./Sidebar/Sidebar";
import { Header } from "./Header/Header";
import { LayoutProps } from "./Layout.props";

import styles from "./P.module.css";

export const Layout = ({ children }: LayoutProps): JSX.Element => {
  return (
    <Fragment>
      <Header />
      <div>
        <Sidebar />
        <div>{children}</div>
      </div>
      <Footer />
    </Fragment>
  );
};
