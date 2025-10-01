import { useState } from "react";
import { useTodoDispatch } from "../hooks/useTodoDispatch";

export default function Editor() {

    const dispatch = useTodoDispatch();
    
    const [text, setText] = useState("");

    const onChangeInput = (e : React.ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value);
    }
    // setText("");

    const onClickAddButton = () => {
        dispatch.onClickAdd(text);
        setText("");
    };
    return (
    <div>
        <input value={text} onChange={onChangeInput} />
        <button onClick={onClickAddButton}>add</button>
    </div>
    )
}