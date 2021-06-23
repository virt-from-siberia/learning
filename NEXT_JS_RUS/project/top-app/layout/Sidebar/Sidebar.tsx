import cn from "classnames";

import { SidebarProps } from "./Sidebar.props";
import { Menu } from "../Menu/Menu";
import { IoLogoBitcoin } from "react-icons/io";

import styles from "./Sidebar.module.css";

export const Sidebar = ({ className, ...props }: SidebarProps): JSX.Element => {
  return (
    <div className={cn(className, styles.sidebar)} {...props}>
      <IoLogoBitcoin className={styles.logo} />
      <div>Поиск</div>
      <Menu />
    </div>
  );
};
