import React from "react";

const Total = ({parts}) => {
    const total =  parts.reduce(
        (prevValue, currentValue) => prevValue + currentValue.exercises,
        0
    );
    return (
        <div>
            <b> Total of {total} exercises.</b>
        </div>
    )
}

export default Total