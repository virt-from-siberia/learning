//NOTE/: external library --->
import React from "react";
import "./Typing.scss";

const Typing = () => (
    <div className='typing-indicator message__typing' style={{ scale: 0.2 }}>
        <span></span>
        <span></span>
        <span></span>
    </div>
);

export default Typing;
