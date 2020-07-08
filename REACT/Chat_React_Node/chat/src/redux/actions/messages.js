//NOTE/: Axios
import { messagesApi } from "../../utils/api";

//NOTE/: Sync

const actions = {
    setMessages: (items) => ({
        type: "MESSAGES:SET_ITEMS",
        payload: items,
    }),
    setIsLoadings: (bool) => ({
        type: "MESSAGES:SET_IS_LOADING",
        payload: bool,
    }),

    //NOTE/: Async
    fetchMessages: (dialogId) => (dispatch) => {
        dispatch(actions.setIsLoadings(true));
        //BUG://
        // messagesApi.getAllByDialogId(dialogId).then(({ data }) => {
        messagesApi
            .getAllByDialogId(dialogId)
            .then(({ data }) => {
                dispatch(actions.setMessages(data));
                dispatch(actions.setIsLoadings(false));
            })
            .catch(() => {
                dispatch(actions.setIsLoadings(false));
            });
    },
};

export default actions;
