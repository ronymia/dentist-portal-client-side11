import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import SocialLogin from '../SocialLogin/SocialLogin';
import { AuthContext } from '../../../contexts/AuthProvider';
import useAuth from '../../../hooks/useAuth';

export default function SignUp() {
    const navigate = useNavigate();
    const location = useLocation();
    const { createUser, updateUser } = useAuth();
    const [signUpError, setSignUPError] = useState('');
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors } } = useForm();

    //user navigation
    const from = location.state?.from?.pathname || "/";
    // if (token) {
    //     navigate('/');
    // }

    const handleSignUp = async (data) => {
        // console.log(data);
        setSignUPError('');
        await createUser(data.email, data.password)
            .then(async result => {
                const user = result.user;
                const userInfo = {
                    displayName: data.name
                };

                // user info update
                await updateUser(userInfo)
                    .then(async () => {
                        const savedUser = { name: data.name, email: data.email };

                        // save user to database
                        await axios.post("/users", savedUser)
                            .then(res => {
                                if (res.data.insertedId) {
                                    toast.success('User Created Successfully.');
                                    navigate(from, { replace: true });
                                    reset();
                                }
                            })
                            .catch(err => console.log(err))
                    })
                    .catch(err => console.log(err));
            })
            .catch(error => {
                console.log(error);
                setSignUPError(error.message);
            });
    };


    return (
        <div className='h-[90vh] flex justify-center items-center'>
            <div
                style={{
                    boxShadow: "3px 4px 10px 2px rgba(0, 0, 0, 0.05)"
                }}
                className='rounded-[18px] p-8'>
                <h2 className='text-4xl text-center text-dark mb-5 font-medium'>Sign Up</h2>
                <form
                    onSubmit={handleSubmit(handleSignUp)}
                    className="flex flex-col gap-5"
                >
                    <div className="flex flex-col gap-2">
                        <label
                            htmlFor="name"
                            className="block text-sm font-semibold text-black capitalize"
                        >
                            name
                        </label>
                        <input
                            type="name"
                            placeholder="your name"
                            className="block h-12 w-[360px] md:w-[400px] bg-white rounded-lg border border-[#cfcfcf] py-2 px-4 placeholder:capitalize placeholder:text-[15px] placeholder:text-[#A2A2A2] text-darkBlack font-medium text-lg text-dark focus:outline-none"
                            {...register("name", {
                                required: {
                                    value: true,
                                    message: "Your name is required"
                                }
                            })}
                        />
                        {/* error message  */}
                        {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                        {/* {loginError && <span className="label-text-alt text-red-500">{loginError}</span>} */}
                    </div>
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
                        {/* {loginError && <span className="label-text-alt text-red-500">{loginError}</span>} */}
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
                            placeholder="new password"
                            className="block h-12 w-[360px] md:w-[400px] bg-white rounded-lg border border-[#cfcfcf] py-2 px-4 placeholder:capitalize placeholder:text-[15px] placeholder:text-[#A2A2A2] text-darkBlack font-medium text-lg text-dark focus:outline-none"
                            {...register("password", {
                                required: {
                                    value: true,
                                    message: "Password is required"
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
                        {/* {loginError && <span className="label-text-alt text-red-500">{loginError}</span>} */}
                    </div>
                    <button type="submit"
                        className="btn bg-dark text-white border-dark text-lg font-semibold capitalize"
                    >
                        sign up
                    </button>
                    {signUpError && <p className='text-red-600'>{signUpError}</p>}
                </form>
                <h6 className="block text-center my-3 text-dark text-sm">
                    Already have an account ? {""}
                    <Link className='text-secondary hover:underline' to="/auth/login">Please Login</Link>
                </h6>
                <SocialLogin />
            </div>
        </div>
    );
}
