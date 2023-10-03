import React from 'react'
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import toast from 'react-hot-toast';

export default function SocialLogin() {
     const { googleSignIn } = useAuth();
     const navigate = useNavigate();
     const location = useLocation();

     //user redirect
     const from = location?.state?.from?.pathname || "/";

     const handleGoogleSignIn = () => {
          googleSignIn()
               .then(async (result) => {
                    const loggedInUser = result.user;
                    const saveUser = { name: loggedInUser.displayName, email: loggedInUser.email };
                    console.log(saveUser)
                    // save user to database
                    await axios.post("/users", saveUser)
                         .then(res => {
                              if (res.data.insertedId) {
                                   toast.success('User Created Successfully.');
                                   navigate(from, { replace: true });
                              }
                         })
                         .catch(err => console.log(err))
               })
     }

     return (
          <>
               <div className="divider text-dark">OR</div>
               <button className='btn btn-outline w-full text-dark border-dark hover:text-white hover:bg-dark'
                    onClick={handleGoogleSignIn}
               >CONTINUE WITH GOOGLE</button>
          </>
     );
}
