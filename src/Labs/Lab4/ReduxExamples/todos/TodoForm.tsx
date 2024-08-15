import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, setTodo, updateTodo } from "./todosReducer";
export default function TodoForm() {
  const {todo} = useSelector((state: any) => state.todosReducer);
  const dispatch = useDispatch();
  return (
    <li className="list-group-item">
      <button className="btn btn-success float-end" onClick={() => dispatch(addTodo(todo))}
              id="wd-add-todo-click"> Add </button>
      <button className="btn btn-warning float-end me-2" onClick={() => dispatch(updateTodo(todo))}
              id="wd-update-todo-click"> Update </button>
      <input className="form-control w-25" value={todo.title}
        onChange={ (e) => dispatch(setTodo({ ...todo, title: e.target.value })) }/>
    </li>
  );
}