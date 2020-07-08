//NOTE/: external library --->
import React, { Fragment, useState } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { UploadField } from "@navjobs/upload";

//NOTE/: emoji marts--->
import { Picker } from "emoji-mart";

//NOTE/: ant library --->
import {
    SmileOutlined,
    CameraOutlined,
    AudioOutlined,
    SendOutlined,
} from "@ant-design/icons";
import { Input } from "antd";

//NOTE/: internal library --->
import "./ChatInput.scss";

const ChatInput = (props) => {
    const [value, setValue] = useState();
    const [emojiPickerVisible, setShowEmojiPicker] = useState();

    const toggleEmojiPicker = () => {
        setShowEmojiPicker(!emojiPickerVisible);
    };

    return (
        <div className='chat-input'>
            <div className='chat-input__smile-btn'>
                {emojiPickerVisible && (
                    <div className='chat_input__emoji-picker'>
                        <Picker set='apple' />
                    </div>
                )}
                <SmileOutlined onClick={toggleEmojiPicker} />
            </div>
            <Input
                onChange={(evt) => setValue(evt.target.value)}
                placeholder='Ввдите сообщение'
                size='large'
            />
            <div className='chat-input__actions'>
                {!value ? <AudioOutlined /> : <SendOutlined />}
                <UploadField
                    onFiles={(files) => console.log(files)}
                    containerProps={{
                        className: "chat-input__actions-upload-btn",
                    }}
                    uploadProps={{
                        // accept: ".pdf,.doc,.docx,.txt,.rtf",
                        accept: ".jpg, .jpeg, .png, .gif, .rar .bmp",
                        multiple: "multiple",
                    }}
                >
                    <CameraOutlined />
                </UploadField>
            </div>
        </div>
    );
};

ChatInput.propTypes = {
    className: PropTypes.string,
};

export default ChatInput;
