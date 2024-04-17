import {useEffect, useState} from 'react'
import {Container, Row, Col} from 'react-bootstrap'
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
                <Container className='border border-primary rounded'>
                    <Row className=' d-flex justify-content-center'>

                    {
                        items.map(
                            item => (<Item name={item.name} img1={item.img1} img2={item.img2} description={item.description} year={item.year} mileage={item.mileage} displacement={item.displacement} condition={item.condition} performance={item.hp} currentbid={item.currentBid}/>)
                        )
                    }                        
                    </Row>
                </Container>
            </Row>
        </Container>
        </>
    )
}

export default Auction