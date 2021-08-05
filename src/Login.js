import React from 'react';
import './Login.css';
import { Link } from 'react-router-dom';

function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e => {
        e.preventDefault();

        //fancy firebase login shiiizzzz
    }

    const register = e => {
        e.preventDefault();

        //fancy firebase register  shiiizzzz
    }

    return (
        <div className="login">
            <Link to="/">
                <img src="" alt="" />
            </Link>

            <div className="login_container">
                <h1>Sign-in</h1>

                <form>
                    <h5>E-mail</h5>
                    <input type="text" value={email} onChange={e => setEmail(e.target.value)} />

                    <h5>Password</h5>
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)} />

                    <button type="submit" onClick={signIn} className="login_signInButton">Sign In</button>
                </form>

                <p>
                    By signing-in, you agree to the AMAZON CLONE Conditions of Use & Sale. Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
                </p>

                <button onClick={register} className="login_registerButton">Create your Fake Amazon Clone Account</button>
            </div>
        </div>
    );
}

export default Login;