import { HeaderProps } from "./Header.props";
import cn from "classnames";
import styles from "./Header.module.css";

export const Header = ({ ...props }: HeaderProps): JSX.Element => {
  return <div {...props}>Header</div>;
};
