import React from "react";
import PropTypes from "prop-types";
import "./HobbyList.css";

HobbyList.propTypes = {
  hobbyList: PropTypes.array,
  activeId: PropTypes.number,
  onHobbyClick: PropTypes.func,
};

HobbyList.defaultProps = {
  hobbyList: [],
  activeId: null,
  onHobbyClick: null,
};

function HobbyList(props) {
  const { hobbyList, activeId, onHobbyClick, onHobbyDelete, onHobbyEdit } =
    props;
  const handleClick = (hobby) => {
    if (onHobbyClick) {
      onHobbyClick(hobby);
    }
  };
  const handleDeleteClick = (hobby) => {
    if (onHobbyDelete) {
      onHobbyDelete(hobby);
    }
  };
  const handleEditClick = (hobby) => {
    if (onHobbyEdit) {
      onHobbyEdit(hobby);
    }
  };
  return (
    <div>
      <h1>Hobby List</h1>
      <ul>
        {hobbyList.map((hobby) => (
          <li
            key={hobby.id}
            onClick={() => handleClick(hobby)}
            className={hobby.id === activeId ? "active" : ""}
          >
            <button onClick={() => handleDeleteClick(hobby)}>
              Delete hobby
            </button>
            <button onClick={() => handleEditClick(hobby)}>Edit hobby</button>
            {hobby.title}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HobbyList;
