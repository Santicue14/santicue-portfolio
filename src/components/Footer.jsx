import React from 'react'
import { useLocation } from 'react-router-dom'
export const Footer = () => {
    const location = useLocation()
    return (
        <footer className={`text-white sm:mx-[25%] lg:mx-[30%] lg:bottom-4  ${location.pathname = '/projects' ? '': ' bottom-0'}  sm:bottom-0 w-96 absolute gap-1 text-sm sm:w-[400px]  text-center -z-50`}>
            <p className=' w-full h-fit'>
                Portfolio made by&nbsp;
                <a href="https://github.com/Santicue14" target='_blank' className='font-bold underline transition-all hover:text-Almost-Transparent-White'>Santicue14</a>
            </p>
            <p className='w-full h-fit'>
                You can contact me on <a href="mailto:santiagobcuevas14@gmail.com" className='font-bold underline transition-all hover:text-Almost-Transparent-White'>santiagobcuevas14@gmail.com</a>
            </p>
        </footer>
    )
}
