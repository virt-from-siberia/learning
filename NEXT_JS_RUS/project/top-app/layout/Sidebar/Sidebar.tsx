import cn from "classnames";

import { SidebarProps } from "./Sidebar.props";
import { Menu } from "../Menu/Menu";
import styles from "./Sidebar.module.css";

export const Sidebar = ({ ...props }: SidebarProps): JSX.Element => {
  return (
    <div {...props}>
      SIDEBAR
      <Menu />
    </div>
  );
};
