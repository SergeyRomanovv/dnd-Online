import axios from 'axios';

export const setUser = (data) => {
  return { type: 'SET_USER', payload: data };
};

export const clearRegisterInputs = (data) => {
  return { type: 'CLEAR_INPUTS', payload: {} };
};

export const submitRegister = (dataInputs) => async(dispatch) =>{
  const response = await axios.post('http://localhost:3001/auth/registration', dataInputs, {withCredentials: true});
  const user = response.data.user.userName;
  localStorage.setItem('token', response.data.accessToken);
  dispatch(setUser(user));
  dispatch(clearRegisterInputs());
};
