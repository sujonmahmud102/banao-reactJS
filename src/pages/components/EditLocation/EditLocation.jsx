import { Button, Form, InputGroup } from "react-bootstrap";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import { CiLocationOn } from "react-icons/ci";
import { MdEdit } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import { useLocation } from "react-router-dom";


const EditLocation = ({ user }) => {
    const location = useLocation();

    return (
        <div>
            <div className="">
                <div className='d-flex align-items-center justify-content-between border-bottom pb-1'>
                    {
                        (user && location.pathname === '/logged-in') ?
                            <>
                                <span><CiLocationOn /></span>

                                <InputGroup className="ms-1">
                                    <Form.Control
                                        placeholder="|Enter your location"
                                        aria-label="Username"
                                        aria-describedby="basic-addon1"
                                        className="border border-0 w-25"
                                    />
                                </InputGroup>

                                <Button variant="light"><RxCross2 /> </Button>
                            </> :
                            <>
                                <span><CiLocationOn /> Noida, India</span>
                                <Button variant="light"><MdEdit /> </Button>
                            </>
                    }

                </div>

            </div>
            <div className="mt-5 d-flex justify-content-center gap-3 mx-2">
                <span><AiOutlineExclamationCircle /> </span>
                <p>
                    Your location will help us serve better and extend a personalised experience.
                </p>
            </div>
        </div>
    );
};

export default EditLocation;