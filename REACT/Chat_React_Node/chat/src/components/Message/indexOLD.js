//NOTE/: external library --->
import React, { useState, useRef, useEffect, componentDidMount } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

//NOTE/: internal library --->
import Typing from "../Typing";
import { Time, MessageStatus } from "../";
import waveSvg from "../../assets/img/wave.svg";
import playSvg from "../../assets/img/play.svg";
import pauseSvg from "../../assets/img/pause.svg";
import "./Message.scss";

const Message = ({
    avatar,
    text,
    user,
    date,
    audio,
    isMe,
    isReaded,
    attachments,
    isTyping,
}) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const audioElem = useRef(null);

    useEffect(() => {
        audioElem.current.addEventListener(
            "playing",
            () => {
                setIsPlaying(true);
            },
            false
        );
        audioElem.current.addEventListener(
            "ended",
            () => {
                setIsPlaying(false);
            },
            false
        );
    }, []);

    const togglePlay = () => {
        if (!isPlaying) {
            audioElem.current.play();
        } else {
            audioElem.current.pause();
        }
    };

    //NOTE/: attachments --->
    const attachItems =
        attachments &&
        attachments.map((item) => (
            <div className='message__attachments-item'>
                <img src={item.url} alt={item.filename} />
            </div>
        ));

    const MessageBlock = () => {
        //NOTE/: if audio --->
        if (audio) {
            return (
                <div className='message__bubble'>
                    <div className='message__audio'>
                        <audio ref={audioElem} src={audio} preload='auto' />
                        <div
                            className='message__audio-progress'
                            style={{ width: "40%", height: "100%" }}
                        ></div>
                        <div className='message__audio-info'>
                            <div className='message__audio-btn'>
                                <button onClick={() => togglePlay()}>
                                    {!isPlaying ? (
                                        <img src={pauseSvg} alt='pause' />
                                    ) : (
                                        <img src={playSvg} alt='play' />
                                    )}
                                </button>
                            </div>
                            <div className='message__audio-wave'>
                                <img src={waveSvg} alt='audio' />
                            </div>
                            <span className='message__audio-duration'>
                                00 : 19
                            </span>
                        </div>
                    </div>
                </div>
            );
        }

        //NOTE/: if text --->
        if (text) {
            return (
                <div className='message__bubble'>
                    <p className='message__text'>{text}</p>
                </div>
            );
        }
        //NOTE/: if typing --->
        if (isTyping) {
            return <Typing />;
        } else {
            return null;
        }
    };

    //NOTE/:  data --->
    const DataBlock = () => {
        if (date) {
            return (
                <span className='message__date'>
                    <Time date={date} />
                </span>
            );
        } else {
            return null;
        }
    };

    return (
        <div
            className={classNames("message", {
                "message--isme": isMe,
                "message--is-typing": isTyping,
                "message--is-audio": audio,
                "message--image": attachments && attachments.length === 1,
            })}
        >
            <div className='message__content'>
                {/* //NOTE/: if the message has or not been ridden ---> */}
                <MessageStatus isMe={isMe} isReaded={isReaded} />

                {/* //NOTE/: avatar */}
                <div className='message__avatar'>
                    <img src={avatar} alt={`Avatar ${user.fullName}`} />
                </div>

                <div className='message__info'>
                    {/* //NOTE/: message block */}
                    <MessageBlock />

                    {/* //NOTE/: attachments}
                    <div className='message__attachments'>{attachItems}</div>

                    {/* //NOTE/:  data block */}
                    <DataBlock />
                </div>
            </div>
        </div>
    );
};
Message.defaultProps = {
    user: {},
};

Message.propTypes = {
    avatar: PropTypes.string,
    text: PropTypes.string,
    user: PropTypes.object,
    date: PropTypes.any,
    attachments: PropTypes.array,
    isTyping: PropTypes.bool,
    isMe: PropTypes.bool,
    isReaded: PropTypes.bool,
};

// const Message1 = ({
//     avatar,
//     text,
//     user,
//     date,
//     isMe,
//     isReaded,
//     attachments,
//     isTyping,
// }) => {
//     //NOTE/: attachments --->

//     const attachItems =
//         attachments &&
//         attachments.map((item) => (
//             <div className='message__attachments-item'>
//                 <img src={item.url} alt={item.filename} />
//             </div>
//         ));

//     //NOTE/: if typing --->

//     const MessageBlock = () => {
//         if (text) {
//             return (
//                 <div className='message__bubble'>
//                     <p className='message__text'>{text}</p>
//                 </div>
//             );
//         }
//         if (isTyping) {
//             return <Typing />;
//         } else {
//             return null;
//         }
//     };

//     //NOTE/: if data --->

//     const DataBlock = () => {
//         if (date) {
//             return (
//                 <span className='message__date'>
//                     <Time date={date} />
//                 </span>
//             );
//         } else {
//             return null;
//         }
//     };

//     return (
//         <div
//             className={classNames("message", {
//                 "message--isme": isMe,
//                 "message--is-typing": isTyping,
//                 "message--image": attachments && attachments.length === 1,
//             })}
//         >
//             <div className='message__content'>
//                 {/* //NOTE/: if the message has or not been ridden ---> */}

//                 <MessageStatus isMe={isMe} isReaded={isReaded} />

//                 <div className='message__avatar'>
//                     <img src={avatar} alt={`Avatar ${user.fullName}`} />
//                 </div>
//                 <div className='message__info'>
//                     {/* //NOTE/: if typing--> */}

//                     <MessageBlock />

//                     <div className='message__attachments'>{attachItems}</div>
//                     {/* //NOTE/: if data ---> */}

//                     <DataBlock />
//                 </div>
//             </div>
//         </div>
//     );
// };
// Message1.defaultProps = {
//     user: {},
// };

// Message.propTypes = {
//     avatar: PropTypes.string,
//     text: PropTypes.string,
//     user: PropTypes.object,
//     date: PropTypes.any,
//     attachments: PropTypes.array,
//     isTyping: PropTypes.bool,
//     isMe: PropTypes.bool,
//     isReaded: PropTypes.bool,
//     audio: PropTypes.string,
// };

export default Message;
