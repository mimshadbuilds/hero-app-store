import Image from 'next/image';
import icon from '@/assets/logo.png'
import Link from "next/link";
import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa';


const Footer = () => {
    return (
    <footer className="footer footer-vertical sm:footer-horizontal bg-[#001931] text-neutral-content p-10">
        <div className='flex justify-between items-center container mx-auto'>
            <aside>
                <div className='flex items-center gap-2'>
                    <Image src={icon} alt='footer icon' height={40} width={40} 
                    className='object-cover'  />
                    <Link href={'/'} className=" text-xl text-slate-100 font-bold ml-2">App Store</Link>
                </div>
            </aside>
            <div className='mt-10 md:block hidden'>
                <p className='text-xs text-center text-slate-400 pt-8'>Copyright © 2027 - All right reserved.</p>
            </div>
            <nav>
                <h6 className="text-base font-medium text-white mb-2 text-center">Social links</h6>
                <div className="grid grid-flow-col gap-4 text-white text-base mt-2">
                    <Link href='#'>
                        <FaGithub />
                    </Link>
                    <Link href='#'>
                        <FaLinkedin />
                    </Link>
                    <Link href='#'>
                        <FaFacebook />
                    </Link>
                </div>
            </nav>
        </div>
    </footer>
    );
};

export default Footer;