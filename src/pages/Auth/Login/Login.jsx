import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import SocialLogin from "../SocialLogin/SocialLogin";

// import { useAuth } from "../../../hooks/useAuth";
// import { toast } from "react-hot-toast";

const Login = () => {
    const navigate = useNavigate();
    const location = useLocation();
    // const { signInUser } = useAuth();
    const [loginError, setLoginError] = useState('');
    const {
        register,
        handleSubmit,
        watch,
        reset,
        formState: { errors } } = useForm();

    //user navigate
    const from = location.state?.from?.pathname || "/";


    // const onSubmit = (data) => {
    //     console.log(data);
    //     const { email, password } = data;

    //     // user login
    //     signInUser(email, password)
    //         .then(result => {
    //             const user = result.user;
    //             if (user) {
    //                 reset();
    //                 toast.success('Successfully Login');
    //                 navigate(from, { replace: true });
    //             }
    //         }).catch(error => {
    //             const errorCode = error.code;

    //             if (errorCode) {
    //                 switch (errorCode) {
    //                     case 'auth/user-not-found':
    //                         setLoginError('User not founded');
    //                         break;
    //                     case 'auth/invalid-email':
    //                         setLoginError('Invalid email provided, please provide a valid email')
    //                         break;

    //                     case 'auth/wrong-password':
    //                         setLoginError('Wrong password');
    //                         break;

    //                     default:
    //                         setLoginError('Something is wrong');
    //                 }
    //             }
    //         });
    // };

    return (
        <section className="w-full bg-white h-[90vh] flex items-center justify-center">
            <div
                style={{
                    boxShadow: "3px 4px 10px 2px rgba(0, 0, 0, 0.05)"
                }}
                className=" bg-white rounded-[18px] p-8"
            >
                <h1 className="mb-6 text-4xl font-semibold block text-center text-black">
                    Login
                </h1>
                <form
                    className="flex flex-col gap-5"
                >
                    {/* email input  */}
                    <div className="flex flex-col gap-2">
                        <label
                            htmlFor="email"
                            className="block text-sm font-semibold text-black capitalize"
                        >
                            email
                        </label>
                        <input
                            type="email"
                            placeholder="your email"
                            className="block h-12 w-[360px] md:w-[400px] bg-white rounded-lg border border-[#cfcfcf] py-2 px-4 placeholder:capitalize placeholder:text-[15px] placeholder:text-[#A2A2A2] text-darkBlack font-medium text-lg text-dark focus:outline-none"
                            {...register("email", {
                                required: {
                                    value: true,
                                    message: "Your Email is required"
                                },
                                pattern: {
                                    value: /^\S+@\S+\.\S+$/,
                                    message: "Provide a valid Email"
                                }
                            })}
                        />
                        {/* error message  */}
                        {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                        {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                        {loginError && <span className="label-text-alt text-red-500">{loginError}</span>}
                    </div>

                    {/* password  input */}
                    <div className="flex flex-col gap-2">
                        <label
                            htmlFor="password"
                            className="block text-sm font-semibold text-black capitalize"
                        >
                            Passwrod
                        </label>
                        <input
                            type="password"
                            placeholder="your password"
                            className="block h-12 w-[360px] md:w-[400px] bg-white rounded-lg border border-[#cfcfcf] py-2 px-4 placeholder:capitalize placeholder:text-[15px] placeholder:text-[#A2A2A2] text-darkBlack font-medium text-lg text-dark focus:outline-none"
                            {...register("password", {
                                required: {
                                    value: true,
                                    message: "Your Password is required"
                                },
                                minLength: {
                                    value: 6,
                                    message: "Must be 6 character or longer"
                                }
                            })}
                        />
                        {/* error message   */}
                        {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                        {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                        {loginError && <span className="label-text-alt text-red-500">{loginError}</span>}
                        <Link className="block text-right text-dark text-xs font-medium capitalize pr-2 mt-1 hover:underline hover:text-secondary cursor-pointer">
                            forgot password
                        </Link>
                    </div>

                    {/* login button  */}
                    <button
                        type="submit"
                        className="btn bg-dark text-white border-dark text-lg font-semibold capitalize"
                    >
                        login
                    </button>
                </form>

                <h3 className="block text-center text-dark text-sm capitalize mt-3">
                    new to denist portal ? {""}
                    <Link
                        to={"/auth/signup"}
                        className="text-secondary font-medium hover:underline"
                    >
                        create new account
                    </Link>
                </h3>
                {/* SOCIAL LOGIN  */}

                <>
                    <SocialLogin />
                </>
            </div>
        </section>
    );
};

export default Login;
