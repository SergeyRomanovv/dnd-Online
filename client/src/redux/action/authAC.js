import axios from 'axios';

export const setUser = (data) => {
  return { type: 'SET_USER', payload: data };
};

export const clearRegisterInputs = (data) => {
  return { type: 'CLEAR_INPUTS', payload: {} };
};

export const submitSignin = (dataInputs, type) => async(dispatch) =>{
  const response = await axios.post(`http://localhost:3001/auth/${type}`, dataInputs, {withCredentials: true});
  const user = response.data.user.userName;
  localStorage.setItem('token', response.data.accessToken);
  dispatch(setUser(user));
  dispatch(clearRegisterInputs());
};

export const submitLogout = () => async(dispatch) =>{
  const response = await axios.get(`http://localhost:3001/auth/logout`, {withCredentials: true});
  localStorage.removeItem('token');
  dispatch(setUser(''));
  dispatch(clearRegisterInputs());
};

export const checkAuth = () => async (dispatch) => {
  try {
    const response = await axios.get(`http://localhost:3001/auth/refresh`, {withCredentials: true});
    // localStorage.setItem('userName', response.data.accessToken);
    localStorage.setItem('token', response.data.accessToken);
    dispatch(setUser(response.data.user.userName));
  } catch (err) {
    console.log(err);
  } 
};
