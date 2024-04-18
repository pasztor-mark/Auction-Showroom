import {useEffect, useState} from 'react'
import {Container, Row, Col, Button} from 'react-bootstrap'
import axios from 'axios'
import { AuctionItem, AuctionItems } from '../../items'
import Item from '../../components/Item/Item'
export function Auction() {

    const [items, setItems] = useState([] as AuctionItem[])

    useEffect(() => {
        async function load() {
          axios.get('https://api.jsonbin.io/v3/b/661fff7aad19ca34f85b960a/latest?meta=false', {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
          }).then(response =>{
            const auctionList = response.data as AuctionItems;
            setItems(auctionList.AuctionItems);
          })
        }
        load()
      }, [])
    return (
        <>
        <Container className='text-light'>
            <Row>
                <Col>
                    <h2 className='text-center mt-5'>Find your dream vehicle to bid on!</h2>
                    <hr />
                </Col>
            </Row>
            <Row>
                <Container className='border border-primary rounded' style={{maxHeight: 800, overflowY: "scroll"}}>
                    <Row className=' d-flex justify-content-center'>

                    {
                        items.map(
                            item => (<Item name={item.name} img1={item.img1} img2={item.img2} description={item.description} year={item.year} mileage={item.mileage} displacement={item.displacement} condition={item.condition} performance={item.hp} currentbid={item.currentBid}/>)
                        )
                    }                        
                    </Row>
                </Container>
            </Row>
            <Row>
                <Container className='d-flex justify-content-center flex-column mx-auto'>
                   <h3 className='mx-auto pt-4'>Have something to sell?</h3>
                    <hr className='mx-auto w-50' /> 
                    <p className='mx-auto w-50 text-center'>Navigate to the Sell page to put your own vehicle up for auction!</p>
                    <Button href='sell' className="border border-0 bg-primary w-25 mx-auto"><h3>Sell</h3></Button>
                </Container>
        
            </Row>
        </Container>
        </>
    )
}

export default Auction