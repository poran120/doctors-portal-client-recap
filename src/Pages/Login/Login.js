import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { useForm } from "react-hook-form";

const Login = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  if (user) {
    console.log(user);
  }

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className="flex justify-center items-center h-screen text-black">
      <div className="card w-96 bg-slate-50 shadow-xl">
        <div className="card-body">
          <h2 className="text-center text-2xl font-bold">Login</h2>

          <form onSubmit={handleSubmit(onSubmit)}>
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
                  <span className="label-text-alt text-red-700" role="alert">{errors.email.message}</span>
                )}
                {errors.email?.type === "pattern" && (
                  <span className="label-text-alt text-red-700" role="alert">{errors.email.message}</span>
                )}
              </label>
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text text-black">Enter Your Password</span>
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
                  <span className="label-text-alt text-red-700" role="alert">{errors.password.message}</span>
                )}
                {errors.password?.type === "minlength" && (
                  <span className="label-text-alt text-red-700" role="alert">{errors.password.message}</span>
                )}
              </label>
            </div>

            {/* <input aria-invalid={errors.firstName ? "true" : "false"} />
            {errors.firstName?.type === "required" && (
              <p role="alert">First name is required</p>
            )}

            <input
              {...register("mail", { required: "Email Address is required" })}
              aria-invalid={errors.mail ? "true" : "false"}
            />
            {errors.mail && <p role="alert">{errors.mail?.message}</p>} */}

            <input className="btn btn-outline btn-info w-full max-w-xs" type="submit" value='Login' />
          </form>

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

export default Login;
