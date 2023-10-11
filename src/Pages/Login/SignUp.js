import React from 'react';import {
    useCreateUserWithEmailAndPassword,
    useSignInWithGoogle,
    useUpdateProfile 
  } from "react-firebase-hooks/auth";
  import auth from "../../firebase.init";
  import { useForm } from "react-hook-form";
  import Loading from "../Shared/Loading";
  import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
    const [signInWithGoogle, googleUser, googleLoading, googleError] =
    useSignInWithGoogle(auth);
  //Email and Password
  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth);
  //update profile
  const [updateProfile, updating, updateError] = useUpdateProfile(auth);
//Auth State
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

const navigate = useNavigate()

  let signInError;

  if (loading || googleLoading || updating) {
    return <Loading></Loading>
  }
  if (error || googleError || updateError) {
    signInError = (
      <small className="text-red-600">
        {error?.message || googleError.message || updateError.message}
      </small>
    );
  }

  if (googleUser || user) {
    console.log(googleUser || user);
  }

  const onSubmit = async (data) => {
    await createUserWithEmailAndPassword(data.email, data.password);
    await updateProfile({displayName: data.name})
    navigate('/appointment')
  };
    return (
        <div className="flex justify-center items-center h-screen text-black">
      <div className="card w-96 bg-slate-50 shadow-xl">
        <div className="card-body">
          <h2 className="text-center text-2xl font-bold">Sign Up</h2>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text text-black">Enter Your Name</span>
              </label>
              <input
                type="name"
                placeholder="Your Name"
                className="input input-bordered w-full max-w-xs text-white"
                {...register("name", {
                  required: {
                    value: true,
                    message: "Name is required",
                  }
                })}
              />
              <label className="label">
                {errors.name?.type === "required" && (
                  <span className="label-text-alt text-red-700" role="alert">
                    {errors.name.message}
                  </span>
                )}
              </label>
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text text-black">Enter Your Email</span>
              </label>
              <input
                type="email"
                placeholder="Your Email"
                className="input input-bordered w-full max-w-xs text-white"
                {...register("email", {
                  required: {
                    value: true,
                    message: "Email is required",
                  },
                  pattern: {
                    value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                    message: "Provide a valid email",
                  },
                })}
              />
              <label className="label">
                {errors.email?.type === "required" && (
                  <span className="label-text-alt text-red-700" role="alert">
                    {errors.email.message}
                  </span>
                )}
                {errors.email?.type === "pattern" && (
                  <span className="label-text-alt text-red-700" role="alert">
                    {errors.email.message}
                  </span>
                )}
              </label>
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text text-black">
                  Enter Your Password
                </span>
              </label>
              <input
                type="password"
                placeholder="Password"
                className="input input-bordered w-full max-w-xs text-white"
                {...register("password", {
                  required: {
                    value: true,
                    message: "Password is required",
                  },
                  minLength: {
                    value: 8,
                    message: "Password must be 6 character",
                  },
                })}
              />
              <label className="label">
                {errors.password?.type === "required" && (
                  <span className="label-text-alt text-red-700" role="alert">
                    {errors.password.message}
                  </span>
                )}
                {errors.password?.type === "minlength" && (
                  <span className="label-text-alt text-red-700" role="alert">
                    {errors.password.message}
                  </span>
                )}
              </label>
            </div>

            {signInError}
            <input
              className="btn btn-outline btn-info w-full max-w-xs"
              type="submit"
              value="Sign Up"
            />
          </form>

          <p><small>Already have an account? <Link to='/login' className="text-sky-500">Please Login</Link></small></p>

          <div className="divider">OR</div>
          <button
            onClick={() => signInWithGoogle()}
            className="btn btn-outline btn-info"
          >
            Continue With Google
          </button>
        </div>
      </div>
    </div>
    );
};

export default SignUp;