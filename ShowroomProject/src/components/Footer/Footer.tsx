import {} from 'react'
import {FaB, FaP} from 'react-icons/fa6'

export function Footer() {
    return (
        <>
        <footer className='bg-dark'>
            <h1 className='text-center text-primary my-3'><FaB/><FaP/><FaP/></h1>
            <p className='text-light text-center'>&copy; 2024, BPP Oldtimers Co.<br/>All rights reserved.</p>
        </footer>
        </>
    )
}
export default Footer