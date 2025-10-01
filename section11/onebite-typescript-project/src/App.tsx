import { useRef, useEffect, useReducer } from 'react'
import './App.css'
import Editor from './components/Editor';
import type { Todo } from './types';
import TodoItem from './components/TodoItem';
import { TodoDispatchContext, TodoStateContext } from './hooks/useTodoDispatch';

type Action = {
  type: "CREATE";
  data: Todo
} | {
  type: "DELETE";
  id: number;
}

function redcuer(state: Todo[], action: Action) {
  switch(action.type) {
    case "CREATE":
      return [...state, action.data];
    case "DELETE":
      return state.filter(todo => todo.id !== action.id);
  }
}

// export const TodoStateContext = React.createContext<Todo[] | null>(null);
// export const TodoDispatchContext = React.createContext<{
//   onClickAdd: (text: string) => void;
//   onClickDelete: (id: number) => void;
// } | null>(null);

// export function useTodoDispatch() {
//   const dispatch = useContext(TodoDispatchContext);
//   if(!dispatch) {
//     throw new Error("TodoDispatchContext is not provided");
//   }
//   return dispatch;
// }

function App() {
  // const [todos, setTodos] = useState<Todo[]>([]);
  const [todos, dispatch] = useReducer(redcuer, []);
  
  const idRef = useRef(0);

  const onClickAdd = (text : string) => {
    // setTodos([...todos, {id: idRef.current++, content: text}]);
    dispatch({
      type: "CREATE",
      data: {id: idRef.current++, content: text}
    })
  }

  const onClickDelete = (id: number) => {
    // setTodos(todos.filter(todo => todo.id !== id));
    dispatch({
      type: "DELETE",
      id: id
    })
  }

  useEffect(() => {
    console.log(todos);
  }, [todos])

  return <div className='App'>
    <h1>Todo</h1>
    <TodoStateContext.Provider value={todos}>
      <TodoDispatchContext.Provider value={{onClickAdd, onClickDelete}}>
        <Editor />
        <div>
          {todos.map(todo => (
            <TodoItem key={todo.id} {...todo} />
          ))}
        </div>
      </ TodoDispatchContext.Provider>
    </TodoStateContext.Provider>
  </div>
}

export default App
