import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card';
import { Link, useHistory } from 'react-router-dom/cjs/react-router-dom.min';

import IMG7 from '../Garage-API/Img/IMG7.jpg'
import { RiServiceFill } from "react-icons/ri";
import { Container, Row } from 'react-bootstrap';
import { FaLongArrowAltRight } from "react-icons/fa";
import { PiArrowBendRightDownFill } from "react-icons/pi";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { BiSolidCarMechanic } from "react-icons/bi";
import { FaCarSide } from "react-icons/fa";
import { MdCarCrash } from "react-icons/md";
import { PiCertificate } from "react-icons/pi";
import { FaArrowRightLong } from "react-icons/fa6";


const Home = () => {

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
    <div>

      {/* Main Img */}
      <Container fluid className='mt-4  '>
        <Row>
          {/* <div className='p-0'>
            <img height="" className='w-100 p-0' src={IMG7} alt="" />
          </div> */}
          <div className="black-box bg-7 p-5 text-white d-flex align-items-center">
            <div className='bg-box'>
              <h6 className='fw-bold'>WHAT WE DO <PiArrowBendRightDownFill className='fs-3 mt-2 ms-1 icon-color' /></h6>
              <h1>Our Services</h1>
              <div className='mt-4'>
                <a href="/Services" className="text-white fw-bold bn-btn">Book Now <FaLongArrowAltRight /></a>
              </div>
            </div>
          </div>
        </Row>
      </Container>

      {/* ABout US */}
      <Container fluid className='ptb bg-lite text-white'>
        <Container className=''>
          <Row>
            <div className="col-md-6 col-12 position-relative ">
              <div className=''>
                <img className='w-100 position-relative pt-4' src="https://elmoanywhere.com/wp-content/uploads/2023/12/Automobile-special-workers-replacing-windscreen-or-windshield-of-a-car-in-auto-service-station-garage.-Background.jpg" alt="" />
              </div>
            </div>
            <div className="col-md-6 col-12 ps-md-5 py-4">
              <h6 className=' ps-2 fs-14'>ABOUT US <PiArrowBendRightDownFill className='fs-3 mt-2 ms-1 icon-color' /></h6>
              <h1 className='fs-40'>Auto<span className='icon-color'>Care</span> Car <br /> Service & Repair</h1>
              <p className='line-word text-color'>Car repair quisque sodales dui ut varius vestibulum drana tortor turpis porttiton tellus eu euismod nisl massa ut odio in the miss volume placerat urna, a lacinia eros nunta urna mauris, vehicula rutrum tempus in the interdum felis.</p>
              <div>
                <ul className=' mb-0 ps-0 '>
                  <li className=''><Link to="/" className="hov text-color"><span className='icon-color me-2 fs-4'><IoMdCheckmarkCircleOutline /></span> We offer multiple services</Link></li>
                  <li className=''><Link to="/" className="hov text-color"><span className='icon-color me-2 fs-4'><IoMdCheckmarkCircleOutline /></span> Multiple car repair locations</Link></li>
                  <li className=''><Link to="/" className="hov text-color"><span className='icon-color me-2 fs-4'><IoMdCheckmarkCircleOutline /></span> Original products</Link></li>
                </ul>
              </div>
              <div className='mt-4'>
                <a href="/about-us" className="text-white fw-bold bn-btn">Read More <FaLongArrowAltRight /></a>
              </div>
            </div>
          </Row>
        </Container>
      </Container>


      {/* Serive CARD */}
      <Container fluid className='text-white mt-5'>
        <Container className="">
          <Row className=" py-5 gap-5 d-flex justify-content-center"><h2 className='text-dark text-center fw-bold border-bottom border-3 pb-2'>Services</h2>

            <Card style={{ width: '363px' }} className='p-0  box pos-rel '>
              <div className="card-icon rounded-circle"><RiServiceFill className='icon-color fs-2' /></div>
              <div className="img-box"><Card.Img variant="top" className='p-0' src="https://media.istockphoto.com/id/1200967807/photo/pouring-oil-to-car-engine.jpg?s=612x612&w=0&k=20&c=JefMe3XwYmnaZQ1He6I3ypzcFRPpub-8YFI3KK0EKKg=" /></div>
              <Card.Body>
                <div className='icon-color'><Card.Title className='mb-2 fw-bold text-uppercase manus-mar' >Oil Change</Card.Title></div>
                <p className='pt-1  mb-2 fs-18'>We use only the highest quality oils, specifically selected to optimize your engine's performance and longevity. Whether your vehicle requires conventional, synthetic, or synthetic blend oil, we've got you covered.</p>
                <Card.Text className='pt-1 f-color '>199$</Card.Text>
              </Card.Body>
            </Card>
            <Card style={{ width: '363px' }} className='p-0  box pos-rel '>
              <div className="card-icon rounded-circle"><RiServiceFill className='icon-color fs-2' /></div>
              <div className="img-box"><Card.Img variant="top" className='p-0' src="https://media.istockphoto.com/id/174942860/photo/tire-wash.jpg?s=612x612&w=0&k=20&c=IHqUkH8UZl1vyS02BAU5zbJ2xvE-_NMFwSXOgfr2jdI=" /></div>
              <Card.Body>
                <div className='icon-color'><Card.Title className='mb-2 fw-bold text-uppercase' >car wash</Card.Title></div>
                <p className='pt-1  mb-2 fs-18'>We believe in protecting both your car and the environment. That's why we use only the finest, eco-friendly cleaning products and techniques, ensuring a gentle yet effective clean that's safe for your vehicle and the planet.</p>
                <Card.Text className='pt-1 f-color '>99$</Card.Text>
              </Card.Body>
            </Card>
            <Card style={{ width: '363px' }} className='p-0  box pos-rel '>
              <div className="card-icon rounded-circle"><RiServiceFill className='icon-color fs-2' /></div>
              <div className="img-box"><Card.Img variant="top" className='p-0' src="https://media.istockphoto.com/id/1165665234/photo/car-maintenance-and-repair-mechanic-writing-checklist-paper-on-clipboard.jpg?s=612x612&w=0&k=20&c=yjR4V79WTKf6rO00v0ZqCzAoM8AZTdIlA4lP7T_dctg=" /></div>
              <Card.Body>
                <div className='icon-color'><Card.Title className='mb-2 fw-bold text-uppercase' >full service</Card.Title></div>
                <p className='pt-1  mb-2 fs-18'> We use only the highest quality parts and products, ensuring lasting performance and reliability.Our team of certified technicians has the skills and expertise to handle any automotive challenge, big or small.</p>
                <Card.Text className='pt-1 f-color '>499$</Card.Text>
              </Card.Body>
            </Card>

            <a href="/services" className="details p-3 text-center text-dark fs-5 fw-bold bt-width">More Details <FaArrowRightLong /></a>
          </Row>
        </Container>
      </Container>


      {/*   HOW WE WORK */}
      <Container fluid className='ptb bg-lite'>
        <Container>
          <Row>
            <div className='text-white text-center pb-5'>
              <h6 className='fs-14'>HOW WE WORK <PiArrowBendRightDownFill className='fs-3 mt-2 ms-1 icon-color' /></h6>
              <h1 className='fs-50'>Our Process</h1>
            </div>
          </Row>
          <Row>
            <div className="col-lg-3 col-md-6 col-12 p-lg-3 py-4">
              <div className="red-card ">
                <h1 className='mb-3'><BiSolidCarMechanic /></h1>
                <h2 className='mb-3 '>Book <br /> appointment</h2>
                <p className=''>Car lorem quisque sodales the varius vestibulum felis.</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-12 p-lg-3 py-4">
              <div className="box-card">
                <h1 className='mb-3'><FaCarSide className='icon-color' /></h1>
                <h2 className='mb-3 '>Bring your <br /> Vehicle</h2>
                <p className=''>Car lorem quisque sodales the varius vestibulum felis.</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-12 p-lg-3 py-4">
              <div className="box-card">
                <h1 className='mb-3'><MdCarCrash className='icon-color' /></h1>
                <h2 className='mb-3 '>Get the Vehicle Repaired</h2>
                <p className='fs-6'>Car lorem quisque sodales the varius vestibulum felis.</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-12 p-lg-3 py-4">
              <div className="box-card">
                <h1 className='mb-3'><PiCertificate className='icon-color' /></h1>
                <h2 className='mb-3 '>Ready for <br /> Deliver</h2>
                <p className=''>Car lorem quisque sodales the varius vestibulum felis.</p>
              </div>
            </div>
            <div className='mt-5 pt-3 text-center' >
              <a href="/Services" className="text-white fw-bold bn-btn">Book Now <FaLongArrowAltRight /></a>
            </div>
          </Row>
        </Container>
      </Container>

      {/* What Customers Say */}
      <Container fluid className='ptb bg-lite text-white'>
        <Container className=''>
          <Row>
            <div className='text-white text-center pb-5'>
              <h6 className='fs-14'>TESTIMONIALS <PiArrowBendRightDownFill className='fs-3 mt-2 ms-1 icon-color' /></h6>
              <h1 className='fs-50'>What<span className='icon-color'> Customers</span> Say </h1>
            </div>
          </Row>
          <Row>
            <div className="col-lg-6 col-12 position-relative ">
              <div className=''>
                <img className='w-100 position-relative' src="https://i.pinimg.com/564x/88/9f/b0/889fb03285a84c996f7aee1ec4f4fa10.jpg" alt="" />
              </div>
            </div>
            <div className="col-lg-6 col-12 p-5">
              {/* <h6 className=' ps-2 fs-14'>TESTIMONIALS <PiArrowBendRightDownFill className='fs-3 mt-2 ms-1 icon-color' /></h6> */}
              <h1 className='fs-40'><span className='icon-color'> Terrific</span> auto repair shop!</h1>
              <p className='line-word text-color'>Car repair quisque sodales dui ut varius vestibulum drana tortor turpis porttiton tellus eu euismod nisl massa ut odio in the miss volume placerat urna, a lacinia eros nunta urna mauris, vehicula rutrum tempus in the interdum felis.</p>
              <div className='mt-4'>
                <a href="/" className="text-white fw-bold bn-btn">Read More <FaLongArrowAltRight /></a>
              </div>
              <div className='d-flex mt-4 align-items-center '>
                <img width="10%" className='rounded-circle ' src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" alt="" />
                <div className='ms-3'>
                  <h6 className='mb-0 mt-3 icon-color'>Customer Name</h6>
                  <p className='text-color'>Customer</p>
                </div>

              </div>
            </div>
          </Row>
        </Container>
      </Container>
    </div>
  )
}

export default Home
