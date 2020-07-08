//NOTE/: external library --->
import React from "react";
import PropTypes from "prop-types";

//NOTE/: internal library --->
import checkedSVG from "../../assets/img/readed.svg";
import noReadedSVG from "../../assets/img/noreaded.svg";

const MessageStatus = ({ isMe, isReaded }) => {
    if (isMe && isReaded) {
        return (
            <img
                className='message__icon-readed'
                src={checkedSVG}
                alt='checked icon'
            />
        );
    }
    if (isMe) {
        return (
            <img
                className='message__icon-readed--no'
                src={noReadedSVG}
                alt='checked icon'
            />
        );
    }
    return null;
};

MessageStatus.propTypes = {
    isMe: PropTypes.bool,
    isReaded: PropTypes.bool,
};

export default MessageStatus;
