import { POST_CREATE_POST } from "../redux/types";

const forbidden = ["fuck", "spam", "php"];

export function forbiddenWordsMiddleware({ dispatch }) {
    return function (next) {
        return function (action) {
            if (action.type === POST_CREATE_POST) {
                const found = forbidden.filter((w) =>
                    action.payload.title.includes(w)
                );
                if (found.length) {
                    return dispatch({ type: "SPAM_WORD" });
                }
            }
            next(action);
        };
    };
}

export default forbiddenWordsMiddleware;
