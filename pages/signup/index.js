/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import { signup } from "../../client/request";

const Signup = (props) => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const signupHandler = (e) => {
        e.preventDefault();

        const payload = { name, email, password };
        const result = signup(payload);
        // console.log({ result });
        if(result.hasError){
            setErrorMessage(res.errorMessage);
        }else{
            console.log(result )
        }

    }

    return (
        <main className="form-signin">
        <form className="form-si"
        style={{
            margin: '50px 0'
        }}
        onSubmit={signupHandler}
        >
            <h1 
            className="h3 mb-3 fw-normal"
            >
                Please sign up
            </h1>
            {
                errorMessage && (
                    <p style={{ textTransform: 'capitalize', color: 'red'}}>{errorMessage}</p>
                )
            }

            <div className="form-floating">
                <input 
                type="text" 
                className="form-control" 
                id="floatingInput" 
                placeholder="Name"
                value={name}
                onChange={e => setName(e.target.value)}
                />
                <label htmlFor="floatingInput">Name</label>
            </div>

            <div className="form-floating">
                <input 
                type="email" 
                className="form-control" 
                id="floatingInput" 
                placeholder="Email address"
                value={email}
                onChange={e => setEmail(e.target.value)}
                />
                <label htmlFor="floatingInput">Email address</label>
            </div>

            <div className="form-floating">
                <input 
                type="password" 
                className="form-control" 
                id="floatingPassword" 
                placeholder="Password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                />
                <label htmlFor="floatingPassword">Password</label>
            </div>
            <button className="w-100 btn btn-lg btn-primary">Sign in</button>
            <p className="mt-5 mb-3 text-muted">&copy; 2017-2022</p>
        </form>
        </main>
    )
}

export default Signup;