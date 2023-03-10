import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const nevigate=useNavigate()
    const [emailError, setEmailError]=useState('');
    const [passwordError, setPasswordError]=useState('');
    const handleLogin=(event)=>{
        event.preventDefault();
        const email=event.target.email.value;
        const password=event.target.password.value;
        console.log( email, password)

        if(email==="swachhakshar@gmail.com" && password==="123456"){
            nevigate('/home')
        }
        else{
            setEmailError('Please enter right email');
            setPasswordError('Please enter correct password')
            event.target.reset()
        }

    }
    return (
        <div className='h-[800px] flex justify-center items-center'>
            <div>
                <form onSubmit={handleLogin} className='border p-10 shadow-lg'>
                    <div>
                        <p className='my-2'>Email:</p>
                        <input name='email' className='p-3 border border-gray-500 rounded-lg w-72' placeholder='Please Enter Your Email' type="email" />
                        <p className='text-red-500'>{emailError}</p>
                    </div>
                    <div>
                        <p className='my-2'>Password:</p>
                        <input name='password' className='p-3 border border-gray-500 rounded-lg w-72' placeholder='Please Enter Your Password' type="password" />
                        <p className='text-red-500'>{passwordError}</p>
                    </div>
                    <div>
                        <button className='border border-green-500 text-white bg-green-500 px-4 py-2 rounded-lg w-full my-5' type="submit"> Submit</button>
                    </div>

                </form>

            </div>
        </div>
    );
};

export default Login;