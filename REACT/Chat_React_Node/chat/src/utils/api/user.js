import { axios } from "../../core";

export default {
    login: (postData) => axios.post("/user/login", postData),
    register: (postData) => axios.post("/user/registration", postData),
    verifyHash: (hash) => axios.get("/user/verify?hash=" + hash),
    getMe: (token) =>
        axios.get("/user/me", {
            headers: {
                token: token,
            },
        }),
};
