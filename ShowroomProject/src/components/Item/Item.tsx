import { } from 'react'
import { Row, Col, Container, Card, Carousel, CarouselItem, Image, CardBody, CardTitle, CardText, Button } from 'react-bootstrap'
import { FaMoneyBillWave, FaCalendarDays, FaRoad, FaGaugeHigh, FaGem, FaFlagCheckered } from 'react-icons/fa6'

interface Props {
    name: string
    img1: string
    img2: string
    description: string
    year: number
    mileage: number
    displacement: number
    condition: string
    performance: number
    currentbid: number
}

export function Item(props: Props) {
    return (
        <>
            <Col sm={12} md={6}>
                <Card className='bg-dark text-light pt-3'>
                    <Carousel interval={null} style={{ maxHeight: 400, minHeight: 400 }}>
                        <CarouselItem>
                            <Image src={props.img1} fluid></Image>
                        </CarouselItem>
                        <CarouselItem>
                            <Image src={props.img2} fluid></Image>
                        </CarouselItem>
                        <CarouselItem>
                            <Container className='d-flex justify-content-center align-items-center mt-4 flex-column gap-4'>
                                <h4><FaCalendarDays size={36} color='#4bb984' /> Model Year: <b>{props.year}</b></h4>
                                <h4><FaRoad size={36} color='#4bb984' /> <b>{props.mileage}</b> kilometers (verified)</h4>
                                <h4><FaGaugeHigh size={36} color='#4bb984' /> Engine Displacement: <b>{props.displacement}</b>cc</h4>
                                <h4><FaGem size={36} color='#4bb984' /> Condition: <b>{props.condition}</b></h4>
                                <h4><FaFlagCheckered size={36} color='#4bb984' /> Performance: <b>{props.performance}</b> horsepower</h4>
                            </Container>
                        </CarouselItem>
                    </Carousel>
                    <CardBody>
                        <CardTitle className='text-center'>{props.name}</CardTitle>
                        <CardText>
                            <p className='text-center'>{props.description}</p>
                        <hr />
                            <h4 className='text-center'>{props.currentbid}$</h4>
                            <h6 className='text-center'><FaMoneyBillWave color='#4bb984' size={28} /> Current bid</h6>
                            <Row className='mx-auto'>
                                <Col sm={12} md={8}>
                                    <input min={1200} step={50} type="number" placeholder={`Enter your bid here`} className='w-100 px-2 rounded' style={{ height: 40 }} />
                                </Col>
                                <Col sm={12} md={4} className='d-flex'>
                                    <Button className='bg-primary border-0 px-3 mx-auto'><h5 className='mx-auto'>Place Bid!</h5></Button>
                                </Col>

                            </Row>

                        </CardText>
                    </CardBody>
                </Card>
            </Col>
        </>
    )
}

export default Item