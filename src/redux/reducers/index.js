import { combineReducers } from 'redux';
import signupReducer from './signupReducer'
import signinReducer from './signinReducer'
import userID from './usersReducer'
import assignment from './assignmentReducer'


const allReducers = combineReducers({
    userSignup: signupReducer,
    userSignin: signinReducer,
    userID : userID,
    allAssignment : assignment,
});

export default allReducers;