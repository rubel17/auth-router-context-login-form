import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/UserContext';

const Register = () => {
    const { createUser, signInWithGoogle } = useContext(AuthContext);

    const handleSubmit = event =>{
        event.preventDefault(); 
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;


        createUser(email, password)
        .then((result ) => {
            const user = result.user;
          })
          .catch((error) => {
            console.error(error);
          });


        console.log(name, email, password);
    }
    const handleGoogleSignIn = () =>{
        signInWithGoogle()
        .then(result =>{
            const user = result.user;
            console.log(user);
        })
        .catch(error =>{
            console.error(error);
        })
    }

    return (

    <div>
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                <h1 className="text-5xl font-bold">Register now!</h1>
                <p className="py-6">Do you no Google? You know Google,Use Google Account.</p>
                <button onClick={handleGoogleSignIn } className="btn btn-active btn-secondary">Google SignIn</button>
                </div>
                 <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <form onSubmit={handleSubmit} className="card-body">
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>

                    <input type="name" name='name' placeholder="Your name" className="input input-bordered" required />

                    </div>
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>

                    <input type="email" name='email' placeholder="New email" className="input input-bordered" required />

                    </div>
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>

                    <input type="password" name='password' placeholder="New Password" className="input input-bordered" required />

                    <label className="label">
                        <Link to='/login' className="label-text-alt link link-hover">Already have an account?</Link>
                    </label>
                    </div>
                    <div className="form-control mt-6">
                    <button className="btn btn-primary">Register Now</button>
                    </div>
                </form>
                
            </div>
            </div>
            </div>
        </div>
    );
};

export default Register;