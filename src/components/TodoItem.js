import React from "react";

const TodoItem = () => {
  return (
    <ul class="list-group">
      <li class="list-group-item mb-2">
        <div className="d-flex">
          Cras justo odio
          <span className="ml-auto" style={{ cursor: "pointer" }}>
            <i className="fa fa-trash text-danger"></i>
          </span>
        </div>
      </li>
      <li class="list-group-item mb-2">Morbi leo risus</li>
      <li class="list-group-item mb-2">Porta ac consectetur ac</li>
      <li class="list-group-item mb-2">Lorem ipsum dolor sit amet.</li>
    </ul>
  );
};

export default TodoItem;
