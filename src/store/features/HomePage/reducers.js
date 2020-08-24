import types from "./types";
import { fromJS } from "immutable";
// FromJS is a tool to help enforce immutability

const { ADD_COMPANY , ADD_PERSON} = types;


const initialState = fromJS({
  companies: []
});

const homePageReducer = (state = initialState, action) => {
  let company;
  switch (action.type) {
    case ADD_COMPANY:
      company = {employees:[], ...action.data};
      return state.update("companies", companiesArr => companiesArr.push(company));

    case ADD_PERSON:
      return state.update("companies", companiesArr => {
        company = companiesArr.find(k => k.name==action.data.employer);
        company.employees.push(action.data);
        return companiesArr;
      });

    default:
      return state;
  }
};

export default homePageReducer;
