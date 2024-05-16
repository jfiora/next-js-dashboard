import { Sidebar } from '@/components/Sidebar/Sidebar';
import { UserInfo } from '@/components/UserInfo';

export default function Dashboard() {
    return (
        <section className='d-flex vh-100'>
            <div className=''>
                <Sidebar />
            </div>
            <div className='w-100 h-100 bg-default p-4 pt-6'>
                <UserInfo />
                <div className='p-5'>
                    <div className='fs-16 fw-bold'>Dashboard</div>
                </div>
            </div>
        </section>
    );
}
