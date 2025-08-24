'use client';

import React, { useEffect } from 'react'
import Cookies from "js-cookie";
import api from '@/library/axios';
import { useForm } from 'react-hook-form';

export default function Login() {
    const { register, handleSubmit, formState: { errors }, } = useForm();

    const Login = async (user) => {
        Cookies.remove("token");
        Cookies.remove("username");
        api.post(`/api/v1/auth/authenticate`, user).then(({ data }) => {
            Cookies.set("token", data.result.token, { expires: 365 });
            Cookies.set("username", user.username, { expires: 365 });
            window.location.reload();
        }).catch(error => {
            console.log(error);
            throw error
        })
    }

    return (
        <div id='login'>
            <div className="container" id="container">
                <div className="form-container sign-in-container">
                    <form onSubmit={handleSubmit(Login)}>
                        <h1>Login</h1>
                        <input type="username" placeholder="Username" {...register('username', { required: true })} />
                        <input type="password" placeholder="Parol" {...register('password', { required: true })} />
                        <button>Kirish</button>
                    </form>
                </div>
            </div>
        </div>
    )
}


