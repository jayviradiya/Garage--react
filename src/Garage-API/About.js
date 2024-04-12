import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

import IMG7 from '../Garage-API/Img/IMG7.jpg'
import { Container, Row } from 'react-bootstrap';
import { FaLongArrowAltRight } from "react-icons/fa";
import { PiArrowBendRightDownFill } from "react-icons/pi";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { BiSolidCarMechanic } from "react-icons/bi";
import { FaCarSide } from "react-icons/fa";
import { MdCarCrash } from "react-icons/md";
import { PiCertificate } from "react-icons/pi";



const About = () => {
    return (
        <div>

            {/* Main Img */}
            <Container fluid className='mt-4'>
                <Row>
                    <div className="black-box bg-7 p-5 text-white d-flex align-items-center">
                        <div className='bg-box'>
                            <h6 className='fw-bold'>WELCOME TO <PiArrowBendRightDownFill className='fs-sm-3 fs-5 mt-2 ms-1 icon-color' /></h6>
                            <h1>Auto<span className='icon-color'>Care</span> Car <br></br> Service & Repair</h1>
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

        </div>
    )
}

export default About