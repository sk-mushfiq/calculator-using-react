import React from "react";
import { useState } from "react";
import Title from "./Title.jsx";
import InputScreen from "./InputScreen.jsx";
import OutputScreen from "./OutputScreen.jsx";
import Button from "./Button.jsx";


function Calculator() {
    const [input, setInput] = useState("");
    const [output, setOutput] = useState("");

    const handleChange = (event) => {
        setInput(event.target.value);
    }

    const handleClick = (value) => {
        switch (value) {

            case "=":
                try {
                    const result = eval(input);
                    setOutput(result);
                }
                catch (error) {
                    setOutput('Math Error');
                }
                break;

            case "AC":
                setInput("");
                setOutput("");
                break;

            case "Del":
                setInput(input.slice(0, -1));
                setOutput("")
                break;

            case "%":
                let num = 0;
                let operatorIndex = null;
                if ('+' || '-' || '*' || '/' in input) {
                    operatorIndex = input.lastIndexOf('+' || '-' || '*' || '/');
                    num = input.slice(operatorIndex + 1);
                    num = eval(num / 100);
                    setInput(input.slice(0, operatorIndex + 1) + num);
                }
                break

            case "-()":
                setInput("(-(" + input + "))");
                break

            default:
                setInput(input + value);
                break;
        }
    }

    return (
        <>
            <div className="flex items-center content-center ">
                <div className="p-5 pt-8 bg-[#2b2b2b] text-[#f0f8ff] font-saira rounded-2xl ">
                    <div className="w-md flex flex-col gap-5 text-2xl ">
                            <div className="title ">
                                <Title value="React and Tailwind CSS" />
                            </div>

                            <div className="display bg-neutral-700 border-[]-3 rounded-2xl text-3xl pl-2 pr-2 mt-5 mb-5 ">
                                <InputScreen onchange={handleChange} entry={input} />
                                <OutputScreen result={output} />
                            </div>

                            <div className="dialpad flex flex-col gap-1 ">
                                <div className="buttonRow flex justify-evenly gap-2 ">
                                    <Button label="AC" onclick={() => handleClick("AC")} />
                                    <Button label="Del" onclick={() => handleClick("Del")} />
                                    <Button label="%" onclick={() => handleClick("%")} />
                                    <Button label="/" onclick={() => handleClick("/")} />
                                </div>
                                <div className="buttonRow flex gap-2 justify-evenly ">
                                    <Button label="7" onclick={() => handleClick("7")} />
                                    <Button label="8" onclick={() => handleClick("8")} />
                                    <Button label="9" onclick={() => handleClick("9")} />
                                    <Button label="*" onclick={() => handleClick("*")} />
                                </div>
                                <div className="buttonRow flex gap-2 justify-evenly ">
                                    <Button label="4" onclick={() => handleClick("4")} />
                                    <Button label="5" onclick={() => handleClick("5")} />
                                    <Button label="6" onclick={() => handleClick("6")} />
                                    <Button label="-" onclick={() => handleClick("-")} />
                                </div>
                                <div className="buttonRow flex gap-2 justify-evenly ">
                                    <Button label="1" onclick={() => handleClick("1")} />
                                    <Button label="2" onclick={() => handleClick("2")} />
                                    <Button label="3" onclick={() => handleClick("3")} />
                                    <Button label="+" onclick={() => handleClick("+")} />
                                </div>
                                <div className="buttonRow flex gap-2 justify-evenly ">
                                    <Button label="0" onclick={() => handleClick("0")} />
                                    <Button label="." onclick={() => handleClick(".")} />
                                    <Button label="-()" onclick={() => handleClick("-()")} />
                                    <Button label="=" onclick={() => handleClick("=")} />
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Calculator;