import { IButtonProps } from "./ButtonTypes";
// import ArrowSVG from "./arrow.svg";
import styles from "./Button.module.css";
import cn from "classnames";

export const Button = (props: IButtonProps): JSX.Element => {
  const {
    children,
    arrow = "none",
    appearance,
    className,
    ...otherProps
  } = props;

  const buttonClassName = cn(styles.button, className, {
    [styles.primary]: appearance === "primary",
    [styles.ghost]: appearance === "ghost",
  });
  const arrowClassName = cn(styles.arrow, {
    [styles.primary]: arrow === "down",
  });

  return (
    <button className={buttonClassName} {...otherProps}>
      {children}
      {arrow !== "none" && <span className={arrowClassName}>{"-->"}</span>}
    </button>
  );
};
