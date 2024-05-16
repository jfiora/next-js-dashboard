'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export const RegisterForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState(false);

    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!name || !email || !password) {
            setError('Todos los campos son necesarios');
            return;
        }
        if (password !== confirmPassword) {
            setError('Contraseñas no coinciden');
            return;
        }

        try {
            const userRes = await fetch('api/userExists', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email,
                }),
            });

            const { user } = await userRes.json();

            if (user) {
                setError('Usuario ya existe');
                return;
            }

            const res = await fetch('api/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name,
                    email,
                    password,
                }),
            });

            if (res.ok) {
                const form = e.target;
                form.reset();
                router.replace('/dashboard');
            } else {
                console.log('user registration failed');
            }
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div className=''>
            <span className='fw-bold fs-39 mb-5'>Bienvenido!</span>
            <form
                onSubmit={handleSubmit}
                className='d-flex f-column gap-3 w-form mt-5'
            >
                <div className='d-flex f-column gap-1'>
                    <label htmlFor='FullName'>Nombre completo</label>{' '}
                    <input
                        className='br-2 border-gray-50 p-3'
                        type='text'
                        placeholder='Nombre completo'
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
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
                <div className='d-flex f-column gap-1'>
                    <label htmlFor='confirmPassword'>
                        Confirmar contraseña
                    </label>
                    <input
                        className='br-2 border-gray-50 p-3'
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        type='password'
                        placeholder='Confirmar contraseña'
                    />
                </div>
                {error ? <span className='text-red'>{error}</span> : null}
                <div className='d-flex gap-5 align-center justify-start'>
                    <button className='border-none text-white btn-login br-3 bg-purple-100 fs-16 fw-semibold cursor-pointer'>
                        Crear cuenta
                    </button>
                    <Link className='no-underline text-black' href={'/'}>
                        <span className='fw-semibold fs-14'>
                            Ya tengo cuenta
                        </span>
                    </Link>
                </div>
            </form>
        </div>
    );
};
