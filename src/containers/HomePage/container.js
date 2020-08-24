import { connect } from "react-redux";
import HomePage from "components/HomePage";
import actions from "store/features/HomePage/actions";
import {reset} from "redux-form";

const mapDispatchToProps = dispatch => ({
	addCompany: (data) => {
		dispatch(actions.addCompany(data));
		dispatch(reset("addCompany"));
	},
	addPerson: (data) => {
		dispatch(actions.addPerson(data));
		dispatch(reset("addPerson"));
	}
});

const mapStateToProps = ({HomePage}) => {
	  const companies =  HomePage.get("companies").toJS();
	  return { companies };
  };

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);

