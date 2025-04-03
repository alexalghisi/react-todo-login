import React from 'react';
import { auth, provider, signInWithPopup } from '../firebase';

function Login({ setUser }) {
    const handleLogin = async () => {
        const result = await signInWithPopup(auth, provider);
        setUser(result.user);
    };

    return (
        <div>
            <h2>Login</h2>
            <button onClick={handleLogin}>Sign in with Google</button>
        </div>
    );
}

export default Login;
