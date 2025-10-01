import type { Todo } from "../types";
import { useTodoDispatch } from "../hooks/useTodoDispatch";

type Props = Todo & {
    // onClickDelete: (id: number) => void;
}

export default function TodoItem(props:Props) {

    const dispatch = useTodoDispatch();

    const onClickDelete = () => {
        dispatch.onClickDelete(props.id);
    }
    return <div>
        No.{props.id} : {props.content}
        <button onClick={onClickDelete}>delete</button>
    </div>
}