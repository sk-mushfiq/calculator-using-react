import React from "react";

function OutputScreen(props) {
    return (
        <div>
            <div className="w-full h-15 flex justify-end items-center " type="text">{props.result}</div>
        </div>
    );
}

export default OutputScreen;