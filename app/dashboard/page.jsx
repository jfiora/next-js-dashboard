import { Sidebar } from '@/components/Sidebar/Sidebar';
import { UserInfo } from '@/components/UserInfo';

export default function Dashboard() {
    return (
        <section className='d-flex vh-100'>
            <div className='w-15 h-100'>
                <Sidebar />
            </div>
            <div className='w-85 h-100 bg-default'>
                <UserInfo />
            </div>
        </section>
    );
}
