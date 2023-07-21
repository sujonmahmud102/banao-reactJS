
import { Button, FloatingLabel, Form, InputGroup } from 'react-bootstrap';

const SignUpForm = () => {
    return (
        <div>
            <Form className=''>
                <div className=''>
                    <InputGroup className="">
                        {/* first name */}
                        <FloatingLabel
                            controlId="floatingInput"
                            label="First Name"
                            className="bg-secondary-subtle"
                        >
                            <Form.Control type="text" placeholder="First Name"
                                className='bg-body-tertiary' />
                        </FloatingLabel>

                        {/* last naem */}
                        <FloatingLabel
                            controlId="floatingInput"
                            label="Last Name"
                            className=""
                        >
                            <Form.Control type="text" placeholder="Last Name"
                                className='bg-body-tertiary' />
                        </FloatingLabel>
                    </InputGroup>

                    <FloatingLabel controlId="floatingPassword" label="Email">
                        <Form.Control type="email" placeholder="Email"
                            className='bg-body-tertiary' />
                    </FloatingLabel>
                    {/* password */}
                    <FloatingLabel controlId="floatingPassword" label="Password">
                        <Form.Control type="password" placeholder="Password"
                            className='bg-body-tertiary' />
                    </FloatingLabel>
                    {/* confirm pass */}
                    <FloatingLabel controlId="floatingPassword" label="Confirm Password">
                        <Form.Control type="password" placeholder="Password" className='bg-body-tertiary' />
                    </FloatingLabel>
                </div>

                <Button className='d-none d-lg-block rounded-5 mt-3 w-100 py-2 fw-semibold' variant="primary" type="submit">
                Create Account
                </Button>

                {/* responsive */}
                <div className='d-flex d-lg-none align-items-center justify-content-between'>
                    <Button className='rounded-5 mt-3 w-50 w-lg-100 py-2 fw-semibold' variant="primary" type="submit">
                        Create Account
                        {/* responsive */}

                    </Button>
                    <div className='d-lg-none d-flex align-items-center mt-3'> <Button

                        variant='link fw-semibold text-body-secondary'>or, Sign In</Button>
                    </div>
                </div>
            </Form>
        </div>
    );
};

export default SignUpForm;