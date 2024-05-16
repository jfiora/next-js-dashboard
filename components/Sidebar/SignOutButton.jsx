'use client';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { signOut } from 'next-auth/react';

export const SignOutButton = () => {
    return (
        <button
            onClick={() => signOut({ callbackUrl: '/' })}
            className='sidebar-btn-width bg-transparent border-none cursor-pointer d-flex gap-3'
        >
            <FontAwesomeIcon icon={faArrowRightFromBracket} className='fs-16' />{' '}
            <span className='fs-16 fw-semibold'>Cerrar sesión</span>
        </button>
    );
};
