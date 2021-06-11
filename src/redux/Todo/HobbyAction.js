import {
  ADD_HOBBY,
  SET_HOBBY_ACTIVE,
  DELETE_HOBBY,
  EDIT_HOBBY,
} from "./HobbyType";

export const addHobby = (hobby) => {
  return {
    type: ADD_HOBBY,
    payload: hobby,
  };
};
export const deleteHobby = (hobby) => {
  return {
    type: DELETE_HOBBY,
    payload: hobby,
  };
};
export const setHobbyActive = (hobby) => {
  return {
    type: SET_HOBBY_ACTIVE,
    payload: hobby,
  };
};

export function editTodo(hobby) {
  return {
    type: EDIT_HOBBY,
    payload: hobby,
  };
}
