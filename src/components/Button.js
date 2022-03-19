import React from "react";

const detailButton = ({label, onAction}) => {
    return (
        <button type="button"
                onClick={onAction}
                className="btn btn-success">
            {label}
        </button>
    )
}

export default detailButton;
