import { Button, Card, Dropdown } from 'react-bootstrap';
import img1 from '../../../assets/image/Rectangle6.png'
import icon2 from '../../../assets/image/icon3.png'
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { BiSolidShareAlt } from "react-icons/bi";
import { AiOutlineEye } from "react-icons/ai";


const EducationCard = () => {
    return (
        <Card className='article-card my-5'>
            <Card.Img variant="top" src={img1} />

            <Card.Body>
                <p className='mt-2'>🔬️ Education</p>
                <div className='d-flex justify-content-between align-items-start'>
                    <h4 className='cardTitle'>Tax Benefits for Investment under National Pension Scheme launched by Government</h4>

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
                <p className='card-description'>
                    I’ve worked in UX for the better part of a decade. From now on, I plan to rei…
                </p>


                <div className='d-none d-lg-block'>
                    <div className='d-flex align-items-center justify-content-between'>
                        <div className='d-flex align-items-center justify-content-center gap-2'>
                            <img src={icon2} alt="" />
                            <h5 className='card-author-title'>Sarah West</h5>
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
                    <div className='d-flex align-items-center justify-content-center gap-3'>
                        <img src={icon2} alt="" className='card-author-image' />
                        <div>
                            <p className='card-author-title'>Sarah West</p>
                            <p className='views'><AiOutlineEye /> 4.8k views</p>
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

export default EducationCard;