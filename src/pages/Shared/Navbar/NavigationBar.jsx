import { Button, ButtonGroup, CloseButton, Container, Dropdown, Form, Image, Modal, Navbar } from 'react-bootstrap';
import { AiOutlineSearch } from "react-icons/ai";
import webName from '../../../assets/image/whole.png'
import icon from '../../../assets/image/icon2.png'
import { IoMdArrowDropdown } from 'react-icons/io';
import { useState } from 'react';
import CreateAccount from '../../components/SignUp/CreateAccount';
import SignIn from '../../components/SignIn/SignIn';
import { Link } from 'react-router-dom';
import NavTop from '../../components/NavTop/NavTop';



const NavigationBar = ({ user }) => {
    const [signIn, setSignIn] = useState(false);
    const [signUp, setSignUp] = useState(false);


    return (
        <Navbar expand="lg" className="border-bottom position-relative">
            <div className='d-lg-none my-2'>
                <NavTop />
            </div>

            <Container fluid className='d-flex justify-content-between align-items-center mx-5'>
                <Navbar.Brand href="#" className='d-none d-lg-block'>
                    <Link to='/' className='text-black text-decoration-none'>
                        <img src={webName} alt="" />
                    </Link>
                </Navbar.Brand>

                <Form className="w-25 position-relative d-none d-lg-block">
                    <Form.Control
                        type="search"
                        placeholder="Search for your favorite groups in ATG"
                        className="ps-5 rounded-4 shadow bg-secondary-subtle"
                        aria-label="Search"
                    />
                    <div className='position-absolute search-icon'>
                        <AiOutlineSearch />
                    </div>
                </Form>

                <div className='d-none d-lg-block'>
                    {user ?
                        <Dropdown as={ButtonGroup}>
                            <Image src={icon} roundedCircle />
                            <Button variant="" size="sm" className='ms-2 rounded-2'>Siddharth Goyal <IoMdArrowDropdown /></Button>

                        </Dropdown> :
                        <Dropdown align="end">
                            <Dropdown.Toggle
                                variant=""
                                id="dropdown-basic">
                                Create account.
                                <span className='text-primary'>It’s free!</span> <IoMdArrowDropdown />
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item onClick={() => setSignIn(!signIn)}>Sign In</Dropdown.Item>

                                <Dropdown.Item onClick={() => setSignUp(!signUp)}>Sign Up</Dropdown.Item>

                                <Dropdown.Item >
                                    <Link to='/logged-in' className='text-black text-decoration-none'>Logged In</Link>
                                </Dropdown.Item>

                            </Dropdown.Menu>
                        </Dropdown>
                    }

                </div>
            </Container>

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
                    <div className='position-absolute modal-close bg-light rounded-circle p-1'>
                        < CloseButton
                            onClick={() => setSignUp(false)}
                        ></CloseButton>
                    </div>
                    <CreateAccount
                        setSignIn={setSignIn}
                        setSignUp={setSignUp} />
                </Modal.Body>
            </Modal>
        </Navbar>
    );
};

export default NavigationBar;