import { combineReducers } from 'redux';
import signupReducer from './signupReducer'
import signinReducer from './signinReducer'


const allReducers = combineReducers({
    userSignup: signupReducer,
    userSignin: signinReducer,
});

export default allReducers;