import React, { memo } from "react";

const habitAddform = memo((props) => {
  const formRef = React.createRef();
  const inputRef = React.createRef();
  const onSubmit = (event) => {
    event.preventDefault();
    console.log("submit");
    const name = inputRef.current.value;
    name && props.onAdd(name);
    formRef.current.reset();
  };
  return (
    <div>
      <form ref={formRef} className="add-form" onSubmit={onSubmit}>
        <input
          ref={inputRef}
          type="text"
          className="add-input"
          placeholder="Habit"
        />
        <button className="add-button">Add</button>
      </form>
    </div>
  );
});

export default habitAddform;
