//NOTE/: external library
import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

//NOTE/: internal library
import generateAvatarFromHash from "../../utils/helpers/generateAvatarFromHash";

import "./Avatar.scss";

const Avatar = ({ user }) => {
    if (user.avatar) {
        return <img className='avatar' src={user.avatar} alt={user.fullname} />;
    } else {
        const { color, colorLighten } = generateAvatarFromHash(user._id);
        const firstChar = user.fullname[0].toUpperCase();

        return (
            <div
                className='avatar avatar--symbol'
                style={{
                    background: `linear-gradient(135deg, ${color} 0%, ${colorLighten} 95%)`,
                }}
            >
                {firstChar}
            </div>
        );
    }
};

Avatar.propTypes = {
    className: PropTypes.string,
};

export default Avatar;
