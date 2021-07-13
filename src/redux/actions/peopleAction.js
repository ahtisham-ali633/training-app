import { FETCH_PEOPLE, FETCHING_PEOPLE, RESET_FETCH_PEOPLE } from "../types/PeopleTypes";
import axios from "axios";

export const fetchPeople = (pageNumber, limit = 50) => async (dispatch) => {
  dispatch({
    type: FETCHING_PEOPLE,
  });

  try {
    const response = await axios.get( "https://randomuser.me/api/?page=" +
    pageNumber +
    "&results=" +
    limit);

    console.log("data for app ", response.data.results)

    return dispatch({
      type: FETCH_PEOPLE, 
      payload: response.data.results,
    });

  } catch (error) {
    console.log(error);
  }
}

export const resetFetchPeople = () => (dispatch) => {
  return dispatch({
    type: RESET_FETCH_PEOPLE,
  });
};

