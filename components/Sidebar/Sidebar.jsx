import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';

export const Sidebar = () => {
    return (
        <section className='bg-sidemenu'>
            <div>logo</div>
            <div>
                <div>
                    <FontAwesomeIcon
                        icon={faArrowRightFromBracket}
                        className='fs-13'
                    />{' '}
                    <span className='fs-13'>Cerrar Sesión</span>
                </div>
            </div>
        </section>
    );
};
