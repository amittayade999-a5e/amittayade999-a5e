import React from 'react';
import { Link } from 'react-router-dom';

function Login(props) {
    return (
        <div>
            <Link to="/Admin">
                Login to Admin
            </Link>
        </div>
    );
}

export default Login;