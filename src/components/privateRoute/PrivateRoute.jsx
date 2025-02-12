import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PrivateRoute = ({ children }) => {
    const isLogged = useSelector((state) => state.loginUser.logged);
    return isLogged || JSON.parse(sessionStorage.getItem('loginU')) ? children : <Navigate to="/" />;
};

export default PrivateRoute;
