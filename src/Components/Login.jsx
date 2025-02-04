import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProviders';



const Login = () => {
    const { signIn } = useContext(AuthContext)
    const handleLogin=(event)=>{
        event.preventDefault()
        const form = event.target;
        const email = form.email.value
        const password = form.password.value
        console.log(email,password)
        signIn(email,password)
        .then(result=>{
            const loggedIn= result.user
            console.log(loggedIn)
        })
        .catch(error=>{
            console.log(error.message)
        })
    }
    return (
        <div>
        <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
        <h1 className="text-5xl font-bold">Please Login!</h1>

        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <form onSubmit={handleLogin} className="card-body">
        <div className="form-control">
        <label className="label">
        <span className="label-text">Email</span>
        </label>
        <input type="email" name="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
        <label className="label">
        <span className="label-text">Password</span>
        </label>
        <input type="password" placeholder="password" name='password' className="input input-bordered" required />
        <label className="label">
        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
        </label>
        </div>
        <div className="form-control mt-6">
        <button className="btn btn-primary">Login</button>
        </div>
        </form>
        {/* <p className='text-danger'>{error}</p> */}
         <p className='mb-4 ml-4'>
         <Link to='/register'>
         <button >New to Auth master? Please Register</button>
         </Link>
         </p>
        </div>
        </div>
        </div>
        </div>
    );
};

export default Login;