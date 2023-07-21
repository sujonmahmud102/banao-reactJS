import img from '../../../assets/image/Group 3.png';
import SocialSignUp from '../SocialSignUp/SocialSignUp';
import { Button, Container } from 'react-bootstrap';
import SignInForm from './SignInForm';

const SignIn = ({ setSignIn, setSignUp }) => {
    const handleButtonClick = () => {
        setSignIn(false);
        setSignUp(true);
    };


    return (
        <div className=' mx-auto border rounded-3 overflow-hidden'>
            <div className='d-none d-lg-block bg-secondary-subtle text-center'>
                <p className='text-success fw-semibold m-0 p-3'>
                    Let`s learn, share & inspire each other with our passion for computer engineering. Sign up now 🤘🏼
                </p>
            </div>

            <Container className='p-3 p-lg-5'>
                <div className='d-flex justify-content-between mb-4'>
                    <h2>Sign In</h2>
                    <div className='d-none d-lg-block d-flex align-items-center '><span>Don’t have an account yet? </span> <Button
                        onClick={handleButtonClick}
                        variant='link text-decoration-none fw-semibold'>Create new for free!</Button>
                    </div>
                </div>

                <div className='d-flex justify-content-between'>
                    {/* form */}
                    <div className='w-100 w-lg-50 '>
                        <SignInForm />
                        <SocialSignUp
                            textFb='Sign in with Facebook'
                            textGoogle='Sign in with Google' />
                        <div className='text-center'>
                            <Button variant='light' className=' my-3 w-100'>Forgto Password?</Button>
                        </div>
                    </div>

                    {/* image */}
                    <div className='d-none d-lg-block w-50'>
                        <img src={img} alt="" />
                        <p className='text-black-50 text-center '>By signing up, you agree to our Terms & conditions, Privacy policy</p>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default SignIn;