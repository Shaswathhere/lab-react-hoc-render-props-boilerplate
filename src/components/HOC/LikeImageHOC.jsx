import React from "react";

const LikeImage = (props) => {
    const { increaseCount, count } = props;
    return (
        <>
            <button onClick={increaseCount}>Like Image {count}</button>
        </>
    );
};

export default LikeImage;
