import PropTypes from "prop-types";
import React from "react";

const Bookmark = ({ status, ...rest }) => {
    return (
        <button {...rest}>
            <i className={"bi bi-bookmark" + (status ? "-heart-fill" : "")}></i>
        </button>
    );
};
Bookmark.propTypes = {
    status: PropTypes.bool
};
export default Bookmark;
