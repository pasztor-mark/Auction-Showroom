import { useState, useEffect } from 'react'
import axios from 'axios'
import { AuctionItem, AuctionItems } from '../../items'
import { Container, Row, Col, Form, FormGroup, FormLabel, FormControl, FormText, FormSelect, Button } from 'react-bootstrap'
import { FaEnvelope, FaPhone, FaTag, FaCalendarDays, FaImage, FaReceipt, FaRoad, FaGaugeHigh, FaGem, FaFlagCheckered, FaMoneyBill1Wave } from 'react-icons/fa6'

export function Sell() {
    const [items, setItems] = useState([] as AuctionItem[])
    const [postedItems, setPostedItems] = useState([] as AuctionItem[])
    const [nev, setName] = useState("")
    const [ev, setYear] = useState(0)
    const [kep1, setImg1] = useState("")
    const [kep2, setImg2] = useState("")
    const [leir, setDesc] = useState("")
    const [km, setMile] = useState(0)
    const [heng, setDisp] = useState(0)
    const [all, setCond] = useState("")
    const [telj, setPerf] = useState(0)
    const [tet, setBid] = useState(0)
    const [updating, setUpdater] = useState(false)
    function newCar() {
        setPostedItems(
            [...items,
            {
                name: nev,
                img1: kep1,
                img2: kep2,
                description: leir,
                year: ev,
                mileage: km,
                displacement: heng,
                condition: all,
                hp: telj,
                currentBid: tet

            }]
        )
    }
    useEffect(() => {
        console.log("page mounted")
        console.log("demo image 1: https://i.postimg.cc/XvWhkGb3/k-p-2024-05-20-152815170.png")
        console.log("demo image 2: https://i.postimg.cc/t70DRwRy/k-p-2024-05-20-153039254.png")
        document.title = "Selling | BPP"
    }, [])
    useEffect(() => {
        if (updating) {
            axios.put('https://api.jsonbin.io/v3/b/661fff7aad19ca34f85b960a',
                (`{
                    "AuctionItems": ${JSON.stringify(postedItems)}
                }`), {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                }
            }
            )
        }

    }, [postedItems])
    useEffect(() => {
        newCar()
    }, [updating])

    useEffect(() => {
        async function load() {
            axios.get('https://api.jsonbin.io/v3/b/661fff7aad19ca34f85b960a/latest?meta=false', {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                }
            }).then(response => {
                const auctionList = response.data as AuctionItems;
                setItems(auctionList.AuctionItems);
            })
        }
        console.log(items)
        load()

    }, [])
    return (
        <>
            <Container className='text-light mt-4'>
                <Row>
                    <Col className='text-center'>
                        <h1>Have something to sell?</h1>
                        <hr className='w-75 m-4 mx-auto' />
                        <h6>Fill out the form below to get in contact with our team, so we can check if your vehicle is eligible for being hosted on our site.</h6>
                    </Col>
                </Row>
                <Row>
                    <Form className='border border-primary rounded p-0'>
                        <Container>
                            <Row className='mx-auto d-flex justify-content-center'>
                                <Col sm={12} md={5}>
                                    <FormGroup controlId='formEmail'>
                                        <FormLabel><FaEnvelope color='#4BB984' /> E-mail Address</FormLabel>
                                        <FormControl type='email' placeholder='Enter your e-mail address'></FormControl>
                                        <FormText className='text-light'>Az e-mail cím, és semmilyen más személyes adat nem kerül feldolgozásra, csak dekoratív</FormText>
                                    </FormGroup>
                                </Col>
                                <Col sm={12} md={5}>
                                    <FormGroup controlId='formTel'>
                                        <FormLabel> <FaPhone color='#4BB984' /> Phone Number</FormLabel>
                                        <FormControl type='tel' placeholder='Enter your telephone number'></FormControl>
                                    </FormGroup>
                                </Col>
                                <Col sm={12} md={5}>
                                    <FormGroup controlId='formName'>
                                        <FormLabel><FaTag color='#4BB984' /> Vehicle Name</FormLabel>
                                        <FormControl onChange={
                                            e => { setName(e.currentTarget.value) }
                                        } type='text' placeholder='Enter the name of the vehicle'></FormControl>
                                    </FormGroup>
                                </Col>
                                <Col sm={12} md={5}>
                                    <FormGroup controlId='formYear'>
                                        <FormLabel><FaCalendarDays color='#4BB984' /> Vehicle Model Year</FormLabel>
                                        <FormControl onChange={
                                            e => { setYear(parseInt(e.currentTarget.value)) }
                                        } type='number' placeholder='Enter the model year of your vehicle'></FormControl>
                                    </FormGroup>
                                </Col>
                                <Col sm={12} md={12} className='d-flex mx-auto justify-content-center'>
                                    <FormGroup controlId='formImages'>
                                        <FormLabel><FaImage color='#4BB984' /> Images</FormLabel>
                                        <FormControl onChange={
                                            e => { setImg1(e.currentTarget.value) }
                                        } className='mb-1' type='text' placeholder='Enter the first link'></FormControl>
                                        <FormControl onChange={
                                            e => { setImg2(e.currentTarget.value) }
                                        } type='text' placeholder='Optionally enter the second link'></FormControl>
                                        <FormText className='text-light'>Note: We do not accept direct file uploads, paste the link from a third-party image hosting website.</FormText>
                                    </FormGroup>
                                </Col>
                                <Col sm={12} md={12}>
                                    <FormGroup controlId='formDesc' className='w-75 mx-auto'>
                                        <FormLabel><FaReceipt color='#4BB984' /> Vehicle Description</FormLabel>
                                        <FormControl onChange={
                                            e => { setDesc(e.currentTarget.value) }
                                        } as="textarea" placeholder='Provide a short description of your vehicle'></FormControl>
                                    </FormGroup>
                                </Col>
                                <Col sm={12} md={5}>
                                    <FormGroup controlId='formMileage'>
                                        <FormLabel><FaRoad color='#4BB984' /> Vehicle Mileage</FormLabel>
                                        <FormControl onChange={
                                            e => { setMile(parseInt(e.currentTarget.value)) }
                                        } type='number' placeholder='Enter the verified mileage of your vehicle (in km)'></FormControl>
                                    </FormGroup>
                                </Col>
                                <Col sm={12} md={5}>
                                    <FormGroup controlId='formDisplacement'>
                                        <FormLabel><FaGaugeHigh color='#4BB984' /> Engine Displacement</FormLabel>
                                        <FormControl onChange={
                                            e => { setDisp(parseInt(e.currentTarget.value)) }
                                        } type='number' placeholder="Enter the displacement of your vehicle's engine (in cc) "></FormControl>
                                    </FormGroup>
                                </Col>
                                <Col sm={12} md={5}>
                                    <FormGroup controlId='formCondition'>
                                        <FormLabel><FaGem color='#4BB984' /> Vehicle Condition</FormLabel>
                                        <FormSelect onChange={
                                            e => { setCond((e.currentTarget.value)) }
                                        }>
                                            <option value="undefined">Select your vehicle's condition</option>
                                            <option value="mint condition">Mint condition</option>
                                            <option value="lightly used">Lightly used</option>
                                            <option value="daily driven">Daily driven</option>
                                            <option value="salvage">Salvage</option>
                                        </FormSelect>
                                    </FormGroup>
                                </Col>
                                <Col sm={12} md={5}>
                                    <FormGroup controlId='formPerformance'>
                                        <FormLabel><FaFlagCheckered color='#4BB984' /> Vehicle Performance</FormLabel>
                                        <FormControl onChange={
                                            e => { setPerf(parseInt(e.currentTarget.value)) }
                                        } type='number' placeholder="Enter the performance of your vehicle (in horsepower)"></FormControl>
                                    </FormGroup>
                                </Col>

                                <Col sm={12} className='mx-auto d-flex justify-content-center'>
                                    <FormGroup controlId='formBid' className='w-25 d-flex flex-column justify-content-center mx-auto text-center'>
                                        <FormLabel><FaMoneyBill1Wave color='#4BB984' /> Starting Bid</FormLabel>
                                        <FormControl onChange={
                                            e => { setBid(parseInt(e.currentTarget.value)) }
                                        } type='number' placeholder="Enter the starting bid here"></FormControl>
                                        <FormText className='text-light mb-3'>Note: The minimum increment for bids is $50.</FormText>
                                    </FormGroup>
                                </Col>
                                <Row className='m-auto text-center'>
                                    <hr className='m-2 mx-auto w-50' />
                                    <h5>Ready to sell?</h5>
                                    <p>Note: Make sure you have entered all information correctly!</p>
                                    <Button onClick={() => setUpdater(true)} className='bg-primary border-0 w-25 mb-2 mx-auto'><h4>Sell!</h4></Button>
                                </Row>

                            </Row>

                        </Container>
                    </Form>
                </Row>
            </Container>
        </>
    )
}

export default Sell