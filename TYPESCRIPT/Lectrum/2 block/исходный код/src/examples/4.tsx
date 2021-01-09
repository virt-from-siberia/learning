import React, {
  FC,
  ReactElement,
  MouseEvent,
  FocusEvent,
  KeyboardEvent,
} from "react";

export type PropTypes = {
  onClick: (e: MouseEvent) => void;
};

export const Component4: FC<PropTypes> = ({
  onClick,
}: PropTypes): ReactElement => {
  const onFocus = (e: FocusEvent) => {
    console.log(e.cancelable);
  };

  return (
    <button
      type='button'
      onClick={onClick}
      onFocus={onFocus}
      onKeyDown={(e: KeyboardEvent<HTMLButtonElement>): void => console.log(e)}
    >
      Click my
    </button>
  );
};
