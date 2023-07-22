import { Button, Card, Dropdown } from 'react-bootstrap';
import icon4 from '../../../assets/image/icon2.png'
import { BiDotsHorizontalRounded, BiShoppingBag } from "react-icons/bi";
import { BiSolidShareAlt } from "react-icons/bi";
import { AiOutlineEye } from "react-icons/ai";
import { CiLocationOn } from "react-icons/ci";

const JobCard = () => {
    return (
        <Card className='article-card my-5'>
            <Card.Body>
                <p className='mt-2'>💼️ Job</p>
                <div className='d-flex justify-content-between align-items-start'>
                    <h3 className='cardTitle'>Software Developer</h3>


                    <Dropdown align="end">
                        <Dropdown.Toggle variant="light" id="dropdown-basic">
                            <BiDotsHorizontalRounded />
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">Edit</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Report</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Option 3</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>

                </div>
                <div>
                    <div className='date-location-container'>
                        <p><BiShoppingBag /> Innovaccer Analytics Private Ltd.
                        </p>
                        <p className='ms-lg-5'><CiLocationOn /> Noida, India</p>
                    </div>
                    <Button variant="outline-success w-100 mt-2 mb-4">Apply on Timesjobs</Button>
                </div>

                <div className='d-none d-lg-block'>
                    <div className='d-flex align-items-center justify-content-between'>
                        <div className='d-flex align-items-center justify-content-center gap-2'>
                            <img src={icon4} alt="" />
                            <h5 className='card-author-title'>Joseph Gray</h5>
                        </div>

                        <div className='d-flex align-items-center justify-content-center gap-2'>
                            <p className='views'>
                                <AiOutlineEye /> 1.4k views <Button variant="light" className='light ms-3'><BiSolidShareAlt /></Button>
                            </p>
                        </div>
                    </div>
                </div>

                {/* responsive */}
                <div className='d-lg-none d-flex align-items-center justify-content-between'>
                    <div className='d-flex align-items-center justify-content-center gap-2'>
                        <img src={icon4} alt="" className='card-author-image' />
                        <div>
                            <p className='card-author-title'>Joseph Gray</p>
                            <p className='views'><AiOutlineEye /> 800 views</p>
                        </div>

                    </div>
                    <div className=''>
                        <p> <Button variant="light" className='light ms-3'><BiSolidShareAlt /> Share</Button></p>
                    </div>
                </div>
            </Card.Body>
        </Card>
    );
};

export default JobCard;