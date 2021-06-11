import {
  ADD_HOBBY,
  SET_HOBBY_ACTIVE,
  DELETE_HOBBY,
  EDIT_HOBBY,
} from "./HobbyType";

const initialState = {
  list: [],
  activeId: null,
};

const hobbyReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_HOBBY: {
      const newList = [...state.list];
      newList.push(action.payload);
      return {
        ...state,
        list: newList,
      };
    }
    case SET_HOBBY_ACTIVE: {
      const newActiveId = action.payload.id;
      return {
        ...state,
        activeId: newActiveId,
      };
    }
    case DELETE_HOBBY: {
      const newList = [...state.list];
      return {
        ...state,
        list: newList.filter((item) => item.id !== action.payload.id),
      };
    }
    case EDIT_HOBBY:
      console.log(state);
      {
        return state;
      }
    default:
      return state;
  }
};

export default hobbyReducer;
