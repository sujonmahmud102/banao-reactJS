import { useState } from "react";
import { Button } from "react-bootstrap";
import { AiOutlineArrowLeft } from "react-icons/ai";


const Banner = () => {
    const [join, setJoin] = useState(false);

    return (
        <div className='bg-image position-relative'>
            <div className="d-lg-none text-white fs-3 p-3 d-flex align-items-center justify-content-between">
                <AiOutlineArrowLeft />
                <Button onClick={() => setJoin(!join)} variant="outline-secondary text-white border">{join ? 'Leave Group' : 'Join Group'} </Button>
            </div>
            <div className='banner-text position-absolute'>
                <h1 className='text-white'>Computer Engineering</h1>
                <p className='text-white'>142,765 Computer Engineers follow this</p>
            </div>

        </div>
    );
};

export default Banner;