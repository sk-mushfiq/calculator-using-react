import React from "react";

function InputScreen(props) {
    return (
        <input className="w-full h-15 align-middle flex items-center focus:outline-hidden " type="text" value={props.entry} onChange={props.onchange} />
    );
}

export default InputScreen;