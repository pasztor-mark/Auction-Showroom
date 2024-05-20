import {useEffect} from 'react'
import { Container, Row, Col, Image, Button} from 'react-bootstrap'
import heroimage from './heroimage.jpg'
import { FaNewspaper, FaCoins, FaMagnifyingGlassChart, FaPhone, FaPenToSquare } from "react-icons/fa6";

export function Landing() {

    useEffect(() =>{
        document.title = "Landing | BPP"
    }, [])
    return (
        <>
        <Container className='text-light'>
            <Row>
            <Col sm={12} className='p-5'>

                <h1 className='text-center'>Find your dream vintage car today!</h1>
                <h5 className='text-center'>Browse our wide selection of collectors' grade vintage automobiles!</h5>
            </Col>
            </Row>
            <Row>
                <Col sm={12} className='d-flex flex-column'>
                    <Image fluid src={heroimage} rounded className='border border-primary border-2'></Image>
                    <Button className='bg-primary border-0 mt-3 mx-auto'><h3><a href="auction" className='text-center text-light text-decoration-none line-height-0'>Browse Our Catalogue</a></h3></Button>
                </Col>
            </Row>
            <Row>
                <Col sm={12}>
                    <h3 className='text-center mt-4'>How does our page work?</h3>
                </Col>
            </Row>
            <Row className='d-flex justify-content-center'>
                <Col sm={12} md={5} className='border border-primary rounded mx-1 mb-4'>
                    <h5 className='text-center pt-2'>For buyers</h5>
                    <hr />
                    <ul style={{listStyle: "none"}}>
                        <li className='m-2'><FaNewspaper size={26} color='#4BB984'/> <b>Browse</b> our catalogue and find your favorite item!</li>
                        <li className='m-2'><FaCoins size={26} color="#4bb984"/> Place a <b>bid!</b></li>
                        <li className='m-2'><FaMagnifyingGlassChart size={26} color="#4bb984"/> <b>Monitor</b> the auction</li>
                    </ul>
                </Col>
                <Col sm={12} md={5} className='border border-primary rounded mx-1 mb-4'>
                    <h5 className='text-center pt-2' >For sellers</h5>
                    <hr />
                    <ul style={{listStyle: "none"}}>
                        <li className='m-2'><FaPhone size={26} color='#4BB984'/> <b>Contact</b> us</li>
                        <li className='m-2'><FaPenToSquare size={26} color="#4bb984"/> Fill out a seller's <b>form!</b></li>
                        <li className='m-2'><FaMagnifyingGlassChart size={26} color="#4bb984"/> <b>Monitor</b> the auction</li>
                    </ul>
                </Col>
            </Row>
        </Container>
        </>
    )
}
export default Landing