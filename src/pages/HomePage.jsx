import React from "react";
import { useSelector, useDispatch } from "react-redux";
import HobbyList from "../components/HobbyList/HobbyList";
import HobbyForm from "../components/HobbyForm/HobbyForm";
import {
  addHobby,
  setHobbyActive,
  deleteHobby,
} from "../redux/Todo/HobbyAction";

function HomePage(props) {
  const dispatch = useDispatch();
  const hobbyList = useSelector((state) => state.hobby.list);
  const activeId = useSelector((state) => state.hobby.activeId);
  const handleAddHobbyClick = (formValue) => {
    const newHobby = {
      id: hobbyList.length + 1,
      title: formValue.title,
    };
    dispatch(addHobby(newHobby));
    console.log(newHobby);
  };
  const handleHobbyClick = (hobby) => {
    dispatch(setHobbyActive(hobby));
  };
  const handleHobbyDelete = (hobby) => {
    dispatch(deleteHobby(hobby));
  };
  const handleHobbyEdit = (hobby) => {
    dispatch(editHobby(hobby));
  };
  return (
    <div>
      <h1>Hello Redux - Home Pages</h1>
      <HobbyForm onSubmit={handleAddHobbyClick} />
      <HobbyList
        hobbyList={hobbyList}
        activeId={activeId}
        onHobbyClick={handleHobbyClick}
        onHobbyDelete={handleHobbyDelete}
        onHobbyEdit={handleHobbyEdit}
      />
    </div>
  );
}

export default HomePage;
