
import { Button, FloatingLabel, Form } from 'react-bootstrap';

const SignInForm = () => {
    return (
        <div>
            <Form className=''>
                <div className=''>


                    <FloatingLabel controlId="floatingPassword" label="Email">
                        <Form.Control type="email" placeholder="Email"
                            className='bg-body-tertiary' />
                    </FloatingLabel>
                    {/* password */}
                    <FloatingLabel controlId="floatingPassword" label="Password">
                        <Form.Control type="password" placeholder="Password"
                            className='bg-body-tertiary' />
                    </FloatingLabel>

                </div>
                <Button className='d-none d-lg-block rounded-5 mt-3 w-100 py-2 fw-semibold' variant="primary" type="submit">
                    Sign In
                </Button>

                {/* responsive */}
                <div className='d-flex d-lg-none align-items-center justify-content-between'>
                    <Button className='rounded-5 mt-3 px-3 w-lg-100 fw-semibold' variant="primary" type="submit">
                        Sign In
                        {/* responsive */}

                    </Button>
                    <div className='d-lg-none d-flex align-items-center mt-3'> <Button

                        variant='link fw-semibold text-body-secondary'>or, Create Account</Button>
                    </div>
                </div>
            </Form>
        </div>
    );
};

export default SignInForm;