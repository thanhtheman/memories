import { SIGNIN, SIGNUP } from '../constant/actionType';
import * as api from '../api/index.js';

export const signIn = (formData, navigate) => async (dispatch) => {
     try {
        // log in the user
        navigate('/');
     } catch (error) {
        console.log(error);
     }
}

export const signUp = (formData, navigate) => async (dispatch) => {
    try {
        // log in the user
        navigate('/');
    } catch (error) {
        console.log(error);
    }
}