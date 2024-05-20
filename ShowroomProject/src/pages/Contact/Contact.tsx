import { } from 'react';
import { Container, Row, Col, Card, CardBody, CardHeader, CardFooter } from 'react-bootstrap'
import { FaPhone } from 'react-icons/fa6'

export function ContactPage() {
    return (
        <>
            <Container className='text-light mt-3'>
                <Row>
                    <h1 className='text-center'>Do you have anything to ask us?</h1>
                    <hr />
                    <h4 className='text-center mb-3'>Check out our Frequently Asked Questions first!</h4>
                </Row>
                <Row>

                    <Col sm={12} md={6}>
                        <Card className='text-center text-light bg-dark border border-primary rounded-3'>
                            <CardHeader><h3>Looking to sell?</h3></CardHeader>
                            <CardBody>
                                <h5>How does the selling process work?</h5>
                                <p>The selling process is very simple. You can navigate to the Sell page, fill out the form to send us the details of your vehicle, and your car is up for auction on the Auction page after verification.</p>
                                <h5>How does the selling process get verified?</h5>
                                <p>The verification process is simple: you will be asked to provide papers for your vehicle via e-mail after your submission.</p>
                                <h5>How can I keep track of my listing?</h5>
                                <p>You can check the website often, and we will send you an e-mail whenever there is a new bid placed on your listing.</p>
                                <h5>Does this service come with any fees?</h5>
                                <p>No, the auction is 100% wallet-friendly on our side, however the prices of some listings might not be.</p>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col sm={12} md={6}>
                        <Card className='text-center text-light bg-dark border border-primary rounded-3'>
                            <CardHeader><h3>Looking to buy?</h3></CardHeader>
                            <CardBody>
                                <h5>How can I purchase a vehicle?</h5>
                                <p>If you outbid the other bidders, we will put you in contact with the seller, and from then onwards, the selling details are private between buyer and seller.</p>
                                <h5>Does the site take any cut in the purchase?</h5>
                                <p>Since the transaction is private, we have no access to any payments, therefore we will not be charging anything from the buyer, nor the seller.</p>
                                <h5>How can I keep track of my bids?</h5>
                                <p>We will send you an e-mail of your table of bids on every update. Make sure to check it regularly!</p>
                                <h5>Do you offer scam protection?</h5>
                                <p className='mb-3'>The transaction details are private, therefore you can only rely on your bank on helping you out with a scamming situation. All we can do is remove a listing or ban a user</p>
                            </CardBody>
                        </Card>
                    </Col>
                    <hr className='m-4' />
                </Row>
                <Row className='text-center'>
                    <h2>Still have questions?</h2>
                    <p>Feel free to contact us!</p>
                </Row>
                <Row className='mb-4'>
                <Col sm={12} md={6} lg={4}>
                        <Card className='text-center text-light bg-dark border border-primary'>
                            <CardHeader>Customer Support</CardHeader>
                            <CardBody>
                                <p>If you have any questions, contact us here, any time of the day</p>
                                <h4 className='text-primary bold'> <FaPhone size={32} className='m-2'/> 555-8046-432</h4>
                            </CardBody>
                            <CardFooter>Available 24/7</CardFooter>
                        </Card>
                    </Col>
                    <Col sm={12} md={6} lg={4}>
                        <Card className='text-center text-light bg-dark border border-primary'>
                            <CardHeader>Price Evaluation</CardHeader>
                            <CardBody>
                                <p>We can get an expert on the line to asses the value of your vehicle.</p>
                                <h4 className='text-primary bold'> <FaPhone size={32} className='m-2'/> 555-8046-433</h4>
                            </CardBody>
                            <CardFooter>Available on weekdays, 14-17</CardFooter>
                        </Card>
                    </Col>
                    <Col sm={12} md={6} lg={4}>
                        <Card className='text-center text-light bg-dark border border-primary'>
                            <CardHeader>Financial Advisor</CardHeader>
                            <CardBody>
                                <p>Contact our financial advisors to support your buying or selling experience.</p>
                                <h4 className='text-primary bold'> <FaPhone size={32} className='m-2'/> 555-8046-434</h4>
                            </CardBody>
                            <CardFooter>Available on weekdays, 0-24</CardFooter>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
export default ContactPage;