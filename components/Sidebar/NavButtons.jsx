'use client';
import { usePathname, useRouter } from 'next/navigation';
import Link from 'next/link';
import iconCalendarActive from '../../public/icon-calendario-active.png';
import iconCalendarInactive from '../../public/icon-calendario-enable.png';
import iconContactsActive from '../../public/icon-contactos-active.png';
import iconContactsInactive from '../../public/icon-contactos-enable.png';
import iconTableroActive from '../../public/icon-tablero-active.png';
import iconTableroInactive from '../../public/icon-tablero-enable.png';
import Image from 'next/image';

export const NavButtons = () => {
    const IsActive = (route) => {
        const pathname = usePathname();
        return pathname === route ? 'active' : '';
    };

    return (
        <div className='d-flex f-column gap-3 sidebar-btn-width'>
            {IsActive('/dashboard') ? (
                <Link
                    href={'/dashboard'}
                    className='no-underline p-4 d-flex align-center gap-3 bg-black br-2'
                >
                    <Image
                        src={iconTableroActive}
                        alt='icon-tablero'
                        width={20}
                        height={20}
                    />
                    <span className='fs-16 text-white'>Tablero</span>
                </Link>
            ) : (
                <Link
                    href={'/dashboard'}
                    className='no-underline p-4 d-flex align-center gap-3'
                >
                    <Image
                        src={iconTableroInactive}
                        alt='icon-tablero'
                        width={20}
                        height={20}
                    />
                    <span className='fs-16 text-black'>Tablero</span>
                </Link>
            )}
            {IsActive('/calendar') ? (
                <Link
                    href={'/calendar'}
                    className='no-underline p-4 d-flex align-center gap-3 bg-black br-2'
                >
                    <Image
                        src={iconCalendarActive}
                        alt='icon-calendar'
                        width={20}
                        height={20}
                    />
                    <span className='fs-16 text-white'>Calendario</span>
                </Link>
            ) : (
                <Link
                    href={'/calendar'}
                    className='no-underline p-4 d-flex align-center gap-3'
                >
                    <Image
                        src={iconCalendarInactive}
                        alt='icon-calendar'
                        width={20}
                        height={20}
                    />
                    <span className='fs-16 text-black'>Calendario</span>
                </Link>
            )}
            {IsActive('/contacts') ? (
                <Link
                    href={'/contacts'}
                    className='no-underline p-4 d-flex align-center gap-3 bg-black br-2'
                >
                    <Image
                        src={iconContactsActive}
                        alt='icon-contactos'
                        width={20}
                        height={20}
                    />
                    <span className='fs-16 text-white'>Contactos</span>
                </Link>
            ) : (
                <Link
                    href={'/contacts'}
                    className='no-underline p-4 d-flex align-center gap-3'
                >
                    <Image
                        src={iconContactsInactive}
                        alt='icon-contactos'
                        width={20}
                        height={20}
                    />
                    <span className='fs-16 text-black'>Contactos</span>
                </Link>
            )}
        </div>
    );
};
