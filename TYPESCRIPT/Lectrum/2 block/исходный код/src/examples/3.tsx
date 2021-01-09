import React, { FC, ReactElement, ReactNode, HTMLAttributes } from "react";

export type PropTypes = {
  title?: string;
  children: ReactNode;
  extends: HTMLAttributes<HTMLDivElement>;
};

export const Component3: FC<PropTypes> = ({
  children,
  title,
  ...other
}: PropTypes): ReactElement => (
  <div {...other}>
    {title} : {children}
  </div>
);

const p = <Component3 extends={{ className: "yeah" }}>1</Component3>;
