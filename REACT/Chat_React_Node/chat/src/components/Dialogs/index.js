//NOTE/: external library --->
import React from "react";
import orderBy from "lodash/orderBy";
// import

//NOTE/: internal library --->
import { DialogItem } from "../";

//NOTE/: fns library --->
import isToday from "date-fns/is_today";

//NOTE/: ant library --->
import { Input, Empty } from "antd";

const Dialogs = ({
    items,
    userId,
    onSearch,
    inputValue,
    onSelectDialog,
    currentDialogId,
}) => {
    //FIXME: CONSOLE LOG ===========>
    console.log(items);
    return (
        <div className='dialogs'>
            <div className='dialogs__search'>
                <Input.Search
                    placeholder='Поиск контактов'
                    // onSearch={onSearch}
                    onChange={(evt) => onSearch(evt.target.value)}
                    value={inputValue}
                />
            </div>

            {items.length ? (
                orderBy(items, ["created_at"], ["desc"]).map((item) => (
                    <DialogItem
                        key={item._id}
                        onSelect={onSelectDialog}
                        isMe={item.user._id === userId}
                        currentDialogId={currentDialogId}
                        {...item}
                    />
                ))
            ) : (
                <Empty
                    image={Empty.PRESENTED_IMAGE_SIMPLE}
                    description='Совпадений не найдено...'
                />
            )}
        </div>
    );
};

export default Dialogs;
