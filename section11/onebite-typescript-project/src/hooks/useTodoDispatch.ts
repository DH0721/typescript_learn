import React, { useContext } from "react";
import type { Todo } from '../types';

export const TodoStateContext = React.createContext<Todo[] | null>(null);
export const TodoDispatchContext = React.createContext<{
  onClickAdd: (text: string) => void;
  onClickDelete: (id: number) => void;
} | null>(null);

export function useTodoDispatch() {
  const dispatch = useContext(TodoDispatchContext);
  if(!dispatch) {
    throw new Error("TodoDispatchContext is not provided");
  }
  return dispatch;
}

