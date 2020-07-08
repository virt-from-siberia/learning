//NOTE/: external library --->
import React from "react";
import PropTypes from "prop-types";

//NOTE/: fns library --->
import distanceInWordsToNow from "date-fns/distance_in_words_to_now";
import ruLocale from "date-fns/locale/ru";

const Time = ({ date }) => {
    return distanceInWordsToNow(date, {
        addSuffix: true,
        locale: ruLocale,
        includeSeconds: true,
    });
};

Time.propTypes = {
    date: PropTypes.any,
};

export default Time;
