import { Button, Image } from 'react-bootstrap';
import { BiSolidLike } from 'react-icons/bi';
import leisure from '../../../assets/image/Recommended grp/leisure.png'
import activism from '../../../assets/image/Recommended grp/activism.png'
import mba from '../../../assets/image/Recommended grp/mba.png'
import philosophy from '../../../assets/image/Recommended grp/philosophy.png'
import { useState } from 'react';
import { useLocation } from 'react-router-dom';



const RecommendGroup = ({ user }) => {
    const [clicked, setClicked] = useState(false);
    const location = useLocation();

    const handleClick = () => {
        setClicked(!clicked);
    }

    return (
        <>
            {(user && location.pathname === '/logged-in') &&
                (
                    <div className='my-5'>
                        <h5 className='text-uppercase'><BiSolidLike /> Recommended Groups</h5>

                        <div className='d-flex align-items-center justify-content-between my-3'>
                            <div className='d-flex align-items-center'>
                                <Image src={leisure} roundedCircle />
                                <p className='ms-2 mt-3'>Leisure</p>
                            </div>

                            <Button onClick={handleClick} variant={`${clicked ? 'light' : 'dark'}`} size="sm" className='border rounded-5 px-3'>{`${clicked ? 'Follow' : 'Followed'}`} </Button>
                        </div>

                        <div className='d-flex align-items-center justify-content-between my-3'>
                            <div className='d-flex align-items-center'>
                                <Image src={activism} roundedCircle />
                                <p className='ms-2 mt-3'>Activism</p>
                            </div>

                            <Button variant="light" size="sm" className='border rounded-5 px-3'>Follow </Button>
                        </div>

                        <div className='d-flex align-items-center justify-content-between my-3'>
                            <div className='d-flex align-items-center'>
                                <Image src={mba} roundedCircle />
                                <p className='ms-2 mt-3'>MBA</p>
                            </div>

                            <Button variant="light" size="sm" className='border rounded-5 px-3'>Follow </Button>
                        </div>

                        <div className='d-flex align-items-center justify-content-between my-3'>
                            <div className='d-flex align-items-center'>
                                <Image src={philosophy} roundedCircle />
                                <p className='ms-2 mt-3'>Philosophy</p>
                            </div>

                            <Button variant="light" size="sm" className='border rounded-5 px-3'>Follow </Button>
                        </div>

                        <div className='text-end'>
                            <Button variant="link" className='text-decoration-none'>See More...</Button>
                        </div>
                    </div>
                )
            }
        </>
    );
};

export default RecommendGroup;