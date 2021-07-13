import { PERSON_MODAL_CLOSE, PERSON_MODAL_OPEN } from "../types/ModelTypes";

const initialState = {
  personModal: {
    modalOpen : false,
    personId: ""
  },
};

function modalReducer (state = initialState, action) {

  switch (action.type) {
    case PERSON_MODAL_OPEN:
      console.log("redux",state.personId) 
      return {
        ...state,
        personModal:{
          modalOpen: true,
          personId: action.payload,
        }
      };
    case PERSON_MODAL_CLOSE:
      return {
        ...state,
        personModal:{
          modalOpen: false,
          personId: "",
        }
      };
    default:
      return state;
  }
}

export default modalReducer