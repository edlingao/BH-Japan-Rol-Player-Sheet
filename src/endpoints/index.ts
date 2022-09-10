export const baseURL = 'http://localhost:8080';

export const register = `${baseURL}/register`;
export const loginRoute = `${baseURL}/login`;
export const editStatRoute = `${baseURL}/stat-edit`;
export const addItemRoute =  `${baseURL}/add-item`;
export const editItemRoute = `${baseURL}/item-edit`;
export const setOrderRoute = `${baseURL}/item-order`;
export const getPlayerByToken = (token: string) => `${baseURL}/token/${token}`;