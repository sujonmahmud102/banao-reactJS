import img from '../../../assets/image/Group 3.png';
import SocialSignUp from '../SocialSignUp/SocialSignUp';
import SignUpForm from '../SignUpForm/SignUpForm';
import { Button, Container } from 'react-bootstrap';

const CreateAccount = ({ setSignIn, setSignUp }) => {
  const handleButtonClick = () => {
    setSignIn(true);
    setSignUp(false);
  };

  return (
    <div className='mx-auto border rounded-3 overflow-hidden'>
      <div className='bg-secondary-subtle text-center'>
        <p className='d-none d-lg-block text-success fw-semibold m-0 p-3'>
          Let's learn, share & inspire each other with our passion for computer engineering. Sign up now 🤘🏼
        </p>
      </div>

      <Container className='p-3 p-lg-5'>
        <div className='d-flex justify-content-between mb-4'>
          <h2>Create Account</h2>

          <div className='d-none d-lg-block d-lg-flex align-items-center '><span>Already have an account?</span> <Button
            onClick={handleButtonClick}
            variant='link text-decoration-none fw-semibold'>Sign In</Button>
          </div>
          
        </div>

        <div className='d-flex justify-content-between'>
          {/* form */}
          <div className='w-100 w-lg-50'>
            <SignUpForm />
            <SocialSignUp
              textFb='Sign up with Facebook'
              textGoogle='Sign up with Google' />
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

export default CreateAccount;