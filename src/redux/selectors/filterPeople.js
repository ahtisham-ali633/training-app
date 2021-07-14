import { isEmpty } from "../../utils/flags";

export const getPeople = (state) => {
  return state.peopleReducer.people.find((person) => {
    console.log("SSSSSSSSSSss", state.modalReducer.personId)
    return state.modalReducer.personId == person.login.uuid;
  });
};

export const getPeopleFilteredByKeyword = (state) => {
  return state.peopleReducer.people.filter((person) => {
    const searchTerm = state.peopleReducer.searchPeopleTerm.toLowerCase();
    const fname = person.name.first.toLowerCase();
    const lname = person.name.last.toLowerCase();
    return fname.includes(searchTerm) || lname.includes(searchTerm);
  });
};

export const selectPeople = (state) => {
  let people;
  if (isEmpty(state.peopleReducer.searchPeopleTerm)) {
    people = state.peopleReducer.people.slice(
      0,
      state.peopleReducer.people.length - 50
    );
  } else {
    people = getPeopleFilteredByKeyword(state);
  }
  return people;
};
