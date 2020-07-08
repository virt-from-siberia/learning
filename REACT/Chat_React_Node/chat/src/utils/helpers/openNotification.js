import { notification } from "antd";

export default ({ text, type, title }) =>
    notification[type]({
        message: title,
        description: text,
        duration: 3,
    });
