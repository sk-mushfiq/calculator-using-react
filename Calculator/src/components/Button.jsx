import React from "react";
import Calculator from "./Calculator";

function Button({label, onclick}) {
    return (
        <button className="border border-black w-3xs p-2 rounded-full text-white bg-[#666666] " onClick={onclick}>{label}</button>
    );
}

export default Button;