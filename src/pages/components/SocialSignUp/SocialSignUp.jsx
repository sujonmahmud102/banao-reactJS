import fb from '../../../assets/image/fb-logo.png'
import google from '../../../assets/image/google-logo.png'
import { Button } from 'react-bootstrap';

const SocialSignUp = ({ textFb, textGoogle }) => {
    return (
        <div className='d-flex flex-column gap-3 mt-3'>
            <Button variant='light' className='d-flex align-items-center justify-content-center gap-3'><img src={fb} alt="" /> <span>{textFb} </span></Button>

            <Button variant='light' className='d-flex align-items-center justify-content-center gap-3'><img src={google} alt="" /> <span>{textGoogle}</span></Button>
        </div>
    );
};

export default SocialSignUp;