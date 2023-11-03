import { useContext } from 'react';
import authContext from '../context/context.js';

const useAuth = () => useContext(authContext);

export default useAuth;
