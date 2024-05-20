import {useEffect} from 'react'
import {Container, Row, Col, Card, CardHeader, CardBody, Table} from 'react-bootstrap'
import {FaServer, FaRectangleList, FaLaptopCode, FaDatabase, FaPalette, FaImagePortrait, FaGear} from 'react-icons/fa6'

export function About() {

    useEffect(() =>{
        document.title = "Rólunk | BPP"
    }, [])
    return (
        <>
        <Container>
            <Row className='mt-4 mx-auto text-light'>
                <h1 className='text-center'>Rólunk</h1>
                <hr />
                <h4 className='m-auto my-3 text-center'>Csapatunk</h4>
            </Row>
            <Row className='mx-auto d-flex justify-content-center gap-5'>
                <Col sm={12} md={3}>
                    <Card className='bg-dark'>
                        <CardHeader><h5 className='text-center'>Bogárdi Benedek</h5></CardHeader>
                        <CardBody>
                            <h1 className='text-primary text-center my-0 py-0'><FaServer size={42}/></h1>
                            <h6 className='text-primary text-center'>Backend Manager</h6>
                            <hr />
                            <ul className='text-light' style={{listStyle: "none"}}>
                                <li>Adatrögzítés</li>
                                <li>Adatbázis elkészítése</li>
                                <li>Frontend-backend összekötése</li>
                            </ul>
                        </CardBody>
                    </Card>
                </Col>

                <Col sm={12} md={3}>
                    <Card className='bg-dark'>
                        <CardHeader><h5 className='text-center'>Plavi Barnus</h5></CardHeader>
                        <CardBody>
                            <h1 className='text-primary text-center my-0 py-0'><FaRectangleList size={42}/></h1>
                            <h6 className='text-primary text-center'>Project Manager</h6>
                            <hr />
                            <ul className='text-light' style={{listStyle: "none"}}>
                                <li>UI/UX design</li>
                                <li>Munkanapló vezetése</li>
                                <li>Tesztelés</li>
                            </ul>
                        </CardBody>
                    </Card>
                </Col>

                <Col sm={12} md={3}>
                    <Card className='bg-dark'>
                        <CardHeader><h5 className='text-center'>Pásztor Márk</h5></CardHeader>
                        <CardBody>
                            <h1 className='text-primary text-center my-0 py-0'><FaLaptopCode size={42}/></h1>
                            <h6 className='text-primary text-center'>minden más</h6>
                            <hr />
                            <ul className='text-light' style={{listStyle: "none"}}>
                                <li>szó szerint</li>
                            </ul>
                        </CardBody>
                    </Card>
                </Col>
                <hr />
            </Row>
            <Row>
                <h2 className='text-center text-light'>Munkanapló</h2>
                <Table striped bordered variant='dark' className='border-primary mx-auto'>
                    <thead style={{fontWeight: "bold"}} className='text-center'>
                        <tr>
                            <td>Dátum</td>
                            <td>Bogárdi Benedek</td>
                            <td>Plavi Barnus</td>
                            <td>Pásztor Márk</td>
                        </tr>
                    </thead>
                    <tbody>
                    <tr>
                            <td style={{fontWeight: "bold"}}>2024. 04. 12</td>
                            <td>
                                <ul>
                                    <li>Readme elkészítése</li>
                                    <li>Projektleírás elkészítése</li>
                                </ul>
                            </td>
                            <td>
                                <ul>
                                    <li>Munkanapló elkészítése (txt)</li>
                                </ul>
                            </td>
                            <td>
                                <ul>
                                    <li>Initial commit</li>
                                    <li>Collaboratorok hozzáadása</li>
                                    <li>Router beállítása</li>
                                </ul>
                            </td>
                        </tr>
                        <tr>
                            <td style={{fontWeight: "bold"}}>2024. 04. 19</td>
                            <td>
                                <ul>
                                    <li>Adatbázis elkészítése</li>
                                    <li>Adatrögzítés kezdése</li>
                                    <li>Tesztelés (fork)</li>
                                </ul>
                            </td>
                            <td>
                                <ul>
                                    <li>Képek szerkesztése</li>
                                    <li>Adatrögzítés elősegítése</li>
                                    <li>Workflow átírása</li>
                                </ul>
                            </td>
                            <td>
                                <ul>
                                    <li>Eladás oldal</li>
                                    <li>Aukció oldal alapja elkészült</li>
                                    <li>Github pages kompatibilitás beállítása</li>
                                </ul>
                            </td>
                        </tr>
                        <tr>
                            <td style={{fontWeight: "bold"}}>2024. 04. 26</td>
                            <td>
                                <ul>
                                    <li>FAQ kártyák elkészítése</li>
                                    <li>Szövegszerkesztés</li>
                                    <li>Backend-frontend tesztek</li>
                                </ul>
                            </td>
                            <td>
                                <ul>
                                    <li>Elérhetőség kártyák megírása</li>
                                </ul>
                            </td>
                            <td>
                                <ul>
                                    <li>Bugfixek</li>
                                </ul>
                            </td>
                        </tr>
                        <tr>
                            <td style={{fontWeight: "bold"}}>2024. 05. 20</td>
                            <td>
                                <ul>
                                    <li>Powerpoint elkezdése</li>
                                </ul>
                            </td>
                            <td>
                                <ul>
                                    <li>Videó felvétele</li>
                                </ul>
                            </td>
                            <td>
                                <ul>
                                    <li>About oldal elkészítése</li>
                                    <li>Router átállítása</li>
                                    
                                </ul>
                            </td>
                        </tr>
                    </tbody>
                </Table>
            </Row>
            <Row>
                <h2 className='text-center text-light my-3'>Egyéb</h2>
                <hr />
                <Col sm={6} md={3}>
                    <Card className='bg-dark'>
                        <CardHeader><h5 className='text-center'>Felhasznált technológiák</h5></CardHeader>
                        <CardBody>
                            <h1 className='text-primary text-center my-0 py-0'><FaDatabase size={42}/></h1>
                            <ul className='text-light my-2'>
                                <li>Verziókezelés: Github</li>
                                <li>Keretrendszer: Vite + React + TS</li>
                                <li>Adatbázis: jsonbin</li>
                                <li>Style: Bootstrap, React-Bootstrap</li>
                                <li>HTTP requestek: Axios</li>
                                <li>Dekoráció: React-icons (fa6 csomag)</li>
                                <li>Routing: React-router, react-dom</li>
                            </ul>
                        </CardBody>
                    </Card>
                </Col>
                <Col sm={6} md={3}>
                    <Card className='bg-dark'>
                        <CardHeader><h5 className='text-center'>Téma</h5></CardHeader>
                        <CardBody>
                            <h1 className='text-primary text-center my-0 py-0'><FaPalette size={42}/></h1>
                            <ul className='text-light my-2'>
                                <li>Fő téma: jármű aukció</li>
                                <li>Ok: felvétel és listázást egyszerű implementálni</li>
                                <li>Források: saját készítésű Képek</li>
                                <li>Nyelv: angol</li>
                            </ul>
                        </CardBody>
                    </Card>
                </Col>
                <Col sm={6} md={3}>
                    <Card className='bg-dark'>
                        <CardHeader><h5 className='text-center'>Oldalak</h5></CardHeader>
                        <CardBody>
                            <h1 className='text-primary text-center my-0 py-0'><FaImagePortrait size={42}/></h1>
                            <ul className='text-light my-2'>
                            <li>Főoldal: rövid landing oldal néhány infóval</li>
                                <li>Aukció oldal: adatbázisból betöltött külön komponensel kijelzett elemek</li>
                                <li>Eladás oldal: egyszerű form, amely frissíti az adatbázist</li>
                                <li>Rólunk oldal: magyar nyelvű oldal, a projekt folyamatáról tájékoztatja az olvasót (nincs köze az oldal témájához)</li>
                            </ul>
                        </CardBody>
                    </Card>
                </Col>
                <Col sm={6} md={3}>
                    <Card className='bg-dark'>
                        <CardHeader><h5 className='text-center'>Egyéb</h5></CardHeader>
                        <CardBody>
                            <h1 className='text-primary text-center my-0 py-0'><FaGear size={42}/></h1>
                            <ul className='text-light my-2'>
                            <li>Adatbázisnak nem használtunk Firebase-t</li>
                            <li>Két React-Bootstrap komponens,és órán nem beszéltük meg: <br/> - Carousel (Auction)<br/> - Card</li>
                            <li>Minden héten dolgozott mindenki, valahányszor vagy órán kívül, vagy githubra nem feltöltött dolgokkal (pl. videó, prezentáció, adatbázis, képek, stb)</li>
                            </ul>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </Container>
        </>
    )
}

export default About