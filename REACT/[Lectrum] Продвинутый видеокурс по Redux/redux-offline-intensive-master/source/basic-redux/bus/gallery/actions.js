import {
    SHOW_NEXT_PHOTO,
    SHOW_SELECTED_PHOTO,
    SHOW_PREVENT_PHOTO,
} from "./types";

export const showNextPhoto = {
    type: "SHOW_NEXT_PHOTO",
};
export const showPreventPhoto = {
    type: "SHOW_PREVENT_PHOTO",
};

export const showSelectedPhoto = (photoIndex) => {
    return {
        type: "SHOW_SELECTED_PHOTO",
        payload: photoIndex,
    };
};
