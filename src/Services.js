import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Card, Container, Row } from 'react-bootstrap'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
import { RiServiceFill } from "react-icons/ri";


const Services = () => {

    const [service, setService] = useState([])

    const history = useHistory()

    const getService = () => {
        axios.get('https://garage-node.onrender.com/service/find')
            .then((res) => {
                console.log(res.data.data);
                setService(res.data.data)
            })
            .catch((error) => {
                console.log(error.response.data.message);
            })
    }


    useEffect(() => {
        getService()
    }, [])

    const card = () => {
        history.push('/customer-login')
      }
    


  return (
    <Container fluid className='text-white'>
    <Container className="">
        <Row className=" py-5 gap-5 d-flex justify-content-center">
        <h2 className='text-dark text-center fw-bold mt-5 pt-5 border-bottom border-3 pb-2'>Book Your Services</h2>
            {
                service.map((el, index) => {
                    return <Card style={{ width: '363px' }} key={index} onClick={card} className='p-0  box pos-rel'>
                        <div className="card-icon rounded-circle"><RiServiceFill className='icon-color fs-2' /></div>
                        <div className="img-box"><Card.Img variant="top" className='p-0' src={'https://garage-node.onrender.com/images/' + el.image} /></div>
                        <Card.Body>
                            <div className='icon-color'><Card.Title className='pt-1 mb-2 fw-bold  text-uppercase' >{el.serviceName}</Card.Title></div>
                            <p className='pt-1  mb-2 fs-18'>{el.decription}</p>
                            <Card.Text className='pt-1 f-color'>${el.cost}</Card.Text>
                            {/* <Button variant="primary">Go somewhere</Button> */}
                        </Card.Body>
                        <a href="/" className="text-dark hov details fw-bold p-3">More Details..!</a>
                    </Card>
                })
            }
        </Row>
    </Container>
</Container>
  )
}

export default Services