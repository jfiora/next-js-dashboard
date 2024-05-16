'use client';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import jeroOha from '../public/jero_oha.png';

export const UserInfo = () => {
    const { data: session } = useSession();

    return (
        <div className='d-flex align-center justify-end gap-3 pr-4'>
            <div className='d-flex f-column align-end'>
                <span className='fs-13 fw-bold'>{session?.user?.name}</span>
                <span className='fs-10'>{session?.user?.email}</span>
            </div>
            <Image
                src={jeroOha}
                alt='Profile picture'
                width={42}
                height={42}
                className='rounded-full'
            />
        </div>
    );
};
