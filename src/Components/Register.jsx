import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProviders';

const Register = () => {
  
  const { Name ,createUser } = useContext(AuthContext)
  // console.log(Name)
    const handleRegister=(event)=>{
        event.preventDefault();
        const form = event.target
        // console.log(form)
        const name= form.name.value
        const email= form.email.value
        const password= form.password.value
        console.log(name,email,password)
        form.reset()
        createUser(email,password)
        .then(result=>{
          const loggedUser =result.user
          console.log(loggedUser)

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
      <h1 className="text-5xl font-bold">Please Register!</h1>
    
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <form onSubmit={handleRegister} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="name" placeholder="name" name='name' className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" name='email' className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" name='password' className="input input-bordered" required />
          <label className="label">
            <Link to='/login' className="label-text-alt link link-hover">Already have an account?</Link>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Register</button>
        </div>
      </form>
    </div>
  </div>
</div>
        </div>
    );
};

export default Register;