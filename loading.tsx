import { ImSpinner3 } from 'react-icons/im';

const Loading = () => {
    return (
        <div className='font-bold text-5xl text-center py-5'>
            <h1>Loading...</h1>
            <span className='text-center'><ImSpinner3 className='text-4xl text-slate-950 bg-white' /></span>
        </div>
    );
};

export default Loading;