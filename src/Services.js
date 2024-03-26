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

        <Card style={{ width: '363px' }} className='p-0  box pos-rel'>
                        <div className="card-icon rounded-circle"><RiServiceFill className='icon-color fs-2' /></div>
                        <div className="img-box"><Card.Img variant="top" className='p-0' src="https://media.istockphoto.com/id/1200967807/photo/pouring-oil-to-car-engine.jpg?s=612x612&w=0&k=20&c=JefMe3XwYmnaZQ1He6I3ypzcFRPpub-8YFI3KK0EKKg="/></div>
                        <Card.Body>
                            <div className='icon-color'><Card.Title className='mb-2 fw-bold text-uppercase manus-mar' >Oil Change</Card.Title></div>
                            <p className='pt-1  mb-2 fs-18'>We use only the highest quality oils, specifically selected to optimize your engine's performance and longevity. Whether your vehicle requires conventional, synthetic, or synthetic blend oil, we've got you covered.</p>
                            <Card.Text className='pt-1 f-color '>199$</Card.Text>
                        </Card.Body>
                        <a href="/customer-login" className="details text-white p-3 text-center"> <button className='button w-50 fs-5 fw-bold'>Book Now</button> </a>
        </Card>
        <Card style={{ width: '363px' }} className='p-0  box pos-rel '>
                        <div className="card-icon rounded-circle"><RiServiceFill className='icon-color fs-2' /></div>
                        <div className="img-box"><Card.Img variant="top" className='p-0' src="https://media.istockphoto.com/id/174942860/photo/tire-wash.jpg?s=612x612&w=0&k=20&c=IHqUkH8UZl1vyS02BAU5zbJ2xvE-_NMFwSXOgfr2jdI="/></div>
                        <Card.Body>
                            <div className='icon-color'><Card.Title className='mb-2 fw-bold text-uppercase' >car wash</Card.Title></div>
                            <p className='pt-1  mb-2 fs-18'>We believe in protecting both your car and the environment. That's why we use only the finest, eco-friendly cleaning products and techniques, ensuring a gentle yet effective clean that's safe for your vehicle and the planet.</p>
                            <Card.Text className='pt-1 f-color '>99$</Card.Text>
                        </Card.Body>
                        <a href="/customer-login" className="details text-white p-3 text-center"> <button className='button w-50 fs-5 fw-bold'>Book Now</button> </a>
        </Card>
        <Card style={{ width: '363px' }} className='p-0  box pos-rel '>
                        <div className="card-icon rounded-circle"><RiServiceFill className='icon-color fs-2' /></div>
                        <div className="img-box"><Card.Img variant="top" className='p-0' src="https://media.istockphoto.com/id/1165665234/photo/car-maintenance-and-repair-mechanic-writing-checklist-paper-on-clipboard.jpg?s=612x612&w=0&k=20&c=yjR4V79WTKf6rO00v0ZqCzAoM8AZTdIlA4lP7T_dctg="/></div>
                        <Card.Body>
                            <div className='icon-color'><Card.Title className='mb-2 fw-bold text-uppercase' >full service</Card.Title></div>
                            <p className='pt-1  mb-2 fs-18'> We use only the highest quality parts and products, ensuring lasting performance and reliability.Our team of certified technicians has the skills and expertise to handle any automotive challenge, big or small.</p>
                            <Card.Text className='pt-1 f-color '>499$</Card.Text>
                        </Card.Body>
                        <a href="/customer-login" className="details text-white p-3 text-center"> <button className='button w-50 fs-5 fw-bold'>Book Now</button> </a>
        </Card>

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
                        <a href="/customer-login" className="details text-white p-3 text-center"> <button className='button w-50 fs-5 fw-bold'>Book Now</button> </a>
                        {/* <a href="/customer-login" className="text-dark hov details fw-bold p-3">Book Now</a> */}

                    </Card>
                })
            }
        </Row>
    </Container>
</Container>
  )
}

export default Services