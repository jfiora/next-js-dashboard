'use client';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

export const ReserveButton = () => {
    return (
        <button className='sidebar-btn-width bg-transparent border-purple-100 cursor-pointer gap-3 br-3 p-4 d-flex align-center justify-center'>
            <div className='bg-purple-30 rounded-full sidebar-icon-btn-size d-flex align-center justify-center'>
                <FontAwesomeIcon
                    icon={faPlus}
                    className='fs-16 text-purple-100'
                />
            </div>
            <span className='fs-16 fw-bold text-purple-100'>Reservar</span>
        </button>
    );
};
