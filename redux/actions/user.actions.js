import axios from 'axios';
import jwt_decode from 'jwt-decode';
import setAuthToken from '../../helpers/setAuthToken';
import { userConstants } from '../constants/user_constants';

export const userActions = {
    login,
    logout,
    register,
};

export const login = (userData) => dispatch => {
    axios.post('api/login', userData)
    .then(res => {
        //save To Localstorage
        const { token, user } = res.data;
        // Set Token to LS
        localStorage.setItem('jwtToken', token);
        localStorage.setItem('jwtUser', JSON.stringify(user));
        // Set token to Auth header
        setAuthToken(token);
        // Decode token to get user 
        const decoded = jwt_decode(token);
        // Set current user
        dispatch(setCurrentUser(user));
    })
    .catch(err =>
        dispatch({
            type:  userConstants.LOGIN_FAILURE,
            payload: err.response.data.error
        })
    );
}

export const setCurrentUser = (decoded) =>{
    return {
        type: userConstants.LOGIN_SUCCESS,
        payload: decoded
    }
}


// Log User out
export const logout = () => dispatch => {
    
    axios.get('api/delete-storage');    
    localStorage.removeItem('jwtToken');
    localStorage.removeItem('jwtUser');
    // Remove auth header for future request
    setAuthToken(false);
    // Set current user to {} which eill set isAuthenticated to false
    dispatch(setCurrentUser({}));


}
export const register  = (user) => dispatch => {
    const requestOptions = {
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user)
    };
    axios.post('api/register', requestOptions)
    then(
        user => { 
            dispatch({
                type: userConstants.REGISTER_SUCCESS,
                payload: user.data
            });
            history.push('/login');
        },
        error => {
            dispatch({
                type: userConstants.REGISTER_FAILURE,
                payload: err.response.data.error
            })
        }
    );
}

