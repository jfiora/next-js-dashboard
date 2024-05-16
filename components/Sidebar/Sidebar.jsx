import imageLogo from '../../public/logo_large.png';
import { signOut } from 'next-auth/react';
import Image from 'next/image';
import { SignOutButton } from './SignOutButton';
import { ReserveButton } from './ReserveButton';
import { NavButtons } from './NavButtons';

export const Sidebar = () => {
    return (
        <section className='bg-sidemenu h-90 sidemenu-width p-6 d-flex f-column justify-between'>
            <div className='d-flex f-column gap-8'>
                <Image src={imageLogo} alt='Logo' width={93} height={45} />
                <ReserveButton />
                <NavButtons />
            </div>
            <div>
                <SignOutButton />
            </div>
        </section>
    );
};
