import Image from 'next/image';
import error from '@/assets/error-404.png'

const NotFound = () => {
    return (
        <div className='flex items-center justify-center'>
            <Image src={error} alt='' height={200} width={400} />
        </div>
    );
};

export default NotFound;