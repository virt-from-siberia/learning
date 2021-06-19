import { useState, Fragment, useEffect, KeyboardEvent } from "react";

import { RaitingProps } from "./Raiting.props";
import cn from "classnames";
import styles from "./Raiting.module.css";

import StarIconSVG from "./star.svg";

export const Raiting = ({
  children,
  isEditable = false,
  rating,
  setRating,
  ...props
}: RaitingProps): JSX.Element => {
  const [ratingArray, setRatingArray] = useState<JSX.Element[]>(
    new Array(5).fill(<Fragment></Fragment>)
  );

  useEffect(() => {
    constructRating(rating);
  }, [rating]);

  const constructRating = (currentRating: number) => {
    const updatedArray = ratingArray.map((r: JSX.Element, i: number) => {
      return (
        <span
          className={cn(styles.star, {
            [styles.filled]: i < currentRating,
            [styles.editable]: isEditable,
          })}
          onMouseEnter={() => changeDisplay(i + 1)}
          onMouseLeave={() => changeDisplay(rating)}
          onClick={() => handlerClick(i + 1)}
        >
          <StarIconSVG
            tabIndex={isEditable ? 0 : -1}
            onKeyDown={(e: KeyboardEvent<SVGElement>) =>
              isEditable && handleSpace(i + 1, e)
            }
          />
        </span>
      );
    });
    setRatingArray(updatedArray);
  };

  const changeDisplay = (i: number) => {
    if (!isEditable) return;
    constructRating(i);
  };

  const handlerClick = (i: number) => {
    if (!isEditable || !setRating) return;
    setRating(i);
  };

  const handleSpace = (i: number, e: KeyboardEvent<SVGElement>) => {
    if ((e.code !== "Space" && e.code !== "Enter") || !setRating) return;
    setRating(i);
  };

  return (
    <div {...props}>
      {ratingArray.map((r, i) => (
        <Fragment key={i}>{r}</Fragment>
      ))}
    </div>
  );
};
