//NOTE/: external library --->
import React, { useEffect, useRef } from "react";
import { connect } from "react-redux";

//NOTE/: Actions --->
import { messagesActions } from "../redux/actions";

//NOTE/: internal library --->
import { Messages as BaseMessages } from "../components";

const Dialogs = ({ currentDialogId, fetchMessages, items, isLoading }) => {
    // NOTE/: Scroll to bottom --->
    const messagesRef = useRef(null);

    // NOTE/: Get dialogs from server --->

    useEffect(() => {
        if (currentDialogId) {
            fetchMessages(currentDialogId);
        }
    }, [currentDialogId]);

    useEffect(() => {
        messagesRef.current.scrollTo(0, 999999);
    }, [items]);

    return (
        <BaseMessages
            blockRef={messagesRef}
            items={items}
            isLoading={isLoading}
        />
    );
};

export default connect(
    ({ dialogs, messages }) => ({
        currentDialogId: dialogs.currentDialogId,
        items: messages.items,
        isLoading: messages.isLoading,
    }),
    messagesActions
)(Dialogs);
