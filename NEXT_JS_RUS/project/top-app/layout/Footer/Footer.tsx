import { format } from "date-fns";

import { FooterProps } from "./Footer.props";
import cn from "classnames";
import styles from "./Footer.module.css";

export const Footer = ({ className, ...props }: FooterProps): JSX.Element => {
  return (
    <footer className={cn(className, styles.footer)} {...props}>
      <div>Все права зашишены - {format(new Date(), "yyyy")}</div>
      <a href="#" target="_blank">
        пользовательское соглашение
      </a>
      <a href="#" target="_blank">
        политика конфидециальности
      </a>
    </footer>
  );
};
