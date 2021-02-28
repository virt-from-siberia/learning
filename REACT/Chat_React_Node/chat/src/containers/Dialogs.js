//NOTE/: external library --->
import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

//NOTE/: Actions --->
import { dialogsActions } from "../redux/actions";

//NOTE/: internal library --->
import { Dialogs as BaseDialogs } from "../components";

const Dialogs = ({
    fetchDialogs,
    items,
    currentDialogId,
    setCurrentDialogId,
    userId,
}) => {
    const [inputValue, setValue] = useState("");
    const [filtered, setFiltredItems] = useState(Array.from(items));
    // const [filtered, setFiltredItems] = useState([...items]);

    console.log("!!!!!");
    console.log(items);

    const onChangeInput = (value) => {
        setFiltredItems(
            items.filter(
                (dialog) =>
                    dialog.user.fullname
                        .toLowerCase()
                        .indexOf(value.toLowerCase()) >= 0
            )
        );
        setValue(value);
    };

    //BUG:  ===========>
    //NOTE/: Get dialogs from server --->
    useEffect(() => {
        if (!items.length) {
            //NOTE/: fetchDialogs from redux/actions --->
            fetchDialogs();
        } else {
            setFiltredItems(items);
        }
    }, [items]);

    return (
        <BaseDialogs
            userId={userId}
            items={filtered}
            onSearch={onChangeInput}
            inputValue={inputValue}
            onSelectDialog={setCurrentDialogId}
            currentDialogId={currentDialogId}
        />
    );
};

export default connect(({ dialogs }) => dialogs, dialogsActions)(Dialogs);
