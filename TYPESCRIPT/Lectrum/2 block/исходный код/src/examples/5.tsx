import React, { ReactNode } from "react";

interface PropTypes<T> {
  children: (item: T) => ReactNode;
  items: Array<T>;
}

export function Component5<T>({ items, children }: PropTypes<T>) {
  return (
    <div>
      {items.map((item: T) => {
        return <>{children(item)}</>;
      })}
    </div>
  );
}

<Component5 items={[]}>{(item: T) => <p>{item}</p>}</Component5>;
