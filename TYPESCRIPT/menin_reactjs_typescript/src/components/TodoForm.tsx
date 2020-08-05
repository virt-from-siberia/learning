import React, { useState, useRef } from "react";

interface ITodoFormProps {
  onAdd(title: string): void;
}

export const TodoForm: React.FC<ITodoFormProps> = (props) => {
  //   const [title, setTaitle] = useState<string>("");
  const ref = useRef<HTMLInputElement>(null);

  //   const changeHandler = (evt: React.ChangeEvent<HTMLInputElement>) => {
  //     setTaitle(evt.target.value);
  //   };
  const keyPressHandler = (evt: React.KeyboardEvent) => {
    if (evt.key === "Enter") {
      props.onAdd(ref.current!.value);
      ref.current!.value = "";
      //   console.log(title);
      //   setTaitle("");
    }
  };

  return (
    <div className='input-field mt2'>
      <input
        // value={title}
        ref={ref}
        type='text'
        id='title'
        placeholder='Введите название дела'
        // onChange={changeHandler}
        onKeyPress={keyPressHandler}
      />
      <label htmlFor='title'>Введите название дела</label>
    </div>
  );
};
