import { useState } from "react";
import { Button, CloseButton, Modal } from "react-bootstrap";
import { AiTwotoneCheckCircle } from "react-icons/ai";
import { AiTwotoneCheckSquare } from "react-icons/ai";
import { TbTriangleInvertedFilled } from "react-icons/tb";
import CreateAccount from "../SignUp/CreateAccount";
import SignIn from "../SignIn/SignIn";

const NavTop = () => {
    const [signIn, setSignIn] = useState(false);
    const [signUp, setSignUp] = useState(false);
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    return (
        <>
            <div className='position-absolute me-4 top-0 end-0 '>
                <AiTwotoneCheckSquare className='me-3' />

                <AiTwotoneCheckCircle
                    onClick={() => setSignIn(!signIn)}
                    className='me-3'></AiTwotoneCheckCircle>
                < TbTriangleInvertedFilled
                  onClick={() => setSignUp(!signIn)}
                 ></TbTriangleInvertedFilled>
            </div>

            {/* modal sign in*/}
            <Modal
                size="lg"
                centered={true}
                show={signIn}
                onHide={() => setSignIn(false)}
            >

                <Modal.Body className='p-0 position-relative'>
                    <div className='position-absolute modal-close bg-light rounded-circle p-1'>
                        < CloseButton
                            onClick={() => setSignIn(false)}
                        ></CloseButton>
                    </div>
                    <SignIn
                        setSignIn={setSignIn}
                        setSignUp={setSignUp} />
                </Modal.Body>
            </Modal>

        

             {/* modal sign up*/}
             <Modal
                size="lg"
                centered={true}
                show={signUp}
                onHide={() => setSignUp(false)}
            >

                <Modal.Body className='p-0 position-relative'>
                    <div className='position-absolute modal-close-account bg-light rounded-circle p-1'>
                        < CloseButton
                            onClick={() => setSignUp(false)}
                        ></CloseButton>
                    </div>
                    <CreateAccount
                        setSignIn={setSignIn}
                        setSignUp={setSignUp} />
                </Modal.Body>
            </Modal>
        </>
    );
};

export default NavTop;