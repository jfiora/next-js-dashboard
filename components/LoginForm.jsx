'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { signIn } from 'next-auth/react';

export const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);


    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await signIn('credentials', {
                email,
                password,
                redirect: false,
            });

            if (res.error) {
                setError(true);
                return;
            }
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div className=''>
            <span className='fw-bold fs-39 mb-5'>Hola!</span>
            <form
                onSubmit={handleSubmit}
                className='d-flex f-column gap-3 w-form mt-5'
            >
                <div className='d-flex f-column gap-1'>
                    <label htmlFor='email'>Email</label>
                    <input
                        className='br-2 border-gray-50 p-3'
                        onChange={(e) => setEmail(e.target.value)}
                        type='text'
                        placeholder='Email'
                    />
                </div>
                <div className='d-flex f-column gap-1'>
                    <label htmlFor='password'>Contraseña</label>
                    <input
                        className='br-2 border-gray-50 p-3'
                        onChange={(e) => setPassword(e.target.value)}
                        type='password'
                        placeholder='Contraseña'
                    />
                </div>
                {error ? (
                    <span className='text-red'>
                        ¡Ups! Parece que los datos que ingresaste son
                        incorrectos.
                    </span>
                ) : null}
                <div className='d-flex gap-5 align-center justify-start'>
                    <button className='border-none text-white btn-login br-3 bg-purple-100 fs-16 fw-semibold cursor-pointer'>
                        Ingresar
                    </button>
                    <Link
                        className='no-underline text-black'
                        href={'/register'}
                    >
                        <span className='fw-semibold fs-14'>
                            No tengo cuenta
                        </span>
                    </Link>
                </div>
            </form>
        </div>
    );
};
