import imageLogo from '../../public/logo_large.png';
import { signOut } from 'next-auth/react';
import Image from 'next/image';
import { SignOutButton } from './SignOutButton';
import { ReserveButton } from './ReserveButton';

export const Sidebar = () => {
    return (
        <section className='bg-sidemenu h-85 sidemenu-width p-6 d-flex f-column justify-between'>
            <div className='d-flex f-column gap-6'>
                <Image src={imageLogo} alt='Logo' width={93} height={45} />
                <ReserveButton />
            </div>
            <div>
                <SignOutButton />
            </div>
        </section>
    );
};
