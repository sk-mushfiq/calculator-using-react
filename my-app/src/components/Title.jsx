import React from "react";

function Title(props) {
    return (
        <h2 className="text-4xl text-center">Calculator with {props.value}</h2>
    );
}

export default Title;