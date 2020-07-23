import React, { useState } from "react";
import AddTodo from "./AddTodo";
import TodoItem from "./TodoItem";

const Todos = () => {
  const [task, setTask] = useState("");

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4 offset-md-4">
          <div className="card mt-5">
            <div className="card-header bg-info text-white">
              <h3 className="text-center">
                JUST DO IT <i className="fa fa-check"></i>
              </h3>
            </div>
            <div className="card-body">
              <AddTodo />
              <TodoItem />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Todos;
