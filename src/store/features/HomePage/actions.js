import types from "./types";

function addCompany(data) {
  return {
    type: types.ADD_COMPANY,
    data
  };
}

function addPerson(data) {
  return {
    type: types.ADD_PERSON,
    data
  };
}


export default {
  addCompany,
  addPerson
};