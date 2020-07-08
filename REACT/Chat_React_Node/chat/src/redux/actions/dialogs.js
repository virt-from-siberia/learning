//NOTE/: Axios
import { dialogsApi } from "../../utils/api";

//NOTE/: Sync
const actions = {
    setDialogs: (items) => ({
        type: "DIALOGS:SET_ITEMS",
        payload: items,
    }),

    setCurrentDialogId: (id) => ({
        type: "DIALOGS:SET_CURRENT_DIALOG_ID",
        payload: id,
    }),

    //NOTE/: Async
    fetchDialogs: () => (dispatch) => {
        dialogsApi.getAll().then(({ data }) => {
            dispatch(actions.setDialogs(data));
        });
    },
};

export default actions;
