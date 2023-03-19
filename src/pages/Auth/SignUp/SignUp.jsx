import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import SocialLogin from '../SocialLogin/SocialLogin';
// import { AuthContext } from '../../contexts/AuthProvider';
// import useToken from '../../hooks/useToken';

export default function SignUp() {
    const navigate = useNavigate();
    // const { createUser, updateUser } = useContext(AuthContext);
    const [signUpError, setSignUPError] = useState('');
    const [createdUserEmail, setCreatedUserEmail] = useState('');
    // const [token] = useToken(createdUserEmail);
    const { register, handleSubmit, formState: { errors } } = useForm();

    // if (token) {
    //     navigate('/');
    // }

    const handleSignUp = (data) => {
        console.log(data);
        // setSignUPError('');
        // createUser(data.email, data.password)
        //     .then(result => {
        //         const user = result.user;
        //         console.log(user);
        //         toast('User Created Successfully.');
        //         const userInfo = {
        //             displayName: data.name
        //         };
        //         updateUser(userInfo)
        //             .then(() => {
        //                 saveUser(data.name, data.email);
        //             })
        //             .catch(err => console.log(err));
        //     })
        //     .catch(error => {
        //         console.log(error);
        //         setSignUPError(error.message);
        //     });
    };

    const saveUser = (name, email) => {
        const user = { name, email };
        fetch('https://doctors-portal-server-rust.vercel.app/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                setCreatedUserEmail(email);
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
                    onSubmit={onSubmit(handleSignUp)}
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
