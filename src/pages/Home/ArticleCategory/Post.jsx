import { Button } from "react-bootstrap";
import { MdOutlineGroupAdd } from "react-icons/md";
import { IoMdArrowDropdown } from "react-icons/io";
import { BsBoxArrowRight } from "react-icons/bs";
import { useLocation } from "react-router-dom";


const Post = ({ user }) => {
    const location = useLocation();
    // console.log(location.pathname)

    return (
        <div className="d-flex">
            <Button variant="light">Write a Post <IoMdArrowDropdown /></Button>

            {(user && location.pathname === '/logged-in') ?
                <Button variant="light ms-3 d-flex justify-content-center align-items-center gap-2 "><BsBoxArrowRight />  <span>Leave Group</span></Button> :
                <Button variant="primary ms-3 d-flex justify-content-center align-items-center gap-2 "><MdOutlineGroupAdd />  <span>Join Group</span></Button>
            }

        </div>
    );
};

export default Post;