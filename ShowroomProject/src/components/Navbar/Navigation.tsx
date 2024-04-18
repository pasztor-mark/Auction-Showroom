import {} from 'react'
import {Nav, Navbar, NavbarBrand, NavLink} from 'react-bootstrap'
import { FaCarOn } from "react-icons/fa6";
export function Navigation() {
    return (
        <>
        <Navbar className='bg-primary text-light' expand="md">
            <Nav className='px-3 mt-auto'>
                <NavbarBrand className='text-light line-height-0 text-center'>
                    <a href="/" >
                    <FaCarOn size={50} className='text-center text-light'/>
                    </a>
                </NavbarBrand>
                <NavLink href='#/' className='d-flex'>
                    <h4 className='text-light justify-content-center m-auto px-5'>Home</h4>
                </NavLink>
                <NavLink href="#auction" className='d-flex'>
                    <h4 className='text-light justify-content-center m-auto px-5'>Auction</h4>
                </NavLink>
                <NavLink href='#sell' className='d-flex'>
                    <h4 className='text-light justify-content-center m-auto px-5'>Sell</h4>
                </NavLink>
                <NavLink className='d-flex'>
                    <h4 className='text-light justify-content-center m-auto px-5'>Contact</h4>
                </NavLink>
                
            </Nav>
        </Navbar>
        </>
    )
}

export default Navigation