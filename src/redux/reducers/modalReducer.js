import { PERSON_MODAL_CLOSE, PERSON_MODAL_OPEN } from "../types/ModelTypes";

const initialState = {
    modalOpen : false,
    personId: ""
};

function modalReducer (state = initialState, action) {

  switch (action.type) {
    case PERSON_MODAL_OPEN:
      return {
        ...state,
          modalOpen: true,
          personId: action.payload,
      };
    case PERSON_MODAL_CLOSE:
      return {
        ...state,
          modalOpen: false,
          personId: "",
      };
    default:
      return state;
  }
}

export default modalReducer