import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhone} from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <div className='bg-linear-to-r from-[#e3ef9f] via-[#cfe46f] to-[#b9db4c] flex flex-col'>
        <div className='flex-wrap px-3 md:flex py-4'>
            <div className='p-2 flex-1 md:ps-6 md:flex flex-col'>
                <div className='text-xl text-[#2f3e1f] font-bold py-4'>About</div>
                <div className='py-4 pr-12 text-justify text-[#4f5d2f]'>MyNews is a trusted source for breaking News, Insightful analysis and comprehensive coverage from around the world</div>
            </div>

            <div className='pl-2 flex-1 md:flex flex-col'>
                <div className='text-xl text-[#2f3e1f] font-bold py-4'>Contact</div>
                <div className='flex flex-col py-4'>
                    <div className='pb-2 text-[#3f4f24]'><FontAwesomeIcon icon={faEnvelope} className='text-[#5f8209]'/> info@mynews.com</div>
                    <div className='py-2 text-[#3f4f24]'><FontAwesomeIcon icon={faPhone} className='text-[#5f8209]'/> +91 945 672 4678</div>
                    <div className='flex gap-3 py-2'>
                        <div className='flex items-center justify-center h-8 w-8 bg-[#6f8250] rounded-full'><FontAwesomeIcon icon={faFacebook} className='text-white'/></div>
                        <div className='bg-red h-8 w-8 rounded-full bg-[#6f8250] flex justify-center items-center'><FontAwesomeIcon icon={faInstagram} className='text-white'/></div>
                        <div className='h-8 w-8 bg-[#6f8250] rounded-full flex justify-center items-center'><FontAwesomeIcon icon={faTwitter} className='text-white'/></div>
                    </div>
                </div>
            </div>

            <div className='pl-2 flex-1 md:flex flex-col'>
                <div className='text-xl text-[#2f3e1f] font-bold py-4'>Quick Links</div>
                
                <div className='mb-3 text-[#3f4f24]'>Home</div>
                <div className='mb-3 text-[#3f4f24]'>Catgory</div>
                <div className='mb-3 text-[#3f4f24]'>Trending</div>
                <div className='mb-3 text-[#3f4f24]'>Archives</div>
                <div className='mb-3 text-[#3f4f24]'>About Us</div>   
            </div>

            <div className='pl-2 flex-1 md:flex-col'>
                <div className='text-xl text-[#2f3e1f] font-bold py-4'>Legal</div>

                <div className='mb-3 text-[#3f4f24]'>Privacy Policy</div>
                <div className='mb-3 text-[#3f4f24]'>Terms of Services</div>
                <div className='mb-3 text-[#3f4f24]'>Cookies Policy</div>
                <div className='mb-3 text-[#3f4f24]'>Disclaimer</div>
            </div>
        </div>

        <div className='px-10'>
            <div className='border-t border-[#bcd27a]'></div>
        </div>
        
        <div className='flex justify-center text-sm py-7 text-[#5f6d3a]'>© 2026 MyNews. All Rights Reserved</div>
    </div>
  )
}

export default Footer