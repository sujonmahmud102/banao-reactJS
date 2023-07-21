import { Button, Card, Dropdown } from 'react-bootstrap';
import img1 from '../../../assets/image/Rectangle 5.png'
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
                <div className='d-flex justify-content-between align-items-center'>
                    <h3 className='card-title w-lg-75'>Tax Benefits for Investment under National Pension Scheme launched by Government</h3>

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
                <Card.Text>
                    I’ve worked in UX for the better part of a decade. From now on, I plan to rei…
                </Card.Text>


                <div className='d-none d-lg-block'>
                    <div className='d-flex align-items-center justify-content-between'>
                        <div className='d-flex align-items-center justify-content-center gap-2'>
                            <img src={icon2} alt="" />
                            <h5 className='mt-3 w-100'>Sarah West</h5>
                        </div>

                        <div className='d-flex gap-2'>
                            <p><AiOutlineEye /> 1.4k views <Button variant="light" className='light ms-3'><BiSolidShareAlt /></Button></p>
                        </div>
                    </div>
                </div>

                {/* responsive */}
                <div className='d-lg-none d-flex align-items-center justify-content-between'>
                    <div className='d-flex align-items-center justify-content-center gap-2'>
                        <img src={icon2} alt="" className='card-author-image' />
                        <div>
                            <p className='card-author-title'>Sarah West</p>
                            <p className='views'><AiOutlineEye /> 4.8 views</p>
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