import React from "react";
import { useState } from "react";
import PropTypes from "prop-types";

HobbyForm.propTypes = {};

function HobbyForm(props) {
  const { onSubmit } = props;
  const [value, setValue] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!onSubmit) return;

    const formValues = {
      title: value,
    };
    onSubmit(formValues);
    setValue("");
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Add Hobby"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        ></input>
      </form>
    </div>
  );
}

export default HobbyForm;
