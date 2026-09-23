import Image from 'next/image';
import error from '@/assets/App-Error.png';
const NotFound = () => {
    return (
        <div className='flex items-center justify-center'>
            <Image src={error} alt='' height={500} width={700} />
        </div>
    );
};

export default NotFound;