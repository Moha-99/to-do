import React, { Fragment, useState } from "react";

const AddTodo = () => {
  const [mission, setMission] = useState("");
  const onSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <Fragment>
      <form className="form-inline" onSubmit={onSubmit}>
        <div class="input-group mb-4">
          <input
            type="text"
            class="form-control"
            name="mission"
            value={mission}
            onChange={(e) => setMission(e.target.value)}
            placeholder="Add a mission"
            required
          />
          <input type="submit" value="Add todo" className="btn btn-info ml-2" />
        </div>
      </form>
    </Fragment>
  );
};

export default AddTodo;
