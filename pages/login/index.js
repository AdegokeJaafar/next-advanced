/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unknown-property */
const Login = props => {
    return (
        <main>
        <form>
            <img className="mb-4" src="https://getbootstrap.com/docs/5.0/assets/brand/bootstrap-logo.svg" alt="" width />
            <h1 class="h3 mb-3 fw-normal">Please sign in</h1>

            <div className="form-floating">
                <input type="email" className="form-control" id="floatingInput" placeholder="name" />
                <label for="floatingInput">Email address</label>
            </div>
            <div className="form-floating">
                <input type="password" className="form-control" id="floatingPassword" placeholder="name" />
                <label for="floatingInput">Password</label>
            </div>
            <button className="w-100 btn btn-lg btn-primary">Sign in</button>
            <p className="mt-5 mb-3 text-muted">&copy; 2017-2021</p>
        </form>
        </main>
    )
}

export default Login;