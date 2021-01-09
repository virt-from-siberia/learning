import React, { ReactElement, ReactNode } from "react";

export interface PropsInterface {
  title?: string;
  children: ReactNode;
}

export function Component1({ children, title }: PropsInterface): ReactElement {
  return (
    <div>
      {title} : {children}
    </div>
  );
}
